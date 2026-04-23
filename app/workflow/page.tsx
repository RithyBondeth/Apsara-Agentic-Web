import type { Metadata } from "next";
import LandingPageShell from "@/components/landing/landing-page-shell";
import { getInitialLandingLocale } from "@/lib/get-initial-landing-locale";

export const metadata: Metadata = {
  title: "Workflow | Apsara",
  description:
    "Understand how the Apsara workflow starts in the repo, drafts meaningful changes, and keeps review in the loop.",
};

export default async function WorkflowPage() {
  const initialLocale = await getInitialLandingLocale();

  return <LandingPageShell initialLocale={initialLocale} page="workflow" />;
}
