import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Apsara Agentic: your coding agent, inside your repo, with Makor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [pixelFont, bodyFont, sprite, head] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/PressStart2P-Regular.ttf")),
    readFile(join(process.cwd(), "app/fonts/NotoSansKhmer-400.ttf")),
    readFile(join(process.cwd(), "public/assets/makor/mascot.png")),
    readFile(join(process.cwd(), "public/assets/makor/head.png")),
  ]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#12151d",
          color: "#f5f1e9",
          padding: "48px 64px",
          fontFamily: "Body",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #303743",
            paddingBottom: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* Native image elements are required by ImageResponse. */}
            <img
              src={`data:image/png;base64,${head.toString("base64")}`}
              alt="Makor, the Apsara Agentic logo"
              width={60}
              height={60}
            />
            <span
              style={{ fontFamily: "Pixel", color: "#fad88f", fontSize: 20 }}
            >
              APSARA AGENTIC
            </span>
          </div>
          <svg width={48} height={50} viewBox="0 0 80 84" fill="none">
            <path
              d="M40 61C25 44 29 25 40 8C51 25 55 44 40 61ZM40 61C20 58 11 43 10 26C29 29 40 43 40 61ZM40 61C60 58 69 43 70 26C51 29 40 43 40 61ZM23 73H57M30 78H50"
              stroke="#fad88f"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ color: "#a9adb7", fontSize: 18 }}>
            LOCAL-FIRST · BYOK
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "54%" }}
          >
            <span style={{ fontSize: 52 }}>Your coding agent.</span>
            <span
              style={{
                fontFamily: "Body",
                color: "#6096fa",
                fontSize: 44,
                lineHeight: 1.7,
                marginTop: 24,
              }}
            >
              Inside your repo.
            </span>
            <span style={{ color: "#a9adb7", fontSize: 22, marginTop: 24 }}>
              Your workspace. Your model. Your call.
            </span>
          </div>
          {/* ImageResponse requires a native image element for embedded artwork. */}
          <img
            src={`data:image/png;base64,${sprite.toString("base64")}`}
            alt="Makor pixel mascot"
            width={490}
            height={327}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#fad88f",
            borderTop: "1px solid #303743",
            paddingTop: 22,
            fontSize: 20,
          }}
        >
          <span>$</span>
          <span>cd your-project &amp;&amp; apsara</span>
          <span>_</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pixel", data: pixelFont, weight: 400, style: "normal" },
        { name: "Body", data: bodyFont, weight: 400, style: "normal" },
      ],
    },
  );
}
