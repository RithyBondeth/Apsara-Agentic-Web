import { Check, GitCommitHorizontal, TerminalSquare } from "lucide-react";
import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { cn } from "@/lib/utils";

const workflowNumbers = ["01", "02", "03"];
const workflowCommands = [
  "apsara init .",
  "apsara run <intent>",
  "approve --review",
];

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
      className="relative scroll-mt-24 overflow-hidden border-b border-[var(--l-line)] py-24 sm:scroll-mt-28 sm:py-32 lg:py-40"
    >
      <div aria-hidden className="landing-code-grid absolute inset-0 opacity-35" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-12%] top-1/4 size-[34rem] rounded-full bg-[radial-gradient(circle,var(--l-glow-a),transparent_72%)] blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p data-gsap="workflow-head" className={eyebrowClassName}>
              {copy.eyebrow}
            </p>
            <h2
              data-gsap="workflow-head"
              className="font-heading mt-5 text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl"
            >
              {copy.title}
            </h2>
            <p
              data-gsap="workflow-head"
              className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.description}
            </p>

            <div
              data-gsap="workflow-head"
              className="mt-8 flex items-center gap-3 border border-[var(--l-line)] bg-[var(--l-surface)]/70 p-4 font-mono text-xs text-muted-foreground backdrop-blur-lg"
            >
              <TerminalSquare className="size-4 text-[var(--l-accent)]" />
              <span className="text-[var(--l-spectrum-1)]">$</span>
              <span>one safe loop, end to end</span>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-12">
            <div
              aria-hidden
              className="absolute bottom-0 left-[7px] top-0 w-px bg-[var(--l-line)] sm:left-[11px]"
            >
              <span
                data-workflow-line
                className="block h-full origin-top bg-[linear-gradient(180deg,var(--l-spectrum-1),var(--l-spectrum-2),var(--l-spectrum-3))]"
              />
            </div>

            <div className="space-y-6 sm:space-y-8">
              {copy.steps.map((step, index) => (
                <article
                  key={workflowNumbers[index] ?? step.title}
                  data-gsap="workflow-step"
                  className="landing-workflow-card relative rounded-xl p-6 sm:p-8"
                >
                  <span
                    data-workflow-badge
                    className="absolute -left-[2.05rem] top-8 flex size-4 items-center justify-center rounded-full border-2 border-[var(--l-ground)] bg-[var(--l-accent)] shadow-[0_0_0_4px_var(--l-line),0_0_24px_var(--l-btn-shadow)] sm:-left-[3.05rem] sm:size-5"
                  >
                    <span className="size-1.5 rounded-full bg-[var(--l-on-accent)]" />
                  </span>

                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <GitCommitHorizontal className="size-5 text-[var(--l-accent)]" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--l-accent)]">
                        Step {workflowNumbers[index] ?? index + 1}
                      </span>
                    </div>
                    <span className="rounded border border-[var(--l-line)] bg-[var(--l-ground)]/60 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {index === 2 ? "human gate" : "agent loop"}
                    </span>
                  </div>

                  <h3 className="mt-8 font-heading text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {step.description}
                  </p>

                  <div className="mt-7 flex items-center gap-3 border-t border-[var(--l-line)] pt-5 font-mono text-xs">
                    <span className="text-[var(--l-spectrum-1)]">$</span>
                    <code className="text-foreground/75">
                      {workflowCommands[index]}
                    </code>
                    <Check className="ml-auto size-4 text-[var(--l-spectrum-1)]" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
