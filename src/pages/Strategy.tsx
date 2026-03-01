import SiteLayout from "@/components/SiteLayout";

const Strategy = () => {
  return (
    <SiteLayout>
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
            Strategy
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-8">
            Structured Strategy Call
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl">
            This page routes you to the right next step based on timing. If
            you're under contract or actively shopping, start the Structured
            Application. If you're planning ahead and need positioning,
            schedule a Strategy Call.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Left block */}
            <div className="border border-border p-8 flex flex-col">
              <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
                Closing Within 90 Days
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                If you are under contract or actively shopping, your file
                should already be structured and submitted.
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

            {/* Right block */}
            <div className="border border-border p-8 flex flex-col">
              <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
                Planning Ahead
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                If you are structuring income, rebuilding credit, or
                positioning for purchase in the next 6–12 months, schedule a
                Strategy Call.
              </p>
              <a
                href="https://calendly.com/shalanda-securechoicelending/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-muted transition-colors"
              >
                Schedule Strategy Call
              </a>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-xs tracking-widest uppercase">
            Structure first. Then speed.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Strategy;
