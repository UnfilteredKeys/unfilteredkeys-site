import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

/* ── SEO ─────────────────────────────────────────────────────────────────── */
function useSanAntonioSEO() {
  useEffect(() => {
    document.title =
      "VA Loan Mortgage Broker San Antonio TX – JBSA Military Home Loans | Keys by Shalanda";
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
      "San Antonio TX mortgage broker specializing in VA loans for JBSA military families — Lackland, Fort Sam Houston, Randolph. PCS relocation, VA, FHA, conventional, and physician loan programs. Military City USA."
    );
    setMeta("og:title", "VA Loan Broker San Antonio TX – JBSA Military | Keys by Shalanda", true);
    setMeta(
      "og:description",
      "Buying near JBSA Lackland, Fort Sam Houston, or Randolph? VA loans, zero down, no PMI — and a Bexar County loan limit of $832,750. We close military buyers across San Antonio.",
      true
    );
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://shalandasmith.com/san-antonio-tx-mortgage");
  }, []);
}

/* ── TOKENS ──────────────────────────────────────────────────────────────── */
const hero      = "#1a2535";
const navy      = "#1a3a5c";
const copper    = "#b5621e";
const copperLight = "#fef0e6";
const ivory     = "#faf8f4";
const parchment = "#fdf9f3";
const cream     = "#f6f1e7";
const white     = "#ffffff";
const soft      = "#f2efe9";
const textPrimary   = "#1c2630";
const textSecondary = "#4a5568";
const textOnPale    = "#3a2a14";
const radius = 8;
const border = "rgba(26,58,92,0.1)";
const sectionPad = { padding: "72px 0" } as const;
const container  = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" } as const;
const tag = (c = copper) => ({
  fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase" as const,
  color: c, fontFamily: "'Fira Mono', monospace", marginBottom: 12, fontWeight: 600,
});
const h2Style = (c = textPrimary) => ({
  fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700 as const,
  color: c, lineHeight: 1.25, marginBottom: 14,
});
const subStyle = (c = textSecondary) => ({
  fontSize: 16, color: c, lineHeight: 1.7, maxWidth: 760, marginBottom: 32,
});
const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply    = "https://scl.my1003app.com/554554/register";

/* ── DATA ────────────────────────────────────────────────────────────────── */
const stats = [
  { v: "~$300K",         l: "Median Home Price · 2026" },
  { v: "80,000+",        l: "Active Duty Personnel at JBSA" },
  { v: "$832,750",       l: "Bexar County VA Loan Limit" },
  { v: "300 Years",      l: "Of Continuous History" },
];

const marketStats = [
  { label: "Median Home Price",  value: "~$300K",   note: "Most affordable major TX metro · 2026", valueColor: white },
  { label: "Avg Days on Market", value: "~95 days", note: "Buyers have real leverage",             valueColor: white },
  { label: "VA Loan Limit",      value: "$832,750", note: "Zero down below this — no cap above",   valueColor: copper },
];

const installations = [
  {
    name: "JBSA-Lackland",
    sub: "Southwest San Antonio",
    desc: "Home of Air Force Basic Military Training — the Air Force's only enlisted BMT site. 37th Training Wing, largest training wing in the entire Air Force. Over 120 DoD organizations on base. Popular neighborhoods: Alamo Ranch, Helotes, Leon Valley, and the 151 corridor west.",
    corridors: ["Alamo Ranch", "Helotes", "Leon Valley", "Westover Hills"],
  },
  {
    name: "JBSA-Fort Sam Houston",
    sub: "Northeast of Downtown",
    desc: "Army medical center of excellence. Brooke Army Medical Center (BAMC) — a Level I Trauma Center serving all JBSA families. Headquarters for the U.S. Army South and Army North. Popular with Fort Sam families: Converse, Schertz, Live Oak, Stone Oak, Terrell Hills, and Alamo Heights.",
    corridors: ["Converse", "Schertz", "Live Oak", "Stone Oak", "Terrell Hills"],
  },
  {
    name: "JBSA-Randolph",
    sub: "Universal City · Northeast San Antonio",
    desc: "The 'Showplace of the Air Force.' Headquarters of Air Education and Training Command and Air Force Personnel Center. All four JBSA installations share MHA code TX285 — your BAH is identical regardless of which base is on your orders. Top communities: Universal City, Schertz, Cibolo, New Braunfels.",
    corridors: ["Universal City", "Schertz", "Cibolo", "New Braunfels"],
  },
];

const bahRows = [
  { grade: "E-5 w/ dependents",  rate: "$1,827" },
  { grade: "E-6 w/ dependents",  rate: "$2,094" },
  { grade: "E-7 w/ dependents",  rate: "$2,178" },
  { grade: "O-3 w/ dependents",  rate: "$2,358" },
  { grade: "O-4 w/ dependents",  rate: "$2,412" },
  { grade: "O-5 w/ dependents",  rate: "$2,430" },
];

const neighborhoods = [
  { name: "Alamo Ranch", price: "$300K–$420K", tag: "Lackland corridor · Northwest growth · NISD", desc: "One of San Antonio's fastest-growing suburban corridors on the northwest side. Newer construction, Northside ISD, and easy access to Lackland via Loop 1604 and US-90. H-E-B, restaurants, and retail have followed the growth. Popular with Lackland families who want new construction without Helotes pricing." },
  { name: "Helotes", price: "$380K–$550K", tag: "Hill Country edge · Tight inventory · NISD", desc: "Helotes sits at the edge of the Hill Country with a small-town feel inside a major metro. Northside ISD. Consistent appreciation driven by limited inventory and high desirability. Popular with mid-career and retiring military looking for space, character, and proximity to Lackland." },
  { name: "Schertz", price: "$280K–$390K", tag: "Best resale · SCUCISD · Randolph & Fort Sam", desc: "Schertz consistently ranks as one of the best value markets near JBSA. Schertz-Cibolo-Universal City ISD is one of the stronger suburban districts in the San Antonio metro. Strong resale demand from both Randolph and Fort Sam families. 15 to 25 minutes to either installation." },
  { name: "Cibolo", price: "$290K–$400K", tag: "Fastest growing near Randolph · New construction · SCUCISD", desc: "Cibolo has been absorbing significant new construction volume east of San Antonio — D.R. Horton, Lennar, and Pulte active throughout. SCUCISD schools. 20 to 30 minutes to Randolph. Popular with families who prioritize new construction, larger square footage, and school quality over commute distance." },
  { name: "Stone Oak", price: "$390K–$600K", tag: "North San Antonio · Medical corridor · NEISD", desc: "Stone Oak anchors the north San Antonio medical and professional corridor — South Texas Medical Center is 15 minutes south. Northeast ISD. Popular with physicians, senior NCOs, and officers at Fort Sam and Randolph. The price premium reflects school quality and access to Loop 1604 amenities." },
  { name: "New Braunfels", price: "$290K–$420K", tag: "Tubing capital · Comal ISD · Growing fast", desc: "New Braunfels has grown into a genuine city on I-35 between San Antonio and Austin. Comal ISD — consistently one of the top-rated districts in Texas. The Guadalupe and Comal Rivers make this a lifestyle market as much as a commuter market. 30 to 40 minutes to most JBSA installations." },
  { name: "Downtown & King William", price: "$350K–$700K+", tag: "River Walk · Historic district · Urban lifestyle", desc: "King William Historic District is one of the best-preserved Victorian neighborhoods in Texas. The Pearl District, the River Walk, La Villita, and five UNESCO World Heritage missions are all within reach. Commute to installations varies — Lackland is 15 to 20 minutes, Fort Sam is 10 minutes." },
];

const programs = [
  {
    title: "VA Loans",
    badgeColor: copper,
    items: [
      "Zero down payment — no exceptions, no minimums",
      "No PMI — ever, regardless of down payment or equity",
      "Bexar County VA loan limit $832,750 with full entitlement — covers most San Antonio price points",
      "Buyers with 100% VA disability rating pay zero funding fee — saving $4,000 to $6,000+ at closing",
    ],
    note: "JBSA is the single largest driver of VA loan activity in Central Texas. We have closed VA purchases across every JBSA corridor and know how to position VA offers to compete with conventional buyers in this market.",
    link: { to: "/va-loan-texas", text: "VA Loan Details →" },
  },
  {
    title: "Conventional",
    badgeColor: navy,
    items: [
      "3% to 20% down payment",
      "PMI removable at 20% equity — no lifetime premium like FHA",
      "620 minimum credit score, best pricing at 740+",
      "HomeReady and Home Possible: 3% down at or below 80% AMI",
    ],
    note: "Strong fit for veterans who have used their VA entitlement on a prior home, civilian DoD employees, and buyers purchasing investment properties or second homes near JBSA.",
    link: { to: "/conventional-loan-texas", text: "Conventional Loan Details →" },
  },
  {
    title: "FHA + Down Payment Assistance",
    badgeColor: "#2a7a7a",
    items: [
      "3.5% down with 580+ credit score",
      "TDHCA My First Texas Home (620 min) and TSAHC Homes for Texas Heroes (620 min — first responders, teachers, nurses)",
      "SETH 5 Star (640 min) and SETH GoldStar (620 min) — both available in Bexar County",
      "Chenoa Fund (600 min) for buyers with thinner credit profiles",
    ],
    note: "San Antonio's median price point makes DPA programs particularly effective here — a full down payment on a $300,000 home is real money, and these programs can cover it.",
    link: { to: "/down-payment-assistance-texas", text: "All DPA Programs →" },
  },
  {
    title: "Physician Loans",
    badgeColor: copper,
    items: [
      "No down payment required up to $1.5M",
      "No PMI regardless of down payment amount",
      "Student loan debt excluded or IBR payment used for DTI",
      "Available to MDs, DOs, DMDs, DVMs and in some programs NPs and PAs",
    ],
    note: "BAMC and the South Texas Medical Center — one of the largest medical complexes in the country — drive steady physician relocation into San Antonio. 1-day-out-of-residency programs available.",
    link: { to: "/physician-loan-texas", text: "Physician Loan Details →" },
  },
  {
    title: "Texas Veterans Land Board (VLB)",
    badgeColor: "#534AB7",
    items: [
      "Low-interest home loans exclusively for Texas veterans",
      "Available for purchases, home improvement, and land",
      "Can be combined with VA loan benefits in some scenarios",
      "Must be a Texas resident who has served at least 90 days active duty",
    ],
    note: "The VLB is a Texas-specific benefit that complements your federal VA loan eligibility. Many veterans in San Antonio qualify and never use it. We review VLB alongside VA options on every veteran file.",
    link: null,
  },
];

const texasItems = [
  { badge: "VA disability property tax exemption", body: "Texas provides a complete property tax exemption for veterans with a 100% service-connected disability rating on their primary residence. On a $300,000 San Antonio home at Bexar County's effective rate of approximately 2.1%, this saves roughly $6,300 per year. File with Bexar County Appraisal District after closing with your VA award letter. Partial exemptions apply at lower disability ratings." },
  { badge: "Bexar County property tax rates", body: "Bexar County effective property tax rates run approximately 2.0% to 2.4% depending on your specific address and the taxing entities at that location. On a $300,000 home this is $500 to $600 per month in property taxes alone — a number many buyers underestimate when budgeting from the monthly mortgage payment. We always quote full PITI." },
  { badge: "Homestead exemption", body: "Texas reduces your taxable home value by $100,000 for your primary residence. File with Bexar County Appraisal District in the year you close — it does not apply automatically. On a $300,000 home this saves approximately $2,000 to $2,400 per year depending on your effective tax rate." },
  { badge: "BAH and your purchase price", body: "All four JBSA installations share Military Housing Area code TX285. Your BAH rate is identical regardless of which installation is on your orders. 2026 rates decreased approximately 2.9% from 2025 — new arrivals receive 2026 rates; if you were already receiving 2025 rates, DoD rate protection typically preserves your higher rate. An E-6 with dependents at $2,094/month can comfortably support a VA loan in the $260,000 to $310,000 range at current rates." },
  { badge: "PCS timing strategy", body: "Peak PCS season at JBSA runs May through August — approximately 4,500 shipments annually. If your orders are in hand before April, you have real leverage: sellers know you're serious and on a timeline, and inventory is at its highest before summer competition heats up. Contact us the day your orders drop." },
  { badge: "Option period", body: "Texas contracts include a 5 to 10 day option period during which you can exit for any reason and keep your earnest money. Use it for inspection — always. VA appraisals include a Minimum Property Requirements review, but MPR is not a home inspection. Get a separate third-party inspection regardless." },
  { badge: "Community property", body: "Texas is a community property state. If you are married your spouse may need to sign certain loan documents even if they are not on the loan. Standard procedure in Texas — not a red flag, just plan for it at closing." },
];

const faqs = [
  { q: "Why is San Antonio called Military City USA?", a: "Joint Base San Antonio is one of the largest military installations in the Department of Defense — three primary locations (Lackland, Fort Sam Houston, and Randolph) plus eight other operating locations and 266 mission partners. More than 80,000 active duty personnel and their families are stationed here at any given time, plus a massive veteran and retired military population that chose to stay after separation. San Antonio has had continuous military presence since Spanish colonial times." },
  { q: "How does BAH work at JBSA — do all three installations get the same rate?", a: "Yes. All four JBSA installations — Lackland, Fort Sam Houston, Randolph, and Camp Bullis — share Military Housing Area code TX285. Your BAH rate is determined by your pay grade and dependency status, not by which installation is on your orders. 2026 rates decreased approximately 2.9% from 2025. Always verify your exact rate at travel.dod.mil." },
  { q: "Can I actually buy a home with my BAH in San Antonio?", a: "Yes — and San Antonio is one of the best BAH-to-purchasing-power markets in the country. An E-6 with dependents at $2,094/month BAH can comfortably qualify for a VA loan in the $260,000 to $310,000 range at current rates with zero down payment. That puts you into Schertz, Cibolo, Universal City, and the northwest corridors near Lackland. On BAH alone." },
  { q: "Is San Antonio affordable compared to other major Texas cities?", a: "It's the most affordable major metro in Texas. Median home price around $300,000 in 2026 — compared to roughly $390,000 in Round Rock, $405,000 in Georgetown, and $575,000 in Austin proper. The market has held up better than Austin during the post-2022 correction because it's anchored by military, healthcare, and government employment rather than speculative tech growth." },
  { q: "Which neighborhoods are best for each JBSA installation?", a: "Lackland families tend to land in Alamo Ranch, Helotes, and the 151/1604 southwest corridor. Fort Sam families favor Schertz, Live Oak, Converse, and Stone Oak. Randolph families concentrate in Universal City (shortest commute), Schertz (best schools and resale), and Cibolo (newer construction). All three installations are Bexar County or adjacent." },
  { q: "How does the VA loan work for buyers with a disability rating?", a: "A VA disability rating affects your purchase in two ways. First, a 10% or higher rating exempts you from the VA funding fee — typically 1.25% to 3.3% of the loan amount. On a $300,000 purchase that's $3,750 to $9,900 in savings at closing. Second, a 100% service-connected disability rating in Texas qualifies you for a complete property tax exemption — approximately $6,300/year savings. Both benefits stack." },
  { q: "What is the Texas Veterans Land Board and how does it work?", a: "The VLB offers low-interest home loans exclusively for Texas veterans — separate from your federal VA benefit. VLB home loan rates are set by the state and are often competitive with or below market rates. You must be a Texas resident who served at least 90 days active duty. The VLB can be used for purchase, home improvement, or land loans. Many San Antonio veterans qualify and never know about it." },
  { q: "Should I buy or rent while stationed at JBSA?", a: "If you're at JBSA for three or more years and your BAH supports a payment, buying beats renting — especially with VA financing at zero down and no PMI. You build equity, you can rent the home when you PCS, and San Antonio's military population means there's always a qualified renter market. The calculation changes at short tours — 18 months or less, renting usually makes more sense unless you're planning to hold as a rental." },
];

/* ── COMPONENT ───────────────────────────────────────────────────────────── */
const SanAntonioMortgage = () => {
  useSanAntonioSEO();

  return (
    <>
      <SEO {...(seoMeta as any).sanAntonioMortgage} />
      <style>{`
        .sa-btn:hover { opacity: 0.92; }
        .sa-faq summary {
          cursor: pointer; list-style: none; padding: 18px 0;
          font-family: 'Lora', serif; font-size: 18px; font-weight: 600;
          color: ${navy}; display: flex; justify-content: space-between;
          align-items: center; gap: 16px;
        }
        .sa-faq summary::after { content: "+"; color: ${copper}; font-size: 24px; font-weight: 300; }
        .sa-faq[open] summary::after { content: "−"; }
        .sa-faq p { padding: 0 0 18px; color: ${textSecondary}; line-height: 1.7; margin: 0; font-size: 15px; }
        .sa-faq { border-bottom: 1px solid ${border}; }
        @media (max-width: 900px) {
          .sa-hero h1 { font-size: 30px !important; }
          .sa-hero-btns { flex-direction: column; }
          .sa-2col { grid-template-columns: 1fr !important; }
          .sa-3col { grid-template-columns: 1fr !important; }
          .sa-bah th, .sa-bah td { padding: 10px 8px !important; font-size: 12px !important; }
        }
      `}</style>

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="sa-hero" style={{ background: hero, padding: "96px 0 80px" }}>
        <div style={container}>
          <div style={tag(copper)}>San Antonio, TX · JBSA · Military City USA · Bexar County</div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, fontWeight: 700, color: ivory, lineHeight: 1.15, marginBottom: 20, maxWidth: 920 }}>
            VA Loans & Home Buying Near JBSA.{" "}
            <span style={{ color: copper }}>300 Years of History. The Most Affordable Major City in Texas.</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(250,248,244,0.85)", lineHeight: 1.7, maxWidth: 820, marginBottom: 32 }}>
            Joint Base San Antonio is one of the largest military installations in the DoD — 80,000+ active duty personnel across Lackland, Fort Sam Houston, and Randolph. Your BAH goes further here than almost anywhere in Texas. The missions are UNESCO World Heritage sites. The River Walk doesn't look like any other American city.
          </p>
          <div className="sa-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
            <a className="sa-btn" href={apply} target="_blank" rel="noopener noreferrer" style={{ background: copper, color: white, padding: "14px 28px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Get Pre-Approved</a>
            <a className="sa-btn" href={calendly} target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: ivory, padding: "14px 28px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15, border: `1px solid rgba(250,248,244,0.3)` }}>Book a Strategy Call</a>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["JBSA Military Specialist", "VA · FHA · Conventional · DPA", "PCS Relocation", "Physician Loans", "21-Day Avg Close", "50+ Lender Network"].map((t) => (
              <span key={t} style={{ fontSize: 11, color: "rgba(250,248,244,0.7)", padding: "6px 12px", border: "1px solid rgba(250,248,244,0.15)", borderRadius: 4, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.5px" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. COPPER STATS BAR ──────────────────────────────────────────── */}
      <section style={{ background: copper, padding: "32px 0" }}>
        <div style={container}>
          <div className="sa-3col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {stats.map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 28, fontWeight: 700, color: white }}>{s.v}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", textTransform: "uppercase", letterSpacing: "1px", marginTop: 4, fontFamily: "'Fira Mono', monospace" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE SAN ANTONIO STORY ─────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: parchment }}>
        <div style={container}>
          <div style={tag()}>The San Antonio Story</div>
          <h2 style={h2Style()}>A City That Has Never Been Generic</h2>
          <p style={subStyle()}>
            San Antonio was founded May 1, 1718 — over 300 years of continuous history make it one of the oldest cities in America. Mark Twain put it on his short list of four truly unique American cities alongside Boston, New Orleans, and San Francisco. UNESCO designated the five Spanish colonial missions, including the Alamo, as World Heritage Sites in 2015 — Texas's only such designation.
          </p>
          <p style={subStyle()}>
            And then there's the military. San Antonio has had continuous military presence since the Spanish built a presidio here. JBSA is one of the largest military installations in the Department of Defense, with over 80,000 active duty personnel and their families. The city's culture, economy, and identity are built around service. This is a city that actually understands what military families need from a home purchase.
          </p>
          <div className="sa-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32 }}>
            {[
              { icon: copper, label: "Military City USA", body: "80,000+ active duty personnel across JBSA. More than 80 military installations and tenant commands. The largest joint base in the DoD. After separation, thousands of veterans choose to stay — San Antonio's veteran population shapes the city's culture and housing market." },
              { icon: "#185FA5", label: "UNESCO World Heritage missions", body: "Five 18th-century Spanish colonial missions — including the Alamo — designated as UNESCO World Heritage Sites in 2015. Texas's only World Heritage Site. The Mission Reach trail connects all four park missions along the San Antonio River for 12.4 km." },
              { icon: "#3B6D11", label: "The River Walk & the Pearl", body: "15 miles of riverfront dining, music, and culture through downtown. The Pearl District — a redeveloped brewery site — is one of the best urban food and market destinations in Texas. La Villita historic arts village. Fiesta San Antonio every April." },
              { icon: "#7a3d9e", label: "Cybersecurity & tech economy", body: "San Antonio ranks #2 in the country for cybersecurity professionals — behind only Washington, D.C. The concentration of NSA and DoD cyber commands at JBSA has built a private sector ecosystem. Four Fortune 500 HQs: Valero, USAA, Tesoro, iHeartMedia." },
            ].map((c) => (
              <div key={c.label} style={{ background: white, padding: 28, borderRadius: radius, border: `1px solid ${border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ width: 10, height: 10, background: c.icon, borderRadius: "50%" }} />
                  <span style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 700, color: textPrimary }}>{c.label}</span>
                </div>
                <p style={{ color: textSecondary, lineHeight: 1.7, fontSize: 15, margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MARKET STATS ──────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: navy }}>
        <div style={container}>
          <div style={tag(copper)}>2026 Market</div>
          <h2 style={h2Style(ivory)}>The Most Affordable Major Texas Market — and Why It Stays That Way</h2>
          <p style={{ ...subStyle("rgba(250,248,244,0.8)") }}>
            Anchored by military, healthcare, and government employment — not speculative tech growth. Steady appreciation. No crash cycle like Austin. Your BAH goes further here than anywhere else in the state.
          </p>

          <div className="sa-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
            {marketStats.map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.05)", padding: 24, borderRadius: radius, border: `1px solid rgba(255,255,255,0.1)` }}>
                <div style={{ fontSize: 12, color: "rgba(250,248,244,0.6)", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Fira Mono', monospace", marginBottom: 8 }}>{s.label}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700, color: s.valueColor, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "rgba(250,248,244,0.7)" }}>{s.note}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(181,98,30,0.12)", borderLeft: `3px solid ${copper}`, padding: "20px 24px", borderRadius: 4, marginBottom: 40 }}>
            <p style={{ color: ivory, lineHeight: 1.7, margin: 0, fontSize: 15 }}>
              <strong style={{ color: copper }}>San Antonio's stability is structural.</strong>{" "}
              While Austin corrected 20%+ from its 2022 peak, San Antonio's market has held steady. The military base, the medical center, and the government employment base don't leave during rate cycles. For military families buying with a VA loan, this is one of the strongest long-term value markets in Texas.
            </p>
          </div>

          {/* BAH Table */}
          <h3 style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, color: ivory, marginBottom: 8 }}>2026 JBSA BAH — MHA TX285</h3>
          <p style={{ color: "rgba(250,248,244,0.75)", marginBottom: 20, fontSize: 14, lineHeight: 1.7 }}>
            All four JBSA installations share the same BAH rate. Your payment is identical whether your orders say Lackland, Fort Sam, Randolph, or Camp Bullis. Rates decreased approximately 2.9% from 2025.
          </p>
          <div style={{ overflowX: "auto", background: "rgba(255,255,255,0.04)", borderRadius: radius, border: "1px solid rgba(255,255,255,0.1)" }}>
            <table className="sa-bah" style={{ width: "100%", borderCollapse: "collapse", color: ivory }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.06)" }}>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontSize: 12, fontFamily: "'Fira Mono', monospace", textTransform: "uppercase", letterSpacing: "1px", color: copper }}>Pay Grade</th>
                  <th style={{ padding: "14px 20px", textAlign: "right", fontSize: 12, fontFamily: "'Fira Mono', monospace", textTransform: "uppercase", letterSpacing: "1px", color: copper }}>2026 BAH w/ Dependents</th>
                </tr>
              </thead>
              <tbody>
                {bahRows.map((r, i) => (
                  <tr key={r.grade} style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)" }}>
                    <td style={{ padding: "12px 20px", fontSize: 14 }}>{r.grade}</td>
                    <td style={{ padding: "12px 20px", fontSize: 14, textAlign: "right", fontFamily: "'Fira Mono', monospace", color: copper }}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "rgba(250,248,244,0.55)", fontSize: 12, marginTop: 12, fontStyle: "italic" }}>
            Rates approximate — verify exact rate at travel.dod.mil before making housing commitments.
          </p>
        </div>
      </section>

      {/* ── 5. INSTALLATIONS ─────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: ivory }}>
        <div style={container}>
          <div style={tag()}>Know Your Base</div>
          <h2 style={h2Style()}>The Three JBSA Installations — and Where Families Live Near Each</h2>
          <p style={subStyle()}>
            Same BAH, different geography. Your installation assignment determines your commute corridor — and that shapes every neighborhood decision.
          </p>
          <div className="sa-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {installations.map((inst) => (
              <div key={inst.name} style={{ background: white, padding: 26, borderRadius: radius, border: `1px solid ${border}` }}>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: 20, fontWeight: 700, color: navy, marginBottom: 4 }}>{inst.name}</h3>
                <div style={{ fontSize: 12, color: copper, fontFamily: "'Fira Mono', monospace", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 14 }}>{inst.sub}</div>
                <p style={{ color: textSecondary, lineHeight: 1.7, fontSize: 14, marginBottom: 16 }}>{inst.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {inst.corridors.map((c) => (
                    <span key={c} style={{ fontSize: 11, padding: "4px 10px", background: copperLight, color: textOnPale, borderRadius: 4, fontWeight: 600 }}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. NEIGHBORHOODS ─────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: cream }}>
        <div style={container}>
          <div style={tag()}>Where People Land</div>
          <h2 style={h2Style()}>San Antonio Neighborhoods for Military Families & Everyone Else</h2>
          <p style={subStyle()}>
            San Antonio is a large city — the 7th largest in the United States. The neighborhood that makes sense depends on your installation, your commute tolerance, your school priorities, and how much you value Hill Country access.
          </p>
          <div className="sa-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {neighborhoods.map((n) => (
              <div key={n.name} style={{ background: white, padding: 26, borderRadius: radius, border: `1px solid ${border}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8, gap: 12, flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontSize: 20, fontWeight: 700, color: navy, margin: 0 }}>{n.name}</h3>
                  <span style={{ fontSize: 13, color: copper, fontFamily: "'Fira Mono', monospace", fontWeight: 600 }}>{n.price}</span>
                </div>
                <div style={{ fontSize: 12, color: textOnPale, fontFamily: "'Fira Mono', monospace", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 12 }}>{n.tag}</div>
                <p style={{ color: textSecondary, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LOAN PROGRAMS ─────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: parchment }}>
        <div style={container}>
          <div style={tag()}>Find Your Fit</div>
          <h2 style={h2Style()}>Loan Programs for San Antonio Buyers</h2>
          <p style={subStyle()}>
            Active duty buying with VA. Veteran with a disability rating. Civilian DoD employee. Physician at BAMC or the South Texas Medical Center. First-time buyer in Cibolo. The right program depends on your file.
          </p>
          <div className="sa-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {programs.map((p) => (
              <div key={p.title} style={{ background: white, padding: 28, borderRadius: radius, border: `1px solid ${border}` }}>
                <span style={{ display: "inline-block", padding: "4px 12px", background: p.badgeColor, color: white, fontSize: 11, fontFamily: "'Fira Mono', monospace", textTransform: "uppercase", letterSpacing: "1px", borderRadius: 3, marginBottom: 14, fontWeight: 600 }}>{p.title}</span>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
                  {p.items.map((item, idx) => (
                    <li key={idx} style={{ color: textSecondary, lineHeight: 1.7, fontSize: 14, marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: copper, fontWeight: 700 }}>›</span>{item}
                    </li>
                  ))}
                </ul>
                {p.note && <p style={{ color: textPrimary, lineHeight: 1.6, fontSize: 13, fontStyle: "italic", padding: "12px 14px", background: copperLight, borderRadius: 4, marginBottom: p.link ? 14 : 0 }}>{p.note}</p>}
                {p.link && <Link to={p.link.to} style={{ color: copper, fontSize: 13, fontWeight: 600, textDecoration: "none", fontFamily: "'Fira Mono', monospace" }}>{p.link.text}</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CALCULATOR CALLOUT ────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: hero }}>
        <div style={container}>
          <div style={{ maxWidth: 820 }}>
            <div style={tag(copper)}>Run Your Numbers</div>
            <h2 style={h2Style(ivory)}>See Your Real Payment — PITI, Not Just Principal & Interest</h2>
            <p style={{ ...subStyle("rgba(250,248,244,0.85)") }}>
              Use the BAH & Buying Power calculator to see how far your specific pay grade and dependency status goes in San Antonio. The VA Loan Calculator models your zero-down monthly payment with the funding fee built in. The Texas Payment Calculator adds Bexar County property taxes and homeowners insurance for a real PITI number.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/calculators" className="sa-btn" style={{ background: copper, color: white, padding: "12px 22px", borderRadius: radius, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>BAH & Buying Power →</Link>
              <Link to="/calculators" className="sa-btn" style={{ background: "transparent", color: ivory, padding: "12px 22px", borderRadius: radius, textDecoration: "none", fontWeight: 600, fontSize: 14, border: `1px solid rgba(250,248,244,0.3)` }}>VA Loan Calculator →</Link>
              <Link to="/calculators" className="sa-btn" style={{ background: "transparent", color: ivory, padding: "12px 22px", borderRadius: radius, textDecoration: "none", fontWeight: 600, fontSize: 14, border: `1px solid rgba(250,248,244,0.3)` }}>Texas Payment Calculator →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. TEXAS-SPECIFIC ────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: soft }}>
        <div style={container}>
          <div style={tag()}>Texas & Military Specific</div>
          <h2 style={h2Style()}>What Every JBSA Buyer Needs to Know Before Closing</h2>
          <p style={subStyle()}>Texas has benefits that other states don't. JBSA has rhythms that affect timing. Know both before you go under contract.</p>
          <div className="sa-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {texasItems.map((t, i) => (
              <div key={i} style={{ background: white, padding: 24, borderRadius: radius, border: `1px solid ${border}` }}>
                <div style={{ fontSize: 11, color: copper, fontFamily: "'Fira Mono', monospace", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8, fontWeight: 600 }}>{t.badge}</div>
                <p style={{ color: textSecondary, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: ivory }}>
        <div style={container}>
          <div style={tag()}>Frequently Asked</div>
          <h2 style={h2Style()}>What JBSA Buyers Ask Us Most</h2>
          <div style={{ marginTop: 24, maxWidth: 880 }}>
            {faqs.map((f, i) => (
              <details key={i} className="sa-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FINAL CTA ────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: navy, textAlign: "center" }}>
        <div style={container}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: copper, color: white, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, marginBottom: 18 }}>SS</div>
          <h2 style={{ ...h2Style(ivory), textAlign: "center" }}>Shalanda Smith</h2>
          <p style={{ color: copper, fontFamily: "'Fira Mono', monospace", fontSize: 12, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 24 }}>
            NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · Licensed in Texas
          </p>
          <p style={{ color: "rgba(250,248,244,0.85)", lineHeight: 1.7, fontSize: 16, maxWidth: 720, margin: "0 auto 28px" }}>
            PCS orders just dropped? Retiring at JBSA and staying in San Antonio? First-time buyer at Lackland? Tell me your situation — your pay grade, your timeline, your installation. We'll run your real numbers, match the right program, and get you pre-approved before PCS season hits.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 18 }}>
            <a className="sa-btn" href={apply} target="_blank" rel="noopener noreferrer" style={{ background: copper, color: white, padding: "14px 28px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Get Pre-Approved</a>
            <a className="sa-btn" href={calendly} target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: ivory, padding: "14px 28px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15, border: `1px solid rgba(250,248,244,0.3)` }}>Book a Strategy Call</a>
          </div>
          <p style={{ color: "rgba(250,248,244,0.6)", fontSize: 14, fontFamily: "'Fira Mono', monospace" }}>
            Or call/text: 254-935-9331
          </p>
        </div>
      </section>

      {/* ── 12. COMPLIANCE ───────────────────────────────────────────────── */}
      <section style={{ background: hero, padding: "32px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={container}>
          <p style={{ color: "rgba(250,248,244,0.55)", fontSize: 12, lineHeight: 1.7, marginBottom: 18 }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. BAH rates are approximate — verify at travel.dod.mil. VA loan limits and funding fees subject to change. Texas Veterans Land Board program availability subject to eligibility and program rules. Down payment assistance program credit score minimums subject to program rules in effect at time of application. Market data approximate and subject to change.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link to="/va-loan-texas" style={{ color: copper, fontSize: 12, textDecoration: "none", fontFamily: "'Fira Mono', monospace" }}>VA Loans Texas</Link>
            <Link to="/pcs-to-portfolio" style={{ color: copper, fontSize: 12, textDecoration: "none", fontFamily: "'Fira Mono', monospace" }}>PCS to Portfolio</Link>
            <Link to="/down-payment-assistance-texas" style={{ color: copper, fontSize: 12, textDecoration: "none", fontFamily: "'Fira Mono', monospace" }}>Down Payment Assistance</Link>
            <Link to="/physician-loan-texas" style={{ color: copper, fontSize: 12, textDecoration: "none", fontFamily: "'Fira Mono', monospace" }}>Physician Loans</Link>
            <Link to="/calculators" style={{ color: copper, fontSize: 12, textDecoration: "none", fontFamily: "'Fira Mono', monospace" }}>BAH Calculator</Link>
            <a href={calendly} target="_blank" rel="noopener noreferrer" style={{ color: copper, fontSize: 12, textDecoration: "none", fontFamily: "'Fira Mono', monospace" }}>Schedule a Call</a>
            <a href={apply} target="_blank" rel="noopener noreferrer" style={{ color: copper, fontSize: 12, textDecoration: "none", fontFamily: "'Fira Mono', monospace" }}>Apply Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SanAntonioMortgage;
