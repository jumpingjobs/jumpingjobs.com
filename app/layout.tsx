import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource-variable/figtree";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import {
  ANALYTICS_ENABLED,
  CF_BEACON_SRC,
  CF_BEACON_TOKEN,
} from "@/lib/analytics";
import { OG_ALT, OG_PATH, OG_SIZE } from "@/lib/og";
import { siteSchemaJson } from "@/lib/schema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "job search",
    "resume",
    "Claude Code",
    "Cursor",
    "GitHub Copilot",
    "agent skills",
  ],
  // The card is rendered by app/og.png/route.tsx. It is referenced explicitly rather
  // than via Next's opengraph-image convention, which would emit an extensionless URL
  // that GitHub Pages serves as application/octet-stream.
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [{ url: OG_PATH, ...OG_SIZE, alt: OG_ALT, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: OG_PATH, ...OG_SIZE, alt: OG_ALT }],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F4EA" },
    { media: "(prefers-color-scheme: dark)", color: "#151915" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: siteSchemaJson() }}
        />
      </head>
      <body className="bg-page text-body font-sans">
        {children}
        {/* Cloudflare Web Analytics — loaded after hydration so it never competes with
            first paint. Cookieless, so no consent banner is required. */}
        {ANALYTICS_ENABLED && (
          <Script
            id="cf-beacon"
            strategy="afterInteractive"
            src={CF_BEACON_SRC}
            data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN })}
          />
        )}
      </body>
    </html>
  );
}
