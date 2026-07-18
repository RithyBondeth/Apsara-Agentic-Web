import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type LandingRailVisualProps = {
  className?: string;
  code: string;
  compact?: boolean;
  icon: LucideIcon;
  motion: "showcase-head" | "showcase-tail" | "features-head";
};

export default function LandingRailVisual({
  className,
  code,
  compact = false,
  icon: Icon,
  motion,
}: LandingRailVisualProps) {
  return (
    <div
      aria-hidden
      data-gsap={motion}
      className={cn(
        "landing-rail-visual relative hidden items-center",
        compact ? "h-28 w-48 lg:flex" : "h-36 w-60 lg:flex",
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

      <span className="absolute right-0 top-2 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
        {"{ "}
        {code}
        {" }"}
      </span>
      <span className="absolute bottom-2 right-0 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
        <span className="size-1 rounded-full bg-[var(--l-spectrum-1)]" />
        signal / ok
      </span>
    </div>
  );
}
