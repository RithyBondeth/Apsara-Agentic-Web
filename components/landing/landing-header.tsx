import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { LandingCopy, LandingLocale } from "@/components/landing/landing-copy";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const logoSrc = "/assets/logo/logo-without-title.svg";

type LandingHeaderProps = {
  brand: LandingCopy["brand"];
  copy: LandingCopy["header"];
  locale: LandingLocale;
  onLocaleChange: (locale: LandingLocale) => void;
};

const localeOptions: LandingLocale[] = ["en", "km"];

export default function LandingHeader({
  brand,
  copy,
  locale,
  onLocaleChange,
}: LandingHeaderProps) {
  const isKhmer = locale === "km";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          data-gsap="header"
          className="landing-nav-bar flex items-center justify-between gap-4 rounded-full px-3 py-3 sm:px-4"
        >
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <span className="flex rounded-full border border-white/80 bg-white/80 px-2 py-1 shadow-sm">
              <Image
                src={logoSrc}
                alt={brand.logoAlt}
                width={30}
                height={46}
                priority
                className="h-10 w-auto"
              />
            </span>
            <div className="leading-none">
              <p className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
                {brand.title}
              </p>
              <p
                className={cn(
                  "mt-1 font-semibold text-muted-foreground",
                  isKhmer
                    ? "text-[11px] tracking-normal"
                    : "text-[10px] uppercase tracking-[0.28em]"
                )}
              >
                {brand.subtitle}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {copy.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/70 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div
              role="group"
              aria-label={copy.languageSwitcherLabel}
              className="inline-flex rounded-full border border-[oklch(0.86_0.016_84)] bg-white/70 p-1 shadow-[0_10px_24px_oklch(0.34_0.02_248_/_0.08)]"
            >
              {localeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={locale === option}
                  onClick={() => onLocaleChange(option)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                    locale === option
                      ? "bg-[oklch(0.58_0.15_67)] text-white shadow-sm"
                      : "text-foreground/70 hover:bg-white hover:text-foreground"
                  )}
                >
                  {copy.localeLabels[option]}
                </button>
              ))}
            </div>
            <Button
              asChild
              variant="ghost"
              className="hidden rounded-full px-4 text-sm font-medium text-foreground/80 hover:bg-white/70 sm:inline-flex lg:hidden"
            >
              <a href="#features">{copy.exploreLabel}</a>
            </Button>
            <Button
              asChild
              className="h-10 rounded-full border-0 bg-[linear-gradient(135deg,oklch(0.58_0.15_67),oklch(0.67_0.14_74))] px-5 text-sm font-semibold text-white shadow-[0_14px_36px_oklch(0.67_0.14_74_/_0.24)] transition-transform hover:-translate-y-0.5 hover:opacity-95"
            >
              <a href="#cta">
                {copy.alphaLabel}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
