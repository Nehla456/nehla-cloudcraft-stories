const lines: { t: string; tone?: "muted" | "ok" | "accent" }[] = [
  { t: "$ terraform apply -auto-approve", tone: "accent" },
  { t: "module.eks.aws_eks_cluster.this: Creating...", tone: "muted" },
  { t: "Apply complete! Resources: 42 added.", tone: "ok" },
  { t: "$ gh workflow run release.yml", tone: "accent" },
  { t: "✓ build   ✓ test   ✓ scan   ✓ deploy", tone: "ok" },
  { t: "release v2.14.0 → prod in 7m 52s", tone: "muted" },
  { t: "$ kubectl get slo checkout", tone: "accent" },
  { t: "checkout   99.97%   budget 71% left", tone: "ok" },
];

const toneClass = { muted: "text-ink-muted", ok: "text-signal", accent: "text-primary-glow" } as const;

export function TerminalCard() {
  return (
    <div className="relative rounded-3xl border border-ink-border bg-ink-soft/80 shadow-elegant backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-ink-border px-5 py-3.5">
        <span className="size-2.5 rounded-full bg-ink-border" />
        <span className="size-2.5 rounded-full bg-ink-border" />
        <span className="size-2.5 rounded-full bg-primary-glow" />
        <span className="ml-3 font-mono text-xs text-ink-muted">~/platform — zsh</span>
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
