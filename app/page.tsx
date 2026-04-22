import Image from "next/image";
import {
  ArrowRight,
  Bot,
  Database,
  Eye,
  FolderGit2,
  GitBranch,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wrench,
} from "lucide-react";

const heroSignals = [
  {
    label: "Project-local init",
    detail: "Start inside the repo instead of opening a disconnected AI chat.",
  },
  {
    label: "Approval before writes",
    detail: "Every meaningful edit pauses for a diff preview before it lands.",
  },
  {
    label: "Hidden internals on demand",
    detail: "Tool chatter stays tucked away until you explicitly open details.",
  },
];

const capabilityCards = [
  {
    icon: <FolderGit2 className="size-5" />,
    title: "Project-first from minute one",
    description:
      "Initialize Apsara inside a workspace, keep config local, and save sessions where the code actually lives.",
  },
  {
    icon: <Wrench className="size-5" />,
    title: "Workspace-scoped tools",
    description:
      "Reads, writes, search, structure scans, and line replacement stay anchored to the allowed project root.",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Reviewable change flow",
    description:
      "Diff previews, fuller terminal review, and editor inspection give the human the final say before edits apply.",
  },
  {
    icon: <Eye className="size-5" />,
    title: "Cleaner conversations",
    description:
      "Internal planning noise stays hidden by default, while /details lets power users inspect the exact work trail.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Anchor the repo",
    detail:
      "Load project-local config, auto-read environment context, and keep the agent bounded to the workspace.",
    note: "Project-first setup",
  },
  {
    step: "02",
    title: "Ask for real work",
    detail:
      "Use natural instructions to inspect code, trace behavior, and plan a change without losing the thread.",
    note: "Tool-aware reasoning",
  },
  {
    step: "03",
    title: "Inspect the path",
    detail:
      "See the summarized result cleanly, and open hidden internal steps only when you want to verify the route.",
    note: "Low-noise visibility",
  },
  {
    step: "04",
    title: "Approve or redirect",
    detail:
      "Accept the diff, reject it, or push the agent toward a better approach while the session memory stays intact.",
    note: "Human-in-the-loop",
  },
];

const platformCards = [
  {
    icon: <TerminalSquare className="size-5" />,
    title: "CLI experience now",
    description:
      "Apsara already delivers a branded terminal workflow with session memory, slash commands, edit review, and safer approvals.",
  },
  {
    icon: <Database className="size-5" />,
    title: "API backbone underneath",
    description:
      "FastAPI, Postgres persistence, usage tracking, and SSE streaming give the agent loop a durable backend foundation.",
  },
  {
    icon: <Bot className="size-5" />,
    title: "Web surface ready to grow",
    description:
      "This landing page becomes the front door for a broader product story: discoverability, onboarding, and richer control surfaces.",
  },
];

const safetyPoints = [
  "Paths resolve inside the configured workspace root instead of wandering across the machine.",
  "Bash access is opt-in and constrained by an explicit command allowlist.",
  "Large file reads respect size caps so the agent does not blindly slurp the entire repo.",
  "Repeated failures and looping tool calls trigger a blocked state instead of spinning forever.",
  "Diff previews, approval prompts, and optional editor review keep human judgment in the loop.",
  "Conversation history and usage events are persisted so the system can stay accountable over time.",
];

const logoSrc = "/assets/logo/logo-without-title.svg";

export default function Home() {
  return (
    <main id="top" className="relative flex-1 overflow-hidden">
      <div
        aria-hidden
        className="bg-grid-fade pointer-events-none absolute inset-x-0 top-0 h-[44rem] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]"
      />
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.83_0.13_76_/_0.28),transparent_68%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,oklch(0.79_0.1_200_/_0.22),transparent_68%)] blur-3xl"
      />

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8 lg:pb-28">
          <header className="surface-paper animate-reveal mb-16 flex items-center justify-between rounded-full px-4 py-3">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex rounded-[1.4rem] border border-border/80 bg-white/75 px-2 py-1 shadow-[0_12px_32px_oklch(0.3_0.03_248_/_0.08)]">
                <Image
                  src={logoSrc}
                  alt="Apsara logo"
                  width={28}
                  height={42}
                  priority
                  className="h-10 w-auto"
                />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold tracking-tight">
                  Apsara
                </p>
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  Agentic Coding
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a
                href="#capabilities"
                className="transition-colors hover:text-foreground"
              >
                Capabilities
              </a>
              <a
                href="#workflow"
                className="transition-colors hover:text-foreground"
              >
                Workflow
              </a>
              <a
                href="#safety"
                className="transition-colors hover:text-foreground"
              >
                Safety
              </a>
              <a
                href="#platform"
                className="transition-colors hover:text-foreground"
              >
                Platform
              </a>
            </nav>

            <a
              href="#cta"
              className="rounded-full border border-border bg-white/80 px-4 py-2 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              Private Alpha
            </a>
          </header>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-reveal" style={{ animationDelay: "90ms" }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                <Sparkles className="size-3.5 text-[oklch(0.7_0.14_76)]" />
                CLI-first today. API-backed for what comes next.
              </div>

              <h1 className="font-heading text-balance max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
                Agentic coding that respects the repo.
              </h1>

              <p className="text-balance mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Apsara is a project-first coding agent built for serious
                codebases: workspace-scoped tools, reviewable diffs, human
                approval, persistent context, and a cleaner workflow than
                generic AI chat.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  See the workflow
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#safety"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/80 px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  Explore the safety rails
                </a>
              </div>

              <ul className="mt-12 grid gap-4 sm:grid-cols-3">
                {heroSignals.map((signal, index) => (
                  <li
                    key={signal.label}
                    className="surface-paper animate-reveal rounded-[28px] p-5"
                    style={{ animationDelay: `${180 + index * 90}ms` }}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      {signal.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/82">
                      {signal.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative animate-reveal lg:pl-6"
              style={{ animationDelay: "180ms" }}
            >
              <div className="surface-ink relative overflow-hidden rounded-[36px] p-6 text-white sm:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.12_195_/_0.15),transparent_32%),radial-gradient(circle_at_bottom_left,oklch(0.79_0.15_78_/_0.16),transparent_38%)]"
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-[#f7768e]" />
                      <span className="size-2.5 rounded-full bg-[#e0af68]" />
                      <span className="size-2.5 rounded-full bg-[#9ece6a]" />
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/60">
                      apsara chat
                    </p>
                  </div>

                  <div className="mt-6 space-y-3 font-mono text-sm leading-7 text-white/88">
                    <p>
                      <span className="text-[#73daca]">$</span> apsara init
                    </p>
                    <p>
                      <span className="text-[#7aa2f7]">workspace</span>
                      <span className="text-white/55">:</span>{" "}
                      <span className="text-[#e0af68]">
                        ./apsara-agentic-api
                      </span>
                    </p>
                    <p>
                      <span className="text-[#7dcfff]">prompt</span>
                      <span className="text-white/55">:</span>{" "}
                      <span className="text-white">
                        &quot;Find the main CLI flow and improve the approval
                        UX.&quot;
                      </span>
                    </p>
                    <p>
                      <span className="text-[#bb9af7]">status</span>
                      <span className="text-white/55">:</span>{" "}
                      <span className="text-[#73daca]">
                        Hidden 7 internal events. Type /details to inspect.
                      </span>
                    </p>
                    <p>
                      <span className="text-[#f7768e]">review</span>
                      <span className="text-white/55">:</span>{" "}
                      <span className="text-white">
                        Diff preview ready before replacing lines in app/cli.py
                      </span>
                    </p>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-white/8 p-4">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
                        Scope
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">
                        Workspace-bound
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/8 p-4">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
                        Review
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">
                        Diff first
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/8 p-4">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
                        Memory
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">
                        Session-aware
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="surface-paper animate-float-slow absolute -left-8 top-24 hidden max-w-48 rounded-[28px] p-4 lg:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Safety rail
                </p>
                <p className="mt-3 text-sm leading-6 text-foreground/82">
                  Every write pauses for human review before it touches the
                  repo.
                </p>
              </div>

              <div className="animate-float-delayed absolute -right-4 -top-8 hidden rounded-[28px] border border-[oklch(0.82_0.08_178_/_0.7)] bg-[oklch(0.96_0.03_176_/_0.9)] p-4 shadow-[0_18px_45px_oklch(0.36_0.06_215_/_0.12)] lg:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[oklch(0.36_0.05_214)]">
                  Quiet by default
                </p>
                <p className="mt-2 max-w-40 text-sm leading-6 text-[oklch(0.28_0.03_235)]">
                  Internal tool chatter stays out of the way until you ask for
                  it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl animate-reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Capabilities
            </p>
            <h2 className="font-heading text-balance mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Built around the real agentic loop, not demo-day theater.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              The point is not to make the agent feel magical. The point is to
              make it useful, inspectable, and calm enough to trust inside a
              real development workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilityCards.map((card, index) => (
              <article
                key={card.title}
                className="surface-paper animate-reveal rounded-[30px] p-6"
                style={{ animationDelay: `${90 + index * 90}ms` }}
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {card.icon}
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="surface-ink overflow-hidden rounded-[40px] px-6 py-10 text-white sm:px-8 md:px-10 md:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="animate-reveal">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
                  Workflow
                </p>
                <h2 className="font-heading text-balance mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  From instruction to reviewed change, with fewer blind spots.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
                  Apsara is designed to help a developer move forward without
                  surrendering control. The agent does the legwork; the human
                  keeps authorship.
                </p>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-5 font-mono text-sm leading-7 text-white/78">
                  <p>
                    <span className="text-[#73daca]">$</span> apsara doctor
                    --workspace .
                  </p>
                  <p>
                    <span className="text-[#73daca]">$</span> apsara chat
                  </p>
                  <p className="text-white/52">
                    &gt; summarize the approval flow and tighten the safety copy
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {workflowSteps.map((step, index) => (
                  <article
                    key={step.step}
                    className="animate-reveal rounded-[30px] border border-white/10 bg-white/6 p-5"
                    style={{ animationDelay: `${120 + index * 90}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-sm uppercase tracking-[0.28em] text-white/45">
                        {step.step}
                      </p>
                      <GitBranch className="size-4 text-[oklch(0.76_0.12_195)]" />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.03em] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/68">
                      {step.detail}
                    </p>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[oklch(0.78_0.13_77)]">
                      {step.note}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl animate-reveal">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Platform
              </p>
              <h2 className="font-heading text-balance mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                More than a landing page. More honest than a vapor page.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              The web presence should tell the truth: Apsara already has a
              meaningful agent loop and product logic. The web layer is here to
              frame it, clarify it, and eventually deepen it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {platformCards.map((card, index) => (
              <article
                key={card.title}
                className="surface-paper animate-reveal rounded-[30px] p-6"
                style={{ animationDelay: `${90 + index * 90}ms` }}
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[oklch(0.95_0.03_194)] text-[oklch(0.41_0.08_215)]">
                  {card.icon}
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="surface-paper animate-reveal rounded-[34px] p-7 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Safety Rails
              </p>
              <h2 className="font-heading text-balance mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                The promise is controlled momentum, not unchecked autonomy.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Apsara works best when the system earns trust through
                constraints. The agent can move quickly, but it should always be
                clear what it is allowed to touch and when a human needs to step
                in.
              </p>

              <ul className="mt-8 space-y-4">
                {safetyPoints.map((point, index) => (
                  <li
                    key={point}
                    className="animate-reveal flex items-start gap-4 rounded-[24px] border border-border/70 bg-white/65 p-4"
                    style={{ animationDelay: `${110 + index * 70}ms` }}
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ShieldCheck className="size-4" />
                    </span>
                    <p className="text-base leading-7 text-foreground/82">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="animate-reveal rounded-[34px] border border-[oklch(0.84_0.06_82_/_0.7)] bg-[linear-gradient(180deg,oklch(0.95_0.03_82_/_0.95),oklch(0.92_0.04_78_/_0.95))] p-7 shadow-[0_26px_80px_oklch(0.39_0.05_250_/_0.09)] sm:p-8"
              style={{ animationDelay: "160ms" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[oklch(0.44_0.06_248)]">
                Why It Feels Better
              </p>
              <h3 className="font-heading mt-4 text-3xl font-semibold tracking-[-0.04em] text-[oklch(0.25_0.03_248)] sm:text-4xl">
                Less “trust me.” More “here’s exactly what happened.”
              </h3>
              <p className="mt-5 text-lg leading-8 text-[oklch(0.33_0.03_242)]">
                That difference matters. Developers do not need an agent that
                sounds confident. They need one that makes progress while
                keeping the work legible, bounded, and interruptible.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-[oklch(0.82_0.06_194_/_0.65)] bg-white/60 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[oklch(0.41_0.08_215)]">
                    Inspectability
                  </p>
                  <p className="mt-3 text-base leading-7 text-[oklch(0.28_0.03_240)]">
                    Hidden internal activity is available on demand instead of
                    being sprayed into every response.
                  </p>
                </div>
                <div className="rounded-[28px] border border-[oklch(0.85_0.07_76_/_0.7)] bg-white/60 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[oklch(0.55_0.12_76)]">
                    Authorship
                  </p>
                  <p className="mt-3 text-base leading-7 text-[oklch(0.28_0.03_240)]">
                    Diff review keeps the developer in charge of the final shape
                    of every meaningful change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="relative pb-24 pt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="surface-ink relative overflow-hidden rounded-[40px] px-8 py-12 text-white sm:px-10">
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,oklch(0.81_0.12_194_/_0.2),transparent_68%)] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.13_76_/_0.2),transparent_68%)] blur-3xl"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
                  Closing Thought
                </p>
                <h2 className="font-heading text-balance mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Build the product story around what already makes Apsara worth
                  using.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/72">
                  Project-first setup. Visible safety rails. Real diffs. Real
                  approvals. Real persistence. That is a stronger foundation
                  than a generic promise about AI productivity.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#top"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[oklch(0.24_0.03_252)] transition-transform hover:-translate-y-0.5"
                >
                  Back to the top
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Explore the capabilities
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-6 flex flex-col gap-3 px-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-3">
              <Image
                src={logoSrc}
                alt="Apsara logo"
                width={16}
                height={24}
                className="h-6 w-auto opacity-90"
              />
              <span>
              Apsara is a project-first agentic coding product built to stay
              inspectable, bounded, and genuinely useful.
              </span>
            </p>
            <p>CLI-first now. API-backed for richer surfaces next.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
