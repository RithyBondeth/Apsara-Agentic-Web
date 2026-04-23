import type { Metadata } from "next";
import { CapabilitiesContent } from "./_content";

export const metadata: Metadata = {
  title: "Capabilities | Apsara",
  description:
    "Explore the current Apsara capabilities, from workspace-scoped tools to diff-first approvals and persistent sessions.",
};

export default function CapabilitiesPage() {
  return <CapabilitiesContent />;
}
