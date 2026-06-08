/**
 * GET /api/conversation/:id
 * Protected endpoint for sales team to retrieve conversation transcripts.
 * Refactored from Pages Function to Workers handler. Routing in src/worker.ts.
 * (Filename keeps [id] convention for git history; id is now passed by the router.)
 */

export interface ConversationEnv {
  ADMIN_TOKEN: string;
  CHAT_SESSIONS: KVNamespace;
  CHAT_LEADS: KVNamespace;
}

export async function handleConversationGet(
  request: Request,
  env: ConversationEnv,
  id: string,
): Promise<Response> {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== `Bearer ${env.ADMIN_TOKEN}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!id) {
    return new Response(JSON.stringify({ error: 'Conversation ID required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const [session, lead] = await Promise.all([
    env.CHAT_SESSIONS.get(`session:${id}`, 'json'),
    env.CHAT_LEADS.get(`lead:${id}`, 'json'),
  ]);

  if (!session) {
    return new Response(JSON.stringify({ error: 'Conversation not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(
    JSON.stringify({
      conversation: session,
      lead: lead || null,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
