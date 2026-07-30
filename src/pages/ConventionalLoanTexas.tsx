import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const IVORY = "#faf8f4";
const PARCHMENT = "#f5efe2";
const INK = "#1c2630";
const MUTED = "#536170";
const GOLD = "#e8b47d";

const CALL_URL = "https://calendly.com/shalanda-securechoicelending/30min";

const strengths = [
  {
    title: "Flexible property options",
    copy: "Conventional financing can support a primary home, second home, or investment property. Down payment, reserves, and pricing change with the occupancy and property type.",
  },
  {
    title: "Mortgage insurance can end",
    copy: "When private mortgage insurance is required, it may be cancelled after applicable equity, payment-history, and servicing requirements are met. The timing is specific to the loan.",
  },
  {
    title: "Pricing reflects the full file",
    copy: "Credit, down payment, property type, occupancy, loan purpose, and other risk factors can affect the rate and fees. A small change in structure can materially change the result.",
  },
];

const comparison = [
  {
    title: "Conventional may fit better when",
    points: [
      "Your credit and overall file support competitive pricing.",
      "You want mortgage insurance that may be removed later.",
      "You are buying a second home or investment property.",
      "The property condition may create fewer appraisal concerns.",
    ],
  },
  {
    title: "FHA may deserve a closer look when",
    points: [
      "The conventional pricing adjustments make the payment or fees less attractive.",
      "Your credit history or debt-to-income profile fits FHA guidelines more comfortably.",
      "A smaller down payment and FHA underwriting flexibility solve the larger problem.",
      "You understand the upfront and ongoing mortgage-insurance costs.",
    ],
  },
];

const reviewItems = [
  {
    number: "01",
    title: "Payment",
    copy: "Compare principal, interest, Texas property taxes, insurance, mortgage insurance, and HOA dues. The note rate alone does not tell you which loan is cheaper.",
  },
  {
    number: "02",
    title: "Cash to close",
    copy: "Review the down payment, lender costs, discount points, prepaid taxes and insurance, seller credits, and the reserves left after closing.",
  },
  {
    number: "03",
    title: "Time and flexibility",
    copy: "Consider how long you may keep the loan, whether mortgage insurance can end, and whether a refinance would be required to change the structure later.",
  },
];

const ConventionalLoanTexasPage = () => (
  <>
    <SEO {...seoMeta.conventionalLoanTexas} />
    <style>{`
      .conv { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.65; -webkit-font-smoothing: antialiased; }
      .conv *, .conv *::before, .conv *::after { box-sizing: border-box; }
      .conv h1, .conv h2, .conv h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -0.02em; line-height: 1.12; }
      .conv .wrap { width: min(1080px, calc(100% - 48px)); margin: 0 auto; }
      .conv .eyebrow { margin: 0 0 18px; color: ${COPPER}; font-family: 'Fira Mono', monospace; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
      .conv .section { padding: 86px 0; }
      .conv .section-title { max-width: 760px; margin: 0 0 20px; color: ${NAVY}; font-size: clamp(30px, 4vw, 45px); font-weight: 600; }
      .conv .section-intro { max-width: 730px; margin: 0 0 42px; color: ${MUTED}; font-size: 17px; }
      .conv .primary { display: inline-flex; align-items: center; justify-content: center; padding: 13px 24px; border-radius: 5px; background: ${COPPER}; color: #fff; font-weight: 600; text-decoration: none; }
      .conv .text-link { color: ${NAVY}; font-weight: 600; text-underline-offset: 4px; }

      .conv-hero { padding: 90px 0 94px; background: ${PARCHMENT}; }
      .conv-hero-grid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); gap: 74px; align-items: end; }
      .conv h1 { max-width: 760px; margin: 0 0 24px; color: ${NAVY}; font-size: clamp(40px, 6vw, 66px); font-weight: 600; }
      .conv-hero-copy { max-width: 660px; margin: 0; color: ${MUTED}; font-size: 19px; }
      .conv-hero-note { padding: 30px; border-top: 3px solid ${COPPER}; background: rgba(255,255,255,.62); color: ${NAVY}; font-family: 'Lora', Georgia, serif; font-size: 21px; line-height: 1.45; }

      .conv-strengths { background: #fff; }
      .conv-card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
      .conv-card { padding: 30px 28px; border: 1px solid rgba(26,58,92,.12); background: ${IVORY}; }
      .conv-card h3 { margin: 0 0 13px; color: ${NAVY}; font-size: 22px; font-weight: 600; }
      .conv-card p { margin: 0; color: ${MUTED}; font-size: 15.5px; }

      .conv-compare { background: ${NAVY}; color: ${IVORY}; }
      .conv-compare .section-title { color: ${IVORY}; }
      .conv-compare .section-intro { color: rgba(250,248,244,.78); }
      .conv-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
      .conv-compare-card { padding: 30px; border-top: 2px solid ${GOLD}; background: rgba(255,255,255,.04); }
      .conv-compare-card h3 { margin: 0 0 18px; color: ${GOLD}; font-size: 24px; }
      .conv-list { margin: 0; padding: 0; list-style: none; }
      .conv-list li { position: relative; padding: 0 0 14px 23px; color: rgba(250,248,244,.8); }
      .conv-list li::before { content: ''; position: absolute; top: .65em; left: 0; width: 7px; height: 7px; border-radius: 50%; background: ${COPPER}; }
      .conv-compare-note { margin: 30px 0 0; color: rgba(250,248,244,.62); font-size: 13px; }

      .conv-insurance { background: ${PARCHMENT}; }
      .conv-split { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
      .conv-detail { padding: 28px 0; border-top: 1px solid rgba(26,58,92,.2); }
      .conv-detail:first-child { padding-top: 0; border-top: 0; }
      .conv-detail h3 { margin: 0 0 10px; color: ${NAVY}; font-size: 22px; }
      .conv-detail p { margin: 0; color: ${MUTED}; }

      .conv-review { background: #fff; }
      .conv-step-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
      .conv-step { padding: 30px 0 0; border-top: 2px solid ${COPPER}; }
      .conv-step-number { color: ${COPPER}; font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2px; }
      .conv-step h3 { margin: 12px 0; color: ${NAVY}; font-size: 25px; }
      .conv-step p { margin: 0; color: ${MUTED}; }

      .conv-options { background: ${IVORY}; }
      .conv-options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; }
      .conv-options p { color: ${MUTED}; }
      .conv-links { display: grid; gap: 16px; align-content: start; }
      .conv-link-card { display: block; padding: 22px 24px; border: 1px solid rgba(26,58,92,.14); background: #fff; color: ${NAVY}; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; text-decoration: none; }

      .conv-final { padding: 86px 0; background: ${NAVY}; color: ${IVORY}; text-align: center; }
      .conv-final h2 { max-width: 720px; margin: 0 auto 18px; font-size: clamp(31px, 4.5vw, 48px); font-weight: 600; }
      .conv-final p { max-width: 650px; margin: 0 auto 30px; color: rgba(250,248,244,.78); font-size: 17px; }

      @media (max-width: 820px) {
        .conv .wrap { width: min(100% - 36px, 1080px); }
        .conv .section { padding: 68px 0; }
        .conv-hero { padding: 70px 0; }
        .conv-hero-grid, .conv-card-grid, .conv-compare-grid, .conv-split, .conv-step-grid, .conv-options-grid { grid-template-columns: 1fr; gap: 28px; }
        .conv-hero-note { max-width: 560px; }
      }
    `}</style>

    <main className="conv">
      <section className="conv-hero">
        <div className="wrap conv-hero-grid">
          <div>
            <p className="eyebrow">Conventional Loans in Texas</p>
            <h1>A flexible loan deserves a thoughtful comparison.</h1>
            <p className="conv-hero-copy">
              Conventional financing can be an excellent fit, but the answer is not hiding in one credit score or down-payment percentage. We compare the payment, cash needed, mortgage insurance, and long-term flexibility.
            </p>
          </div>
          <aside className="conv-hero-note">
            The best loan is not the one with the most familiar name. It is the one whose total cost and rules fit your plan.
          </aside>
        </div>
      </section>

      <section className="section conv-strengths">
        <div className="wrap">
          <p className="eyebrow">Why buyers consider conventional</p>
          <h2 className="section-title">More flexibility, with pricing that responds to the details.</h2>
          <p className="section-intro">
            Conventional loans follow Fannie Mae or Freddie Mac guidelines rather than government-insured FHA or VA rules. That creates useful options, but it also makes the structure of the file important.
          </p>
          <div className="conv-card-grid">
            {strengths.map((item) => (
              <article className="conv-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section conv-compare">
        <div className="wrap">
          <p className="eyebrow">Conventional versus FHA</p>
          <h2 className="section-title">Do not compare programs by down payment alone.</h2>
          <p className="section-intro">
            Either program can be the better choice. The decision depends on the full approval, the property, current pricing, and what you expect to do after closing.
          </p>
          <div className="conv-compare-grid">
            {comparison.map((item) => (
              <article className="conv-compare-card" key={item.title}>
                <h3>{item.title}</h3>
                <ul className="conv-list">
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="conv-compare-note">Guidelines, mortgage-insurance terms, pricing, and eligibility can change. Every recommendation requires review of the current loan scenario.</p>
        </div>
      </section>

      <section className="section conv-insurance">
        <div className="wrap conv-split">
          <div>
            <p className="eyebrow">Mortgage insurance and equity</p>
            <h2 className="section-title">Less than 20% down does not automatically rule out conventional.</h2>
            <p className="section-intro">
              Private mortgage insurance may make a lower down payment possible. Its cost varies, and cancellation is governed by the loan terms, federal rules, the servicer, equity, and payment history.
            </p>
            <Link className="text-link" to="/calculators?tab=fha-vs-conventional">Compare FHA and conventional costs</Link>
          </div>
          <div>
            <article className="conv-detail">
              <h3>Upfront strategy</h3>
              <p>Putting more down may lower the payment or mortgage-insurance cost, but preserving reserves can be more valuable than draining savings to reach a round number.</p>
            </article>
            <article className="conv-detail">
              <h3>Future strategy</h3>
              <p>We discuss how mortgage insurance may end, what documentation could be required, and whether appreciation or principal reduction may affect the timeline.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section conv-review">
        <div className="wrap">
          <p className="eyebrow">How we compare the numbers</p>
          <h2 className="section-title">One quote is a snapshot. The strategy needs context.</h2>
          <div className="conv-step-grid">
            {reviewItems.map((item) => (
              <article className="conv-step" key={item.number}>
                <span className="conv-step-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section conv-options">
        <div className="wrap conv-options-grid">
          <div>
            <p className="eyebrow">Beyond a primary home</p>
            <h2 className="section-title">Conventional financing can support more than one kind of plan.</h2>
            <p>
              Buyers may use conventional financing for move-up homes, eligible second homes, and investment properties. Each has different down-payment, reserve, income, occupancy, and pricing requirements.
            </p>
            <p>
              If the loan amount exceeds the current county conforming limit, a jumbo or portfolio option may be more appropriate. We verify the current limit and guidelines instead of relying on last year’s chart.
            </p>
          </div>
          <div className="conv-links">
            <Link className="conv-link-card" to="/investors">Explore investor financing</Link>
            <Link className="conv-link-card" to="/first-time-buyers">First-time buyer guidance</Link>
            <Link className="conv-link-card" to="/fha-loan-texas">Compare the FHA path</Link>
          </div>
        </div>
      </section>

      <section className="conv-final">
        <div className="wrap">
          <h2>Let’s compare the structure, not just the label.</h2>
          <p>
            We will review conventional, FHA, VA, or other appropriate options using your actual payment, cash, property, and timeline.
          </p>
          <a className="primary" href={CALL_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
        </div>
      </section>
    </main>
  </>
);

export default ConventionalLoanTexasPage;
