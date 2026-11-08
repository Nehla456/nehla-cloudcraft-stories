import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/portfolio";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const lead = study.results[0];
  return (
    <Link
      to="/work/$slug"
      params={{ slug: study.slug }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-elegant md:p-8"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">{study.sector}</span>
        <span className="grid size-10 place-items-center rounded-full border border-border transition-all group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      {lead && (
        <>
          <p className="mt-8 font-display text-6xl font-bold leading-none tracking-tight text-gradient md:text-7xl">
            {lead.value}
          </p>
          <p className="mt-2 text-sm font-semibold text-muted-foreground">{lead.label}</p>
        </>
      )}
      <h3 className="mt-6 text-2xl font-bold leading-tight md:text-[1.7rem]">{study.title}</h3>
      <p className="mt-3 text-muted-foreground">{study.summary}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {study.stack.slice(0, 4).map((s) => (
          <span key={s} className="rounded-md border border-border px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground">
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
