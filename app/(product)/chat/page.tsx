import type { Metadata } from "next";
import { ChatClient } from "./_chat-client";

export const metadata: Metadata = {
  title: "Chat | Apsara",
  description: "Apsara agentic coding assistant — web chat interface.",
};

export default function ChatPage() {
  return <ChatClient />;
}
