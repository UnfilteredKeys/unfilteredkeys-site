import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const IVORY = "#faf8f4";
const PARCHMENT = "#f5efe2";
const INK = "#1c2630";
const MUTED = "#536170";

const CALL_URL = "https://calendly.com/shalanda-securechoicelending/30min";

const readiness = [
  {
    title: "A workable monthly payment",
    copy: "Your price range should begin with the payment that fits your life, including Texas property taxes, homeowners insurance, mortgage insurance when required, and any HOA dues.",
  },
  {
    title: "A complete cash-to-close plan",
    copy: "The down payment is only one part of the equation. We also plan for closing costs, prepaid taxes and insurance, inspections, and the reserves you want to keep after closing.",
  },
  {
    title: "A loan strategy built around you",
    copy: "Credit, income, savings, military service, location, and future plans all matter. The best program is the one that fits the full picture, not the one with the loudest headline.",
  },
];

const steps = [
  {
    number: "01",
    title: "Learn",
    copy: "We review your goals, income, credit, debts, and available funds. You leave the conversation knowing what is helping, what needs attention, and what not to panic about.",
  },
  {
    number: "02",
    title: "Plan",
    copy: "We compare the loan paths that may fit, estimate the real monthly payment and cash needed, and build a timeline that works whether you are ready now or several months away.",
  },
  {
    number: "03",
    title: "Buy",
    copy: "When the numbers make sense, we complete the pre-approval, coordinate with your real estate agent, and guide the financing from contract through closing.",
  },
];

const FirstTimeBuyersPage = () => (
  <>
    <SEO {...seoMeta.firstTimeBuyers} />
    <style>{`
      .ftb { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.65; -webkit-font-smoothing: antialiased; }
      .ftb *, .ftb *::before, .ftb *::after { box-sizing: border-box; }
      .ftb h1, .ftb h2, .ftb h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -0.02em; line-height: 1.12; }
      .ftb .wrap { width: min(1080px, calc(100% - 48px)); margin: 0 auto; }
      .ftb .eyebrow { margin: 0 0 18px; color: ${COPPER}; font-family: 'Fira Mono', monospace; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
      .ftb .section { padding: 86px 0; }
      .ftb .section-title { max-width: 720px; margin: 0 0 20px; color: ${NAVY}; font-size: clamp(30px, 4vw, 45px); font-weight: 600; }
      .ftb .section-intro { max-width: 700px; margin: 0 0 42px; color: ${MUTED}; font-size: 17px; }
      .ftb .primary { display: inline-flex; align-items: center; justify-content: center; padding: 13px 24px; border-radius: 5px; background: ${COPPER}; color: #fff; font-weight: 600; text-decoration: none; }
      .ftb .text-link { color: ${NAVY}; font-weight: 600; text-underline-offset: 4px; }

      .ftb-hero { padding: 90px 0 94px; background: ${PARCHMENT}; }
      .ftb-hero-grid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); gap: 74px; align-items: end; }
      .ftb h1 { max-width: 760px; margin: 0 0 24px; color: ${NAVY}; font-size: clamp(40px, 6vw, 66px); font-weight: 600; }
      .ftb-hero-copy { max-width: 660px; margin: 0; color: ${MUTED}; font-size: 19px; }
      .ftb-hero-note { padding: 30px; border-top: 3px solid ${COPPER}; background: rgba(255,255,255,.62); color: ${NAVY}; font-family: 'Lora', Georgia, serif; font-size: 21px; line-height: 1.45; }

      .ftb-readiness { background: #fff; }
      .ftb-card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
      .ftb-card { padding: 30px 28px; border: 1px solid rgba(26,58,92,.12); background: ${IVORY}; }
      .ftb-card h3 { margin: 0 0 13px; color: ${NAVY}; font-size: 22px; font-weight: 600; }
      .ftb-card p { margin: 0; color: ${MUTED}; font-size: 15.5px; }

      .ftb-options { background: ${NAVY}; color: ${IVORY}; }
      .ftb-options .section-title { color: ${IVORY}; }
      .ftb-options .section-intro { color: rgba(250,248,244,.78); }
      .ftb-option-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 44px; }
      .ftb-option { padding-top: 22px; border-top: 1px solid rgba(232,180,125,.45); }
      .ftb-option h3 { margin: 0 0 12px; color: #e8b47d; font-size: 23px; }
      .ftb-option p { margin: 0; color: rgba(250,248,244,.78); }
      .ftb-options-note { margin: 32px 0 0; color: rgba(250,248,244,.6); font-size: 13px; }

      .ftb-process { background: ${PARCHMENT}; }
      .ftb-step-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
      .ftb-step { padding: 30px 0 0; border-top: 2px solid ${COPPER}; }
      .ftb-step-number { color: ${COPPER}; font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2px; }
      .ftb-step h3 { margin: 12px 0; color: ${NAVY}; font-size: 25px; }
      .ftb-step p { margin: 0; color: ${MUTED}; }

      .ftb-texas { background: #fff; }
      .ftb-texas-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
      .ftb-checklist { margin: 4px 0 0; padding: 0; list-style: none; }
      .ftb-checklist li { position: relative; padding: 0 0 18px 24px; color: ${MUTED}; }
      .ftb-checklist li::before { content: ''; position: absolute; top: .65em; left: 0; width: 8px; height: 8px; border-radius: 50%; background: ${COPPER}; }

      .ftb-final { padding: 86px 0; background: ${NAVY}; color: ${IVORY}; text-align: center; }
      .ftb-final h2 { max-width: 700px; margin: 0 auto 18px; font-size: clamp(31px, 4.5vw, 48px); font-weight: 600; }
      .ftb-final p { max-width: 650px; margin: 0 auto 30px; color: rgba(250,248,244,.78); font-size: 17px; }

      @media (max-width: 820px) {
        .ftb .wrap { width: min(100% - 36px, 1080px); }
        .ftb .section { padding: 68px 0; }
        .ftb-hero { padding: 70px 0; }
        .ftb-hero-grid, .ftb-card-grid, .ftb-step-grid, .ftb-texas-grid { grid-template-columns: 1fr; gap: 28px; }
        .ftb-hero-note { max-width: 560px; }
        .ftb-option-grid { grid-template-columns: 1fr; gap: 28px; }
      }
    `}</style>

    <main className="ftb">
      <section className="ftb-hero">
        <div className="wrap ftb-hero-grid">
          <div>
            <p className="eyebrow">First-Time Homebuyers in Texas</p>
            <h1>Start with clarity, not a house search.</h1>
            <p className="ftb-hero-copy">
              Before listings, offers, and closing dates, you need a payment you understand and a plan you can trust. We will help you see what is possible without rushing you into what is not.
            </p>
          </div>
          <aside className="ftb-hero-note">
            You do not need to know every mortgage term. You need someone who will explain the decisions that affect your money.
          </aside>
        </div>
      </section>

      <section className="section ftb-readiness">
        <div className="wrap">
          <p className="eyebrow">What readiness really means</p>
          <h2 className="section-title">A pre-approval is useful. A complete plan is better.</h2>
          <p className="section-intro">
            Buying your first home is not a pass-or-fail test. It is a series of financial decisions that should make sense together.
          </p>
          <div className="ftb-card-grid">
            {readiness.map((item) => (
              <article className="ftb-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ftb-options">
        <div className="wrap">
          <p className="eyebrow">Loan and assistance options</p>
          <h2 className="section-title">The lowest down payment is not automatically the best strategy.</h2>
          <p className="section-intro">
            FHA, conventional, VA, USDA, and assistance programs can each solve a different problem. We compare the payment, upfront cost, eligibility, and long-term trade-offs before recommending a path.
          </p>
          <div className="ftb-option-grid">
            <article className="ftb-option">
              <h3>Low-down-payment financing</h3>
              <p>Some buyers may qualify with a modest down payment, and eligible veterans or rural buyers may have zero-down options. Qualification and costs vary by program.</p>
            </article>
            <article className="ftb-option">
              <h3>Down payment assistance</h3>
              <p>Texas and local programs may offer grants, forgivable assistance, or repayable second liens. The right comparison includes the first-mortgage rate, repayment terms, income limits, and how long you expect to keep the home.</p>
            </article>
          </div>
          <p className="ftb-options-note">Program availability, limits, rates, and eligibility requirements can change. All options require review and approval.</p>
        </div>
      </section>

      <section className="section ftb-process">
        <div className="wrap">
          <p className="eyebrow">A calmer process</p>
          <h2 className="section-title">Learn. Plan. Buy.</h2>
          <div className="ftb-step-grid">
            {steps.map((step) => (
              <article className="ftb-step" key={step.number}>
                <span className="ftb-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ftb-texas">
        <div className="wrap ftb-texas-grid">
          <div>
            <p className="eyebrow">Texas details matter</p>
            <h2 className="section-title">The sales price is not the monthly payment.</h2>
            <p className="section-intro">
              Texas property taxes, homeowners insurance, HOA dues, and mortgage insurance can materially change affordability. We use realistic estimates early, then update them as the property and numbers become specific.
            </p>
            <Link className="text-link" to="/calculators">Explore the mortgage calculators</Link>
          </div>
          <ul className="ftb-checklist">
            <li>Understand the option period, inspection timing, appraisal, and financing deadlines.</li>
            <li>Separate the money needed before closing from the final cash-to-close amount.</li>
            <li>Review seller credits and rate options based on your actual contract and priorities.</li>
            <li>Keep an emergency cushion instead of treating every available dollar as down payment.</li>
          </ul>
        </div>
      </section>

      <section className="ftb-final">
        <div className="wrap">
          <h2>You may be closer than you think. Let’s find out honestly.</h2>
          <p>
            A strategy call gives you a clear starting point, whether you are ready to buy now or need a plan for later.
          </p>
          <a className="primary" href={CALL_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
        </div>
      </section>
    </main>
  </>
);

export default FirstTimeBuyersPage;
