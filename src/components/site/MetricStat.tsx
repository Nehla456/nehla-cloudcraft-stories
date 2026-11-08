import type { Metric } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function MetricStat({ metric, tone = "light", className }: { metric: Metric; tone?: "light" | "ink"; className?: string }) {
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
      <span className={cn("mt-2 text-sm font-semibold", tone === "ink" ? "text-ink-foreground" : "text-foreground")}>
        {metric.label}
      </span>
      {metric.detail && (
        <span className={cn("text-sm", tone === "ink" ? "text-ink-muted" : "text-muted-foreground")}>{metric.detail}</span>
      )}
    </div>
  );
}
