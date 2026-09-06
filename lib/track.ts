"use client";

import type { PostHog } from "posthog-js";

/**
 * Holds the PostHog client once Analytics has lazily loaded it. The import above is
 * type-only, so nothing from posthog-js reaches the bundle through this module.
 */
let client: PostHog | null = null;

export function setAnalyticsClient(instance: PostHog) {
  client = instance;
}

/** Fire-and-forget event. No-ops before load, and entirely when analytics is off. */
export function track(event: string, properties?: Record<string, string>) {
  client?.capture(event, properties);
}
