"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { IconToggleButton } from "@/components/ui/icon-toggle-button";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) {
    return <div className={cn("landing-icon-toggle", className)} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <IconToggleButton
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={className}
    >
      {isDark ? (
        <Sun
          key="sun"
          aria-hidden="true"
          className="landing-control-icon size-4"
        />
      ) : (
        <Moon
          key="moon"
          aria-hidden="true"
          className="landing-control-icon size-4"
        />
      )}
    </IconToggleButton>
  );
}
