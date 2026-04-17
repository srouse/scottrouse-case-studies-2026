import { CaseStudyCard } from "@/components/case-study-card";
import { WorkHomeHero } from "@/components/work-home-hero";
import { getPublishedCaseStudies } from "@/lib/case-studies";

export default function WorkPage(): React.JSX.Element {
  const studies = getPublishedCaseStudies();

  return (
    <div className="page-shell page-shell--protected-main">
      <WorkHomeHero />
      <section className="work-section" aria-labelledby="case-studies-heading">
        <header className="work-section__head">
          <h2 id="case-studies-heading" className="work-section__title">
            My Work
          </h2>
        </header>
        {studies.length ? (
          <div className="case-studies-grid">
            {studies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        ) : (
          <p className="card" style={{ margin: 0 }}>
            No published case studies yet.
          </p>
        )}
      </section>
    </div>
  );
}
