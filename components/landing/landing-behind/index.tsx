import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UserRound, TerminalSquare } from "lucide-react";
import KhmerOrnament from "@/components/landing/khmer-ornament";
import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { siteRoutes } from "@/utils/constants/site-routes";
import { cn } from "@/lib/utils";

type LandingBehindProps = {
  copy: LandingCopy["behind"];
  locale: LandingLocale;
};

export default function LandingBehind({ copy, locale }: LandingBehindProps) {
  const eyebrowClassName = cn(
    locale === "km"
      ? "text-[0.82rem] font-semibold text-[var(--l-accent)]"
      : "landing-eyebrow",
  );

  return (
    <section
      id="behind-apsara"
      aria-labelledby="behind-apsara-title"
      className="relative scroll-mt-24 border-b border-[var(--l-line)] py-20 sm:scroll-mt-28 sm:py-24 lg:py-28"
    >
      <KhmerOrnament variant="divider" className="heritage-section-divider" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <p data-gsap="behind-head" className={eyebrowClassName}>
            {copy.eyebrow}
          </p>
          <div>
            <h2
              id="behind-apsara-title"
              data-gsap="behind-head"
              className="font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {copy.title}
            </h2>
            <p
              data-gsap="behind-head"
              className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.description}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <article
            data-gsap="behind-mascot"
            className="landing-behind-card landing-behind-mascot relative min-w-0 overflow-hidden p-6 sm:p-8 lg:col-span-7"
            aria-labelledby="meet-makor-title"
          >
            <KhmerOrnament variant="corner" className="heritage-card-corner" />
            <p className={eyebrowClassName}>{copy.mascot.eyebrow}</p>
            <h3
              id="meet-makor-title"
              className="font-heading mt-4 text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl"
            >
              {copy.mascot.title}
            </h3>
            <div className="mt-8 grid items-center gap-7 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <figure>
                <Image
                  src="/assets/makor/mascot.png"
                  alt={copy.mascot.imageAlt}
                  width={480}
                  height={320}
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 24vw"
                  className="landing-makor-pixel mx-auto h-auto w-full max-w-[480px]"
                />
                <figcaption className="mt-3 text-center text-sm leading-7 text-muted-foreground">
                  {copy.mascot.caption}
                </figcaption>
              </figure>
              <div>
                <p className="text-base leading-8 text-muted-foreground">
                  {copy.mascot.description}
                </p>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {copy.mascot.activityDescription}
                </p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--l-line)] pt-5 text-sm text-muted-foreground">
              <span>{copy.mascot.motionLabel}</span>
              <code
                lang="en"
                className="inline-flex items-center gap-2 font-mono text-xs text-[var(--l-accent)]"
              >
                <TerminalSquare aria-hidden="true" className="size-4" />
                /mascot still
              </code>
            </div>
          </article>

          <article
            data-gsap="behind-developer"
            aria-labelledby="developer-title"
            className="landing-behind-card relative flex min-w-0 flex-col overflow-hidden p-6 sm:p-8 lg:col-span-5"
          >
            <KhmerOrnament variant="corner" className="heritage-card-corner" />
            <p className={eyebrowClassName}>{copy.developer.eyebrow}</p>
            <div className="mt-10 flex items-center gap-5">
              <span
                aria-hidden="true"
                className="landing-developer-monogram flex size-16 shrink-0 items-center justify-center font-heading text-3xl font-bold"
              >
                B
              </span>
              <div className="min-w-0">
                <h3
                  id="developer-title"
                  lang="en"
                  className="font-heading text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl"
                >
                  {copy.developer.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {copy.developer.role}
                </p>
              </div>
            </div>
            <p className="mt-8 text-base leading-8 text-muted-foreground">
              {copy.developer.description}
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {copy.developer.invitation}
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 border-t border-[var(--l-line)] pt-6 lg:mt-auto lg:pt-8">
              <Link
                href={siteRoutes.developer}
                className="inline-flex items-center gap-3 text-sm font-semibold leading-7 text-[var(--l-accent)] underline-offset-4 hover:underline"
              >
                <UserRound aria-hidden="true" className="size-5 shrink-0" />
                {copy.developer.profileLabel}
                <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
              </Link>
              <Link
                href={siteRoutes.github}
                className="inline-flex items-center gap-3 text-sm font-semibold leading-7 text-foreground underline-offset-4 hover:underline"
              >
                {copy.developer.sourceLabel}
                <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
