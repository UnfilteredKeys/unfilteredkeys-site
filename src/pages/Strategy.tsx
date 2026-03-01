import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";

const strategySchema = z.object({
  fullName: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Required").max(30),
  purchasingWithin90: z.string().min(1, "Required"),
  borrowerType: z.string().min(1, "Required"),
  underContract: z.string().min(1, "Required"),
  priceRange: z.string().min(1, "Required"),
  state: z.string().trim().min(1, "Required").max(100),
  additionalNotes: z.string().max(1000).optional(),
});

type StrategyForm = z.infer<typeof strategySchema>;

const radioGroupClass = "flex flex-col gap-2 mt-1";
const labelClass = "text-foreground text-sm tracking-wide";
const inputClass =
  "w-full bg-background border border-border text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground";
const errorClass = "text-destructive text-xs mt-1";

const RadioOption = ({
  name,
  value,
  label,
  register,
}: {
  name: keyof StrategyForm;
  value: string;
  label: string;
  register: any;
}) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <input
      type="radio"
      value={value}
      {...register(name)}
      className="accent-primary w-3.5 h-3.5"
    />
    <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
      {label}
    </span>
  </label>
);

const Strategy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StrategyForm>({
    resolver: zodResolver(strategySchema),
  });

  const onSubmit = (_data: StrategyForm) => {
    window.location.href =
      "https://calendly.com/shalanda-securechoicelending/30min";
  };

  return (
    <SiteLayout>
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
            Strategy
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-8">
            Structured Strategy Call
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            This call is reserved for borrowers who require intentional
            structuring before entering application. If you are under contract
            or actively shopping within the next 90 days, begin the{" "}
            <Link
              to="/apply"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Structured Application
            </Link>{" "}
            instead.
          </p>

          <div className="my-12 border-t border-border" />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Full Name */}
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                {...register("fullName")}
                placeholder="Full name"
                className={inputClass}
              />
              {errors.fullName && (
                <p className={errorClass}>{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>Email</label>
              <input
                {...register("email")}
                type="email"
                placeholder="Email address"
                className={inputClass}
              />
              {errors.email && (
                <p className={errorClass}>{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>Phone</label>
              <input
                {...register("phone")}
                type="tel"
                placeholder="Phone number"
                className={inputClass}
              />
              {errors.phone && (
                <p className={errorClass}>{errors.phone.message}</p>
              )}
            </div>

            {/* Purchasing within 90 days */}
            <div>
              <p className={labelClass}>
                Are you purchasing within the next 90 days?
              </p>
              <div className={radioGroupClass}>
                <RadioOption name="purchasingWithin90" value="Yes" label="Yes" register={register} />
                <RadioOption name="purchasingWithin90" value="No" label="No" register={register} />
              </div>
              {errors.purchasingWithin90 && (
                <p className={errorClass}>{errors.purchasingWithin90.message}</p>
              )}
            </div>

            {/* Borrower type */}
            <div>
              <p className={labelClass}>What best describes you?</p>
              <div className={radioGroupClass}>
                {[
                  "Veteran / Active Duty",
                  "Investor",
                  "Self-Employed",
                  "Move-Up Buyer",
                  "Other",
                ].map((opt) => (
                  <RadioOption key={opt} name="borrowerType" value={opt} label={opt} register={register} />
                ))}
              </div>
              {errors.borrowerType && (
                <p className={errorClass}>{errors.borrowerType.message}</p>
              )}
            </div>

            {/* Under contract */}
            <div>
              <p className={labelClass}>Are you currently under contract?</p>
              <div className={radioGroupClass}>
                <RadioOption name="underContract" value="Yes" label="Yes" register={register} />
                <RadioOption name="underContract" value="No" label="No" register={register} />
              </div>
              {errors.underContract && (
                <p className={errorClass}>{errors.underContract.message}</p>
              )}
            </div>

            {/* Price range */}
            <div>
              <p className={labelClass}>Estimated purchase price range</p>
              <div className={radioGroupClass}>
                {[
                  "Under $250k",
                  "$250k – $400k",
                  "$400k – $600k",
                  "$600k+",
                ].map((opt) => (
                  <RadioOption key={opt} name="priceRange" value={opt} label={opt} register={register} />
                ))}
              </div>
              {errors.priceRange && (
                <p className={errorClass}>{errors.priceRange.message}</p>
              )}
            </div>

            {/* State */}
            <div>
              <label className={labelClass}>State you are buying in</label>
              <input
                {...register("state")}
                placeholder="State"
                className={inputClass}
              />
              {errors.state && (
                <p className={errorClass}>{errors.state.message}</p>
              )}
            </div>

            {/* Additional notes */}
            <div>
              <label className={labelClass}>
                Anything important I should know before we meet?{" "}
                <span className="text-muted-foreground">(Optional)</span>
              </label>
              <textarea
                {...register("additionalNotes")}
                rows={4}
                placeholder="Share any relevant details..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
            >
              Continue to Scheduling
            </button>

            <p className="text-muted-foreground text-xs tracking-wide">
              Strategy calls are reserved for borrowers seeking structured
              positioning before application.
            </p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Strategy;
