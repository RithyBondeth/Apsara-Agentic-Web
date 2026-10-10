import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function IconToggleButton({
  className,
  type = "button",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={cn("landing-icon-toggle", className)}
      {...props}
    />
  );
}
