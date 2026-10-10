import Image from "next/image";
import Link from "next/link";
import KhmerOrnament from "@/components/landing/khmer-ornament";
import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { siteRoutes } from "@/utils/constants/site-routes";
import { cn } from "@/lib/utils";

const logoSrc = "/assets/makor/head.png";

type LandingFooterProps = {
  brand: LandingCopy["brand"];
  copy: LandingCopy["footer"];
  locale: LandingLocale;
};

export default function LandingFooter({
  brand,
  copy,
  locale,
}: LandingFooterProps) {
  const isKhmer = locale === "km";

  return (
    <footer className="relative border-t border-border/70 bg-background/80">
      <KhmerOrnament variant="divider" className="heritage-footer-divider" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div
          data-gsap="footer"
          className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between"
        >
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Link href={siteRoutes.home} className="flex items-center gap-3">
                <Image
                  src={logoSrc}
                  alt={brand.logoAlt}
                  width={44}
                  height={44}
                  sizes="44px"
                  className="landing-makor-pixel size-11 object-contain"
                />
                <div>
                  <p className="font-heading text-lg font-bold tracking-tight text-foreground">
                    {brand.title}
                  </p>
                  <p
                    className={cn(
                      "font-semibold text-muted-foreground",
                      isKhmer
                        ? "text-[11px] tracking-normal"
                        : "text-[11px] uppercase tracking-[0.28em]",
                    )}
                  >
                    {brand.subtitle}
                  </p>
                </div>
              </Link>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {copy.description}
            </p>
            <p className="heritage-signature mt-4 text-xs text-[var(--l-accent)]">
              {isKhmer
                ? "បំផុសគំនិតពីសិល្បៈខ្មែរ។ បង្កើតសម្រាប់ Terminal របស់អ្នក។"
                : "Inspired by Khmer art. Built for your terminal."}
            </p>
          </div>

          <div className="flex flex-wrap gap-10 sm:gap-14">
            {copy.sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-foreground">
                  {section.title}
                </p>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          data-gsap="footer"
          className="mt-10 border-t border-border/70 pt-6"
        >
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {brand.title}. {copy.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
