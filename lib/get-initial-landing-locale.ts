import { cookies, headers } from "next/headers";
import { resolveLandingLocale } from "@/lib/landing-locale";

export async function getInitialLandingLocale() {
  const cookieStore = await cookies();
  const headerStore = await headers();

  return resolveLandingLocale({
    acceptLanguage: headerStore.get("accept-language"),
    cookieLocale: cookieStore.get("apsara-landing-locale")?.value,
  });
}
