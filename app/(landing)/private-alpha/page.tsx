import type { Metadata } from "next";
import { PrivateAlphaContent } from "./_content";

export const metadata: Metadata = {
  title: "Install the Local CLI | Apsara",
  description:
    "Install Apsara locally, bring your own model API key, and start coding without creating an account.",
};

export default function PrivateAlphaPage() {
  return <PrivateAlphaContent />;
}
