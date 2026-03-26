import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import headshot from "@/assets/headshot.png";

const principles = [
  "Approvals are backed by review.",
  "Preparation precedes offers.",
  "Direct answers replace vague reassurance.",
  "Not ready is repositioned — not rejected.",
  "Accountability extends beyond closing.",
];

const steps = [
  { num: "01", title: "Application Submitted" },
  { num: "02", title: "Personally Reviewed" },
  { num: "03", title: "Strategy Clarified" },
  { num: "04", title: "Soft Credit Analysis" },
  { num: "05", title: "Defined Approval Path" },
];

const Index = () => (
  <SiteLayout>
    {/* Hero */}
    <section className="min-h-[90vh] flex items-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full py-24 md:py-32">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-6">
          Central Texas Mortgage Strategy
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.15] md:leading-[1.2] mb-12">
          Your Mortgage Should Be Built<span className="text-foreground">.</span>
          <br />
          <span className="text-primary font-bold">Not Quoted.</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-3 max-w-2xl">
          VA, FHA, Conventional &amp; Jumbo loans structured for Texas buyers who want real numbers before they shop.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-16 max-w-2xl">
          No guesswork. No surprises. No deals falling apart at the finish line.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="https://scl.my1003app.com/554554/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Pre-Approval
          </a>
          <a
            href="https://calendly.com/shalanda-securechoicelending/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-muted transition-colors"
          >
            See Your Real Buying Power
          </a>
        </div>

        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          VA-focused. Texas-based. Trusted when the deal actually has to close.
        </p>
      </div>
    </section>

    {/* Why Most Mortgage Experiences Fall Apart */}
    <section className="bg-card py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">The Difference</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
          Why Most Mortgage Experiences Fall Apart
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">
          It's not the loan. It's how it's structured.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16">
          Here's what we do differently so your deal doesn't break under pressure.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "We Run Your Numbers Before You Shop",
              body: "Most lenders give you a pre-qual and send you out looking. We build your full affordability first — including taxes, insurance, and payment structure — so you don't fall in love with a house you can't actually keep.",
            },
            {
              title: "We Build Around Your Timeline, Not Ours",
              body: "Whether you're PCS'ing, relocating, or buying on a deadline, we structure your loan timeline backward from your closing date so nothing gets rushed or missed at the end.",
            },
            {
              title: "We Compare Options, Not Push One",
              body: "Builder lender, VA, FHA, Conventional, or non-QM. We show you side-by-side numbers so you understand the real cost before you commit to anything.",
            },
            {
              title: "We Know This Market Beyond the Zip Code",
              body: "Killeen, Temple, Copperas Cove, Round Rock, Georgetown. We know how property taxes, insurance, and local trends affect your payment — not just the purchase price.",
            },
            {
              title: "We Surface Problems Early",
              body: "Credit, appraisal, income, or property issues. We identify and address them upfront so they don't show up two days before closing.",
            },
            {
              title: "No Hidden Fees. No Last-Minute Changes.",
              body: "If it's on your Loan Estimate, we can explain it clearly. If we can't explain it, it doesn't belong there. You'll know your numbers from day one.",
            },
          ].map((card) => (
            <div key={card.title} className="border border-border p-8">
              <h3 className="text-foreground font-semibold text-sm tracking-wide uppercase mb-4">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-foreground font-serif text-xl md:text-2xl mt-16">
          Anyone can quote a rate. Very few can structure a loan that actually closes clean.
        </p>
      </div>
    </section>

    {/* Three Steps */}
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Process</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
          Three Steps. No Surprises at Closing.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16">
          We don't wing this. Every step is structured so you know your numbers, your timeline, and exactly what happens next.
        </p>
        <div className="grid md:grid-cols-3 gap-16">
          {[
            {
              num: "01",
              title: "Strategy Call",
              body: "We review your income, credit, and goals to build your buying strategy before you shop. You leave knowing exactly what you can afford — not a rough estimate that changes later.",
              tag: "15 Min • No Obligation",
            },
            {
              num: "02",
              title: "Pre-Approval",
              body: "We verify your documents, run the numbers, and issue a fully underwritten pre-approval. This is the kind that holds up with sellers and agents — not one that falls apart in underwriting.",
              tag: "24–48 Hours • Fully Reviewed",
            },
            {
              num: "03",
              title: "Close & Move In",
              body: "We manage the loan from contract to closing with clear communication and no last-minute surprises. You know where your file stands every step of the way.",
              tag: "Average: 21 Days to Close",
            },
          ].map((step) => (
            <div key={step.num} className="border-t border-border pt-8">
              <span className="font-mono text-muted-foreground text-sm tracking-widest">{step.num}</span>
              <h3 className="text-foreground font-medium text-base tracking-wide uppercase mt-4 mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{step.body}</p>
              <span className="text-primary text-xs tracking-widest uppercase font-medium">{step.tag}</span>
            </div>
          ))}
        </div>
        <div className="my-16 border-t border-border" />
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-foreground font-serif text-xl md:text-2xl leading-relaxed">
            Most loan issues don't show up at application.<br />They show up at closing.
          </p>
          <p className="text-muted-foreground text-sm tracking-wide mt-4">
            We structure everything upfront so that doesn't happen.
          </p>
        </div>
        <div className="text-center">
          <a
            href="https://scl.my1003app.com/554554/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Pre-Approval
          </a>
        </div>
      </div>
    </section>

    {/* How We Structure Your Loan */}
    <section className="bg-card py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Loan Programs</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
          How We Structure Your Loan<br />(Not Just Pick One)
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">
          Most lenders push products. We build the structure first, then choose the loan that actually fits.
        </p>
        <p className="text-muted-foreground text-sm tracking-wide italic mb-16">
          Every loan type is a tool. The strategy is what makes it work.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "VA Home Loan",
              body: "Built for eligible service members who want to maximize buying power without a down payment. We structure VA loans to avoid common appraisal, entitlement, and timeline issues that slow other lenders down.",
              tag: "$0 Down • No PMI",
            },
            {
              title: "FHA Loan",
              body: "Best for buyers building or rebuilding credit. We structure FHA loans to manage mortgage insurance, payment stability, and long-term refinance strategy from day one.",
              tag: "3.5% Down • Flexible Credit",
            },
            {
              title: "Conventional Loan",
              body: "For buyers with stronger credit who want flexibility and lower long-term costs. We structure conventional loans to optimize rate, reserves, and future investment potential.",
              tag: "From 3% Down",
            },
            {
              title: "Jumbo Loan",
              body: "For higher-priced properties that exceed conforming limits. We structure jumbo loans to balance liquidity, reserves, and approval strength — not just rate.",
              tag: "Above Conforming Limits",
            },
            {
              title: "USDA Loan",
              body: "100% financing in eligible rural areas. We verify property eligibility early so you don't waste time on homes that won't qualify.",
              tag: "Zero Down • Rural Eligible",
            },
            {
              title: "Refinance",
              body: "Used to lower your rate, access equity, or restructure your loan. We only recommend refinancing when it actually improves your financial position — not just because rates moved.",
              tag: "Rate • Cash-Out • VA IRRRL",
            },
          ].map((card) => (
            <div key={card.title} className="border border-border p-6">
              <h3 className="text-foreground font-medium text-sm tracking-wide uppercase mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{card.body}</p>
              <span className="text-primary text-xs tracking-widest uppercase font-medium">{card.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* The Standard */}
    <section className="bg-card py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">The Standard</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-12">
          This Is The Standard.
        </h2>
        <div className="space-y-5 max-w-2xl">
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-primary text-sm mt-0.5">•</span>
              <p className="text-muted-foreground text-lg leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* System Snapshot */}
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">The System</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-16">
          The Structured Mortgage System™
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-border pt-6">
              <span className="font-mono text-primary text-2xl font-medium">{step.num}</span>
              <p className="text-foreground mt-3 text-sm tracking-wide">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Emotional */}
    <section className="bg-card py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
          You shouldn't feel small<br />
          in a decision this large.
        </h2>
        <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
          Most clients arrive unsure.<br />
          Most leave saying, "Okay. I get it now."
        </p>
      </div>
    </section>

    {/* Timing Matters */}
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Timing</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
          Timing Matters
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16">
          Every approval timeline is different. The strategy depends on when you plan to move.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-t border-border pt-8">
            <h3 className="text-foreground font-medium text-sm tracking-wide uppercase mb-4">Closing Within 90 Days</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              If you are actively shopping, under contract, or purchasing within the next three months, your structure should already be in place.
            </p>
            <a
              href="https://scl.my1003app.com/554554/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
            >
              Begin Structured Application
            </a>
          </div>
          <div className="border-t border-border pt-8">
            <h3 className="text-foreground font-medium text-sm tracking-wide uppercase mb-4">Planning Ahead</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              If your purchase is six to twelve months out, strategic preparation today creates stronger positioning when you're ready.
            </p>
            <Link
              to="/framework"
              className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:border-muted-foreground transition-colors"
            >
              Access Planning Framework
            </Link>
          </div>
        </div>
        <p className="text-center text-muted-foreground text-sm tracking-wide mt-16">
          The difference between stress and control is preparation.
        </p>
      </div>
    </section>

    {/* Founded on Structure */}
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-6 mb-8">
          <img src={headshot} alt="Shalanda Smith" className="w-14 h-14 rounded-full object-cover mt-1 hidden md:block" />
          <div>
            <p className="font-sans text-xs text-primary tracking-widest uppercase mb-4">Authority</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              Founded on Structure.<br />Built for Control.
            </h2>
          </div>
        </div>
        <div className="max-w-3xl space-y-6 mt-12">
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Unfiltered Keys was built after two decades inside major banks, national builders, and large retail lenders.
          </p>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            I've operated within the institutions that shape mortgage approvals — and the policies that limit them.
          </p>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            I've seen capable borrowers constrained by channel restrictions, not qualification.
          </p>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            This platform expands what the right structure makes possible.
          </p>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Every approval reflects institutional experience — without institutional constraints.
          </p>
        </div>
        <div className="my-12 border-t border-border" />
        <div className="mt-12 space-y-4 max-w-3xl">
          <p className="font-sans text-foreground text-sm tracking-wide">No call centers.</p>
          <p className="font-sans text-foreground text-sm tracking-wide">No layered managers.</p>
          <p className="font-sans text-foreground text-sm tracking-wide">No file passed around.</p>
          <p className="font-serif text-xl md:text-2xl text-foreground mt-8">
            Your strategy is built deliberately.
          </p>
        </div>
        <div className="mt-12">
          <Link
            to="/strategy"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Work Directly With Me
          </Link>
        </div>
      </div>
    </section>

    {/* Professional Standards */}
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Compliance</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-16">
          Professional Standards
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Licensed & Regulated", copy: "NMLS #554554\nEqual Housing Lender" },
            { title: "Experience", copy: "20+ years inside banking, builder finance, and national retail lending." },
            { title: "Access", copy: "Broker channel access across conventional, FHA, USDA, VA, non-QM, and portfolio solutions." },
            { title: "Structure", copy: "Every file personally reviewed and positioned before submission." },
          ].map((block) => (
            <div key={block.title} className="border-t border-border pt-6">
              <h3 className="text-foreground font-medium text-xs tracking-widest uppercase mb-3">{block.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{block.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-card py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">Move Deliberately.</h2>
        <p className="text-muted-foreground mt-4 text-lg">Begin Structured Application.</p>
        <a
          href="https://scl.my1003app.com/554554/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium mt-10 hover:opacity-90 transition-opacity"
        >
          Begin Structured Application
        </a>
      </div>
    </section>
  </SiteLayout>
);

export default Index;
