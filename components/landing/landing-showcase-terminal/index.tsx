"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
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

const logoLeftColors = ["#78afff", "#6ec6fc", "#78d6e6", "#8adcc3", "#a2dca0"];
const logoRightColors = ["#ffd75a", "#fcb078", "#f596aa", "#dc91eb", "#a0a0ff"];

const pixelLogoCells = Array.from({ length: 5 }, (_, row) =>
  "APSARA".split("").flatMap((letter, letterIndex) => {
    const glyphCells = (pixelGlyphs[letter]?.[row] ?? "....")
      .split("")
      .map((pixel, columnIndex) => ({
        active: pixel === "X",
        color:
          letterIndex < 3 ? logoLeftColors[row] : logoRightColors[row],
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
      data-pause="0"
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

    if (!root) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      const blocks = root.querySelectorAll<HTMLElement>("[data-cli-block]");

      if (prefersReducedMotion) {
        gsap.set(blocks, { autoAlpha: 1, clearProps: "all", y: 0 });
        return;
      }

      gsap.set(blocks, { autoAlpha: 0, y: 5 });

      const timeline = gsap.timeline({ delay: 0.15, paused: true });

      blocks.forEach((block) => {
        timeline.to(
          block,
          {
            autoAlpha: 1,
            duration: 0.16,
            ease: "power2.out",
            y: 0,
          },
          `+=${Number(block.dataset.pause ?? "0.08")}`,
        );
      });

      if (root.getBoundingClientRect().top <= window.innerHeight * 0.76) {
        timeline.play(0);
        return;
      }

      ScrollTrigger.create({
        trigger: root,
        once: true,
        onEnter: () => timeline.play(0),
        start: "top 76%",
      });
    }, root);

    return () => context.revert();
  }, [copy]);

  return (
    <div
      ref={rootRef}
      className="flex h-[520px] overflow-hidden rounded-lg border border-[#242938] bg-[#090b0f] font-mono text-[#f0ece7]"
    >
      <p className="sr-only">{copy.screenReaderLabel}</p>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1">
          <section className="min-w-0 flex-1 overflow-hidden px-3 py-4 sm:px-4">
            <PixelLogo />

            <div
              data-cli-block
              data-pause="0.12"
              className="mt-3 text-center text-[8px] leading-4 sm:text-[9px]"
            >
              <p className="text-[#a8accd]">
                Elegant local coding assistance for your workspace
              </p>
              <p className="text-[#c8a66e]">Powered by Bondeth · v0.1.0</p>
            </div>

            <div className="mt-5 space-y-3 text-[9px] leading-[1.45] sm:text-[10px]">
              <div
                data-cli-block
                data-pause="0.2"
                className="border-l-2 border-[#6096fa] pl-2 font-bold text-[#e1e6f2]"
              >
                tighten the approval copy and keep the review gate intact
              </div>

              <div data-cli-block data-pause="0.18" className="space-y-1 pl-2">
                <p>
                  <span className="text-[#78c896]">✓</span>{" "}
                  <span className="text-[#b4d2ff]">read_file</span>{" "}
                  <span className="text-[#8c8276]">142 lines read</span>
                </p>
                <p>
                  <span className="text-[#78c896]">✓</span>{" "}
                  <span className="text-[#b4d2ff]">search_codebase</span>{" "}
                  <span className="text-[#8c8276]">6 results</span>
                </p>
              </div>

              <div data-cli-block data-pause="0.18">
                <p className="text-[#f0aa5a]">+ Thought: 3.2s</p>
                <p className="mt-2 max-w-[42rem] text-[#f0ece7]">
                  I found the duplicated approval copy and prepared a smaller,
                  review-safe change.
                </p>
              </div>

              <div
                data-cli-block
                data-pause="0.18"
                className="border-l-2 border-[#f0aa5a] pl-2"
              >
                <p>
                  <span className="font-bold text-[#f7c864]">Approve?</span>{" "}
                  <span className="font-bold text-[#f7e6be]">
                    Update file src/approval.py
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
                    a always
                  </span>
                  <span className="bg-[#505f7d] px-1.5 py-0.5 font-bold text-white">
                    v full diff
                  </span>
                </div>
              </div>

              <div
                data-cli-block
                data-pause="0.2"
                className="flex items-center gap-2 text-[#7f9eff]"
              >
                <span className="landing-terminal-caret">⠸</span>
                <span>Apsara is working</span>
                <span className="text-[#8c8276]">3s</span>
              </div>
            </div>
          </section>

          <aside className="hidden w-[13.5rem] shrink-0 overflow-hidden border-l border-[#3d4668] bg-[#0e1015] px-3 py-3 text-[8px] leading-[1.45] text-[#8c93a6] md:block lg:w-[14rem]">
            <div data-cli-block data-pause="0.04">
              <p className="font-bold text-[#e1e6f2]">
                <span className="text-[#6096fa]">◆</span> default
              </p>
              <p className="mt-0.5 pl-3 text-[#747b8c]">
                resumed · 2026-07-18 22:54
              </p>
            </div>

            <div data-cli-block data-pause="0.08" className="mt-3">
              <SidebarHeading color="#6ec8eb" icon="◍" title="Context" />
              <p className="mt-1.5 pl-3">
                <span className="text-[#78c896]">▰▰</span>
                <span className="text-[#3e4456]">▱▱▱▱▱▱▱▱</span>{" "}
                <span className="text-[#78c896]">18%</span>
              </p>
              <p className="mt-1 pl-3">
                <span className="text-[#e1e6f2]">23,040</span> tokens
              </p>
              <p className="pl-3">
                <span className="text-[#82d2a0]">$0.23</span> spent
              </p>
            </div>

            <div data-cli-block data-pause="0.08" className="mt-3">
              <SidebarHeading color="#be96fa" icon="✦" title="Model" />
              <p className="mt-1.5 pl-3 font-bold text-[#e1e6f2]">
                Llama 3.2 (local)
              </p>
              <p className="pl-3">
                <span className="text-[#bec8dc]">Ollama</span> ·{" "}
                <span className="text-[#8fd2aa]">local</span>
              </p>
              <p className="pl-3">128k ctx</p>
              <p className="pl-3 text-[#78c896]">✓ key set</p>
            </div>

            <div data-cli-block data-pause="0.08" className="mt-3">
              <SidebarHeading color="#82d2a0" icon="❯" title="Session" />
              <p className="mt-1.5 pl-3">
                <span className="text-[#e1e6f2]">3</span> turns ·{" "}
                <span className="text-[#e1e6f2]">6</span> messages
              </p>
              <p className="pl-3">
                mode <span className="font-bold text-[#6096fa]">Build</span>
              </p>
              <p className="pl-3">bash off</p>
              <p className="pl-3">last turn 5 steps · /details</p>
            </div>

            <div data-cli-block data-pause="0.08" className="mt-3">
              <SidebarHeading color="#f0be6e" icon="⌂" title="Workspace" />
              <p className="mt-1.5 pl-3">
                …/Apsara Agentic/
                <br />
                <span className="pl-3">apsara-agentic-cli</span>
              </p>
            </div>

            <div
              data-cli-block
              data-pause="0.08"
              className="mt-3 space-y-0.5 pl-3"
            >
              <p>
                <span className="font-bold text-[#8cb4ff]">/models</span>{" "}
                switch models
              </p>
              <p>
                <span className="font-bold text-[#8cb4ff]">/status</span>{" "}
                session status
              </p>
              <p>
                <span className="font-bold text-[#8cb4ff]">/help</span> all
                commands
              </p>
            </div>

            <div data-cli-block data-pause="0.08" className="mt-3">
              <p>
                <span className="text-[#78c896]">●</span>{" "}
                <span className="font-bold text-[#e1e6f2]">Apsara</span>{" "}
                <span className="text-[#be96fa]">v0.1.0</span>
              </p>
              <p className="pl-3 text-[#f0be6e]">by Bondeth</p>
            </div>
          </aside>
        </div>

        <div
          data-cli-block
          data-pause="0.12"
          className="mx-2 mb-1 shrink-0 overflow-hidden rounded-lg border border-[#5a6cb4] text-[8px] sm:text-[9px]"
        >
          <div className="flex min-h-9">
            <span className="w-1 shrink-0 bg-[#6096fa]" />
            <span className="px-2 py-2 text-[#5a616e]">
              Ask anything... &quot;What is the tech stack of this
              project?&quot;
            </span>
          </div>
          <div className="flex border-t border-[#202638]">
            <span className="w-1 shrink-0 bg-[#6096fa]" />
            <p className="px-2 py-1.5">
              <span className="font-bold text-[#6096fa]">Build</span>{" "}
              <span className="text-[#747b8c]">·</span>{" "}
              <span className="font-bold text-[#e1e6f2]">
                Llama 3.2 (local)
              </span>{" "}
              <span className="text-[#747b8c]">Ollama</span>
            </p>
          </div>
        </div>

        <div className="flex h-6 shrink-0 items-center justify-between gap-3 bg-[#12141a] px-2 text-[7px] text-[#747b8c] sm:text-[8px]">
          <span className="min-w-0 truncate">
            <span className="text-[#f0be6e]">⌂</span>{" "}
            ~/Projects/Apsara Agentic/apsara-agentic-cli
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
