import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import type { LandingCopy } from "@/language/landing-copy";
import { Button } from "@/components/ui/button";
import { siteRoutes } from "@/utils/constants/site-routes";

type LandingHeroProps = {
  copy: LandingCopy["hero"];
};

export default function LandingHero({ copy }: LandingHeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      <div aria-hidden className="landing-aurora" />
      <div
        aria-hidden
        data-gsap-drift="hero-left"
        className="pointer-events-none absolute -left-24 top-24 h-104 w-104 rounded-full bg-[radial-gradient(circle,var(--l-glow-a),transparent_70%)] blur-[140px]"
      />
      <div
        aria-hidden
        data-gsap-drift="hero-right"
        className="pointer-events-none absolute -right-24 -top-20 h-104 w-104 rounded-full bg-[radial-gradient(circle,var(--l-glow-b),transparent_70%)] blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-[58%] rounded-full bg-[radial-gradient(circle,var(--l-glow-center),transparent_68%)] blur-[90px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div
            data-gsap="hero-item"
            data-hero="badge"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--l-surface)] px-4 py-1.5 shadow-[0_0_0_1px_var(--l-line),0_6px_20px_oklch(from_var(--l-shadow)_l_c_h/0.1)] backdrop-blur-md"
          >
            <Sparkles className="size-3.5 text-[var(--l-accent)]" />
            <span className="text-xs font-semibold text-[var(--l-accent)]">
              {copy.badge}
            </span>
          </div>

          <h1
            data-gsap="hero-item"
            data-hero="title"
            className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.06]"
          >
            <span data-hero-seg>{copy.titleLead}</span>{" "}
            <span className="landing-gradient-text relative inline-block">
              <span data-hero-seg>{copy.titleHighlight}</span>
              <svg
                aria-hidden
                className="pointer-events-none absolute -bottom-[0.14em] left-0 h-[0.22em] w-full overflow-visible"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  data-hero-swash
                  d="M3 14 C 42 19, 88 4, 122 9 C 152 13.5, 178 10, 197 6.5"
                  stroke="url(#landing-hero-swash-grad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="landing-hero-swash-grad"
                    x1="0"
                    y1="0"
                    x2="200"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="var(--l-spectrum-1)" />
                    <stop offset="0.5" stopColor="var(--l-spectrum-2)" />
                    <stop offset="1" stopColor="var(--l-spectrum-3)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br className="hidden sm:block" />{" "}
            <span data-hero-seg>{copy.titleTail}</span>
          </h1>

          <p
            data-gsap="hero-item"
            data-hero="copy"
            className="max-w-[720px] text-balance text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            {copy.description}
          </p>

          <div
            data-gsap="hero-item"
            data-hero="ctas"
            className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:w-auto sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="landing-btn-shimmer h-12 w-full rounded-full border-0 bg-[linear-gradient(135deg,var(--l-btn-from),var(--l-btn-to))] px-8 text-sm font-semibold text-[var(--l-btn-fg)] shadow-[0_18px_42px_var(--l-btn-shadow)] transition-[translate] duration-200 hover:-translate-y-0.5 sm:w-auto"
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
              className="h-12 w-full rounded-full border-[var(--l-line)] bg-[var(--l-surface)] px-8 text-sm font-semibold text-foreground transition-colors hover:border-[var(--l-accent)] sm:w-auto"
            >
              <Link href={siteRoutes.capabilities} data-magnetic>
                {copy.secondaryCta}
              </Link>
            </Button>
          </div>

          <div
            data-gsap="hero-item"
            data-hero="signals"
            className="landing-glass-card mt-8 grid w-full max-w-4xl gap-0 overflow-hidden rounded-[2rem] text-left sm:grid-cols-3"
          >
            {copy.signals.map((signal, index) => (
              <div
                key={signal.value}
                data-gsap="hero-signal"
                className={`px-6 py-5 sm:px-6 sm:py-6 ${
                  index > 0
                    ? "border-t border-border/70 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <div className="mb-1 flex items-center gap-2">
                  <span className="h-0.5 w-5 rounded-full bg-[linear-gradient(90deg,var(--l-spectrum-4),var(--l-spectrum-1))]" />
                  <p className="text-lg font-bold tracking-tight text-[var(--l-accent)] sm:text-xl">
                    {signal.value}
                  </p>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Link
          href={siteRoutes.product}
          aria-label={copy.scrollAriaLabel}
          data-gsap="hero-item"
          data-hero="chevron"
          className="mt-12 inline-flex items-center justify-center text-muted-foreground"
        >
          <ChevronDown data-gsap-loop="hero-scroll" className="size-6" />
        </Link>
      </div>
    </section>
  );
}
