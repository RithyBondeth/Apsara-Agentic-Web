"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { IconToggleButton } from "@/components/ui/icon-toggle-button";
import LandingLanguageToggle from "@/components/landing/landing-language-toggle";
import { siteRoutes } from "@/utils/constants/site-routes";
import { cn } from "@/lib/utils";

const logoSrc = "/assets/makor/head.png";

type LandingHeaderProps = {
  brand: LandingCopy["brand"];
  copy: LandingCopy["header"];
  locale: LandingLocale;
  activePath: string;
  onLocaleChange: (locale: LandingLocale) => void;
};

export default function LandingHeader({
  brand,
  copy,
  locale,
  activePath,
  onLocaleChange,
}: LandingHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isKhmer = locale === "km";
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      onKeyDown={(event) => {
        if (event.key === "Escape" && mobileOpen) {
          setMobileOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        {/* Main navbar */}
        <div
          data-gsap="header"
          className="landing-nav-bar relative flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 sm:px-4"
        >
          {/* Logo */}
          <Link
            href={siteRoutes.home}
            lang="en"
            className="landing-brand flex shrink-0 items-center gap-2.5"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex shrink-0">
              <Image
                src={logoSrc}
                alt={brand.logoAlt}
                width={44}
                height={44}
                sizes="44px"
                preload
                className="landing-makor-pixel size-9 object-contain sm:size-11"
              />
            </span>
            <div className="landing-brand-wordmark">
              <p className="landing-brand-name">
                {brand.title}
              </p>
              <p className="landing-brand-label">Agentic CLI</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label={isKhmer ? "ម៉ឺនុយចម្បង" : "Main navigation"}
            className="hidden items-center gap-1 lg:flex"
          >
            {copy.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                lang={item.href === siteRoutes.product ? "en" : undefined}
                aria-current={activePath === item.href ? "page" : undefined}
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
            <LandingLanguageToggle
              locale={locale}
              onLocaleChange={onLocaleChange}
            />
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
            <LandingLanguageToggle
              locale={locale}
              onLocaleChange={onLocaleChange}
            />
            <ThemeToggle />
            <IconToggleButton
              ref={menuButton}
              aria-controls="landing-mobile-menu"
              aria-label={
                mobileOpen
                  ? isKhmer
                    ? "បិទម៉ឺនុយ"
                    : "Close menu"
                  : isKhmer
                    ? "បើកម៉ឺនុយ"
                    : "Open menu"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </IconToggleButton>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          id="landing-mobile-menu"
          inert={!mobileOpen}
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
            <nav
              aria-label={isKhmer ? "ម៉ឺនុយទូរស័ព្ទ" : "Mobile navigation"}
              className="flex flex-col gap-1"
            >
              {copy.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  lang={item.href === siteRoutes.product ? "en" : undefined}
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
