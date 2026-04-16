import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";
const RefinancePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
     }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "I bought with FHA. Can I really refinance into a VA loan?",
      a: "Yes — if you have VA eligibility, you can refinance out of an FHA or conventional loan into a VA loan even if you didn't use your VA benefit at purchase. Many veterans were steered away from VA at the time, didn't know their entitlement was available, or simply weren't aware this option existed. A strategy call will confirm your eligibility and show you what the numbers look like."
    },
    {
      q: "What is full entitlement and does it mean I have no loan limit?",
      a: "Full entitlement means you've either never used your VA home loan benefit, or you've used it and fully paid it off. With full entitlement, there is no VA-set loan limit — you can borrow as much as a lender will approve based on your income and credit, with 0% down. Partial entitlement applies if you have an active VA loan and are buying a second property, and loan limits may apply in that case."
    },
    {
      q: "What is the VA IRRRL and who qualifies?",
      a: "The IRRRL (Interest Rate Reduction Refinance Loan) is a streamline refinance for veterans who already have a VA loan. It requires no appraisal and no income verification in most cases. Your new rate must be lower than your existing rate (with one exception — if you're moving from an adjustable rate to a fixed rate, the new rate can be higher). You must certify the home was previously your primary residence, and the loan must meet the net tangible benefit requirement."
    },
    {
      q: "What is the net tangible benefit requirement?",
      a: "The net tangible benefit test ensures you're actually benefiting from the refinance. For an IRRRL, this typically means your new interest rate is at least 0.5% lower than your current rate, or you're moving from an ARM to a fixed rate. For a cash-out type transaction, the benefit is evaluated differently. Your lender is required to certify this test is met before the loan can close."
    },
    {
      q: "What is the 12-day waiting period in Texas?",
      a: "Texas law requires that borrowers receive specific disclosures at least 12 calendar days before closing on a cash-out refinance on a Texas homestead. Closing cannot happen until those 12 days have passed — no exceptions. Plan your timeline accordingly. This applies to VA Type II and any conventional cash-out on a Texas homestead."
    },
    {
      q: "Can I get a lower title insurance rate if I've refinanced before?",
      a: "Yes — in Texas, if you refinance within 7 years of your original title policy date, you may qualify for a reissue rate on the lender's title insurance premium. This can meaningfully reduce your closing costs. Ask your broker specifically about the reissue rate — not every lender volunteers this information."
    },
    {
      q: "What if none of these refinance options fit my situation?",
      a: "There may be other options depending on your loan type, equity position, credit profile, and goals. Non-QM refinance products, DSCR refinances for investment properties, and other programs exist outside the standard VA and FHA paths. A strategy call is the fastest way to identify what's actually available for your specific file."
    }
  ];

  return (
    <>
      <SEO {...seoMeta.refinance} />
      <Helmet>
      <title>Refinance Your Texas Home | Keys by Shalanda | NMLS #554554</title>
      <meta name="description" content="Refinance your Texas home with a broker who shops 50+ lenders. Lower your rate, access equity, or restructure your loan. NMLS #554554." />
      <link rel="canonical" href="https://shalandasmith.com/refinance" />
    </Helmet>
      <style>{`
        .ref-page {
          font-family: 'Outfit', sans-serif;
          background: #faf8f4;
          color: #1c2630;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        .ref-page *, .ref-page *::before, .ref-page *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* HERO */
        .ref-hero {
          background: #1a2535;
          position: relative;
          overflow: hidden;
          padding: 80px 24px 88px;
        }
        .ref-hero::before {
          content: '';
          position: absolute;
          top: -120px; right: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(181,98,30,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .ref-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(26,58,92,0.5) 0%, transparent 70%);
          pointer-events: none;
        }
        .ref-hero-inner {
          max-width: 1040px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .ref-tag {
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
        .ref-tag::before { content: ''; width: 32px; height: 1px; background: #e8b47d; }
        .ref-hero h1 {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.05;
          color: #f0ede6;
          letter-spacing: -0.5px;
          margin-bottom: 10px;
        }
        .ref-hero h1 em {
          font-style: italic;
          color: #e8b47d;
          display: block;
        }
        .ref-hero-sub {
          font-size: 18px;
          color: rgba(240,237,230,0.65);
          margin-bottom: 48px;
          max-width: 600px;
          line-height: 1.65;
        }
        .ref-paths {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          max-width: 700px;
        }
        .ref-path {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 20px 22px;
        }
        .ref-path-label {
          font-family: 'Fira Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #e8b47d;
          margin-bottom: 8px;
          display: block;
        }
        .ref-path h3 {
          font-family: 'Lora', Georgia, serif;
          font-size: 16px;
          font-weight: 700;
          color: #f0ede6;
          margin-bottom: 6px;
          line-height: 1.25;
        }
        .ref-path p {
          font-size: 13px;
          color: rgba(240,237,230,0.6);
          line-height: 1.55;
        }

        /* RULE */
        .ref-rule {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b5621e, #e8b47d, #1a3a5c, transparent);
          opacity: 0.35;
        }

        /* SHARED SECTION */
        .ref-section-tag {
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
        .ref-section-tag::before { content: '—'; color: #ddd8cf; }
        .ref-section-tag.light { color: #e8b47d; }
        .ref-section-tag.light::before { color: rgba(255,255,255,0.15); }
        .ref-heading {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 700;
          color: #1a2535;
          line-height: 1.15;
          margin-bottom: 10px;
          letter-spacing: -0.3px;
        }
        .ref-heading.light { color: #f0ede6; }
        .ref-subhead {
          font-size: 16px;
          color: #4a5568;
          max-width: 600px;
          margin-bottom: 48px;
          line-height: 1.65;
        }
        .ref-subhead.light { color: rgba(240,237,230,0.65); }

        /* IRRRL */
        .ref-irrrl {
          background: #fff;
          padding: 80px 24px;
        }
        .ref-irrrl-inner { max-width: 960px; margin: 0 auto; }
        .ref-irrrl-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .ref-detail-list {
          list-style: none;
        }
        .ref-detail-list li {
          font-size: 15px;
          color: #4a5568;
          padding: 12px 0;
          padding-left: 24px;
          position: relative;
          border-bottom: 1px solid #f2efe9;
          line-height: 1.5;
        }
        .ref-detail-list li:last-child { border-bottom: none; }
        .ref-detail-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #b5621e;
          font-weight: 600;
        }
        .ref-detail-list li strong { color: #1a2535; font-weight: 600; }
        .ref-callout {
          background: #fef0e6;
          border: 1px solid rgba(181,98,30,0.2);
          border-radius: 12px;
          padding: 28px;
        }
        .ref-callout-label {
          font-family: 'Fira Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #b5621e;
          margin-bottom: 12px;
          display: block;
        }
        .ref-callout h3 {
          font-family: 'Lora', Georgia, serif;
          font-size: 18px;
          font-weight: 700;
          color: #1a2535;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .ref-callout p {
          font-size: 14px;
          color: #4a5568;
          line-height: 1.65;
          margin-bottom: 12px;
        }
        .ref-callout p:last-child { margin-bottom: 0; }

        /* CONVERSION */
        .ref-conversion {
          background: #f2efe9;
          padding: 80px 24px;
        }
        .ref-conversion-inner { max-width: 960px; margin: 0 auto; }
        .ref-type-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }
        .ref-type-card {
          background: #fff;
          border: 1px solid #ddd8cf;
          border-radius: 12px;
          padding: 32px 28px;
        }
        .ref-type-card.featured {
          background: #1a2535;
          border-color: #1a2535;
        }
        .ref-type-label {
          font-family: 'Fira Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #b5621e;
          margin-bottom: 8px;
          display: block;
        }
        .ref-type-card.featured .ref-type-label { color: #e8b47d; }
        .ref-type-card h3 {
          font-family: 'Lora', Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #1a2535;
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .ref-type-card.featured h3 { color: #f0ede6; }
        .ref-type-card p {
          font-size: 14px;
          color: #4a5568;
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .ref-type-card.featured p { color: rgba(240,237,230,0.7); }
        .ref-type-list {
          list-style: none;
          font-size: 13.5px;
          color: #4a5568;
        }
        .ref-type-list li {
          padding: 6px 0 6px 20px;
          position: relative;
          border-bottom: 1px solid #f2efe9;
          line-height: 1.5;
        }
        .ref-type-list li:last-child { border-bottom: none; }
        .ref-type-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #b5621e;
          font-size: 12px;
        }
        .ref-type-card.featured .ref-type-list { color: rgba(240,237,230,0.75); }
        .ref-type-card.featured .ref-type-list li { border-color: rgba(255,255,255,0.08); }
        .ref-type-card.featured .ref-type-list li::before { color: #e8b47d; }
        .ref-other-options {
          background: #1a3a5c;
          border-radius: 12px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ref-other-options p {
          font-size: 15px;
          color: rgba(240,237,230,0.8);
          line-height: 1.6;
          max-width: 560px;
        }
        .ref-other-options p strong { color: #f0ede6; }

        /* FHA STREAMLINE */
        .ref-fha {
          background: #fff;
          padding: 80px 24px;
        }
        .ref-fha-inner { max-width: 960px; margin: 0 auto; }
        .ref-fha-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .ref-note {
          background: #faf8f4;
          border: 1px solid #ddd8cf;
          border-left: 3px solid #b5621e;
          border-radius: 0 8px 8px 0;
          padding: 20px 24px;
          font-size: 14px;
          color: #4a5568;
          line-height: 1.65;
          margin-top: 24px;
        }
        .ref-note strong { color: #1a2535; }

        /* TEXAS */
        .ref-texas {
          background: #1a2535;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }
        .ref-texas::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(181,98,30,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .ref-texas-inner {
          max-width: 960px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .ref-texas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        .ref-texas-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 24px;
        }
        .ref-texas-card-label {
          font-family: 'Fira Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #e8b47d;
          margin-bottom: 8px;
          display: block;
        }
        .ref-texas-card h3 {
          font-family: 'Lora', Georgia, serif;
          font-size: 16px;
          font-weight: 700;
          color: #f0ede6;
          margin-bottom: 8px;
          line-height: 1.25;
        }
        .ref-texas-card p {
          font-size: 13.5px;
          color: rgba(240,237,230,0.65);
          line-height: 1.6;
        }

        /* FAQ */
        .ref-faq {
          background: #f2efe9;
          padding: 80px 24px;
        }
        .ref-faq-inner { max-width: 760px; margin: 0 auto; }
        .ref-faq-item {
          background: #fff;
          border: 1px solid #ddd8cf;
          border-radius: 10px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .ref-faq-q {
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
        .ref-faq-q:hover { color: #b5621e; }
        .ref-faq-icon {
          font-size: 20px;
          color: #b5621e;
          flex-shrink: 0;
          font-family: 'Fira Mono', monospace;
          transition: transform 0.2s ease;
        }
        .ref-faq-icon.open { transform: rotate(45deg); }
        .ref-faq-a {
          padding: 0 24px 20px;
          font-size: 14px;
          color: #4a5568;
          line-height: 1.7;
        }

        /* CTA */
        .ref-cta {
          background: linear-gradient(135deg, #1a2535 0%, #1a3a5c 100%);
          padding: 80px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ref-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(181,98,30,0.12) 0%, transparent 70%);
        }
        .ref-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .ref-cta h2 {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          color: #f0ede6;
          margin-bottom: 16px;
          line-height: 1.15;
          letter-spacing: -0.3px;
        }
        .ref-cta h2 em { font-style: italic; color: #e8b47d; }
        .ref-cta p {
          font-size: 16px;
          color: rgba(240,237,230,0.65);
          margin-bottom: 40px;
          line-height: 1.65;
        }
        .ref-btn {
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
        }
        .ref-btn:hover {
          background: #8f4a14;
          transform: translateY(-2px);
          color: #fff;
          text-decoration: none;
        }

        /* FOOTER */
        .ref-footer {
          background: #1a2535;
          padding: 32px 24px;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .ref-footer p {
          font-family: 'Fira Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.8px;
          color: rgba(240,237,230,0.35);
          line-height: 1.9;
          max-width: 720px;
          margin: 0 auto;
        }
        .ref-footer a { color: rgba(240,237,230,0.45); text-decoration: none; }
        .ref-footer a:hover { color: #e8b47d; }

        /* RESPONSIVE */
        @media (max-width: 860px) {
          .ref-irrrl-grid { grid-template-columns: 1fr; }
          .ref-type-cards { grid-template-columns: 1fr; }
          .ref-fha-grid { grid-template-columns: 1fr; }
          .ref-paths { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .ref-hero { padding: 56px 20px 64px; }
          .ref-irrrl, .ref-conversion, .ref-fha, .ref-texas, .ref-faq { padding: 60px 20px; }
          .ref-other-options { flex-direction: column; }
        }
      `}</style>

      <div className="ref-page">

        {/* HERO */}
        <section className="ref-hero">
          <div className="ref-hero-inner">
            <div className="ref-tag">Refinance · Keys by Shalanda</div>
            <h1>You earned this benefit.<em>Here's how to use it now.</em></h1>
            <p className="ref-hero-sub">Whether you already have a VA loan or purchased with FHA or Conventional, there may be a path to better terms — and a benefit you haven't used yet.</p>
            <div className="ref-paths">
              <div className="ref-path">
                <span className="ref-path-label">Already have a VA loan</span>
                <h3>VA IRRRL — Streamline Refinance</h3>
                <p>Lower your rate with minimal paperwork. No appraisal or income verification required in most cases.</p>
              </div>
              <div className="ref-path">
                <span className="ref-path-label">Have FHA or Conventional</span>
                <h3>Convert Into Your VA Benefit</h3>
                <p>You don't have to have purchased with VA to refinance into it. If you have eligibility, it may be available now.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="ref-rule"></div>

        {/* IRRRL */}
        <section className="ref-irrrl">
          <div className="ref-irrrl-inner">
            <div className="ref-section-tag">For Existing VA Loan Holders</div>
            <h2 className="ref-heading">The VA IRRRL — one of the simplest refinances in mortgage.</h2>
            <p className="ref-subhead">If you already have a VA loan and rates have moved since you closed, the Interest Rate Reduction Refinance Loan may be the most straightforward path to a lower payment.</p>
            <div className="ref-irrrl-grid">
              <ul className="ref-detail-list">
                <li><strong>No appraisal required</strong> in most cases — the process moves faster without it</li>
                <li><strong>No income verification</strong> typically required — streamlined underwriting</li>
                <li><strong>Lower funding fee</strong> — 0.5% vs. 1.25–3.3% on a purchase</li>
                <li>Your new rate must be <strong>lower than your existing rate</strong> — with one exception: moving from an adjustable rate to a fixed rate</li>
                <li><strong>Net tangible benefit required</strong> — your lender must certify the refinance actually benefits you</li>
                <li>Must certify the home was <strong>previously your primary residence</strong></li>
                <li><strong>6 payments minimum</strong> on the existing VA loan before you can IRRRL</li>
                <li><strong>Disability rating?</strong> The funding fee may be waived entirely</li>
              </ul>
              <div className="ref-callout">
                <span className="ref-callout-label">When it makes sense</span>
                <h3>Run the break-even math first.</h3>
                <p>Closing costs on an IRRRL typically run 2–3% of the loan amount. Divide that by your monthly savings to find your break-even point in months.</p>
                <p>Example: $5,000 in closing costs ÷ $150/month in savings = 33 months to break even. If you plan to stay longer than that, the refinance likely makes financial sense.</p>
                <p>Also ask about the Texas title reissue rate — if you're within 7 years of your original title policy, you may qualify for a reduced premium on the lender's title insurance, which can lower your closing costs meaningfully.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="ref-rule"></div>

        {/* CONVERSION */}
        <section className="ref-conversion">
          <div className="ref-conversion-inner">
            <div className="ref-section-tag">For Veterans With FHA or Conventional Loans</div>
            <h2 className="ref-heading">You didn't have to purchase with VA to refinance into it.</h2>
            <p className="ref-subhead">Many veterans were steered away from their VA benefit at purchase — by builder lenders, retail banks, or loan officers who didn't specialize in VA. Others didn't know their full entitlement was available, or that there's no loan limit with full entitlement. If that's you, this may be worth a conversation.</p>

            <div style={{ background: '#fff', border: '1px solid #ddd8cf', borderRadius: '12px', padding: '28px 28px 24px', marginBottom: '32px' }}>
              <span className="ref-type-label">Seasoning Requirements — Conventional to VA</span>
              <p style={{ fontSize: '14px', color: '#4a5568', lineHeight: '1.65', marginBottom: '16px' }}>To convert a conventional loan into a VA loan, two requirements must be met as of the note date of the new VA loan:</p>
              <ol style={{ listStyle: 'none', fontSize: '14px', color: '#4a5568', lineHeight: '1.65' }}>
                <li style={{ padding: '6px 0 6px 20px', position: 'relative', borderBottom: '1px solid #f2efe9' }}><span style={{ position: 'absolute', left: 0, color: '#b5621e', fontWeight: 600 }}>1.</span>210 days must have passed from the first payment due date on the conventional loan to the note date of the new VA loan</li>
                <li style={{ padding: '6px 0 6px 20px', position: 'relative', borderBottom: '1px solid #f2efe9' }}><span style={{ position: 'absolute', left: 0, color: '#b5621e', fontWeight: 600 }}>2.</span>Six monthly payments must have been made on the conventional loan</li>
                <li style={{ padding: '6px 0 6px 20px', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: '#b5621e', fontWeight: 600 }}>3.</span>LTV cannot exceed 100% — if the new loan amount including the VA funding fee would push above 100% LTV, the loan amount must be adjusted</li>
              </ol>
              <p style={{ fontSize: '14px', color: '#4a5568', lineHeight: '1.65', marginTop: '16px' }}><strong style={{ color: '#1a2535' }}>Important — Texas 50(a)(6):</strong> If your existing conventional loan was a Texas 50(a)(6) transaction — meaning you took cash out or paid off subordinate debt — VA refinancing is not permitted for that loan. A strategy call will confirm whether this applies to your situation.</p>
            </div>

            <div className="ref-type-cards">
              <div className="ref-type-card">
                <span className="ref-type-label">VA Type I Conversion</span>
                <h3>Refinancing Into VA Without Increasing Your Loan Balance</h3>
                <p>Your new VA loan pays off the existing loan balance. You're not pulling additional equity — you're simply converting into your VA benefit to access better terms.</p>
                <ul className="ref-type-list">
                  <li>Eliminate FHA mortgage insurance permanently</li>
                  <li>Eliminate conventional PMI permanently</li>
                  <li>Potentially lower your interest rate</li>
                  <li>New loan amount equals or is less than payoff</li>
                  <li>Lower funding fee than Type II</li>
                  <li>Net tangible benefit must be demonstrated</li>
                </ul>
              </div>
              <div className="ref-type-card featured">
                <span className="ref-type-label">VA Type II Conversion</span>
                <h3>Refinancing Into VA and Accessing Your Equity</h3>
                <p>Your new VA loan is greater than the existing payoff — you're converting into VA and tapping equity at the same time.</p>
                <ul className="ref-type-list">
                  <li>New loan amount exceeds existing payoff</li>
                  <li>Texas homestead: 80% LTV maximum</li>
                  <li>12-day disclosure required before closing</li>
                  <li>Only one cash-out refi per year on Texas homestead</li>
                  <li>Higher funding fee than Type I</li>
                  <li>Full appraisal typically required</li>
                </ul>
              </div>
            </div>

            <div className="ref-other-options">
              <p>Every refinance situation is different. If neither of these paths fits exactly, there may be other options depending on your loan type, equity position, credit profile, and goals. <strong>A strategy call is the fastest way to find out what's actually available for your file.</strong></p>
              <a href="https://calendly.com/unfilteredkeys/strategy" target="_blank" rel="noopener noreferrer" className="ref-btn">Book a Strategy Call →</a>
            </div>
          </div>
        </section>

        <div className="ref-rule"></div>

        {/* FHA STREAMLINE */}
        <section className="ref-fha">
          <div className="ref-fha-inner">
            <div className="ref-section-tag">For Non-VA-Eligible Borrowers</div>
            <h2 className="ref-heading">FHA Streamline — if VA isn't available to you.</h2>
            <p className="ref-subhead">If you have an existing FHA loan and don't have VA eligibility, a streamline refinance may still be an option worth exploring.</p>
            <div className="ref-fha-grid">
              <ul className="ref-detail-list">
                <li><strong>Must have an existing FHA loan</strong> — this program is not available for conventional loans</li>
                <li><strong>No appraisal required</strong> in most cases</li>
                <li><strong>No income verification</strong> typically required</li>
                <li><strong>6 payments minimum</strong> on the existing FHA loan</li>
                <li><strong>Net tangible benefit required</strong> — lower rate, lower payment, or ARM to fixed</li>
                <li><strong>Cannot take cash out</strong> — strictly rate and term</li>
                <li><strong>MIP still applies</strong> on the new loan — this does not go away</li>
              </ul>
              <div>
                <div className="ref-callout">
                  <span className="ref-callout-label">The important comparison</span>
                  <h3>FHA Streamline vs. Converting to VA</h3>
                  <p>If you have VA eligibility, converting out of FHA into a VA loan is almost always the stronger long-term move. The FHA streamline keeps you in MIP — which may stay for the life of the loan. A VA conversion eliminates mortgage insurance entirely.</p>
                  <p>Before choosing FHA streamline, confirm whether VA eligibility exists. Many veterans don't know they have it — or that they can use it even now.</p>
                </div>
                <div className="ref-note">
                  <strong>Not sure if you have VA eligibility?</strong> Your Certificate of Eligibility (COE) can be pulled directly from the VA system. We can do that on your behalf as part of a strategy call — it takes minutes and tells us exactly what benefit is available to you.
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ref-rule"></div>

        {/* USDA STREAMLINE */}
        <section className="ref-fha">
          <div className="ref-fha-inner">
            <div className="ref-section-tag">For Rural Texas Borrowers</div>
            <h2 className="ref-heading">USDA Streamline Refinance — if you're in an eligible area.</h2>
            <p className="ref-subhead">If you purchased with a USDA loan in a rural or suburban Texas area — Copperas Cove, Coryell County, and surrounding communities often qualify — a streamline refinance may be available without an appraisal or full credit review.</p>
            <div className="ref-fha-grid">
              <div>
                <div className="ref-callout" style={{ background: '#faf8f4', borderColor: '#ddd8cf' }}>
                  <span className="ref-callout-label">USDA Streamlined Assist</span>
                  <h3>The simpler path — fewer requirements.</h3>
                  <p>The Streamlined Assist is the most commonly used USDA refi program. It removes most of the traditional underwriting barriers.</p>
                </div>
                <ul className="ref-detail-list" style={{ marginTop: '20px' }}>
                  <li><strong>Must have an existing USDA loan</strong> — not available for conventional or FHA</li>
                  <li><strong>12 consecutive on-time payments</strong> required on the existing loan</li>
                  <li><strong>No appraisal required</strong> in most cases</li>
                  <li><strong>No credit review</strong> typically required</li>
                  <li>Must reduce payment by at least <strong>$50/month</strong> — principal, interest, and annual fee combined</li>
                  <li><strong>Cannot take cash out</strong> — strictly rate and term</li>
                  <li>Property must still be in a <strong>USDA-eligible area</strong> — verify on the USDA map</li>
                  <li><strong>Income limits still apply</strong> — same as purchase requirements</li>
                </ul>
              </div>
              <div>
                <div className="ref-callout" style={{ background: '#faf8f4', borderColor: '#ddd8cf' }}>
                  <span className="ref-callout-label">USDA Streamline (Standard)</span>
                  <h3>More flexibility — slightly more requirements.</h3>
                  <p>The standard streamline allows new borrowers to be added to the loan, which the Streamlined Assist does not. A credit review may be required depending on the lender.</p>
                  <p>Both programs are rate-and-term only — no cash out is available on any USDA refinance.</p>
                </div>
                <div className="ref-note">
                  <strong>Have VA eligibility but purchased with USDA?</strong> If you're a veteran who used USDA at purchase because of eligibility or entitlement concerns at the time, it may be worth exploring whether a VA refinance is now available to you. The two programs serve similar areas — but VA has no mortgage insurance and no loan limits with full entitlement. A strategy call will show you both paths side by side.
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ref-rule"></div>

        {/* TEXAS SPECIFIC */}
        <section className="ref-texas">
          <div className="ref-texas-inner">
            <div className="ref-section-tag light">Texas-Specific Rules</div>
            <h2 className="ref-heading light">Texas refinancing is different from every other state.</h2>
            <p className="ref-subhead light">Constitutional restrictions govern cash-out refinancing on Texas homesteads. Know these before you start the process.</p>
            <div className="ref-texas-grid">
              <div className="ref-texas-card">
                <span className="ref-texas-card-label">Timing Requirement</span>
                <h3>12-Day Disclosure Window</h3>
                <p>Texas law requires specific disclosures be delivered at least 12 calendar days before closing on a cash-out refinance on a Texas homestead. Closing cannot happen until those days have passed — no exceptions. Plan your timeline accordingly.</p>
              </div>
              <div className="ref-texas-card">
                <span className="ref-texas-card-label">Equity Restriction</span>
                <h3>80% LTV Maximum</h3>
                <p>On a Texas homestead cash-out refinance, you can never borrow more than 80% of the home's appraised value. This applies regardless of loan type — VA, FHA, or conventional.</p>
              </div>
              <div className="ref-texas-card">
                <span className="ref-texas-card-label">Frequency Limit</span>
                <h3>One Cash-Out Per Year</h3>
                <p>You can only do one cash-out refinance per year on a Texas homestead. Once you've closed a cash-out transaction, you must wait 12 months before doing another.</p>
              </div>
              <div className="ref-texas-card">
                <span className="ref-texas-card-label">Closing Cost Savings</span>
                <h3>Title Reissue Rate</h3>
                <p>If you refinance within 7 years of your original title policy date, you may qualify for a reissue rate on the lender's title insurance premium. This can meaningfully reduce your closing costs. Ask your broker specifically — not every lender volunteers this.</p>
              </div>
              <div className="ref-texas-card">
                <span className="ref-texas-card-label">Constitutional Rule</span>
                <h3>Cash-Out Stays Cash-Out — And VA Cannot Follow</h3>
                <p>Once a Texas homestead loan is classified as a cash-out (Section 50(a)(6)) refinance, it can only be refinanced into another cash-out loan — it cannot be converted to a rate-and-term refinance. Critically, VA loans are not permitted to refinance a Texas 50(a)(6) transaction. If you have a prior cash-out on your homestead, this affects your options significantly.</p>
              </div>
              <div className="ref-texas-card">
                <span className="ref-texas-card-label">Wait Period</span>
                <h3>12 Months From Original Loan</h3>
                <p>You must wait at least 12 months from the date of your original loan before doing a cash-out refinance on a Texas homestead. This applies to all loan types.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="ref-rule"></div>

        {/* SOLICITATION WARNING */}
        <section className="ref-irrrl">
          <div className="ref-irrrl-inner">
            <div className="ref-section-tag">Consumer Alert</div>
            <h2 className="ref-heading">If you received a refinance offer that looks like it's from the VA — read this first.</h2>
            <p className="ref-subhead">Veterans are targeted more aggressively by predatory refinance marketing than almost any other group. The VA has issued repeated warnings about mailers designed to look like official government correspondence.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#faf8f4', border: '1px solid #ddd8cf', borderRadius: '12px', padding: '24px' }}>
                <span className="ref-type-label">The Reality</span>
                <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '16px', fontWeight: 700, color: '#1a3a5c', marginBottom: '8px', lineHeight: 1.25 }}>The VA does not send unsolicited refinance offers.</h3>
                <p style={{ fontSize: '14px', color: '#4a5568', lineHeight: 1.6 }}>Any mailer with official-looking seals, government formatting, or VA branding that arrives unsolicited is from a private lender — not the government. The VA does not market refinance products directly to veterans.</p>
              </div>
              <div style={{ background: '#faf8f4', border: '1px solid #ddd8cf', borderRadius: '12px', padding: '24px' }}>
                <span className="ref-type-label">Red Flags</span>
                <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '16px', fontWeight: 700, color: '#1a3a5c', marginBottom: '8px', lineHeight: 1.25 }}>Warning signs in refinance solicitations.</h3>
                <ul style={{ listStyle: 'none', fontSize: '14px', color: '#4a5568', lineHeight: 1.6 }}>
                  <li style={{ padding: '4px 0' }}>→ "Your VA benefits are expiring"</li>
                  <li style={{ padding: '4px 0' }}>→ Urgent language requiring immediate action</li>
                  <li style={{ padding: '4px 0' }}>→ Official-looking government seals or formatting</li>
                  <li style={{ padding: '4px 0' }}>→ Pressure to close quickly without running the math</li>
                  <li style={{ padding: '4px 0' }}>→ No clear disclosure of fees or recoupment period</li>
                </ul>
              </div>
              <div style={{ background: '#faf8f4', border: '1px solid #ddd8cf', borderRadius: '12px', padding: '24px' }}>
                <span className="ref-type-label">Your Protection</span>
                <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '16px', fontWeight: 700, color: '#1a3a5c', marginBottom: '8px', lineHeight: 1.25 }}>VA rules exist to protect you.</h3>
                <p style={{ fontSize: '14px', color: '#4a5568', lineHeight: 1.6 }}>The net tangible benefit requirement and recoupment period rules exist specifically to protect veterans from predatory refinancing. Any IRRRL must demonstrate a clear financial benefit — and your lender is required to certify it. If someone can't show you the math, that's your answer.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="ref-rule"></div>

        {/* FAQ */}
        <section className="ref-faq">
          <div className="ref-faq-inner">
            <div className="ref-section-tag">FAQ</div>
            <h2 className="ref-heading">Questions worth asking before you refinance.</h2>
            <p className="ref-subhead">The answers your lender should give you upfront.</p>
            {faqs.map((faq, i) => (
              <div className="ref-faq-item" key={i}>
                <button className="ref-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className={`ref-faq-icon ${openFaq === i ? 'open' : ''}`}>+</span>
                </button>
                {openFaq === i && <div className="ref-faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <div className="ref-rule"></div>

        {/* CTA */}
        <section className="ref-cta">
          <div className="ref-cta-inner">
            <h2>Not sure which path applies to you?<em>That's what the call is for.</em></h2>
            <p>Thirty minutes. We'll look at your current loan, your eligibility, your equity position, and your goals — and tell you exactly what options are on the table.</p>
            <a href="https://calendly.com/unfilteredkeys/strategy" target="_blank" rel="noopener noreferrer" className="ref-btn">Book a Strategy Call →</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="ref-footer">
          <p>
            This page is for educational purposes only and does not constitute a loan commitment, rate guarantee, or offer to lend. All loans subject to credit approval. Rates and terms subject to change without notice.
            <br /><br />
            Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518
            <br />
            Licensed by the Texas Department of Savings and Mortgage Lending · Equal Housing Lender
            <br /><br />
            <a href="https://shalandasmith.com">shalandasmith.com</a> · 254.935.9331 · <a href="mailto:shalanda@securechoicelending.com">shalanda@securechoicelending.com</a>
          </p>
        </footer>

      </div>
    </>
  );
};

export default RefinancePage;
