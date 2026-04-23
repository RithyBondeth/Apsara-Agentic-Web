import type { Metadata } from "next";
import LandingPageShell from "@/components/landing/landing-page-shell";
import { getInitialLandingLocale } from "@/lib/get-initial-landing-locale";

export const metadata: Metadata = {
  title: "Product | Apsara",
  description:
    "See the Apsara product view: repo-local startup, bounded tools, reviewable diffs, and a calmer agent loop.",
};

export default async function ProductPage() {
  const initialLocale = await getInitialLandingLocale();

  return <LandingPageShell initialLocale={initialLocale} page="product" />;
}
