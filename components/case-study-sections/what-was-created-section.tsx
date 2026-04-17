import Image from "next/image";

import type { CaseStudyFeature } from "@/lib/case-studies/types";
import { preventWidow } from "@/lib/text/prevent-widow";
import {
  IMAGE_QUALITY_SHARP,
  IMG_CACHE_URL,
  SIZES_CONTENT_COLUMN
} from "../constants";

type Props = { features: CaseStudyFeature[] };

export function WhatWasCreatedSection({ features }: Props): React.JSX.Element {
  return (
    <section className="card created-section stack" aria-labelledby="created-heading">
      <h2
        id="created-heading"
        className="case-study-section__heading created-section__heading"
      >
        {preventWidow("What was created")}
      </h2>
      <ul className="created-section__features">
        {features.map((feature, featureIndex) => (
          <li
            key={`${feature.name}-${featureIndex}`}
            className="created-section__block"
          >
            {feature.media && feature.media.length > 0 ? (
              <div className="created-section__bleed">
                {feature.media.map((item, mediaIndex) => {
                  const isFirstCreatedImage =
                    features
                      .slice(0, featureIndex)
                      .every((f) => !(f.media && f.media.length > 0)) &&
                    mediaIndex === 0;
                  return (
                    <figure
                      key={`${item.src}-${mediaIndex}`}
                      className="created-section__figure"
                    >
                      <Image
                        src={`${item.src}?v=${IMG_CACHE_URL}`}
                        alt={item.alt}
                        width={2400}
                        height={1350}
                        className="created-section__image"
                        sizes={SIZES_CONTENT_COLUMN}
                        quality={IMAGE_QUALITY_SHARP}
                        priority={isFirstCreatedImage}
                      />
                    </figure>
                  );
                })}
              </div>
            ) : null}
            <div className="created-section__copy">
              <strong className="created-section__feature-name">
                {preventWidow(feature.name)}
              </strong>
              <p className="created-section__feature-desc">{feature.description}</p>
              {feature.href?.trim() ? (
                <a
                  href={feature.href.trim()}
                  className="created-section__article-cta"
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
