import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { MetricStat } from "@/components/site/MetricStat";
import { PageShell } from "@/components/site/PageShell";
import { PipelineDiagram } from "@/components/site/PipelineDiagram";
import { Reveal } from "@/components/site/Reveal";
import { caseStudies, getCaseStudy, getPillar } from "@/data/portfolio";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Case study not found — Nehla K J" }, { name: "robots", content: "noindex" }] };
    const { study } = loaderData;
    return { meta: seo(`${study.title} — Nehla K J case study`, study.summary, "article") };
  },
  notFoundComponent: () => (
    <PageShell cta={false}>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="text-5xl font-bold">Case study not found</h1>
        <p className="mt-4 text-muted-foreground">That one may have moved. Start from the home page.</p>
        <Button asChild variant="hero" size="xl" className="mt-8">
          <Link to="/">Back home</Link>
        </Button>
      </div>
    </PageShell>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const pillar = getPillar(study.pillar);
  const related = caseStudies.filter((c) => c.slug !== study.slug && c.pillar === study.pillar);
  const more = related.length ? related : caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <PageShell>
      <section className="section-ink relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 text-ink-foreground" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
          <Link
            to={`/${pillar.slug}`}
            className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-ink-foreground"
          >
            <ArrowLeft className="size-3.5" /> {pillar.number} — {pillar.title}
          </Link>
          <Reveal className="mt-8">
            <span className="rounded-full border border-ink-border px-3 py-1 font-mono text-xs text-primary-glow">{study.sector}</span>
            <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.95] md:text-7xl">{study.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted md:text-xl">{study.summary}</p>
          </Reveal>
          <dl className="mt-12 grid gap-6 border-t border-ink-border pt-8 sm:grid-cols-3">
            {[
              ["Client", study.client],
              ["My role", study.role],
              ["Duration", study.duration],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow text-ink-muted">{k}</dt>
                <dd className="mt-2 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="eyebrow text-primary">Results</p>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {study.results.map((m, i) => (
              <Reveal key={m.label} delay={i * 80}>
                <MetricStat metric={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="space-y-14 md:space-y-20">
          {study.blocks.map((b, i) => (
            <Reveal key={b.heading} className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
              <div>
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">{b.heading}</h2>
              </div>
              <div className="text-lg">
                {b.body && <p className="text-muted-foreground">{b.body}</p>}
                {b.bullets && (
                  <ul className="space-y-3">
                    {b.bullets.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gradient-primary" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <PipelineDiagram title={study.diagram.title} steps={study.diagram.steps} />
        </Reveal>

        <Reveal className="mt-14">
          <p className="eyebrow text-muted-foreground">Stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.stack.map((s) => (
              <span key={s} className="rounded-full border-2 border-foreground px-4 py-1.5 font-mono text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* More */}
      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold md:text-4xl">More work</h2>
            <Button asChild variant="outlineBold" className="rounded-full">
              <Link to={`/${pillar.slug}`}>
                All {pillar.short} work <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {more.map((s) => (
              <CaseStudyCard key={s.slug} study={s} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
