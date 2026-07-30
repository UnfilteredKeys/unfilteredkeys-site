import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const IVORY = "#faf8f4";
const PARCHMENT = "#f5efe2";
const INK = "#1c2630";
const MUTED = "#536170";

const CALL_URL = "https://calendly.com/shalanda-securechoicelending/30min";

const foundations = [
  {
    title: "A payment that fits your life",
    copy: "We begin with the full monthly cost, including principal, interest, Texas property taxes, homeowners insurance, mortgage insurance when required, and HOA dues.",
  },
  {
    title: "Cash planned beyond the down payment",
    copy: "Closing costs, prepaid taxes and insurance, inspections, earnest money, and reserves all belong in the plan before you write an offer.",
  },
  {
    title: "A file ready for the right program",
    copy: "Income, credit, assets, military service, property type, and future plans determine which financing path deserves a closer look.",
  },
];

const pathways = [
  {
    title: "First-Time Buyers",
    copy: "Build your readiness plan, compare low-down-payment options, and understand the real cash needed to buy.",
    to: "/first-time-home-buyer-texas",
  },
  {
    title: "VA Loans",
    copy: "Use your earned benefit with a strategy that accounts for entitlement, residual income, funding-fee status, and the property.",
    to: "/va-loan-texas",
  },
  {
    title: "Conventional and FHA",
    copy: "Compare flexibility, mortgage insurance, upfront costs, and long-term payment instead of choosing by headline alone.",
    to: "/loan-programs",
  },
  {
    title: "Down Payment Assistance",
    copy: "Evaluate available assistance alongside the first-mortgage rate, repayment terms, eligibility, and time you expect to keep the home.",
    to: "/down-payment-assistance-texas",
  },
  {
    title: "Self-Employed and Investors",
    copy: "Explore bank-statement, P&L, asset-based, and property-based qualification when traditional income documentation does not tell the full story.",
    to: "/investors",
  },
  {
    title: "Physicians and Professionals",
    copy: "Compare professional programs, conventional financing, and VA eligibility around contract income, student debt, and career stage.",
    to: "/physician-loan-texas",
  },
];

const process = [
  {
    number: "01",
    title: "Learn",
    copy: "We review your goals and financial picture, then identify the decisions that matter now.",
  },
  {
    number: "02",
    title: "Plan",
    copy: "We compare realistic payment and cash-to-close scenarios and build the right timeline.",
  },
  {
    number: "03",
    title: "Prepare",
    copy: "We complete the pre-approval and make sure you understand the numbers before the house search gets serious.",
  },
  {
    number: "04",
    title: "Purchase",
    copy: "Once under contract, we coordinate the financing milestones through underwriting and closing.",
  },
];

const BuyAHomePage = () => (
  <>
    <SEO
      title="Buy a Home in Texas | Mortgage Strategy | Keys by Shalanda"
      description="Plan your Texas home purchase with clear guidance on affordability, cash to close, loan options, pre-approval, and the contract-to-closing process."
      canonical="/buy"
    />
    <style>{`
      .buy { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.65; -webkit-font-smoothing: antialiased; }
      .buy *, .buy *::before, .buy *::after { box-sizing: border-box; }
      .buy h1, .buy h2, .buy h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -.02em; line-height: 1.12; }
      .buy .wrap { width: min(1080px, calc(100% - 48px)); margin: 0 auto; }
      .buy .section { padding: 86px 0; }
      .buy .eyebrow { margin: 0 0 18px; color: ${COPPER}; font-family: 'Fira Mono', monospace; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
      .buy .section-title { max-width: 750px; margin: 0 0 20px; color: ${NAVY}; font-size: clamp(30px, 4vw, 45px); font-weight: 600; }
      .buy .section-intro { max-width: 720px; margin: 0 0 42px; color: ${MUTED}; font-size: 17px; }
      .buy .primary { display: inline-flex; align-items: center; justify-content: center; padding: 13px 24px; border-radius: 5px; background: ${COPPER}; color: #fff; font-weight: 600; text-decoration: none; }
      .buy .text-link { color: ${NAVY}; font-weight: 600; text-underline-offset: 4px; }

      .buy-hero { padding: 90px 0 94px; background: ${PARCHMENT}; }
      .buy-hero-grid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); gap: 74px; align-items: end; }
      .buy h1 { max-width: 780px; margin: 0 0 24px; color: ${NAVY}; font-size: clamp(40px, 6vw, 66px); font-weight: 600; }
      .buy-hero-copy { max-width: 670px; margin: 0; color: ${MUTED}; font-size: 19px; }
      .buy-hero-note { padding: 30px; border-top: 3px solid ${COPPER}; background: rgba(255,255,255,.62); color: ${NAVY}; font-family: 'Lora', Georgia, serif; font-size: 21px; line-height: 1.45; }

      .buy-foundations { background: #fff; }
      .buy-card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
      .buy-card { padding: 30px 28px; border: 1px solid rgba(26,58,92,.12); background: ${IVORY}; }
      .buy-card h3 { margin: 0 0 13px; color: ${NAVY}; font-size: 22px; font-weight: 600; }
      .buy-card p { margin: 0; color: ${MUTED}; font-size: 15.5px; }

      .buy-paths { background: ${NAVY}; color: ${IVORY}; }
      .buy-paths .section-title { color: ${IVORY}; }
      .buy-paths .section-intro { color: rgba(250,248,244,.78); }
      .buy-path-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 38px 44px; }
      .buy-path { padding-top: 22px; border-top: 1px solid rgba(232,180,125,.45); }
      .buy-path h3 { margin: 0 0 11px; color: #e8b47d; font-size: 23px; }
      .buy-path p { margin: 0 0 15px; color: rgba(250,248,244,.78); }
      .buy-path a { color: ${IVORY}; font-weight: 600; text-underline-offset: 4px; }

      .buy-process { background: ${PARCHMENT}; }
      .buy-step-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 26px; }
      .buy-step { padding-top: 25px; border-top: 2px solid ${COPPER}; }
      .buy-step-number { color: ${COPPER}; font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2px; }
      .buy-step h3 { margin: 11px 0; color: ${NAVY}; font-size: 24px; }
      .buy-step p { margin: 0; color: ${MUTED}; }

      .buy-texas { background: #fff; }
      .buy-texas-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
      .buy-list { margin: 5px 0 0; padding: 0; list-style: none; }
      .buy-list li { position: relative; padding: 0 0 18px 24px; color: ${MUTED}; }
      .buy-list li::before { content: ''; position: absolute; top: .65em; left: 0; width: 8px; height: 8px; border-radius: 50%; background: ${COPPER}; }

      .buy-final { padding: 86px 0; background: ${NAVY}; color: ${IVORY}; text-align: center; }
      .buy-final h2 { max-width: 720px; margin: 0 auto 18px; font-size: clamp(31px, 4.5vw, 48px); font-weight: 600; }
      .buy-final p { max-width: 650px; margin: 0 auto 30px; color: rgba(250,248,244,.78); font-size: 17px; }

      @media (max-width: 820px) {
        .buy .wrap { width: min(100% - 36px, 1080px); }
        .buy .section { padding: 68px 0; }
        .buy-hero { padding: 70px 0; }
        .buy-hero-grid, .buy-card-grid, .buy-path-grid, .buy-step-grid, .buy-texas-grid { grid-template-columns: 1fr; gap: 28px; }
        .buy-hero-note { max-width: 560px; }
      }
    `}</style>

    <main className="buy">
      <section className="buy-hero">
        <div className="wrap buy-hero-grid">
          <div>
            <p className="eyebrow">Buy a Home in Texas</p>
            <h1>A good home purchase starts before the offer.</h1>
            <p className="buy-hero-copy">
              The goal is not simply to get approved. It is to understand the payment, protect your cash, choose the right financing, and enter the market prepared to make a sound decision.
            </p>
          </div>
          <aside className="buy-hero-note">
            The right price range is the one that still lets the rest of your life work.
          </aside>
        </div>
      </section>

      <section className="section buy-foundations">
        <div className="wrap">
          <p className="eyebrow">Before pre-approval</p>
          <h2 className="section-title">Three numbers should make sense together.</h2>
          <p className="section-intro">Your monthly payment, total cash needed, and remaining reserves are more useful than a maximum approval amount by itself.</p>
          <div className="buy-card-grid">
            {foundations.map((item) => (
              <article className="buy-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section buy-paths">
        <div className="wrap">
          <p className="eyebrow">Find your financing path</p>
          <h2 className="section-title">Different borrowers need different strategies.</h2>
          <p className="section-intro">Start with the path closest to your situation. Final eligibility, pricing, and program terms are confirmed after reviewing the complete file.</p>
          <div className="buy-path-grid">
            {pathways.map((path) => (
              <article className="buy-path" key={path.title}>
                <h3>{path.title}</h3>
                <p>{path.copy}</p>
                <Link to={path.to}>Explore this path</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section buy-process">
        <div className="wrap">
          <p className="eyebrow">The purchase process</p>
          <h2 className="section-title">Learn. Plan. Prepare. Purchase.</h2>
          <div className="buy-step-grid">
            {process.map((step) => (
              <article className="buy-step" key={step.number}>
                <span className="buy-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section buy-texas">
        <div className="wrap buy-texas-grid">
          <div>
            <p className="eyebrow">Texas details matter</p>
            <h2 className="section-title">The contract and the financing have to work together.</h2>
            <p className="section-intro">
              Property taxes, insurance, option and financing deadlines, seller credits, appraisal timing, and new-construction tax estimates can all change the numbers. We update the strategy as the property becomes specific.
            </p>
            <Link className="text-link" to="/calculators">Explore the mortgage calculators</Link>
          </div>
          <ul className="buy-list">
            <li>Review the full estimated payment before deciding what to offer.</li>
            <li>Understand earnest money, option fees, inspections, and appraisal costs.</li>
            <li>Coordinate seller credits and rate options with the actual contract.</li>
            <li>Keep financing decisions connected to your timeline and future plans.</li>
          </ul>
        </div>
      </section>

      <section className="buy-final">
        <div className="wrap">
          <h2>Let’s build the plan before the house makes the decision for you.</h2>
          <p>A strategy call gives you a clear starting point, whether you are ready to buy now or preparing for later.</p>
          <a className="primary" href={CALL_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
        </div>
      </section>
    </main>
  </>
);

export default BuyAHomePage;
