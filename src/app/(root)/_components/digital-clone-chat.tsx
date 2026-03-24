"use client";

import { useChat } from "@ai-sdk/react";
import { cn } from "@src/lib/utils";
import { Button } from "@src/ui/button";
import { Card } from "@src/ui/card";
import { DefaultChatTransport, type UIMessage } from "ai";
import { SendHorizontal } from "lucide-react";
import * as React from "react";

const SUGGESTIONS = [
  "Which technologies do you enjoy working with most?",
  "Walk me through your career journey.",
  "What books or ideas have shaped how you build software?",
  "What problems are you most excited to work on right now?",
] as const;

function textFromMessage(message: UIMessage): string {
  return message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export function DigitalCloneChat({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const transport = React.useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    [],
  );

  const { messages, sendMessage, status, error, clearError } = useChat({
    transport,
  });

  const [input, setInput] = React.useState("");
  const listRef = React.useRef<HTMLDivElement>(null);

  const busy = status === "submitted" || status === "streaming";

  const scrollToBottom = React.useCallback(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, busy, scrollToBottom]);

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    clearError();
    void sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <Card
      data-slot="digital-clone-chat"
      hoverable
      className={cn(
        "flex flex-col gap-0 overflow-hidden p-0 cursor-default!",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-4">
        <div
          ref={listRef}
          className="max-h-86 min-h-0 space-y-3 overflow-y-auto pb-3 px-5 pt-5"
          aria-live="polite"
        >
          <Message
            role="assistant"
            text="Hi. I'm Abdul's digital clone. Ask me anything about my interests, career, talks, or ideas."
          />
          {messages.map((m) => (
            <Message key={m.id} role={m.role} text={textFromMessage(m)} />
          ))}
          {busy ? (
            <p className="text-xs text-muted-foreground animate-pulse">
              Thinking…
            </p>
          ) : null}
        </div>

        {error ? (
          <p className="text-sm text-destructive px-5" role="alert">
            {error.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-3">
        {messages.length === 0 && (
          <div className="flex flex-wrap gap-2 px-3 sm:px-6 md:justify-center">
            {SUGGESTIONS.map((label) => (
              <Button
                key={label}
                type="button"
                disabled={busy}
                onClick={() => submit(label)}
                variant={"outline"}
                className="text-xs sm:text-sm px-1.5 sm:px-3"
                size="sm"
              >
                {label}
              </Button>
            ))}
          </div>
        )}

        <form
          className="flex items-center gap-2 pr-4 pl-6 md:px-6 border-t"
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
          }}
        >
          <label htmlFor="digital-clone-input" className="sr-only">
            Message to Abdul&apos;s digital clone
          </label>
          <input
            id="digital-clone-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything…"
            disabled={busy}
            className={cn(
              "min-w-0 flex-1 bg-transparent outline-none py-4",
              "disabled:opacity-60",
            )}
            autoComplete="off"
          />
          <Button
            type="submit"
            disabled={busy || !input.trim()}
            aria-label="Send message"
            size="icon"
          >
            <SendHorizontal />
          </Button>
        </form>
      </div>
    </Card>
  );
}

export function Message({ role, text }: { role: string; text: string }) {
  return role === "user" ? (
    <div className="leading-relaxe w-fit ml-auto bg-muted rounded-full rounded-tr-none px-4 py-2 max-w-4/5">
      {text}
    </div>
  ) : (
    <div className="sm:flex sm:gap-3.5 pr-4">
      <div
        className="float-left sm:float-none size-6 sm:size-8 mr-2 sm:mr-0 mt-1 sm:mt-0 flex shrink-0 items-center justify-center rounded-full text-sm sm:text-lg font-bold font-serif bg-primary text-primary-foreground"
        aria-hidden
      >
        A
      </div>
      <p className="leading-relaxed mt-0.5 sm:mt-1">{text}</p>
    </div>
  );
}
