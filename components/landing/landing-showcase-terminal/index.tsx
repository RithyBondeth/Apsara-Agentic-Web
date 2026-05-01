"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LandingCopy } from "@/language/landing-copy";

type LandingShowcaseTerminalProps = {
  copy: LandingCopy["showcase"]["terminal"];
};

function Badge({
  label,
  variant,
}: {
  label: string;
  variant: "you" | "apsara" | "ok";
}) {
  const styles = {
    you: "bg-[#3168C2] text-white",
    apsara: "bg-[#8560DB] text-white",
    ok: "bg-[#3D9975] text-white",
  };
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase leading-none tracking-wide ${styles[variant]}`}
    >
      {label}
    </span>
  );
}

function ToolCall({ tool, detail }: { tool: string; detail: string }) {
  return (
    <div className="space-y-0.5 pl-1">
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs">
        <span className="text-[#7CB4FF]">◆</span>
        <span className="font-mono text-white/65">{tool}</span>
        <span className="text-white/25">↳</span>
        <span className="font-mono text-white/40">{detail}</span>
      </div>
      </div>
  );
}

function ToolResult({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-1.5 pl-5 text-xs">
      <span className="text-[#78D296]">✓</span>
      <span className="font-mono text-white/38">{message}</span>
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

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      const blocks = root.querySelectorAll<HTMLElement>("[data-cli-block]");

      if (prefersReducedMotion) {
        gsap.set(blocks, { autoAlpha: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.set(blocks, { autoAlpha: 0, y: 6 });

      const tl = gsap.timeline({ delay: 0.2, paused: true });

      blocks.forEach((block) => {
        const pause = parseFloat(block.dataset.pause ?? "0.12");
        tl.to(
          block,
          { autoAlpha: 1, y: 0, duration: 0.18, ease: "power2.out" },
          `+=${pause}`,
        );
      });

      if (root.getBoundingClientRect().top <= window.innerHeight * 0.74) {
        tl.play(0);
        return;
      }

      ScrollTrigger.create({
        trigger: root,
        once: true,
        onEnter: () => tl.play(0),
        start: "top 74%",
      });
    }, root);

    return () => context.revert();
  }, [copy]);

  return (
    <div
      ref={rootRef}
      className="overflow-y-auto overflow-x-hidden rounded-[1.5rem] border border-white/8 bg-[#111110] p-4 font-mono text-sm leading-6 text-white/85 space-y-2.5 max-h-[520px] scrollbar-none"
      style={{ scrollbarWidth: "none" }}
    >
      <p className="sr-only">{copy.screenReaderLabel}</p>

      {/* ── Welcome banner box ── */}
      <div
        data-cli-block
        data-pause="0"
        aria-hidden
        className="rounded border border-[#695c4e]/70 px-4 py-3 text-center space-y-2"
      >
        {/* Edition tag — rgb(104,170,255) */}
        <p className="text-[10px] tracking-widest text-[#68AAFF]">
          BONDETH EDITION · ALPHA
        </p>

        {/* APSARA — pixel font, top-to-bottom: blue→cyan→teal→green→yellow-green */}
        <p
          className="text-2xl sm:text-3xl leading-tight"
          style={{
            fontFamily: "var(--font-pixel), monospace",
            background:
              "linear-gradient(180deg, #78AFFF 0%, #6EC6FC 20%, #78D6E6 40%, #8ADCC3 60%, #A2DCA0 80%, #C8D88C 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          APSARA
        </p>

        {/* AGENTIC — pixel font, top-to-bottom: gold→amber→salmon→pink→purple→periwinkle */}
        <p
          className="text-2xl sm:text-3xl leading-tight"
          style={{
            fontFamily: "var(--font-pixel), monospace",
            background:
              "linear-gradient(180deg, #FFD75A 0%, #FFBE64 20%, #FCA282 40%, #F08CC8 60%, #C88CF8 80%, #94A2FF 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          AGENTIC
        </p>

        {/* Tagline — rgb(190,196,214) muted blue-gray */}
        <p className="text-[11px] tracking-wide text-[#BEC4D6]">
          project-first · workspace-aware · human-approved
        </p>

        {/* Welcome copy */}
        <div className="pt-1 space-y-0.5">
          {/* Title — rgb(246,239,230) cream */}
          <p className="text-xs font-bold text-[#F6EFE6]">
            Welcome to Apsara Agentic
          </p>
          {/* Subtitle — rgb(200,192,182) taupe */}
          <p className="text-[11px] text-[#C8C0B6]">
            Elegant local coding assistance for your workspace
          </p>
        </div>

        {/* Powered by — rgb(200,166,110) amber */}
        <p className="text-[11px] text-[#C8A66E]">Powered by Bondeth</p>
      </div>

      {/* ── Session info ── */}
      <div
        data-cli-block
        data-pause="0.5"
        aria-hidden
        className="space-y-0.5 text-xs"
      >
        <div className="flex gap-3">
          <span className="w-16 shrink-0 text-white/35">workspace</span>
          <span className="text-white/60 truncate">
            ~/Projects/apsara-agentic-cli
          </span>
        </div>
        <div className="flex gap-3">
          <span className="w-16 shrink-0 text-white/35">model</span>
          <span className="text-white/60">
            claude-sonnet-4-6{" "}
            <span className="text-white/30">200k ctx</span>{" "}
            <span className="text-[#78D296]">✓</span>
          </span>
        </div>
        <div className="flex gap-3">
          <span className="w-16 shrink-0 text-white/35">session</span>
          <span className="text-white/60">default</span>
        </div>
        <div className="flex gap-3">
          <span className="w-16 shrink-0 text-white/35">resumed</span>
          <span className="text-white/60">3 prior turns</span>
        </div>
        <p className="pt-1 text-[10px] text-white/22">
          /help for commands · /exit to quit · Esc+Enter for newline
        </p>
      </div>

      {/* ── Turn separator ── */}
      <div
        data-cli-block
        data-pause="0.3"
        aria-hidden
        className="flex items-center gap-2 text-[10px] text-white/22"
      >
        <span className="flex-1 border-t border-white/10" />
        <span className="shrink-0">turn 1 · 14:32:08</span>
        <span className="flex-1 border-t border-white/10" />
      </div>

      {/* ── [YOU] message ── */}
      <div
        data-cli-block
        data-pause="0.22"
        aria-hidden
        className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
      >
        <Badge label="you" variant="you" />
        <span className="text-white/78 text-xs leading-5">
          refactor the approval handler to reduce duplication
        </span>
      </div>

      {/* ── Spinner ── */}
      <div
        data-cli-block
        data-pause="0.18"
        aria-hidden
        className="flex items-center gap-2 text-xs text-[#6B9AFF]"
      >
        <span className="landing-terminal-caret">⠸</span>
        <span>reading your workspace</span>
        <span className="text-white/22 ml-1">3s</span>
      </div>

      {/* ── Tool calls ── */}
      <div data-cli-block data-pause="0.3" aria-hidden className="space-y-1">
        <ToolCall tool="read_file" detail='"src/approval.py"' />
        <ToolResult message="read 142 lines" />
      </div>
      <div data-cli-block data-pause="0.15" aria-hidden className="space-y-1">
        <ToolCall tool="search_codebase" detail='"approval handler"' />
        <ToolResult message="6 results" />
      </div>
      <div data-cli-block data-pause="0.15" aria-hidden className="space-y-1">
        <ToolCall tool="edit_file" detail='"src/approval.py"' />
        <ToolResult message="2 changes staged, awaiting approval" />
      </div>

      {/* ── [APSARA] response ── */}
      <div
        data-cli-block
        data-pause="0.28"
        aria-hidden
        className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
      >
        <Badge label="apsara" variant="apsara" />
        <span className="text-white/72 text-xs leading-5">
          Consolidated both handlers. Here&apos;s the diff:
        </span>
      </div>

      {/* ── Diff preview ── */}
      <div
        data-cli-block
        data-pause="0.2"
        aria-hidden
        className="rounded border border-white/8 bg-white/[0.03] px-3 py-2 space-y-0.5 text-xs leading-5"
      >
        <div className="text-[#FAC87C]">@@ approval.py @@</div>
        <div className="text-[#FF8E8E]">
          <span className="select-none text-[#FF8E8E]/60">- </span>
          def handle_approval(self, request):
        </div>
        <div className="text-[#FF8E8E]">
          <span className="select-none text-[#FF8E8E]/60">- </span>
          def handle_rejection(self, request):
        </div>
        <div className="text-[#78D296]">
          <span className="select-none text-[#78D296]/60">+ </span>
          def handle_decision(self, req, action):
        </div>
        <div className="text-white/25 pt-0.5">
          2 files · 4 insertions · 8 deletions
        </div>
      </div>

      {/* ── Approval prompt ── */}
      <div
        data-cli-block
        data-pause="0.18"
        aria-hidden
        className="rounded border border-white/12 bg-white/[0.02] px-3 py-2 text-xs text-white/50"
      >
        <span className="text-white/28">APPROVE? </span>
        update approval.py · 2 hunks
      </div>

      {/* ── Choice keys ── */}
      <div
        data-cli-block
        data-pause="0.14"
        aria-hidden
        className="flex flex-wrap gap-1.5 text-[10px]"
      >
        <span className="inline-flex items-center rounded border border-[#78D296]/55 px-2 py-0.5 text-[#78D296]">
          ↵ APPROVE
        </span>
        <span className="inline-flex items-center rounded border border-white/15 px-2 py-0.5 text-white/38">
          N REJECT
        </span>
        <span className="inline-flex items-center rounded border border-white/15 px-2 py-0.5 text-white/38">
          A ALWAYS
        </span>
        <span className="inline-flex items-center rounded border border-white/15 px-2 py-0.5 text-white/38">
          V FULL DIFF
        </span>
      </div>

      {/* ── Next [YOU] prompt ── */}
      <div
        data-cli-block
        data-pause="0.28"
        aria-hidden
        className="flex items-center gap-2"
      >
        <Badge label="you" variant="you" />
        <span className="landing-terminal-caret text-white/55">|</span>
      </div>
    </div>
  );
}
