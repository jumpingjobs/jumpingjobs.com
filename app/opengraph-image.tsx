import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { RABBIT_PATH, RABBIT_VIEWBOX } from "@/lib/rabbit";

export const alt =
  "Jumping Jobs — your job search, run from your agent\u2019s chat. Install with npx jumpingjobs install.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required by `output: "export"` — renders the card once at build time into a static PNG.
export const dynamic = "force-static";

// Palette is inlined rather than read from tokens: the card renders in Satori, which
// has no CSS custom properties. Values are the light theme's birch/peat/moss.
const BIRCH_0 = "#FFFDF8";
const BIRCH_1 = "#F8F4EA";
const PEAT_1 = "#4A4338";
const PEAT_4 = "#1B1813";
const MOSS_5 = "#4F6B43";

async function figtree(file: string) {
  return readFile(join(process.cwd(), "assets", "fonts", file));
}

export default async function OpenGraphImage() {
  const [regular, bold, mono] = await Promise.all([
    figtree("Figtree-Regular.ttf"),
    figtree("Figtree-Bold.ttf"),
    figtree("JetBrainsMono-Regular.ttf"),
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
        {/* Watercolour bloom, flattened to a radial gradient Satori can render. */}
        <div
          style={{
            position: "absolute",
            top: -230,
            right: -120,
            width: 700,
            height: 700,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(147,171,125,0.50) 0%, rgba(147,171,125,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 150,
            right: -220,
            width: 620,
            height: 620,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(217,188,99,0.38) 0%, rgba(217,188,99,0) 70%)",
          }}
        />

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
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 400,
              color: PEAT_1,
              letterSpacing: "-0.015em",
            }}
          >
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
            <span style={{ color: "#C4D3B3" }}>$</span>
            <span>npx jumpingjobs install</span>
          </div>
          <div style={{ display: "flex", fontSize: 22, color: PEAT_1 }}>
            Claude Code · Cursor · Copilot · Gemini CLI · Codex CLI
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Figtree", data: regular, weight: 400, style: "normal" },
        { name: "Figtree", data: bold, weight: 700, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
