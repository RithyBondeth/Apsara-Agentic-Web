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
      ? "text-[0.82rem] font-semibold text-[oklch(0.54_0.11_68)]"
      : "landing-eyebrow",
  );

  return (
    <section
      id="cta"
      className="relative scroll-mt-28 overflow-hidden py-20 sm:scroll-mt-32 sm:py-28 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-25"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="landing-cta-surface relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-14 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,oklch(0.80_0.13_76/0.28),transparent_70%)] blur-[60px]"
          />
          <div className="relative">
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
                className="h-12 w-full rounded-full border-0 bg-[linear-gradient(135deg,oklch(0.56_0.17_65),oklch(0.66_0.16_73))] px-10 text-sm font-semibold text-white shadow-[0_20px_48px_oklch(0.62_0.16_70/0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_56px_oklch(0.62_0.16_70/0.40)] sm:w-auto"
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
                className="h-12 w-full rounded-full border-[oklch(0.84_0.018_80)] bg-white/80 px-10 text-sm font-semibold text-foreground transition-all hover:bg-white hover:shadow-[0_8px_24px_oklch(0.34_0.02_248/0.06)] sm:w-auto"
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
