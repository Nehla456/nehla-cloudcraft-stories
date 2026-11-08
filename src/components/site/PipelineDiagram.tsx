import type { DiagramStep } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function PipelineDiagram({ title, steps, compact = false }: { title: string; steps: DiagramStep[]; compact?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-ink-border bg-ink p-5 text-ink-foreground md:p-8">
      <figcaption className="mb-6 flex items-center justify-between gap-4">
        <span className="eyebrow text-ink-muted">{title}</span>
        <span className="flex items-center gap-2 font-mono text-xs text-signal">
          <span className="size-2 animate-pulse rounded-full bg-signal" /> passing
        </span>
      </figcaption>
      <ol className={cn("flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0", compact && "md:gap-0")}>
        {steps.map((step, i) => (
          <li key={step.label} className="flex flex-col md:flex-1 md:flex-row md:items-center">
            <div className="relative flex-1 rounded-2xl border border-ink-border bg-ink-soft px-4 py-4 transition-colors hover:border-primary-glow">
              <span className="font-mono text-[0.65rem] text-primary-glow">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-1 font-display text-base font-semibold leading-tight">{step.label}</p>
              <p className="mt-1 text-xs text-ink-muted">{step.detail}</p>
            </div>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="animate-flow mx-auto h-5 w-0.5 md:mx-0 md:h-0.5 md:w-6 md:shrink-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, var(--primary-glow) 0 8px, transparent 8px 12px)",
                  backgroundSize: "24px 100%",
                }}
              />
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
