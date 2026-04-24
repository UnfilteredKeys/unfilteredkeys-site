import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

function useAustinSEO() {
  useEffect(() => {
    document.title = "Mortgage Broker Austin TX – Live Music Capital Home Loans | Keys by Shalanda";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Austin TX mortgage broker — VA, FHA, physician, jumbo, and conventional loans. Down 18-20% from 2022 peak. Buyers have the best leverage in a decade. Tarrytown to Kyle. Whole Foods started here.");
    setMeta("og:title", "Mortgage Broker Austin TX | Keys by Shalanda", true);
    setMeta("og:description", "Buying in Austin? Dell was born in a UT dorm room. Whole Foods opened in 1980 and survived a flood. The market is down 18-20% from peak. Best buyer leverage since 2012.", true);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://shalandasmith.com/austin-tx-mortgage");
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
  { v: "~$550K", l: "City of Austin Median · 2026" },
  { v: "Down 18–20%", l: "From 2022 Peak" },
  { v: "250+", l: "Live Music Venues" },
  { v: "Silicon Hills", l: "Born Here — Dell, Whole Foods, Indeed" },
];

const heroBadges = ["VA · FHA · Conventional · DPA", "Physician Loans", "Jumbo & Non-QM", "Travis & Hays Counties", "ADU Income Programs", "21-Day Avg Close", "50+ Lender Network"];

const marketStats = [
  { label: "City of Austin Median", value: "~$550K", note: "Down 6.8% year over year · April 2026", valueColor: white },
  { label: "Metro Median", value: "~$426K", note: "Travis + Williamson + Hays counties", valueColor: white },
  { label: "Avg Days on Market", value: "~85 days", note: "Best buyer leverage since 2012", valueColor: copper },
];

const countyCompare = [
  { county: "Travis County", cities: "Austin, Lakeway, West Lake Hills, Bee Cave", median: "~$550K", note: "Most expensive · most resilient · urban core" },
  { county: "Williamson County", cities: "Round Rock, Georgetown, Cedar Park, Leander", median: "~$390K", note: "Fastest growing · strong ISD options" },
  { county: "Hays County", cities: "Kyle, Buda, San Marcos, Dripping Springs", median: "~$325K", note: "Most affordable · most buyer leverage" },
];

const buyerLeverage = ["$5,000–$15,000+ seller closing cost concessions", "Rate buydowns funded by seller", "Price reductions from original list (92.8% close-to-list)", "Inspection repairs without resistance", "Extended option periods for thorough due diligence", "Builder incentives in suburbs — some at 2.99% buydown rates"];
const holdingNeighborhoods = ["Zilker / Barton Hills — park permanence protects value", "SoCo — character irreplaceable by new development", "Mueller — supply constrained by design", "East Austin core — appreciation trajectory strong", "Hyde Park — historic stock, limited new supply"];

const cultureCards = [
  { icon: copper, label: "Live music — 250+ venues", body: "Austin was named Live Music Capital of the World in 1991 by the City Council — but the claim started in 1985 when a Chamber staffer counted 70+ venues on a Monday night. The Broken Spoke has been open since 1964. Willie Nelson played every venue in town. SXSW started in 1987 as a small regional showcase. Austin City Limits on PBS has broadcast live music from this city since 1974 — the longest-running music TV program ever made." },
  { icon: "#185FA5", label: "Silicon Hills — 5,500+ tech companies", body: "Dell in a dorm room. Whole Foods in a house. Indeed (founded 2004, Austin's first unicorn exit at $1B). HomeAway/Vrbo (founded 2005, acquired by Expedia for $3.9B). Bumble (founded 2014 by Whitney Wolfe Herd, went public at multi-billion valuation). Apple North Austin campus. Tesla Gigafactory. Oracle, Google, Meta, Amazon. The University of Texas produces 50,000 students and feeds the pipeline." },
  { icon: "#3B6D11", label: "Barton Springs & outdoor life", body: "Barton Springs Pool is a spring-fed swimming hole in a 350-acre park that holds 68 degrees year-round — people swim here in December. The Barton Creek Greenbelt has 12+ miles of hiking and swimming holes. Lady Bird Lake hike-and-bike trail wraps 10+ miles around a lake in the middle of downtown. Deep Eddy Pool, opened 1936, is the oldest swimming pool in Texas. Austin's outdoor access is real and irreplaceable." },
  { icon: "#534AB7", label: "Breakfast tacos and food trucks", body: "Austin pioneered the food truck culture that spread across America. The breakfast taco — papas, egg, and cheese in a flour tortilla from a trailer — is non-negotiable Austinite behavior before 9am. Juan in a Million on East Cesar Chavez has been serving the Don Juan taco since 1980. Veracruz All Natural started as a trailer and became a James Beard semifinalist. The culture is not a performance for visitors. It's how people eat." },
];

const neighborhoods = [
  { name: "Tarrytown", price: "$900K–$3M+", tag: "Old money Austin · Governor Pease estate origins · Lake Austin access", desc: "Tarrytown was carved from Governor Elisha Pease's 365-acre estate — the same land designed by master builder Abner Cook who also built the Texas Governor's Mansion. The first phase opened in 1934. Quiet, tree-lined streets, Lake Austin boat access, and proximity to Deep Eddy Pool give it a character that no amount of new construction can replicate. West Austin's most established address. The price reflects 90 years of consistent desirability." },
  { name: "Allandale", price: "$700K–$1.1M", tag: "1950s mid-century · Shoal Creek · large lots · McCallum HS", desc: "Allandale was platted in 1946 on land from an 1841 land grant awarded for service at the Battle of San Jacinto. The Davis family cemetery — a Texas Historical Cemetery — sits within its borders. Mid-century ranch homes on wide lots along Shoal Creek, mature live oaks and pecans, and a neighborhood character built over 75 years of civic engagement. Part of Allandale was the site of the National Association of Home Builders' famous 1954 Air Conditioned Village experiment — proving home air conditioning was viable for the American middle class. Authentic Central Austin without paying the Tarrytown premium." },
  { name: "Bouldin Creek", price: "$700K–$1.5M+", tag: "78704 · Greetings from Austin mural · oldest neighborhood · peacocks", desc: "Bouldin Creek was one of Austin's first residential neighborhoods, developed in the early 1900s on land south of the river that flooded frequently — making it affordable enough for formerly enslaved families and immigrant communities who built churches and businesses here after emancipation. The Texas School for the Deaf, established 1856, occupies 65 acres within the neighborhood. Today: craftsman bungalows, the iconic 'Greetings from Austin' mural, Elizabeth Street Cafe, the Bouldin Creek Cafe, and a population of resident peacocks near Green Pastures that has been a neighborhood fixture for decades. The 78704 zip code is the most sought-after south-of-the-river address." },
  { name: "South Congress (SoCo)", price: "$750K–$1.3M+", tag: "Iconic · food trucks · boutiques · Ann Richards Bridge bat colony", desc: "South Congress is the neighborhood people put on Austin postcards. The Ann Richards Congress Avenue Bridge hosts 1.5 million Mexican free-tailed bats — the largest urban bat colony in North America. Vintage shops, food trucks, hotel rooftops, and Zilker Park within walking distance. SoCo commands a premium because the character is irreplaceable — no master-planned development can manufacture what 100 years of quirky South Austin accumulation has built. The Continental Club has been open since 1957." },
  { name: "East Austin", price: "$500K–$950K", tag: "Transformation district · Victory Grill heritage · murals · craft breweries", desc: "East Austin's Black Eastside music history runs deep — the Victory Grill, Charlie's Playhouse, and the Chitlin' Circuit venues hosted Duke Ellington, B.B. King, Ike and Tina Turner, and Ray Charles before integration. Today East Austin is craft breweries next to decades-old taquerias, murals on every block, James Beard-nominated restaurants, and a creative energy that hasn't been fully absorbed by the price run-up. Still the most active appreciation trajectory of any Austin neighborhood. The 'Greetings from Austin' mural and the mural at 9th and Comal are permanent markers of a neighborhood that refuses to fully gentrify." },
  { name: "Hyde Park", price: "$600K–$1.1M", tag: "Austin's first suburb 1891 · Victorian homes · UT adjacent · mature oaks", desc: "Austin's first planned suburb, established in 1891. Victorian-era homes, craftsman bungalows, and mid-century ranches under century-old live oaks. Walking distance to the University of Texas and Shipe Pool. Hyde Park has maintained its architectural character through every Austin growth cycle — the housing stock is genuinely historic and the tree canopy cannot be replicated. Fonda San Miguel has been serving Mexican interior regional cooking in Hyde Park since 1975." },
  { name: "Mueller", price: "$600K–$950K", tag: "Former airport · LEED certified · farmer's market · families", desc: "Mueller was built on the site of Austin's Robert Mueller Municipal Airport — the runways are now walking trails and the old terminal is a farmer's market and event venue. LEED-certified homes, walkable streets with a commercial district, community pools, and a design ethos that prioritized sustainability before it was fashionable. Popular with families who want urban walkability. Dell Medical School at UT is within close reach." },
  { name: "Kyle & Buda", price: "$300K–$400K", tag: "Hays County · most affordable Austin metro · I-35 corridor", desc: "Kyle and Buda are the most affordable cities in the Austin metro with real volume — Kyle's median is $325,000 in 2026, down from a $390,000 peak. Hays CISD schools are strong. Tesla's Gigafactory sits just north of Kyle, creating employment demand independent of the Austin tech cycle. Buda hosts the Fajita Festival and the Buda County Fair — a small-town character that survives despite 40,000+ residents. For first-time buyers and DPA-eligible buyers, the Hays County corridor is where the Austin metro makes the most financial sense in 2026." },
  { name: "The Domain & North Austin Tech Corridor", price: "$350K–$650K", tag: "Apple campus · North Austin tech jobs · Q2 Stadium · suburban amenities", desc: "Apple's Austin campus anchors the Parmer Lane corridor with thousands of employees. The Domain has grown into a walkable mixed-use district with restaurants, retail, and Q2 Stadium (Austin FC). For buyers who work in North Austin and don't want a daily downtown commute, this corridor offers newer construction, better freeway access, and more square footage per dollar than the central neighborhoods. Google, Amazon, and Meta all have significant North Austin presence." },
];

const programs = [
  { title: "Conventional", badgeColor: navy, items: ["3% to 20% down payment", "PMI removable at 20% equity — no lifetime premium like FHA", "620 minimum credit score, best pricing at 740+", "HomeReady and Home Possible: 3% down at or below 80% AMI"], note: "Austin's central neighborhoods ($550K–$1M+) make conventional the primary program for most buyers. Strong fit for tech professionals with W-2 income and equity from a California or Northeast sale.", link: { to: "/conventional-loan-texas", text: "Conventional Loan Details →" } },
  { title: "Physician Loans", badgeColor: copper, items: ["No down payment required up to $1.5M", "No PMI regardless of down payment amount", "Student loan debt excluded or IBR payment used for DTI", "Available to MDs, DOs, DMDs, DVMs — and in some programs NPs and PAs"], note: "Dell Medical School at UT, St. David's HealthCare, Ascension Seton, UT Health Austin, and Baylor Scott & White Austin all drive physician relocation. Austin's price range makes zero-down physician programs especially valuable — the down payment on a $700,000 Bouldin Creek home is real money not to spend.", link: { to: "/physician-loan-texas", text: "Physician Loan Details →" } },
  { title: "VA Loans", badgeColor: "#185FA5", items: ["Zero down payment for eligible veterans, active duty, and surviving spouses", "No PMI — ever", "Travis County VA loan limit $832,750 — covers the metro median with room to spare", "Full-entitlement buyers can purchase above $832,750 with no VA-imposed ceiling"], note: "Austin's buyer-favoring market has made VA offers more competitive — sellers accepting VA loans routinely now with homes sitting 85+ days. With the correction, VA buyers are in their best position in years.", link: { to: "/va-loan-texas", text: "VA Loan Details →" } },
  { title: "FHA + Down Payment Assistance", badgeColor: "#2a7a7a", items: ["3.5% down with 580+ credit score", "TDHCA My First Texas Home (620 min) and TSAHC Homes for Texas Heroes (620 min — nurses, teachers, first responders)", "SETH 5 Star (640 min) and SETH GoldStar (620 min) — available in Travis and Hays counties", "Chenoa Fund (600 min) for buyers with thinner credit profiles"], note: "FHA loan limits in Travis County are $524,225 for 2026 — covering North Austin edges and most of Kyle, Buda, and the Hays County corridor. DPA programs are most effective in the $300K to $500K range, which points toward the Austin suburbs rather than the city core.", link: { to: "/down-payment-assistance-texas", text: "All DPA Programs →" } },
  { title: "Jumbo", badgeColor: "#534AB7", items: ["Loan amounts above $832,750 conventional limit", "Primary residences, second homes, and investment properties", "Competitive rates — the jumbo-to-conforming spread has narrowed significantly", "Bank statement and asset depletion programs for founders, executives, and self-employed tech professionals"], note: "Tarrytown, Zilker, Barton Hills, West Lake Hills, and Bouldin Creek upper tier routinely require jumbo financing. Austin's startup culture creates significant self-employed buyer demand — bank statement programs for buyers with strong cash flow but complex tax returns.", link: null as null | { to: string; text: string } },
];

const texasItems = [
  { badge: "Travis County property taxes", body: "Travis County effective property tax rates run approximately 1.8% to 2.2% of assessed value. On a $550,000 Austin home that adds $825 to $1,008 per month — a number that surprises most California transplants who underestimate how much property taxes offset the no-state-income-tax advantage in the first years of ownership. Always model PITI, not just principal and interest." },
  { badge: "No state income tax — the math matters", body: "Texas has no state income tax. For tech professionals relocating from California, New York, or Washington state, this is a genuine advantage — $15,000 to $40,000+ per year in after-tax income at senior tech salary levels. That advantage partially offsets Austin's higher property taxes and compounds into real money over a long ownership horizon. It's a reason Austin's in-migration has not stopped despite the correction." },
  { badge: "Homestead exemption", body: "Texas reduces your taxable home value by $100,000 for your primary residence. File with Travis County Appraisal District in the year you close — it does not happen automatically. On a $550,000 Austin home at a 2.0% effective rate, this saves approximately $2,000 per year. File in the year you close or you forfeit that year's savings." },
  { badge: "VA disability exemption", body: "A 100% service-connected disability rating qualifies you for a complete property tax exemption on your Texas primary residence. On a $550,000 Austin home at a 2.0% effective rate, this saves approximately $11,000 per year. File with Travis County Appraisal District after closing using your VA award letter." },
  { badge: "ADU opportunity — Austin's land use reform", body: "Austin's progressive land-use reforms have made it significantly easier to add Accessory Dwelling Units — backyard cottages, garage apartments — to most residential lots. For buyers who purchase a home with an ADU-eligible lot, rental income from a secondary unit can materially change the affordability equation. We help buyers understand how existing ADU income factors into loan qualification — and how to structure financing on properties with approved ADU plans." },
  { badge: "Hays County taxes vs. Travis County", body: "Hays County (Kyle, Buda, San Marcos) effective property tax rates run approximately 2.1% to 2.5% — somewhat higher than Travis County base rates in some areas due to MUD districts and rapid infrastructure investment. On a $325,000 Kyle home this adds $569 to $677 per month. The lower purchase price more than compensates, but factor the effective tax rate — not just the purchase price — into your Hays County payment model." },
  { badge: "Option period", body: "Texas contracts include a 5 to 10 day option period during which you can exit for any reason and keep your earnest money. With Austin homes sitting 85 days and sellers offering concessions, use it for a thorough inspection and negotiate on findings. In this market, the option period is leverage — use it fully." },
];

const faqs = [
  { q: "What major companies were actually born in Austin?", a: "More than most people realize. Dell Computer — Michael Dell started it in his University of Texas freshman dorm room in 1984 with $1,000 in startup capital. It became the largest personal computer company in the world. Whole Foods Market — John Mackey, a UT dropout, opened Safer Way Natural Foods in 1978 on the first floor of a house where he lived upstairs, then merged with Clarksville Natural Grocery to open the first Whole Foods on September 20, 1980. The store flooded in 1981, lost $400,000 in uninsured inventory, and survived anyway. Today it's a global chain. Indeed — the world's largest job search engine, founded in Austin in 2004, Austin's first unicorn exit. HomeAway (now Vrbo) — founded in Austin in 2005, acquired by Expedia for $3.9 billion. Bumble — the dating app founded by Whitney Wolfe Herd in Austin in 2014, went public in 2021 at a multi-billion dollar valuation. Silicon Hills is not a nickname. It's earned." },
  { q: "Is Austin's correction a crash or a buying opportunity?", a: "A correction — and for buyers with a 3+ year timeline, the best opportunity since 2012. The City of Austin median is down 18% to 20% from the 2022 peak. On a per-square-foot basis, the correction is 21% to 25% from the April 2022 high, distributed over four years. Homes are sitting 85 days. Sellers are offering $5,000 to $15,000+ in concessions. Correctly priced homes in sought-after neighborhoods still move — sometimes with competition. The underlying fundamentals — UT Austin, state capital, tech employment, music identity, in-migration — have not changed. Austin did not become a bad city. It became a city where sellers are finally negotiating." },
  { q: "What is the 'Keep Austin Weird' history?", a: "The slogan originated in 2000 when Austin musician Red Wassenich called in to a local radio station and said 'Keep Austin Weird' in response to a fundraiser question. It was adopted by Waterloo Records and other independent businesses as a rallying call against chain retail pressure — 'Keep Austin Weird' was explicitly about supporting local businesses, not just being eccentric. Bumper stickers appeared. It became the city's unofficial motto. The weirdness that earned the phrase exists in specific places and institutions that have survived the growth cycles: the Broken Spoke dance hall (1964), Waterloo Records (1982), Barton Springs, Deep Eddy Pool, the Alamo Drafthouse, the Continental Club. These are not tourist attractions. They're infrastructure." },
  { q: "What neighborhood should I look at in South Austin?", a: "South Austin's identity is anchored by the 78704 zip code — Bouldin Creek, SoCo, Travis Heights, and Zilker. Bouldin Creek is Austin's oldest neighborhood with the deepest roots — the Texas School for the Deaf has been there since 1856, the neighborhood was home to formerly enslaved families after emancipation, and the peacocks near Green Pastures have been wandering the streets for generations. SoCo is the iconic strip. Zilker has the park. Travis Heights has Victorian homes on the east side of South Congress. For buyers who want south-of-the-river Austin character, Bouldin Creek and Travis Heights give you more history per dollar than SoCo proper." },
  { q: "What is Allandale and why do people love it?", a: "Allandale is mid-century Austin at its best — ranch homes and bungalows developed starting in 1946 along Shoal Creek, on large lots with mature live oaks and pecans, in a neighborhood that has one of the most active civic associations in the city. The Davis family cemetery (a Texas Historical Cemetery) sits inside the neighborhood boundaries on land that was granted in 1841 by the President of the Republic of Texas. Part of Allandale was the site of the 1954 National Air Conditioned Village experiment — the study that proved central air conditioning was viable for middle-class homes. McCallum High School. Gullett Elementary. Beverly Sheffield Northwest District Park with a 50-meter pool. Burnet Road restaurants. It's authentically Austin in a way that newer construction neighborhoods can't manufacture." },
  { q: "Are Kyle and Buda actually worth considering?", a: "For first-time buyers and DPA-eligible buyers in 2026, absolutely. Kyle's median is $325,000 — the most affordable city in the Austin metro with real volume. Hays CISD schools are strong. Tesla's Gigafactory is just north of Kyle, creating employment demand independent of the Austin tech cycle. Buda has maintained genuine small-town character despite rapid growth — the Fajita Festival, the County Fair, a historic downtown. The commute to central Austin is 30 to 40 minutes on I-35 in normal traffic. For buyers who start their Austin search and hit the price wall, the Hays County corridor is where the math stops being theoretical." },
  { q: "Can I actually afford Austin on a tech salary?", a: "Depends on the salary and the neighborhood. A dual-income tech household at $200,000 combined can qualify for $700,000 to $800,000 at current rates — covering East Austin, Mueller, North Austin, and parts of the south central corridor. A single income at $130,000 is harder in the city proper and often leads to the suburbs where the same North Austin commute costs $150,000 to $200,000 less. Physician loan buyers at Dell Medical or Ascension Seton can get into Zilker or Bouldin Creek at zero down. We model all scenarios before you decide what you're actually shopping for." },
  { q: "Should I buy in Austin now or wait?", a: "No one can time the bottom — but the current indicators favor buyers who have a 3+ year time horizon. Prices are down 18% to 20% from peak. Sellers are offering concessions. Homes are sitting 85 days. Builder incentives in Kyle, Buda, and Leander are at multi-year highs. The long-term fundamentals — UT Austin, state capital, tech employment, no state income tax, music identity, in-migration — are intact. If your life has you in Austin for 3+ years and the PITI works, the case for waiting is psychological, not financial. If you need out in 18 months, renting is the smarter call." },
];

const AustinMortgage = () => {
  useAustinSEO();

  return (
    <>
      <SEO {...(seoMeta as any).austinMortgage} />
      <style>{`
        .atx-btn:hover { opacity: 0.92; }
        .atx-faq summary {
          cursor: pointer; list-style: none; padding: 18px 0;
          font-family: 'Lora', serif; font-size: 18px; font-weight: 600;
          color: ${navy}; display: flex; justify-content: space-between;
          align-items: center; gap: 16px;
        }
        .atx-faq summary::after { content: "+"; color: ${copper}; font-size: 24px; font-weight: 300; }
        .atx-faq[open] summary::after { content: "−"; }
        .atx-faq p { padding: 0 0 18px; color: ${textSecondary}; line-height: 1.7; margin: 0; font-size: 15px; }
        .atx-faq { border-bottom: 1px solid ${border}; }
        @media (max-width: 900px) {
          .atx-hero h1 { font-size: 30px !important; }
          .atx-hero-btns { flex-direction: column; }
          .atx-2col { grid-template-columns: 1fr !important; }
          .atx-3col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: hero, color: ivory, padding: "96px 0 80px" }} className="atx-hero">
        <div style={container}>
          <div style={tag(copper)}>Austin, TX · Travis County · Live Music Capital of the World · Silicon Hills</div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, fontWeight: 700, lineHeight: 1.15, margin: "0 0 18px", color: ivory }}>
            Buying a Home in Austin, TX. <span style={{ color: copper }}>Dell. Whole Foods. Barton Springs. The Broken Spoke. And a Market That's Down 18–20% From Peak.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 820, color: "rgba(250,248,244,0.85)", marginBottom: 28 }}>
            Austin is the Live Music Capital of the World, a state capital, and the city where Michael Dell started a computer company in a dorm room and John Mackey opened Whole Foods in a house and both changed their industries forever. The city's identity runs 150 years deep — Tarrytown, Bouldin Creek, Hyde Park, Allandale, East Austin. The market overshot by 50% during the pandemic. It's correcting. Buyers have more leverage right now than at any point since 2012.
          </p>
          <div className="atx-hero-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <a className="atx-btn" href={apply} target="_blank" rel="noreferrer" style={{ background: copper, color: white, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Get Pre-Approved</a>
            <a className="atx-btn" href={calendly} target="_blank" rel="noreferrer" style={{ background: "transparent", color: ivory, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15, border: `1px solid ${ivory}` }}>Book a Strategy Call</a>
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
          <div className="atx-3col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center", color: white }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: "1px" }}>{s.v}</div>
                <div style={{ fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", opacity: 0.9, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUSTIN STORY */}
      <section style={{ ...sectionPad, background: parchment }}>
        <div style={container}>
          <div style={tag()}>What Austin Actually Is</div>
          <h2 style={h2Style()}>The City That Built Dell in a Dorm Room and Whole Foods Survived a Flood</h2>
          <p style={subStyle()}>
            In 1984, a University of Texas freshman named Michael Dell started a computer company with $1,000 in startup capital in his dorm room at Dobie Center. He got kicked out of his dorm for storing parts and moved into an apartment with three roommates who helped him build and sell computers. Dell Technologies became the largest personal computer company in the world and moved its headquarters 15 miles north to Round Rock in 1996, where it still employs 13,000 people in the metro area. Austin had already earned the nickname "Silicon Hills" a decade before that — IBM opened in Austin in 1967, Texas Instruments in 1969, and the Microelectronics and Computer Technology Corporation in 1983 brought the tech consortium that made Austin a magnet for semiconductor and software companies.
          </p>
          <p style={subStyle()}>
            Six years before Dell, John Mackey — a 25-year-old UT dropout who had "had the natural foods conversion" — borrowed $45,000 from family and friends to open Safer Way Natural Foods in 1978 in a house on Lamar, where he lived on the third floor. In 1980 he merged with Craig Weller's Clarksville Natural Grocery to open the first Whole Foods Market — 12,500 square feet with 19 employees — on Lamar Boulevard. In May 1981, the Memorial Day flood hit. The store was submerged, sewage forced through the pipes, inventory destroyed, looters came through, and Mackey waded through dark water to retrieve whatever cash remained in the safe. They didn't have flood insurance. The Austin community showed up — vendors extended credit, customers paid in advance, neighbors helped rebuild. Whole Foods reopened. It became the global chain that Amazon bought for $13.7 billion in 2017. The headquarters remains in Austin.
          </p>
          <div className="atx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, marginTop: 24 }}>
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
          <div style={tag(copper)}>2026 Market — The Honest Version</div>
          <h2 style={h2Style(ivory)}>Austin Overshot. It's Correcting. Here's What That Means for Buyers Right Now.</h2>
          <p style={subStyle("rgba(250,248,244,0.8)")}>Down 18–20% from peak. 85 days on market. Sellers offering concessions. The floor is close. The long-term fundamentals never changed.</p>
          <div className="atx-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 28 }}>
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
              <strong style={{ color: copper }}>What happened and where the market stands:</strong> Austin home prices jumped 50%+ between 2020 and 2022 driven by remote work migration, low interest rates, and speculative buying. The Fed raised rates, return-to-office eroded some demand, and overpriced inventory began accumulating. The City of Austin median has corrected from $590,000 to $550,000 — down 6.8% year over year. On a per-square-foot basis, the correction is 21% to 25% from April 2022 highs. Sellers are offering $5,000 to $15,000+ in concessions. Correctly priced homes in sought-after neighborhoods still move. The underlying Austin — UT, state capital, Silicon Hills, Barton Springs, 250+ live music venues — did not go anywhere. The city overshot on price. It is finding its floor.
            </p>
          </div>
          <div className="atx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: radius, padding: 22 }}>
              <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, color: copper, fontSize: 16, marginBottom: 12 }}>What buyers can negotiate right now</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {buyerLeverage.map((b, i) => (
                  <li key={i} style={{ color: "rgba(250,248,244,0.85)", lineHeight: 1.7, fontSize: 14, marginBottom: 6, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: copper }}>›</span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: radius, padding: 22 }}>
              <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, color: copper, fontSize: 16, marginBottom: 12 }}>Neighborhoods holding best through correction</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {holdingNeighborhoods.map((b, i) => (
                  <li key={i} style={{ color: "rgba(250,248,244,0.85)", lineHeight: 1.7, fontSize: 14, marginBottom: 6, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: copper }}>›</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTY COMPARISON */}
      <section style={{ ...sectionPad, background: parchment }}>
        <div style={container}>
          <div style={tag()}>Three Counties · One Metro</div>
          <h2 style={h2Style()}>Travis vs. Williamson vs. Hays — Where the Math Works</h2>
          <p style={subStyle()}>The Austin metro spans three counties with materially different price points and tax structures. The right county for you depends on your purchase price, employer location, and program eligibility.</p>
          <div className="atx-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {countyCompare.map((c) => (
              <div key={c.county} style={{ background: white, border: `1px solid ${border}`, borderRadius: radius, padding: 24 }}>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, color: navy, fontSize: 18, marginBottom: 8 }}>{c.county}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, color: copper, letterSpacing: "1px" }}>{c.median}</div>
                <div style={{ fontSize: 13, color: textSecondary, marginTop: 8, marginBottom: 12, lineHeight: 1.6 }}>{c.note}</div>
                <div style={{ fontSize: 12, color: textSecondary, fontFamily: "'Fira Mono', monospace", borderTop: `1px solid ${border}`, paddingTop: 10 }}>{c.cities}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section style={{ ...sectionPad, background: ivory }}>
        <div style={container}>
          <div style={tag()}>Know the Area</div>
          <h2 style={h2Style()}>Austin Neighborhoods — From Tarrytown to Kyle</h2>
          <p style={subStyle()}>
            Austin's neighborhoods have 150 years of distinct history behind them. Where you live shapes your daily experience — the food trailer you stop at, the pool you swim in, the music you hear on Tuesday nights through an open bar door. Here's the honest breakdown, from the oldest established neighborhoods to the most affordable suburbs.
          </p>
          <div className="atx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
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
          <h2 style={h2Style(textOnPale)}>Loan Programs for Austin Buyers</h2>
          <p style={subStyle(textOnPale)}>
            Dell Medical physician relocating. Tech professional with California equity. First-time buyer in Kyle targeting Hays CISD. Veteran finally buying after years of renting. The right program depends on your file.
          </p>
          <div className="atx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
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
            <h2 style={h2Style(textOnPale)}>Model Your Full Austin Payment Before You Fall in Love With a House</h2>
            <p style={subStyle(textOnPale)}>
              The Texas Payment Calculator models your full PITI at any Austin price point — including Travis County property taxes. The VA Loan Calculator shows your zero-down payment with the funding fee built in. For Kyle and Buda buyers, plug in Hays County's effective rate. Run the numbers before you tour a single home.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/calculators" className="atx-btn" style={{ background: copper, color: white, padding: "12px 22px", borderRadius: radius, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>Texas Payment Calculator →</Link>
              <Link to="/calculators" className="atx-btn" style={{ background: navy, color: white, padding: "12px 22px", borderRadius: radius, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>VA Loan Calculator →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEXAS-SPECIFIC */}
      <section style={{ ...sectionPad, background: soft }}>
        <div style={container}>
          <div style={tag()}>Texas-Specific</div>
          <h2 style={h2Style()}>Austin Details That Affect Your Real Monthly Payment</h2>
          <p style={subStyle()}>No state income tax helps. Travis County property taxes are among the highest in Texas. Homestead exemption helps back. Know all of it before you model a budget.</p>
          <div className="atx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
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
          <h2 style={h2Style()}>What Austin Buyers Ask Us Most</h2>
          <div style={{ marginTop: 20 }}>
            {faqs.map((f, i) => (
              <details key={i} className="atx-faq">
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
            Targeting Bouldin Creek? Relocating for Dell Medical? First-time buyer looking at Kyle or Buda? Tell me your situation and your target. We'll run your real PITI — Travis or Hays County tax rate, program, honest case for buying in 2026 — before you fall in love with a house.
          </p>
          <div className="atx-hero-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
            <a className="atx-btn" href={apply} target="_blank" rel="noreferrer" style={{ background: copper, color: white, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>Get Pre-Approved</a>
            <a className="atx-btn" href={calendly} target="_blank" rel="noreferrer" style={{ background: "transparent", color: ivory, padding: "14px 26px", borderRadius: radius, fontWeight: 600, textDecoration: "none", fontSize: 15, border: `1px solid ${ivory}` }}>Book a Strategy Call</a>
          </div>
          <div style={{ fontSize: 14, opacity: 0.8 }}>Or call/text: 254-935-9331</div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section style={{ background: "#0f1722", color: "rgba(250,248,244,0.6)", padding: "32px 0" }}>
        <div style={container}>
          <p style={{ fontSize: 12, lineHeight: 1.7, margin: "0 0 16px" }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. Market data approximate and subject to change. Travis and Hays County property tax rates vary by address — verify the specific rate before relying on payment estimates. FHA loan limits subject to annual adjustment by HUD. Down payment assistance program availability and credit score minimums subject to program rules in effect at time of application.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 12 }}>
            <Link to="/physician-loan-texas" style={{ color: copper, textDecoration: "none" }}>Physician Loans</Link>
            <Link to="/va-loan-texas" style={{ color: copper, textDecoration: "none" }}>VA Loans Texas</Link>
            <Link to="/down-payment-assistance-texas" style={{ color: copper, textDecoration: "none" }}>Down Payment Assistance</Link>
            <Link to="/round-rock-tx-mortgage" style={{ color: copper, textDecoration: "none" }}>Round Rock</Link>
            <Link to="/georgetown-tx-mortgage" style={{ color: copper, textDecoration: "none" }}>Georgetown</Link>
            <a href={calendly} target="_blank" rel="noreferrer" style={{ color: copper, textDecoration: "none" }}>Schedule a Call</a>
            <a href={apply} target="_blank" rel="noreferrer" style={{ color: copper, textDecoration: "none" }}>Apply Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AustinMortgage;
