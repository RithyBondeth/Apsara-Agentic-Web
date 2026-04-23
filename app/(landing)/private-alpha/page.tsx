import type { Metadata } from "next";
import { PrivateAlphaContent } from "./_content";

export const metadata: Metadata = {
  title: "Private Alpha | Apsara",
  description:
    "Apsara private alpha positioning for repo-first agentic coding with reviewable edits and durable context.",
};

export default function PrivateAlphaPage() {
  return <PrivateAlphaContent />;
}
