// All portfolio copy lives here. Pages render from this data.
// Verification: any metric, case study, project or contact link WITHOUT `verified: true`
// is shown on the site with a "Placeholder" tag. Add `verified: true` only once confirmed.
// Source of verified content: Nehla's CV (France Travail version) and her experience notes.

import cvAsset from "@/assets/Nehla-KJ-CV.pdf.asset.json";

/** Absence of `verified: true` means the item is a placeholder. */
export type Verifiable = { verified?: true };

export function isPlaceholder(item: Verifiable) {
  return item.verified !== true;
}

export const profile = {
  name: "Nehla K J",
  fullName: "Nehla Kallungal Jaleel",
  role: "Cloud DevOps Engineer",
  positioning: "Cloud DevOps Engineer, AWS & Terraform | Regulated Industries (Banking, Healthcare, Aerospace)",
  location: "Paris, France",
  workAuth: "Full French work authorization",
  email: "nehlajaleel1003@gmail.com",
  linkedin: "https://www.linkedin.com/in/nehlakj",
  /** Set to the GitHub profile URL once shared; links stay hidden while null. */
  github: null as string | null,
};

/** Mark a contact link `true` once it is confirmed as real. Links set to null are hidden, not tagged. */
export const contactVerified: Record<"email" | "linkedin" | "github", boolean> = {
  email: true,
  linkedin: true,
  github: false,
};

/** CV download. `file` is a same-origin URL; null shows only the email request. */
export type CvConfig = { file: string | null; filename: string };
export const cv: CvConfig = { file: cvAsset.url, filename: "Nehla-KJ-CV.pdf" };

export type CvOption =
  | { kind: "download"; href: string; filename: string }
  | { kind: "email"; href: string };

/** Download first when a file exists; the email request is always kept as a fallback. */
export function cvOptions(config: CvConfig, email: string): CvOption[] {
  const request: CvOption = { kind: "email", href: `mailto:${email}?subject=${encodeURIComponent("CV request")}` };
  return config.file ? [{ kind: "download", href: config.file, filename: config.filename }, request] : [request];
}

export type Metric = { value: string; label: string; detail?: string } & Verifiable;

export const headlineMetrics: Metric[] = [
  { value: "2h→15m", label: "Deployment time", detail: "Airbus software delivery", verified: true },
  { value: "80%", label: "Manual deploy work removed", detail: "Pensions platform, TCS", verified: true },
  { value: "5h→1.5h", label: "Provisioning time", detail: "50+ repos, Optum", verified: true },
  { value: "-20%", label: "Cloud costs", detail: "AWS & Azure, Optum", verified: true },
  { value: "99.9%", label: "Uptime", detail: "Serverless ETL, NatWest", verified: true },
];

export const sectors = [
  {
    name: "Banking",
    line: "NatWest and a pensions & savings platform: serverless pipelines, contact centre and CI/CD.",
  },
  {
    name: "Healthcare",
    line: "Optum: AWS and Azure automation in a HIPAA-regulated environment.",
  },
  {
    name: "Aerospace",
    line: "Airbus: enterprise DevOps platforms across INT, VAL and PROD.",
  },
];

export const stack = [
  "AWS",
  "Azure",
  "Terraform",
  "CloudFormation",
  "Ansible",
  "Kubernetes / EKS",
  "Docker",
  "Helm",
  "Jenkins",
  "GitLab CI/CD",
  "GitHub Actions",
  "Azure DevOps",
  "JFrog Artifactory",
  "SonarQube",
  "Prometheus",
  "Grafana",
  "Datadog",
  "ELK",
  "CloudWatch",
  "Lambda",
  "Step Functions",
  "Python",
  "Bash",
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
      "I turn manual release runbooks into pipelines — one path from package to production, the same in every environment.",
    seoDescription:
      "CI/CD work by Nehla K J: Jenkins, GitLab CI/CD and GitHub Actions pipelines for Airbus and a pensions platform, cutting deployment time from 2 hours to 15 minutes.",
    metrics: [
      { value: "2h→15m", label: "Deployment time (Airbus)", verified: true },
      { value: "80%", label: "Manual deploy work removed (TCS)", verified: true },
      { value: "3", label: "Environments on one pipeline: INT, VAL, PROD", verified: true },
    ],
    focusTitle: "What I build",
    focus: [
      {
        title: "Pipeline design",
        body: "Jenkins and GitLab CI/CD pipelines that standardise delivery across INT, VAL and PROD.",
        tags: ["Jenkins", "GitLab CI/CD", "GitHub Actions"],
      },
      {
        title: "Deployment automation",
        body: "Docker images, Helm charts and blue-green releases, so developers deploy without waiting on ops.",
        tags: ["Docker", "Helm", "Blue-green"],
      },
      {
        title: "Removing manual work",
        body: "Python and boto3 scripts for the repetitive jobs: Jenkins job management, AWS operations, monitoring tasks.",
        tags: ["Python", "boto3", "Bash"],
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
      "Reusable Terraform, CloudFormation, ARM and Ansible modules that turn hours of provisioning into a repeatable run.",
    seoDescription:
      "Infrastructure as Code work by Nehla K J: reusable Terraform, CloudFormation, ARM and Ansible modules across 50+ repositories, cutting provisioning from 5 hours to 1.5.",
    metrics: [
      { value: "5h→1.5h", label: "Provisioning time", verified: true },
      { value: "50+", label: "Repositories standardised", verified: true },
      { value: "-25%", label: "Manual ops effort", verified: true },
    ],
    focusTitle: "How I approach it",
    focus: [
      {
        title: "Modules, not copy-paste",
        body: "Shared Terraform, CloudFormation and ARM modules that product teams reuse instead of rewriting.",
        tags: ["Terraform", "CloudFormation", "ARM"],
      },
      {
        title: "Landing zones",
        body: "Multi-account AWS landing zones, VPC networking and ECS/ECR container workloads, all in Terraform.",
        tags: ["AWS Organizations", "VPC", "ECS/ECR"],
      },
      {
        title: "Config that converges",
        body: "Ansible for configuration management, AWS Image Builder for AMIs, Terraform for the schedules around them.",
        tags: ["Ansible", "Image Builder", "Terraform"],
      },
    ],
  },
  {
    slug: "cloud-platforms",
    number: "03",
    title: "Cloud Platforms & Kubernetes",
    short: "Platforms",
    headline: "Production platforms built for regulated traffic.",
    intro:
      "AWS-first, Azure where the business needs it. Containers on EKS and ECS, serverless for event-driven work.",
    seoDescription:
      "Cloud platform and Kubernetes work by Nehla K J: AWS and Azure, EKS and on-prem Kubernetes, and serverless event-driven pipelines at 99.9% uptime.",
    metrics: [
      { value: "99.9%", label: "Serverless ETL uptime (NatWest)", verified: true },
      { value: "5+ yrs", label: "Running production on AWS & Azure", verified: true },
      { value: "3", label: "Regulated sectors: banking, healthcare, aerospace", verified: true },
    ],
    focusTitle: "Platform building blocks",
    focus: [
      {
        title: "Platform architecture",
        body: "Multi-account AWS, VPC networking and hybrid setups that join on-prem Kubernetes with AWS EKS.",
        tags: ["AWS", "Azure", "VPC", "Hybrid"],
      },
      {
        title: "Kubernetes & containers",
        body: "Dockerised Java services, Helm deployments and EKS workloads across dev, test and production.",
        tags: ["EKS", "Kubernetes", "Helm", "Docker"],
      },
      {
        title: "Serverless & event-driven",
        body: "Lambda, Step Functions, EventBridge and DynamoDB for ETL, plus Amazon Connect and Lex for contact centres.",
        tags: ["Lambda", "Step Functions", "EventBridge", "Amazon Connect"],
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
      "Dashboards and alarms that catch problems early, on-call that closes them, and failover that's been tested and written down.",
    seoDescription:
      "Reliability work by Nehla K J: Prometheus, Grafana, Datadog, ELK and CloudWatch monitoring, on-call incident response, root-cause analysis and disaster recovery.",
    metrics: [
      { value: "99.9%", label: "Uptime, serverless ETL (NatWest)", verified: true },
      { value: "99%", label: "Uptime, healthcare platforms (Optum)", verified: true },
      { value: "24/7", label: "Production on-call support", verified: true },
    ],
    focusTitle: "The reliability toolkit",
    focus: [
      {
        title: "Monitoring stack",
        body: "Prometheus, Grafana and Datadog for services, ELK for logs, CloudWatch and X-Ray for AWS-native signals.",
        tags: ["Prometheus", "Grafana", "Datadog", "ELK", "CloudWatch"],
      },
      {
        title: "Alerting & incidents",
        body: "CloudWatch dashboards and alarms, SLI/SLO monitoring, on-call rotations and L2/L3 incident resolution.",
        tags: ["SLI/SLO", "On-call", "ServiceNow"],
      },
      {
        title: "Disaster recovery",
        body: "High availability with Auto Scaling, ALB and RDS replication. Failover procedures validated and documented.",
        tags: ["Auto Scaling", "ALB", "RDS replication"],
      },
      {
        title: "Working with dev teams",
        body: "Runbooks, KT packs and installation guides in Confluence, so the next person fixes it faster.",
        tags: ["Runbooks", "Confluence", "Knowledge transfer"],
      },
      {
        title: "Production troubleshooting",
        body: "Root-cause analysis on high-volume job failures, script errors and pod health across prod and non-prod.",
        tags: ["RCA", "kubectl", "Logs"],
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
      "DevSecOps for teams that answer to regulators: quality gates in the pipeline, least-privilege access, tokens instead of passwords.",
    seoDescription:
      "Security and compliance work by Nehla K J: DevSecOps in a HIPAA-regulated environment with zero critical findings, OAuth2 and token auth, IAM and RBAC.",
    metrics: [
      { value: "0", label: "Critical security findings (HIPAA)", verified: true },
      { value: "OAuth2", label: "Token auth replaced passwords (Airbus)", verified: true },
      { value: "RBAC", label: "Jenkins access control by role", verified: true },
    ],
    focusTitle: "Controls I put in place",
    focus: [
      {
        title: "Compliance context",
        body: "HIPAA for Optum's healthcare workloads, enterprise security standards for Airbus and NatWest.",
        tags: ["HIPAA", "Banking", "Aerospace"],
      },
      {
        title: "Access control",
        body: "IAM policies, automated IAM key rotation and Jenkins RBAC that limits job visibility to the right people.",
        tags: ["IAM", "RBAC", "Key rotation"],
      },
      {
        title: "Secrets & scanning",
        body: "Secrets Manager, token-based credentials, SonarQube quality gates and AWS Inspector scanning.",
        tags: ["Secrets Manager", "SonarQube", "AWS Inspector"],
      },
    ],
  },
  {
    slug: "cost-optimisation",
    number: "06",
    title: "Cost Optimisation & Projects",
    short: "FinOps",
    headline: "Every line on the cloud bill earns its place.",
    intro: "Right-size, reserve, clean up with policy, and track it — across AWS and Azure.",
    seoDescription:
      "Cost optimisation by Nehla K J: 20% lower AWS and Azure costs through rightsizing, reserved instances, lifecycle rules and Cloud Custodian policies.",
    metrics: [
      { value: "-20%", label: "AWS & Azure costs (Optum)", verified: true },
      { value: "2", label: "Clouds optimised: AWS and Azure", verified: true },
      { value: "-25%", label: "Manual effort, via VM scheduling", verified: true },
    ],
    focusTitle: "Cost strategy",
    focus: [
      {
        title: "Make cost visible",
        body: "AWS Cost Explorer and Azure Cost Management to see what each workload actually spends.",
        tags: ["Cost Explorer", "Azure Cost Management"],
      },
      {
        title: "Right-size & schedule",
        body: "Rightsizing, VM scheduling and on-demand EMR for serverless workloads instead of always-on capacity.",
        tags: ["Rightsizing", "VM scheduling", "EMR"],
      },
      {
        title: "Commit & clean up",
        body: "Reserved instances for the baseline, lifecycle rules for storage, Cloud Custodian policies for the rest.",
        tags: ["Reserved instances", "Lifecycle rules", "Cloud Custodian"],
      },
    ],
  },
];

export type Block = { heading: string; body?: string; bullets?: string[] };
export type DiagramStep = { label: string; detail: string };

/** A case study's `verified` flag covers its story and its results. */
export type CaseStudy = Verifiable & {
  slug: string;
  pillar: PillarSlug;
  title: string;
  summary: string;
  sector: "Banking" | "Financial services" | "Healthcare" | "Aerospace";
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
    slug: "airbus-software-delivery",
    pillar: "cicd-automation",
    verified: true,
    title: "Airbus software delivery: from 2 hours to 15 minutes",
    summary: "Replaced a manual, multi-step ARAS release process with one Jenkins pipeline across INT, VAL and PROD.",
    sector: "Aerospace",
    client: "Airbus · via Infosys",
    role: "Associate → Senior Associate Consultant",
    duration: "08/2024 – 07/2026",
    blocks: [
      {
        heading: "Context",
        body: "ARAS software arrived as ZIP packages. Each release meant downloading it, renaming files, building a folder per environment (INT, VAL, PROD), uploading to JFrog Artifactory by hand, then starting Jenkins by hand.",
      },
      {
        heading: "What I owned",
        bullets: [
          "Automating the end-to-end ARAS delivery workflow",
          "Administering Jenkins, GitLab CI/CD, JFrog Artifactory, Jira and Confluence across INT, VAL and PROD",
        ],
      },
      {
        heading: "Strategy & approach",
        body: "Every manual step became a pipeline stage. One pipeline, the same naming rules for every environment, no hand-offs.",
      },
      {
        heading: "Execution",
        bullets: [
          "Jenkins pipeline that extracts the ZIP and applies environment naming (zipname_INT / _VAL / _PROD)",
          "Folders organised and published to JFrog Artifactory automatically",
          "Deployment triggered by the pipeline, not by a person",
          "Pipelines standardised with GitLab CI/CD and Jenkins across environments",
        ],
      },
    ],
    diagram: {
      title: "ARAS delivery pipeline",
      steps: [
        { label: "ZIP received", detail: "ARAS package" },
        { label: "Extract", detail: "Jenkins stage" },
        { label: "Env naming", detail: "INT · VAL · PROD" },
        { label: "Publish", detail: "JFrog Artifactory" },
        { label: "Deploy", detail: "Jenkins job" },
      ],
    },
    results: [
      { value: "2h→15m", label: "Deployment time" },
      { value: "3", label: "Environments, one pipeline" },
      { value: "0", label: "Manual upload or trigger steps left" },
    ],
    stack: ["Jenkins", "GitLab CI/CD", "JFrog Artifactory", "Python", "Bash"],
  },
  {
    slug: "pensions-platform-pipelines",
    pillar: "cicd-automation",
    verified: true,
    title: "80% of manual deployment work removed",
    summary: "Jenkins pipelines, Docker and Helm for a high-availability Java pensions and long-term savings website.",
    sector: "Financial services",
    client: "Pensions & savings platform · via TCS",
    role: "System Engineer",
    duration: "01/2021 – 07/2022",
    blocks: [
      {
        heading: "Context",
        body: "A highly available Java pensions and long-term savings website on a hybrid setup: on-prem plus AWS Kubernetes, managed with Terraform. Deployments leaned on manual steps and on ops.",
      },
      {
        heading: "What I owned",
        bullets: ["Jenkins pipeline scripts and their upkeep", "Dockerfiles for Java services", "Helm charts and the pipelines that use them"],
      },
      {
        heading: "Strategy & approach",
        body: "Automate the deploy path end to end and give developers a self-service way to release.",
      },
      {
        heading: "Execution",
        bullets: [
          "Jenkins CI/CD with Ansible, Nexus and SonarQube quality gates",
          "Helm charts and pipelines that reduced developers' dependency on ops",
          "Supported blue-green deployments in production to cut downtime and release risk",
          "Locust load testing before releases",
        ],
      },
    ],
    diagram: {
      title: "Release pipeline",
      steps: [
        { label: "Commit", detail: "Git workflow" },
        { label: "Build", detail: "Jenkins + Docker" },
        { label: "Quality gate", detail: "SonarQube" },
        { label: "Artefact", detail: "Nexus" },
        { label: "Deploy", detail: "Helm, blue-green" },
      ],
    },
    results: [
      { value: "80%", label: "Manual deployment effort removed" },
      { value: "Blue-green", label: "Production releases with less downtime" },
    ],
    stack: ["Jenkins", "Ansible", "Nexus", "SonarQube", "Docker", "Helm", "Locust"],
  },

  // 02 — IaC
  {
    slug: "optum-reusable-modules",
    pillar: "infrastructure-as-code",
    verified: true,
    title: "Reusable modules across 50+ repositories",
    summary: "Standardised Terraform, CloudFormation, ARM and Ansible modules. Provisioning went from 5 hours to 1.5.",
    sector: "Healthcare",
    client: "Optum Global Solutions",
    role: "Cloud Infrastructure Engineer",
    duration: "07/2022 – 07/2024",
    blocks: [
      {
        heading: "Goal",
        body: "Consistent, faster provisioning across AWS and Azure in a HIPAA-regulated environment, with fewer one-off builds.",
      },
      { heading: "Tools used", bullets: ["Terraform", "CloudFormation", "ARM templates", "Ansible"] },
      { heading: "Environments covered", body: "AWS and Azure, across 50+ product repositories." },
      {
        heading: "Design approach",
        body: "Shared modules for the common building blocks, reused by every repository instead of rewritten in each.",
      },
      {
        heading: "Execution",
        bullets: [
          "Rolled reusable modules out across 50+ repositories",
          "Ran proofs of concept (ADF with Databricks, customised EMR Serverless images) and wrote the Terraform",
          "Presented PoC results and recommendations to product teams",
        ],
      },
    ],
    diagram: {
      title: "Provisioning flow",
      steps: [
        { label: "Module", detail: "Shared library" },
        { label: "Compose", detail: "Per repository" },
        { label: "Plan", detail: "Terraform" },
        { label: "Apply", detail: "AWS / Azure" },
        { label: "Configure", detail: "Ansible" },
      ],
    },
    results: [
      { value: "5h→1.5h", label: "Provisioning time" },
      { value: "50+", label: "Repositories standardised" },
    ],
    stack: ["Terraform", "CloudFormation", "ARM", "Ansible", "AWS", "Azure"],
  },
  {
    slug: "optum-ops-automation",
    pillar: "infrastructure-as-code",
    verified: true,
    title: "25% less manual ops work, in code",
    summary: "Automated VM scheduling, IAM key rotation and AMI distribution with Terraform and AWS Image Builder.",
    sector: "Healthcare",
    client: "Optum Global Solutions",
    role: "Cloud Infrastructure Engineer",
    duration: "07/2022 – 07/2024",
    blocks: [
      { heading: "Goal", body: "Stop doing recurring operational chores by hand." },
      { heading: "Tools used", bullets: ["Terraform", "AWS Image Builder", "IAM"] },
      { heading: "Environments covered", body: "AWS workloads supporting internal healthcare products." },
      {
        heading: "Execution",
        bullets: [
          "VM start/stop schedules defined in Terraform",
          "IAM access keys rotated automatically",
          "AMIs built and distributed with AWS Image Builder",
        ],
      },
    ],
    diagram: {
      title: "Automated ops",
      steps: [
        { label: "Schedule", detail: "VM on/off" },
        { label: "Rotate", detail: "IAM keys" },
        { label: "Build", detail: "Image Builder AMI" },
        { label: "Distribute", detail: "Across accounts" },
      ],
    },
    results: [{ value: "-25%", label: "Manual effort" }],
    stack: ["Terraform", "AWS Image Builder", "IAM", "EC2"],
  },

  // 03 — Platforms
  {
    slug: "natwest-serverless-platform",
    pillar: "cloud-platforms",
    verified: true,
    title: "Serverless pipelines for a bank, at 99.9% uptime",
    summary: "Terraform landing zones, event-driven ETL and an Amazon Connect contact centre for NatWest.",
    sector: "Banking",
    client: "NatWest · via Infosys",
    role: "Associate Consultant, Cloud Infrastructure",
    duration: "Infosys, 2024 – 2026",
    blocks: [
      {
        heading: "Platform architecture",
        body: "Multi-account AWS landing zones, VPC networking and ECS/ECR container workloads, built in Terraform.",
      },
      {
        heading: "Serverless & event-driven",
        bullets: [
          "ETL pipelines orchestrated with Lambda, Step Functions, EventBridge and DynamoDB",
          "Amazon Connect contact flows with Amazon Lex chatbots and voice, integrated with Lambda, S3 and DynamoDB",
          "Amazon Bedrock GenAI proof of concept with Lambda",
        ],
      },
      {
        heading: "Kubernetes & containers",
        body: "Supported Kubernetes workloads on AWS EKS across development, testing and production.",
      },
      {
        heading: "Operations",
        body: "CloudWatch dashboards and alarms, Python/boto3 automation, on-call rotations and L2/L3 incidents with root-cause analysis.",
      },
    ],
    diagram: {
      title: "Event-driven ETL",
      steps: [
        { label: "EventBridge", detail: "Triggers" },
        { label: "Step Functions", detail: "Orchestration" },
        { label: "Lambda", detail: "Transform" },
        { label: "DynamoDB", detail: "Store" },
        { label: "CloudWatch", detail: "Alarms" },
      ],
    },
    results: [{ value: "99.9%", label: "ETL pipeline uptime" }],
    stack: ["Terraform", "Lambda", "Step Functions", "EventBridge", "DynamoDB", "Amazon Connect", "Lex", "Bedrock"],
  },
  {
    slug: "hybrid-kubernetes-platform",
    pillar: "cloud-platforms",
    verified: true,
    title: "One app, two runtimes: on-prem and AWS EKS",
    summary: "Kept a pensions website highly available across on-prem Kubernetes and AWS EKS, managed with Terraform.",
    sector: "Financial services",
    client: "Pensions & savings platform · via TCS",
    role: "System Engineer",
    duration: "01/2021 – 07/2022",
    blocks: [
      {
        heading: "Platform architecture",
        body: "Hybrid setup: on-prem Kubernetes alongside AWS EKS, with EC2, load balancers and S3 managed through Terraform.",
      },
      {
        heading: "Kubernetes & containers",
        bullets: [
          "Dockerfiles for Java microservices",
          "Helm deployments to both clusters",
          "Pod health, logs and cluster events monitored in prod and non-prod",
        ],
      },
      {
        heading: "Impact",
        body: "Blue-green releases in production reduced downtime and release risk.",
      },
    ],
    diagram: {
      title: "Hybrid platform",
      steps: [
        { label: "Docker", detail: "Java services" },
        { label: "Helm", detail: "One chart" },
        { label: "On-prem K8s", detail: "Cluster 1" },
        { label: "AWS EKS", detail: "Cluster 2" },
        { label: "ELB / S3", detail: "Terraform" },
      ],
    },
    results: [{ value: "2", label: "Runtimes, one deployment path" }],
    stack: ["Kubernetes", "AWS EKS", "Terraform", "Docker", "Helm", "CloudWatch", "ELK"],
  },

  // 04 — Reliability
  {
    slug: "airbus-production-reliability",
    pillar: "reliability",
    verified: true,
    title: "Keeping Airbus DevOps platforms up across 3 environments",
    summary: "Incident response, RCA, upgrades with minimal downtime and validated failover for enterprise platforms.",
    sector: "Aerospace",
    client: "Airbus · via Infosys",
    role: "Associate → Senior Associate Consultant",
    duration: "08/2024 – 07/2026",
    blocks: [
      {
        heading: "Monitoring stack",
        body: "Grafana, Prometheus and Datadog for AWS EKS workloads, supporting SLI/SLO monitoring and SLA compliance.",
      },
      {
        heading: "Alerting & incident handling",
        bullets: [
          "Led incident response and root-cause analysis for high-volume pipeline job failures and script errors",
          "Resolved pipeline, authentication and IAM/RBAC issues in production",
        ],
      },
      {
        heading: "Disaster recovery approach",
        body: "High availability and DR with Terraform, Auto Scaling, ALB, RDS replication and CloudWatch. Failover procedures validated and recovery runbooks written.",
      },
      {
        heading: "Collaboration with development teams",
        body: "Worked directly with Airbus stakeholders. Wrote runbooks, installation guides and knowledge transfer packs in Confluence.",
      },
      {
        heading: "Production troubleshooting",
        body: "Jira upgrades in INT and VAL with minimal downtime; production fixes for job failures, scripts and UI issues.",
      },
    ],
    diagram: {
      title: "Recovery path",
      steps: [
        { label: "Detect", detail: "CloudWatch / Datadog" },
        { label: "Scale", detail: "Auto Scaling" },
        { label: "Route", detail: "ALB" },
        { label: "Fail over", detail: "RDS replica" },
        { label: "Runbook", detail: "Confluence" },
      ],
    },
    results: [
      { value: "3", label: "Environments: INT, VAL, PROD" },
      { value: "Tested", label: "Failover procedures, documented" },
    ],
    stack: ["AWS EKS", "Prometheus", "Grafana", "Datadog", "Terraform", "RDS", "CloudWatch"],
  },
  {
    slug: "optum-uptime-monitoring",
    pillar: "reliability",
    verified: true,
    title: "Healthcare platforms held at 99% uptime",
    summary: "CloudWatch monitoring, IAM policies and AWS Inspector — with no critical issues.",
    sector: "Healthcare",
    client: "Optum Global Solutions",
    role: "Cloud Infrastructure Engineer",
    duration: "07/2022 – 07/2024",
    blocks: [
      { heading: "Monitoring stack", body: "AWS CloudWatch for real-time monitoring of serverless and infrastructure workloads." },
      {
        heading: "Alerting & incident handling",
        body: "Resolved L2/L3 infrastructure incidents and daily user blockers through ServiceNow.",
      },
      {
        heading: "Collaboration with development teams",
        body: "Documented issues, fixes and architectures on the internal wiki so the whole team could troubleshoot faster.",
      },
    ],
    diagram: {
      title: "Monitoring loop",
      steps: [
        { label: "Collect", detail: "CloudWatch" },
        { label: "Scan", detail: "AWS Inspector" },
        { label: "Ticket", detail: "ServiceNow" },
        { label: "Fix", detail: "L2/L3" },
        { label: "Document", detail: "Wiki" },
      ],
    },
    results: [
      { value: "99%", label: "Uptime" },
      { value: "0", label: "Critical issues" },
    ],
    stack: ["CloudWatch", "AWS Inspector", "IAM", "ServiceNow"],
  },

  // 05 — Security
  {
    slug: "hipaa-devsecops-migration",
    pillar: "security-compliance",
    verified: true,
    title: "Jenkins to GitHub Actions, with zero critical findings",
    summary: "Migrated CI/CD to GitHub Actions and Azure DevOps with DevSecOps controls in a HIPAA-regulated environment.",
    sector: "Healthcare",
    client: "Optum Global Solutions",
    role: "Cloud Infrastructure Engineer",
    duration: "07/2022 – 07/2024",
    blocks: [
      { heading: "Compliance context", body: "Healthcare workloads under HIPAA. Security issues had to be caught before production, not after." },
      {
        heading: "Access control",
        bullets: ["IAM policies scoped per workload", "Automated IAM key rotation"],
      },
      {
        heading: "Execution",
        bullets: [
          "Migrated Jenkins pipelines to GitHub Actions and Azure DevOps",
          "Added DevSecOps controls, quality gates and vulnerability remediation to the pipeline",
          "AWS Inspector scanning on cloud resources",
        ],
      },
    ],
    diagram: {
      title: "DevSecOps pipeline",
      steps: [
        { label: "Code", detail: "GitHub" },
        { label: "Build", detail: "GitHub Actions" },
        { label: "Quality gate", detail: "Scans" },
        { label: "Deploy", detail: "Azure DevOps" },
        { label: "Runtime", detail: "AWS Inspector" },
      ],
    },
    results: [
      { value: "0", label: "Critical security findings" },
      { value: "HIPAA", label: "Regulated environment" },
    ],
    stack: ["GitHub Actions", "Azure DevOps", "IAM", "AWS Inspector"],
  },
  {
    slug: "airbus-token-auth",
    pillar: "security-compliance",
    verified: true,
    title: "Passwords out, tokens in: securing Airbus DevOps tools",
    summary: "OAuth2 and token-based authentication across Jenkins, Artifactory and Jira, plus Jenkins RBAC.",
    sector: "Aerospace",
    client: "Airbus · via Infosys",
    role: "Associate → Senior Associate Consultant",
    duration: "08/2024 – 07/2026",
    blocks: [
      { heading: "Compliance context", body: "Enterprise security standards required moving off password-based authentication." },
      {
        heading: "Access control",
        bullets: ["Implemented OAuth2 and token-based access", "Configured Jenkins RBAC to control job visibility and user access"],
      },
      {
        heading: "Secrets management",
        body: "Migrated Jenkins pipelines from artifactoryPassword to artifactoryToken and fixed the authentication failures that followed.",
      },
      {
        heading: "Execution",
        body: "Fixed Jira SIL OAuth2 SSO by adding the missing Bearer token to the authorization header.",
      },
    ],
    diagram: {
      title: "Auth migration",
      steps: [
        { label: "Password", detail: "Legacy" },
        { label: "Token", detail: "Artifactory" },
        { label: "OAuth2", detail: "Jira SIL SSO" },
        { label: "RBAC", detail: "Jenkins" },
      ],
    },
    results: [
      { value: "OAuth2", label: "Token-based auth live" },
      { value: "RBAC", label: "Jenkins jobs scoped by role" },
    ],
    stack: ["Jenkins", "JFrog Artifactory", "Jira", "OAuth2"],
  },

  // 06 — Cost
  {
    slug: "optum-cloud-cost-reduction",
    pillar: "cost-optimisation",
    verified: true,
    title: "20% off AWS and Azure costs",
    summary: "Rightsizing, reserved instances, lifecycle rules and Cloud Custodian policies in a healthcare environment.",
    sector: "Healthcare",
    client: "Optum Global Solutions",
    role: "Cloud Infrastructure Engineer",
    duration: "07/2022 – 07/2024",
    blocks: [
      {
        heading: "Cost optimisation strategy",
        body: "Monitor serverless and infrastructure usage first, then cut what isn't earning its keep.",
      },
      {
        heading: "Tools & methods",
        bullets: [
          "Rightsizing and reserved instances",
          "Storage lifecycle rules",
          "Cloud Custodian policies",
          "On-demand EMR for serverless workloads",
          "Tracked in AWS Cost Explorer and Azure Cost Management",
        ],
      },
    ],
    diagram: {
      title: "FinOps loop",
      steps: [
        { label: "Measure", detail: "Cost Explorer" },
        { label: "Right-size", detail: "Compute" },
        { label: "Reserve", detail: "Baseline" },
        { label: "Clean up", detail: "Cloud Custodian" },
        { label: "Track", detail: "Azure Cost Mgmt" },
      ],
    },
    results: [{ value: "-20%", label: "AWS & Azure costs" }],
    stack: ["AWS Cost Explorer", "Azure Cost Management", "Cloud Custodian", "EMR"],
  },
];

/** Unverified projects show no repo link. */
export type Project = Verifiable & {
  name: string;
  description: string;
  architecture: string;
  pipeline: string;
  stack: string[];
  repo: string;
};

/** Personal GitHub projects. Empty until real repos are shared. */
export const projects: Project[] = [];

/** True while any sample content is still on the site. */
export function hasPlaceholders() {
  const contactKeys = ["email", "linkedin", "github"] as const;
  return (
    headlineMetrics.some(isPlaceholder) ||
    pillars.some((p) => p.metrics.some(isPlaceholder)) ||
    caseStudies.some(isPlaceholder) ||
    projects.some(isPlaceholder) ||
    contactKeys.some((k) => profile[k] !== null && !contactVerified[k])
  );
}

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
