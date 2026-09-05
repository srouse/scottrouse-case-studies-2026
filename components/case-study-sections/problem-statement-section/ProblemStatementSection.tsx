import { preventWidow } from "@/lib/text/prevent-widow";

import shared from "../section-shared.module.css";

type Props = { text: string };

export function ProblemStatementSection({ text }: Props): React.JSX.Element {
  const parts = text.trim().split(/\n\n+/).filter(Boolean);

  return (
    <section className="card stack" aria-labelledby="problem-statement-heading">
      <h2 id="problem-statement-heading" className={shared.heading}>
        {preventWidow("What Was Wrong")}
      </h2>
      {parts.map((paragraph, i) => (
        <p
          key={i}
          className={
            i === 0 ? shared.prose : `${shared.prose} ${shared.proseFollow}`
          }
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}
