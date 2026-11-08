import { isPlaceholder, type Metric } from "@/data/portfolio";
import { PlaceholderTag } from "./Placeholder";
import { cn } from "@/lib/utils";

export function MetricStat({
  metric,
  tone = "light",
  className,
  placeholder = isPlaceholder(metric),
}: {
  metric: Metric;
  tone?: "light" | "ink";
  className?: string;
  placeholder?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span
        className={cn(
          "font-display text-4xl font-bold leading-none tracking-tight md:text-5xl",
          tone === "ink" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {metric.value}
      </span>
      <span
        className={cn(
          "mt-2 flex flex-wrap items-center gap-2 text-sm font-semibold",
          tone === "ink" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {metric.label}
        {placeholder && <PlaceholderTag tone={tone} />}
      </span>
      {metric.detail && (
        <span className={cn("text-sm", tone === "ink" ? "text-ink-muted" : "text-muted-foreground")}>{metric.detail}</span>
      )}
    </div>
  );
}
