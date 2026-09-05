import Image from "next/image";
import Link from "next/link";

import { InlineEmphasis } from "@/components/inline-emphasis";
import {
  IMAGE_QUALITY_SHARP,
  IMG_CACHE_URL,
  SIZES_CASE_STUDY_TILE
} from "@/components/constants";
import type { CaseStudy } from "@/lib/case-studies/types";
import { preventWidow } from "@/lib/text/prevent-widow";

import styles from "./case-study-card.module.css";

type CaseStudyCardProps = {
  study: CaseStudy;
  /** Above-the-fold covers — sets fetchpriority=high and disables lazy load. */
  priority?: boolean;
};

export function CaseStudyCard({
  study,
  priority = false
}: CaseStudyCardProps): React.JSX.Element {
  const category = study.category ?? "CASE STUDY";
  const tint = study.coverTint ?? "#e7e5e4";
  const cover = study.coverImage;
  const coverFit = study.coverFit ?? "contain";
  const isMediaCover = Boolean(cover) && coverFit === "cover";

  return (
    <Link href={`/work/${study.slug}`} className={styles.root}>
      <div
        className={isMediaCover ? `${styles.cover} ${styles.coverMedia}` : styles.cover}
        aria-hidden={!cover}
      >
        {cover ? (
          <Image
            src={`${cover.src}?v=${IMG_CACHE_URL}`}
            alt={cover.alt}
            fill
            className={styles.coverImg}
            sizes={SIZES_CASE_STUDY_TILE}
            quality={IMAGE_QUALITY_SHARP}
            priority={priority}
          />
        ) : null}
      </div>
      <p className={styles.category} style={{ color: tint }}>
        {category}
      </p>
      <div className={styles.headlines}>
        <p className={styles.company}>{preventWidow(study.companyName)}</p>
        <h2 className={styles.project}>{preventWidow(study.projectTitle)}</h2>
      </div>
      <p className={styles.summary}>
        <InlineEmphasis text={study.summary} />
      </p>
    </Link>
  );
}
