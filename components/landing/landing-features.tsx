import {
  Database,
  Eye,
  FolderGit2,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from "lucide-react";

const featureCards = [
  {
    icon: FolderGit2,
    title: "Project-local init",
    description:
      "Apsara starts inside the repo, keeps config where the work lives, and avoids the disconnected AI chat problem.",
  },
  {
    icon: Wrench,
    title: "Workspace-scoped tools",
    description:
      "Search, reads, writes, and line replacement stay bounded to the allowed root instead of wandering across the machine.",
  },
  {
    icon: ShieldCheck,
    title: "Diff-first approvals",
    description:
      "Meaningful changes stop at a review gate so the developer keeps the final say before edits apply.",
  },
  {
    icon: Eye,
    title: "Hidden internals on demand",
    description:
      "Tool activity stays quiet by default, while /details gives power users the exact work trail when they want it.",
  },
  {
    icon: Database,
    title: "Durable backend spine",
    description:
      "FastAPI, Postgres persistence, usage tracking, and SSE streaming give the agent loop a real foundation.",
  },
  {
    icon: TerminalSquare,
    title: "Persistent sessions",
    description:
      "Conversation history and usage events stay durable so the workflow remains accountable across runs.",
  },
];

export default function LandingFeatures() {
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
          <p data-gsap="features-head" className="landing-eyebrow">
            Capabilities
          </p>
          <h2
            data-gsap="features-head"
            className="font-heading mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            What already makes Apsara{" "}
            <span className="landing-gradient-text">useful today</span>
          </h2>
          <p
            data-gsap="features-head"
            className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
          >
            The value is not speculative. These are the real behaviors that make
            the current CLI and backend feel more trustworthy than a generic AI
            tab.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                data-gsap="feature-card"
                className="landing-glass-card group rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,oklch(0.97_0.028_82),oklch(0.95_0.02_80))] text-[oklch(0.56_0.13_68)] shadow-[inset_0_1px_0_oklch(1_0.003_85_/_0.7)]">
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
