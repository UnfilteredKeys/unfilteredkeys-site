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
  { title: "Flexible underwriting", copy: "FHA can be more accommodating when credit history, debt-to-income, or limited savings make conventional financing less comfortable. Approval still depends on the complete file." },
  { title: "Lower down-payment structure", copy: "FHA is designed to make primary-home financing more accessible. The required investment, eligible funding sources, reserves, and closing costs must be reviewed together." },
  { title: "Useful property options", copy: "Eligible one-to-four-unit primary residences may qualify. Buyers considering a multi-unit home must understand occupancy, appraisal, reserve, and rental-income requirements." },
];

const comparisons = [
  {
    title: "FHA may fit better when",
    points: [
      "The overall credit profile fits FHA underwriting more comfortably.",
      "Conventional pricing adjustments make the payment or fees less attractive.",
      "A smaller required investment preserves needed reserves.",
      "The buyer understands FHA mortgage insurance and plans around it.",
    ],
  },
  {
    title: "Conventional or VA may fit better when",
    points: [
      "Conventional pricing and removable mortgage insurance improve the long-term cost.",
      "The property condition creates concerns under FHA minimum standards.",
      "The buyer needs second-home or investment-property financing.",
      "VA eligibility provides a stronger benefit after fees and entitlement are reviewed.",
    ],
  },
];

const propertyItems = [
  { number: "01", title: "Safety", copy: "The appraiser may call for repairs when visible conditions create health or safety concerns, including exposed wiring, broken glass, missing handrails, or deteriorated paint." },
  { number: "02", title: "Soundness", copy: "Foundation movement, roof concerns, drainage, structural damage, or other signs of instability may require additional review or repair before closing." },
  { number: "03", title: "Basic function", copy: "Utilities and major systems generally need to operate as intended. The appraisal is not a substitute for an independent home inspection." },
];

const FhaLoanTexasPage = () => (
  <>
    <SEO {...seoMeta.fhaLoanTexas} />
    <style>{`
      .fha-new { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.65; -webkit-font-smoothing: antialiased; }
      .fha-new *, .fha-new *::before, .fha-new *::after { box-sizing: border-box; }
      .fha-new h1, .fha-new h2, .fha-new h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -.02em; line-height: 1.12; }
      .fha-new .wrap { width: min(1080px, calc(100% - 48px)); margin: 0 auto; }
      .fha-new .section { padding: 86px 0; }
      .fha-new .eyebrow { margin: 0 0 18px; color: ${COPPER}; font-family: 'Fira Mono', monospace; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
      .fha-new .section-title { max-width: 760px; margin: 0 0 20px; color: ${NAVY}; font-size: clamp(30px, 4vw, 45px); font-weight: 600; }
      .fha-new .section-intro { max-width: 750px; margin: 0 0 42px; color: ${MUTED}; font-size: 17px; }
      .fha-new .primary { display: inline-flex; align-items: center; justify-content: center; padding: 13px 24px; border-radius: 5px; background: ${COPPER}; color: #fff; font-weight: 600; text-decoration: none; }
      .fha-new .text-link { color: ${NAVY}; font-weight: 600; text-underline-offset: 4px; }
      .fha-new-hero { padding: 90px 0 94px; background: ${PARCHMENT}; }
      .fha-new-hero-grid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); gap: 74px; align-items: end; }
      .fha-new h1 { max-width: 760px; margin: 0 0 24px; color: ${NAVY}; font-size: clamp(40px, 6vw, 66px); font-weight: 600; }
      .fha-new-hero-copy { max-width: 660px; margin: 0; color: ${MUTED}; font-size: 19px; }
      .fha-new-hero-note { padding: 30px; border-top: 3px solid ${COPPER}; background: rgba(255,255,255,.62); color: ${NAVY}; font-family: 'Lora', Georgia, serif; font-size: 21px; line-height: 1.45; }
      .fha-new-strengths { background: #fff; }
      .fha-new-card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
      .fha-new-card { padding: 30px 28px; border: 1px solid rgba(26,58,92,.12); background: ${IVORY}; }
      .fha-new-card h3 { margin: 0 0 13px; color: ${NAVY}; font-size: 22px; font-weight: 600; }
      .fha-new-card p { margin: 0; color: ${MUTED}; font-size: 15.5px; }
      .fha-new-compare { background: ${NAVY}; color: ${IVORY}; }
      .fha-new-compare .section-title { color: ${IVORY}; }
      .fha-new-compare .section-intro { color: rgba(250,248,244,.78); }
      .fha-new-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
      .fha-new-compare-card { padding: 30px; border-top: 2px solid ${GOLD}; background: rgba(255,255,255,.04); }
      .fha-new-compare-card h3 { margin: 0 0 18px; color: ${GOLD}; font-size: 24px; }
      .fha-new-list { margin: 0; padding: 0; list-style: none; }
      .fha-new-list li { position: relative; padding: 0 0 14px 23px; color: rgba(250,248,244,.8); }
      .fha-new-list li::before { content: ''; position: absolute; top: .65em; left: 0; width: 7px; height: 7px; border-radius: 50%; background: ${COPPER}; }
      .fha-new-note { margin: 30px 0 0; color: rgba(250,248,244,.62); font-size: 13px; }
      .fha-new-insurance { background: ${PARCHMENT}; }
      .fha-new-split { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
      .fha-new-detail { padding: 26px 0; border-top: 1px solid rgba(26,58,92,.2); }
      .fha-new-detail:first-child { padding-top: 0; border-top: 0; }
      .fha-new-detail h3 { margin: 0 0 10px; color: ${NAVY}; font-size: 22px; }
      .fha-new-detail p { margin: 0; color: ${MUTED}; }
      .fha-new-property { background: #fff; }
      .fha-new-step-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
      .fha-new-step { padding: 30px 0 0; border-top: 2px solid ${COPPER}; }
      .fha-new-step-number { color: ${COPPER}; font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2px; }
      .fha-new-step h3 { margin: 12px 0; color: ${NAVY}; font-size: 25px; }
      .fha-new-step p { margin: 0; color: ${MUTED}; }
      .fha-new-options { background: ${IVORY}; }
      .fha-new-options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; }
      .fha-new-options p { color: ${MUTED}; }
      .fha-new-links { display: grid; gap: 16px; align-content: start; }
      .fha-new-link-card { display: block; padding: 22px 24px; border: 1px solid rgba(26,58,92,.14); background: #fff; color: ${NAVY}; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; text-decoration: none; }
      .fha-new-final { padding: 86px 0; background: ${NAVY}; color: ${IVORY}; text-align: center; }
      .fha-new-final h2 { max-width: 720px; margin: 0 auto 18px; font-size: clamp(31px, 4.5vw, 48px); font-weight: 600; }
      .fha-new-final p { max-width: 650px; margin: 0 auto 30px; color: rgba(250,248,244,.78); font-size: 17px; }
      @media (max-width: 820px) {
        .fha-new .wrap { width: min(100% - 36px, 1080px); }
        .fha-new .section { padding: 68px 0; }
        .fha-new-hero { padding: 70px 0; }
        .fha-new-hero-grid, .fha-new-card-grid, .fha-new-compare-grid, .fha-new-split, .fha-new-step-grid, .fha-new-options-grid { grid-template-columns: 1fr; gap: 28px; }
        .fha-new-hero-note { max-width: 560px; }
      }
    `}</style>
    <main className="fha-new">
      <section className="fha-new-hero">
        <div className="wrap fha-new-hero-grid">
          <div>
            <p className="eyebrow">FHA Loans in Texas</p>
            <h1>FHA can open a door. The full cost decides whether it should.</h1>
            <p className="fha-new-hero-copy">FHA financing may offer useful flexibility for a primary-home purchase. We compare its payment, cash requirement, mortgage insurance, property rules, and long-term plan with the other options available to you.</p>
          </div>
          <aside className="fha-new-hero-note">Flexible does not mean automatic. FHA approval still depends on the borrower, property, funds, and current guidelines.</aside>
        </div>
      </section>
      <section className="section fha-new-strengths">
        <div className="wrap">
          <p className="eyebrow">Why buyers consider FHA</p>
          <h2 className="section-title">A practical option when the conventional box feels too tight.</h2>
          <p className="section-intro">FHA insures approved loans rather than lending directly. That insurance can support more flexible qualification, but it comes with costs and property requirements that belong in the decision.</p>
          <div className="fha-new-card-grid">{strengths.map((item) => <article className="fha-new-card" key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
        </div>
      </section>
      <section className="section fha-new-compare">
        <div className="wrap">
          <p className="eyebrow">FHA versus other paths</p>
          <h2 className="section-title">The right comparison uses the complete loan, not one headline number.</h2>
          <p className="section-intro">FHA, Conventional, and VA solve different problems. Current pricing and the full approval determine which structure deserves serious consideration.</p>
          <div className="fha-new-compare-grid">{comparisons.map((item) => <article className="fha-new-compare-card" key={item.title}><h3>{item.title}</h3><ul className="fha-new-list">{item.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div>
          <p className="fha-new-note">Eligibility, pricing, mortgage-insurance terms, and underwriting requirements can change. Recommendations require review of the current scenario.</p>
        </div>
      </section>
      <section className="section fha-new-insurance">
        <div className="wrap fha-new-split">
          <div>
            <p className="eyebrow">Mortgage insurance</p>
            <h2 className="section-title">FHA’s flexibility is not free.</h2>
            <p className="section-intro">FHA loans generally include upfront and annual mortgage-insurance premiums. How long the annual premium remains depends on the loan structure and current rules.</p>
            <Link className="text-link" to="/calculators?tab=fha-vs-conventional">Compare FHA and Conventional costs</Link>
          </div>
          <div>
            <article className="fha-new-detail"><h3>Payment today</h3><p>Compare principal, interest, taxes, homeowners insurance, mortgage insurance, HOA dues, and any assistance repayment. Rate alone is an incomplete answer.</p></article>
            <article className="fha-new-detail"><h3>Flexibility later</h3><p>Understand whether changing or eliminating mortgage insurance would require a refinance, and never build the plan around a future rate that does not exist yet.</p></article>
          </div>
        </div>
      </section>
      <section className="section fha-new-property">
        <div className="wrap">
          <p className="eyebrow">The FHA appraisal</p>
          <h2 className="section-title">Value matters, and visible property condition matters too.</h2>
          <p className="section-intro">FHA appraisals include minimum property considerations. A good offer strategy accounts for likely repairs before the contract becomes a very expensive group project.</p>
          <div className="fha-new-step-grid">{propertyItems.map((item) => <article className="fha-new-step" key={item.number}><span className="fha-new-step-number">{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
        </div>
      </section>
      <section className="section fha-new-options">
        <div className="wrap fha-new-options-grid">
          <div>
            <p className="eyebrow">Assistance and renovation</p>
            <h2 className="section-title">Additional programs can help, but every layer changes the math.</h2>
            <p>Eligible assistance may help with down payment or closing costs. The rate, fees, repayment structure, income limits, funding, and future refinance or sale restrictions must be verified before you rely on it.</p>
            <p>A renovation loan may be appropriate when the property needs work, but it adds contractor, appraisal, draw, timeline, and property requirements that should be reviewed before making the offer.</p>
          </div>
          <div className="fha-new-links">
            <Link className="fha-new-link-card" to="/down-payment-assistance-texas">Understand down-payment assistance</Link>
            <Link className="fha-new-link-card" to="/construction-renovation-loans-texas">Explore renovation financing</Link>
            <Link className="fha-new-link-card" to="/conventional-loan-texas">Compare Conventional financing</Link>
          </div>
        </div>
      </section>
      <section className="fha-new-final">
        <div className="wrap">
          <h2>Let’s find the loan that fits the whole plan.</h2>
          <p>We will compare FHA with the appropriate Conventional, VA, or assistance options using your actual payment, cash, property, and timeline.</p>
          <a className="primary" href={CALL_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
        </div>
      </section>
    </main>
  </>
);

export default FhaLoanTexasPage;
