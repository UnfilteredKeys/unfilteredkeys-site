const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-lg space-y-6">
        <div className="w-3 h-3 rounded-full bg-primary mx-auto" />
        <h1 className="font-serif text-4xl md:text-5xl text-foreground">
          You're confirmed.
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Your guide is on its way.
        </p>
        <p className="text-primary font-mono text-sm tracking-widest uppercase">
          Check your inbox now.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
