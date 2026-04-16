import type { CaseStudy } from "./types";

export function validatePublishedCaseStudy(caseStudy: CaseStudy): void {
  if (!caseStudy.published) return;

  const requiredStringFields: Array<keyof Pick<
    CaseStudy,
    "slug" | "companyName" | "projectTitle" | "summary" | "problemStatement"
  >> = [
    "slug",
    "companyName",
    "projectTitle",
    "summary",
    "problemStatement"
  ];

  for (const field of requiredStringFields) {
    if (!caseStudy[field] || !caseStudy[field].trim()) {
      throw new Error(`Published case study "${caseStudy.slug}" missing ${field}`);
    }
  }

  if (caseStudy.createdFeatures.length < 1) {
    throw new Error(`Published case study "${caseStudy.slug}" must include features`);
  }

  if (caseStudy.results.length < 2 || caseStudy.results.length > 3) {
    throw new Error(`Published case study "${caseStudy.slug}" must include 2-3 results`);
  }

  for (const [index, result] of caseStudy.results.entries()) {
    if (!result.title.trim() || !result.description.trim()) {
      throw new Error(
        `Published case study "${caseStudy.slug}" has incomplete result at index ${index}`
      );
    }
  }
}
