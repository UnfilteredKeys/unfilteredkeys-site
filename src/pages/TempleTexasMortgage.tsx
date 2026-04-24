import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

/* ── SEO ──────────────────────────────────────────────────────────────────── */
function useTempleSEO() {
  useEffect(() => {
    document.title = "Mortgage Broker Temple TX | Bell County Home Loans | Keys by Shalanda";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Temple TX mortgage broker for Baylor Scott & White professionals, Belton ISD families, and Bell County buyers. Physician, VA, FHA, and conventional loans.");
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://shalandasmith.com/temple-tx-mortgage");
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
const tag = (c = copper) => ({ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: c, fontFamily: "'Fira Mono', monospace", marginBottom: 12, fontWeight: 600 });
const h2Style = (c = textPrimary) => ({ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700 as const, color: c, lineHeight: 1.25, marginBottom: 14 });
const subStyle = (c = textSecondary) => ({ fontSize: 16, color: c, lineHeight: 1.7, maxWidth: 760, marginBottom: 32 });

const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply = "https://scl.my1003app.com/554554/register";

const stats = [
  { v: "$285K", l: "Median Home Price" },
  { v: "Belton ISD", l: "Highly Rated" },
  { v: "45 Min Austin · 35 Min Waco", l: "Central Location" },
  { v: "1.85%–2.10%", l: "Property Tax Rate" },
];

const neighborhoods = [
  { name: "Temple", price: "$240K–$290K", tag: "Largest selection · All price points", desc: "Temple's core neighborhoods offer the widest variety of price points and housing stock — from established mid-century neighborhoods near downtown to newer subdivisions on the north and east sides — with easy access to BSW, Scott & White Memorial, and the I-35 corridor." },
  { name: "Belton", price: "$270K–$330K", tag: "Top-rated schools · Belton ISD", desc: "Belton sits 8 miles south of Temple on I-35 and is consistently ranked among the strongest school districts in Central Texas. Buyers with school-age children often choose Belton over Temple proper and accept a slightly higher price point in exchange for Belton ISD. The city has a small-town feel with lake access to Belton Lake and Stillhouse Hollow." },
  { name: "Harker Heights", price: "$280K–$330K", tag: "Suburban feel · Military corridor", desc: "Harker Heights is 10 miles west on US-190 and serves as the suburban middle ground between the Fort Hood military corridor and Temple's healthcare hub. Newer construction throughout, quiet residential character, and Killeen ISD. Popular with dual-income households where one partner works at BSW and the other works on post." },
  { name: "Troy and Nolanville", price: "$230K–$270K", tag: "Most affordable · Growing fast", desc: "Troy (north of Temple on I-35) and Nolanville (between Killeen and Belton) are the fastest-growing affordable pockets in the corridor. Smaller towns, newer subdivisions, longer drives — but the price point attracts buyers who prioritize square footage and are willing to drive." },
  { name: "Morgan's Point Resort & Belton Lake", price: "$280K–$380K", tag: "Lake access · Custom homes", desc: "The lake corridor east of Belton offers custom homes, larger lots, and lake access to Belton Lake and Stillhouse Hollow. This segment attracts physicians and senior BSW staff looking for a primary residence with land and privacy without leaving Bell County." },
];

const programs = [
  { title: "Physician Loans", badgeColor: copper, items: ["No down payment required up to $1.5M", "No PMI regardless of down payment", "Student loan debt excluded or IBR payment used for DTI", "Available to MDs, DOs, DMDs, DVMs, and in some programs NPs and PAs"], note: "Ask about 1-day-out-of-residency eligibility and whether your specialty and graduation date qualify.", link: { to: "/physician-loan-texas", text: "Physician Loan Details →" } },
  { title: "Conventional Loans", badgeColor: navy, items: ["3% to 20% down", "PMI removable at 20% equity", "620 minimum credit score, best pricing at 740+", "Strong fit for Temple's median price point"], note: "HomeReady and Home Possible allow 3% down with income-based MI pricing for buyers at or below 80% AMI.", link: { to: "/conventional-loan-texas", text: "Conventional Loan Details →" } },
  { title: "FHA Plus DPA", badgeColor: "#2a7a7a", items: ["3.5% down at 580 credit, or 10% down at 500–579", "TDHCA My First Texas Home (620 min) and TSAHC Homes for Texas Heroes (620 min, available to nurses, teachers, first responders) can cover the full down payment"], note: "SETH 5 Star (640 minimum) also layers on FHA.", link: { to: "/down-payment-assistance-texas", text: "DPA Program Details →" } },
  { title: "VA Loans", badgeColor: copper, items: ["Zero down for eligible veterans and service members", "No PMI ever", "Fort Hood is 30 minutes west — Temple serves a significant veteran and active-duty population", "Bell County VA loan limit $832,750"], note: null, link: { to: "/va-loan-texas", text: "VA Loan Details →" } },
  { title: "USDA Rural Development", badgeColor: "#3B6D11", items: ["Zero down payment for eligible properties", "No monthly mortgage insurance premium", "Income limits apply", "Some addresses in Troy and rural Bell County qualify"], note: "Contact us to check your specific address before assuming ineligibility.", link: null },
];

const texasItems = [
  { badge: "Property taxes", body: "Bell County property taxes run 1.85% to 2.10% of assessed value — on a $285,000 home that adds $439 to $499 per month to your payment. We always quote your full PITI including taxes and insurance, never just principal and interest." },
  { badge: "Homestead exemption", body: "Texas reduces your taxable home value by $100,000 for your primary residence. File with Bell County Appraisal District in the year you close — it does not happen automatically and missing the filing window costs you money." },
  { badge: "VA disability exemption", body: "100% service-connected disability rating qualifies you for a complete property tax exemption on your Texas primary residence. File with Bell County Appraisal District using your VA award letter after closing — on a median Temple home this saves $5,200 to $5,900 per year." },
  { badge: "Belton ISD boundary", body: "The Belton ISD attendance zone does not follow city limits — some Temple addresses feed into Belton ISD and some do not. Verify the specific address before you fall in love with a house if the school district is a deciding factor." },
  { badge: "Option period", body: "Texas real estate contracts include a 5 to 10 day option period during which you can back out for any reason and keep your earnest money. Use it for inspection and do not waive it to appear more competitive." },
];

const faqs = [
  { q: "Is Temple in Bell County?", a: "Yes — Temple is the county seat of Bell County. Belton is also in Bell County and is home to Bell County government offices. Property taxes, appraisal district, and homestead exemption filings all go through Bell County Appraisal District." },
  { q: "How long does it take to close a mortgage in Temple?", a: "With complete documentation most purchases close in 21 to 30 days. Physician loans and conventional loans typically close on the same timeline. VA loans in the corridor can close in under 21 days when the file is clean and we have PCS order urgency. Tell us your closing date target upfront and we build the timeline around it." },
  { q: "Can I use the physician loan if I just finished residency?", a: "Yes — most physician loan programs are specifically designed for new attendings. Some lenders allow closing up to 90 days before your start date and will accept a signed employment contract as income verification in place of pay stubs. Ask us which programs apply to your specialty and graduation date." },
  { q: "Is Temple a good market for first-time buyers right now?", a: "Yes. Temple's median price point is accessible relative to Austin and the surrounding metro, inventory has been sitting longer than during the 2021 to 2022 peak giving buyers real negotiating leverage, and DPA programs like TDHCA and TSAHC are fully available in Bell County. A first-time buyer at 620 credit or above has multiple paths to $0 out of pocket at closing." },
  { q: "Do USDA loans work in Temple?", a: "Some addresses in Troy north of Temple and rural areas of Bell County qualify for USDA Rural Development zero-down financing. Temple proper and Belton do not qualify as they exceed USDA population thresholds. We check USDA eligibility for every buyer at no cost so you know before you start shopping." },
  { q: "What is the commute from Temple to Austin like?", a: "Temple to downtown Austin is approximately 65 miles via I-35. In normal traffic the drive runs 55 to 70 minutes. Many BSW professionals and remote workers find the commute acceptable 1 to 3 days per week and the price differential versus Austin-area housing more than compensates for the drive." },
  { q: "Should I buy in Temple or wait for rates to drop?", a: "This is a question only you can answer based on your personal timeline and financial situation. What we can tell you is that Temple's price point is accessible today, sellers are negotiating, and a VA or physician loan buyer with strong credit can lock in favorable terms now. If rates drop meaningfully in the future a refinance is a real option. Waiting for rates while renting means paying someone else's mortgage in a market that consistently appreciates." },
];

const TempleTexasMortgage = () => {
  useTempleSEO();

  return (
    <>
      <SEO {...(seoMeta as any).templeTxMortgage} />
      <style>{`
        .ttx-btn:hover{opacity:.92}
        .ttx-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .ttx-grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
        @media(max-width:900px){.ttx-grid-3,.ttx-grid-2{grid-template-columns:1fr}}
        .ttx-faq summary{cursor:pointer;list-style:none;padding:18px 0;font-family:'Lora',serif;font-size:18px;font-weight:600;color:${navy};display:flex;justify-content:space-between;align-items:center;gap:16px}
        .ttx-faq summary::after{content:"+";color:${copper};font-size:24px;font-weight:300;transition:transform .2s}
        .ttx-faq[open] summary::after{content:"−"}
        .ttx-faq p{padding:0 0 18px;color:${textSecondary};line-height:1.7;margin:0;font-size:15px}
        .ttx-faq{border-bottom:1px solid ${border}}
      `}</style>

      {/* HERO */}
      <section style={{ background: hero, color: ivory, padding: "88px 0 96px" }}>
        <div style={container}>
          <div style={tag("#e8b47d")}>Temple, TX · Mortgage Broker · Central Texas</div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, fontWeight: 700, lineHeight: 1.15, marginBottom: 20, maxWidth: 880 }}>
            Buying a Home in Temple, TX. The Market Is Moving — and So Are the People Who Work at Baylor Scott & White.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "#d8d4cb", maxWidth: 780, marginBottom: 32 }}>
            Temple is one of the fastest-growing healthcare markets in Texas. Whether you're relocating for a position at BSW, buying your first home in Belton ISD, or moving up from a starter home in the corridor — we know this market and we close here regularly.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={apply} target="_blank" rel="noopener noreferrer" className="ttx-btn" style={{ background: copper, color: white, padding: "14px 28px", borderRadius: radius, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Get Pre-Approved</a>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="ttx-btn" style={{ background: "transparent", color: ivory, padding: "14px 28px", borderRadius: radius, border: `1.5px solid ${ivory}`, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Book a Strategy Call</a>
          </div>
        </div>
      </section>

      {/* COPPER STATS BAR */}
      <section style={{ background: copper, color: white, padding: "28px 0" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24 }}>
            {stats.map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Lora',serif", fontSize: 22, fontWeight: 700 }}>{s.v}</div>
                <div style={{ fontFamily: "'Fira Mono',monospace", fontSize: 11, letterSpacing: "1.2px", textTransform: "uppercase", opacity: .9, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TEMPLE IS GROWING */}
      <section style={{ background: white, ...sectionPad }}>
        <div style={container}>
          <h2 style={h2Style()}>Why Temple Is Growing</h2>
          <p style={subStyle()}>
            Temple sits at the intersection of I-35 and US-190 in Bell County — 45 minutes from Austin, 35 minutes from Waco, and anchored by the flagship Baylor Scott & White Medical Center, one of the largest nonprofit health systems in Texas. The healthcare sector drives consistent relocation demand from physicians, nurses, allied health professionals, and administrative staff. Temple's price point — roughly $285K median — makes it one of the most accessible mid-size Texas markets for buyers priced out of Austin but unwilling to compromise on schools or commute. That combination of employment anchor, price accessibility, and location is why inventory moves faster here than the surface stats suggest.
          </p>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section style={{ background: parchment, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>Know the Area</div>
          <h2 style={h2Style()}>Temple Neighborhoods and Price Guide</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20, marginTop: 32 }}>
            {neighborhoods.map(n => (
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
          <h2 style={h2Style(ivory)}>Loan Programs for Temple Buyers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20, marginTop: 32 }}>
            {programs.map(p => (
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

      {/* TEXAS-SPECIFIC */}
      <section style={{ background: white, ...sectionPad }}>
        <div style={container}>
          <div style={tag()}>Texas-Specific</div>
          <h2 style={h2Style()}>Texas Details That Affect Your Payment in Bell County</h2>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            {texasItems.map(t => (
              <div key={t.badge} style={{ borderLeft: `4px solid ${copper}`, background: parchment, padding: "20px 24px", borderRadius: 4 }}>
                <div style={{ fontFamily: "'Fira Mono',monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: copper, fontWeight: 700, marginBottom: 8 }}>{t.badge}</div>
                <p style={{ margin: 0, color: textOnPale, fontSize: 15, lineHeight: 1.65 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORT HOOD CALLOUT */}
      <section style={{ background: parchment, ...sectionPad }}>
        <div style={container}>
          <div style={{ background: white, borderLeft: `4px solid ${copper}`, borderRadius: radius, padding: "32px 36px", boxShadow: "0 2px 8px rgba(28,38,48,0.06)" }}>
            <h2 style={{ ...h2Style(), fontSize: 26, marginBottom: 12 }}>In the Fort Hood and VA Corridor</h2>
            <p style={{ color: textOnPale, fontSize: 15.5, lineHeight: 1.7, marginBottom: 20 }}>
              Temple is 30 minutes east of Fort Hood — close enough that many active-duty families choose Temple or Belton for schools and community while serving at Fort Hood. If you are VA eligible the VA loan is almost always your strongest program, and Bell County's loan limit of $832,750 is well above any Temple price point.
            </p>
            <Link to="/calculators?tab=bah-buying-power" style={{ display: "inline-block", background: copper, color: white, padding: "12px 22px", borderRadius: radius, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}>See the BAH and Buying Power Calculator →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: cream, ...sectionPad }}>
        <div style={{ ...container, maxWidth: 880 }}>
          <h2 style={h2Style()}>What Temple Buyers Ask Us Most</h2>
          <div style={{ marginTop: 24 }}>
            {faqs.map((f, i) => (
              <details key={i} className="ttx-faq">
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
          <h2 style={{ ...h2Style(ivory), fontSize: 36 }}>Ready to Buy in Temple?</h2>
          <p style={{ fontSize: 17, color: "#d8d4cb", lineHeight: 1.65, maxWidth: 720, margin: "0 auto 32px" }}>
            We close in Bell County regularly. Book a strategy call and we'll run your numbers — physician loan, VA, conventional, or FHA — before you look at a single house.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href={apply} target="_blank" rel="noopener noreferrer" className="ttx-btn" style={{ background: copper, color: white, padding: "14px 28px", borderRadius: radius, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Get Pre-Approved</a>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="ttx-btn" style={{ background: "transparent", color: ivory, padding: "14px 28px", borderRadius: radius, border: `1.5px solid ${ivory}`, fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Book a Strategy Call</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TempleTexasMortgage;
