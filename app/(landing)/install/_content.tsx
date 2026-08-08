import LandingPageShell from "@/components/landing/landing-page-shell";
import { getInitialLandingLocale } from "@/utils/functions/get-initial-landing-locale";

export async function InstallContent() {
  const initialLocale = await getInitialLandingLocale();

  return <LandingPageShell initialLocale={initialLocale} page="install" />;
}
