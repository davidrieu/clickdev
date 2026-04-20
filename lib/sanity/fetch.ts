import type { SanityCaseStudyDocument, SanityCaseStudyTeaser } from '@/types/sanity-case-study';
import type { SanityPostDocument, SanityPostTeaser } from '@/types/sanity-post';

import { sanityClient } from './client';
import {
  allCaseStudiesTeasersQuery,
  allPostsTeasersQuery,
  caseStudyBySlugQuery,
  caseStudySlugsQuery,
  caseStudySitemapEntriesQuery,
  featuredCaseStudiesQuery,
  latestPostsQuery,
  recentMobileCaseStudiesQuery,
  recentWebCaseStudiesQuery,
  postBySlugQuery,
  postSlugsQuery,
  postSitemapEntriesQuery,
} from './queries';

export type SanitySitemapEntry = { slug: string; lastModified: string | null };

export async function getLatestPosts(limit = 3): Promise<SanityPostTeaser[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const rows = await sanityClient.fetch<SanityPostTeaser[]>(latestPostsQuery(limit));
    return rows ?? [];
  } catch {
    return [];
  }
}

export async function getAllPostTeasers(): Promise<SanityPostTeaser[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const rows = await sanityClient.fetch<SanityPostTeaser[]>(allPostsTeasersQuery);
    return rows ?? [];
  } catch {
    return [];
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const rows = await sanityClient.fetch<string[]>(postSlugsQuery);
    return rows ?? [];
  } catch {
    return [];
  }
}

export async function getPostSitemapEntries(): Promise<SanitySitemapEntry[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const rows = await sanityClient.fetch<SanitySitemapEntry[]>(postSitemapEntriesQuery);
    return rows ?? [];
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<SanityPostDocument | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    return await sanityClient.fetch<SanityPostDocument | null>(postBySlugQuery, { slug });
  } catch {
    return null;
  }
}

export async function getFeaturedCaseStudies(): Promise<SanityCaseStudyTeaser[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const rows = await sanityClient.fetch<SanityCaseStudyTeaser[]>(featuredCaseStudiesQuery);
    return rows ?? [];
  } catch {
    return [];
  }
}

export async function getAllCaseStudyTeasers(): Promise<SanityCaseStudyTeaser[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const rows = await sanityClient.fetch<SanityCaseStudyTeaser[]>(allCaseStudiesTeasersQuery);
    return rows ?? [];
  } catch {
    return [];
  }
}

/** 5 dernières études de cas web (site / e-commerce / marketplace), les plus récentes d’abord. */
export async function getRecentWebCaseStudies(): Promise<SanityCaseStudyTeaser[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const rows = await sanityClient.fetch<SanityCaseStudyTeaser[]>(recentWebCaseStudiesQuery);
    return rows ?? [];
  } catch {
    return [];
  }
}

/** 5 dernières études de cas « app mobile », les plus récentes d’abord. */
export async function getRecentMobileCaseStudies(): Promise<SanityCaseStudyTeaser[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const rows = await sanityClient.fetch<SanityCaseStudyTeaser[]>(recentMobileCaseStudiesQuery);
    return rows ?? [];
  } catch {
    return [];
  }
}

export async function getCaseStudySlugs(): Promise<string[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const rows = await sanityClient.fetch<string[]>(caseStudySlugsQuery);
    return rows ?? [];
  } catch {
    return [];
  }
}

export async function getCaseStudySitemapEntries(): Promise<SanitySitemapEntry[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const rows = await sanityClient.fetch<SanitySitemapEntry[]>(caseStudySitemapEntriesQuery);
    return rows ?? [];
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<SanityCaseStudyDocument | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    return await sanityClient.fetch<SanityCaseStudyDocument | null>(caseStudyBySlugQuery, {
      slug,
    });
  } catch {
    return null;
  }
}
