import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { Button } from "@/components/ui/button";
import { siteRoutes } from "@/utils/constants/site-routes";
import { cn } from "@/lib/utils";

type LandingCtaProps = {
  copy: LandingCopy["cta"];
  locale: LandingLocale;
  primaryHref?: string;
  secondaryHref?: string;
};

export default function LandingCta({
  copy,
  locale,
  primaryHref = siteRoutes.product,
  secondaryHref = "/#top",
}: LandingCtaProps) {
  const eyebrowClassName = cn(
    locale === "km"
      ? "text-[0.82rem] font-semibold text-[var(--l-accent)]"
      : "landing-eyebrow",
  );

  return (
    <section
      id="cta"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:scroll-mt-28 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-25"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="landing-cta-surface relative overflow-hidden rounded-xl px-7 py-16 text-center sm:px-14 sm:py-24">
          <span aria-hidden className="landing-cta-ring" />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,var(--l-glow-a),transparent_70%)] blur-[60px]"
          />
          <div className="relative">
            <p data-gsap="cta-head" className={eyebrowClassName}>
              {copy.eyebrow}
            </p>
            <h2
              data-gsap="cta-head"
              className="font-heading mx-auto mt-5 max-w-4xl text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl md:text-6xl"
            >
              {copy.titleLead}{" "}
              <span className="landing-gradient-text">
                {copy.titleHighlight}
              </span>
              {copy.titleTail}
            </h2>
            <p
              data-gsap="cta-head"
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.description}
            </p>

            <div
              data-gsap="cta-actions"
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="landing-btn-shimmer h-12 w-full rounded-lg border-0 bg-[linear-gradient(135deg,var(--l-btn-from),var(--l-btn-to))] px-10 font-mono text-xs font-semibold uppercase tracking-widest text-(--l-btn-fg) shadow-[0_20px_48px_var(--l-btn-shadow)] transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                <Link href={primaryHref}>
                  {copy.primaryCta}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-lg border-(--l-line) bg-(--l-surface) px-10 font-mono text-xs font-semibold uppercase tracking-widest text-foreground transition-all hover:border-(--l-accent) sm:w-auto"
              >
                <Link href={secondaryHref}>{copy.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
