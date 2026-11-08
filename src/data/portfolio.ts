// All portfolio copy lives here. Pages render from this data.
// NOTE: metrics, sectors and project details are sample content until replaced with real figures.

export const profile = {
  name: "Nehla K J",
  role: "Cloud DevOps Engineer",
  positioning: "Cloud DevOps Engineer, AWS & Terraform | Regulated Industries (Banking, Healthcare, Aerospace)",
  email: "hello@nehlakj.dev",
  linkedin: "https://www.linkedin.com/in/nehlakj",
  github: "https://github.com/nehlakj",
};

export type Metric = { value: string; label: string; detail?: string };

export const headlineMetrics: Metric[] = [
  { value: "-82%", label: "Deployment time", detail: "45 min → 8 min per release" },
  { value: "99.95%", label: "Uptime held", detail: "Across 3 production platforms" },
  { value: "-38%", label: "AWS spend", detail: "≈ £410k saved per year" },
  { value: "40 min", label: "New environment", detail: "Down from 3 days" },
  { value: "120 h", label: "Manual work removed", detail: "Every month, per team" },
];

export const sectors = [
  {
    name: "Banking",
    line: "Payment and lending platforms under PCI DSS and internal risk controls.",
  },
  {
    name: "Healthcare",
    line: "Patient-data workloads built for HIPAA and audit-ready by default.",
  },
  {
    name: "Aerospace",
    line: "Engineering and MRO systems where change control is not optional.",
  },
];

export const stack = [
  "AWS",
  "Terraform",
  "Kubernetes / EKS",
  "GitHub Actions",
  "GitLab CI",
  "Jenkins",
  "ArgoCD",
  "Ansible",
  "CloudFormation",
  "Docker",
  "Helm",
  "Prometheus",
  "Grafana",
  "ELK",
  "CloudWatch",
  "Lambda",
  "Azure",
  "Python",
  "Bash",
  "Vault",
];

export type PillarSlug =
  | "cicd-automation"
  | "infrastructure-as-code"
  | "cloud-platforms"
  | "reliability"
  | "security-compliance"
  | "cost-optimisation";

export type FocusBlock = { title: string; body: string; tags?: string[] };

export type Pillar = {
  slug: PillarSlug;
  number: string;
  title: string;
  short: string;
  headline: string;
  intro: string;
  seoDescription: string;
  metrics: Metric[];
  focusTitle: string;
  focus: FocusBlock[];
};

export const pillars: Pillar[] = [
  {
    slug: "cicd-automation",
    number: "01",
    title: "CI/CD & Automation",
    short: "CI/CD",
    headline: "Releases that take minutes, not meetings.",
    intro:
      "I design pipelines that build, test, scan and ship on every merge — and delete the manual steps that slow teams down.",
    seoDescription:
      "CI/CD case studies by Nehla K J: pipeline design, deployment automation and manual work removed in banking and healthcare.",
    metrics: [
      { value: "45→8 min", label: "Release time" },
      { value: "12×", label: "More deploys per week" },
      { value: "-71%", label: "Failed changes" },
    ],
    focusTitle: "What I build",
    focus: [
      {
        title: "Pipeline design",
        body: "One reusable pipeline template per stack. Build, test, scan, deploy — same stages for every service.",
        tags: ["GitHub Actions", "GitLab CI", "Jenkins"],
      },
      {
        title: "Deployment automation",
        body: "GitOps rollouts with automatic rollback. Nobody SSHs into production to release.",
        tags: ["ArgoCD", "Helm", "Blue/green"],
      },
      {
        title: "Removing manual work",
        body: "Change tickets, approvals and release notes generated from the pipeline, not typed by hand.",
        tags: ["Python", "Bash", "Jira API"],
      },
    ],
  },
  {
    slug: "infrastructure-as-code",
    number: "02",
    title: "Infrastructure as Code",
    short: "IaC",
    headline: "Every environment, rebuilt from code.",
    intro:
      "Reusable Terraform modules and standards that make a new environment a pull request — not a three-day ticket queue.",
    seoDescription:
      "Infrastructure as Code work by Nehla K J: Terraform modules, CloudFormation and Ansible standards that cut provisioning from days to minutes.",
    metrics: [
      { value: "40 min", label: "New environment (was 3 days)" },
      { value: "34", label: "Repos standardised" },
      { value: "-90%", label: "Config drift incidents" },
    ],
    focusTitle: "How I approach it",
    focus: [
      {
        title: "Modules, not copy-paste",
        body: "Versioned Terraform modules for VPC, EKS, RDS and IAM. Teams compose, they don't rewrite.",
        tags: ["Terraform", "Terragrunt", "Registry"],
      },
      {
        title: "Standards enforced in CI",
        body: "fmt, validate, tflint, Checkov and a plan review on every PR. Bad config never reaches apply.",
        tags: ["tflint", "Checkov", "OPA"],
      },
      {
        title: "Config that converges",
        body: "Ansible for the OS layer, CloudFormation where the account baseline demands it.",
        tags: ["Ansible", "CloudFormation", "SSM"],
      },
    ],
  },
  {
    slug: "cloud-platforms",
    number: "03",
    title: "Cloud Platforms & Kubernetes",
    short: "Platforms",
    headline: "Production platforms that scale on a Tuesday and on Black Friday.",
    intro:
      "AWS-first, Azure where the business needs it. EKS for long-running services, serverless for everything event-driven.",
    seoDescription:
      "Cloud platform and Kubernetes work by Nehla K J: AWS and Azure architecture, EKS clusters and serverless event-driven services.",
    metrics: [
      { value: "99.95%", label: "Platform availability" },
      { value: "6×", label: "Peak traffic absorbed" },
      { value: "140+", label: "Services on EKS" },
    ],
    focusTitle: "Platform building blocks",
    focus: [
      {
        title: "Platform architecture",
        body: "Multi-account AWS with Control Tower, shared networking and a clear blast radius per workload.",
        tags: ["AWS Organizations", "Transit Gateway", "Azure"],
      },
      {
        title: "Kubernetes & containers",
        body: "EKS with Karpenter, Helm charts per service type and sane defaults for limits, probes and PDBs.",
        tags: ["EKS", "Karpenter", "Helm", "Docker"],
      },
      {
        title: "Serverless & event-driven",
        body: "Lambda, SQS and EventBridge for spiky workloads. Pay for the work, not the idle time.",
        tags: ["Lambda", "EventBridge", "SQS", "Step Functions"],
      },
    ],
  },
  {
    slug: "reliability",
    number: "04",
    title: "Reliability & Observability",
    short: "Reliability",
    headline: "Know before the customer does.",
    intro:
      "Monitoring that pages on symptoms, not noise. Runbooks that work at 3am. Recovery that's been rehearsed, not hoped for.",
    seoDescription:
      "Reliability and observability work by Nehla K J: Prometheus, Grafana, ELK and CloudWatch monitoring, incident response and disaster recovery.",
    metrics: [
      { value: "-64%", label: "P1 incidents" },
      { value: "4h→35m", label: "Mean time to recover" },
      { value: "-80%", label: "Alert noise" },
    ],
    focusTitle: "The reliability toolkit",
    focus: [
      {
        title: "Monitoring stack",
        body: "Prometheus and Grafana for services, ELK for logs, CloudWatch for AWS-native signals — one dashboard per user journey.",
        tags: ["Prometheus", "Grafana", "ELK", "CloudWatch"],
      },
      {
        title: "Alerting & incidents",
        body: "SLO-based alerts routed to the owning team, with a runbook link in every page.",
        tags: ["Alertmanager", "PagerDuty", "SLOs"],
      },
      {
        title: "Disaster recovery",
        body: "Cross-region backups and quarterly restore drills. RTO and RPO are measured, not assumed.",
        tags: ["AWS Backup", "Route 53", "Aurora Global"],
      },
      {
        title: "Working with dev teams",
        body: "Blameless post-mortems, shared on-call and dashboards built with the people who own the code.",
        tags: ["Post-mortems", "On-call", "Game days"],
      },
      {
        title: "Production troubleshooting",
        body: "From kubectl to flame graphs. I stay on the bridge until root cause is fixed, not just patched.",
        tags: ["kubectl", "X-Ray", "tcpdump"],
      },
    ],
  },
  {
    slug: "security-compliance",
    number: "05",
    title: "Security & Compliance",
    short: "Security",
    headline: "Audit-ready on any given day.",
    intro:
      "DevSecOps for teams who answer to regulators. Controls live in code, evidence comes out of the pipeline.",
    seoDescription:
      "Security and compliance work by Nehla K J: DevSecOps for HIPAA and banking standards, IAM least privilege, RBAC and secrets management.",
    metrics: [
      { value: "0", label: "Critical audit findings" },
      { value: "-95%", label: "Standing admin access" },
      { value: "100%", label: "Secrets out of code" },
    ],
    focusTitle: "Controls I put in place",
    focus: [
      {
        title: "Compliance context",
        body: "HIPAA for patient data, PCI DSS and internal risk frameworks for banking, AS9100 change control in aerospace.",
        tags: ["HIPAA", "PCI DSS", "ISO 27001"],
      },
      {
        title: "Access control",
        body: "IAM least privilege generated from real usage. RBAC in Kubernetes mapped to teams, not individuals.",
        tags: ["IAM", "SSO", "RBAC", "IRSA"],
      },
      {
        title: "Secrets management",
        body: "KMS-encrypted everything. Secrets Manager with rotation. No credentials in repos, images or env files.",
        tags: ["KMS", "Secrets Manager", "Vault"],
      },
    ],
  },
  {
    slug: "cost-optimisation",
    number: "06",
    title: "Cost Optimisation & Projects",
    short: "FinOps",
    headline: "Every pound in the cloud bill earns its place.",
    intro:
      "FinOps that engineers actually follow: right-size, schedule, commit — and make the cost visible to the team that spends it.",
    seoDescription:
      "Cost optimisation and personal projects by Nehla K J: FinOps strategy, AWS right-sizing and savings, plus open-source infrastructure projects on GitHub.",
    metrics: [
      { value: "-38%", label: "AWS bill" },
      { value: "£410k", label: "Saved per year" },
      { value: "100%", label: "Spend tagged to an owner" },
    ],
    focusTitle: "Cost strategy",
    focus: [
      {
        title: "Make cost visible",
        body: "Mandatory tagging, per-team dashboards and a weekly cost note in the team channel.",
        tags: ["Cost Explorer", "CUR", "Athena"],
      },
      {
        title: "Right-size & schedule",
        body: "Compute Optimizer data, Graviton migrations and non-prod switched off outside working hours.",
        tags: ["Compute Optimizer", "Graviton", "Instance Scheduler"],
      },
      {
        title: "Commit & alert",
        body: "Savings Plans sized to the baseline, Spot for the burst, and budget alerts before the invoice.",
        tags: ["Savings Plans", "Spot", "AWS Budgets"],
      },
    ],
  },
];

export type Block = { heading: string; body?: string; bullets?: string[] };
export type DiagramStep = { label: string; detail: string };

export type CaseStudy = {
  slug: string;
  pillar: PillarSlug;
  title: string;
  summary: string;
  sector: "Banking" | "Healthcare" | "Aerospace";
  client: string;
  role: string;
  duration: string;
  blocks: Block[];
  diagram: { title: string; steps: DiagramStep[] };
  results: Metric[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  // 01 — CI/CD
  {
    slug: "bank-release-pipeline",
    pillar: "cicd-automation",
    title: "From fortnightly releases to 40 deploys a week",
    summary: "Rebuilt the release path for a retail bank's payments team. 45-minute manual releases became 8-minute automated ones.",
    sector: "Banking",
    client: "Tier-1 retail bank · Payments platform",
    role: "Lead DevOps Engineer",
    duration: "7 months",
    blocks: [
      {
        heading: "Context",
        body: "60 microservices, released every two weeks by a 14-step manual runbook. Each release needed 3 engineers and a change board slot. One in five failed.",
      },
      {
        heading: "What I owned",
        bullets: [
          "Pipeline architecture and the shared template library",
          "Migration of all 60 services off Jenkins freestyle jobs",
          "Change-management integration with the bank's ServiceNow",
        ],
      },
      {
        heading: "Strategy & approach",
        body: "Standardise first, speed up second. One golden pipeline, opt-in per service, with the change record generated by the pipeline itself so auditors got more evidence, not less.",
      },
      {
        heading: "Execution",
        bullets: [
          "Reusable GitHub Actions workflows: build → unit → SAST → image scan → deploy",
          "ArgoCD for GitOps deploys to EKS with automated canary analysis",
          "Auto-created ServiceNow change records with test and scan evidence attached",
          "Rollback on error-rate breach in under 90 seconds",
        ],
      },
    ],
    diagram: {
      title: "Release pipeline",
      steps: [
        { label: "Commit", detail: "PR + review" },
        { label: "Build", detail: "Docker, cached" },
        { label: "Test", detail: "Unit + contract" },
        { label: "Scan", detail: "SAST + Trivy" },
        { label: "Change", detail: "Auto ServiceNow" },
        { label: "Deploy", detail: "ArgoCD canary" },
      ],
    },
    results: [
      { value: "45→8 min", label: "Release time" },
      { value: "2→40", label: "Deploys per week" },
      { value: "-71%", label: "Failed changes" },
      { value: "3→0", label: "Engineers per release" },
    ],
    stack: ["GitHub Actions", "ArgoCD", "EKS", "Trivy", "SonarQube", "ServiceNow API"],
  },
  {
    slug: "healthcare-test-automation",
    pillar: "cicd-automation",
    title: "120 hours of manual work removed every month",
    summary: "Automated environment refresh, test data and release notes for a healthtech product team.",
    sector: "Healthcare",
    client: "Healthtech scale-up · Patient records SaaS",
    role: "DevOps Engineer",
    duration: "4 months",
    blocks: [
      {
        heading: "Context",
        body: "QA spent two days every sprint rebuilding test environments and anonymising patient data by hand. Release notes were written from memory.",
      },
      {
        heading: "What I owned",
        bullets: ["Ephemeral environment workflow", "Data anonymisation job", "Release-note generator"],
      },
      {
        heading: "Strategy & approach",
        body: "Treat every manual task as a pipeline step waiting to be written. Measure hours spent first, automate the biggest block first.",
      },
      {
        heading: "Execution",
        bullets: [
          "Per-PR preview environments spun up and torn down by GitLab CI",
          "Nightly anonymised snapshot of production data, HIPAA-safe by design",
          "Release notes built from conventional commits and Jira tickets",
        ],
      },
    ],
    diagram: {
      title: "Preview environment flow",
      steps: [
        { label: "Open PR", detail: "GitLab MR" },
        { label: "Provision", detail: "Terraform workspace" },
        { label: "Seed data", detail: "Anonymised snapshot" },
        { label: "Test", detail: "E2E suite" },
        { label: "Tear down", detail: "On merge" },
      ],
    },
    results: [
      { value: "120 h", label: "Saved per month" },
      { value: "2 days→25 min", label: "Test env refresh" },
      { value: "0", label: "PHI in test envs" },
    ],
    stack: ["GitLab CI", "Terraform", "AWS RDS", "Python", "Jira API"],
  },

  // 02 — IaC
  {
    slug: "terraform-module-library",
    pillar: "infrastructure-as-code",
    title: "A Terraform module library 34 teams build on",
    summary: "Turned three days of ticket-driven provisioning into a 40-minute pull request.",
    sector: "Banking",
    client: "Investment bank · Cloud platform team",
    role: "Platform / IaC Lead",
    duration: "9 months",
    blocks: [
      {
        heading: "Goal",
        body: "Consistent, compliant AWS environments in minutes. Fewer hand-built resources, fewer surprises at audit.",
      },
      {
        heading: "Tools used",
        bullets: ["Terraform + Terragrunt", "Private module registry", "tflint, Checkov, OPA", "Atlantis for plan/apply"],
      },
      {
        heading: "Environments covered",
        body: "Dev, test, pre-prod and prod across 48 AWS accounts in 2 regions.",
      },
      {
        heading: "Design approach",
        bullets: [
          "Small, versioned modules: network, compute, data, identity",
          "Opinionated defaults: encryption, logging and tags on by default",
          "Composition via Terragrunt — one folder per environment, no duplication",
        ],
      },
      {
        heading: "Execution",
        bullets: [
          "Imported 1,900 hand-built resources into state",
          "Policy-as-code gate on every PR",
          "Self-service catalogue: teams request an environment with one YAML file",
        ],
      },
    ],
    diagram: {
      title: "Provisioning flow",
      steps: [
        { label: "Request", detail: "env.yaml PR" },
        { label: "Lint", detail: "fmt + tflint" },
        { label: "Policy", detail: "Checkov + OPA" },
        { label: "Plan", detail: "Atlantis review" },
        { label: "Apply", detail: "Per-account role" },
      ],
    },
    results: [
      { value: "40 min", label: "New environment (was 3 days)" },
      { value: "34", label: "Repos standardised" },
      { value: "-90%", label: "Drift incidents" },
      { value: "1,900", label: "Resources brought under code" },
    ],
    stack: ["Terraform", "Terragrunt", "Atlantis", "Checkov", "OPA", "AWS"],
  },
  {
    slug: "aerospace-ansible-baseline",
    pillar: "infrastructure-as-code",
    title: "One baseline for 400 engineering servers",
    summary: "Replaced hand-patched servers with Ansible and CloudFormation baselines for an aerospace supplier.",
    sector: "Aerospace",
    client: "Aerospace MRO supplier · Engineering systems",
    role: "DevOps Engineer",
    duration: "5 months",
    blocks: [
      {
        heading: "Goal",
        body: "Every server built the same way, every change traceable. Pass AS9100 change-control audits without a scramble.",
      },
      { heading: "Tools used", bullets: ["Ansible + AWX", "CloudFormation StackSets", "AWS SSM"] },
      { heading: "Environments covered", body: "Validation, staging and production — 400 Linux and Windows hosts." },
      {
        heading: "Design approach",
        body: "Roles per server type, CIS hardening as a shared role, and StackSets for the account-level guardrails.",
      },
      {
        heading: "Execution",
        bullets: [
          "Rebuilt 400 hosts in rolling waves with zero unplanned downtime",
          "Patch cycle moved to SSM maintenance windows",
          "Every change logged against a ticket ID",
        ],
      },
    ],
    diagram: {
      title: "Baseline rollout",
      steps: [
        { label: "Change", detail: "Ticket + PR" },
        { label: "Validate", detail: "Molecule tests" },
        { label: "Stage", detail: "AWX canary" },
        { label: "Roll out", detail: "Waves of 10%" },
        { label: "Evidence", detail: "Audit log" },
      ],
    },
    results: [
      { value: "-85%", label: "Config errors" },
      { value: "6 h→20 min", label: "Server build" },
      { value: "0", label: "Audit findings" },
    ],
    stack: ["Ansible", "AWX", "CloudFormation", "SSM", "Molecule"],
  },

  // 03 — Platforms
  {
    slug: "eks-payments-platform",
    pillar: "cloud-platforms",
    title: "A multi-region EKS platform for 140 services",
    summary: "Moved a bank's payments estate from VMs to EKS and held 99.95% availability through peak season.",
    sector: "Banking",
    client: "Tier-1 retail bank · Payments platform",
    role: "Platform Engineer",
    duration: "10 months",
    blocks: [
      {
        heading: "Platform architecture",
        body: "Two AWS regions, active-active. Shared networking account with Transit Gateway; one account per workload tier.",
      },
      {
        heading: "Kubernetes & container setup",
        bullets: [
          "EKS with Karpenter for node autoscaling",
          "Helm base charts with probes, limits and PDBs set by default",
          "IRSA for pod-level AWS access — no node-wide credentials",
        ],
      },
      {
        heading: "Serverless & event-driven",
        body: "Settlement and notification jobs moved to Lambda + SQS. They scale to zero overnight.",
      },
      {
        heading: "Execution",
        bullets: [
          "Migrated 140 services in 6 waves, each with a rollback path",
          "Load-tested to 6× normal peak before cut-over",
        ],
      },
    ],
    diagram: {
      title: "Platform architecture",
      steps: [
        { label: "Route 53", detail: "Latency routing" },
        { label: "ALB", detail: "Per region" },
        { label: "EKS", detail: "Karpenter nodes" },
        { label: "SQS / Lambda", detail: "Async jobs" },
        { label: "Aurora Global", detail: "Cross-region" },
      ],
    },
    results: [
      { value: "99.95%", label: "Availability" },
      { value: "6×", label: "Peak absorbed" },
      { value: "-40%", label: "Compute cost per txn" },
    ],
    stack: ["EKS", "Karpenter", "Helm", "Lambda", "SQS", "Aurora", "Route 53"],
  },
  {
    slug: "serverless-imaging-pipeline",
    pillar: "cloud-platforms",
    title: "Serverless pipeline for medical imaging uploads",
    summary: "An event-driven ingest path that handles 10× spikes without a single always-on server.",
    sector: "Healthcare",
    client: "Diagnostics provider · Imaging platform",
    role: "Cloud Engineer",
    duration: "3 months",
    blocks: [
      {
        heading: "Platform architecture",
        body: "Uploads land in S3, EventBridge routes them, Step Functions run validation, de-identification and indexing.",
      },
      {
        heading: "Serverless & event-driven",
        bullets: ["S3 event notifications into EventBridge", "Step Functions with retries and DLQs", "Lambda for de-identification"],
      },
      {
        heading: "Execution",
        body: "Built in Terraform, deployed through the same CI as the rest of the estate. Full trace in X-Ray for every file.",
      },
    ],
    diagram: {
      title: "Event-driven ingest",
      steps: [
        { label: "S3 upload", detail: "KMS encrypted" },
        { label: "EventBridge", detail: "Routing rules" },
        { label: "Step Functions", detail: "Orchestration" },
        { label: "Lambda", detail: "De-identify" },
        { label: "Index", detail: "DynamoDB" },
      ],
    },
    results: [
      { value: "10×", label: "Spike handled" },
      { value: "-62%", label: "Running cost" },
      { value: "<2 s", label: "Median processing" },
    ],
    stack: ["S3", "EventBridge", "Step Functions", "Lambda", "DynamoDB", "X-Ray"],
  },

  // 04 — Reliability
  {
    slug: "observability-overhaul",
    pillar: "reliability",
    title: "Cut P1 incidents by 64% with SLO-based alerting",
    summary: "Replaced 900 noisy alerts with 60 that mattered, and halved time to recover.",
    sector: "Healthcare",
    client: "Healthtech scale-up · Patient records SaaS",
    role: "SRE / DevOps Engineer",
    duration: "6 months",
    blocks: [
      {
        heading: "Monitoring stack",
        body: "Prometheus and Grafana for services, ELK for logs, CloudWatch for managed AWS services — joined by trace IDs.",
      },
      {
        heading: "Alerting & incident handling",
        bullets: [
          "SLOs defined with each product team for their top 3 user journeys",
          "Burn-rate alerts replaced static thresholds",
          "Every alert links to a runbook; on-call rota shared with developers",
        ],
      },
      {
        heading: "Collaboration with development teams",
        body: "Weekly reliability review with each team. Blameless post-mortems with tracked actions, not just a document.",
      },
      {
        heading: "Production troubleshooting",
        body: "Led the bridge on 30+ incidents. Root causes ranged from DNS caching to a connection-pool leak found with flame graphs.",
      },
    ],
    diagram: {
      title: "Observability flow",
      steps: [
        { label: "Services", detail: "OTel SDK" },
        { label: "Prometheus", detail: "Metrics" },
        { label: "ELK", detail: "Logs" },
        { label: "Grafana", detail: "SLO dashboards" },
        { label: "PagerDuty", detail: "Burn-rate pages" },
      ],
    },
    results: [
      { value: "-64%", label: "P1 incidents" },
      { value: "4h→35m", label: "MTTR" },
      { value: "900→60", label: "Alert rules" },
      { value: "99.95%", label: "Uptime" },
    ],
    stack: ["Prometheus", "Grafana", "ELK", "CloudWatch", "OpenTelemetry", "PagerDuty"],
  },
  {
    slug: "cross-region-dr",
    pillar: "reliability",
    title: "Disaster recovery that's tested every quarter",
    summary: "Designed and rehearsed cross-region DR for a bank's lending platform. RTO went from unknown to 15 minutes.",
    sector: "Banking",
    client: "Challenger bank · Lending platform",
    role: "DevOps Engineer",
    duration: "4 months",
    blocks: [
      {
        heading: "Disaster recovery approach",
        bullets: [
          "Pilot-light standby in a second region, built from the same Terraform",
          "Aurora Global Database with 1-second replication lag",
          "Route 53 health checks with scripted failover",
        ],
      },
      {
        heading: "Execution",
        body: "Quarterly game days with the dev teams. The first drill took 3 hours; by the fourth it took 15 minutes.",
      },
    ],
    diagram: {
      title: "Failover path",
      steps: [
        { label: "Health check", detail: "Route 53" },
        { label: "Promote DB", detail: "Aurora Global" },
        { label: "Scale up", detail: "Standby EKS" },
        { label: "Switch DNS", detail: "Weighted records" },
        { label: "Verify", detail: "Synthetic checks" },
      ],
    },
    results: [
      { value: "15 min", label: "RTO" },
      { value: "<1 s", label: "RPO" },
      { value: "4/4", label: "Drills passed" },
    ],
    stack: ["Aurora Global", "Route 53", "AWS Backup", "Terraform", "EKS"],
  },

  // 05 — Security
  {
    slug: "hipaa-devsecops",
    pillar: "security-compliance",
    title: "HIPAA audit passed with zero critical findings",
    summary: "Put security controls into the pipeline so audit evidence generated itself.",
    sector: "Healthcare",
    client: "Healthtech scale-up · Patient records SaaS",
    role: "DevSecOps Engineer",
    duration: "5 months",
    blocks: [
      {
        heading: "Compliance context",
        body: "First external HIPAA audit in 6 months. Evidence lived in screenshots and spreadsheets.",
      },
      {
        heading: "Access control",
        bullets: ["SSO-only AWS access via IAM Identity Center", "Just-in-time admin with 1-hour sessions", "Kubernetes RBAC mapped to team groups"],
      },
      {
        heading: "Secrets management",
        bullets: ["KMS customer-managed keys per data class", "Secrets Manager with 30-day rotation", "Pre-commit and CI secret scanning"],
      },
      {
        heading: "Execution",
        body: "AWS Config rules and Security Hub standards as code. A nightly job exported evidence to an immutable S3 bucket for the auditor.",
      },
    ],
    diagram: {
      title: "DevSecOps controls",
      steps: [
        { label: "Code", detail: "Secret scan" },
        { label: "Build", detail: "SAST + SCA" },
        { label: "Image", detail: "Trivy + signing" },
        { label: "Deploy", detail: "OPA admission" },
        { label: "Runtime", detail: "Security Hub" },
      ],
    },
    results: [
      { value: "0", label: "Critical findings" },
      { value: "-95%", label: "Standing admin access" },
      { value: "3 wks→2 days", label: "Audit prep" },
    ],
    stack: ["IAM Identity Center", "KMS", "Secrets Manager", "Security Hub", "AWS Config", "OPA"],
  },
  {
    slug: "bank-least-privilege",
    pillar: "security-compliance",
    title: "Least privilege across 48 AWS accounts",
    summary: "Replaced wildcard IAM policies with roles generated from real usage data.",
    sector: "Banking",
    client: "Investment bank · Cloud platform team",
    role: "Cloud Security / DevOps",
    duration: "4 months",
    blocks: [
      {
        heading: "Compliance context",
        body: "Internal risk review flagged 300+ roles with wildcard permissions. Regulator follow-up due in one quarter.",
      },
      {
        heading: "Access control",
        bullets: [
          "IAM Access Analyzer to generate policies from 90 days of CloudTrail",
          "Permission boundaries on every team role",
          "SCPs blocking risky actions at the organisation level",
        ],
      },
      { heading: "Execution", body: "Rolled out per account with a 2-week shadow mode, so nothing broke in production." },
    ],
    diagram: {
      title: "Policy generation",
      steps: [
        { label: "CloudTrail", detail: "90 days of usage" },
        { label: "Analyzer", detail: "Generate policy" },
        { label: "Review", detail: "Team sign-off" },
        { label: "Shadow", detail: "2 weeks" },
        { label: "Enforce", detail: "Terraform apply" },
      ],
    },
    results: [
      { value: "300→0", label: "Wildcard roles" },
      { value: "0", label: "Production breakages" },
      { value: "1 qtr", label: "Closed before deadline" },
    ],
    stack: ["IAM", "Access Analyzer", "CloudTrail", "SCPs", "Terraform"],
  },

  // 06 — Cost
  {
    slug: "aws-cost-reduction",
    pillar: "cost-optimisation",
    title: "38% off the AWS bill without slowing anyone down",
    summary: "A FinOps programme that saved £410k a year and made every team own its spend.",
    sector: "Aerospace",
    client: "Aerospace manufacturer · Digital engineering",
    role: "DevOps / FinOps Lead",
    duration: "6 months",
    blocks: [
      {
        heading: "Cost optimisation strategy",
        body: "Visibility first, then quick wins, then commitments. No savings plan until the baseline was clean.",
      },
      {
        heading: "Tools & methods",
        bullets: [
          "Tag policy enforced by SCP; untagged resources blocked",
          "CUR + Athena + Grafana for per-team cost dashboards",
          "Compute Optimizer right-sizing and Graviton migration",
          "Non-prod scheduled off 7pm–7am and weekends",
          "Savings Plans sized to 70% of steady-state compute",
        ],
      },
      {
        heading: "Execution",
        body: "Weekly 15-minute cost review with each team lead. Budget alerts at 80% and 100% of forecast.",
      },
    ],
    diagram: {
      title: "FinOps loop",
      steps: [
        { label: "Tag", detail: "Owner + env" },
        { label: "Measure", detail: "CUR + Athena" },
        { label: "Right-size", detail: "Optimizer" },
        { label: "Schedule", detail: "Non-prod off" },
        { label: "Commit", detail: "Savings Plans" },
      ],
    },
    results: [
      { value: "-38%", label: "AWS bill" },
      { value: "£410k", label: "Saved per year" },
      { value: "100%", label: "Spend with an owner" },
    ],
    stack: ["Cost Explorer", "CUR", "Athena", "Compute Optimizer", "Graviton", "AWS Budgets"],
  },
];

export type Project = {
  name: string;
  description: string;
  architecture: string;
  pipeline: string;
  stack: string[];
  repo: string;
};

export const projects: Project[] = [
  {
    name: "eks-blueprint",
    description: "Production-ready EKS in one terraform apply: VPC, Karpenter, ArgoCD and observability included.",
    architecture: "3-AZ VPC · EKS · Karpenter · ArgoCD app-of-apps",
    pipeline: "GitHub Actions: fmt → tflint → Checkov → plan → apply",
    stack: ["Terraform", "EKS", "ArgoCD", "Helm"],
    repo: "https://github.com/nehlakj/eks-blueprint",
  },
  {
    name: "cost-sentinel",
    description: "Serverless bot that posts daily AWS cost changes and idle resources to Slack.",
    architecture: "EventBridge schedule · Lambda · Cost Explorer API · Slack webhook",
    pipeline: "GitHub Actions: pytest → SAM build → deploy",
    stack: ["Python", "Lambda", "SAM", "Cost Explorer"],
    repo: "https://github.com/nehlakj/cost-sentinel",
  },
  {
    name: "slo-kit",
    description: "Drop-in Prometheus rules and Grafana dashboards for SLO burn-rate alerting.",
    architecture: "Prometheus recording rules · Alertmanager · Grafana JSON",
    pipeline: "promtool test → dashboard lint → release",
    stack: ["Prometheus", "Grafana", "Jsonnet"],
    repo: "https://github.com/nehlakj/slo-kit",
  },
];

export function getPillar(slug: PillarSlug) {
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) throw new Error(`Unknown pillar: ${slug}`);
  return pillar;
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudiesFor(pillar: PillarSlug) {
  return caseStudies.filter((c) => c.pillar === pillar);
}
