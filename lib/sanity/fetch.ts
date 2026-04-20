import type { SanityCaseStudyDocument, SanityCaseStudyTeaser } from '@/types/sanity-case-study';
import type { SanityPostDocument, SanityPostTeaser } from '@/types/sanity-post';

import { sanityClient } from './client';
import {
  isMobileCaseCategory,
  isWebCaseCategory,
  mergeHighlightOrder,
  takeWithHighlightsFirst,
} from './portfolio-highlights-utils';
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
  portfolioHighlightsQuery,
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

/** Projets phares (singleton) ou `null` si le document n’existe pas / liste vide. */
export async function getPortfolioHighlightTeasers(): Promise<SanityCaseStudyTeaser[] | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    const rows = await sanityClient.fetch<(SanityCaseStudyTeaser | null)[] | null>(portfolioHighlightsQuery);
    const list = (rows ?? []).filter((r): r is SanityCaseStudyTeaser => Boolean(r?._id && r.slug));
    return list.length > 0 ? list : null;
  } catch {
    return null;
  }
}

/**
 * 6 visibles en accueil : d’abord le document **Projets phares** (ordre),
 * sinon repli : booléen `featured` + date de publication.
 */
export async function getFeaturedCaseStudies(): Promise<SanityCaseStudyTeaser[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const fromPicker = await getPortfolioHighlightTeasers();
    if (fromPicker?.length) {
      return fromPicker.slice(0, 6);
    }
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
    const [rows, highlights] = await Promise.all([
      sanityClient.fetch<SanityCaseStudyTeaser[]>(allCaseStudiesTeasersQuery),
      getPortfolioHighlightTeasers(),
    ]);
    const all = rows ?? [];
    if (highlights?.length) {
      return mergeHighlightOrder(all, highlights);
    }
    return all;
  } catch {
    return [];
  }
}

/**
 * Jusqu’à 5 études « web » : d’abord les projets phares qui matchent la catégorie (ordre global), puis le reste par date.
 */
export async function getRecentWebCaseStudies(): Promise<SanityCaseStudyTeaser[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const [recents, highlights] = await Promise.all([
      sanityClient.fetch<SanityCaseStudyTeaser[]>(recentWebCaseStudiesQuery),
      getPortfolioHighlightTeasers(),
    ]);
    return takeWithHighlightsFirst(highlights, recents ?? [], 5, isWebCaseCategory);
  } catch {
    return [];
  }
}

/**
 * Jusqu’à 5 études « app mobile » : mêmes phares d’abord, puis repli sur les plus récents.
 */
export async function getRecentMobileCaseStudies(): Promise<SanityCaseStudyTeaser[]> {
  if (!sanityClient) {
    return [];
  }

  try {
    const [recents, highlights] = await Promise.all([
      sanityClient.fetch<SanityCaseStudyTeaser[]>(recentMobileCaseStudiesQuery),
      getPortfolioHighlightTeasers(),
    ]);
    return takeWithHighlightsFirst(highlights, recents ?? [], 5, isMobileCaseCategory);
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
