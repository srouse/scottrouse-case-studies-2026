import type { CaseStudy } from "./types";

function isValidHttpUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export function validatePublishedCaseStudy(caseStudy: CaseStudy): void {
  if (!caseStudy.published) return;

  const requiredStringFields: Array<keyof Pick<
    CaseStudy,
    "slug" | "companyName" | "projectTitle" | "summary"
  >> = ["slug", "companyName", "projectTitle", "summary"];

  for (const field of requiredStringFields) {
    const value = caseStudy[field];
    if (!value || !String(value).trim()) {
      throw new Error(`Published case study "${caseStudy.slug}" missing ${String(field)}`);
    }
  }

  if (caseStudy.problemStatement !== undefined && !caseStudy.problemStatement.trim()) {
    throw new Error(`Published case study "${caseStudy.slug}" has empty problemStatement`);
  }

  const features = caseStudy.createdFeatures;
  if (features !== undefined) {
    if (features.length < 1) {
      throw new Error(
        `Published case study "${caseStudy.slug}" must include at least one feature when createdFeatures is set`
      );
    }
    for (const [index, feature] of features.entries()) {
      if (!feature.name.trim() || !feature.description.trim()) {
        throw new Error(
          `Published case study "${caseStudy.slug}" has incomplete feature at index ${index}`
        );
      }
      if (feature.href !== undefined) {
        const href = feature.href.trim();
        if (!href || !isValidHttpUrl(href)) {
          throw new Error(
            `Published case study "${caseStudy.slug}" feature at index ${index} has invalid href (use https://...)`
          );
        }
      }
      if (feature.linkLabel !== undefined && !feature.linkLabel.trim()) {
        throw new Error(
          `Published case study "${caseStudy.slug}" feature at index ${index} has empty linkLabel`
        );
      }
    }
  }

  const results = caseStudy.results;
  if (results !== undefined && results.length > 0) {
    if (results.length > 3) {
      throw new Error(
        `Published case study "${caseStudy.slug}" must include at most 3 results when results are provided`
      );
    }
    for (const [index, result] of results.entries()) {
      if (!result.title.trim() || !result.description.trim()) {
        throw new Error(
          `Published case study "${caseStudy.slug}" has incomplete result at index ${index}`
        );
      }
    }
  }

  const hasProblem = Boolean(caseStudy.problemStatement?.trim());
  const hasFeatures = Boolean(features && features.length > 0);
  const hasResults = Boolean(results && results.length > 0);

  if (!hasProblem && !hasFeatures && !hasResults) {
    throw new Error(
      `Published case study "${caseStudy.slug}" must include at least one of problemStatement, createdFeatures, or results`
    );
  }
}
