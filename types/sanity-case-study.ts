import type { PortableTextBlock } from '@portabletext/types';

export type SanityCaseStudyMetric = { value: string | null; label: string | null };

export type SanityCaseStudyTeaser = {
  _id: string;
  title: string;
  slug: string;
  client: string | null;
  year: number | null;
  category: string | null;
  tagline: string | null;
  featuredMetric: string | null;
  metrics: SanityCaseStudyMetric[] | null;
  featured: boolean | null;
  thumbnail: string | null;
  publishedAt: string | null;
};

export type SanityCaseStudyChallenge = {
  title: string | null;
  description: string | null;
  image: string | null;
};

export type SanityCaseStudyGalleryItem = {
  image: string | null;
  caption: string | null;
};

export type SanityCaseStudyStackRow = {
  category: string | null;
  items: string[] | null;
};

export type SanityCaseStudyDocument = {
  _id: string;
  title: string;
  slug: string;
  client: string | null;
  year: number | null;
  duration: string | null;
  role: string | null;
  liveUrl: string | null;
  category: string | null;
  sectors: string[] | null;
  technologies: string[] | null;
  tagline: string | null;
  featuredMetric: string | null;
  metrics: SanityCaseStudyMetric[] | null;
  context: PortableTextBlock[] | null;
  challenges: SanityCaseStudyChallenge[] | null;
  solution: PortableTextBlock[] | null;
  gallery: SanityCaseStudyGalleryItem[] | null;
  results: PortableTextBlock[] | null;
  stackDetails: SanityCaseStudyStackRow[] | null;
  testimonial: { quote: string; name: string; role: string | null } | null;
  metaTitle: string | null;
  metaDescription: string | null;
  heroImage: string | null;
  ogImage: string | null;
  thumbnail: string | null;
  publishedAt: string | null;
};
