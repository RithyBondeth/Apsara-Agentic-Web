import {
  Database,
  Eye,
  FolderGit2,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from "lucide-react";
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
      ? "text-[0.82rem] font-semibold text-[oklch(0.54_0.11_68)]"
      : "landing-eyebrow",
  );

  return (
    <section
      id="features"
      className="relative scroll-mt-28 overflow-hidden py-20 sm:scroll-mt-32 sm:py-28 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-40"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p data-gsap="features-head" className={eyebrowClassName}>
            {copy.eyebrow}
          </p>
          <h2
            data-gsap="features-head"
            className="font-heading mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {copy.titleLead}{" "}
            <span className="landing-gradient-text">{copy.titleHighlight}</span>
            {copy.titleTail ? ` ${copy.titleTail}` : null}
          </h2>
          <p
            data-gsap="features-head"
            className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
          >
            {copy.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {copy.cards.map((feature, index) => {
            const Icon = featureIcons[index];

            if (!Icon) {
              return null;
            }

            return (
              <article
                key={feature.title}
                data-gsap="feature-card"
                className="landing-glass-card group rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,oklch(0.97_0.028_82),oklch(0.95_0.02_80))] text-[oklch(0.56_0.13_68)] shadow-[inset_0_1px_0_oklch(1_0.003_85/0.7)]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
