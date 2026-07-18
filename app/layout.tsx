import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import { IBM_Plex_Mono, Press_Start_2P, Ubuntu } from "next/font/google";
import { getInitialLandingLocale } from "@/utils/functions/get-initial-landing-locale";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

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

// Decorative pixel font — only used for the APSARA/AGENTIC banner in the
// showcase terminal. "optional" means the browser never blocks rendering
// waiting for it; on repeat visits it will be in cache anyway.
const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
  display: "optional",
});

const notoSansKhmer = localFont({
  variable: "--font-khmer",
  display: "swap",
  src: [
    {
      path: "./fonts/NotoSansKhmer-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansKhmer-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansKhmer-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansKhmer-700.ttf",
      weight: "700",
      style: "normal",
    },
  ],
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
    forwardedProtocol ?? (host.startsWith("localhost") ? "http" : "https");

  let origin = "http://localhost:3000";

  try {
    origin = new URL(`${protocol}://${host}`).origin;
  } catch {
    // Keep a valid local fallback when a development proxy sends a bad host.
  }

  const socialImage = new URL("/og.png", origin).toString();

  return {
    title: "Apsara | Project-First Agentic Coding",
    description:
      "Apsara is a project-first coding agent with workspace-scoped tools, diff review, quieter internals, human approval, and persistent context for serious codebases.",
    applicationName: "Apsara",
    icons: {
      icon: "/assets/logo/logo-without-title.svg",
      shortcut: "/assets/logo/logo-without-title.svg",
    },
    keywords: [
      "Apsara",
      "agentic coding",
      "coding agent",
      "developer tools",
      "CLI assistant",
    ],
    openGraph: {
      title: "Apsara | Project-First Agentic Coding",
      description:
        "Project-first agentic coding with reviewable edits, visible safety rails, and a workflow designed for real repositories.",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Apsara — project-first agentic coding",
        },
      ],
      siteName: "Apsara",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Apsara | Project-First Agentic Coding",
      description:
        "A project-first coding agent built for serious repos, with diff review, human approval, and persistent context.",
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#090b0f",
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
