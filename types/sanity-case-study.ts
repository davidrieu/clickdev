/** Listing / filtres — aligné sur `caseStudiesListQuery`. */
export type SanityCaseStudyListItem = {
  _id: string;
  title: string | null;
  slug: string | null;
  client: string | null;
  year: number | null;
  category: string | null;
  featuredMetric: string | null;
  thumbnail: string | null;
};

export type SanityCaseStudyMetric = {
  value: string | null;
  label: string | null;
};

export type SanityCaseStudyChallenge = {
  title: string | null;
  description: string | null;
};

export type SanityCaseStudyGalleryItem = {
  url: string | null;
  caption: string | null;
};

/** Détail — aligné sur `caseStudyBySlugQuery`. */
export type SanityCaseStudyDetail = {
  _id: string;
  title: string | null;
  slug: string | null;
  client: string | null;
  year: number | null;
  category: string | null;
  tagline: string | null;
  featuredMetric: string | null;
  liveUrl: string | null;
  role: string | null;
  duration: string | null;
  technologies: string[] | null;
  sectors: string[] | null;
  metrics: SanityCaseStudyMetric[] | null;
  metaTitle: string | null;
  metaDescription: string | null;
  thumbnail: string | null;
  heroImage: string | null;
  context: unknown[] | null;
  solution: unknown[] | null;
  results: unknown[] | null;
  challenges: SanityCaseStudyChallenge[] | null;
  gallery: SanityCaseStudyGalleryItem[] | null;
};
