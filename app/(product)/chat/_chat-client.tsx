"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

type EventType =
  | "status"
  | "assistant_dispatch"
  | "tool_call"
  | "tool_result"
  | "final_answer"
  | "blocked"
  | "error"
  | "usage";

interface ChatEvent {
  id: string;
  type: EventType;
  raw: Record<string, unknown>;
}

interface Message {
  id: string;
  role: "user" | "agent";
  content: string;
  events: ChatEvent[];
  usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number };
  isStreaming: boolean;
}

interface Config {
  apiBase: string;
  userId: string;
  conversationId: string;
  model: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2);
}

function tryParseJson(text: string): Record<string, unknown> {
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return { raw: text };
  }
}

// ── Sub-components ───────────────────────────────────────────────────────────

function Badge({ label, variant = "default" }: { label: string; variant?: "default" | "tool" | "result" | "error" | "ok" | "warn" | "muted" }) {
  const colors: Record<string, string> = {
    default: "bg-primary/10 text-primary",
    tool: "bg-blue-500/10 text-blue-700",
    result: "bg-blue-400/10 text-blue-600",
    error: "bg-destructive/10 text-destructive",
    ok: "bg-green-500/10 text-green-700",
    warn: "bg-amber-500/10 text-amber-700",
    muted: "bg-muted text-muted-foreground",
  };
  return (
    <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-xs font-semibold font-mono uppercase tracking-wide ${colors[variant]}`}>
      {label}
    </span>
  );
}

function CollapsibleBlock({ title, children, defaultOpen = false }: { title: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg border border-border overflow-hidden text-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-2 px-3 py-2 text-left bg-muted/40 hover:bg-muted/70 transition-colors"
      >
        <span className="text-muted-foreground text-xs">{open ? "▾" : "▸"}</span>
        {title}
      </button>
      {open && <div className="px-3 py-2 border-t border-border bg-card/60">{children}</div>}
    </div>
  );
}

function EventCard({ event }: { event: ChatEvent }) {
  if (event.type === "status") {
    return (
      <div className="flex items-center gap-2 text-xs text-muted-foreground py-1">
        <span className="animate-pulse">◈</span>
        <span>{String(event.raw.message ?? "thinking…")}</span>
      </div>
    );
  }

  if (event.type === "assistant_dispatch") {
    const toolCalls = (event.raw.tool_calls as Array<{ function: { name: string } }>) ?? [];
    if (!toolCalls.length) return null;
    return (
      <div className="flex items-center gap-2 text-xs text-muted-foreground py-1">
        <Badge label="plan" variant="muted" />
        <span>Planning {toolCalls.length} tool call{toolCalls.length !== 1 ? "s" : ""}: {toolCalls.map((t) => t.function.name).join(", ")}</span>
      </div>
    );
  }

  if (event.type === "tool_call") {
    const name = String(event.raw.name ?? "tool");
    const args = event.raw.arguments as Record<string, unknown> | undefined;
    return (
      <CollapsibleBlock
        title={
          <span className="flex items-center gap-2">
            <Badge label="tool" variant="tool" />
            <span className="font-mono text-xs text-foreground/80">{name}</span>
          </span>
        }
      >
        <pre className="text-xs font-mono text-foreground/70 whitespace-pre-wrap overflow-x-auto max-h-40">
          {JSON.stringify(args, null, 2)}
        </pre>
      </CollapsibleBlock>
    );
  }

  if (event.type === "tool_result") {
    const name = String(event.raw.name ?? "tool");
    const result = String(event.raw.result ?? "");
    const isError = result.startsWith("Error");
    return (
      <CollapsibleBlock
        title={
          <span className="flex items-center gap-2">
            <Badge label="result" variant={isError ? "error" : "result"} />
            <span className="font-mono text-xs text-foreground/80">{name}</span>
            {isError && <span className="text-xs text-destructive">error</span>}
          </span>
        }
      >
        <pre className="text-xs font-mono text-foreground/70 whitespace-pre-wrap overflow-x-auto max-h-48">
          {result.length > 2000 ? result.slice(0, 2000) + "\n… [truncated]" : result}
        </pre>
      </CollapsibleBlock>
    );
  }

  if (event.type === "blocked") {
    return (
      <div className="flex items-start gap-2 rounded-lg bg-amber-500/8 border border-amber-500/20 px-3 py-2 text-sm text-amber-800">
        <Badge label="blocked" variant="warn" />
        <span>{String(event.raw.message ?? "")}</span>
      </div>
    );
  }

  if (event.type === "error") {
    return (
      <div className="flex items-start gap-2 rounded-lg bg-destructive/8 border border-destructive/20 px-3 py-2 text-sm text-destructive">
        <Badge label="error" variant="error" />
        <span>{String(event.raw.message ?? "")}</span>
      </div>
    );
  }

  return null;
}

function UserMessage({ message }: { message: Message }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[75%] rounded-2xl rounded-br-sm bg-primary px-4 py-3">
        <p className="text-sm text-primary-foreground whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}

function AgentMessage({ message }: { message: Message }) {
  const finalAnswer = message.events.find((e) => e.type === "final_answer");
  const internalEvents = message.events.filter((e) => e.type !== "final_answer" && e.type !== "usage");

  return (
    <div className="flex flex-col gap-2">
      {/* Internal events (tools, status, etc.) */}
      {internalEvents.length > 0 && (
        <CollapsibleBlock
          title={
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <Badge label="internals" variant="muted" />
              <span>{internalEvents.length} step{internalEvents.length !== 1 ? "s" : ""}</span>
              {message.isStreaming && <span className="animate-pulse text-primary">●</span>}
            </span>
          }
          defaultOpen={message.isStreaming}
        >
          <div className="flex flex-col gap-2">
            {internalEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </CollapsibleBlock>
      )}

      {/* Final answer */}
      {finalAnswer ? (
        <div className="flex gap-3">
          <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-primary text-xs font-bold">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-primary mb-1">Apsara</div>
            <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
              {String(finalAnswer.raw.content ?? "")}
            </p>
            {message.usage && (
              <p className="mt-2 text-xs text-muted-foreground font-mono">
                tokens: {message.usage.prompt_tokens} in / {message.usage.completion_tokens} out / {message.usage.total_tokens} total
              </p>
            )}
          </div>
        </div>
      ) : message.isStreaming ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground pl-10">
          <span className="animate-pulse">◈</span>
          <span>Working…</span>
        </div>
      ) : null}
    </div>
  );
}

// ── Config Panel ─────────────────────────────────────────────────────────────

function ConfigPanel({ config, onChange }: { config: Config; onChange: (c: Config) => void }) {
  const [open, setOpen] = useState(!config.userId || !config.conversationId);

  return (
    <div className="border-b border-border bg-card/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-muted/40 transition-colors"
      >
        <span className="flex items-center gap-2 font-medium text-foreground/80">
          <span>⚙</span> API Configuration
        </span>
        <span className="text-muted-foreground text-xs">{open ? "hide" : "show"}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(
            [
              { key: "apiBase", label: "API Base URL", placeholder: "http://localhost:8000" },
              { key: "userId", label: "User ID (UUID)", placeholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" },
              { key: "conversationId", label: "Conversation ID (UUID)", placeholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" },
              { key: "model", label: "Model", placeholder: "gpt-4o" },
            ] as const
          ).map(({ key, label, placeholder }) => (
            <label key={key} className="flex flex-col gap-1">
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
              <input
                type="text"
                value={config[key]}
                onChange={(e) => onChange({ ...config, [key]: e.target.value })}
                placeholder={placeholder}
                className="rounded-md border border-input bg-background px-3 py-1.5 text-sm font-mono placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function ChatClient() {
  const [config, setConfig] = useState<Config>({
    apiBase: "http://localhost:8000",
    userId: "",
    conversationId: "",
    model: "gpt-4o",
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = useCallback(async () => {
    const instruction = input.trim();
    if (!instruction || isStreaming) return;

    if (!config.userId || !config.conversationId) {
      alert("Please set User ID and Conversation ID in the configuration panel above.");
      return;
    }

    const userMsg: Message = {
      id: uid(),
      role: "user",
      content: instruction,
      events: [],
      isStreaming: false,
    };

    const agentMsgId = uid();
    const agentMsg: Message = {
      id: agentMsgId,
      role: "agent",
      content: "",
      events: [],
      isStreaming: true,
    };

    setMessages((prev) => [...prev, userMsg, agentMsg]);
    setInput("");
    setIsStreaming(true);

    const abort = new AbortController();
    abortRef.current = abort;

    try {
      const url = `${config.apiBase}/api/v1/agent/${config.conversationId}/run`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": config.userId,
        },
        body: JSON.stringify({ instruction, model: config.model }),
        signal: abort.signal,
      });

      if (!response.ok) {
        const errText = await response.text().catch(() => response.statusText);
        throw new Error(`HTTP ${response.status}: ${errText}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (!jsonStr) continue;

          const raw = tryParseJson(jsonStr);
          const eventType = raw.type as EventType | undefined;
          if (!eventType) continue;

          const chatEvent: ChatEvent = { id: uid(), type: eventType, raw };

          setMessages((prev) =>
            prev.map((m) => {
              if (m.id !== agentMsgId) return m;
              if (eventType === "usage") {
                return { ...m, usage: raw.data as Message["usage"] };
              }
              return { ...m, events: [...m.events, chatEvent] };
            })
          );
        }
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      const errEvent: ChatEvent = {
        id: uid(),
        type: "error",
        raw: { type: "error", message: (err as Error).message },
      };
      setMessages((prev) =>
        prev.map((m) =>
          m.id === agentMsgId ? { ...m, events: [...m.events, errEvent] } : m
        )
      );
    } finally {
      setMessages((prev) =>
        prev.map((m) => (m.id === agentMsgId ? { ...m, isStreaming: false } : m))
      );
      setIsStreaming(false);
      abortRef.current = null;
      inputRef.current?.focus();
    }
  }, [input, isStreaming, config]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleStop = () => {
    abortRef.current?.abort();
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm px-4 py-3 flex items-center gap-3 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <span className="text-primary font-bold text-sm">A</span>
        </div>
        <div>
          <h1 className="font-semibold text-foreground text-sm leading-tight">Apsara Agent</h1>
          <p className="text-xs text-muted-foreground leading-tight">Project-first coding assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {isStreaming && (
            <button
              onClick={handleStop}
              className="text-xs text-destructive border border-destructive/30 rounded px-2 py-1 hover:bg-destructive/10 transition-colors"
            >
              Stop
            </button>
          )}
          <span className={`w-2 h-2 rounded-full ${isStreaming ? "bg-amber-500 animate-pulse" : "bg-green-500"}`} />
        </div>
      </header>

      {/* Config */}
      <ConfigPanel config={config} onChange={setConfig} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {messages.length === 0 && (
            <div className="text-center py-16">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">A</span>
              </div>
              <h2 className="font-semibold text-foreground mb-2">Apsara Agentic</h2>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                Configure your API connection above, then type a message to start coding with Apsara.
              </p>
            </div>
          )}

          {messages.map((msg) =>
            msg.role === "user" ? (
              <UserMessage key={msg.id} message={msg} />
            ) : (
              <AgentMessage key={msg.id} message={msg} />
            )
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border bg-card/80 backdrop-blur-sm px-4 py-3 shrink-0">
        <div className="max-w-2xl mx-auto flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isStreaming ? "Apsara is working…" : "Ask Apsara to help with your code…"}
            disabled={isStreaming}
            rows={1}
            className="flex-1 resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 min-h-[44px] max-h-36 overflow-y-auto leading-relaxed"
            style={{ height: "auto" }}
            onInput={(e) => {
              const el = e.currentTarget;
              el.style.height = "auto";
              el.style.height = Math.min(el.scrollHeight, 144) + "px";
            }}
          />
          <button
            onClick={isStreaming ? handleStop : sendMessage}
            disabled={!isStreaming && !input.trim()}
            className="shrink-0 h-11 w-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label={isStreaming ? "Stop" : "Send"}
          >
            {isStreaming ? (
              <span className="w-3.5 h-3.5 bg-primary-foreground rounded-sm" />
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 8L8 14M2 8H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-center text-xs text-muted-foreground/50 mt-2">
          Enter to send · Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
