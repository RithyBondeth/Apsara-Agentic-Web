"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LandingCopy } from "@/language/landing-copy";

const terminalLineStyles = [
  { accentClassName: "text-[#7dd3fc]", valueClassName: "text-white" },
  { accentClassName: "text-[#fbbf24]", valueClassName: "text-[#fde68a]" },
  { accentClassName: "text-[#c4b5fd]", valueClassName: "text-white" },
  { accentClassName: "text-[#86efac]", valueClassName: "text-[#bef264]" },
  { accentClassName: "text-[#fca5a5]", valueClassName: "text-white" },
  { accentClassName: "text-[#67e8f9]", valueClassName: "text-white" },
] as const;

type LandingShowcaseTerminalProps = {
  copy: LandingCopy["showcase"]["terminal"];
};

export default function LandingShowcaseTerminal({
  copy,
}: LandingShowcaseTerminalProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const terminalLines = copy.lines;
  const screenReaderTranscript = terminalLines
    .map((line) =>
      line.kind === "command"
        ? `${line.prompt} ${line.value}`
        : `${line.label}: ${line.value}`
    )
    .join(". ");

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

      if (root.getBoundingClientRect().top <= window.innerHeight * 0.74) {
        timeline.play(0);
        return;
      }

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
  }, [copy, terminalLines]);

  return (
    <div
      ref={rootRef}
      className="rounded-[1.5rem] border border-white/8 bg-black/18 p-5 font-mono text-sm leading-7 text-white/85"
    >
      <p className="sr-only">
        {copy.screenReaderLabel}: {screenReaderTranscript}
      </p>

      <div aria-hidden="true" className="space-y-1">
        {terminalLines.map((line, index) => (
          <p
            key={line.kind === "command" ? `command-${index}` : `${line.label}-${index}`}
            ref={(node) => {
              lineRefs.current[index] = node;
            }}
          >
            {line.kind === "command" ? (
              <>
                <span className={terminalLineStyles[index]?.accentClassName}>
                  {line.prompt}
                </span>{" "}
              </>
            ) : (
              <>
                <span className={terminalLineStyles[index]?.accentClassName}>
                  {line.label}
                </span>
                <span className="text-white/40">:</span>{" "}
              </>
            )}

            <span
              ref={(node) => {
                valueRefs.current[index] = node;
              }}
              className={terminalLineStyles[index]?.valueClassName}
            />

            {index === terminalLines.length - 1 ? (
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
