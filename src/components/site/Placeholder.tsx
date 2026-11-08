import { CircleDashed } from "lucide-react";
import { hasPlaceholders } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function PlaceholderTag({ tone = "light", className }: { tone?: "light" | "ink"; className?: string }) {
  return (
    <span
      title="Placeholder: awaiting verification"
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full border border-dashed px-2 py-0.5 align-middle font-mono text-[0.62rem] font-medium uppercase tracking-wider",
        tone === "ink" ? "border-pending-ink text-pending-ink" : "border-pending text-pending",
        className,
      )}
    >
      <CircleDashed className="size-3" aria-hidden />
      Placeholder
    </span>
  );
}

export function PlaceholderNotice() {
  if (!hasPlaceholders()) return null;
  return (
    <div className="border-b border-dashed border-pending-ink/40 bg-ink-soft text-ink-foreground">
      <p className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-2 text-xs md:px-8">
        <PlaceholderTag tone="ink" />
        <span className="text-ink-muted">
          Draft: anything tagged placeholder is sample content awaiting verification.
        </span>
      </p>
    </div>
  );
}
