import { CaseStudyBlankTile } from "@/components/case-study-blank-tile";
import { CaseStudyCard } from "@/components/case-study-card";
import { WorkHomeHero } from "@/components/work-home-hero";
import { getPublishedCaseStudies } from "@/lib/case-studies";

import styles from "./work-page.module.css";

export default function WorkPage(): React.JSX.Element {
  const studies = getPublishedCaseStudies();

  return (
    <div className="page-shell page-shell--protected-main">
      <WorkHomeHero />
      <section className={styles.section} aria-labelledby="case-studies-heading">
        {studies.length ? (
          <div className={styles.grid}>
            {studies.map((study, index) => (
              <CaseStudyCard
                key={study.slug}
                study={study}
                priority={index < 2}
              />
            ))}
            <CaseStudyBlankTile />
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
