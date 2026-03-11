/**
 * POST /api/chat
 * Main chat endpoint — streams Claude Haiku responses back to the client.
 */

import { SYSTEM_PROMPT } from '../lib/system-prompt';
import { checkRateLimit } from '../lib/rate-limiter';

interface Env {
  ANTHROPIC_API_KEY: string;
  SMTP_FUNCTION_URL: string;
  CHAT_SESSIONS: KVNamespace;
  CHAT_LEADS: KVNamespace;
}

interface ChatRequest {
  sessionId?: string;
  message: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Session {
  id: string;
  messages: Message[];
  createdAt: number;
}

function generateId(): string {
  return crypto.randomUUID();
}

function corsHeaders(origin: string): Record<string, string> {
  const allowed = ['https://cargoiq.ai', 'https://cargoiq.pages.dev', 'http://localhost:4321', 'http://localhost:8788'];
  const allowOrigin = allowed.includes(origin) ? origin : allowed[0];
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

export const onRequestOptions: PagesFunction<Env> = async (context) => {
  const origin = context.request.headers.get('Origin') || '';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin') || '';
  const headers = corsHeaders(origin);

  try {
    // Parse and validate request
    const body = (await request.json()) as ChatRequest;

    if (!body.message || typeof body.message !== 'string') {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    if (body.message.length > 2000) {
      return new Response(JSON.stringify({ error: 'Message too long (max 2000 chars)' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    // Session management
    const sessionId = body.sessionId || generateId();
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

    // Rate limiting
    const rateLimit = await checkRateLimit(env.CHAT_SESSIONS, sessionId, ip);
    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded. Please try again later.',
          retryAfter: rateLimit.retryAfter,
        }),
        {
          status: 429,
          headers: {
            ...headers,
            'Content-Type': 'application/json',
            'Retry-After': String(rateLimit.retryAfter || 60),
          },
        }
      );
    }

    // Load or create session
    const sessionKey = `session:${sessionId}`;
    let session: Session;
    const existingSession = await env.CHAT_SESSIONS.get<Session>(sessionKey, 'json');

    if (existingSession) {
      session = existingSession;
    } else {
      session = { id: sessionId, messages: [], createdAt: Date.now() };
    }

    // Append user message
    session.messages.push({ role: 'user', content: body.message });

    // Keep conversation history manageable (last 20 messages)
    const conversationMessages = session.messages.slice(-20);

    // Call Anthropic Messages API with streaming
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: conversationMessages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        stream: true,
      }),
    });

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      console.error('Anthropic API error:', anthropicResponse.status, errorText);
      return new Response(
        JSON.stringify({
          error: 'AI service unavailable',
          status: anthropicResponse.status,
          detail: errorText,
        }),
        {
          status: 502,
          headers: { ...headers, 'Content-Type': 'application/json' },
        }
      );
    }

    // Stream the response back to the client
    let fullResponse = '';
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();

    // Send sessionId as first chunk
    writer.write(encoder.encode(`data: ${JSON.stringify({ type: 'session', sessionId })}\n\n`));

    // Process the SSE stream from Anthropic
    const reader = anthropicResponse.body!.getReader();

    const processStream = async () => {
      let buffer = '';
      let leadStarted = false;

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const data = line.slice(6).trim();
            if (data === '[DONE]') continue;

            try {
              const event = JSON.parse(data);

              if (event.type === 'content_block_delta' && event.delta?.text) {
                const text = event.delta.text;
                fullResponse += text;

                // Detect start of LEAD marker and stop forwarding from that point
                if (!leadStarted) {
                  const markerIdx = text.indexOf('<!--LEAD:');
                  if (markerIdx !== -1) {
                    leadStarted = true;
                    // Forward text before the marker
                    const before = text.slice(0, markerIdx);
                    if (before) {
                      await writer.write(
                        encoder.encode(`data: ${JSON.stringify({ type: 'delta', text: before })}\n\n`)
                      );
                    }
                  } else {
                    // Check for partial marker start at end of chunk (e.g. "<!-")
                    const partialCheck = '<!--LEAD:';
                    let safeEnd = text.length;
                    for (let i = 1; i < partialCheck.length; i++) {
                      if (text.endsWith(partialCheck.slice(0, i))) {
                        safeEnd = text.length - i;
                        break;
                      }
                    }
                    const safeText = text.slice(0, safeEnd);
                    if (safeText) {
                      await writer.write(
                        encoder.encode(`data: ${JSON.stringify({ type: 'delta', text: safeText })}\n\n`)
                      );
                    }
                  }
                }
                // If leadStarted, skip forwarding (it's LEAD JSON data)

                // Detect end of LEAD marker
                if (leadStarted && fullResponse.includes('-->')) {
                  // Forward any text after the closing marker
                  const afterMarker = fullResponse.split('-->').pop() || '';
                  if (afterMarker.trim()) {
                    await writer.write(
                      encoder.encode(`data: ${JSON.stringify({ type: 'delta', text: afterMarker })}\n\n`)
                    );
                  }
                  leadStarted = false;
                }
              }

              if (event.type === 'message_stop') {
                await writer.write(
                  encoder.encode(`data: ${JSON.stringify({ type: 'done' })}\n\n`)
                );
              }
            } catch {
              // Skip malformed JSON lines
            }
          }
        }
      } catch (err) {
        console.error('Stream processing error:', err);
      } finally {
        // Save session with assistant response (strip LEAD marker for storage)
        const cleanResponse = fullResponse.replace(/<!--LEAD:\{.*?\}-->/, '').trim();
        session.messages.push({ role: 'assistant', content: cleanResponse });
        await env.CHAT_SESSIONS.put(sessionKey, JSON.stringify(session), {
          expirationTtl: 86400, // 24h
        });

        // Check for lead marker and process
        const leadMatch = fullResponse.match(/<!--LEAD:(\{.*?\})-->/);
        if (leadMatch) {
          try {
            const leadData = JSON.parse(leadMatch[1]);
            const leadPayload = {
              ...leadData,
              sessionId,
              capturedAt: new Date().toISOString(),
              transcript: session.messages,
            };

            // Store lead in KV
            await env.CHAT_LEADS.put(
              `lead:${sessionId}`,
              JSON.stringify(leadPayload),
              { expirationTtl: 2592000 } // 30 days
            );

            // Send lead email via SMTP function
            if (env.SMTP_FUNCTION_URL) {
              fetch(env.SMTP_FUNCTION_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(leadPayload),
              }).catch((err) => console.error('SMTP function error:', err));
            }
          } catch (err) {
            console.error('Lead parsing error:', err);
          }
        }

        await writer.close();
      }
    };

    // Don't await — let it run while streaming
    context.waitUntil(processStream());

    return new Response(readable, {
      headers: {
        ...headers,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    console.error('Chat endpoint error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }
};
