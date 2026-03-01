import SiteLayout from "@/components/SiteLayout";

const areas = [
  "Credit positioning and timeline expectations",
  "Income documentation and verification strategy",
  "Savings structure and down payment clarity",
  "Debt-to-income awareness",
  "Market orientation and rate context",
  "Application readiness assessment",
];

const Framework = () => (
  <SiteLayout>
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Free Resource</p>
        <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
          Prepared Buyer Framework
        </h1>
        <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-2xl">
          A self-paced course addressing the six areas responsible for most buyer hesitation.
          This is preparation — not a replacement for a structured application.
        </p>
      </div>
    </section>

    <section className="bg-card py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl text-foreground mb-10">What the Framework covers:</h2>
        <div className="space-y-6">
          {areas.map((area, i) => (
            <div key={i} className="flex gap-6 items-start border-b border-border pb-6 last:border-0">
              <span className="font-mono text-primary text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-foreground leading-relaxed">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-serif text-xl md:text-2xl text-foreground mb-6">
          When structure is in place, execution becomes simple.
        </p>
        <a
          href="https://scl.my1003app.com/554554/register"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm tracking-wide hover:text-foreground transition-colors underline underline-offset-4"
        >
          Begin Structured Application →
        </a>
      </div>
    </section>
  </SiteLayout>
);

export default Framework;
