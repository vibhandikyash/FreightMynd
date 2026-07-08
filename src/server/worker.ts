/**
 * Cloudflare Worker entry point (Workers Static Assets).
 *
 * Architecture:
 *  - Astro builds the static site to `cargoiq/dist/`.
 *  - Wrangler binds that dir as `env.ASSETS` (see wrangler.toml [assets]).
 *  - This Worker routes /api/* to the handlers in `functions/api/*`.
 *  - Everything else falls through to `env.ASSETS.fetch(request)` so the
 *    static HTML/CSS/JS is served directly.
 *
 * The handlers themselves live under `functions/` for historical reasons
 * (they used to be Pages Functions). Their logic is unchanged; only the
 * export signature was refactored from PagesFunction to plain async fns.
 */

import { handleChatOptions, handleChatPost, type ChatEnv } from '../../functions/api/chat';
import { handleContactOptions, handleContactPost, type ContactEnv } from '../../functions/api/contact';
import { handleConversationGet, type ConversationEnv } from '../../functions/api/conversation/[id]';

export interface Env extends ChatEnv, ContactEnv, ConversationEnv {
  ASSETS: Fetcher;
  ENVIRONMENT?: string;
}

const json = (data: unknown, init: ResponseInit = {}) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init.headers || {}) },
  });

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (path === '/api/chat') {
      if (method === 'POST') return handleChatPost(request, env, ctx);
      if (method === 'OPTIONS') return handleChatOptions(request);
      return json({ error: 'Method not allowed' }, { status: 405 });
    }

    if (path === '/api/contact') {
      if (method === 'POST') return handleContactPost(request, env);
      if (method === 'OPTIONS') return handleContactOptions(request);
      return json({ error: 'Method not allowed' }, { status: 405 });
    }

    if (path.startsWith('/api/conversation/')) {
      if (method === 'GET') {
        const id = path.slice('/api/conversation/'.length).replace(/\/$/, '');
        return handleConversationGet(request, env, id);
      }
      return json({ error: 'Method not allowed' }, { status: 405 });
    }

    // Permanent trailing-slash redirect. The built-in Static Assets redirect is a
    // 307 (temporary), so Google indexes both URL variants and splits their signals;
    // GSC shows non-slash duplicates collecting their own impressions.
    if (
      (method === 'GET' || method === 'HEAD') &&
      !path.startsWith('/api') &&
      !path.endsWith('/') &&
      !path.includes('.')
    ) {
      url.pathname = `${path}/`;
      return Response.redirect(url.toString(), 301);
    }

    // Anything else: static asset (Astro HTML, CSS, JS, images, etc.)
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
