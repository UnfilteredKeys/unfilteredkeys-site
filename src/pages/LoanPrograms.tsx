import { useEffect, useState } from "react";

const LoanProgramsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  const programs = [
    {
      id: "va",
      badge: "Best for Veterans",
      title: "VA Loan",
      tagline: "The most powerful home loan benefit in existence — and the most underused.",
      featured: true,
      highlights: ["0% down payment", "No PMI — ever", "Competitive rates", "No loan limit with full entitlement"],
      details: [
        { label: "Down Payment", value: "0% for eligible veterans, active duty, and surviving spouses" },
        { label: "Mortgage Insurance", value: "None — ever. This alone saves hundreds per month vs. FHA" },
        { label: "Credit Minimum", value: "No VA-set minimum — most lenders require 580–620+. We discuss your specific options." },
        { label: "Funding Fee", value: "1.25%–3.3% depending on down payment and usage — can be rolled into the loan. Waived entirely with a service-connected disability rating." },
        { label: "Loan Limits", value: "No limit with full entitlement. Partial entitlement may apply if you have an active VA loan." },
        { label: "COE Required", value: "Yes — Certificate of Eligibility. We can pull this directly from the VA system on your behalf." },
        { label: "Who Qualifies", value: "Veterans, active duty service members, National Guard and Reserve members with qualifying service, and eligible surviving spouses." },
        { label: "Texas Specific", value: "VA disability exemption may eliminate property taxes on your Texas primary residence. File after closing with your county appraisal district." },
      ]
    },
    {
      id: "fha",
      badge: "First-Time & Rebuilding Buyers",
      title: "FHA Loan",
      tagline: "Lower barrier to entry, more DTI flexibility, and accessible with limited savings.",
      featured: false,
      highlights: ["3.5% down with 580+ credit", "More DTI flexibility", "Lenient on recent credit events", "Gift funds allowed"],
      details: [
        { label: "Down Payment", value: "3.5% with 580+ credit score. 10% with 500–579 credit score." },
        { label: "Mortgage Insurance", value: "MIP required on all FHA loans. If less than 10% down, MIP stays for the life of the loan — this is a significant long-term cost to factor into your comparison with Conventional." },
        { label: "Credit Minimum", value: "580+ for 3.5% down. 500–579 for 10% down." },
        { label: "DTI", value: "More flexibility than Conventional — typically up to 43–50% with compensating factors." },
        { label: "Loan Limits", value: "FHA loan limits vary by county. Texas limits range from $498,257 in most counties to higher in high-cost areas." },
        { label: "Gift Funds", value: "Allowed — can cover the full down payment with a properly documented gift letter." },
        { label: "Best For", value: "Buyers rebuilding credit, first-time buyers with limited savings, or those who need more DTI flexibility than Conventional allows." },
      ]
    },
    {
      id: "usda",
      badge: "Rural & Suburban Texas",
      title: "USDA Loan",
      tagline: "Zero down for eligible areas — and more of Texas qualifies than most people think.",
      featured: false,
      highlights: ["0% down payment", "Low annual guarantee fee", "Coryell County often qualifies", "Income limits apply"],
      details: [
        { label: "Down Payment", value: "0% for eligible rural and suburban areas." },
        { label: "Mortgage Insurance", value: "Upfront guarantee fee of 1% (can be rolled in) plus annual fee of 0.35% of loan balance — significantly lower than FHA MIP." },
        { label: "Credit Minimum", value: "640+ for most lenders." },
        { label: "Income Limits", value: "Typically 115% of the area median income. Limits vary by household size and county." },
        { label: "Eligible Areas", value: "Copperas Cove, Gatesville, Kempner, and much of Coryell County often qualify. Check the USDA eligibility map before assuming you don't — many suburban areas are eligible." },
        { label: "Property Requirements", value: "Must be a primary residence in an eligible area. Certain property types excluded." },
        { label: "Best For", value: "Buyers in rural or suburban Texas who meet income limits and want 0% down without VA eligibility." },
      ]
    },
    {
      id: "conventional",
      badge: "Strong Credit & Long-Term Savings",
      title: "Conventional Loan",
      tagline: "Best long-term cost for buyers with solid credit. PMI is removable — MIP is not.",
      featured: false,
      highlights: ["As low as 3% down", "PMI removable at 20% equity", "Best pricing at 740+", "More property flexibility"],
      details: [
        { label: "Down Payment", value: "As low as 3% with HomeReady or Home Possible programs (income limits apply). Standard minimum is 5%." },
        { label: "Mortgage Insurance", value: "PMI required under 20% down — but removable when you reach 20% equity, automatically cancelled at 22%. This is the key advantage over FHA MIP." },
        { label: "Credit Minimum", value: "620+ minimum. Best pricing tiers at 740+." },
        { label: "DTI", value: "Typically up to 45% with strong compensating factors." },
        { label: "Loan Limits", value: "Conforming loan limit is $766,550 for most Texas counties in 2024. Above this is Jumbo territory." },
        { label: "HomeReady & Home Possible", value: "3% down programs from Fannie Mae and Freddie Mac with income limits — designed for first-time and low-to-moderate income buyers." },
        { label: "Best For", value: "Buyers with 620+ credit who plan to stay in the home long enough to build equity and remove PMI, or buyers putting 20%+ down who want to avoid mortgage insurance entirely." },
      ]
    },
    {
      id: "nonqm",
      badge: "Non-Traditional Income",
      title: "Non-QM Loans",
      tagline: "Standard guidelines measure W-2 income. These programs measure your actual financial picture.",
      featured: false,
      highlights: ["Bank statement qualification", "P&L-based approval", "Asset-based lending", "ITIN accepted"],
      details: [
        { label: "Bank Statement Loans", value: "12–24 months of personal or business bank statements used to calculate income instead of tax returns. Ideal for self-employed borrowers whose write-offs reduce their qualifying income on paper." },
        { label: "P&L Qualification", value: "Profit and Loss statement prepared by a CPA used to establish income. Useful when bank statements show irregular deposits." },
        { label: "Asset-Based Qualification", value: "Significant liquid assets used to qualify in lieu of traditional income documentation. Typically requires substantial reserves." },
        { label: "ITIN Loans", value: "Available for borrowers without a Social Security number using an Individual Taxpayer Identification Number. Expanding homeownership access for non-citizen residents." },
        { label: "Credit", value: "Varies by product — some programs go down to 580+. Terms reflect the additional flexibility." },
        { label: "Best For", value: "Self-employed borrowers, business owners, freelancers, and investors whose tax returns don't reflect their true earning capacity, and non-citizen residents with ITIN." },
      ]
    },
    {
      id: "physician",
      badge: "High-Income Professionals",
      title: "Physician & Professional Loans",
      tagline: "Built for professionals whose future income far exceeds what their tax returns show today.",
      featured: false,
      highlights: ["Low or no down payment", "No PMI", "Student debt flexibility", "Future income considered"],
      details: [
        { label: "Eligible Professionals", value: "Medical Doctors (MD), Doctors of Osteopathic Medicine (DO), Residents and Fellows, Dentists & Dental Surgeons (DDS/DMD), Veterinarians (DVM), Ophthalmologists, Podiatrists (DPM), Optometrists (OD), Pharmacists (PharmD)" },
        { label: "Down Payment", value: "As low as 0–5% depending on loan amount and lender program. No PMI regardless of down payment." },
        { label: "Student Debt Treatment", value: "Programs typically exclude or reduce student loan payments from DTI calculations — recognizing the reality that high student debt and high earning potential often go together." },
        { label: "Future Income", value: "Employment contracts and offer letters accepted as qualifying income — designed for residents and fellows whose current income doesn't reflect their earning trajectory." },
        { label: "Loan Amounts", value: "Higher loan limits than conventional — designed for the price points where many physicians and specialists buy." },
        { label: "Best For", value: "Physicians, dentists, and other eligible professionals who are early in their career, carrying student debt, or have limited savings despite high earning potential." },
      ]
    },
    {
      id: "dscr",
      badge: "Real Estate Investors",
      title: "DSCR & Investor Loans",
      tagline: "The property qualifies based on its rental income — not your personal tax return.",
      featured: false,
      highlights: ["No personal income verification", "Rental income drives qualification", "Scale your portfolio", "LLC vesting available"],
      details: [
        { label: "How It Works", value: "DSCR (Debt Service Coverage Ratio) loans qualify based on the property's rental income relative to the mortgage payment. If the rent covers the debt, the property qualifies — regardless of your personal income or tax return." },
        { label: "DSCR Calculation", value: "Monthly rental income ÷ Monthly PITIA (principal, interest, taxes, insurance, association dues). A ratio of 1.0 means rent covers the payment. Many programs require 1.0–1.25+." },
        { label: "Documentation", value: "No personal income tax returns required. Rental income verified via lease agreement or market rent appraisal." },
        { label: "Loan Structure", value: "Available for single-family, 2–4 unit, and some small multifamily. Short-term rental income (Airbnb, VRBO) eligible on some programs." },
        { label: "LLC Vesting", value: "Many DSCR programs allow the property to be titled in an LLC — important for investors managing liability across a portfolio." },
        { label: "Best For", value: "Real estate investors building a rental portfolio who have optimized their tax returns, self-employed investors, and anyone whose personal income documentation would be a ceiling on growth." },
      ]
    },
    {
      id: "dpa",
      badge: "Down Payment Help",
      title: "Down Payment Assistance",
      tagline: "Real money — grants, forgivable loans, and deferred programs — for Texas buyers who qualify.",
      featured: false,
      highlights: ["Up to $40,000+ available", "Grants & forgivable loans", "Stacks with VA, FHA, USDA", "Not every lender participates"],
      details: [
        { label: "TSAHC — Homes for Texas Heroes", value: "Designed for teachers, law enforcement, firefighters, EMS, veterans, and corrections officers. Provides 3–5% of the loan amount as a grant or deferred second lien toward down payment and closing costs.", link: "https://www.tsahc.org" },
        { label: "TSAHC — Home Sweet Texas", value: "For buyers who don't qualify under the Heroes program. Same structure — 3–5% assistance, income limits apply.", link: "https://www.tsahc.org" },
        { label: "TDHCA — My First Texas Home", value: "30-year fixed-rate mortgage with down payment and closing cost assistance up to 5% of the loan amount. Income and purchase price limits apply.", link: "https://www.tdhca.state.tx.us" },
        { label: "SETH — Southeast Texas Housing", value: "Serves a wide range of Texas counties. Provides grants for down payment and closing costs with no repayment required on some programs.", link: "https://www.sethfc.com" },
        { label: "Investor DPA Programs", value: "We also work with private investors who offer their own down payment assistance programs — sometimes with different eligibility criteria than government programs. Ask us what's available for your specific situation and county." },
        { label: "Critical Note", value: "Eligibility doesn't guarantee access. Not every lender is enrolled in every program. If your lender isn't participating, those programs don't exist for your transaction — even if you qualify on paper." },
      ]
    },
    {
      id: "construction",
      badge: "Build or Renovate",
      title: "Construction & Renovation Loans",
      tagline: "Finance the build or the renovation — one loan, one close, one rate.",
      featured: false,
      highlights: ["One-time close available", "VA Renovation up to $100K", "FHA 203(k)", "Lock your rate early"],
      details: [
        { label: "One-Time Close Construction", value: "Combines the construction loan and permanent mortgage into a single transaction with one closing and one set of closing costs. You lock your rate upfront — no second close, no re-qualifying after construction completes. Available with VA, FHA, USDA, and Conventional financing." },
        { label: "VA Renovation Loan", value: "Purchase or refinance a home and roll eligible renovation costs into a single VA loan — up to $100,000 in repairs. Think a new roof, full HVAC replacement, or mold remediation on a home that needs work before it's livable. No ARMs. Appraisal based on After Improved Value." },
        { label: "Conventional Renovation", value: "Fannie Mae HomeStyle and Freddie Mac CHOICERenovation allow buyers to finance the purchase and renovation of a home with a single conventional loan. PMI is removable at 20% equity. Renovation costs can be up to 75% of the after-improved appraised value. Covers luxury improvements FHA 203(k) does not — including pools, landscaping, and outdoor living spaces." },
        { label: "FHA 203(k) — Standard", value: "Finances the purchase and renovation of a home in a single loan. Minimum $5,000 in repairs. Structural repairs, room additions, and major systems covered. Requires a HUD-approved consultant." },
        { label: "FHA 203(k) — Limited (Streamline)", value: "For smaller renovation projects up to $35,000. Faster process than Standard 203(k). No structural changes. Cosmetic and non-structural repairs only." },
        { label: "203(k) + DPA", value: "Down payment assistance can be layered on top of a 203(k) in some cases — giving buyers access to renovation financing with reduced out-of-pocket costs. Not every lender can structure this combination." },
      ]
    },
    {
      id: "jumbo",
      badge: "High-Value Properties",
      title: "Jumbo Loans",
      tagline: "Above conforming limits — for buyers whose purchase price exceeds standard program caps.",
      featured: false,
      highlights: ["Above $766,550 in most TX counties", "Strong credit required", "Higher reserves typically needed", "Competitive rates available"],
      details: [
        { label: "What Is Jumbo", value: "A jumbo loan exceeds the conforming loan limit set by FHFA — $766,550 for most Texas counties in 2024. These loans are not eligible for purchase by Fannie Mae or Freddie Mac and are held by individual lenders." },
        { label: "Down Payment", value: "Typically 10–20% minimum depending on loan amount and lender. Some programs allow lower with strong credit and reserves." },
        { label: "Credit", value: "720+ typically required. Best terms at 740+." },
        { label: "Reserves", value: "Higher reserve requirements than conforming loans — often 6–12 months of PITI. Demonstrates ability to sustain the payment through income interruption." },
        { label: "Income Documentation", value: "Full documentation typically required. Self-employed borrowers may need 2 years of tax returns plus CPA letter." },
        { label: "Best For", value: "Buyers in higher price-point Texas markets — DFW, Houston, Austin metro, and select Central Texas areas — purchasing above conforming loan limits." },
      ]
    },
  ];

  return (
    <>
      <style>{`
        .lp-page {
          font-family: 'Outfit', sans-serif;
          background: #faf8f4;
          color: #1c2630;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        .lp-page *, .lp-page *::before, .lp-page *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }

        /* HERO */
        .lp-hero {
          background: #1a2535;
          position: relative;
          overflow: hidden;
          padding: 80px 24px 88px;
        }
        .lp-hero::before {
          content: '';
          position: absolute;
          top: -120px; right: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(181,98,30,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .lp-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(26,58,92,0.5) 0%, transparent 70%);
          pointer-events: none;
        }
        .lp-hero-inner { max-width: 960px; margin: 0 auto; position: relative; z-index: 1; }
        .lp-tag {
          font-family: 'Fira Mono', monospace;
          font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
          color: #e8b47d; margin-bottom: 28px;
          display: flex; align-items: center; gap: 12px;
        }
        .lp-tag::before { content: ''; width: 32px; height: 1px; background: #e8b47d; }
        .lp-hero h1 {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(36px, 5vw, 54px); font-weight: 700;
          line-height: 1.05; color: #f0ede6; letter-spacing: -0.5px; margin-bottom: 10px;
        }
        .lp-hero h1 em { font-style: italic; color: #e8b47d; display: block; }
        .lp-hero-sub {
          font-size: 18px; color: rgba(240,237,230,0.65);
          margin-bottom: 48px; max-width: 580px; line-height: 1.65;
        }
        .lp-hero-note {
          background: rgba(181,98,30,0.15);
          border: 1px solid rgba(181,98,30,0.3);
          border-radius: 10px; padding: 20px 24px;
          font-size: 14px; color: rgba(240,237,230,0.8);
          max-width: 580px; line-height: 1.65;
        }
        .lp-hero-note strong { color: #e8b47d; }

        /* RULE */
        .lp-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, #b5621e, #e8b47d, #1a3a5c, transparent);
          opacity: 0.35;
        }

        /* PROGRAMS GRID */
        .lp-programs { background: #fff; padding: 80px 24px; }
        .lp-programs-inner { max-width: 1040px; margin: 0 auto; }
        .lp-section-tag {
          font-family: 'Fira Mono', monospace;
          font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
          color: #b5621e; margin-bottom: 12px;
          display: flex; align-items: center; gap: 10px;
        }
        .lp-section-tag::before { content: '—'; color: #ddd8cf; }
        .lp-heading {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 38px); font-weight: 700;
          color: #1a2535; line-height: 1.15; margin-bottom: 10px; letter-spacing: -0.3px;
        }
        .lp-subhead {
          font-size: 16px; color: #4a5568;
          max-width: 560px; margin-bottom: 48px; line-height: 1.65;
        }
        .lp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .lp-card {
          background: #faf8f4;
          border: 1px solid #ddd8cf;
          border-radius: 12px;
          padding: 28px 24px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
        }
        .lp-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(26,37,53,0.1);
          border-color: #b5621e;
        }
        .lp-card.active {
          border-color: #b5621e;
          background: #fff;
          box-shadow: 0 8px 32px rgba(181,98,30,0.12);
        }
        .lp-card.featured-card {
          background: #1a2535;
          border-color: #1a2535;
        }
        .lp-card.featured-card:hover { border-color: #e8b47d; }
        .lp-card.featured-card.active { border-color: #e8b47d; }
        .lp-card-badge {
          font-family: 'Fira Mono', monospace;
          font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase;
          color: #b5621e; margin-bottom: 8px; display: block;
        }
        .lp-card.featured-card .lp-card-badge { color: #e8b47d; }
        .lp-card h3 {
          font-family: 'Lora', Georgia, serif;
          font-size: 19px; font-weight: 700; color: #1a2535;
          margin-bottom: 8px; line-height: 1.2;
        }
        .lp-card.featured-card h3 { color: #f0ede6; }
        .lp-card-tagline {
          font-size: 13.5px; color: #4a5568; line-height: 1.55; margin-bottom: 16px;
        }
        .lp-card.featured-card .lp-card-tagline { color: rgba(240,237,230,0.65); }
        .lp-highlights {
          list-style: none; display: flex; flex-wrap: wrap; gap: 6px;
        }
        .lp-highlight {
          font-family: 'Fira Mono', monospace;
          font-size: 10px; letter-spacing: 0.5px;
          background: rgba(181,98,30,0.1);
          color: #b5621e;
          padding: 3px 8px; border-radius: 4px;
        }
        .lp-card.featured-card .lp-highlight {
          background: rgba(232,180,125,0.15);
          color: #e8b47d;
        }
        .lp-card-cta {
          font-family: 'Fira Mono', monospace;
          font-size: 10px; letter-spacing: 1px; text-transform: uppercase;
          color: #b5621e; margin-top: 16px; display: block;
        }
        .lp-card.featured-card .lp-card-cta { color: #e8b47d; }

        /* DETAIL PANEL */
        .lp-detail { background: #f2efe9; padding: 60px 24px; }
        .lp-detail-inner { max-width: 960px; margin: 0 auto; }
        .lp-detail-header { margin-bottom: 36px; }
        .lp-detail-badge {
          font-family: 'Fira Mono', monospace;
          font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase;
          color: #b5621e; margin-bottom: 8px; display: block;
        }
        .lp-detail-header h2 {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(24px, 3vw, 34px); font-weight: 700;
          color: #1a2535; line-height: 1.15; margin-bottom: 8px;
        }
        .lp-detail-header p { font-size: 16px; color: #4a5568; line-height: 1.65; }
        .lp-detail-rows { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .lp-detail-row {
          background: #fff; border: 1px solid #ddd8cf;
          border-radius: 10px; padding: 20px 22px;
        }
        .lp-detail-label {
          font-family: 'Fira Mono', monospace;
          font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase;
          color: #b5621e; margin-bottom: 6px; display: block;
        }
        .lp-detail-value { font-size: 14px; color: #4a5568; line-height: 1.65; }
        .lp-detail-value a { color: #b5621e; text-decoration: none; }
        .lp-detail-value a:hover { text-decoration: underline; }
        .lp-detail-cta {
          margin-top: 32px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center;
        }
        .lp-btn {
          display: inline-block; background: #b5621e; color: #fff;
          font-family: 'Fira Mono', monospace; font-size: 12px;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 16px 32px; border-radius: 6px; text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
          box-shadow: 0 4px 20px rgba(181,98,30,0.3);
        }
        .lp-btn:hover { background: #8f4a14; transform: translateY(-2px); color: #fff; text-decoration: none; }
        .lp-btn-ghost {
          display: inline-block; background: transparent; color: #b5621e;
          font-family: 'Fira Mono', monospace; font-size: 12px;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 14px 28px; border-radius: 6px; text-decoration: none;
          border: 1px solid rgba(181,98,30,0.3);
          transition: all 0.2s ease;
        }
        .lp-btn-ghost:hover { background: rgba(181,98,30,0.06); border-color: #b5621e; color: #8f4a14; text-decoration: none; }

        /* CTA BAND */
        .lp-cta {
          background: linear-gradient(135deg, #1a2535 0%, #1a3a5c 100%);
          padding: 80px 24px; text-align: center; position: relative; overflow: hidden;
        }
        .lp-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, rgba(181,98,30,0.12) 0%, transparent 70%);
        }
        .lp-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .lp-cta h2 {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(28px, 4vw, 42px); font-weight: 700;
          color: #f0ede6; margin-bottom: 16px; line-height: 1.15; letter-spacing: -0.3px;
        }
        .lp-cta h2 em { font-style: italic; color: #e8b47d; }
        .lp-cta p { font-size: 16px; color: rgba(240,237,230,0.65); margin-bottom: 40px; line-height: 1.65; }
        .lp-cta-btn {
          display: inline-block; background: #b5621e; color: #fff;
          font-family: 'Fira Mono', monospace; font-size: 12px;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 18px 40px; border-radius: 6px; text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
          box-shadow: 0 4px 24px rgba(181,98,30,0.35);
        }
        .lp-cta-btn:hover { background: #8f4a14; transform: translateY(-2px); color: #fff; text-decoration: none; }

        /* FOOTER */
        .lp-footer {
          background: #1a2535; padding: 32px 24px; text-align: center;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .lp-footer p {
          font-family: 'Fira Mono', monospace; font-size: 10px; letter-spacing: 0.8px;
          color: rgba(240,237,230,0.35); line-height: 1.9; max-width: 720px; margin: 0 auto;
        }
        .lp-footer a { color: rgba(240,237,230,0.45); text-decoration: none; }
        .lp-footer a:hover { color: #e8b47d; }

        /* RESPONSIVE */
        @media (max-width: 720px) {
          .lp-detail-rows { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .lp-hero, .lp-programs, .lp-detail { padding: 60px 20px; }
          .lp-detail-cta { flex-direction: column; }
        }
      `}</style>

      <div className="lp-page">

        {/* HERO */}
        <section className="lp-hero">
          <div className="lp-hero-inner">
            <div className="lp-tag">Loan Programs · Unfiltered Keys</div>
            <h1>The right loan depends on your file.<em>Not a preference.</em></h1>
            <p className="lp-hero-sub">As a broker, we have access to programs retail banks can't offer. Every eligible scenario gets run side by side so you see the actual cost difference — not a recommendation based on what's easiest to sell.</p>
            <div className="lp-hero-note">
              <strong>Access matters as much as eligibility.</strong> Not every lender participates in every program. If your lender isn't enrolled, those programs don't exist for your transaction — even if you qualify on paper. We are enrolled in and actively originate all programs listed below.
            </div>
          </div>
        </section>

        <div className="lp-rule" />

        {/* PROGRAM CARDS */}
        <section className="lp-programs">
          <div className="lp-programs-inner">
            <div className="lp-section-tag">All Programs</div>
            <h2 className="lp-heading">Select a program to see the full detail.</h2>
            <p className="lp-subhead">Click any card to expand the specifics — requirements, who it's best for, and Texas-specific considerations.</p>
            <div className="lp-grid" id="lp-programs-grid">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className={`lp-card${program.featured ? ' featured-card' : ''}${activeProgram === program.id ? ' active' : ''}`}
                  onClick={() => {
                    const newActive = activeProgram === program.id ? null : program.id;
                    setActiveProgram(newActive);
                    if (newActive) {
                      setTimeout(() => {
                        const el = document.getElementById('lp-detail-panel');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 50);
                    }
                  }}
                >
                  <span className="lp-card-badge">{program.badge}</span>
                  <h3>{program.title}</h3>
                  <p className="lp-card-tagline">{program.tagline}</p>
                  <ul className="lp-highlights">
                    {program.highlights.map((h, i) => (
                      <li key={i} className="lp-highlight">{h}</li>
                    ))}
                  </ul>
                  <span className="lp-card-cta">{activeProgram === program.id ? '— Close details' : '+ View details'}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAIL PANEL */}
        {activeProgram && (() => {
          const program = programs.find(p => p.id === activeProgram);
          if (!program) return null;
          return (
            <>
              <div className="lp-rule" />
              <section className="lp-detail" id="lp-detail-panel">
                <div className="lp-detail-inner">
                  <div className="lp-detail-header">
                    <span className="lp-detail-badge">{program.badge}</span>
                    <h2>{program.title}</h2>
                    <p>{program.tagline}</p>
                  </div>
                  <div className="lp-detail-rows">
                    {program.details.map((detail, i) => (
                      <div key={i} className="lp-detail-row">
                        <span className="lp-detail-label">{detail.label}</span>
                        <p className="lp-detail-value">
                          {detail.value}
                          {(detail as any).link && (
                            <> — <a href={(detail as any).link} target="_blank" rel="noopener noreferrer">Learn more →</a></>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="lp-detail-cta">
                    <a href="https://calendly.com/shalanda-securechoicelending/30min" className="lp-btn" target="_blank" rel="noopener noreferrer">Book a Strategy Call →</a>
                    <a href="/guide" className="lp-btn-ghost">Get the Free Guide</a>
                    <button
                      onClick={() => {
                        setActiveProgram(null);
                        setTimeout(() => {
                          const el = document.getElementById('lp-programs-grid');
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 50);
                      }}
                      style={{background:'none',border:'none',cursor:'pointer',fontFamily:"'Fira Mono',monospace",fontSize:'11px',letterSpacing:'1px',textTransform:'uppercase',color:'#8898aa',textDecoration:'none',padding:'0'}}
                    >
                      ↑ Back to all programs
                    </button>
                  </div>
                </div>
              </section>
            </>
          );
        })()}

        <div className="lp-rule" />

        {/* CTA */}
        <section className="lp-cta">
          <div className="lp-cta-inner">
            <h2>Not sure which program fits?<em>That&apos;s exactly what the call is for.</em></h2>
            <p>Thirty minutes. We look at your credit profile, income structure, down payment position, and goals — and tell you which programs are actually available for your file.</p>
            <a href="https://calendly.com/shalanda-securechoicelending/30min" className="lp-cta-btn" target="_blank" rel="noopener noreferrer">Book a Strategy Call →</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="lp-footer">
          <p>
            This page is for educational purposes only and does not constitute a loan commitment, rate guarantee, or offer to lend. All loans subject to credit approval. Rates and terms subject to change without notice.<br />
            Shalanda Smith · NMLS #554554 · Unfiltered Keys · Powered by Secure Choice Lending · NMLS #1689518<br />
            Licensed by the Texas Department of Savings and Mortgage Lending · Equal Housing Lender<br />
            <a href="https://unfilteredkeys.com">unfilteredkeys.com</a> · <a href="tel:2549359331">254.935.9331</a> · <a href="mailto:shalanda@securechoicelending.com">shalanda@securechoicelending.com</a>
          </p>
        </footer>

      </div>
    </>
  );
};

export default LoanProgramsPage;
