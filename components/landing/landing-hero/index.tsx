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
      <div
        aria-hidden
        data-gsap-drift="hero-left"
        className="pointer-events-none absolute -left-24 top-24 h-104 w-104 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.11_78/0.28),transparent_70%)] blur-[140px]"
      />
      <div
        aria-hidden
        data-gsap-drift="hero-right"
        className="pointer-events-none absolute -right-24 -top-20 h-104 w-104 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.1_72/0.18),transparent_70%)] blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-[58%] rounded-full bg-[radial-gradient(circle,oklch(0.84_0.12_76/0.20),transparent_68%)] blur-[90px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div
            data-gsap="hero-item"
            className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.99_0.012_82/0.92)] px-4 py-1.5 shadow-[0_0_0_1px_oklch(0.80_0.10_74/0.55),0_6px_20px_oklch(0.62_0.14_72/0.18)] backdrop-blur-md"
          >
            <Sparkles className="size-3.5 text-[oklch(0.54_0.17_66)]" />
            <span className="text-xs font-semibold text-[oklch(0.42_0.10_66)]">
              {copy.badge}
            </span>
          </div>

          <h1
            data-gsap="hero-item"
            className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.06]"
          >
            {copy.titleLead}{" "}
            <span className="landing-gradient-text">{copy.titleHighlight}</span>
            <br className="hidden sm:block" />
            {copy.titleTail}
          </h1>

          <p
            data-gsap="hero-item"
            className="max-w-[720px] text-balance text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            {copy.description}
          </p>

          <div
            data-gsap="hero-item"
            className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:w-auto sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full border-0 bg-[linear-gradient(135deg,oklch(0.58_0.15_67),oklch(0.67_0.14_74))] px-8 text-sm font-semibold text-white shadow-[0_18px_42px_oklch(0.67_0.14_74/0.24)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Link href={siteRoutes.product}>
                {copy.primaryCta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-[oklch(0.86_0.016_84)] bg-white/70 px-8 text-sm font-semibold text-foreground transition-colors hover:bg-white sm:w-auto"
            >
              <Link href={siteRoutes.capabilities}>{copy.secondaryCta}</Link>
            </Button>
          </div>

          <div
            data-gsap="hero-item"
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
                  <span className="h-0.5 w-5 rounded-full bg-[linear-gradient(90deg,oklch(0.58_0.15_67),oklch(0.72_0.13_76))]" />
                  <p className="text-lg font-bold tracking-tight text-[oklch(0.44_0.12_66)] sm:text-xl">
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
          data-gsap-loop="hero-scroll"
          className="mt-12 inline-flex items-center justify-center text-muted-foreground"
        >
          <ChevronDown className="size-6" />
        </Link>
      </div>
    </section>
  );
}
