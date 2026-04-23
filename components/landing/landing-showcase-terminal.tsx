"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type TerminalLine =
  | {
      id: string;
      kind: "command";
      prompt: string;
      promptClassName: string;
      value: string;
      valueClassName: string;
    }
  | {
      id: string;
      kind: "field";
      label: string;
      labelClassName: string;
      value: string;
      valueClassName: string;
    };

const terminalLines: TerminalLine[] = [
  {
    id: "command",
    kind: "command",
    prompt: "$",
    promptClassName: "text-[#7dd3fc]",
    value:
      'apsara run "tighten the approval copy and keep the review gate intact"',
    valueClassName: "text-white",
  },
  {
    id: "workspace",
    kind: "field",
    label: "workspace",
    labelClassName: "text-[#fbbf24]",
    value: "./apsara-agentic-api",
    valueClassName: "text-[#fde68a]",
  },
  {
    id: "trace",
    kind: "field",
    label: "trace",
    labelClassName: "text-[#c4b5fd]",
    value: "reading app/api/approval.py and app/ui/review-panel.tsx",
    valueClassName: "text-white",
  },
  {
    id: "draft",
    kind: "field",
    label: "draft",
    labelClassName: "text-[#86efac]",
    value: "preparing smaller copy edits without bypassing human review",
    valueClassName: "text-[#bef264]",
  },
  {
    id: "diff",
    kind: "field",
    label: "diff",
    labelClassName: "text-[#fca5a5]",
    value: "2 files changed, preview generated before any write lands",
    valueClassName: "text-white",
  },
  {
    id: "status",
    kind: "field",
    label: "status",
    labelClassName: "text-[#67e8f9]",
    value: "Awaiting approval to apply the patch.",
    valueClassName: "text-white",
  },
];

const screenReaderTranscript = terminalLines
  .map((line) =>
    line.kind === "command"
      ? `${line.prompt} ${line.value}`
      : `${line.label}: ${line.value}`
  )
  .join(". ");

export default function LandingShowcaseTerminal() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;

    if (!root) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const context = gsap.context(() => {
      const lines = lineRefs.current.filter(
        (line): line is HTMLParagraphElement => Boolean(line)
      );
      const values = valueRefs.current.filter(
        (value): value is HTMLSpanElement => Boolean(value)
      );

      if (!lines.length || !values.length) {
        return;
      }

      if (prefersReducedMotion) {
        lines.forEach((line) => {
          gsap.set(line, {
            autoAlpha: 1,
            clearProps: "opacity,visibility,transform",
            y: 0,
          });
        });

        values.forEach((value, index) => {
          value.textContent = terminalLines[index]?.value ?? "";
        });

        return;
      }

      gsap.set(lines, {
        autoAlpha: 0,
        y: 8,
      });

      values.forEach((value) => {
        value.textContent = "";
      });

      const timeline = gsap.timeline({
        delay: 0.28,
        paused: true,
      });

      terminalLines.forEach((line, index) => {
        const lineElement = lineRefs.current[index];
        const valueElement = valueRefs.current[index];

        if (!lineElement || !valueElement) {
          return;
        }

        const typingState = { progress: 0 };
        const typingDuration = Math.max(line.value.length * 0.02, 0.42);

        timeline.to(lineElement, {
          autoAlpha: 1,
          duration: 0.18,
          ease: "power2.out",
          y: 0,
        });

        timeline.to(typingState, {
          duration: typingDuration,
          ease: "none",
          onStart: () => {
            valueElement.textContent = "";
          },
          onUpdate: () => {
            const characterCount = Math.round(
              typingState.progress * line.value.length
            );
            valueElement.textContent = line.value.slice(0, characterCount);
          },
          progress: 1,
        });

        if (index < terminalLines.length - 1) {
          timeline.to({}, { duration: 0.12 });
        }
      });

      ScrollTrigger.create({
        trigger: root,
        once: true,
        onEnter: () => {
          timeline.play(0);
        },
        start: "top 74%",
      });
    }, root);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="rounded-[1.5rem] border border-white/8 bg-black/18 p-5 font-mono text-sm leading-7 text-white/85"
    >
      <p className="sr-only">
        Agentic coding example: {screenReaderTranscript}
      </p>

      <div aria-hidden="true" className="space-y-1">
        {terminalLines.map((line, index) => (
          <p
            key={line.id}
            ref={(node) => {
              lineRefs.current[index] = node;
            }}
          >
            {line.kind === "command" ? (
              <>
                <span className={line.promptClassName}>{line.prompt}</span>{" "}
              </>
            ) : (
              <>
                <span className={line.labelClassName}>{line.label}</span>
                <span className="text-white/40">:</span>{" "}
              </>
            )}

            <span
              ref={(node) => {
                valueRefs.current[index] = node;
              }}
              className={line.valueClassName}
            />

            {line.id === "status" ? (
              <span
                aria-hidden="true"
                className="landing-terminal-caret ml-1 text-white/75"
              >
                |
              </span>
            ) : null}
          </p>
        ))}
      </div>
    </div>
  );
}
