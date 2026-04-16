import Image from "next/image";

import type { CaseStudy } from "@/lib/case-studies/types";
import { preventWidow } from "@/lib/text/prevent-widow";
import {
  IMAGE_QUALITY_SHARP,
  IMG_CACHE_URL,
  SIZES_HERO_LOGO
} from "./constants";

type CaseStudyHeroProps = {
  study: CaseStudy;
};

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  let h = hex.trim().replace(/^#/, "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (h.length !== 6) return null;
  const n = Number.parseInt(h, 16);
  if (Number.isNaN(n)) return null;
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/** Use dark body text on very light hero backgrounds for contrast. */
function isLightBackground(hex: string): boolean {
  const rgb = hexToRgb(hex);
  if (!rgb) return false;
  const y = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
  return y > 0.62;
}

export function CaseStudyHero({ study }: CaseStudyHeroProps): React.JSX.Element {
  const tint = study.coverTint ?? "#e7e5e4";
  const category = study.category ?? "CASE STUDY";
  const cover = study.coverImage;
  const lightBg = isLightBackground(tint);

  return (
    <header
      className={`case-study-hero${lightBg ? " case-study-hero--light-bg" : ""}`}
      style={{ backgroundColor: tint }}
    >
      <div className="case-study-hero__inner">
        {cover ? (
          <div className="case-study-hero__media">
            <Image
              src={`${cover.src}?v=${IMG_CACHE_URL}`}
              alt={cover.alt}
              width={800}
              height={400}
              className="case-study-hero__img"
              priority
              sizes={SIZES_HERO_LOGO}
              quality={IMAGE_QUALITY_SHARP}
            />
          </div>
        ) : null}
        <p className="case-study-hero__eyebrow">
          <span className="case-study-hero__eyebrow-label">Case study</span>
          <span className="case-study-hero__eyebrow-sep" aria-hidden>
            {" "}
            ·{" "}
          </span>
          <span className="case-study-hero__category">{category}</span>
        </p>
        <p className="case-study-hero__company">{preventWidow(study.companyName)}</p>
        <h1 className="case-study-hero__project">{preventWidow(study.projectTitle)}</h1>
        <p className="case-study-hero__summary">{study.summary}</p>
      </div>
    </header>
  );
}
