import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

/* ── SEO ──────────────────────────────────────────────────────────────────── */
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

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Who qualifies for a VA loan in Texas?", acceptedAnswer: { "@type": "Answer", text: "Veterans, active duty service members, National Guard members, Reservists with qualifying service, and eligible surviving spouses may qualify. You'll need a Certificate of Eligibility (COE), which your lender can pull directly from the VA system." } },
        { "@type": "Question", name: "Can I buy a home near Fort Hood with a VA loan?", acceptedAnswer: { "@type": "Answer", text: "Yes. VA loans work across all of Texas including the Killeen-Temple-Fort Hood area. There are no geographic restrictions for VA loans within the United States." } },
        { "@type": "Question", name: "What is the VA funding fee in 2026?", acceptedAnswer: { "@type": "Answer", text: "For a first-time VA loan with no down payment, the funding fee is 2.15%. Subsequent use is 3.30%. Putting 5% down drops the fee to 1.50%. Putting 10%+ down drops it to 1.25%. Veterans receiving VA disability compensation are completely exempt." } },
        { "@type": "Question", name: "Do disabled veterans pay the VA funding fee?", acceptedAnswer: { "@type": "Answer", text: "No. Veterans receiving VA disability compensation at any rating level are fully exempt from the VA funding fee." } },
        { "@type": "Question", name: "Is there a VA loan limit in Texas?", acceptedAnswer: { "@type": "Answer", text: "Veterans with full entitlement have no VA loan limit. Loan limits only apply to veterans with reduced entitlement from a prior VA loan that has not been paid off." } },
        { "@type": "Question", name: "What is the VA property tax exemption in Texas?", acceptedAnswer: { "@type": "Answer", text: "Texas offers a full property tax exemption on a veteran's primary residence for those with a 100% service-connected disability rating. Partial ratings receive scaled reductions." } },
        { "@type": "Question", name: "Can I use a VA loan more than once?", acceptedAnswer: { "@type": "Answer", text: "Yes. VA loan benefits can be used multiple times. If you've paid off a prior VA loan and sold the property, your entitlement is restored." } },
        { "@type": "Question", name: "How is a VA loan different from FHA or conventional?", acceptedAnswer: { "@type": "Answer", text: "VA loans require no down payment, have no monthly mortgage insurance (PMI), and typically carry lower interest rates than conventional loans." } },
      ],
    };
    let schemaTag = document.querySelector('script[data-id="va-faq-schema"]');
    if (!schemaTag) { schemaTag = document.createElement("script"); schemaTag.setAttribute("type", "application/ld+json"); schemaTag.setAttribute("data-id", "va-faq-schema"); document.head.appendChild(schemaTag); }
    schemaTag.textContent = JSON.stringify(schema);
  }, []);
}

/* ── TOKENS ────────────────────────────────────────────────────────────────── */
const hero = "#1a2535";
const navy = "#1a3a5c";
const copper = "#b5621e";
const copperLight = "#fef0e6";
const white = "#ffffff";
const soft = "#f2efe9";
const textPrimary = "#1c2630";
const textSecondary = "#4a5568";
const textMuted = "#8898aa";
const textOnDark = "#f0ede6";
const border = "#ddd8cf";
const radius = "10px";

const CALENDLY = "https://calendly.com/shalanda-securechoicelending/30min";
const APPLY = "https://scl.my1003app.com/554554/register";

/* ── SHARED STYLES ────────────────────────────────────────────────────────── */
const container: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };
const sectionPad: React.CSSProperties = { padding: "72px 0" };
const tag = (color = copper): React.CSSProperties => ({ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color, fontWeight: 600, marginBottom: 12, fontFamily: "'Fira Mono', monospace" });
const h2Style = (color = navy): React.CSSProperties => ({ fontFamily: "'Lora', serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color, lineHeight: 1.2, marginBottom: 16 });
const subStyle = (color = textMuted): React.CSSProperties => ({ fontSize: 16, color, lineHeight: 1.65, maxWidth: 620, marginBottom: 48 });
const btnPrimary: React.CSSProperties = { display: "inline-block", backgroundColor: copper, color: white, padding: "14px 28px", borderRadius: 6, fontWeight: 700, fontSize: 15, textDecoration: "none" };
const btnOutline: React.CSSProperties = { display: "inline-block", backgroundColor: "transparent", color: white, padding: "14px 28px", borderRadius: 6, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.35)" };
const btnOutlineDark: React.CSSProperties = { ...btnOutline, color: navy, border: `1px solid ${border}` };

/* ── COMPONENT ─────────────────────────────────────────────────────────────── */
export default function VALoanTexas() {
  useVASEO();

  const eligibilityCards = [
    { icon: "🎖️", title: "Active Duty", desc: "90 consecutive days wartime · 181 days peacetime" },
    { icon: "🏅", title: "Veterans", desc: "Must meet minimum service requirements · DD-214 required" },
    { icon: "🛡️", title: "Guard & Reserve", desc: "6 years service · or 90 days under Title 32 orders" },
    { icon: "💛", title: "Surviving Spouses", desc: "Veteran died in service or from service-connected disability" },
  ];

  const benefits = [
    { title: "No down payment", body: "With full entitlement, purchase any home in Texas with zero down — no cap on price." },
    { title: "No PMI — ever", body: "Conventional requires PMI under 20% down. FHA requires it for life. VA has neither." },
    { title: "Competitive rates", body: "VA guarantee reduces lender risk — rates typically beat conventional, even with lower credit scores." },
    {
      title: "Seller concessions — and potentially more",
      body: "The VA allows sellers to pay up to 4% of the purchase price in concessions. On a $300K home, that's up to $12,000.",
      callout: "The 4% cap covers concessions — but it's separate from other seller-paid costs like buying down your rate or covering normal closing fees. Working with a knowledgeable VA broker means structuring the offer to maximize every dollar the seller can contribute, often well beyond what buyers assume is possible.",
    },
    { title: "Flexible credit standards", body: "The VA doesn't set a minimum credit score — but lenders do. Most will work with scores down to 580. More conservative lenders set their floor at 620. Either way, your full financial picture — income, assets, payment history — carries more weight than a single number. If one lender says no, that's their overlay, not a VA denial." },
  ];

  const builders = ["D.R. Horton", "Lennar", "MHI / Coventry", "Pulte", "Perry Homes", "Meritage"];

  const texasItems = [
    { badge: "Property taxes", body: "No state income tax, but property taxes run 1.6%–2.6% of assessed value. Bell County (Killeen, Temple): 1.85%–2.20%. Williamson County (Round Rock, Georgetown): 2.00%–2.40%. These go into your monthly escrow — they affect what you qualify for." },
    { badge: "VA disability exemption", body: "100% rating = full property tax exemption on your Texas primary residence. Partial ratings receive a scaled reduction. File with your county appraisal district using your VA award letter after closing." },
    { badge: "Homestead exemption", body: "Texas law reduces your taxable home value by $100,000. File in the year you close — it doesn't happen automatically." },
    { badge: "Community property", body: "If you're married, your spouse may need to sign certain loan documents even if they're not on the loan. Standard in Texas — not a red flag." },
    { badge: "Option period", body: "Texas contracts include a 5–10 day window to back out for any reason and keep your earnest money. Use it for inspections. Don't waive it." },
  ];

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", color: textPrimary }}>
      <Helmet>
        <title>VA Loans Texas | VA Loan Specialist | Keys by Shalanda</title>
        <meta name="description" content="Texas VA loan specialist helping veterans and active duty buy homes with 0% down, no PMI, and competitive rates." />
        <link rel="canonical" href="https://shalandasmith.com/va-loan-texas" />
      </Helmet>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: hero, padding: "80px 0 0" }}>
        <div style={{ ...container, maxWidth: 1120 }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(181,98,30,0.15)", border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 18px", marginBottom: 24 }}>
            <span style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: copper, fontWeight: 600, fontFamily: "'Fira Mono', monospace" }}>VA Loan Specialist · Texas Mortgage Broker</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(32px,5vw,54px)", fontWeight: 700, color: white, lineHeight: 1.08, marginBottom: 20, maxWidth: 720 }}>
            VA Loans in Texas: What You're Actually Entitled&nbsp;To
          </h1>
          <p style={{ fontSize: 17, color: "rgba(240,237,230,0.72)", lineHeight: 1.65, maxWidth: 600, marginBottom: 32 }}>
            No down payment. No PMI. Competitive rates. If you served and you're buying in Texas, VA should be the first conversation — not the last.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={btnPrimary}>Schedule a Strategy Call</a>
            <a href={APPLY} target="_blank" rel="noopener noreferrer" style={btnOutline}>Start Your Application</a>
          </div>
        </div>
        {/* Trust strip */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 0" }}>
          <div style={{ ...container, display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "8px 0" }}>
            {["5.0 Google Rating", "VA Specialist", "21-Day Avg Close", "50+ Lender Network", "Fort Hood to Houston"].map((item, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
                {i > 0 && <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper, margin: "0 16px", flexShrink: 0 }} />}
                <span style={{ fontSize: 13, color: "rgba(240,237,230,0.6)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. ELIGIBILITY ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Eligibility</p>
          <h2 style={h2Style()}>Who qualifies for a VA loan in Texas</h2>
          <p style={subStyle()}>The benefit is broader than most people realize. Here's who's covered.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 40 }}>
            {eligibilityCards.map((c) => (
              <div key={c.title} style={{ backgroundColor: soft, borderRadius: radius, padding: 28 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 17, fontWeight: 700, color: navy, marginBottom: 8 }}>{c.title}</div>
                <div style={{ fontSize: 14, color: textSecondary, lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ borderLeft: `3px solid ${navy}`, backgroundColor: "#eaf0f8", borderRadius: radius, padding: "24px 28px" }}>
            <p style={{ fontSize: 14, color: navy, lineHeight: 1.7, margin: 0 }}>
              <strong>Certificate of Eligibility (COE):</strong> Pull it yourself at VA.gov, through the VA Health &amp; Benefits app, or we pull it directly during your application. It's not a barrier — it's a formality.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. BENEFITS ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: soft, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Benefits</p>
          <h2 style={h2Style()}>What the VA loan actually covers</h2>
          <p style={subStyle()}>Five things that make VA the strongest purchase loan available to those who qualify.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {benefits.map((b, i) => (
              <div key={b.title}>
                <div style={{ padding: "28px 0", borderTop: i === 0 ? `1px solid ${border}` : "none", borderBottom: `1px solid ${border}` }}>
                  <div style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 700, color: navy, marginBottom: 10 }}>{b.title}</div>
                  <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.65, margin: 0 }}>{b.body}</p>
                  {b.callout && (
                    <div style={{ borderLeft: `3px solid ${navy}`, backgroundColor: "#eaf0f8", borderRadius: radius, padding: "20px 24px", marginTop: 16 }}>
                      <p style={{ fontSize: 14, color: navy, lineHeight: 1.7, margin: 0 }}>{b.callout}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FUNDING FEE ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fdf3e8", border: `1px solid ${copper}`, ...sectionPad }}>
        <div style={container}>
          <p style={{ ...tag("#7a3d0a") }}>Funding Fee</p>
          <h2 style={{ ...h2Style("#3b1f08") }}>The VA funding fee — explained plainly</h2>
          <p style={{ ...subStyle("#5c3214") }}>A one-time fee (1.25%–3.3%) that keeps the program running. It can be rolled into the loan — no out-of-pocket required at closing.</p>
          <div style={{ backgroundColor: white, border: `1px solid ${copper}`, borderRadius: radius, padding: "28px 32px" }}>
            <p style={{ fontSize: 15, color: "#3b1f08", lineHeight: 1.7, margin: 0 }}>
              <strong>Disability waiver:</strong> If you have a VA service-connected disability rating, the funding fee is waived entirely. Pending claim at closing? You may be eligible for a refund once the rating is approved. Ask before you close.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. NEW CONSTRUCTION ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: navy, ...sectionPad }}>
        <div style={container}>
          <p style={tag(copper)}>New Construction</p>
          <h2 style={h2Style(white)}>Buying new construction with a VA loan in Texas</h2>
          <p style={subStyle("rgba(240,237,230,0.6)")}>Builders are active across every major Texas military market. Knowing how to navigate their process is the difference between getting the home — and walking away from a deal that was never actually dead.</p>

          {/* Builder pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
            {builders.map((b) => (
              <span key={b} style={{ backgroundColor: "rgba(255,255,255,0.1)", color: textOnDark, fontSize: 13, padding: "8px 18px", borderRadius: 999, fontWeight: 500 }}>{b}</span>
            ))}
          </div>

          {/* Compare cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 40 }}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: radius, padding: 28 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: textMuted, marginBottom: 12, fontFamily: "'Fira Mono', monospace" }}>What the builder's lender says</p>
              <p style={{ fontSize: 15, color: "rgba(240,237,230,0.7)", lineHeight: 1.65, margin: 0 }}>Your VA loan won't work here. Getting declined or redirected isn't a VA problem — it's the constraints of that specific lender.</p>
            </div>
            <div style={{ backgroundColor: "rgba(181,98,30,0.12)", border: `1px solid ${copper}`, borderRadius: radius, padding: 28 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: copper, marginBottom: 12, fontFamily: "'Fira Mono', monospace" }}>What's actually true</p>
              <p style={{ fontSize: 15, color: "rgba(240,237,230,0.85)", lineHeight: 1.65, margin: 0 }}>A broker with 50+ lenders can often close the same deal. Builder incentives frequently follow you to an outside lender — you just have to ask, and have the right person in your corner to negotiate it.</p>
            </div>
          </div>

          {/* Mid-page CTA */}
          <div style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: radius, padding: "24px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <p style={{ fontSize: 15, color: textOnDark, margin: 0, maxWidth: 600, lineHeight: 1.6 }}>A strong realtor negotiating on your behalf makes all the difference. Don't walk into a builder's sales office without one.</p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={btnPrimary}>Talk to Shalanda</a>
          </div>
        </div>
      </section>

      {/* ── 6. TEXAS-SPECIFIC ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Texas-Specific</p>
          <h2 style={h2Style()}>What's different about VA loans in Texas</h2>
          <p style={subStyle()}>Texas has rules and nuances that affect every buyer. These are the ones worth knowing before you start shopping.</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {texasItems.map((t, i) => (
              <div key={t.badge} style={{ padding: "24px 0", borderBottom: i < texasItems.length - 1 ? `1px solid ${border}` : "none" }}>
                <span style={{ display: "inline-block", backgroundColor: copperLight, color: copper, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999, marginBottom: 12, fontFamily: "'Fira Mono', monospace" }}>{t.badge}</span>
                <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.65, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. VA RENOVATION + ONE-TIME CLOSE ───────────────────────────────── */}
      <section style={{ backgroundColor: soft, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>More VA Options</p>
          <h2 style={h2Style()}>Beyond the standard purchase loan</h2>
          <p style={subStyle()}>Your VA benefit can do more than buy a move-in-ready home.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {[
              { title: "VA Renovation Loan", body: "Buy a home and finance eligible repairs or improvements in a single loan. One closing, one payment — useful when the home you want needs work that would otherwise kill the deal.", tag: "Single close · Repairs included" },
              { title: "VA One-Time Close Construction", body: "Build from the ground up with one closing covering both construction and permanent financing. No re-qualifying when the build is complete. Builder approval requirements apply.", tag: "New build · One closing · No re-qualify" },
            ].map((c) => (
              <div key={c.title} style={{ backgroundColor: white, borderRadius: radius, padding: 28, borderTop: `3px solid ${copper}`, boxShadow: "0 2px 12px rgba(26,58,92,0.07)" }}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 700, color: navy, marginBottom: 10 }}>{c.title}</div>
                <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.65, marginBottom: 16 }}>{c.body}</p>
                <span style={{ fontSize: 12, color: copper, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.04em" }}>{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CLOSING CTA ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: navy, ...sectionPad }}>
        <div style={{ ...container, textAlign: "center", maxWidth: 640 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: copper, color: white, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, marginBottom: 20 }}>SS</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, color: white, marginBottom: 6 }}>Shalanda Smith</div>
          <p style={{ fontSize: 13, color: "rgba(240,237,230,0.5)", marginBottom: 24, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.03em" }}>NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · Licensed in Texas</p>
          <p style={{ fontSize: 16, color: "rgba(240,237,230,0.75)", lineHeight: 1.7, marginBottom: 32 }}>
            VA loans aren't a side product. They're the loan I know best and close most — from Fort Hood to El Paso to Houston. If you want a real picture of what you qualify for, let's talk.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={btnPrimary}>Schedule a Strategy Call</a>
            <a href={APPLY} target="_blank" rel="noopener noreferrer" style={btnOutline}>Start Your Application</a>
          </div>
        </div>
      </section>

      {/* ── 9. COMPLIANCE FOOTER ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#141c24", padding: "32px 0" }}>
        <div style={{ ...container, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "rgba(240,237,230,0.4)", lineHeight: 1.7, marginBottom: 0, maxWidth: 800, margin: "0 auto" }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee.
          </p>
        </div>
      </section>
    </div>
  );
}
