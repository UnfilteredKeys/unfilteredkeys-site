import { useEffect } from "react";
import { Link } from "react-router-dom";

/* ── SEO ──────────────────────────────────────────────────────────────────── */
function useKilleenSEO() {
  useEffect(() => {
    document.title = "VA Loans Killeen TX | Fort Hood VA Loan Guide | Keys by Shalanda";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Killeen TX VA loan guide for Fort Hood service members. BAH vs mortgage by pay grade, neighborhood price guide, builder strategies, and PCS exit planning.");
    setMeta("og:title", "VA Loans Killeen TX | Fort Hood VA Loan Guide | Keys by Shalanda", true);
    setMeta("og:description", "Should you buy or rent near Fort Hood? BAH by pay grade, neighborhood guide, new construction strategy, and PCS exit options.", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://shalandasmith.com/killeen-va-loan");
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
const radius = 8;
const border = "rgba(26,58,92,0.1)";

const sectionPad = { padding: "72px 0" } as const;
const container = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" } as const;
const tag = (c = copper) => ({ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: c, fontFamily: "'Fira Mono', monospace", marginBottom: 12, fontWeight: 600 });
const h2Style = (c = textPrimary) => ({ fontFamily: "'Lora', serif", fontSize: 30, fontWeight: 700 as const, color: c, lineHeight: 1.25, marginBottom: 12 });
const subStyle = (c = textSecondary) => ({ fontSize: 16, color: c, lineHeight: 1.65, maxWidth: 600, marginBottom: 40 });

const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply = "https://scl.my1003app.com/554554/register";

/* ── BAH DATA ──────────────────────────────────────────────────────────────── */
const bahRows = [
  { grade: "E-5", bah: "$1,695", piti: "~$1,843", diff: "−$148 gap", neg: true },
  { grade: "E-6", bah: "$2,070", piti: "~$1,843", diff: "+$227 covered", neg: false },
  { grade: "E-7", bah: "$2,214", piti: "~$1,843", diff: "+$371 covered", neg: false },
  { grade: "O-3", bah: "$2,481", piti: "~$1,843", diff: "+$638 covered", neg: false },
  { grade: "O-4", bah: "$2,724", piti: "~$1,843", diff: "+$881 covered", neg: false },
];

/* ── NEIGHBORHOODS ─────────────────────────────────────────────────────────── */
const neighborhoods = [
  { name: "Killeen", price: "$215K–$240K", color: copper, tag: "Main gate access", desc: "Largest city in the corridor. Closest to Fort Hood’s main gates. Killeen ISD. H-E-B on W Stan Schlueter. Most affordable and most convenient for daily on-post access." },
  { name: "Harker Heights", price: "$280K–$320K", color: "#534AB7", tag: "Suburban feel", desc: "Five miles west of Killeen. Still Bell County, still Killeen ISD. Newer construction, quieter neighborhoods — without paying Austin prices." },
  { name: "Copperas Cove", price: "$210K–$245K", color: "#185FA5", tag: "Most affordable · West gate", desc: "Most affordable in the corridor. Closest to west gate. Copperas Cove ISD. Some addresses qualify for USDA 0% down financing." },
  { name: "Nolanville", price: "$220K–$260K", color: "#534AB7", tag: "Quiet · Killeen ISD", desc: "Small town between Killeen and Belton. Residential, quiet, Bell County. Solid middle ground between Killeen's affordability and Harker Heights' suburban feel." },
  { name: "Belton", price: "$270K–$310K", color: "#3B6D11", tag: "Top-rated schools · Belton ISD", desc: "20 miles south on I-35. Belton ISD is consistently one of the strongest districts in Central Texas. For buyers who prioritize schools and don't mind the drive, Belton punches above its price point." },
];

/* ── PRACTICAL LIFE ────────────────────────────────────────────────────────── */
const practicalCards = [
  { icon: copper, label: "Grocery & commissary", body: "H-E-B anchors the retail corridor — multiple locations in Killeen and Harker Heights. On-post commissary is a major perk military families use heavily for cost savings on groceries and household staples." },
  { icon: "#185FA5", label: "Shopping & retail", body: "Walmart Supercenter and Walmart Neighborhood Market both in Killeen. Target and Sam's Club on South Fort Hood Street. Killeen Mall anchors the retail corridor with major retailers, dining, and services — all within minutes of the main gate." },
  { icon: "#C97A2E", label: "Utilities — plan for Texas summers", body: "Electric bills on a standard 3BR run $250–$350/month in July–August. Factor this alongside PITI — it shouldn't be a surprise at closing." },
  { icon: "#3B6D11", label: "Gyms & fitness", body: "On-post fitness centers are a major perk — multiple facilities available to service members and dependents at no additional cost. Off-post: Planet Fitness and Anytime Fitness throughout Killeen and Harker Heights for family members and civilians." },
  { icon: "#534AB7", label: "Entertainment & outdoor", body: "Lions Club Aquatics Park — one of the best public water parks in Central Texas. Stillhouse Hollow Lake for fishing, boating, and camping (15 min from Killeen). Easy day trips to Austin (65 mi) and Waco (60 mi) for concerts, sporting events, and big-city entertainment." },
  { icon: "#185FA5", label: "Schools & drive times", body: "Killeen ISD — Killeen, Harker Heights, Nolanville. Copperas Cove ISD — strong military family culture. Belton ISD — top-rated in Central Texas. Drive times: Austin 65 mi · Waco 60 mi · San Antonio 150 mi · Dallas 170 mi." },
];

/* ── TEXAS-SPECIFIC ────────────────────────────────────────────────────────── */
const texasItems = [
  { badge: "Property taxes", body: "Bell County runs 1.85%–2.20% of assessed value annually. On a $225K home that's roughly $348–$413/month in escrow. We always quote your full PITI — never just principal and interest." },
  { badge: "VA disability exemption", body: "100% service-connected disability = full property tax exemption on your Texas primary residence. Partial ratings receive a scaled reduction. File with Bell County Appraisal District after closing using your VA award letter. Thousands saved annually — file it." },
  { badge: "Homestead exemption", body: "Texas reduces your taxable home value by $100,000. File in the year you close. Doesn't happen automatically." },
  { badge: "Option period", body: "Texas contracts give you 5–10 days to back out for any reason and keep your earnest money. Use it for inspection. Don't waive it to look competitive — especially on new construction." },
  { badge: "Community property", body: "If you're married, your spouse may need to sign certain loan documents even if they're not on the loan. Standard in Texas — not a red flag." },
];

/* ── LOAN PROGRAMS ─────────────────────────────────────────────────────────── */
const loanPrograms = [
  { badge: "VA Loan", color: copper, body: "Start here if you're eligible. Zero down. No PMI ever. Bell County limit $832,750 — well above any Killeen price point. COE: we pull it during your application. PCS timeline accommodated. We've closed VA loans in under 14 days when orders required it.", link: { text: "VA Loans in Texas →", to: "/va-loan-texas" } },
  { badge: "FHA", color: "#3B6D11", body: "3.5% down with 580+ credit. On a $225,000 purchase that's $7,875 down. Texas DPA programs like TDHCA My First Texas Home (620 minimum) can layer on top with a silent second lien covering down payment and closing costs.", link: null },
  { badge: "Conventional", color: "#185FA5", body: "Strong credit, 10–20% down? Conventional avoids FHA mortgage insurance and makes strong financial sense at Killeen price points for buyers with reserves who don't qualify for VA.", link: null },
];

/* ── COMPONENT ─────────────────────────────────────────────────────────────── */
const KilleenVaLoan = () => {
  useKilleenSEO();

  return (
    <>
      <style>{`
        .kvl-hero-btn:hover{opacity:.92}
        .kvl-table th,.kvl-table td{padding:14px 18px;text-align:left;font-size:14px}
        @media(max-width:768px){
          .kvl-hero h1{font-size:28px!important}
          .kvl-hero-btns{flex-direction:column}
          .kvl-trust-strip{flex-wrap:wrap;justify-content:center}
          .kvl-table th,.kvl-table td{padding:10px 10px;font-size:12px}
          .kvl-2col{grid-template-columns:1fr!important}
          .kvl-3col{grid-template-columns:1fr!important}
          .kvl-map-legend{flex-wrap:wrap}
          .kvl-neighborhood-grid{grid-template-columns:1fr!important}
          .kvl-neighborhood-grid>div:last-child{grid-column:1!important}
          .kvl-builder-bar{flex-direction:column!important;align-items:flex-start!important;gap:12px!important}
        }
      `}</style>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="kvl-hero" style={{ backgroundColor: hero, ...sectionPad, paddingBottom: 56 }}>
        <div style={container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper, flexShrink: 0 }} />
            <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, letterSpacing: "0.04em" }}>Fort Hood · Killeen, TX · VA Loan Specialist</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 42, fontWeight: 700, color: white, lineHeight: 1.15, marginBottom: 20, maxWidth: 700 }}>
            Buying a Home Near Fort Hood:<br />
            <em style={{ color: copper, fontStyle: "italic" }}>The Killeen, TX VA Loan Guide</em>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(240,237,230,0.7)", lineHeight: 1.65, maxWidth: 540, marginBottom: 32 }}>
            Should you buy or rent near Fort Hood? Does your BAH cover the payment? Which neighborhood fits your situation? Real answers — with real numbers — for every branch of service.
          </p>
          <div className="kvl-hero-btns" style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
            <a href={apply} target="_blank" rel="noopener noreferrer" className="kvl-hero-btn" style={{ backgroundColor: copper, color: white, fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: radius, textDecoration: "none", textAlign: "center" }}>Get My VA Pre-Approval</a>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="kvl-hero-btn" style={{ border: `1.5px solid rgba(250,248,244,0.4)`, color: white, fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: radius, textDecoration: "none", background: "transparent", textAlign: "center" }}>Schedule a Strategy Call</a>
          </div>
          <hr style={{ border: "none", borderTop: "1px solid rgba(250,248,244,0.12)", marginBottom: 24 }} />
          <div className="kvl-trust-strip" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["VA Specialist · All Branches", "PCS Timeline Expert", "Bell County Market", "21-Day Avg Close", "50+ Lender Network"].map(t => (
              <span key={t} style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", color: "rgba(240,237,230,0.5)", border: "1px solid rgba(250,248,244,0.1)", borderRadius: 999, padding: "5px 14px", letterSpacing: "0.03em" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. BUY OR RENT ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Buy or rent?</p>
          <h2 style={h2Style()}>Should you buy near Fort Hood? Here's the math.</h2>
          <p style={subStyle()}>Most service members arriving at Fort Hood ask the same question. Here's the honest answer — by pay grade.</p>

          <div style={{ overflowX: "auto", marginBottom: 24 }}>
            <table className="kvl-table" style={{ width: "100%", borderCollapse: "collapse", borderRadius: radius, overflow: "hidden" }}>
              <thead>
                <tr style={{ backgroundColor: navy }}>
                  <th style={{ color: white, fontWeight: 600 }}>Pay Grade</th>
                  <th style={{ color: white, fontWeight: 600 }}>BAH w/ Dependents</th>
                  <th style={{ color: white, fontWeight: 600 }}>Est. PITI ($225K VA)</th>
                  <th style={{ color: white, fontWeight: 600 }}>Monthly Position</th>
                </tr>
              </thead>
              <tbody>
                {bahRows.map((r, i) => (
                  <tr key={r.grade} style={{ backgroundColor: i % 2 === 0 ? "#f8f7f4" : white }}>
                    <td style={{ fontWeight: 600, color: textPrimary }}>{r.grade}</td>
                    <td style={{ color: textSecondary }}>{r.bah}</td>
                    <td style={{ color: textSecondary }}>{r.piti}</td>
                    <td style={{ color: r.neg ? "#c53030" : "#2f855a", fontWeight: 600 }}>{r.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: textSecondary, fontStyle: "italic", marginBottom: 28 }}>PITI estimate based on 2026 rates, Bell County property tax 1.95%, standard homeowners insurance. We run your exact numbers free — before you shop a single home.</p>

          <div style={{ borderLeft: `4px solid ${navy}`, backgroundColor: "#eef4fa", borderRadius: radius, padding: "20px 24px" }}>
            <p style={{ fontSize: 15, color: textPrimary, lineHeight: 1.65, margin: 0 }}>
              Renting a 3BR near Fort Hood runs $1,400–$1,800/month. At $225K with a VA loan your PITI is roughly the same — except one builds equity and one doesn't. E-5 with a small gap is still building wealth. E-6 and up? BAH covers the full payment.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. NEIGHBORHOODS ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: soft, ...sectionPad, paddingBottom: 0 }}>
        <div style={container}>
          <p style={tag()}>Know the area</p>
          <h2 style={h2Style()}>Neighborhoods near Fort Hood — map & price guide</h2>
          <p style={subStyle()}>Where you work on post matters as much as your price point. Gate proximity, schools, and community character vary significantly across the corridor.</p>

          {/* SVG Map */}
          <div style={{ marginBottom: 32 }}>
            <svg viewBox="0 0 600 320" style={{ width: "100%", maxWidth: 600, display: "block", margin: "0 auto", borderRadius: radius, backgroundColor: "#e8f0e8" }}>
              {/* Compass */}
              <text x="24" y="28" fontSize="11" fill="#4a5568" fontFamily="'Fira Mono', monospace">↑ N</text>

              {/* Fort Hood */}
              <ellipse cx="300" cy="150" rx="100" ry="55" fill="rgba(26,58,92,0.12)" stroke="rgba(26,58,92,0.25)" strokeWidth="1.5" />
              <text x="300" y="145" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a3a5c" fontFamily="'Fira Mono', monospace">FORT HOOD</text>
              <text x="300" y="160" textAnchor="middle" fontSize="9" fill="#4a5568" fontFamily="'Fira Mono', monospace">Military Installation</text>

              {/* Connecting lines */}
              <line x1="300" y1="205" x2="300" y2="260" stroke="rgba(26,58,92,0.15)" strokeWidth="1" />
              <line x1="200" y1="150" x2="130" y2="150" stroke="rgba(26,58,92,0.15)" strokeWidth="1" />
              <line x1="240" y1="100" x2="180" y2="65" stroke="rgba(26,58,92,0.15)" strokeWidth="1" />
              <line x1="380" y1="105" x2="440" y2="70" stroke="rgba(26,58,92,0.15)" strokeWidth="1" />
              <line x1="380" y1="195" x2="470" y2="260" stroke="rgba(26,58,92,0.15)" strokeWidth="1" />

              {/* Killeen - lower center */}
              <circle cx="300" cy="270" r="16" fill={copper} stroke="white" strokeWidth="2.5" />
              <text x="300" y="274" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">KIL</text>
              <text x="300" y="296" textAnchor="middle" fontSize="10" fill="#1c2630" fontWeight="600">Killeen</text>
              <text x="300" y="308" textAnchor="middle" fontSize="9" fill="#4a5568">$215K–$240K</text>

              {/* Harker Heights - left center */}
              <circle cx="120" cy="150" r="16" fill="#534AB7" stroke="white" strokeWidth="2.5" />
              <text x="120" y="154" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">HH</text>
              <text x="120" y="176" textAnchor="middle" fontSize="10" fill="#1c2630" fontWeight="600">Harker Heights</text>
              <text x="120" y="188" textAnchor="middle" fontSize="9" fill="#4a5568">$280K–$320K</text>

              {/* Copperas Cove - upper left */}
              <circle cx="170" cy="58" r="16" fill="#185FA5" stroke="white" strokeWidth="2.5" />
              <text x="170" y="62" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">CC</text>
              <text x="170" y="38" textAnchor="middle" fontSize="10" fill="#1c2630" fontWeight="600">Copperas Cove</text>
              <text x="170" y="26" textAnchor="middle" fontSize="9" fill="#4a5568">$210K–$245K</text>

              {/* Nolanville - upper right */}
              <circle cx="450" cy="62" r="16" fill="#534AB7" stroke="white" strokeWidth="2.5" />
              <text x="450" y="66" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">NV</text>
              <text x="450" y="88" textAnchor="middle" fontSize="10" fill="#1c2630" fontWeight="600">Nolanville</text>
              <text x="450" y="100" textAnchor="middle" fontSize="9" fill="#4a5568">$220K–$260K</text>

              {/* Belton - lower right */}
              <circle cx="480" cy="265" r="16" fill="#3B6D11" stroke="white" strokeWidth="2.5" />
              <text x="480" y="269" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">BEL</text>
              <text x="480" y="291" textAnchor="middle" fontSize="10" fill="#1c2630" fontWeight="600">Belton</text>
              <text x="480" y="303" textAnchor="middle" fontSize="9" fill="#4a5568">$270K–$310K</text>

              {/* Not to scale label */}
              <text x="580" y="314" textAnchor="end" fontSize="8" fill="rgba(74,85,104,0.5)" fontFamily="'Fira Mono', monospace">Approximate — not to scale</text>
            </svg>
          </div>

          {/* Map legend */}
          <div className="kvl-map-legend" style={{ display: "flex", gap: 20, justifyContent: "center", marginBottom: 36, flexWrap: "wrap" }}>
            {neighborhoods.map(n => (
              <div key={n.name} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: n.color, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: textSecondary }}>{n.name}</span>
              </div>
            ))}
          </div>

          {/* Neighborhood cards */}
          <div className="kvl-neighborhood-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 0 }}>
            {neighborhoods.map(n => (
              <div key={n.name} style={{ backgroundColor: white, borderRadius: radius, padding: 24, border: `1px solid ${border}`, ...(n.name === "Belton" ? { gridColumn: "1 / -1" } : {}) }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                  <span style={{ fontFamily: "'Lora', serif", fontSize: 17, fontWeight: 700, color: textPrimary }}>{n.name} · {n.price}</span>
                  <span style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", color: n.color, backgroundColor: `${n.color}15`, padding: "3px 10px", borderRadius: 999 }}>{n.tag}</span>
                </div>
                <p style={{ fontSize: 14, color: textSecondary, lineHeight: 1.65, margin: 0 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PRACTICAL LIFE ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: soft, ...sectionPad, paddingTop: 56 }}>
        <div style={container}>
          <p style={tag()}>Practical life near Fort Hood</p>
          <h2 style={h2Style()}>What daily life actually looks like</h2>
          <p style={subStyle()}>Relocating from JBLM, Fort Liberty, or Camp Pendleton? Here's the practical picture before you arrive.</p>
          <div className="kvl-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {practicalCards.map(c => (
              <div key={c.label} style={{ backgroundColor: white, borderRadius: radius, padding: 24, border: `1px solid ${border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: `${c.icon}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: c.icon }} />
                  </span>
                  <span style={{ fontFamily: "'Lora', serif", fontSize: 15, fontWeight: 700, color: textPrimary }}>{c.label}</span>
                </div>
                <p style={{ fontSize: 14, color: textSecondary, lineHeight: 1.65, margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MARKET & NEW CONSTRUCTION ─────────────────────────────────────── */}
      <section style={{ backgroundColor: navy, ...sectionPad }}>
        <div style={container}>
          <p style={tag(copper)}>2026 market & new construction</p>
          <h2 style={h2Style(white)}>The Killeen market right now — and new construction</h2>
          <p style={subStyle("rgba(240,237,230,0.6)")}>Buyers have leverage in this market. Know how to use it — especially with builder lenders.</p>

          {/* Stat cards */}
          <div className="kvl-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 36 }}>
            {[
              { label: "Median home price", value: "~$228K", note: "Bell County · 2026", valueColor: white },
              { label: "Avg days on market", value: "75 days", note: "Sellers are flexible", valueColor: white },
              { label: "VA loan limit", value: "$832,750", note: "Bell County · well above median", valueColor: copper },
            ].map(s => (
              <div key={s.label} style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: radius, padding: 24, textAlign: "center" }}>
                <p style={{ fontSize: 12, color: "rgba(240,237,230,0.5)", fontFamily: "'Fira Mono', monospace", letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase" }}>{s.label}</p>
                <p style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Lora', serif", color: s.valueColor, marginBottom: 6 }}>{s.value}</p>
                <p style={{ fontSize: 12, color: "rgba(240,237,230,0.45)", margin: 0 }}>{s.note}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: "rgba(240,237,230,0.6)", lineHeight: 1.65, marginBottom: 32 }}>New construction is active across Killeen, Harker Heights, and Copperas Cove. Knowing who's building — and how their lending actually works — is part of your buying strategy.</p>

          {/* Builder rows */}
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(240,237,230,0.35)", fontFamily: "'Fira Mono', monospace", marginBottom: 10 }}>National builders — captive in-house lenders, incentive pressure highest here</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
              {["D.R. Horton", "Lennar"].map(b => (
                <span key={b} style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, backgroundColor: "rgba(181,98,30,0.15)", padding: "5px 14px", borderRadius: 999 }}>{b}</span>
              ))}
            </div>
            <hr style={{ border: "none", borderTop: "1px solid rgba(250,248,244,0.1)", marginBottom: 20 }} />
            <p style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(240,237,230,0.35)", fontFamily: "'Fira Mono', monospace", marginBottom: 10 }}>Local builders — more flexible on outside financing, often easier to negotiate incentives</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Saratoga Homes", "Carothers Homes", "Stylecraft Builders", "Ashford Homes"].map(b => (
                <span key={b} style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: "rgba(240,237,230,0.6)", backgroundColor: "rgba(255,255,255,0.08)", padding: "5px 14px", borderRadius: 999 }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Builder callout */}
          <div style={{ borderLeft: `4px solid ${copper}`, backgroundColor: "rgba(0,0,0,0.2)", borderRadius: radius, padding: "20px 24px", marginBottom: 32 }}>
            <p style={{ fontSize: 14, color: "rgba(240,237,230,0.7)", lineHeight: 1.65, margin: 0 }}>
              National builders push hardest on their in-house lenders. D.R. Horton uses DHI Mortgage. Lennar uses Lennar Mortgage. Both are captive lenders with incentive programs tied to their financing. Local builders are generally more open to outside lenders — but you still need to ask.
            </p>
          </div>

          {/* Compare cards */}
          <div className="kvl-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(250,248,244,0.1)", borderRadius: radius, padding: 24 }}>
              <p style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(240,237,230,0.4)", fontFamily: "'Fira Mono', monospace", marginBottom: 12 }}>What builder lenders do</p>
              <p style={{ fontSize: 14, color: "rgba(240,237,230,0.65)", lineHeight: 1.65, margin: 0 }}>Run VA loans — but on their terms. Higher minimum credit scores, stricter DTI limits, and no manual underwriting. If your file doesn't fit their automated approval box, they decline it. That's not a VA problem. That's their overlay.</p>
            </div>
            <div style={{ backgroundColor: "rgba(181,98,30,0.2)", border: `1px solid ${copper}`, borderRadius: radius, padding: 24 }}>
              <p style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: copper, fontFamily: "'Fira Mono', monospace", marginBottom: 12 }}>What's actually true</p>
              <p style={{ fontSize: 14, color: "rgba(240,237,230,0.85)", lineHeight: 1.65, margin: 0 }}>A broker with 50+ lenders can find the right fit for files builder lenders decline. Lower credit scores, higher DTI, manual underwriting — we have lenders who work with all of it. And the builder's incentive frequently follows you.</p>
            </div>
          </div>

          {/* Realtor warning bar */}
          <div className="kvl-builder-bar" style={{ backgroundColor: "rgba(0,0,0,0.2)", border: "1px solid rgba(250,248,244,0.12)", borderRadius: radius, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flex: 1 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: copper, flexShrink: 0, marginTop: 5 }} />
              <p style={{ fontSize: 14, color: "rgba(240,237,230,0.7)", lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: copper }}>Most builders will not allow you to add a realtor after your first visit.</strong>{" "}
                Register with your agent before you walk through the door — not after. A strong realtor negotiating on your behalf is how the incentive conversation happens and how you protect your interests at the contract table. Ask about outside financing before you assume you have to choose their lender.
              </p>
            </div>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="kvl-hero-btn" style={{ backgroundColor: copper, color: white, fontWeight: 600, fontSize: 13, padding: "10px 20px", borderRadius: radius, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>Talk to Shalanda</a>
          </div>
        </div>
      </section>

      {/* ── 6. LOAN PROGRAMS ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Loan programs</p>
          <h2 style={h2Style()}>Your mortgage options near Fort Hood</h2>
          <p style={subStyle()}>VA first if you're eligible — any branch, any component. Here's the full picture.</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {loanPrograms.map((lp, i) => (
              <div key={lp.badge} style={{ padding: "24px 0", borderBottom: i < loanPrograms.length - 1 ? `1px solid ${border}` : "none" }}>
                <span style={{ display: "inline-block", backgroundColor: `${lp.color}15`, color: lp.color, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999, marginBottom: 12, fontFamily: "'Fira Mono', monospace" }}>{lp.badge}</span>
                <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.65, margin: 0 }}>
                  {lp.body}
                  {lp.link && (
                    <>
                      {" "}
                      <Link to={lp.link.to} style={{ color: copper, fontWeight: 600, textDecoration: "none" }}>{lp.link.text}</Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TEXAS-SPECIFIC ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: hero, ...sectionPad }}>
        <div style={container}>
          <p style={tag(copper)}>Texas-specific</p>
          <h2 style={h2Style(white)}>Texas details that affect your payment and your taxes</h2>
          <p style={subStyle("rgba(240,237,230,0.6)")}>These apply to every buyer in Bell County. Know them before you close.</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {texasItems.map((t, i) => (
              <div key={t.badge} style={{ padding: "24px 0", borderBottom: i < texasItems.length - 1 ? "1px solid rgba(250,248,244,0.08)" : "none" }}>
                <span style={{ display: "inline-block", backgroundColor: copperLight, color: copper, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999, marginBottom: 12, fontFamily: "'Fira Mono', monospace" }}>{t.badge}</span>
                <p style={{ fontSize: 15, color: "rgba(240,237,230,0.65)", lineHeight: 1.65, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PCS EXIT STRATEGY ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fdf3e8", border: `1px solid ${copper}`, borderLeft: "none", borderRight: "none", ...sectionPad }}>
        <div style={container}>
          <p style={tag("#7a3d0a")}>PCS exit strategy</p>
          <h2 style={{ ...h2Style("#3b1f08"), maxWidth: 700 }}>Get PCS orders before you can sell? Here are your options.</h2>
          <p style={subStyle("#5c3214")}>Knowing your exits before you buy is what separates a strategy from a gamble.</p>

          <div className="kvl-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ backgroundColor: "#fdf3e8", border: `1px solid ${copper}`, borderRadius: radius, padding: 24 }}>
              <p style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: copper, fontFamily: "'Fira Mono', monospace", marginBottom: 12 }}>Option A — Loan assumption</p>
              <p style={{ fontSize: 14, color: "#3b1f08", lineHeight: 1.65, margin: 0 }}>
                VA and FHA loans are assumable. A buyer takes over your loan at your original rate, balance, and term. In a high-rate environment an assumable loan is a major competitive advantage — and can support a stronger sale price. Talk to us about whether your loan qualifies.{" "}
                <Link to="/pcs-to-portfolio" style={{ color: copper, fontWeight: 600, textDecoration: "none" }}>Full strategy guide →</Link>
              </p>
            </div>
            <div style={{ backgroundColor: "#eef4fa", border: `1px solid ${navy}`, borderRadius: radius, padding: 24 }}>
              <p style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: navy, fontFamily: "'Fira Mono', monospace", marginBottom: 12 }}>Option B — Convert to rental</p>
              <p style={{ fontSize: 14, color: "#1c2630", lineHeight: 1.65, margin: 0 }}>
                VA requires occupancy at origination — not forever. Once you PCS, you can rent the property. Killeen's rental market near Fort Hood has structural demand. With the right property manager, you can own and operate from any duty station.{" "}
                <Link to="/pcs-to-portfolio" style={{ color: copper, fontWeight: 600, textDecoration: "none" }}>Military wealth strategy guide →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CLOSING CTA ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: navy, ...sectionPad }}>
        <div style={{ ...container, textAlign: "center", maxWidth: 640 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: copper, color: white, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, marginBottom: 20 }}>SS</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, color: white, marginBottom: 6 }}>Shalanda Smith</div>
          <p style={{ fontSize: 13, color: "rgba(240,237,230,0.5)", marginBottom: 24, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.03em" }}>NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · Licensed in Texas · All Branches Served</p>
          <p style={{ fontSize: 16, color: "rgba(240,237,230,0.75)", lineHeight: 1.7, marginBottom: 32, maxWidth: 560, margin: "0 auto 32px" }}>
            PCS orders in hand? Tell me your report date and your price range. We'll build the closing timeline backward from your deadline — not forward from when it's convenient. We've closed VA loans in under 14 days when orders required it.
          </p>
          <div className="kvl-hero-btns" style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 20, flexWrap: "wrap" }}>
            <a href={apply} target="_blank" rel="noopener noreferrer" className="kvl-hero-btn" style={{ backgroundColor: copper, color: white, fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: radius, textDecoration: "none" }}>Get My VA Pre-Approval</a>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="kvl-hero-btn" style={{ border: "1.5px solid rgba(250,248,244,0.4)", color: white, fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: radius, textDecoration: "none", background: "transparent" }}>Schedule a Strategy Call</a>
          </div>
          <p style={{ fontSize: 14, color: "rgba(240,237,230,0.5)", margin: 0 }}>Or call/text: <a href="tel:2549359331" style={{ color: copper, textDecoration: "none", fontWeight: 600 }}>254-935-9331</a></p>
        </div>
      </section>

      {/* ── 10. COMPLIANCE ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#151e29", padding: "40px 0" }}>
        <div style={{ ...container, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "rgba(240,237,230,0.4)", lineHeight: 1.75, maxWidth: 800, margin: "0 auto", marginBottom: 16 }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. BAH figures based on 2026 DoD rates. Market data subject to change.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", fontSize: 12 }}>
            <Link to="/va-loan-texas" style={{ color: copper, textDecoration: "none" }}>VA Loans Texas</Link>
            <Link to="/pcs-to-portfolio" style={{ color: copper, textDecoration: "none" }}>PCS to Portfolio</Link>
            <a href={calendly} target="_blank" rel="noopener noreferrer" style={{ color: copper, textDecoration: "none" }}>Schedule a Call</a>
            <a href={apply} target="_blank" rel="noopener noreferrer" style={{ color: copper, textDecoration: "none" }}>Apply Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default KilleenVaLoan;
