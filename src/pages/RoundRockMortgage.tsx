import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

/* ── SEO ──────────────────────────────────────────────────────────────────── */
function useRoundRockSEO() {
  useEffect(() => {
    document.title =
      "Mortgage Broker Round Rock TX – Williamson County Home Loans | Keys by Shalanda";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Round Rock TX mortgage broker for first-time buyers, tech relocations, and Williamson County move-ups. More home than Austin — same commute. VA, FHA, conventional, physician, and DPA programs."
    );
    setMeta("og:title", "Mortgage Broker Round Rock TX | Keys by Shalanda", true);
    setMeta(
      "og:description",
      "Buying in Round Rock? Dell, Apple, Amazon, and BSW drive relocation demand. We close here regularly with VA, FHA, conventional, physician, and DPA programs.",
      true
    );
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://shalandasmith.com/round-rock-tx-mortgage");
  }, []);
}

/* ── TOKENS ────────────────────────────────────────────────────────────────── */
const hero = "#1a2535";
const navy = "#1a3a5c";
const copper = "#b5621e";
const ivory = "#faf8f4";
const parchment = "#fdf9f3";
const cream = "#f6f1e7";
const white = "#ffffff";
const textPrimary = "#1c2630";
const textSecondary = "#4a5568";
const textOnPale = "#3a2a14";
const radius = 8;
const border = "rgba(26,58,92,0.1)";

const sectionPad = { padding: "72px 0" } as const;
const container = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" } as const;
const tag = (c = copper) => ({
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  color: c,
  fontFamily: "'Fira Mono', monospace",
  marginBottom: 12,
  fontWeight: 600,
});
const h2Style = (c = textPrimary) => ({
  fontFamily: "'Lora', serif",
  fontSize: 32,
  fontWeight: 700 as const,
  color: c,
  lineHeight: 1.25,
  marginBottom: 14,
});
const subStyle = (c = textSecondary) => ({
  fontSize: 16,
  color: c,
  lineHeight: 1.7,
  maxWidth: 760,
  marginBottom: 24,
});

const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply = "https://scl.my1003app.com/554554/register";

/* ── DATA ─────────────────────────────────────────────────────────────────── */
const stats = [
  { v: "$390K", l: "Median Home Price" },
  { v: "15 mi", l: "North of Downtown Austin" },
  { v: "Round Rock ISD", l: "A-Rated School District" },
  { v: "1.75%–1.90%", l: "Williamson Co. Tax Rate" },
];

const neighborhoods = [
  {
    name: "Round Rock",
    price: "$360K–$430K",
    tag: "Established · Best value in Williamson County",
    desc: "Round Rock proper offers the widest range of housing stock — established neighborhoods from the 1990s and 2000s alongside newer subdivisions on the north and east sides. Close to the Dell campus, H-E-B, Premium Outlets, and I-35. Round Rock ISD is consistently A-rated in Texas accountability rankings.",
  },
  {
    name: "Pflugerville",
    price: "$320K–$390K",
    tag: "Most affordable · Southeast corridor",
    desc: "Directly south of Round Rock and the most affordable entry point in the north Austin corridor. Newer subdivisions, Pflugerville ISD, and fast SH-130 access make it popular with first-time buyers who want the metro area at a lower price point without the Austin zip code premium.",
  },
  {
    name: "Cedar Park",
    price: "$400K–$500K",
    tag: "Suburban amenities · Leander ISD",
    desc: "West of Round Rock on SH-183A, Cedar Park has grown into a destination with its own retail, dining, and entertainment corridor. Leander ISD. Tech workers commuting to the Apple campus in North Austin favor Cedar Park for new construction quality and suburban infrastructure.",
  },
  {
    name: "Hutto",
    price: "$290K–$360K",
    tag: "Fastest growing · New construction",
    desc: "Hutto is exploding with master-planned communities and D.R. Horton and Lennar builds, with SH-130 access that bypasses I-35 congestion. Hutto ISD. Buyers who prioritize square footage, new construction, and affordability over address prestige are choosing Hutto over Round Rock proper.",
  },
  {
    name: "Georgetown",
    price: "$390K–$480K",
    tag: "Fastest-growing US city · Williamson County seat",
    desc: "Georgetown has consistently ranked among the fastest-growing cities in the United States. The historic courthouse square, strong Georgetown ISD, and Sun City active adult community (55+) drive consistent buyer demand. Premium pricing reflects the market's momentum and quality-of-life credentials.",
  },
];

const programs = [
  {
    title: "Conventional",
    badgeColor: navy,
    items: [
      "3% to 20% down payment",
      "PMI removable at 20% equity — no lifetime premium like FHA",
      "620 minimum credit score, best pricing at 740+",
      "HomeReady and Home Possible: 3% down with income-based MI pricing at or below 80% AMI",
    ],
    note: "Right-sized for Round Rock's median price point. Strong fit for move-up buyers with equity from a prior home.",
    link: { to: "/conventional-loan-texas", text: "Conventional Loan Details →" },
  },
  {
    title: "FHA + Down Payment Assistance",
    badgeColor: "#2a7a7a",
    items: [
      "3.5% down with 580+ credit score",
      "TDHCA My First Texas Home (620 min) and TSAHC Homes for Texas Heroes (620 min — nurses, teachers, first responders)",
      "SETH 5 Star (640 min) and SETH GoldStar (620 min) both available in Williamson County",
      "Chenoa Fund (600 min) for buyers with thinner credit profiles",
    ],
    note: "DPA programs set the interest rate for all borrowers on a given day. The broker controls program selection and structure — not the rate itself.",
    link: { to: "/down-payment-assistance-texas", text: "All DPA Programs →" },
  },
  {
    title: "VA Loans",
    badgeColor: copper,
    items: [
      "Zero down payment for eligible veterans, active duty, and surviving spouses",
      "No PMI — ever",
      "Williamson County VA loan limit $833,150 — above Round Rock's median price",
      "Fort Hood is 65 miles north — Round Rock serves a significant veteran population",
    ],
    note: null as string | null,
    link: { to: "/va-loan-texas", text: "VA Loan Details →" },
  },
  {
    title: "Physician Loans",
    badgeColor: copper,
    items: [
      "No down payment required up to $1.5M",
      "No PMI regardless of down payment amount",
      "Student loan debt excluded or IBR payment used for DTI",
      "Available to MDs, DOs, DMDs, DVMs — and in some programs NPs and PAs",
    ],
    note: "BSW Round Rock and Ascension Seton Williamson are both major employers. 1-day-out-of-residency programs available.",
    link: { to: "/physician-loan-texas", text: "Physician Loan Details →" },
  },
  {
    title: "USDA Rural Development",
    badgeColor: "#3B6D11",
    items: [
      "Zero down payment for eligible properties",
      "No monthly mortgage insurance premium",
      "Income limits apply by household size",
      "Some addresses in Hutto and rural Williamson County edges qualify",
    ],
    note: "Round Rock proper and most of the corridor do not qualify. Contact us to check your specific address before assuming ineligibility.",
    link: null as { to: string; text: string } | null,
  },
];

const comparisonRows = [
  { label: "Median Home Price", rr: "$390K", austin: "$575K", gtown: "$430K" },
  { label: "County Tax Rate", rr: "~1.80%", austin: "~1.95% (Travis)", gtown: "~1.80%" },
  { label: "Price per Sq Ft", rr: "~$195", austin: "~$285", gtown: "~$205" },
  { label: "School District Rating", rr: "A-rated", austin: "Varies", gtown: "A-rated" },
  { label: "Austin Commute", rr: "20 min", austin: "N/A", gtown: "30 min" },
  { label: "New Construction", rr: "Limited", austin: "Very limited", gtown: "Active" },
];

const texasItems = [
  {
    badge: "Property taxes",
    body: "Williamson County property taxes run approximately 1.75% to 1.90% of assessed value annually. On a $390,000 home that adds roughly $568 to $617 per month to your payment. We always quote your full PITI — never just principal and interest.",
  },
  {
    badge: "Homestead exemption",
    body: "Texas reduces your taxable home value by $100,000 for your primary residence. File with Williamson County Appraisal District in the year you close — it does not happen automatically and missing the window costs you real money every year you delay.",
  },
  {
    badge: "VA disability exemption",
    body: "A 100% service-connected disability rating qualifies you for a complete property tax exemption on your Texas primary residence. On a $390,000 Round Rock home this saves approximately $6,800 to $7,400 per year. File with Williamson County Appraisal District after closing using your VA award letter.",
  },
  {
    badge: "Option period",
    body: "Texas contracts include a 5 to 10 day option period during which you can exit for any reason and keep your earnest money. Use it for a thorough inspection. Do not waive it to appear competitive — especially on new construction in Hutto and Georgetown where build quality varies significantly by builder.",
  },
  {
    badge: "Community property",
    body: "Texas is a community property state. If you are married your spouse may need to sign certain loan documents even if they are not on the loan. Standard in Texas — not a red flag, just something to plan for at closing.",
  },
];

const faqs = [
  {
    q: "Is Round Rock actually more affordable than Austin right now?",
    a: "Yes — meaningfully so. Round Rock's median home price runs roughly $150,000 to $200,000 below comparable homes in Austin proper. The commute to downtown Austin is 20 to 25 minutes on I-35. Many buyers working in North Austin — at Dell, Apple, and Amazon — find they get significantly more home in Round Rock at a price point that keeps their monthly payment manageable without giving up commute time.",
  },
  {
    q: "What school district is Round Rock in?",
    a: "Round Rock ISD serves most of the city and is consistently A-rated in Texas accountability rankings. Some addresses on the Cedar Park and Georgetown borders feed into Leander ISD or Georgetown ISD. Always verify the specific address before making a school district decision — attendance zone boundaries don't follow city limits.",
  },
  {
    q: "Can I use down payment assistance in Round Rock?",
    a: "Yes. TDHCA My First Texas Home (620 minimum credit), TSAHC Homes for Texas Heroes (620 minimum, available to nurses, teachers, and first responders), SETH 5 Star (640 minimum), SETH GoldStar (620 minimum), and Chenoa Fund (600 minimum) are all available in Williamson County. These programs can cover your full down payment and in some cases closing costs. Income and purchase price limits apply — we run your eligibility at no cost during our first conversation.",
  },
  {
    q: "How does Dell's presence affect the Round Rock housing market?",
    a: "Dell is headquartered in Round Rock with approximately 16,000 local employees. Its presence creates consistent resale demand — when tech employees relocate, they frequently target Round Rock, which supports prices and liquidity. The diversified employer base of Amazon, Apple, BSW, and Ascension offsets single-employer risk that smaller tech markets can't claim.",
  },
  {
    q: "What is the difference between buying in Round Rock versus Georgetown?",
    a: "Georgetown has been the fastest-growing city in the United States and commands a slight price premium. Georgetown ISD is strong. Round Rock offers more housing inventory, better proximity to Austin employment corridors, and slightly lower price points at comparable square footage. Georgetown appeals to buyers who prioritize the historic downtown, the Sun City 55+ community, and a distinct small-city identity.",
  },
  {
    q: "Are VA loans competitive in the Round Rock market?",
    a: "Yes — and becoming more so. Sellers who previously resisted VA offers are more flexible in the current market. Zero down, no PMI, and Williamson County's VA loan limit of $833,150 covers every Round Rock price point. We have closed VA loans here and know how to position your offer to be taken seriously alongside conventional buyers.",
  },
  {
    q: "What is the new construction situation in Round Rock?",
    a: "New construction within Round Rock proper is limited — most available lots have been built out. The active new construction market is in Georgetown, Hutto, Leander, and the far north 183A corridor. If new construction is a priority, come to us before you walk into a model home. National builders use captive lenders with incentive packages designed to keep your business in-house — and their incentives are often portable to outside financing if you know to ask.",
  },
  {
    q: "Should I buy in Round Rock or wait for rates to drop?",
    a: "That is a personal decision based on your timeline and financial situation — we won't make it for you. What we can tell you is that Round Rock's price point is accessible today, sellers are negotiating, and DPA programs currently have strong funding. If rates drop meaningfully a refinance is a real option. Waiting while renting means paying someone else's mortgage in a market with 30 years of consistent appreciation history.",
  },
];

/* ── COMPONENT ────────────────────────────────────────────────────────────── */
const RoundRockMortgage = () => {
  useRoundRockSEO();

  return (
    <>
      <SEO {...(seoMeta as any).roundRockMortgage} />
      <style>{`
        .rrm-btn:hover{opacity:.92}
        .rrm-grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
        .rrm-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        @media(max-width:900px){.rrm-grid-2,.rrm-grid-3{grid-template-columns:1fr}}
        .rrm-faq summary{cursor:pointer;list-style:none;padding:18px 0;font-family:'Lora',serif;font-size:18px;font-weight:600;color:${navy};display:flex;justify-content:space-between;align-items:center;gap:16px}
        .rrm-faq summary::after{content:"+";color:${copper};font-size:24px;font-weight:300;transition:transform .2s}
        .rrm-faq[open] summary::after{content:"−"}
        .rrm-faq p{padding:0 0 18px;color:${textSecondary};line-height:1.7;margin:0;font-size:15px}
        .rrm-faq{border-bottom:1px solid ${border}}
        .rrm-compare th,.rrm-compare td{padding:14px 16px;text-align:left;font-size:14.5px;border-bottom:1px solid ${border}}
        .rrm-compare th{font-family:'Fira Mono',monospace;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:${copper};background:${parchment}}
        @media(max-width:900px){.rrm-compare th,.rrm-compare td{padding:10px 8px;font-size:12px}}
      `}</style>

      {/* HERO */}
      <section style={{ background: hero, color: ivory, padding: "88px 0 96px" }}>
        <div style={container}>
          <div style={tag("#e8b47d")}>Round Rock, TX · Williamson County · Mortgage Broker</div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, fontWeight: 700, lineHeight: 1.15, marginBottom: 20, maxWidth: 880 }}>
            Buying a Home in Round Rock, TX. More Home Than Austin — Same Commute.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "#d8d4cb", maxWidth: 780, marginBottom: 32 }}>
            Round Rock sits 15 miles north of downtown Austin with A-rated schools, major tech and healthcare employers, and home prices $150K–$200K below comparable Austin addresses. We close here regularly.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <a href={apply} target="_blank" rel="noopener noreferrer" className="rrm-btn" style={{ background: copper, color: white, padding: "14px 28px", borderRadius: radius, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Get Pre-Approved</a>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="rrm-btn" style={{ background: "transparent", color: ivory, padding: "14px 28px", borderRadius: radius, border: `1.5px solid ${ivory}`, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Book a Strategy Call</a>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Williamson County Specialist", "VA · FHA · Conventional · DPA", "Physician Loans", "21-Day Avg Close", "50+ Lender Network"].map((t) => (
              <span key={t} style={{ fontFamily: "'Fira Mono',monospace", fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", color: "#e8b47d", border: "1px solid rgba(232,180,125,0.4)", padding: "6px 12px", borderRadius: 4 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* COPPER STATS BAR */}
      <section style={{ background: copper, color: white, padding: "28px 0" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24 }}>
            {stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Lora',serif", fontSize: 22, fontWeight: 700 }}>{s.v}</div>
                <div style={{ fontFamily: "'Fira Mono',monospace", fontSize: 11, letterSpacing: "1.2px", textTransform: "uppercase", opacity: 0.9, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ROUND ROCK */}
      <section style={{ background: white, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>Why Round Rock</div>
          <h2 style={h2Style()}>The Case for Buying in Round Rock Right Now</h2>
          <p style={subStyle()}>
            Round Rock's growth story is structural, not speculative. Dell has been headquartered here since the 1990s — which means Round Rock has 30 years of resale depth, infrastructure investment, and school district development that newer boom markets haven't had time to build. Apple, Amazon, and Kalahari have layered additional employment demand on top of that foundation. Baylor Scott & White and Ascension Seton Williamson add year-round healthcare relocation demand.
          </p>
          <p style={subStyle()}>
            The buyer story is price differential. A buyer working in North Austin — at the Apple campus, at one of the tech campuses on 183, or downtown — can buy in Round Rock at $150,000 to $200,000 less than a comparable Austin home and still commute in under 25 minutes. For a physician relocating to BSW Round Rock, the physician loan program delivers a no-down, no-PMI path into a market with 30 years of appreciation history behind it.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: cream, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>By the Numbers</div>
          <h2 style={h2Style()}>Round Rock vs. Austin vs. Georgetown</h2>
          <p style={subStyle()}>Same Williamson County tax base. Same commute to North Austin. Very different price points.</p>
          <div style={{ overflowX: "auto", background: white, borderRadius: radius, boxShadow: "0 2px 8px rgba(28,38,48,0.06)", marginTop: 24 }}>
            <table className="rrm-compare" style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th></th>
                  <th>Round Rock</th>
                  <th>Austin</th>
                  <th>Georgetown</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.label}>
                    <td style={{ fontWeight: 600, color: textPrimary }}>{r.label}</td>
                    <td style={{ color: textOnPale }}>{r.rr}</td>
                    <td style={{ color: textSecondary }}>{r.austin}</td>
                    <td style={{ color: textSecondary }}>{r.gtown}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12.5, color: textSecondary, fontStyle: "italic", marginTop: 16 }}>
            Approximate figures based on 2026 market data. Commute times reflect normal traffic conditions.
          </p>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section style={{ background: parchment, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>Know the Area</div>
          <h2 style={h2Style()}>Neighborhoods in the Round Rock Corridor</h2>
          <p style={subStyle(textOnPale)}>
            "Round Rock" to most buyers means the broader north Austin corridor — Williamson County cities that share employers, commutes, and the same general lifestyle. Here's the price and character breakdown.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20, marginTop: 32 }}>
            {neighborhoods.map((n) => (
              <div key={n.name} style={{ background: white, borderLeft: `4px solid ${copper}`, borderRadius: radius, padding: "24px 26px", boxShadow: "0 2px 8px rgba(28,38,48,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6, gap: 10, flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "'Lora',serif", fontSize: 22, color: navy, margin: 0 }}>{n.name}</h3>
                  <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: 13, color: copper, fontWeight: 600 }}>{n.price}</span>
                </div>
                <div style={{ fontFamily: "'Fira Mono',monospace", fontSize: 10.5, letterSpacing: "1.2px", textTransform: "uppercase", color: textSecondary, marginBottom: 12 }}>{n.tag}</div>
                <p style={{ fontSize: 14.5, color: textOnPale, lineHeight: 1.65, margin: 0 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAN PROGRAMS */}
      <section style={{ background: navy, color: ivory, ...sectionPad }}>
        <div style={container}>
          <div style={tag("#e8b47d")}>Find Your Fit</div>
          <h2 style={h2Style(ivory)}>Loan Programs for Round Rock Buyers</h2>
          <p style={{ ...subStyle("#d8d4cb"), maxWidth: 760 }}>
            First-time buyer, tech relocation, healthcare professional, or move-up — the right program depends on your file.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20, marginTop: 32 }}>
            {programs.map((p) => (
              <div key={p.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: radius, padding: "26px 26px" }}>
                <span style={{ display: "inline-block", background: p.badgeColor, color: white, padding: "5px 12px", borderRadius: 4, fontSize: 11, fontFamily: "'Fira Mono',monospace", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: 14 }}>{p.title}</span>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>
                  {p.items.map((i, idx) => (
                    <li key={idx} style={{ color: "#d8d4cb", fontSize: 14.5, lineHeight: 1.6, paddingLeft: 18, position: "relative", marginBottom: 8 }}>
                      <span style={{ position: "absolute", left: 0, color: copper }}>›</span>{i}
                    </li>
                  ))}
                </ul>
                {p.note && <p style={{ fontSize: 13.5, color: "#b8b4ab", fontStyle: "italic", lineHeight: 1.55, marginBottom: 12 }}>{p.note}</p>}
                {p.link && <Link to={p.link.to} style={{ color: "#e8b47d", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'Outfit',sans-serif" }}>{p.link.text}</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR CALLOUT */}
      <section style={{ background: parchment, ...sectionPad }}>
        <div style={container}>
          <div style={{ background: white, borderLeft: `4px solid ${copper}`, borderRadius: radius, padding: "32px 36px", boxShadow: "0 2px 8px rgba(28,38,48,0.06)" }}>
            <div style={tag()}>Run Your Numbers</div>
            <h2 style={{ ...h2Style(), fontSize: 26, marginBottom: 12 }}>What Does a Round Rock Mortgage Actually Cost?</h2>
            <p style={{ color: textOnPale, fontSize: 15.5, lineHeight: 1.7, marginBottom: 20 }}>
              Use the Texas Payment Calculator to model your full PITI at any Round Rock price point — including Williamson County property taxes and homeowners insurance. The VA Loan Calculator models your zero-down monthly payment with the VA funding fee built in. No email required.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/calculators?tab=texas-payment" style={{ display: "inline-block", background: copper, color: white, padding: "12px 22px", borderRadius: radius, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}>Texas Payment Calculator →</Link>
              <Link to="/calculators?tab=va-loan" style={{ display: "inline-block", background: "transparent", color: navy, padding: "12px 22px", borderRadius: radius, border: `1.5px solid ${navy}`, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}>VA Loan Calculator →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEXAS-SPECIFIC */}
      <section style={{ background: white, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>Texas-Specific</div>
          <h2 style={h2Style()}>Williamson County Details That Affect Your Payment</h2>
          <p style={subStyle()}>These apply to every buyer in Round Rock and the surrounding corridor. Know them before you close.</p>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            {texasItems.map((t) => (
              <div key={t.badge} style={{ borderLeft: `4px solid ${copper}`, background: parchment, padding: "20px 24px", borderRadius: 4 }}>
                <div style={{ fontFamily: "'Fira Mono',monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: copper, fontWeight: 700, marginBottom: 8 }}>{t.badge}</div>
                <p style={{ margin: 0, color: textOnPale, fontSize: 15, lineHeight: 1.65 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: cream, ...sectionPad }}>
        <div style={{ ...container, maxWidth: 880 }}>
          <div style={tag()}>Frequently Asked</div>
          <h2 style={h2Style()}>What Round Rock Buyers Ask Us Most</h2>
          <div style={{ marginTop: 24 }}>
            {faqs.map((f, i) => (
              <details key={i} className="rrm-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: `linear-gradient(135deg, ${hero} 0%, ${navy} 100%)`, color: ivory, ...sectionPad }}>
        <div style={{ ...container, textAlign: "center" }}>
          <h2 style={{ ...h2Style(ivory), fontSize: 36 }}>Ready to Buy in Round Rock?</h2>
          <p style={{ fontSize: 17, color: "#d8d4cb", lineHeight: 1.65, maxWidth: 720, margin: "0 auto 32px" }}>
            Tell me your timeline and price range. We'll run your full PITI before you shop a single home — VA, physician, conventional, or FHA with DPA. Real numbers. No pressure.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 20 }}>
            <a href={apply} target="_blank" rel="noopener noreferrer" className="rrm-btn" style={{ background: copper, color: white, padding: "14px 28px", borderRadius: radius, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Get Pre-Approved</a>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="rrm-btn" style={{ background: "transparent", color: ivory, padding: "14px 28px", borderRadius: radius, border: `1.5px solid ${ivory}`, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Book a Strategy Call</a>
          </div>
          <p style={{ fontFamily: "'Fira Mono',monospace", fontSize: 12, letterSpacing: "1px", color: "#b8b4ab" }}>
            Or call/text: 254-935-9331 · Shalanda Smith · NMLS #554554
          </p>
        </div>
      </section>
    </>
  );
};

export default RoundRockMortgage;
