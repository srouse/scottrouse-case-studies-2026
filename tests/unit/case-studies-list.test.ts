import { describe, expect, it } from "vitest";

import { getPublishedCaseStudies } from "@/lib/case-studies";

describe("getPublishedCaseStudies", () => {
  it("returns sorted published studies", () => {
    const studies = getPublishedCaseStudies();
    expect(studies).toHaveLength(5);
    expect(studies.map((s) => s.slug)).toEqual([
      "contentful-for-figma",
      "ctf-ai-demos",
      "writing-articles",
      "state-farm",
      "summit-credit-union"
    ]);
  });
});
