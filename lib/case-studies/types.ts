export type CaseStudyMedia = {
  src: string;
  alt: string;
};

export type CaseStudyFeature = {
  name: string;
  description: string;
  media?: CaseStudyMedia[];
  /** External link (e.g. published article). Shows a prominent CTA on the case study. */
  href?: string;
  /** Override default “Read article” when `href` is set. */
  linkLabel?: string;
};

export type CaseStudyResult = {
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  /** Organization or client name (shown above the project title). */
  companyName: string;
  /** Project or initiative headline (primary title on tiles and detail hero). */
  projectTitle: string;
  summary: string;
  published: boolean;
  /** Work index: all-caps category line (e.g. CLINICAL WORKFLOW) */
  category?: string;
  /** Work index: placeholder cover background (CSS color) */
  coverTint?: string;
  /** Work index: optional image on the cover (e.g. logo); shown on tint background */
  coverImage?: CaseStudyMedia;
  /** Context and challenge (“What Was Wrong”); omit to hide that section. */
  problemStatement?: string;
  /** “What was created”; omit or empty to hide. */
  createdFeatures?: CaseStudyFeature[];
  /** “What This Enabled” cards; omit or empty to hide. */
  results?: CaseStudyResult[];
  order?: number;
};
