"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteRoutes } from "@/utils/constants/site-routes";
import { cn } from "@/lib/utils";

const logoSrc = "/assets/logo/logo-without-title.svg";

type LandingHeaderProps = {
  brand: LandingCopy["brand"];
  copy: LandingCopy["header"];
  locale: LandingLocale;
  activePath: string;
  onLocaleChange: (locale: LandingLocale) => void;
};

const localeOptions: LandingLocale[] = ["en", "km"];

export default function LandingHeader({
  brand,
  copy,
  locale,
  activePath,
  onLocaleChange,
}: LandingHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isKhmer = locale === "km";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">

        {/* Main navbar pill */}
        <div
          data-gsap="header"
          className="landing-nav-bar flex items-center justify-between gap-3 rounded-full px-3 py-2.5 sm:px-4 sm:py-3"
        >
          {/* Logo */}
          <Link
            href={siteRoutes.home}
            className="flex shrink-0 items-center gap-2.5"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex rounded-full border border-white/80 bg-white/80 px-2 py-1 shadow-sm dark:border-white/10 dark:bg-white/10">
              <Image
                src={logoSrc}
                alt={brand.logoAlt}
                width={30}
                height={46}
                priority
                className="h-8 w-auto sm:h-10"
              />
            </span>
            <div className="leading-none">
              <p className="font-heading text-sm font-bold tracking-tight text-foreground sm:text-base lg:text-lg">
                {brand.title}
              </p>
              <p
                className={cn(
                  "mt-0.5 hidden font-semibold text-muted-foreground sm:block",
                  isKhmer
                    ? "text-[11px] tracking-normal"
                    : "text-[10px] uppercase tracking-[0.28em]",
                )}
              >
                {brand.subtitle}
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {copy.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activePath === item.href
                    ? "bg-white text-foreground shadow-sm dark:bg-white/10"
                    : "text-muted-foreground hover:bg-white/70 hover:text-foreground dark:hover:bg-white/8",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            {/* Language switcher */}
            <div
              role="group"
              aria-label={copy.languageSwitcherLabel}
              className="inline-flex rounded-full border border-[oklch(0.86_0.016_84)] bg-white/70 p-1 shadow-[0_10px_24px_oklch(0.34_0.02_248/0.08)] dark:border-[oklch(0.32_0.022_248/0.7)] dark:bg-[oklch(0.20_0.016_248/0.8)] dark:shadow-none"
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
                      : "text-foreground/70 hover:bg-white hover:text-foreground dark:hover:bg-white/10",
                  )}
                >
                  {copy.localeLabels[option]}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Private Alpha CTA */}
            <Button
              asChild
              className="h-10 rounded-full border-0 bg-[linear-gradient(135deg,oklch(0.58_0.15_67),oklch(0.67_0.14_74))] px-5 text-sm font-semibold text-white shadow-[0_14px_36px_oklch(0.67_0.14_74/0.24)] transition-transform hover:-translate-y-0.5 hover:opacity-95"
            >
              <Link href={siteRoutes.privateAlpha}>
                {copy.alphaLabel}
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile right: locale + theme toggle + hamburger */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <div
              role="group"
              aria-label={copy.languageSwitcherLabel}
              className="inline-flex rounded-full border border-[oklch(0.86_0.016_84)] bg-white/70 p-0.5 dark:border-[oklch(0.32_0.022_248/0.7)] dark:bg-[oklch(0.20_0.016_248/0.8)]"
            >
              {localeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={locale === option}
                  onClick={() => onLocaleChange(option)}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
                    locale === option
                      ? "bg-[oklch(0.58_0.15_67)] text-white shadow-sm"
                      : "text-foreground/70 hover:bg-white hover:text-foreground dark:hover:bg-white/10",
                  )}
                >
                  {copy.localeLabels[option]}
                </button>
              ))}
            </div>
            <ThemeToggle />
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-full border border-[oklch(0.88_0.014_84/0.7)] bg-white/70 text-foreground/80 transition-colors hover:bg-white dark:border-[oklch(0.32_0.022_248/0.7)] dark:bg-[oklch(0.20_0.016_248/0.8)] dark:hover:bg-[oklch(0.24_0.018_248)]"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          aria-hidden={!mobileOpen}
          className={cn(
            "mt-2 overflow-hidden rounded-3xl transition-all duration-300 ease-in-out lg:hidden",
            "landing-glass-card",
            mobileOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 border-transparent shadow-none",
          )}
        >
          <div className="px-4 py-5">
            {/* Nav links */}
            <nav className="flex flex-col gap-1">
              {copy.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                    activePath === item.href
                      ? "bg-white text-foreground shadow-sm dark:bg-white/10"
                      : "text-muted-foreground hover:bg-white/70 hover:text-foreground dark:hover:bg-white/8",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="my-4 border-t border-border/60" />

            {/* Private Alpha CTA */}
            <Button
              asChild
              className="h-11 w-full rounded-full border-0 bg-[linear-gradient(135deg,oklch(0.58_0.15_67),oklch(0.67_0.14_74))] text-sm font-semibold text-white shadow-[0_14px_36px_oklch(0.67_0.14_74/0.22)]"
            >
              <Link
                href={siteRoutes.privateAlpha}
                onClick={() => setMobileOpen(false)}
              >
                {copy.alphaLabel}
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
