import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudiesFor, getPillar, isPlaceholder, pillars, profile, projects, type PillarSlug } from "@/data/portfolio";
import { PlaceholderTag } from "./Placeholder";
import { CaseStudyCard } from "./CaseStudyCard";
import { MetricStat } from "./MetricStat";
import { PageShell } from "./PageShell";
import { Reveal } from "./Reveal";

export function PillarPage({ slug }: { slug: PillarSlug }) {
  const pillar = getPillar(slug);
  const studies = caseStudiesFor(slug);
  const index = pillars.findIndex((p) => p.slug === slug);
  const next = pillars[(index + 1) % pillars.length] ?? pillar;

  return (
    <PageShell>
      {/* Hero */}
      <section className="section-ink relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 text-ink-foreground" />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[16rem] font-bold leading-none text-ink-soft md:text-[24rem]"
        >
          {pillar.number}
        </span>
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
          <Reveal>
            <p className="eyebrow text-primary-glow">
              {pillar.number} — {pillar.title}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.95] md:text-7xl">{pillar.headline}</h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted md:text-xl">{pillar.intro}</p>
          </Reveal>
          <Reveal delay={150} className="mt-14 grid grid-cols-1 gap-8 border-t border-ink-border pt-10 sm:grid-cols-3">
            {pillar.metrics.map((m) => (
              <MetricStat key={m.label} metric={m} tone="ink" />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Focus */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow text-primary">{pillar.focusTitle}</p>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {pillar.focus.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className="group bg-card p-7 transition-colors hover:bg-accent/40 md:p-9">
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-2xl font-bold">{f.title}</h2>
              <p className="mt-3 text-muted-foreground">{f.body}</p>
              {f.tags && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {f.tags.map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[0.7rem] text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-primary">Case studies</p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">What I built. What it delivered.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {studies.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <CaseStudyCard study={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects (cost page only) */}
      {slug === "cost-optimisation" && (
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-primary">Personal & open-source</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Built on my own time.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Personal infrastructure projects, outside client work.
            </p>
          </Reveal>
          {projects.length === 0 && (
            <Reveal className="mt-12 rounded-3xl border-2 border-dashed border-border p-8 md:p-10">
              <p className="font-display text-2xl font-bold">New repos on the way.</p>
              <p className="mt-3 max-w-xl text-muted-foreground">
                I'm publishing small infrastructure projects — Terraform modules, pipelines, monitoring setups. They'll
                appear here with their architecture, pipeline and stack.
              </p>
              {profile.github && (
                <Button asChild variant="outlineBold" className="mt-6 rounded-full">
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Github /> Follow on GitHub
                  </a>
                </Button>
              )}
            </Reveal>
          )}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 100} as="article" className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-lg font-semibold">{p.name}</span>
                  {isPlaceholder(p) ? <PlaceholderTag /> : <Github className="size-5 text-muted-foreground" />}
                </div>
                <p className="mt-3 text-muted-foreground">{p.description}</p>
                <dl className="mt-6 space-y-3 text-sm">
                  <div>
                    <dt className="eyebrow text-primary">Architecture</dt>
                    <dd className="mt-1 font-mono text-xs">{p.architecture}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-primary">Pipeline</dt>
                    <dd className="mt-1 font-mono text-xs">{p.pipeline}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[0.7rem]">
                      {t}
                    </span>
                  ))}
                </div>
                {isPlaceholder(p) ? (
                  <p className="mt-auto pt-7 font-mono text-xs text-muted-foreground">Repo link pending verification</p>
                ) : (
                  <Button asChild variant="outlineBold" className="mt-auto self-start rounded-full" style={{ marginTop: "1.75rem" }}>
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      View repo <ArrowUpRight />
                    </a>
                  </Button>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Next */}
      <section className="border-t border-border">
        <Link
          to={`/${next.slug}`}
          className="group mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-14 md:px-8 md:py-20"
        >
          <div>
            <p className="eyebrow text-muted-foreground">Next — {next.number}</p>
            <p className="mt-2 font-display text-4xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-6xl">
              {next.title}
            </p>
          </div>
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-2 md:size-20">
            <ArrowRight className="size-6 md:size-8" />
          </span>
        </Link>
      </section>
    </PageShell>
  );
}
