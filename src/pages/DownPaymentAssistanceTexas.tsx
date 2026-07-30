import { useEffect } from "react";
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

const CALL_URL = "https://calendly.com/shalanda-securechoicelending/30min";

const structures = [
  {
    title: "Grant",
    body: "Some assistance is not repaid when every program requirement is met. Availability, eligible occupations, income limits, and loan terms must be verified.",
  },
  {
    title: "Forgivable second lien",
    body: "The assistance may be forgiven over time, but selling, refinancing, or moving too soon can trigger repayment. The forgiveness schedule matters.",
  },
  {
    title: "Deferred or repayable second lien",
    body: "The assistance is a separate lien. Payments may begin immediately or be deferred until a future event such as sale, refinance, or payoff.",
  },
];

const eligibility = [
  "Household income and the program's method for calculating it",
  "Property location, purchase price, and occupancy",
  "Credit profile, debt-to-income ratio, and loan type",
  "First-time buyer status or an eligible profession",
  "Completion of approved homebuyer education",
  "Available program funding and the closing timeline",
];

const faqs = [
  {
    q: "Do I have to be a first-time buyer?",
    a: "Not always. Some programs require that you have not owned a primary residence during a defined lookback period, while others allow repeat buyers. The rule must be checked for the specific program.",
  },
  {
    q: "Can assistance cover closing costs too?",
    a: "Depending on the program and loan structure, funds may be applied to the down payment, eligible closing costs, or both. Seller contributions and gift funds may also be part of the plan when permitted.",
  },
  {
    q: "Does down payment assistance change the interest rate?",
    a: "It can. Some programs pair assistance with a program-selected first-mortgage rate or additional fees. Compare the payment, upfront cash, future repayment obligation, and refinance restrictions rather than looking only at the assistance amount.",
  },
  {
    q: "Can I use assistance with FHA, conventional, or VA financing?",
    a: "Compatibility depends on the assistance program and first-mortgage guidelines. VA borrowers often need no down payment, so the better comparison may involve closing-cost strategies rather than adding a second lien.",
  },
];

const DownPaymentAssistanceTexasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO {...seoMeta.downPaymentAssistanceTexas} faqs={faqs} />

      <style>{`
        .dpa { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.7; -webkit-font-smoothing: antialiased; }
        .dpa *, .dpa *::before, .dpa *::after { box-sizing: border-box; }
        .dpa h1, .dpa h2, .dpa h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -0.01em; line-height: 1.15; }
        .dpa .wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }

        .dpa-hero { background: ${NAVY}; color: ${IVORY}; padding: 88px 0 96px; }
        .dpa-eyebrow { font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2.4px; text-transform: uppercase; color: ${GOLD}; margin-bottom: 22px; }
        .dpa-h1 { font-size: clamp(34px, 5vw, 56px); font-weight: 600; max-width: 900px; margin: 0 0 22px; }
        .dpa-sub { font-size: 18px; line-height: 1.65; color: rgba(250,248,244,0.82); max-width: 750px; margin: 0 0 34px; }
        .dpa-btn { background: ${COPPER}; color: #fff; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s; }
        .dpa-btn:hover { background: #9d521a; }

        .dpa-section { padding: 88px 0; }
        .dpa-white { background: #fff; }
        .dpa-parchment { background: ${PARCHMENT}; }
        .dpa-cream { background: ${CREAM}; }
        .dpa-navy { background: ${NAVY}; color: ${IVORY}; }
        .dpa-h2 { font-size: clamp(28px, 3.8vw, 42px); font-weight: 600; color: ${NAVY}; max-width: 820px; margin: 0 0 22px; }
        .dpa-navy .dpa-h2 { color: ${IVORY}; }
        .dpa-lede { font-size: 17px; color: #3d4754; max-width: 800px; margin: 0 0 38px; }
        .dpa-navy .dpa-lede { color: rgba(250,248,244,0.8); }

        .truth-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 46px; align-items: start; }
        .truth-list { display: grid; gap: 18px; }
        .truth-item { border-left: 3px solid ${COPPER}; padding-left: 20px; }
        .truth-item h3 { color: ${NAVY}; font-size: 20px; margin: 0 0 7px; }
        .truth-item p { color: #3d4754; font-size: 15px; margin: 0; }

        .structure-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .structure-card { border: 1px solid rgba(232,180,125,0.28); border-top: 3px solid ${COPPER}; padding: 30px 27px; background: rgba(255,255,255,0.04); border-radius: 4px; }
        .structure-card h3 { color: ${GOLD}; font-size: 21px; margin: 0 0 12px; }
        .structure-card p { color: rgba(250,248,244,0.82); font-size: 15px; margin: 0; }

        .eligibility-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 32px; max-width: 900px; }
        .eligibility-item { background: #fff; padding: 18px 20px 18px 46px; position: relative; color: #3d4754; border-radius: 4px; }
        .eligibility-item::before { content: '✓'; position: absolute; left: 20px; color: ${COPPER}; font-weight: 700; }
        .note { margin-top: 30px; max-width: 850px; color: #5b6470; font-size: 14px; font-style: italic; }

        .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .compare-card { background: #fff; padding: 32px 30px; border-radius: 4px; }
        .compare-card h3 { color: ${NAVY}; font-size: 22px; margin: 0 0 16px; }
        .compare-card ul { margin: 0; padding-left: 20px; color: #3d4754; display: grid; gap: 10px; }
        .compare-card.cost { border-top: 3px solid ${COPPER}; }
        .compare-card.fit { border-top: 3px solid ${GOLD}; }

        .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
        .process-step { background: ${CREAM}; padding: 30px 27px; border-radius: 4px; }
        .process-number { font-family: 'Fira Mono', monospace; color: ${COPPER}; letter-spacing: 2px; font-size: 12px; margin-bottom: 12px; }
        .process-step h3 { color: ${NAVY}; font-size: 21px; margin: 0 0 10px; }
        .process-step p { color: #3d4754; font-size: 15px; margin: 0; }

        .faq-list { max-width: 820px; }
        .faq-item { border-bottom: 1px solid #ddd8cf; }
        .faq-item summary { list-style: none; cursor: pointer; padding: 22px 0; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; color: ${NAVY}; display: flex; justify-content: space-between; gap: 18px; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after { content: '+'; color: ${COPPER}; font-size: 25px; font-weight: 400; }
        .faq-item[open] summary::after { content: '−'; }
        .faq-answer { padding: 0 0 22px; color: #3d4754; max-width: 760px; }

        .dpa-final { text-align: center; padding: 92px 0; }
        .dpa-final .dpa-h2 { margin-left: auto; margin-right: auto; color: ${IVORY}; }
        .dpa-final p { color: rgba(250,248,244,0.8); max-width: 700px; margin: 0 auto 30px; font-size: 17px; }
        .dpa-text-link { display: block; margin-top: 22px; color: ${GOLD}; text-decoration: none; font-weight: 600; }

        @media (max-width: 850px) {
          .truth-grid, .structure-grid, .compare, .process-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 680px) {
          .dpa-hero { padding: 66px 0 72px; }
          .dpa-section { padding: 68px 0; }
          .eligibility-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="dpa">
        <section className="dpa-hero">
          <div className="wrap">
            <div className="dpa-eyebrow">Texas Down Payment Assistance</div>
            <h1 className="dpa-h1">Assistance Can Help. The Structure Still Has to Make Sense.</h1>
            <p className="dpa-sub">
              Down payment assistance may reduce the cash needed to buy a home, but it is not automatically free money. The right comparison includes repayment terms, interest rate, fees, future plans, and total monthly payment.
            </p>
            <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="dpa-btn">Book a Strategy Call</a>
          </div>
        </section>

        <section className="dpa-section dpa-white">
          <div className="wrap truth-grid">
            <div>
              <div className="dpa-eyebrow" style={{ color: COPPER }}>Start With the Full Picture</div>
              <h2 className="dpa-h2">What assistance may cover</h2>
              <p className="dpa-lede">
                Depending on the program, assistance may help with the minimum down payment, eligible closing costs, or both. It does not remove the need to qualify for the first mortgage or prepare for homeownership.
              </p>
            </div>
            <div className="truth-list">
              <div className="truth-item">
                <h3>Cash to close</h3>
                <p>Assistance can reduce upfront funds, while earnest money, option fees, inspections, reserves, and uncovered costs may still require cash.</p>
              </div>
              <div className="truth-item">
                <h3>Monthly affordability</h3>
                <p>A lower upfront requirement does not make an unaffordable payment affordable. Taxes, insurance, mortgage insurance, and association dues still count.</p>
              </div>
              <div className="truth-item">
                <h3>Long-term flexibility</h3>
                <p>A second lien or forgiveness period may affect how soon it makes sense to sell or refinance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="dpa-section dpa-navy">
          <div className="wrap">
            <div className="dpa-eyebrow">Know What You Are Accepting</div>
            <h2 className="dpa-h2">Three common assistance structures</h2>
            <p className="dpa-lede">The amount offered matters less than many buyers think. The repayment obligation is where the real difference lives.</p>
            <div className="structure-grid">
              {structures.map((item) => (
                <article className="structure-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dpa-section dpa-parchment">
          <div className="wrap">
            <div className="dpa-eyebrow" style={{ color: COPPER }}>Eligibility</div>
            <h2 className="dpa-h2">Qualification is more than a credit score</h2>
            <p className="dpa-lede">Texas programs do not share one universal set of rules. A useful review checks the buyer, the property, the first mortgage, and the program together.</p>
            <div className="eligibility-grid">
              {eligibility.map((item) => <div className="eligibility-item" key={item}>{item}</div>)}
            </div>
            <p className="note">Program terms, funding, rates, income limits, purchase-price limits, and lender participation can change. Current eligibility must be confirmed before a buyer relies on assistance in an offer or contract.</p>
          </div>
        </section>

        <section className="dpa-section dpa-cream">
          <div className="wrap">
            <div className="dpa-eyebrow" style={{ color: COPPER }}>Compare the Entire Loan</div>
            <h2 className="dpa-h2">The largest assistance amount is not always the best option</h2>
            <p className="dpa-lede">We compare assistance against a standard loan, seller contributions, gift funds, and other available structures. The winner should improve the complete plan, not merely produce the biggest headline number.</p>
            <div className="compare">
              <div className="compare-card cost">
                <h3>Review the cost</h3>
                <ul>
                  <li>First-mortgage rate and monthly payment</li>
                  <li>Program fees and mortgage insurance</li>
                  <li>Second-lien payment or future payoff</li>
                  <li>Cash required before and at closing</li>
                </ul>
              </div>
              <div className="compare-card fit">
                <h3>Review the fit</h3>
                <ul>
                  <li>How long you expect to keep the home</li>
                  <li>Whether you may refinance or relocate</li>
                  <li>Emergency reserves after closing</li>
                  <li>Seller and contract deadlines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="dpa-section dpa-white">
          <div className="wrap">
            <div className="dpa-eyebrow" style={{ color: COPPER }}>A Practical Review</div>
            <h2 className="dpa-h2">How we evaluate assistance</h2>
            <div className="process-grid">
              <article className="process-step">
                <div className="process-number">01 · READINESS</div>
                <h3>Build the base loan</h3>
                <p>Review income, credit, debts, assets, target payment, and realistic cash available.</p>
              </article>
              <article className="process-step">
                <div className="process-number">02 · OPTIONS</div>
                <h3>Verify current programs</h3>
                <p>Check the buyer, property, first mortgage, funding availability, and program restrictions.</p>
              </article>
              <article className="process-step">
                <div className="process-number">03 · DECISION</div>
                <h3>Compare the true cost</h3>
                <p>Choose the structure that supports both the purchase and the buyer's plans after closing.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="dpa-section dpa-parchment">
          <div className="wrap">
            <h2 className="dpa-h2">Questions buyers ask about assistance</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <div className="faq-answer">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="dpa-navy dpa-final">
          <div className="wrap">
            <h2 className="dpa-h2">Find out whether assistance strengthens your plan.</h2>
            <p>We will compare the current options and explain the repayment terms before you build a purchase strategy around them.</p>
            <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="dpa-btn">Book a Strategy Call</a>
            <Link to="/first-time-buyers" className="dpa-text-link">Review the First-Time Buyer guide</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default DownPaymentAssistanceTexasPage;
