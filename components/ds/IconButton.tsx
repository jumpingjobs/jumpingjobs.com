import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "ghost" | "secondary" | "primary";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, string> = { sm: "size-8", md: "size-10", lg: "size-12" };

const VARIANTS: Record<Variant, string> = {
  ghost: "bg-transparent text-body border-transparent hover:bg-sunken",
  secondary: "bg-card text-heading border-default hover:bg-sunken",
  primary: "bg-accent text-accent-on border-transparent hover:bg-accent-hover",
};

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> & {
  variant?: Variant;
  size?: Size;
  /** Required — the button has no text, so this is its accessible name. */
  label: string;
  children?: ReactNode;
};

export function IconButton({
  variant = "ghost",
  size = "md",
  label,
  className,
  children,
  type = "button",
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cx(
        "inline-flex flex-none cursor-pointer items-center justify-center rounded-pill border",
        "transition-colors duration-[var(--dur-fast)] ease-out",
        "disabled:cursor-not-allowed disabled:opacity-50",
        SIZES[size],
        VARIANTS[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
