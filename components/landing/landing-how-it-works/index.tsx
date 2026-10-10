import { Check, GitCommitHorizontal, TerminalSquare } from "lucide-react";
import KhmerOrnament from "@/components/landing/khmer-ornament";
import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { cn } from "@/lib/utils";

const workflowNumbers = ["01", "02", "03"];
const workflowCommands = [
  "cd your-project && apsara",
  "/key set <provider>",
  "/diff · /report · /undo",
];

type LandingHowItWorksProps = {
  copy: LandingCopy["workflow"];
  locale: LandingLocale;
  standalone?: boolean;
};

export default function LandingHowItWorks({
  copy,
  locale,
  standalone = false,
}: LandingHowItWorksProps) {
  const Heading = standalone ? "h1" : "h2";
  const ItemHeading = standalone ? "h2" : "h3";
  const eyebrowClassName = cn(
    locale === "km"
      ? "text-[0.82rem] font-semibold text-[var(--l-accent)]"
      : "landing-eyebrow",
  );

  return (
    <section
      id="workflow"
      className="relative scroll-mt-24 overflow-hidden border-b border-[var(--l-line)] py-20 sm:scroll-mt-28 sm:py-24 lg:py-28"
    >
      {!standalone && (
        <KhmerOrnament variant="divider" className="heritage-section-divider" />
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16">
          <div data-workflow-intro className="lg:h-fit">
            <p data-gsap="workflow-head" className={eyebrowClassName}>
              {copy.eyebrow}
            </p>
            <Heading
              data-gsap="workflow-head"
              className="font-heading mt-5 text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl"
            >
              {copy.title}
            </Heading>
            <p
              data-gsap="workflow-head"
              className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.description}
            </p>

            <div
              data-gsap="workflow-head"
              className="mt-8 flex items-center gap-3 border border-[var(--l-line)] bg-[var(--l-surface)]/70 p-4 font-mono text-xs text-muted-foreground backdrop-blur-lg"
              lang="en"
            >
              <TerminalSquare className="size-4 text-[var(--l-accent)]" />
              <span className="text-[var(--l-spectrum-1)]">$</span>
              <span>one safe loop, end to end</span>
            </div>
          </div>

          <div data-workflow-stack className="relative pl-8 sm:pl-12">
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
                  data-workflow-card
                  className="landing-workflow-card relative rounded-xl p-6 sm:p-8"
                >
                  <KhmerOrnament
                    variant="corner"
                    className="heritage-card-corner"
                  />
                  <span
                    data-workflow-badge
                    className="absolute -left-[2.05rem] top-8 flex size-4 items-center justify-center rounded-full border-2 border-[var(--l-ground)] bg-[var(--l-accent)] shadow-[0_0_0_4px_var(--l-line),0_0_24px_var(--l-btn-shadow)] sm:-left-[3.05rem] sm:size-5"
                  >
                    <span className="size-1.5 rounded-full bg-[var(--l-on-accent)]" />
                  </span>

                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <GitCommitHorizontal className="size-5 text-[var(--l-accent)]" />
                      <span
                        lang="en"
                        className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--l-accent)]"
                      >
                        Step {workflowNumbers[index] ?? index + 1}
                      </span>
                    </div>
                  </div>

                  <ItemHeading className="mt-8 font-heading text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
                    {step.title}
                  </ItemHeading>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {step.description}
                  </p>

                  <div
                    lang="en"
                    className="mt-7 flex items-center gap-3 border-t border-[var(--l-line)] pt-5 font-mono text-xs"
                  >
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
