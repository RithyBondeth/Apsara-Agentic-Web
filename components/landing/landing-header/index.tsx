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
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">

        {/* Main navbar */}
        <div
          data-gsap="header"
          className="landing-nav-bar relative flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 sm:px-4"
        >
          <span aria-hidden data-gsap-progress className="landing-nav-progress" />
          {/* Logo */}
          <Link
            href={siteRoutes.home}
            className="flex shrink-0 items-center gap-2.5 font-mono"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex rounded-md border border-[var(--l-line)]/60 bg-[var(--l-surface-high)]/80 px-2 py-1 shadow-sm">
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
              <p className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                <span className="text-[var(--l-accent)]">~/</span>
                {brand.title.toLowerCase()}
              </p>
              <p
                className={cn(
                  "mt-0.5 hidden font-semibold text-muted-foreground sm:block",
                  isKhmer
                    ? "text-[11px] tracking-normal"
                        : "text-[9px] uppercase tracking-[0.2em]",
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
                  "rounded-md px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.08em] transition-colors",
                  activePath === item.href
                    ? "bg-[var(--l-surface-high)] text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-[var(--l-surface-high)]/70 hover:text-foreground",
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
              className="inline-flex rounded-md border border-[var(--l-line)] bg-[var(--l-surface-high)]/70 p-1 shadow-[0_10px_24px_oklch(from_var(--l-shadow)_l_c_h/0.1)] dark:shadow-none"
            >
              {localeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={locale === option}
                  onClick={() => onLocaleChange(option)}
                  className={cn(
                    "rounded px-3 py-1.5 font-mono text-[10px] font-semibold transition-colors",
                    locale === option
                      ? "bg-[var(--l-accent)] text-[var(--l-btn-fg)] shadow-sm"
                      : "text-foreground/70 hover:bg-[var(--l-surface-high)] hover:text-foreground",
                  )}
                >
                  {copy.localeLabels[option]}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Install CTA */}
            <Button
              asChild
              className="h-10 rounded-md border-0 bg-[linear-gradient(135deg,var(--l-btn-from),var(--l-btn-to))] px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--l-btn-fg)] shadow-[0_14px_36px_var(--l-btn-shadow)] transition-transform hover:-translate-y-0.5 hover:opacity-95"
            >
              <Link href={siteRoutes.install}>
                {copy.installLabel}
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile right: locale + theme toggle + hamburger */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <div
              role="group"
              aria-label={copy.languageSwitcherLabel}
              className="inline-flex rounded-md border border-[var(--l-line)] bg-[var(--l-surface-high)]/70 p-0.5"
            >
              {localeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={locale === option}
                  onClick={() => onLocaleChange(option)}
                  className={cn(
                    "rounded px-2.5 py-1 font-mono text-[10px] font-semibold transition-colors",
                    locale === option
                      ? "bg-[var(--l-accent)] text-[var(--l-btn-fg)] shadow-sm"
                      : "text-foreground/70 hover:bg-[var(--l-surface-high)] hover:text-foreground",
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
              className="flex size-9 items-center justify-center rounded-md border border-[var(--l-line)]/70 bg-[var(--l-surface-high)]/70 text-foreground/80 transition-colors hover:bg-[var(--l-surface-high)]"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          aria-hidden={!mobileOpen}
          className={cn(
            "mt-2 overflow-hidden rounded-xl transition-all duration-300 ease-in-out lg:hidden",
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
                    "rounded-md px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] transition-colors",
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

            {/* Install CTA */}
            <Button
              asChild
              className="h-11 w-full rounded-md border-0 bg-[linear-gradient(135deg,var(--l-btn-from),var(--l-btn-to))] font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[var(--l-btn-fg)] shadow-[0_14px_36px_var(--l-btn-shadow)]"
            >
              <Link
                href={siteRoutes.install}
                onClick={() => setMobileOpen(false)}
              >
                {copy.installLabel}
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
