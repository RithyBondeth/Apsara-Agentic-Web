import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
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
    siteName: "Apsara",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apsara | Project-First Agentic Coding",
    description:
      "A project-first coding agent built for serious repos, with diff review, human approval, and persistent context.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
