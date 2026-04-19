import { createClient, type SanityClient } from '@sanity/client';

import { apiVersion, dataset, isSanityConfigured, projectId } from './env';

function createSanityClient(): SanityClient | null {
  if (!isSanityConfigured()) {
    return null;
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
}

export const sanityClient = createSanityClient();

export function getSanityClient(): SanityClient {
  if (!sanityClient) {
    throw new Error(
      'Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID (and optionally NEXT_PUBLIC_SANITY_DATASET) in .env.local.'
    );
  }

  return sanityClient;
}
