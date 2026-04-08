import { useEffect, useState } from "react";

// ── SEO + FAQ SCHEMA ──────────────────────────────────────────────────────────
function useVASEO() {
  useEffect(() => {
    document.title = "VA Loans Texas | VA Loan Specialist | Keys by Shalanda";

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("description", "Texas VA loan specialist helping veterans and active duty buy homes with 0% down, no PMI, and competitive rates. Serving Fort Hood, Killeen, DFW, San Antonio, Houston, and all of Texas.");
    setMeta("og:title", "VA Loans Texas | VA Loan Specialist | Keys by Shalanda", true);
    setMeta("og:description", "Texas VA loan specialist. 0% down, no PMI, funding fee waived for disabled veterans. Serving Fort Hood, Killeen, and all of Texas.", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://shalandasmith.com/va-loan-texas");

    // FAQ Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Who qualifies for a VA loan in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Veterans, active duty service members, National Guard members, Reservists with qualifying service, and eligible surviving spouses may qualify. You'll need a Certificate of Eligibility (COE), which your lender can pull directly from the VA system." } },
        { "@type": "Question", "name": "Can I buy a home near Fort Hood with a VA loan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. VA loans work across all of Texas including the Killeen-Temple-Fort Hood area. There are no geographic restrictions for VA loans within the United States." } },
        { "@type": "Question", "name": "What is the VA funding fee in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "For a first-time VA loan with no down payment, the funding fee is 2.15%. Subsequent use is 3.30%. Putting 5% down drops the fee to 1.50% for both. Putting 10% or more down drops it to 1.25%. Veterans receiving VA disability compensation are completely exempt from the funding fee." } },
        { "@type": "Question", "name": "Do disabled veterans pay the VA funding fee?", "acceptedAnswer": { "@type": "Answer", "text": "No. Veterans receiving VA disability compensation at any rating level are fully exempt from the VA funding fee. This can save $4,000–$16,000 depending on the loan amount. The exemption appears on your Certificate of Eligibility." } },
        { "@type": "Question", "name": "Is there a VA loan limit in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Veterans with full entitlement have no VA loan limit — they can borrow as much as a lender will approve with no down payment required. Loan limits only apply to veterans with reduced entitlement from a prior VA loan that has not been paid off." } },
        { "@type": "Question", "name": "What is the VA property tax exemption in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Texas offers a full property tax exemption on a veteran's primary residence for those with a 100% service-connected disability rating. Partial ratings receive scaled reductions. This is separate from the homestead exemption and must be applied for through your county appraisal district using your VA award letter." } },
        { "@type": "Question", "name": "Can I use a VA loan more than once?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. VA loan benefits can be used multiple times. If you've paid off a prior VA loan and sold the property, your entitlement is restored and you can reuse the benefit. You can also have two VA loans simultaneously under certain conditions." } },
        { "@type": "Question", "name": "How is a VA loan different from FHA or conventional?", "acceptedAnswer": { "@type": "Answer", "text": "VA loans require no down payment, have no monthly mortgage insurance (PMI), and typically carry lower interest rates than conventional loans. The one-time funding fee replaces ongoing mortgage insurance. For eligible veterans, VA is almost always the strongest option available." } },
      ]
    };

    let schemaTag = document.querySelector('script[data-id="va-faq-schema"]');
    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.setAttribute("type", "application/ld+json");
      schemaTag.setAttribute("data-id", "va-faq-schema");
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
const green = "#2d7a2d";

const S = {
  page: { backgroundColor: bg, fontFamily: "'Outfit', sans-serif", color: navy } as React.CSSProperties,
  hero: { backgroundColor: navy, padding: "80px 24px 72px", position: "relative" as const, overflow: "hidden" as const },
  heroInner: { maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "center" } as React.CSSProperties,
  eyebrow: { fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: copper, marginBottom: "18px", fontWeight: 500 },
  heroH1: { fontFamily: "'Lora', serif", fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 700, color: white, lineHeight: 1.1, marginBottom: "20px" },
  heroSub: { fontSize: "17px", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, maxWidth: "560px", marginBottom: "32px" },
  heroCTAs: { display: "flex", gap: "12px", flexWrap: "wrap" as const },
  ctaPrimary: { display: "inline-block", backgroundColor: copper, color: white, padding: "14px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", letterSpacing: "0.01em" },
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
  grid3: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" } as React.CSSProperties,
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" } as React.CSSProperties,
  card: (highlight?: boolean): React.CSSProperties => ({
    backgroundColor: highlight ? navy : white,
    borderRadius: "10px",
    padding: "28px",
    boxShadow: highlight ? "none" : "0 2px 12px rgba(26,58,92,0.07)",
    borderTop: highlight ? "none" : `3px solid ${copper}`,
  }),
  cardTitle: (highlight?: boolean): React.CSSProperties => ({ fontFamily: "'Lora', serif", fontSize: "18px", fontWeight: 700, color: highlight ? copper : navy, marginBottom: "10px" }),
  cardBody: (highlight?: boolean): React.CSSProperties => ({ fontSize: "15px", color: highlight ? "rgba(255,255,255,0.75)" : muted, lineHeight: 1.65 }),
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: "14px" },
  th: { backgroundColor: navy, color: white, padding: "12px 16px", textAlign: "left" as const, fontWeight: 600, fontSize: "12px", letterSpacing: "0.05em", textTransform: "uppercase" as const },
  td: (shade?: boolean): React.CSSProperties => ({ padding: "12px 16px", backgroundColor: shade ? "#f0f4f8" : white, color: navy, borderBottom: "1px solid rgba(26,58,92,0.08)" }),
  tdHighlight: { padding: "12px 16px", backgroundColor: "#e8f2e8", color: green, fontWeight: 700, borderBottom: "1px solid rgba(26,58,92,0.08)" } as React.CSSProperties,
  step: { display: "flex", gap: "20px", marginBottom: "32px", alignItems: "flex-start" } as React.CSSProperties,
  stepNum: { flexShrink: 0, width: "40px", height: "40px", borderRadius: "50%", backgroundColor: copper, color: white, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "16px" } as React.CSSProperties,
  stepTitle: { fontFamily: "'Lora', serif", fontSize: "17px", fontWeight: 700, color: navy, marginBottom: "6px" },
  stepBody: { fontSize: "14px", color: muted, lineHeight: 1.65 },
  faqItem: { borderBottom: "1px solid rgba(26,58,92,0.1)", paddingBottom: "0" },
  faqQ: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", cursor: "pointer", fontWeight: 600, fontSize: "15px", color: navy } as React.CSSProperties,
  faqA: { fontSize: "14px", color: muted, lineHeight: 1.7, paddingBottom: "20px" },
  texasBox: { backgroundColor: navy, borderRadius: "12px", padding: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px" } as React.CSSProperties,
  texasItem: { borderLeft: `3px solid ${copper}`, paddingLeft: "16px" },
  texasLabel: { fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: copper, fontWeight: 600, marginBottom: "6px" },
  texasTitle: { fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: white, marginBottom: "8px" },
  texasBody: { fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 },
  ctaBand: { backgroundColor: copper, padding: "72px 24px", textAlign: "center" as const },
  ctaBandH2: { fontFamily: "'Lora', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: white, marginBottom: "16px" },
  ctaBandSub: { fontSize: "16px", color: "rgba(255,255,255,0.8)", marginBottom: "32px", maxWidth: "540px", margin: "0 auto 32px" },
  ctaBandBtn: { display: "inline-block", backgroundColor: white, color: copper, padding: "16px 36px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", letterSpacing: "0.01em" },
  disclaimer: { fontSize: "11px", color: muted, lineHeight: 1.6, padding: "24px", backgroundColor: white, borderTop: "1px solid rgba(26,58,92,0.1)", textAlign: "center" as const } as React.CSSProperties,
};

// ── FAQ ITEM ──────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={S.faqItem}>
      <div style={S.faqQ} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span style={{ fontSize: "20px", color: copper }}>{open ? "−" : "+"}</span>
      </div>
      {open && <div style={S.faqA}>{a}</div>}
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function VALoanTexas() {
  useVASEO();

  const benefits = [
    { title: "0% Down Payment", body: "No down payment required for veterans with full entitlement. One of the only loan programs that allows zero down without monthly mortgage insurance." },
    { title: "No PMI — Ever", body: "VA loans have no monthly private mortgage insurance. The one-time funding fee replaces ongoing insurance costs and can be rolled into the loan." },
    { title: "Competitive Rates", body: "VA loan rates are typically 0.25–0.75% lower than conventional loans because the VA guaranty reduces lender risk. Lower rate, lower payment." },
    { title: "No Loan Limits (Full Entitlement)", body: "Veterans with full entitlement can borrow as much as a lender will approve — with zero down — regardless of purchase price." },
    { title: "Flexible Credit Guidelines", body: "The VA sets no official minimum credit score. Most lenders require 580–620+. If you've had credit challenges, VA is often the most accessible path to approval." },
    { title: "Funding Fee Waived for Disabled Vets", body: "Any service-connected disability rating — 10% or higher — waives the funding fee entirely. This saves $4,000–$16,000 on a typical Texas home purchase." },
  ];

  const steps = [
    { n: "01", title: "Confirm Your Eligibility", body: "We pull your Certificate of Eligibility (COE) directly from the VA system — you don't need to find it yourself. If you served active duty, National Guard, or Reserves with qualifying service, you likely have it." },
    { n: "02", title: "Strategy Call & File Review", body: "We review your credit profile, income structure, and VA entitlement. If you have a disability rating, we confirm your funding fee exemption before anything else. Then we run your actual numbers." },
    { n: "03", title: "Pre-Approval", body: "Credit pulled, income verified, full document package reviewed. This is the pre-approval letter sellers take seriously. We build it to hold up when it matters." },
    { n: "04", title: "Find Your Home & Make an Offer", body: "Texas contracts include an option period — use it. The Third-Party Financing Addendum protects your earnest money if financing falls through. We advise you on every step." },
    { n: "05", title: "VA Appraisal & Underwriting", body: "VA appraisals confirm the property meets VA Minimum Property Requirements (MPRs). We manage conditions quickly — one slow response can cost you a closing date." },
    { n: "06", title: "Clear to Close", body: "Final numbers reviewed, Closing Disclosure confirmed, keys in hand. We walk you through every line before you sign." },
  ];

  const faqs = [
    { q: "Who qualifies for a VA loan in Texas?", a: "Veterans, active duty service members, National Guard members, Reservists with qualifying service, and eligible surviving spouses may qualify. You'll need a Certificate of Eligibility (COE) — your lender can pull it directly from the VA system." },
    { q: "Can I buy a home near Fort Hood with a VA loan?", a: "Yes. VA loans work across all of Texas including the Killeen-Temple-Fort Hood area, with no geographic restrictions. The Central Texas market — including Copperas Cove, Harker Heights, and Belton — is one of our most active VA markets." },
    { q: "What is the VA funding fee in 2026?", a: "For a first-time VA loan with no down payment, the funding fee is 2.15%. Subsequent use is 3.30%. Putting 5% down drops the fee to 1.50% for both. Putting 10%+ down drops it to 1.25%. The fee can be rolled into the loan. Veterans receiving VA disability compensation are fully exempt." },
    { q: "Do disabled veterans pay the VA funding fee?", a: "No. Any service-connected disability rating — 10% or higher — fully exempts you from the funding fee. This saves between $4,000 and $16,000 depending on loan amount. Your exemption status appears on your COE, and we verify it before your file moves forward." },
    { q: "Is there a VA loan limit in Texas?", a: "Veterans with full entitlement have no VA loan limit and can purchase at any price with zero down — subject to lender approval. Loan limits only apply to veterans with reduced entitlement from an active prior VA loan." },
    { q: "What is the Texas VA property tax exemption?", a: "Texas offers a full property tax exemption on a primary residence for veterans with a 100% service-connected disability rating. Partial ratings (10%–90%) receive scaled reductions. This is separate from the homestead exemption and must be filed with your county appraisal district using your VA award letter." },
    { q: "Can I use a VA loan more than once?", a: "Yes. VA loan benefits can be reused. If you've paid off a prior VA loan and sold the property, your entitlement restores automatically. You can also have two VA loans simultaneously under certain conditions — such as PCS moves." },
    { q: "How does a VA loan compare to FHA or conventional?", a: "For eligible veterans, VA almost always wins. No down payment, no PMI, and lower rates than conventional. The one-time funding fee is the only cost — and it's waived entirely for disabled veterans. FHA requires mortgage insurance for the life of the loan if you put less than 10% down." },
  ];

  const texasItems = [
    { label: "Property Taxes", title: "Full Exemption for 100% Disabled Vets", body: "A 100% service-connected disability rating qualifies you for a full property tax exemption on your Texas primary residence. Partial ratings receive scaled reductions. File with your county appraisal district using your VA award letter after closing." },
    { label: "Homestead Exemption", title: "Additional $100,000 Reduction", body: "File for the homestead exemption in the same year you close. It reduces your taxable property value by $100,000 — stacks on top of any VA disability exemption. Don't wait — file the year you close." },
    { label: "Fort Hood / Killeen Market", title: "Central Texas VA Specialists", body: "Bell County, Coryell County (Copperas Cove), and surrounding areas are among our most active VA markets. We know these communities, the property types, and what appraisers look for here." },
    { label: "Texas Option Period", title: "Use It — Don't Waive It", body: "Texas contracts include a separate option period (typically 5–10 days) that lets you back out for any reason. VA buyers should always keep this. The Third-Party Financing Addendum also protects your earnest money if financing falls through." },
    { label: "COE Access", title: "We Pull It For You", body: "Your Certificate of Eligibility is accessible through the VA: Health and Benefits mobile app — or we pull it directly from the VA system on your behalf. You don't need to track it down before your strategy call." },
    { label: "Community Property State", title: "Both Spouses May Need to Sign", body: "Texas is a community property state. Even if only one spouse is on the VA loan, the other may need to sign certain documents. We flag this before closing — not at the closing table." },
  ];

  return (
    <div style={S.page}>

      {/* ── HERO ── */}
      <div style={S.hero}>
        <div style={S.heroInner}>
          <div>
            <p style={S.eyebrow}>VA Loans · Texas · All Markets · Keys by Shalanda</p>
            <h1 style={S.heroH1}>
              The Most Powerful<br />
              Home Loan Benefit<br />
              You've Already Earned.
            </h1>
            <p style={S.heroSub}>
              0% down. No PMI. Competitive rates. And a funding fee that's completely waived if you carry a VA disability rating. We specialize in VA loans across all of Texas — from Fort Hood to Houston.
            </p>
            <div style={S.heroCTAs}>
              <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={S.ctaPrimary}>
                Check My VA Eligibility →
              </a>
              <a href="https://scl.my1003app.com/554554/register?time=1775490954917" target="_blank" rel="noopener noreferrer" style={S.ctaSecondary}>
                Start My Application
              </a>
            </div>
          </div>

          {/* Quick facts box */}
          <div style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "28px 24px", minWidth: "220px" }}>
            {[
              ["Down Payment", "0% Required"],
              ["Monthly PMI", "None — Ever"],
              ["Funding Fee", "2.15% (1st Use)"],
              ["Disabled Vets", "Fee Waived"],
              ["Loan Limit", "None (Full Entitlement)"],
              ["Credit Min.", "580–620+ Typical"],
            ].map(([l, v]) => (
              <div key={l} style={{ marginBottom: "14px" }}>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{l}</div>
                <div style={{ fontWeight: 700, color: white, fontSize: "15px" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={S.statsBar}>
        <div style={S.statsInner}>
          {[
            ["525,759", "VA Loans Guaranteed in FY2025"],
            ["$0", "Monthly Mortgage Insurance"],
            ["20+ Years", "Texas Mortgage Experience"],
            ["50+", "Wholesale Lenders Shopped"],
          ].map(([n, l]) => (
            <div key={l} style={S.statItem}>
              <div style={S.statNum}>{n}</div>
              <div style={S.statLabel}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BENEFITS ── */}
      <div style={S.section()}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>Why VA</p>
          <h2 style={S.sectionH2}>Six reasons VA is the strongest<br />loan product available — if you qualify.</h2>
          <p style={S.sectionSub}>Most lenders know VA exists. Not all of them know how to structure it. There's a difference between a lender who offers VA loans and one who specializes in them.</p>
          <div style={S.grid3}>
            {benefits.map(b => (
              <div key={b.title} style={S.card()}>
                <div style={S.cardTitle()}>{b.title}</div>
                <div style={S.cardBody()}>{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FUNDING FEE TABLE ── */}
      <div style={S.section(true)}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>2026 Funding Fee</p>
          <h2 style={S.sectionH2}>Know exactly what you'll pay<br />before you apply.</h2>
          <p style={S.sectionSub}>The funding fee is the only mortgage insurance cost on a VA loan — and it's one-time, not monthly. Here's the full 2026 schedule.</p>

          <div style={{ overflowX: "auto" as const, marginBottom: "32px" }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Down Payment</th>
                  <th style={S.th}>First Use</th>
                  <th style={S.th}>Subsequent Use</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={S.td()}>Less than 5%</td><td style={S.td()}>2.15%</td><td style={S.td()}>3.30%</td></tr>
                <tr><td style={S.td(true)}>5% – 9.99%</td><td style={S.td(true)}>1.50%</td><td style={S.td(true)}>1.50%</td></tr>
                <tr><td style={S.td()}>10% or more</td><td style={S.td()}>1.25%</td><td style={S.td()}>1.25%</td></tr>
                <tr><td style={S.td(true)}>VA IRRRL (Streamline Refi)</td><td style={S.td(true)}>0.50%</td><td style={S.td(true)}>0.50%</td></tr>
                <tr>
                  <td style={S.tdHighlight}>Disabled Veteran (any rating)</td>
                  <td style={S.tdHighlight}>$0 — Exempt</td>
                  <td style={S.tdHighlight}>$0 — Exempt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={S.grid2}>
            <div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: navy, marginBottom: "12px" }}>Funding fee is waived if you:</div>
              <ul style={{ fontSize: "14px", color: muted, lineHeight: 1.8, paddingLeft: "20px" }}>
                <li>Receive VA disability compensation (any %)</li>
                <li>Would receive disability pay but take retirement instead</li>
                <li>Are a Purple Heart recipient on active duty</li>
                <li>Are an eligible surviving spouse receiving DIC</li>
              </ul>
            </div>
            <div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: navy, marginBottom: "12px" }}>The fee can be:</div>
              <ul style={{ fontSize: "14px", color: muted, lineHeight: 1.8, paddingLeft: "20px" }}>
                <li>Rolled into the loan (most common)</li>
                <li>Paid at closing in cash</li>
                <li>Covered by seller concessions (up to 4%)</li>
                <li>Deductible starting tax year 2026 (if you itemize)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── TEXAS-SPECIFIC ── */}
      <div style={S.section()}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>Texas-Specific</p>
          <h2 style={S.sectionH2}>What your out-of-state lender<br />doesn't know about Texas VA loans.</h2>
          <p style={S.sectionSub}>Texas has its own tax rules, exemptions, and contract structures that affect VA buyers specifically. These matter — and most national lenders don't account for them.</p>
          <div style={S.texasBox}>
            {texasItems.map(item => (
              <div key={item.label} style={S.texasItem}>
                <div style={S.texasLabel}>{item.label}</div>
                <div style={S.texasTitle}>{item.title}</div>
                <div style={S.texasBody}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROCESS ── */}
      <div style={S.section(true)}>
        <div style={S.inner}>
          <div style={S.grid2}>
            <div>
              <p style={S.sectionEyebrow}>The Process</p>
              <h2 style={S.sectionH2}>How a Texas VA purchase<br />actually works.</h2>
              <p style={{ ...S.sectionSub, marginBottom: "36px" }}>From confirming your eligibility to keys in hand — here's what happens at each stage and what you need to have ready.</p>
              {steps.map(s => (
                <div key={s.n} style={S.step}>
                  <div style={S.stepNum}>{s.n}</div>
                  <div>
                    <div style={S.stepTitle}>{s.title}</div>
                    <div style={S.stepBody}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* VA vs Others comparison */}
            <div>
              <div style={{ backgroundColor: navy, borderRadius: "12px", overflow: "hidden" as const }}>
                <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontWeight: 700, color: white }}>VA vs. The Alternatives</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>On a $350,000 Texas home purchase</div>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  {[
                    { label: "VA Loan (0% down)", dp: "$0", pmi: "$0/mo forever", upfront: "$7,525 fee (financed)", highlight: true },
                    { label: "FHA (3.5% down)", dp: "$12,250", pmi: "$170/mo forever*", upfront: "$6,125 UFMIP", highlight: false },
                    { label: "Conventional (5% down)", dp: "$17,500", pmi: "$180/mo until 80% LTV", upfront: "$0", highlight: false },
                  ].map(row => (
                    <div key={row.label} style={{
                      padding: "16px",
                      borderRadius: "8px",
                      marginBottom: "12px",
                      backgroundColor: row.highlight ? "rgba(181,98,30,0.15)" : "rgba(255,255,255,0.05)",
                      border: row.highlight ? `1px solid ${copper}` : "1px solid rgba(255,255,255,0.08)",
                    }}>
                      <div style={{ fontWeight: 700, color: row.highlight ? copper : white, fontSize: "14px", marginBottom: "8px" }}>{row.label}</div>
                      {[["Down Payment", row.dp], ["Monthly PMI/MIP", row.pmi], ["Upfront Insurance", row.upfront]].map(([l, v]) => (
                        <div key={l} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "4px" }}>
                          <span style={{ color: "rgba(255,255,255,0.5)" }}>{l}</span>
                          <span style={{ color: white, fontWeight: 600 }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "16px", lineHeight: 1.5 }}>
                    *FHA MIP stays for life of loan with &lt;10% down. Funding fee at 2.15% first use, 0% down. Rates illustrative.
                  </div>
                  <a href="/calculators" style={{ display: "inline-block", marginTop: "16px", color: copper, fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                    Run My Numbers →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={S.section()}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>FAQ</p>
          <h2 style={S.sectionH2}>Questions VA buyers ask<br />before they apply.</h2>
          <p style={S.sectionSub}>The answers your lender should give you upfront — and the ones most don't volunteer.</p>
          <div style={{ maxWidth: "780px" }}>
            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </div>

      {/* ── MARKETS ── */}
      <div style={S.section(true)}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>Texas Markets We Serve</p>
          <h2 style={S.sectionH2}>El Paso to Houston.<br />Every ZIP code in between.</h2>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "10px", marginTop: "32px" }}>
            {["Fort Hood / Killeen", "Temple", "Copperas Cove", "Harker Heights", "Belton", "Dallas-Fort Worth", "Houston", "San Antonio", "Austin", "El Paso", "Round Rock", "Georgetown", "Waco", "Abilene", "All of Texas"].map(m => (
              <span key={m} style={{
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 500,
                backgroundColor: m === "All of Texas" ? copper : white,
                color: m === "All of Texas" ? white : navy,
                boxShadow: m === "All of Texas" ? "none" : "0 1px 6px rgba(26,58,92,0.08)",
              }}>{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BAND ── */}
      <div style={S.ctaBand}>
        <div>
          <h2 style={S.ctaBandH2}>You earned this benefit.<br />Let's make sure you use it right.</h2>
          <p style={S.ctaBandSub}>Thirty minutes. We confirm your eligibility, check your disability exemption status, run your real numbers, and tell you exactly what you can buy — before you talk to a single real estate agent.</p>
          <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={S.ctaBandBtn}>
            Book a Strategy Call →
          </a>
          <div style={{ marginTop: "14px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
            Or call/text 254.935.9331 · shalandasmith.com
          </div>
        </div>
      </div>

      {/* ── DISCLAIMER ── */}
      <div style={S.disclaimer}>
        <p style={{ marginBottom: "8px" }}>
          This page is for educational purposes only and does not constitute a loan commitment, rate guarantee, or offer to lend. All loans subject to credit approval. Rates and terms subject to change without notice. VA funding fee percentages reflect current VA guidelines as of 2026. Property tax exemption eligibility is determined by the Texas Veterans Commission and county appraisal districts — consult your county for current requirements.
        </p>
        <p style={{ marginBottom: "8px" }}>
          Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed by the Texas Department of Savings and Mortgage Lending · Equal Housing Lender
        </p>
        <p>
          shalandasmith.com · 254.935.9331 · <a href="mailto:shalanda@securechoicelending.com" style={{ color: muted }}>shalanda@securechoicelending.com</a>
        </p>
      </div>
    </div>
  );
}
