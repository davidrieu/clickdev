/** Aperçu article Sanity — aligné sur `postsLatestQuery` (lib/sanity/queries.ts). */
export type SanityPostTeaser = {
  _id: string;
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  excerpt: string | null;
  readingTimeMinutes: number | null;
  coverImage: string | null;
  coverAlt: string | null;
  authorName: string | null;
  categories: string[] | null;
};
