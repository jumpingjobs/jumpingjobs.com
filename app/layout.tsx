import type { Metadata, Viewport } from "next";
import "@fontsource-variable/figtree";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

const title = "Jumping Jobs — your job search, run from your agent’s chat";
const description =
  "A skills collection for Claude Code, Cursor, Copilot and friends. Build one durable profile, find and assess roles, tailor your resume to each posting and prep for interviews.";

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
  // The card image itself comes from app/opengraph-image.tsx — Next injects
  // og:image, its dimensions, type and alt text, and mirrors them onto twitter:image.
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Jumping Jobs",
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
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
