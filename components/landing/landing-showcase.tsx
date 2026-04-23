import {
  Eye,
  GitBranch,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import type { LandingCopy, LandingLocale } from "@/components/landing/landing-copy";
import LandingShowcaseTerminal from "@/components/landing/landing-showcase-terminal";
import { cn } from "@/lib/utils";

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
      ? "text-[0.82rem] font-semibold text-[oklch(0.54_0.11_68)]"
      : "landing-eyebrow"
  );
  const shellLabelClassName = cn(
    "font-semibold text-white/65",
    locale === "km"
      ? "text-xs tracking-normal"
      : "text-[11px] uppercase tracking-[0.28em]"
  );
  const noteEyebrowClassName = cn(
    "font-semibold text-white/55",
    locale === "km"
      ? "text-xs tracking-normal"
      : "text-[11px] uppercase tracking-[0.28em]"
  );

  return (
    <section
      id="showcase"
      className="relative scroll-mt-28 overflow-hidden py-20 sm:scroll-mt-32 sm:py-28 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-45"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8rem] top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.76_0.11_76_/_0.12),transparent_72%)] blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p data-gsap="showcase-head" className={eyebrowClassName}>
          {copy.eyebrow}
        </p>
        <h2
          data-gsap="showcase-head"
          className="font-heading mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          {copy.title}
        </h2>
        <p
          data-gsap="showcase-head"
          className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
        >
          {copy.description}
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          data-gsap="showcase-shell"
          className="landing-terminal-shell relative overflow-hidden rounded-[2rem] p-5 text-white sm:p-7"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.74_0.1_76_/_0.12),transparent_30%),radial-gradient(circle_at_bottom_left,oklch(0.61_0.08_206_/_0.15),transparent_36%)]"
          />
          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#f87171]" />
                <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                <span className="size-2.5 rounded-full bg-[#4ade80]" />
              </div>
              <div
                className={cn(
                  "flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1",
                  shellLabelClassName
                )}
              >
                <TerminalSquare className="size-3.5" />
                {copy.sessionLabel}
              </div>
            </div>

            <div className="grid gap-6 pt-6 lg:grid-cols-[1.2fr_0.8fr]">
              <LandingShowcaseTerminal key={locale} copy={copy.terminal} />

              <div className="space-y-3">
                <div
                  data-gsap="showcase-note"
                  className="rounded-[1.5rem] border border-white/10 bg-white/7 p-5"
                >
                  <p className={noteEyebrowClassName}>
                    {copy.whyEyebrow}
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-tight text-white">
                    {copy.whyTitle}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/68">
                    {copy.whyDescription}
                  </p>
                </div>

                {copy.notes.map((note, index) => {
                  const Icon = productNoteIcons[index];

                  if (!Icon) {
                    return null;
                  }

                  return (
                    <div
                      key={note.title}
                      data-gsap="showcase-note"
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-2xl bg-white/10 text-[oklch(0.82_0.09_77)]">
                          <Icon className="size-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {note.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/65">
                            {note.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          data-gsap-float="soft"
          className="landing-glass-card absolute -left-2 top-36 hidden max-w-52 rounded-[1.5rem] p-4 xl:block"
        >
          <p
            className={cn(
              eyebrowClassName,
              locale === "km" ? "!text-[0.76rem]" : "!text-[10px]"
            )}
          >
            {copy.humanLoopEyebrow}
          </p>
          <p className="mt-3 text-sm leading-6 text-foreground/80">
            {copy.humanLoopText}
          </p>
        </div>

        <div
          data-gsap-float="delayed"
          className="absolute -right-2 bottom-12 hidden rounded-[1.5rem] border border-[oklch(0.84_0.06_78_/_0.7)] bg-[oklch(0.98_0.016_82_/_0.92)] p-4 shadow-[0_18px_45px_oklch(0.44_0.06_76_/_0.12)] xl:block"
        >
          <div className="flex items-center gap-2 text-[oklch(0.52_0.11_68)]">
            <Sparkles className="size-4" />
            <p
              className={cn(
                "font-semibold",
                locale === "km"
                  ? "text-xs tracking-normal"
                  : "text-[11px] uppercase tracking-[0.28em]"
              )}
            >
              {copy.toneEyebrow}
            </p>
          </div>
          <p className="mt-2 max-w-48 text-sm leading-6 text-[oklch(0.28_0.03_248)]">
            {copy.toneText}
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h3
          data-gsap="showcase-tail"
          className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          {copy.tailTitle}
        </h3>
        <p
          data-gsap="showcase-tail"
          className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg"
        >
          {copy.tailDescription}
        </p>
      </div>
    </section>
  );
}
