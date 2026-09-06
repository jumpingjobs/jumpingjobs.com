import type { Metadata, Viewport } from "next";
import "@fontsource-variable/figtree";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { OG_ALT, OG_PATH, OG_SIZE } from "@/lib/og";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

const title = "Jumping Jobs — your job search, run from your agent’s chat";
const description =
  "A skills collection for Claude Code, Cursor, Copilot and friends. Build a durable profile, find and assess roles, tailor your resume to each posting and prep for interviews — for one applicant or a whole household.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jumpingjobs.com"),
  title,
  description,
  applicationName: "Jumping Jobs",
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
    siteName: "Jumping Jobs",
    title,
    description,
    locale: "en_US",
    images: [{ url: OG_PATH, ...OG_SIZE, alt: OG_ALT, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="bg-page text-body font-sans">{children}</body>
    </html>
  );
}
