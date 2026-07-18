import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type LandingRailVisualProps = {
  className?: string;
  code: string;
  compact?: boolean;
  icon: LucideIcon;
  labelLead: string;
  labelTail: string;
  motion: "showcase-head" | "showcase-tail" | "features-head";
};

export default function LandingRailVisual({
  className,
  code,
  compact = false,
  icon: Icon,
  labelLead,
  labelTail,
  motion,
}: LandingRailVisualProps) {
  return (
    <div
      aria-hidden
      data-gsap={motion}
      className={cn(
        "landing-rail-visual relative hidden items-center",
        compact
          ? "h-28 w-full max-w-[20rem] lg:flex"
          : "h-36 w-full max-w-[22rem] lg:flex",
        className,
      )}
    >
      <span className="absolute left-0 right-0 top-1/2 h-px bg-[linear-gradient(90deg,var(--l-accent),var(--l-line),transparent)]" />
      <span className="absolute left-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[var(--l-accent)] shadow-[0_0_16px_var(--l-accent)]" />

      <span
        data-rail-orbit
        className={cn(
          "absolute left-7 top-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--l-accent)]/45",
          compact ? "size-24" : "size-28",
        )}
      >
        <span className="absolute -right-1 top-1/2 size-2 -translate-y-1/2 rounded-full bg-[var(--l-spectrum-1)] shadow-[0_0_14px_var(--l-spectrum-1)]" />
        <span className="absolute bottom-1 left-2 size-1.5 rounded-full bg-[var(--l-spectrum-3)] shadow-[0_0_12px_var(--l-spectrum-3)]" />
      </span>

      <span
        data-rail-core
        className={cn(
          "landing-rail-core absolute left-12 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-xl",
          compact ? "size-14" : "size-16",
        )}
      >
        <Icon
          className={cn(
            "text-[var(--l-accent)]",
            compact ? "size-6" : "size-7",
          )}
          strokeWidth={1.6}
        />
      </span>

      <span className="pointer-events-none absolute left-[7.75rem] top-1/2 h-16 w-40 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,var(--l-spectrum-4),var(--l-spectrum-3),var(--l-spectrum-1))] opacity-10 blur-2xl" />

      <span className="absolute left-[8.5rem] top-1/2 flex -translate-y-1/2 flex-col">
        <span
          data-rail-word
          className={cn(
            "landing-rail-wordmark font-heading font-black leading-[0.9] tracking-[-0.055em]",
            compact ? "text-[1.65rem]" : "text-[2rem]",
          )}
        >
          {labelLead}
        </span>
        <span
          className={cn(
            "mt-2 font-mono font-bold uppercase leading-none tracking-[0.2em] text-[var(--l-spectrum-3)]",
            compact ? "text-[0.62rem]" : "text-[0.7rem]",
          )}
        >
          {labelTail}
        </span>
      </span>

      <span className="absolute right-0 top-1 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
        {"{ "}
        {code}
        {" }"}
      </span>
      <span className="absolute bottom-1 right-0 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
        <span className="size-1 rounded-full bg-[var(--l-spectrum-1)]" />
        signal / ok
      </span>
    </div>
  );
}
