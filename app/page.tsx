import { headers, cookies } from "next/headers";
import LandingPageShell from "@/components/landing/landing-page-shell";
import { resolveLandingLocale } from "@/lib/landing-locale";

export default async function Home() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const initialLocale = resolveLandingLocale({
    acceptLanguage: headerStore.get("accept-language"),
    cookieLocale: cookieStore.get("apsara-landing-locale")?.value,
  });

  return <LandingPageShell initialLocale={initialLocale} />;
}
