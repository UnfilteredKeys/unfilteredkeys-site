import { settings, conversion, rpc, drain } from '../../server/conversions.mjs';

// Reserved Netlify platform event; do not expose through a redirect or call from the browser.
export async function handler(request) {
  let stage = 'configuration';
  try {
    const config = settings();
    if (config.mode === 'off') {
      console.info('{"component":"mortgage_conversion","outcome":"disabled"}');
      return { statusCode: 204 };
    }
    stage = 'parse';
    const { payload } = JSON.parse(request.body);
    stage = 'eligibility';
    const event = conversion(payload, config.env);
    if (!event) {
      console.info(JSON.stringify({ component: 'mortgage_conversion', outcome: 'ineligible',
        form_matches: payload?.form_id === config.env.MORTGAGE_REVIEW_FORM_ID,
        measurement_consent: payload?.data?.measurementConsent === 'yes' }));
      return { statusCode: 204 };
    }
    stage = 'enqueue';
    await rpc(config, 'enqueue_mortgage_conversion', { p_mode: config.mode, p_event: event });
    console.info(JSON.stringify({ component: 'mortgage_conversion', outcome: 'queued', mode: config.mode }));
    // Queue is already durable if delivery/acknowledgement fails.
    stage = 'delivery';
    await drain(config);
    return { statusCode: 204 };
  } catch {
    // Never log request bodies, provider bodies, exception messages, URLs or credentials.
    console.error(JSON.stringify({ component: 'mortgage_conversion', outcome: 'processing_failed', stage }));
    throw new Error('conversion_enqueue_failed');
  }
}
