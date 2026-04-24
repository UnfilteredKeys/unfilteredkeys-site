import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

/* ── SEO ─────────────────────────────────────────────────────────────────── */
function useGeorgetownSEO() {
  useEffect(() => {
    document.title =
      "Mortgage Broker Georgetown TX – Williamson County Home Loans | Keys by Shalanda";
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
      "Georgetown TX mortgage broker — VA, FHA, conventional, physician, and Sun City 55+ loans. Most Beautiful Town Square in Texas. Fastest-growing city in America. Buyer's market in 2026."
    );
    setMeta("og:title", "Mortgage Broker Georgetown TX | Keys by Shalanda", true);
    setMeta(
      "og:description",
      "Buying in Georgetown? The 1911 courthouse, Wolf Ranch, Sun City, and a genuine buyer's market. VA, FHA, conventional, and physician loan programs. We close here.",
      true
    );
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://shalandasmith.com/georgetown-tx-mortgage");
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
const h2Style = (c: string = textPrimary) => ({
  fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700 as const,
  color: c, lineHeight: 1.25, marginBottom: 14,
});
const subStyle = (c: string = textSecondary) => ({
  fontSize: 16, color: c, lineHeight: 1.7, maxWidth: 760, marginBottom: 32,
});
const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply    = "https://scl.my1003app.com/554554/register";

/* ── DATA ────────────────────────────────────────────────────────────────── */
const stats = [
  { v: "~$405K",          l: "Median Home Price · 2026" },
  { v: "117,000+",        l: "Population & Growing" },
  { v: "Georgetown ISD",  l: "Consistently A-Rated" },
  { v: "1.80%–2.20%",    l: "Williamson Co. Tax Rate" },
];

const marketStats = [
  { label: "Median Home Price",    value: "~$405K",   note: "Williamson County · 2026",        valueColor: white },
  { label: "Avg Days on Market",   value: "122 days", note: "Real negotiating leverage",       valueColor: white },
  { label: "VA Loan Limit",        value: "$833,150", note: "Covers all Georgetown price points", valueColor: copper },
];

const neighborhoods = [
  { name: "Downtown & Old Town", price: "$380K–$650K+", tag: "Most Beautiful Town Square in Texas · Victorian character", desc: "This is why people move to Georgetown instead of a generic Austin suburb. The 1911 Williamson County Courthouse anchors a 40-block Victorian district listed on the National Register of Historic Places — the finest collection of late Victorian commercial architecture in Texas. Three wineries on the square. Georgetown Palace Theatre. The Red Poppy Festival brings 60,000 people every April. Homes range from 1850s limestone cottages to renovated Victorians and modern infill. Walkability you won't find anywhere else in Williamson County." },
  { name: "Wolf Ranch", price: "$380K–$550K", tag: "Master-planned · Georgetown ISD · San Gabriel River access", desc: "Wolf Ranch is Georgetown's largest master-planned community and one of the most active new construction markets in Williamson County. D.R. Horton, Lennar, and Taylor Morrison all building here. Georgetown ISD throughout. Amenity center, trails, and access to the San Gabriel River greenway. Builder incentives — rate buydowns and closing cost credits — are at some of the strongest levels we've seen. Ask before you assume the list price is the price." },
  { name: "Morningstar", price: "$310K–$430K", tag: "Most affordable new construction · Entry level", desc: "Morningstar sits just west of Georgetown and offers the most accessible new construction price points in the area — entry-level single-family homes from the low $300s. D.R. Horton is the primary builder. Georgetown ISD. This community has been absorbing significant first-time buyer volume in 2026, which is part of why the citywide median has softened — not a sign of the market collapsing, but of the entry-level segment activating." },
  { name: "Sun City Texas (55+)", price: "$290K–$520K", tag: "Active adult · 55+ community · Resort amenities", desc: "Sun City is one of the largest active adult communities in Texas — over 9,000 homes, three golf courses, multiple amenity centers, fitness facilities, pools, and more than 100 resident clubs. Buyers must be 55+. Strong resale market driven by in-migration from higher-cost states. VA loans are available to eligible veterans regardless of age. If you're buying into Sun City, understanding the HOA fees and their impact on your total monthly payment is part of our first conversation." },
  { name: "Cimarron Hills", price: "$550K–$900K+", tag: "Golf course · Gated · Luxury", desc: "Cimarron Hills is a private gated community centered on a Jack Nicklaus Signature golf course on the western edge of Georgetown. Custom and semi-custom homes on larger lots, Hill Country adjacent feel, and a private club atmosphere. Physician loans and jumbo conventional programs are the primary fit here." },
  { name: "Georgetown Village & Established Subdivisions", price: "$360K–$480K", tag: "Resale · Mature trees · Georgetown ISD", desc: "The resale neighborhoods that developed in the 1990s and 2000s — Georgetown Village, Berry Creek, Serenada — offer mature trees, established character, and proximity to Georgetown ISD schools without the master-planned community feel. Buyers in these areas often get more square footage per dollar than in Wolf Ranch and avoid builder HOA structures." },
];

const programs = [
  { title: "Conventional", badgeColor: navy, items: ["3% to 20% down", "PMI removable at 20% equity", "620 minimum credit score, best pricing at 740+", "HomeReady and Home Possible: 3% down for buyers at or below 80% AMI"], note: "Strong fit for move-up buyers, dual-income households, and buyers with equity from a prior home. Georgetown's resale neighborhoods are well-suited to conventional financing.", link: { to: "/conventional-loan-texas", text: "Conventional Loan Details →" } },
  { title: "FHA + Down Payment Assistance", badgeColor: "#2a7a7a", items: ["3.5% down with 580+ credit score", "TDHCA My First Texas Home (620 min) and TSAHC Homes for Texas Heroes (620 min — nurses, teachers, first responders)", "SETH 5 Star (640 min) and SETH GoldStar (620 min) — both available in Williamson County", "Chenoa Fund (600 min) for buyers with thinner credit profiles"], note: "Morningstar's entry-level price points are a natural fit for DPA-assisted FHA buyers. We run your eligibility at no cost on our first call.", link: { to: "/down-payment-assistance-texas", text: "All DPA Programs →" } },
  { title: "VA Loans", badgeColor: copper, items: ["Zero down for eligible veterans, active duty, and surviving spouses", "No PMI — ever", "Williamson County VA loan limit $833,150 — covers all Georgetown price points including Wolf Ranch", "Georgetown's veteran population is 10.9% of residents — well above the Texas average of 6.1%"], note: "VA loans work at Sun City too — age restrictions on the community don't affect VA loan eligibility.", link: { to: "/va-loan-texas", text: "VA Loan Details →" } },
  { title: "Physician Loans", badgeColor: copper, items: ["No down payment required up to $1.5M", "No PMI regardless of down payment", "Student loan debt excluded or IBR payment used for DTI", "Available to MDs, DOs, DMDs, DVMs and in some programs NPs and PAs"], note: "Cimarron Hills and the upper end of Wolf Ranch are where physician loan buyers tend to land in Georgetown. 1-day-out-of-residency programs available.", link: { to: "/physician-loan-texas", text: "Physician Loan Details →" } },
  { title: "USDA Rural Development", badgeColor: "#3B6D11", items: ["Zero down payment for eligible properties", "No monthly mortgage insurance premium", "Income limits apply by household size", "Some addresses on Georgetown's rural western and northern edges may qualify"], note: "Georgetown's core and most master-planned communities do not qualify. We check every address at no cost before you assume ineligibility.", link: null as null | { to: string; text: string } },
];

const texasItems = [
  { badge: "Property taxes — know the range", body: "Williamson County property taxes in Georgetown run approximately 1.80% to 2.20% of assessed value depending on the taxing entities at your specific address. Master-planned communities like Wolf Ranch and Morningstar often carry MUD (Municipal Utility District) tax layers on top of city and county rates — which can push your effective rate above 2.20%. Always ask for the full tax breakdown at a specific address, not just the county rate. On a $405,000 home that difference can be $100 to $200 per month." },
  { badge: "MUD taxes in new construction", body: "Municipal Utility District taxes are common in Georgetown's master-planned communities and are assessed separately from city and county taxes. MUD taxes typically phase down over time as the district bonds are retired, but in the early years of a community they can be significant. Wolf Ranch, Morningstar, and similar communities often carry MUD overlays. This is not a reason to avoid these communities — it is a reason to know your real PITI before you sign anything." },
  { badge: "Homestead exemption", body: "Texas reduces your taxable home value by $100,000 for your primary residence. File with Williamson County Appraisal District in the year you close. It does not apply automatically. On a $405,000 Georgetown home this saves you roughly $1,450 to $1,780 per year depending on your effective rate." },
  { badge: "VA disability exemption", body: "A 100% service-connected disability rating qualifies you for a complete property tax exemption on your Texas primary residence. Given Georgetown's high veteran population, this is a benefit many buyers here are eligible for and don't claim. File with Williamson County Appraisal District after closing using your VA award letter. On a $405,000 home this saves approximately $7,200 to $8,900 per year." },
  { badge: "Option period", body: "Texas contracts include a 5 to 10 day option period during which you can exit for any reason and keep your earnest money. Use it for inspection — especially in new construction where a third-party inspection of builder work catches more issues than most buyers expect. Never waive it to compete with another buyer." },
  { badge: "Sun City HOA fees", body: "Sun City Texas HOA fees run approximately $150 to $200 per month and cover access to all amenity centers, fitness facilities, pools, and community programming. These fees are not included in your PITI and must be factored into your total monthly housing cost. We always model the full number — PITI plus HOA — before you fall in love with a Sun City address." },
];

const faqs = [
  { q: "Why is Georgetown's median price lower in 2026 than 2025?", a: "It looks like a price collapse. It isn't. Georgetown's median dropped from roughly $490K in early 2025 to $405K in early 2026 — but that's almost entirely a mix-shift story. Morningstar, Wolf Ranch entry-level, and Sun City closings surged in volume at lower price points, pulling the citywide median down. Established neighborhoods near the square and in Berry Creek haven't seen equivalent drops. What it does mean for you: buyers have real leverage, builder incentives are at multi-year highs, and 61% of active listings have already dropped their asking price. This is a good time to buy in Georgetown if your timeline is three or more years." },
  { q: "What makes Georgetown different from Round Rock or Leander?", a: "Georgetown has something the other corridor cities don't — a genuine historic identity that predates the growth boom. The 1911 courthouse. The 40-block Victorian district. Three wineries on the square. The Red Poppy Festival. You can walk to things that have existed for 150 years. That's rare in Williamson County and it's why Georgetown commands a price premium over comparable-sized Round Rock and Leander suburbs. Buyers who want a small-city identity, not just a location, choose Georgetown." },
  { q: "Are builder incentives in Georgetown real or just marketing?", a: "They're real in 2026. With 1,000+ active listings and 6+ months of supply, national builders in Wolf Ranch and Morningstar are offering rate buydowns to the high 4s and closing cost credits on spec inventory. The important nuance: builder lenders deliver these incentives tied to their own financing. We can often match the economics of a builder incentive using our 50+ lender network — and in some cases beat them on rate while preserving the credit. Call us before you walk into a model home." },
  { q: "Can I use a VA loan at Sun City?", a: "Yes. Sun City Texas is an age-restricted community (55+) but VA loan eligibility is not affected by community age restrictions. If you or your spouse is 55+ and VA eligible, you can use your VA benefit to purchase in Sun City. Zero down, no PMI, and the VA loan limit of $833,150 covers the entire Sun City price range." },
  { q: "What is Georgetown ISD like?", a: "Georgetown ISD is consistently A-rated in Texas accountability rankings and serves the full city. Elementary schools include several campuses with strong test scores and active parent communities. Georgetown High School is the primary high school. East View High School serves the eastern and newer growth areas. Always verify the specific campus assignment for any address — boundary lines shift as the city grows." },
  { q: "Is Georgetown good for veterans?", a: "Georgetown has one of the highest veteran concentrations of any Texas city its size — 10.9% of residents have veteran status, nearly double the Texas state average of 6.1%. Fort Hood is 55 miles north. Many veterans retire to Georgetown specifically for the quality of life, the VA benefit eligibility, and the 100% disability property tax exemption that eliminates the property tax bill entirely. If you're a veteran considering Georgetown, call us — the combination of VA loan and disability exemption makes your monthly number very different from what Zillow shows." },
  { q: "What does MUD tax mean for my payment in a Georgetown new construction community?", a: "Municipal Utility District taxes are assessed in addition to city and county property taxes in master-planned communities like Wolf Ranch and Morningstar. They fund the infrastructure — roads, water, utilities — that the developer built. MUD rates typically run 0.40% to 0.80% on top of the base Williamson County rate, which can push your effective property tax rate above 2.20%. These taxes phase down over time as district bonds are retired, but in the early years they are real. We pull the specific MUD rate for every address before we quote you a payment." },
  { q: "Should I buy near the square or in a master-planned community?", a: "Honest answer: it depends on what you're buying a home for. Downtown and Old Town Georgetown offer character, walkability, and architectural history you can't replicate in a new subdivision — but lots are smaller, homes are older, and HOA structures are usually lighter. Wolf Ranch and Morningstar offer new construction, amenity centers, and modern floor plans — but MUD taxes, HOA fees, and cookie-cutter streetscapes are the tradeoff. Neither is wrong. They're different products for different buyers. We help you understand the full payment on both before you decide." },
];

const cityFeatures = [
  { icon: copper, label: "The Square & downtown", body: "Victorian storefronts, three wineries, Georgetown Palace Theatre, boutique shops, and live music — all within walking distance of the 1911 courthouse. Residents here don't need a reason to go downtown. It's already outside." },
  { icon: "#534AB7", label: "Sun City — built for 55+", body: "Over 9,000 homes, three golf courses, multiple amenity centers, 100+ resident clubs. One of the largest active adult communities in Texas. VA loans are fully available to eligible veterans regardless of the community's age restriction." },
  { icon: "#3B6D11", label: "Nature & outdoors", body: "San Gabriel Park, Lake Georgetown, Blue Hole Regional Park, 26 miles of regional trail. Inner Space Cavern for something different. Georgetown was recognized as the 2nd healthiest county in Texas in part because of trail and park access." },
  { icon: "#185FA5", label: "Georgetown ISD", body: "Consistently A-rated. Georgetown High School and East View High School serve the full city. Strong elementary campuses throughout, including in Wolf Ranch and the established resale neighborhoods. Always verify campus assignment for your specific address." },
];

const heroChips = ["Williamson County Specialist", "VA · FHA · Conventional · DPA", "Sun City 55+ Eligible", "Physician Loans", "21-Day Avg Close", "50+ Lender Network"];

/* ── COMPONENT ───────────────────────────────────────────────────────────── */
const GeorgetownMortgage = () => {
  useGeorgetownSEO();

  const btnPrimary: React.CSSProperties = { background: copper, color: white, padding: "14px 28px", borderRadius: radius, fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-block", border: "none", cursor: "pointer" };
  const btnGhost: React.CSSProperties   = { background: "transparent", color: ivory, padding: "14px 28px", borderRadius: radius, fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-block", border: `1px solid ${ivory}` };

  return (
    <>
      <SEO {...(seoMeta as any).georgetownMortgage} />
      <style>{`
        .gtx-btn:hover { opacity: 0.92; }
        .gtx-faq summary {
          cursor: pointer; list-style: none; padding: 18px 0;
          font-family: 'Lora', serif; font-size: 18px; font-weight: 600;
          color: ${navy}; display: flex; justify-content: space-between;
          align-items: center; gap: 16px;
        }
        .gtx-faq summary::after { content: "+"; color: ${copper}; font-size: 24px; font-weight: 300; }
        .gtx-faq[open] summary::after { content: "−"; }
        .gtx-faq p { padding: 0 0 18px; color: ${textSecondary}; line-height: 1.7; margin: 0; font-size: 15px; }
        .gtx-faq { border-bottom: 1px solid ${border}; }
        @media (max-width: 900px) {
          .gtx-hero h1 { font-size: 30px !important; }
          .gtx-hero-btns { flex-direction: column; }
          .gtx-2col { grid-template-columns: 1fr !important; }
          .gtx-3col { grid-template-columns: 1fr !important; }
          .gtx-compare th, .gtx-compare td { padding: 10px 8px !important; font-size: 12px !important; }
        }
      `}</style>

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="gtx-hero" style={{ background: hero, color: ivory, padding: "96px 0 80px" }}>
        <div style={container}>
          <div style={tag(copper)}>Georgetown, TX · Williamson County Seat · Most Beautiful Town Square in Texas</div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, lineHeight: 1.15, fontWeight: 700, margin: "0 0 20px", maxWidth: 920 }}>
            Buying a Home in Georgetown, TX.{" "}
            <span style={{ color: copper }}>The City That Grew Without Losing Its Soul.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 820, opacity: 0.92, marginBottom: 32 }}>
            Georgetown was the fastest-growing city in America for two straight years and still has a courthouse square that looks like 1911. Three wineries. A Red Poppy Festival. Victorian storefronts that have been there since the cattle drives. That combination — real history plus real growth — is why buyers choose Georgetown over every other Williamson County option. And right now, it's a buyer's market.
          </p>
          <div className="gtx-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
            <a className="gtx-btn" href={apply} target="_blank" rel="noopener noreferrer" style={btnPrimary}>Get Pre-Approved</a>
            <a className="gtx-btn" href={calendly} target="_blank" rel="noopener noreferrer" style={btnGhost}>Book a Strategy Call</a>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {heroChips.map((t) => (
              <span key={t} style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: ivory, opacity: 0.85, border: `1px solid rgba(250,248,244,0.25)`, padding: "6px 12px", borderRadius: 999 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. COPPER STATS BAR ──────────────────────────────────────────── */}
      <section style={{ background: copper, color: white, padding: "32px 0" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="gtx-2col">
            {stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 26, fontWeight: 700, marginBottom: 4 }}>{s.v}</div>
                <div style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: 1, opacity: 0.95, textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE GEORGETOWN STORY ──────────────────────────────────────── */}
      <section style={{ background: parchment, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>The Georgetown Story</div>
          <h2 style={h2Style(textOnPale)}>America's Fastest-Growing City Still Has a Real Downtown</h2>
          <p style={subStyle(textOnPale)}>
            Georgetown was designated the fastest-growing city in the United States for two consecutive years by the U.S. Census Bureau — for cities with a population over 20,000. That's an extraordinary statistic, and it would be easy to assume it means Georgetown looks like every other Texas boom city: suburban sprawl, big-box retail, and master-planned communities stretching to the horizon. It doesn't.
          </p>
          <p style={subStyle(textOnPale)}>
            The 1911 Williamson County Courthouse still anchors the square. Its Ionic columns and copper dome have been there since before World War I. The 40-block Victorian district surrounding it was added to the National Register of Historic Places in 1977 — the finest collection of late Victorian commercial architecture in Texas. Georgetown earned the Great American Main Street Award in 1997, the first Texas city ever to win it. Three wineries operate on or near the square. The Red Poppy Festival brings 60,000 people every April. The San Gabriel River runs through town. Inner Space Cavern sits underneath the highway. This is a city that grew fast without losing the thread of what it was.
          </p>
          <div className="gtx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 32 }}>
            {cityFeatures.map((c) => (
              <div key={c.label} style={{ background: white, border: `1px solid ${border}`, borderRadius: radius, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: c.icon, display: "inline-block" }} />
                  <div style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 700, color: textPrimary }}>{c.label}</div>
                </div>
                <p style={{ color: textSecondary, lineHeight: 1.7, margin: 0, fontSize: 15 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MARKET STATS ──────────────────────────────────────────────── */}
      <section style={{ background: navy, color: ivory, ...sectionPad }}>
        <div style={container}>
          <div style={tag(copper)}>2026 Market Reality</div>
          <h2 style={{ ...h2Style(ivory) }}>Georgetown Is a Buyer's Market Right Now — Here's Why</h2>
          <p style={{ ...subStyle(ivory), opacity: 0.9 }}>The headline number looks alarming. The actual story is more nuanced — and more useful to you as a buyer.</p>

          <div className="gtx-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 32 }}>
            {marketStats.map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,255,255,0.12)`, borderRadius: radius, padding: 24 }}>
                <div style={{ fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: 1, opacity: 0.75, marginBottom: 8, textTransform: "uppercase" }}>{s.label}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 30, fontWeight: 700, color: s.valueColor, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 13, opacity: 0.8 }}>{s.note}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(181,98,30,0.12)", border: `1px solid ${copper}`, borderRadius: radius, padding: 24, marginBottom: 32 }}>
            <p style={{ margin: 0, lineHeight: 1.7, fontSize: 15 }}>
              <strong style={{ color: copper }}>The median drop from $490K to $405K is a mix story, not a crash.</strong>{" "}
              Entry-level new construction in Morningstar, Wolf Ranch, and Sun City closed in high volume in early 2026, pulling the citywide median down — not a broad price collapse in established neighborhoods. What is real: 1,000+ active listings, 6.3 months of supply, 61% of listings with price reductions, and builders offering rate buydowns to the high 4s. If your timeline is three or more years, Georgetown in 2026 is a genuine opportunity.
            </p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontFamily: "'Fira Mono', monospace", letterSpacing: 1, opacity: 0.85, marginBottom: 12, textTransform: "uppercase" }}>National builders — Wolf Ranch, Morningstar · captive lenders, rate buydown incentives highest here</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              {["D.R. Horton", "Lennar", "Taylor Morrison", "Meritage Homes"].map((b) => (
                <span key={b} style={{ background: "rgba(255,255,255,0.08)", padding: "6px 12px", borderRadius: 999, fontSize: 13 }}>{b}</span>
              ))}
            </div>
            <div style={{ fontSize: 13, fontFamily: "'Fira Mono', monospace", letterSpacing: 1, opacity: 0.85, marginBottom: 12, textTransform: "uppercase" }}>Local and regional builders — often more flexible on outside financing</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Scott Felder Homes", "Coventry Homes", "Pacesetter Homes", "Saratoga Homes"].map((b) => (
                <span key={b} style={{ background: "rgba(255,255,255,0.08)", padding: "6px 12px", borderRadius: 999, fontSize: 13 }}>{b}</span>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.06)", borderLeft: `3px solid ${copper}`, padding: "16px 20px", borderRadius: 4 }}>
            <p style={{ margin: 0, lineHeight: 1.7, fontSize: 14 }}>
              <strong style={{ color: copper }}>Builder incentives are real — but they're tied to their lender.</strong>{" "}
              A rate buydown to 4.99% through DHI Mortgage or Lennar Mortgage sounds great until you realize their overlays may not fit your file. We can frequently match the economics of a builder buydown using our 50+ lender network. Call us before you walk into a model home — not after you've already fallen in love with the floor plan.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. NEIGHBORHOODS ─────────────────────────────────────────────── */}
      <section style={{ background: cream, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>Know the Area</div>
          <h2 style={h2Style(textOnPale)}>Georgetown Neighborhoods — What You're Actually Choosing Between</h2>
          <p style={subStyle(textOnPale)}>
            Georgetown isn't one market. It's Victorian cottages on the square, master-planned communities with HOA amenities, a massive 55+ community, luxury golf course estates, and established resale neighborhoods with mature trees. The price ranges, tax structures, and buyer profiles are genuinely different.
          </p>
          <div className="gtx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {neighborhoods.map((n) => (
              <div key={n.name} style={{ background: white, border: `1px solid ${border}`, borderRadius: radius, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontSize: 20, fontWeight: 700, color: textPrimary, margin: 0 }}>{n.name}</h3>
                  <span style={{ fontSize: 13, fontFamily: "'Fira Mono', monospace", color: copper, fontWeight: 600 }}>{n.price}</span>
                </div>
                <div style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: textSecondary, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>{n.tag}</div>
                <p style={{ color: textSecondary, lineHeight: 1.7, margin: 0, fontSize: 14 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. LOAN PROGRAMS ─────────────────────────────────────────────── */}
      <section style={{ background: white, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>Find Your Fit</div>
          <h2 style={h2Style()}>Loan Programs for Georgetown Buyers</h2>
          <p style={subStyle()}>
            First-time buyer in Morningstar, veteran heading to Sun City, physician looking at Cimarron Hills, or move-up buyer near the square — the right program depends on your file, your community, and your goals.
          </p>
          <div className="gtx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {programs.map((p) => (
              <div key={p.title} style={{ background: parchment, border: `1px solid ${border}`, borderRadius: radius, padding: 24 }}>
                <div style={{ display: "inline-block", background: p.badgeColor, color: white, padding: "4px 10px", borderRadius: 4, fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: 1, marginBottom: 14, textTransform: "uppercase" }}>{p.title}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>
                  {p.items.map((item, idx) => (
                    <li key={idx} style={{ color: textOnPale, lineHeight: 1.65, marginBottom: 8, fontSize: 14, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: copper, fontWeight: 700 }}>›</span>{item}
                    </li>
                  ))}
                </ul>
                {p.note && <p style={{ background: copperLight, color: textOnPale, padding: 12, borderRadius: 4, fontSize: 13, lineHeight: 1.6, margin: "0 0 12px" }}>{p.note}</p>}
                {p.link && <Link to={p.link.to} style={{ color: copper, fontFamily: "'Fira Mono', monospace", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>{p.link.text}</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CALCULATOR CALLOUT ────────────────────────────────────────── */}
      <section style={{ background: navy, color: ivory, ...sectionPad }}>
        <div style={container}>
          <div style={{ maxWidth: 820 }}>
            <div style={tag(copper)}>Run Your Numbers</div>
            <h2 style={h2Style(ivory)}>Model Your Full Georgetown Payment — Including MUD Taxes</h2>
            <p style={{ ...subStyle(ivory), opacity: 0.9 }}>
              The Texas Payment Calculator lets you model your full PITI at any Georgetown price point. Plug in your specific effective property tax rate — not just the Williamson County base rate — to account for any MUD overlay at your address. The VA Loan Calculator models your zero-down monthly payment with the funding fee built in.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link to="/calculators" className="gtx-btn" style={btnPrimary}>Texas Payment Calculator →</Link>
              <Link to="/calculators" className="gtx-btn" style={btnGhost}>VA Loan Calculator →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TEXAS-SPECIFIC ────────────────────────────────────────────── */}
      <section style={{ background: parchment, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>Texas-Specific</div>
          <h2 style={h2Style(textOnPale)}>Georgetown Details That Affect Your Real Monthly Payment</h2>
          <p style={subStyle(textOnPale)}>Georgetown has a few wrinkles that other Williamson County cities don't. Know these before you close.</p>
          <div className="gtx-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {texasItems.map((t) => (
              <div key={t.badge} style={{ background: white, border: `1px solid ${border}`, borderRadius: radius, padding: 22 }}>
                <div style={{ display: "inline-block", background: navy, color: white, padding: "4px 10px", borderRadius: 4, fontSize: 11, fontFamily: "'Fira Mono', monospace", letterSpacing: 1, marginBottom: 12, textTransform: "uppercase" }}>{t.badge}</div>
                <p style={{ color: textOnPale, lineHeight: 1.7, margin: 0, fontSize: 14 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
      <section style={{ background: white, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>Frequently Asked</div>
          <h2 style={h2Style()}>What Georgetown Buyers Ask Us Most</h2>
          <div style={{ marginTop: 24 }}>
            {faqs.map((f, i) => (
              <details key={i} className="gtx-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ────────────────────────────────────────────────── */}
      <section style={{ background: hero, color: ivory, ...sectionPad }}>
        <div style={{ ...container, textAlign: "center", maxWidth: 760 }}>
          <div style={{ width: 64, height: 64, borderRadius: 999, background: copper, color: white, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, marginBottom: 16 }}>SS</div>
          <h2 style={{ ...h2Style(ivory), textAlign: "center" }}>Shalanda Smith</h2>
          <p style={{ fontSize: 13, fontFamily: "'Fira Mono', monospace", opacity: 0.8, marginBottom: 20, letterSpacing: 0.5 }}>
            NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · Licensed in Texas
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.92, marginBottom: 28 }}>
            Eyeing a Victorian near the square? Looking at Wolf Ranch new construction? Retiring to Sun City? Tell me your situation and we'll match the right program to your file — and give you the real payment number including property taxes, MUD overlay, and HOA before you fall in love with an address.
          </p>
          <div className="gtx-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
            <a className="gtx-btn" href={apply} target="_blank" rel="noopener noreferrer" style={btnPrimary}>Get Pre-Approved</a>
            <a className="gtx-btn" href={calendly} target="_blank" rel="noopener noreferrer" style={btnGhost}>Book a Strategy Call</a>
          </div>
          <p style={{ fontSize: 14, opacity: 0.85 }}>Or call/text: 254-935-9331</p>
        </div>
      </section>

      {/* ── 11. COMPLIANCE ───────────────────────────────────────────────── */}
      <section style={{ background: soft, padding: "32px 0", borderTop: `1px solid ${border}` }}>
        <div style={container}>
          <p style={{ fontSize: 12, lineHeight: 1.7, color: textSecondary, margin: "0 0 16px" }}>
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or rate guarantee. Market data approximate and subject to change. Property tax rates including MUD overlays vary by address and taxing entity — verify the specific rate for any property before relying on payment estimates. Down payment assistance program availability and credit score minimums subject to program rules in effect at time of application.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, fontSize: 13, fontFamily: "'Fira Mono', monospace" }}>
            <Link to="/va-loan-texas" style={{ color: copper, textDecoration: "none" }}>VA Loans Texas</Link>
            <Link to="/down-payment-assistance-texas" style={{ color: copper, textDecoration: "none" }}>Down Payment Assistance</Link>
            <Link to="/physician-loan-texas" style={{ color: copper, textDecoration: "none" }}>Physician Loans</Link>
            <Link to="/conventional-loan-texas" style={{ color: copper, textDecoration: "none" }}>Conventional Loans</Link>
            <a href={calendly} target="_blank" rel="noopener noreferrer" style={{ color: copper, textDecoration: "none" }}>Schedule a Call</a>
            <a href={apply} target="_blank" rel="noopener noreferrer" style={{ color: copper, textDecoration: "none" }}>Apply Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeorgetownMortgage;
