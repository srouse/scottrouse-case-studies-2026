import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/lib/case-studies/types";
import { preventWidow } from "@/lib/text/prevent-widow";
import { IMG_CACHE_URL, IMAGE_QUALITY_SHARP, SIZES_CASE_STUDY_TILE } from "./constants";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps): React.JSX.Element {
  const category = study.category ?? "CASE STUDY";
  const tint = study.coverTint ?? "#e7e5e4";
  const cover = study.coverImage;

  return (
    <Link href={`/work/${study.slug}`} className="case-study-tile">
      <div
        className="case-study-tile__cover"
        style={{ backgroundColor: tint }}
        aria-hidden={!cover}
      >
        {cover ? (
          <Image
            src={`${cover.src}?v=${IMG_CACHE_URL}`}
            alt={cover.alt}
            fill
            className="case-study-tile__cover-img"
            sizes={SIZES_CASE_STUDY_TILE}
            quality={IMAGE_QUALITY_SHARP}
          />
        ) : null}
      </div>
      <p className="case-study-tile__category" style={{ color: tint }}>
        {category}
      </p>
      <div className="case-study-tile__headlines">
        <p className="case-study-tile__company">{preventWidow(study.companyName)}</p>
        <h2 className="case-study-tile__project">{preventWidow(study.projectTitle)}</h2>
      </div>
      <p className="case-study-tile__summary">{study.summary}</p>
    </Link>
  );
}
