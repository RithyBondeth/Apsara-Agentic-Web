import type { Metadata } from "next";
import { WorkflowContent } from "./_content";

export const metadata: Metadata = {
  title: "Workflow | Apsara",
  description:
    "Understand how the Apsara workflow starts in the repo, drafts meaningful changes, and keeps review in the loop.",
};

export default function WorkflowPage() {
  return <WorkflowContent />;
}
