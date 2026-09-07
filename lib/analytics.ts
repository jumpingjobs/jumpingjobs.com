/**
 * Cloudflare Web Analytics.
 *
 * The beacon token is public by design — it appears in the page source of every site
 * using Cloudflare Web Analytics and is write-only — so it is committed rather than
 * injected from CI. NEXT_PUBLIC_CF_BEACON_TOKEN overrides it for forks and staging;
 * set it empty to turn analytics off entirely.
 *
 * Cloudflare is cookieless and stores no per-visitor state, so no consent banner is
 * required. The trade-off, chosen deliberately: it supports no custom events, so copies
 * of the install command are not measurable. Traffic and Core Web Vitals only.
 */
export const CF_BEACON_TOKEN =
  process.env.NEXT_PUBLIC_CF_BEACON_TOKEN ?? "b9808f6ebca84223bd43ab0bd88c3bbf";

export const CF_BEACON_SRC = "https://static.cloudflareinsights.com/beacon.min.js";

export const ANALYTICS_ENABLED = CF_BEACON_TOKEN.length > 0;
