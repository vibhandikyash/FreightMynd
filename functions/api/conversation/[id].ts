/**
 * GET /api/conversation/:id
 * Protected endpoint for sales team to retrieve conversation transcripts.
 */

interface Env {
  ADMIN_TOKEN: string;
  CHAT_SESSIONS: KVNamespace;
  CHAT_LEADS: KVNamespace;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env, params } = context;
  const id = params.id as string;

  // Auth check
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

  // Fetch session and lead data
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
    }
  );
};
