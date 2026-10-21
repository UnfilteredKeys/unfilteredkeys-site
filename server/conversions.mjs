import { createHmac, randomUUID } from 'node:crypto';
import { databaseCall } from './conversion-store.mjs';

export const endpoint = 'https://bzr.openai.com/v1/events?pid=N2YqaSCgrmFviUbUKHXJ7b';
const week = 7 * 86400000;
export function settings(env = process.env) {
  const mode = env.OPENAI_CONVERSIONS_MODE || 'off';
  if (!['off', 'validate', 'live'].includes(mode)) throw new Error('configuration');
  if (mode === 'off') return { mode };
  for (const key of ['OPENAI_CONVERSIONS_API_KEY', 'CONVERSIONS_ID_SECRET', 'NETLIFY_DB_URL', 'MORTGAGE_REVIEW_FORM_ID']) {
    if (!env[key]) throw new Error('configuration');
  }
  if (mode === 'live' && env.OPENAI_CONVERSIONS_LIVE_APPROVED !== 'true') throw new Error('live_not_approved');
  if (mode === 'live' && env.OPENAI_CONVERSIONS_PROVIDER_VERIFIED !== 'true') throw new Error('provider_not_verified');
  if (env.CONVERSIONS_ID_SECRET.length < 32) throw new Error('configuration');
  const db = new URL(env.NETLIFY_DB_URL);
  if (!['postgres:', 'postgresql:'].includes(db.protocol)) throw new Error('configuration');
  return { mode, env };
}

// Only call with Netlify's platform-verified submission-created payload.
// Construct an allowlist; never spread the payload or data into outbound events.
export function conversion(payload, env, now = Date.now()) {
  if (payload?.form_id !== env.MORTGAGE_REVIEW_FORM_ID) return null;
  if (payload?.data?.measurementConsent !== 'yes') return null;
  if (typeof payload.id !== 'string' || !payload.id || payload.id.length > 256) throw new Error('invalid_submission');
  const timestamp = Date.parse(payload.created_at);
  if (!Number.isFinite(timestamp) || timestamp < now - week || timestamp > now + 600000) throw new Error('invalid_timestamp');
  return {
    id: 'mr_' + createHmac('sha256', env.CONVERSIONS_ID_SECRET).update(payload.form_id + ':' + payload.id).digest('hex'),
    type: 'lead_created', timestamp_ms: timestamp,
    source_url: 'https://shalandasmith.com/mortgage-review',
    action_source: 'web', data: { type: 'customer_action' },
  };
}

export const rpc = databaseCall;

export async function deliver(config, event, fetcher = fetch, now = Date.now()) {
  if (event.timestamp_ms < now - week + 60000) return { outcome: 'expired', delay: 0 };
  try {
    const response = await fetcher(endpoint, {
      method: 'POST', signal: AbortSignal.timeout(8000),
      headers: { Authorization: 'Bearer ' + config.env.OPENAI_CONVERSIONS_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ validate_only: config.mode !== 'live', events: [event] }),
    });
    if (response.ok) {
      let acknowledgement;
      try { acknowledgement = await response.json(); } catch { /* never log raw response */ }
      const accepted = acknowledgement?.accepted_events;
      // A successful HTTP response must acknowledge the single submitted event.
      return { outcome: accepted === 1 ? 'sent' : 'unverified', delay: 0,
        http_status: response.status, accepted_events: typeof accepted === 'number' ? accepted : null,
        acknowledgement_type: Array.isArray(accepted) ? 'array' : typeof accepted };
    }
    if (response.status !== 429 && response.status !== 408 && response.status < 500) return { outcome: 'rejected', delay: 0 };
    const retry = response.headers.get('retry-after');
    const seconds = retry && /^\d+$/.test(retry) ? Number(retry) : Math.ceil((Date.parse(retry) - now) / 1000);
    return { outcome: 'retry', delay: Number.isFinite(seconds) ? Math.max(60, Math.min(7 * 86400, seconds)) : 60 };
  } catch {
    return { outcome: 'retry', delay: 60 };
  }
}

export async function drain(config, fetcher = fetch, storage = databaseCall) {
  const lease = randomUUID();
  const rows = await storage(config, 'claim_mortgage_conversion', { p_mode: config.mode, p_lease: lease });
  for (const row of rows) {
    const result = await deliver(config, row.event, fetcher);
    const delay = Math.max(result.delay, Math.min(21600, 60 * 2 ** Math.min(row.attempts, 8)) + Math.floor(Math.random() * 30));
    await storage(config, 'settle_mortgage_conversion', { p_mode: config.mode, p_id: row.event.id, p_lease: lease, p_status: result.outcome, p_delay: delay });
    console.info(JSON.stringify({ component: 'mortgage_conversion', mode: config.mode,
      outcome: result.outcome, http_status: result.http_status, accepted_events: result.accepted_events,
      acknowledgement_type: result.acknowledgement_type, attempts: row.attempts }));
  }
}
