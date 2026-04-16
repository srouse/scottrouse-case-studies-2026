import { caseStudies } from "@/content/case-studies";

import type { CaseStudy } from "./types";
import { validatePublishedCaseStudy } from "./validate";

const sortedCaseStudies = [...caseStudies].sort((a, b) => {
  const aOrder = a.order ?? Number.MAX_SAFE_INTEGER;
  const bOrder = b.order ?? Number.MAX_SAFE_INTEGER;
  return aOrder - bOrder;
});

for (const study of sortedCaseStudies) {
  validatePublishedCaseStudy(study);
}

export function getPublishedCaseStudies(): CaseStudy[] {
  return sortedCaseStudies.filter((study) => study.published);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return sortedCaseStudies.find((study) => study.slug === slug && study.published);
}

/** Single-line label for metadata, share text, or `aria-label`. */
export function getCaseStudyDisplayTitle(study: CaseStudy): string {
  return `${study.companyName} — ${study.projectTitle}`;
}
