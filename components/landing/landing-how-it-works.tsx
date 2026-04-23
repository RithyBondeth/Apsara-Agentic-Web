const workflowSteps = [
  {
    number: "01",
    title: "Start in the workspace",
    description:
      "Initialize Apsara inside the repo so the session inherits the right filesystem boundary and project-local context.",
  },
  {
    number: "02",
    title: "Ask for meaningful work",
    description:
      "Trace the code, inspect files, and draft a change while keeping raw tool noise tucked away unless it is needed.",
  },
  {
    number: "03",
    title: "Review and steer",
    description:
      "Approve the diff, reject it, or redirect the next step while the session keeps the thread and reasoning intact.",
  },
];

export default function LandingHowItWorks() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden py-20 sm:py-28 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 landing-dot-pattern opacity-35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.76_0.11_76_/_0.1),transparent_72%)] blur-[180px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,oklch(0.69_0.08_206_/_0.08),transparent_72%)] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-eyebrow animate-fade-up">How It Works</p>
          <h2
            className="animate-fade-up font-heading mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            A workflow that mirrors how developers already work.
          </h2>
          <p
            className="animate-fade-up mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Orient the repo, delegate the legwork, and keep authorship through
            review. The product gets out of the way without becoming vague.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {workflowSteps.map((step, index) => (
            <div
              key={step.number}
              className="animate-fade-up relative text-center md:text-left"
              style={{ animationDelay: `${240 + index * 90}ms` }}
            >
              {index < workflowSteps.length - 1 ? (
                <div className="hidden md:block absolute left-[62%] top-8 h-px w-[calc(100%-22%)] bg-gradient-to-r from-[oklch(0.74_0.1_76_/_0.45)] to-[oklch(0.74_0.1_76_/_0.08)]" />
              ) : null}

              <div className="inline-flex size-16 items-center justify-center rounded-[1.5rem] border border-[oklch(0.84_0.06_78_/_0.45)] bg-[linear-gradient(135deg,oklch(0.97_0.028_82_/_0.9),oklch(0.95_0.02_80_/_0.8))]">
                <span className="text-2xl font-bold tracking-tight text-[oklch(0.56_0.13_68)]">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground sm:text-base md:mx-0 mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
