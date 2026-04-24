import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

/* ── SEO ─────────────────────────────────────────────────────────────────── */
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
      "Round Rock TX mortgage broker — VA, FHA, conventional, physician, renovation, and one-time close construction loans. More home than Austin. Old Town charm. Dell, Apple, Amazon corridor."
    );
    setMeta("og:title", "Mortgage Broker Round Rock TX | Keys by Shalanda", true);
    setMeta(
      "og:description",
      "Buying in Round Rock? Old Town bungalows, new subdivisions, and the Austin price gap. We close here with VA, FHA, physician, renovation, and one-time close programs.",
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

/* ── TOKENS ──────────────────────────────────────────────────────────────── */
const hero = "#1a2535";
const navy = "#1a3a5c";
const copper = "#b5621e";
const copperLight = "#fef0e6";
const ivory = "#faf8f4";
const parchment = "#fdf9f3";
const cream = "#f6f1e7";
const white = "#ffffff";
const soft = "#f2efe9";
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
  marginBottom: 32,
});
const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply = "https://scl.my1003app.com/554554/register";

/* ── DATA ────────────────────────────────────────────────────────────────── */
const stats = [
  { v: "~$390K", l: "Median Home Price" },
  { v: "15 mi", l: "North of Downtown Austin" },
  { v: "Round Rock ISD", l: "Consistently A-Rated" },
  { v: "1.75%–1.90%", l: "Williamson Co. Tax Rate" },
];

const marketStats = [
  { label: "Median Home Price", value: "~$390K", note: "Williamson County · 2026", valueColor: white },
  { label: "Avg Days on Market", value: "55+ days", note: "Buyers have real leverage", valueColor: white },
  { label: "VA Loan Limit", value: "$833,150", note: "Well above Round Rock median", valueColor: copper },
];

const neighborhoods = [
  { name: "Old Town Round Rock", price: "$320K–$420K", tag: "Chisholm Trail roots · Walkable · Character homes", desc: "This is the Round Rock that doesn't look like every other Austin suburb. Limestone storefronts from the 1880s, Craftsman bungalows from the 1920s, Victorian cottages, mid-century ranches. Walkable to Round Rock Donuts, Dell Diamond, Bluebonnet Beer Co., and downtown Main Street. Lots are smaller, homes are older — but the character is real. This is where renovation loans and one-time close construction play. Buyers who love a project and hate cookie-cutter floor plans start here." },
  { name: "Round Rock (New Subdivisions)", price: "$360K–$430K", tag: "Established · Best value in Williamson County", desc: "The bulk of Round Rock's housing stock — neighborhoods built in the 1990s through 2010s on the north and east sides. Close to the Dell campus, H-E-B, Premium Outlets, and I-35. More inventory than Georgetown or Cedar Park. Round Rock ISD throughout. Solid resale market with 30 years of appreciation history behind it." },
  { name: "Pflugerville", price: "$310K–$380K", tag: "Most affordable · Southeast corridor", desc: "The lowest price point in the north Austin corridor. Newer subdivisions, Pflugerville ISD, fast SH-130 access. Popular with first-time buyers who want metro-area amenities without paying Round Rock or Cedar Park prices. DPA programs are fully available here." },
  { name: "Cedar Park", price: "$400K–$500K", tag: "Suburban amenities · Leander ISD", desc: "West of Round Rock on SH-183A. Leander ISD — one of the strongest districts in Central Texas. Cedar Park has built its own retail and dining corridor and is popular with tech workers commuting to the Apple campus. New construction is more active here than in Round Rock proper." },
  { name: "Leander", price: "$370K–$460K", tag: "183A corridor · Leander ISD · Cap Metro Rail", desc: "Leander has exploded along the 183A toll road with master-planned communities and strong builder activity. Leander ISD. The Cap Metro Rail Red Line terminates here — one of the few north Austin locations where you can commute downtown without a car. Buyers who want new construction in a top school district and don't need to be in Round Rock proper are landing here." },
  { name: "Hutto", price: "$280K–$355K", tag: "Fastest growing · New construction", desc: "Hutto is building fast — D.R. Horton, Lennar, and local builders active throughout. SH-130 access bypasses I-35 congestion. Hutto ISD. The lowest new construction price point in the corridor. For buyers who prioritize square footage and new appliances over address and school district prestige, Hutto delivers." },
  { name: "Georgetown", price: "$390K–$480K", tag: "Fastest-growing US city · Williamson County seat", desc: "Consistently ranked among the fastest-growing cities in the United States. Historic courthouse square, Georgetown ISD, and Sun City active adult community (55+). New construction is active and prices have risen to reflect the city's momentum. For buyers who want the small-city identity and are willing to pay for it." },
];

const programs = [
  { title: "Conventional", badgeColor: navy, items: ["3% to 20% down", "PMI removable at 20% equity — no lifetime premium like FHA", "620 minimum credit score, best pricing at 740+", "HomeReady and Home Possible: 3% down with income-based MI pricing at or below 80% AMI"], note: "Strong fit for move-up buyers with equity from a prior home and for tech workers with stable W-2 income.", link: { to: "/conventional-loan-texas", text: "Conventional Loan Details →" } },
  { title: "FHA + Down Payment Assistance", badgeColor: "#2a7a7a", items: ["3.5% down with 580+ credit score", "TDHCA My First Texas Home (620 min) and TSAHC Homes for Texas Heroes (620 min — nurses, teachers, first responders)", "SETH 5 Star (640 min) and SETH GoldStar (620 min) — both available in Williamson County", "Chenoa Fund (600 min) for buyers with thinner credit profiles"], note: "DPA programs set the interest rate — the program rate applies to all borrowers that day. The broker controls program selection and structure, not the rate itself.", link: { to: "/down-payment-assistance-texas", text: "All DPA Programs →" } },
  { title: "VA Loans", badgeColor: copper, items: ["Zero down for eligible veterans, active duty, and surviving spouses", "No PMI — ever", "Williamson County VA loan limit $833,150 — above Round Rock's median", "Covers all price points in the corridor including Georgetown and Cedar Park"], note: null, link: { to: "/va-loan-texas", text: "VA Loan Details →" } },
  { title: "Physician Loans", badgeColor: copper, items: ["No down payment required up to $1.5M", "No PMI regardless of down payment amount", "Student loan debt excluded or IBR payment used for DTI", "Available to MDs, DOs, DMDs, DVMs — and in some programs NPs and PAs"], note: "BSW Round Rock Medical Center and Ascension Seton Williamson are both major employers. 1-day-out-of-residency programs available.", link: { to: "/physician-loan-texas", text: "Physician Loan Details →" } },
  { title: "Renovation Loans (FHA 203k & Conventional)", badgeColor: "#3B6D11", items: ["Finance the purchase price AND renovation costs in a single loan", "FHA 203k: limited (cosmetic) and standard (structural) options", "Conventional HomeStyle: more flexibility on finishes and scope", "Ideal for Old Town bungalows and historic district homes near downtown Round Rock"], note: "The renovation budget is built into your loan at origination — you don't need cash reserves to fund the work. Contractor approval is required and draws are managed through escrow.", link: null },
  { title: "One-Time Close Construction", badgeColor: "#534AB7", items: ["Available as VA, FHA, USDA, and conventional", "One loan, one closing, one set of closing costs", "Lock your rate at construction start — no re-qualification at completion", "Build on a lot you already own or purchase lot and construction together"], note: "When Round Rock's existing inventory doesn't have what you want, build it. One-time close lets you design the floor plan, choose the finishes, and lock your terms before the first nail goes in.", link: { to: "/construction-renovation-loans-texas", text: "Construction Loan Details →" } },
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
  { badge: "Property taxes", body: "Williamson County property taxes run approximately 1.75% to 1.90% of assessed value. On a $390,000 home that adds roughly $568 to $617 per month to your payment. We always quote your full PITI — never just principal and interest." },
  { badge: "Homestead exemption", body: "Texas reduces your taxable home value by $100,000 for your primary residence. File with Williamson County Appraisal District in the year you close — it does not happen automatically. On a $390,000 home this saves you roughly $1,750 to $1,900 per year." },
  { badge: "VA disability exemption", body: "A 100% service-connected disability rating qualifies you for a complete property tax exemption on your Texas primary residence. On a $390,000 Round Rock home this saves approximately $6,800 to $7,400 per year. File with Williamson County Appraisal District after closing using your VA award letter." },
  { badge: "Historic property tax exemption", body: "Round Rock has 79 city-designated historic landmarks. Historically designated properties may qualify for a partial tax exemption under the city's program. If you're buying in Old Town or the downtown historic district, ask us — the designation can meaningfully reduce your annual tax bill." },
  { badge: "Option period", body: "Texas contracts include a 5 to 10 day option period during which you can exit for any reason and keep your earnest money. Use it for inspection — especially on Old Town homes built in the 1920s through 1950s where foundation, electrical, and plumbing surprises are real." },
  { badge: "Community property", body: "Texas is a community property state. If you are married your spouse may need to sign certain loan documents even if they are not on the loan. Standard in Texas — not a red flag, just plan for it at closing." },
];

const faqs = [
  { q: "Is Round Rock actually more affordable than Austin?", a: "Yes — meaningfully so. Round Rock's median runs roughly $150,000 to $200,000 below comparable Austin homes. The commute to downtown Austin is 20 to 25 minutes on I-35, and many North Austin employers — Dell, Apple, Amazon — are even closer. You're not making a sacrifice. You're making a smarter purchase." },
  { q: "What makes Old Town Round Rock different from the rest of the city?", a: "Old Town is where Round Rock started — a Chisholm Trail crossing on Brushy Creek established in 1854. The architecture reflects that history: limestone bungalows, Victorian cottages, Craftsman homes, mid-century ranches. Most are 1,000 to 2,400 sq ft. Walkable to Round Rock Donuts, Dell Diamond, and downtown Main Street in a way that no master-planned subdivision in the corridor can match. The tradeoff is honest — homes are older, smaller, and many need updating. That's why renovation loans exist." },
  { q: "How does a renovation loan work for an older home near downtown?", a: "The FHA 203k and conventional HomeStyle renovation loans bundle your purchase price and your renovation budget into a single mortgage. You close once, the renovation funds go into escrow, and draws are released to your contractor as work is completed. You don't need cash reserves to fund the renovation — it's built into your loan. FHA 203k Limited covers cosmetic work up to $75,000. FHA 203k Standard and HomeStyle handle structural renovations. We walk through your scope of work and determine which program fits before you go under contract." },
  { q: "What if I can't find the right home — can I build in Round Rock?", a: "Yes. If the existing inventory doesn't have what you want — especially in Round Rock proper where new construction lots are limited — a one-time close construction loan lets you build on a lot you own or purchase lot and construction together. One loan, one closing, one set of closing costs. VA, FHA, USDA, and conventional options are all available. Your rate is locked at construction start so you're not re-qualifying when the market moves." },
  { q: "What school district is Round Rock in?", a: "Round Rock ISD serves most of the city and is consistently A-rated in Texas accountability rankings. Some addresses on the Cedar Park and Georgetown borders feed into Leander ISD or Georgetown ISD. Always verify the specific address — attendance boundaries don't follow city limits and change periodically." },
  { q: "Can I use down payment assistance in Round Rock?", a: "Yes. TDHCA My First Texas Home (620 minimum), TSAHC Homes for Texas Heroes (620 minimum — nurses, teachers, first responders), SETH 5 Star (640 minimum), SETH GoldStar (620 minimum), and Chenoa Fund (600 minimum) are all available in Williamson County. These can cover your full down payment and in some cases closing costs. We run your eligibility at no cost during our first conversation." },
  { q: "Are VA loans competitive in the Round Rock market?", a: "Yes — and increasingly so. Sellers who previously hesitated on VA offers are more flexible in the current market with homes sitting 55+ days on average. Zero down, no PMI, and a $833,150 county loan limit covers every Round Rock price point. We've closed VA loans here and know how to position your offer." },
  { q: "What's the new construction picture in Round Rock?", a: "New construction within Round Rock proper is limited — most available lots have been built out over 30 years. The active new construction market is in Hutto, Georgetown, Leander, and along the 183A corridor. If new construction is a priority, talk to us before you walk into a model home — national builders like D.R. Horton and Lennar use captive lenders, and their incentive packages are often portable to outside financing if you know to ask." },
];

const whyCards = [
  { icon: copper, label: "Old Town & Downtown", body: "Walkable to Round Rock Donuts (open since 1926), Dell Diamond baseball, Bluebonnet Beer Co., and a Main Street National Historic District. The kind of neighborhood Austin buyers pay a premium for — at a Round Rock price." },
  { icon: "#185FA5", label: "Employment anchor", body: "Dell alone employs 16,000 people locally. Apple, Amazon, Emerson, Kalahari, BSW, and Ascension Seton Williamson give this market diversified demand that smaller tech markets can't claim. When Dell has a down cycle, the others hold." },
  { icon: "#3B6D11", label: "Brushy Creek & outdoors", body: "37 parks, 20+ miles of developed trails, and Brushy Creek Regional Trail running through the heart of the city. Old Settlers Park hosts major sports tournaments year-round. Lake access at Lake Georgetown and Stillhouse Hollow 30 to 45 minutes out." },
  { icon: "#534AB7", label: "Austin without the Austin price", body: "20 minutes to downtown Austin on I-35. 15 minutes to the Apple campus on 183. Same Williamson County tax base as Georgetown. $150K to $200K less than a comparable Austin home. The math works." },
];

const nationalBuilders = ["D.R. Horton", "Lennar", "Meritage Homes", "Taylor Morrison"];
const localBuilders = ["Pacesetter Homes", "Scott Felder Homes", "Saratoga Homes", "Coventry Homes"];
const heroBadges = ["Williamson County Specialist", "VA · FHA · Conventional · DPA", "Renovation Loans", "One-Time Close Construction", "Physician Loans", "21-Day Avg Close", "50+ Lender Network"];

/* ── COMPONENT ───────────────────────────────────────────────────────────── */
const RoundRockMortgage = () => {
  useRoundRockSEO();

  const ctaPrimary: React.CSSProperties = {
    background: copper, color: white, padding: "14px 28px", borderRadius: radius,
    fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-block",
  };
  const ctaSecondary: React.CSSProperties = {
    background: "transparent", color: ivory, padding: "14px 28px", borderRadius: radius,
    fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-block",
    border: `1px solid ${ivory}`,
  };

  return (
    <>
      <SEO {...(seoMeta as any).roundRockMortgage} />
      <style>{`
        .rrm-btn:hover { opacity: 0.92; }
        .rrm-faq summary {
          cursor: pointer; list-style: none; padding: 18px 0;
          font-family: 'Lora', serif; font-size: 18px; font-weight: 600;
          color: ${navy}; display: flex; justify-content: space-between;
          align-items: center; gap: 16px;
        }
        .rrm-faq summary::after { content: "+"; color: ${copper}; font-size: 24px; font-weight: 300; }
        .rrm-faq[open] summary::after { content: "−"; }
        .rrm-faq p { padding: 0 0 18px; color: ${textSecondary}; line-height: 1.7; margin: 0; font-size: 15px; }
        .rrm-faq { border-bottom: 1px solid ${border}; }
        @media (max-width: 900px) {
          .rrm-hero h1 { font-size: 30px !important; }
          .rrm-hero-btns { flex-direction: column; }
          .rrm-2col { grid-template-columns: 1fr !important; }
          .rrm-3col { grid-template-columns: 1fr !important; }
          .rrm-4col { grid-template-columns: 1fr !important; }
          .rrm-compare th, .rrm-compare td { padding: 10px 8px !important; font-size: 12px !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="rrm-hero" style={{ background: hero, color: ivory, padding: "96px 0 80px" }}>
        <div style={container}>
          <div style={tag(copper)}>Round Rock, TX · Williamson County · Chisholm Trail Country</div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, fontWeight: 700, lineHeight: 1.15, marginBottom: 20, maxWidth: 900 }}>
            Buying a Home in Round Rock, TX.{" "}
            <span style={{ color: copper }}>More Character Than a Subdivision. More Affordable Than Austin.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(250,248,244,0.85)", maxWidth: 760, marginBottom: 32 }}>
            Old Town limestone bungalows. New subdivisions near Dell. A historic Main Street, Round Rock Donuts, and a 20-minute drive to downtown Austin. This city has a real identity — and a price point that makes sense. We close here regularly.
          </p>
          <div className="rrm-hero-btns" style={{ display: "flex", gap: 14, marginBottom: 32, flexWrap: "wrap" }}>
            <a href={apply} target="_blank" rel="noopener noreferrer" className="rrm-btn" style={ctaPrimary}>Get Pre-Approved</a>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="rrm-btn" style={ctaSecondary}>Book a Strategy Call</a>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {heroBadges.map((t) => (
              <span key={t} style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", color: "rgba(250,248,244,0.75)", border: "1px solid rgba(250,248,244,0.2)", padding: "6px 10px", borderRadius: 4 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* COPPER STATS BAR */}
      <section style={{ background: copper, padding: "32px 0" }}>
        <div style={container}>
          <div className="rrm-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center", color: white }}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 26, fontWeight: 700, marginBottom: 4 }}>{s.v}</div>
                <div style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: "1px", textTransform: "uppercase", opacity: 0.9 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section style={{ ...sectionPad, background: parchment }}>
        <div style={container}>
          <div style={tag()}>What Makes Round Rock, Round Rock</div>
          <h2 style={h2Style(textOnPale)}>This City Has 170 Years of History Behind It</h2>
          <p style={subStyle(textOnPale)}>
            Round Rock was established in 1854 where the Chisholm Trail crossed Brushy Creek — named for the round limestone rock that marked the low-water crossing for wagons, horses, and cattle drives heading to Kansas. That rock is still there. So are the limestone storefronts that went up along Main Street between 1876 and 1881 after the railroad arrived. So are the Craftsman bungalows, the Victorian cottages, and the mid-century ranches that filled in the neighborhoods east of downtown through the 20th century.
          </p>
          <p style={subStyle(textOnPale)}>
            Dell moved its headquarters here in the 1990s and changed the growth trajectory permanently. Apple, Amazon, Kalahari, and Baylor Scott & White layered in on top. But Round Rock didn't become a generic tech suburb. Downtown still has Round Rock Donuts — open since 1926. Dell Diamond still hosts the Round Rock Express, the Triple-A affiliate of the Texas Rangers. Old Town still has blocks of character homes that look nothing like a master-planned subdivision. This is why buyers who do their homework choose Round Rock over Georgetown or Leander — and why it holds value the way it does.
          </p>
          <div className="rrm-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 32 }}>
            {whyCards.map((c) => (
              <div key={c.label} style={{ background: white, padding: 24, borderRadius: radius, border: `1px solid ${border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ width: 10, height: 10, background: c.icon, borderRadius: 2, display: "inline-block" }} />
                  <span style={{ fontFamily: "'Lora', serif", fontSize: 17, fontWeight: 700, color: textPrimary }}>{c.label}</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: textSecondary, margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET + BUILD OPTIONS */}
      <section style={{ ...sectionPad, background: navy, color: ivory }}>
        <div style={container}>
          <div style={tag(copper)}>2026 Market & New Construction</div>
          <h2 style={h2Style(ivory)}>The Round Rock Market Right Now — and Your Build Options</h2>
          <p style={{ ...subStyle("rgba(250,248,244,0.8)"), marginBottom: 32 }}>Buyers have leverage. And when the existing inventory doesn't have what you want — there's a loan for that.</p>

          <div className="rrm-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
            {marketStats.map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: 24, borderRadius: radius }}>
                <div style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(250,248,244,0.65)", marginBottom: 8 }}>{s.label}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 30, fontWeight: 700, color: s.valueColor, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "rgba(250,248,244,0.7)" }}>{s.note}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(250,248,244,0.85)", maxWidth: 900, marginBottom: 32 }}>
            New construction within Round Rock proper is limited — most lots have been built out over 30 years of development. The active builder market is in Hutto, Georgetown, and Leander. If you want to stay in Round Rock, your two best options when existing inventory falls short are a renovation loan on an older home or a one-time close construction loan on a lot.
          </p>

          <div className="rrm-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginBottom: 40 }}>
            <div style={{ background: "rgba(181,98,30,0.15)", border: `1px solid ${copper}`, padding: 28, borderRadius: radius }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, color: copper, marginBottom: 12 }}>Option A — Renovation Loan</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "rgba(250,248,244,0.9)", marginBottom: 16 }}>
                Old Town bungalows and historic district homes near downtown are some of the most charming real estate in Central Texas — and many need updating. An FHA 203k or conventional HomeStyle renovation loan bundles your purchase price and renovation budget into a single mortgage. One closing. No cash reserves needed to fund the work. Ideal for Craftsman cottages that need kitchens, bathrooms, and electrical brought up to date.
              </p>
              <Link to="/construction-renovation-loans-texas" style={{ color: copper, fontFamily: "'Outfit', sans-serif", fontWeight: 600, textDecoration: "none", fontSize: 14 }}>Renovation Loan Details →</Link>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", padding: 28, borderRadius: radius }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, color: ivory, marginBottom: 12 }}>Option B — One-Time Close Construction</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "rgba(250,248,244,0.9)", marginBottom: 16 }}>
                If you own a lot or find the right location, a one-time close construction loan lets you build exactly what you want — your floor plan, your finishes. One loan, one closing, one set of closing costs. Rate is locked at construction start. Available as VA, FHA, USDA, and conventional. You're not re-qualifying when the market moves.
              </p>
              <Link to="/construction-renovation-loans-texas" style={{ color: copper, fontFamily: "'Outfit', sans-serif", fontWeight: 600, textDecoration: "none", fontSize: 14 }}>Construction Loan Details →</Link>
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", letterSpacing: "1.2px", textTransform: "uppercase", color: copper, marginBottom: 12 }}>National builders active in Hutto, Georgetown & Leander — captive lenders, incentive pressure highest here</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {nationalBuilders.map((b) => (
                <span key={b} style={{ fontSize: 13, fontFamily: "'Outfit', sans-serif", color: ivory, background: "rgba(255,255,255,0.08)", padding: "8px 14px", borderRadius: 4 }}>{b}</span>
              ))}
            </div>
            <div style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", letterSpacing: "1.2px", textTransform: "uppercase", color: copper, marginBottom: 12 }}>Local and regional builders — often more flexible on outside financing</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {localBuilders.map((b) => (
                <span key={b} style={{ fontSize: 13, fontFamily: "'Outfit', sans-serif", color: ivory, background: "rgba(255,255,255,0.08)", padding: "8px 14px", borderRadius: 4 }}>{b}</span>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(181,98,30,0.12)", borderLeft: `3px solid ${copper}`, padding: "20px 24px", borderRadius: 4 }}>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: ivory, margin: 0 }}>
              <strong style={{ color: copper }}>Walk into a model home before you call us and you may lose the ability to add your own agent.</strong>{" "}
              Most national builders require agent registration before or on your first visit — not after. And their in-house lender incentives are frequently portable to outside financing if you know to ask before you sign anything. Call us first.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ ...sectionPad, background: white }}>
        <div style={container}>
          <div style={tag()}>By the Numbers</div>
          <h2 style={h2Style()}>Round Rock vs. Austin vs. Georgetown</h2>
          <p style={subStyle()}>Same Williamson County tax base. Same commute to North Austin employers. Very different price points.</p>
          <div style={{ overflowX: "auto", border: `1px solid ${border}`, borderRadius: radius }}>
            <table className="rrm-compare" style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: navy, color: ivory }}>
                  <th style={{ padding: "14px 18px", textAlign: "left", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}></th>
                  <th style={{ padding: "14px 18px", textAlign: "left", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Round Rock</th>
                  <th style={{ padding: "14px 18px", textAlign: "left", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Austin</th>
                  <th style={{ padding: "14px 18px", textAlign: "left", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Georgetown</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={r.label} style={{ background: i % 2 === 0 ? white : parchment, borderTop: `1px solid ${border}` }}>
                    <td style={{ padding: "14px 18px", fontWeight: 600, color: textPrimary }}>{r.label}</td>
                    <td style={{ padding: "14px 18px", color: copper, fontWeight: 600 }}>{r.rr}</td>
                    <td style={{ padding: "14px 18px", color: textSecondary }}>{r.austin}</td>
                    <td style={{ padding: "14px 18px", color: textSecondary }}>{r.gtown}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: textSecondary, marginTop: 12, fontStyle: "italic" }}>Approximate figures based on 2026 market data. Commute times reflect normal traffic conditions on I-35 and 183.</p>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section style={{ ...sectionPad, background: cream }}>
        <div style={container}>
          <div style={tag()}>Know the Area</div>
          <h2 style={h2Style(textOnPale)}>Neighborhoods in the Round Rock Corridor</h2>
          <p style={subStyle(textOnPale)}>
            "Round Rock" to buyers usually means the broader Williamson County corridor — cities that share employers, commutes, and lifestyle. The price and character difference between Old Town and a Hutto subdivision is significant. Here's the honest breakdown.
          </p>
          <div className="rrm-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {neighborhoods.map((n) => (
              <div key={n.name} style={{ background: white, padding: 26, borderRadius: radius, border: `1px solid ${border}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6, gap: 12 }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontSize: 20, fontWeight: 700, color: textPrimary, margin: 0 }}>{n.name}</h3>
                  <span style={{ fontSize: 13, color: copper, fontWeight: 600, fontFamily: "'Fira Mono', monospace" }}>{n.price}</span>
                </div>
                <div style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: "1px", textTransform: "uppercase", color: textSecondary, marginBottom: 12 }}>{n.tag}</div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: textSecondary, margin: 0 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{ ...sectionPad, background: white }}>
        <div style={container}>
          <div style={tag()}>Find Your Fit</div>
          <h2 style={h2Style()}>Loan Programs for Round Rock Buyers</h2>
          <p style={subStyle()}>First-time buyer, tech relocation, healthcare professional, move-up, renovation project, or custom build — the right program depends on your file and your goals.</p>
          <div className="rrm-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {programs.map((p) => (
              <div key={p.title} style={{ background: parchment, padding: 26, borderRadius: radius, border: `1px solid ${border}` }}>
                <span style={{ display: "inline-block", background: p.badgeColor, color: white, padding: "6px 12px", borderRadius: 4, fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: 14 }}>{p.title}</span>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>
                  {p.items.map((item, idx) => (
                    <li key={idx} style={{ fontSize: 14, lineHeight: 1.6, color: textOnPale, marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: copper, fontWeight: 700 }}>›</span>{item}
                    </li>
                  ))}
                </ul>
                {p.note && <p style={{ fontSize: 13, fontStyle: "italic", color: textSecondary, lineHeight: 1.6, marginBottom: 12, marginTop: 0 }}>{p.note}</p>}
                {p.link && <Link to={p.link.to} style={{ color: copper, fontFamily: "'Outfit', sans-serif", fontWeight: 600, textDecoration: "none", fontSize: 14 }}>{p.link.text}</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section style={{ ...sectionPad, background: hero, color: ivory }}>
        <div style={container}>
          <div style={{ maxWidth: 820 }}>
            <div style={tag(copper)}>Run Your Numbers</div>
            <h2 style={h2Style(ivory)}>What Does a Round Rock Mortgage Actually Cost?</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(250,248,244,0.85)", marginBottom: 28 }}>
              The Texas Payment Calculator models your full PITI at any Round Rock price point — including Williamson County property taxes and homeowners insurance. The VA Loan Calculator shows your zero-down monthly payment with the VA funding fee built in. No email required, no sales pitch.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link to="/calculators" className="rrm-btn" style={ctaPrimary}>Texas Payment Calculator →</Link>
              <Link to="/calculators" className="rrm-btn" style={ctaSecondary}>VA Loan Calculator →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEXAS-SPECIFIC */}
      <section style={{ ...sectionPad, background: parchment }}>
        <div style={container}>
          <div style={tag()}>Texas-Specific</div>
          <h2 style={h2Style(textOnPale)}>Williamson County Details That Affect Your Payment</h2>
          <p style={subStyle(textOnPale)}>These apply to every buyer in Round Rock and the surrounding corridor. Know them before you close.</p>
          <div className="rrm-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {texasItems.map((t, i) => (
              <div key={i} style={{ background: white, padding: 24, borderRadius: radius, border: `1px solid ${border}` }}>
                <span style={{ display: "inline-block", background: copperLight, color: textOnPale, padding: "5px 10px", borderRadius: 4, fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: 10 }}>{t.badge}</span>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: textOnPale, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...sectionPad, background: white }}>
        <div style={container}>
          <div style={tag()}>Frequently Asked</div>
          <h2 style={h2Style()}>What Round Rock Buyers Ask Us Most</h2>
          <div style={{ marginTop: 24, borderTop: `1px solid ${border}` }}>
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
      <section style={{ ...sectionPad, background: navy, color: ivory, textAlign: "center" }}>
        <div style={container}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: copper, color: white, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontSize: 24, fontWeight: 700, marginBottom: 16 }}>SS</div>
          <h2 style={{ ...h2Style(ivory), textAlign: "center" }}>Shalanda Smith</h2>
          <p style={{ fontSize: 13, fontFamily: "'Fira Mono', monospace", color: copper, letterSpacing: "1px", marginBottom: 20 }}>NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · Licensed in Texas</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(250,248,244,0.85)", maxWidth: 720, margin: "0 auto 28px" }}>
            Found an Old Town bungalow that needs love? Want to build on a lot? Relocating for Dell or BSW? Tell me your situation and your timeline. We'll match the right program to your file before you fall in love with a house — or a floor plan.
          </p>
          <div className="rrm-hero-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
            <a href={apply} target="_blank" rel="noopener noreferrer" className="rrm-btn" style={ctaPrimary}>Get Pre-Approved</a>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="rrm-btn" style={ctaSecondary}>Book a Strategy Call</a>
          </div>
          <p style={{ fontSize: 13, color: "rgba(250,248,244,0.65)", fontFamily: "'Fira Mono', monospace" }}>Or call/text: 254-935-9331</p>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section style={{ background: soft, padding: "32px 0", borderTop: `1px solid ${border}` }}>
        <div style={container}>
          <p style={{ fontSize: 11.5, lineHeight: 1.7, color: textSecondary, marginBottom: 16 }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. Market data approximate and subject to change. Renovation and construction loan programs subject to lender guidelines, property eligibility, and contractor approval requirements. Down payment assistance program availability and credit score minimums subject to program rules in effect at time of application.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 12, fontFamily: "'Fira Mono', monospace" }}>
            <Link to="/va-loan-texas" style={{ color: copper, textDecoration: "none" }}>VA Loans Texas</Link>
            <Link to="/down-payment-assistance-texas" style={{ color: copper, textDecoration: "none" }}>Down Payment Assistance</Link>
            <Link to="/construction-renovation-loans-texas" style={{ color: copper, textDecoration: "none" }}>Renovation & Construction</Link>
            <Link to="/physician-loan-texas" style={{ color: copper, textDecoration: "none" }}>Physician Loans</Link>
            <a href={calendly} target="_blank" rel="noopener noreferrer" style={{ color: copper, textDecoration: "none" }}>Schedule a Call</a>
            <a href={apply} target="_blank" rel="noopener noreferrer" style={{ color: copper, textDecoration: "none" }}>Apply Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoundRockMortgage;
