const lines: { t: string; tone?: "muted" | "ok" | "accent" }[] = [
  { t: "$ terraform apply", tone: "accent" },
  { t: "module.vpc.aws_vpc.main: Creating...", tone: "muted" },
  { t: "Apply complete!", tone: "ok" },
  { t: "$ jenkins build aras-delivery --env VAL", tone: "accent" },
  { t: "✓ extract   ✓ rename   ✓ publish   ✓ deploy", tone: "ok" },
  { t: "artifact → JFrog Artifactory", tone: "muted" },
  { t: "$ kubectl get pods -n prod", tone: "accent" },
  { t: "all pods Running · 0 restarts", tone: "ok" },
];

const toneClass = { muted: "text-ink-muted", ok: "text-signal", accent: "text-primary-glow" } as const;

export function TerminalCard() {
  return (
    <div className="relative rounded-3xl border border-ink-border bg-ink-soft/80 shadow-elegant backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-ink-border px-5 py-3.5">
        <span className="size-2.5 rounded-full bg-ink-border" />
        <span className="size-2.5 rounded-full bg-ink-border" />
        <span className="size-2.5 rounded-full bg-primary-glow" />
        <span className="ml-3 font-mono text-xs text-ink-muted">~/platform — zsh · illustrative</span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[0.78rem] leading-7">
        {lines.map((l, i) => (
          <div key={i} className={toneClass[l.tone ?? "muted"]}>
            {l.t}
          </div>
        ))}
        <span className="text-ink-foreground">$ </span>
        <span className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-primary-glow" />
      </pre>
    </div>
  );
}
