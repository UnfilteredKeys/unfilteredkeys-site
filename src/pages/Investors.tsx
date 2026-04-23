import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const GOLD = "#e8b47d";
const IVORY = "#faf8f4";
const PARCHMENT = "#f5efe2";
const CREAM = "#f9f5ec";
const INK = "#1c2630";

const APPLY_URL = "https://scl.my1003app.com/554554/register";
const CALL_URL = "https://calendly.com/shalanda-securechoicelending/30min";

const stats = [
  { v: "No Income Docs", l: "DSCR Loans" },
  { v: "50+", l: "Lender Network" },
  { v: "10", l: "Financed Properties — Conventional Max" },
  { v: "12–24 mo", l: "Deposits — Bank Statement Loans" },
];

const personas = [
  {
    t: "Starting Your Portfolio",
    b: "You have W-2 or self-employment income, solid credit, and you're ready to buy your first rental property. Conventional investment loans, FHA house-hacking, and DSCR programs all have a path for you. We'll show you which structure gets you in with the least friction and the best terms.",
    link: "See beginner investor options →",
  },
  {
    t: "Scaling an Existing Portfolio",
    b: "You already own properties but your tax returns don't show enough income to keep qualifying. That's not a dead end — it's a signal to switch loan structures. DSCR, bank statement, and asset depletion loans qualify based on what your properties produce, not what your Schedule E shows.",
    link: "See scaling options →",
  },
];

const dscrScenarios = [
  { v: "DSCR 1.25+", label: "Strong File", b: "Rent exceeds payment by 25% or more. Best pricing, lowest rates, widest lender options." },
  { v: "DSCR 1.0–1.24", label: "Solid File", b: "Rent covers the payment. Qualifies with most DSCR lenders at standard pricing." },
  { v: "DSCR Below 1.0", label: "Compensating Factors Required", b: "Rent doesn't fully cover payment. Some lenders will approve with strong credit, reserves, or lower LTV. Ask us which lenders allow this." },
];

const dscrFeatures = [
  "No personal income documents required",
  "No employment verification",
  "No tax returns",
  "Qualifies on subject property rent (actual lease or appraiser market rent estimate)",
  "Available for short-term rental properties with documented income",
  "Loan amounts from $100K to $3M+",
  "Available in LLCs and entities (see LLC section below)",
  "Credit minimum typically 620–640 depending on lender",
  "Reserves of 6–12 months PITIA typically required",
];

const programs = [
  { icon: "🏘️", t: "DSCR Loan", badge: "No Income Docs", b: "Qualify on rental income not personal income. No tax returns, no employment verification. Ideal for investors with multiple properties or complex tax returns." },
  { icon: "🏦", t: "Bank Statement Loan", badge: "Self-Employed Investors", b: "12 or 24 months of business or personal bank deposits used to calculate qualifying income. No tax returns required. Strong option when write-offs reduce your reported income significantly." },
  { icon: "💰", t: "Asset Depletion Loan", badge: "High Net Worth", b: "Qualify based on liquid assets — retirement accounts, brokerage accounts, savings. Assets are divided over a set term to create a qualifying income stream. No employment required." },
  { icon: "📋", t: "Conventional Investment", badge: "Up to 10 Properties", b: "Standard Fannie Mae and Freddie Mac guidelines allow up to 10 financed properties. 15–25% down on investment properties. Best rates when credit is 740+ and reserves are strong." },
  { icon: "🔨", t: "Fix and Flip Bridge", badge: "Short-Term", b: "Short-term financing for purchase and renovation of investment properties. Interest-only payments during rehab. Ask us about current bridge loan options and terms." },
  { icon: "🎖️", t: "PCS to Portfolio", badge: "Military Investors", b: "Active duty and veterans using VA loans to house-hack or retain a previous primary residence as a rental while purchasing a new primary. A powerful zero-down strategy for building long-term wealth.", to: "/pcs-to-portfolio" },
];

const llcPoints = [
  "Not all loan programs allow entity ownership (conventional Fannie Mae and Freddie Mac loans generally do not — DSCR and some portfolio products do)",
  "Lenders who allow LLC vesting typically require you to personally guarantee the loan",
  "The LLC usually needs to be established before closing and some lenders require it to have been active for a minimum period",
  "Title insurance and closing documents will reflect the entity name",
  "Interest rates on entity-vested loans may be slightly higher than personal vesting on the same program",
];

const faqs = [
  { q: "How many properties can I finance at once?", a: "Conventional Fannie Mae and Freddie Mac allow up to 10 financed properties with increasingly strict reserve requirements as the count grows. DSCR and portfolio loans have no set limit on property count and qualify each deal on its own merits." },
  { q: "Do I need a property management company to get a DSCR loan?", a: "No — most DSCR lenders do not require professional property management, but you will need to document rental income through either an executed lease agreement or a market rent appraisal (form 1007) if the property is vacant." },
  { q: "Can I use projected rental income to qualify?", a: "Yes on DSCR loans — if the property is vacant or being purchased as a new rental, most lenders will accept the appraiser's market rent estimate from form 1007 rather than requiring an existing lease." },
  { q: "What reserves do I need for an investment property loan?", a: "Conventional investment loans typically require 6 months PITIA in reserves per financed property. DSCR lenders commonly require 6 to 12 months reserves for the subject property. Reserves can be in checking, savings, retirement accounts (at 60–70% of value), or brokerage accounts." },
  { q: "Can I do a cash-out refinance on an investment property?", a: "Yes — DSCR cash-out refinances are available on investment properties up to 75% LTV in most cases. You can pull equity from an existing rental to fund the purchase of another property without using personal income to qualify." },
  { q: "What credit score do I need for a DSCR loan?", a: "Most DSCR lenders require a minimum 620 to 640 credit score. Pricing improves significantly at 680 and above. Some lenders will go to 600 with stronger compensating factors like lower LTV or larger reserves." },
  { q: "Can I buy a short-term rental with a DSCR loan?", a: "Yes — some DSCR lenders accept short-term rental income from platforms like Airbnb and VRBO using 12 to 24 months of documented platform income or a market rent appraisal. Not all lenders allow this so ask specifically." },
];

const InvestorsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO {...seoMeta.investors} />

      <style>{`
        .inv { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.7; -webkit-font-smoothing: antialiased; }
        .inv *, .inv *::before, .inv *::after { box-sizing: border-box; }
        .inv h1, .inv h2, .inv h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -0.01em; line-height: 1.15; }
        .inv .wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }

        .inv-hero { background: ${NAVY}; color: ${IVORY}; padding: 88px 0 96px; }
        .inv-eyebrow { font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2.4px; text-transform: uppercase; color: ${GOLD}; margin-bottom: 22px; }
        .inv-h1 { font-size: clamp(34px, 5vw, 56px); font-weight: 600; max-width: 920px; margin-bottom: 22px; }
        .inv-sub { font-size: 18px; line-height: 1.65; color: rgba(250,248,244,0.82); max-width: 760px; margin-bottom: 36px; }
        .inv-cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary { background: ${COPPER}; color: #fff; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s; }
        .btn-primary:hover { background: #9d521a; }
        .btn-outline { border: 1.5px solid ${IVORY}; color: ${IVORY}; padding: 13px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s, color .18s; }
        .btn-outline:hover { background: ${IVORY}; color: ${NAVY}; }

        .inv-stats { background: ${COPPER}; color: #fff; }
        .inv-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .inv-stat { padding: 28px 22px; text-align: center; border-right: 1px solid rgba(255,255,255,0.18); }
        .inv-stat:last-child { border-right: none; }
        .inv-stat-v { font-family: 'Lora', Georgia, serif; font-size: 26px; font-weight: 700; line-height: 1.1; margin-bottom: 6px; }
        .inv-stat-l { font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase; opacity: 0.92; }
        @media (max-width: 720px) { .inv-stats-grid { grid-template-columns: repeat(2, 1fr); } .inv-stat:nth-child(2) { border-right: none; } }

        .inv-section { padding: 88px 0; }
        .inv-section-white { background: #ffffff; }
        .inv-section-navy { background: ${NAVY}; color: ${IVORY}; position: relative; overflow: hidden; }
        .inv-section-navy::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 70% 30%, rgba(232,180,125,0.10), transparent 60%); pointer-events: none; }
        .inv-section-navy .wrap { position: relative; }
        .inv-section-parchment { background: ${PARCHMENT}; }
        .inv-section-cream { background: ${CREAM}; }
        .inv-section-dark { background: linear-gradient(135deg, ${NAVY} 0%, #122a44 100%); color: ${IVORY}; }

        .inv-h2 { font-size: clamp(28px, 3.8vw, 42px); font-weight: 600; margin-bottom: 24px; max-width: 880px; }
        .inv-section-navy .inv-h2, .inv-section-dark .inv-h2 { color: ${IVORY}; }
        .inv-lead { font-size: 16.5px; max-width: 820px; margin-bottom: 40px; color: rgba(250,248,244,0.82); }

        .persona-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
        @media (max-width: 800px) { .persona-grid { grid-template-columns: 1fr; } }
        .persona-card { background: ${CREAM}; border-left: 4px solid ${COPPER}; padding: 36px 32px; border-radius: 4px; }
        .persona-t { font-family: 'Lora', Georgia, serif; font-size: 24px; font-weight: 600; color: ${NAVY}; margin-bottom: 14px; }
        .persona-b { font-size: 15.5px; color: #3d4754; line-height: 1.75; margin-bottom: 18px; }
        .persona-link { font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600; color: ${COPPER}; text-decoration: none; letter-spacing: 0.2px; }
        .persona-link:hover { color: #9d521a; }

        .dscr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 28px; }
        @media (max-width: 900px) { .dscr-grid { grid-template-columns: 1fr; } }
        .dscr-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(232,180,125,0.22); border-top: 3px solid ${COPPER}; padding: 26px 24px; border-radius: 4px; }
        .dscr-v { font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 700; color: ${GOLD}; margin-bottom: 6px; }
        .dscr-label { font-family: 'Fira Mono', monospace; font-size: 11px; letter-spacing: 1.6px; text-transform: uppercase; color: ${COPPER}; margin-bottom: 14px; }
        .dscr-b { font-size: 14.5px; color: rgba(250,248,244,0.82); line-height: 1.7; }

        .dscr-features { margin-top: 44px; max-width: 880px; }
        .dscr-features-h { font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: ${GOLD}; margin-bottom: 18px; }
        .dscr-features ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 28px; }
        @media (max-width: 700px) { .dscr-features ul { grid-template-columns: 1fr; } }
        .dscr-features li { font-size: 14.5px; color: rgba(250,248,244,0.85); padding-left: 22px; position: relative; line-height: 1.6; }
        .dscr-features li::before { content: '✓'; position: absolute; left: 0; color: ${COPPER}; font-weight: 700; }

        .prog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        @media (max-width: 900px) { .prog-grid { grid-template-columns: 1fr; } }
        .prog-card { background: #fff; border-top: 3px solid ${COPPER}; padding: 28px 26px; border-radius: 4px; display: flex; flex-direction: column; }
        .prog-icon { font-size: 28px; margin-bottom: 12px; }
        .prog-badge { display: inline-block; font-family: 'Fira Mono', monospace; font-size: 10.5px; letter-spacing: 1.4px; text-transform: uppercase; color: ${COPPER}; background: rgba(181,98,30,0.10); padding: 4px 10px; border-radius: 3px; margin-bottom: 12px; align-self: flex-start; }
        .prog-t { font-family: 'Lora', Georgia, serif; font-size: 20px; font-weight: 600; color: ${NAVY}; margin-bottom: 10px; }
        .prog-b { font-size: 14.5px; color: #3d4754; line-height: 1.7; flex-grow: 1; }
        .prog-link { display: inline-block; margin-top: 14px; font-size: 13.5px; font-weight: 600; color: ${COPPER}; text-decoration: none; }
        .prog-link:hover { color: #9d521a; }

        .llc-callout { background: ${CREAM}; border-left: 4px solid ${COPPER}; padding: 32px 32px; border-radius: 4px; max-width: 920px; margin-top: 8px; }
        .llc-intro { font-size: 16px; color: #3d4754; line-height: 1.75; margin-bottom: 18px; }
        .llc-callout ul { list-style: none; padding: 0; margin: 0; }
        .llc-callout li { font-size: 15px; color: #3d4754; padding: 8px 0 8px 22px; position: relative; line-height: 1.65; border-bottom: 1px solid rgba(28,38,48,0.08); }
        .llc-callout li:last-child { border-bottom: none; }
        .llc-callout li::before { content: '•'; position: absolute; left: 4px; color: ${COPPER}; font-weight: 700; }
        .llc-disclaimer { margin-top: 22px; font-size: 13px; font-style: italic; color: #6b7280; max-width: 920px; }

        .faq-list { max-width: 820px; }
        .faq-item { border-bottom: 1px solid #ddd8cf; }
        .faq-item summary { list-style: none; cursor: pointer; padding: 22px 0; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; color: ${NAVY}; display: flex; justify-content: space-between; align-items: center; gap: 18px; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after { content: '+'; color: ${COPPER}; font-size: 26px; font-weight: 400; flex-shrink: 0; transition: transform .18s; }
        .faq-item[open] summary::after { content: '−'; }
        .faq-a { padding: 0 0 22px; font-size: 15.5px; color: #3d4754; line-height: 1.75; max-width: 760px; }

        .inv-cta-final { text-align: center; padding: 96px 0; }
        .inv-cta-final .inv-h2 { margin-left: auto; margin-right: auto; margin-bottom: 18px; text-align: center; }
        .inv-cta-final .inv-cta-sub { font-size: 17px; color: rgba(250,248,244,0.82); max-width: 700px; margin: 0 auto 32px; }
        .inv-cta-final .inv-cta-row { justify-content: center; }
      `}</style>

      <div className="inv">
        {/* HERO */}
        <section className="inv-hero">
          <div className="wrap">
            <div className="inv-eyebrow">Real Estate Investors · Texas Mortgage</div>
            <h1 className="inv-h1">Whether You Own One Property or Ten, the Right Loan Structure Changes Everything.</h1>
            <p className="inv-sub">Most investors hit a wall when their personal income stops qualifying them for more. We specialize in the loan programs that break through that ceiling — DSCR, bank statement, asset-based, and beyond.</p>
            <div className="inv-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get Pre-Approved</a>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Strategy Call</a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="inv-stats">
          <div className="inv-stats-grid">
            {stats.map((s) => (
              <div className="inv-stat" key={s.l}>
                <div className="inv-stat-v">{s.v}</div>
                <div className="inv-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PERSONAS */}
        <section className="inv-section inv-section-white">
          <div className="wrap">
            <h2 className="inv-h2" style={{ color: NAVY, marginBottom: 48 }}>Which Investor Are You?</h2>
            <div className="persona-grid">
              {personas.map((p) => (
                <div className="persona-card" key={p.t}>
                  <div className="persona-t">{p.t}</div>
                  <p className="persona-b">{p.b}</p>
                  <a href="#programs" className="persona-link">{p.link}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DSCR DEEP DIVE */}
        <section className="inv-section inv-section-navy">
          <div className="wrap">
            <div className="inv-eyebrow">Deep Dive</div>
            <h2 className="inv-h2">DSCR Loans — The Investor's Most Powerful Tool</h2>
            <p className="inv-lead">
              DSCR stands for Debt Service Coverage Ratio. Instead of qualifying on your personal income, the loan qualifies based on the rental income the subject property generates. The formula is simple — monthly rent divided by monthly PITIA (principal, interest, taxes, insurance, and association dues). A DSCR of 1.0 means rent exactly covers the payment. Most programs require 1.0 to 1.25. Some allow below 1.0 with stronger compensating factors.
            </p>
            <div className="dscr-grid">
              {dscrScenarios.map((d) => (
                <div className="dscr-card" key={d.v}>
                  <div className="dscr-v">{d.v}</div>
                  <div className="dscr-label">{d.label}</div>
                  <p className="dscr-b">{d.b}</p>
                </div>
              ))}
            </div>
            <div className="dscr-features">
              <div className="dscr-features-h">Key DSCR Features</div>
              <ul>
                {dscrFeatures.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="inv-section inv-section-parchment" id="programs">
          <div className="wrap">
            <h2 className="inv-h2" style={{ color: NAVY, marginBottom: 48 }}>All Investor Loan Programs</h2>
            <div className="prog-grid">
              {programs.map((p) => (
                <div className="prog-card" key={p.t}>
                  <div className="prog-icon">{p.icon}</div>
                  <span className="prog-badge">{p.badge}</span>
                  <div className="prog-t">{p.t}</div>
                  <p className="prog-b">{p.b}</p>
                  {p.to && <Link to={p.to} className="prog-link">Learn more →</Link>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LLC */}
        <section className="inv-section inv-section-white">
          <div className="wrap">
            <h2 className="inv-h2" style={{ color: NAVY, marginBottom: 24 }}>Buying Under an LLC — What You Should Know</h2>
            <div className="llc-callout">
              <p className="llc-intro">
                Many DSCR lenders allow — and some prefer — loans made to an LLC or other legal entity rather than an individual. This can offer operational benefits for investors managing multiple properties. A few things to understand before you ask your lender:
              </p>
              <ul>
                {llcPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <p className="llc-disclaimer">This is general educational information about how certain mortgage programs work. It is not legal or tax advice. Consult a licensed attorney and CPA before making decisions about entity structure for real estate investment.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="inv-section inv-section-cream">
          <div className="wrap">
            <h2 className="inv-h2" style={{ color: NAVY, marginBottom: 40 }}>What Investors Ask Us Most</h2>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <details key={f.q} className="faq-item" open={openFaq === i} onToggle={(e) => {
                  if ((e.currentTarget as HTMLDetailsElement).open) setOpenFaq(i);
                  else if (openFaq === i) setOpenFaq(null);
                }}>
                  <summary>{f.q}</summary>
                  <div className="faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="inv-section-dark inv-cta-final">
          <div className="wrap">
            <h2 className="inv-h2">Ready to Structure Your Next Investment?</h2>
            <p className="inv-cta-sub">Tell us what you own, what you're trying to acquire, and what your current income picture looks like. We'll show you which loan structure gets you there.</p>
            <div className="inv-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get Pre-Approved</a>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Strategy Call</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InvestorsPage;
