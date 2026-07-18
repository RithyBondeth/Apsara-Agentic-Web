import {
  Eye,
  GitBranch,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import dynamic from "next/dynamic";
import type {
  LandingCopy,
  LandingLocale,
} from "@/language/landing-copy";
import { cn } from "@/lib/utils";

const LandingShowcaseTerminal = dynamic(
  () => import("@/components/landing/landing-showcase-terminal"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[520px] rounded-lg border border-white/8 bg-[#090b0f] animate-pulse" />
    ),
  },
);

const productNoteIcons = [ShieldCheck, Eye, GitBranch];

type LandingShowcaseProps = {
  copy: LandingCopy["showcase"];
  locale: LandingLocale;
};

export default function LandingShowcase({
  copy,
  locale,
}: LandingShowcaseProps) {
  const eyebrowClassName = cn(
    locale === "km"
      ? "text-[0.82rem] font-semibold text-[var(--l-accent)]"
      : "landing-eyebrow",
  );

  return (
    <section
      id="showcase"
      className="relative scroll-mt-24 overflow-clip border-b border-[var(--l-line)] py-16 sm:scroll-mt-28 sm:py-20 lg:py-24"
    >
      <div aria-hidden className="landing-code-grid absolute inset-0 opacity-55" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-[28%] size-[34rem] rounded-full bg-[radial-gradient(circle,var(--l-glow-a),transparent_70%)] blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-[var(--l-line)] pb-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end lg:pb-10">
          <div>
            <p data-gsap="showcase-head" className={eyebrowClassName}>
              {copy.eyebrow}
            </p>
            <p
              data-gsap="showcase-head"
              className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              Runtime / 01—04
            </p>
          </div>
          <div>
            <h2
              data-gsap="showcase-head"
              className="font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {copy.title}
            </h2>
            <p
              data-gsap="showcase-head"
              className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.description}
            </p>
          </div>
        </div>

        <div className="relative mt-10 grid gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div
              data-gsap="showcase-shell"
              data-showcase-sticky
              className="landing-terminal-shell relative overflow-hidden rounded-xl p-2 text-white sm:p-3"
            >
              <div className="flex items-center justify-between border-b border-white/9 px-3 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                  <span className="size-2.5 rounded-full bg-[#ffd166]" />
                  <span className="size-2.5 rounded-full bg-[#70e000]" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                  <TerminalSquare className="size-3.5" />
                  {copy.sessionLabel}
                </div>
              </div>

              <LandingShowcaseTerminal key={locale} copy={copy.terminal} />

              <div className="grid grid-cols-3 border-t border-white/8 font-mono text-[9px] uppercase tracking-[0.12em] text-white/36 sm:text-[10px]">
                <span className="border-r border-white/8 px-3 py-3">
                  scope / repo
                </span>
                <span className="border-r border-white/8 px-3 py-3">
                  diff / ready
                </span>
                <span className="px-3 py-3 text-[#9ef01a]">
                  state / safe
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span>scroll trace</span>
              <span className="h-px flex-1 bg-[var(--l-line)]">
                <span
                  data-showcase-progress
                  className="block h-full origin-left bg-[linear-gradient(90deg,var(--l-spectrum-1),var(--l-spectrum-3))]"
                />
              </span>
              <span>04</span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute bottom-0 left-[7px] top-0 w-px bg-[var(--l-line)]"
            />

            <article
              data-story-step
              className="landing-story-card relative pb-14 pl-10 pt-2 lg:pb-16"
            >
              <span className="landing-story-node" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--l-accent)]">
                01 / {copy.whyEyebrow}
              </p>
              <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
                {copy.whyTitle}
              </h3>
              <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground">
                {copy.whyDescription}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--l-line)] bg-[var(--l-line)] font-mono text-[10px] uppercase tracking-[0.12em]">
                <span className="bg-[var(--l-surface)] p-4 text-muted-foreground">
                  raw chat
                  <strong className="mt-2 block text-base text-foreground">
                    unbounded
                  </strong>
                </span>
                <span className="bg-[var(--l-surface)] p-4 text-muted-foreground">
                  apsara
                  <strong className="mt-2 block text-base text-[var(--l-accent)]">
                    repo-bound
                  </strong>
                </span>
              </div>
            </article>

            {copy.notes.map((note, index) => {
              const Icon = productNoteIcons[index];

              if (!Icon) {
                return null;
              }

              return (
                <article
                  key={note.title}
                  data-story-step
                  className="landing-story-card relative pb-14 pl-10 pt-2 lg:pb-16"
                >
                  <span className="landing-story-node" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--l-accent)]">
                    0{index + 2} / checkpoint
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="landing-feature-icon flex size-11 items-center justify-center rounded-lg">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
                      {note.title}
                    </h3>
                  </div>
                  <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground">
                    {note.description}
                  </p>

                  <div className="mt-8 rounded-lg border border-[var(--l-line)] bg-[var(--l-surface)]/70 p-5 font-mono text-xs shadow-[inset_0_1px_0_var(--l-inset)]">
                    <p className="text-muted-foreground">
                      <span className="text-[var(--l-spectrum-1)]">●</span>{" "}
                      agent.event
                    </p>
                    <p className="mt-3 text-foreground/80">
                      <span className="text-[var(--l-accent)]">status</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      {index === 0
                        ? '"awaiting_review"'
                        : index === 1
                          ? '"details_available"'
                          : '"context_persisted"'}
                    </p>
                  </div>
                </article>
              );
            })}

            <div
              data-gsap="showcase-tail"
              className="relative ml-10 border-l-2 border-[var(--l-spectrum-1)] bg-[var(--l-surface)]/70 p-6 backdrop-blur-lg"
            >
              <div className="flex items-center gap-2 text-[var(--l-accent)]">
                <Sparkles className="size-4" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]">
                  {copy.toneEyebrow}
                </p>
              </div>
              <p className="mt-3 text-base leading-7 text-foreground/80">
                {copy.toneText}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-[var(--l-line)] pt-10 lg:grid-cols-[0.42fr_0.58fr]">
          <p
            data-gsap="showcase-tail"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--l-accent)]"
          >
            {copy.humanLoopEyebrow}
          </p>
          <div>
            <h3
              data-gsap="showcase-tail"
              className="font-heading text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl"
            >
              {copy.tailTitle}
            </h3>
            <p
              data-gsap="showcase-tail"
              className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.tailDescription}
            </p>
            <p
              data-gsap="showcase-tail"
              className="mt-5 max-w-2xl font-mono text-xs leading-6 text-[var(--l-accent)]"
            >
              // {copy.humanLoopText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
