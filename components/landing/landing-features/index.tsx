import {
  Database,
  Eye,
  FolderGit2,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import KhmerOrnament from "@/components/landing/khmer-ornament";
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

const featureCodes = [
  "read_file",
  "review.diff",
  "verify_project",
  "shell.approval",
  "mcp.connect",
  "session.resume",
];

const cardLayout = [
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "lg:col-span-2",
];

type LandingFeaturesProps = {
  copy: LandingCopy["features"];
  locale: LandingLocale;
  standalone?: boolean;
};

export default function LandingFeatures({
  copy,
  locale,
  standalone = false,
}: LandingFeaturesProps) {
  const Heading = standalone ? "h1" : "h2";
  const ItemHeading = standalone ? "h2" : "h3";
  const eyebrowClassName = cn(
    locale === "km"
      ? "text-[0.82rem] font-semibold text-[var(--l-accent)]"
      : "landing-eyebrow",
  );

  return (
    <section
      id="features"
      className="relative scroll-mt-24 overflow-hidden border-b border-(--l-line) py-20 sm:scroll-mt-28 sm:py-24 lg:py-28"
    >
      {!standalone && (
        <KhmerOrnament variant="divider" className="heritage-section-divider" />
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <p data-gsap="features-head" className={eyebrowClassName}>
            {copy.eyebrow}
          </p>
          <div className="self-end">
            <Heading
              data-gsap="features-head"
              className="font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {copy.titleLead}{" "}
              <span className="landing-gradient-text">
                {copy.titleHighlight}
              </span>
              {copy.titleTail ? ` ${copy.titleTail}` : null}
            </Heading>
            <p
              data-gsap="features-head"
              className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.description}
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-flow-dense gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {copy.cards.map((feature, index) => {
            const Icon = featureIcons[index];
            const code = featureCodes[index];

            if (!Icon || !code) {
              return null;
            }

            return (
              <article
                key={feature.title}
                data-gsap="feature-card"
                data-card-light
                className={cn(
                  "landing-bento-card group relative min-h-[220px] overflow-hidden rounded-xl p-6 sm:p-7",
                  cardLayout[index],
                )}
              >
                <KhmerOrnament
                  variant="corner"
                  className="heritage-card-corner"
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="landing-feature-icon flex size-11 items-center justify-center rounded-lg">
                      <Icon className="size-5" />
                    </span>
                  </div>

                  <div className="mt-auto pt-6">
                    <p
                      lang="en"
                      className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--l-accent)"
                    >
                      {code}
                    </p>
                    <ItemHeading className="mt-3 font-heading text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
                      {feature.title}
                    </ItemHeading>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
