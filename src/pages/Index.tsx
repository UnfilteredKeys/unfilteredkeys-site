import { useEffect } from "react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { seoMeta } from "@/lib/seoData";

const strategyCall =
  "https://calendly.com/shalanda-securechoicelending/30min";
const application = "https://scl.my1003app.com/554554/register";

const styles = `
  :root {
    --warm-ivory: #f7f1e9;
    --soft-white: #fffdf9;
    --sand: #e8ddd0;
    --navy: #172b43;
    --navy-soft: #233d59;
    --copper: #b5652a;
    --copper-dark: #8e4b1c;
    --ink: #24303b;
    --muted: #66717a;
    --line: rgba(23, 43, 67, 0.14);
    --serif: "Lora", Georgia, serif;
    --sans: "Outfit", Arial, sans-serif;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    color: var(--ink);
    background: var(--soft-white);
    font-family: var(--sans);
    -webkit-font-smoothing: antialiased;
  }
  a { color: inherit; }
  .wm-container {
    width: min(1120px, calc(100% - 48px));
    margin: 0 auto;
  }
  .wm-section {
    padding: clamp(72px, 9vw, 116px) 0;
  }
  .wm-kicker {
    margin: 0 0 18px;
    color: var(--copper);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
  .wm-heading {
    max-width: 760px;
    margin: 0;
    color: var(--navy);
    font-family: var(--serif);
    font-size: clamp(38px, 5.2vw, 66px);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1.03;
  }
  .wm-heading em {
    color: var(--copper);
    font-weight: 400;
  }
  .wm-copy {
    max-width: 610px;
    margin: 24px 0 0;
    color: var(--muted);
    font-size: 17px;
    line-height: 1.75;
  }
  .wm-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 34px;
  }
  .wm-button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    padding: 13px 23px;
    border: 1px solid var(--navy);
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    transition: transform 160ms ease, background 160ms ease;
  }
  .wm-button:hover { transform: translateY(-2px); }
  .wm-button-primary {
    border-color: var(--navy);
    color: #fff;
    background: var(--navy);
  }
  .wm-button-primary:hover { background: var(--navy-soft); }
  .wm-button-secondary {
    color: var(--navy);
    background: transparent;
  }
  .wm-button-secondary:hover { background: rgba(23, 43, 67, 0.05); }
  .wm-text-link {
    display: inline-block;
    margin-top: 22px;
    color: var(--copper-dark);
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid rgba(142, 75, 28, 0.4);
  }
  :focus-visible {
    outline: 3px solid var(--copper);
    outline-offset: 4px;
  }

  .wm-hero {
    position: relative;
    overflow: hidden;
    padding: clamp(56px, 7vw, 88px) 0;
    background:
      radial-gradient(circle at 88% 18%, rgba(181, 101, 42, 0.09), transparent 28%),
      #ffffff;
  }
  .wm-hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) minmax(300px, 0.88fr);
    gap: clamp(44px, 8vw, 100px);
    align-items: center;
  }
  .wm-hero .wm-heading { max-width: 700px; }
  .wm-hero-note {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 32px;
    color: var(--muted);
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .wm-hero-note::before {
    width: 40px;
    height: 1px;
    content: "";
    background: var(--copper);
  }
  .wm-portrait {
    position: relative;
    min-height: 470px;
  }
  .wm-portrait img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center bottom;
  }

  .wm-promises {
    background: var(--warm-ivory);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .wm-promise-grid,
  .wm-path-grid,
  .wm-specialty-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .wm-promise {
    padding: 42px clamp(24px, 4vw, 50px);
    border-right: 1px solid var(--line);
  }
  .wm-promise:first-child { padding-left: 0; }
  .wm-promise:last-child {
    padding-right: 0;
    border-right: 0;
  }
  .wm-promise h2 {
    margin: 0 0 9px;
    color: var(--navy);
    font-family: var(--serif);
    font-size: 22px;
    font-weight: 500;
  }
  .wm-promise p {
    margin: 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.65;
  }

  .wm-paths { background: var(--soft-white); }
  .wm-path-intro { margin-bottom: 50px; }
  .wm-path-grid { border-top: 1px solid var(--line); }
  .wm-path {
    min-height: 310px;
    padding: 38px clamp(24px, 3vw, 40px);
    border-right: 1px solid var(--line);
  }
  .wm-path:last-child { border-right: 0; }
  .wm-path-number {
    color: var(--copper);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
  }
  .wm-path h3 {
    margin: 34px 0 15px;
    color: var(--navy);
    font-family: var(--serif);
    font-size: 34px;
    font-weight: 500;
  }
  .wm-path p {
    max-width: 270px;
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
  }

  .wm-specialties { background: var(--navy); }
  .wm-specialties .wm-kicker { color: #d9a67f; }
  .wm-specialties .wm-heading { color: #fff; }
  .wm-specialties .wm-copy { color: rgba(255, 255, 255, 0.68); }
  .wm-specialty-grid {
    gap: 1px;
    margin-top: 52px;
    background: rgba(255, 255, 255, 0.14);
  }
  .wm-specialty {
    min-height: 260px;
    padding: 38px;
    background: var(--navy);
  }
  .wm-specialty-label {
    color: #d9a67f;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .wm-specialty h3 {
    margin: 42px 0 12px;
    color: #fff;
    font-family: var(--serif);
    font-size: 28px;
    font-weight: 500;
  }
  .wm-specialty p {
    margin: 0;
    color: rgba(255, 255, 255, 0.63);
    font-size: 14px;
    line-height: 1.7;
  }
  .wm-specialty a {
    display: inline-block;
    margin-top: 22px;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
  }

  .wm-about { background: var(--warm-ivory); }
  .wm-about-grid {
    max-width: 780px;
    margin: 0 auto;
  }
  .wm-credentials {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 26px;
    margin-top: 30px;
    padding-top: 22px;
    border-top: 1px solid var(--line);
    color: var(--navy);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .wm-testimonial {
    text-align: center;
    background: var(--soft-white);
  }
  .wm-quote {
    max-width: 880px;
    margin: 0 auto;
    color: var(--navy);
    font-family: var(--serif);
    font-size: clamp(29px, 4vw, 48px);
    font-weight: 400;
    letter-spacing: -0.025em;
    line-height: 1.35;
  }
  .wm-attribution {
    margin: 28px 0 0;
    color: var(--copper-dark);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .wm-final {
    padding: clamp(76px, 9vw, 108px) 0;
    text-align: center;
    background: var(--warm-ivory);
    border-top: 1px solid var(--line);
  }
  .wm-final .wm-heading,
  .wm-final .wm-copy { margin-left: auto; margin-right: auto; }
  .wm-final .wm-actions { justify-content: center; }
  .wm-final-note {
    margin: 20px 0 0;
    color: var(--muted);
    font-size: 12px;
  }

  @media (max-width: 820px) {
    .wm-container { width: min(100% - 36px, 680px); }
    .wm-hero {
      padding-top: 52px;
      background: #ffffff;
    }
    .wm-hero-grid { grid-template-columns: 1fr; }
    .wm-portrait {
      min-height: 420px;
      max-width: 500px;
      width: 100%;
      margin: 0 auto;
    }
    .wm-promise-grid,
    .wm-path-grid,
    .wm-specialty-grid { grid-template-columns: 1fr; }
    .wm-promise {
      padding: 30px 0;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }
    .wm-promise:last-child { border-bottom: 0; }
    .wm-path {
      min-height: auto;
      padding: 34px 0;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }
    .wm-path:last-child { border-bottom: 0; }
    .wm-specialty { min-height: auto; padding: 34px 28px; }
    .wm-specialty h3 { margin-top: 28px; }
  }

  @media (max-width: 520px) {
    .wm-container { width: min(100% - 28px, 680px); }
    .wm-section { padding: 66px 0; }
    .wm-actions { flex-direction: column; }
    .wm-button { width: 100%; }
    .wm-portrait { min-height: 380px; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .wm-button { transition: none; }
  }
`;

export default function Index() {
  useEffect(() => {
    document.body.style.background = "#fffdf9";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <>
      <SEO {...seoMeta.home} />
      <SchemaMarkup />
      <style>{styles}</style>

      <main>
        <section className="wm-hero" aria-labelledby="wm-hero-heading">
          <div className="wm-container wm-hero-grid">
            <div>
              <p className="wm-kicker">Texas Mortgage Strategy</p>
              <h1 className="wm-heading" id="wm-hero-heading">
                A mortgage should feel <em>clear.</em>
              </h1>
              <p className="wm-copy">
                Thoughtful lending guidance for Texans who want honest numbers,
                the right strategy, and no pressure to move before they are
                ready.
              </p>
              <div className="wm-actions">
                <a
                  className="wm-button wm-button-primary"
                  href={strategyCall}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a Strategy Call
                </a>
              </div>
              <a className="wm-text-link" href="/guide">
                Start with the free guide
              </a>
              <div className="wm-hero-note">
                VA-focused · Independent Texas mortgage broker
              </div>
            </div>

            <div className="wm-portrait">
              <img
                src="/headshot.jpg"
                alt="Shalanda Smith, Texas mortgage broker"
                width="520"
                height="620"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section className="wm-promises" aria-label="How Shalanda works">
          <div className="wm-container wm-promise-grid">
            <article className="wm-promise">
              <h2>No rushing.</h2>
              <p>Start with information, not an application.</p>
            </article>
            <article className="wm-promise">
              <h2>No guessing.</h2>
              <p>See the payment and strategy behind the approval.</p>
            </article>
            <article className="wm-promise">
              <h2>No one-size-fits-all.</h2>
              <p>Your loan should reflect your real financial picture.</p>
            </article>
          </div>
        </section>

        <section className="wm-section wm-paths" aria-labelledby="wm-paths-heading">
          <div className="wm-container">
            <div className="wm-path-intro">
              <p className="wm-kicker">Start Where You Are</p>
              <h2 className="wm-heading" id="wm-paths-heading">
                Learn. Plan. Apply.
              </h2>
              <p className="wm-copy">
                You do not have to be ready for everything today. Choose the
                next step that fits.
              </p>
            </div>

            <div className="wm-path-grid">
              <article className="wm-path">
                <span className="wm-path-number">01</span>
                <h3>Learn</h3>
                <p>
                  Understand the process and the numbers before anyone asks you
                  to commit.
                </p>
                <a className="wm-text-link" href="/guide">
                  Get the free guide
                </a>
              </article>
              <article className="wm-path">
                <span className="wm-path-number">02</span>
                <h3>Plan</h3>
                <p>
                  Talk through your goals, timing, and comfortable monthly
                  payment.
                </p>
                <a
                  className="wm-text-link"
                  href={strategyCall}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a strategy call
                </a>
              </article>
              <article className="wm-path">
                <span className="wm-path-number">03</span>
                <h3>Apply</h3>
                <p>
                  When you are ready, share the documents needed for real
                  numbers and a strong approval.
                </p>
                <a
                  className="wm-text-link"
                  href={application}
                  target="_blank"
                  rel="noreferrer"
                >
                  Begin securely
                </a>
              </article>
            </div>
          </div>
        </section>

        <section
          className="wm-section wm-specialties"
          aria-labelledby="wm-specialties-heading"
        >
          <div className="wm-container">
            <p className="wm-kicker">Focused Expertise</p>
            <h2 className="wm-heading" id="wm-specialties-heading">
              More options. Less noise.
            </h2>
            <p className="wm-copy">
              Clear strategy for borrowers whose financing deserves more than a
              standard script.
            </p>

            <div className="wm-specialty-grid">
              <article className="wm-specialty">
                <span className="wm-specialty-label">Service-earned benefit</span>
                <h3>VA Loans</h3>
                <p>
                  Guidance built around entitlement, military income, PCS
                  timing, and the full value of your benefit.
                </p>
                <a href="/va-loan-texas">Explore VA loans →</a>
              </article>
              <article className="wm-specialty">
                <span className="wm-specialty-label">Flexible income paths</span>
                <h3>Self-Employed &amp; Investors</h3>
                <p>
                  Bank statement, DSCR, P&amp;L, and other strategies for income
                  that does not fit neatly in a box.
                </p>
                <a href="/investors">Explore options →</a>
              </article>
              <article className="wm-specialty">
                <span className="wm-specialty-label">Professional programs</span>
                <h3>Physician Loans</h3>
                <p>
                  Financing that accounts for contracts, student debt, and the
                  realities of a medical career.
                </p>
                <a href="/physician-loan-texas">Explore physician loans →</a>
              </article>
            </div>
          </div>
        </section>

        <section className="wm-section wm-about" aria-labelledby="wm-about-heading">
          <div className="wm-container wm-about-grid">
            <div>
              <p className="wm-kicker">Meet Your Broker</p>
              <h2 className="wm-heading" id="wm-about-heading">
                Strategy before sales.
              </h2>
              <p className="wm-copy">
                I help buyers understand the decision in front of them, not
                simply reach a closing table. That means honest numbers, plain
                language, and a loan structured around the life you are
                actually building.
              </p>
              <a className="wm-text-link" href="/about">
                Meet Shalanda
              </a>
              <div className="wm-credentials">
                <span>Shalanda Smith</span>
                <span>NMLS #554554</span>
                <span>Licensed in Texas</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="wm-section wm-testimonial"
          aria-labelledby="wm-testimonial-heading"
        >
          <div className="wm-container">
            <p className="wm-kicker">Client Experience</p>
            <h2 className="wm-quote" id="wm-testimonial-heading">
              “Shalanda went above and beyond to ensure I received the best
              possible outcome. It was clear she genuinely cared about helping
              me make the right decisions, not just closing a deal.”
            </h2>
            <p className="wm-attribution">Thomas S. · Texas Homebuyer</p>
          </div>
        </section>

        <section className="wm-final" aria-labelledby="wm-final-heading">
          <div className="wm-container">
            <p className="wm-kicker">Your Next Step</p>
            <h2 className="wm-heading" id="wm-final-heading">
              Let’s make the mortgage make sense.
            </h2>
            <p className="wm-copy">
              Begin with a conversation or apply when you are ready for real
              numbers.
            </p>
            <div className="wm-actions">
              <a
                className="wm-button wm-button-primary"
                href={strategyCall}
                target="_blank"
                rel="noreferrer"
              >
                Book a Strategy Call
              </a>
              <a
                className="wm-button wm-button-secondary"
                href={application}
                target="_blank"
                rel="noreferrer"
              >
                Begin the Secure Application
              </a>
            </div>
            <p className="wm-final-note">
              Secure Choice Lending · NMLS #1689518
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
