import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import { IBM_Plex_Mono, Ubuntu } from "next/font/google";
import { getInitialLandingLocale } from "@/utils/functions/get-initial-landing-locale";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import "./landing.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Serve the signature pixel font locally for predictable first-visit branding.
const pressStart2P = localFont({
  src: "./fonts/PressStart2P-Regular.ttf",
  variable: "--font-pixel",
  weight: "400",
  display: "swap",
});

const notoSansKhmer = localFont({
  src: "./fonts/NotoSansKhmer-Variable.ttf",
  variable: "--font-khmer",
  weight: "100 900",
  style: "normal",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62.5% 100%" }],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders
    .get("x-forwarded-host")
    ?.split(",")[0]
    ?.trim();
  const host = forwardedHost ?? requestHeaders.get("host") ?? "localhost:3000";
  const forwardedProtocol = requestHeaders
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();
  const protocol =
    forwardedProtocol ??
    (host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]")
      ? "http"
      : "https");

  let origin = "http://localhost:3000";

  try {
    origin = new URL(`${protocol}://${host}`).origin;
  } catch {
    // Keep a valid local fallback when a development proxy sends a bad host.
  }

  const socialImage = new URL("/opengraph-image", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: "Apsara Agentic | Meet Makor",
    description:
      "Meet Makor, your pixel coding companion. Read, edit, and verify code in your local workspace with your own model provider and reviewable changes.",
    applicationName: "Apsara Agentic",
    icons: {
      icon: "/assets/makor/head.png",
      shortcut: "/assets/makor/head.png",
    },
    keywords: [
      "Apsara",
      "agentic coding",
      "coding agent",
      "developer tools",
      "CLI assistant",
    ],
    openGraph: {
      title: "Apsara Agentic | Meet Makor",
      description:
        "A local coding agent with your model provider, reviewable edits, and no Apsara account required.",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Apsara Agentic and Makor, your pixel coding companion",
        },
      ],
      siteName: "Apsara Agentic",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Apsara Agentic | Meet Makor",
      description:
        "Install locally, bring your own model API key, and keep your coding workflow on your machine.",
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#181c25",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLocale = await getInitialLandingLocale();

  return (
    <html
      lang={initialLocale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${ubuntu.variable} ${ibmPlexMono.variable} ${notoSansKhmer.variable} ${pressStart2P.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
