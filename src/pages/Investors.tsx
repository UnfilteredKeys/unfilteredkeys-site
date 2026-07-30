import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const APPLY_URL = "https://scl.my1003app.com/554554/register";
const CALL_URL = "https://calendly.com/shalanda-securechoicelending/30min";

const options = [
  {
    title: "Bank statement",
    label: "Self-employed",
    body: "Uses eligible business or personal deposits to document income when tax returns do not show the full strength of the business.",
  },
  {
    title: "Profit and loss",
    label: "Business owners",
    body: "May use a prepared profit-and-loss statement instead of traditional tax-return income, depending on the program and file.",
  },
  {
    title: "DSCR",
    label: "Rental investors",
    body: "Qualifies primarily from the subject property's rental income and payment, rather than the borrower's personal debt-to-income ratio.",
  },
  {
    title: "Asset depletion",
    label: "Asset-rich borrowers",
    body: "Converts eligible liquid assets into a qualifying monthly income stream when employment income is limited or no longer the best measure.",
  },
];

const decisions = [
  {
    title: "How is income documented?",
    body: "Deposits, a profit-and-loss statement, tax returns, assets, or the property's rent can each tell a different financial story.",
  },
  {
    title: "What are you financing?",
    body: "A primary home, long-term rental, short-term rental, or fix-and-flip project will not use the same underwriting rules.",
  },
  {
    title: "What matters after closing?",
    body: "Cash reserves, entity ownership, future acquisitions, and the exit strategy should be considered before choosing a loan.",
  },
];

const resources = [
  {
    title: "Run the property numbers",
    body: "Estimate the full Texas payment and compare it with expected rent before you make an offer.",
    to: "/calculators?tab=texas-payment",
    label: "Texas Payment Calculator",
  },
  {
    title: "Model a longer strategy",
    body: "Explore how multiple properties, time, appreciation, and debt reduction may affect a portfolio.",
    to: "/calculators?tab=portfolio-builder",
    label: "Portfolio Builder",
  },
  {
    title: "Military portfolio strategy",
    body: "See how eligible service members may turn a PCS move into a longer-term rental plan.",
    to: "/pcs-to-portfolio",
    label: "PCS to Portfolio",
  },
];

const InvestorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO {...seoMeta.investors} />
      <style>{`
        .investor-page {
          --navy: #1a3a5c;
          --copper: #b5621e;
          --ivory: #faf8f4;
          --cream: #f5efe5;
          --white: #ffffff;
          --ink: #1c2630;
          --muted: #526171;
          font-family: 'Outfit', sans-serif;
          color: var(--ink);
          background: var(--ivory);
          line-height: 1.65;
        }
        .investor-page *, .investor-page *::before, .investor-page *::after { box-sizing: border-box; }
        .investor-page h1, .investor-page h2, .investor-page h3 {
          font-family: 'Lora', Georgia, serif;
          line-height: 1.12;
          letter-spacing: -0.025em;
        }
        .investor-wrap { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }
        .investor-hero { background: var(--cream); padding: 92px 0 88px; }
        .investor-kicker {
          margin: 0 0 18px;
          color: var(--copper);
          font-family: 'Fira Mono', monospace;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .investor-hero h1 {
          max-width: 850px;
          margin: 0 0 24px;
          color: var(--navy);
          font-size: clamp(40px, 6vw, 68px);
          font-weight: 600;
        }
        .investor-hero-copy {
          max-width: 710px;
          margin: 0 0 34px;
          color: var(--muted);
          font-size: clamp(17px, 2vw, 20px);
        }
        .investor-actions { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
        .investor-primary {
          display: inline-flex;
          padding: 14px 24px;
          border-radius: 4px;
          background: var(--copper);
          color: white;
          font-weight: 600;
          text-decoration: none;
        }
        .investor-text-link { color: var(--navy); font-weight: 600; text-underline-offset: 5px; }
        .investor-section { padding: 88px 0; }
        .investor-section.white { background: var(--white); }
        .investor-heading { max-width: 720px; margin-bottom: 44px; }
        .investor-heading h2 {
          margin: 0 0 18px;
          color: var(--navy);
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 600;
        }
        .investor-heading > p:last-child { margin: 0; color: var(--muted); font-size: 17px; }
        .investor-options {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          overflow: hidden;
          border: 1px solid rgba(26,58,92,0.12);
          border-radius: 6px;
          background: rgba(26,58,92,0.12);
        }
        .investor-option { padding: 30px; background: white; }
        .investor-option span {
          display: block;
          margin-bottom: 10px;
          color: var(--copper);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .investor-option h3, .investor-decision h3, .investor-resource h3 {
          margin: 0 0 10px;
          color: var(--navy);
          font-size: 22px;
        }
        .investor-option p, .investor-decision p, .investor-resource p { margin: 0; color: var(--muted); }
        .investor-split {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 84px;
          align-items: start;
        }
        .investor-split h2 {
          margin: 0;
          color: var(--navy);
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 600;
        }
        .investor-decisions { border-top: 1px solid rgba(26,58,92,0.15); }
        .investor-decision { padding: 26px 0; border-bottom: 1px solid rgba(26,58,92,0.15); }
        .investor-note {
          padding: 54px;
          border-radius: 6px;
          background: var(--navy);
          color: white;
        }
        .investor-note h2 { max-width: 700px; margin: 0 0 18px; color: white; font-size: clamp(30px, 4vw, 46px); }
        .investor-note p { max-width: 760px; margin: 0; color: rgba(255,255,255,0.78); font-size: 17px; }
        .investor-resources { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
        .investor-resource {
          display: flex;
          min-height: 245px;
          flex-direction: column;
          padding: 28px;
          border-top: 3px solid var(--copper);
          background: white;
        }
        .investor-resource p { flex: 1; }
        .investor-resource a { margin-top: 24px; color: var(--copper); font-weight: 600; text-decoration: none; }
        .investor-cta { padding: 88px 0; background: var(--navy); color: white; text-align: center; }
        .investor-cta .investor-wrap { max-width: 760px; }
        .investor-cta h2 { margin: 0 0 18px; color: white; font-size: clamp(32px, 5vw, 50px); }
        .investor-cta > div > p { margin: 0 auto 30px; color: rgba(255,255,255,0.78); font-size: 17px; }
        @media (max-width: 760px) {
          .investor-wrap { width: min(100% - 32px, 1120px); }
          .investor-hero, .investor-section, .investor-cta { padding: 64px 0; }
          .investor-options, .investor-split, .investor-resources { grid-template-columns: 1fr; }
          .investor-split { gap: 40px; }
          .investor-note { padding: 34px 26px; }
          .investor-resource { min-height: 0; }
        }
      `}</style>

      <main className="investor-page">
        <section className="investor-hero">
          <div className="investor-wrap">
            <p className="investor-kicker">Self-employed and investor lending</p>
            <h1>Your financial picture may need a different lens.</h1>
            <p className="investor-hero-copy">
              Tax returns are not the only way to document strength. The right mortgage strategy depends on how you earn,
              what you are buying, and what the property needs to accomplish.
            </p>
            <div className="investor-actions">
              <a className="investor-primary" href={CALL_URL} target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
              </a>
              <a className="investor-text-link" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                Ready now? Start here
              </a>
            </div>
          </div>
        </section>

        <section className="investor-section white">
          <div className="investor-wrap">
            <div className="investor-heading">
              <p className="investor-kicker">Four ways to qualify</p>
              <h2>The loan should fit the way the money actually works.</h2>
              <p>
                These programs solve different problems. The goal is not to choose the most exotic option. It is to use
                the cleanest documentation that accurately supports the file.
              </p>
            </div>
            <div className="investor-options">
              {options.map((option) => (
                <article className="investor-option" key={option.title}>
                  <span>{option.label}</span>
                  <h3>{option.title}</h3>
                  <p>{option.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="investor-section">
          <div className="investor-wrap investor-split">
            <div>
              <p className="investor-kicker">Before the rate quote</p>
              <h2>Start with the structure.</h2>
            </div>
            <div className="investor-decisions">
              {decisions.map((decision) => (
                <article className="investor-decision" key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="investor-section white">
          <div className="investor-wrap">
            <div className="investor-note">
              <p className="investor-kicker" style={{ color: "#e8b47d" }}>A useful distinction</p>
              <h2>DSCR is about the property. Bank statements are about the borrower.</h2>
              <p>
                A rental may support its own financing through DSCR. A self-employed borrower buying a primary home may
                need deposits, a profit-and-loss statement, or assets to document income. Similar audience, very
                different underwriting.
              </p>
            </div>
          </div>
        </section>

        <section className="investor-section">
          <div className="investor-wrap">
            <div className="investor-heading">
              <p className="investor-kicker">Plan with real numbers</p>
              <h2>Useful tools for the next decision.</h2>
            </div>
            <div className="investor-resources">
              {resources.map((resource) => (
                <article className="investor-resource" key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.body}</p>
                  <Link to={resource.to}>{resource.label} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="investor-cta">
          <div className="investor-wrap">
            <h2>Bring me the real financial picture.</h2>
            <p>
              We will review how income is earned, what the property needs to do, and which documentation gives the file
              the strongest path forward.
            </p>
            <a className="investor-primary" href={CALL_URL} target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default InvestorsPage;
