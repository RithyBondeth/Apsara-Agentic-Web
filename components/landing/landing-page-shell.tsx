"use client";

import { startTransition, useEffect, useState } from "react";
import LandingCta from "@/components/landing/landing-cta";
import { landingCopy, type LandingLocale } from "@/components/landing/landing-copy";
import LandingFeatures from "@/components/landing/landing-features";
import LandingFooter from "@/components/landing/landing-footer";
import LandingHeader from "@/components/landing/landing-header";
import LandingHero from "@/components/landing/landing-hero";
import LandingHowItWorks from "@/components/landing/landing-how-it-works";
import LandingPageAnimations from "@/components/landing/landing-page-animations";
import LandingShowcase from "@/components/landing/landing-showcase";
import { LANDING_LOCALE_COOKIE } from "@/lib/landing-locale";

type LandingPageShellProps = {
  initialLocale: LandingLocale;
};

export default function LandingPageShell({
  initialLocale,
}: LandingPageShellProps) {
  const [locale, setLocale] = useState<LandingLocale>(initialLocale);
  const isKhmer = locale === "km";

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
      <LandingPageAnimations locale={locale} />
      <LandingHeader
        brand={copy.brand}
        copy={copy.header}
        locale={locale}
        onLocaleChange={handleLocaleChange}
      />
      <LandingHero copy={copy.hero} />
      <LandingShowcase copy={copy.showcase} locale={locale} />
      <LandingFeatures copy={copy.features} locale={locale} />
      <LandingHowItWorks copy={copy.workflow} locale={locale} />
      <LandingCta copy={copy.cta} locale={locale} />
      <LandingFooter brand={copy.brand} copy={copy.footer} locale={locale} />
    </main>
  );
}
