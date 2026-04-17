import { notFound } from "next/navigation";

import { CaseStudyHero } from "@/components/case-study-hero";
import {
  ProblemStatementSection,
  ResultsSection,
  WhatWasCreatedSection
} from "@/components/case-study-sections";
import { getCaseStudyBySlug } from "@/lib/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const problem = study.problemStatement?.trim();
  const features = study.createdFeatures ?? [];
  const results = study.results ?? [];

  return (
    <article className="case-study-article">
      <CaseStudyHero study={study} />
      {problem ? <ProblemStatementSection text={problem} /> : null}
      {features.length > 0 ? <WhatWasCreatedSection features={features} /> : null}
      {results.length > 0 ? <ResultsSection items={results} /> : null}
    </article>
  );
}
