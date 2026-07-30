import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const CALL_URL = "https://calendly.com/shalanda-securechoicelending/30min";
const APPLY_URL = "https://scl.my1003app.com/554554/register";

const advantages = [
  {
    title: "Employment contracts may count",
    body: "Some programs can qualify eligible borrowers with a signed contract before the new position begins, subject to the lender's timing and documentation rules.",
  },
  {
    title: "Student debt may be treated differently",
    body: "Depending on the program and repayment status, student loans may be calculated more favorably than they are under standard conventional guidelines.",
  },
  {
    title: "Lower down-payment options",
    body: "Eligible medical professionals may have access to high-balance financing with a smaller down payment and no monthly mortgage insurance.",
  },
  {
    title: "Residents and fellows may qualify",
    body: "You may not need to wait until you become an attending. Career stage, contract terms, reserves, credit, and the full loan structure still matter.",
  },
];

const decisions = [
  {
    title: "Your designation",
    body: "MD and DO borrowers are commonly eligible. Dentists, pharmacists, veterinarians, advanced-practice clinicians, and other professionals may qualify through select programs.",
  },
  {
    title: "Your timing",
    body: "A resident, fellow, relocating physician, or new attending may need a program that can use future employment income without forcing the purchase to wait.",
  },
  {
    title: "Your complete payment",
    body: "Texas property taxes, homeowners insurance, association dues, and the down payment affect the decision just as much as the loan amount.",
  },
];

const comparisons = [
  {
    title: "Physician loan",
    body: "Often strongest when contract income, student debt, or cash preservation makes standard underwriting a poor fit.",
  },
  {
    title: "Conventional or jumbo",
    body: "May offer a better overall cost when income documentation, down payment, reserves, and student-debt treatment already work within standard guidelines.",
  },
  {
    title: "VA loan",
    body: "For eligible military physicians, VA financing may be the better option. I compare the payment, fees, cash to close, and long-term flexibility side by side.",
  },
];

const cityGuides = [
  { title: "Austin", to: "/physician-loan-austin-tx" },
  { title: "Dallas-Fort Worth", to: "/physician-loan-dallas-tx" },
  { title: "Houston", to: "/physician-loan-houston-tx" },
  { title: "San Antonio", to: "/physician-loan-san-antonio-tx" },
];

export default function PhysicianLoanTexas() {
  return (
    <>
      <SEO {...seoMeta.physicianLoanTexas} />
      <style>{`
        .physician-page {
          --navy: #1a3a5c;
          --copper: #b5621e;
          --ivory: #faf8f4;
          --cream: #f5efe5;
          --white: #ffffff;
          --ink: #1c2630;
          --muted: #526171;
          --line: rgba(26, 58, 92, .14);
          background: var(--ivory);
          color: var(--ink);
          font-family: 'Outfit', sans-serif;
          line-height: 1.65;
        }
        .physician-page *, .physician-page *::before, .physician-page *::after { box-sizing: border-box; }
        .physician-page h1, .physician-page h2, .physician-page h3 {
          font-family: 'Lora', Georgia, serif;
          letter-spacing: -.025em;
          line-height: 1.12;
        }
        .physician-wrap { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }
        .physician-kicker {
          margin: 0 0 16px;
          color: var(--copper);
          font: 600 11px/1.4 'Fira Mono', monospace;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .physician-hero { padding: 92px 0 86px; background: var(--cream); }
        .physician-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr);
          gap: 72px;
          align-items: center;
        }
        .physician-hero h1 {
          max-width: 760px;
          margin: 0 0 24px;
          color: var(--navy);
          font-size: clamp(42px, 5.8vw, 68px);
          font-weight: 600;
        }
        .physician-lead {
          max-width: 680px;
          margin: 0 0 32px;
          color: var(--muted);
          font-size: clamp(17px, 2vw, 20px);
        }
        .physician-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 20px; }
        .physician-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 24px;
          border-radius: 5px;
          background: var(--copper);
          color: white;
          font-weight: 700;
          text-decoration: none;
        }
        .physician-text-link { color: var(--navy); font-weight: 700; text-underline-offset: 5px; }
        .physician-summary {
          padding: 36px;
          border-radius: 12px;
          background: var(--navy);
          color: white;
          box-shadow: 0 18px 50px rgba(26, 58, 92, .13);
        }
        .physician-summary h2 { margin: 0 0 22px; color: white; font-size: 27px; }
        .physician-summary ul { display: grid; gap: 15px; margin: 0; padding: 0; list-style: none; }
        .physician-summary li { padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,.14); color: rgba(255,255,255,.78); }
        .physician-summary li:last-child { padding-bottom: 0; border-bottom: 0; }
        .physician-section { padding: 86px 0; }
        .physician-section.white { background: var(--white); }
        .physician-heading { max-width: 740px; margin-bottom: 44px; }
        .physician-heading h2 {
          margin: 0 0 17px;
          color: var(--navy);
          font-size: clamp(32px, 4vw, 46px);
          font-weight: 600;
        }
        .physician-heading > p:last-child { margin: 0; color: var(--muted); font-size: 17px; }
        .physician-advantages {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--line);
        }
        .physician-advantage { padding: 30px 34px 30px 0; border-bottom: 1px solid var(--line); }
        .physician-advantage:nth-child(even) { padding-right: 0; padding-left: 34px; border-left: 1px solid var(--line); }
        .physician-advantage h3, .physician-decision h3, .physician-choice h3 {
          margin: 0 0 10px;
          color: var(--navy);
          font-size: 21px;
        }
        .physician-advantage p, .physician-decision p, .physician-choice p { margin: 0; color: var(--muted); }
        .physician-split {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 82px;
          align-items: start;
        }
        .physician-split h2 { margin: 0; color: var(--navy); font-size: clamp(32px, 4vw, 48px); font-weight: 600; }
        .physician-decisions { border-top: 1px solid var(--line); }
        .physician-decision { padding: 26px 0; border-bottom: 1px solid var(--line); }
        .physician-choices { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
        .physician-choice { padding: 28px; border-top: 3px solid var(--copper); background: var(--white); }
        .physician-note {
          margin-top: 32px;
          padding: 26px 30px;
          border-left: 4px solid var(--copper);
          background: var(--cream);
          color: var(--muted);
        }
        .physician-note strong { color: var(--navy); }
        .physician-guides { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .physician-guide {
          display: flex;
          min-height: 120px;
          align-items: flex-end;
          padding: 24px;
          border: 1px solid var(--line);
          background: white;
          color: var(--navy);
          font-family: 'Lora', serif;
          font-size: 20px;
          font-weight: 700;
          text-decoration: none;
        }
        .physician-guide:hover { border-color: var(--copper); color: var(--copper); }
        .physician-cta { padding: 82px 0; background: var(--navy); color: white; text-align: center; }
        .physician-cta .physician-wrap { max-width: 760px; }
        .physician-cta h2 { margin: 0 0 18px; color: white; font-size: clamp(32px, 5vw, 50px); }
        .physician-cta p { margin: 0 auto 30px; color: rgba(255,255,255,.76); font-size: 17px; }
        .physician-cta .physician-primary { background: #d08045; }
        @media (max-width: 800px) {
          .physician-wrap { width: min(100% - 32px, 1120px); }
          .physician-hero, .physician-section, .physician-cta { padding: 62px 0; }
          .physician-hero-grid, .physician-split { grid-template-columns: 1fr; gap: 38px; }
          .physician-advantages, .physician-choices, .physician-guides { grid-template-columns: 1fr; }
          .physician-advantage, .physician-advantage:nth-child(even) { padding: 24px 0; border-left: 0; }
          .physician-actions { align-items: flex-start; flex-direction: column; }
          .physician-primary { width: 100%; }
          .physician-guide { min-height: 90px; }
        }
      `}</style>

      <main className="physician-page">
        <section className="physician-hero">
          <div className="physician-wrap physician-hero-grid">
            <div>
              <p className="physician-kicker">Texas physician and professional lending</p>
              <h1>Your career path should not confuse your mortgage.</h1>
              <p className="physician-lead">
                Contract income, student debt, and years spent in training can make a strong borrower look complicated.
                The right strategy compares the programs built for that reality.
              </p>
              <div className="physician-actions">
                <a className="physician-primary" href={CALL_URL} target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                </a>
                <a className="physician-text-link" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                  Ready now? Start here
                </a>
              </div>
            </div>
            <aside className="physician-summary">
              <p className="physician-kicker" style={{ color: "#e8b47d" }}>What we review</p>
              <h2>The complete file, not one headline.</h2>
              <ul>
                <li>Professional designation and career stage</li>
                <li>Employment contract and start date</li>
                <li>Student-loan repayment status</li>
                <li>Cash, reserves, credit, and target payment</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="physician-section white">
          <div className="physician-wrap">
            <div className="physician-heading">
              <p className="physician-kicker">Why these programs exist</p>
              <h2>Traditional underwriting does not always tell the full story.</h2>
              <p>
                Physician and professional programs can solve specific documentation problems. Availability and terms
                vary, so we begin with your file instead of promising a one-size-fits-all product.
              </p>
            </div>
            <div className="physician-advantages">
              {advantages.map((advantage) => (
                <article className="physician-advantage" key={advantage.title}>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="physician-section">
          <div className="physician-wrap physician-split">
            <div>
              <p className="physician-kicker">Before the preapproval</p>
              <h2>Three details shape the strategy.</h2>
            </div>
            <div className="physician-decisions">
              {decisions.map((decision) => (
                <article className="physician-decision" key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="physician-section white">
          <div className="physician-wrap">
            <div className="physician-heading">
              <p className="physician-kicker">Compare before choosing</p>
              <h2>A physician loan is an option, not an automatic winner.</h2>
              <p>
                The best loan is the one that gives you the strongest overall structure after payment, cash to close,
                mortgage insurance, fees, and future plans are considered.
              </p>
            </div>
            <div className="physician-choices">
              {comparisons.map((choice) => (
                <article className="physician-choice" key={choice.title}>
                  <h3>{choice.title}</h3>
                  <p>{choice.body}</p>
                </article>
              ))}
            </div>
            <div className="physician-note">
              <strong>Program guidelines change.</strong> Eligible designations, maximum loan amounts, down payments,
              student-debt calculations, property types, and contract timing vary by lender and borrower profile.
            </div>
          </div>
        </section>

        <section className="physician-section">
          <div className="physician-wrap">
            <div className="physician-heading">
              <p className="physician-kicker">Texas market guides</p>
              <h2>Local details still change the payment.</h2>
              <p>
                Explore focused guidance for four major medical markets, including property taxes, insurance, commute,
                and the real monthly cost of the home.
              </p>
            </div>
            <div className="physician-guides">
              {cityGuides.map((guide) => (
                <Link className="physician-guide" to={guide.to} key={guide.title}>
                  {guide.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="physician-cta">
          <div className="physician-wrap">
            <h2>Let’s compare the options around your actual career and finances.</h2>
            <p>
              We will review your contract, student debt, cash, target payment, and timing before deciding which loan
              deserves your attention.
            </p>
            <a className="physician-primary" href={CALL_URL} target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
