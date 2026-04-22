import { TMA_KEYWORDS, TMA_PATH, tmaMetaDescription, tmaMetaTitle } from '@/lib/constants/tma-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function tmaPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: tmaMetaTitle,
      description: tmaMetaDescription,
      path: TMA_PATH,
    }),
    keywords: [...TMA_KEYWORDS],
  };
}
