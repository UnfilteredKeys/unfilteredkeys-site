# Mortgage Review conversion tracking — preview validated, production disabled

The user-approved preview has been deployed and validated. Production was not deployed or enabled, and no ad spending was changed. The saved API key stayed inside Netlify. Real hosted form submissions produced HTTP 200 with `accepted_events:1` on their first attempt in validate mode; a no-measurement-consent submission succeeded and was excluded from tracking. The user separately confirmed their existing email notification arrived. No validate_only:false request has been sent.

Runtime commit: `5b22ad8189b1eb0006787a99d97a5d2986d07b18`. Preview deployment: `6ad9280f4d0ad95e23f0a2bb`. PR: https://github.com/UnfilteredKeys/unfilteredkeys-site/pull/23. Preview: https://deploy-preview-23--euphonious-croquembouche-adc601.netlify.app/mortgage-review. Production remains on `80088c608a309188082ad37af04c68282c45ced1`.

## Existing flow inspected

Repository: UnfilteredKeys/unfilteredkeys-site. `src/pages/MortgageReview.tsx` URL-encodes the form and posts to `/`. It checks `res.ok`, then stores the submitted flag and shows thanks. `index.html` contains the Netlify detection form. The live page also contains the `mortgage-review` detection form. Signed-in read-only inspection confirmed form detection enabled, the mortgage-review form ID `6ac7fb9f17bfd900089b5949`, and an existing email notification to shalanda@securechoicelending.com. These settings were not changed. Project ID: `c4c9f0a3-27cc-4589-b8b5-a7836e33c932`. API key is marked secret; its value was not revealed. Production mode is `off`; Deploy Previews use `validate`. The persistent ID secret is configured only for Deploy Previews, and the form ID is configured for all contexts.

Tracking does not run from browser success state. Netlify invokes reserved `submission-created` only for a verified submission; its platform signature verification protects event functions from external requests. Do not proxy or manually expose this function. Exact configured form ID is checked, rather than trusting a browser-supplied form name. Hosted testing confirmed the metadata shape (`payload.id`, `payload.form_id`, `payload.created_at`, `payload.data`). The default Request/Response event handler is required for managed database access: legacy Lambda-compatible exports do not receive the managed connection string. Both functions now use the modern runtime.

## Configuration required

Server function environment only (never `VITE_*`, browser files, source control, or logs):

- `OPENAI_CONVERSIONS_MODE`: `off` (default), `validate`, or `live`.
- `OPENAI_CONVERSIONS_API_KEY`: Conversions API key from Ads Manager, not an ordinary model API key.
- `MORTGAGE_REVIEW_FORM_ID`: Netlify's actual mortgage-review form ID.
- `CONVERSIONS_ID_SECRET`: a persistent random secret of at least 32 bytes; do not rotate during replay/recovery.
- `NETLIFY_DB_URL`: Netlify-managed PostgreSQL connection string for this site, available to functions. No Supabase account or service key is used. Do not copy the connection string into browser code or chat.
- `OPENAI_CONVERSIONS_LIVE_APPROVED=true`: only after explicit user approval and all checks below.
- `OPENAI_CONVERSIONS_PROVIDER_VERIFIED=true`: only after the validation probe and success-response semantics are verified. Both flags are required for live mode. Scope live configuration to production only; never inherit it into deploy previews.

The user created a Netlify Database for `euphonious-croquembouche-adc601`, confirmed by their dashboard screenshot. The draft uses `pg` with the Netlify connection string and includes `@netlify/database` for platform integration. The additive migration is `netlify/database/migrations/202610210001_mortgage_conversions.sql`; Netlify applies it during an approved deployment. It has been applied successfully to the isolated preview database; production has not been migrated. Confirm the runtime database role owns the schema or has the required privileges. Row-level security is enabled and public execution of the queue functions is revoked. TLS follows Netlify's connection string; certificate verification is not disabled. The store retains only an opaque HMAC event ID, timestamp, fixed public URL and event taxonomy, plus delivery status/leases. No submission content or raw Netlify submission ID is persisted in it. Protect Netlify form records under the existing retention policy separately.

## Delivery and duplicates

The primary key `(mode,id)` prevents concurrent duplicate enqueue; SQL `FOR UPDATE SKIP LOCKED` claims one event with a two-minute recoverable lease. Each eligible submission attempts delivery after durable enqueue. An hourly recovery worker uses the original timestamp and ID across retries, letting the database sleep between uses. Retry network errors, HTTP 408/429/5xx with exponential backoff, jitter and Retry-After. Recovery can wait up to one hour beyond the next due time. Other non-2xx responses stop for operator review. Expire before OpenAI's seven-day event limit; never fabricate a newer timestamp to revive an event. Each invocation claims one event: recovery throughput is 24 events per day, plus submission-triggered attempts. Assess volume/backlog before deployment. Hourly checks still wake the database and consume credits; the dashboard's 193-credit balance does not establish expected cost. Review billing before deployment.

Exactly one HTTP attempt cannot be guaranteed with reliable retries: if OpenAI accepts a request but the acknowledgement is lost, the identical event is resent. OpenAI documents deduplication by Pixel ID, event name and event ID. The intended result is one logical conversion, even with repeated transport attempts. Its documented deduplication retention window is unspecified; confirm it with the provider for the intended retry horizon.

Database outages during initial enqueue are surfaced as a fixed safe failure. Do not assume Netlify event delivery retries indefinitely. Before launch establish monitoring for `processing_failed` and its safe stage field and reconcile missed eligible Netlify submissions within seven days, using the same `conversion()` and enqueue operation. This recovery procedure is an operational dependency, not an implemented automated reconciler. Retain delivered ID tombstones while any submission can be replayed; deleting them permits re-enqueue. Rejected and expired records require review. Do not log request/provider bodies or underlying error text; these may contain secrets or form data. Also review hosting-level request/log retention.

## Validation results and remaining checks

The initial hosted synthetic probe ran during the approved preview build using `scripts/netlify-validation.mjs`, always with validate_only:true; it returned HTTP 200. That one-time build hook has been removed from netlify.toml so subsequent builds do not keep sending synthetic events. There is no deploy-succeeded test function, extra validation environment flag or public testing endpoint. Local testing now has 12 passing conversion/storage/probe tests. The success, no-consent and repeated-request paths were also tested against the deployed preview.

1. Configure the key securely in a server environment. `node scripts/validate-conversions.mjs` is available for deliberate synthetic checks and always uses validate_only:true. Initial provider validation passed. Actual delivery now requires HTTP success AND numeric accepted_events equal to 1; otherwise it records an unverified outcome for operator review rather than silently marking success. Raw response values are not logged except the numeric acceptance count and HTTP status.
2. Validate valid and intentionally invalid synthetic payloads; confirm invalid requests fail, record only redacted results, and confirm duplicate handling with OpenAI. Validation-only requests do not appear in event monitoring and cannot establish production attribution or production deduplication.
3. In an explicitly approved test deployment use `validate` mode and an isolated database. Submit controlled non-sensitive test data with measurement consent: verify Netlify saved the form, existing email arrived, one queue row was created, and validation succeeded. Repeat trigger/retry concurrently, simulate timeout/429/500/crash after send, check stable ID/time and lease recovery, and verify anonymous browser calls cannot invoke the reserved event function.
4. Submit without measurement consent and to another form: verify zero conversion rows/requests. Test a declined/revoked choice and applicable privacy opt-out signals. Existing contact/marketing choices do not authorize measurement. Historical submissions without the separate choice are excluded.
5. Review the database privileges and migration with concurrent sessions. Local unit tests do not verify hosted SQL permissions or Netlify signatures. Confirm retention, alert routing, outage reconciliation and provider success-response semantics.
6. Obtain user approval before deployment/live mode. A real recording test uses `validate_only:false` and separately requires approval; verify one logical conversion in the provider's supported monitoring. Enabling tracking never activates campaigns or spending.

## Policy, attribution and privacy

- OpenAI's current ad policy restricts US mortgage advertising to approved financial advertisers, reviewed case by case, and may require licensure evidence. Having a Pixel ID/API key does not establish approval. Confirm this account and landing page with OpenAI before enabling live measurement or spending.
- Conversion Terms require appropriate notices, permissions, consents/legal basis and prohibit specified data. Financial distress is prohibited under Ad Tools Terms. This page discusses escrow shortages and rising payments: have compliance/OpenAI assess whether even a generic event from this page could reveal prohibited sensitive context. Omitting answers is necessary but does not itself establish policy eligibility.
- No PII, hashed contact data, loan amounts, notes, concerns, user IP, browser user agent, cookies, click references, or URL query parameters are sent. The server's transport IP is necessarily visible to the provider. Event metadata is not a guarantee of legal anonymity.
- The exact requested payload lacks `oppref` and browser/customer matching signals. API acceptance does not prove ad attribution; attribution may be unavailable. Do not add matching identifiers or a browser pixel without a separate approved scope/privacy review.
- The local draft adds a separate unchecked optional measurement choice and corrects the response-only FAQ promise. It does not create a full privacy policy or automatically implement jurisdiction-specific opt-out/GPC/deletion flows. Those and consent withdrawal handling must be established before launch; if not, keep mode `off`.
- Validate/live queue namespaces are separate. Do not replay validation rows into live mode. Disable both trigger and worker immediately with mode `off` if policy or consent eligibility changes.

## Sources checked

- https://developers.openai.com/ads/conversions-api
- https://developers.openai.com/ads/conversion-tracking
- https://docs.netlify.com/build/functions/trigger-on-events/
- https://docs.netlify.com/build/functions/scheduled-functions/
- https://openai.com/policies/ad-policies/
- https://openai.com/policies/conversion-terms/
- https://openai.com/policies/ad-tools-terms/

Local verification: 12 conversion/storage/probe checks pass, including execution of the real migration in an isolated PGlite PostgreSQL runtime, duplicate enqueue, recovered worker leases, stale acknowledgement rejection, retry-to-success, redacted storage errors and off-mode exits without database access. Client and SSR production builds, prerender of 46 pages plus 404, and the existing Vitest test pass. This does not test independent hosted PostgreSQL sessions or hosted privileges. Dependency manifests and the npm lockfile now include Netlify/Postgres runtime libraries and a local PostgreSQL test library. Hosted database access, verified form-trigger delivery, consent filtering and numeric one-event provider acknowledgements are confirmed; user screenshots confirm the pre-existing form/email flow. Live attribution, production deduplication retention, hosted fault injection, opt-out handling and initial-enqueue outage reconciliation remain unverified or require operational setup. Run checks with `node --test server/conversions.test.mjs server/conversion-store.test.mjs`.

Netlify Database references:
- https://docs.netlify.com/build/data-and-storage/netlify-database/tooling/
- https://docs.netlify.com/build/data-and-storage/netlify-database/migrations/
