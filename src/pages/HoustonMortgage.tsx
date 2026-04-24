import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

function useHoustonSEO() {
  useEffect(() => {
    document.title = "Mortgage Broker Houston TX – Texas Medical Center, Energy Corridor & VA Loans | Keys by Shalanda";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Houston TX mortgage broker for Texas Medical Center physicians, Energy Corridor professionals, VA buyers, and first-time buyers. Flood zone guidance built in. VA, FHA, physician, conventional, and DPA programs.");
    setMeta("og:title", "Mortgage Broker Houston TX – TMC, Energy Corridor & VA | Keys by Shalanda", true);
    setMeta("og:description", "Buying in Houston? VA loans, physician loans, FHA, and conventional. Flood zone guidance, Harris County property tax breakdown, and honest neighborhood-by-neighborhood analysis.", true);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://shalandasmith.com/houston-tx-mortgage");
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
const container: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };
const tag = (c = copper): React.CSSProperties => ({ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: c, fontFamily: "'Fira Mono', monospace", marginBottom: 12, fontWeight: 600 });
const h2Style = (c = textPrimary): React.CSSProperties => ({ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700, color: c, lineHeight: 1.25, marginBottom: 14 });
const subStyle = (c = textSecondary): React.CSSProperties => ({ fontSize: 16, color: c, lineHeight: 1.7, maxWidth: 760, marginBottom: 32 });
const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply    = "https://scl.my1003app.com/554554/register";

const stats = [
  { v: "~$330K",    l: "Metro Median Home Price · 2026" },
  { v: "4th",       l: "Largest US City" },
  { v: "$832,750",  l: "Harris County VA Loan Limit" },
  { v: "No Zoning", l: "Most Development-Flexible Major City in US" },
];

const marketStats = [
  { label: "Metro Median Price",   value: "~$330K",   note: "HAR MLS · 2026 · most affordable major TX metro", valueColor: white },
  { label: "Avg Days on Market",   value: "~64 days", note: "Balanced market · buyer leverage exists",           valueColor: white },
  { label: "VA Loan Limit",        value: "$832,750", note: "Harris County · zero down below this",              valueColor: copper },
];

const neighborhoods = [
  { name: "The Heights", price: "$450K–$750K+", tag: "Victorian bungalows · walkable · inside Loop", desc: "Greater Heights blends historic Victorian homes and bungalows with a walkable urban character rare in Houston. Heights Boulevard, White Oak Bayou trail system, local bars, restaurants, and live music venues. 43% appreciation over 10 years makes it one of Houston's strongest long-term value neighborhoods. Inside Loop 610. Popular with young professionals, couples, and buyers who want Inner Loop character without River Oaks pricing." },
  { name: "Montrose", price: "$350K–$650K+", tag: "Art galleries · dining · culturally diverse · walkable", desc: "Montrose is Houston's most walkable Inner Loop neighborhood at 86 Walk Score. Art galleries, diverse dining, vintage shops, live music, and a thriving cultural identity. Mix of historic bungalows, modern townhomes, and condos. Niche ranks it #2 best neighborhood in Houston and #1 for young professionals. Strong resale history. Access to the Museum District and Texas Medical Center is 10 to 15 minutes." },
  { name: "West University Place", price: "$700K–$1.5M+", tag: "Top schools · quiet streets · Rice University adjacent", desc: "West U is the gold standard for family buyers near the Texas Medical Center — within walking distance of Rice University, 15 minutes to TMC, and zoned to some of the strongest HISD schools in the city. Quiet, tree-lined streets, well-maintained homes, and tight deed restrictions that protect values. Entry price point is steep but 10-year appreciation has consistently outperformed the metro average." },
  { name: "Katy", price: "$290K–$500K", tag: "Top schools · master-planned · Energy Corridor access", desc: "Katy has become one of the most sought-after suburban markets in the Houston metro — master-planned communities like Cinco Ranch, top-performing Katy ISD schools, and easy access to the Energy Corridor via I-10. 500+ restaurants. Typhoon Texas. Katy Mills Mall. New construction active throughout. For Energy Corridor professionals with families, Katy delivers suburban quality of life at a price point that makes sense." },
  { name: "Sugar Land", price: "$320K–$600K+", tag: "Fort Bend ISD · master-planned · diverse", desc: "Sugar Land is one of the most diverse cities in Texas and consistently ranks among the best suburbs in the country. Fort Bend ISD — one of Texas's top school districts. Sugar Land Town Square, Smart Financial Centre, and a self-contained suburban lifestyle. 22 miles southwest of downtown Houston. Popular with buyers relocating from California and the Northeast who want top schools at a fraction of coastal prices." },
  { name: "The Woodlands", price: "$400K–$900K+", tag: "Masterplan community · 6,000 acres green space · top schools", desc: "The Woodlands was carved out of forest in 1974 and has maintained 6,000 acres of protected green space, 200 miles of trails, and over 100 parks while growing into a city of its own. Conroe ISD. Major corporate campus presence — ExxonMobil, Huntsman, Aon, and others have campuses here. The Woodlands Mall, Waterway Square, and Cynthia Woods Mitchell Pavilion. For buyers who want master-planned excellence at its highest expression." },
  { name: "Pearland", price: "$270K–$420K", tag: "Texas Medical Center access · fast growing · Pearland ISD", desc: "Pearland sits 20 miles south of downtown and 15 minutes from the Texas Medical Center — making it one of the most popular suburbs for TMC physicians, nurses, and allied health professionals who want new construction, top schools, and a reasonable commute. Pearland ISD is highly rated. Lower price point than Sugar Land or The Woodlands with similar quality of life fundamentals." },
  { name: "Cypress", price: "$300K–$550K", tag: "Cypress-Fairbanks ISD · master-planned · northwest growth", desc: "Cypress is booming in northwest Houston — master-planned communities with lakes, trails, and resort amenities; Cypress-Fairbanks ISD (one of the largest and most respected districts in Texas); and new construction active throughout. Lower price points than Katy on comparable square footage. For buyers who want northwest access without The Woodlands price tag." },
];

const programs = [
  { title: "Physician Loans", badgeColor: copper, items: ["No down payment required up to $1.5M","No PMI regardless of down payment amount","Student loan debt excluded or IBR payment used for DTI","Available to MDs, DOs, DMDs, DVMs — and in some programs NPs and PAs"], note: "The Texas Medical Center is the largest medical complex in the world — 60+ institutions, 60,000+ employees, 10 million patient visits annually. It drives the single largest physician relocation market in Texas. 1-day-out-of-residency programs available. We know the TMC buyer profile.", link: { to: "/physician-loan-texas", text: "Physician Loan Details →" } },
  { title: "VA Loans", badgeColor: navy, items: ["Zero down payment for eligible veterans, active duty, and surviving spouses","No PMI — ever","Harris County VA loan limit $832,750 — covers most Houston neighborhoods below The Woodlands luxury tier","Full-entitlement buyers have no VA-imposed limit above $832,750"], note: "Houston has a significant veteran and military retiree population. Ellington Field Joint Reserve Base is southeast of downtown. Texas Veterans Land Board (VLB) programs are also available as a complement to federal VA benefits.", link: { to: "/va-loan-texas", text: "VA Loan Details →" } },
  { title: "Conventional", badgeColor: "#185FA5", items: ["3% to 20% down payment","PMI removable at 20% equity","620 minimum credit score, best pricing at 740+","HomeReady and Home Possible: 3% down at or below 80% AMI"], note: "Houston's price diversity makes conventional loans the right fit across a wide range of buyers — from first-time buyers in Pearland and Cypress to move-up buyers in Sugar Land and Katy.", link: { to: "/conventional-loan-texas", text: "Conventional Loan Details →" } },
  { title: "FHA + Down Payment Assistance", badgeColor: "#2a7a7a", items: ["3.5% down with 580+ credit score","TDHCA My First Texas Home (620 min) and TSAHC Homes for Texas Heroes (620 min — nurses, teachers, first responders)","SETH 5 Star (640 min) and SETH GoldStar (620 min) — both available in Harris and Fort Bend counties","Chenoa Fund (600 min) for buyers with thinner credit profiles"], note: "Houston's suburban price points in Pearland, Cypress, and parts of Katy are well within FHA limits and DPA coverage. Nurses and allied health professionals at TMC qualify for TSAHC Homes for Texas Heroes.", link: { to: "/down-payment-assistance-texas", text: "All DPA Programs →" } },
  { title: "Jumbo & Non-QM", badgeColor: "#534AB7", items: ["Loan amounts above $832,750 conventional limit","Bank statement programs for self-employed buyers","DSCR investor loans based on rental income, not personal income","Asset depletion programs for retirees and high-net-worth buyers"], note: "The Woodlands, River Oaks, and Memorial luxury segments often require jumbo financing. Energy sector buyers with variable income frequently benefit from non-QM bank statement programs.", link: null as null | { to: string; text: string } },
];

const floodItems = [
  { badge: "Flood is the conversation in Houston", body: "Hurricane Harvey dropped over 60 inches of rain in four days in 2017 — $125 billion in damage, 300,000+ structures flooded, 75% of them outside the mapped 100-year floodplain. You cannot buy a home in Houston without understanding flood risk at the specific address. Not the neighborhood average. Not the city average. The specific address, elevation, and flood history." },
  { badge: "How to check flood risk", body: "FEMA Flood Map Service Center (msc.fema.gov) shows official 100-year and 500-year floodplain designations. Harris County Flood Education Mapping Tool (harriscountyfemt.org) provides more granular local data. Zone AE and A = 100-year floodplain, flood insurance required for federally backed mortgages. Zone X = lower risk, but Harvey proved that 'outside the floodplain' does not mean 'zero risk.' Check the specific address before you go under contract." },
  { badge: "2026 FEMA map update — MAAPNext", body: "Harris County's MAAPNext program is updating flood maps using new rainfall data and LiDAR elevation scans — the previous maps were created around 2007, before Harvey. Preliminary maps were scheduled for early 2026 release. Some properties currently classified as lower risk may be reclassified into higher-risk zones, which can affect required flood insurance and future resale. If you're buying in Houston in 2026, ask your agent and lender about the status of MAAPNext and whether the property's classification could change." },
  { badge: "Texas SB 339 — mandatory flood disclosure", body: "Texas Senate Bill 339 (effective September 2019) requires sellers to disclose on the TREC Seller's Disclosure Notice: whether the property is in a 100-year or 500-year floodplain, any prior flooding history, any FEMA or SBA disaster assistance received, and any prior flood insurance claims. Selling 'as-is' does not exempt a seller from these disclosures. If a property has flooded and the seller did not disclose it — even if they didn't file a claim — that is a material disclosure violation." },
  { badge: "Flood insurance cost", body: "Flood insurance is required for properties in Special Flood Hazard Areas (SFHA) with federally backed mortgages (VA, FHA, conventional). NFIP premiums in Houston typically run $500 to $2,000 per year depending on elevation, distance to water, and flood history — calculated under FEMA's Risk Rating 2.0 system. Private flood insurance is an alternative to NFIP for some properties. Always get flood insurance quotes before you go under contract so the cost is factored into your full monthly payment." },
  { badge: "Neighborhoods with lower flood exposure", body: "Historically lower-flood-risk neighborhoods include The Heights (elevated terrain along White Oak Bayou), Memorial (elevated corridor), Katy and Cinco Ranch (engineered drainage in master-planned communities), The Woodlands (extensive retention system), and Pearland (newer infrastructure). No Houston neighborhood has zero flood risk — even elevated areas experienced flooding in Harvey. 'Never flooded' is a disclosure fact, not a guarantee." },
];

const texasItems = [
  { badge: "Harris County property taxes", body: "Harris County effective property tax rates typically run 2.0% to 2.5% of assessed value — some of the highest in Texas. On a $330,000 home that adds $550 to $688 per month to your payment. MUD (Municipal Utility District) taxes in master-planned communities and outer suburbs can push effective rates above 2.5% in early years before district bonds are retired. Always get the specific effective tax rate for any address — not just the county base rate." },
  { badge: "MUD taxes in Houston suburbs", body: "Master-planned communities in Katy, Cypress, Sugar Land, The Woodlands, and Pearland often carry MUD taxes assessed separately from city and county taxes. MUD rates typically run 0.4% to 1.0% on top of base rates in the early years of a district. They phase down over time as bonds retire. A house in Bridgeland or Cinco Ranch might carry a significantly higher effective rate than a comparable house in an older Sugar Land neighborhood. We pull the specific MUD rate for every suburban address before we quote a payment." },
  { badge: "Homestead exemption", body: "Texas reduces your taxable home value by $100,000 for your primary residence. File with your county appraisal district (Harris, Fort Bend, Montgomery, Brazoria depending on where you buy) in the year you close. It does not apply automatically. On a $330,000 Houston-area home, this saves approximately $2,000 to $2,500 per year depending on your effective rate." },
  { badge: "VA disability exemption", body: "A 100% service-connected disability rating qualifies you for a complete property tax exemption on your Texas primary residence. On a $330,000 Houston-area home at an effective rate of 2.3%, this saves approximately $7,600 per year. File with your county appraisal district after closing using your VA award letter. Partial ratings receive scaled exemptions." },
  { badge: "No state income tax", body: "Texas has no state income tax. For buyers relocating from California, New York, Illinois, or other high-tax states, this is a meaningful financial advantage that compounds over the length of ownership. A physician or energy sector professional earning $250,000+ saves $10,000 to $25,000+ per year in state income tax compared to California, which partially offsets Texas's higher property tax rates." },
  { badge: "Option period", body: "Texas contracts include a 5 to 10 day option period during which you can exit for any reason and keep your earnest money. Use it for inspection and — in Houston — a flood history investigation. Ask the seller, ask the neighbors, and check the Harris County Flood Education Mapping Tool. Never waive the option period on a Houston home." },
];

const faqs = [
  { q: "How do I find out if a Houston home is in a flood zone?", a: "Start with FEMA's Flood Map Service Center at msc.fema.gov — enter the address to see its official 100-year and 500-year floodplain designation. Then check the Harris County Flood Education Mapping Tool at harriscountyfemt.org for more granular local data. Ask the seller directly — Texas SB 339 requires disclosure of flood history. Ask neighbors. And be aware that MAAPNext is updating Houston's flood maps in 2026, which may reclassify some properties. 'Outside the floodplain' as of today may change. Check early — before you go under contract, not after." },
  { q: "Is the Texas Medical Center the largest in the world?", a: "Yes. The Texas Medical Center is the world's largest medical complex — 60+ institutions, 60,000+ employees, over 10 million patient visits per year, and more operating rooms than any other facility in the world. It's not a single hospital — it's a self-contained city within a city. Houston Methodist, Memorial Hermann, MD Anderson, Baylor College of Medicine, UTHealth, Rice University, and Texas Children's Hospital are all TMC institutions. The relocation demand it generates — physicians, nurses, researchers, administrators — is one of the most reliable drivers of Inner Loop and south Houston housing demand." },
  { q: "What neighborhoods are best for Texas Medical Center professionals?", a: "For walkability and urban character: Montrose and the Museum District. For top schools within TMC commute distance: West University Place and Bellaire. For affordability with reasonable commute: Pearland (15 to 20 minutes south). For physician buyers who want more space: Sugar Land (22 miles southwest) or Memorial (Inner Loop west). The commute from any of these to TMC is manageable by Houston standards — 15 to 30 minutes depending on time of day." },
  { q: "Are physician loans available in Houston?", a: "Yes — and Houston is one of the strongest physician loan markets in Texas. The Texas Medical Center generates massive physician relocation demand, and most major physician loan lenders have significant experience with Houston-area transactions. No down payment up to $1.5M, no PMI, and student loan debt excluded from DTI calculations. For a physician relocating to TMC, Houston Methodist, or MD Anderson, we match the right program to your specialty, graduation date, and start date." },
  { q: "How does Houston compare to Austin and Dallas for affordability?", a: "Houston is consistently the most affordable of the three major Texas metros. Median home price around $330,000 versus $575,000 in Austin and roughly $375,000 in Dallas-Fort Worth. Houston has no zoning laws — the most development-flexible major city in the United States — which means supply responds to demand more quickly than in zoned cities, which historically moderates price volatility. Houston's market has held up better through the post-2022 correction than Austin specifically because its employment base is diversified across energy, healthcare, aerospace, and trade rather than concentrated in speculative tech growth." },
  { q: "What does 'no zoning' mean for Houston homebuyers?", a: "Houston is the only major US city without traditional zoning ordinances. In practice this means a commercial building can be built next to a residential neighborhood, industrial uses can be near residential areas, and development patterns are governed by deed restrictions rather than government zoning. For buyers, this means: always check deed restrictions on any property before purchasing, understand that the neighborhood character next to your home has fewer legal protections than in a zoned city, and factor in the location's specific deed restriction status when assessing long-term value. Inner Loop neighborhoods with strong deed restrictions (Heights, Montrose, West U, River Oaks) have generally maintained character better than areas without them." },
  { q: "Is Katy ISD really as good as people say?", a: "Yes — Katy ISD consistently ranks among the top school districts in Texas. Over 70 campuses, multiple National Blue Ribbon Schools, and strong test performance across the district. For buyers specifically choosing Katy for the school district, verify campus assignment at the specific address — Katy ISD boundaries in some western growth areas can include campuses that are newer and less established than the legacy campuses. The reputation is earned, but it's not uniform across every campus." },
  { q: "Can I use down payment assistance in Houston?", a: "Yes. TDHCA My First Texas Home (620 minimum credit), TSAHC Homes for Texas Heroes (620 minimum — nurses, teachers, first responders), SETH 5 Star (640 minimum), SETH GoldStar (620 minimum), and Chenoa Fund (600 minimum) are all available in Harris and Fort Bend counties. Houston's suburban price points in Pearland, Cypress, and parts of Katy are well within FHA limits and DPA coverage thresholds. We run your eligibility at no cost." },
];

const cultureCards = [
  { icon: copper, label: "Texas Medical Center", body: "60+ institutions, 60,000+ employees, 10 million patient visits annually, more operating rooms than any other complex in the world. Houston Methodist, MD Anderson, Texas Children's, Baylor College of Medicine, UTHealth, Rice University all on one campus. The single largest driver of physician relocation demand in Texas." },
  { icon: "#185FA5", label: "Energy Corridor & downtown", body: "Seven miles along I-10 West housing the global headquarters of Shell, BP, Citgo, and dozens of energy companies. Downtown Houston has experienced genuine urban renaissance — sport arenas, restaurants, lofts, and nightlife that didn't exist 20 years ago. The Galleria and Post Oak area adds world-class retail and international commerce." },
  { icon: "#3B6D11", label: "NASA & aerospace", body: "Johnson Space Center in Clear Lake has driven a suburban community — Clear Lake City, Friendswood, League City — built around aerospace employment. Houston has a legitimate aerospace industry beyond the nickname. The community is unusually STEM-concentrated and serves as a counterweight to pure energy-sector dependence." },
  { icon: "#534AB7", label: "Culture & diversity", body: "Museum District: 19 cultural institutions in a 1.5-square-mile area. The Menil Collection. Museum of Fine Arts. The Rothko Chapel. Houston Grand Opera, Houston Symphony, Houston Ballet — all over 50 years old. The Heights Boulevard antique scene. Montrose galleries. A city that built cultural institutions with oil money and kept them." },
];

const compareRows = [
  { city: "Houston", price: "~$330K", note: "Most affordable" },
  { city: "San Antonio", price: "~$300K", note: "Comparable" },
  { city: "Dallas-FW", price: "~$375K", note: "Correcting" },
  { city: "Austin", price: "~$575K", note: "Post-correction" },
];

const heroBadges = ["TMC Physician Loan Specialist", "VA · FHA · Conventional · DPA", "Flood Zone Guidance", "Jumbo & Non-QM", "Harris & Fort Bend Counties", "21-Day Avg Close", "50+ Lender Network"];

const HoustonMortgage = () => {
  useHoustonSEO();

  return (
    <>
      <SEO {...(seoMeta as any).houstonMortgage} />
      <style>{`
        .hou-btn:hover { opacity: 0.92; }
        .hou-faq summary {
          cursor: pointer; list-style: none; padding: 18px 0;
          font-family: 'Lora', serif; font-size: 18px; font-weight: 600;
          color: ${navy}; display: flex; justify-content: space-between;
          align-items: center; gap: 16px;
        }
        .hou-faq summary::after { content: "+"; color: ${copper}; font-size: 24px; font-weight: 300; }
        .hou-faq[open] summary::after { content: "−"; }
        .hou-faq p { padding: 0 0 18px; color: ${textSecondary}; line-height: 1.7; margin: 0; font-size: 15px; }
        .hou-faq { border-bottom: 1px solid ${border}; }
        @media (max-width: 900px) {
          .hou-hero h1 { font-size: 30px !important; }
          .hou-hero-btns { flex-direction: column; }
          .hou-2col { grid-template-columns: 1fr !important; }
          .hou-3col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: hero, color: ivory, padding: "96px 0 80px" }} className="hou-hero">
        <div style={container}>
          <div style={tag(copper)}>Houston, TX · Harris County · 4th Largest US City · Space City</div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, fontWeight: 700, lineHeight: 1.15, margin: "0 0 18px", color: ivory }}>
            Buying a Home in Houston, TX. <span style={{ color: copper }}>The World's Largest Medical Center. NASA. The Energy Corridor. And the Most Affordable Major City in Texas.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 820, color: "rgba(250,248,244,0.85)", marginBottom: 28 }}>
            Houston is the fourth-largest city in the United States, the most diverse, and the most affordable of the major Texas metros. The Texas Medical Center employs 60,000+ people. The Energy Corridor houses the world's largest energy companies. NASA's Johnson Space Center is 25 miles southeast. No zoning laws means one of the most development-flexible housing markets in the country. And flood risk is a real conversation we have with every buyer here — upfront.
          </p>
          <div className="hou-hero-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <a className="hou-btn" href={apply} target="_blank" rel="noreferrer" style={{ background: copper, color: white, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Get Pre-Approved</a>
            <a className="hou-btn" href={calendly} target="_blank" rel="noreferrer" style={{ background: "transparent", color: ivory, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15, border: `1px solid ${ivory}` }}>Book a Strategy Call</a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {heroBadges.map((t) => (
              <span key={t} style={{ fontSize: 12, padding: "6px 12px", borderRadius: 999, background: "rgba(255,255,255,0.06)", color: "rgba(250,248,244,0.85)", border: "1px solid rgba(255,255,255,0.1)" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: copper, padding: "32px 0" }}>
        <div style={container}>
          <div className="hou-3col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center", color: white }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: "1px" }}>{s.v}</div>
                <div style={{ fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", opacity: 0.9, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOUSTON STORY */}
      <section style={{ ...sectionPad, background: parchment }}>
        <div style={container}>
          <div style={tag()}>What Houston Actually Is</div>
          <h2 style={h2Style()}>Not a Suburb With Big Ambitions. An Actual Global City.</h2>
          <p style={subStyle()}>
            Houston is the fourth-largest city in the United States and the most ethnically diverse major city in America — more diverse than New York, Los Angeles, or Chicago by most measures. 145+ languages are spoken here. The Chinatown in Bellaire is one of the largest in the South. The Vietnamese community along Bellaire Boulevard has built one of the best food corridors in Texas. The food scene as a whole — Viet-Cajun, Tex-Mex, barbecue, Michelin-caliber fine dining — is world-class and completely underrated outside of Houston.
          </p>
          <p style={subStyle()}>
            The economic foundation is diversified in a way other Texas metros can't claim. Energy: the world's largest energy companies — Shell, ExxonMobil, BP, Chevron, ConocoPhillips — have major Houston presence and the Energy Corridor along I-10 West is one of the largest commercial districts in Texas. Medicine: the Texas Medical Center is the largest medical complex on earth. Aerospace: NASA's Johnson Space Center ("Houston, we have a problem") is in Clear Lake, 25 miles southeast. Trade: the Port of Houston is one of the busiest in the nation. No single sector dominates — which is why Houston's housing market is structurally more stable than Austin or Dallas when any one sector corrects.
          </p>
          <div className="hou-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, marginTop: 24 }}>
            {cultureCards.map((c) => (
              <div key={c.label} style={{ background: white, border: `1px solid ${border}`, borderRadius: radius, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: c.icon }} />
                  <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 18, color: textPrimary }}>{c.label}</div>
                </div>
                <p style={{ color: textSecondary, lineHeight: 1.7, fontSize: 15, margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET STATS */}
      <section style={{ ...sectionPad, background: hero, color: ivory }}>
        <div style={container}>
          <div style={tag(copper)}>2026 Market</div>
          <h2 style={h2Style(ivory)}>Houston's Market — Stable, Affordable, Diversified</h2>
          <p style={subStyle("rgba(250,248,244,0.8)")}>Most affordable major Texas metro. Balanced inventory. No Austin-style correction because the growth was never purely speculative.</p>
          <div className="hou-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 28 }}>
            {marketStats.map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: radius, padding: 22 }}>
                <div style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", opacity: 0.7, marginBottom: 10 }}>{s.label}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: s.valueColor }}>{s.value}</div>
                <div style={{ fontSize: 13, opacity: 0.8, marginTop: 8 }}>{s.note}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(181,98,30,0.1)", border: `1px solid ${copper}`, borderRadius: radius, padding: 22 }}>
            <p style={{ margin: 0, color: ivory, lineHeight: 1.7, fontSize: 15 }}>
              Houston didn't boom the same way Austin did — which means it didn't correct the same way either. <strong style={{ color: copper }}>Austin peaked at $575K+ and corrected 20%+. Houston's median held around $330,000 through the same period with 3% to 4% modest appreciation.</strong> The reason: Houston's employment base was never concentrated in one speculative sector. Energy, healthcare, aerospace, and trade don't all move in the same direction at the same time. That diversification makes Houston a more durable long-term hold than its flash-growth neighbors.
            </p>
          </div>
          <div style={{ marginTop: 28 }}>
            <div style={{ fontFamily: "'Fira Mono', monospace", fontSize: 12, opacity: 0.7, marginBottom: 12, letterSpacing: "1px", textTransform: "uppercase" }}>Houston vs. other major Texas metros · 2026</div>
            <div className="hou-3col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {compareRows.map((r) => (
                <div key={r.city} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: radius, padding: 16, textAlign: "center" }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: copper }}>{r.price}</div>
                  <div style={{ fontSize: 13, color: ivory, marginTop: 4 }}>{r.city}</div>
                  <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>{r.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section style={{ ...sectionPad, background: ivory }}>
        <div style={container}>
          <div style={tag()}>Know the Area</div>
          <h2 style={h2Style()}>Houston Neighborhoods — Inner Loop to Master-Planned Suburbs</h2>
          <p style={subStyle()}>
            Houston is massive — nearly 670 square miles of city proper, plus a metro that extends into Harris, Fort Bend, Montgomery, Brazoria, and Galveston counties. Where you buy depends entirely on where you work and what you're optimizing for. Here's the honest breakdown of the neighborhoods that drive the most buyer decisions.
          </p>
          <div className="hou-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {neighborhoods.map((n) => (
              <div key={n.name} style={{ background: white, border: `1px solid ${border}`, borderRadius: radius, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6, gap: 12 }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontSize: 20, fontWeight: 700, color: navy, margin: 0 }}>{n.name}</h3>
                  <span style={{ fontFamily: "'Fira Mono', monospace", fontSize: 12, color: copper }}>{n.price}</span>
                </div>
                <div style={{ fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: textSecondary, marginBottom: 12 }}>{n.tag}</div>
                <p style={{ color: textSecondary, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAN PROGRAMS */}
      <section style={{ ...sectionPad, background: cream }}>
        <div style={container}>
          <div style={tag()}>Find Your Fit</div>
          <h2 style={h2Style(textOnPale)}>Loan Programs for Houston Buyers</h2>
          <p style={subStyle(textOnPale)}>
            TMC physician relocating. Energy sector buyer with variable income. First-time buyer in Pearland or Cypress. Veteran using your benefit. Move-up buyer targeting The Woodlands. The right program depends on your file.
          </p>
          <div className="hou-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {programs.map((p) => (
              <div key={p.title} style={{ background: white, border: `1px solid ${border}`, borderRadius: radius, padding: 24 }}>
                <div style={{ display: "inline-block", background: p.badgeColor, color: white, padding: "4px 12px", borderRadius: 999, fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>{p.title}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>
                  {p.items.map((item, idx) => (
                    <li key={idx} style={{ color: textPrimary, lineHeight: 1.6, fontSize: 14, marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: copper }}>›</span>{item}
                    </li>
                  ))}
                </ul>
                {p.note && <p style={{ color: textSecondary, fontSize: 13, lineHeight: 1.7, fontStyle: "italic", margin: "0 0 14px", padding: "12px 14px", background: parchment, borderRadius: radius }}>{p.note}</p>}
                {p.link && <Link to={p.link.to} style={{ color: copper, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>{p.link.text}</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOD SECTION */}
      <section style={{ ...sectionPad, background: hero, color: ivory }}>
        <div style={container}>
          <div style={{ ...tag(copper), display: "inline-block", border: `1px solid ${copper}`, padding: "4px 10px", borderRadius: 4, marginBottom: 14 }}>Important · Houston-Specific</div>
          <h2 style={h2Style(ivory)}>Flood Risk. Every Houston Buyer Needs to Understand This.</h2>
          <p style={subStyle("rgba(250,248,244,0.8)")}>This is not a scare section. It's the conversation every honest Houston mortgage broker should have before you go under contract.</p>
          <div className="hou-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {floodItems.map((t, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: radius, padding: 22 }}>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, color: copper, fontSize: 16, marginBottom: 8 }}>{t.badge}</div>
                <p style={{ color: "rgba(250,248,244,0.85)", lineHeight: 1.7, fontSize: 14, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR CALLOUT */}
      <section style={{ ...sectionPad, background: copperLight }}>
        <div style={container}>
          <div style={{ background: white, border: `1px solid ${border}`, borderRadius: radius, padding: 36 }}>
            <div style={tag()}>Run Your Numbers</div>
            <h2 style={h2Style(textOnPale)}>Model Your Full Houston Payment — Including MUD and Flood Insurance</h2>
            <p style={subStyle(textOnPale)}>
              The Texas Payment Calculator models your full PITI at any Houston-area price point. Enter your specific effective property tax rate — not just the Harris County base rate — to account for any MUD overlay. Budget flood insurance as a line item before you go under contract. The VA Loan Calculator shows your zero-down payment with the funding fee built in.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/calculators" className="hou-btn" style={{ background: copper, color: white, padding: "12px 22px", borderRadius: radius, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>Texas Payment Calculator →</Link>
              <Link to="/calculators" className="hou-btn" style={{ background: navy, color: white, padding: "12px 22px", borderRadius: radius, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>VA Loan Calculator →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEXAS-SPECIFIC */}
      <section style={{ ...sectionPad, background: soft }}>
        <div style={container}>
          <div style={tag()}>Texas-Specific</div>
          <h2 style={h2Style()}>Houston Details That Affect Your Real Monthly Payment</h2>
          <p style={subStyle()}>Harris County has some of the highest property tax rates in Texas. Flood insurance can add hundreds per month. Know the full number before you sign anything.</p>
          <div className="hou-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {texasItems.map((t, i) => (
              <div key={i} style={{ background: white, border: `1px solid ${border}`, borderRadius: radius, padding: 22 }}>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, color: navy, fontSize: 16, marginBottom: 8 }}>{t.badge}</div>
                <p style={{ color: textSecondary, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...sectionPad, background: ivory }}>
        <div style={container}>
          <div style={tag()}>Frequently Asked</div>
          <h2 style={h2Style()}>What Houston Buyers Ask Us Most</h2>
          <div style={{ marginTop: 20 }}>
            {faqs.map((f, i) => (
              <details key={i} className="hou-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ ...sectionPad, background: hero, color: ivory, textAlign: "center" }}>
        <div style={{ ...container, maxWidth: 760 }}>
          <div style={{ width: 64, height: 64, borderRadius: 999, background: copper, color: white, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 22, marginBottom: 16 }}>SS</div>
          <h2 style={{ ...h2Style(ivory), textAlign: "center" }}>Shalanda Smith</h2>
          <div style={{ fontSize: 13, opacity: 0.75, marginBottom: 18, fontFamily: "'Fira Mono', monospace" }}>NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · Licensed in Texas</div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(250,248,244,0.85)", marginBottom: 24 }}>
            Relocating to the Texas Medical Center? Buying in Katy or Sugar Land for the schools? Using your VA benefit in the Houston metro? Tell me where you're going and your timeline. We'll run your real numbers — PITI, flood insurance, MUD overlay — before you make an offer.
          </p>
          <div className="hou-hero-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
            <a className="hou-btn" href={apply} target="_blank" rel="noreferrer" style={{ background: copper, color: white, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Get Pre-Approved</a>
            <a className="hou-btn" href={calendly} target="_blank" rel="noreferrer" style={{ background: "transparent", color: ivory, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15, border: `1px solid ${ivory}` }}>Book a Strategy Call</a>
          </div>
          <div style={{ fontSize: 14, opacity: 0.8 }}>Or call/text: 254-935-9331</div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section style={{ background: "#0f1722", color: "rgba(250,248,244,0.6)", padding: "32px 0" }}>
        <div style={container}>
          <p style={{ fontSize: 12, lineHeight: 1.7, margin: "0 0 16px" }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. Flood zone information is approximate — verify at msc.fema.gov and harriscountyfemt.org before making purchasing decisions. Flood insurance requirements and premium estimates subject to change under FEMA Risk Rating 2.0 and MAAPNext map updates. Property tax rates including MUD overlays vary by address — verify with your county appraisal district. Market data approximate and subject to change.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 12 }}>
            <Link to="/physician-loan-texas" style={{ color: copper, textDecoration: "none" }}>Physician Loans</Link>
            <Link to="/va-loan-texas" style={{ color: copper, textDecoration: "none" }}>VA Loans Texas</Link>
            <Link to="/down-payment-assistance-texas" style={{ color: copper, textDecoration: "none" }}>Down Payment Assistance</Link>
            <Link to="/conventional-loan-texas" style={{ color: copper, textDecoration: "none" }}>Conventional Loans</Link>
            <a href={calendly} target="_blank" rel="noreferrer" style={{ color: copper, textDecoration: "none" }}>Schedule a Call</a>
            <a href={apply} target="_blank" rel="noreferrer" style={{ color: copper, textDecoration: "none" }}>Apply Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HoustonMortgage;
