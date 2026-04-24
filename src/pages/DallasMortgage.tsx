import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

function useDallasSEO() {
  useEffect(() => {
    document.title = "Mortgage Broker Dallas TX – DFW Home Loans | VA, Physician & Conventional | Keys by Shalanda";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Dallas TX mortgage broker — VA, FHA, physician, jumbo, and conventional loans across DFW. Deep Ellum to Frisco. Inner Loop to the suburbs. We know the market.");
    setMeta("og:title", "Mortgage Broker Dallas TX – DFW | Keys by Shalanda", true);
    setMeta("og:description", "Buying in Dallas-Fort Worth? Inner neighborhoods holding strong. Outer suburbs correcting. VA, FHA, physician, and conventional programs across the entire metroplex.", true);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://shalandasmith.com/dallas-tx-mortgage");
  }, []);
}

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
const container: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };
const tag = (c = copper): React.CSSProperties => ({ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: c, fontFamily: "'Fira Mono', monospace", marginBottom: 12, fontWeight: 600 });
const h2Style = (c = textPrimary): React.CSSProperties => ({ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700, color: c, lineHeight: 1.25, marginBottom: 14 });
const subStyle = (c = textSecondary): React.CSSProperties => ({ fontSize: 16, color: c, lineHeight: 1.7, maxWidth: 760, marginBottom: 32 });
const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply = "https://scl.my1003app.com/554554/register";

const stats = [
  { v: "~$425K", l: "DFW Metro Median · 2026" },
  { v: "23", l: "Fortune 500 Companies in DFW" },
  { v: "4th", l: "Largest US Metro Area" },
  { v: "Silicon Prairie", l: "Tech & Finance Capital of the South" },
];

const heroBadges = ["Dallas & Fort Worth Specialist", "VA · FHA · Conventional · DPA", "Physician Loans", "Jumbo & Non-QM", "Dallas & Collin County", "21-Day Avg Close", "50+ Lender Network"];

const marketStats = [
  { label: "DFW Metro Median", value: "~$425K", note: "Inner Dallas holding · suburbs correcting", valueColor: white },
  { label: "Avg Days on Market", value: "~45 days", note: "Balanced · buyers have leverage", valueColor: white },
  { label: "VA Loan Limit", value: "$832,750", note: "Dallas County · zero down below this", valueColor: copper },
];

const innerHolding = ["Bishop Arts / Oak Cliff — supply constrained", "Lakewood — historic stock, limited inventory", "Uptown — consistent professional demand", "Deep Ellum / East Dallas — creative influx continuing", "Knox-Henderson — proximity premium holding"];
const outerCorrecting = ["Plano — down 5–10% from 2025 peak", "Frisco — down 2.4%, still premium pricing", "McKinney outer corridors — new construction pressure", "Prosper / Celina — heavy supply overhang", "Allen — correcting but strong ISD demand base"];

const cultureCards = [
  { icon: copper, label: "Dallas Arts District", body: "Largest urban arts district in the United States. 68 acres, 19 blocks, 13+ venues. Dallas Museum of Art (free permanent collection), Nasher Sculpture Center, Meyerson Symphony Center, Winspear Opera House. Three Pritzker Prize-winning architects. Klyde Warren Park caps the Woodall Rogers Freeway at the district's southern edge." },
  { icon: navy, label: "Deep Ellum & music heritage", body: "Texas blues and jazz were born here in the 1920s. Blind Lemon Jefferson played these streets. The creative DNA has never left — warehouse lofts, street murals, live music every night, the independent restaurant scene, and the emerging East Dallas neighborhoods adjacent to the district offer craftsman bungalows at below-Lakewood pricing." },
  { icon: "#534AB7", label: "Silicon Prairie — 23 Fortune 500s", body: "AT&T, Southwest Airlines, Texas Instruments, ExxonMobil, Toyota USA (Plano), JPMorgan Chase (Plano), and 17 more Fortune 500 companies call DFW home. The 4th largest concentration in the United States. UT Southwestern Medical Center, Baylor Scott & White, and Texas Health Resources anchor the healthcare employment base." },
  { icon: "#3B6D11", label: "Fort Worth — Where the West Begins", body: "The Stockyards National Historic District runs twice-daily cattle drives. The Kimbell Art Museum, Modern Art Museum of Fort Worth, and Amon Carter Museum of American Art form one of the most concentrated museum corridors in the country — all within walking distance in the Cultural District. Genuinely undervalued by buyers who conflate it with Dallas." },
];

const neighborhoods = [
  { name: "Uptown", price: "$400K–$900K+", tag: "Young professionals · walkable · Katy Trail access", desc: "Uptown is Dallas's most walkable urban neighborhood — high-rise luxury apartments, townhomes, a dense restaurant and bar corridor along McKinney Avenue, and direct access to the 3.5-mile Katy Trail. Klyde Warren Park sits at the southern edge, bridging Uptown to the Arts District. DART rail access. Popular with young professionals relocating from coastal metros who want urban density at Texas pricing. Condos and townhomes dominate over single-family." },
  { name: "Deep Ellum", price: "$280K–$600K", tag: "Birthplace of Texas blues · music · murals · lofts", desc: "Deep Ellum is where Dallas blues and jazz were born in the 1920s — and the creative energy never left. Warehouse lofts, industrial conversions, street murals on every block, live music venues including Trees and The Factory, and one of the best independent restaurant scenes in the city. East Dallas historic neighborhoods (Lakewood Heights, Junius Heights) offer craftsman bungalows adjacent to Deep Ellum's energy. For buyers who want Austin's creative vibe at Dallas pricing, this is the answer." },
  { name: "Bishop Arts District", price: "$275K–$550K", tag: "Oak Cliff · 60+ independent shops · walkable · most affordable inner district", desc: "Bishop Arts is the most eclectic and community-oriented walkable neighborhood in Dallas — 60+ independent restaurants, galleries, vintage shops, and coffee houses in the historic Oak Cliff area south of downtown. The most affordable of Dallas's inner walkable districts. 10 minutes to downtown. Murals, alleyways, the Kessler Theater, and genuine neighborhood identity that no master-planned suburb can manufacture. The area is still appreciating as word continues to spread." },
  { name: "Lakewood", price: "$500K–$1.2M+", tag: "Historic homes · White Rock Lake · families · Lakewood Elementary", desc: "Lakewood is Dallas's premier family neighborhood — historic 1920s and 1930s homes surrounding White Rock Lake, Lakewood Elementary (one of the few DISD campuses that attracts families who could afford private school), and a genuine neighborhood character built over 100 years. Tighter inventory than comparable suburbs. For families who want inner Dallas character, proximity to downtown, and a school they can believe in, Lakewood is the answer." },
  { name: "Plano", price: "$400K–$650K", tag: "Top schools · correcting · major employers · Collin County", desc: "Plano has been one of the most desirable suburbs in North Texas for decades — Plano ISD, Legacy West corporate campus (Toyota USA, Liberty Mutual, JPMorgan Chase), and a self-contained suburban lifestyle. Home values dropped 5% to 10% from 2025 peak as overbuilding in the outer suburbs catches up. That correction creates real buyer opportunity for a market with strong long-term fundamentals. Verify the specific school campus — not all Plano ISD campuses are equal." },
  { name: "Frisco", price: "$500K–$800K+", tag: "Premium suburb · correcting from peak · Frisco ISD", desc: "Frisco grew faster than almost any city in America and prices reflect it — $620,000 median as of early 2026 and down 2.4% from prior year as the overbuilding correction works through. Frisco ISD is strong. The Star (Dallas Cowboys HQ), Toyota Stadium (FC Dallas), PGA headquarters, and corporate campuses make Frisco a genuine employment and lifestyle destination. For buyers with a long time horizon willing to buy during the correction, this is a different conversation than 2022." },
  { name: "McKinney", price: "$380K–$600K", tag: "Historic square · balanced market · Collin County", desc: "McKinney offers something Frisco and Plano cannot — a genuine historic downtown square with a Main Street character that predates the suburban boom. Victorian and craftsman homes near the square, newer master-planned communities on the edges. McKinney ISD. The outer new construction corridors are seeing the same correction pressure as Frisco and Prosper, but the historic core is holding better. One of the most distinctive personalities of any DFW suburb." },
  { name: "Fort Worth", price: "$280K–$500K", tag: "Where the West Begins · Stockyards · distinct identity", desc: "Fort Worth is not a Dallas suburb — it is its own city with its own identity. 'Where the West Begins.' The Stockyards National Historic District hosts daily cattle drives, rodeos, and the White Elephant Saloon. The Cultural District houses the Kimbell Art Museum, the Amon Carter Museum of American Art, and the Modern Art Museum of Fort Worth — three world-class institutions within walking distance of each other. Fort Worth ISD and surrounding districts. More affordable than comparable Dallas neighborhoods and underrated by buyers who conflate the two cities." },
  { name: "Allen & Prosper", price: "$400K–$650K", tag: "New construction · Allen ISD · outer suburb correction", desc: "Allen and Prosper sit north of Plano and McKinney in Collin County and have absorbed massive new construction volume since 2020. Allen ISD is strong. Prosper ISD is growing fast. Both are seeing the correction that comes from oversupply — more homes, longer days on market, price reductions. For buyers who want new construction in a top school district and have a 5+ year time horizon, the current pricing creates entry opportunities that didn't exist in 2022." },
];

const programs = [
  { title: "Conventional", badgeColor: navy, items: ["3% to 20% down payment", "PMI removable at 20% equity", "620 minimum credit score, best pricing at 740+", "HomeReady and Home Possible: 3% down at or below 80% AMI"], note: "DFW's price range spans from Bishop Arts condos at $280K to Frisco estates at $800K+. Conventional is the workhorse program across most of that range — especially for buyers with strong credit and equity from a prior home.", link: { to: "/conventional-loan-texas", text: "Conventional Loan Details →" } },
  { title: "VA Loans", badgeColor: copper, items: ["Zero down payment for eligible veterans, active duty, and surviving spouses", "No PMI — ever", "Dallas County VA loan limit $832,750 — covers most DFW price points below the Frisco luxury tier", "Full-entitlement buyers have no VA-imposed ceiling above $832,750"], note: "Naval Air Station Fort Worth Joint Reserve Base is in Fort Worth. Dyess AFB is 175 miles west in Abilene. DFW has a significant veteran and military retiree population. Texas Veterans Land Board (VLB) programs available as a complement.", link: { to: "/va-loan-texas", text: "VA Loan Details →" } },
  { title: "FHA + Down Payment Assistance", badgeColor: "#2a7a7a", items: ["3.5% down with 580+ credit score", "TDHCA My First Texas Home (620 min) and TSAHC Homes for Texas Heroes (620 min — nurses, teachers, first responders)", "SETH 5 Star (640 min) and SETH GoldStar (620 min) — both available in Dallas and Collin counties", "Chenoa Fund (600 min) for thinner credit profiles"], note: "DFW's entry-level markets — parts of Fort Worth, southern Dallas, Garland, Mesquite — are within FHA limits and DPA coverage. Teachers in DISD and FWISD qualify for TSAHC Homes for Texas Heroes.", link: { to: "/down-payment-assistance-texas", text: "All DPA Programs →" } },
  { title: "Physician Loans", badgeColor: copper, items: ["No down payment required up to $1.5M", "No PMI regardless of down payment amount", "Student loan debt excluded or IBR payment used for DTI", "Available to MDs, DOs, DMDs, DVMs — and in some programs NPs and PAs"], note: "UT Southwestern Medical Center, Baylor Scott & White Dallas, Texas Health Resources, and Baylor University Medical Center all drive physician relocation into DFW. 1-day-out-of-residency programs available.", link: { to: "/physician-loan-texas", text: "Physician Loan Details →" } },
  { title: "Jumbo & Non-QM", badgeColor: "#534AB7", items: ["Loan amounts above $832,750 conventional limit", "Bank statement programs for self-employed buyers — finance professionals, entrepreneurs, energy executives", "DSCR investor loans based on rental income, not personal income", "Asset depletion programs for retirees and high-net-worth buyers"], note: "Highland Park, Preston Hollow, Southlake, and Frisco luxury segments routinely require jumbo financing. DFW's concentration of finance and tech executives creates consistent non-QM demand.", link: null as null | { to: string; text: string } },
];

const texasItems = [
  { badge: "Dallas County property taxes", body: "Dallas County effective property tax rates typically run 2.0% to 2.5% of assessed value — among the highest in Texas. On a $425,000 DFW home that adds $708 to $885 per month. Collin County (Plano, Frisco, McKinney, Allen) rates are similar. Tarrant County (Fort Worth, Arlington) runs slightly lower at approximately 1.9% to 2.3%. Always get the specific effective rate for any address — the headline county rate is not the number that goes into your escrow." },
  { badge: "Highland Park & University Park — separate cities, different rates", body: "Highland Park and University Park are independent cities entirely surrounded by Dallas — commonly called the 'Park Cities.' They have their own separate tax rates, school districts (Highland Park ISD — consistently one of the top-rated in Texas), and governance structures. HPISD addresses command a significant premium over adjacent DISD addresses. If an address is near the Knox-Henderson or Knox-Yale corridor, verify whether it falls in HPISD or DISD before you buy." },
  { badge: "Homestead exemption", body: "Texas reduces your taxable home value by $100,000 for your primary residence. File with your county appraisal district — Dallas County, Collin County, or Tarrant County depending on your location — in the year you close. Does not apply automatically. On a $425,000 DFW home at a 2.2% effective rate, this saves approximately $2,200 per year." },
  { badge: "VA disability exemption", body: "A 100% service-connected disability rating qualifies you for a complete property tax exemption on your Texas primary residence. On a $425,000 DFW home at a 2.2% effective rate, this saves approximately $9,350 per year. File with your county appraisal district after closing using your VA award letter." },
  { badge: "The suburb correction — know your zip code", body: "DFW's outer suburbs — Frisco, Prosper, Celina, McKinney outer corridors — overbought and overbuilt during the 2020 to 2022 rate cycle. Home values in Plano dropped 5% to 10% from peak. Frisco is down 2.4%. Inner Dallas neighborhoods with supply constraints are holding better. The market is not one thing. A buyer in Bishop Arts is in a completely different market than a buyer in a new Celina subdivision. Know your specific zip code before you model anything." },
  { badge: "Option period", body: "Texas contracts include a 5 to 10 day option period during which you can exit for any reason and keep your earnest money. In a market where 68%+ of listings are taking price reductions, the option period is your leverage point — use it for inspection and to renegotiate based on findings. Never waive it." },
];

const faqs = [
  { q: "What makes Dallas different from Fort Worth?", a: "Dallas is the finance, technology, and cosmopolitan city. It hosts 23 Fortune 500 companies, the largest contiguous urban arts district in the United States, Deep Ellum's music and arts scene, Uptown's walkable high-rise living, and a skyline that communicates ambition. Fort Worth is genuinely its own city — 'Where the West Begins,' as Amon Carter put it. The Stockyards National Historic District runs daily cattle drives. The Kimbell Art Museum is one of the finest small art museums in the world. The Modern Art Museum and Amon Carter Museum of American Art sit within walking distance. Fort Worth feels more grounded, more Texan, and is consistently undervalued by buyers who conflate the two cities." },
  { q: "Is the DFW housing market correcting or crashing?", a: "Correcting in the outer suburbs — not crashing. Frisco, Plano, McKinney, and similar Collin County cities overbought and overbuilt during the 2020 to 2022 rate cycle. Plano home values dropped 5% to 10% from peak. Frisco is down 2.4%. This is normalization, not collapse. Inner Dallas neighborhoods with genuine supply constraints — Lakewood, Bishop Arts, the Heights corridor in Oak Cliff — are holding significantly better. The market is hyper-local in DFW. Your zip code matters more than the metro headline number." },
  { q: "What is the largest urban arts district in the United States?", a: "Dallas. The Dallas Arts District is 68 acres across 19 contiguous blocks — the largest contiguous urban arts district in the country. The Dallas Museum of Art (free general admission to the permanent collection), the Nasher Sculpture Center designed by Renzo Piano, the Crow Museum of Asian Art, the Meyerson Symphony Center designed by I.M. Pei, the Winspear Opera House, and Klyde Warren Park are all here. Three Pritzker Prize-winning architects have buildings in the district. This is world-class cultural infrastructure in a city most people still underestimate." },
  { q: "What is Deep Ellum and why does it matter for buyers?", a: "Deep Ellum is where Texas blues and jazz were born in the 1920s — the neighborhood east of downtown where Blind Lemon Jefferson and other pioneering artists played the clubs. The creative DNA never left. Today it's warehouse lofts, street murals, live music venues, independent restaurants, and breweries. The adjacent East Dallas historic neighborhoods — Lakewood Heights, Junius Heights, Peak's Suburban Addition — offer craftsman bungalows at price points below the Lakewood premium. For buyers who want Austin's creative culture at Dallas pricing, Deep Ellum and East Dallas is the answer." },
  { q: "Should I buy in Dallas proper or in the suburbs?", a: "Depends entirely on what you're optimizing for. Inner Dallas — Bishop Arts, Uptown, Deep Ellum, Lakewood — offers walkability, character, shorter commutes to the Central Business District, and supply constraints that protect value. The trade-off is price and, in some areas, school district. The suburbs — Plano, Frisco, McKinney, Allen — offer top school districts, more square footage, new construction, and master-planned amenities. The trade-off is longer commutes, higher sensitivity to interest rate cycles, and the current correction working through outer Collin County. Neither is wrong. They're genuinely different products for different life stages and priorities." },
  { q: "Is Highland Park ISD actually worth the premium?", a: "Highland Park ISD consistently ranks among the top school districts in Texas and the United States. The premium is real and persistent — HP ISD addresses command $100,000 to $300,000+ above comparable DISD addresses in the Knox-Henderson area. Whether that premium is worth it depends on your stage of life and how long you plan to stay. For families with multiple school-age children in a long-term purchase, the case is strong. For buyers without school-age children or with a short time horizon, the math is harder to justify." },
  { q: "Can I use a VA loan in DFW?", a: "Yes. Dallas County VA loan limit is $832,750 — covering most DFW price points outside the Highland Park and Frisco luxury tiers. Full-entitlement buyers have no VA-imposed ceiling above $832,750. Fort Worth has a significant veteran population — Naval Air Station Fort Worth Joint Reserve Base is active. Texas Veterans Land Board programs are also available as a complement to federal VA benefits." },
  { q: "What's the commute picture in DFW?", a: "DFW is a car-dependent metro by design — the Metroplex covers over 9,000 square miles. DART (Dallas Area Rapid Transit) light rail serves downtown Dallas, Plano, Garland, and a handful of suburban nodes, but most DFW residents drive. Peak commute times on I-35, US-75, and the Dallas North Tollway are real. Before you buy, drive your potential commute at rush hour — not on a Saturday. The difference between a 20-minute and 55-minute daily commute in DFW is often the difference between a neighborhood that looks good on paper and one that actually works for your life." },
];

const DallasMortgage = () => {
  useDallasSEO();

  return (
    <>
      <SEO {...(seoMeta as any).dallasMortgage} />
      <style>{`
        .dal-btn:hover { opacity: 0.92; }
        .dal-faq summary {
          cursor: pointer; list-style: none; padding: 18px 0;
          font-family: 'Lora', serif; font-size: 18px; font-weight: 600;
          color: ${navy}; display: flex; justify-content: space-between;
          align-items: center; gap: 16px;
        }
        .dal-faq summary::after { content: "+"; color: ${copper}; font-size: 24px; font-weight: 300; }
        .dal-faq[open] summary::after { content: "−"; }
        .dal-faq p { padding: 0 0 18px; color: ${textSecondary}; line-height: 1.7; margin: 0; font-size: 15px; }
        .dal-faq { border-bottom: 1px solid ${border}; }
        @media (max-width: 900px) {
          .dal-hero h1 { font-size: 30px !important; }
          .dal-hero-btns { flex-direction: column; }
          .dal-2col { grid-template-columns: 1fr !important; }
          .dal-3col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: hero, color: ivory, padding: "96px 0 80px" }} className="dal-hero">
        <div style={container}>
          <div style={tag(copper)}>Dallas–Fort Worth · 4th Largest US Metro · Silicon Prairie · 23 Fortune 500 Companies</div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, fontWeight: 700, lineHeight: 1.15, margin: "0 0 18px", color: ivory }}>
            Buying a Home in Dallas–Fort Worth. <span style={{ color: copper }}>The Largest Urban Arts District in America. Deep Ellum. The Stockyards. And a Market That Just Got Honest.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 820, color: "rgba(250,248,244,0.85)", marginBottom: 28 }}>
            DFW is the fourth-largest metro in America and home to 23 Fortune 500 companies. Dallas has the largest contiguous urban arts district in the country, a music district born in the 1920s, and walkable inner neighborhoods that rival any major city. Fort Worth is genuinely its own thing. The outer suburbs are correcting from 2022 overbuilding. The inner neighborhoods are holding. Your zip code matters more than the headline number right now.
          </p>
          <div className="dal-hero-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <a className="dal-btn" href={apply} target="_blank" rel="noreferrer" style={{ background: copper, color: white, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Get Pre-Approved</a>
            <a className="dal-btn" href={calendly} target="_blank" rel="noreferrer" style={{ background: "transparent", color: ivory, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15, border: `1px solid ${ivory}` }}>Book a Strategy Call</a>
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
          <div className="dal-3col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center", color: white }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: "1px" }}>{s.v}</div>
                <div style={{ fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", opacity: 0.9, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DALLAS STORY */}
      <section style={{ ...sectionPad, background: parchment }}>
        <div style={container}>
          <div style={tag()}>Two Cities. One Metroplex. Completely Different Identities.</div>
          <h2 style={h2Style()}>Dallas Is the Arts District. Fort Worth Is the Stockyards. Neither Is a Suburb.</h2>
          <p style={subStyle()}>
            Dallas grew from cotton and railroads into finance, telecommunications, and technology. It is "Silicon Prairie" — AT&T, Texas Instruments, Southwest Airlines, Toyota USA, JPMorgan Chase, and 23 Fortune 500 companies in total call the DFW Metroplex home. The Dallas Arts District is 68 acres, 19 contiguous blocks, and the largest urban arts district in the United States — the Dallas Museum of Art, the Nasher Sculpture Center (Renzo Piano), the Meyerson Symphony Center (I.M. Pei), and three other buildings by Pritzker Prize-winning architects, all within walking distance of each other. Deep Ellum is where Texas blues and jazz were born in the 1920s and still pulse tonight. Klyde Warren Park was built over a freeway and turned 5.2 acres of concrete into the city's living room.
          </p>
          <p style={subStyle()}>
            Fort Worth is not a Dallas suburb with a different name. It has its own identity, its own economy, its own cultural institutions, and its own history. Amon Carter — the Fort Worth civic leader and art collector who built the Amon Carter Museum — famously brought his own lunch when he had to visit Dallas rather than spend money there. The Kimbell Art Museum is one of the finest small art museums in the world. The Fort Worth Stockyards runs twice-daily cattle drives that have happened every day for decades. 'Where the West Begins' is not a marketing slogan — it's an accurate description of where the Texas Hill Country and the Southern Plains meet, and where Fort Worth's identity was forged. Buyers who equate the two cities leave money on the table.
          </p>
          <div className="dal-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, marginTop: 24 }}>
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
          <div style={tag(copper)}>2026 Market Reality</div>
          <h2 style={h2Style(ivory)}>Inner Dallas Is Holding. Outer Suburbs Are Correcting. Know the Difference.</h2>
          <p style={subStyle("rgba(250,248,244,0.8)")}>DFW overbought and overbuilt during 2020 to 2022. The correction is real but not uniform. Where you buy determines what market you're actually in.</p>
          <div className="dal-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 28 }}>
            {marketStats.map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: radius, padding: 22 }}>
                <div style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", opacity: 0.7, marginBottom: 10 }}>{s.label}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: s.valueColor }}>{s.value}</div>
                <div style={{ fontSize: 13, opacity: 0.8, marginTop: 8 }}>{s.note}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(181,98,30,0.1)", border: `1px solid ${copper}`, borderRadius: radius, padding: 22, marginBottom: 28 }}>
            <p style={{ margin: 0, color: ivory, lineHeight: 1.7, fontSize: 15 }}>
              The correction is real — and it's not uniform. <strong style={{ color: copper }}>Plano home values dropped 5% to 10% from peak. Frisco is down 2.4%.</strong> McKinney outer corridors, Prosper, and Celina are all working through oversupply from 2020 to 2022 overbuilding. Inner Dallas neighborhoods with genuine supply constraints — Bishop Arts, Lakewood, the Heights corridor in Oak Cliff — are holding significantly better. A buyer in Lakewood and a buyer in a new Celina subdivision are in fundamentally different markets, even though they're both in DFW.
            </p>
          </div>
          <div className="dal-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: radius, padding: 22 }}>
              <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, color: copper, fontSize: 16, marginBottom: 12 }}>Inner neighborhoods — holding</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {innerHolding.map((b, i) => (
                  <li key={i} style={{ color: "rgba(250,248,244,0.85)", lineHeight: 1.7, fontSize: 14, marginBottom: 6, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: copper }}>›</span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: radius, padding: 22 }}>
              <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, color: copper, fontSize: 16, marginBottom: 12 }}>Outer suburbs — correcting from peak</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {outerCorrecting.map((b, i) => (
                  <li key={i} style={{ color: "rgba(250,248,244,0.85)", lineHeight: 1.7, fontSize: 14, marginBottom: 6, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: copper }}>›</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section style={{ ...sectionPad, background: ivory }}>
        <div style={container}>
          <div style={tag()}>Know the Area</div>
          <h2 style={h2Style()}>Dallas–Fort Worth Neighborhoods — Inner Loop to Outer Suburbs</h2>
          <p style={subStyle()}>
            DFW covers over 9,000 square miles. The neighborhood decision here is more consequential than in most Texas metros — school districts, commute corridors, market conditions, and character vary dramatically across a range that spans walkable urban bungalows to 5,000-square-foot master-planned suburban homes.
          </p>
          <div className="dal-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
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
          <h2 style={h2Style(textOnPale)}>Loan Programs for DFW Buyers</h2>
          <p style={subStyle(textOnPale)}>
            UT Southwestern physician. Fort Worth veteran. First-time buyer in East Dallas. Finance professional in Uptown. Move-up buyer in Plano with equity from a prior home. The right program depends on your file.
          </p>
          <div className="dal-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
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

      {/* CALCULATOR CALLOUT */}
      <section style={{ ...sectionPad, background: copperLight }}>
        <div style={container}>
          <div style={{ background: white, border: `1px solid ${border}`, borderRadius: radius, padding: 36 }}>
            <div style={tag()}>Run Your Numbers</div>
            <h2 style={h2Style(textOnPale)}>Model Your Full DFW Payment — PITI, Not Just Principal & Interest</h2>
            <p style={subStyle(textOnPale)}>
              The Texas Payment Calculator models your full PITI at any DFW price point — plug in your specific county tax rate for Dallas, Collin, or Tarrant County. The VA Loan Calculator shows your zero-down payment with the funding fee built in.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/calculators" className="dal-btn" style={{ background: copper, color: white, padding: "12px 22px", borderRadius: radius, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>Texas Payment Calculator →</Link>
              <Link to="/calculators" className="dal-btn" style={{ background: navy, color: white, padding: "12px 22px", borderRadius: radius, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>VA Loan Calculator →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEXAS-SPECIFIC */}
      <section style={{ ...sectionPad, background: soft }}>
        <div style={container}>
          <div style={tag()}>Texas-Specific</div>
          <h2 style={h2Style()}>DFW Details That Affect Your Real Monthly Payment</h2>
          <p style={subStyle()}>Dallas and Collin County have some of the highest property tax rates in Texas. Know the specific effective rate at your address before you model a payment.</p>
          <div className="dal-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
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
          <h2 style={h2Style()}>What DFW Buyers Ask Us Most</h2>
          <div style={{ marginTop: 20 }}>
            {faqs.map((f, i) => (
              <details key={i} className="dal-faq">
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
            Relocating to DFW for a Fortune 500? Buying in a correcting suburb with a long time horizon? Targeting a Deep Ellum loft or a Lakewood bungalow? Tell me your situation and your target neighborhood. We'll run your real numbers — including the specific county tax rate — before you make an offer.
          </p>
          <div className="dal-hero-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
            <a className="dal-btn" href={apply} target="_blank" rel="noreferrer" style={{ background: copper, color: white, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Get Pre-Approved</a>
            <a className="dal-btn" href={calendly} target="_blank" rel="noreferrer" style={{ background: "transparent", color: ivory, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15, border: `1px solid ${ivory}` }}>Book a Strategy Call</a>
          </div>
          <div style={{ fontSize: 14, opacity: 0.8 }}>Or call/text: 254-935-9331</div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section style={{ background: "#0f1722", color: "rgba(250,248,244,0.6)", padding: "32px 0" }}>
        <div style={container}>
          <p style={{ fontSize: 12, lineHeight: 1.7, margin: "0 0 16px" }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. Market data approximate and subject to change. Property tax rates vary by address and taxing entity — verify the specific rate before relying on payment estimates. Down payment assistance program availability and credit score minimums subject to program rules in effect at time of application.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 12 }}>
            <Link to="/va-loan-texas" style={{ color: copper, textDecoration: "none" }}>VA Loans Texas</Link>
            <Link to="/physician-loan-texas" style={{ color: copper, textDecoration: "none" }}>Physician Loans</Link>
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

export default DallasMortgage;
