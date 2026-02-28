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
          Every file is personally reviewed. Every approval is deliberate.
          You hear from me within hours — not days.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Structured Application
          </Link>
          <Link
            to="/system"
            className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:border-muted-foreground transition-colors"
          >
            See The System
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

    {/* Final CTA */}
    <section className="py-24 md:py-32 px-6 md:px-12">
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
