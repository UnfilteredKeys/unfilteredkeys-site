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
  { v: "3.5%", l: "Minimum Down Payment" },
  { v: "580", l: "Minimum Credit Score" },
  { v: "50+", l: "Lender Network" },
  { v: "21 Days", l: "Average Close" },
];

const tiers = [
  {
    range: "580–619",
    label: "FHA is the Path",
    body: "FHA is typically the clearest path at this range. Conventional is unavailable or very expensive. 3.5% down required. MIP is a real cost, but conventional isn't a realistic alternative at this credit level. VA — if eligible — is always the stronger option.",
  },
  {
    range: "620–659",
    label: "Run Both Side by Side",
    body: "Both FHA and conventional are available. At this range, MIP lifetime cost on FHA can exceed the higher rate on conventional over a 5–7 year hold. Credit score directly affects conventional pricing through LLPAs — have your broker model both.",
  },
  {
    range: "660–739",
    label: "Conventional Often Wins",
    body: "Conventional frequently wins on total cost of ownership at this range. PMI is removable at 20% equity, while FHA MIP is not if you put less than 10% down. Still worth modeling both — especially with DPA layered in.",
  },
  {
    range: "740+",
    label: "Conventional Almost Always Wins",
    body: "Conventional is almost always the better structure here. Best available pricing, lowest PMI tiers, removable mortgage insurance, no upfront MIP.",
  },
];

const dpas = [
  { t: "TDHCA My First Texas Home", b: "620 minimum credit. Up to 5% as a silent second lien. Statewide. Income limits apply. Combinable with FHA 203k renovation." },
  { t: "TSAHC Homes for Texas Heroes", b: "620 minimum credit. Non-repayable grant — no payback required. Available to teachers, nurses, first responders, veterans, and corrections officers. Statewide." },
  { t: "SETH 5 Star", b: "640 minimum credit. No first-time buyer requirement. Layers on top of FHA, including 203k renovation loans." },
  { t: "SETH GoldStar", b: "620 minimum credit. No first-time buyer requirement. Flexible income limits. Ask about current availability." },
  { t: "Chenoa Fund", b: "600 minimum credit. Covers the FHA 3.5% down payment requirement. Repayable and non-repayable versions available. No income limit on the repayable version." },
  { t: "Investor DPA", b: "580 minimum credit. Available when state programs are not an option. Ask about current availability and structure." },
];

const flags = [
  { t: "Roof Condition", b: "FHA requires the roof to have at least 2 years of remaining life. A roof near end of life will trigger a required repair before closing." },
  { t: "Foundation Issues", b: "Visible cracks or settlement are flagged. In Texas, expansive clay soils make this more common than in other states." },
  { t: "Peeling Paint", b: "On homes built before 1978, peeling paint triggers a lead-based paint concern and must be remediated before closing." },
  { t: "Missing Handrails", b: "Any staircase with more than 3 steps requires a handrail. A common flag on older Texas homes." },
  { t: "Standing Water or Drainage", b: "Pooling water under or around the home is flagged. Important in Houston and low-lying areas." },
  { t: "Inoperable Systems", b: "HVAC, plumbing, and electrical must be functional at appraisal. Broken systems are a required repair, not a note." },
  { t: "Broken Windows", b: "Cracked or broken glass is flagged. In Texas heat, this is also a habitability concern." },
  { t: "No Ground-to-Home Clearance", b: "Wood siding must maintain clearance from the soil. Common issue on older pier-and-beam homes." },
];

const faqs = [
  {
    q: "Can I use FHA to buy a duplex or triplex?",
    a: "Yes. FHA allows purchase of 2 to 4 unit properties as long as you occupy one unit as your primary residence. This is called house-hacking, and it's one of the most effective ways to start building a rental portfolio. Rental income from the other units can be used to help qualify.",
  },
  {
    q: "How long does FHA MIP last?",
    a: "If you put less than 10% down, MIP stays for the life of the loan — this is the most important difference from conventional PMI, which is removable at 20% equity. If you put 10% or more down, MIP drops off after 11 years. For many buyers, the strategy is to refinance into conventional once they reach 20% equity and eliminate MIP at that point.",
  },
  {
    q: "Can I get an FHA loan if I had a bankruptcy or foreclosure?",
    a: "Yes — with waiting periods. Chapter 7 bankruptcy requires 2 years from discharge with re-established credit. Chapter 13 requires 1 year of on-time payments in the plan with court approval. Foreclosure requires 3 years from the date the title transferred. These are FHA guidelines — individual lenders may have overlays that extend them.",
  },
  {
    q: "Does FHA require the home to be move-in ready?",
    a: "FHA has minimum property standards that the appraiser checks — the home must be safe, sound, and sanitary. It does not have to be perfect, but it cannot have safety hazards, inoperable systems, or significant structural issues without those being repaired before closing. The FHA 203k loan exists specifically to handle properties that need work.",
  },
  {
    q: "Can I have a co-borrower on an FHA loan who won't live in the home?",
    a: "Yes. FHA allows non-occupant co-borrowers — for example, a parent helping a child qualify. The co-borrower's income and credit are included in the qualification. The occupying borrower still needs to meet minimum credit requirements. This is a useful tool when income is the limiting factor.",
  },
  {
    q: "What is the FHA loan limit in Texas?",
    a: "FHA loan limits vary by county and are updated annually. In most Texas counties, the 2024 limit for a single-family home is $498,257. In higher-cost areas like Austin, the limit is higher. Properties above the limit require jumbo or conventional financing. Ask us for the current limit in your specific county.",
  },
];

const FhaLoanTexasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO {...seoMeta.fhaLoanTexas} />

      <style>{`
        .fha { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.7; -webkit-font-smoothing: antialiased; }
        .fha *, .fha *::before, .fha *::after { box-sizing: border-box; }
        .fha h1, .fha h2, .fha h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -0.01em; line-height: 1.15; }
        .fha .wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }

        .fha-hero { background: ${NAVY}; color: ${IVORY}; padding: 88px 0 96px; }
        .fha-eyebrow { font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2.4px; text-transform: uppercase; color: ${GOLD}; margin-bottom: 22px; }
        .fha-h1 { font-size: clamp(34px, 5vw, 56px); font-weight: 600; max-width: 920px; margin-bottom: 22px; }
        .fha-sub { font-size: 18px; line-height: 1.65; color: rgba(250,248,244,0.82); max-width: 760px; margin-bottom: 36px; }
        .fha-cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary { background: ${COPPER}; color: #fff; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s; }
        .btn-primary:hover { background: #9d521a; }
        .btn-outline { border: 1.5px solid ${IVORY}; color: ${IVORY}; padding: 13px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s, color .18s; }
        .btn-outline:hover { background: ${IVORY}; color: ${NAVY}; }

        .fha-stats { background: ${COPPER}; color: #fff; }
        .fha-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .fha-stat { padding: 28px 22px; text-align: center; border-right: 1px solid rgba(255,255,255,0.18); }
        .fha-stat:last-child { border-right: none; }
        .fha-stat-v { font-family: 'Lora', Georgia, serif; font-size: 32px; font-weight: 700; line-height: 1; margin-bottom: 6px; }
        .fha-stat-l { font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase; opacity: 0.92; }
        @media (max-width: 720px) { .fha-stats-grid { grid-template-columns: repeat(2, 1fr); } .fha-stat:nth-child(2) { border-right: none; } }

        .fha-section { padding: 88px 0; }
        .fha-section-white { background: #ffffff; }
        .fha-section-navy { background: ${NAVY}; color: ${IVORY}; position: relative; overflow: hidden; }
        .fha-section-navy::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at top right, rgba(232,180,125,0.12), transparent 60%); pointer-events: none; }
        .fha-section-parchment { background: ${PARCHMENT}; }
        .fha-section-cream { background: ${CREAM}; }
        .fha-section-dark { background: linear-gradient(135deg, ${NAVY} 0%, #122a44 100%); color: ${IVORY}; }

        .fha-h2 { font-size: clamp(28px, 3.8vw, 42px); font-weight: 600; margin-bottom: 24px; max-width: 900px; }
        .fha-section-navy .fha-h2, .fha-section-dark .fha-h2 { color: ${IVORY}; position: relative; }
        .fha-lede { font-size: 17px; color: #3d4754; max-width: 820px; margin-bottom: 28px; }
        .fha-section-navy .fha-lede, .fha-section-dark .fha-lede { color: rgba(250,248,244,0.82); position: relative; }
        .fha-body { font-size: 16px; color: #3d4754; max-width: 820px; margin-bottom: 18px; }
        .fha-section-navy .fha-body, .fha-section-dark .fha-body { color: rgba(250,248,244,0.82); position: relative; }

        .tier-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .tier-row { background: #fff; border-left: 4px solid ${COPPER}; padding: 22px 26px; border-radius: 4px; display: grid; grid-template-columns: 180px 1fr; gap: 24px; align-items: start; }
        @media (max-width: 720px) { .tier-row { grid-template-columns: 1fr; gap: 8px; } }
        .tier-range { font-family: 'Lora', Georgia, serif; font-size: 24px; font-weight: 700; color: ${NAVY}; }
        .tier-label { font-family: 'Fira Mono', monospace; font-size: 11px; letter-spacing: 1.4px; text-transform: uppercase; color: ${COPPER}; margin-top: 6px; }
        .tier-body { font-size: 15px; color: #3d4754; line-height: 1.7; }

        .calc-callout { margin-top: 32px; background: ${COPPER}; color: #fff; padding: 28px 32px; border-radius: 6px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; }
        .calc-callout-text { font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; }
        .calc-btn { background: #fff; color: ${COPPER}; padding: 12px 22px; border-radius: 6px; font-weight: 600; font-size: 14.5px; text-decoration: none; transition: background .18s; }
        .calc-btn:hover { background: ${IVORY}; }

        .dpa-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; position: relative; }
        @media (max-width: 800px) { .dpa-grid { grid-template-columns: 1fr; } }
        .dpa-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(232,180,125,0.22); border-left: 3px solid ${COPPER}; padding: 24px 26px; border-radius: 4px; }
        .dpa-t { font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; color: ${GOLD}; margin-bottom: 10px; }
        .dpa-b { font-size: 14.5px; color: rgba(250,248,244,0.82); line-height: 1.7; }
        .dpa-disclaimer { margin-top: 28px; font-size: 12.5px; color: rgba(250,248,244,0.55); font-style: italic; max-width: 880px; position: relative; }

        .k203-link { display: inline-block; margin-top: 18px; color: ${COPPER}; font-weight: 600; text-decoration: none; border-bottom: 1px solid ${COPPER}; padding-bottom: 2px; font-size: 15px; }
        .k203-link:hover { color: #9d521a; }

        .flag-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 12px; }
        @media (max-width: 800px) { .flag-grid { grid-template-columns: 1fr; } }
        .flag-card { background: ${CREAM}; border-left: 3px solid ${COPPER}; padding: 22px 24px; border-radius: 4px; }
        .flag-t { font-family: 'Lora', Georgia, serif; font-size: 18px; font-weight: 600; color: ${NAVY}; margin-bottom: 8px; }
        .flag-b { font-size: 14.5px; color: #3d4754; line-height: 1.65; }
        .flag-note { margin-top: 28px; font-size: 15.5px; color: #3d4754; max-width: 820px; font-style: italic; }

        .faq-list { max-width: 820px; }
        .faq-item { border-bottom: 1px solid #ddd8cf; }
        .faq-item summary { list-style: none; cursor: pointer; padding: 22px 0; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; color: ${NAVY}; display: flex; justify-content: space-between; align-items: center; gap: 18px; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after { content: '+'; color: ${COPPER}; font-size: 26px; font-weight: 400; flex-shrink: 0; transition: transform .18s; }
        .faq-item[open] summary::after { content: '−'; }
        .faq-a { padding: 0 0 22px; font-size: 15.5px; color: #3d4754; line-height: 1.75; max-width: 760px; }

        .feature-list { list-style: none; padding: 0; margin: 24px 0 0; display: grid; grid-template-columns: 1fr; gap: 10px; max-width: 880px; position: relative; }
        .feature-list li { padding-left: 26px; position: relative; font-size: 15px; color: rgba(250,248,244,0.85); line-height: 1.6; }
        .feature-list li::before { content: '◆'; position: absolute; left: 0; top: 2px; color: ${GOLD}; font-size: 12px; }

        .fha-cta-final { text-align: center; padding: 96px 0; }
        .fha-cta-final .fha-h2 { margin-left: auto; margin-right: auto; margin-bottom: 22px; text-align: center; }
        .fha-cta-final .fha-sub-final { color: rgba(250,248,244,0.82); font-size: 17px; max-width: 720px; margin: 0 auto 32px; }
        .fha-cta-final .fha-cta-row { justify-content: center; }
      `}</style>

      <div className="fha">
        {/* HERO */}
        <section className="fha-hero">
          <div className="wrap">
            <div className="fha-eyebrow">FHA Loans · Texas Mortgage Broker</div>
            <h1 className="fha-h1">3.5% Down. Flexible Credit. And Programs That Can Cover the Whole Thing.</h1>
            <p className="fha-sub">FHA loans open the door for buyers who've been told they need more money or better credit than they actually do. Here's what FHA actually means for your situation in Texas.</p>
            <div className="fha-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get Pre-Approved</a>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Strategy Call</a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="fha-stats">
          <div className="fha-stats-grid">
            {stats.map((s) => (
              <div className="fha-stat" key={s.l}>
                <div className="fha-stat-v">{s.v}</div>
                <div className="fha-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT FHA IS */}
        <section className="fha-section fha-section-white">
          <div className="wrap">
            <h2 className="fha-h2">What FHA Actually Is — In Plain English</h2>
            <p className="fha-body">FHA stands for Federal Housing Administration. FHA doesn't lend money directly — it insures the loan, which means if a borrower defaults the government covers the lender's loss. That insurance is what allows lenders to approve buyers with lower down payments and more flexible credit profiles than conventional loans allow.</p>
            <p className="fha-body">In exchange for that insurance you pay MIP — mortgage insurance premium — which is an upfront fee of 1.75% of the loan amount (rolled into the loan) and an annual premium that is collected monthly. On a loan with less than 10% down, MIP stays for the life of the loan. This is the most important trade-off to understand when comparing FHA to conventional.</p>
            <p className="fha-body">FHA is not always the right answer. But for buyers with credit scores under 680 or limited savings, it is frequently the best available path.</p>
          </div>
        </section>

        {/* CREDIT TIERS */}
        <section className="fha-section fha-section-parchment">
          <div className="wrap">
            <h2 className="fha-h2" style={{ color: NAVY }}>FHA by Credit Score — Which Path Makes Sense for You</h2>
            <div className="tier-grid">
              {tiers.map((t) => (
                <div className="tier-row" key={t.range}>
                  <div>
                    <div className="tier-range">{t.range}</div>
                    <div className="tier-label">{t.label}</div>
                  </div>
                  <div className="tier-body">{t.body}</div>
                </div>
              ))}
            </div>

            <div className="calc-callout">
              <div className="calc-callout-text">Not sure which is cheaper for your situation? Run the numbers yourself.</div>
              <Link to="/calculators" className="calc-btn">Use the FHA vs Conventional Calculator →</Link>
            </div>
          </div>
        </section>

        {/* DPA */}
        <section className="fha-section fha-section-navy">
          <div className="wrap" style={{ position: "relative" }}>
            <div className="fha-eyebrow">Texas DPA</div>
            <h2 className="fha-h2">FHA Plus Down Payment Assistance — Stack the Programs</h2>
            <p className="fha-lede">FHA's 3.5% minimum down payment can be covered entirely by Texas down payment assistance programs. That means some buyers close with zero cash out of pocket beyond closing costs — and some DPA programs cover closing costs too.</p>
            <div className="dpa-grid">
              {dpas.map((d) => (
                <div className="dpa-card" key={d.t}>
                  <div className="dpa-t">{d.t}</div>
                  <p className="dpa-b">{d.b}</p>
                </div>
              ))}
            </div>
            <p className="dpa-disclaimer">DPA program availability, income limits, and credit minimums change frequently. All figures are for general educational purposes. Contact us to verify current eligibility for your specific situation.</p>
          </div>
        </section>

        {/* 203k */}
        <section className="fha-section fha-section-parchment">
          <div className="wrap">
            <h2 className="fha-h2" style={{ color: NAVY }}>FHA 203k — Buy It and Fix It With One Loan</h2>
            <p className="fha-body">The FHA 203k loan lets you purchase a home and finance the renovation cost in a single FHA loan based on the after-improved value of the property. You don't need the cash to fix it up before you move in — the renovation funds are built into the loan from the start.</p>
            <p className="fha-body">Two versions exist: the <strong>Limited 203k</strong> covers cosmetic repairs and non-structural work up to $35,000 and has a simpler process; the <strong>Standard 203k</strong> covers structural repairs, additions, and larger projects with no set dollar cap and requires a HUD-approved consultant.</p>
            <p className="fha-body">Both require as little as 3.5% down based on the after-improved value, and both can be combined with DPA programs including TDHCA and SETH 5 Star.</p>
            <Link to="/construction-renovation-loans-texas" className="k203-link">See all construction and renovation loan options →</Link>
          </div>
        </section>

        {/* APPRAISAL FLAGS */}
        <section className="fha-section fha-section-white">
          <div className="wrap">
            <div className="fha-eyebrow" style={{ color: COPPER }}>Know Before You Offer</div>
            <h2 className="fha-h2">What Gets Flagged in an FHA Appraisal — Texas Edition</h2>
            <p className="fha-body">FHA appraisals have stricter property condition requirements than conventional. The appraiser is not just valuing the home — they are certifying it meets FHA minimum property standards. Sellers and agents sometimes reject FHA offers because of this. Here is what commonly gets flagged in Texas.</p>
            <div className="flag-grid">
              {flags.map((f) => (
                <div className="flag-card" key={f.t}>
                  <div className="flag-t">{f.t}</div>
                  <p className="flag-b">{f.b}</p>
                </div>
              ))}
            </div>
            <p className="flag-note">None of these are automatically deal-killers. Many can be negotiated as seller repairs during your option period. Knowing what to look for before you make an offer puts you in a stronger position.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="fha-section fha-section-cream">
          <div className="wrap">
            <h2 className="fha-h2" style={{ color: NAVY }}>What FHA Buyers Ask Us Most</h2>
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
        <section className="fha-section-dark fha-cta-final">
          <div className="wrap">
            <h2 className="fha-h2">Let's Find Out If FHA Is the Right Move for You.</h2>
            <p className="fha-sub-final">We'll run FHA and conventional side by side for your specific credit profile, down payment, and target price — so you can see the real numbers before you decide.</p>
            <div className="fha-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get Pre-Approved</a>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Strategy Call</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FhaLoanTexasPage;
