import {
  Boxes,
  Database,
  Eye,
  FolderGit2,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import LandingRailVisual from "@/components/landing/landing-rail-visual";
import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { cn } from "@/lib/utils";

const featureIcons = [
  FolderGit2,
  Wrench,
  ShieldCheck,
  Eye,
  Database,
  TerminalSquare,
];

const featureMeta = [
  { code: "workspace.init", stat: "local" },
  { code: "tools.scope", stat: "bounded" },
  { code: "review.diff", stat: "required" },
  { code: "trace.details", stat: "on demand" },
  { code: "events.persist", stat: "durable" },
  { code: "session.resume", stat: "stateful" },
];

const cardLayout = ["lg:col-span-2", "", "", "lg:col-span-2", "", ""];

type LandingFeaturesProps = {
  copy: LandingCopy["features"];
  locale: LandingLocale;
};

export default function LandingFeatures({
  copy,
  locale,
}: LandingFeaturesProps) {
  const eyebrowClassName = cn(
    locale === "km"
      ? "text-[0.82rem] font-semibold text-[var(--l-accent)]"
      : "landing-eyebrow",
  );

  return (
    <section
      id="features"
      className="relative scroll-mt-24 overflow-hidden border-b border-[var(--l-line)] py-20 sm:scroll-mt-28 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="landing-code-grid absolute inset-0 opacity-45"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 top-1/3 size-[34rem] rounded-full bg-[radial-gradient(circle,var(--l-glow-b),transparent_72%)] blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="flex h-full flex-col items-start justify-between gap-6">
            <LandingRailVisual
              code="module.stack"
              compact
              icon={Boxes}
              labelLead="Tools"
              labelTail="Bounded"
              motion="features-head"
            />
            <div>
              <p data-gsap="features-head" className={eyebrowClassName}>
                {copy.eyebrow}
              </p>
              <div
                data-gsap="features-head"
                className="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
              >
                <span className="size-1.5 rounded-full bg-[var(--l-spectrum-1)] shadow-[0_0_16px_var(--l-spectrum-1)]" />
                6 modules online
              </div>
            </div>
          </div>
          <div className="self-end">
            <h2
              data-gsap="features-head"
              className="font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {copy.titleLead}{" "}
              <span className="landing-gradient-text">
                {copy.titleHighlight}
              </span>
              {copy.titleTail ? ` ${copy.titleTail}` : null}
            </h2>
            <p
              data-gsap="features-head"
              className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.description}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {copy.cards.map((feature, index) => {
            const Icon = featureIcons[index];
            const meta = featureMeta[index];

            if (!Icon || !meta) {
              return null;
            }

            return (
              <article
                key={feature.title}
                data-gsap="feature-card"
                data-tilt
                className={cn(
                  "landing-bento-card group relative min-h-[280px] overflow-hidden rounded-xl p-6 sm:p-7",
                  cardLayout[index],
                )}
              >
                <span aria-hidden className="landing-tilt-glare" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="landing-feature-icon flex size-11 items-center justify-center rounded-lg">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-auto pt-12">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--l-accent)]">
                      {meta.code}
                    </p>
                    <h3 className="mt-3 font-heading text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[var(--l-line)] pt-4 font-mono text-[10px] uppercase tracking-[0.14em]">
                    <span className="text-muted-foreground">status</span>
                    <span className="flex items-center gap-2 text-[var(--l-spectrum-1)]">
                      <span className="size-1.5 rounded-full bg-current" />
                      {meta.stat}
                    </span>
                  </div>
                </div>

                <span
                  aria-hidden
                  className="landing-card-ghost-number absolute -right-6 -top-10 font-mono text-[9rem] font-bold leading-none transition-[transform,opacity,filter] duration-500 group-hover:translate-y-3"
                >
                  {index + 1}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
