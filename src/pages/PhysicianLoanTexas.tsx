import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";
// ── SEO + FAQ SCHEMA ──────────────────────────────────────────────────────────
function usePhysicianSEO() {
  useEffect(() => {
    document.title = "Physician Loans Texas | Doctor Mortgage Specialist | Keys by Shalanda";

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("description", "Physician mortgage loans in Texas — low or no down payment, no PMI, student debt flexibility, and future income considered. Built for doctors, dentists, and high-income professionals. Serving all of Texas.");
    setMeta("og:title", "Physician Loans Texas | Doctor Mortgage | Keys by Shalanda", true);
    setMeta("og:description", "Texas physician mortgage loans with no PMI, low down payment, and student debt flexibility. Built for residents, attendings, and high-income professionals.", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://shalandasmith.com/physician-loan-texas");

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a physician mortgage loan?", "acceptedAnswer": { "@type": "Answer", "text": "A physician mortgage loan is a specialized home loan designed for medical doctors, dentists, and other high-income professionals. It allows low or no down payment without PMI, excludes deferred student loan debt from DTI calculations, and considers future income from a signed employment contract — making it possible to buy a home during residency or early in your career." } },
        { "@type": "Question", "name": "Who qualifies for a physician loan in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Eligibility typically includes MDs, DOs, DMDs, DDSs, and in some programs: optometrists, podiatrists, pharmacists, nurse practitioners, physician assistants, attorneys, and CPAs. Residents and fellows qualify — you don't need to be an attending yet. A signed employment contract is usually accepted in place of pay stubs." } },
        { "@type": "Question", "name": "Do physician loans require a down payment?", "acceptedAnswer": { "@type": "Answer", "text": "Most physician loan programs offer 0–5% down with no PMI. Some programs go up to $1M or $1.5M with 0% down, and up to $2M with 5–10% down. The exact structure depends on the lender and loan amount." } },
        { "@type": "Question", "name": "Do physician loans have PMI?", "acceptedAnswer": { "@type": "Answer", "text": "No. Physician loans are specifically structured to waive private mortgage insurance even with less than 20% down. This is one of the primary advantages over conventional loans, which require PMI until you reach 20% equity." } },
        { "@type": "Question", "name": "How do physician loans handle student loan debt?", "acceptedAnswer": { "@type": "Answer", "text": "Most physician loan programs exclude deferred student loan debt from DTI calculations entirely, or use a reduced income-based repayment (IBR) payment rather than the full standard payment. This is critical for residents and new attendings with $200K–$400K in student loans who would otherwise be denied on a standard loan." } },
        { "@type": "Question", "name": "Can I get a physician loan as a resident or fellow in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most physician loan programs accept a signed residency or fellowship contract as proof of future income. You can close on a home 60–90 days before your start date in most cases. You don't need to have started earning your attending salary yet." } },
        { "@type": "Question", "name": "What loan amounts are available for physician loans in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Physician loan programs in Texas typically go up to $1M–$2M depending on down payment. Some programs offer $1M with 0% down, $1.5M with 5% down, and $2M with 10% down. Jumbo physician loans are also available for higher purchase prices." } },
        { "@type": "Question", "name": "Are physician loans available for new construction in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Physician loans can be used for new construction purchases in Texas. You can lock your rate early and close when construction completes. This is common in markets like Austin, Dallas-Fort Worth, Houston, and San Antonio where new builds are prevalent." } },
      ]
    };

    let schemaTag = document.querySelector('script[data-id="physician-faq-schema"]');
    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.setAttribute("type", "application/ld+json");
      schemaTag.setAttribute("data-id", "physician-faq-schema");
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
  hero: { backgroundColor: navy, padding: "80px 24px 72px", position: "relative" as const, overflow: "hidden" as const },
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
  inner: { maxWidth: "1100px", margin: "0 auto" } as React.CSSProperties,
  sectionEyebrow: { fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: copper, fontWeight: 600, marginBottom: "12px" },
  sectionH2: { fontFamily: "'Lora', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: navy, marginBottom: "16px", lineHeight: 1.2 },
  sectionSub: { fontSize: "16px", color: muted, maxWidth: "620px", lineHeight: 1.65, marginBottom: "48px" },
  grid3: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" } as React.CSSProperties,
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" } as React.CSSProperties,
  card: { backgroundColor: white, borderRadius: "10px", padding: "28px", boxShadow: "0 2px 12px rgba(26,58,92,0.07)", borderTop: `3px solid ${copper}` } as React.CSSProperties,
  cardDark: { backgroundColor: navy, borderRadius: "10px", padding: "28px" } as React.CSSProperties,
  cardTitle: { fontFamily: "'Lora', serif", fontSize: "18px", fontWeight: 700, color: navy, marginBottom: "10px" },
  cardTitleLight: { fontFamily: "'Lora', serif", fontSize: "18px", fontWeight: 700, color: copper, marginBottom: "10px" },
  cardBody: { fontSize: "15px", color: muted, lineHeight: 1.65 },
  cardBodyLight: { fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.65 },
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: "14px" },
  th: { backgroundColor: navy, color: white, padding: "12px 16px", textAlign: "left" as const, fontWeight: 600, fontSize: "12px", letterSpacing: "0.05em", textTransform: "uppercase" as const },
  td: (shade?: boolean): React.CSSProperties => ({ padding: "12px 16px", backgroundColor: shade ? "#f0f4f8" : white, color: navy, borderBottom: "1px solid rgba(26,58,92,0.08)" }),
  tdGreen: { padding: "12px 16px", backgroundColor: "#e8f2e8", color: "#2d7a2d", fontWeight: 700, borderBottom: "1px solid rgba(26,58,92,0.08)" } as React.CSSProperties,
  faqItem: { borderBottom: "1px solid rgba(26,58,92,0.1)" },
  faqQ: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", cursor: "pointer", fontWeight: 600, fontSize: "15px", color: navy } as React.CSSProperties,
  faqA: { fontSize: "14px", color: muted, lineHeight: 1.7, paddingBottom: "20px" },
  ctaBand: { backgroundColor: copper, padding: "72px 24px", textAlign: "center" as const },
  ctaBandH2: { fontFamily: "'Lora', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: white, marginBottom: "16px" },
  ctaBandSub: { fontSize: "16px", color: "rgba(255,255,255,0.8)", marginBottom: "32px", maxWidth: "540px", margin: "0 auto 32px" },
  ctaBandBtn: { display: "inline-block", backgroundColor: white, color: copper, padding: "16px 36px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none" },
  disclaimer: { fontSize: "11px", color: muted, lineHeight: 1.6, padding: "24px", backgroundColor: white, borderTop: "1px solid rgba(26,58,92,0.1)", textAlign: "center" as const } as React.CSSProperties,
  tag: { display: "inline-block", backgroundColor: "#f0f4f8", color: navy, padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: 500, margin: "4px" },
  tagCopper: { display: "inline-block", backgroundColor: copper, color: white, padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: 700, margin: "4px" },
};

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

export default function PhysicianLoanTexas() {
  usePhysicianSEO();

  const benefits = [
    { title: "Low or No Down Payment", body: "Most programs offer 0–5% down with no PMI — on loan amounts up to $1M or more. Buy without depleting the cash reserves you spent years building." },
    { title: "No PMI — Ever", body: "Physician loans waive private mortgage insurance regardless of down payment. On a $700K loan, that's $400–$600/month you keep instead of paying a lender's insurance premium." },
    { title: "Student Debt Flexibility", body: "Deferred student loans are excluded or drastically reduced in DTI calculations. $300K in med school debt won't disqualify you the way it would on a conventional loan." },
    { title: "Future Income Considered", body: "A signed employment contract is accepted as income verification. Close on your home 60–90 days before your attending salary starts — without waiting to build a pay stub history." },
    { title: "High Loan Amounts", body: "Programs go up to $1M with 0% down, $1.5M with 5%, and $2M+ with 10%. Designed for markets like Austin, Dallas, and Houston where physician salaries and home prices both run high." },
    { title: "Residents & Fellows Qualify", body: "You don't need to be an attending. A signed residency or fellowship contract is sufficient. Most programs allow closing up to 90 days before your start date." },
  ];

  const whoQualifies = [
    "MD — Medical Doctor", "DO — Doctor of Osteopathic Medicine", "DMD / DDS — Dentist",
    "DPM — Podiatrist", "OD — Optometrist", "PharmD — Pharmacist",
    "NP — Nurse Practitioner", "CRNA — Anesthetist", "PA — Physician Assistant",
    "PhD (select programs)",
  ];

  const faqs = [
    { q: "What is a physician mortgage loan?", a: "A physician mortgage loan is a specialized home loan for medical doctors, dentists, and other high-income professionals. It allows low or no down payment without PMI, excludes deferred student loan debt from DTI calculations, and accepts a signed employment contract as income — making it possible to buy during residency or early career." },
    { q: "Who qualifies for a physician loan in Texas?", a: "Eligibility typically includes MDs, DOs, DMDs, DDSs, and in some programs: optometrists, podiatrists, pharmacists, nurse practitioners, physician assistants, attorneys, and CPAs. Residents and fellows qualify — you don't need to be an attending yet. A signed employment contract is accepted in place of pay stubs." },
    { q: "Do physician loans require a down payment?", a: "Most programs offer 0–5% down with no PMI. Some go up to $1M with 0% down, $1.5M with 5% down, and $2M with 10% down. The structure depends on loan amount and lender guidelines — we match your file to the program that fits." },
    { q: "Do physician loans have PMI?", a: "No. Physician loans waive private mortgage insurance even with less than 20% down. This is one of the primary advantages — on a $700K loan, PMI could cost $400–$600/month on a conventional loan. Physician programs eliminate it entirely." },
    { q: "How do physician loans handle student loan debt?", a: "Most programs exclude deferred student debt from DTI entirely, or use the income-based repayment (IBR) payment rather than the full standard payment. This is critical for residents and new attendings with $200K–$400K in student loans who would otherwise fail DTI on a conventional loan." },
    { q: "Can I get a physician loan as a resident or fellow?", a: "Yes. A signed residency or fellowship contract is accepted as income verification. You can typically close 60–90 days before your start date. You don't need to have started earning your attending salary yet." },
    { q: "Are physician loans available for new construction in Texas?", a: "Yes. Physician loans work for new construction. You can lock your rate early and close when the build completes — common in Austin, DFW, Houston, and San Antonio where new builds are a significant share of the market." },
    { q: "How does a physician loan compare to a conventional or jumbo loan?", a: "Physician loans beat conventional on down payment flexibility, PMI waiver, and student debt treatment. Compared to jumbo loans, physician programs typically have more flexible DTI guidelines and don't require two years of tax returns for early-career physicians." },
  ];

  return (
      <>
    <SEO {...seoMeta.physicianLoanTexas} />
    <Helmet>
      <title>Physician Loans in Texas | Keys by Shalanda | NMLS #554554</title>
      <meta name="description" content="Physician mortgage loans in Texas with no PMI, flexible DTI, and options for residents and attendings. Expert guidance from a licensed Texas broker. NMLS #554554." />
      <link rel="canonical" href="https://shalandasmith.com/physician-loan-texas" />
    </Helmet>
    <div style={S.page}>

      {/* HERO */}
      <div style={S.hero}>
        <div style={S.heroInner}>
          <div>
            <p style={S.eyebrow}>Physician Loans · Texas · All Markets · Keys by Shalanda</p>
            <h1 style={S.heroH1}>
              A Mortgage Built<br />
              for How Doctors<br />
              Actually Get Paid.
            </h1>
            <p style={S.heroSub}>
              Student debt that doesn't count. Future income that does. No PMI on loan amounts up to $2M. Physician mortgage programs exist because conventional underwriting wasn't built for your career path.
            </p>
            <div style={S.heroCTAs}>
              <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={S.ctaPrimary}>
                See If I Qualify →
              </a>
              <a href="https://scl.my1003app.com/554554/register?time=1775490954917" target="_blank" rel="noopener noreferrer" style={S.ctaSecondary}>
                Start My Application
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "28px 24px", minWidth: "220px" }}>
            {[
              ["Down Payment", "0–5% Typical"],
              ["PMI", "None — Ever"],
              ["Student Debt", "Excluded or Reduced"],
              ["Income", "Contract Accepted"],
              ["Max Loan", "Up to $2M+"],
              ["Residents", "Yes — Contract OK"],
            ].map(([l, v]) => (
              <div key={l} style={{ marginBottom: "14px" }}>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{l}</div>
                <div style={{ fontWeight: 700, color: white, fontSize: "15px" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={S.statsBar}>
        <div style={S.statsInner}>
          {[
            ["0%", "Down Payment Available"],
            ["$0", "Monthly PMI"],
            ["$2M+", "Max Loan Amount"],
            ["90 Days", "Before Start Date Allowed"],
          ].map(([n, l]) => (
            <div key={l} style={S.statItem}>
              <div style={S.statNum}>{n}</div>
              <div style={S.statLabel}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY PHYSICIAN LOANS EXIST */}
      <div style={S.section()}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>The Problem</p>
          <h2 style={S.sectionH2}>Conventional underwriting wasn't<br />designed for your career path.</h2>
          <p style={S.sectionSub}>A standard loan looks at last year's tax returns, your current debt-to-income ratio, and your down payment. For most physicians, that picture is deliberately misleading.</p>
          <div style={S.grid3}>
            {[
              { problem: "Your tax returns show low income", fix: "Because you were in residency last year. A physician loan uses your contract — not last year's W-2." },
              { problem: "Your DTI looks impossibly high", fix: "Because $300K in student loans skews the math. Physician programs exclude deferred debt or use IBR payments instead." },
              { problem: "You don't have 20% down saved", fix: "Because you've been in training for 7–12 years. Physician loans allow 0–5% down with no PMI on high loan amounts." },
            ].map(item => (
              <div key={item.problem} style={S.card}>
                <div style={{ ...S.cardTitle, color: copper }}>The Problem</div>
                <div style={{ ...S.cardBody, marginBottom: "16px" }}>{item.problem}</div>
                <div style={S.cardTitle}>The Fix</div>
                <div style={S.cardBody}>{item.fix}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <div style={S.section(true)}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>Program Benefits</p>
          <h2 style={S.sectionH2}>Six reasons physician loans<br />work when conventional doesn't.</h2>
          <p style={S.sectionSub}>These programs exist at the wholesale level — not every lender participates. Access matters as much as eligibility.</p>
          <div style={S.grid3}>
            {benefits.map(b => (
              <div key={b.title} style={S.card}>
                <div style={S.cardTitle}>{b.title}</div>
                <div style={S.cardBody}>{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LOAN LIMITS TABLE */}
      <div style={S.section()}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>Loan Structure</p>
          <h2 style={S.sectionH2}>What physician loan amounts<br />look like in practice.</h2>
          <p style={S.sectionSub}>Most programs tier by loan amount and down payment. Here's the general structure — exact terms depend on lender and your specific file.</p>

          <div style={{ overflowX: "auto" as const, marginBottom: "32px" }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Loan Amount</th>
                  <th style={S.th}>Down Payment</th>
                  <th style={S.th}>PMI</th>
                  <th style={S.th}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={S.td()}>Up to $1,000,000</td><td style={S.td()}>0%</td><td style={S.tdGreen}>None</td><td style={S.td()}>Most common for attendings and residents</td></tr>
                <tr><td style={S.td(true)}>Up to $1,250,000</td><td style={S.td(true)}>5%</td><td style={S.tdGreen}>None</td><td style={S.td(true)}>Common in Austin, DFW, Houston markets</td></tr>
                <tr><td style={S.td()}>Up to $1,500,000</td><td style={S.td()}>10%</td><td style={S.tdGreen}>None</td><td style={S.td()}>High-value primary residence</td></tr>
                <tr><td style={S.td(true)}>$1.5M–$2M+</td><td style={S.td(true)}>10–15%</td><td style={S.tdGreen}>None</td><td style={S.td(true)}>Jumbo physician — lender dependent</td></tr>
                <tr><td style={S.td()}>Conventional comparison</td><td style={S.td()}>3–5%</td><td style={S.td()}>Required until 20% equity</td><td style={S.td()}>Standard DTI rules — student debt counted</td></tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: "13px", color: muted, lineHeight: 1.6, fontStyle: "italic" }}>
            Program terms vary by lender. Loan amounts and down payment requirements shown are representative ranges — actual terms depend on your credit profile, income documentation, and the wholesale lender matched to your file.
          </p>
        </div>
      </div>

      {/* WHO QUALIFIES */}
      <div style={S.section(true)}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>Eligible Designations</p>
          <h2 style={S.sectionH2}>This isn't just for MDs.<br />More designations qualify than you think.</h2>
          <p style={S.sectionSub}>Eligibility has expanded significantly. Ask about your specific designation — the list below covers most programs but not all lenders include every designation.</p>

          <div style={{ marginBottom: "48px" }}>
            {whoQualifies.map(d => (
              <span key={d} style={S.tag}>{d}</span>
            ))}
          </div>

          <div style={S.grid2}>
            <div style={S.cardDark}>
              <div style={S.cardTitleLight}>
                Residents &amp; Fellows: You qualify now.
              </div>
              <div style={{ ...S.cardBodyLight, marginBottom: "16px" }}>
                You don't need to wait until your attending contract starts. Most physician loan programs accept:
              </div>
              <ul style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, paddingLeft: "20px" }}>
                <li>Signed residency or fellowship contract</li>
                <li>Closing up to 90 days before start date</li>
                <li>Current resident income as qualifying income</li>
                <li>Deferred student loans excluded from DTI</li>
              </ul>
            </div>
            <div style={S.cardDark}>
              <div style={S.cardTitleLight}>
                New Attendings: Your contract is enough.
              </div>
              <div style={{ ...S.cardBodyLight, marginBottom: "16px" }}>
                Just started your attending position? No two years of tax returns required.
              </div>
              <ul style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, paddingLeft: "20px" }}>
                <li>Signed offer letter accepted as income</li>
                <li>No requirement for 2 years of W-2s</li>
                <li>Student loans in IBR treated at IBR payment</li>
                <li>Close before your first paycheck if needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PHYSICIAN vs CONVENTIONAL */}
      <div style={S.section()}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>Side by Side</p>
          <h2 style={S.sectionH2}>Physician loan vs. conventional<br />on a $900,000 Texas home.</h2>
          <p style={S.sectionSub}>Same home, same borrower, very different outcome depending on which loan program is used.</p>

          <div style={S.grid2}>
            <div style={{ ...S.card, borderTop: `4px solid ${copper}` }}>
              <div style={{ ...S.cardTitle, marginBottom: "20px" }}>Physician Loan ★</div>
              {[
                ["Down Payment", "0% — $0 out of pocket"],
                ["PMI", "$0/month — waived"],
                ["Student Debt DTI", "Excluded if deferred"],
                ["Income Verification", "Signed contract accepted"],
                ["Loan Amount", "$900,000 financed"],
                ["Cash to Close", "Closing costs only"],
              ].map(([l, v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(26,58,92,0.08)" }}>
                  <span style={{ fontSize: "14px", color: muted }}>{l}</span>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: navy }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={S.card}>
              <div style={{ ...S.cardTitle, marginBottom: "20px" }}>Conventional Loan</div>
              {[
                ["Down Payment", "20% — $180,000 required"],
                ["PMI (if <20% down)", "$500–$700/month"],
                ["Student Debt DTI", "Counted at 1% of balance/mo"],
                ["Income Verification", "2 years tax returns required"],
                ["Loan Amount", "$720,000 (after 20% down)"],
                ["Cash to Close", "$180,000+ down + closing costs"],
              ].map(([l, v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(26,58,92,0.08)" }}>
                  <span style={{ fontSize: "14px", color: muted }}>{l}</span>
                  <span style={{ fontSize: "14px", color: muted }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={S.section(true)}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>FAQ</p>
          <h2 style={S.sectionH2}>Questions physicians ask<br />before they apply.</h2>
          <p style={S.sectionSub}>The answers your lender should give you upfront — especially the ones about student debt and income verification.</p>
          <div style={{ maxWidth: "760px" }}>
            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </div>

      {/* TEXAS MARKETS */}
      <div style={S.section()}>
        <div style={S.inner}>
          <p style={S.sectionEyebrow}>Texas Markets We Serve</p>
          <h2 style={S.sectionH2}>Where Texas physicians<br />are buying right now.</h2>

          <div style={{ marginBottom: "40px" }}>
            {["Houston Medical Center", "Dallas-Fort Worth", "Austin", "San Antonio", "El Paso", "Killeen-Temple", "Round Rock", "Georgetown", "Waco", "Abilene", "All of Texas"].map(m => (
              <span key={m} style={m === "All of Texas" ? S.tagCopper : S.tag}>{m}</span>
            ))}
          </div>

          <div style={{ backgroundColor: navy, borderRadius: "12px", padding: "32px" }}>
            <div style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: copper, marginBottom: "12px" }}>
              A note on Texas property taxes
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
              Texas has no state income tax but property taxes run 1.6–2.6% annually. On a $900,000 home that's $1,200–$1,950/month added to your payment — before principal, interest, or insurance. We build this into your real payment from day one so there are no surprises at your first escrow adjustment. If you have a 100% VA disability rating, a full property tax exemption may also apply.
            </div>
          </div>
        </div>
      </div>

      {/* CTA BAND */}
      <div style={S.ctaBand}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={S.ctaBandH2}>
            You've spent a decade<br />earning this income.
          </h2>
          <p style={S.ctaBandSub}>
            Thirty minutes. We review your designation, income structure, student debt situation, and target price — and tell you exactly which physician loan program fits your file.
          </p>
          <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={S.ctaBandBtn}>
            Book a Strategy Call →
          </a>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "20px" }}>
            Or call/text 254.935.9331 · shalandasmith.com
          </p>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div style={S.disclaimer}>
        <p>This page is for educational purposes only and does not constitute a loan commitment, rate guarantee, or offer to lend. All loans subject to credit approval. Physician loan program availability, eligible designations, loan amounts, and down payment requirements vary by lender and are subject to change without notice. Not all programs are available in all areas.</p>
        <br />
        <p>Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed by the Texas Department of Savings and Mortgage Lending · Equal Housing Lender</p>
        <br />
        <p>shalandasmith.com · 254.935.9331 · <a href="mailto:shalanda@securechoicelending.com" style={{ color: muted }}>shalanda@securechoicelending.com</a></p>
      </div>
    </div>
          </>
  );
}
