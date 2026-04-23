import type { Metadata } from "next";
import LandingPageShell from "@/components/landing/landing-page-shell";
import { getInitialLandingLocale } from "@/lib/get-initial-landing-locale";

export const metadata: Metadata = {
  title: "Capabilities | Apsara",
  description:
    "Explore the current Apsara capabilities, from workspace-scoped tools to diff-first approvals and persistent sessions.",
};

export default async function CapabilitiesPage() {
  const initialLocale = await getInitialLandingLocale();

  return <LandingPageShell initialLocale={initialLocale} page="capabilities" />;
}
