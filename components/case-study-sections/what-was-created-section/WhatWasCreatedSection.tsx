import Image from "next/image";

import {
  IMAGE_QUALITY_SHARP,
  IMG_CACHE_URL,
  SIZES_CONTENT_COLUMN
} from "@/components/constants";
import type { CaseStudyFeature } from "@/lib/case-studies/types";
import { preventWidow } from "@/lib/text/prevent-widow";

import shared from "../section-shared.module.css";
import styles from "./what-was-created-section.module.css";

type Props = { features: CaseStudyFeature[] };

export function WhatWasCreatedSection({ features }: Props): React.JSX.Element {
  return (
    <section
      className={`card stack ${styles.root}`}
      aria-labelledby="created-heading"
    >
      <h2 id="created-heading" className={`${shared.heading} ${styles.heading}`}>
        {preventWidow("What was created")}
      </h2>
      <ul className={styles.features}>
        {features.map((feature, featureIndex) => (
          <li
            key={`${feature.name}-${featureIndex}`}
            className={styles.block}
          >
            {feature.media && feature.media.length > 0 ? (
              <div className={styles.bleed}>
                {feature.media.map((item, mediaIndex) => {
                  const isFirstCreatedImage =
                    features
                      .slice(0, featureIndex)
                      .every((f) => !(f.media && f.media.length > 0)) &&
                    mediaIndex === 0;
                  return (
                    <figure
                      key={`${item.src}-${mediaIndex}`}
                      className={styles.figure}
                    >
                      <Image
                        src={`${item.src}?v=${IMG_CACHE_URL}`}
                        alt={item.alt}
                        width={2400}
                        height={1350}
                        className={styles.image}
                        sizes={SIZES_CONTENT_COLUMN}
                        quality={IMAGE_QUALITY_SHARP}
                        priority={isFirstCreatedImage}
                      />
                    </figure>
                  );
                })}
              </div>
            ) : null}
            <div className={styles.copy}>
              <strong className={styles.featureName}>
                {preventWidow(feature.name)}
              </strong>
              <p className={styles.featureDesc}>{feature.description}</p>
              {feature.href?.trim() ? (
                <a
                  href={feature.href.trim()}
                  className={styles.articleCta}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feature.linkLabel?.trim() || "Read article"}
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
