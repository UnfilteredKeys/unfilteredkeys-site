import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "purchase",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SiteLayout>
        <section className="min-h-[80vh] flex items-center py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Confirmed</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Application Received.
            </h1>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
              Your file has entered structured review.<br />
              You will hear from me within 2 business hours.
            </p>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Apply</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
            Begin Structured Review.
          </h1>

          <div className="mt-12 space-y-4 max-w-xl">
            {[
              "Personally reviewed",
              "2-hour response during business hours",
              "Soft credit first",
              "Clear written next steps if not ready",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-primary text-sm mt-0.5">•</span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-24 md:py-32 px-6 md:px-12">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
          {[
            { label: "Full Name", key: "name", type: "text" },
            { label: "Email Address", key: "email", type: "email" },
            { label: "Phone Number", key: "phone", type: "tel" },
          ].map(({ label, key, type }) => (
            <div key={key}>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                {label}
              </label>
              <input
                type={type}
                required
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              Inquiry Type
            </label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            >
              <option value="purchase">Purchase</option>
              <option value="refinance">Refinance</option>
              <option value="repositioning">Repositioning</option>
              <option value="agent">Agent Partnership</option>
            </select>
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              Additional Context
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Submit for Structured Review
          </button>
        </form>
      </section>
    </SiteLayout>
  );
};

export default Apply;
