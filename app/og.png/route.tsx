import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { RABBIT_PATH, RABBIT_VIEWBOX } from "@/lib/rabbit";
import { OG_SIZE } from "@/lib/og";

/**
 * The Open Graph share card, served at /og.png.
 *
 * Deliberately a Route Handler in a folder named `og.png` rather than Next's
 * app/opengraph-image.tsx convention: that convention exports to an extensionless file,
 * and GitHub Pages serves extensionless files as application/octet-stream, which the
 * Facebook, LinkedIn and Slack scrapers reject. The folder name puts a real .png on the
 * URL, so Pages serves it as image/png. Tags are wired up manually in app/layout.tsx.
 */
export const dynamic = "force-static";

// Satori has no CSS custom properties, so the light theme's birch/peat/moss values are
// inlined here. Keep in step with styles/tokens/colors.css.
const BIRCH_0 = "#FFFDF8";
const BIRCH_1 = "#F8F4EA";
const MOSS_2 = "#C4D3B3";
const MOSS_5 = "#4F6B43";
const PEAT_1 = "#4A4338";
const PEAT_4 = "#1B1813";

// Satori cannot read woff2, so static instances are committed under assets/fonts/.
const font = (file: string) => readFile(join(process.cwd(), "assets", "fonts", file));

function Bloom({ top, right, size, color }: { top: number; right: number; size: number; color: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        right,
        width: size,
        height: size,
        borderRadius: 999,
        background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,0) 70%)`,
      }}
    />
  );
}

export async function GET() {
  const [regular, bold, mono] = await Promise.all([
    font("Figtree-Regular.ttf"),
    font("Figtree-Bold.ttf"),
    font("JetBrainsMono-Regular.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BIRCH_1,
          padding: "72px 80px",
          fontFamily: "Figtree",
        }}
      >
        <Bloom top={-230} right={-120} size={700} color="rgba(147,171,125,0.50)" />
        <Bloom top={150} right={-220} size={620} color="rgba(217,188,99,0.38)" />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox={RABBIT_VIEWBOX} fill={MOSS_5}>
            <path d={RABBIT_PATH} />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: PEAT_4,
            }}
          >
            jumping<span style={{ color: MOSS_5 }}>jobs</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
          <div style={{ display: "flex", fontSize: 30, color: PEAT_1, letterSpacing: "-0.015em" }}>
            Not just easier.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: PEAT_4,
            }}
          >
            Your job search, run from your agent’s chat.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: PEAT_4,
              color: BIRCH_0,
              borderRadius: 16,
              padding: "18px 26px",
              fontSize: 25,
              fontFamily: "JetBrains Mono",
            }}
          >
            <span style={{ color: MOSS_2 }}>$</span>
            <span>npx jumpingjobs install</span>
          </div>
          <div style={{ display: "flex", fontSize: 22, color: PEAT_1 }}>
            Claude Code · Cursor · Copilot · Gemini CLI · Codex CLI
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Figtree", data: regular, weight: 400, style: "normal" },
        { name: "Figtree", data: bold, weight: 700, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
