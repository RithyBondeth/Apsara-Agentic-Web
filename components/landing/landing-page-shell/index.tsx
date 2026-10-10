"use client";

import { startTransition, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LandingBehind from "@/components/landing/landing-behind";
import LandingCta from "@/components/landing/landing-cta";
import { landingCopy, type LandingLocale } from "@/language/landing-copy";
import LandingFeatures from "@/components/landing/landing-features";
import LandingFooter from "@/components/landing/landing-footer";
import LandingHeader from "@/components/landing/landing-header";
import LandingHero from "@/components/landing/landing-hero";
import LandingHowItWorks from "@/components/landing/landing-how-it-works";
import LandingInstall from "@/components/landing/landing-install";
// LandingPageAnimations must be a regular (synchronous) import — it controls
// hero visibility via GSAP autoAlpha and clearProps. A dynamic import would
// cause the CSS cascade to reveal elements before GSAP takes ownership,
// producing a flash/disappear cycle.
import LandingPageAnimations from "@/components/landing/landing-page-animations";
import LandingShowcase from "@/components/landing/landing-showcase";
import { LANDING_LOCALE_COOKIE } from "@/utils/functions/landing-locale";

type LandingPageShellProps = {
  initialLocale: LandingLocale;
  page?:
    | "home"
    | "install"
    | "product"
    | "capabilities"
    | "workflow"
    | "private-alpha"
    | "not-found";
};

export default function LandingPageShell({
  initialLocale,
  page = "home",
}: LandingPageShellProps) {
  const [locale, setLocale] = useState<LandingLocale>(initialLocale);
  const isKhmer = locale === "km";
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.cookie = `${LANDING_LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  const copy = landingCopy[locale];

  const handleLocaleChange = (nextLocale: LandingLocale) => {
    if (nextLocale === locale) {
      return;
    }

    startTransition(() => {
      setLocale(nextLocale);
    });
  };

  const pageContent =
    page === "home" ? (
      <>
        <LandingHero copy={copy.hero} />
        <LandingShowcase copy={copy.showcase} locale={locale} />
        <LandingFeatures copy={copy.features} locale={locale} />
        <LandingHowItWorks copy={copy.workflow} locale={locale} />
        <LandingBehind copy={copy.behind} locale={locale} />
        <LandingCta copy={copy.cta} locale={locale} />
      </>
    ) : (
      <>
        <div className="pt-20 sm:pt-24" />
        {page === "not-found" && (
          <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <Image
              src="/assets/makor/terminal-sprite.svg"
              alt="Makor pixel mascot"
              width={180}
              height={120}
              unoptimized
              className="landing-makor-pixel mb-8"
            />
            <p className="landing-eyebrow">404</p>
            <h1 className="font-heading mt-5 text-4xl font-bold text-foreground">
              {isKhmer ? "រកមិនឃើញទំព័រ។" : "This path leads nowhere."}
            </h1>
            <p className="mt-5 text-muted-foreground">
              {isKhmer
                ? "ត្រឡប់ទៅទំព័រដើម ដើម្បីបន្ត។"
                : "Makor couldn’t find this page. Head back home and try another path."}
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground"
            >
              {isKhmer ? "ទៅទំព័រដើម" : "Back to home"}
            </Link>
          </section>
        )}
        {page === "product" ? (
          <LandingShowcase copy={copy.showcase} locale={locale} standalone />
        ) : null}
        {page === "capabilities" ? (
          <LandingFeatures copy={copy.features} locale={locale} standalone />
        ) : null}
        {page === "workflow" ? (
          <LandingHowItWorks copy={copy.workflow} locale={locale} standalone />
        ) : null}
        {page === "install" || page === "private-alpha" ? (
          <LandingInstall copy={copy.install} locale={locale} />
        ) : null}
      </>
    );

  return (
    <div
      id="top"
      lang={locale}
      data-locale={locale}
      className={[
        "landing-preserved relative min-h-screen overflow-hidden bg-background",
        isKhmer ? "landing-locale-km" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <a href="#main-content" className="landing-skip-link">
        {isKhmer ? "ទៅមាតិកាចម្បង" : "Skip to content"}
      </a>
      <LandingPageAnimations key={page} locale={locale} />
      <LandingHeader
        brand={copy.brand}
        copy={copy.header}
        locale={locale}
        activePath={pathname}
        onLocaleChange={handleLocaleChange}
      />
      <main id="main-content" tabIndex={-1}>
        {pageContent}
      </main>
      <LandingFooter brand={copy.brand} copy={copy.footer} locale={locale} />
    </div>
  );
}
