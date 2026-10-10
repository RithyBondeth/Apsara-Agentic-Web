import { ArrowRight, ChevronDown, TerminalSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import KhmerOrnament from "@/components/landing/khmer-ornament";
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
        <span className="landing-syntax-violet">from</span>{" "}
        <span className="text-white/85">fastapi</span>{" "}
        <span className="landing-syntax-violet">import</span>{" "}
        <span className="landing-syntax-blue">FastAPI</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="text-white/85">app</span>{" "}
        <span className="text-white/45">=</span>{" "}
        <span className="landing-syntax-blue">FastAPI</span>
        <span className="text-white/45">()</span>
      </>
    ),
  },
  {
    content: (
      <span className="text-white/25"># a small change, ready for review</span>
    ),
  },
  {
    content: (
      <>
        <span className="landing-syntax-pink">@app.get</span>
        <span className="text-white/45">(</span>
        <span className="landing-syntax-green">&quot;/health&quot;</span>
        <span className="text-white/45">)</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="landing-syntax-violet">def</span>{" "}
        <span className="landing-syntax-cyan">health</span>
        <span className="text-white/45">():</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="pl-5 landing-syntax-violet">return</span>{" "}
        <span className="text-white/45">{"{"}</span>
        <span className="landing-syntax-green">&quot;status&quot;</span>
        <span className="text-white/45">: </span>
        <span className="landing-syntax-green">&quot;ok&quot;</span>
        <span className="text-white/45">{"}"}</span>
      </>
    ),
  },
];

export default function LandingHero({ copy }: LandingHeroProps) {
  return (
    <section
      id="hero"
      className="landing-preserved-hero relative flex min-h-[95svh] items-center overflow-hidden border-b border-[var(--l-line)]"
    >
      <KhmerOrnament variant="divider" className="heritage-section-divider" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-16">
          <div data-hero-copy className="relative">
            <div
              data-gsap="hero-item"
              data-hero="badge"
              className="inline-flex items-center gap-2 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--l-accent)] sm:text-xs"
            >
              <span className="size-1.5 rounded-full bg-[var(--l-accent)]" />
              {copy.badge}
            </div>

            <h1
              data-gsap="hero-item"
              data-hero="title"
              className="font-heading mt-7 max-w-full text-[clamp(2.8rem,4.85vw,5.2rem)] font-extrabold leading-[0.96] tracking-[-0.05em] text-foreground"
            >
              <span data-hero-seg>
                <span data-hero-line>{copy.titleLead}</span>
              </span>{" "}
              <span className="landing-gradient-text relative inline-block">
                <span data-hero-seg>
                  <span data-hero-line>{copy.titleHighlight}</span>
                </span>
              </span>{" "}
              <span data-hero-seg>
                <span data-hero-line>{copy.titleTail}</span>
              </span>
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
                <Link href={siteRoutes.install} data-magnetic>
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
              lang="en"
              className="mt-6 inline-flex max-w-full items-center gap-3 border-l-2 border-[var(--l-spectrum-1)] bg-[var(--l-surface)]/55 px-4 py-3 font-mono text-xs text-muted-foreground backdrop-blur-lg"
            >
              <span className="text-[var(--l-spectrum-1)]">$</span>
              <code className="truncate text-foreground/80">
                cd your-project && apsara
              </code>
              <span className="landing-terminal-caret" aria-hidden>
                _
              </span>
            </div>
          </div>

          <div
            data-gsap="hero-stage"
            data-hero-stage
            className="landing-editor-stage relative mx-auto w-full max-w-2xl lg:mx-0"
          >
            <div className="relative" data-hero-scroll>
              <div
                className="heritage-hero-aura"
                data-hero-aura
                aria-hidden="true"
              />
              <div className="heritage-hero-frame" data-hero-frame>
                <KhmerOrnament variant="arch" />
              </div>
              <div data-code-orbit="makor" className="landing-makor-companion">
                <Image
                  src="/assets/makor/mascot.png"
                  alt="Makor, Apsara’s gold pixel coding companion"
                  width={240}
                  height={160}
                  sizes="(max-width: 640px) 140px, 180px"
                  preload
                  className="landing-makor-float"
                />
                <span className="landing-makor-caption">
                  Makor{" "}
                  <span className="landing-terminal-caret" aria-hidden>
                    _
                  </span>
                </span>
              </div>
              <div
                className="landing-editor-shell relative overflow-hidden rounded-xl"
                data-hero-depth
                lang="en"
              >
                <div className="flex items-center justify-between border-b border-white/9 bg-[#181c25] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                    <span className="size-2.5 rounded-full bg-[#fad88f]" />
                    <span className="size-2.5 rounded-full bg-[#6096fa]" />
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">
                    <TerminalSquare className="size-3.5" />
                    apsara runtime
                  </div>
                </div>

                <div className="grid min-h-[360px] grid-cols-[56px_1fr] sm:grid-cols-[132px_1fr]">
                  <aside
                    aria-hidden
                    className="border-r border-white/8 bg-[#151922] px-3 py-4 font-mono text-[10px] text-white/38"
                  >
                    <p className="mb-3 hidden uppercase tracking-[0.18em] text-white/25 sm:block">
                      Explorer
                    </p>
                    <div className="space-y-2">
                      <p className="text-white/58">▾ src</p>
                      <p className="pl-2 text-[#6096fa] sm:pl-3">
                        PY routes.py
                      </p>
                      <p className="pl-2 sm:pl-3">PY tools.py</p>
                      <p className="pl-2 sm:pl-3">PY verify.py</p>
                      <p>▸ tests</p>
                      <p className="hidden sm:block">◇ pyproject.toml</p>
                    </div>
                  </aside>

                  <div className="min-w-0 bg-[#12151d]">
                    <div className="flex border-b border-white/8 bg-[#181c25] font-mono text-[10px] text-white/48">
                      <span
                        data-editor-tab
                        className="border-r border-white/8 bg-[#12151d] px-4 py-2.5 text-[#6096fa]"
                      >
                        routes.py
                      </span>
                      <span className="hidden px-4 py-2.5 sm:block">
                        verify.py
                      </span>
                    </div>

                    <div
                      role="img"
                      aria-label="An illustrative Python health endpoint prepared for review"
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

                    <div className="absolute bottom-0 left-[56px] right-0 border-t border-white/9 bg-[#151922] p-3 sm:left-[132px] sm:p-4">
                      <span
                        className="landing-editor-progress"
                        data-hero-progress
                        aria-hidden="true"
                      />
                      <div
                        data-runtime-pulse
                        data-hero-result
                        className="flex items-start gap-3 font-mono text-[10px] leading-5 sm:text-[11px]"
                      >
                        <span
                          data-hero-check
                          className="mt-1 flex size-5 shrink-0 items-center justify-center rounded bg-[#fad88f]/12 text-[#fad88f]"
                        >
                          ✓
                        </span>
                        <div className="min-w-0">
                          <p className="text-white/72">
                            Patch prepared · 1 file changed
                          </p>
                          <p className="truncate text-white/30">
                            Review the diff before applying the patch
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          {copy.scrollAriaLabel}
          <ChevronDown data-gsap-loop="hero-scroll" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
