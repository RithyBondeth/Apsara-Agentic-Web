import {
  Activity,
  Code2,
  Eye,
  GitBranch,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import dynamic from "next/dynamic";
import LandingRailVisual from "@/components/landing/landing-rail-visual";
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
const telemetryBars = [38, 56, 44, 74, 61, 88, 66, 48, 79, 58, 91, 70];

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
      className="relative scroll-mt-24 overflow-clip border-b border-[var(--l-line)] pb-14 pt-16 sm:scroll-mt-28 sm:pb-16 sm:pt-20 lg:pb-16 lg:pt-24"
    >
      <div aria-hidden className="landing-code-grid absolute inset-0 opacity-55" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-[28%] size-[34rem] rounded-full bg-[radial-gradient(circle,var(--l-glow-a),transparent_70%)] blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-[var(--l-line)] pb-8 lg:grid-cols-[0.42fr_0.58fr] lg:pb-10">
          <div className="flex h-full flex-col items-start justify-between gap-8">
            <LandingRailVisual
              code="agent.loop"
              icon={Code2}
              labelLead="Apsara"
              labelTail="Agentic"
              motion="showcase-head"
            />
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
          </div>
          <div className="self-end">
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

            <aside className="landing-session-telemetry mt-5 overflow-hidden rounded-xl border border-[var(--l-line)] bg-[var(--l-surface)]/78 p-5 shadow-[inset_0_1px_0_var(--l-inset),0_24px_70px_oklch(from_var(--l-shadow)_l_c_h_/_0.1)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--l-spectrum-1)] opacity-45" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-[var(--l-spectrum-1)]" />
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground">
                    Session telemetry
                  </span>
                </div>
                <span className="rounded-full border border-[var(--l-line)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--l-accent)]">
                  Live
                </span>
              </div>

              <div
                aria-hidden
                className="mt-5 flex h-14 items-end gap-1.5 border-b border-[var(--l-line)] px-1"
              >
                {telemetryBars.map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    data-telemetry-bar
                    className="min-w-0 flex-1 rounded-t-[2px] bg-[linear-gradient(180deg,var(--l-spectrum-3),var(--l-spectrum-1))] opacity-75"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--l-line)] bg-[var(--l-line)] font-mono">
                <div className="bg-[var(--l-ground)] p-3.5">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    Workspace
                  </p>
                  <p className="mt-2 text-xs font-semibold text-foreground">
                    ./repo
                  </p>
                </div>
                <div className="bg-[var(--l-ground)] p-3.5">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    Tools
                  </p>
                  <p className="mt-2 text-xs font-semibold text-foreground">
                    06 bounded
                  </p>
                </div>
                <div className="bg-[var(--l-ground)] p-3.5">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    Diff
                  </p>
                  <p className="mt-2 text-xs font-semibold text-foreground">
                    2 staged
                  </p>
                </div>
                <div className="bg-[var(--l-ground)] p-3.5">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    Gate
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[var(--l-accent)]">
                    <Activity className="size-3" />
                    review
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                <span>context retained</span>
                <span className="text-foreground">74%</span>
              </div>
            </aside>
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

        <div className="mt-14 grid gap-6 border-t border-[var(--l-line)] pt-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex h-full flex-col items-start justify-between gap-5">
            <p
              data-gsap="showcase-tail"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--l-accent)]"
            >
              {copy.humanLoopEyebrow}
            </p>
            <LandingRailVisual
              code="review.gate"
              compact
              icon={ShieldCheck}
              labelLead="Human"
              labelTail="Approved"
              motion="showcase-tail"
            />
          </div>
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
