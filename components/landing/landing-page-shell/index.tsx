"use client";

import { startTransition, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LandingCta from "@/components/landing/landing-cta";
import { landingCopy, type LandingLocale } from "@/language/landing-copy";
import LandingFeatures from "@/components/landing/landing-features";
import LandingFooter from "@/components/landing/landing-footer";
import LandingHeader from "@/components/landing/landing-header";
import LandingHero from "@/components/landing/landing-hero";
import LandingHowItWorks from "@/components/landing/landing-how-it-works";
// LandingPageAnimations must be a regular (synchronous) import — it controls
// hero visibility via GSAP autoAlpha and clearProps. A dynamic import would
// cause the CSS cascade to reveal elements before GSAP takes ownership,
// producing a flash/disappear cycle.
import LandingPageAnimations from "@/components/landing/landing-page-animations";
import LandingShowcase from "@/components/landing/landing-showcase";
import { LANDING_LOCALE_COOKIE } from "@/utils/functions/landing-locale";

type LandingPageShellProps = {
  initialLocale: LandingLocale;
  page?: "home" | "product" | "capabilities" | "workflow" | "private-alpha";
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
        <LandingPageAnimations locale={locale} />
        <LandingHero copy={copy.hero} />
        <LandingShowcase copy={copy.showcase} locale={locale} />
        <LandingFeatures copy={copy.features} locale={locale} />
        <LandingHowItWorks copy={copy.workflow} locale={locale} />
        <LandingCta copy={copy.cta} locale={locale} />
      </>
    ) : (
      <>
        <div className="pt-20 sm:pt-24" />
        {page === "product" ? (
          <LandingShowcase copy={copy.showcase} locale={locale} />
        ) : null}
        {page === "capabilities" ? (
          <LandingFeatures copy={copy.features} locale={locale} />
        ) : null}
        {page === "workflow" ? (
          <LandingHowItWorks copy={copy.workflow} locale={locale} />
        ) : null}
        {page === "private-alpha" ? (
          <LandingCta copy={copy.cta} locale={locale} secondaryHref="/" />
        ) : null}
      </>
    );

  return (
    <main
      id="top"
      lang={locale}
      data-locale={locale}
      className={[
        "relative min-h-screen overflow-hidden bg-background",
        isKhmer ? "landing-locale-km" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <LandingHeader
        brand={copy.brand}
        copy={copy.header}
        locale={locale}
        activePath={pathname}
        onLocaleChange={handleLocaleChange}
      />
      {pageContent}
      <LandingFooter brand={copy.brand} copy={copy.footer} locale={locale} />
    </main>
  );
}
