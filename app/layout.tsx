import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Apsara | Agentic Coding With Guardrails",
  description:
    "Apsara is a project-first coding agent with workspace-scoped tools, diff review, human approval, and persistent context for serious codebases.",
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
    title: "Apsara | Agentic Coding With Guardrails",
    description:
      "Project-first agentic coding with reviewable edits, visible safety rails, and a workflow designed for real repositories.",
    siteName: "Apsara",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apsara | Agentic Coding With Guardrails",
    description:
      "A project-first coding agent built for serious repos, with diff review, human approval, and persistent context.",
  },
};

export const viewport: Viewport = {
  themeColor: "#23263a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
