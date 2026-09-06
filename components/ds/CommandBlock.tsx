"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/cx";

export type CommandBlockProps = {
  command: string;
  /** Called after a successful copy. Used for analytics; never for control flow. */
  onCopy?: (command: string) => void;
  prompt?: string;
  label?: string;
  size?: "md" | "lg";
  tone?: "inverse" | "card";
  className?: string;
};

export function CommandBlock({
  command,
  prompt = "$",
  label,
  size = "md",
  tone = "inverse",
  onCopy,
  className,
}: CommandBlockProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Clear on unmount so a copy near a tab switch cannot set state on a dead component.
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      // Clipboard is unavailable (insecure origin, or permission denied). The command
      // stays selectable, so fall through without claiming a copy happened.
      return;
    }
    setCopied(true);
    onCopy?.(command);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  const inverse = tone === "inverse";

  return (
    <div className={cx("flex flex-col gap-2", className)}>
      {label && <div className="type-label text-faint">{label}</div>}
      <div
        className={cx(
          "flex items-center gap-3.5 rounded-lg border py-0 pl-[18px] pr-2 font-mono",
          size === "lg"
            ? "h-[var(--control-xl)] text-[length:var(--text-md)]"
            : "h-[var(--control-lg)] text-[length:var(--text-sm)]",
          inverse
            ? "border-transparent bg-inverse text-on-inverse shadow-2"
            : "border-default bg-card text-body",
        )}
      >
        <span aria-hidden="true" className={cx("select-none", inverse ? "text-moss-2" : "text-accent")}>
          {prompt}
        </span>
        <code className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-[inherit] text-[length:inherit]">
          {command}
        </code>
        <button
          type="button"
          onClick={copy}
          className={cx(
            "inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-pill px-3",
            "font-sans type-small font-semibold transition-colors duration-[var(--dur-fast)] ease-out",
            copied
              ? "bg-accent text-accent-on"
              : cx("text-current", inverse ? "bg-white/8 hover:bg-white/15" : "bg-sunken hover:bg-[var(--border-default)]"),
          )}
        >
          <CopyGlyph copied={copied} />
          {copied ? "Copied" : "Copy"}
          <span className="sr-only"> {command}</span>
        </button>
      </div>
      {/* Politely announces the copy to screen readers without moving focus. */}
      <span aria-live="polite" className="sr-only">
        {copied ? `Copied ${command} to the clipboard` : ""}
      </span>
    </div>
  );
}

function CopyGlyph({ copied }: { copied: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {copied ? (
        <path d="M20 6 9 17l-5-5" />
      ) : (
        <>
          <rect width="14" height="14" x="8" y="8" rx="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </>
      )}
    </svg>
  );
}
