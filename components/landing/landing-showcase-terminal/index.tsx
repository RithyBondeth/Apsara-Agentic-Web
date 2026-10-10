"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LandingCopy } from "@/language/landing-copy";

type LandingShowcaseTerminalProps = {
  copy: LandingCopy["showcase"]["terminal"];
};

const pixelGlyphs: Record<string, readonly string[]> = {
  A: [".XX.", "X..X", "XXXX", "X..X", "X..X"],
  P: ["XXX.", "X..X", "XXX.", "X...", "X..."],
  R: ["XXX.", "X..X", "XXX.", "X.X.", "X..X"],
  S: [".XXX", "X...", ".XX.", "...X", "XXX."],
};

const logoLeftColors = ["#6096fa", "#75a4fb", "#8bb3fb", "#75a4fb", "#6096fa"];
const logoRightColors = ["#fad88f", "#fbe0a5", "#fce5b5", "#fbe0a5", "#fad88f"];

const pixelLogoCells = Array.from({ length: 5 }, (_, row) =>
  "APSARA".split("").flatMap((letter, letterIndex) => {
    const glyphCells = (pixelGlyphs[letter]?.[row] ?? "....")
      .split("")
      .map((pixel, columnIndex) => ({
        active: pixel === "X",
        color: letterIndex < 3 ? logoLeftColors[row] : logoRightColors[row],
        key: `${row}-${letterIndex}-${columnIndex}`,
      }));

    if (letterIndex < 5) {
      glyphCells.push({
        active: false,
        color: "transparent",
        key: `${row}-${letterIndex}-gap`,
      });
    }

    return glyphCells;
  }),
).flat();

function PixelLogo() {
  return (
    <div
      data-cli-block
      aria-label="APSARA"
      className="landing-cli-pixel-logo select-none"
      role="img"
    >
      {pixelLogoCells.map((cell) => (
        <span
          key={cell.key}
          aria-hidden
          className="landing-cli-pixel"
          style={{
            backgroundColor: cell.active ? cell.color : "transparent",
            boxShadow: cell.active ? `0 0 8px ${cell.color}1f` : "none",
          }}
        />
      ))}
    </div>
  );
}

function SidebarHeading({
  color,
  icon,
  title,
}: {
  color: string;
  icon: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-1.5 font-bold" style={{ color }}>
      <span>
        {icon} {title}
      </span>
      <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap opacity-35">
        ─────────────────
      </span>
    </div>
  );
}

export default function LandingShowcaseTerminal({
  copy,
}: LandingShowcaseTerminalProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const blocks = root.querySelectorAll<HTMLElement>("[data-cli-block]");
        gsap.from(blocks, {
          autoAlpha: 0,
          y: 4,
          duration: 0.4,
          stagger: 0.07,
          ease: "power2.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: { trigger: root, start: "top 90%", once: true },
        });
      });
    }, root);

    return () => {
      media.revert();
      context.revert();
    };
  }, [copy]);

  return (
    <div
      ref={rootRef}
      className="flex h-[520px] overflow-hidden rounded-lg border border-[#303743] bg-[#12151d] font-mono text-[#f5f1e9]"
    >
      <p className="sr-only">{copy.screenReaderLabel}</p>

      <div lang="en" className="flex min-w-0 flex-1 flex-col font-mono">
        <div className="flex min-h-0 flex-1">
          <section className="min-w-0 flex-1 overflow-hidden px-3 py-4 sm:px-4">
            <PixelLogo />

            <div
              data-cli-block
              className="mt-3 text-center text-[8px] leading-4 sm:text-[9px]"
            >
              <p className="text-[#a9adb7]">
                AI coding assistance in your terminal
              </p>
              <p className="text-[#fad88f]">Makor · Apsara’s pixel mascot</p>
            </div>

            <div className="mt-5 space-y-3 text-[10px] leading-[1.55] sm:text-[11px]">
              <div
                data-cli-block
                className="border-l-2 border-[#6096fa] pl-2 font-bold text-[#f5f1e9]"
              >
                Add a /health endpoint that returns a status of ok
              </div>

              <div data-cli-block data-pause="0.18" className="space-y-1 pl-2">
                <p>
                  <span className="text-[#78c896]">✓</span>{" "}
                  <span className="text-[#b4d2ff]">read_file</span>{" "}
                  <span className="text-[#8c8276]">142 lines read</span>
                </p>
                <p>
                  <span className="text-[#78c896]">✓</span>{" "}
                  <span className="text-[#b4d2ff]">search_files</span>{" "}
                  <span className="text-[#8c8276]">6 results</span>
                </p>
              </div>

              <div data-cli-block data-pause="0.18">
                <p className="flex items-center gap-2 text-[#fad88f]">
                  <Image
                    src="/assets/makor/head.png"
                    alt="Makor"
                    width={24}
                    height={24}
                    className="landing-makor-pixel"
                  />
                  Makor · thinking
                </p>
                <p className="mt-2 max-w-2xl text-[#f5f1e9]">
                  I found the API routes and prepared a health endpoint.
                  Review the proposed change below.
                </p>
              </div>

              <div
                data-cli-block
                className="border-l-2 border-[#fad88f] pl-2"
              >
                <p>
                  <span className="font-bold text-[#fad88f]">Approve?</span>{" "}
                  <span className="font-bold text-[#f7e6be]">
                    Update file src/routes.py
                  </span>
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="bg-[#50aa8c] px-1.5 py-0.5 font-bold text-[#11151a]">
                    ↵ approve
                  </span>
                  <span className="bg-[#c86450] px-1.5 py-0.5 font-bold text-white">
                    n reject
                  </span>
                  <span className="bg-[#5078c8] px-1.5 py-0.5 font-bold text-white">
                    a approve rest
                  </span>
                  <span className="bg-[#505f7d] px-1.5 py-0.5 font-bold text-white">
                    v full diff
                  </span>
                </div>
              </div>

              <div
                data-cli-block
                className="flex items-center gap-2 text-[#6096fa]"
              >
                <span className="landing-terminal-caret">⠸</span>
                <span>Makor is checking the work</span>
                <span className="text-[#8c8276]">3s</span>
              </div>
            </div>
          </section>

          <aside className="hidden w-54 shrink-0 overflow-hidden border-l border-[#303743] bg-[#181c25] px-3 py-3 text-[8px] leading-[1.45] text-[#8c93a6] md:block lg:w-56">
            <div data-cli-block data-pause="0.04">
              <p className="font-bold text-[#f5f1e9]">
                <span className="text-[#6096fa]">◆</span> default
              </p>
              <p className="mt-0.5 pl-3 text-[#747b8c]">
                resumed · example session
              </p>
            </div>

            <div data-cli-block data-pause="0.08" className="mt-3">
              <SidebarHeading color="#6096fa" icon="◍" title="Context" />
              <p className="mt-1.5 pl-3">
                <span className="text-[#78c896]">▰▰</span>
                <span className="text-[#3e4456]">▱▱▱▱▱▱▱▱</span>{" "}
                <span className="text-[#78c896]">18%</span>
              </p>
              <p className="mt-1 pl-3">
                <span className="text-[#f5f1e9]">23,040</span> tokens
              </p>
              <p className="pl-3">
                <span className="text-[#82d2a0]">$0.00</span> spent
              </p>
            </div>

            <div data-cli-block data-pause="0.08" className="mt-3">
              <SidebarHeading color="#fad88f" icon="✦" title="Model" />
              <p className="mt-1.5 pl-3 font-bold text-[#f5f1e9]">
                Space Bunny Free
              </p>
              <p className="pl-3">
                <span className="text-[#bec8dc]">OpenCode Zen</span> ·{" "}
                <span className="text-[#8fd2aa]">provider</span>
              </p>
              <p className="pl-3">selected model</p>
              <p className="pl-3 text-[#78c896]">✓ key set</p>
            </div>

            <div data-cli-block data-pause="0.08" className="mt-3">
              <SidebarHeading color="#82d2a0" icon="❯" title="Session" />
              <p className="mt-1.5 pl-3">
                <span className="text-[#f5f1e9]">3</span> turns ·{" "}
                <span className="text-[#f5f1e9]">6</span> messages
              </p>
              <p className="pl-3">
                mode <span className="font-bold text-[#6096fa]">Build</span>
              </p>
              <p className="pl-3">bash off</p>
              <p className="pl-3">last turn 5 steps · /details</p>
            </div>

            <div data-cli-block data-pause="0.08" className="mt-3">
              <SidebarHeading color="#fad88f" icon="⌂" title="Workspace" />
              <p className="mt-1.5 pl-3">
                …/Apsara Agentic/
                <br />
                <span className="pl-3">apsara-agentic-cli</span>
              </p>
            </div>

            <div
              data-cli-block
              className="mt-3 space-y-0.5 pl-3"
            >
              <p>
                <span className="font-bold text-[#6096fa]">/model</span> switch
                models
              </p>
              <p>
                <span className="font-bold text-[#6096fa]">/status</span>{" "}
                session status
              </p>
              <p>
                <span className="font-bold text-[#6096fa]">/help</span> all
                commands
              </p>
            </div>

            <div data-cli-block data-pause="0.08" className="mt-3">
              <p>
                <span className="text-[#78c896]">●</span>{" "}
                <span className="font-bold text-[#f5f1e9]">Apsara</span>{" "}
                <span className="text-[#fad88f]">0.1.0a2</span>
              </p>
              <p className="pl-3 text-[#fad88f]">by Bondeth</p>
            </div>
          </aside>
        </div>

        <div
          data-cli-block
          className="mx-2 mb-1 shrink-0 overflow-hidden rounded-lg border border-[#6096fa] text-[8px] sm:text-[9px]"
        >
          <div className="flex min-h-9">
            <span className="w-1 shrink-0 bg-[#6096fa]" />
            <span className="px-2 py-2 text-[#5a616e]">
              Ask about your code, describe a bug, or request a feature...
            </span>
          </div>
          <div className="flex border-t border-[#202638]">
            <span className="w-1 shrink-0 bg-[#6096fa]" />
            <p className="px-2 py-1.5">
              <span className="font-bold text-[#6096fa]">Build</span>{" "}
              <span className="text-[#747b8c]">·</span>{" "}
              <span className="font-bold text-[#f5f1e9]">Space Bunny Free</span>{" "}
              <span className="text-[#747b8c]">OpenCode Zen</span>
            </p>
          </div>
        </div>

        <div className="flex h-6 shrink-0 items-center justify-between gap-3 bg-[#181c25] px-2 text-[7px] text-[#747b8c] sm:text-[8px]">
          <span className="min-w-0 truncate">
            <span className="text-[#fad88f]">⌂</span> ~/Projects/Apsara
            Agentic/apsara-agentic-cli
          </span>
          <span className="shrink-0">
            23.0K (18%) ·{" "}
            <span className="font-bold text-[#d2d8e4]">ctrl+p</span> commands
          </span>
        </div>
      </div>
    </div>
  );
}
