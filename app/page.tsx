import LandingPageShell from "@/components/landing/landing-page-shell";
import { getInitialLandingLocale } from "@/lib/get-initial-landing-locale";

export default async function Home() {
  const initialLocale = await getInitialLandingLocale();

  return <LandingPageShell initialLocale={initialLocale} page="home" />;
}
