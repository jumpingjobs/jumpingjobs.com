import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Tone = "neutral" | "accent" | "info" | "success" | "warning" | "danger" | "solid" | "inverse";

const TONES: Record<Tone, string> = {
  neutral: "bg-sunken text-muted",
  accent: "bg-accent-soft text-accent-text",
  info: "bg-[var(--info-soft)] text-[var(--info-text)]",
  success: "bg-[var(--success-soft)] text-[var(--success-text)]",
  warning: "bg-[var(--warning-soft)] text-[var(--warning-text)]",
  danger: "bg-[var(--danger-soft)] text-[var(--danger-text)]",
  solid: "bg-accent text-accent-on",
  inverse: "bg-inverse text-on-inverse",
};

export type BadgeProps = {
  tone?: Tone;
  dot?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Badge({ tone = "neutral", dot, className, children }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex h-[22px] items-center gap-1.5 whitespace-nowrap rounded-pill px-[9px]",
        "type-label tracking-[0.02em] normal-case",
        TONES[tone],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}
