export type CaseStudyMedia = {
  src: string;
  alt: string;
};

export type CaseStudyFeature = {
  name: string;
  description: string;
  media?: CaseStudyMedia[];
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
  /** Context and challenge (replaces separate problem + goals blocks on the detail page). */
  problemStatement: string;
  createdFeatures: CaseStudyFeature[];
  /** Bottom-row outcomes shown as 2-3 cards. */
  results: CaseStudyResult[];
  order?: number;
};
