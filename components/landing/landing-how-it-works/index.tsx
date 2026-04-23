import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { cn } from "@/lib/utils";

const workflowNumbers = ["01", "02", "03"];

type LandingHowItWorksProps = {
  copy: LandingCopy["workflow"];
  locale: LandingLocale;
};

export default function LandingHowItWorks({
  copy,
  locale,
}: LandingHowItWorksProps) {
  const eyebrowClassName = cn(
    locale === "km"
      ? "text-[0.82rem] font-semibold text-[oklch(0.54_0.11_68)]"
      : "landing-eyebrow"
  );

  return (
    <section
      id="workflow"
      className="relative scroll-mt-28 overflow-hidden py-20 sm:scroll-mt-32 sm:py-28 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.76_0.11_76_/_0.1),transparent_72%)] blur-[180px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,oklch(0.69_0.08_206_/_0.08),transparent_72%)] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p data-gsap="workflow-head" className={eyebrowClassName}>
            {copy.eyebrow}
          </p>
          <h2
            data-gsap="workflow-head"
            className="font-heading mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {copy.title}
          </h2>
          <p
            data-gsap="workflow-head"
            className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
          >
            {copy.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {copy.steps.map((step, index) => (
            <div
              key={workflowNumbers[index] ?? step.title}
              data-gsap="workflow-step"
              className="relative text-center md:text-left"
            >
              {index < copy.steps.length - 1 ? (
                <div className="hidden md:block absolute left-[62%] top-8 h-px w-[calc(100%-22%)] bg-gradient-to-r from-[oklch(0.74_0.1_76_/_0.45)] to-[oklch(0.74_0.1_76_/_0.08)]" />
              ) : null}

              <div className="inline-flex size-16 items-center justify-center rounded-[1.5rem] border border-[oklch(0.84_0.06_78_/_0.45)] bg-[linear-gradient(135deg,oklch(0.97_0.028_82_/_0.9),oklch(0.95_0.02_80_/_0.8))]">
                <span className="text-2xl font-bold tracking-tight text-[oklch(0.56_0.13_68)]">
                  {workflowNumbers[index] ?? `${index + 1}`}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground sm:text-base md:mx-0 mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
