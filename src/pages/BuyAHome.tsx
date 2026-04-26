import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
const BuyAHomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
      }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do I need a down payment if I have a VA loan?",
      a: "No — eligible veterans, active duty service members, and surviving spouses can purchase a home with 0% down using a VA loan. You'll still need cash for closing costs unless you negotiate seller concessions, and having 2–3 months of reserves after closing strengthens your file."
    },
    {
      q: "What's the VA funding fee and do I have to pay it?",
      a: "The VA funding fee ranges from 1.25%–3.3% of the loan amount depending on your down payment and whether it's your first VA loan use. It can be rolled into the loan so you don't need cash at closing. If you have a service-connected disability rating, the funding fee is waived entirely."
    },
    {
      q: "How is a mortgage broker different from a bank?",
      a: "A bank loan officer can only offer their institution's products — one shelf, one set of rates. A mortgage broker shops your file across 20+ wholesale lenders simultaneously and matches it to the investor whose guidelines and pricing best fit your situation. More access typically means better pricing and more options, especially for VA and non-standard files."
    },
    {
      q: "What credit score do I need to buy a home in Texas?",
      a: "It depends on the loan type. VA loans have no VA-set minimum, though most lenders require 580–620+. FHA requires 580+ for 3.5% down. Conventional typically starts at 620, with best pricing at 740+. Your specific score determines which programs are available — and a broker can run multiple scenarios side by side."
    },
    {
      q: "What is the Texas option period?",
      a: "The option period is a Texas-specific contract right that gives you a set number of days (typically 5–10) to back out of a purchase for any reason and keep your earnest money. You pay a small negotiated fee to the seller for this right. Use it to complete your inspection. Never waive it to look competitive — it protects you."
    },
    {
      q: "How long does it take to close on a home in Texas?",
      a: "A typical purchase closes in 30 days from contract to keys. The timeline depends on how quickly underwriting processes your file and how responsive you are to conditions. Having your documents organized before you go under contract is the single biggest factor in a smooth, on-time close."
    }
  ];

  return (
    <>
    <SEO title="Buy a Home in Texas | Pre-Approval & Purchase Loans | Keys by Shalanda" description="Ready to buy in Texas? Get pre-approved fast with a broker who shops 50+ lenders to find your best rate. VA, FHA, USDA, and conventional. No lender fees on VA loans." canonical="/buy" />
    <style>{`
                .bah-page {
          font-family: 'Outfit', sans-serif;
          background: #faf8f4;
          color: #1c2630;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        .bah-page *, .bah-page *::before, .bah-page *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* HERO */
        .bah-hero {
          background: #1a2535;
          position: relative;
          overflow: hidden;
          padding: 80px 24px 88px;
        }
        .bah-hero::before {
          content: '';
          position: absolute;
          top: -120px; right: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(181,98,30,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .bah-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(26,58,92,0.5) 0%, transparent 70%);
          pointer-events: none;
        }
        .bah-hero-inner {
          max-width: 1040px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .bah-tag {
          font-family: 'Fira Mono', monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #e8b47d;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .bah-tag::before { content: ''; width: 32px; height: 1px; background: #e8b47d; }
        .bah-hero h1 {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 700;
          line-height: 1.05;
          color: #f0ede6;
          letter-spacing: -0.5px;
          margin-bottom: 10px;
        }
        .bah-hero h1 em {
          font-style: italic;
          color: #e8b47d;
          display: block;
        }
        .bah-hero-sub {
          font-size: 18px;
          color: rgba(240,237,230,0.65);
          margin-bottom: 48px;
          max-width: 560px;
          line-height: 1.65;
        }
        .bah-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          max-width: 640px;
        }
        .bah-stat {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 20px 20px 16px;
        }
        .bah-stat-num {
          font-family: 'Lora', Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #e8b47d;
          line-height: 1;
          margin-bottom: 6px;
        }
        .bah-stat-label {
          font-size: 12px;
          color: rgba(240,237,230,0.55);
          line-height: 1.4;
        }

        /* RULE */
        .bah-rule {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b5621e, #e8b47d, #1a3a5c, transparent);
          opacity: 0.35;
        }

        /* SECTION SHARED */
        .bah-section-tag {
          font-family: 'Fira Mono', monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #b5621e;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .bah-section-tag::before { content: '—'; color: #ddd8cf; }
        .bah-section-tag.light { color: #e8b47d; }
        .bah-section-tag.light::before { color: rgba(255,255,255,0.15); }
        .bah-heading {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 700;
          color: #1a2535;
          line-height: 1.15;
          margin-bottom: 10px;
          letter-spacing: -0.3px;
        }
        .bah-heading.light { color: #f0ede6; }
        .bah-subhead {
          font-size: 16px;
          color: #4a5568;
          max-width: 560px;
          margin-bottom: 52px;
          line-height: 1.65;
        }
        .bah-subhead.light { color: rgba(240,237,230,0.65); }

        /* PROCESS */
        .bah-process {
          background: #fff;
          padding: 80px 24px;
        }
        .bah-process-inner { max-width: 960px; margin: 0 auto; }
        .bah-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .bah-step {
          background: #faf8f4;
          border: 1px solid #ddd8cf;
          border-radius: 12px;
          padding: 28px 28px 24px;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .bah-step:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(26,37,53,0.1);
        }
        .bah-step-num {
          font-family: 'Lora', Georgia, serif;
          font-size: 48px;
          font-weight: 700;
          color: #ddd8cf;
          line-height: 1;
          margin-bottom: -6px;
          letter-spacing: -2px;
        }
        .bah-step h3 {
          font-family: 'Lora', Georgia, serif;
          font-size: 17px;
          font-weight: 700;
          color: #1a3a5c;
          margin-bottom: 8px;
          line-height: 1.25;
        }
        .bah-step p { font-size: 14px; color: #4a5568; line-height: 1.6; }
        .bah-step-va {
          border-color: rgba(181,98,30,0.25);
          background: #fef0e6;
        }
        .bah-step-va .bah-step-num { color: rgba(181,98,30,0.2); }

        /* LOAN TYPES */
        .bah-loans {
          background: #f2efe9;
          padding: 80px 24px;
        }
        .bah-loans-inner { max-width: 960px; margin: 0 auto; }
        .bah-loan-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .bah-loan-card {
          background: #fff;
          border: 1px solid #ddd8cf;
          border-radius: 12px;
          padding: 28px 24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .bah-loan-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(26,37,53,0.1);
        }
        .bah-loan-card.featured {
          border-color: #b5621e;
          background: #1a2535;
        }
        .bah-loan-badge {
          font-family: 'Fira Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #b5621e;
          margin-bottom: 12px;
          display: block;
        }
        .bah-loan-card.featured .bah-loan-badge { color: #e8b47d; }
        .bah-loan-card h3 {
          font-family: 'Lora', Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #1a2535;
          margin-bottom: 12px;
        }
        .bah-loan-card.featured h3 { color: #f0ede6; }
        .bah-loan-list {
          list-style: none;
          font-size: 13.5px;
          color: #4a5568;
        }
        .bah-loan-list li {
          padding: 5px 0;
          padding-left: 18px;
          position: relative;
          border-bottom: 1px solid #f2efe9;
        }
        .bah-loan-list li:last-child { border-bottom: none; }
        .bah-loan-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #b5621e;
          font-size: 11px;
        }
        .bah-loan-card.featured .bah-loan-list { color: rgba(240,237,230,0.75); }
        .bah-loan-card.featured .bah-loan-list li { border-color: rgba(255,255,255,0.08); }
        .bah-loan-card.featured .bah-loan-list li::before { color: #e8b47d; }

        /* BROKER */
        .bah-broker {
          background: #1a2535;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }
        .bah-broker::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(181,98,30,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .bah-broker-inner {
          max-width: 960px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          position: relative;
          z-index: 1;
        }
        .bah-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .bah-compare-col {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 20px;
        }
        .bah-compare-col.highlight {
          background: rgba(181,98,30,0.15);
          border-color: rgba(181,98,30,0.3);
        }
        .bah-compare-title {
          font-family: 'Fira Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #e8b47d;
          margin-bottom: 16px;
          display: block;
        }
        .bah-compare-col:not(.highlight) .bah-compare-title {
          color: rgba(240,237,230,0.4);
        }
        .bah-compare-list {
          list-style: none;
          font-size: 13px;
          color: rgba(240,237,230,0.7);
        }
        .bah-compare-list li {
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          line-height: 1.45;
        }
        .bah-compare-list li:last-child { border-bottom: none; }

        /* TEXAS */
        .bah-texas {
          background: #fff;
          padding: 80px 24px;
        }
        .bah-texas-inner { max-width: 960px; margin: 0 auto; }
        .bah-texas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .bah-texas-card {
          background: #faf8f4;
          border: 1px solid #ddd8cf;
          border-radius: 12px;
          padding: 24px;
        }
        .bah-texas-card h3 {
          font-family: 'Lora', Georgia, serif;
          font-size: 16px;
          font-weight: 700;
          color: #1a3a5c;
          margin-bottom: 8px;
        }
        .bah-texas-card p { font-size: 14px; color: #4a5568; line-height: 1.6; }
        .bah-texas-label {
          font-family: 'Fira Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #b5621e;
          margin-bottom: 8px;
          display: block;
        }

        /* FAQ */
        .bah-faq {
          background: #f2efe9;
          padding: 80px 24px;
        }
        .bah-faq-inner { max-width: 760px; margin: 0 auto; }
        .bah-faq-item {
          background: #fff;
          border: 1px solid #ddd8cf;
          border-radius: 10px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .bah-faq-q {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 24px;
          text-align: left;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #1a2535;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          line-height: 1.4;
        }
        .bah-faq-q:hover { color: #b5621e; }
        .bah-faq-icon {
          font-size: 20px;
          color: #b5621e;
          flex-shrink: 0;
          font-family: 'Fira Mono', monospace;
          transition: transform 0.2s ease;
        }
        .bah-faq-icon.open { transform: rotate(45deg); }
        .bah-faq-a {
          padding: 0 24px 20px;
          font-size: 14px;
          color: #4a5568;
          line-height: 1.7;
        }

        /* CTA */
        .bah-cta {
          background: linear-gradient(135deg, #1a2535 0%, #1a3a5c 100%);
          padding: 80px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .bah-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(181,98,30,0.12) 0%, transparent 70%);
        }
        .bah-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .bah-cta h2 {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          color: #f0ede6;
          margin-bottom: 16px;
          line-height: 1.15;
          letter-spacing: -0.3px;
        }
        .bah-cta h2 em { font-style: italic; color: #e8b47d; }
        .bah-cta p {
          font-size: 16px;
          color: rgba(240,237,230,0.65);
          margin-bottom: 40px;
          line-height: 1.65;
        }
        .bah-btn {
          display: inline-block;
          background: #b5621e;
          color: #fff;
          font-family: 'Fira Mono', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 18px 40px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
          box-shadow: 0 4px 24px rgba(181,98,30,0.35);
          cursor: pointer;
          border: none;
        }
        .bah-btn:hover {
          background: #8f4a14;
          transform: translateY(-2px);
        }
        .bah-btn-outline {
          display: inline-block;
          background: transparent;
          color: #e8b47d;
          font-family: 'Fira Mono', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 16px 36px;
          border-radius: 6px;
          text-decoration: none;
          border: 1px solid rgba(232,180,125,0.4);
          transition: all 0.2s ease;
          margin-left: 16px;
        }
        .bah-btn-outline:hover {
          background: rgba(232,180,125,0.1);
          border-color: #e8b47d;
          color: #e8b47d;
        }

        /* FOOTER */
        .bah-footer {
          background: #1a2535;
          padding: 32px 24px;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .bah-footer p {
          font-family: 'Fira Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.8px;
          color: rgba(240,237,230,0.35);
          line-height: 1.9;
          max-width: 720px;
          margin: 0 auto;
        }
        .bah-footer a { color: rgba(240,237,230,0.45); text-decoration: none; }
        .bah-footer a:hover { color: #e8b47d; }

        /* RESPONSIVE */
        @media (max-width: 860px) {
          .bah-broker-inner { grid-template-columns: 1fr; gap: 40px; }
          .bah-hero-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .bah-hero { padding: 56px 20px 64px; }
          .bah-process, .bah-loans, .bah-broker, .bah-texas, .bah-faq { padding: 60px 20px; }
          .bah-compare { grid-template-columns: 1fr; }
          .bah-hero-grid { grid-template-columns: 1fr; }
          .bah-btn-outline { margin-left: 0; margin-top: 12px; display: block; text-align: center; }
        }
      `}</style>

      <div className="bah-page">

        {/* HERO */}
        <section className="bah-hero">
          <div className="bah-hero-inner">
            <div className="bah-tag">Buy a Home · Keys by Shalanda</div>
            <h1>Your Texas home purchase,<em>structured around your file.</em></h1>
            <p className="bah-hero-sub">Whether you're using your VA benefit for the first time or buying your next home, the strategy starts before you ever talk to a lender.</p>
            <div className="bah-hero-grid">
              <div className="bah-stat">
                <div className="bah-stat-num">0%</div>
                <div className="bah-stat-label">Down with VA loan for eligible veterans</div>
              </div>
              <div className="bah-stat">
                <div className="bah-stat-num">50+</div>
                <div className="bah-stat-label">Lender network shopped for your file</div>
              </div>
              <div className="bah-stat">
                <div className="bah-stat-num">21</div>
                <div className="bah-stat-label">Day average close</div>
              </div>
            </div>
          </div>
        </section>

        <div className="bah-rule" />

        {/* PROCESS */}
        <section className="bah-process">
          <div className="bah-process-inner">
            <div className="bah-section-tag">The Process</div>
            <h2 className="bah-heading">How a Texas home purchase actually works.</h2>
            <p className="bah-subhead">From credit audit to closing day — here's what happens at each stage and what you need to have ready.</p>
            <div className="bah-steps">
              <div className="bah-step bah-step-va">
                <div className="bah-step-num">01</div>
                <h3>Credit & Financial Audit</h3>
                <p>Pull all three bureaus. Calculate your DTI. Assemble your document package. The 30 days before you apply determines everything that happens after.</p>
              </div>
              <div className="bah-step">
                <div className="bah-step-num">02</div>
                <h3>Strategy Call & Loan Selection</h3>
                <p>We review your credit profile, income structure, and timeline. VA, FHA, Conventional, USDA — we run the scenarios side by side and show you the real numbers.</p>
              </div>
              <div className="bah-step">
                <div className="bah-step-num">03</div>
                <h3>Pre-Approval</h3>
                <p>Credit pulled. Income and assets verified. Full document package reviewed. This is the letter sellers take seriously — not a pre-qualification.</p>
              </div>
              <div className="bah-step">
                <div className="bah-step-num">04</div>
                <h3>Offer & Option Period</h3>
                <p>Submit your offer with the pre-approval attached. Use the Texas option period to inspect. The Third-Party Financing Addendum protects your earnest money if financing falls through.</p>
              </div>
              <div className="bah-step">
                <div className="bah-step-num">05</div>
                <h3>Underwriting & Conditions</h3>
                <p>Your file moves through underwriting. Respond to every condition within hours — not days. One slow response can push your closing date.</p>
              </div>
              <div className="bah-step">
                <div className="bah-step-num">06</div>
                <h3>Clear to Close & Closing Day</h3>
                <p>Final walkthrough 24 hours before closing. Review your Closing Disclosure line by line. Wire funds or bring a cashier's check. Get your keys.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bah-rule" />

        {/* LOAN TYPES */}
        <section className="bah-loans">
          <div className="bah-loans-inner">
            <div className="bah-section-tag">Loan Types</div>
            <h2 className="bah-heading">The right loan depends on your file — not a preference.</h2>
            <p className="bah-subhead">We run every eligible scenario side by side and show you the actual cost difference. Here's what each program looks like.</p>
            <div className="bah-loan-cards">
              <div className="bah-loan-card featured">
                <span className="bah-loan-badge">Best for veterans · Start here</span>
                <h3>VA Loan</h3>
                <ul className="bah-loan-list">
                  <li>0% down for eligible veterans & active duty</li>
                  <li>No PMI — ever</li>
                  <li>Funding fee 1.25–3.3% — waived with disability rating</li>
                  <li>Competitive rates — often lower than conventional</li>
                  <li>Requires Certificate of Eligibility (COE)</li>
                  <li>No VA-set credit minimum — most lenders 580–620+</li>
                </ul>
              </div>
              <div className="bah-loan-card">
                <span className="bah-loan-badge">First-time buyers · Limited savings</span>
                <h3>FHA Loan</h3>
                <ul className="bah-loan-list">
                  <li>3.5% down with 580+ credit</li>
                  <li>10% down with 500–579 credit</li>
                  <li>More DTI flexibility than conventional</li>
                  <li>MIP stays for life of loan if under 10% down</li>
                  <li>Good when rebuilding credit</li>
                </ul>
              </div>
              <div className="bah-loan-card">
                <span className="bah-loan-badge">Strong credit · Long-term savings</span>
                <h3>Conventional</h3>
                <ul className="bah-loan-list">
                  <li>3–5% down with 620+ credit</li>
                  <li>Best pricing at 740+ credit</li>
                  <li>PMI removable at 20% equity</li>
                  <li>HomeReady & Home Possible at 3% down</li>
                  <li>More flexibility on property types</li>
                </ul>
              </div>
              <div className="bah-loan-card">
                <span className="bah-loan-badge">Rural & suburban Texas</span>
                <h3>USDA Loan</h3>
                <ul className="bah-loan-list">
                  <li>0% down for eligible areas</li>
                  <li>Copperas Cove & Coryell County often qualify</li>
                  <li>Income limits apply (115% of area median)</li>
                  <li>Annual guarantee fee 0.35%</li>
                  <li>Check USDA map before assuming ineligible</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bah-rule" />

        {/* BROKER VS BANK */}
        <section className="bah-broker">
          <div className="bah-broker-inner">
            <div>
              <div className="bah-section-tag light">Why a Broker</div>
              <h2 className="bah-heading light">One lender's answer is not the only answer.</h2>
              <p className="bah-subhead light">A bank loan officer can only offer what their institution sells. A broker shops your file across 20+ wholesale lenders simultaneously — and matches it to the one whose guidelines and pricing best fit your situation.</p>
              <a href="https://calendly.com/shalanda-securechoicelending/30min" className="bah-btn" target="_blank" rel="noopener noreferrer">Book a Strategy Call →</a>
            </div>
            <div className="bah-compare">
              <div className="bah-compare-col highlight">
                <span className="bah-compare-title">Broker</span>
                <ul className="bah-compare-list">
                  <li>Shops 20+ wholesale lenders</li>
                  <li>Compares rates on your behalf</li>
                  <li>VA & Non-QM expertise</li>
                  <li>Can pivot if one lender declines</li>
                  <li>Wholesale pricing</li>
                </ul>
              </div>
              <div className="bah-compare-col">
                <span className="bah-compare-title">Bank</span>
                <ul className="bah-compare-list">
                  <li>Only their own products</li>
                  <li>One rate — take it or leave it</li>
                  <li>May or may not specialize in VA</li>
                  <li>Decline means start over</li>
                  <li>Retail pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bah-rule" />

        {/* TEXAS SPECIFIC */}
        <section className="bah-texas">
          <div className="bah-texas-inner">
            <div className="bah-section-tag">Texas-Specific</div>
            <h2 className="bah-heading">What your out-of-state friends don't know about buying in Texas.</h2>
            <p className="bah-subhead">Texas has its own contract structures, tax rules, and exemptions that affect your purchase. Know these before you make an offer.</p>
            <div className="bah-texas-grid">
              <div className="bah-texas-card">
                <span className="bah-texas-label">Contract Right</span>
                <h3>Option Period</h3>
                <p>A Texas-specific contract right — typically 5–10 days — that lets you back out for any reason and keep your earnest money. Use it for inspection. Never waive it to look competitive.</p>
              </div>
              <div className="bah-texas-card">
                <span className="bah-texas-label">Property Taxes</span>
                <h3>Tax Rates by County</h3>
                <p>Texas property taxes run 1.6%–2.6% annually depending on county. On a $300K home that's $373–$650/month added to your payment. Know your county's rate before you set your budget.</p>
              </div>
              <div className="bah-texas-card">
                <span className="bah-texas-label">File After Closing</span>
                <h3>Homestead Exemption</h3>
                <p>Reduces your taxable value by $100,000 (2023 law). File with your county appraisal district in the same year you close. Don't wait — this saves you money immediately.</p>
              </div>
              <div className="bah-texas-card">
                <span className="bah-texas-label">Veterans Benefit</span>
                <h3>VA Disability Exemption</h3>
                <p>A 100% service-connected disability rating can mean a full property tax exemption on your Texas primary residence. Partial ratings receive a scaled reduction. Apply with your VA award letter.</p>
              </div>
              <div className="bah-texas-card">
                <span className="bah-texas-label">Community Property</span>
                <h3>Spousal Signature</h3>
                <p>Texas is a community property state. If married, both spouses may need to sign documents even if only one is on the loan. Plan for this before the closing table.</p>
              </div>
              <div className="bah-texas-card">
                <span className="bah-texas-label">New Construction</span>
                <h3>Unimproved Tax Bills</h3>
                <p>If buying new construction, your first tax bill may reflect only the land value — not the completed home. Budget for the improved rate from day one or the escrow adjustment will surprise you.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bah-rule" />

        {/* FAQ */}
        <section className="bah-faq">
          <div className="bah-faq-inner">
            <div className="bah-section-tag">FAQ</div>
            <h2 className="bah-heading">Questions buyers ask before they apply.</h2>
            <p className="bah-subhead" style={{marginBottom: '36px'}}>The answers your lender should give you upfront — but often doesn't.</p>
            {faqs.map((faq, i) => (
              <div className="bah-faq-item" key={i}>
                <button className="bah-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className={`bah-faq-icon${openFaq === i ? ' open' : ''}`}>+</span>
                </button>
                {openFaq === i && <div className="bah-faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <div className="bah-rule" />

        {/* CTA */}
        <section className="bah-cta">
          <div className="bah-cta-inner">
            <h2>Ready to look at your specific file?<em>Let's build your strategy.</em></h2>
            <p>Thirty minutes. Your credit profile, income structure, loan options, and a realistic timeline — all mapped out before you make a single offer.</p>
            <div>
              <a href="https://calendly.com/shalanda-securechoicelending/30min" className="bah-btn" target="_blank" rel="noopener noreferrer">Book a Strategy Call →</a>
              <a href="/guide" className="bah-btn-outline">Get the Free Guide</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bah-footer">
          <p>
            This page is for educational purposes only and does not constitute a loan commitment, rate guarantee, or offer to lend. All loans subject to credit approval.<br />
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518<br />
            Licensed by the Texas Department of Savings and Mortgage Lending · Equal Housing Lender<br />
            <a href="https://shalandasmith.com">shalandasmith.com</a> · <a href="tel:2549359331">254.935.9331</a> · <a href="mailto:shalanda@securechoicelending.com">shalanda@securechoicelending.com</a>
          </p>
        </footer>

      </div>
    </>
  );
};

export default BuyAHomePage;
