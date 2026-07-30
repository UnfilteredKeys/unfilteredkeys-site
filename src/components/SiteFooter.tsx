import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Buy a Home", to: "/buy" },
  { label: "Free Guide", to: "/guide" },
  { label: "Calculators", to: "/calculators" },
  { label: "Military Wealth Strategy", to: "/pcs-to-portfolio" },
  { label: "VA Loans in Killeen & Fort Hood", to: "/killeen-va-loan" },
];

const SiteFooter = () => (
  <footer>
    <section className="bg-[#f5efe7] text-[#1a3a5c]">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:py-14">
        <div className="max-w-xl">
          <Link to="/" aria-label="Keys by Shalanda home" className="inline-block">
            <svg viewBox="0 0 248 72" xmlns="http://www.w3.org/2000/svg" height={50} aria-hidden="true">
              <circle cx="18" cy="14" r="12" fill="none" stroke="#b5621e" strokeWidth="2.5" />
              <circle cx="18" cy="14" r="6" fill="none" stroke="#b5621e" strokeWidth="1.5" />
              <rect x="14.5" y="25" width="7" height="28" rx="2" fill="#b5621e" />
              <rect x="21.5" y="36" width="10" height="3.5" rx="1.5" fill="#b5621e" />
              <rect x="21.5" y="43.5" width="8" height="3.5" rx="1.5" fill="#b5621e" />
              <line x1="44" y1="6" x2="44" y2="60" stroke="rgba(26,58,92,0.16)" strokeWidth="1" />
              <text x="56" y="27" fontFamily="Lora,Georgia,serif" fontStyle="italic" fontSize="21" fill="#b5621e">
                Keys by
              </text>
              <text x="56" y="52" fontFamily="Lora,Georgia,serif" fontWeight="700" fontSize="27" fill="#1a3a5c" letterSpacing="-0.3">
                Shalanda
              </text>
            </svg>
          </Link>

          <h2 className="mt-5 max-w-lg font-serif text-3xl leading-tight md:text-[2.15rem]">
            Clear mortgage guidance. A strategy built around you.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#526172]">
            Texas mortgage guidance for homebuyers, veterans, professionals, and investors who want confident decisions without the pressure.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://scl.my1003app.com/554554/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[#1a3a5c] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#122a43] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a3a5c]"
            >
              Apply Securely
            </a>
            <a
              href="https://calendly.com/shalanda-securechoicelending/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[#b5621e] px-6 text-sm font-semibold text-[#9f5118] transition-colors hover:bg-[#f0e2d5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b5621e]"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="md:border-l md:border-[#ded2c4] md:pl-12">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#9f5118]">Explore</p>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 md:grid-cols-1">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm leading-6 text-[#35485d] underline-offset-4 transition-colors hover:text-[#b5621e] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b5621e]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>

    <section className="bg-[#1a3a5c] text-[#f7f2eb]">
      <div className="mx-auto max-w-[1100px] px-6 py-8">
        <div className="grid gap-6 text-xs leading-5 text-white/72 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <div>
            <p className="text-[13px] font-semibold text-white">Shalanda Smith, NMLS #554554</p>
            <p className="mt-2">
              Keys by Shalanda is the personal brand of Shalanda Smith, operating under Secure Choice Lending, NMLS #1689518. Licensed in Texas by the Texas Department of Savings and Mortgage Lending.
            </p>
            <p className="mt-2">1650 Spruce St., Suite 500, Riverside, CA 92507</p>
            <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
              <a className="text-[#e1a06d] underline underline-offset-2 hover:text-white" href="https://www.sml.texas.gov" target="_blank" rel="noopener noreferrer">
                Texas SML
              </a>
              <a className="text-[#e1a06d] underline underline-offset-2 hover:text-white" href="https://www.nmlsconsumeraccess.org" target="_blank" rel="noopener noreferrer">
                NMLS Consumer Access
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.04em] text-white/85">Texas Consumer Complaint Notice</p>
            <p className="mt-2">
              Consumers wishing to file a complaint against a mortgage banker or licensed mortgage loan originator should contact the Texas Department of Savings and Mortgage Lending, 2601 North Lamar, Suite 201, Austin, Texas 78705. Toll-free: 1-877-276-5550.{" "}
              <a className="text-[#e1a06d] underline underline-offset-2 hover:text-white" href="https://www.sml.texas.gov" target="_blank" rel="noopener noreferrer">
                sml.texas.gov
              </a>
            </p>
            <p className="mt-3">
              All loans are subject to credit approval. Rates and terms are subject to change without notice. This is not a commitment to lend.
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-white/12 pt-5 text-[11px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2" aria-label="Equal Housing Opportunity">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={18} height={18} aria-hidden="true" fill="currentColor">
              <path d="M12 2L2 10h2v10h6v-6h4v6h6V10h2L12 2z" />
              <rect x="7" y="11.5" width="10" height="1.5" rx="0.75" fill="#1a3a5c" />
              <rect x="7" y="14" width="10" height="1.5" rx="0.75" fill="#1a3a5c" />
            </svg>
            <span>Equal Housing Opportunity</span>
          </div>
          <span>© 2026 Keys by Shalanda. All rights reserved.</span>
        </div>
      </div>
    </section>
  </footer>
);

export default SiteFooter;
