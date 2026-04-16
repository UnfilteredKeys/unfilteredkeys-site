import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";
// ── SEO + FAQ SCHEMA ──────────────────────────────────────────────────────────
function useConstructionSEO() {
  useEffect(() => {
    document.title = "Construction & Renovation Loans Texas | One-Time Close | Keys by Shalanda";

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("description", "Texas construction and renovation loans — VA, FHA, USDA, and Conventional one-time close, FHA 203(k), HomeStyle, and VA Renovation up to $100K. Lock your rate before the first shovel hits the ground.");
    setMeta("og:title", "Construction & Renovation Loans Texas | Keys by Shalanda", true);
    setMeta("og:description", "One-time close construction loans and renovation financing in Texas. VA, FHA 203(k), HomeStyle, and USDA options. Serving all of Texas.", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://shalandasmith.com/construction-renovation-loans-texas");

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a one-time close construction loan?", "acceptedAnswer": { "@type": "Answer", "text": "A one-time close construction loan combines the construction financing and the permanent mortgage into a single loan with one closing, one set of closing costs, and one rate locked before construction begins. When the build is complete, the loan automatically converts to your permanent mortgage — no second qualification, no second appraisal, no second closing." } },
        { "@type": "Question", "name": "Can I use a VA loan for new construction in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. VA one-time close construction loans are available in Texas with 0% down for eligible veterans and active duty service members. You lock your rate before construction starts and the loan converts to a permanent VA mortgage when the home is complete. No re-qualification at completion." } },
        { "@type": "Question", "name": "What is an FHA 203(k) loan?", "acceptedAnswer": { "@type": "Answer", "text": "The FHA 203(k) is a renovation loan that lets you finance the purchase price and the cost of improvements in a single loan based on the after-improved value of the property. It's available in Standard (for major renovations $5,000+) and Limited (for cosmetic improvements up to $35,000) versions. Available statewide in Texas with 3.5% down." } },
        { "@type": "Question", "name": "What is a VA Renovation loan?", "acceptedAnswer": { "@type": "Answer", "text": "A VA Renovation loan allows eligible veterans to finance up to $100,000 in home improvements alongside the purchase — in a single loan. The property is appraised at its after-improved value. No down payment required. This is separate from the VA one-time close construction loan." } },
        { "@type": "Question", "name": "What is a Fannie Mae HomeStyle renovation loan?", "acceptedAnswer": { "@type": "Answer", "text": "The HomeStyle Renovation loan is a conventional loan that allows buyers or homeowners to finance renovations up to 75% of the after-improved value of the property. It can be used for any permanent improvement — kitchen, bathrooms, additions, ADUs. Available with as little as 3–5% down for eligible borrowers." } },
        { "@type": "Question", "name": "Can I lock my rate before construction starts in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. One-time close construction loans lock your interest rate at closing, before construction begins. This protects you from rate increases during the build period — which can run 6–12 months in Texas. This is one of the primary advantages over two-close construction financing." } },
        { "@type": "Question", "name": "What is the difference between one-time close and two-close construction loans?", "acceptedAnswer": { "@type": "Answer", "text": "A one-time close loan has a single closing — you lock your rate, close once, and the loan converts to permanent financing when construction is complete. A two-close loan requires a separate construction loan closing and then a second closing for the permanent mortgage, meaning two sets of closing costs, two appraisals, and re-qualification at the end of construction when rates may have moved." } },
        { "@type": "Question", "name": "Are construction loans available for USDA eligible areas in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. USDA one-time close construction loans are available in eligible rural and suburban Texas areas — including Coryell County (Copperas Cove), parts of Bell County, and many Central Texas communities. No down payment required. Income limits apply." } },
      ]
    };

    let schemaTag = document.querySelector('script[data-id="construction-faq-schema"]');
    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.setAttribute("type", "application/ld+json");
      schemaTag.setAttribute("data-id", "construction-faq-schema");
      document.head.appendChild(schemaTag);
    }
    schemaTag.textContent = JSON.stringify(schema);
  }, []);
}

// ── STYLES ────────────────────────────────────────────────────────────────────
const navy = "#1a3a5c";
const copper = "#b5621e";
const bg = "#f7f5f2";
const white = "#ffffff";
const muted = "rgba(26,58,92,0.55)";

const S = {
  page: { backgroundColor: bg, fontFamily: "'Outfit', sans-serif", color: navy } as React.CSSProperties,
  hero: { backgroundColor: navy, padding: "80px 24px 72px" },
  heroInner: { maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "center" } as React.CSSProperties,
  eyebrow: { fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: copper, marginBottom: "18px", fontWeight: 500 },
  heroH1: { fontFamily: "'Lora', serif", fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 700, color: white, lineHeight: 1.1, marginBottom: "20px" },
  heroSub: { fontSize: "17px", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, maxWidth: "560px", marginBottom: "32px" },
  heroCTAs: { display: "flex", gap: "12px", flexWrap: "wrap" as const },
  ctaPrimary: { display: "inline-block", backgroundColor: copper, color: white, padding: "14px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none" },
  ctaSecondary: { display: "inline-block", backgroundColor: "transparent", color: white, padding: "14px 28px", borderRadius: "6px", fontWeight: 600, fontSize: "15px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.35)" },
  statsBar: { backgroundColor: copper, padding: "20px 24px" },
  statsInner: { maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap" as const, gap: "16px" },
  statItem: { textAlign: "center" as const },
  statNum: { fontFamily: "'Lora', serif", fontSize: "26px", fontWeight: 700, color: white },
  statLabel: { fontSize: "12px", color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em", textTransform: "uppercase" as const },
  section: (alt?: boolean): React.CSSProperties => ({ backgroundColor: alt ? white : bg, padding: "72px 24px" }),
  inner: { maxWidth: "1100px", margin: "0 auto" },
  sectionEyebrow: { fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: copper, fontWeight: 600, marginBottom: "12px" },
  sectionH2: { fontFamily: "'Lora', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: navy, marginBottom: "16px", lineHeight: 1.2 },
  sectionSub: { fontSize: "16px", color: muted, maxWidth: "620px", lineHeight: 1.65, marginBottom: "48px" },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" } as React.CSSProperties,
  grid3: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" } as React.CSSProperties,
  card: { backgroundColor: white, borderRadius: "10px", padding: "28px", boxShadow: "0 2px 12px rgba(26,58,92,0.07)", borderTop: `3px solid ${copper}` } as React.CSSProperties,
  cardNavy: { backgroundColor: navy, borderRadius: "10px", padding: "28px" } as React.CSSProperties,
  cardTitle: { fontFamily: "'Lora', serif", fontSize: "18px", fontWeight: 700, color: navy, marginBottom: "10px" },
  cardTitleLight: { fontFamily: "'Lora', serif", fontSize: "18px", fontWeight: 700, color: copper, marginBottom: "10px" },
  cardBody: { fontSize: "14px", color: muted, lineHeight: 1.65 },
  cardBodyLight: { fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.65 },
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: "14px" },
  th: { backgroundColor: navy, color: white, padding: "12px 16px", textAlign: "left" as const, fontWeight: 600, fontSize: "12px", letterSpacing: "0.05em", textTransform: "uppercase" as const },
  td: (shade?: boolean): React.CSSProperties => ({ padding: "12px 16px", backgroundColor: shade ? "#f0f4f8" : white, color: navy, borderBottom: "1px solid rgba(26,58,92,0.08)", fontSize: "14px" }),
  tdGreen: { padding: "12px 16px", backgroundColor: "#e8f2e8", color: "#2d7a2d", fontWeight: 700, borderBottom: "1px solid rgba(26,58,92,0.08)", fontSize: "14px" },
  step: { display: "flex", gap: "20px", marginBottom: "28px", alignItems: "flex-start" } as React.CSSProperties,
  stepNum: { flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%", backgroundColor: copper, color: white, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "14px" } as React.CSSProperties,
  stepTitle: { fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: navy, marginBottom: "4px" },
  stepBody: { fontSize: "13px", color: muted, lineHeight: 1.65 },
  faqItem: { borderBottom: "1px solid rgba(26,58,92,0.1)" },
  faqQ: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", cursor: "pointer", fontWeight: 600, fontSize: "15px", color: navy } as React.CSSProperties,
  faqA: { fontSize: "14px", color: muted, lineHeight: 1.7, paddingBottom: "20px" },
  ctaBand: { backgroundColor: copper, padding: "72px 24px", textAlign: "center" as const },
  ctaBandH2: { fontFamily: "'Lora', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: white, marginBottom: "16px" },
  ctaBandBtn: { display: "inline-block", backgroundColor: white, color: copper, padding: "16px 36px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none" },
  disclaimer: { fontSize: "11px", color: muted, lineHeight: 1.6, padding: "24px", backgroundColor: white, borderTop: "1px solid rgba(26,58,92,0.1)", textAlign: "center" as const },
  tag: (active?: boolean): React.CSSProperties => ({ display: "inline-block", backgroundColor: active ? copper : "#f0f4f8", color: active ? white : navy, padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: active ? 700 : 500, margin: "4px" }),
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={S.faqItem}>
      <div style={S.faqQ} onClick={() => setOpen(!open)}>
        {q}
        <span>{open ? "−" : "+"}</span>
      </div>
      {open && <div style={S.faqA}>{a}</div>}
    </div>
  );
}

export default function ConstructionRenovationTexas() {
  useConstructionSEO();

  const programs = [
    {
      name: "VA One-Time Close",
      badge: "0% Down · Veterans",
      highlights: ["0% down for eligible veterans & active duty", "Rate locked before construction starts", "No re-qualification at completion", "Single closing — one set of costs", "Converts automatically to permanent VA loan"],
      best: "Veterans and active duty building a primary residence in Texas.",
    },
    {
      name: "FHA One-Time Close",
      badge: "3.5% Down · All Buyers",
      highlights: ["3.5% down with 580+ credit", "One closing — no second appraisal", "Rate locked before ground breaks", "Available statewide in Texas", "Combinable with some DPA programs"],
      best: "First-time buyers and buyers with limited down payment building new.",
    },
    {
      name: "USDA One-Time Close",
      badge: "0% Down · Rural Texas",
      highlights: ["0% down for eligible rural areas", "Coryell County & parts of Bell County often qualify", "Income limits apply (115% of area median)", "One closing, permanent rate lock", "Annual guarantee fee 0.35%"],
      best: "Buyers building in rural and suburban Texas — including Central Texas.",
    },
    {
      name: "Conventional One-Time Close",
      badge: "5%+ Down · Strong Credit",
      highlights: ["As low as 5% down with 620+ credit", "Best pricing at 740+ credit score", "PMI removable at 20% equity", "More flexibility on property types", "Higher loan limits than government programs"],
      best: "Buyers with strong credit and savings building higher-value homes.",
    },
    {
      name: "FHA 203(k) Renovation",
      badge: "Purchase + Renovate",
      highlights: ["Finance purchase + improvements in one loan", "Based on after-improved value", "Standard: major renovations $5,000+", "Limited: cosmetic improvements up to $35,000", "3.5% down, 580+ credit"],
      best: "Buyers purchasing a property that needs work — priced below market because of condition.",
    },
    {
      name: "VA Renovation Loan",
      badge: "Up to $100K · Veterans",
      highlights: ["Up to $100,000 in improvements financed", "Single loan at after-improved value", "0% down for eligible veterans", "No monthly PMI", "Available statewide in Texas"],
      best: "Veterans buying a home that needs upgrades — without depleting savings.",
    },
    {
      name: "HomeStyle Renovation",
      badge: "Conventional · Any Improvement",
      highlights: ["Finance up to 75% of after-improved value", "Any permanent improvement qualifies", "Includes ADUs and additions", "3–5% down for eligible borrowers", "No FHA restrictions on property condition"],
      best: "Buyers or homeowners with strong credit wanting maximum renovation flexibility.",
    },
  ];

  const faqs = [
    { q: "What is a one-time close construction loan?", a: "A one-time close construction loan combines construction financing and the permanent mortgage into a single loan — one closing, one set of costs, one rate locked before construction begins. When the build is complete, the loan converts automatically to your permanent mortgage with no second qualification, no second appraisal, and no second closing." },
    { q: "Can I use a VA loan for new construction in Texas?", a: "Yes. VA one-time close construction loans are available in Texas with 0% down for eligible veterans and active duty service members. Your rate is locked before construction starts and converts to a permanent VA mortgage at completion. No re-qualification required." },
    { q: "What is an FHA 203(k) loan?", a: "The FHA 203(k) lets you finance the purchase price and the cost of improvements in a single loan based on the after-improved value. It comes in Standard (major renovations $5,000+) and Limited (cosmetic improvements up to $35,000) versions. Available statewide with 3.5% down and 580+ credit." },
    { q: "What is a VA Renovation loan?", a: "A VA Renovation loan lets eligible veterans finance up to $100,000 in home improvements alongside the purchase — in a single loan at the after-improved value. No down payment required. This is separate from the VA one-time close construction loan, which is for ground-up builds." },
    { q: "Can I lock my rate before construction starts?", a: "Yes. One-time close construction loans lock your interest rate at closing, before construction begins. This protects you from rate increases during the build — which typically runs 6–12 months in Texas. This is one of the primary advantages over two-close construction financing." },
    { q: "What is the difference between one-time close and two-close construction loans?", a: "One-time close: single closing, rate locked upfront, automatic conversion at completion. Two-close: a separate construction loan closing, then a second closing for the permanent mortgage — two sets of closing costs, two appraisals, and re-qualification at completion when rates may have moved against you." },
    { q: "Are construction loans available for USDA-eligible areas in Texas?", a: "Yes. USDA one-time close construction loans are available in eligible rural and suburban Texas — including Coryell County (Copperas Cove), parts of Bell County, and many Central Texas communities. No down payment required. Income limits apply." },
    { q: "What is a Fannie Mae HomeStyle renovation loan?", a: "HomeStyle is a conventional renovation loan that allows buyers or homeowners to finance improvements up to 75% of the after-improved property value. It works for any permanent improvement including ADUs and additions — with fewer property condition restrictions than FHA 203(k). Available with 3–5% down for eligible borrowers." },
  ];

  return (
    <>
    <Helmet>
      <title>Construction & Renovation Loans in Texas | Keys by Shalanda</title>
      <meta name="description" content="Finance new construction or renovate your Texas home with the right loan structure. Expert guidance from a licensed Texas mortgage broker. NMLS #554554." />
      <link rel="canonical" href="https://shalandasmith.com/construction-renovation-loans-texas" />
    </Helmet> 
    <div style={S.page}>

      {/* ── HERO ── */}
      <section style={S.hero}>
        <div style={S.heroInner}>
          <div>
            <p style={S.eyebrow}>Construction &amp; Renovation · Texas · All Loan Types · Keys by Shalanda</p>
            <h1 style={S.heroH1}>
              Build It. Buy It. Fix It.<br />
              One Loan. One Closing.
            </h1>
            <p style={S.heroSub}>
              VA, FHA, USDA, and Conventional one-time close construction loans — plus FHA 203(k), HomeStyle, and VA Renovation financing. Lock your rate before the first shovel hits the ground.
            </p>
            <div style={S.heroCTAs}>
              <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={S.ctaPrimary}>
                Book a Strategy Call →
              </a>
              <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" style={S.ctaSecondary}>
                Start My Application
              </a>
            </div>
          </div>

          {/* Quick facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              ["VA Construction", "0% Down Available"],
              ["Rate Lock", "Before Ground Breaks"],
              ["Renovation", "Up to $100K (VA)"],
              ["FHA 203(k)", "3.5% Down"],
              ["One Closing", "No Re-Qualification"],
              ["USDA Areas", "Central TX Qualifies"],
            ].map(([l, v]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", gap: "24px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "10px" }}>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{l}</span>
                <span style={{ fontSize: "13px", color: white, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={S.statsBar}>
        <div style={S.statsInner}>
          {[
            ["7", "Loan Programs Available"],
            ["0%", "Down with VA Construction"],
            ["$100K", "VA Renovation Maximum"],
            ["1", "Closing — Not Two"],
          ].map(([n, l]) => (
            <div key={l} style={S.statItem}>
              <div style={S.statNum}>{n}</div>
              <div style={S.statLabel}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ONE-TIME CLOSE EXPLAINED ── */}
      <section style={S.section()}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>One-Time Close vs. Two-Close</p>
          <h2 style={S.sectionH2}>Why one closing matters<br />more than most buyers realize.</h2>
          <p style={S.sectionSub}>Two-close construction loans are the industry default. One-time close is the better option — here's the difference in plain terms.</p>
          <div style={S.grid2}>
            <div style={S.card}>
              <div style={S.cardTitle}>One-Time Close ★</div>
              {[
                ["Closings", "1 — done before construction starts"],
                ["Closing Costs", "Paid once"],
                ["Rate", "Locked before ground breaks"],
                ["Qualification", "Once — no re-qualification at completion"],
                ["Appraisal", "Based on completed home plans — once"],
                ["Rate Risk", "None during construction period"],
              ].map(([l, v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(26,58,92,0.06)", fontSize: "13px" }}>
                  <span style={{ color: muted, fontWeight: 600 }}>{l}</span>
                  <span style={{ color: navy, fontWeight: 500, textAlign: "right" as const }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={S.card}>
              <div style={S.cardTitle}>Two-Close Construction</div>
              {[
                ["Closings", "2 — construction loan + permanent loan"],
                ["Closing Costs", "Paid twice"],
                ["Rate", "Floats during construction — set at second close"],
                ["Qualification", "Must re-qualify when construction ends"],
                ["Appraisal", "Two appraisals — one for each close"],
                ["Rate Risk", "Exposed for full construction period"],
              ].map(([l, v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(26,58,92,0.06)", fontSize: "13px" }}>
                  <span style={{ color: muted, fontWeight: 600 }}>{l}</span>
                  <span style={{ color: navy, fontWeight: 500, textAlign: "right" as const }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL PROGRAMS ── */}
      <section style={S.section(true)}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>All Programs</p>
          <h2 style={S.sectionH2}>Seven programs. One broker<br />who knows which one fits your file.</h2>
          <p style={S.sectionSub}>Construction and renovation loans are more complex than standard purchases. The right program depends on your loan type, property, credit, and down payment — we run them side by side.</p>
          <div style={S.grid3}>
            {programs.map(p => (
              <div key={p.name} style={S.card}>
                <div style={S.tag(true)}>{p.badge}</div>
                <div style={{ ...S.cardTitle, marginTop: "12px" }}>{p.name}</div>
                <div style={{ marginTop: "12px" }}>
                  {p.highlights.map(h => <p key={h} style={{ fontSize: "13px", color: muted, lineHeight: 1.6, margin: "4px 0", paddingLeft: "14px", position: "relative" as const }}><span style={{ position: "absolute" as const, left: 0, color: copper }}>→</span>{h}</p>)}
                </div>
                <p style={{ fontSize: "12px", color: copper, fontWeight: 600, marginTop: "14px" }}>Best for</p>
                <p style={{ fontSize: "13px", color: muted, lineHeight: 1.5 }}>{p.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={S.section()}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>Quick Comparison</p>
          <h2 style={S.sectionH2}>All seven programs<br />at a glance.</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Program</th>
                  <th style={S.th}>Type</th>
                  <th style={S.th}>Down Payment</th>
                  <th style={S.th}>Min Credit</th>
                  <th style={S.th}>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={S.td()}>VA One-Time Close</td><td style={S.td()}>Construction</td><td style={S.tdGreen}>0%</td><td style={S.td()}>580–620+</td><td style={S.td()}>Veterans building new</td></tr>
                <tr><td style={S.td(true)}>FHA One-Time Close</td><td style={S.td(true)}>Construction</td><td style={S.td(true)}>3.5%</td><td style={S.td(true)}>580+</td><td style={S.td(true)}>First-time buyers building</td></tr>
                <tr><td style={S.td()}>USDA One-Time Close</td><td style={S.td()}>Construction</td><td style={S.tdGreen}>0%</td><td style={S.td()}>640+</td><td style={S.td()}>Rural Texas builds</td></tr>
                <tr><td style={S.td(true)}>Conventional OTC</td><td style={S.td(true)}>Construction</td><td style={S.td(true)}>5%+</td><td style={S.td(true)}>620+</td><td style={S.td(true)}>Strong credit buyers</td></tr>
                <tr><td style={S.td()}>FHA 203(k)</td><td style={S.td()}>Renovation</td><td style={S.td()}>3.5%</td><td style={S.td()}>580+</td><td style={S.td()}>Purchase + fix-up</td></tr>
                <tr><td style={S.td(true)}>VA Renovation</td><td style={S.td(true)}>Renovation</td><td style={S.tdGreen}>0%</td><td style={S.td(true)}>580–620+</td><td style={S.td(true)}>Veterans buying + improving</td></tr>
                <tr><td style={S.td()}>HomeStyle</td><td style={S.td()}>Renovation</td><td style={S.td()}>3–5%</td><td style={S.td()}>620+</td><td style={S.td()}>Any permanent improvement</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={S.section(true)}>
        <div style={S.inner}>
          <div style={S.grid2}>
            <div>
              <p style={S.sectionEyebrow}>How It Works</p>
              <h2 style={S.sectionH2}>One-time close construction<br />step by step.</h2>
              <p style={{ ...S.sectionSub, marginBottom: "36px" }}>More moving parts than a standard purchase — here's exactly what happens from contract to keys.</p>
              {[
                { n: "01", title: "Strategy Call & Program Selection", body: "We review your loan type eligibility, credit, income, and build plans. VA, FHA, USDA, or Conventional — we match the program to your file before you sign a builder contract." },
                { n: "02", title: "Builder Approval", body: "Your builder must be approved by the lender. Most established Texas builders are already on the approved list. New builders go through a qualification process — we manage this." },
                { n: "03", title: "Plans, Specs & Appraisal", body: "The lender orders an appraisal based on your plans and specs — the completed home's projected value. This is the most critical step. Accurate plans = accurate appraisal." },
                { n: "04", title: "One Closing", body: "You close once. Rate is locked. Construction financing is in place. The permanent loan terms are set. No second closing, no re-qualification, no rate surprise at completion." },
                { n: "05", title: "Construction Phase & Draw Inspections", body: "As construction progresses, the lender releases draws to your builder based on inspection milestones. You typically pay interest-only on drawn funds during construction." },
                { n: "06", title: "Modification to Permanent Loan", body: "When construction is complete and the certificate of occupancy is issued, the loan automatically modifies to your permanent mortgage. No new paperwork, no new closing." },
              ].map(s => (
                <div key={s.n} style={S.step}>
                  <div style={S.stepNum}>{s.n}</div>
                  <div>
                    <div style={S.stepTitle}>{s.title}</div>
                    <div style={S.stepBody}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Texas callout */}
            <div>
              <div style={{ ...S.cardNavy, marginTop: "60px" }}>
                <div style={{ marginBottom: "24px" }}>
                  <div style={S.cardTitleLight}>Texas-Specific Considerations</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>What your out-of-state lender doesn't account for</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    { title: "New Construction Tax Bills", body: "Your first tax bill may reflect only the land value — not the completed home. When the county reassesses, the payment jumps. We estimate at the improved rate from day one." },
                    { title: "Homestead Exemption", body: "File with your county appraisal district the year you close. Reduces taxable value by $100,000. Don't wait — this saves money immediately." },
                    { title: "VA Disability Tax Exemption", body: "100% service-connected disability = full property tax exemption on your Texas primary residence. Applies to VA construction loans too." },
                    { title: "USDA Eligibility in Central Texas", body: "Coryell County (Copperas Cove), parts of Bell County, and surrounding areas often qualify for USDA — including for construction loans. Check the USDA map before assuming ineligible." },
                    { title: "Builder Contract Review", body: "Texas builder contracts are written to protect the builder. Review the financing contingency language before signing. We flag issues before they become problems at closing." },
                  ].map(item => (
                    <div key={item.title}>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: copper, marginBottom: "4px" }}>{item.title}</div>
                      <div style={S.cardBodyLight}>{item.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={S.section()}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>FAQ</p>
          <h2 style={S.sectionH2}>Questions buyers ask before<br />signing a builder contract.</h2>
          <p style={S.sectionSub}>Read these before you commit to a builder — the answers change which program you use and how you structure the deal.</p>
          <div style={{ maxWidth: "760px" }}>
            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section style={S.section(true)}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>Texas Markets</p>
          <h2 style={S.sectionH2}>Where Texas buyers are<br />building right now.</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
            {["Dallas-Fort Worth", "Houston", "Austin", "San Antonio", "Killeen-Temple", "Fort Hood Area", "Copperas Cove", "Round Rock", "Georgetown", "Waco", "El Paso", "Abilene", "All of Texas"].map(m => (
              <span key={m} style={S.tag()}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={S.ctaBand}>
        <div style={S.inner}>
          <h2 style={S.ctaBandH2}>Ready to build?<br />Let's structure it right from day one.</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", maxWidth: "560px", margin: "0 auto 28px", lineHeight: 1.65 }}>
            Construction loans have more moving parts than a standard purchase. A 30-minute call before you sign a builder contract can prevent expensive mistakes after.
          </p>
          <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={S.ctaBandBtn}>
            Book a Strategy Call →
          </a>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginTop: "16px" }}>
            Or call/text 254.935.9331 · shalandasmith.com
          </p>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <div style={S.disclaimer}>
        This page is for educational purposes only and does not constitute a loan commitment, rate guarantee, or offer to lend. All loans subject to credit approval. Rates, terms, and program availability subject to change without notice. Not all programs available in all areas. USDA eligibility determined by the USDA Rural Development map — verify before applying.
        <br /><br />
        Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed by the Texas Department of Savings and Mortgage Lending · Equal Housing Lender
        <br />
        shalandasmith.com · 254.935.9331 · <a href="mailto:shalanda@securechoicelending.com" style={{ color: muted }}>shalanda@securechoicelending.com</a>
      </div>
    </div>
     </>   
  );
}
