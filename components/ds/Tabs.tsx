"use client";

import { useId, useRef } from "react";
import { cx } from "@/lib/cx";

export type TabItem<T extends string> = { value: T; label: string; count?: number };

export type TabsProps<T extends string> = {
  items: TabItem<T>[];
  value: T;
  onChange: (value: T) => void;
  variant?: "underline" | "pill";
  size?: "sm" | "md";
  /** Labels the tablist for assistive tech. */
  label: string;
  /** id of the element with role="tabpanel" that these tabs drive. */
  panelId?: string;
  className?: string;
};

export function Tabs<T extends string>({
  items,
  value,
  onChange,
  variant = "underline",
  size = "md",
  label,
  panelId,
  className,
}: TabsProps<T>) {
  const pill = variant === "pill";
  const groupId = useId();
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Arrow-key roving focus, as the WAI-ARIA tabs pattern expects.
  const onKeyDown = (event: React.KeyboardEvent) => {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const index = items.findIndex((item) => item.value === value);
    const next = items[(index + delta + items.length) % items.length];
    onChange(next.value);
    refs.current[next.value]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      onKeyDown={onKeyDown}
      className={cx(
        "flex gap-1",
        pill ? "w-fit rounded-pill bg-sunken p-1" : "w-full border-b border-subtle",
        className,
      )}
    >
      {items.map((item) => {
        const on = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            id={`${groupId}-tab-${item.value}`}
            aria-selected={on}
            aria-controls={panelId}
            tabIndex={on ? 0 : -1}
            ref={(node) => {
              refs.current[item.value] = node;
            }}
            onClick={() => onChange(item.value)}
            className={cx(
              "inline-flex cursor-pointer items-center gap-2 whitespace-nowrap font-medium",
              "transition-[color,border-color,background-color] duration-[var(--dur-fast)]",
              size === "sm" ? "h-8 type-small" : "h-10 type-body",
              pill ? "rounded-pill px-4" : "-mb-px border-b-2 px-1",
              !pill && (on ? "border-accent" : "border-transparent"),
              pill && on && "bg-card shadow-1",
              on ? "text-heading" : "text-muted",
            )}
          >
            {item.label}
            {item.count !== undefined && (
              <span
                className={cx(
                  "type-label rounded-full px-1.5 py-[3px] normal-case",
                  on ? "bg-accent-soft text-accent-text" : "bg-sunken text-faint",
                )}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
