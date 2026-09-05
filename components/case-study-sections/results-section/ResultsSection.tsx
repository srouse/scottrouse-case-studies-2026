import type { CaseStudyResult } from "@/lib/case-studies/types";
import { preventWidow } from "@/lib/text/prevent-widow";

import shared from "../section-shared.module.css";
import styles from "./results-section.module.css";

type Props = { items: CaseStudyResult[] };

export function ResultsSection({ items }: Props): React.JSX.Element {
  return (
    <section className={styles.root} aria-labelledby="results-heading">
      <h2 id="results-heading" className={shared.heading}>
        {preventWidow("What This Enabled")}
      </h2>
      <div className={styles.cards}>
        {items.map((item, index) => (
          <article key={`${item.title}-${index}`} className={styles.card}>
            <h3 className={styles.title}>{preventWidow(item.title)}</h3>
            <p className={styles.description}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
