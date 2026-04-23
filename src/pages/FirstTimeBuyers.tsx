import { useEffect, useState } from "react";
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
  { v: "3.5%", l: "Minimum Down — FHA" },
  { v: "580", l: "Minimum Credit — Most Programs" },
  { v: "$0", l: "Down — USDA Eligible Areas" },
  { v: "Up to 5%", l: "Grant — TDHCA & TSAHC" },
];

const myths = [
  {
    t: "You Need 20% Down",
    b: "FHA requires 3.5%. Conventional starts at 3%. And Texas DPA programs can cover your entire down payment and closing costs — grants you never have to pay back. The 20% myth costs buyers years of equity they'll never get back.",
  },
  {
    t: "Your Bank is the Best Place to Start",
    b: "Banks offer one product shelf — theirs. As an independent broker we shop 50+ lenders to find the rate and program that fits your file, not their quota. That difference shows up on your monthly payment for 30 years.",
  },
  {
    t: "You Have to Have Perfect Credit",
    b: "FHA approves down to 580. Some DPA programs start at 600. And a 'no' from one lender reflects their overlays — not a universal verdict on your qualification. We know which lenders work with which credit profiles.",
  },
];

const dpas = [
  {
    t: "TDHCA My First Texas Home",
    b: "620 minimum credit. Up to 5% as a silent second lien. Statewide. Combinable with FHA 203k. Income limits apply.",
  },
  {
    t: "TSAHC Homes for Texas Heroes",
    b: "620 minimum credit. Non-repayable grant for teachers, nurses, first responders, and veterans. Statewide.",
  },
  {
    t: "SETH 5 Star",
    b: "640 minimum credit. No first-time buyer requirement. Layers on FHA 203k renovation.",
  },
  {
    t: "SETH GoldStar",
    b: "620 minimum credit. No first-time buyer requirement. Flexible income limits.",
  },
  {
    t: "Chenoa Fund",
    b: "600 minimum credit. Covers the FHA 3.5% requirement. No income limit on the repayable version.",
  },
  {
    t: "Investor DPA Programs",
    b: "580 minimum credit. Available for buyers who don't qualify for state programs. Ask us about current availability.",
  },
];

const steps = [
  {
    n: "01",
    t: "Strategy Call",
    b: "30 minutes. We review your goals, income, credit range, and down payment options. You leave knowing your real buying power and which programs you qualify for.",
    meta: "30 min · Free · No Obligation",
  },
  {
    n: "02",
    t: "Fully Underwritten Pre-Approval",
    b: "We verify income, credit, and assets and issue a fully underwritten letter — the kind that holds up with sellers.",
    meta: "24–48 hrs",
  },
  {
    n: "03",
    t: "Close and Move In",
    b: "We manage your file from application to funding with no surprises and an average 21-day close.",
    meta: "Average 21 Days to Close",
  },
];

const faqs = [
  {
    q: "What credit score do I need to buy a home in Texas?",
    a: "580 for FHA, 620 for most conventional and DPA programs, and 600 for some DPA options. A lower score doesn't automatically mean no — it means finding the right lender and program. We know which lenders work with which credit profiles and can run scenarios across our network.",
  },
  {
    q: "How much money do I actually need to have saved?",
    a: "Down payment varies by program — 0% USDA, 3.5% FHA, 3% conventional. Closing costs run 2–4% of purchase price in Texas (title insurance, appraisal, prepaid interest, escrow). DPA programs can cover both. We calculate your real cash-to-close number upfront so there are no surprises.",
  },
  {
    q: "What is the difference between pre-qualification and pre-approval?",
    a: "Pre-qualification is self-reported estimates that sellers ignore. Pre-approval is fully verified — credit pulled, documents reviewed, file underwritten. It's the only letter that matters in a competitive Texas market.",
  },
  {
    q: "How do Texas property taxes affect my payment?",
    a: "Texas has no income tax, but property taxes average 1.5–2.5% of assessed value annually. A $300K home can add $500–$625/month to your payment. We include the real number with Texas taxes in every affordability calculation we run.",
  },
  {
    q: "Can I use gift money for my down payment?",
    a: "Yes — on FHA and most conventional programs. It requires a gift letter from the donor, and the donor cannot be the seller or an interested party. Start the paperwork early because underwriting will ask for it.",
  },
  {
    q: "What is the Texas option period?",
    a: "It's a unique Texas contract feature where you pay a small fee (typically $100–$500) for the right to back out for any reason during a set window (typically 5–10 days). It's your inspection and due diligence period — use it.",
  },
];

const FirstTimeBuyersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO {...seoMeta.firstTimeBuyers} />

      <style>{`
        .ftb { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.7; -webkit-font-smoothing: antialiased; }
        .ftb *, .ftb *::before, .ftb *::after { box-sizing: border-box; }
        .ftb h1, .ftb h2, .ftb h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -0.01em; line-height: 1.15; }
        .ftb .wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }

        .ftb-hero { background: ${NAVY}; color: ${IVORY}; padding: 88px 0 96px; }
        .ftb-eyebrow { font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2.4px; text-transform: uppercase; color: ${GOLD}; margin-bottom: 22px; }
        .ftb-h1 { font-size: clamp(34px, 5vw, 56px); font-weight: 600; max-width: 880px; margin-bottom: 22px; }
        .ftb-sub { font-size: 18px; line-height: 1.65; color: rgba(250,248,244,0.82); max-width: 720px; margin-bottom: 36px; }
        .ftb-cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary { background: ${COPPER}; color: #fff; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s; }
        .btn-primary:hover { background: #9d521a; }
        .btn-outline { border: 1.5px solid ${IVORY}; color: ${IVORY}; padding: 13px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; transition: background .18s, color .18s; }
        .btn-outline:hover { background: ${IVORY}; color: ${NAVY}; }

        .ftb-stats { background: ${COPPER}; color: #fff; }
        .ftb-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .ftb-stat { padding: 28px 22px; text-align: center; border-right: 1px solid rgba(255,255,255,0.18); }
        .ftb-stat:last-child { border-right: none; }
        .ftb-stat-v { font-family: 'Lora', Georgia, serif; font-size: 32px; font-weight: 700; line-height: 1; margin-bottom: 6px; }
        .ftb-stat-l { font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase; opacity: 0.92; }
        @media (max-width: 720px) { .ftb-stats-grid { grid-template-columns: repeat(2, 1fr); } .ftb-stat:nth-child(2) { border-right: none; } }

        .ftb-section { padding: 88px 0; }
        .ftb-section-white { background: #ffffff; }
        .ftb-section-navy { background: ${NAVY}; color: ${IVORY}; }
        .ftb-section-parchment { background: ${PARCHMENT}; }
        .ftb-section-cream { background: ${CREAM}; }
        .ftb-section-dark { background: ${NAVY}; color: ${IVORY}; }

        .ftb-h2 { font-size: clamp(28px, 3.8vw, 42px); font-weight: 600; margin-bottom: 48px; max-width: 820px; }
        .ftb-section-navy .ftb-h2, .ftb-section-dark .ftb-h2 { color: ${IVORY}; }

        .myth-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .myth-grid { grid-template-columns: 1fr; } }
        .myth-card { background: ${CREAM}; border-top: 3px solid ${COPPER}; padding: 32px 28px; border-radius: 4px; }
        .myth-t { font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 600; color: ${NAVY}; margin-bottom: 14px; }
        .myth-b { font-size: 15.5px; color: #3d4754; line-height: 1.7; }

        .dpa-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
        @media (max-width: 800px) { .dpa-grid { grid-template-columns: 1fr; } }
        .dpa-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(232,180,125,0.22); border-left: 3px solid ${COPPER}; padding: 26px 26px; border-radius: 4px; }
        .dpa-t { font-family: 'Lora', Georgia, serif; font-size: 20px; font-weight: 600; color: ${GOLD}; margin-bottom: 10px; }
        .dpa-b { font-size: 15px; color: rgba(250,248,244,0.82); line-height: 1.7; }
        .dpa-disclaimer { margin-top: 28px; font-size: 12.5px; color: rgba(250,248,244,0.55); font-style: italic; max-width: 880px; }

        .step-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        @media (max-width: 900px) { .step-grid { grid-template-columns: 1fr; } }
        .step-card { background: #fff; padding: 34px 28px; border-radius: 4px; border-top: 2px solid ${COPPER}; }
        .step-n { font-family: 'Fira Mono', monospace; font-size: 13px; letter-spacing: 2px; color: ${COPPER}; margin-bottom: 14px; }
        .step-t { font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 600; color: ${NAVY}; margin-bottom: 12px; }
        .step-b { font-size: 15px; color: #3d4754; line-height: 1.7; margin-bottom: 18px; }
        .step-meta { font-family: 'Fira Mono', monospace; font-size: 11.5px; letter-spacing: 1.2px; text-transform: uppercase; color: ${COPPER}; }

        .faq-list { max-width: 820px; }
        .faq-item { border-bottom: 1px solid #ddd8cf; }
        .faq-item summary { list-style: none; cursor: pointer; padding: 22px 0; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 600; color: ${NAVY}; display: flex; justify-content: space-between; align-items: center; gap: 18px; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after { content: '+'; color: ${COPPER}; font-size: 26px; font-weight: 400; flex-shrink: 0; transition: transform .18s; }
        .faq-item[open] summary::after { content: '−'; }
        .faq-a { padding: 0 0 22px; font-size: 15.5px; color: #3d4754; line-height: 1.75; max-width: 760px; }

        .ftb-cta-final { text-align: center; padding: 96px 0; }
        .ftb-cta-final .ftb-h2 { margin-left: auto; margin-right: auto; margin-bottom: 32px; text-align: center; }
        .ftb-cta-final .ftb-cta-row { justify-content: center; }
      `}</style>

      <div className="ftb">
        {/* HERO */}
        <section className="ftb-hero">
          <div className="wrap">
            <div className="ftb-eyebrow">First-Time Buyers · Texas Mortgage</div>
            <h1 className="ftb-h1">Buying Your First Home in Texas Doesn't Have to Feel This Complicated.</h1>
            <p className="ftb-sub">Most first-time buyers overpay, under-prepare, or miss programs that could have saved them thousands. Here's how we make sure that doesn't happen to you.</p>
            <div className="ftb-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get Pre-Approved</a>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Strategy Call</a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="ftb-stats">
          <div className="ftb-stats-grid">
            {stats.map((s) => (
              <div className="ftb-stat" key={s.l}>
                <div className="ftb-stat-v">{s.v}</div>
                <div className="ftb-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MYTHS */}
        <section className="ftb-section ftb-section-white">
          <div className="wrap">
            <h2 className="ftb-h2">The Biggest Myths Costing First-Time Buyers in Texas</h2>
            <div className="myth-grid">
              {myths.map((m) => (
                <div className="myth-card" key={m.t}>
                  <div className="myth-t">{m.t}</div>
                  <p className="myth-b">{m.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DPA */}
        <section className="ftb-section ftb-section-navy">
          <div className="wrap">
            <h2 className="ftb-h2">Texas Down Payment Assistance — Programs Most Buyers Never Hear About</h2>
            <div className="dpa-grid">
              {dpas.map((d) => (
                <div className="dpa-card" key={d.t}>
                  <div className="dpa-t">{d.t}</div>
                  <p className="dpa-b">{d.b}</p>
                </div>
              ))}
            </div>
            <p className="dpa-disclaimer">DPA program availability, income limits, and credit requirements change frequently. All figures are for general educational purposes. Contact us for current eligibility.</p>
          </div>
        </section>

        {/* STEPS */}
        <section className="ftb-section ftb-section-parchment">
          <div className="wrap">
            <h2 className="ftb-h2" style={{ color: NAVY }}>How the Process Works — Step by Step</h2>
            <div className="step-grid">
              {steps.map((s) => (
                <div className="step-card" key={s.n}>
                  <div className="step-n">STEP {s.n}</div>
                  <div className="step-t">{s.t}</div>
                  <p className="step-b">{s.b}</p>
                  <div className="step-meta">{s.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="ftb-section ftb-section-cream">
          <div className="wrap">
            <h2 className="ftb-h2" style={{ color: NAVY }}>What First-Time Buyers Ask Us Most</h2>
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
        <section className="ftb-section-dark ftb-cta-final">
          <div className="wrap">
            <h2 className="ftb-h2">Ready to Find Out What You Actually Qualify For?</h2>
            <div className="ftb-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get Pre-Approved</a>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Strategy Call</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FirstTimeBuyersPage;
