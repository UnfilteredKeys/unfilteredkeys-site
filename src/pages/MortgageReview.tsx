// src/pages/MortgageReview.tsx
// Route: /mortgage-review
// Form backend: Netlify Forms (hidden mirror form lives in index.html — keep field names in sync)

import { useEffect, useRef, useState } from "react";
import {
  Home,
  Receipt,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  FileText,
  ArrowRight,
  Lightbulb,
  Lock,
} from "lucide-react";
import headshot from "@/assets/headshot.png";

const CONCERNS = [
  {
    id: "property-taxes",
    label: "Property taxes increased",
    icon: Home,
    title: "Property taxes can catch up",
    body:
      "On a newly built home, the first tax bill may be based on the lot before the house was finished. Once the appraisal district values the completed home, the tax bill can rise, and an escrowed payment may rise with it.",
  },
  {
    id: "escrow-shortage",
    label: "Escrow shortage or payment change",
    icon: Receipt,
    title: "Escrow shortages happen",
    body:
      "Escrow is the account your loan servicer uses to pay your taxes and insurance. If those bills come in higher than estimated, the account can run short, and you may receive a notice asking you to pay the difference, accept a higher payment, or both.",
  },
  {
    id: "insurance",
    label: "Homeowners insurance increased",
    icon: ShieldCheck,
    title: "Insurance premiums can climb",
    body:
      "Many Texas homeowners have seen insurance renewals go up. If your premium is paid through escrow, a higher renewal can show up in your monthly payment.",
  },
  {
    id: "buydown",
    label: "Temporary rate buydown ending",
    icon: TrendingUp,
    title: "If you had a temporary buydown",
    body:
      "Some buyers received a temporary buydown (such as a 2-1) that lowers the rate for the first year or two. When it ends, the payment steps up to the full note rate. If that applies to you, it's worth confirming your current payment still fits.",
  },
];

const OTHER_CONCERNS = ["I now rent out the property", "Not sure, just want a fresh look"];

const STEPS = [
  {
    title: "Tell me what's going on",
    body: "Share a few details in the short form below. It takes about a minute.",
  },
  {
    title: "I take a look",
    body: "I'll reach out personally. If a closer review would help, I'll explain what to gather and how to share it securely.",
  },
  {
    title: "We talk it through",
    body: "A quick conversation in plain English: what's happening, why, and what options (if any) are worth considering.",
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
    a: "No credit pull is required for the initial review. If we ever discuss a new loan, I'll ask your permission first.",
  },
  {
    q: "Do I have to refinance?",
    a: "No. Sometimes the answer is \"you're in good shape,\" \"call your appraisal district,\" or \"shop your insurance.\" The goal is to help you understand your mortgage, not to sell you a new one.",
  },
  {
    q: "My loan came through my builder's preferred lender. Can you still help?",
    a: "Yes. I can review your mortgage no matter who originally financed your home or who services your loan today. I'm an independent mortgage broker and am not affiliated with any homebuilder.",
  },
  {
    q: "I moved and rent the house out now. Is this still for me?",
    a: "Yes. Many military families PCS and keep their home as a rental. I can review the loan on the rental and talk through options for your next purchase.",
  },
  {
    q: "What happens to my information?",
    a: "It's used only to respond to your review request. It's never sold, and you won't be added to ongoing marketing unless you choose to opt in. Please don't send financial documents through this form — if they're needed, I'll provide a secure way to share them.",
  },
];

const STORAGE_KEY = "mr_campaign";
const SUBMITTED_KEY = "mr_submitted";
const SUBMITTED_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src"];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export default function MortgageReview() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [concerns, setConcerns] = useState<string[]>([]);
  const [campaign, setCampaign] = useState<Record<string, string>>({});
  const [emailError, setEmailError] = useState("");
  const submitting = useRef(false);

  useEffect(() => {
    document.title = "Free Mortgage Review for Texas Homeowners | Keys by Shalanda";
    // Capture only known campaign parameters (never personal info), keep them for the visit,
    // then strip them from the address bar so homeowners don't see tracking codes.
    const params = new URLSearchParams(window.location.search);
    const fromUrl: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) fromUrl[k] = v.slice(0, 100);
    });
    let stored: Record<string, string> = {};
    try {
      stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      /* ignore */
    }
    const merged = Object.keys(fromUrl).length ? fromUrl : stored;
    setCampaign(merged);
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      const saved = Number(localStorage.getItem(SUBMITTED_KEY));
      if (saved && Date.now() - saved < SUBMITTED_TTL_MS) setStatus("sent");
      else localStorage.removeItem(SUBMITTED_KEY);
    } catch {
      /* ignore */
    }
    if (Object.keys(fromUrl).length) {
      UTM_KEYS.forEach((k) => params.delete(k));
      const qs = params.toString();
      window.history.replaceState(null, "", window.location.pathname + (qs ? `?${qs}` : "") + window.location.hash);
    }
  }, []);

  const toggleConcern = (label: string) =>
    setConcerns((prev) => (prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting.current) return; // prevent double-taps / duplicate submissions
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    if (!isEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    submitting.current = true;
    setStatus("sending");

    const data: Record<string, string> = { "form-name": "mortgage-review" };
    fd.forEach((value, key) => {
      if (key !== "concerns") data[key] = String(value).trim();
    });
    data.concerns = concerns.join(", ") || "Not specified";
    data.marketingConsent = data.marketingConsent === "yes" ? "yes" : "no";
    data.utm_source = campaign.utm_source || "";
    data.utm_medium = campaign.utm_medium || "";
    data.utm_campaign = campaign.utm_campaign || "";
    data.utm_content = campaign.utm_content || "";
    data.source =
      Object.entries(campaign)
        .map(([k, v]) => `${k}=${v}`)
        .join("&") || "direct";

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error("Submit failed");
      try {
        localStorage.setItem(SUBMITTED_KEY, String(Date.now()));
      } catch {
        /* ignore */
      }
      setStatus("sent");
    } catch {
      submitting.current = false;
      setStatus("error");
    }
  };

  const scrollToForm = () => document.getElementById("review-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="mortgage-review min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="px-4 pt-14 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Complimentary Mortgage Review · Texas Homeowners
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            You've settled into your home. Let's check in on your mortgage.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Your home and finances may have changed since closing. Property taxes, homeowners insurance,
            escrow adjustments, and even your original financing terms can affect your monthly payment. A
            complimentary mortgage checkup can help you understand where things stand today.
          </p>
          <button
            onClick={scrollToForm}
            className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 sm:w-auto"
          >
            Request My Free Mortgage Review <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-sm text-muted-foreground">No pressure. No obligation. No credit pull.</p>
        </div>
      </section>

      {/* PERSONAL INTRO */}
      <section className="px-4 pb-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-xl border bg-card p-6 shadow-sm sm:flex-row sm:items-start sm:p-8">
          <img
            src={headshot}
            alt="Shalanda Smith, Texas mortgage broker"
            width={128}
            height={128}
            className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-primary sm:h-32 sm:w-32"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">Hi, I'm Shalanda Smith.</h2>
            <p className="mt-3 text-muted-foreground">
              I'm a Texas mortgage broker with more than 20 years of experience. I've always believed
              homeowners deserve guidance long after they've received their keys.
            </p>
            <p className="mt-3 text-muted-foreground">
              Whether your payment has changed or you simply want a second set of eyes on your mortgage,
              I'm happy to help you understand your options.
            </p>
            <p className="mt-3 font-semibold">No sales pitch. Just straightforward mortgage guidance.</p>
          </div>
        </div>
      </section>

      {/* CONCERNS */}
      <section className="bg-muted/40 px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">What can change after closing</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Not every homeowner runs into these, but they're the most common reasons a payment changes in
            the first few years after buying a newly built home.
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
              <span className="font-semibold">Quick reminder:</span> Have you filed your homestead
              exemption? For a primary residence, it can lower the taxable value of your home, and it's
              easy to miss in the shuffle of moving in. Filing is free through your county appraisal
              district.
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
        </div>
      </section>

      {/* FORM */}
      <section id="review-form" className="bg-muted/40 px-4 py-14">
        <div className="mx-auto max-w-xl">
          <h2 className="text-center text-3xl font-bold">Request your review</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Only your first name and email are required. I'll personally reach out within one business day.
          </p>

          {status === "sent" ? (
            <div className="mt-8 rounded-xl border bg-card p-8 text-center" role="status">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-2xl font-semibold">Thank you — I've received your request.</h3>
              <p className="mt-2 text-muted-foreground">
                I'll be in touch within one business day. You don't need to gather anything yet; if a
                closer look would help, I'll let you know what to have handy and how to share it securely.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Need to send another request?{" "}
                <button
                  type="button"
                  className="font-medium text-primary underline underline-offset-2"
                  onClick={() => {
                    try {
                      localStorage.removeItem(SUBMITTED_KEY);
                      sessionStorage.removeItem(SUBMITTED_KEY);
                    } catch {
                      /* ignore */
                    }
                    setConcerns([]);
                    setEmailError("");
                    setStatus("idle");
                  }}
                >
                  Start a new one
                </button>
              </p>
            </div>
          ) : (
            <form
              name="mortgage-review"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate={false}
              className="mt-8 space-y-5 rounded-xl border bg-card p-5 shadow-sm sm:p-6"
            >
              <input type="hidden" name="form-name" value="mortgage-review" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" name="firstName" required autoComplete="given-name" />
                <Field label="Last name" name="lastName" optional autoComplete="family-name" />
              </div>
              <div>
                <Field label="Email address" name="email" type="email" required autoComplete="email" inputMode="email" />
                {emailError && <p className="mt-1 text-sm text-destructive">{emailError}</p>}
              </div>
              <Field label="Mobile phone" name="phone" type="tel" optional autoComplete="tel" inputMode="tel" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="City of the home" name="city" optional autoComplete="address-level2" />
                <div>
                  <label htmlFor="purchaseYear" className="mb-1 block text-sm font-medium">
                    Year purchased <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <select
                    id="purchaseYear"
                    name="purchaseYear"
                    className="min-h-[44px] w-full rounded-md border bg-background px-3 py-2 text-base"
                    defaultValue=""
                  >
                    <option value="">Select one</option>
                    {["2026", "2025", "2024", "2023", "2022", "2021 or earlier"].map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-medium">
                  What's on your mind? <span className="font-normal text-muted-foreground">(optional, check any)</span>
                </legend>
                <div className="space-y-1">
                  {[...CONCERNS.map((c) => c.label), ...OTHER_CONCERNS].map((label) => (
                    <label key={label} className="flex min-h-[40px] cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={concerns.includes(label)}
                        onChange={() => toggleConcern(label)}
                        className="h-5 w-5 shrink-0 accent-[hsl(var(--primary))]"
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-2 text-sm font-medium">
                  How should I reach you? <span className="font-normal text-muted-foreground">(optional)</span>
                </legend>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {["Email", "Phone call", "Text"].map((opt) => (
                    <label key={opt} className="flex min-h-[40px] cursor-pointer items-center gap-2">
                      <input type="radio" name="contactPreference" value={opt} defaultChecked={opt === "Email"} className="h-5 w-5 accent-[hsl(var(--primary))]" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="notes" className="mb-1 block text-sm font-medium">
                  Anything else I should know? <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  maxLength={1000}
                  className="w-full rounded-md border bg-background px-3 py-2 text-base"
                  placeholder="e.g., My payment went up this year and I'm not sure why."
                />
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Lock className="h-3 w-3" /> Please don't include account numbers, SSNs, or documents here.
                </p>
              </div>

              <label className="flex gap-3 text-xs text-muted-foreground">
                <input type="checkbox" name="contactConsent" value="yes" required className="mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  <span className="font-medium text-foreground">Required:</span> I agree that Shalanda Smith of
                  Secure Choice Lending may contact me by email, phone, or text using the information I
                  provided, only to respond to this review request. Consent is not a condition of any purchase
                  or loan. Message and data rates may apply. Reply STOP to opt out of texts.
                </span>
              </label>

              <label className="flex gap-3 text-xs text-muted-foreground">
                <input type="checkbox" name="marketingConsent" value="yes" className="mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  <span className="font-medium text-foreground">Optional:</span> Also send me occasional
                  homeowner tips and mortgage updates. You can unsubscribe at any time.
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="min-h-[48px] w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Request My Free Mortgage Review"}
              </button>
              {status === "error" && (
                <p className="text-center text-sm text-destructive" role="alert">
                  Something went wrong. Please try again, or email shalanda@securechoicelending.com directly.
                </p>
              )}
            </form>
          )}

          {/* DOCUMENTS (optional, collapsible) */}
          <div className="mt-8 rounded-xl border bg-card p-6">
            <h3 className="text-lg font-semibold">You don't need any documents to get started.</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              If a closer review would be helpful, I'll explain which documents to gather and how to share
              them securely.
            </p>
            <details className="group mt-4">
              <summary className="flex min-h-[40px] cursor-pointer list-none items-center gap-2 font-medium text-primary">
                <FileText className="h-5 w-5" />
                Want to prepare in advance? See what's helpful to have handy
                <span className="ml-auto transition group-open:rotate-45">+</span>
              </summary>
              <ul className="mt-4 space-y-2">
                {DOCS.map((doc) => (
                  <li key={doc} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-14">
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
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 sm:w-auto"
            >
              Request My Free Mortgage Review <ArrowRight className="h-4 w-4" />
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
            <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="underline">
              NMLS Consumer Access
            </a>
          </p>
          <p>
            Keys by Shalanda and Secure Choice Lending are not affiliated with D.R. Horton or any other
            homebuilder or its preferred lender.
          </p>
          <p>
            This complimentary review is for informational purposes only and is not a commitment to lend or
            an offer of credit. Not all applicants will qualify. Any loan is subject to credit approval,
            underwriting guidelines, and property eligibility. Program terms and availability may change
            without notice.
          </p>
          {/* TODO: Paste the exact Texas Department of Savings and Mortgage Lending
              consumer complaint / recovery fund notice here, as supplied by compliance.
              TODO: Link the privacy policy here once a privacy policy page exists. */}
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
  optional,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
        {optional && <span className="font-normal text-muted-foreground"> (optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={120}
        className="min-h-[44px] w-full rounded-md border bg-background px-3 py-2 text-base"
      />
    </div>
  );
}
