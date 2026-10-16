import { useEffect } from "react";
import AboutSidebar from "@/components/AboutSidebar";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";
import awardCredentialSlide from "@/assets/award-credential-slide.jpg";
import awardStagePhoto from "@/assets/award-stage-photo.jpg";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
   }, []);
  const headshot = "/about-headshot.jpg";
return (
  <>
    <SEO {...seoMeta.about} />
<style dangerouslySetInnerHTML={{ __html: `
    .about-page {
          font-family: 'Outfit', sans-serif;
          background: #faf8f4;
          color: #1c2630;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        .about-page *, .about-page *::before, .about-page *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }

        /* HERO */
        .ab-hero {
          background: #1a2535;
          position: relative;
          overflow: hidden;
          padding: 80px 24px 88px;
        }
        .ab-hero::before {
          content: '';
          position: absolute;
          top: -120px; right: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(181,98,30,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .ab-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(26,58,92,0.5) 0%, transparent 70%);
          pointer-events: none;
        }
        .ab-hero-inner {
          max-width: 1040px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .ab-photo-wrap { position: relative; }
        .ab-photo {
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 12px;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .ab-photo-badge {
          position: absolute;
          bottom: -12px; right: -12px;
          background: #b5621e;
          color: #fff;
          padding: 12px 16px;
          border-radius: 8px;
          font-family: 'Fira Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          line-height: 1.5;
          text-transform: uppercase;
          box-shadow: 0 4px 16px rgba(181,98,30,0.3);
        }
        .ab-tag {
          font-family: 'Fira Mono', monospace;
          font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
          color: #e8b47d; margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .ab-tag::before { content: ''; width: 32px; height: 1px; background: #e8b47d; }
        .ab-hero h1 {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; line-height: 1.1;
          color: #f0ede6; letter-spacing: -0.5px; margin-bottom: 10px;
        }
        .ab-hero h1 em { font-style: italic; color: #e8b47d; display: block; }
        .ab-hero-sub {
          font-size: 17px; color: rgba(240,237,230,0.65);
          max-width: 520px; line-height: 1.65; margin-bottom: 32px;
        }
        .ab-creds {
          display: flex; flex-wrap: wrap; gap: 12px;
        }
        .ab-cred {
          font-family: 'Fira Mono', monospace;
          font-size: 10px; letter-spacing: 1px; text-transform: uppercase;
          color: rgba(240,237,230,0.6);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 8px 14px; border-radius: 6px;
        }

        /* RULE */
        .ab-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, #b5621e, #e8b47d, #1a3a5c, transparent);
          opacity: 0.35;
        }

        /* STORY */
        .ab-story {
          background: #fff;
          padding: 80px 24px;
        }
        .ab-story-inner {
          max-width: 960px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 420px;
          gap: 64px; align-items: start;
        }
        .ab-section-tag {
          font-family: 'Fira Mono', monospace;
          font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
          color: #b5621e; margin-bottom: 12px;
          display: flex; align-items: center; gap: 10px;
        }
        .ab-section-tag::before { content: '—'; color: #ddd8cf; }
        .ab-section-tag.light { color: #e8b47d; }
        .ab-section-tag.light::before { color: rgba(255,255,255,0.15); }
        .ab-heading {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 36px);
          font-weight: 700; color: #1a2535;
          line-height: 1.15; margin-bottom: 24px; letter-spacing: -0.3px;
        }
        .ab-heading.light { color: #f0ede6; }
        .ab-body p {
          font-size: 16px; color: #4a5568;
          line-height: 1.8; margin-bottom: 20px;
        }
        .ab-body p:last-child { margin-bottom: 0; }
        .ab-body p strong { color: #1a2535; font-weight: 600; }
        .ab-sig {
          font-family: 'Lora', Georgia, serif;
          font-style: italic; font-size: 20px;
          color: #1a3a5c; margin-top: 32px;
        }
        .ab-sig span {
          display: block;
          font-family: 'Fira Mono', monospace;
          font-style: normal; font-size: 10px;
          letter-spacing: 1.5px; color: #b5621e;
          margin-top: 4px; text-transform: uppercase;
        }
        .ab-awards {
          margin: 36px 0 32px;
        }
        .ab-awards-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        }
        .ab-award {
          margin: 0; background: #faf8f4;
          border: 1px solid #ddd8cf; border-radius: 10px;
          overflow: hidden; aspect-ratio: 4 / 3;
          display: flex; align-items: center; justify-content: center;
        }
        .ab-award img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .ab-awards-caption {
          margin-top: 14px;
          font-family: 'Fira Mono', monospace;
          font-size: 11px; letter-spacing: 1.2px;
          color: rgba(26,37,53,0.55); text-transform: uppercase;
          text-align: center;
        }
        @media (max-width: 600px) {
          .ab-awards-grid { grid-template-columns: 1fr; }
        }
        .ab-sidebar {
          padding-top: 8px;
        }
        .ab-stat-card {
          background: #faf8f4;
          border: 1px solid #ddd8cf;
          border-radius: 12px;
          padding: 28px;
          margin-bottom: 16px;
        }
        .ab-stat-card:last-child { margin-bottom: 0; }
        .ab-stat-num {
          font-family: 'Lora', Georgia, serif;
          font-size: 48px; font-weight: 700;
          color: #b5621e; line-height: 1;
          margin-bottom: 6px; letter-spacing: -1px;
        }
        .ab-stat-label {
          font-size: 14px; color: #4a5568; line-height: 1.5;
        }

        /* BROKER */
        .ab-broker {
          background: #1a2535;
          padding: 80px 24px;
          position: relative; overflow: hidden;
        }
        .ab-broker::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(181,98,30,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .ab-broker-inner {
          max-width: 960px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: start;
          position: relative; z-index: 1;
        }
        .ab-broker-body p {
          font-size: 16px; color: rgba(240,237,230,0.7);
          line-height: 1.8; margin-bottom: 20px;
        }
        .ab-broker-body p strong { color: #f0ede6; }
        .ab-compare {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        }
        .ab-compare-col {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px; padding: 20px;
        }
        .ab-compare-col.highlight {
          background: rgba(181,98,30,0.15);
          border-color: rgba(181,98,30,0.3);
        }
        .ab-compare-title {
          font-family: 'Fira Mono', monospace;
          font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          color: #e8b47d; margin-bottom: 14px; display: block;
        }
        .ab-compare-col:not(.highlight) .ab-compare-title { color: rgba(240,237,230,0.4); }
        .ab-compare-list { list-style: none; font-size: 13px; color: rgba(240,237,230,0.7); }
        .ab-compare-list li {
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          line-height: 1.45;
        }
        .ab-compare-list li:last-child { border-bottom: none; }

        /* MARKETS */
        .ab-markets {
          background: #f2efe9;
          padding: 80px 24px;
        }
        .ab-markets-inner { max-width: 960px; margin: 0 auto; }
        .ab-markets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px; margin-top: 40px;
        }
        .ab-market-card {
          background: #fff;
          border: 1px solid #ddd8cf;
          border-radius: 10px; padding: 20px 22px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ab-market-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(26,37,53,0.08);
        }
        .ab-market-label {
          font-family: 'Fira Mono', monospace;
          font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase;
          color: #b5621e; margin-bottom: 6px; display: block;
        }
        .ab-market-card h3 {
          font-family: 'Lora', Georgia, serif;
          font-size: 16px; font-weight: 700;
          color: #1a2535; line-height: 1.3;
        }
        .ab-market-card p {
          font-size: 13px; color: #8898aa;
          margin-top: 4px; line-height: 1.5;
        }

        /* CTA */
        .ab-cta {
          background: linear-gradient(135deg, #1a2535 0%, #1a3a5c 100%);
          padding: 80px 24px; text-align: center;
          position: relative; overflow: hidden;
        }
        .ab-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, rgba(181,98,30,0.12) 0%, transparent 70%);
        }
        .ab-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .ab-cta h2 {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(28px, 4vw, 42px); font-weight: 700;
          color: #f0ede6; margin-bottom: 16px;
          line-height: 1.15; letter-spacing: -0.3px;
        }
        .ab-cta h2 em { font-style: italic; color: #e8b47d; }
        .ab-cta p {
          font-size: 16px; color: rgba(240,237,230,0.65);
          margin-bottom: 40px; line-height: 1.65;
        }
        .ab-btn {
          display: inline-block; background: #b5621e; color: #fff;
          font-family: 'Fira Mono', monospace; font-size: 12px;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 18px 40px; border-radius: 6px; text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
          box-shadow: 0 4px 24px rgba(181,98,30,0.35);
        }
        .ab-btn:hover { background: #8f4a14; transform: translateY(-2px); color: #fff; text-decoration: none; }

        /* FOOTER */
        .ab-footer {
          background: #1a2535; padding: 32px 24px; text-align: center;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .ab-footer p {
          font-family: 'Fira Mono', monospace; font-size: 10px; letter-spacing: 0.8px;
          color: rgba(240,237,230,0.35); line-height: 1.9; max-width: 720px; margin: 0 auto;
        }
        .ab-footer a { color: rgba(240,237,230,0.45); text-decoration: none; }
        .ab-footer a:hover { color: #e8b47d; }

        /* RESPONSIVE */
        @media (max-width: 860px) {
          .ab-hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .ab-photo-wrap { max-width: 280px; margin: 0 auto; }
          .ab-story-inner { grid-template-columns: 1fr; gap: 40px; }
          .ab-broker-inner { grid-template-columns: 1fr; gap: 40px; }
          .ab-compare { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .ab-hero, .ab-story, .ab-broker, .ab-markets { padding: 60px 20px; }
        }
      ` }} />

      <div className="about-page">

        {/* HERO */}
        <section className="ab-hero">
          <div className="ab-hero-inner">
            <div className="ab-photo-wrap">
              <img src={headshot} alt="Shalanda Smith — Mortgage Broker, Keys by Shalanda" className="ab-photo" />
              <div className="ab-photo-badge">Shalanda Smith<br />NMLS #554554<br />Mortgage Broker</div>
            </div>
            <div>
              <div className="ab-tag">About · Keys by Shalanda</div>
              <h1>Structured strategy.<em>Unfiltered advice.</em></h1>
              <p className="ab-hero-sub">I didn&apos;t set out to be a mortgage broker. I set out to help people — and this turned out to be the best way to do it.</p>
              <div className="ab-creds">
                <span className="ab-cred">NMLS #554554</span>
                <span className="ab-cred">Licensed in Texas</span>
                <span className="ab-cred">Secure Choice Lending · NMLS #1689518</span>
                <span className="ab-cred">Texas SML Licensed</span>
                <span className="ab-cred">Equal Housing Opportunity</span>
              </div>
            </div>
          </div>
        </section>

        <div className="ab-rule" />

        {/* STORY */}
        <section className="ab-story">
          <div className="ab-story-inner">
            <div>
              <div className="ab-section-tag">My Story</div>
              <h2 className="ab-heading">I didn&apos;t choose mortgage. Mortgage chose me — and not gently.</h2>
              <div className="ab-body">
                <p>I was a bank branch manager in Austin when we got the news: effective immediately, we were also responsible for mortgage production. I remember thinking, great — who&apos;s my loan officer? They said, you are. I almost quit on the spot.</p>
                <p>Instead, they introduced me to Mr. Macy. Old school. Gregarious. The kind of loan officer who sits in the meeting with you, thinks through the file with you, and makes you feel like you can actually do this. I leaned in.</p>
                <p>It turns out I&apos;d landed at exactly the right branch at exactly the right time. My new location was full of physicians, surgeons, business owners, and asset-heavy clients. I became part of an internal medical board — sitting alongside private bankers, investment advisers, and senior management — building a real system for serving high-earning clients at the right moments. March for new residents. September for private practice buyins. I was learning faster than I could keep up with. By 2011, I was ranked #2 in total loan production in my region, named Elite Leader for the district, and recognized as a Medical Cabinet member. They put my name on a screen and handed me a trophy on stage. I didn&apos;t see that coming.</p>
              </div>

              <div className="ab-awards">
                <div className="ab-awards-grid">
                  <figure className="ab-award">
                    <img src={awardCredentialSlide} alt="Pinnacle Club credential slide — Shalanda Smith, ranked #2 in total loan production, Elite Leader, Medical Cabinet Member" loading="lazy" />
                  </figure>
                  <figure className="ab-award">
                    <img src={awardStagePhoto} alt="Shalanda Smith receiving the Pinnacle Club award on stage" loading="lazy" />
                  </figure>
                </div>
                <div className="ab-awards-caption">Pinnacle Club · 2011 · Ranked #2 in Total Loan Production · Elite Leader · Medical Cabinet Member</div>
              </div>

              <div className="ab-body">
                <p>That&apos;s when my mentor told me: if you want to really learn this business, go work for a builder.</p>
                <p>So I did. I went to work for a builder&apos;s in-house lender and learned the business from the inside: down payment assistance, nonstop pipelines, and zero breathing room. I learned everything. I also learned exactly how I didn&apos;t want to work. The moment I realized I had over 70 active loans and couldn&apos;t picture one of my own clients, I knew I needed something different.</p>
                <p>What followed were years at retail lenders and back in banking. I saw how much a company&apos;s structure decides what a borrower gets: one product shelf, one set of rates, one answer per file. When turn times stretched during COVID, I was the one pushing every file across the finish line. That&apos;s not the experience I wanted for my clients.</p>
                <p>Then I answered a phone call and met Nick.</p>
                <p>He introduced me to the broker model. Secure Choice Lending. And everything changed. I finally had real choice in pricing and programs, without a single product shelf deciding the outcome. <strong>Just the right lender for the right loan</strong>, and a CEO who gives me the autonomy and ongoing education to keep getting better.</p>
                <p>Every pipeline, every hard lesson, every file I fought for, I carry all of it into the loans I build now. The difference is, now I get to use it on your behalf. VA loans are where I go deepest, but whether you&apos;re a veteran, a first-time buyer, or a seasoned investor, you&apos;re getting the same fight.</p>
                <p>That&apos;s why I built Keys by Shalanda. And that&apos;s why I&apos;m not going anywhere.</p>
              </div>
              <div className="ab-sig">
                — Shalanda Smith
                <span>Senior Loan Originator · NMLS #554554 · Secure Choice Lending · NMLS #1689518</span>
              </div>
            </div>
            <div className="ab-sidebar">
              <AboutSidebar />
            </div>
          </div>
        </section>

        <div className="ab-rule" />

        {/* BROKER VS BANK */}
        <section className="ab-broker">
          <div className="ab-broker-inner">
            <div>
              <div className="ab-section-tag light">Why Broker</div>
              <h2 className="ab-heading light">The difference isn&apos;t just price — it&apos;s access.</h2>
              <div className="ab-broker-body">
                <p>A bank loan officer works with one product shelf. If your file doesn&apos;t fit their box, the answer is no — and you start over. <strong>A broker shops your file across 50+ wholesale lenders and finds the one whose guidelines and pricing best fit your situation.</strong></p>
                <p>Shopping your file across 50+ wholesale lenders can mean better options for your situation, and the flexibility to pivot if one lender declines, because another one might not.</p>
                <p>That&apos;s why I made the move. And it&apos;s why my clients don&apos;t go back to the bank.</p>
              </div>
            </div>
            <div className="ab-compare">
              <div className="ab-compare-col highlight">
                <span className="ab-compare-title">Broker</span>
                <ul className="ab-compare-list">
                  <li>50+ wholesale lenders</li>
                  <li>Wholesale pricing</li>
                  <li>Can pivot on a decline</li>
                  <li>VA, Non-QM, physician expertise</li>
                  <li>One advisor, full access</li>
                </ul>
              </div>
              <div className="ab-compare-col">
                <span className="ab-compare-title">Bank</span>
                <ul className="ab-compare-list">
                  <li>One product shelf</li>
                  <li>Retail pricing</li>
                  <li>Decline means start over</li>
                  <li>May or may not specialize</li>
                  <li>Limited by institution</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="ab-rule" />

        {/* MARKETS */}
        <section className="ab-markets">
          <div className="ab-markets-inner">
            <div className="ab-section-tag">Where We Work</div>
            <h2 className="ab-heading">Licensed statewide. Rooted in Central Texas.</h2>
            <p style={{fontSize:'16px',color:'#4a5568',lineHeight:'1.65',maxWidth:'600px'}}>We serve all of Texas — but our roots are in the Central Texas markets where military families, medical professionals, and first-time buyers need a broker who knows the area and understands the nuances.</p>
            <div className="ab-markets-grid">
              <div className="ab-market-card">
                <span className="ab-market-label">Military Market</span>
                <h3>Killeen · Temple · Harker Heights</h3>
                <p>Fort Hood corridor — VA loans, DPA, first-time buyers</p>
              </div>
              <div className="ab-market-card">
                <span className="ab-market-label">Rural Eligible</span>
                <h3>Copperas Cove · Gatesville · Kempner</h3>
                <p>Coryell County — USDA eligible areas, VA, FHA</p>
              </div>
              <div className="ab-market-card">
                <span className="ab-market-label">High Growth</span>
                <h3>Round Rock · Georgetown · Cedar Park</h3>
                <p>Williamson County — new construction, conventional, jumbo</p>
              </div>
              <div className="ab-market-card">
                <span className="ab-market-label">Major Metro</span>
                <h3>Dallas-Fort Worth · Houston · San Antonio</h3>
                <p>Full program access statewide</p>
              </div>
              <div className="ab-market-card">
                <span className="ab-market-label">West Texas</span>
                <h3>El Paso · Abilene</h3>
                <p>Fort Bliss, Dyess AFB — VA specialists</p>
              </div>
              <div className="ab-market-card">
                <span className="ab-market-label">Medical Corridor</span>
                <h3>Temple · Austin Metro</h3>
                <p>Scott &amp; White, UT Southwestern — physician loans</p>
              </div>
            </div>
          </div>
        </section>

        <div className="ab-rule" />

        {/* CTA */}
        <section className="ab-cta">
          <div className="ab-cta-inner">
            <h2>Ready to work with someone<em>who actually has options?</em></h2>
            <p>Thirty minutes. We look at your file, your goals, and what programs are actually available — and you leave with a clear picture of your path forward.</p>
            <a href="https://calendly.com/shalanda-securechoicelending/30min" className="ab-btn" target="_blank" rel="noopener noreferrer">Book a Free Call →</a>
          </div>
        </section>


      </div>
    </>
  );
};

export default AboutPage;
