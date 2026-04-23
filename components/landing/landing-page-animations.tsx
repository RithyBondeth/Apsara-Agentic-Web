"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const revealClearProps = "opacity,visibility,transform";

type RevealOptions = {
  delay?: number;
  duration?: number;
  scale?: number;
  stagger?: number;
  start?: string;
  trigger?: string;
  y?: number;
};

export default function LandingPageAnimations() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = document.querySelector<HTMLElement>("#top");

    if (!root) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const revealY = prefersReducedMotion ? 0 : 24;
    const revealScale = prefersReducedMotion ? 1 : 0.985;
    const revealDuration = prefersReducedMotion ? 0.42 : 0.88;
    const heroDuration = prefersReducedMotion ? 0.46 : 0.9;
    const heroDelay = prefersReducedMotion ? 0.04 : 0.14;
    const baseEase = "power3.out";

    const context = gsap.context(() => {
      const revealOnScroll = (
        selector: string,
        {
          delay = 0,
          duration = revealDuration,
          scale = revealScale,
          stagger = 0.12,
          start = "top 76%",
          trigger,
          y = revealY,
        }: RevealOptions = {}
      ) => {
        const elements = gsap.utils.toArray<HTMLElement>(selector);

        if (!elements.length) {
          return;
        }

        gsap.set(elements, {
          autoAlpha: 0,
          scale,
          y,
        });

        gsap.to(elements, {
          autoAlpha: 1,
          clearProps: revealClearProps,
          delay,
          duration,
          ease: baseEase,
          scale: 1,
          stagger,
          y: 0,
          scrollTrigger: {
            trigger: trigger ?? elements[0],
            once: true,
            start,
          },
        });
      };

      gsap.set('[data-gsap="header"]', {
        autoAlpha: 0,
        y: prefersReducedMotion ? 0 : -18,
      });
      gsap.set('[data-gsap="hero-item"]', {
        autoAlpha: 0,
        y: revealY,
      });
      gsap.set('[data-gsap="hero-signal"]', {
        autoAlpha: 0,
        y: prefersReducedMotion ? 0 : 18,
      });

      gsap.to('[data-gsap="header"]', {
        autoAlpha: 1,
        clearProps: revealClearProps,
        duration: prefersReducedMotion ? 0.42 : 0.8,
        ease: baseEase,
        y: 0,
      });

      const heroTimeline = gsap.timeline({
        defaults: {
          autoAlpha: 1,
          clearProps: revealClearProps,
          duration: heroDuration,
          ease: baseEase,
          y: 0,
        },
        delay: heroDelay,
      });

      heroTimeline
        .to('[data-gsap="hero-item"]', {
          stagger: prefersReducedMotion ? 0.08 : 0.12,
        })
        .to(
          '[data-gsap="hero-signal"]',
          {
            duration: prefersReducedMotion ? 0.4 : 0.72,
            stagger: prefersReducedMotion ? 0.05 : 0.08,
          },
          prefersReducedMotion ? "-=0.2" : "-=0.38"
        );

      revealOnScroll('[data-gsap="showcase-head"]', {
        stagger: 0.1,
        trigger: "#showcase",
      });
      revealOnScroll('[data-gsap="showcase-shell"]', {
        delay: 0.08,
        scale: revealScale,
        stagger: 0,
        start: "top 74%",
        trigger: "#showcase",
        y: prefersReducedMotion ? 0 : 32,
      });
      revealOnScroll('[data-gsap="showcase-note"]', {
        delay: 0.16,
        stagger: 0.1,
        start: "top 72%",
        trigger: "#showcase",
      });
      revealOnScroll('[data-gsap="showcase-tail"]', {
        delay: 0.22,
        stagger: 0.08,
        start: "top 68%",
        trigger: "#showcase",
      });
      revealOnScroll('[data-gsap="features-head"]', {
        stagger: 0.1,
        trigger: "#features",
      });
      revealOnScroll('[data-gsap="feature-card"]', {
        delay: 0.12,
        stagger: 0.1,
        start: "top 72%",
        trigger: "#features",
      });
      revealOnScroll('[data-gsap="workflow-head"]', {
        stagger: 0.1,
        trigger: "#workflow",
      });
      revealOnScroll('[data-gsap="workflow-step"]', {
        delay: 0.12,
        stagger: 0.14,
        start: "top 72%",
        trigger: "#workflow",
      });
      revealOnScroll('[data-gsap="cta-head"]', {
        stagger: 0.1,
        trigger: "#cta",
      });
      revealOnScroll('[data-gsap="cta-actions"]', {
        delay: 0.12,
        stagger: 0,
        start: "top 70%",
        trigger: "#cta",
      });
      revealOnScroll('[data-gsap="footer"]', {
        stagger: 0.08,
        start: "top 86%",
        trigger: "footer",
      });

      if (!prefersReducedMotion) {
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
      }

      ScrollTrigger.refresh();
    }, root);

    return () => {
      context.revert();
    };
  }, []);

  return null;
}
