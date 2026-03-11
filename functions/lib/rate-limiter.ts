/**
 * IP-based and session-based rate limiting using Cloudflare KV.
 */

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter?: number;
}

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const SESSION_MSG_LIMIT = 30;
const IP_HOURLY_LIMIT = 60;
const HOUR_MS = 60 * 60 * 1000;

export async function checkRateLimit(
  kv: KVNamespace,
  sessionId: string,
  ip: string
): Promise<RateLimitResult> {
  const now = Date.now();

  // Check session message count
  const sessionKey = `ratelimit:session:${sessionId}`;
  const sessionData = await kv.get<RateLimitEntry>(sessionKey, 'json');

  if (sessionData && sessionData.count >= SESSION_MSG_LIMIT) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: 3600,
    };
  }

  // Check IP hourly limit
  const ipKey = `ratelimit:ip:${ip}`;
  const ipData = await kv.get<RateLimitEntry>(ipKey, 'json');

  if (ipData) {
    const elapsed = now - ipData.windowStart;
    if (elapsed < HOUR_MS && ipData.count >= IP_HOURLY_LIMIT) {
      return {
        allowed: false,
        remaining: 0,
        retryAfter: Math.ceil((HOUR_MS - elapsed) / 1000),
      };
    }
  }

  // Increment session counter
  const newSessionCount = (sessionData?.count ?? 0) + 1;
  await kv.put(
    sessionKey,
    JSON.stringify({ count: newSessionCount, windowStart: sessionData?.windowStart ?? now }),
    { expirationTtl: 86400 } // 24h
  );

  // Increment IP counter (reset if window expired)
  const ipWindowStart =
    ipData && now - ipData.windowStart < HOUR_MS ? ipData.windowStart : now;
  const newIpCount =
    ipData && now - ipData.windowStart < HOUR_MS ? ipData.count + 1 : 1;
  await kv.put(
    ipKey,
    JSON.stringify({ count: newIpCount, windowStart: ipWindowStart }),
    { expirationTtl: 3600 } // 1h
  );

  return {
    allowed: true,
    remaining: Math.min(SESSION_MSG_LIMIT - newSessionCount, IP_HOURLY_LIMIT - newIpCount),
  };
}
