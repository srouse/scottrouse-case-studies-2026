import { contentfulAiDemos } from "./contentful-ai-demos";
import { contentfulForFigma } from "./contentful-for-figma";
import { stateFarm } from "./state-farm";
import { summitCreditUnion } from "./summit-credit-union";
import { writingArticles } from "./writing-articles";

import type { CaseStudy } from "@/lib/case-studies/types";

export const caseStudies: ReadonlyArray<CaseStudy> = [
  summitCreditUnion,
  stateFarm,
  writingArticles,
  contentfulAiDemos,
  contentfulForFigma
];
