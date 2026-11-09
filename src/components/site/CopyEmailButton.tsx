import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers that block the async clipboard API.
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  }
}

/** Copies an email address, for visitors without a default mail app. */
export function CopyEmailButton({
  email,
  compact = false,
  className,
}: {
  email: string;
  compact?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onClick() {
    if (await copyText(email)) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  const Icon = copied ? Check : Copy;
  const text = copied ? "Copied" : compact ? "Copy" : "Copy email";

  return (
    <Button
      type="button"
      variant="ghostInk"
      size={compact ? "sm" : "xl"}
      onClick={onClick}
      aria-label={copied ? "Email address copied" : `Copy email address ${email}`}
      className={cn(compact && "rounded-full", className)}
    >
      <Icon /> {text}
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </Button>
  );
}
