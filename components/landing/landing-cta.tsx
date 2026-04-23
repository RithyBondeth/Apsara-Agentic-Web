import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LandingCopy, LandingLocale } from "@/components/landing/landing-copy";
import { Button } from "@/components/ui/button";
import { siteRoutes } from "@/lib/site-routes";
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
      ? "text-[0.82rem] font-semibold text-[oklch(0.54_0.11_68)]"
      : "landing-eyebrow"
  );

  return (
    <section
      id="cta"
      className="relative scroll-mt-28 overflow-hidden py-20 sm:scroll-mt-32 sm:py-28 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.11_78_/_0.18),transparent_72%)] blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p data-gsap="cta-head" className={eyebrowClassName}>
          {copy.eyebrow}
        </p>
        <h2
          data-gsap="cta-head"
          className="font-heading mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          {copy.titleLead}{" "}
          <span className="landing-gradient-text">{copy.titleHighlight}</span>
          {copy.titleTail}
        </h2>
        <p
          data-gsap="cta-head"
          className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
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
            className="h-12 w-full rounded-full border-0 bg-[linear-gradient(135deg,oklch(0.58_0.15_67),oklch(0.67_0.14_74))] px-10 text-sm font-semibold text-white shadow-[0_18px_42px_oklch(0.67_0.14_74_/_0.24)] transition-transform hover:-translate-y-0.5 sm:w-auto"
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
            className="h-12 w-full rounded-full border-[oklch(0.86_0.016_84)] bg-white/70 px-10 text-sm font-semibold text-foreground transition-colors hover:bg-white sm:w-auto"
          >
              <Link href={secondaryHref}>{copy.secondaryCta}</Link>
          </Button>
          </div>
        </div>
    </section>
  );
}
