import type { PortableTextBlock } from '@portabletext/types';

export type SanityPostTeaser = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  publishedAt: string | null;
  coverImage: string | null;
};

export type SanityPostDocument = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  publishedAt: string | null;
  coverImage: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  ogImage: string | null;
  body: PortableTextBlock[] | null;
  author: { name: string } | null;
};
