import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingCta() {
  return (
    <section
      id="cta"
      className="relative scroll-mt-28 overflow-hidden py-20 sm:scroll-mt-32 sm:py-28 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.11_78_/_0.18),transparent_72%)] blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p data-gsap="cta-head" className="landing-eyebrow">
          Closing Thought
        </p>
        <h2
          data-gsap="cta-head"
          className="font-heading mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Ready to give Apsara a front door that matches the{" "}
          <span className="landing-gradient-text">product truth</span>?
        </h2>
        <p
          data-gsap="cta-head"
          className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
        >
          The strongest story is already there: repo-first setup, bounded tools,
          quieter internals, reviewable diffs, and durable context for serious
          engineering work.
        </p>

        <div
          data-gsap="cta-actions"
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-full border-0 bg-[linear-gradient(135deg,oklch(0.58_0.15_67),oklch(0.67_0.14_74))] px-10 text-sm font-semibold text-white shadow-[0_18px_42px_oklch(0.67_0.14_74_/_0.24)] transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <a href="#showcase">
              See the showcase
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 w-full rounded-full border-[oklch(0.86_0.016_84)] bg-white/70 px-10 text-sm font-semibold text-foreground transition-colors hover:bg-white sm:w-auto"
          >
            <a href="#top">Back to top</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
