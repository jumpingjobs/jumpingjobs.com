"use client";

import { useEffect } from "react";
import {
  ANALYTICS_ENABLED,
  POSTHOG_HOST,
  POSTHOG_KEY,
  POSTHOG_PERSISTENCE,
} from "@/lib/analytics";
import { setAnalyticsClient } from "@/lib/track";

/**
 * Initialises PostHog on the client. Renders nothing.
 *
 * posthog-js is imported dynamically for two reasons: when NEXT_PUBLIC_POSTHOG_KEY is
 * unset the library is never fetched at all, and when it is set the download stays off
 * the critical path rather than blocking first paint.
 *
 * Deliberately conservative: autocapture and session recording are off, so the only
 * events sent are the pageview and the handful this site raises explicitly. That keeps
 * the data minimal and legible, which matters on a page whose own copy promises that
 * nothing gets uploaded.
 */
export function Analytics() {
  useEffect(() => {
    if (!ANALYTICS_ENABLED) return;
    let cancelled = false;

    void import("posthog-js").then(({ default: posthog }) => {
      if (cancelled) return;

      if (!posthog.__loaded) {
        posthog.init(POSTHOG_KEY, {
          api_host: POSTHOG_HOST,
          persistence: POSTHOG_PERSISTENCE,
          person_profiles: "identified_only",
          autocapture: false,
          capture_pageview: true,
          capture_pageleave: true,
          disable_session_recording: true,
        });
      }

      setAnalyticsClient(posthog);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
