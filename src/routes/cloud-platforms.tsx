import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/site/PillarPage";
import { getPillar } from "@/data/portfolio";
import { seo } from "@/lib/seo";

const pillar = getPillar("cloud-platforms");

export const Route = createFileRoute("/cloud-platforms")({
  head: () => ({ meta: seo(`${pillar.title} | Nehla K J, Cloud DevOps Engineer`, pillar.seoDescription) }),
  component: Page,
});

function Page() {
  return <PillarPage slug="cloud-platforms" />;
}
