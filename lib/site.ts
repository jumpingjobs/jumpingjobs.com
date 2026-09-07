/** Canonical origin, used by metadata, the sitemap, robots.txt, llms.txt and JSON-LD. */
export const SITE_URL = "https://jumpingjobs.com";

/**
 * Path prefix when the site is not served from the apex. Mirrors the value
 * next.config.mjs reads, so the 404 redirect lands on the right root under either
 * deployment. Empty for jumpingjobs.com.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_NAME = "Jumping Jobs";

/**
 * Title and description live here rather than in app/layout.tsx because three
 * surfaces quote them — the <head> metadata, the JSON-LD graph and llms.txt.
 * Hardcoding the same sentence in each is how the pipeline tree drifted.
 */
export const SITE_TITLE =
  "Jumping Jobs — your job search, run from your agent’s chat";

export const SITE_DESCRIPTION =
  "A skills collection for Claude Code, Cursor, Copilot and friends. Build a durable profile, find and assess roles, tailor your resume to each posting and prep for interviews — for one applicant or a whole household.";
