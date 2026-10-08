// src/pages/MortgageReview.tsx
// Route: /mortgage-review  (add to App.tsx, see notes at bottom of file)
// Form backend: Netlify Forms (requires the hidden form in index.html, see notes)

import { useEffect, useState } from "react";
import {
  Home,
  Receipt,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  FileText,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

const CONCERNS = [
  {
    id: "property-taxes",
    label: "Property taxes went up",
    icon: Home,
    title: "Your property taxes caught up",
    body:
      "On a brand-new home, the first tax bill is often based on the empty lot, before the house was finished. Once the appraisal district values the completed home, the tax bill can jump, and your monthly payment follows.",
  },
  {
    id: "escrow-shortage",
    label: "Escrow shortage or payment change",
    icon: Receipt,
    title: "You got an escrow shortage notice",
    body:
      "Escrow is the account your loan servicer uses to pay your taxes and insurance for you. When those bills come in higher than estimated, the account runs short. Then you get a letter asking you to pay the gap, accept a higher payment, or both.",
  },
  {
    id: "insurance",
    label: "Homeowners insurance increased",
    icon: ShieldCheck,
    title: "Your insurance premium climbed",
    body:
      "Homeowners insurance in Texas has gotten more expensive across the board. If your premium is paid through escrow, a higher renewal goes straight into your monthly payment.",
  },
  {
    id: "buydown",
    label: "Temporary rate buydown ended or ending",
    icon: TrendingUp,
    title: "Your temporary buydown ended (or is about to)",
    body:
      "A temporary buydown (like a 2-1) lowers your rate for the first year or two. Builders often pay for it upfront. When it ends, your payment steps up to the full rate on your actual loan. If yours has already ended, it's worth knowing whether today's payment is still the right fit.",
  },
];

const RENTAL_LABEL = "I've moved and now rent this home out";

const STEPS = [
  {
    title: "Tell me what's going on",
    body: "Fill out the short form below. Takes about two minutes.",
  },
  {
    title: "I look at your numbers",
    body:
      "I'll review your mortgage statement, escrow letter, and anything else you want to share.",
  },
  {
    title: "We talk it through",
    body:
      "A quick call in plain English. What's happening, why, and what options (if any) are worth considering.",
  },
];

const DOCS = [
  "Your most recent mortgage statement",
  "Your latest escrow analysis or shortage letter",
  "Your homeowners insurance declarations page (the summary page of your policy)",
  "Your property tax notice from the county appraisal district",
  "Your Closing Disclosure from purchase (shows whether you have a buydown)",
];

const FAQS = [
  {
    q: "Does this cost anything?",
    a: "No. The review is complimentary, and there's no obligation to do anything afterward.",
  },
  {
    q: "Will you pull my credit?",
    a: "Not for the review. If we ever talk about a new loan, I'll ask you first before anything is pulled.",
  },
  {
    q: "Do I have to refinance?",
    a: "No. Sometimes the answer is \"you're in good shape,\" or \"call your appraisal district,\" or \"shop your insurance.\" The point is to understand your mortgage, not to sell you a new one.",
  },
  {
    q: "My loan is with my builder's lender. Can you still help?",
    a: "Yes. The review is about understanding your loan, no matter who your lender or servicer is.",
  },
  {
    q: "I moved and rent the house out now. Is this still for me?",
    a: "Yes. Plenty of military families PCS and keep their home as a rental. I can review the loan on the rental and talk through what your options look like for your next purchase, wherever that is.",
  },
  {
    q: "What happens to my information?",
    a: "It's used only to contact you about your review. It's never sold.",
  },
];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function MortgageReview() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [concerns, setConcerns] = useState<string[]>([]);
  const [source, setSource] = useState("direct");

  useEffect(() => {
    document.title = "Free Mortgage Review for Texas Homeowners | Keys by Shalanda";
    // Track where visitors came from, e.g. QR code -> /mortgage-review?src=newbuild-letter
    const params = new URLSearchParams(window.location.search);
    // Keep every tracking parameter (QR source, mail drop, test group) so each lead shows which letter it came from
    const tracked = Array.from(params.entries())
      .map(([k, v]) => `${k}=${v}`)
      .join("&");
    setSource(tracked || "direct");
  }, []);

  const toggleConcern = (label: string) =>
    setConcerns((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = { "form-name": "mortgage-review" };
    fd.forEach((value, key) => {
      if (key !== "concerns") data[key] = String(value);
    });
    data.concerns = concerns.join(", ") || "Not specified";
    data.source = source;

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const scrollToForm = () =>
    document.getElementById("review-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="mortgage-review min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Complimentary Mortgage Review · Texas Homeowners
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            You closed on your new home.
            <br />
            Your mortgage didn't stop changing.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Tax jumps, escrow shortages, insurance hikes, a buydown rolling off. New-build
            owners in Texas run into all four, whether you still live there or rent it out now. A free review tells you what's actually
            happening with your payment and whether anything is worth doing about it.
          </p>
          <button
            onClick={scrollToForm}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Request my review <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-sm text-muted-foreground">
            No pressure. No obligation. No credit pull.
          </p>
        </div>
      </section>

      {/* CONCERNS */}
      <section className="bg-muted/40 px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Sound familiar?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            These are the four things I see most often with newly built homes, usually a year
            or two after closing.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {CONCERNS.map(({ id, icon: Icon, title, body }) => (
              <div key={id} className="rounded-xl border bg-card p-6 shadow-sm">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3 rounded-xl border border-primary/30 bg-primary/5 p-5">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm">
              <span className="font-semibold">Quick tip:</span> Have you filed your homestead
              exemption? It can lower the taxable value of your home, and new-build owners
              sometimes miss it in the shuffle of moving in. It's free to file. Check with
              your county appraisal district.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">How the review works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-xl border bg-card p-6">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Helpful to have handy</h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Don't have all of these? That's fine. Send what you've got.
            </p>
            <ul className="mt-4 space-y-2">
              {DOCS.map((doc) => (
                <li key={doc} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="review-form" className="bg-muted/40 px-4 py-14">
        <div className="mx-auto max-w-xl">
          <h2 className="text-center text-3xl font-bold">Request your review</h2>
          <p className="mt-3 text-center text-muted-foreground">
            I'll personally reach out within one business day.
          </p>

          {status === "sent" ? (
            <div className="mt-8 rounded-xl border bg-card p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-2xl font-semibold">Got it. Thank you!</h3>
              <p className="mt-2 text-muted-foreground">
                I'll be in touch within one business day. In the meantime, grab your latest
                mortgage statement and escrow letter if they're handy.
              </p>
            </div>
          ) : (
            <form
              name="mortgage-review"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-8 space-y-5 rounded-xl border bg-card p-6 shadow-sm"
            >
              <input type="hidden" name="form-name" value="mortgage-review" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" name="firstName" required autoComplete="given-name" />
                <Field label="Last name" name="lastName" required autoComplete="family-name" />
              </div>
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <Field label="Mobile phone" name="phone" type="tel" required autoComplete="tel" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="City of the home" name="city" required autoComplete="address-level2" />
                <Field label="ZIP code of the home" name="zip" required autoComplete="postal-code" inputMode="numeric" />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">Year you purchased</label>
                <select
                  name="purchaseYear"
                  className="w-full rounded-md border bg-background px-3 py-2"
                  defaultValue=""
                >
                  <option value="" disabled>Select one</option>
                  {["2026", "2025", "2024", "2023", "2022", "2021 or earlier"].map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-medium">
                  What's on your mind? <span className="font-normal text-muted-foreground">(check any)</span>
                </legend>
                <div className="space-y-2">
                  {[...CONCERNS.map((c) => c.label), RENTAL_LABEL, "Not sure, just want a fresh look"].map((label) => (
                    <label key={label} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={concerns.includes(label)}
                        onChange={() => toggleConcern(label)}
                        className="h-4 w-4 accent-[hsl(var(--primary))]"
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label className="mb-1 block text-sm font-medium">Best time to reach you</label>
                <select
                  name="bestTime"
                  className="w-full rounded-md border bg-background px-3 py-2"
                  defaultValue="Anytime"
                >
                  {["Anytime", "Morning", "Afternoon", "Evening", "Text me first"].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Anything else I should know? <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  className="w-full rounded-md border bg-background px-3 py-2"
                  placeholder="e.g., My payment went up $300 this year and I'm not sure why."
                />
              </div>

              <label className="flex gap-2 text-xs text-muted-foreground">
                <input type="checkbox" name="contactConsent" value="yes" required className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  By checking this box, I agree that Shalanda Smith of Secure Choice Lending may
                  contact me by phone, text, or email at the information provided about my
                  mortgage review. Consent is not a condition of any purchase or loan. Message
                  and data rates may apply. Reply STOP to opt out of texts.
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Request my free review"}
              </button>
              {status === "error" && (
                <p className="text-center text-sm text-destructive">
                  Something went wrong. Please try again, or email me directly.
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Who you'll be talking to</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm Shalanda Smith, a Texas mortgage broker with 20+ years in the business. I work
            with homeowners at every stage, not just the day they buy. Most people don't have
            anyone checking in after closing. I'd like to be that person for you.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Questions people ask</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group rounded-lg border bg-card p-5">
                <summary className="cursor-pointer list-none font-semibold">
                  <span className="flex items-center justify-between">
                    {q}
                    <span className="ml-4 text-primary transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Request my review <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* COMPLIANCE FOOTER */}
      <footer className="border-t px-4 py-10 text-xs text-muted-foreground">
        <div className="mx-auto max-w-4xl space-y-3 text-center">
          <p className="font-medium text-foreground">
            Shalanda Smith, Mortgage Broker | NMLS #554554 · Secure Choice Lending | NMLS #1689518
          </p>
          <p>
            Equal Housing Opportunity.{" "}
            <a
              href="https://www.nmlsconsumeraccess.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              NMLS Consumer Access
            </a>
          </p>
          <p>
            This complimentary review is for informational purposes only and is not a
            commitment to lend or an offer of credit. Not all applicants will qualify. Any
            loan is subject to credit approval, underwriting guidelines, and property
            eligibility. Program terms and availability may change without notice.
          </p>
          {/* TODO: Paste the exact Texas Department of Savings and Mortgage Lending
              consumer complaint / recovery fund notice here, as supplied by your
              compliance team. Don't paraphrase it. */}
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full rounded-md border bg-background px-3 py-2"
      />
    </div>
  );
}

/* =====================================================================
   SETUP NOTES

   1) Add the route in src/App.tsx (ABOVE the "*" catch-all route):
        import MortgageReview from "./pages/MortgageReview";
        <Route path="/mortgage-review" element={<MortgageReview />} />

   2) Netlify needs to see the form at build time. Add this inside <body>
      in index.html (project root):

      <form name="mortgage-review" netlify netlify-honeypot="bot-field" hidden>
        <input name="firstName" /><input name="lastName" /><input name="email" />
        <input name="phone" /><input name="city" /><input name="zip" />
        <input name="purchaseYear" /><input name="concerns" /><input name="bestTime" />
        <textarea name="notes"></textarea><input name="contactConsent" />
        <input name="source" /><input name="bot-field" />
      </form>

      Then in Netlify: Site > Forms > enable form detection, and set an
      email notification so leads hit your inbox.

   3) Make sure public/_redirects exists with this line, or the QR code
      link will 404 when someone lands directly on /mortgage-review:
        /*    /index.html   200

   4) Point the QR code at:
        https://shalandasmith.com/mortgage-review?src=newbuild-letter
      The "source" field will tell you which leads came from the letter.
   ===================================================================== */