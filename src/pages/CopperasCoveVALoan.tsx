import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

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
  { grade: "E-5", bah: "$1,695", piti: "~$1,800", diff: "−$105 gap", neg: true },
  { grade: "E-6", bah: "$2,070", piti: "~$1,800", diff: "+$270 covered", neg: false },
  { grade: "E-7", bah: "$2,214", piti: "~$1,800", diff: "+$414 covered", neg: false },
  { grade: "O-3", bah: "$2,481", piti: "~$1,800", diff: "+$681 covered", neg: false },
  { grade: "O-4", bah: "$2,724", piti: "~$1,800", diff: "+$924 covered", neg: false },
];

/* ── NEIGHBORHOODS ─────────────────────────────────────────────────────────── */
const neighborhoods = [
  { name: "Copperas Cove", price: "$210K–$245K", color: copper, tag: "West gate access", desc: "Most residents are Fort Hood families or veterans. Copperas Cove ISD. Closest city to the west gate — minimal commute, maximum affordability." },
  { name: "Kempner", price: "$195K–$235K", color: "#185FA5", tag: "USDA-eligible · Rural", desc: "Lampasas County. Some addresses qualify for USDA 0% down financing. Quieter, larger lots, longer drive to post but significant savings on purchase price." },
  { name: "Lampasas", price: "$210K–$250K", color: "#534AB7", tag: "Small town · Strong schools", desc: "20 miles west on US-190. Small town with strong school district. Popular with veterans who want distance from the base community and a slower pace." },
  { name: "Gatesville", price: "$185K–$225K", color: "#3B6D11", tag: "Most affordable · Coryell County", desc: "Most affordable in Coryell County. 25 miles west of Copperas Cove. Rural setting. For buyers who prioritize land and space over commute time." },
];

/* ── BUILDERS ──────────────────────────────────────────────────────────────── */
const productionBuilders = ["Flintrock Builders", "Stylecraft Builders", "WayFinder Builders", "J Clark Homes"];
const customBuilders = ["Barnes Homebuilders", "John D. Bowen Construction", "Dustin Dewald Custom Homes"];

/* ── TEXAS-SPECIFIC ────────────────────────────────────────────────────────── */
const texasItems = [
  { badge: "Property taxes", body: "Coryell County runs 1.60%–1.95% of assessed value annually — lower than Bell County. On a $220K home that's roughly $293–$357/month in escrow. We always quote your full PITI — never just principal and interest." },
  { badge: "USDA overlap", body: "Several Copperas Cove and Kempner zip codes qualify for USDA Rural Development financing. VA-eligible buyers rarely need it, but family members or non-veteran co-borrowers may benefit." },
  { badge: "VA disability exemption", body: "100% service-connected disability = full property tax exemption on your Texas primary residence. File with Coryell County Appraisal District after closing using your VA award letter." },
  { badge: "Homestead exemption", body: "Texas reduces your taxable home value by $100,000. File in the year you close. Doesn't happen automatically." },
  { badge: "Option period", body: "Texas contracts give you 5–10 days to back out for any reason and keep your earnest money. Use it for inspection. Don't waive it to look competitive — especially on new construction." },
];

/* ── COMMON SCENARIOS ──────────────────────────────────────────────────────── */
const scenarios = [
  "Active duty at Fort Hood's west gate buying in Copperas Cove to eliminate the commute — first VA loan use, full entitlement available.",
  "Veteran separating from service, staying in the area, wants to own rather than rent near former duty station.",
  "E-5 or below whose BAH doesn't fully cover a Killeen payment — Copperas Cove brings the purchase price down enough to close the gap.",
  "Veteran buyer targeting Kempner or Gatesville for acreage — VA loans can finance rural properties with well and septic when the property meets MPRs.",
];

/* ── COMPONENT ─────────────────────────────────────────────────────────────── */
const CopperasCoveVALoan = () => {
  return (
    <>
      <SEO {...seoMeta.copperasCoveVaLoan} />
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
          .kvl-neighborhood-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="kvl-hero" style={{ backgroundColor: hero, ...sectionPad, paddingBottom: 56 }}>
        <div style={container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper, flexShrink: 0 }} />
            <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, letterSpacing: "0.04em" }}>Fort Hood West Gate · Coryell County · VA Loan Specialist</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 42, fontWeight: 700, color: white, lineHeight: 1.15, marginBottom: 20, maxWidth: 780 }}>
            Buying a Home Near Fort Hood's West Gate:<br />
            <em style={{ color: copper, fontStyle: "italic" }}>The Copperas Cove, TX VA Loan Guide</em>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(240,237,230,0.7)", lineHeight: 1.65, maxWidth: 620, marginBottom: 32 }}>
            Copperas Cove sits at Fort Hood's west gate — the most affordable city in the corridor and one of the few Texas markets where VA buyers can compete with zero down and still come in under $250K.
          </p>
          <div className="kvl-hero-btns" style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
            <a href={apply} target="_blank" rel="noopener noreferrer" className="kvl-hero-btn" style={{ backgroundColor: copper, color: white, fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: radius, textDecoration: "none", textAlign: "center" }}>Get My VA Pre-Approval</a>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="kvl-hero-btn" style={{ border: `1.5px solid rgba(250,248,244,0.4)`, color: white, fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: radius, textDecoration: "none", background: "transparent", textAlign: "center" }}>Schedule a Strategy Call</a>
          </div>
          <hr style={{ border: "none", borderTop: "1px solid rgba(250,248,244,0.12)", marginBottom: 24 }} />
          <div className="kvl-trust-strip" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["VA Specialist · All Branches", "West Gate Access", "Coryell County Market", "21-Day Avg Close", "50+ Lender Network"].map(t => (
              <span key={t} style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", color: "rgba(240,237,230,0.5)", border: "1px solid rgba(250,248,244,0.1)", borderRadius: 999, padding: "5px 14px", letterSpacing: "0.03em" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. BAH MATH ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Buy or rent?</p>
          <h2 style={h2Style()}>Should you buy near Fort Hood's west gate? Here's the math.</h2>
          <p style={subStyle()}>Most west gate families ask the same question. Here's the honest answer — by pay grade.</p>

          <div style={{ overflowX: "auto", marginBottom: 24 }}>
            <table className="kvl-table" style={{ width: "100%", borderCollapse: "collapse", borderRadius: radius, overflow: "hidden" }}>
              <thead>
                <tr style={{ backgroundColor: navy }}>
                  <th style={{ color: white, fontWeight: 600 }}>Pay Grade</th>
                  <th style={{ color: white, fontWeight: 600 }}>BAH w/ Dependents</th>
                  <th style={{ color: white, fontWeight: 600 }}>Est. PITI ($220K VA)</th>
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
          <p style={{ fontSize: 13, color: textSecondary, fontStyle: "italic", marginBottom: 28 }}>PITI estimate based on 2026 rates, Coryell County property tax ~1.80%, standard homeowners insurance. We run your exact numbers free — before you shop a single home.</p>

          <div style={{ borderLeft: `4px solid ${navy}`, backgroundColor: "#eef4fa", borderRadius: radius, padding: "20px 24px" }}>
            <p style={{ fontSize: 15, color: textPrimary, lineHeight: 1.65, margin: 0 }}>
              Renting a 3BR in Copperas Cove runs $1,300–$1,600/month. At $220K with a VA loan your PITI is roughly the same — except one builds equity. E-5 with a small gap is still building wealth. E-6 and above? BAH covers the full payment with room to spare.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. MARKET STATS ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: navy, ...sectionPad }}>
        <div style={container}>
          <p style={tag(copper)}>The Copperas Cove market</p>
          <h2 style={h2Style(white)}>Why the west gate is the corridor's best value</h2>
          <div className="kvl-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 36 }}>
            {[
              { stat: "~$220K", note: "median home price — most affordable in the Fort Hood corridor", valueColor: copper },
              { stat: "1.60%–1.95%", note: "Coryell County property tax — lower than Bell County", valueColor: white },
              { stat: "0.15–0.5 acres", note: "typical lot size — larger than comparable Killeen homes at the same price", valueColor: white },
            ].map(s => (
              <div key={s.note} style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: radius, padding: 24, textAlign: "center" }}>
                <p style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Lora', serif", color: s.valueColor, marginBottom: 10 }}>{s.stat}</p>
                <p style={{ fontSize: 13, color: "rgba(240,237,230,0.6)", margin: 0, lineHeight: 1.55 }}>{s.note}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: "rgba(240,237,230,0.7)", lineHeight: 1.7, margin: 0, maxWidth: 880 }}>
            Copperas Cove doesn't get the attention Killeen does — and that's exactly why buyers who know the corridor choose it. You're five minutes from the west gate, your property tax rate is lower than Bell County, and your dollar buys more land. New construction here tends to sit on larger lots than what Killeen builders offer at the same price. The city has a genuine small-town feel — local restaurants, community events, a slower pace — without sacrificing proximity to Fort Hood. For veterans separating from service who want to put down roots near the base without living in a high-turnover military neighborhood, Copperas Cove is consistently the answer.
          </p>
        </div>
      </section>

      {/* ── 4. NEIGHBORHOODS ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: soft, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Know the area</p>
          <h2 style={h2Style()}>Copperas Cove and the surrounding west-side towns</h2>
          <p style={subStyle()}>Most west gate buyers consider one of four areas. Here's how they compare on price, character, and commute.</p>

          <div className="kvl-neighborhood-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {neighborhoods.map(n => (
              <div key={n.name} style={{ backgroundColor: white, borderRadius: radius, padding: 24, border: `1px solid ${border}` }}>
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

      {/* ── 5. NEW CONSTRUCTION ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>New construction</p>
          <h2 style={h2Style()}>New Construction in Copperas Cove</h2>
          <p style={{ fontSize: 16, color: textSecondary, lineHeight: 1.7, maxWidth: 880, marginBottom: 36 }}>
            Unlike Killeen where national builders dominate and push captive lenders, Copperas Cove's new construction market is almost entirely local and regional builders. That means more flexibility to use outside financing — and in most cases, no pressure to use a builder's in-house lender at all.
          </p>

          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: textSecondary, fontFamily: "'Fira Mono', monospace", marginBottom: 12 }}>Production · Semi-Custom Builders</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
              {productionBuilders.map(b => (
                <span key={b} style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, backgroundColor: copperLight, padding: "6px 14px", borderRadius: 999 }}>{b}</span>
              ))}
            </div>
            <p style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: textSecondary, fontFamily: "'Fira Mono', monospace", marginBottom: 12 }}>Custom · Acreage Builders</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {customBuilders.map(b => (
                <span key={b} style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: navy, backgroundColor: "rgba(26,58,92,0.08)", padding: "6px 14px", borderRadius: 999 }}>{b}</span>
              ))}
            </div>
          </div>

          <div style={{ borderLeft: `4px solid ${copper}`, backgroundColor: "#fdf6ee", borderRadius: radius, padding: "20px 24px" }}>
            <p style={{ fontSize: 15, color: textPrimary, lineHeight: 1.65, margin: 0 }}>
              Local builders here are generally open to outside lenders — but you still need to ask before your first visit. If you're touring a new construction community, tell us first. We'll confirm whether outside financing is welcome and whether the builder's incentive follows you to your own lender.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. TEXAS-SPECIFIC ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: hero, ...sectionPad }}>
        <div style={container}>
          <p style={tag(copper)}>Texas-specific</p>
          <h2 style={h2Style(white)}>Texas details that affect your payment and your taxes</h2>
          <p style={subStyle("rgba(240,237,230,0.6)")}>These apply to every buyer in Coryell County. Know them before you close.</p>
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

      {/* ── 7. COMMON SCENARIOS ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: soft, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Common scenarios</p>
          <h2 style={h2Style()}>Who we typically work with in Copperas Cove</h2>
          <p style={subStyle()}>Different situations call for different strategies. These are the most common ones we see at the west gate.</p>
          <div className="kvl-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {scenarios.map((s, i) => (
              <div key={i} style={{ backgroundColor: white, borderRadius: radius, padding: 24, border: `1px solid ${border}`, borderLeft: `3px solid ${copper}` }}>
                <p style={{ fontSize: 15, color: textPrimary, lineHeight: 1.65, margin: 0 }}>{s}</p>
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
          <p style={subStyle("#5c3214")}>Knowing your exits before you buy is what separates a strategy from a gamble. In Copperas Cove, rental demand is driven by Fort Hood west gate proximity — that matters for both options below.</p>

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
                VA requires occupancy at origination — not forever. Once you PCS, you can rent the property. Copperas Cove's rental market is driven by Fort Hood west gate proximity — a steady stream of incoming military families need housing on this side of the corridor. With the right property manager, you can own and operate from any duty station.{" "}
                <Link to="/pcs-to-portfolio" style={{ color: copper, fontWeight: 600, textDecoration: "none" }}>Military wealth strategy guide →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. INTERNAL LINKS ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#faf8f4", ...sectionPad }}>
        <div style={container}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700, color: navy, textAlign: "center", marginBottom: 40 }}>Explore More VA Loan Resources</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { title: "VA Loan Texas — Full Guide", desc: "Everything Texas veterans need to know about VA loan eligibility, entitlement, and the buying process.", to: "/va-loan-texas", label: "Read the Full Guide →" },
              { title: "Killeen VA Loan Guide", desc: "Buying on the main gate side? Full Killeen guide with neighborhoods, builders, and BAH math.", to: "/killeen-va-loan", label: "Read the Killeen Guide →" },
              { title: "VA Loan FAQ — Texas", desc: "Every question Fort Hood and Texas veterans ask about entitlement, funding fees, BAH, and more.", to: "/va-loan-faq-texas", label: "Read the FAQ →" },
              { title: "VA Loan Calculator", desc: "Run your payment, compare VA vs. conventional, and see how BAH affects your buying power.", to: "/calculators", label: "Use the Calculator →" },
            ].map((c) => (
              <div key={c.title} style={{ backgroundColor: white, borderRadius: radius, padding: 28, borderTop: `3px solid ${copper}`, boxShadow: "0 2px 12px rgba(26,58,92,0.07)", display: "flex", flexDirection: "column" }}>
                <div style={{ color: copper, marginBottom: 14 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: 19, fontWeight: 700, color: navy, marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "#3d4f63", lineHeight: 1.6, marginBottom: 18, flexGrow: 1 }}>{c.desc}</p>
                <Link to={c.to} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, color: navy, textDecoration: "none" }}>{c.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CLOSING CTA ─────────────────────────────────────────────────── */}
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

      {/* ── 11. COMPLIANCE ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#151e29", padding: "40px 0" }}>
        <div style={{ ...container, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "rgba(240,237,230,0.4)", lineHeight: 1.75, maxWidth: 800, margin: "0 auto", marginBottom: 16 }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. BAH figures based on 2026 DoD rates. Coryell County market data subject to change.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", fontSize: 12 }}>
            <Link to="/va-loan-texas" style={{ color: copper, textDecoration: "none" }}>VA Loans Texas</Link>
            <Link to="/killeen-va-loan" style={{ color: copper, textDecoration: "none" }}>Killeen VA Loan</Link>
            <a href={calendly} target="_blank" rel="noopener noreferrer" style={{ color: copper, textDecoration: "none" }}>Schedule a Call</a>
            <a href={apply} target="_blank" rel="noopener noreferrer" style={{ color: copper, textDecoration: "none" }}>Apply Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CopperasCoveVALoan;
