import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

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
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] max-w-4xl">
          Structured Mortgage<br />
          <span className="text-primary">Strategy.</span>
        </h1>
        <p className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
          Where every file is structured with intention — before it is ever submitted.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Structured Application
          </Link>
          <Link
            to="/apply"
            className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:border-muted-foreground transition-colors"
          >
            Schedule a Strategy Call
          </Link>
        </div>
        <Link
          to="/system"
          className="mt-6 inline-flex text-muted-foreground text-sm tracking-wide hover:text-foreground transition-colors underline underline-offset-4"
        >
          See How The System Works
        </Link>
      </div>
    </section>

    {/* Who This Is Built For */}
    <section className="bg-card py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Clients</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
          Who This Is Built For
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16">
          This is for borrowers who understand that the structure behind the approval matters as much as the rate — whether it's your first purchase or your fifth.
        </p>
        <div className="grid md:grid-cols-5 gap-8">
          {[
            { title: "Veterans", copy: "VA entitlement planning, multi-property strategy, and long-term positioning beyond a basic approval." },
            { title: "Investors", copy: "DSCR structuring, portfolio leverage, and underwriting built around asset performance." },
            { title: "Self-Employed", copy: "Bank statement analysis, income strategy, and documentation clarity designed for non-traditional earners." },
            { title: "Move-Up & Complex Buyers", copy: "Layered income, asset transitions, contingent scenarios, and precision timing." },
            { title: "First Purchase", copy: "Structured preparation and confident guidance for buyers stepping into their first contract with clarity and control." },
          ].map((col) => (
            <div key={col.title} className="border-t border-border pt-6">
              <h3 className="text-foreground font-medium text-sm tracking-wide uppercase mb-3">{col.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{col.copy}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/framework"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Explore The Framework
          </Link>
        </div>
      </div>
    </section>

    {/* How Structured Approval Works */}
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Process</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
          How Structured Approval Works
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16">
          Most lenders collect documents and submit.<br />
          We structure first, then submit.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { num: "01", title: "Positioning", copy: "Income, assets, entitlement, and debt are evaluated strategically before a file is ever presented to underwriting." },
            { num: "02", title: "Structuring", copy: "Loan program selection, documentation strategy, and timeline alignment are engineered intentionally — not reactively." },
            { num: "03", title: "Submission", copy: "The file enters underwriting clean, deliberate, and prepared for confident approval." },
          ].map((step) => (
            <div key={step.num} className="border-t border-border pt-6">
              <span className="font-mono text-primary text-2xl font-medium">{step.num}</span>
              <h3 className="text-foreground font-medium text-sm tracking-wide uppercase mt-3 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.copy}</p>
            </div>
          ))}
        </div>
        <div className="my-16 border-t border-border" />
        <div className="text-center space-y-4 mb-12">
          <p className="text-muted-foreground text-sm tracking-wide">Layered income.</p>
          <p className="text-muted-foreground text-sm tracking-wide">Multiple entities.</p>
          <p className="text-muted-foreground text-sm tracking-wide">Rebuilt credit history.</p>
          <p className="text-muted-foreground text-sm tracking-wide">Portfolio holdings.</p>
        </div>
        <p className="text-center text-foreground font-serif text-xl md:text-2xl mb-12">
          Structure creates clarity.
        </p>
        <div className="text-center">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Structured Application
          </Link>
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
              If you are actively shopping, under contract, or planning to purchase within the next three months, your structure should be finalized now.
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
            >
              Begin Structured Application
            </Link>
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

    {/* Final CTA */}
    <section className="bg-card py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">Move Deliberately.</h2>
        <p className="text-muted-foreground mt-4 text-lg">Begin Structured Review.</p>
        <Link
          to="/apply"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium mt-10 hover:opacity-90 transition-opacity"
        >
          Begin Structured Review
        </Link>
      </div>
    </section>
  </SiteLayout>
);

export default Index;
