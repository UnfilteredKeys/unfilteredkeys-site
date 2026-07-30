import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const CALENDLY = "https://calendly.com/shalanda-securechoicelending/30min";
const APPLY = "https://scl.my1003app.com/554554/register";

const benefits = [
  {
    title: "No down payment",
    body: "Eligible borrowers with full entitlement can purchase with zero down. Your approval is based on what fits your finances, not an arbitrary county cap.",
  },
  {
    title: "No monthly mortgage insurance",
    body: "VA loans do not require PMI, which can make a meaningful difference in the monthly payment.",
  },
  {
    title: "Flexible qualification",
    body: "The VA does not set a universal minimum credit score. I review the complete file and match it with the right lender guidelines.",
  },
  {
    title: "A benefit you can reuse",
    body: "VA entitlement is not one and done. Many veterans use it more than once, and some can purchase again while another VA loan is still open.",
  },
];

const texasDetails = [
  {
    title: "Property taxes matter",
    body: "Texas property taxes can change the payment substantially from one county to another. We calculate them before you fall in love with the house.",
  },
  {
    title: "Disability exemptions matter too",
    body: "Eligible disabled veterans may qualify for partial or full property-tax relief. The exemption can affect both affordability and cash flow.",
  },
  {
    title: "The contract needs a strategy",
    body: "The option period, appraisal timing, seller concessions, and builder incentives all affect how a VA offer should be structured.",
  },
];

const resources = [
  {
    title: "VA Loan Calculator",
    body: "Estimate the payment with Texas taxes and the VA funding fee included.",
    to: "/calculators?tab=va-loan",
    label: "Run the numbers",
  },
  {
    title: "Killeen and Fort Cavazos",
    body: "Local guidance for buyers and military families in the Fort Cavazos area.",
    to: "/killeen-va-loan",
    label: "Read the local guide",
  },
  {
    title: "PCS to Portfolio",
    body: "Learn how a military move can become part of a long-term property strategy.",
    to: "/pcs-to-portfolio",
    label: "Explore the strategy",
  },
];

export default function VALoanTexas() {
  return (
    <div className="va-page">
      <SEO {...seoMeta.vaLoanTexas} />

      <style>{`
        .va-page {
          --navy: #1a3a5c;
          --deep: #172f48;
          --copper: #b5621e;
          --ivory: #faf8f4;
          --warm: #f3ece3;
          --ink: #1c2630;
          --muted: #5f6872;
          --line: rgba(26, 58, 92, .14);
          color: var(--ink);
          font-family: 'Outfit', sans-serif;
          background: var(--ivory);
        }
        .va-wrap {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
        }
        .va-kicker {
          margin: 0 0 14px;
          color: var(--copper);
          font: 600 11px/1.4 'Fira Mono', monospace;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .va-page h1, .va-page h2, .va-page h3 {
          font-family: 'Lora', serif;
        }
        .va-hero {
          padding: 88px 0 82px;
          background: var(--warm);
          border-bottom: 1px solid var(--line);
        }
        .va-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, .85fr);
          gap: 72px;
          align-items: center;
        }
        .va-hero h1 {
          max-width: 700px;
          margin: 0 0 22px;
          color: var(--navy);
          font-size: clamp(42px, 5.5vw, 68px);
          line-height: 1.02;
          letter-spacing: -.035em;
        }
        .va-lead {
          max-width: 620px;
          margin: 0 0 30px;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.7;
        }
        .va-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 18px;
        }
        .va-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 24px;
          border-radius: 6px;
          background: var(--copper);
          color: white;
          font-weight: 700;
          text-decoration: none;
        }
        .va-text-link {
          color: var(--navy);
          font-weight: 700;
          text-underline-offset: 4px;
        }
        .va-summary {
          padding: 38px;
          border-radius: 18px;
          background: var(--navy);
          color: white;
          box-shadow: 0 18px 50px rgba(26, 58, 92, .14);
        }
        .va-summary p {
          margin: 0;
        }
        .va-summary-title {
          margin-bottom: 24px !important;
          color: #e8b087;
          font: 600 11px/1.4 'Fira Mono', monospace;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .va-summary dl {
          display: grid;
          gap: 20px;
          margin: 0;
        }
        .va-summary div {
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, .14);
        }
        .va-summary div:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }
        .va-summary dt {
          margin-bottom: 4px;
          color: rgba(255, 255, 255, .62);
          font-size: 12px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .va-summary dd {
          margin: 0;
          font-family: 'Lora', serif;
          font-size: 21px;
          font-weight: 700;
        }
        .va-section {
          padding: 82px 0;
        }
        .va-section.white {
          background: #fff;
        }
        .va-heading {
          max-width: 700px;
          margin-bottom: 44px;
        }
        .va-heading h2 {
          margin: 0 0 16px;
          color: var(--navy);
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.12;
          letter-spacing: -.025em;
        }
        .va-heading p:last-child {
          margin: 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.7;
        }
        .va-benefits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--line);
        }
        .va-benefit {
          padding: 30px 34px 30px 0;
          border-bottom: 1px solid var(--line);
        }
        .va-benefit:nth-child(even) {
          padding-right: 0;
          padding-left: 34px;
          border-left: 1px solid var(--line);
        }
        .va-benefit h3, .va-detail h3, .va-resource h3 {
          margin: 0 0 10px;
          color: var(--navy);
          font-size: 20px;
        }
        .va-benefit p, .va-detail p, .va-resource p {
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.7;
        }
        .va-tradeoff {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 72px;
          align-items: start;
        }
        .va-tradeoff h2 {
          margin: 0 0 18px;
          color: var(--navy);
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.12;
        }
        .va-tradeoff-copy > p {
          color: var(--muted);
          font-size: 17px;
          line-height: 1.75;
        }
        .va-note {
          padding: 30px;
          border-left: 4px solid var(--copper);
          background: #fff;
        }
        .va-note strong {
          display: block;
          margin-bottom: 8px;
          color: var(--navy);
          font-family: 'Lora', serif;
          font-size: 20px;
        }
        .va-note p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }
        .va-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .va-detail {
          padding-top: 24px;
          border-top: 3px solid var(--copper);
        }
        .va-resources {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .va-resource {
          display: flex;
          min-height: 230px;
          flex-direction: column;
          padding: 28px;
          border: 1px solid var(--line);
          border-radius: 12px;
          background: #fff;
        }
        .va-resource p {
          flex: 1;
          margin-bottom: 24px;
        }
        .va-resource a {
          color: var(--copper);
          font-weight: 700;
          text-decoration: none;
        }
        .va-cta {
          padding: 74px 0;
          background: var(--navy);
          color: white;
          text-align: center;
        }
        .va-cta h2 {
          max-width: 720px;
          margin: 0 auto 16px;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.12;
        }
        .va-cta p {
          max-width: 620px;
          margin: 0 auto 28px;
          color: rgba(255, 255, 255, .7);
          font-size: 17px;
          line-height: 1.7;
        }
        .va-cta .va-primary {
          background: #d08045;
        }
        @media (max-width: 800px) {
          .va-wrap {
            width: min(100% - 32px, 1120px);
          }
          .va-hero {
            padding: 58px 0;
          }
          .va-hero-grid, .va-tradeoff {
            grid-template-columns: 1fr;
            gap: 38px;
          }
          .va-hero h1 {
            font-size: clamp(38px, 12vw, 54px);
          }
          .va-summary {
            padding: 28px;
          }
          .va-section {
            padding: 62px 0;
          }
          .va-benefits, .va-details, .va-resources {
            grid-template-columns: 1fr;
          }
          .va-benefit, .va-benefit:nth-child(even) {
            padding: 24px 0;
            border-left: 0;
          }
          .va-resource {
            min-height: 0;
          }
          .va-actions {
            align-items: flex-start;
            flex-direction: column;
          }
          .va-primary {
            width: 100%;
          }
        }
      `}</style>

      <section className="va-hero">
        <div className="va-wrap va-hero-grid">
          <div>
            <p className="va-kicker">Texas VA loan guidance</p>
            <h1>Your VA benefit deserves a real strategy.</h1>
            <p className="va-lead">
              Zero down is only the headline. The right plan accounts for entitlement, Texas property taxes, seller concessions, and the payment you actually want to live with.
            </p>
            <div className="va-actions">
              <a className="va-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
              </a>
              <Link className="va-text-link" to="/va-loan-faq-texas">
                Read the VA loan FAQ
              </Link>
            </div>
          </div>

          <aside className="va-summary" aria-label="VA loan highlights">
            <p className="va-summary-title">The essentials</p>
            <dl>
              <div>
                <dt>Down payment</dt>
                <dd>As low as 0%</dd>
              </div>
              <div>
                <dt>Monthly mortgage insurance</dt>
                <dd>None</dd>
              </div>
              <div>
                <dt>Benefit use</dt>
                <dd>Reusable</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="va-section white">
        <div className="va-wrap">
          <div className="va-heading">
            <p className="va-kicker">Why VA first</p>
            <h2>A powerful loan when it is structured properly.</h2>
            <p>
              VA financing can offer excellent terms, but the best outcome still depends on the details of your file and your purchase.
            </p>
          </div>
          <div className="va-benefits">
            {benefits.map((benefit) => (
              <article className="va-benefit" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="va-section">
        <div className="va-wrap va-tradeoff">
          <div>
            <p className="va-kicker">The honest part</p>
            <h2>VA is strong. It is not magic.</h2>
          </div>
          <div className="va-tradeoff-copy">
            <p>
              You may still have a funding fee, closing costs, an appraisal, and property-condition requirements. The goal is not to pretend those costs do not exist. It is to structure the loan so you understand what you are paying and why.
            </p>
            <div className="va-note">
              <strong>The funding fee may be waived.</strong>
              <p>
                Veterans receiving qualifying service-connected disability compensation are generally exempt. We verify the status before closing and calculate the fee for everyone else.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="va-section white">
        <div className="va-wrap">
          <div className="va-heading">
            <p className="va-kicker">Texas changes the numbers</p>
            <h2>The house is only part of the payment.</h2>
            <p>
              A Texas VA strategy should account for the county, exemptions, contract terms, and the way the offer is presented.
            </p>
          </div>
          <div className="va-details">
            {texasDetails.map((detail) => (
              <article className="va-detail" key={detail.title}>
                <h3>{detail.title}</h3>
                <p>{detail.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="va-section">
        <div className="va-wrap">
          <div className="va-heading">
            <p className="va-kicker">Go deeper when you need to</p>
            <h2>Useful VA resources, without the scavenger hunt.</h2>
          </div>
          <div className="va-resources">
            {resources.map((resource) => (
              <article className="va-resource" key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.body}</p>
                <Link to={resource.to}>{resource.label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="va-cta">
        <div className="va-wrap">
          <h2>Let’s find out what your VA benefit can do.</h2>
          <p>
            Start with a conversation about your goals, timing, entitlement, and comfortable monthly payment.
          </p>
          <a className="va-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
            Book a Strategy Call
          </a>
          <p style={{ marginTop: 18, marginBottom: 0, fontSize: 13 }}>
            Ready now?{" "}
            <a href={APPLY} target="_blank" rel="noopener noreferrer" style={{ color: "white", textUnderlineOffset: 4 }}>
              Begin the secure application
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
