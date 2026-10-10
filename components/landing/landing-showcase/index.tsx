import { Eye, GitBranch, ShieldCheck, TerminalSquare } from "lucide-react";
import dynamic from "next/dynamic";
import KhmerOrnament from "@/components/landing/khmer-ornament";
import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { cn } from "@/lib/utils";

const LandingShowcaseTerminal = dynamic(
  () => import("@/components/landing/landing-showcase-terminal"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[520px] rounded-lg border border-white/8 bg-[#12151d] animate-pulse" />
    ),
  },
);

const productNoteIcons = [ShieldCheck, Eye, GitBranch];

type LandingShowcaseProps = {
  copy: LandingCopy["showcase"];
  locale: LandingLocale;
  standalone?: boolean;
};

export default function LandingShowcase({
  copy,
  locale,
  standalone = false,
}: LandingShowcaseProps) {
  const Heading = standalone ? "h1" : "h2";
  const ItemHeading = standalone ? "h2" : "h3";
  const eyebrowClassName = cn(
    locale === "km"
      ? "text-[0.82rem] font-semibold text-[var(--l-accent)]"
      : "landing-eyebrow",
  );

  return (
    <section
      id="showcase"
      className="relative scroll-mt-24 border-b border-[var(--l-line)] py-16 sm:scroll-mt-28 sm:py-20 lg:py-24"
    >
      {!standalone && (
        <KhmerOrnament variant="divider" className="heritage-section-divider" />
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <p data-gsap="showcase-head" className={eyebrowClassName}>
            {copy.eyebrow}
          </p>
          <div>
            <Heading
              data-gsap="showcase-head"
              className="font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {copy.title}
            </Heading>
            <p
              data-gsap="showcase-head"
              className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.description}
            </p>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.16fr_0.84fr] lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <div
              data-gsap="showcase-shell"
              className="landing-terminal-shell overflow-hidden rounded-xl p-2 text-white sm:p-3"
            >
              <div className="flex items-center justify-between border-b border-white/9 px-3 py-3">
                <div className="flex items-center gap-2" aria-hidden>
                  <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                  <span className="size-2.5 rounded-full bg-[#fad88f]" />
                  <span className="size-2.5 rounded-full bg-[#6096fa]" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                  <TerminalSquare className="size-3.5" />
                  {copy.sessionLabel}
                </div>
              </div>
              <LandingShowcaseTerminal key={locale} copy={copy.terminal} />
            </div>
            <p className="mt-4 font-mono text-[11px] leading-6 text-muted-foreground">
              {locale === "km"
                ? "នេះជាឧទាហរណ៍បង្ហាញការប្រើប្រាស់។ វាមិនដំណើរការពាក្យបញ្ជា ឬកែប្រែឯកសារពិតទេ។"
                : "Illustrative session. This preview does not run commands or edit files."}
            </p>
          </div>

          <div>
            <article data-story-step className="pb-8">
              <p className={eyebrowClassName}>{copy.whyEyebrow}</p>
              <ItemHeading className="mt-4 font-heading text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
                {copy.whyTitle}
              </ItemHeading>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {copy.whyDescription}
              </p>
            </article>
            {copy.notes.map((note, index) => {
              const Icon = productNoteIcons[index];
              if (!Icon) return null;
              return (
                <article
                  key={note.title}
                  data-story-step
                  className="border-t border-[var(--l-line)] py-7"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 shrink-0 text-[var(--l-accent)]" />
                    <ItemHeading className="font-heading text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">
                      {note.title}
                    </ItemHeading>
                  </div>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    {note.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
