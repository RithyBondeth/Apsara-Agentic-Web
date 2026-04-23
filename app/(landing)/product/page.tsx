import type { Metadata } from "next";
import { ProductContent } from "./_content";

export const metadata: Metadata = {
  title: "Product | Apsara",
  description:
    "See the Apsara product view: repo-local startup, bounded tools, reviewable diffs, and a calmer agent loop.",
};

export default function ProductPage() {
  return <ProductContent />;
}
