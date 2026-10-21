# Mortgage Review conversion tracking — local draft, disabled

No deployment, push, campaign change, or real conversion was performed. Provider validation and hosted integration tests are still required. No API key was available in the task environment. Do not interpret mocked tests as provider verification.

## Existing flow inspected

Repository: UnfilteredKeys/unfilteredkeys-site. `src/pages/MortgageReview.tsx` URL-encodes the form and posts to `/`. It checks `res.ok`, then stores the submitted flag and shows thanks. `index.html` contains the Netlify detection form. The live page also contains the `mortgage-review` detection form. Signed-in read-only inspection confirmed form detection enabled, the mortgage-review form ID `6ac7fb9f17bfd900089b5949`, and an existing email notification to shalanda@securechoicelending.com. These settings were not changed. Project ID: `c4c9f0a3-27cc-4589-b8b5-a7836e33c932`. API key is marked secret; its value was not revealed. Mode is `off` in all contexts.

Tracking does not run from browser success state. Netlify invokes reserved `submission-created` only for a verified submission; its platform signature verification protects event functions from external requests. Do not proxy or manually expose this function. Exact configured form ID is checked, rather than trusting a browser-supplied form name. Check the real event metadata shape (`payload.id`, `payload.form_id`, `payload.created_at`, `payload.data`) in a controlled approved test before enabling.

## Configuration required

Server function environment only (never `VITE_*`, browser files, source control, or logs):

- `OPENAI_CONVERSIONS_MODE`: `off` (default), `validate`, or `live`.
- `OPENAI_CONVERSIONS_API_KEY`: Conversions API key from Ads Manager, not an ordinary model API key.
- `MORTGAGE_REVIEW_FORM_ID`: Netlify's actual mortgage-review form ID.
- `CONVERSIONS_ID_SECRET`: a persistent random secret of at least 32 bytes; do not rotate during replay/recovery.
- `NETLIFY_DB_URL`: Netlify-managed PostgreSQL connection string for this site, available to functions. No Supabase account or service key is used. Do not copy the connection string into browser code or chat.
- `OPENAI_CONVERSIONS_LIVE_APPROVED=true`: only after explicit user approval and all checks below.
- `OPENAI_CONVERSIONS_PROVIDER_VERIFIED=true`: only after the validation probe and success-response semantics are verified. Both flags are required for live mode. Scope live configuration to production only; never inherit it into deploy previews.

The user created a Netlify Database for `euphonious-croquembouche-adc601`, confirmed by their dashboard screenshot. The draft uses `pg` with the Netlify connection string and includes `@netlify/database` for platform integration. The additive migration is `netlify/database/migrations/202610210001_mortgage_conversions.sql`; Netlify applies it during an approved deployment. It has NOT been applied to the hosted database in this task. Confirm the runtime database role owns the schema or has the required privileges. Row-level security is enabled and public execution of the queue functions is revoked. TLS follows Netlify's connection string; certificate verification is not disabled. The store retains only an opaque HMAC event ID, timestamp, fixed public URL and event taxonomy, plus delivery status/leases. No submission content or raw Netlify submission ID is persisted in it. Protect Netlify form records under the existing retention policy separately.

## Delivery and duplicates

The primary key `(mode,id)` prevents concurrent duplicate enqueue; SQL `FOR UPDATE SKIP LOCKED` claims one event with a two-minute recoverable lease. Each eligible submission attempts delivery after durable enqueue. An hourly recovery worker uses the original timestamp and ID across retries, letting the database sleep between uses. Retry network errors, HTTP 408/429/5xx with exponential backoff, jitter and Retry-After. Recovery can wait up to one hour beyond the next due time. Other non-2xx responses stop for operator review. Expire before OpenAI's seven-day event limit; never fabricate a newer timestamp to revive an event. Each invocation claims one event: recovery throughput is 24 events per day, plus submission-triggered attempts. Assess volume/backlog before deployment. Hourly checks still wake the database and consume credits; the dashboard's 193-credit balance does not establish expected cost. Review billing before deployment.

Exactly one HTTP attempt cannot be guaranteed with reliable retries: if OpenAI accepts a request but the acknowledgement is lost, the identical event is resent. OpenAI documents deduplication by Pixel ID, event name and event ID. The intended result is one logical conversion, even with repeated transport attempts. Its documented deduplication retention window is unspecified; confirm it with the provider for the intended retry horizon.

Database outages during initial enqueue are surfaced as a fixed safe failure. Do not assume Netlify event delivery retries indefinitely. Before launch establish monitoring for `enqueue_failed` and reconcile missed eligible Netlify submissions within seven days, using the same `conversion()` and enqueue operation. This recovery procedure is an operational dependency, not an implemented automated reconciler. Retain delivered ID tombstones while any submission can be replayed; deleting them permits re-enqueue. Rejected and expired records require review. Do not log request/provider bodies or underlying error text; these may contain secrets or form data. Also review hosting-level request/log retention.

## Validation sequence — still pending

For a hosted synthetic probe, `netlify/functions/deploy-succeeded.mjs` runs only when `OPENAI_CONVERSIONS_VALIDATE_ON_DEPLOY=true` in the approved preview environment. It always uses `validate_only:true`, requires only the server key, and never changes tracking mode or accesses the database. Configure this flag only for the approved preview, remove it after testing, and inspect redacted logs for HTTP status and response-format metadata. This test requires approval before any preview deployment; pushing a branch can trigger a Netlify deployment. The two hosted-probe unit tests pass (11 total local conversion/storage/probe tests). Provider validation still has not run.

1. Configure the key securely in a server environment. Run `node scripts/validate-conversions.mjs`. It always sends a synthetic event with `validate_only:true`; no form submission or email is generated. It reports HTTP status and response format/field names without raw values. Inspect unfamiliar response bodies privately; confirm whether any 2xx can include application-level errors and adjust the delivery acknowledgement parser before live approval. The current draft treats HTTP 2xx as acknowledgement.
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

Local verification: nine conversion/storage checks pass, including execution of the real migration in an isolated PGlite PostgreSQL runtime, duplicate enqueue, recovered worker leases, stale acknowledgement rejection, retry-to-success, redacted storage errors and off-mode exits without database access. Client and SSR production builds, prerender of 46 pages plus 404, and the existing Vitest test pass. This does not test independent hosted PostgreSQL sessions or hosted privileges. Dependency manifests and the npm lockfile now include Netlify/Postgres runtime libraries and a local PostgreSQL test library. Hosted database, Netlify event signature/email behavior, provider acknowledgement semantics, actual provider validation and attribution remain unverified. Run checks with `node --test server/conversions.test.mjs server/conversion-store.test.mjs`.

Netlify Database references:
- https://docs.netlify.com/build/data-and-storage/netlify-database/tooling/
- https://docs.netlify.com/build/data-and-storage/netlify-database/migrations/
