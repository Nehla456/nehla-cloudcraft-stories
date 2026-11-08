import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { getPillar } from "@/data/portfolio";
import { seo } from "@/lib/seo";

const pillar = getPillar("infrastructure-as-code");

export const Route = createFileRoute("/infrastructure-as-code")({
  head: () => ({ meta: seo(`${pillar.title} — Nehla K J, Cloud DevOps Engineer`, pillar.seoDescription) }),
  component: Page,
});

function Page() {
  return <PillarPage slug="infrastructure-as-code" />;
}
