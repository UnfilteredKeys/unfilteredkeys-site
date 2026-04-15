import { useEffect } from "react";
import { Link } from "react-router-dom";
import RentalROICalculator from "@/components/RentalROICalculator";

/* ── SEO ──────────────────────────────────────────────────────────────────── */
function usePCSSEO() {
  useEffect(() => {
    document.title = "PCS to Portfolio: Military Wealth Strategy | Keys by Shalanda";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Turn every PCS into a real estate asset. Military wealth-building strategy using VA loans — zero down, multiple properties, one duty station at a time.");
    setMeta("og:title", "PCS to Portfolio: Military Wealth Strategy | Keys by Shalanda", true);
    setMeta("og:description", "Turn every PCS into a real estate asset. VA loan strategy for building a rental portfolio across duty stations.", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://shalandasmith.com/pcs-to-portfolio");
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

const branches = ["Army", "Navy", "Marine Corps", "Air Force", "Space Force", "Coast Guard", "National Guard", "Reserves"];

/* ── COMPONENT ─────────────────────────────────────────────────────────────── */
export default function PcsToPortfolio() {
  usePCSSEO();

  const landlordCards = [
    { color: "rgba(99,153,34,0.12)", title: "Location near the gate", desc: "Military market rentals have structural demand. Near-gate properties rent on certainty, not hope. Buy accordingly." },
    { color: "rgba(217,169,56,0.12)", title: "Tenant screening", desc: "Your tenant is your most important decision. Background, credit, rental history, employment — every time, no exceptions." },
    { color: "rgba(59,130,246,0.12)", title: "Maintenance & reserves", desc: "Things break. Budget 1–2% of property value annually. HVAC failure in a Texas summer is an emergency, not a surprise." },
    { color: "rgba(217,169,56,0.12)", title: "Vacancy reality", desc: "Every rental sits vacant between tenants. Budget 1–2 months per year. Price it right, screen well, maintain it." },
    { color: "rgba(99,153,34,0.12)", title: "Insurance switch", desc: "Day one of rental conversion — call your insurer. You need a landlord (dwelling fire) policy, not a homeowner's policy." },
    { color: "rgba(59,130,246,0.12)", title: "Tax advantages", desc: "Mortgage interest, property taxes, insurance, PM fees, and depreciation are all deductible. Depreciation alone is significant." },
  ];

  const pmChecklist = [
    { label: "Fees", q: "What is your monthly fee, and does it change if the unit is vacant? Do you mark up maintenance costs?" },
    { label: "Repair threshold", q: "At what dollar amount do you contact me before authorizing a repair?" },
    { label: "Tenant screening", q: "Walk me through your process. Background, credit, rental history, employment — what do you verify?" },
    { label: "Inspections", q: "How often do you inspect the property? Do I receive a written report with photos?" },
    { label: "Move-in / move-out", q: "What is your condition documentation process? How do you handle security deposit disputes?" },
    { label: "Pet policy", q: "Do you allow pets? What are the deposit requirements and breed restrictions?" },
    { label: "Lawn care", q: "Who is responsible for exterior maintenance — tenant, PM, or owner?" },
    { label: "Renters insurance", q: "Do you require tenants to carry renters insurance? Do you verify it annually?" },
    { label: "Late payments", q: "Texas is landlord-friendly — how do you handle late payments and evictions? Do you have legal counsel ready?" },
    { label: "Military clause", q: "Does your standard lease include a military clause protecting tenants who receive PCS orders? This is non-negotiable." },
  ];

  const entitlementItems = [
    { badge: "Full entitlement", body: "Never used VA, or fully restored it. No loan limit. No down payment required. Most powerful version of the benefit." },
    { badge: "Bonus entitlement", body: "VA guarantees 25% of the conforming loan limit ($806,500 in 2026 = $201,625 guarantee). This is what makes large VA loans with zero down possible." },
    { badge: "Remaining entitlement", body: "Active VA loan on property one. Entitlement is partially used — but what remains may still be enough for a second zero-down purchase at the next station." },
    { badge: "Restoration", body: "Sell and pay off → full restoration. Veteran-to-veteran assumption → entitlement released immediately. One-time restoration available even if property is kept as rental." },
  ];

  const timeline = [
    { yr: "Yrs 1–3", title: "First duty station — Property #1", body: "VA loan, zero down. Occupy as primary. Build equity. Receive PCS orders. Convert to rental. Rental income offsets or covers the mortgage.", pills: ["Properties: 1", "Down payment: $0", "Rental income: Active"] },
    { yr: "Yrs 4–6", title: "Second duty station — Property #2", body: "Calculate remaining entitlement. Veteran-to-veteran assumption at station one restores entitlement if needed. Second VA purchase — often zero down again.", pills: ["Properties: 2", "Down payment: $0", "Cash flow: 2 streams"] },
    { yr: "Yrs 7–10", title: "Third duty station — Property #3", body: "Two rentals generating income. Third VA purchase. Portfolio compounding — equity, cash flow, and depreciation tax benefits all growing.", pills: ["Properties: 3", "Total down paid: $0", "Tax benefits: Significant"] },
    { yr: "Retirement", title: "End of service — Portfolio in place", body: "3–5 properties purchased with zero down across multiple duty stations. Monthly rental income. Equity. A financial foundation built on a benefit already earned through service.", pills: ["Properties: 3–5", "Equity: Substantial", "Monthly income: Active"] },
  ];

  const readinessQs = [
    "How long is my likely service commitment — and how many PCS cycles does that mean?",
    "Is the rental market near this installation strong enough to cover or come close to my mortgage?",
    "Do I have 2–3 months of reserves after closing? Vacancy and repairs happen — reserves are what keep it manageable.",
    "Am I ready to be a landlord, or do I need a property manager? Both are valid. Know yourself.",
    "Is this a market I'd want to hold long-term, or a temporary duty station with weak fundamentals?",
    "Do I have a local contact — realtor, PM, or trusted person — who can be eyes on the property when I'm gone?",
  ];

const toolCards = [
  { title: "Duty Station Map", desc: "Every major installation in the US. Click a dot to see local market data and VA loan limits." },
];
  
  return (
    <div>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: hero, padding: "96px 0 72px" }}>
        <div style={container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper }} />
            <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.06em", color: copper }}>Military Real Estate Strategy · All Branches</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 700, color: white, lineHeight: 1.15, marginBottom: 20 }}>
            PCS to Portfolio:<br />
            <span style={{ fontStyle: "italic", color: copper }}>Turn Every Duty Station Into a Real Estate Asset</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(240,237,230,0.7)", lineHeight: 1.7, maxWidth: 560, marginBottom: 36 }}>
            The VA loan benefit is the most powerful wealth-building tool in the military. Most service members use it once. The ones who understand the strategy use it every time they move.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={btnPrimary}>Build My Strategy</a>
            <a href={APPLY} target="_blank" rel="noopener noreferrer" style={btnOutline}>Start My Application</a>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {branches.map((b) => (
              <span key={b} style={{ fontSize: 12, color: "rgba(240,237,230,0.55)", backgroundColor: "rgba(255,255,255,0.06)", padding: "5px 14px", borderRadius: 999, fontFamily: "'Fira Mono', monospace" }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. FEAR VS. REALITY ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>The fear vs. the reality</p>
          <h2 style={h2Style()}>The advice that costs military families the most wealth</h2>
          <p style={subStyle()}>Don't buy — you're just going to PCS in 3 years. Here's why that's wrong.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 32 }}>
            <div style={{ backgroundColor: "rgba(226,75,74,0.08)", border: "1px solid rgba(226,75,74,0.25)", borderRadius: radius, padding: 28 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#991b1b", marginBottom: 12, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.04em" }}>What people say</p>
              <p style={{ fontSize: 15, color: "#7f1d1d", lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>"Don't buy near a base. You'll PCS and be stuck. What if the market shifts and you can't sell?"</p>
            </div>
            <div style={{ backgroundColor: "rgba(99,153,34,0.08)", border: "1px solid rgba(99,153,34,0.25)", borderRadius: radius, padding: 28 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#166534", marginBottom: 12, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.04em" }}>What's actually true</p>
              <p style={{ fontSize: 15, color: "#14532d", lineHeight: 1.65, margin: 0 }}>You don't have to sell. You have two other exits — assumption and rental conversion. The PCS is the mechanism that builds the portfolio, not the risk that stops it.</p>
            </div>
          </div>
          <div style={{ borderLeft: `3px solid ${navy}`, backgroundColor: "rgba(26,58,92,0.05)", borderRadius: `0 ${radius} ${radius} 0`, padding: "20px 24px" }}>
            <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.65, margin: 0 }}>The VA loan changes the math on risk. You bought with zero down. Your exposure is fundamentally different from a civilian buyer who put 20% down and is now underwater.</p>
          </div>
        </div>
      </section>

      {/* ── 3. OWNER-OCCUPIED TO LANDLORD ───────────────────────────────────── */}
      <section style={{ backgroundColor: soft, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Owner-occupied to landlord</p>
          <h2 style={h2Style()}>How the transition from homeowner to landlord works</h2>
          <p style={subStyle()}>VA requires you to occupy at origination — not forever. Here's the three-step path.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 0 }}>
            {[
              { step: "01", title: "Purchase & occupy", body: "You certify intent to occupy as primary residence. You move in. VA occupancy requirement fully satisfied from day one." },
              { step: "02", title: "Orders arrive", body: "PCS orders serve as documented proof of involuntary departure. You are not violating loan terms. Convert to rental." },
              { step: "03", title: "Use VA again", body: "Calculate remaining entitlement. In many cases you can purchase again at the next duty station — zero down, active VA loan still on property one." },
            ].map((s, i) => (
              <div key={s.step} style={{ backgroundColor: white, padding: 28, borderTop: `3px solid ${copper}`, borderRight: i < 2 ? `1px solid ${border}` : "none" }}>
                <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, fontWeight: 600, marginBottom: 8, display: "block" }}>Step {s.step}</span>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 700, color: navy, marginBottom: 10 }}>{s.title}</div>
                <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.65, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. LANDLORD RESPONSIBILITIES ────────────────────────────────────── */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Landlord responsibilities</p>
          <h2 style={h2Style()}>Owning a rental — the good, the bad, and what location actually means</h2>
          <p style={subStyle()}>Rental income is real. So are the obligations. Here's what nobody tells you at closing.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {landlordCards.map((c) => (
              <div key={c.title} style={{ backgroundColor: white, border: `1px solid ${border}`, borderRadius: radius, padding: 24 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: c.color, marginBottom: 14 }} />
                <div style={{ fontFamily: "'Lora', serif", fontSize: 16, fontWeight: 700, color: navy, marginBottom: 8 }}>{c.title}</div>
                <p style={{ fontSize: 14, color: textSecondary, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROPERTY MANAGEMENT CHECKLIST ────────────────────────────────── */}
      <section style={{ backgroundColor: navy, ...sectionPad }}>
        <div style={container}>
          <p style={tag(copper)}>Property management</p>
          <h2 style={h2Style(white)}>Choosing a property manager — some are good, some are not</h2>
          <p style={subStyle("rgba(240,237,230,0.6)")}>When you're managing from two duty stations away, a PM isn't optional — it's essential. Ask these questions before you sign anything.</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {pmChecklist.map((item, i) => (
              <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "18px 0", borderBottom: i < pmChecklist.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 15, color: "rgba(240,237,230,0.85)", lineHeight: 1.65, margin: 0 }}>
                  <span style={{ color: copper, fontWeight: 700 }}>{item.label}:</span> {item.q}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. VA ENTITLEMENT ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: hero, ...sectionPad }}>
        <div style={container}>
          <p style={tag(copper)}>VA entitlement explained</p>
          <h2 style={h2Style(white)}>How VA entitlement works — and how to use it more than once</h2>
          <p style={subStyle("rgba(240,237,230,0.6)")}>Most loan officers can't explain this clearly. You need to understand it before your second PCS.</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {entitlementItems.map((t, i) => (
              <div key={t.badge} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "24px 0", borderBottom: i < entitlementItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <span style={{ display: "inline-block", backgroundColor: "rgba(181,98,30,0.2)", color: copper, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999, fontFamily: "'Fira Mono', monospace", whiteSpace: "nowrap", flexShrink: 0 }}>{t.badge}</span>
                <p style={{ fontSize: 15, color: "rgba(240,237,230,0.85)", lineHeight: 1.65, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PORTFOLIO TIMELINE ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: soft, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>PCS by PCS portfolio</p>
          <h2 style={h2Style()}>Building wealth one duty station at a time</h2>
          <p style={subStyle()}>This isn't a fantasy. Military families execute this playbook every enlistment.</p>
          <div style={{ position: "relative", paddingLeft: 40 }}>
            {/* vertical line */}
            <div style={{ position: "absolute", left: 11, top: 8, bottom: 8, width: 2, backgroundColor: copper, opacity: 0.3 }} />
            {timeline.map((t, i) => (
              <div key={t.yr} style={{ position: "relative", marginBottom: i < timeline.length - 1 ? 48 : 0 }}>
                {/* dot */}
                <div style={{ position: "absolute", left: -40, top: 4, width: 24, height: 24, borderRadius: "50%", backgroundColor: copperLight, border: `3px solid ${copper}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: copper }} />
                </div>
                <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, fontWeight: 600, display: "block", marginBottom: 6 }}>{t.yr}</span>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 700, color: navy, marginBottom: 8 }}>{t.title}</div>
                <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.65, marginBottom: 14 }}>{t.body}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {t.pills.map((p) => (
                    <span key={p} style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: navy, backgroundColor: white, border: `1px solid ${border}`, padding: "4px 12px", borderRadius: 999 }}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. INTERACTIVE TOOLS PLACEHOLDER ───────────────────────────────── */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Interactive tools</p>
          <h2 style={h2Style()}>Run your own numbers</h2>
          <p style={subStyle()}>Three tools that make the strategy real and personal — coming soon.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
<RentalROICalculator />
            {toolCards.map((c) => (
              <div key={c.title} style={{ border: `2px dashed ${border}`, borderRadius: radius, padding: 28, backgroundColor: "#fafaf8", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: copperLight, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: copper }} />
                </div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 17, fontWeight: 700, color: navy, marginBottom: 10 }}>{c.title}</div>
                <p style={{ fontSize: 14, color: textSecondary, lineHeight: 1.65, marginBottom: 16 }}>{c.desc}</p>
                <span style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", color: copper, backgroundColor: copperLight, padding: "4px 12px", borderRadius: 999 }}>Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. LOAN ASSUMPTION ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fdf3e8", borderTop: `2px solid ${copper}`, borderBottom: `2px solid ${copper}`, ...sectionPad }}>
        <div style={container}>
          <p style={tag("#7a3d0a")}>Your exit options</p>
          <h2 style={h2Style("#3b1f08")}>When you need to sell — loan assumption explained</h2>
          <p style={{ ...subStyle("#5c3214"), maxWidth: 700 }}>VA and FHA loans are assumable. In a high-rate environment, that's a competitive advantage conventional borrowers don't have.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 24 }}>
            <div style={{ backgroundColor: "rgba(181,98,30,0.08)", border: `1px solid ${copper}`, borderRadius: radius, padding: 28 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: copper, marginBottom: 12, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.04em" }}>VA assumption</p>
              <p style={{ fontSize: 15, color: "#3b1f08", lineHeight: 1.65, margin: 0 }}>Buyer takes over your loan at your original rate, balance, and term. Buyer does not have to be a veteran — but entitlement stays tied until paid off unless it's a veteran-to-veteran assumption, which releases it immediately.</p>
            </div>
            <div style={{ backgroundColor: "rgba(26,58,92,0.06)", border: `1px solid ${navy}`, borderRadius: radius, padding: 28 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: navy, marginBottom: 12, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.04em" }}>FHA assumption</p>
              <p style={{ fontSize: 15, color: "#3b1f08", lineHeight: 1.65, margin: 0 }}>Similar concept, simpler process. No entitlement complication. Buyer must qualify creditwise with the servicer. Strong option when you have an FHA loan at a rate well below the current market.</p>
            </div>
          </div>
          <div style={{ backgroundColor: white, border: `1px solid ${copper}`, borderRadius: radius, padding: "20px 24px" }}>
            <p style={{ fontSize: 15, color: "#3b1f08", lineHeight: 1.65, margin: 0 }}>Assumption requires lender approval and can take 60–90 days. Plan ahead. We walk every client through assumption eligibility before they need it — not after PCS orders arrive. Talk to us about whether your loan qualifies.</p>
          </div>
        </div>
      </section>

      {/* ── 10. READINESS QUESTIONS ────────────────────────────────────────── */}
      <section style={{ backgroundColor: soft, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>Before you buy</p>
          <h2 style={h2Style()}>Questions to ask yourself honestly</h2>
          <p style={subStyle()}>Not every duty station is the right place to buy. Not every buyer is ready to be a landlord. Think this through before you commit.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {readinessQs.map((q) => (
              <div key={q} style={{ backgroundColor: white, border: `1px solid ${border}`, borderRadius: radius, padding: 24 }}>
                <p style={{ fontSize: 15, color: textPrimary, lineHeight: 1.65, margin: 0 }}>{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. NATIONWIDE REACH ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: hero, ...sectionPad }}>
        <div style={container}>
          <p style={tag(copper)}>Nationwide reach</p>
          <h2 style={h2Style(white)}>This strategy works wherever you're stationed</h2>
          <p style={subStyle("rgba(240,237,230,0.6)")}>This page was built for the Fort Hood corridor — but the strategy applies at every installation. Share it with anyone in uniform, at any base, in any branch.</p>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, border: "1px solid rgba(255,255,255,0.15)", borderRadius: radius, padding: "20px 24px" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#4ade80", flexShrink: 0, marginTop: 6 }} />
            <p style={{ fontSize: 15, color: "rgba(240,237,230,0.85)", lineHeight: 1.65, margin: 0 }}>
              Licensed in 49 states. Army, Navy, Marine Corps, Air Force, Space Force, Coast Guard, Guard, and Reserves — wherever your orders take you, we can help. The only state we do not serve is New York. Every other duty station in the country, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* ── 12. CLOSING CTA ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: navy, ...sectionPad }}>
        <div style={{ ...container, textAlign: "center", maxWidth: 640 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: copper, color: white, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, marginBottom: 20 }}>SS</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, color: white, marginBottom: 6 }}>Shalanda Smith</div>
          <p style={{ fontSize: 13, color: "rgba(240,237,230,0.5)", marginBottom: 24, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.03em" }}>NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · Licensed in 49 States</p>
          <p style={{ fontSize: 16, color: "rgba(240,237,230,0.75)", lineHeight: 1.7, marginBottom: 32 }}>
            This isn't a standard mortgage conversation. Tell me where you're stationed, how long you plan to serve, and what you're trying to build. We'll map the whole strategy — not just the first loan.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={btnPrimary}>Schedule a Strategy Call</a>
            <a href={APPLY} target="_blank" rel="noopener noreferrer" style={btnOutline}>Start My Application</a>
          </div>
          <p style={{ fontSize: 14, color: "rgba(240,237,230,0.5)", margin: 0 }}>Or call/text: <a href="tel:2549359331" style={{ color: "rgba(240,237,230,0.7)", textDecoration: "underline" }}>254-935-9331</a></p>
        </div>
      </section>

      {/* ── 13. COMPLIANCE FOOTER ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#141c24", padding: "32px 0" }}>
        <div style={{ ...container, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "rgba(240,237,230,0.4)", lineHeight: 1.7, marginBottom: 0, maxWidth: 800, margin: "0 auto" }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. Secure Choice Lending is licensed in 49 states — contact us for state-specific licensing information.
          </p>
        </div>
      </section>
    </div>
  );
}
