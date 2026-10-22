# Consent-controlled attribution for mortgage review

This revision adds `oppref` click matching to the existing server-only conversion path. It does not install the browser SDK, create advertising cookies, send browser conversion events, enable advanced matching, or transmit contact/financial answers.

At form submission only, after separate measurement consent and absent Global Privacy Control/Do Not Track, read the current URL's `oppref` and an existing first-party `__obref` cookie if available. The page's existing campaign cleanup leaves `oppref` in the URL. Do not trim or rewrite accepted opaque references; reject malformed or oversized values. No reference is written to local/session storage by this feature. Without consent neither the URL nor cookies are read by the attribution helper. Submission always rechecks consent and browser signals, even if the checkbox changed earlier.

The new Netlify detection fields are `openaiOppref`, `openaiObref`, `measurementOptOut`. The server independently checks consent/opt-out and adds only `oppref` and `user.obref` to its existing allowlisted event. Stable event IDs are unchanged. The reserved Netlify trigger remains the only conversion producer, so no browser/server duplicate-ID mechanism is needed. Optional malformed references are dropped without failing a genuine lead.

The outbox retains references for retries. The additive migration `202610220001_attribution_retention.sql` removes references after terminal delivery states while retaining the stable ID tombstone. Netlify form records and existing email notifications may contain submitted matching references; manage their retention under the existing form/email practices. Queue logs expose only presence booleans, never reference values. Consent withdrawn before submission excludes the event; handling withdrawal after an event has been accepted or queued still requires the existing privacy request process.

Scope: click matching works only when `oppref` remains on the current mortgage-review URL when consented submission occurs. This does not add sitewide capture or attribution persistence across navigation. Without an installed Pixel, `__obref` will usually be absent; never fabricate it. API acceptance with synthetic validation data does not establish actual ad attribution. Verify reporting with the next genuine consented lead from an actual ad click; do not record fabricated conversions.

Deploy preview must stay in validate mode. Validate with a synthetic `oppref` URL, verify saved form, safe presence flags and HTTP 200/accepted_events:1. Repeat without measurement consent and confirm no conversion send. Production remains live for real submissions; never post a consented synthetic lead to production. Apply the additive migration during the normal Netlify deployment.

References:
- https://developers.openai.com/ads/conversions-api
- https://developers.openai.com/ads/measurement-pixel
