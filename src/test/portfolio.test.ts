import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { caseStudies, caseStudiesFor, pillars } from "@/data/portfolio";

const router = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });

describe("portfolio structure", () => {
  it("has exactly six work pages", () => {
    expect(pillars).toHaveLength(6);
  });

  it("gives every work page its own route", () => {
    const r = router();
    for (const p of pillars) {
      expect(r.matchRoutes(`/${p.slug}`).at(-1)?.routeId).toBe(`/${p.slug}`);
    }
  });

  it("gives every work page at least one case study", () => {
    for (const p of pillars) expect(caseStudiesFor(p.slug).length).toBeGreaterThan(0);
  });

  it("opens every case study as its own page", () => {
    const r = router();
    for (const c of caseStudies) {
      expect(r.matchRoutes(`/work/${c.slug}`).at(-1)?.routeId).toBe("/work/$slug");
    }
  });

  it("backs every case study with at least one result metric", () => {
    for (const c of caseStudies) expect(c.results.length).toBeGreaterThan(0);
  });
});
