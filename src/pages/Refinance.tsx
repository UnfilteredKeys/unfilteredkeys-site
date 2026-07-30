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

const reasons = [
  {
    title: "Lower the total monthly obligation",
    copy: "A lower rate can help, but taxes, insurance, mortgage insurance, term, and financed costs determine whether the full payment actually improves.",
  },
  {
    title: "Change the loan structure",
    copy: "A refinance may replace an adjustable rate, shorten or extend the term, remove certain mortgage-insurance costs, or move into a program that better fits the borrower.",
  },
  {
    title: "Use available equity",
    copy: "Cash-out financing may consolidate debt, fund improvements, or support another goal. The new balance, payment, equity position, and Texas homestead rules must all be considered.",
  },
];

const review = [
  {
    number: "01",
    title: "Benefit",
    copy: "Define the objective first. A lower rate is not automatically a better loan if the payment barely changes, the term restarts, or the transaction adds significant cost.",
  },
  {
    number: "02",
    title: "Cost",
    copy: "Review lender charges, title, appraisal, prepaid items, discount points, mortgage insurance, and any costs added to the balance.",
  },
  {
    number: "03",
    title: "Time",
    copy: "Compare the monthly savings with the cost to refinance and how long you expect to keep the loan. A benefit that takes years to recover may not fit your plan.",
  },
];

const paths = [
  {
    title: "Rate-and-term refinance",
    copy: "Primarily changes the rate, term, or loan program without using the transaction to receive significant cash. Eligibility and documentation depend on the existing and new loan.",
  },
  {
    title: "Streamline refinance",
    copy: "Some government-backed loans offer streamlined options. Appraisal, income, credit, seasoning, payment-history, and benefit requirements vary by program and lender.",
  },
  {
    title: "Cash-out refinance",
    copy: "Replaces the existing mortgage with a larger loan and converts part of the equity to cash. Texas homestead transactions carry additional constitutional requirements.",
  },
];

const RefinancePage = () => (
  <>
    <SEO {...seoMeta.refinance} />
    <style>{`
      .refi { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.65; -webkit-font-smoothing: antialiased; }
      .refi *, .refi *::before, .refi *::after { box-sizing: border-box; }
      .refi h1, .refi h2, .refi h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -.02em; line-height: 1.12; }
      .refi .wrap { width: min(1080px, calc(100% - 48px)); margin: 0 auto; }
      .refi .section { padding: 86px 0; }
      .refi .eyebrow { margin: 0 0 18px; color: ${COPPER}; font-family: 'Fira Mono', monospace; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
      .refi .section-title { max-width: 770px; margin: 0 0 20px; color: ${NAVY}; font-size: clamp(30px, 4vw, 45px); font-weight: 600; }
      .refi .section-intro { max-width: 730px; margin: 0 0 42px; color: ${MUTED}; font-size: 17px; }
      .refi .primary { display: inline-flex; align-items: center; justify-content: center; padding: 13px 24px; border-radius: 5px; background: ${COPPER}; color: #fff; font-weight: 600; text-decoration: none; }

      .refi-hero { padding: 90px 0 94px; background: ${PARCHMENT}; }
      .refi-hero-grid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); gap: 74px; align-items: end; }
      .refi h1 { max-width: 770px; margin: 0 0 24px; color: ${NAVY}; font-size: clamp(40px, 6vw, 66px); font-weight: 600; }
      .refi-hero-copy { max-width: 660px; margin: 0; color: ${MUTED}; font-size: 19px; }
      .refi-hero-note { padding: 30px; border-top: 3px solid ${COPPER}; background: rgba(255,255,255,.62); color: ${NAVY}; font-family: 'Lora', Georgia, serif; font-size: 21px; line-height: 1.45; }

      .refi-reasons { background: #fff; }
      .refi-grid-three { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
      .refi-card { padding: 30px 28px; border: 1px solid rgba(26,58,92,.12); background: ${IVORY}; }
      .refi-card h3 { margin: 0 0 13px; color: ${NAVY}; font-size: 22px; font-weight: 600; }
      .refi-card p { margin: 0; color: ${MUTED}; font-size: 15.5px; }

      .refi-math { background: ${NAVY}; color: ${IVORY}; }
      .refi-math .section-title { color: ${IVORY}; }
      .refi-math .section-intro { color: rgba(250,248,244,.78); }
      .refi-step { padding: 30px 0 0; border-top: 2px solid ${GOLD}; }
      .refi-step-number { color: ${GOLD}; font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2px; }
      .refi-step h3 { margin: 12px 0; color: ${IVORY}; font-size: 25px; }
      .refi-step p { margin: 0; color: rgba(250,248,244,.75); }

      .refi-paths { background: ${PARCHMENT}; }
      .refi-path-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid rgba(26,58,92,.18); border-bottom: 1px solid rgba(26,58,92,.18); }
      .refi-path { padding: 32px 28px; border-right: 1px solid rgba(26,58,92,.18); }
      .refi-path:last-child { border-right: 0; }
      .refi-path h3 { margin: 0 0 13px; color: ${NAVY}; font-size: 23px; }
      .refi-path p { margin: 0; color: ${MUTED}; }

      .refi-texas { background: #fff; }
      .refi-split { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
      .refi-rule { padding: 25px 0; border-top: 1px solid rgba(26,58,92,.18); }
      .refi-rule:first-child { padding-top: 0; border-top: 0; }
      .refi-rule h3 { margin: 0 0 8px; color: ${NAVY}; font-size: 21px; }
      .refi-rule p { margin: 0; color: ${MUTED}; }
      .refi-disclaimer { margin-top: 28px; color: ${MUTED}; font-size: 13px; }

      .refi-options { background: ${IVORY}; }
      .refi-links { display: grid; gap: 16px; align-content: start; }
      .refi-link { display: block; padding: 22px 24px; border: 1px solid rgba(26,58,92,.14); background: #fff; color: ${NAVY}; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; text-decoration: none; }

      .refi-final { padding: 86px 0; background: ${NAVY}; color: ${IVORY}; text-align: center; }
      .refi-final h2 { max-width: 720px; margin: 0 auto 18px; font-size: clamp(31px, 4.5vw, 48px); font-weight: 600; }
      .refi-final p { max-width: 650px; margin: 0 auto 30px; color: rgba(250,248,244,.78); font-size: 17px; }

      @media (max-width: 820px) {
        .refi .wrap { width: min(100% - 36px, 1080px); }
        .refi .section { padding: 68px 0; }
        .refi-hero { padding: 70px 0; }
        .refi-hero-grid, .refi-grid-three, .refi-path-list, .refi-split { grid-template-columns: 1fr; gap: 28px; }
        .refi-path-list { gap: 0; }
        .refi-path { border-right: 0; border-bottom: 1px solid rgba(26,58,92,.18); }
        .refi-path:last-child { border-bottom: 0; }
      }
    `}</style>

    <main className="refi">
      <section className="refi-hero">
        <div className="wrap refi-hero-grid">
          <div>
            <p className="eyebrow">Refinancing in Texas</p>
            <h1>A lower rate is only useful when the full math works.</h1>
            <p className="refi-hero-copy">
              Refinancing can reduce cost, change the loan structure, or provide access to equity. The decision should begin with your objective, not a mailer promising a payment that leaves half the story out.
            </p>
          </div>
          <aside className="refi-hero-note">
            We compare the new payment, closing costs, loan balance, recovery time, and future flexibility before calling a refinance worthwhile.
          </aside>
        </div>
      </section>

      <section className="section refi-reasons">
        <div className="wrap">
          <p className="eyebrow">Why homeowners refinance</p>
          <h2 className="section-title">Start with the problem the new loan needs to solve.</h2>
          <p className="section-intro">Different goals require different loan structures. Combining them into one “lowest rate” conversation is how expensive decisions get dressed up as savings.</p>
          <div className="refi-grid-three">
            {reasons.map((item) => (
              <article className="refi-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section refi-math">
        <div className="wrap">
          <p className="eyebrow">The refinance test</p>
          <h2 className="section-title">Savings require more than a smaller rate.</h2>
          <p className="section-intro">The comparison should show what changes now, what the transaction costs, and how long the expected benefit takes to materialize.</p>
          <div className="refi-grid-three">
            {review.map((item) => (
              <article className="refi-step" key={item.number}>
                <span className="refi-step-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section refi-paths">
        <div className="wrap">
          <p className="eyebrow">Common refinance paths</p>
          <h2 className="section-title">The right path depends on the current loan and the goal.</h2>
          <p className="section-intro">Program rules change, and “streamline” never means automatic approval. We verify the current requirements before recommending a structure.</p>
          <div className="refi-path-list">
            {paths.map((item) => (
              <article className="refi-path" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section refi-texas">
        <div className="wrap refi-split">
          <div>
            <p className="eyebrow">Texas homestead rules</p>
            <h2 className="section-title">Cash-out refinancing in Texas needs its own review.</h2>
            <p className="section-intro">
              Texas constitutional rules can affect available equity, required disclosures, timing, fees, and future refinance options. A prior cash-out transaction can also change how a later refinance must be structured.
            </p>
            <p className="refi-disclaimer">This is general mortgage education, not legal advice. Current Texas requirements and the existing lien history must be reviewed for the specific property and transaction.</p>
          </div>
          <div>
            <article className="refi-rule">
              <h3>Confirm the lien history</h3>
              <p>Do not assume the current loan is a standard rate-and-term mortgage. Prior equity or cash-out financing can materially change the available options.</p>
            </article>
            <article className="refi-rule">
              <h3>Build the timeline before promising a closing date</h3>
              <p>Texas disclosures, seasoning rules, appraisal timing, rescission rights, and lender review may affect how quickly the transaction can close.</p>
            </article>
            <article className="refi-rule">
              <h3>Protect the equity after closing</h3>
              <p>Receiving cash is only one side of the decision. We also review the new balance, payment, remaining equity, and the cost of converting short-term debt into long-term mortgage debt.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section refi-options">
        <div className="wrap refi-split">
          <div>
            <p className="eyebrow">Program-specific guidance</p>
            <h2 className="section-title">VA, conventional, FHA, and investment loans do not refinance the same way.</h2>
            <p className="section-intro">
              The current loan, occupancy, entitlement, equity, income documentation, payment history, and property type determine which paths deserve a real comparison.
            </p>
          </div>
          <div className="refi-links">
            <Link className="refi-link" to="/va-loan-texas">Review VA loan guidance</Link>
            <Link className="refi-link" to="/conventional-loan-texas">Review conventional financing</Link>
            <Link className="refi-link" to="/investors">Explore investor and DSCR options</Link>
          </div>
        </div>
      </section>

      <section className="refi-final">
        <div className="wrap">
          <h2>Let’s determine whether refinancing solves the problem or simply restarts the clock.</h2>
          <p>Bring the current mortgage statement and your goal. We will compare the available structure using the full cost, not a headline rate.</p>
          <a className="primary" href={CALL_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
        </div>
      </section>
    </main>
  </>
);

export default RefinancePage;
