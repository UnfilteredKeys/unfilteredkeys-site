import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const NAVY    = "#1a3a5c";
const COPPER  = "#b5621e";
const GOLD    = "#e8b47d";
const IVORY   = "#faf8f4";
const PARCHMENT = "#fdf9f3";
const CREAM   = "#f6f1e7";
const SOFT    = "#f2efe9";
const INK     = "#1c2630";
const MUTED   = "#4a5568";
const APPLY_URL = "https://scl.my1003app.com/554554/register";
const CALL_URL  = "https://calendly.com/shalanda-securechoicelending/30min";

/* ── DATA ────────────────────────────────────────────────────────────────── */

const stats = [
  { v: "No Income Docs", l: "DSCR Loans" },
  { v: "50+",            l: "Lender Network" },
  { v: "10",             l: "Financed Properties — Conventional Max" },
  { v: "12–24 mo",       l: "Deposits — Bank Statement Loans" },
];

const portfolioSteps = [
  {
    step: "01",
    title: "Property 1 — House Hack or Primary Conversion",
    badge: "FHA · VA · Conventional",
    body: "The fastest path to your first rental is buying a primary residence and converting it — or buying a multi-unit property and living in one unit while renting the others. FHA allows 3.5% down on a 2–4 unit property if you live in one unit. VA allows zero down on a multi-unit if you occupy one. Conventional requires 5% down on a primary 2–4 unit. After 12 months of occupancy, most loan programs allow you to convert the property to a full rental and move. This is how most portfolios start — buying smart the first time.",
  },
  {
    step: "02",
    title: "Property 2 — Conventional Investment Loan",
    badge: "15–25% Down · 740+ Pricing",
    body: "Once you have a primary residence, your next purchase can be a standalone investment property using conventional financing. 15% down for a single-family rental, 25% for a 2–4 unit investment property. Fannie Mae and Freddie Mac allow up to 10 financed properties total — but reserve requirements increase as you add properties. Best pricing requires 740+ credit and 6+ months of reserves per financed property. This path works well for W-2 earners whose tax returns show their actual income — the moment your Schedule E starts showing rental losses from depreciation, conventional qualification gets harder.",
  },
  {
    step: "03",
    title: "Property 3 and Beyond — DSCR",
    badge: "No Income Docs · No Limit on Properties",
    body: "This is where most investors who built their portfolio conventionally hit a wall — their tax returns show too many write-offs, their debt-to-income is too high, or they've hit the 10-property limit. The DSCR loan is the solution. It qualifies based on the rental income the subject property generates, not your personal income. No tax returns. No employment verification. No DTI calculation. If the rent covers the payment, the loan qualifies. This is how investors who own 15 or 30 properties kept buying after conventional financing stopped working for them.",
  },
  {
    step: "04",
    title: "Scaling — Cash-Out to Fund the Next Deal",
    badge: "DSCR Cash-Out · Up to 75% LTV",
    body: "Once you have equity in your rental portfolio, you don't need to save a fresh down payment for every new acquisition. DSCR cash-out refinances let you pull equity from existing rentals — up to 75% LTV in most programs — without using personal income to qualify. The extracted equity funds the down payment on the next property. The portfolio compounds itself. This is the mechanism most mid-size investors use to scale from 3 properties to 10 or from 10 to 25 without injecting fresh capital from their paycheck.",
  },
  {
    step: "05",
    title: "Entity Structure — LLC Considerations",
    badge: "DSCR · Portfolio Loans",
    body: "Most DSCR lenders allow — and some prefer — loans made to an LLC. Conventional Fannie Mae and Freddie Mac loans generally do not allow entity ownership. Before you form an LLC and try to buy under it, understand: lenders require personal guarantees regardless, the LLC typically needs to be established before closing, and rates may be marginally higher on entity-vested loans. The entity structure decision is a legal and tax question — consult a CPA and attorney before structuring. We'll tell you which lenders allow it and what their specific requirements are.",
  },
];

const dscrScenarios = [
  { v: "1.25+",      label: "Strong File",                   body: "Rent exceeds payment by 25% or more. Best pricing, lowest rates, widest lender options." },
  { v: "1.0–1.24",   label: "Solid File",                    body: "Rent covers the payment. Qualifies with most DSCR lenders at standard pricing." },
  { v: "Below 1.0",  label: "Compensating Factors Required", body: "Rent doesn't fully cover the payment. Some lenders approve with strong credit, reserves, or lower LTV." },
];

const dscrFeatures = [
  "No personal income documents required",
  "No employment verification",
  "No tax returns or Schedule E",
  "Qualifies on subject property rent — actual lease or appraiser market rent (Form 1007)",
  "Available for short-term rentals (Airbnb/VRBO) with documented platform income",
  "Loan amounts from $100K to $3M+",
  "Available in LLC and entity ownership",
  "Credit minimum typically 620–640 depending on lender",
  "Reserves of 6–12 months PITIA typically required",
];

type Program = {
  title: string;
  badge: string;
  badgeColor: string;
  body: string;
  link: { to: string; text: string } | null;
};

const programs: Program[] = [
  {
    title: "FHA House Hack (2–4 Units)",
    badge: "Entry Strategy",
    badgeColor: "#2a7a7a",
    body: "3.5% down on a 2–4 unit property when you occupy one unit. The rental income from the other units offsets the mortgage payment. Best entry strategy for buyers who want to start a portfolio without the 15–25% down payment an investment loan requires. After 12 months of occupancy, most programs allow you to convert the property to a full rental and move.",
    link: null,
  },
  {
    title: "VA House Hack (Multi-Unit)",
    badge: "Veterans — Zero Down",
    badgeColor: COPPER,
    body: "VA allows zero down on 2–4 unit properties if you occupy one unit. The most powerful entry strategy available to eligible veterans — zero down payment, no PMI, and the rental income from other units can reduce your effective monthly cost. After qualifying occupancy, convert to full rental while purchasing a new primary with VA again.",
    link: { to: "/va-loan-texas", text: "VA Loan Details →" },
  },
  {
    title: "Conventional Investment (1–10 Properties)",
    badge: "15–25% Down",
    badgeColor: NAVY,
    body: "Standard Fannie Mae and Freddie Mac investment loan. 15% down on single-family, 25% on 2–4 unit investment properties. Up to 10 total financed properties. Best pricing at 740+ credit with 6+ months reserves. Works well for W-2 earners whose tax returns show actual income.",
    link: null,
  },
  {
    title: "DSCR Loan",
    badge: "No Income Docs",
    badgeColor: "#534AB7",
    body: "Qualifies on rental income, not personal income. No tax returns. No employment verification. No DTI. If the rent covers the payment at a DSCR of 1.0 or above, the loan qualifies. Available in LLCs. No limit on number of investment properties. The foundational tool for scaling beyond 10 properties or when conventional qualification stops working.",
    link: null,
  },
  {
    title: "Bank Statement Loan",
    badge: "Self-Employed Investors",
    badgeColor: "#185FA5",
    body: "12 or 24 months of business or personal bank deposits used to calculate qualifying income. No tax returns required. Strong option when depreciation and write-offs reduce your reported Schedule E income significantly below what you actually earn. Allows you to keep qualifying without abandoning your tax strategy.",
    link: null,
  },
  {
    title: "Asset Depletion",
    badge: "High Net Worth",
    badgeColor: "#3B6D11",
    body: "Qualify based on liquid assets — retirement accounts, brokerage accounts, savings — divided over a set term to create a qualifying income stream. No employment or income documentation required. Designed for investors who have substantial assets but limited reportable income.",
    link: null,
  },
  {
    title: "Fix and Flip Bridge",
    badge: "Short-Term Rehab",
    badgeColor: "#8B4513",
    body: "Short-term financing for purchase and renovation of investment properties. Interest-only payments during the rehab period. Used to acquire properties that don't yet qualify for long-term financing due to condition. Ask us about current bridge loan terms and lender options.",
    link: null,
  },
  {
    title: "PCS to Portfolio",
    badge: "Military Investors",
    badgeColor: COPPER,
    body: "Active duty and veteran strategy: use VA to buy a primary, get PCS orders, rent the home, and buy a new primary with VA at the next duty station. Repeat every 2–3 years. Each house becomes a rental. Zero down on every purchase. The most powerful portfolio-building strategy available to military families.",
    link: { to: "/pcs-to-portfolio", text: "PCS to Portfolio →" },
  },
];

const texasMarkets = [
  {
    market: "Fort Hood / Killeen Corridor",
    icon: "🎖️",
    why: "Permanent, government-funded BAH demand. Soldiers need housing every PCS cycle regardless of the broader market. Consistent vacancy rates below 5% for well-priced rentals. Bell County property values have appreciated modestly but steadily without the boom-bust cycle of tech-heavy markets.",
    dscrNote: "BAH-level rents typically support DSCR 1.0 to 1.15 at current purchase prices.",
  },
  {
    market: "San Antonio (JBSA Corridor)",
    icon: "🏙️",
    why: "80,000+ active duty personnel, stable healthcare employment from BAMC and South Texas Medical Center, and a diversified economy that didn't crash with the post-2022 Austin correction. San Antonio's median price around $300K means positive cash flow is achievable where it isn't in Austin proper.",
    dscrNote: "Sub-$300K acquisition costs can generate DSCR 1.2+ in the right corridors near JBSA.",
  },
  {
    market: "Round Rock / Williamson County",
    icon: "💻",
    why: "Dell, Apple, Amazon, and BSW drive consistent relocation demand. A-rated school districts produce strong tenant profiles. 15 miles from downtown Austin with $150K less per home than comparable Austin addresses creates better rent-to-price ratios than most of Travis County.",
    dscrNote: "Single-family rentals in the $350K–$420K range can approach DSCR 1.0 depending on purchase price and rate.",
  },
  {
    market: "Temple / Bell County",
    icon: "🏥",
    why: "BSW Temple hires 200+ annually and recently expanded. Healthcare employment is structural — it doesn't leave during rate cycles. Temple's median price around $274K is one of the most accessible in Central Texas for investors targeting positive cash flow.",
    dscrNote: "Sub-$300K acquisition with BSW-area rents can produce DSCR 1.15 to 1.30 in the current market.",
  },
  {
    market: "Kyle & Buda (Hays County)",
    icon: "📈",
    why: "Most affordable city in the Austin metro with real volume. Tesla Gigafactory employment north of Kyle creates demand independent of the broader Austin tech cycle. New construction with builder warranties at $310K–$370K median price creates predictable maintenance costs for new investors.",
    dscrNote: "Entry-level Hays County rentals can work at DSCR near 1.0 depending on specific purchase price and lease terms.",
  },
];

const faqs = [
  {
    q: "I don't own any rental properties yet. Where do I start?",
    a: "The fastest path to your first rental is a house hack — buying a 2 to 4 unit property as your primary residence and renting the other units. FHA allows 3.5% down on a 2–4 unit primary. VA allows zero down on a multi-unit primary for eligible veterans. After 12 months of occupancy, most loan programs allow you to convert the property to a full rental and purchase a new primary. This is how most portfolios start. You build equity, gain landlord experience, and let the tenant cover part of your mortgage — all without the 15–25% down payment a standalone investment loan requires.",
  },
  {
    q: "How many properties can I finance before conventional stops working?",
    a: "Fannie Mae and Freddie Mac allow up to 10 financed properties with your name on the mortgage. Reserve requirements increase as you add properties — typically 2% of the unpaid balance of all financed properties at 5–6 properties, and higher beyond that. Most investors find conventional qualification gets harder before they hit the 10-property limit, because rental property depreciation on Schedule E reduces the income their tax returns show. When that happens, DSCR loans take over — they have no limit on investment property count and don't use personal income to qualify.",
  },
  {
    q: "What is a DSCR loan and why does it matter?",
    a: "DSCR stands for Debt Service Coverage Ratio. It measures whether a property's rental income covers its monthly payment. The formula: monthly gross rent divided by monthly PITIA (principal, interest, taxes, insurance, and association dues). A DSCR of 1.0 means rent exactly covers the payment. 1.25 means rent is 25% above the payment. DSCR loans require no personal income documents, no tax returns, no employment verification. The loan qualifies on what the property produces, not what you show on your W-2 or Schedule E. This is the mechanism that lets investors with complex tax returns, multiple rental losses, or no employment continue to acquire properties.",
  },
  {
    q: "Can I use projected rent to qualify for a DSCR loan?",
    a: "Yes — if the property is vacant or being purchased as a new rental, most DSCR lenders accept the market rent estimate from a Form 1007 appraisal (a Single-Family Comparable Rent Schedule) rather than requiring an existing lease. The appraiser evaluates comparable rentals in the area and provides a market rent estimate. That number is used to calculate DSCR in place of an actual lease.",
  },
  {
    q: "Can I buy a short-term rental (Airbnb/VRBO) with a DSCR loan?",
    a: "Yes — some DSCR lenders accept short-term rental income using 12 to 24 months of documented platform income from Airbnb or VRBO, or a short-term rental-adjusted market rent estimate. Not all lenders allow this and some limit it to specific markets. Ask us before you go under contract on an STR.",
  },
  {
    q: "How do I extract equity from an existing rental to fund the next deal?",
    a: "DSCR cash-out refinances allow you to pull equity from existing rentals up to 75% LTV in most programs without using personal income to qualify. The cash goes to you at closing and can be used for anything — including the down payment on the next acquisition. This is the compounding mechanism: the portfolio funds itself rather than requiring fresh capital from your paycheck for every deal.",
  },
  {
    q: "Should I buy in an LLC?",
    a: "That is a legal and tax question we can't answer for you — consult a licensed attorney and CPA who understands Texas real estate. What we can tell you about the mortgage side: most DSCR lenders allow LLC ownership and require a personal guarantee. Conventional Fannie Mae and Freddie Mac loans generally do not allow LLC ownership. The LLC typically needs to be established before closing. Rates on entity-vested loans may be marginally higher. Tell us your situation and we'll identify which lenders and programs allow it.",
  },
  {
    q: "What reserves do I need for an investment property loan?",
    a: "Conventional investment loans typically require 6 months PITIA in reserves for the subject property plus 2% of the unpaid balance of all other financed properties beyond the first four. DSCR lenders commonly require 6 to 12 months reserves for the subject property. Reserves can be in checking, savings, retirement accounts (at 60–70% of value for most lenders), or brokerage accounts. Strong reserves are one of the most powerful compensating factors when other parts of the file are thin.",
  },
  {
    q: "Does Texas market well for rental investors?",
    a: "Yes — for specific reasons. No state income tax on rental income. Landlord-friendly laws with clear eviction procedures and timelines. BAH-driven demand in military corridors (Fort Hood, JBSA) that is government-funded and PCS-cycle predictable. Healthcare employment anchors in Temple (BSW), San Antonio (BAMC, South Texas Medical), and Round Rock (BSW Round Rock, Ascension Seton Williamson) that generate consistent tenant demand independent of tech cycles. And price points in markets like San Antonio, Temple, and Kyle where positive cash flow is still achievable — which it isn't in most Austin zip codes at current prices.",
  },
];

/* ── COMPONENT ───────────────────────────────────────────────────────────── */
const InvestorsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO {...(seoMeta as any).investors} />
    <Helmet>
      <title>Texas Real Estate Investor Loans | DSCR, Bank Statement and Non-QM</title>
      <meta name="description" content="DSCR, bank statement, and asset-based loans for Texas investors. Build a rental portfolio without W-2 requirements. Free strategy call." />
      <link rel="canonical" href="https://shalandasmith.com/investors" />
    </Helmet>
      <style>{`
        .inv { font-family: 'Outfit', sans-serif; background: ${IVORY}; color: ${INK}; line-height: 1.7; -webkit-font-smoothing: antialiased; }
        .inv *, .inv *::before, .inv *::after { box-sizing: border-box; }
        .inv h1, .inv h2, .inv h3 { font-family: 'Lora', Georgia, serif; letter-spacing: -0.01em; line-height: 1.15; }
        .inv .wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }
        .inv-eyebrow { font-family: 'Fira Mono', monospace; font-size: 12px; letter-spacing: 2.4px; text-transform: uppercase; color: ${GOLD}; margin-bottom: 22px; }
        .inv-h1 { font-size: clamp(32px, 5vw, 54px); font-weight: 600; max-width: 900px; margin-bottom: 22px; color: ${IVORY}; }
        .inv-sub { font-size: 17px; line-height: 1.65; color: rgba(250,248,244,0.82); max-width: 720px; margin-bottom: 36px; }
        .inv-cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary { background: ${COPPER}; color: #fff; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; }
        .btn-primary:hover { opacity: 0.92; }
        .btn-outline { border: 1.5px solid ${IVORY}; color: ${IVORY}; padding: 13px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-block; }
        .btn-outline:hover { background: rgba(250,248,244,0.1); }
        .inv-section { padding: 80px 0; }
        .inv-section-cream { background: ${CREAM}; }
        .inv-section-parch { background: ${PARCHMENT}; }
        .inv-h2 { font-family: 'Lora', Georgia, serif; font-size: clamp(26px, 3.5vw, 40px); font-weight: 600; color: ${INK}; margin-bottom: 20px; max-width: 880px; }
        .inv-tag { font-family: 'Fira Mono', monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: ${COPPER}; margin-bottom: 14px; font-weight: 600; }
        .inv-intro { font-size: 16px; color: ${MUTED}; line-height: 1.75; max-width: 820px; margin-bottom: 40px; }

        .inv-hero { background: linear-gradient(135deg, ${NAVY} 0%, #122a44 100%); color: ${IVORY}; padding: 96px 0 88px; }

        .inv-stats { background: ${COPPER}; color: #fff; }
        .inv-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .inv-stat { padding: 28px 22px; text-align: center; border-right: 1px solid rgba(255,255,255,0.18); }
        .inv-stat:last-child { border-right: none; }
        .inv-stat-v { font-family: 'Lora', Georgia, serif; font-size: 26px; font-weight: 700; line-height: 1.1; margin-bottom: 6px; }
        .inv-stat-l { font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase; opacity: 0.92; }
        @media (max-width: 720px) { .inv-stats-grid { grid-template-columns: repeat(2, 1fr); } .inv-stat:nth-child(2) { border-right: none; } }

        .step-item { display: grid; grid-template-columns: 80px 1fr; gap: 0 32px; padding: 40px 0; border-bottom: 1px solid rgba(26,58,92,0.1); }
        .step-item:last-child { border-bottom: none; }
        .step-num { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 700; color: rgba(181,98,30,0.18); line-height: 1; padding-top: 4px; }
        .step-badge { display: inline-block; font-family: 'Fira Mono', monospace; font-size: 10px; letter-spacing: 1.6px; text-transform: uppercase; color: ${COPPER}; background: rgba(181,98,30,0.10); padding: 3px 10px; border-radius: 3px; margin-bottom: 10px; }
        .step-title { font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 600; color: ${NAVY}; margin-bottom: 12px; }
        .step-body { font-size: 15px; color: ${MUTED}; line-height: 1.75; }
        @media (max-width: 700px) { .step-item { grid-template-columns: 1fr; } .step-num { font-size: 32px; } }

        .inv-section-navy { background: ${NAVY}; color: ${IVORY}; position: relative; overflow: hidden; padding: 80px 0; }
        .inv-section-navy::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 70% 30%, rgba(232,180,125,0.09), transparent 60%); pointer-events: none; }
        .inv-section-navy .wrap { position: relative; }
        .inv-h2-navy { font-family: 'Lora', Georgia, serif; font-size: clamp(26px, 3.5vw, 40px); font-weight: 600; color: ${IVORY}; margin-bottom: 20px; max-width: 880px; }
        .inv-lead { font-size: 16px; max-width: 820px; margin-bottom: 40px; color: rgba(250,248,244,0.78); line-height: 1.75; }
        .dscr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 48px; }
        @media (max-width: 860px) { .dscr-grid { grid-template-columns: 1fr; } }
        .dscr-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(232,180,125,0.2); border-top: 3px solid ${COPPER}; padding: 24px 22px; border-radius: 4px; }
        .dscr-v { font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 700; color: ${GOLD}; margin-bottom: 6px; }
        .dscr-label { font-family: 'Fira Mono', monospace; font-size: 10px; letter-spacing: 1.6px; text-transform: uppercase; color: ${COPPER}; margin-bottom: 12px; }
        .dscr-b { font-size: 14px; color: rgba(250,248,244,0.78); line-height: 1.7; }
        .dscr-features-h { font-family: 'Fira Mono', monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: ${GOLD}; margin-bottom: 16px; }
        .dscr-features-ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px 28px; max-width: 880px; }
        @media (max-width: 680px) { .dscr-features-ul { grid-template-columns: 1fr; } }
        .dscr-features-ul li { font-size: 14px; color: rgba(250,248,244,0.82); padding-left: 20px; position: relative; line-height: 1.6; }
        .dscr-features-ul li::before { content: '✓'; position: absolute; left: 0; color: ${COPPER}; font-weight: 700; }

        .prog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .prog-card { background: #fff; border-top: 3px solid ${COPPER}; padding: 26px 24px; border-radius: 4px; display: flex; flex-direction: column; }
        .prog-badge { display: inline-block; font-family: 'Fira Mono', monospace; font-size: 10px; letter-spacing: 1.4px; text-transform: uppercase; color: #fff; padding: 3px 10px; border-radius: 3px; margin-bottom: 12px; align-self: flex-start; }
        .prog-title { font-family: 'Lora', Georgia, serif; font-size: 20px; font-weight: 600; color: ${NAVY}; margin-bottom: 10px; }
        .prog-body { font-size: 14px; color: ${MUTED}; line-height: 1.7; flex-grow: 1; }
        .prog-link { display: inline-block; margin-top: 14px; font-size: 13px; font-weight: 600; color: ${COPPER}; text-decoration: none; }

        .market-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .market-card { background: ${SOFT}; border-left: 4px solid ${COPPER}; border-radius: 4px; padding: 24px 22px; }
        .market-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
        .market-icon { font-size: 22px; }
        .market-name { font-family: 'Lora', Georgia, serif; font-size: 18px; font-weight: 600; color: ${NAVY}; }
        .market-why { font-size: 14px; color: ${MUTED}; line-height: 1.7; margin-bottom: 12px; }
        .market-dscr { font-family: 'Fira Mono', monospace; font-size: 11px; color: ${COPPER}; letter-spacing: 0.5px; }
        .market-note { margin-top: 28px; background: #fff; border-left: 4px solid ${NAVY}; padding: 20px 22px; border-radius: 4px; font-size: 14px; color: ${MUTED}; line-height: 1.75; }

        .calc-callout { background: ${NAVY}; color: ${IVORY}; padding: 56px 44px; border-radius: 8px; text-align: center; }
        .calc-callout h2 { color: ${IVORY}; margin-bottom: 14px; }
        .calc-callout p { color: rgba(250,248,244,0.82); max-width: 680px; margin: 0 auto 28px; font-size: 15px; line-height: 1.7; }
        .calc-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .calc-link { background: ${COPPER}; color: #fff; padding: 13px 26px; border-radius: 6px; font-weight: 600; font-size: 14px; text-decoration: none; display: inline-block; }

        .faq-item { border-bottom: 1px solid rgba(26,58,92,0.1); }
        .faq-item summary { list-style: none; cursor: pointer; padding: 20px 0; font-family: 'Lora', Georgia, serif; font-size: 18px; font-weight: 600; color: ${NAVY}; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after { content: '+'; color: ${COPPER}; font-size: 24px; font-weight: 400; flex-shrink: 0; }
        .faq-item[open] summary::after { content: '−'; }
        @media (max-width: 860px) { .pcg { grid-template-columns: 1fr !important; } }
        .faq-a { padding: 0 0 20px; font-size: 15px; color: ${MUTED}; line-height: 1.75; max-width: 760px; margin: 0; }

        .inv-cta-final { background: linear-gradient(135deg, ${NAVY} 0%, #122a44 100%); color: ${IVORY}; padding: 96px 0; text-align: center; }
        .inv-cta-final .inv-cta-row { justify-content: center; }
        .avatar-circle { width: 64px; height: 64px; border-radius: 50%; background: ${COPPER}; color: #fff; font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 700; display: flex; align-items: center; justify-content: center; margin: 0 auto 22px; }
        .cta-final-h { font-family: 'Lora', Georgia, serif; font-size: clamp(26px, 3.5vw, 38px); font-weight: 600; max-width: 720px; margin: 0 auto 18px; color: ${IVORY}; }
        .cta-final-p { font-size: 16px; color: rgba(250,248,244,0.82); max-width: 680px; margin: 0 auto 32px; line-height: 1.7; }
        .cta-phone { display: block; margin-top: 20px; font-family: 'Fira Mono', monospace; font-size: 13px; color: rgba(250,248,244,0.7); letter-spacing: 0.5px; }

        .inv-comp { background: ${INK}; color: rgba(250,248,244,0.7); padding: 48px 0; font-size: 12.5px; line-height: 1.7; }
        .inv-comp .wrap { display: flex; flex-direction: column; gap: 20px; }
        .inv-comp-links { display: flex; flex-wrap: wrap; gap: 18px; }
        .inv-comp-links a { color: ${GOLD}; text-decoration: none; font-size: 13px; font-weight: 500; }
        .inv-comp-links a:hover { text-decoration: underline; }
      `}</style>

      <div className="inv">
        {/* HERO */}
        <section className="inv-hero">
          <div className="wrap">
            <div className="inv-eyebrow">Real Estate Investors · Texas Mortgage</div>
            <h1 className="inv-h1">
              Build a Rental Portfolio in Texas. One Property at a Time — Starting From Zero.
            </h1>
            <p className="inv-sub">
              Every rental portfolio starts somewhere. The first property is usually a house hack or a primary conversion. The second uses conventional investment financing. By the third or fourth, most investors hit the income qualification wall — that's where DSCR loans take over. We know every step of the path and the right loan structure for each one.
            </p>
            <div className="inv-cta-row">
              <a className="btn-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Get Pre-Approved</a>
              <a className="btn-outline" href={CALL_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="inv-stats">
          <div className="inv-stats-grid">
            {stats.map((s) => (
              <div key={s.l} className="inv-stat">
                <div className="inv-stat-v">{s.v}</div>
                <div className="inv-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO BUILDER CALLOUT */}
        <section className="inv-section inv-section-parch">
          <div className="wrap">
            <div
              className="pcg"
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1fr",
                gap: 40,
                alignItems: "center",
                background: "#fff",
                border: `1px solid rgba(26,58,92,0.1)`,
                borderRadius: 8,
                padding: 36,
              }}
            >
              {/* Left: the story */}
              <div>
                <div className="inv-eyebrow" style={{ color: COPPER, marginBottom: 14 }}>Portfolio Builder Calculator</div>
                <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 30, fontWeight: 600, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
                  See What Starting at 30 Looks Like at 60
                </h2>
                <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, marginBottom: 14 }}>
                  Most people think about retirement in terms of a 401(k) balance. Rental investors think in terms of equity and monthly cash flow. The difference is profound — a paid-down portfolio of properties generates income that doesn't require you to sell anything.
                </p>
                <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, marginBottom: 22 }}>
                  Use our Portfolio Builder Calculator to model up to 10 properties at any price point. Set your current age, target retirement age, appreciation rate, and mortgage rate. See your projected total equity, remaining debt, and estimated monthly cash flow at retirement — year by year.
                </p>
                <Link to="/calculators?tab=portfolio-builder" className="btn-primary" style={{ background: COPPER, color: "#fff" }}>
                  Open Portfolio Builder Calculator →
                </Link>
              </div>

              {/* Right: scenario preview cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { name: "Scenario A — Start at 30", meta: [{ l: "3 properties", v: "by age 35" }, { l: "4% appreciation", v: "25 years" }], equity: "~$980K", cash: "~$4,200/mo" },
                  { name: "Scenario B — Start at 45", meta: [{ l: "3 properties", v: "by age 50" }, { l: "4% appreciation", v: "10 years" }], equity: "~$410K", cash: "~$2,800/mo" },
                ].map((s) => (
                  <div key={s.name} style={{ background: SOFT, borderLeft: `4px solid ${COPPER}`, borderRadius: 6, padding: "18px 20px" }}>
                    <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 16, fontWeight: 600, color: NAVY, marginBottom: 10 }}>{s.name}</div>
                    <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 12 }}>
                      {s.meta.map((m) => (
                        <div key={m.l}>
                          <div style={{ fontFamily: "'Fira Mono', monospace", fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase", color: MUTED }}>{m.l}</div>
                          <div style={{ fontSize: 13, color: NAVY, fontWeight: 600 }}>{m.v}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, paddingTop: 10, borderTop: "1px solid rgba(26,58,92,0.08)" }}>
                      <div>
                        <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 18, fontWeight: 700, color: COPPER }}>{s.equity}</div>
                        <div style={{ fontSize: 11, color: MUTED }}>projected equity at 60</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 18, fontWeight: 700, color: COPPER }}>{s.cash}</div>
                        <div style={{ fontSize: 11, color: MUTED }}>est. cash flow</div>
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.6, fontStyle: "italic" }}>
                  Scenarios assume $250K avg. purchase price, 20% down, 7% rate, 4% appreciation. Model your actual numbers in the calculator.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="inv-section inv-section-parch">
          <div className="wrap">
            <div className="inv-tag">The Roadmap</div>
            <h2 className="inv-h2">How to Build a Rental Portfolio in Texas — Step by Step</h2>
            <p className="inv-intro">
              Most investors don't have a plan — they just buy whatever property they can qualify for and figure out the next step later. That approach works until it doesn't. The investors who build real portfolios understand the loan structure behind each step before they sign anything. Here's the path most successful Texas landlords follow.
            </p>
            <div>
              {portfolioSteps.map((s) => (
                <div key={s.step} className="step-item">
                  <div className="step-num">{s.step}</div>
                  <div>
                    <div className="step-badge">{s.badge}</div>
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-body">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DSCR */}
        <section className="inv-section-navy">
          <div className="wrap">
            <div className="inv-eyebrow">Deep Dive</div>
            <h2 className="inv-h2-navy">DSCR Loans — How Investors Keep Buying When Conventional Stops Working</h2>
            <p className="inv-lead">
              DSCR stands for Debt Service Coverage Ratio. Instead of qualifying on your personal income, the loan qualifies based on the rental income the subject property generates. The formula: monthly gross rent ÷ monthly PITIA. A DSCR of 1.0 means rent exactly covers the payment. Most programs require 1.0 or above. No tax returns. No W-2. No employment verification. No DTI calculation. If the rent covers the payment, you can buy the property.
            </p>
            <div className="dscr-grid">
              {dscrScenarios.map((d) => (
                <div key={d.v} className="dscr-card">
                  <div className="dscr-v">DSCR {d.v}</div>
                  <div className="dscr-label">{d.label}</div>
                  <p className="dscr-b">{d.body}</p>
                </div>
              ))}
            </div>
            <div className="dscr-features-h">DSCR Loan Features</div>
            <ul className="dscr-features-ul">
              {dscrFeatures.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="inv-section inv-section-cream">
          <div className="wrap">
            <div className="inv-tag">Find Your Fit</div>
            <h2 className="inv-h2">All Investor Loan Programs</h2>
            <p className="inv-intro">
              The right program depends on where you are in the portfolio-building process, how your income is structured, and what you're trying to acquire. Here's every tool available.
            </p>
            <div className="prog-grid">
              {programs.map((p) => (
                <div key={p.title} className="prog-card">
                  <span className="prog-badge" style={{ background: p.badgeColor }}>{p.badge}</span>
                  <h3 className="prog-title">{p.title}</h3>
                  <p className="prog-body">{p.body}</p>
                  {p.link && <Link className="prog-link" to={p.link.to}>{p.link.text}</Link>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEXAS MARKETS */}
        <section className="inv-section inv-section-parch">
          <div className="wrap">
            <div className="inv-tag">Texas Investor Markets</div>
            <h2 className="inv-h2">Why Texas — and Which Markets Work for Investors Right Now</h2>
            <p className="inv-intro">
              Texas has three structural advantages for rental investors: no state income tax on rental income, landlord-friendly eviction laws with clear timelines, and military-driven BAH demand in corridors that doesn't fluctuate with tech hiring cycles. Here's where the numbers work for investors in 2026.
            </p>
            <div className="market-grid">
              {texasMarkets.map((m) => (
                <div key={m.market} className="market-card">
                  <div className="market-header">
                    <span className="market-icon">{m.icon}</span>
                    <span className="market-name">{m.market}</span>
                  </div>
                  <p className="market-why">{m.why}</p>
                  <div className="market-dscr">{m.dscrNote}</div>
                </div>
              ))}
            </div>
            <div className="market-note">
              <strong style={{ color: NAVY }}>Austin proper:</strong>{" "}
              Most Austin zip codes are cash-flow negative at current prices — rent-to-price ratios don't support DSCR 1.0 for investors buying today. Austin is better suited for appreciation investors with a long time horizon and strong cash reserves. We'll tell you honestly when a market doesn't pencil before you go under contract.
            </div>
          </div>
        </section>

        {/* PAYMENT CALCULATOR CALLOUT */}
        <section className="inv-section inv-section-cream">
          <div className="wrap">
            <div className="calc-callout">
              <div className="inv-eyebrow" style={{ color: GOLD }}>Sanity-check your DSCR</div>
              <h2>Run Your Investor Numbers</h2>
              <p>
                The Texas Payment Calculator models full PITI at any purchase price — plug in expected rent to sanity-check your DSCR before you go under contract. The Portfolio Builder shows your projected equity and retirement cash flow across up to 10 properties over any time horizon.
              </p>
              <div className="calc-row">
                <Link className="calc-link" to="/calculators?tab=texas-payment">Texas Payment Calculator →</Link>
                <Link className="calc-link" to="/calculators?tab=portfolio-builder">Portfolio Builder Calculator →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="inv-section inv-section-parch">
          <div className="wrap">
            <div className="inv-tag">Frequently Asked</div>
            <h2 className="inv-h2">What Investors Ask Us Most</h2>
            <div>
              {faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="inv-cta-final">
          <div className="wrap">
            <div className="avatar-circle">SS</div>
            <h2 className="cta-final-h">Ready to Start or Scale Your Rental Portfolio?</h2>
            <p className="cta-final-p">
              Tell us what you own, what you're trying to acquire, and how your income is structured. We'll show you which loan structure gets you there — house hack, conventional, DSCR, bank statement, or something else entirely. No pressure. Real numbers.
            </p>
            <div className="inv-cta-row">
              <a className="btn-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Get Pre-Approved</a>
              <a className="btn-outline" href={CALL_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
            </div>
            <span className="cta-phone">Or call/text: 254-935-9331</span>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className="inv-comp">
          <div className="wrap">
            <p style={{ margin: 0 }}>
              Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed in Texas · Equal Housing Lender · This page is for educational purposes only and does not constitute a loan commitment or guarantee of terms. Loan program availability, qualifying requirements, and DSCR ratios subject to lender guidelines and market conditions. LLC ownership eligibility varies by lender and program. Consult a licensed attorney and CPA before making entity structure decisions. Investment property tax rates vary by county and address.
            </p>
            <div className="inv-comp-links">
              <Link to="/va-loan-texas">VA Loans Texas</Link>
              <Link to="/pcs-to-portfolio">PCS to Portfolio</Link>
              <Link to="/construction-renovation-loans-texas">Construction &amp; Renovation</Link>
              <Link to="/calculators?tab=texas-payment">Payment Calculator</Link>
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer">Schedule a Call</a>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InvestorsPage;
