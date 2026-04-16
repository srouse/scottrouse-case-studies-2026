import { describe, expect, it } from "vitest";

import { getPublishedCaseStudies } from "@/lib/case-studies";

describe("getPublishedCaseStudies", () => {
  it("returns sorted published studies", () => {
    const studies = getPublishedCaseStudies();
    expect(studies).toHaveLength(4);
    expect(studies[0]?.slug).toBe("summit-credit-union");
  });
});
