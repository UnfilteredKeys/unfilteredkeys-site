import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

const steps = [
  { num: "01", title: "Application Submitted", desc: "Your information is received through a structured intake — not a generic form." },
  { num: "02", title: "Personally Reviewed", desc: "Every file is reviewed by Shalanda Smith directly. No handoffs. No assistants." },
  { num: "03", title: "Strategy Clarified", desc: "Your financial position is assessed and a clear strategy is defined before any next step." },
  { num: "04", title: "Soft Credit Analysis First", desc: "Credit is evaluated without hard inquiry to preserve your position." },
  { num: "05", title: "Payment Structure Reviewed Live", desc: "Numbers are reviewed with you in real time. No surprises. No assumptions." },
  { num: "06", title: "Defined Approval Path or Written Plan", desc: "You receive a clear approval or a documented repositioning plan with specific milestones." },
  { num: "07", title: "Coordinated Agent Alignment", desc: "Your real estate agent is briefed on your actual position — not inflated numbers." },
  { num: "08", title: "Structured Execution Through Closing", desc: "Every step from contract to keys is managed with deliberate communication and accountability." },
];

const System = () => (
  <SiteLayout>
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Process</p>
        <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
          The Structured Mortgage System™
        </h1>
      </div>
    </section>

    <section className="bg-card py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-12">
        {steps.map((step) => (
          <div key={step.num} className="flex gap-8 items-start">
            <span className="font-mono text-primary text-3xl font-medium shrink-0 w-12">{step.num}</span>
            <div>
              <h3 className="text-foreground text-xl font-serif mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="font-serif text-2xl text-foreground italic">
          "If I back your file, I've reviewed it."
        </p>
        <div className="mt-12">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Begin Structured Review
          </Link>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default System;
