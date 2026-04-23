import Image from "next/image";

const footerSections = [
  {
    title: "Sections",
    links: [
      { href: "#showcase", label: "Product View" },
      { href: "#features", label: "Capabilities" },
      { href: "#workflow", label: "Workflow" },
    ],
  },
  {
    title: "What Matters",
    links: [
      { href: "#features", label: "Project-local init" },
      { href: "#showcase", label: "Diff-first review" },
      { href: "#cta", label: "Private alpha" },
    ],
  },
];

const logoSrc = "/assets/logo/logo-without-title.svg";

export default function LandingFooter() {
  return (
    <footer className="relative border-t border-border/70 bg-white/30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-20"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src={logoSrc}
                alt="Apsara logo"
                width={28}
                height={42}
                className="h-10 w-auto"
              />
              <div>
                <p className="font-heading text-lg font-bold tracking-tight text-foreground">
                  Apsara
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Agentic Coding
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Project-first agentic coding built around bounded tools,
              reviewable edits, and durable context for real repositories.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 sm:gap-14">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-foreground">
                  {section.title}
                </p>
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border/70 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Apsara. Agentic coding with
            boundaries, legibility, and human review.
          </p>
        </div>
      </div>
    </footer>
  );
}
