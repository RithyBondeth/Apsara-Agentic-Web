"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import type { LandingLocale } from "@/language/landing-copy";

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin);

const revealClearProps = "opacity,visibility,transform,filter";

type RevealOptions = {
  blur?: number;
  clear?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  trigger?: string;
  y?: number;
};

type LandingPageAnimationsProps = {
  locale: LandingLocale;
};

export default function LandingPageAnimations({
  locale,
}: LandingPageAnimationsProps) {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>("#top");

    if (!root) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Khmer script shapes in grapheme clusters and has no word spaces, so
    // SplitText char/word splitting would break rendering — Khmer gets whole
    // block reveals instead.
    const isKhmer = locale === "km";
    let cancelled = false;

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set("[data-gsap]", { autoAlpha: 1, clearProps: "all" });
        return;
      }

      /* ── Initial hidden states — synchronous, before first paint ────── */
      const headsSelector =
        '[data-gsap="showcase-head"], [data-gsap="features-head"], [data-gsap="workflow-head"], [data-gsap="cta-head"]';

      gsap.set('[data-gsap="header"]', { autoAlpha: 0, y: -18 });
      gsap.set('[data-gsap="hero-item"]', { autoAlpha: 0, y: 26 });
      gsap.set('[data-gsap="hero-signal"]', {
        autoAlpha: 0,
        filter: "blur(8px)",
        y: 20,
      });
      gsap.set(headsSelector, { autoAlpha: 0, y: 20 });
      gsap.set("[data-hero-swash]", { drawSVG: "0%" });

      /* ── Header + scroll progress hairline ──────────────────────────── */
      gsap.to('[data-gsap="header"]', {
        autoAlpha: 1,
        clearProps: "opacity,visibility,transform",
        duration: 0.8,
        ease: "power3.out",
        y: 0,
      });

      gsap.fromTo(
        "[data-gsap-progress]",
        { scaleX: 0 },
        {
          ease: "none",
          scaleX: 1,
          scrollTrigger: { end: "max", scrub: 0.4, start: 0 },
        }
      );

      /* ── Generic scroll reveals ─────────────────────────────────────── */
      const revealOnScroll = (
        selector: string,
        {
          blur = 0,
          clear = revealClearProps,
          delay = 0,
          duration = 0.85,
          stagger = 0.1,
          start = "top 76%",
          trigger,
          y = 24,
        }: RevealOptions = {}
      ) => {
        const elements = gsap.utils.toArray<HTMLElement>(selector);

        if (!elements.length) {
          return;
        }

        gsap.set(elements, {
          autoAlpha: 0,
          filter: blur ? `blur(${blur}px)` : "none",
          y,
        });

        gsap.to(elements, {
          autoAlpha: 1,
          clearProps: clear,
          delay,
          duration,
          ease: "power3.out",
          filter: "blur(0px)",
          stagger,
          y: 0,
          scrollTrigger: {
            once: true,
            start,
            trigger: trigger ?? elements[0],
          },
        });
      };

      revealOnScroll('[data-gsap="showcase-note"]', {
        blur: 6,
        delay: 0.1,
        stagger: 0.1,
        start: "top 70%",
        trigger: "#showcase",
      });
      revealOnScroll('[data-gsap="showcase-tail"]', {
        stagger: 0.08,
        start: "top 80%",
      });
      revealOnScroll('[data-gsap="feature-card"]', {
        blur: 6,
        // Keep the transform cache — clearing it would wipe the
        // transformPerspective the tilt interaction relies on.
        clear: "opacity,visibility,filter",
        delay: 0.15,
        stagger: 0.08,
        start: "top 66%",
        trigger: "#features",
      });
      revealOnScroll('[data-gsap="workflow-step"]', {
        delay: 0.1,
        stagger: 0.14,
        start: "top 66%",
        trigger: "#workflow",
      });
      revealOnScroll('[data-gsap="cta-actions"]', {
        delay: 0.15,
        stagger: 0,
        start: "top 70%",
        trigger: "#cta",
      });
      revealOnScroll('[data-gsap="footer"]', {
        stagger: 0.08,
        start: "top 88%",
        trigger: "footer",
      });

      /* ── Terminal shell: 3D straighten as it scrolls into view ──────── */
      const shell = gsap.utils.toArray<HTMLElement>(
        '[data-gsap="showcase-shell"]'
      )[0];

      if (shell) {
        if (shell.parentElement) {
          gsap.set(shell.parentElement, { perspective: 1400 });
        }

        gsap.set(shell, { autoAlpha: 0, transformOrigin: "50% 10%" });

        gsap.to(shell, {
          autoAlpha: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { once: true, start: "top 90%", trigger: shell },
        });

        gsap.fromTo(
          shell,
          { rotationX: 16, scale: 0.95, y: 48 },
          {
            ease: "none",
            rotationX: 0,
            scale: 1,
            y: 0,
            scrollTrigger: {
              end: "top 40%",
              scrub: 1,
              start: "top 95%",
              trigger: shell,
            },
          }
        );
      }

      /* ── The golden thread through the workflow steps ───────────────── */
      const threadPath = root.querySelector<SVGPathElement>("[data-thread]");

      if (threadPath) {
        gsap.set(["[data-thread]", "[data-thread-glow]"], { drawSVG: "0%" });

        const threadTimeline = gsap.timeline({
          scrollTrigger: {
            end: "bottom 80%",
            // Re-init on refresh so the bead's path alignment is computed
            // from real geometry if the md+ thread was hidden at load.
            invalidateOnRefresh: true,
            scrub: 1,
            start: "top 60%",
            trigger: "#workflow",
          },
        });

        threadTimeline
          .fromTo(
            ["[data-thread]", "[data-thread-glow]"],
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 1, ease: "none" },
            0
          )
          .set("[data-thread-bead]", { autoAlpha: 1 }, 0.02)
          .to(
            "[data-thread-bead]",
            {
              duration: 1,
              ease: "none",
              motionPath: {
                align: threadPath,
                alignOrigin: [0.5, 0.5],
                path: threadPath,
              },
            },
            0
          )
          .to("[data-thread-bead]", { autoAlpha: 0, duration: 0.04 }, 0.96);
      }

      gsap.fromTo(
        "[data-workflow-badge]",
        { autoAlpha: 0, rotation: -10, scale: 0.4 },
        {
          autoAlpha: 1,
          duration: 1.05,
          ease: "elastic.out(1, 0.55)",
          rotation: 0,
          scale: 1,
          stagger: 0.16,
          scrollTrigger: { once: true, start: "top 62%", trigger: "#workflow" },
        }
      );

      /* ── Ambient loops ──────────────────────────────────────────────── */
      gsap.to('[data-gsap-loop="hero-scroll"]', {
        duration: 1.15,
        ease: "sine.inOut",
        repeat: -1,
        y: 8,
        yoyo: true,
      });

      gsap.to('[data-gsap-drift="hero-left"]', {
        duration: 16,
        ease: "sine.inOut",
        repeat: -1,
        scale: 1.04,
        x: 18,
        y: 10,
        yoyo: true,
      });

      gsap.to('[data-gsap-drift="hero-right"]', {
        duration: 18,
        ease: "sine.inOut",
        repeat: -1,
        scale: 1.05,
        x: -16,
        y: 14,
        yoyo: true,
      });

      gsap.to('[data-gsap-float="soft"]', {
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        y: -12,
        yoyo: true,
      });

      gsap.to('[data-gsap-float="delayed"]', {
        delay: 0.6,
        duration: 7.4,
        ease: "sine.inOut",
        repeat: -1,
        y: -10,
        yoyo: true,
      });

      /* Parallax drift on the floating cards (yPercent composes with the
         float loop's y, so the two never fight). */
      gsap.to('[data-gsap-float="soft"]', {
        ease: "none",
        yPercent: -16,
        scrollTrigger: {
          end: "bottom top",
          scrub: 0.6,
          start: "top bottom",
          trigger: "#showcase",
        },
      });

      gsap.to('[data-gsap-float="delayed"]', {
        ease: "none",
        yPercent: 14,
        scrollTrigger: {
          end: "bottom top",
          scrub: 0.6,
          start: "top bottom",
          trigger: "#showcase",
        },
      });

      /* ── Pointer-driven interactions (fine pointers only) ───────────── */
      const pointerMedia = gsap.matchMedia();

      pointerMedia.add("(hover: hover) and (pointer: fine)", () => {
        const cleanups: Array<() => void> = [];

        /* Hero orb parallax (xPercent/yPercent compose with the drift
           loop's x/y). */
        const heroSection = root.querySelector<HTMLElement>("#hero");
        const orbLeft = root.querySelector('[data-gsap-drift="hero-left"]');
        const orbRight = root.querySelector('[data-gsap-drift="hero-right"]');

        if (heroSection && orbLeft && orbRight) {
          const leftX = gsap.quickTo(orbLeft, "xPercent", {
            duration: 1,
            ease: "power3",
          });
          const leftY = gsap.quickTo(orbLeft, "yPercent", {
            duration: 1,
            ease: "power3",
          });
          const rightX = gsap.quickTo(orbRight, "xPercent", {
            duration: 1.2,
            ease: "power3",
          });
          const rightY = gsap.quickTo(orbRight, "yPercent", {
            duration: 1.2,
            ease: "power3",
          });

          const onHeroMove = (event: PointerEvent) => {
            const nx = (event.clientX / window.innerWidth) * 2 - 1;
            const ny = (event.clientY / window.innerHeight) * 2 - 1;
            leftX(nx * 5);
            leftY(ny * 4);
            rightX(nx * -6);
            rightY(ny * -5);
          };

          heroSection.addEventListener("pointermove", onHeroMove);
          cleanups.push(() =>
            heroSection.removeEventListener("pointermove", onHeroMove)
          );
        }

        /* 3D tilt + glare on feature cards. */
        gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((card) => {
          const rotX = gsap.quickTo(card, "rotationX", {
            duration: 0.5,
            ease: "power3",
          });
          const rotY = gsap.quickTo(card, "rotationY", {
            duration: 0.5,
            ease: "power3",
          });

          const onCardMove = (event: PointerEvent) => {
            const rect = card.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;
            rotX((0.5 - py) * 8);
            rotY((px - 0.5) * 10);
            card.style.setProperty("--glare-x", `${px * 100}%`);
            card.style.setProperty("--glare-y", `${py * 100}%`);
          };

          const onCardEnter = () => {
            gsap.set(card, { transformPerspective: 900 });
          };

          const onCardLeave = () => {
            rotX(0);
            rotY(0);
          };

          card.addEventListener("pointerenter", onCardEnter);
          card.addEventListener("pointermove", onCardMove);
          card.addEventListener("pointerleave", onCardLeave);
          cleanups.push(() => {
            card.removeEventListener("pointerenter", onCardEnter);
            card.removeEventListener("pointermove", onCardMove);
            card.removeEventListener("pointerleave", onCardLeave);
          });
        });

        /* Magnetic hero CTAs. */
        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
          const magnetX = gsap.quickTo(el, "x", {
            duration: 0.4,
            ease: "power3",
          });
          const magnetY = gsap.quickTo(el, "y", {
            duration: 0.4,
            ease: "power3",
          });

          const onMagnetMove = (event: PointerEvent) => {
            const rect = el.getBoundingClientRect();
            magnetX((event.clientX - (rect.left + rect.width / 2)) * 0.22);
            magnetY((event.clientY - (rect.top + rect.height / 2)) * 0.3);
          };

          const onMagnetLeave = () => {
            magnetX(0);
            magnetY(0);
          };

          el.addEventListener("pointermove", onMagnetMove);
          el.addEventListener("pointerleave", onMagnetLeave);
          cleanups.push(() => {
            el.removeEventListener("pointermove", onMagnetMove);
            el.removeEventListener("pointerleave", onMagnetLeave);
          });
        });

        return () => cleanups.forEach((cleanup) => cleanup());
      });

      ScrollTrigger.refresh();
    }, root);

    /* ── Typography choreography — needs settled font metrics ─────────── */
    const buildTypography = () => {
      if (cancelled || prefersReducedMotion) {
        return;
      }

      context.add(() => {
        /* Hero opening sequence. */
        const heroTimeline = gsap.timeline({
          defaults: { duration: 0.8, ease: "power3.out" },
          delay: 0.12,
        });

        heroTimeline.to('[data-hero="badge"]', {
          autoAlpha: 1,
          duration: 0.7,
          ease: "back.out(1.8)",
          y: 0,
        });

        if (!isKhmer) {
          const heroSplit = SplitText.create("[data-hero-seg]", {
            charsClass: "landing-split-char",
            mask: "chars",
            type: "words,chars",
          });

          heroTimeline
            .set('[data-hero="title"]', { autoAlpha: 1, y: 0 }, "-=0.45")
            .from(
              heroSplit.chars,
              {
                duration: 0.85,
                ease: "back.out(1.4)",
                rotation: 5,
                stagger: 0.016,
                yPercent: 118,
              },
              "<"
            );
        } else {
          heroTimeline.to(
            '[data-hero="title"]',
            { autoAlpha: 1, duration: 0.85, y: 0 },
            "-=0.4"
          );
        }

        heroTimeline
          .fromTo(
            "[data-hero-swash]",
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 0.7, ease: "power2.inOut" },
            "-=0.35"
          )
          .to('[data-hero="copy"]', { autoAlpha: 1, y: 0 }, "-=0.5")
          .to('[data-hero="ctas"]', { autoAlpha: 1, duration: 0.65, y: 0 }, "-=0.5")
          .to('[data-hero="signals"]', { autoAlpha: 1, y: 0 }, "-=0.45")
          .to(
            '[data-gsap="hero-signal"]',
            {
              autoAlpha: 1,
              clearProps: "filter",
              duration: 0.7,
              filter: "blur(0px)",
              stagger: 0.09,
              y: 0,
            },
            "<+0.05"
          )
          .to('[data-hero="chevron"]', { autoAlpha: 1, duration: 0.6, y: 0 }, "-=0.3");

        /* Section heads: eyebrow tracks in, headline rises word by word. */
        const heads: Array<{ sel: string; trigger: string }> = [
          { sel: '[data-gsap="showcase-head"]', trigger: "#showcase" },
          { sel: '[data-gsap="features-head"]', trigger: "#features" },
          { sel: '[data-gsap="workflow-head"]', trigger: "#workflow" },
          { sel: '[data-gsap="cta-head"]', trigger: "#cta" },
        ];

        heads.forEach(({ sel, trigger }) => {
          const elements = gsap.utils.toArray<HTMLElement>(sel);

          if (!elements.length) {
            return;
          }

          const headTimeline = gsap.timeline({
            scrollTrigger: { once: true, start: "top 76%", trigger },
          });
          let position = 0;

          elements.forEach((el) => {
            if (el.tagName === "H2" && !isKhmer) {
              const split = SplitText.create(el, {
                mask: "words",
                type: "words",
                wordsClass: "landing-split-word",
              });

              headTimeline
                .set(el, { autoAlpha: 1, y: 0 }, position)
                .from(
                  split.words,
                  {
                    duration: 0.75,
                    ease: "power4.out",
                    stagger: 0.045,
                    yPercent: 112,
                  },
                  position
                );
            } else if (el.classList.contains("landing-eyebrow")) {
              headTimeline.fromTo(
                el,
                { letterSpacing: "0.6em" },
                {
                  autoAlpha: 1,
                  duration: 0.7,
                  ease: "power2.out",
                  letterSpacing: "0.28em",
                  y: 0,
                },
                position
              );
            } else {
              headTimeline.to(
                el,
                {
                  autoAlpha: 1,
                  clearProps: revealClearProps,
                  duration: 0.7,
                  ease: "power3.out",
                  y: 0,
                },
                position
              );
            }

            position += 0.12;
          });
        });

        ScrollTrigger.refresh();
      });
    };

    if (!prefersReducedMotion) {
      document.fonts.ready.then(buildTypography);
    }

    return () => {
      cancelled = true;
      context.revert();
    };
  }, [locale]);

  return null;
}
