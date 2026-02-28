import SiteLayout from "@/components/SiteLayout";

const principles = [
  "Every file is reviewed personally before a decision is issued.",
  "Preparation is required before offers are made — not optional.",
  "Direct answers are given. Vague reassurance is not practiced here.",
  "If a client is not ready, they receive a written repositioning plan — not a rejection.",
  "Communication is structured, timely, and documented.",
  "Accountability does not end at closing. It extends into positioning for the future.",
  "Approval numbers are backed by reviewed data — never inflated for appearance.",
  "The process is the product. Without process, there is no standard.",
];

const Standard = () => (
  <SiteLayout>
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Methodology</p>
        <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
          The Unfiltered Mortgage Standard™
        </h1>
        <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
          This is a defined approach to structured mortgage advisory. It is not a marketing position.
          It is not a tagline. It is the operating methodology that governs every file, every
          conversation, and every approval issued under this practice.
        </p>
      </div>
    </section>

    <section className="bg-card py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-8">
        {principles.map((p, i) => (
          <div key={i} className="flex gap-6 items-start border-b border-border pb-8 last:border-0">
            <span className="font-mono text-primary text-sm mt-1">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-foreground text-lg leading-relaxed">{p}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground text-lg">
          Founded by <span className="text-foreground font-medium">Shalanda Smith</span>.
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default Standard;
