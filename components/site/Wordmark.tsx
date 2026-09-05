import { PiRabbit } from "react-icons/pi";
import { cx } from "@/lib/cx";

/** No logo exists yet — the mark is the Phosphor rabbit beside a typographic wordmark. */
export function Wordmark({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <span
      className={cx("inline-flex items-center gap-2 font-bold tracking-[-0.03em] text-heading", className)}
      style={{ fontSize: size, lineHeight: 1 }}
    >
      <PiRabbit aria-hidden="true" className="text-accent" style={{ fontSize: size * 1.18 }} />
      <span>
        jumping<span className="text-accent">jobs</span>
      </span>
    </span>
  );
}
