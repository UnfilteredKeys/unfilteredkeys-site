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
  { v: "Up to 5%", l: "Grant or Silent Second" },
  { v: "600", l: "Min Credit — Some Programs" },
  { v: "$0", l: "Out of Pocket — Possible" },
  { v: "Statewide", l: "All of Texas" },
];

const myths = [
  {
    t: "You Need 20% Down",
    b: "The 20% myth is costing Texas buyers years of equity they will never recover. FHA requires 3.5%. Conventional starts at 3%. And Texas DPA programs can cover that entire amount — plus closing costs — with grants you never repay.",
  },
  {
    t: "DPA Is Only for Low-Income Buyers",
    b: "Some programs have income limits. Several do not. SETH 5 Star and GoldStar have no first-time buyer requirement and flexible income limits. Chenoa Fund has no income limit on its repayable version. Investor-backed programs go to 580 credit with no income cap. Ask before you assume you don't qualify.",
  },
  {
    t: "Your Lender Would Have Told You",
    b: "DPA programs require lender enrollment. If your lender is not enrolled in TDHCA, TSAHC, SETH, or Chenoa Fund — those programs do not exist for you even if you qualify. We are enrolled in all of them. That access is the difference.",
  },
];

const programs = [
  {
    t: "TDHCA My First Texas Home",
    badge: "Up to 5% — Silent Second Lien",
    bullets: [
      "620 minimum credit score",
      "Silent second lien up to 5% of loan amount for down payment and closing costs",
      "Repayment deferred until sale, refinance, or payoff",
      "Statewide availability",
      "Income limits apply based on county and household size",
      "First-time buyer requirement (has not owned in 3 years)",
      "Combinable with FHA, including 203k renovation",
    ],
    note: "One of the most widely available programs in Texas for first-time buyers.",
  },
  {
    t: "TSAHC Homes for Texas Heroes",
    badge: "Non-Repayable Grant",
    bullets: [
      "620 minimum credit score",
      "Non-repayable grant — no payback ever",
      "Available to teachers, nurses, firefighters, law enforcement, corrections officers, veterans, and EMS personnel",
      "Statewide availability",
      "No first-time buyer requirement for heroes",
      "Income limits apply",
      "Combinable with FHA and conventional",
    ],
    note: "The grant structure makes this the strongest option for eligible buyers — there is nothing to repay.",
  },
  {
    t: "SETH 5 Star",
    badge: "No First-Time Buyer Required",
    bullets: [
      "640 minimum credit score",
      "No first-time buyer requirement",
      "Assistance amount varies by lender and program layer",
      "Statewide availability",
      "Income limits apply but are flexible",
      "Combinable with FHA, including 203k renovation loans",
    ],
    note: "One of the few programs that layers cleanly on top of FHA 203k — powerful for buyers purchasing homes that need work.",
  },
  {
    t: "SETH GoldStar",
    badge: "620 Minimum Credit",
    bullets: [
      "620 minimum credit score",
      "No first-time buyer requirement",
      "Flexible income limits",
      "Statewide availability",
      "Combinable with FHA and conventional",
    ],
    note: "Ask about current availability and layering options — program terms update periodically.",
  },
  {
    t: "Chenoa Fund",
    badge: "600 Minimum Credit",
    bullets: [
      "600 minimum credit score",
      "Covers the FHA 3.5% down payment requirement",
      "Two versions: a repayable version with no income limit and a forgivable version with income limits",
      "Structure depends on version selected",
      "Statewide availability",
    ],
    note: "The repayable version with no income limit makes Chenoa one of the most accessible programs for buyers who exceed income limits on state programs.",
  },
  {
    t: "Investor DPA Programs",
    badge: "580 Minimum Credit",
    bullets: [
      "580 minimum credit score",
      "Available when state programs are not an option due to income or credit constraints",
      "Structure and availability vary by investor and change frequently",
    ],
    note: "Ask about current availability — these programs are not published and require direct inquiry.",
  },
];

const stacks = [
  {
    t: "FHA Plus DPA",
    b: "FHA's 3.5% minimum down payment can be covered entirely by DPA grants or second liens — some buyers close with zero cash out of pocket beyond closing costs, and some programs cover closing costs too. TDHCA, TSAHC, SETH 5 Star, SETH GoldStar, and Chenoa Fund all combine with FHA. SETH 5 Star also layers with FHA 203k renovation loans for buyers purchasing homes that need work.",
  },
  {
    t: "Conventional Plus DPA",
    b: "TSAHC and SETH programs also combine with conventional loans. This is a strong option for buyers with 620 or above credit who want to avoid FHA mortgage insurance. Conventional with DPA can result in a lower long-term cost than FHA with DPA in some credit profiles, particularly above 680. Ask us to model both.",
  },
  {
    t: "VA Loans",
    b: "VA-eligible buyers typically do not need down payment assistance because VA loans require zero down payment. However, DPA programs can sometimes be used to cover closing costs for VA borrowers. If you are VA eligible, that is always the first conversation we have — VA is almost always the strongest available program.",
  },
];

const faqs = [
  {
    q: "Do I have to pay back the down payment assistance?",
    a: "It depends on the program. TSAHC grants are never repaid. TDHCA silent second liens are deferred with no payment until you sell, refinance, or pay off the loan. Chenoa Fund has both a repayable version and a forgivable version. SETH programs vary by structure. We explain the exact repayment terms of every program before you commit — no surprises at closing.",
  },
  {
    q: "Can I use DPA on a new construction home?",
    a: "Yes, in most cases. TDHCA, TSAHC, and SETH programs are available on new construction purchases in most Texas markets. There are some restrictions depending on the builder and whether the home is already complete. Ask us before you sign a builder contract so we can confirm eligibility before you are locked in.",
  },
  {
    q: "Will using DPA hurt my interest rate?",
    a: "Sometimes slightly. Some DPA programs are paired with below-market rates and some are paired with market rates with the assistance layered on top. The net benefit almost always outweighs any rate difference. We model the full payment including the DPA structure so you can see the real comparison.",
  },
  {
    q: "Can I use DPA if I owned a home before?",
    a: "It depends on the program. TSAHC Homes for Texas Heroes has no first-time buyer requirement for eligible professionals. SETH 5 Star and GoldStar have no first-time buyer requirement. TDHCA My First Texas Home requires that you have not owned a primary residence in the past 3 years. Chenoa Fund and investor programs have no first-time buyer requirement. If you have owned before, you still have strong options.",
  },
  {
    q: "How long does it take to close with DPA?",
    a: "DPA loans close on the same timeline as standard purchases in most cases — 21 to 30 days from application to funding. Some programs have a slightly longer timeline due to additional compliance steps. If you have a tight deadline, tell us upfront and we will confirm whether the program can meet your closing date.",
  },
  {
    q: "Can I combine multiple DPA programs?",
    a: "Generally no. Most DPA programs cannot be layered on top of each other — you select one program. However, DPA can be combined with seller concessions and in some cases with gift funds to further reduce your cash to close. We structure the combination that gets you to the closing table with the least cash out of pocket.",
  },
];

const DownPaymentAssistanceTexasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO {...seoMeta.downPaymentAssistanceTexas} />

      <style>{`
        .dpa { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.7; -webkit-font-smoothing: antialiased; }
        .dpa *, .dpa *::before, .dpa *::after { box-sizing: border-box; }
        .dpa h1, .dpa h2, .dpa h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -0.01em; line-height: 1.15; }
        .dpa .wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }

        .dpa-hero { background: ${NAVY}; color: ${IVORY}; padding: 88px 0 96px; }
        .dpa-eyebrow { font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2.4px; text-transform: uppercase; color: ${GOLD}; margin-bottom: 22px; }
        .dpa-h1 { font-size: clamp(34px, 5vw, 56px); font-weight: 600; max-width: 920px; margin-bottom: 22px; }
        .dpa-sub { font-size: 18px; line-height: 1.65; color: rgba(250,248,244,0.82); max-width: 760px; margin-bottom: 36px; }
        .dpa-cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary { background: ${COPPER}; color: #fff; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s; }
        .btn-primary:hover { background: #9d521a; }
        .btn-outline { border: 1.5px solid ${IVORY}; color: ${IVORY}; padding: 13px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s, color .18s; }
        .btn-outline:hover { background: ${IVORY}; color: ${NAVY}; }

        .dpa-stats { background: ${COPPER}; color: #fff; }
        .dpa-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .dpa-stat { padding: 28px 22px; text-align: center; border-right: 1px solid rgba(255,255,255,0.18); }
        .dpa-stat:last-child { border-right: none; }
        .dpa-stat-v { font-family: 'Lora', Georgia, serif; font-size: 28px; font-weight: 700; line-height: 1.05; margin-bottom: 6px; }
        .dpa-stat-l { font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase; opacity: 0.92; }
        @media (max-width: 720px) { .dpa-stats-grid { grid-template-columns: repeat(2, 1fr); } .dpa-stat:nth-child(2) { border-right: none; } }

        .dpa-section { padding: 88px 0; }
        .dpa-section-white { background: #ffffff; }
        .dpa-section-navy { background: ${NAVY}; color: ${IVORY}; position: relative; overflow: hidden; }
        .dpa-section-navy::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at top right, rgba(232,180,125,0.12), transparent 60%); pointer-events: none; }
        .dpa-section-parchment { background: ${PARCHMENT}; }
        .dpa-section-cream { background: ${CREAM}; }
        .dpa-section-dark { background: linear-gradient(135deg, ${NAVY} 0%, #122a44 100%); color: ${IVORY}; }

        .dpa-h2 { font-size: clamp(28px, 3.8vw, 42px); font-weight: 600; margin-bottom: 24px; max-width: 900px; }
        .dpa-section-navy .dpa-h2, .dpa-section-dark .dpa-h2 { color: ${IVORY}; position: relative; }
        .dpa-lede { font-size: 17px; color: #3d4754; max-width: 820px; margin-bottom: 28px; }
        .dpa-section-navy .dpa-lede, .dpa-section-dark .dpa-lede { color: rgba(250,248,244,0.82); position: relative; }
        .dpa-body { font-size: 16px; color: #3d4754; max-width: 820px; margin-bottom: 18px; }
        .dpa-section-navy .dpa-body, .dpa-section-dark .dpa-body { color: rgba(250,248,244,0.82); position: relative; }

        .myth-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 32px; }
        @media (max-width: 900px) { .myth-grid { grid-template-columns: 1fr; } }
        .myth-card { background: ${CREAM}; border-left: 3px solid ${COPPER}; padding: 26px 28px; border-radius: 4px; }
        .myth-t { font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; color: ${NAVY}; margin-bottom: 12px; }
        .myth-b { font-size: 15px; color: #3d4754; line-height: 1.7; }

        .prog-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; position: relative; }
        @media (max-width: 900px) { .prog-grid { grid-template-columns: 1fr; } }
        .prog-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(232,180,125,0.22); border-left: 3px solid ${COPPER}; padding: 26px 28px; border-radius: 4px; }
        .prog-t { font-family: 'Lora', Georgia, serif; font-size: 20px; font-weight: 600; color: ${GOLD}; margin-bottom: 8px; }
        .prog-badge { display: inline-block; font-family: 'Fira Mono', monospace; font-size: 10.5px; letter-spacing: 1.4px; text-transform: uppercase; color: ${NAVY}; background: ${GOLD}; padding: 4px 10px; border-radius: 3px; margin-bottom: 16px; }
        .prog-list { list-style: none; padding: 0; margin: 0 0 14px; display: grid; gap: 8px; }
        .prog-list li { padding-left: 20px; position: relative; font-size: 14px; color: rgba(250,248,244,0.85); line-height: 1.6; }
        .prog-list li::before { content: '◆'; position: absolute; left: 0; top: 2px; color: ${GOLD}; font-size: 10px; }
        .prog-note { font-size: 13.5px; color: rgba(250,248,244,0.7); font-style: italic; line-height: 1.6; padding-top: 12px; border-top: 1px solid rgba(232,180,125,0.18); }
        .prog-disclaimer { margin-top: 28px; font-size: 12.5px; color: rgba(250,248,244,0.55); font-style: italic; max-width: 880px; position: relative; }

        .stack-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 28px; }
        @media (max-width: 900px) { .stack-grid { grid-template-columns: 1fr; } }
        .stack-card { background: #fff; border-top: 3px solid ${COPPER}; padding: 26px 28px; border-radius: 4px; box-shadow: 0 1px 4px rgba(28,38,48,0.06); }
        .stack-t { font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; color: ${NAVY}; margin-bottom: 12px; }
        .stack-b { font-size: 14.5px; color: #3d4754; line-height: 1.7; }

        .calc-callout { background: ${COPPER}; color: #fff; padding: 32px 36px; border-radius: 6px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 22px; max-width: 980px; margin: 0 auto; }
        .calc-callout-text { max-width: 560px; }
        .calc-callout-h { font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 600; margin-bottom: 6px; }
        .calc-callout-b { font-size: 14.5px; opacity: 0.92; }
        .calc-btn { background: #fff; color: ${COPPER}; padding: 13px 24px; border-radius: 6px; font-weight: 600; font-size: 14.5px; text-decoration: none; transition: background .18s; white-space: nowrap; }
        .calc-btn:hover { background: ${IVORY}; }

        .faq-list { max-width: 820px; }
        .faq-item { border-bottom: 1px solid #ddd8cf; }
        .faq-item summary { list-style: none; cursor: pointer; padding: 22px 0; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; color: ${NAVY}; display: flex; justify-content: space-between; align-items: center; gap: 18px; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after { content: '+'; color: ${COPPER}; font-size: 26px; font-weight: 400; flex-shrink: 0; transition: transform .18s; }
        .faq-item[open] summary::after { content: '−'; }
        .faq-a { padding: 0 0 22px; font-size: 15.5px; color: #3d4754; line-height: 1.75; max-width: 760px; }

        .mcc-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 0; background: ${NAVY}; border: 1px solid rgba(232,180,125,0.35); border-radius: 6px; overflow: hidden; margin: 32px 0 36px; }
        @media (max-width: 760px) { .mcc-compare { grid-template-columns: 1fr; } }
        .mcc-box { padding: 28px 30px; color: ${IVORY}; }
        .mcc-box + .mcc-box { border-left: 1px solid rgba(232,180,125,0.25); }
        @media (max-width: 760px) { .mcc-box + .mcc-box { border-left: none; border-top: 1px solid rgba(232,180,125,0.25); } }
        .mcc-box-with { background: rgba(181,98,30,0.18); }
        .mcc-box-t { font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; color: ${GOLD}; margin-bottom: 14px; letter-spacing: 0.2px; }
        .mcc-box-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .mcc-box-list li { font-size: 14.5px; line-height: 1.65; color: rgba(250,248,244,0.9); padding-left: 18px; position: relative; }
        .mcc-box-list li::before { content: '—'; position: absolute; left: 0; top: 0; color: ${COPPER}; }
        .mcc-feat-h { font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 600; color: ${NAVY}; margin: 8px 0 16px; }
        .mcc-feat-list { list-style: none; padding: 0; margin: 0 0 32px; display: grid; gap: 12px; max-width: 900px; }
        .mcc-feat-list li { padding-left: 26px; position: relative; font-size: 15.5px; color: #3d4754; line-height: 1.7; }
        .mcc-feat-list li::before { content: '➔'; position: absolute; left: 0; top: 1px; color: ${COPPER}; font-size: 14px; }
        .mcc-callout { background: ${COPPER}; color: #fff; padding: 30px 34px; border-radius: 6px; max-width: 980px; }
        .mcc-callout-h { font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 600; margin-bottom: 12px; }
        .mcc-callout-b { font-size: 15px; line-height: 1.75; opacity: 0.95; }
        .mcc-callout-b + .mcc-callout-b { margin-top: 12px; }
        .mcc-disclaimer { margin-top: 22px; font-size: 12.5px; color: #6b6357; font-style: italic; max-width: 880px; }

        .dpa-cta-final { text-align: center; padding: 96px 0; }
        .dpa-cta-final .dpa-h2 { margin-left: auto; margin-right: auto; margin-bottom: 22px; text-align: center; }
        .dpa-cta-final .dpa-sub-final { color: rgba(250,248,244,0.82); font-size: 17px; max-width: 720px; margin: 0 auto 32px; }
        .dpa-cta-final .dpa-cta-row { justify-content: center; }
      `}</style>

      <div className="dpa">
        {/* HERO */}
        <section className="dpa-hero">
          <div className="wrap">
            <div className="dpa-eyebrow">Down Payment Assistance · Texas Mortgage Broker</div>
            <h1 className="dpa-h1">You May Not Need 20% Down. You May Not Need Anything.</h1>
            <p className="dpa-sub">Texas has some of the strongest down payment assistance programs in the country. Most buyers who qualify never find out — because their lender isn't enrolled. We are.</p>
            <div className="dpa-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Check My Eligibility</a>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Strategy Call</a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="dpa-stats">
          <div className="dpa-stats-grid">
            {stats.map((s) => (
              <div className="dpa-stat" key={s.l}>
                <div className="dpa-stat-v">{s.v}</div>
                <div className="dpa-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MYTHS */}
        <section className="dpa-section dpa-section-white">
          <div className="wrap">
            <h2 className="dpa-h2">Most Buyers Who Qualify Don't Know It</h2>
            <p className="dpa-body">Three assumptions cost more Texas buyers their first home than anything else. Each one is wrong — and each one is fixable.</p>
            <div className="myth-grid">
              {myths.map((m) => (
                <div className="myth-card" key={m.t}>
                  <div className="myth-t">{m.t}</div>
                  <div className="myth-b">{m.b}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="dpa-section dpa-section-navy">
          <div className="wrap" style={{ position: "relative" }}>
            <div className="dpa-eyebrow">Confirmed Program Details</div>
            <h2 className="dpa-h2">Texas Down Payment Assistance Programs — The Full Picture</h2>
            <p className="dpa-lede">These are the programs we are actively enrolled in and originate. Credit minimums, structures, and availability are confirmed. Program details change — contact us to verify current eligibility for your specific situation.</p>
            <div className="prog-grid">
              {programs.map((p) => (
                <div className="prog-card" key={p.t}>
                  <div className="prog-t">{p.t}</div>
                  <div className="prog-badge">{p.badge}</div>
                  <ul className="prog-list">
                    {p.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <div className="prog-note">{p.note}</div>
                </div>
              ))}
            </div>
            <div className="prog-disclaimer">DPA program availability, income limits, credit minimums, and assistance amounts change frequently. All figures are for general educational purposes based on current enrollment. Contact us to verify current eligibility for your specific situation before making any financial decisions.</div>
          </div>
        </section>

        {/* MCC */}
        <section className="dpa-section dpa-section-parchment">
          <div className="wrap">
            <div className="dpa-eyebrow" style={{ color: COPPER }}>MCC · Federal Tax Credit</div>
            <h2 className="dpa-h2" style={{ color: NAVY }}>Mortgage Credit Certificate — A Benefit First-Time Buyers May Have Access To</h2>
            <p className="dpa-body">If you are a first-time home buyer using down payment assistance, you may also have access to a Mortgage Credit Certificate — a federal tax credit that reduces your income tax liability every year you live in the home. It is not a loan. It is not a grant. It is a permanent annual tax credit that puts real money back in your pocket at tax time, every year, for as long as the home is your primary residence.</p>
            <p className="dpa-body">Not all DPA programs include it and eligibility depends on your county and situation — but if you qualify, it is one of the most powerful and least-known benefits available to Texas first-time buyers.</p>

            <div className="mcc-compare">
              <div className="mcc-box">
                <div className="mcc-box-t">Without MCC</div>
                <ul className="mcc-box-list">
                  <li>Mortgage interest deduction reduces taxable income</li>
                  <li>Tax savings depend on your tax bracket</li>
                  <li>Benefit diminishes as loan balance decreases over time</li>
                </ul>
              </div>
              <div className="mcc-box mcc-box-with">
                <div className="mcc-box-t">With MCC</div>
                <ul className="mcc-box-list">
                  <li>A portion of your mortgage interest becomes a direct federal tax credit</li>
                  <li>Reduces your actual tax bill dollar for dollar every year</li>
                  <li>Remaining mortgage interest is still fully deductible as normal</li>
                </ul>
              </div>
            </div>

            <h3 className="mcc-feat-h">What First-Time Buyers Should Know About the MCC</h3>
            <ul className="mcc-feat-list">
              <li>It reduces your federal income tax liability every year you live in the home as your primary residence.</li>
              <li>Lenders can use the annual MCC credit to reduce your debt-to-income ratio — which means you may qualify for a larger loan than you would without it. This is one of the most underused qualification tools in Texas mortgage.</li>
              <li>There is no minimum credit score requirement and no maximum DTI requirement for the MCC itself.</li>
              <li>The MCC can only be accessed in combination with down payment assistance — it is no longer available as a standalone product in most programs.</li>
              <li>Income limits vary by county, and expanded income and purchase price limits are available in targeted areas.</li>
              <li>The MCC is exclusively for first-time home buyers — defined as those who have not owned a primary residence in the past three years.</li>
            </ul>

            <div className="mcc-callout">
              <div className="mcc-callout-h">One More Thing to Understand About DPA — The Program Sets Your Rate</div>
              <p className="mcc-callout-b">When you use down payment assistance, the interest rate on your loan is set by the DPA program — not by your loan officer. This is one of the most important distinctions to understand before you apply. DPA programs publish their own fixed rates, and every borrower in that program on that day gets that rate. Your loan officer cannot negotiate it up or down.</p>
              <p className="mcc-callout-b">What your loan officer can control is whether you are in the right program for your situation, whether you are structured correctly to qualify, and whether the total cost — rate plus assistance minus what you would have paid out of pocket — actually works in your favor.</p>
              <p className="mcc-callout-b">This is why working with someone enrolled in multiple programs matters. If one program's rate is not competitive on a given day, we can evaluate whether another structure serves you better. The goal is never just to get you into a DPA program — it is to get you into the right structure for your specific situation.</p>
            </div>

            <div className="mcc-disclaimer">MCC availability, income limits, and purchase price limits vary by county and program and update periodically. All information is for general educational purposes. Contact us to verify current eligibility for your specific situation.</div>
          </div>
        </section>

        {/* STACKING */}
        <section className="dpa-section dpa-section-parchment">
          <div className="wrap">
            <div className="dpa-eyebrow" style={{ color: COPPER }}>Combining Programs</div>
            <h2 className="dpa-h2" style={{ color: NAVY }}>How DPA Stacks With Your Loan Program</h2>
            <div className="stack-grid">
              {stacks.map((s) => (
                <div className="stack-card" key={s.t}>
                  <div className="stack-t">{s.t}</div>
                  <div className="stack-b">{s.b}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AFFORDABILITY CALLOUT */}
        <section className="dpa-section dpa-section-white">
          <div className="wrap">
            <div className="calc-callout">
              <div className="calc-callout-text">
                <div className="calc-callout-h">Not Sure What You Can Afford With Assistance?</div>
                <div className="calc-callout-b">Our Budget and Affordability Calculator lets you model your real buying power — including how DPA changes your cash-to-close number.</div>
              </div>
              <Link to="/calculators?tab=budget-affordability" className="calc-btn">Use the Affordability Calculator →</Link>
            </div>
          </div>
        </section>

        {/* ACCESS PROBLEM */}
        <section className="dpa-section dpa-section-cream">
          <div className="wrap">
            <h2 className="dpa-h2" style={{ color: NAVY }}>The Access Problem — Why Your Last Lender Didn't Mention This</h2>
            <p className="dpa-body">DPA programs require lenders to be enrolled and approved before they can offer them to borrowers. Enrollment requires training, compliance review, and ongoing participation agreements with each program administrator.</p>
            <p className="dpa-body">Most retail banks and many mortgage companies are not enrolled in state and local DPA programs because the administrative burden outweighs the benefit for high-volume lenders who make their money on volume and speed rather than on matching borrowers to the right program.</p>
            <p className="dpa-body">As an independent broker we maintain active enrollment in TDHCA, TSAHC, SETH, and Chenoa Fund — and we have access to investor-backed DPA products that are not available through most lenders.</p>
            <p className="dpa-body">If you spoke to a lender who told you that you do not qualify for any assistance, the honest answer is that you may not qualify with them. That is not the same as not qualifying at all.</p>
          </div>
        </section>

        {/* INCOME LIMITS */}
        <section className="dpa-section dpa-section-cream" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2 className="dpa-h2" style={{ color: NAVY }}>Income and Purchase Price Limits — The Honest Version</h2>
            <p className="dpa-body">Most Texas DPA programs have income limits based on county and household size. These limits are set as a percentage of the area median income (AMI). In most Central Texas counties, the limits for a household of 2 to 3 people fall in the range of $85,000 to $110,000 in annual gross income, depending on the program.</p>
            <p className="dpa-body">Purchase price limits also apply and vary by county and program. In most Texas markets, the purchase price limits are well above the median home price — meaning most buyers are not constrained by price limits but may be constrained by income limits.</p>
            <p className="dpa-body">Chenoa Fund repayable version and investor-backed DPA programs have no income limits and serve buyers who exceed state program thresholds.</p>
            <p className="dpa-body" style={{ fontStyle: "italic", color: "#5a6470" }}>Income and purchase price limits update annually and vary significantly by county. Ask for the current limits in your specific county before assuming you are over the limit.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="dpa-section dpa-section-white">
          <div className="wrap">
            <h2 className="dpa-h2" style={{ color: NAVY }}>What DPA Buyers Ask Us Most</h2>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <details
                  key={f.q}
                  className="faq-item"
                  open={openFaq === i}
                  onToggle={(e) => setOpenFaq((e.currentTarget as HTMLDetailsElement).open ? i : null)}
                >
                  <summary>{f.q}</summary>
                  <div className="faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="dpa-section-dark dpa-cta-final">
          <div className="wrap">
            <h2 className="dpa-h2">Let's Find Out What You Actually Qualify For.</h2>
            <p className="dpa-sub-final">We check your eligibility across every program we are enrolled in at no cost. One conversation. Real numbers. No pressure.</p>
            <div className="dpa-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Check My Eligibility</a>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Strategy Call</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DownPaymentAssistanceTexasPage;
