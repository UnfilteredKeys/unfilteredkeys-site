import SiteLayout from "@/components/SiteLayout";

const Strategy = () => {
  return (
    <SiteLayout>
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-6">
            Texas Mortgage Strategy
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.15] md:leading-[1.2] mb-12">
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
    </SiteLayout>
  );
};

export default Strategy;
