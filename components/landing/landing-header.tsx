import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#showcase", label: "Product" },
  { href: "#features", label: "Capabilities" },
  { href: "#workflow", label: "Workflow" },
];

const logoSrc = "/assets/logo/logo-without-title.svg";

export default function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="landing-nav-bar flex items-center justify-between gap-4 rounded-full px-3 py-3 sm:px-4">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <span className="flex rounded-full border border-white/80 bg-white/80 px-2 py-1 shadow-sm">
              <Image
                src={logoSrc}
                alt="Apsara logo"
                width={30}
                height={46}
                priority
                className="h-10 w-auto"
              />
            </span>
            <div className="leading-none">
              <p className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
                Apsara
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Agentic Coding
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/70 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              asChild
              variant="ghost"
              className="hidden rounded-full px-4 text-sm font-medium text-foreground/80 hover:bg-white/70 sm:inline-flex"
            >
              <a href="#features">Explore</a>
            </Button>
            <Button
              asChild
              className="h-10 rounded-full border-0 bg-[linear-gradient(135deg,oklch(0.58_0.15_67),oklch(0.67_0.14_74))] px-5 text-sm font-semibold text-white shadow-[0_14px_36px_oklch(0.67_0.14_74_/_0.24)] transition-transform hover:-translate-y-0.5 hover:opacity-95"
            >
              <a href="#cta">
                Private Alpha
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
