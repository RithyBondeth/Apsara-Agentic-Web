"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  GitBranch,
  KeyRound,
  Laptop,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";
import type { LandingCopy, LandingLocale } from "@/language/landing-copy";
import { siteRoutes } from "@/utils/constants/site-routes";
import { cn } from "@/lib/utils";

type LandingInstallProps = {
  copy: LandingCopy["install"];
  locale: LandingLocale;
};

export default function LandingInstall({ copy, locale }: LandingInstallProps) {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const isKhmer = locale === "km";

  const copyCommand = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      window.setTimeout(() => setCopiedCommand(null), 1800);
    } catch {
      setCopiedCommand(null);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-[var(--l-line)] py-20 sm:py-28 lg:py-36">
      <div aria-hidden className="landing-code-grid absolute inset-0 opacity-45" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 top-12 size-[36rem] rounded-full bg-[radial-gradient(circle,var(--l-glow-a),transparent_70%)] blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-72 size-[38rem] rounded-full bg-[radial-gradient(circle,var(--l-glow-b),transparent_70%)] blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className={cn(
              isKhmer
                ? "text-sm font-semibold text-[var(--l-accent)]"
                : "landing-eyebrow",
            )}
          >
            {copy.eyebrow}
          </p>
          <h1 className="font-heading mt-5 text-[clamp(2.75rem,6vw,5.8rem)] font-extrabold leading-[0.96] tracking-[-0.055em] text-foreground">
            {copy.titleLead}{" "}
            <span className="landing-gradient-text">{copy.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-balance text-base leading-8 text-muted-foreground sm:text-lg">
            {copy.description}
          </p>
          <div className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full border border-[var(--l-line)] bg-[var(--l-surface)]/80 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--l-accent)] shadow-sm backdrop-blur-xl sm:text-xs">
            <ShieldCheck className="size-4" />
            {copy.promise}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl space-y-4 sm:mt-20">
          {copy.steps.map((step, index) => {
            const copied = copiedCommand === step.command;
            return (
              <article
                key={step.number}
                className="landing-workflow-card grid gap-6 rounded-xl p-5 sm:grid-cols-[4.5rem_1fr] sm:p-7 lg:grid-cols-[5rem_0.8fr_1.2fr] lg:items-center lg:gap-8"
              >
                <div className="flex size-14 items-center justify-center rounded-lg border border-[var(--l-line)] bg-[var(--l-ground)]/75 font-mono text-sm font-semibold text-[var(--l-accent)] shadow-[inset_0_1px_0_var(--l-inset)]">
                  {step.number}
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[var(--l-accent)]">
                    {index === 0 ? <TerminalSquare className="size-4" /> : null}
                    {index === 1 ? <KeyRound className="size-4" /> : null}
                    {index === 2 ? <Laptop className="size-4" /> : null}
                    {index === 3 ? <CheckCircle2 className="size-4" /> : null}
                    <h2 className="font-heading text-xl font-semibold tracking-[-0.025em] text-foreground">
                      {step.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="flex min-w-0 items-center gap-3 rounded-lg border border-white/9 bg-[#0a0d11] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <span className="font-mono text-xs text-[#74d99f]">$</span>
                  <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-xs text-white/80 sm:text-sm">
                    {step.command}
                  </code>
                  <button
                    type="button"
                    onClick={() => copyCommand(step.command)}
                    aria-label={`${copy.copyLabel}: ${step.command}`}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--l-accent)]"
                  >
                    {copied ? <Check className="size-3.5 text-[#74d99f]" /> : <Copy className="size-3.5" />}
                    <span className="hidden sm:inline">
                      {copied ? copy.copiedLabel : copy.copyLabel}
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="landing-glass-card rounded-xl p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              {copy.requirementsTitle}
            </h2>
            <ul className="mt-5 space-y-4">
              {copy.requirements.map((requirement) => (
                <li key={requirement} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--l-spectrum-1)]" />
                  {requirement}
                </li>
              ))}
            </ul>
          </aside>

          <aside className="landing-glass-card rounded-xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-[var(--l-line)] bg-[var(--l-surface-high)] text-[var(--l-accent)]">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  {copy.privacyTitle}
                </h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {copy.privacyDescription}
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {copy.privacyPoints.map((point) => (
                <div key={point.title} className="border-t border-[var(--l-line)] pt-4">
                  <h3 className="text-sm font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={siteRoutes.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--l-btn-from),var(--l-btn-to))] px-6 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[var(--l-btn-fg)] shadow-[0_16px_38px_var(--l-btn-shadow)] transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <GitBranch className="size-4" />
            {copy.githubLabel}
            <ExternalLink className="size-3.5" />
          </Link>
          <Link
            href={siteRoutes.releases}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-[var(--l-line)] bg-[var(--l-surface)] px-6 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:border-[var(--l-accent)] sm:w-auto"
          >
            {copy.releasesLabel}
            <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
