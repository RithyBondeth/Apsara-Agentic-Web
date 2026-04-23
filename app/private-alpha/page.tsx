import type { Metadata } from "next";
import LandingPageShell from "@/components/landing/landing-page-shell";
import { getInitialLandingLocale } from "@/lib/get-initial-landing-locale";

export const metadata: Metadata = {
  title: "Private Alpha | Apsara",
  description:
    "Apsara private alpha positioning for repo-first agentic coding with reviewable edits and durable context.",
};

export default async function PrivateAlphaPage() {
  const initialLocale = await getInitialLandingLocale();

  return <LandingPageShell initialLocale={initialLocale} page="private-alpha" />;
}
