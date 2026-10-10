"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LandingLocale } from "@/language/landing-copy";

gsap.registerPlugin(ScrollTrigger);
const clearReveal = "opacity,visibility,transform";

export default function LandingPageAnimations({
  locale,
}: {
  locale: LandingLocale;
}) {
  const hasPlayedIntro = useRef(false);

  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>("#top");
    if (!root) return;
    const media = gsap.matchMedia();
    const playIntro = !hasPlayedIntro.current;
    hasPlayedIntro.current = true;

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        const header = root.querySelector('[data-gsap="header"]');
        const items = root.querySelectorAll(
          '[data-gsap="hero-item"]:not([data-hero="title"]):not([data-hero="signals"]):not([data-hero="chevron"])',
        );
        const titleLines = root.querySelectorAll("[data-hero-line]");
        const stage = root.querySelector("[data-hero-stage]");
        const frame = root.querySelector("[data-hero-frame]");
        const codeLines = root.querySelectorAll("[data-code-line]");

        if (header && playIntro)
          intro.from(
            header,
            { autoAlpha: 0, y: -10, duration: 0.6, clearProps: clearReveal },
            0,
          );
        if (items.length && playIntro)
          intro.from(
            items,
            {
              autoAlpha: 0,
              y: 18,
              stagger: 0.1,
              duration: 0.85,
              clearProps: clearReveal,
            },
            0.16,
          );
        if (titleLines.length && playIntro)
          intro.from(
            titleLines,
            {
              yPercent: 110,
              stagger: 0.12,
              duration: 1.05,
              ease: "power4.out",
              clearProps: "transform",
            },
            0.2,
          );
        if (stage && playIntro)
          intro.from(
            stage,
            {
              autoAlpha: 0,
              y: 38,
              scale: 0.92,
              duration: 1.4,
              ease: "power4.out",
              clearProps: clearReveal,
            },
            0.35,
          );
        if (codeLines.length && playIntro)
          intro.from(
            codeLines,
            {
              autoAlpha: 0,
              x: 8,
              stagger: 0.065,
              duration: 0.5,
              clearProps: clearReveal,
            },
            0.7,
          );
        if (playIntro) {
          const aura = root.querySelector("[data-hero-aura]");
          const progress = root.querySelector("[data-hero-progress]");
          const result = root.querySelector("[data-hero-result]");
          const check = root.querySelector("[data-hero-check]");
          if (aura)
            intro.from(
              aura,
              {
                opacity: 0,
                scale: 0.7,
                duration: 1.8,
                clearProps: clearReveal,
              },
              0.3,
            );
          if (progress)
            intro.from(
              progress,
              {
                scaleX: 0,
                duration: 1.25,
                ease: "power2.inOut",
                clearProps: "transform",
              },
              0.8,
            );
          if (result)
            intro.from(
              result,
              { autoAlpha: 0, y: 8, duration: 0.65, clearProps: clearReveal },
              1.45,
            );
          if (check)
            intro.from(
              check,
              {
                scale: 0.4,
                rotation: -15,
                duration: 0.65,
                ease: "back.out(1.4)",
                clearProps: "transform",
              },
              1.7,
            );
        }
        if (frame) {
          const paths = frame.querySelectorAll("[data-ornament-stroke]");
          if (playIntro)
            intro.fromTo(
              paths,
              { strokeDasharray: "1 1", strokeDashoffset: 1 },
              {
                strokeDashoffset: 0,
                stagger: 0.08,
                duration: 1.65,
                ease: "power2.inOut",
                clearProps: "strokeDasharray,strokeDashoffset",
              },
              0.5,
            );
          const trace = frame.querySelector("[data-ornament-highlight]");
          if (trace && playIntro) {
            intro
              .fromTo(
                trace,
                { autoAlpha: 0, strokeDashoffset: 1 },
                {
                  autoAlpha: 1,
                  strokeDashoffset: -1,
                  duration: 2.8,
                  ease: "none",
                },
                1.15,
              )
              .to(trace, { autoAlpha: 0, duration: 0.35 }, 3.65);
          }
          gsap.to(frame, {
            y: -42,
            ease: "none",
            scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        }

        // Keep text as whole elements so Khmer shaping remains intact.
        root
          .querySelectorAll<HTMLElement>(
            '[data-gsap]:not([data-gsap="header"]):not([data-gsap="hero-item"]):not([data-gsap="hero-stage"]):not([data-gsap="hero-signal"]):not([data-gsap="feature-card"]):not([data-gsap="showcase-shell"]), [data-story-step], [data-gsap="hero-signal"], [data-hero="chevron"]',
          )
          .forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              y: 26,
              duration: 0.85,
              ease: "power3.out",
              clearProps: clearReveal,
              scrollTrigger: { trigger: element, start: "top 92%", once: true },
            });
          });
        root
          .querySelectorAll<HTMLElement>('[data-gsap="feature-card"]')
          .forEach((card, index) => {
            gsap.from(card, {
              autoAlpha: 0,
              y: 38,
              scale: 0.97,
              delay: (index % 2) * 0.1,
              duration: 1,
              ease: "power4.out",
              clearProps: clearReveal,
              scrollTrigger: { trigger: card, start: "top 92%", once: true },
            });
          });
        const showcase = root.querySelector('[data-gsap="showcase-shell"]');
        if (showcase)
          gsap.from(showcase, {
            autoAlpha: 0,
            y: 40,
            scale: 0.94,
            duration: 1.25,
            ease: "power4.out",
            clearProps: clearReveal,
            scrollTrigger: { trigger: showcase, start: "top 88%", once: true },
          });
        root
          .querySelectorAll<SVGElement>(
            ".heritage-card-corner, .heritage-cta-corner, .heritage-cta-lotus",
          )
          .forEach((ornament) => {
            gsap.fromTo(
              ornament.querySelectorAll("[data-ornament-stroke]"),
              { strokeDasharray: "1 1", strokeDashoffset: 1 },
              {
                strokeDashoffset: 0,
                duration: 1.5,
                stagger: 0.08,
                ease: "power2.inOut",
                clearProps: "strokeDasharray,strokeDashoffset",
                scrollTrigger: {
                  trigger: ornament.parentElement,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          });
        const workflowCards = root.querySelectorAll<HTMLElement>(
          "[data-workflow-card]",
        );
        workflowCards.forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 65%",
            end: "bottom 35%",
            onToggle: (self) =>
              card.classList.toggle("is-workflow-active", self.isActive),
          });
        });
        root
          .querySelectorAll<HTMLElement>("[data-ornament-divider]")
          .forEach((divider) => {
            gsap.from(divider.querySelectorAll(".heritage-divider-line"), {
              scaleX: 0,
              duration: 1.2,
              ease: "power2.inOut",
              clearProps: "transform",
              scrollTrigger: { trigger: divider, start: "top 96%", once: true },
            });
            gsap.fromTo(
              divider.querySelectorAll("[data-ornament-stroke]"),
              { strokeDasharray: "1 1", strokeDashoffset: 1 },
              {
                strokeDashoffset: 0,
                duration: 1.3,
                stagger: 0.04,
                ease: "power2.inOut",
                clearProps: "strokeDasharray,strokeDashoffset",
                scrollTrigger: {
                  trigger: divider,
                  start: "top 96%",
                  once: true,
                },
              },
            );
          });
        const line = root.querySelector("[data-workflow-line]");
        if (line)
          gsap.from(line, {
            scaleY: 0,
            ease: "none",
            scrollTrigger: {
              trigger: line.parentElement,
              start: "top 75%",
              end: "bottom 75%",
              scrub: 0.5,
            },
          });
        return () =>
          workflowCards.forEach((card) =>
            card.classList.remove("is-workflow-active"),
          );
      });

      media.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const workflowIntro = root.querySelector<HTMLElement>(
            "[data-workflow-intro]",
          );
          const workflowStack = root.querySelector<HTMLElement>(
            "[data-workflow-stack]",
          );
          const scrollStage =
            root.querySelector<HTMLElement>("[data-hero-scroll]");
          if (workflowIntro && workflowStack) {
            ScrollTrigger.create({
              trigger: workflowIntro,
              pin: workflowIntro,
              pinSpacing: false,
              start: "top 128px",
              endTrigger: workflowStack,
              end: "bottom 85%",
              invalidateOnRefresh: true,
            });
          }
          if (scrollStage) {
            gsap.to(scrollStage, {
              y: -36,
              scale: 0.99,
              opacity: 0.88,
              ease: "none",
              scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          }
        },
      );

      media.add(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const cleanups: (() => void)[] = [];
          root
            .querySelectorAll<HTMLElement>("[data-card-light]")
            .forEach((card) => {
              const move = (event: PointerEvent) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty(
                  "--card-x",
                  `${((event.clientX - rect.left) / rect.width) * 100}%`,
                );
                card.style.setProperty(
                  "--card-y",
                  `${((event.clientY - rect.top) / rect.height) * 100}%`,
                );
              };
              card.addEventListener("pointermove", move, { passive: true });
              cleanups.push(() => {
                card.removeEventListener("pointermove", move);
                card.style.removeProperty("--card-x");
                card.style.removeProperty("--card-y");
              });
            });
          const stage = root.querySelector<HTMLElement>("[data-hero-stage]");
          const depth = root.querySelector<HTMLElement>("[data-hero-depth]");
          if (stage && depth) {
            gsap.set(depth, {
              transformPerspective: 1200,
              rotationX: 0,
              rotationY: 0,
            });
            const rotateX = gsap.quickTo(depth, "rotationX", {
              duration: 0.7,
              ease: "power3.out",
            });
            const rotateY = gsap.quickTo(depth, "rotationY", {
              duration: 0.7,
              ease: "power3.out",
            });
            const move = (event: PointerEvent) => {
              const rect = stage.getBoundingClientRect();
              rotateX(((event.clientY - rect.top) / rect.height - 0.5) * -4);
              rotateY(((event.clientX - rect.left) / rect.width - 0.5) * 4);
            };
            const reset = () => {
              rotateX(0);
              rotateY(0);
            };
            stage.addEventListener("pointermove", move);
            stage.addEventListener("pointerleave", reset);
            cleanups.push(() => {
              stage.removeEventListener("pointermove", move);
              stage.removeEventListener("pointerleave", reset);
            });
          }
          root
            .querySelectorAll<HTMLElement>("[data-magnetic]")
            .forEach((button) => {
              const x = gsap.quickTo(button, "x", {
                duration: 0.4,
                ease: "power3.out",
              });
              const y = gsap.quickTo(button, "y", {
                duration: 0.4,
                ease: "power3.out",
              });
              const move = (event: PointerEvent) => {
                const rect = button.getBoundingClientRect();
                x((event.clientX - rect.left - rect.width / 2) * 0.06);
                y((event.clientY - rect.top - rect.height / 2) * 0.12);
              };
              const reset = () => {
                x(0);
                y(0);
              };
              button.addEventListener("pointermove", move);
              button.addEventListener("pointerleave", reset);
              cleanups.push(() => {
                button.removeEventListener("pointermove", move);
                button.removeEventListener("pointerleave", reset);
              });
            });
          return () => cleanups.forEach((cleanup) => cleanup());
        },
      );
    }, root);

    let active = true;
    document.fonts.ready.then(() => {
      if (active) ScrollTrigger.refresh();
    });
    return () => {
      active = false;
      media.revert();
      context.revert();
    };
  }, [locale]);

  return null;
}
