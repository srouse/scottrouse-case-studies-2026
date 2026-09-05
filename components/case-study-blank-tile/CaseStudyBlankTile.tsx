import Image from "next/image";

import {
  IMAGE_QUALITY_SHARP,
  IMG_CACHE_URL,
  SIZES_CASE_STUDY_TILE
} from "@/components/constants";

import styles from "./case-study-blank-tile.module.css";

/** Empty sixth grid slot — cover mark + light type skeletons, no copy or link. */
export function CaseStudyBlankTile(): React.JSX.Element {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.frame}>
        <div className={styles.mark}>
          <Image
            src={`/blue.png?v=${IMG_CACHE_URL}`}
            alt=""
            fill
            className={styles.markImg}
            sizes={SIZES_CASE_STUDY_TILE}
            quality={IMAGE_QUALITY_SHARP}
          />
        </div>
      </div>
      <div className={styles.skeletonCategory} />
      <div className={styles.skeletonHeadlines}>
        <div className={styles.skeletonCompany} />
        <div className={styles.skeletonProject} />
      </div>
      <div className={styles.skeletonSummary}>
        <div className={styles.skeletonSummaryLine} />
        <div className={styles.skeletonSummaryLine} />
      </div>
    </div>
  );
}
