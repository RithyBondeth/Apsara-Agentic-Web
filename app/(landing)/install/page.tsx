import type { Metadata } from "next";
import { InstallContent } from "./_content";

export const metadata: Metadata = {
  title: "Install the Local CLI | Apsara",
  description:
    "Install Apsara locally, connect your own model API key, and start coding without creating an account or uploading your repository.",
};

export default function InstallPage() {
  return <InstallContent />;
}
