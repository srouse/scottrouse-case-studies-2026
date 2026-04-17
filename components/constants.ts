export const IMG_CACHE_URL = 14;

/** Public LinkedIn profile — header + footer */
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/scottfrouse/";

/**
 * next/image `sizes` must use lengths browsers parse reliably. `rem` / `min()` in
 * `sizes` often fails → wrong default slot → small file stretched → blurry.
 * @see https://nextjs.org/docs/app/api-reference/components/image#sizes
 */

/** Main column max ≈ 72rem (1152px): full-bleed figures in cards / article */
export const SIZES_CONTENT_COLUMN = "(max-width: 767px) 100vw, 1152px";

/** Case study hero logo box: .case-study-hero__media max-width 16rem */
export const SIZES_HERO_LOGO = "(max-width: 767px) 100vw, 256px";

/** Work index tiles: ~half of content column on md+ */
export const SIZES_CASE_STUDY_TILE = "(max-width: 767px) 100vw, 560px";

/** PNG / screenshot content (default next/image quality is 75) */
export const IMAGE_QUALITY_SHARP = 92;
