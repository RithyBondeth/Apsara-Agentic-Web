"use client";

import { Languages } from "lucide-react";
import { IconToggleButton } from "@/components/ui/icon-toggle-button";
import type { LandingLocale } from "@/language/landing-copy";

type LandingLanguageToggleProps = {
  locale: LandingLocale;
  onLocaleChange: (locale: LandingLocale) => void;
};

export default function LandingLanguageToggle({
  locale,
  onLocaleChange,
}: LandingLanguageToggleProps) {
  const isKhmer = locale === "km";
  const label = isKhmer ? "ប្ដូរទៅភាសាអង់គ្លេស" : "Switch to Khmer";

  return (
    <IconToggleButton
      aria-label={label}
      aria-pressed={isKhmer}
      title={label}
      onClick={() => onLocaleChange(isKhmer ? "en" : "km")}
    >
      <Languages
        key={locale}
        aria-hidden="true"
        className="landing-control-icon size-4"
      />
    </IconToggleButton>
  );
}
