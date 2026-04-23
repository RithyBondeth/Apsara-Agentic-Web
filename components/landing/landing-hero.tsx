import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSignals = [
  {
    value: "Repo-bound",
    label: "Project-local init and config stay with the codebase.",
  },
  {
    value: "Diff-first",
    label: "Meaningful edits pause for human review before they land.",
  },
  {
    value: "Session-aware",
    label: "The workflow keeps durable context instead of resetting every time.",
  },
];

export default function LandingHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden
        data-gsap-drift="hero-left"
        className="pointer-events-none absolute -left-24 top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.11_78_/_0.28),transparent_70%)] blur-[140px]"
      />
      <div
        aria-hidden
        data-gsap-drift="hero-right"
        className="pointer-events-none absolute right-[-6rem] top-[-5rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.1_72_/_0.18),transparent_70%)] blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-40"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div
            data-gsap="hero-item"
            className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.82_0.08_76_/_0.45)] bg-[oklch(0.98_0.016_82_/_0.86)] px-4 py-1.5 backdrop-blur-sm"
          >
            <Sparkles className="size-3.5 text-[oklch(0.58_0.15_67)]" />
            <span className="text-xs font-semibold text-[oklch(0.45_0.08_68)]">
              Private alpha for project-first agentic coding
            </span>
          </div>

          <h1
            data-gsap="hero-item"
            className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.06]"
          >
            Build with an agent that stays{" "}
            <span className="landing-gradient-text">inside the repo</span>
            <br className="hidden sm:block" />
            and keeps you in control.
          </h1>

          <p
            data-gsap="hero-item"
            className="max-w-[720px] text-balance text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            Apsara turns the current CLI and backend spine into a stronger
            product story: workspace-scoped tools, reviewable diffs, quieter
            internal activity, and persistent context that feels built for real
            codebases instead of generic AI chat.
          </p>

          <div
            data-gsap="hero-item"
            className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:w-auto sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full border-0 bg-[linear-gradient(135deg,oklch(0.58_0.15_67),oklch(0.67_0.14_74))] px-8 text-sm font-semibold text-white shadow-[0_18px_42px_oklch(0.67_0.14_74_/_0.24)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <a href="#showcase">
                See the product flow
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-[oklch(0.86_0.016_84)] bg-white/70 px-8 text-sm font-semibold text-foreground transition-colors hover:bg-white sm:w-auto"
            >
              <a href="#features">Explore capabilities</a>
            </Button>
          </div>

          <div
            data-gsap="hero-item"
            className="landing-glass-card mt-8 grid w-full max-w-4xl gap-0 overflow-hidden rounded-[2rem] text-left sm:grid-cols-3"
          >
            {heroSignals.map((signal, index) => (
              <div
                key={signal.value}
                data-gsap="hero-signal"
                className={`px-6 py-5 sm:px-6 sm:py-6 ${
                  index > 0 ? "border-t border-border/70 sm:border-l sm:border-t-0" : ""
                }`}
              >
                <p className="text-lg font-bold tracking-tight text-[oklch(0.48_0.1_68)] sm:text-xl">
                  {signal.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#showcase"
          aria-label="Scroll to the showcase"
          data-gsap="hero-item"
          data-gsap-loop="hero-scroll"
          className="mt-12 inline-flex items-center justify-center text-muted-foreground"
        >
          <ChevronDown className="size-6" />
        </a>
      </div>
    </section>
  );
}
