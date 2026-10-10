import LandingPageShell from "@/components/landing/landing-page-shell";
import { getInitialLandingLocale } from "@/utils/functions/get-initial-landing-locale";

export default async function NotFound() {
  const initialLocale = await getInitialLandingLocale();
  return <LandingPageShell initialLocale={initialLocale} page="not-found" />;
}
