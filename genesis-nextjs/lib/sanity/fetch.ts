import type { SanityPostTeaser } from '@/types/sanity-post';

import { sanityClient } from './client';
import { latestPostsQuery } from './queries';

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
