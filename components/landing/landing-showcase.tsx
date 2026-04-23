import {
  Eye,
  GitBranch,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

const productNotes = [
  {
    icon: ShieldCheck,
    title: "Approval gate",
    description:
      "The developer reviews the diff before meaningful writes touch the repo.",
  },
  {
    icon: Eye,
    title: "Quiet internals",
    description:
      "Tool chatter stays hidden until /details is explicitly opened.",
  },
  {
    icon: GitBranch,
    title: "Legible progress",
    description:
      "The workflow surfaces what changed, why it changed, and what still needs a decision.",
  },
];

export default function LandingShowcase() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden py-20 sm:py-28 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-45"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8rem] top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.76_0.11_76_/_0.12),transparent_72%)] blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="landing-eyebrow animate-fade-up">Product View</p>
        <h2
          className="animate-fade-up font-heading mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          See the agent loop as a product, not just a prompt box.
        </h2>
        <p
          className="animate-fade-up mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          This is the part worth showing. Project-local startup, bounded tools,
          hidden internals on demand, and a review step before edits land all
          turn the agent loop into something developers can actually trust.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="animate-fade-up landing-terminal-shell relative overflow-hidden rounded-[2rem] p-5 text-white sm:p-7"
          style={{ animationDelay: "220ms" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.74_0.1_76_/_0.12),transparent_30%),radial-gradient(circle_at_bottom_left,oklch(0.61_0.08_206_/_0.15),transparent_36%)]"
          />
          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#f87171]" />
                <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                <span className="size-2.5 rounded-full bg-[#4ade80]" />
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65">
                <TerminalSquare className="size-3.5" />
                apsara session
              </div>
            </div>

            <div className="grid gap-6 pt-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[1.5rem] border border-white/8 bg-black/18 p-5 font-mono text-sm leading-7 text-white/85">
                <p>
                  <span className="text-[#7dd3fc]">$</span> apsara init
                </p>
                <p>
                  <span className="text-[#fbbf24]">workspace</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-[#fde68a]">./apsara-agentic-api</span>
                </p>
                <p>
                  <span className="text-[#c4b5fd]">request</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-white">
                    &quot;Trace the approval flow and simplify the copy.&quot;
                  </span>
                </p>
                <p>
                  <span className="text-[#86efac]">activity</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-[#bef264]">
                    6 internal events hidden. Open /details to inspect.
                  </span>
                </p>
                <p>
                  <span className="text-[#fca5a5]">review</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-white">
                    Diff preview generated before line replacement.
                  </span>
                </p>
                <p>
                  <span className="text-[#67e8f9]">status</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-white">
                    Awaiting approval to apply the change.
                  </span>
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/7 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
                    Why it feels better
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-tight text-white">
                    More bounded than chat. More legible than autopilot.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/68">
                    The system does real work, but it never asks the developer
                    to stop caring about scope, review, or authorship.
                  </p>
                </div>

                {productNotes.map((note) => {
                  const Icon = note.icon;

                  return (
                    <div
                      key={note.title}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-2xl bg-white/10 text-[oklch(0.82_0.09_77)]">
                          <Icon className="size-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {note.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/65">
                            {note.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="landing-glass-card animate-float absolute -left-2 top-24 hidden max-w-52 rounded-[1.5rem] p-4 lg:block">
          <p className="landing-eyebrow !text-[10px]">Human loop</p>
          <p className="mt-3 text-sm leading-6 text-foreground/80">
            Review stays in the critical path instead of getting bolted on after
            the fact.
          </p>
        </div>

        <div className="animate-float-delayed absolute -right-2 bottom-12 hidden rounded-[1.5rem] border border-[oklch(0.84_0.06_78_/_0.7)] bg-[oklch(0.98_0.016_82_/_0.92)] p-4 shadow-[0_18px_45px_oklch(0.44_0.06_76_/_0.12)] lg:block">
          <div className="flex items-center gap-2 text-[oklch(0.52_0.11_68)]">
            <Sparkles className="size-4" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em]">
              Product tone
            </p>
          </div>
          <p className="mt-2 max-w-48 text-sm leading-6 text-[oklch(0.28_0.03_248)]">
            Calm enough to trust. Clear enough to inspect. Useful enough to keep
            using.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Trust grows when every step has a boundary.
        </h3>
        <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
          That means workspace scoping, review gates before writes, and internal
          activity that stays available without taking over the entire
          interface.
        </p>
      </div>
    </section>
  );
}
