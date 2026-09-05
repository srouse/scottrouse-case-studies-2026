import Image from "next/image";

import { InlineEmphasis } from "@/components/inline-emphasis";
import {
  IMAGE_QUALITY_SHARP,
  IMG_CACHE_URL,
  SIZES_HERO_LOGO
} from "@/components/constants";
import type { CaseStudy } from "@/lib/case-studies/types";
import { preventWidow } from "@/lib/text/prevent-widow";

import styles from "./case-study-hero.module.css";

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
  const ctaHref = study.ctaHref?.trim();

  return (
    <header
      data-case-study-hero
      className={lightBg ? `${styles.root} ${styles.lightBg}` : styles.root}
      style={{ backgroundColor: tint }}
    >
      <div className={styles.inner}>
        {cover ? (
          <div className={styles.media}>
            <Image
              src={`${cover.src}?v=${IMG_CACHE_URL}`}
              alt={cover.alt}
              width={800}
              height={400}
              className={styles.img}
              priority
              sizes={SIZES_HERO_LOGO}
              quality={IMAGE_QUALITY_SHARP}
            />
          </div>
        ) : null}
        <p className={styles.eyebrow}>{category}</p>
        <p className={styles.company}>{preventWidow(study.companyName)}</p>
        <h1 className={styles.project}>{preventWidow(study.projectTitle)}</h1>
        <p className={styles.summary}>
          <InlineEmphasis text={study.summary} />
        </p>
        {ctaHref ? (
          <a
            href={ctaHref}
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            {study.ctaLabel?.trim() || "View"}
          </a>
        ) : null}
      </div>
    </header>
  );
}
