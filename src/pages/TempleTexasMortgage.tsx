import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

function useTempleSEO() {
  useEffect(() => {
    document.title = "Mortgage Broker Temple TX | BSW Physician Loans | Bell County | Keys by Shalanda";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Temple TX mortgage broker for BSW physicians, Fort Hood military families, and Bell County buyers. Physician loans, VA, FHA, conventional, and DPA. The only Level I trauma center between Dallas and Austin started as a railroad doctor's practice in 1897.");
    setMeta("og:title", "Mortgage Broker Temple TX – BSW Physician & VA Loans | Keys by Shalanda", true);
    setMeta("og:description", "Buying near Baylor Scott & White Temple? Physician loans, VA, FHA, and DPA for Bell County buyers. Fort Hood is 30 minutes west. We close here.", true);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://shalandasmith.com/temple-tx-mortgage");
  }, []);
}

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
const tag = (c = copper) => ({ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: c, fontFamily: "'Fira Mono', monospace", marginBottom: 12, fontWeight: 600 });
const h2Style = (c = textPrimary) => ({ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700 as const, color: c, lineHeight: 1.25, marginBottom: 14 });
const subStyle = (c = textSecondary) => ({ fontSize: 16, color: c, lineHeight: 1.7, maxWidth: 760, marginBottom: 32 });
const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply    = "https://scl.my1003app.com/554554/register";

const stats = [
  { v: "~$274K",        l: "Temple Median Home Price · 2026" },
  { v: "8,800+",        l: "BSW Employees" },
  { v: "30 min",        l: "West to Fort Hood" },
  { v: "1.85%–2.10%",  l: "Bell County Tax Rate" },
];

const marketStats = [
  { label: "Temple Median Price",   value: "~$274K",   note: "Bell County · 2026",            valueColor: white },
  { label: "Avg Days on Market",    value: "61 days",  note: "Buyer-favored market",           valueColor: white },
  { label: "VA Loan Limit",         value: "$832,750", note: "Bell County · well above median", valueColor: copper },
];

const neighborhoods = [
  {
    name: "Temple Proper",
    price: "$230K–$290K",
    tag: "Widest inventory · All price points · I-35 access",
    desc: "Temple's core neighborhoods offer the widest housing variety in Bell County — established mid-century homes near downtown and the historic railroad district, newer subdivisions on the north and east sides, and everything between. Easy access to BSW Medical Center on 31st Street, I-35 corridor retail, and the Amtrak Texas Eagle stop. Best value per square foot in the area.",
  },
  {
    name: "Belton",
    price: "$290K–$360K",
    tag: "Belton ISD · Lake access · Small-town character",
    desc: "Eight miles south on I-35. Belton ISD is consistently one of the top-rated districts in Central Texas — and the main reason families accept a slightly higher price point and longer BSW commute. Belton Lake and Stillhouse Hollow Reservoir are 10 to 20 minutes out. University of Mary Hardin-Baylor is in town. Historic downtown with genuine character. The school district boundary matters — verify your specific address before assuming a Belton address means Belton ISD.",
  },
  {
    name: "Harker Heights",
    price: "$280K–$340K",
    tag: "Military corridor · Suburban · Killeen ISD",
    desc: "Ten miles west on US-190, Harker Heights is the suburban middle ground between Fort Hood and Temple's healthcare hub. Newer construction, quieter residential character, Killeen ISD. Popular with dual-income households where one partner works at BSW and the other works on post at Fort Hood. The commute to either is manageable — 20 minutes to BSW, 20 minutes to Fort Hood main gate.",
  },
  {
    name: "Salado",
    price: "$360K–$550K",
    tag: "Historic village · I-35 · Salado ISD",
    desc: "Fourteen miles south on I-35. Salado is a historic village with an art-gallery-and-boutique downtown, strong Salado ISD, and a reputation as one of the most charming small towns in Central Texas. The price premium reflects the lifestyle and the school district. Buyers who can absorb the commute to BSW (25 minutes) and want something genuinely different from a subdivision are drawn here.",
  },
  {
    name: "Troy & Nolanville",
    price: "$220K–$270K",
    tag: "Most affordable · Growing fast · New construction",
    desc: "Troy (north of Temple on I-35) and Nolanville (between Killeen and Belton) are the fastest-growing affordable pockets in the corridor. Smaller towns, newer subdivisions from D.R. Horton and regional builders, longer drives to BSW and Fort Hood. But the price point attracts buyers who prioritize square footage over address prestige and are willing to drive.",
  },
  {
    name: "Belton Lake & Morgan's Point",
    price: "$290K–$450K",
    tag: "Lake access · Larger lots · Custom homes",
    desc: "The lake corridor east of Belton offers custom homes, larger lots, and access to Belton Lake and Stillhouse Hollow for fishing, boating, and camping. This segment attracts BSW physicians and senior staff looking for a primary residence with land and privacy. The combination of physician loan programs and larger lot sizes in this price range makes it a strong fit for healthcare professionals with a long-term plan.",
  },
];

const programs = [
  {
    title: "Physician Loans",
    badgeColor: copper,
    items: [
      "No down payment required up to $1.5M",
      "No PMI regardless of down payment amount",
      "Student loan debt excluded or IBR payment used for DTI",
      "Available to MDs, DOs, DMDs, DVMs — and in some programs NPs and PAs",
    ],
    note: "BSW Temple is a 640-bed major teaching hospital with 42 residency and fellowship programs, affiliated with Baylor College of Medicine. 1-day-out-of-residency programs available — a signed employment contract is accepted as income verification in place of pay stubs at most lenders.",
    link: { to: "/physician-loan-texas", text: "Physician Loan Details →" },
  },
  {
    title: "VA Loans",
    badgeColor: navy,
    items: [
      "Zero down payment for eligible veterans, active duty, and surviving spouses",
      "No PMI — ever",
      "Bell County VA loan limit $832,750 — well above any Temple price point",
      "Fort Hood is 30 minutes west — Temple serves a significant veteran and active-duty population",
    ],
    note: null,
    link: { to: "/va-loan-texas", text: "VA Loan Details →" },
  },
  {
    title: "Conventional",
    badgeColor: "#185FA5",
    items: [
      "3% to 20% down payment",
      "PMI removable at 20% equity — no lifetime premium like FHA",
      "620 minimum credit score, best pricing at 740+",
      "HomeReady and Home Possible: 3% down at or below 80% AMI",
    ],
    note: "Strong fit for move-up buyers, dual-income BSW households, and buyers with equity from a prior home. Temple's median price makes conventional financing very accessible.",
    link: { to: "/conventional-loan-texas", text: "Conventional Loan Details →" },
  },
  {
    title: "FHA + Down Payment Assistance",
    badgeColor: "#2a7a7a",
    items: [
      "3.5% down with 580+ credit score",
      "TDHCA My First Texas Home (620 min) and TSAHC Homes for Texas Heroes (620 min — nurses, teachers, first responders)",
      "SETH 5 Star (640 min) and SETH GoldStar (620 min) — both available in Bell County",
      "Chenoa Fund (600 min) for buyers with thinner credit profiles",
    ],
    note: "Temple's price point makes DPA programs particularly effective — a full down payment on a $274,000 home is real money these programs can cover. Nurses and allied health professionals at BSW qualify for TSAHC Homes for Texas Heroes.",
    link: { to: "/down-payment-assistance-texas", text: "All DPA Programs →" },
  },
  {
    title: "USDA Rural Development",
    badgeColor: "#3B6D11",
    items: [
      "Zero down payment for eligible properties",
      "No monthly mortgage insurance premium",
      "Income limits apply by household size",
      "Some addresses in Troy, Nolanville, and rural Bell County qualify",
    ],
    note: "Temple proper and Belton do not qualify — they exceed USDA population thresholds. We check USDA eligibility for every address at no cost before you assume ineligibility.",
    link: null,
  },
];

const texasItems = [
  {
    badge: "Property taxes in Bell County",
    body: "Bell County effective property tax rates run approximately 1.85% to 2.10% of assessed value. On a $274,000 Temple home that adds roughly $423 to $480 per month to your payment. We always quote your full PITI — never just principal and interest. Belton ISD addresses sometimes carry a slightly different rate than Temple ISD — always verify the specific taxing entities at your address.",
  },
  {
    badge: "Homestead exemption",
    body: "Texas reduces your taxable home value by $100,000 for your primary residence. File with Bell County Appraisal District in the year you close — it does not happen automatically. On a $274,000 home this saves roughly $1,600 to $1,800 per year depending on your effective rate. Don't miss the filing window.",
  },
  {
    badge: "VA disability exemption",
    body: "A 100% service-connected disability rating qualifies you for a complete property tax exemption on your Texas primary residence. On a $274,000 Temple home this saves approximately $5,000 to $5,700 per year. File with Bell County Appraisal District after closing using your VA award letter. Partial ratings receive scaled exemptions — any rating qualifies for some reduction.",
  },
  {
    badge: "Belton ISD boundary vs city limits",
    body: "Belton ISD attendance zones do not follow city limits. Some Temple addresses feed into Belton ISD and some do not. If the school district is a deciding factor, verify the specific address at BISD before you fall in love with a house — the boundary line has moved before and can differ street by street.",
  },
  {
    badge: "New construction in the corridor",
    body: "D.R. Horton is the most active national builder in Troy and Nolanville. Regional builders including Stylecraft and Carothers are building in Killeen ISD and Belton ISD corridors. National builders use captive in-house lenders — their incentive programs are frequently portable to outside financing if you ask before you sign. Call us before you walk into a model home.",
  },
  {
    badge: "Option period",
    body: "Texas contracts include a 5 to 10 day option period during which you can exit for any reason and keep your earnest money. Use it for a thorough inspection — especially on mid-century Temple homes and older Belton inventory where foundation, electrical, and plumbing surprises are real. Never waive it to appear competitive.",
  },
];

const faqs = [
  {
    q: "What makes Temple the right market for BSW physicians and residents?",
    a: "Proximity and price. BSW Temple is on 31st Street — most physicians can be at work in under 10 minutes from central Temple or Belton neighborhoods. The median home price of $274,000 in Temple and $320,000 in Belton means physician loan buyers can often get into a home with zero down payment and no PMI at a payment that's competitive with renting. For a physician relocating from a coastal market or coming out of residency, the combination of no-down financing and Bell County's price point is genuinely accessible.",
  },
  {
    q: "Can a medical resident use a physician loan in Temple?",
    a: "Yes — most physician loan programs are specifically designed for incoming attendings and some accommodate residents still in training. Many lenders allow closing up to 90 days before your BSW start date and will accept a signed employment contract as income verification in place of pay stubs. Ask us which programs apply to your specialty, graduation date, and start date. The answer varies by program and lender.",
  },
  {
    q: "What is the history behind BSW Temple?",
    a: "Scott & White started as a private practice in 1897 when two railroad doctors — Arthur Scott and Raleigh White — partnered to treat railroad employees passing through Temple. They opened Temple Sanitarium in 1904 after purchasing a former convent. The hospital has operated continuously for over 125 years, growing into the flagship academic medical center for the Baylor Scott & White system — the largest nonprofit health system in Texas. It's the only Level I trauma center between Dallas and Austin, affiliated with Baylor College of Medicine, and U.S. News ranked it among the top 10 in Texas. That continuity is why Temple's healthcare economy is structural, not speculative.",
  },
  {
    q: "Is Temple a good market for first-time buyers right now?",
    a: "Yes. Temple's median price of $274,000 is accessible by Texas standards, homes are sitting 61 days on average giving buyers real negotiating leverage, and DPA programs including TDHCA and TSAHC are fully available in Bell County. A first-time buyer at 620 credit has multiple paths to significantly reduced out-of-pocket costs at closing. Nurses and allied health professionals at BSW qualify for TSAHC Homes for Texas Heroes DPA at 620 minimum credit.",
  },
  {
    q: "How does Fort Hood affect the Temple market?",
    a: "Fort Hood is 30 minutes west on US-190 — close enough that many active-duty families choose Temple or Belton for Belton ISD schools and a slightly more suburban feel than Killeen. The military population supports consistent resale demand at the entry and mid-price points and keeps the VA loan ecosystem active in the corridor. Bell County's VA loan limit of $832,750 covers every Temple and Belton price point.",
  },
  {
    q: "Should I buy in Temple or Belton?",
    a: "Depends on what you're optimizing for. Temple gives you more inventory, lower price points, faster access to BSW, and more housing stock at the entry level. Belton gives you Belton ISD (consistently stronger than Temple ISD on state rankings), lake proximity, a more distinct small-town character, and slightly newer suburban development — at a $40,000 to $70,000 price premium. For BSW physicians without school-age children, Temple's value is hard to beat. For families with kids, Belton's school district often wins the decision.",
  },
  {
    q: "What's the commute from Temple to Austin?",
    a: "Temple to downtown Austin is approximately 65 miles via I-35. In normal traffic the drive runs 55 to 75 minutes. Many BSW remote workers and hybrid professionals find the commute workable one to three days per week. The price differential versus Austin-area housing — $274,000 in Temple versus $575,000 in Austin — is the math that makes the commute worth having the conversation.",
  },
  {
    q: "Do USDA loans work in Bell County?",
    a: "Some addresses in Troy north of Temple and in rural Bell County edges qualify for USDA zero-down financing. Temple proper, Belton, and Harker Heights do not qualify — they exceed USDA population thresholds. We check USDA eligibility at the address level for every buyer at no cost.",
  },
];

const TempleTexasMortgage = () => {
  useTempleSEO();

  return (
    <>
      <SEO {...(seoMeta as any).templeTxMortgage} />
      <style>{`
        .ttx-btn:hover { opacity: 0.92; }
        .ttx-faq summary {
          cursor: pointer; list-style: none; padding: 18px 0;
          font-family: 'Lora', serif; font-size: 18px; font-weight: 600;
          color: ${navy}; display: flex; justify-content: space-between;
          align-items: center; gap: 16px;
        }
        .ttx-faq summary::after { content: "+"; color: ${copper}; font-size: 24px; font-weight: 300; }
        .ttx-faq[open] summary::after { content: "−"; }
        .ttx-faq p { padding: 0 0 18px; color: ${textSecondary}; line-height: 1.7; margin: 0; font-size: 15px; }
        .ttx-faq { border-bottom: 1px solid ${border}; }
        @media (max-width: 900px) {
          .ttx-hero h1 { font-size: 30px !important; }
          .ttx-hero-btns { flex-direction: column; }
          .ttx-2col { grid-template-columns: 1fr !important; }
          .ttx-3col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="ttx-hero" style={{ background: hero, color: ivory, padding: "96px 0 80px" }}>
        <div style={container}>
          <div style={tag(copper)}>
            Temple, TX · Bell County · Healthcare Capital of Central Texas
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, fontWeight: 700, lineHeight: 1.15, marginBottom: 20, color: ivory }}>
            Buying a Home in Temple, TX.{" "}
            <span style={{ color: copper }}>The Only Level I Trauma Center Between Dallas and Austin Started as a Railroad Doctor's Practice in 1897.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 780, marginBottom: 32, color: "rgba(250,248,244,0.85)" }}>
            Temple started as a railroad town and grew into a healthcare anchor. Baylor Scott & White Medical Center has operated continuously since 1897 — 125+ years, 8,800+ employees, 42 residency programs, and Baylor College of Medicine affiliation. Fort Hood is 30 minutes west. Belton Lake is 15 minutes east. The price point is accessible. We close here regularly.
          </p>
          <div className="ttx-hero-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            <a className="ttx-btn" href={apply} target="_blank" rel="noopener noreferrer" style={{ background: copper, color: white, padding: "14px 28px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Get Pre-Approved</a>
            <a className="ttx-btn" href={calendly} target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: ivory, padding: "14px 28px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15, border: `1px solid rgba(250,248,244,0.3)` }}>Book a Strategy Call</a>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["BSW Physician Loan Specialist", "VA · FHA · Conventional · DPA", "Fort Hood Corridor", "Belton ISD Expertise", "21-Day Avg Close", "50+ Lender Network"].map((t) => (
              <span key={t} style={{ fontSize: 12, padding: "6px 12px", border: `1px solid rgba(250,248,244,0.2)`, borderRadius: 999, color: "rgba(250,248,244,0.8)", fontFamily: "'Fira Mono', monospace" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. COPPER STATS BAR ──────────────────────────────────────────── */}
      <section style={{ background: copper, padding: "32px 0" }}>
        <div style={container}>
          <div className="ttx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center", color: white }}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 28, fontWeight: 700 }}>{s.v}</div>
                <div style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: "0.5px", marginTop: 4, opacity: 0.95 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE TEMPLE STORY ──────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: ivory }}>
        <div style={container}>
          <div style={tag()}>The Temple Story</div>
          <h2 style={h2Style()}>A Railroad Town That Became a Medical City</h2>
          <p style={subStyle()}>
            Temple was founded in 1880 when the Gulf, Colorado and Santa Fe Railroad bought 180 acres of Bell County farmland and platted a division point. The railroad brought workers, workers brought injury and illness, and in 1891 the Gulf, Colorado & Santa Fe Railway Hospital opened to treat them. Two young physicians — Arthur Scott and Raleigh White — took jobs there in 1892. Five years later they formed their own practice, and in 1904 they opened Temple Sanitarium. That practice became Scott & White Memorial Hospital, which became Baylor Scott & White Medical Center — the flagship academic campus of the largest nonprofit health system in Texas.
          </p>
          <p style={subStyle()}>
            Over 125 years later the railroad still runs through downtown Temple — the Amtrak Texas Eagle stops at the historic Santa Fe Depot on its Chicago to San Antonio run — but it's the medical economy that defines the city. BSW Temple is a 640-bed hospital, a Level I trauma center, a Baylor College of Medicine affiliate, and U.S. News ranks it among Texas's top 10 hospitals. McLane Children's Medical Center handles every pediatric specialty in the region. A new 45-bed inpatient rehabilitation hospital opened in January 2026. The system employs over 8,800 people and hires 200+ annually. That employment anchor is why Temple's housing market has held steady through every rate cycle since 2020 while boom-and-bust markets around it corrected.
          </p>
          <div className="ttx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 24 }}>
            {[
              { icon: copper, label: "BSW Medical Center — 125+ years", body: "640 beds, 42 residency and fellowship programs, Baylor College of Medicine affiliation, No. 5 nationally among major teaching hospitals (Fortune/Merative 2022). The only Level I trauma center between Dallas and Austin. McLane Children's is the only pediatric hospital in Central Texas in the same span." },
              { icon: navy, label: "Fort Hood corridor — 30 min west", body: "Fort Hood is 30 minutes on US-190. Temple and Belton serve a significant population of active-duty families and veterans who want Belton ISD schools and a slightly more suburban character than Killeen. Bell County VA loan limit $832,750 covers every Temple and Belton price point." },
              { icon: "#3B6D11", label: "Lakes & outdoors", body: "Belton Lake and Stillhouse Hollow Reservoir are 10 to 20 minutes east of Temple. Fishing, boating, camping, kayaking. Miller Springs Nature Center. Mother Neff State Park along the Leon River. The outdoor access is a significant quality-of-life differentiator for BSW families choosing Temple over a larger metro." },
              { icon: "#534AB7", label: "Railroad heritage & downtown", body: "The Temple Railroad & Heritage Museum occupies the historic Santa Fe Depot at 315 West Avenue B. The Czech Heritage Museum documents the immigrant communities that built Bell County. The Yard Food Truck Plaza anchors a revitalized downtown block. The Amtrak Texas Eagle still stops here." },
            ].map((c) => (
              <div key={c.label} style={{ background: white, padding: 24, borderRadius: radius, border: `1px solid ${border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: c.icon, display: "inline-block" }} />
                  <span style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 700, color: textPrimary }}>{c.label}</span>
                </div>
                <p style={{ color: textSecondary, lineHeight: 1.7, fontSize: 15, margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MARKET STATS ──────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: navy, color: ivory }}>
        <div style={container}>
          <div style={tag(copper)}>2026 Market</div>
          <h2 style={h2Style(ivory)}>Temple's Market Right Now — Stable Anchor in a Correcting State</h2>
          <p style={{ ...subStyle("rgba(250,248,244,0.8)") }}>While Austin corrected 20%+ and Georgetown softened, Temple barely moved. The employment anchor holds the floor.</p>
          <div className="ttx-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 32 }}>
            {marketStats.map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.05)", padding: 24, borderRadius: radius, border: `1px solid rgba(255,255,255,0.1)` }}>
                <div style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: "1px", color: copper, marginBottom: 8 }}>{s.label}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700, color: s.valueColor, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "rgba(250,248,244,0.7)" }}>{s.note}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(181,98,30,0.12)", padding: 24, borderRadius: radius, border: `1px solid rgba(181,98,30,0.3)`, marginBottom: 32 }}>
            <p style={{ color: ivory, lineHeight: 1.7, margin: 0, fontSize: 15 }}>
              <strong style={{ color: copper }}>Temple's price has held because its employment anchor is structural.</strong>{" "}
              BSW hires 200+ annually and expanded again in January 2026 with a new rehabilitation hospital. Fort Hood's BAH cycle runs on military budget decisions, not real estate speculation. Add $1.6B+ in commercial investment — a Meta data center, a Rowan data center, and SeAH Steel manufacturing — and you have a market where the floor is built on something more durable than momentum.
            </p>
          </div>
          <div className="ttx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: 24, borderRadius: radius, border: `1px solid rgba(255,255,255,0.1)` }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 700, color: copper, marginBottom: 14 }}>By city · Bell County · 2026</h3>
              {[{ city: "Temple", price: "$274,300" }, { city: "Belton", price: "$326,420" }, { city: "Harker Heights", price: "$320,000" }, { city: "Killeen", price: "$240,000" }].map((r) => (
                <div key={r.city} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid rgba(255,255,255,0.08)`, fontSize: 14 }}>
                  <span style={{ color: ivory }}>{r.city}</span>
                  <span style={{ color: copper, fontFamily: "'Fira Mono', monospace" }}>{r.price}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: 24, borderRadius: radius, border: `1px solid rgba(255,255,255,0.1)` }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 700, color: copper, marginBottom: 14 }}>Buyer advantages right now</h3>
              {["61 days average on market — time to inspect and negotiate", "Correctly priced homes still sell near full ask", "BSW hiring cycle drives consistent demand spring through fall", "DPA programs fully funded in Bell County", "VA loan: zero down, no PMI, $832,750 limit"].map((b, i) => (
                <div key={i} style={{ display: "flex", gap: 8, padding: "8px 0", fontSize: 14, color: "rgba(250,248,244,0.85)", lineHeight: 1.6 }}>
                  <span style={{ color: copper }}>›</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. NEIGHBORHOODS ─────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: parchment }}>
        <div style={container}>
          <div style={tag()}>Know the Area</div>
          <h2 style={h2Style()}>Temple, Belton & the Bell County Corridor</h2>
          <p style={subStyle()}>
            "Temple" to buyers usually means the broader Bell County corridor — cities with different school districts, commute times, price points, and characters. The right neighborhood depends on whether you're prioritizing BSW access, Fort Hood access, school district, lake proximity, or price per square foot.
          </p>
          <div className="ttx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {neighborhoods.map((n) => (
              <div key={n.name} style={{ background: white, padding: 24, borderRadius: radius, border: `1px solid ${border}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6, gap: 12 }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontSize: 20, fontWeight: 700, color: textPrimary, margin: 0 }}>{n.name}</h3>
                  <span style={{ fontFamily: "'Fira Mono', monospace", fontSize: 13, color: copper, whiteSpace: "nowrap" }}>{n.price}</span>
                </div>
                <div style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: navy, marginBottom: 12, letterSpacing: "0.3px" }}>{n.tag}</div>
                <p style={{ color: textSecondary, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. LOAN PROGRAMS ─────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: ivory }}>
        <div style={container}>
          <div style={tag()}>Find Your Fit</div>
          <h2 style={h2Style()}>Loan Programs for Temple & Bell County Buyers</h2>
          <p style={subStyle()}>
            BSW physician relocating for residency or attending role. Fort Hood veteran. First-time buyer at McLane or BSW. Move-up family targeting Belton ISD. The right program depends on your file.
          </p>
          <div className="ttx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {programs.map((p) => (
              <div key={p.title} style={{ background: white, padding: 28, borderRadius: radius, border: `1px solid ${border}` }}>
                <div style={{ display: "inline-block", padding: "4px 10px", background: p.badgeColor, color: white, fontSize: 11, fontFamily: "'Fira Mono', monospace", borderRadius: 4, marginBottom: 14, letterSpacing: "0.5px" }}>{p.title}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px 0" }}>
                  {p.items.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", gap: 8, padding: "6px 0", fontSize: 14, color: textPrimary, lineHeight: 1.6 }}>
                      <span style={{ color: copper }}>›</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
                {p.note && <p style={{ fontSize: 13, color: textSecondary, lineHeight: 1.7, padding: 12, background: cream, borderRadius: 6, margin: "0 0 14px 0", borderLeft: `3px solid ${copper}` }}>{p.note}</p>}
                {p.link && <Link to={p.link.to} style={{ color: copper, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>{p.link.text}</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CALCULATOR CALLOUT ────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: copperLight }}>
        <div style={container}>
          <div style={{ background: white, padding: 40, borderRadius: radius, border: `1px solid ${border}` }}>
            <div style={tag()}>Run Your Numbers</div>
            <h2 style={h2Style(textOnPale)}>What Does a Temple or Belton Mortgage Actually Cost?</h2>
            <p style={{ color: textOnPale, lineHeight: 1.7, marginBottom: 24, fontSize: 15 }}>
              The Texas Payment Calculator models your full PITI at any Bell County price point — including Bell County property taxes and homeowners insurance. The VA Loan Calculator shows your zero-down payment with the VA funding fee built in. If you're at Fort Hood, the BAH & Buying Power calculator shows you how your pay grade maps to Temple and Belton price points. No email required.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/calculators" className="ttx-btn" style={{ background: copper, color: white, padding: "12px 22px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 14 }}>Texas Payment Calculator →</Link>
              <Link to="/calculators" className="ttx-btn" style={{ background: navy, color: white, padding: "12px 22px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 14 }}>VA Loan Calculator →</Link>
              <Link to="/calculators" className="ttx-btn" style={{ background: "transparent", color: navy, padding: "12px 22px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 14, border: `1px solid ${navy}` }}>BAH & Buying Power →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TEXAS-SPECIFIC ────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: soft }}>
        <div style={container}>
          <div style={tag()}>Texas-Specific</div>
          <h2 style={h2Style()}>Bell County Details That Affect Your Payment and Your Taxes</h2>
          <p style={subStyle()}>These apply to every buyer in Temple and the Bell County corridor. Know them before you close.</p>
          <div className="ttx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {texasItems.map((t, i) => (
              <div key={i} style={{ background: white, padding: 22, borderRadius: radius, border: `1px solid ${border}` }}>
                <div style={{ display: "inline-block", padding: "3px 8px", background: copper, color: white, fontSize: 10, fontFamily: "'Fira Mono', monospace", borderRadius: 3, marginBottom: 10, letterSpacing: "0.5px", textTransform: "uppercase" }}>{t.badge}</div>
                <p style={{ color: textSecondary, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: ivory }}>
        <div style={{ ...container, maxWidth: 880 }}>
          <div style={tag()}>Frequently Asked</div>
          <h2 style={h2Style()}>What Temple Buyers Ask Us Most</h2>
          <div style={{ marginTop: 20 }}>
            {faqs.map((f, i) => (
              <details key={i} className="ttx-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: hero, color: ivory, textAlign: "center" }}>
        <div style={{ ...container, maxWidth: 760 }}>
          <div style={{ width: 70, height: 70, borderRadius: 999, background: copper, color: white, fontFamily: "'Lora', serif", fontSize: 26, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>SS</div>
          <h2 style={{ ...h2Style(ivory), textAlign: "center" }}>Shalanda Smith</h2>
          <p style={{ fontSize: 13, fontFamily: "'Fira Mono', monospace", color: copper, marginBottom: 20, letterSpacing: "0.5px" }}>
            NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · Licensed in Texas
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(250,248,244,0.85)", marginBottom: 28 }}>
            Relocating to BSW for residency or an attending position? PCS orders to Fort Hood and considering Temple or Belton for schools? First-time buyer targeting Belton ISD? Tell me your situation and timeline — we'll match the right program and run your real numbers before you shop a single home.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 18 }}>
            <a className="ttx-btn" href={apply} target="_blank" rel="noopener noreferrer" style={{ background: copper, color: white, padding: "14px 28px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Get Pre-Approved</a>
            <a className="ttx-btn" href={calendly} target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: ivory, padding: "14px 28px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15, border: `1px solid rgba(250,248,244,0.3)` }}>Book a Strategy Call</a>
          </div>
          <p style={{ fontSize: 13, color: "rgba(250,248,244,0.6)", fontFamily: "'Fira Mono', monospace" }}>
            Or call/text: 254-935-9331
          </p>
        </div>
      </section>

      {/* ── 11. COMPLIANCE ───────────────────────────────────────────────── */}
      <section style={{ background: "#0f1822", color: "rgba(250,248,244,0.6)", padding: "40px 0" }}>
        <div style={container}>
          <p style={{ fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. Market data approximate and subject to change. Physician loan program availability, credit requirements, and income verification requirements vary by lender. Down payment assistance program availability and credit score minimums subject to program rules in effect at time of application.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 12 }}>
            <Link to="/physician-loan-texas" style={{ color: copper, textDecoration: "none" }}>Physician Loans</Link>
            <Link to="/va-loan-texas" style={{ color: copper, textDecoration: "none" }}>VA Loans Texas</Link>
            <Link to="/down-payment-assistance-texas" style={{ color: copper, textDecoration: "none" }}>Down Payment Assistance</Link>
            <Link to="/killeen-va-loan" style={{ color: copper, textDecoration: "none" }}>Fort Hood VA Loans</Link>
            <a href={calendly} target="_blank" rel="noopener noreferrer" style={{ color: copper, textDecoration: "none" }}>Schedule a Call</a>
            <a href={apply} target="_blank" rel="noopener noreferrer" style={{ color: copper, textDecoration: "none" }}>Apply Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TempleTexasMortgage;
