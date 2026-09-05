import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "primary" | "secondary" | "ghost" | "soft" | "danger";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, string> = {
  sm: "h-[var(--control-sm)] px-[14px] text-[length:var(--text-sm)] gap-1.5",
  md: "h-[var(--control-md)] px-[18px] text-[length:var(--text-base)] gap-2",
  lg: "h-[var(--control-lg)] px-6 text-[length:var(--text-md)] gap-2.5",
};

const VARIANTS: Record<Variant, string> = {
  primary: "bg-accent text-accent-on border-transparent hover:bg-accent-hover",
  secondary: "bg-card text-heading border-default hover:bg-sunken",
  ghost: "bg-transparent text-body border-transparent hover:bg-sunken",
  soft: "bg-accent-soft text-accent-text border-transparent hover:bg-[color-mix(in_oklab,var(--accent-soft),var(--accent)_12%)]",
  danger: "bg-[var(--danger)] text-accent-on border-transparent hover:bg-[var(--clay-5)]",
};

const BASE =
  "inline-flex items-center justify-center whitespace-nowrap rounded-pill border " +
  "font-sans font-semibold leading-none tracking-[-0.005em] no-underline hover:no-underline " +
  "cursor-pointer transition-[background-color,transform,color] duration-[var(--dur-fast)] ease-out " +
  "active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100";

function buttonClasses(variant: Variant, size: Size, fullWidth?: boolean, className?: string) {
  return cx(BASE, SIZES[size], VARIANTS[variant], fullWidth && "w-full", className);
}

type SharedProps = {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  children?: ReactNode;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedProps;

export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, fullWidth, className)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

/**
 * Same skin, anchor semantics. The design canvas wraps a <button> in an <a>, which is
 * invalid HTML and gives screen readers two nested controls — links that look like
 * buttons use this instead.
 */
export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & SharedProps;

export function ButtonLink({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={buttonClasses(variant, size, fullWidth, className)} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </a>
  );
}
