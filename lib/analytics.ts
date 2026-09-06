/**
 * PostHog configuration, read from build-time env vars.
 *
 * NEXT_PUBLIC_* values are inlined at build time, so these must be present in the
 * GitHub Actions environment — see .github/workflows/deploy.yml. When the key is unset
 * (local dev, forks, PR builds) analytics is simply off: no script, no requests.
 *
 * The project API key is publishable by design; it is a repository *variable*, not a
 * secret. PostHog's ingestion endpoint only accepts events with it, never reads.
 */
export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";

/** EU cloud by default — the audience is largely European and this keeps data in region. */
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

/**
 * "memory" keeps no cookies or localStorage, so no consent banner is required under
 * ePrivacy — at the cost of counting every page load as a new anonymous visitor.
 * Set NEXT_PUBLIC_POSTHOG_PERSISTENCE=localStorage+cookie for accurate unique visitors,
 * which does require a consent mechanism in the EU.
 */
export const POSTHOG_PERSISTENCE =
  process.env.NEXT_PUBLIC_POSTHOG_PERSISTENCE === "localStorage+cookie"
    ? "localStorage+cookie"
    : "memory";

export const ANALYTICS_ENABLED = POSTHOG_KEY.length > 0;

/** Events this site emits. Kept in one place so names cannot drift across components. */
export const EVENTS = {
  commandCopied: "command_copied",
  installTabChanged: "install_tab_changed",
} as const;
