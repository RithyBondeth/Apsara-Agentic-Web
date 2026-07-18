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
      ? "text-[0.82rem] font-semibold text-[var(--l-accent)]"
      : "landing-eyebrow",
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
        className="pointer-events-none absolute left-[-10%] top-1/2 h-128 w-lg -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--l-glow-a),transparent_72%)] blur-[180px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/3 h-88 w-88 rounded-full bg-[radial-gradient(circle,var(--l-glow-b),transparent_72%)] blur-[140px]"
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

        <div className="relative mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {/* The golden thread — the session that keeps its thread through
              workspace, work, and review. Drawn by scroll; a bead of light
              travels it. Fully drawn by default so pages without the
              animation orchestrator still look complete. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-16 md:block"
          >
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 1000 64"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="landing-thread-grad"
                  x1="0"
                  y1="0"
                  x2="1000"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--l-spectrum-1)" />
                  <stop offset="0.38" stopColor="var(--l-spectrum-2)" />
                  <stop offset="0.7" stopColor="var(--l-spectrum-3)" />
                  <stop offset="1" stopColor="var(--l-spectrum-4)" />
                </linearGradient>
                <filter
                  id="landing-thread-blur"
                  x="-20%"
                  y="-300%"
                  width="140%"
                  height="700%"
                >
                  <feGaussianBlur stdDeviation="4" />
                </filter>
              </defs>
              <path
                data-thread-glow
                d="M 20 32 C 120 -4, 240 66, 360 32 C 470 2, 560 60, 690 32 C 800 8, 900 44, 985 24"
                stroke="url(#landing-thread-grad)"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.3"
                filter="url(#landing-thread-blur)"
              />
              <path
                data-thread
                d="M 20 32 C 120 -4, 240 66, 360 32 C 470 2, 560 60, 690 32 C 800 8, 900 44, 985 24"
                stroke="url(#landing-thread-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                data-thread-bead
                r="5"
                fill="var(--l-spectrum-2)"
                className="opacity-0"
                filter="url(#landing-thread-blur)"
              />
            </svg>
          </div>

          {copy.steps.map((step, index) => (
            <div
              key={workflowNumbers[index] ?? step.title}
              data-gsap="workflow-step"
              className="relative text-center md:text-left"
            >
              <div
                data-workflow-badge
                className="landing-step-badge inline-flex size-16 items-center justify-center rounded-[1.5rem]">
                <span className="text-2xl font-bold tracking-tight text-[var(--l-tile-fg)]">
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
