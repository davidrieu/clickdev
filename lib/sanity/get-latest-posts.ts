import type { SanityPostTeaser } from "@/types/sanity-post";
import { sanityClient } from "@/lib/sanity/client";
import { postsLatestQuery } from "@/lib/sanity/queries";

export async function getLatestPostsForHome(): Promise<SanityPostTeaser[]> {
  try {
    const data = await sanityClient.fetch<SanityPostTeaser[]>(postsLatestQuery);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}
