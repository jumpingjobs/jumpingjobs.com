import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "default" | "raised" | "sunken" | "outline";

const VARIANTS: Record<Variant, string> = {
  default: "bg-card border-subtle shadow-1",
  raised: "bg-raised border-transparent shadow-2",
  sunken: "bg-sunken border-transparent shadow-none",
  outline: "bg-transparent border-default shadow-none",
};

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
  interactive?: boolean;
  selected?: boolean;
  /** Lays a watercolour wash + paper grain behind the content. */
  wash?: "meadow" | "fjord" | "dusk";
  children?: ReactNode;
};

export function Card({
  variant = "default",
  interactive,
  selected,
  wash,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx(
        "relative rounded-lg border text-body",
        "transition-[box-shadow,transform,border-color] duration-[var(--dur-base)] ease-out",
        VARIANTS[variant],
        wash && `jj-wash jj-grain overflow-hidden ${wash === "meadow" ? "" : wash}`,
        interactive && "cursor-pointer hover:-translate-y-px hover:border-strong hover:shadow-2",
        selected && "border-accent",
        className,
      )}
      {...rest}
    >
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
