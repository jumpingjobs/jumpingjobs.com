import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export type TagProps = {
  size?: "sm" | "md";
  selected?: boolean;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export function Tag({ size = "md", selected, icon, className, children }: TagProps) {
  return (
    <span
      className={cx(
        "inline-flex select-none items-center gap-1.5 whitespace-nowrap rounded-pill border font-medium",
        "transition-[background-color,border-color] duration-[var(--dur-fast)]",
        size === "sm" ? "h-[26px] px-2.5 type-small" : "h-8 px-3 type-body",
        selected ? "border-accent bg-accent-soft text-accent-text" : "border-default bg-card text-body",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
