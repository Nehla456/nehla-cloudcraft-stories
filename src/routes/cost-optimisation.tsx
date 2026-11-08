import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { getPillar } from "@/data/portfolio";
import { seo } from "@/lib/seo";

const pillar = getPillar("cost-optimisation");

export const Route = createFileRoute("/cost-optimisation")({
  head: () => ({ meta: seo(`${pillar.title} | Nehla K J, Cloud DevOps Engineer`, pillar.seoDescription) }),
  component: Page,
});

function Page() {
  return <PillarPage slug="cost-optimisation" />;
}
