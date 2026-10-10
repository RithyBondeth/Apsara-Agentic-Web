import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import KhmerOrnament from "@/components/landing/khmer-ornament";
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
  primaryHref = siteRoutes.install,
  secondaryHref = siteRoutes.capabilities,
}: LandingCtaProps) {
  const eyebrowClassName = cn(
    locale === "km"
      ? "text-[0.82rem] font-semibold text-[var(--l-accent)]"
      : "landing-eyebrow",
  );

  return (
    <section
      id="cta"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-16 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="landing-cta-surface relative overflow-hidden rounded-xl px-7 py-16 text-center sm:px-14 sm:py-16">
          <div className="heritage-cta-halo" aria-hidden="true" />
          <KhmerOrnament
            variant="corner"
            className="heritage-cta-corner heritage-cta-corner-left"
          />
          <KhmerOrnament
            variant="corner"
            className="heritage-cta-corner heritage-cta-corner-right"
          />
          <div className="relative">
            <KhmerOrnament variant="lotus" className="heritage-cta-lotus" />
            <Image
              src="/assets/makor/terminal-sprite.svg"
              alt="Makor pixel mascot"
              width={144}
              height={96}
              unoptimized
              className="landing-cta-makor landing-makor-float mx-auto mb-8"
            />
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
                <Link href={primaryHref} data-magnetic>
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
                <Link href={secondaryHref} data-magnetic>
                  {copy.secondaryCta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
