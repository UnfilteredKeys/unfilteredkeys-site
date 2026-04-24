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
    setMeta("description", "Austin TX mortgage broker — VA, FHA, physician, jumbo, and conventional loans. Down 18-20% from 2022 peak. Buyers have the best leverage in a decade. SoCo, East Austin, Mueller, and suburbs served.");
    setMeta("og:title", "Mortgage Broker Austin TX | Keys by Shalanda", true);
    setMeta("og:description", "Buying in Austin? The market is down 18-20% from 2022 peak and buyers have real leverage. VA, FHA, physician, and conventional loans. Live Music Capital of the World.", true);
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
  { v: "~$426K", l: "Metro Median · 2026" },
  { v: "Down 18–20%", l: "From 2022 Peak" },
  { v: "250+", l: "Live Music Venues" },
];

const heroBadges = ["VA · FHA · Conventional · DPA", "Physician Loans", "Jumbo & Non-QM", "Travis & Williamson Counties", "ADU Income Programs", "21-Day Avg Close", "50+ Lender Network"];

const marketStats = [
  { label: "City of Austin Median", value: "~$550K", note: "Down 6.8% year over year · April 2026", valueColor: white },
  { label: "Metro Median", value: "~$426K", note: "Travis + surrounding counties", valueColor: white },
  { label: "Avg Days on Market", value: "~85 days", note: "Best buyer leverage since 2012", valueColor: copper },
];

const buyerLeverage = ["$5,000–$15,000+ seller closing cost concessions", "Rate buydowns funded by seller", "Price reductions from original list (92.8% close-to-list)", "Inspection repairs without resistance", "Extended option periods for thorough due diligence", "Builder incentives in suburbs — some at 2.99% buydown rates"];
const holdingNeighborhoods = ["Zilker / Barton Hills — park permanence protects value", "SoCo — character irreplaceable by new development", "Mueller — supply constrained by design", "East Austin core — appreciation trajectory strong", "Hyde Park — historic stock, limited new supply"];

const cultureCards = [
  { icon: copper, label: "Live music & culture", body: "250+ live music venues. SXSW every March. Austin City Limits Festival every October. The Broken Spoke. Stubb's Amphitheater. 6th Street on a Friday night. Rainey Street for cocktails and conversation. The PBS Austin City Limits show — broadcasting live music from this city since 1974. The music is not a tourist attraction. It's infrastructure." },
  { icon: "#185FA5", label: "Tech & state capital economy", body: "Apple Austin campus (Parmer Lane). Tesla Gigafactory (east of city). Oracle HQ relocated from California. Dell in Round Rock. Amazon, Google, Meta presence throughout. UT Austin — 50,000 students, 20+ colleges, Dell Medical School. Texas state government employs tens of thousands in Austin proper. The economy is genuinely diversified — not pure tech." },
  { icon: "#3B6D11", label: "Outdoors & Barton Springs", body: "Barton Springs Pool — a spring-fed swimming hole that holds 68 degrees year-round in a 350-acre park within the city. Barton Creek Greenbelt: 12+ miles of hiking and swimming holes. Lady Bird Lake hike-and-bike trail: 10+ miles around the downtown lake. Kayaking, paddleboarding, and rowing on a lake in the middle of the city. Austin's outdoor access is an underrated competitive advantage for quality of life." },
  { icon: "#534AB7", label: "Food trucks & breakfast tacos", body: "Austin pioneered the food truck culture that has now spread across the country. South Congress, East 6th, and dozens of other corridors still host food truck parks with James Beard-nominated chefs operating out of trailers. Breakfast tacos are the unofficial city breakfast — papas, eggs, cheese in a flour tortilla, from a trailer, before 9am. This is non-negotiable Austinite behavior." },
];

const neighborhoods = [
  { name: "South Congress (SoCo)", price: "$700K–$1.2M+", tag: "Iconic · walkable · boutiques · food trucks · ACL Festival", desc: "South Congress Avenue is the most photographed street in Austin — vintage stores, food trucks, hotel bars with rooftop views of the skyline, and the Ann Richards Congress Avenue Bridge with its summer bat colony. SoCo is the neighborhood people put on postcards. It's also the most expensive central corridor. Zilker Park and Barton Springs Pool are walking distance. Commands a significant premium because the character cannot be replicated by new development." },
  { name: "East Austin", price: "$500K–$900K", tag: "Transformation complete · craft breweries · murals · still appreciating", desc: "East Austin spent a decade transforming from an overlooked historically working-class neighborhood into one of the most desirable addresses in the city. Craft breweries, coffee roasters, taquerias that have been there for 40 years next to new restaurants with James Beard nominations, murals on every block. Still more affordable than SoCo or Zilker with stronger appreciation trajectory. The historically Black East Side music venues — the Victory Grill, the Chitlin' Circuit legacy — give this neighborhood cultural depth no other Austin address can claim." },
  { name: "Zilker", price: "$750K–$1.5M+", tag: "350-acre park · Barton Springs · families · ACL festival grounds", desc: "Zilker anchors its identity around one of the best urban parks in America — 350 acres, Barton Springs Pool (a spring-fed swimming hole that holds 68 degrees year-round), Barton Creek Greenbelt hiking, and the Austin City Limits Festival grounds. Residential streets are quiet and tree-lined despite being minutes from downtown. The price reflects the permanence of the park as a guaranteed amenity that no development can touch." },
  { name: "Mueller", price: "$600K–$900K", tag: "Master-planned · sustainable · families · walkable", desc: "Mueller was built on the site of Austin's former Robert Mueller Municipal Airport — the runways are now walking trails and the old terminal is a farmer's market. LEED-certified homes, walkable streets, mixed commercial, a community pool, and access to Dell Medical School. Popular with families who want urban walkability without paying SoCo prices. Georgetown and AISD school access. One of Austin's most thoughtfully designed neighborhoods." },
  { name: "Hyde Park", price: "$550K–$900K", tag: "Historic · UT adjacent · bungalows · mature trees", desc: "Austin's first planned suburb, established in 1891. Victorian-era homes, craftsman bungalows, and mid-century ranch homes on quiet streets with century-old live oaks. Walking distance to the University of Texas. The neighborhood has maintained its character through every Austin growth cycle because the housing stock is genuinely historic and the tree canopy is irreplaceable. For buyers who want Austin character — not just Austin proximity." },
  { name: "Rainey Street", price: "$450K–$750K", tag: "Bungalow bars · Lady Bird Lake access · nightlife · condos", desc: "Rainey Street started as a row of Victorian bungalows on the south end of downtown. The bungalows were converted into bars. High-rise condos went up around them. The result is genuinely unusual — downtown density mixed with bungalow neighborhood texture and direct access to the Lady Bird Lake hike-and-bike trail. Condos dominate the buyer market here. For buyers who want to be within walking distance of downtown without paying downtown prices." },
  { name: "The Domain & North Austin", price: "$350K–$600K", tag: "Apple campus · tech corridor · shopping · suburban amenities", desc: "North Austin's tech corridor runs along Parmer Lane and the Domain — Apple's Austin campus anchors the area with thousands of employees. The Domain shopping center has grown into a walkable mixed-use district with restaurants, retail, and Q2 Stadium (Austin FC). For buyers who work in North Austin and don't want a daily commute downtown, this corridor offers newer construction, easier freeway access, and more square footage per dollar than central Austin." },
  { name: "Round Rock, Cedar Park & Georgetown", price: "$360K–$480K", tag: "Williamson County · 20–30 min from Austin · significant savings", desc: "The Williamson County cities north of Austin — Round Rock, Cedar Park, Leander, Georgetown — offer $150,000 to $200,000 less per comparable home with the same Williamson County tax base and commute times that work for North Austin employers. Many buyers who start their search inside Austin city limits end up here when the numbers hit them. We serve all of Williamson County and have dedicated pages for each of these markets." },
];

const programs = [
  { title: "Conventional", badgeColor: navy, items: ["3% to 20% down payment", "PMI removable at 20% equity", "620 minimum credit score, best pricing at 740+", "HomeReady and Home Possible: 3% down at or below 80% AMI"], note: "Austin's price range — $400K to $1M+ in central neighborhoods — makes conventional the primary program for most buyers here. Strong fit for tech professionals with W-2 income and equity from a California or Northeast home sale.", link: { to: "/conventional-loan-texas", text: "Conventional Loan Details →" } },
  { title: "Physician Loans", badgeColor: copper, items: ["No down payment required up to $1.5M", "No PMI regardless of down payment amount", "Student loan debt excluded or IBR payment used for DTI", "Available to MDs, DOs, DMDs, DVMs — and in some programs NPs and PAs"], note: "Dell Medical School, St. David's HealthCare, Ascension Seton, UT Health Austin, and Baylor Scott & White Austin all drive physician relocation. Austin's price range makes physician loan zero-down programs especially valuable here — the down payment on a $700,000 SoCo home is real money to not spend.", link: { to: "/physician-loan-texas", text: "Physician Loan Details →" } },
  { title: "VA Loans", badgeColor: "#185FA5", items: ["Zero down payment for eligible veterans, active duty, and surviving spouses", "No PMI — ever", "Travis County VA loan limit $832,750 — covers the metro median with room to spare", "Full-entitlement buyers can finance above $832,750 with no VA-imposed ceiling"], note: "Austin has a growing veteran community. VA loans are highly competitive in Austin's current buyer-favorable market — sellers who used to hesitate on VA offers are now accepting them routinely with homes sitting 85+ days.", link: { to: "/va-loan-texas", text: "VA Loan Details →" } },
  { title: "FHA + Down Payment Assistance", badgeColor: "#2a7a7a", items: ["3.5% down with 580+ credit score", "TDHCA My First Texas Home (620 min) and TSAHC Homes for Texas Heroes (620 min — nurses, teachers, first responders)", "SETH 5 Star (640 min) and SETH GoldStar (620 min) — available in Travis and Williamson counties", "Chenoa Fund (600 min) for buyers with thinner credit profiles"], note: "FHA's loan limits in Travis County cap out at $524,225 for 2026 — which prices out much of central Austin but covers North Austin, East Austin edges, and most of the suburbs. DPA programs are most effective in the $350K to $500K range, which means the Austin suburbs are often a better DPA market than the city itself.", link: { to: "/down-payment-assistance-texas", text: "All DPA Programs →" } },
  { title: "Jumbo", badgeColor: "#534AB7", items: ["Loan amounts above $832,750 conventional limit", "Available for primary residences, second homes, and investment properties", "Competitive rates — the spread between jumbo and conforming has narrowed significantly", "Bank statement and asset depletion programs for self-employed tech founders and executives"], note: "Zilker, SoCo, Barton Hills, West Lake Hills, and Tarrytown routinely require jumbo financing. Austin's tech and startup economy generates significant self-employed buyer demand — bank statement programs are available for buyers with strong cash flow but complex tax returns.", link: null as null | { to: string; text: string } },
];

const texasItems = [
  { badge: "Travis County property taxes — know the full number", body: "Travis County effective property tax rates run approximately 1.8% to 2.2% of assessed value depending on the specific taxing entities at your address. On a $550,000 City of Austin home that adds $825 to $1,008 per month in property taxes alone. This is the number that surprises buyers most when they see a full PITI quote. Many buyers relocating from California are surprised because Texas's no-state-income-tax advantage is partially offset by property tax rates that are among the highest in the country." },
  { badge: "No state income tax — the math matters", body: "Texas has no state income tax. For tech professionals and executives relocating from California, New York, or Washington state, this is a genuine financial advantage that can equal $15,000 to $40,000+ per year in after-tax income at tech sector salary levels. That advantage partially offsets Austin's higher property taxes and meaningfully improves long-term affordability compared to coastal markets." },
  { badge: "Homestead exemption", body: "Texas reduces your taxable home value by $100,000 for your primary residence. File with Travis County Appraisal District in the year you close — it does not apply automatically. On a $550,000 Austin home at an effective rate of 2.0%, this saves approximately $2,000 per year. Missing the filing window costs you real money." },
  { badge: "VA disability exemption", body: "A 100% service-connected disability rating qualifies you for a complete property tax exemption on your Texas primary residence. On a $550,000 Austin home at a 2.0% effective rate, this saves approximately $11,000 per year. File with Travis County Appraisal District after closing using your VA award letter." },
  { badge: "ADU opportunity — Austin's land use reform", body: "Austin passed progressive land-use reforms that have made it significantly easier to add Accessory Dwelling Units (ADUs) — backyard cottages, garage apartments, and secondary units — to most residential lots. For buyers who purchase a home with an ADU-eligible lot, the rental income from a secondary unit can materially change the affordability equation. We help buyers understand how rental income from an existing ADU factors into their loan qualification." },
  { badge: "Option period", body: "Texas contracts include a 5 to 10 day option period during which you can exit for any reason and keep your earnest money. With homes sitting 85+ days and sellers accepting concessions, use the option period for a thorough inspection and negotiate on findings. In a buyer's market this is leverage — use it." },
];

const faqs = [
  { q: "Is Austin's correction a crash or a buying opportunity?", a: "It's a correction, not a crash — and for buyers it's the best opportunity since 2012. The City of Austin median is down 18% to 20% from the 2022 peak of $550,000+. Homes are sitting 85 days on average. Sellers are offering $5,000 to $15,000+ in concessions and rate buydowns. Correctly priced homes in sought-after locations still move — sometimes with competition. Overpriced homes are sitting until sellers adjust. The underlying fundamentals — tech employment, UT, state capital, cultural identity, in-migration — haven't disappeared. Austin didn't become a bad city. It became a city that overshot on price and is finding its floor." },
  { q: "Why is Austin called the Live Music Capital of the World?", a: "Because on any given Monday night in the 1980s, you could find live music at more than 70 venues — and a group of Chamber of Commerce staffers counted them and decided to claim the title. It stuck because it was true. Austin's live music scene runs from the massive (SXSW, Austin City Limits Festival) to the intimate (Tuesday nights at the Cactus Cafe, weekend sets at Stubb's Amphitheater). The Broken Spoke has been open since 1964. Antone's Blues Club fostered Stevie Ray Vaughan. Over 250 venues today. It's not a marketing slogan — it's a genuine identity that has survived every growth cycle the city has thrown at it." },
  { q: "What is the difference between SoCo, East Austin, and Rainey Street?", a: "SoCo is the iconic commercial strip — boutiques, food trucks, hotel rooftops, the Congress Avenue Bridge bat colony — in South Austin adjacent to Zilker Park. Very walkable, very photographed, premium pricing. East Austin is the historically working-class east side that transformed over a decade into craft breweries, taco joints, and murals without fully losing its original character. More diverse, still appreciating, more affordable than SoCo. Rainey Street is downtown-adjacent bungalows converted into bars surrounded by new high-rise condos with Lady Bird Lake trail access — a genuinely unusual urban mix at condo pricing." },
  { q: "Can I actually afford Austin on a tech salary?", a: "Depends on the salary and the neighborhood. A dual-income tech household at $200,000 combined with good credit can qualify for a $700,000 to $800,000 conventional loan at current rates. That puts them in East Austin, Mueller, North Austin near the Domain, or parts of the Zilker/South Austin corridor. A single income at $130,000 is a harder fit in the City of Austin and often leads to the suburbs — Round Rock, Cedar Park, Georgetown — where the same commute to North Austin employers comes with $150,000 to $200,000 less on the purchase price. We model both scenarios before you decide." },
  { q: "Are physician loans available in Austin?", a: "Yes — and Austin is a strong physician loan market. Dell Medical School at UT, St. David's HealthCare, Ascension Seton, UT Health Austin, and Baylor Scott & White Austin all drive steady physician relocation. No down payment up to $1.5M, no PMI, and student loan debt excluded from DTI. For a physician relocating to Austin's central neighborhoods where prices routinely exceed $700,000, the zero-down physician loan is the difference between being in the market and being priced out." },
  { q: "What neighborhoods should first-time buyers look at in Austin?", a: "Honestly, the Austin suburbs give first-time buyers more program access and more purchasing power. DPA programs cap out around $524,000 FHA limit in Travis County — which covers northern East Austin edges, parts of North Austin, and Pflugerville, but not SoCo, Zilker, or central neighborhoods. Round Rock (Georgetown, Cedar Park, Leander) offers the same employer access and A-rated school districts at $150,000 to $200,000 less per home. If staying in Austin proper is a priority, East Austin and North Loop offer the most accessible price points inside the city." },
  { q: "Is 'Keep Austin Weird' still real?", a: "Depends on who you ask and where you go. The original Austin — the one that coined the phrase to support local businesses against chain retail pressure in the 1990s — survives in pockets. The Broken Spoke. Waterloo Records. Barton Springs. The Hole in the Wall. Elizabeth Street Cafe. The Alamo Drafthouse. The live music on any Tuesday at a bar nobody's Instagrammed yet. But Austin has also become expensive enough and corporate enough that the weirdness is increasingly concentrated in specific neighborhoods and specific businesses rather than being the city's default setting. If you're moving to Austin expecting 1995, you'll be disappointed. If you're looking for the pockets where it survives — East Austin, South Lamar, certain stretches of the Drag — they're real and they're worth finding." },
  { q: "Should I buy in Austin now or wait?", a: "Nobody can time the bottom — but the current indicators favor buyers who have a 3+ year time horizon. Prices are down 18% to 20% from peak. Sellers are offering concessions. Homes are sitting 85 days. Builder incentives in the suburbs are at multi-year highs. The long-term fundamentals — UT, state capital, tech presence, cultural identity, in-migration from California and the Northeast — have not changed. If your life has you in Austin for 3+ years and the payment works, the case for waiting is mostly psychological. If you need to be out in 18 months, renting is probably the smarter call." },
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
          <div style={tag(copper)}>Austin, TX · Travis County · Live Music Capital of the World · State Capital of Texas</div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, fontWeight: 700, lineHeight: 1.15, margin: "0 0 18px", color: ivory }}>
            Buying a Home in Austin, TX. <span style={{ color: copper }}>Down 18–20% From Peak. Buyers Have the Best Leverage in Over a Decade. Keep Austin Weird.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 820, color: "rgba(250,248,244,0.85)", marginBottom: 28 }}>
            Austin is the Live Music Capital of the World, the home of SXSW, ACL, Barton Springs, and 250+ live music venues. It's also a city that overshot on price by 50%+ during the pandemic and has spent four years finding its floor. That floor is close. Sellers are negotiating. Homes are sitting 85 days. The underlying city — the one that earned its identity — hasn't gone anywhere.
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
          <h2 style={h2Style()}>Live Music. Breakfast Tacos. Barton Springs. Tesla. Keep Austin Weird.</h2>
          <p style={subStyle()}>
            Austin was officially named the Live Music Capital of the World in 1991 by the City Council, but the claim predates the vote — a group of Chamber of Commerce staffers counted more than 70 live music venues on a Monday night in the 1980s and decided they had a legitimate argument. The Broken Spoke has been open since 1964. Stevie Ray Vaughan cut his teeth at Antone's Blues Club. Willie Nelson has played every venue in town. Austin City Limits on PBS has been broadcasting live music from Austin since 1974 — the longest-running music TV program ever made. SXSW started in 1987 as a small regional music showcase and became one of the most influential cultural events in the world.
          </p>
          <p style={subStyle()}>
            Then the tech industry arrived. Dell had been in Round Rock since the 1990s. Apple chose North Austin for a massive campus. Tesla built a Gigafactory east of the city. Oracle relocated its headquarters here. Amazon, Google, Meta, and hundreds of startups followed. In 2020 and 2021, the remote work migration wave brought tens of thousands of California transplants chasing lower taxes, lower prices (relative to San Francisco), and the Austin identity. Home prices went up 50%+ in some neighborhoods. The "Keep Austin Weird" bumper sticker — originally a call to support local businesses against chain retail — started to feel ironic. And now, four years later, the market has corrected and the weirdness has survived, concentrated in specific neighborhoods and specific institutions, waiting for the next generation to find it.
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
          <div style={tag(copper)}>The Market — Honest Version</div>
          <h2 style={h2Style(ivory)}>Austin Overshot. It's Correcting. Here's What That Means for You.</h2>
          <p style={subStyle("rgba(250,248,244,0.8)")}>Down 18–20% from peak. Homes sitting 85 days. Sellers offering concessions. This is the best buyer leverage Austin has offered in over a decade — and the floor is close.</p>
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
              <strong style={{ color: copper }}>What happened:</strong> Austin home prices jumped 50%+ between 2020 and 2022 driven by remote work migration, low interest rates, and speculative buying. The Fed raised rates, remote work policies reversed, and overpriced inventory began accumulating. The City of Austin median has corrected from $590,000 peak to approximately $550,000 — down 6.8% year over year and 18–20% from peak depending on the neighborhood. On a per-square-foot basis, the correction is 21–25% from April 2022 highs, distributed over four years rather than compressed into a crash. The fundamentals — UT Austin, state capital, tech presence, music identity, Hill Country access — have not changed. Austin did not become a bad city. It became a city where sellers are finally negotiating.
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

      {/* NEIGHBORHOODS */}
      <section style={{ ...sectionPad, background: ivory }}>
        <div style={container}>
          <div style={tag()}>Know the Area</div>
          <h2 style={h2Style()}>Austin Neighborhoods — From SoCo to the Suburbs</h2>
          <p style={subStyle()}>
            Austin's neighborhoods have genuinely distinct identities — not just price tiers. Where you live shapes your daily experience in ways that matter: the food truck you stop at on the way to work, the park you run in on weekends, the music you hear on Tuesday nights through an open bar door. Here's the honest breakdown.
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
            California tech transplant with a big down payment. Dell Medical School physician relocating. UT alum buying their first home in East Austin. Veteran finally buying after years of renting. The right program depends on your file.
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
            <h2 style={h2Style(textOnPale)}>Model Your Full Austin Payment — Including Travis County Property Taxes</h2>
            <p style={subStyle(textOnPale)}>
              The Texas Payment Calculator models your full PITI at any Austin price point — including Travis County property taxes and homeowners insurance. The VA Loan Calculator shows your zero-down payment with the funding fee built in. Run both before you look at a single home.
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
          <p style={subStyle()}>No state income tax helps. Travis County property taxes hurt. Homestead exemption helps back. Know all three before you model a budget.</p>
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
            Relocating for tech or Dell Medical? Finally buying after years of renting in Austin? Targeting East Austin or looking at the suburbs for the price break? Tell me your situation. We'll run your real numbers — PITI, program, and the honest case for or against buying in 2026 — before you fall in love with a house.
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
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. Market data approximate and subject to change. Travis County property tax rates vary by address — verify the specific rate before relying on payment estimates. FHA loan limits subject to annual adjustment by HUD. Down payment assistance program availability and credit score minimums subject to program rules in effect at time of application.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 12 }}>
            <Link to="/physician-loan-texas" style={{ color: copper, textDecoration: "none" }}>Physician Loans</Link>
            <Link to="/va-loan-texas" style={{ color: copper, textDecoration: "none" }}>VA Loans Texas</Link>
            <Link to="/down-payment-assistance-texas" style={{ color: copper, textDecoration: "none" }}>Down Payment Assistance</Link>
            <Link to="/round-rock-tx-mortgage" style={{ color: copper, textDecoration: "none" }}>Round Rock Homes</Link>
            <Link to="/georgetown-tx-mortgage" style={{ color: copper, textDecoration: "none" }}>Georgetown Homes</Link>
            <a href={calendly} target="_blank" rel="noreferrer" style={{ color: copper, textDecoration: "none" }}>Schedule a Call</a>
            <a href={apply} target="_blank" rel="noreferrer" style={{ color: copper, textDecoration: "none" }}>Apply Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AustinMortgage;
