import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const GOLD = "#e8b47d";
const IVORY = "#faf8f4";
const PARCHMENT = "#f5efe2";
const CREAM = "#f9f5ec";
const INK = "#1c2630";

const APPLY_URL = "https://scl.my1003app.com/554554/register";
const CALL_URL = "https://calendly.com/shalanda-securechoicelending/30min";

const stats = [
  { v: "3%", l: "Minimum Down Payment" },
  { v: "620", l: "Minimum Credit Score" },
  { v: "20%", l: "PMI Removable at Equity" },
  { v: "740+", l: "For Best Available Pricing" },
];

const tiers = [
  {
    range: "620–639",
    label: "Run Side by Side With FHA",
    body: "Conventional is available, but LLPAs are steep. Compare total cost against FHA carefully at this range — FHA may be cheaper depending on down payment and how long you plan to stay.",
  },
  {
    range: "640–679",
    label: "Both Programs Compete",
    body: "Both FHA and conventional are competitive. Run the side-by-side. The break-even point between FHA MIP and conventional PMI typically falls in the 5 to 7 year range at this credit level.",
  },
  {
    range: "680–719",
    label: "Conventional Typically Wins",
    body: "Conventional usually wins on total cost of ownership at this range. PMI is lower, LLPAs are moderate, and PMI disappears at 20% equity — while FHA MIP does not.",
  },
  {
    range: "720–739",
    label: "Strong Conventional Pricing",
    body: "PMI tiers are favorable, LLPAs minimal. This is where conventional clearly outperforms FHA for most borrowers.",
  },
  {
    range: "740+",
    label: "Best Available Pricing",
    body: "Lowest PMI tiers, minimal LLPAs, and in some cases PMI can be avoided entirely with lender-paid options. Conventional almost always wins here.",
  },
];

const useCases = [
  {
    t: "Move-Up Buyers",
    b: "Conventional is the standard structure for buyers selling one home and purchasing another. Bridge situations, simultaneous close strategies, and departure residence considerations are all handled under conventional guidelines.",
  },
  {
    t: "Second Homes",
    b: "Conventional allows purchase of second homes and vacation properties with as little as 10% down. Interest rates are typically slightly higher than primary residence pricing. The property must be suitable for year-round occupancy and not managed as a rental.",
  },
  {
    t: "Investment Properties",
    b: "Conventional allows purchase of investment and rental properties with 15 to 25% down depending on property type, up to 10 financed properties under Fannie Mae guidelines. DSCR loans are often a better fit for investors with multiple properties or complex tax returns — ask us to run both scenarios.",
  },
];

const faqs = [
  {
    q: "Is conventional always better than FHA?",
    a: "No. It depends on your credit score, down payment, how long you plan to stay in the home, and whether you can remove PMI faster than FHA MIP would burn off. We run both scenarios and show you the total cost comparison before you decide.",
  },
  {
    q: "Can I use gift funds for a conventional down payment?",
    a: "Yes. Conventional loans allow gift funds from family members for down payment on primary residences. The donor cannot be the seller or any party to the transaction. A gift letter is required documenting that the funds are not a loan. For investment properties and second homes, gift funds are typically not allowed.",
  },
  {
    q: "What is PMI and how do I get rid of it?",
    a: "PMI stands for private mortgage insurance and is required on conventional loans when you put less than 20% down. It protects the lender, not you. It is automatically cancelled when your loan balance reaches 78% of the original purchase price. You can request cancellation at 80% LTV, and you may be able to eliminate it sooner through a new appraisal if your home has appreciated significantly.",
  },
  {
    q: "Can I buy a duplex or triplex with a conventional loan?",
    a: "Yes. Conventional loans allow purchase of 2 to 4 unit properties as a primary residence with as little as 5% down on a 2-unit and 25% down on 3 to 4 units for investment. Rental income from the other units can be used to help qualify. This is a common house-hacking strategy for building rental income while living in the property.",
  },
  {
    q: "What reserves do I need for a conventional loan?",
    a: "Reserve requirements vary by loan scenario. Standard primary residence purchases typically require 2 months PITIA in reserves. Second homes require 2 months. Investment properties require 6 months per financed property. HomeReady and Home Possible may have reduced reserve requirements for qualifying buyers.",
  },
  {
    q: "What is a conventional loan limit and what happens if I go over it?",
    a: "The conforming loan limit set by FHFA is $766,550 for most Texas counties in 2024 and updates annually. Loans above that limit are jumbo loans and follow different guidelines. Jumbo loans typically require stronger credit, larger down payments, and more reserves. Contact us for the current limit in your specific county.",
  },
  {
    q: "Can I refinance out of FHA into conventional?",
    a: "Yes. Once you have enough equity in your home — typically 20% or more — you can refinance from an FHA loan into a conventional loan and eliminate FHA mortgage insurance entirely. This is one of the most common and financially beneficial refinance scenarios we handle. The break-even calculation depends on your current rate, remaining MIP, and the new conventional rate.",
  },
];

const ConventionalLoanTexasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO {...seoMeta.conventionalLoanTexas} />

      <style>{`
        .conv { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.7; -webkit-font-smoothing: antialiased; }
        .conv *, .conv *::before, .conv *::after { box-sizing: border-box; }
        .conv h1, .conv h2, .conv h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -0.01em; line-height: 1.15; }
        .conv .wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }

        .conv-hero { background: ${NAVY}; color: ${IVORY}; padding: 88px 0 96px; }
        .conv-eyebrow { font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2.4px; text-transform: uppercase; color: ${GOLD}; margin-bottom: 22px; }
        .conv-h1 { font-size: clamp(34px, 5vw, 56px); font-weight: 600; max-width: 920px; margin-bottom: 22px; }
        .conv-sub { font-size: 18px; line-height: 1.65; color: rgba(250,248,244,0.82); max-width: 760px; margin-bottom: 36px; }
        .conv-cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary { background: ${COPPER}; color: #fff; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s; }
        .btn-primary:hover { background: #9d521a; }
        .btn-outline { border: 1.5px solid ${IVORY}; color: ${IVORY}; padding: 13px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s, color .18s; }
        .btn-outline:hover { background: ${IVORY}; color: ${NAVY}; }

        .conv-stats { background: ${COPPER}; color: #fff; }
        .conv-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .conv-stat { padding: 28px 22px; text-align: center; border-right: 1px solid rgba(255,255,255,0.18); }
        .conv-stat:last-child { border-right: none; }
        .conv-stat-v { font-family: 'Lora', Georgia, serif; font-size: 32px; font-weight: 700; line-height: 1; margin-bottom: 6px; }
        .conv-stat-l { font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase; opacity: 0.92; }
        @media (max-width: 720px) { .conv-stats-grid { grid-template-columns: repeat(2, 1fr); } .conv-stat:nth-child(2) { border-right: none; } }

        .conv-section { padding: 88px 0; }
        .conv-section-white { background: #ffffff; }
        .conv-section-navy { background: ${NAVY}; color: ${IVORY}; position: relative; overflow: hidden; }
        .conv-section-navy::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at top right, rgba(232,180,125,0.12), transparent 60%); pointer-events: none; }
        .conv-section-parchment { background: ${PARCHMENT}; }
        .conv-section-cream { background: ${CREAM}; }
        .conv-section-dark { background: linear-gradient(135deg, ${NAVY} 0%, #122a44 100%); color: ${IVORY}; }

        .conv-h2 { font-size: clamp(28px, 3.8vw, 42px); font-weight: 600; margin-bottom: 24px; max-width: 900px; }
        .conv-section-navy .conv-h2, .conv-section-dark .conv-h2 { color: ${IVORY}; position: relative; }
        .conv-lede { font-size: 17px; color: #3d4754; max-width: 820px; margin-bottom: 28px; }
        .conv-section-navy .conv-lede, .conv-section-dark .conv-lede { color: rgba(250,248,244,0.82); position: relative; }
        .conv-body { font-size: 16px; color: #3d4754; max-width: 820px; margin-bottom: 18px; }
        .conv-section-navy .conv-body, .conv-section-dark .conv-body { color: rgba(250,248,244,0.82); position: relative; }

        .tier-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .tier-row { background: #fff; border-left: 4px solid ${COPPER}; padding: 22px 26px; border-radius: 4px; display: grid; grid-template-columns: 180px 1fr; gap: 24px; align-items: start; }
        @media (max-width: 720px) { .tier-row { grid-template-columns: 1fr; gap: 8px; } }
        .tier-range { font-family: 'Lora', Georgia, serif; font-size: 24px; font-weight: 700; color: ${NAVY}; }
        .tier-label { font-family: 'Fira Mono', monospace; font-size: 11px; letter-spacing: 1.4px; text-transform: uppercase; color: ${COPPER}; margin-top: 6px; }
        .tier-body { font-size: 15px; color: #3d4754; line-height: 1.7; }

        .calc-callout { margin-top: 32px; background: ${COPPER}; color: #fff; padding: 28px 32px; border-radius: 6px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; }
        .calc-callout-text { font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; }
        .calc-btn { background: #fff; color: ${COPPER}; padding: 12px 22px; border-radius: 6px; font-weight: 600; font-size: 14.5px; text-decoration: none; transition: background .18s; }
        .calc-btn:hover { background: ${IVORY}; }

        .limit-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; margin-top: 8px; }
        @media (max-width: 800px) { .limit-grid { grid-template-columns: 1fr; } }
        .limit-card { background: #fff; border: 1px solid #e6dfd2; padding: 28px 28px 26px; border-radius: 6px; }
        .limit-card.copper { border-top: 4px solid ${COPPER}; }
        .limit-card.navy { border-top: 4px solid ${NAVY}; }
        .limit-label { font-family: 'Fira Mono', monospace; font-size: 11px; letter-spacing: 1.4px; text-transform: uppercase; color: ${COPPER}; margin-bottom: 8px; }
        .limit-t { font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 700; color: ${NAVY}; margin-bottom: 14px; }
        .limit-list { list-style: none; padding: 0; margin: 0; }
        .limit-list li { font-size: 14.5px; color: #3d4754; line-height: 1.65; padding: 8px 0 8px 22px; position: relative; border-top: 1px solid #f1ece1; }
        .limit-list li:first-child { border-top: none; }
        .limit-list li::before { content: '◆'; position: absolute; left: 0; top: 9px; color: ${COPPER}; font-size: 10px; }
        .limit-note { margin-top: 22px; font-size: 14px; color: #5b6473; max-width: 820px; font-style: italic; }

        .uc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 12px; }
        @media (max-width: 900px) { .uc-grid { grid-template-columns: 1fr; } }
        .uc-card { background: #fff; border-left: 3px solid ${COPPER}; padding: 26px 26px; border-radius: 4px; box-shadow: 0 1px 3px rgba(28,38,48,0.05); }
        .uc-t { font-family: 'Lora', Georgia, serif; font-size: 20px; font-weight: 600; color: ${NAVY}; margin-bottom: 10px; }
        .uc-b { font-size: 14.5px; color: #3d4754; line-height: 1.7; }

        .broker-callout { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-top: 28px; max-width: 880px; position: relative; }
        @media (max-width: 720px) { .broker-callout { grid-template-columns: 1fr; } }
        .broker-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(232,180,125,0.22); border-left: 3px solid ${COPPER}; padding: 22px 24px; border-radius: 4px; }
        .broker-t { font-family: 'Lora', Georgia, serif; font-size: 18px; font-weight: 600; color: ${GOLD}; margin-bottom: 10px; }
        .broker-b { font-size: 14.5px; color: rgba(250,248,244,0.82); line-height: 1.65; }

        .faq-list { max-width: 820px; }
        .faq-item { border-bottom: 1px solid #ddd8cf; }
        .faq-item summary { list-style: none; cursor: pointer; padding: 22px 0; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; color: ${NAVY}; display: flex; justify-content: space-between; align-items: center; gap: 18px; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after { content: '+'; color: ${COPPER}; font-size: 26px; font-weight: 400; flex-shrink: 0; transition: transform .18s; }
        .faq-item[open] summary::after { content: '−'; }
        .faq-a { padding: 0 0 22px; font-size: 15.5px; color: #3d4754; line-height: 1.75; max-width: 760px; }

        .conv-cta-final { text-align: center; padding: 96px 0; }
        .conv-cta-final .conv-h2 { margin-left: auto; margin-right: auto; margin-bottom: 22px; text-align: center; }
        .conv-cta-final .conv-sub-final { color: rgba(250,248,244,0.82); font-size: 17px; max-width: 720px; margin: 0 auto 32px; }
        .conv-cta-final .conv-cta-row { justify-content: center; }
      `}</style>

      <div className="conv">
        {/* HERO */}
        <section className="conv-hero">
          <div className="wrap">
            <div className="conv-eyebrow">Conventional Loans · Texas Mortgage Broker</div>
            <h1 className="conv-h1">Better Credit Deserves Better Pricing. Conventional Loans Are Where That Shows Up.</h1>
            <p className="conv-sub">No government insurance. No lifetime mortgage insurance. And when you work with a broker who shops 50+ lenders, the rate competition is real in a way a single retail bank simply cannot match.</p>
            <div className="conv-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get Pre-Approved</a>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Strategy Call</a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="conv-stats">
          <div className="conv-stats-grid">
            {stats.map((s) => (
              <div className="conv-stat" key={s.l}>
                <div className="conv-stat-v">{s.v}</div>
                <div className="conv-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT MAKES CONVENTIONAL DIFFERENT */}
        <section className="conv-section conv-section-white">
          <div className="wrap">
            <h2 className="conv-h2">What Makes Conventional Different</h2>
            <p className="conv-body">Conventional loans are not backed by a government agency — they follow guidelines set by Fannie Mae and Freddie Mac. That distinction matters for two reasons.</p>
            <p className="conv-body">First, there is no upfront mortgage insurance premium like FHA charges (1.75% of the loan amount rolled into the loan). Second, private mortgage insurance on conventional loans is removable once you reach 20% equity — either through paying down the loan or through appreciation. On FHA loans with less than 10% down, mortgage insurance stays for the life of the loan.</p>
            <p className="conv-body">The trade-off is that conventional loans price more precisely on credit score. Every tier change affects your rate through what are called <strong>Loan Level Price Adjustments (LLPAs)</strong> — Fannie Mae and Freddie Mac add or subtract pricing based on your credit score, down payment, property type, and loan purpose. A broker with access to multiple lenders can shop those adjustments across investors and find the best net pricing for your specific profile.</p>
          </div>
        </section>

        {/* CREDIT TIERS */}
        <section className="conv-section conv-section-parchment">
          <div className="wrap">
            <h2 className="conv-h2" style={{ color: NAVY }}>Conventional by Credit Score — What Each Tier Means for Your Rate</h2>
            <div className="tier-grid">
              {tiers.map((t) => (
                <div className="tier-row" key={t.range}>
                  <div>
                    <div className="tier-range">{t.range}</div>
                    <div className="tier-label">{t.label}</div>
                  </div>
                  <div className="tier-body">{t.body}</div>
                </div>
              ))}
            </div>

            <div className="calc-callout">
              <div className="calc-callout-text">Want to see the actual numbers for your credit score and down payment?</div>
              <Link to="/calculators?tab=fha-vs-conventional" className="calc-btn">Run the FHA vs Conventional Calculator →</Link>
            </div>
          </div>
        </section>

        {/* HOMEREADY / HOME POSSIBLE */}
        <section className="conv-section conv-section-navy">
          <div className="wrap" style={{ position: "relative" }}>
            <div className="conv-eyebrow">Low Down Payment Conventional</div>
            <h2 className="conv-h2">HomeReady and Home Possible — 3% Down With Income-Based Pricing</h2>
            <p className="conv-lede">Most buyers assume conventional requires 5% to 20% down. Fannie Mae's HomeReady and Freddie Mac's Home Possible programs allow as little as 3% down for qualifying buyers with income at or below 80% of the area median income.</p>
            <p className="conv-body">These programs offer reduced mortgage insurance rates compared to standard conventional PMI, and the PMI is still removable at 20% equity — a significant advantage over FHA. HomeReady also allows rental income from an accessory dwelling unit or boarder income to help qualify, and allows non-occupant co-borrower income. Home Possible has similar income flexibility and allows sweat equity as part of the down payment in some cases.</p>
            <p className="conv-body">Both require completion of a homebuyer education course. Not every lender prices these programs the same way — a broker can shop the MI rate and the base rate across multiple investors to find the best combination.</p>
          </div>
        </section>

        {/* LOAN LIMITS */}
        <section className="conv-section conv-section-white">
          <div className="wrap">
            <div className="conv-eyebrow" style={{ color: COPPER }}>Texas County Limits</div>
            <h2 className="conv-h2">Conventional Loan Limits — Where Conventional Ends and Jumbo Begins</h2>
            <p className="conv-body">Fannie Mae and Freddie Mac set maximum loan limits each year. Loans below the limit qualify for conventional agency financing. Loans above it require jumbo financing, which follows different guidelines and pricing.</p>
            <p className="conv-body">For 2024, the baseline conforming loan limit for a single-family home is <strong>$766,550</strong> in most Texas counties. High-cost county adjustments are applied by FHFA based on local home prices — in Texas, this currently affects some counties in the Austin metro area where limits may be higher.</p>

            <div className="limit-grid">
              <div className="limit-card copper">
                <div className="limit-label">Within Limits</div>
                <div className="limit-t">Conforming Loan</div>
                <ul className="limit-list">
                  <li>Loan amount at or below the county limit</li>
                  <li>Eligible for Fannie Mae and Freddie Mac guidelines</li>
                  <li>Standard conventional pricing and PMI options</li>
                  <li>Widest lender competition and lowest rates in most cases</li>
                </ul>
              </div>
              <div className="limit-card navy">
                <div className="limit-label" style={{ color: NAVY }}>Above Limits</div>
                <div className="limit-t">Jumbo Loan</div>
                <ul className="limit-list">
                  <li>Loan amount exceeds the county conforming limit</li>
                  <li>Follows individual lender or portfolio guidelines rather than agency guidelines</li>
                  <li>Typically requires stronger credit (720 or above) and larger reserves</li>
                  <li>Rates and down payment requirements vary significantly by lender — broker access to portfolio lenders matters most here</li>
                </ul>
              </div>
            </div>
            <p className="limit-note">Conforming loan limits update annually and vary by county. Contact us for the current limit in your specific Texas county — limits in Austin-area counties may differ from the statewide baseline.</p>
          </div>
        </section>

        {/* USE CASES */}
        <section className="conv-section conv-section-cream">
          <div className="wrap">
            <h2 className="conv-h2" style={{ color: NAVY }}>Conventional Beyond the Primary Residence</h2>
            <p className="conv-body">Conventional loans cover more than just primary home purchases. The same agency framework that handles your first house also structures move-up purchases, second homes, and investment properties — each with its own guidelines.</p>
            <div className="uc-grid">
              {useCases.map((u) => (
                <div className="uc-card" key={u.t}>
                  <div className="uc-t">{u.t}</div>
                  <p className="uc-b">{u.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY BROKER WINS */}
        <section className="conv-section conv-section-navy">
          <div className="wrap" style={{ position: "relative" }}>
            <div className="conv-eyebrow">The Rate Difference Is Real</div>
            <h2 className="conv-h2">Why Broker Pricing Beats Retail on Conventional</h2>
            <p className="conv-lede">Conventional loan pricing is driven by LLPAs — Loan Level Price Adjustments. These are grids published by Fannie Mae and Freddie Mac that assign pricing add-ons or reductions based on your credit score, loan-to-value ratio, property type, loan purpose, and other factors.</p>
            <p className="conv-body">A retail bank takes that grid and applies their own margin on top. An independent broker shops the same loan file across multiple wholesale lenders who compete for the business — and their margins are structurally lower because they are not maintaining branches, retail staff, or advertising budgets.</p>
            <p className="conv-body">The result is that on a $350,000 conventional loan, the rate difference between the best broker pricing and a typical retail bank quote is often <strong style={{ color: GOLD }}>0.125 to 0.375 percent</strong>. Over 30 years, that is a meaningful number.</p>

            <div className="broker-callout">
              <div className="broker-card">
                <div className="broker-t">Retail Bank</div>
                <p className="broker-b">One rate. One set of LLPAs. Their margin added on top. No competition for your file inside the building.</p>
              </div>
              <div className="broker-card">
                <div className="broker-t">Independent Broker</div>
                <p className="broker-b">Same LLPAs. 50+ lenders competing. Wholesale margin. Best net rate for your file wins the loan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="conv-section conv-section-cream">
          <div className="wrap">
            <h2 className="conv-h2" style={{ color: NAVY }}>What Conventional Buyers Ask Us Most</h2>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <details key={f.q} className="faq-item" open={openFaq === i} onToggle={(e) => {
                  if ((e.currentTarget as HTMLDetailsElement).open) setOpenFaq(i);
                  else if (openFaq === i) setOpenFaq(null);
                }}>
                  <summary>{f.q}</summary>
                  <div className="faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="conv-section-dark conv-cta-final">
          <div className="wrap">
            <h2 className="conv-h2">Let's Find the Right Conventional Structure for Your Situation.</h2>
            <p className="conv-sub-final">We'll run conventional and FHA side by side for your specific credit score, down payment, and purchase price — so you see the real numbers before you commit to anything.</p>
            <div className="conv-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get Pre-Approved</a>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Strategy Call</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConventionalLoanTexasPage;
