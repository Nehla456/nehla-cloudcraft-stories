import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { MetricStat } from "@/components/site/MetricStat";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { TerminalCard } from "@/components/site/TerminalCard";
import {
  getCaseStudy,
  headlineMetrics,
  isPlaceholder,
  pillars,
  profile,
  sectors,
  stack,
  type CaseStudy,
} from "@/data/portfolio";
import { PlaceholderTag } from "@/components/site/Placeholder";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seo(
      "Nehla K J — Cloud DevOps Engineer, AWS & Terraform",
      "Cloud DevOps Engineer, AWS & Terraform, for banking, healthcare and aerospace. Faster deployments, steadier platforms and leaner cloud bills.",
    ),
  }),
  component: Index,
});

const featured = ["bank-release-pipeline", "terraform-module-library", "aws-cost-reduction"]
  .map(getCaseStudy)
  .filter((c): c is CaseStudy => Boolean(c));

const approach = [
  { step: "Measure", body: "Lead time, failure rate, MTTR, cost per service. No baseline, no project." },
  { step: "Automate", body: "Pipelines, modules and guardrails that remove the manual step for good." },
  { step: "Prove", body: "Before/after numbers, audit evidence and a runbook the team owns." },
];

function Index() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="section-ink relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 text-ink-foreground" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-soft px-3 py-1.5 font-mono text-xs text-ink-muted">
              <span className="size-2 animate-pulse rounded-full bg-signal" />
              {profile.name} · AWS · Terraform · Kubernetes
            </p>
            <h1 className="mt-7 text-[3.2rem] font-bold leading-[0.92] sm:text-7xl lg:text-[5.6rem]">
              I build cloud platforms that <span className="text-gradient">ship fast</span> and stay up.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-ink-muted md:text-xl">
              Cloud DevOps Engineer for banking, healthcare and aerospace. I make releases faster, platforms steadier
              and cloud bills smaller — built in Terraform, with the audit trail to prove it.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <a href="#work">
                  View my work <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="ghostInk" size="xl">
                <Link to="/contact">
                  Let's work together <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <TerminalCard />
          </Reveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="eyebrow text-primary">The numbers</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {headlineMetrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 70} className="border-l-2 border-primary pl-4">
                <MetricStat metric={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">Built for teams that answer to regulators.</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {sectors.map((s) => (
              <div key={s.name} className="rounded-3xl bg-secondary p-6 transition-transform hover:-translate-y-1">
                <p className="font-display text-2xl font-bold">{s.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.line}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Pillars */}
      <section id="work" className="scroll-mt-16 bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-primary-glow">The work</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold md:text-6xl">Six things I do. All of them measured.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60} className="bg-ink">
                <Link
                  to={`/${p.slug}`}
                  className="group relative flex h-full min-h-72 flex-col p-7 transition-colors hover:bg-ink-soft md:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-sm text-primary-glow">{p.number}</span>
                    <ArrowUpRight className="size-5 text-ink-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-glow" />
                  </div>
                  <h3 className="mt-8 text-3xl font-bold leading-tight">{p.title}</h3>
                  <p className="mt-3 text-ink-muted">{p.headline}</p>
                  {p.metrics[0] && (
                    <div className="mt-auto flex flex-wrap items-baseline gap-2 pt-8">
                      <span className="font-display text-3xl font-bold text-gradient">{p.metrics[0].value}</span>
                      <span className="text-sm text-ink-muted">{p.metrics[0].label}</span>
                      {isPlaceholder(p.metrics[0]) && <PlaceholderTag tone="ink" />}
                    </div>
                  )}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-primary transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow text-primary">Selected case studies</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">This is what I built. This is what it delivered.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 100}>
              <CaseStudyCard study={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="eyebrow text-primary">How I work</p>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal key={a.step} delay={i * 100}>
                <span className="font-display text-7xl font-bold text-gradient">{i + 1}</span>
                <h3 className="mt-2 text-3xl font-bold">{a.step}</h3>
                <p className="mt-3 text-muted-foreground">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stack marquee */}
      <section className="overflow-hidden py-10" aria-label="Tools I use">
        <div className="animate-marquee flex w-max gap-10">
          {[...stack, ...stack].map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap font-display text-3xl font-bold text-muted-foreground/60 md:text-5xl"
            >
              {s}
              <span className="size-2 rounded-full bg-gradient-primary" />
            </span>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
