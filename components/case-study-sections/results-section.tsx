import type { CaseStudyResult } from "@/lib/case-studies/types";
import { preventWidow } from "@/lib/text/prevent-widow";

type Props = { items: CaseStudyResult[] };

export function ResultsSection({ items }: Props): React.JSX.Element {
  return (
    <section className="results-section" aria-labelledby="results-heading">
      <h2 id="results-heading" className="case-study-section__heading">
        {preventWidow("What This Enabled")}
      </h2>
      <div className="results-section__cards">
        {items.map((item, index) => (
          <article key={`${item.title}-${index}`} className="results-section__card">
            <h3 className="results-section__title">{preventWidow(item.title)}</h3>
            <p className="results-section__description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
