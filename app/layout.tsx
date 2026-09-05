import type { Metadata, Viewport } from "next";
import "@fontsource-variable/figtree";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

const title = "Jumping Jobs — your job search, run from your agent's chat";
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
  openGraph: { title, description, url: "/", siteName: "Jumping Jobs", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/" },
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
