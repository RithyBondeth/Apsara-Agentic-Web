import type { LandingLocale } from "@/language/landing-copy";

export const LANDING_LOCALE_COOKIE = "apsara-landing-locale";

export function isLandingLocale(
  value: string | null | undefined
): value is LandingLocale {
  return value === "en" || value === "km";
}

export function resolveLandingLocale(options?: {
  acceptLanguage?: string | null;
  cookieLocale?: string | null;
}): LandingLocale {
  const { acceptLanguage, cookieLocale } = options ?? {};

  if (isLandingLocale(cookieLocale)) {
    return cookieLocale;
  }

  if (acceptLanguage && /(^|,)\s*km\b/i.test(acceptLanguage)) {
    return "km";
  }

  return "en";
}
