import {
  ArrowRight,
  Check,
  ChevronDown,
  Copy,
  GitBranch,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import Link from "next/link";
import type { LandingCopy } from "@/language/landing-copy";
import { Button } from "@/components/ui/button";
import { siteRoutes } from "@/utils/constants/site-routes";

type LandingHeroProps = {
  copy: LandingCopy["hero"];
};

const codeLines = [
  {
    content: (
      <>
        <span className="landing-syntax-violet">const</span>{" "}
        <span className="landing-syntax-blue">agent</span>{" "}
        <span className="text-white/45">=</span>{" "}
        <span className="landing-syntax-blue">await</span>{" "}
        <span className="text-white/85">apsara</span>
        <span className="text-white/45">.</span>
        <span className="landing-syntax-cyan">inside</span>
        <span className="text-white/45">(</span>
        <span className="landing-syntax-green">&quot;./repo&quot;</span>
        <span className="text-white/45">);</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="landing-syntax-violet">const</span>{" "}
        <span className="landing-syntax-blue">plan</span>{" "}
        <span className="text-white/45">=</span>{" "}
        <span className="landing-syntax-blue">await</span>{" "}
        <span className="text-white/85">agent</span>
        <span className="text-white/45">.</span>
        <span className="landing-syntax-cyan">trace</span>
        <span className="text-white/45">({"{"}</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="pl-5 landing-syntax-pink">intent</span>
        <span className="text-white/45">:</span>{" "}
        <span className="landing-syntax-green">
          &quot;refactor approval flow&quot;
        </span>
        <span className="text-white/45">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="pl-5 landing-syntax-pink">guardrail</span>
        <span className="text-white/45">:</span>{" "}
        <span className="landing-syntax-green">
          &quot;human-review&quot;
        </span>
      </>
    ),
  },
  {
    content: <span className="text-white/45">{"});"}</span>,
  },
  {
    content: (
      <>
        <span className="landing-syntax-violet">return</span>{" "}
        <span className="text-white/85">plan</span>
        <span className="text-white/45">.</span>
        <span className="landing-syntax-cyan">review</span>
        <span className="text-white/45">();</span>
      </>
    ),
  },
];

const marqueeItems = [
  "WORKSPACE SCOPED",
  "DIFF FIRST",
  "HUMAN APPROVED",
  "SESSION AWARE",
  "PROJECT LOCAL",
];

export default function LandingHero({ copy }: LandingHeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[112svh] items-center overflow-hidden border-b border-[var(--l-line)]"
    >
      <div aria-hidden data-hero-grid className="landing-code-grid absolute inset-0" />
      <div aria-hidden className="landing-aurora" />
      <div
        aria-hidden
        data-gsap-drift="hero-left"
        className="pointer-events-none absolute -left-40 top-12 size-[34rem] rounded-full bg-[radial-gradient(circle,var(--l-glow-a),transparent_70%)] blur-[150px]"
      />
      <div
        aria-hidden
        data-gsap-drift="hero-right"
        className="pointer-events-none absolute -right-40 top-20 size-[38rem] rounded-full bg-[radial-gradient(circle,var(--l-glow-b),transparent_70%)] blur-[180px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-36 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-16">
          <div data-hero-copy className="relative">
            <div
              data-gsap="hero-item"
              data-hero="badge"
              className="inline-flex items-center gap-2 border border-[var(--l-line)] bg-[var(--l-surface)]/72 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--l-accent)] shadow-[0_10px_40px_oklch(from_var(--l-shadow)_l_c_h/0.14)] backdrop-blur-xl sm:text-xs"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--l-spectrum-1)] opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-[var(--l-spectrum-1)]" />
              </span>
              {copy.badge}
            </div>

            <h1
              data-gsap="hero-item"
              data-hero="title"
              className="font-heading mt-7 max-w-[14ch] text-[clamp(2.8rem,4.85vw,5.2rem)] font-extrabold leading-[0.96] tracking-[-0.05em] text-foreground"
            >
              <span data-hero-seg>{copy.titleLead}</span>{" "}
              <span className="landing-gradient-text relative inline-block">
                <span data-hero-seg>{copy.titleHighlight}</span>
              </span>{" "}
              <span data-hero-seg>{copy.titleTail}</span>
            </h1>

            <p
              data-gsap="hero-item"
              data-hero="copy"
              className="mt-7 max-w-2xl text-balance text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.description}
            </p>

            <div
              data-gsap="hero-item"
              data-hero="ctas"
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="landing-btn-shimmer h-12 w-full rounded-lg border-0 bg-[linear-gradient(135deg,var(--l-btn-from),var(--l-btn-to))] px-7 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--l-btn-fg)] shadow-[0_18px_42px_var(--l-btn-shadow)] transition-[translate] duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                <Link href={siteRoutes.product} data-magnetic>
                  {copy.primaryCta}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-lg border-[var(--l-line)] bg-[var(--l-surface)]/80 px-7 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-[var(--l-accent)] sm:w-auto"
              >
                <Link href={siteRoutes.capabilities} data-magnetic>
                  {copy.secondaryCta}
                </Link>
              </Button>
            </div>

            <div
              data-gsap="hero-item"
              data-hero="command"
              className="mt-6 inline-flex max-w-full items-center gap-3 border-l-2 border-[var(--l-spectrum-1)] bg-[var(--l-surface)]/55 px-4 py-3 font-mono text-xs text-muted-foreground backdrop-blur-lg"
            >
              <span className="text-[var(--l-spectrum-1)]">$</span>
              <code className="truncate text-foreground/80">
                npm i -g @apsara/cli
              </code>
              <Copy aria-hidden className="size-3.5 shrink-0 opacity-50" />
            </div>
          </div>

          <div
            data-gsap="hero-stage"
            data-hero-stage
            className="landing-editor-stage relative mx-auto w-full max-w-2xl lg:mx-0"
          >
            <div
              aria-hidden
              data-code-orbit="one"
              className="landing-orbit-chip absolute -left-8 top-[17%] z-20 hidden items-center gap-2 xl:flex"
            >
              <GitBranch className="size-3.5" />
              <span>branch/main</span>
            </div>
            <div
              aria-hidden
              data-code-orbit="two"
              className="landing-orbit-chip absolute -right-8 bottom-[17%] z-20 hidden items-center gap-2 xl:flex"
            >
              <Check className="size-3.5" />
              <span>review/ready</span>
            </div>

            <div className="landing-editor-shell relative overflow-hidden rounded-xl">
              <div aria-hidden data-code-scan className="landing-code-scan" />

              <div className="flex items-center justify-between border-b border-white/9 bg-[#12151b] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                  <span className="size-2.5 rounded-full bg-[#ffd166]" />
                  <span className="size-2.5 rounded-full bg-[#70e000]" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">
                  <TerminalSquare className="size-3.5" />
                  apsara runtime
                </div>
              </div>

              <div className="grid min-h-[440px] grid-cols-[56px_1fr] sm:grid-cols-[132px_1fr]">
                <aside
                  aria-hidden
                  className="border-r border-white/8 bg-[#0c0f13] px-3 py-4 font-mono text-[10px] text-white/38"
                >
                  <p className="mb-3 hidden uppercase tracking-[0.18em] text-white/25 sm:block">
                    Explorer
                  </p>
                  <div className="space-y-2">
                    <p className="text-white/58">▾ src</p>
                    <p className="pl-2 text-[#8b9cff] sm:pl-3">TS agent.ts</p>
                    <p className="pl-2 sm:pl-3">TS tools.ts</p>
                    <p className="pl-2 sm:pl-3">TS review.ts</p>
                    <p>▸ tests</p>
                    <p className="hidden sm:block">◇ package.json</p>
                  </div>
                </aside>

                <div className="min-w-0 bg-[#0a0d11]">
                  <div className="flex border-b border-white/8 bg-[#0f1217] font-mono text-[10px] text-white/48">
                    <span className="border-r border-white/8 bg-[#0a0d11] px-4 py-2.5 text-[#a9b4ff]">
                      agent.ts
                    </span>
                    <span className="hidden px-4 py-2.5 sm:block">review.ts</span>
                  </div>

                  <div
                    role="img"
                    aria-label="Apsara agent orchestration code example"
                    className="relative px-3 py-5 font-mono text-[11px] leading-7 sm:px-5 sm:text-xs"
                  >
                    {codeLines.map((line, index) => (
                      <div
                        key={index}
                        data-code-line
                        className="grid grid-cols-[24px_1fr] gap-2 whitespace-nowrap"
                      >
                        <span className="select-none text-right text-white/18">
                          {index + 1}
                        </span>
                        <code>{line.content}</code>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-[56px] right-0 border-t border-white/9 bg-[#0c0f13] p-3 sm:left-[132px] sm:p-4">
                    <div
                      data-runtime-pulse
                      className="flex items-start gap-3 font-mono text-[10px] leading-5 sm:text-[11px]"
                    >
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded bg-[#70e000]/12 text-[#9ef01a]">
                        ✓
                      </span>
                      <div className="min-w-0">
                        <p className="text-white/72">
                          Patch prepared · 2 files changed
                        </p>
                        <p className="truncate text-white/30">
                          Waiting for human approval before write
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="landing-editor-shadow" aria-hidden />
          </div>
        </div>

        <div
          data-gsap="hero-item"
          data-hero="signals"
          className="mt-16 grid border-y border-[var(--l-line)] sm:grid-cols-3"
        >
          {copy.signals.map((signal, index) => (
            <div
              key={signal.value}
              data-gsap="hero-signal"
              className={`relative px-5 py-5 sm:px-6 ${
                index > 0
                  ? "border-t border-[var(--l-line)] sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--l-accent)]">
                <span className="mr-2 text-[var(--l-spectrum-1)]">
                  0{index + 1}
                </span>
                {signal.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {signal.label}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="#showcase"
          aria-label={copy.scrollAriaLabel}
          data-gsap="hero-item"
          data-hero="chevron"
          className="mx-auto mt-10 flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          scroll to inspect
          <ChevronDown data-gsap-loop="hero-scroll" className="size-4" />
        </Link>
      </div>

      <div aria-hidden className="landing-code-marquee absolute inset-x-0 bottom-0">
        <div className="landing-code-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              <Sparkles className="size-3" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
