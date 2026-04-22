import {
  INFOGERANCE_KEYWORDS,
  INFOGERANCE_PATH,
  infogeranceMetaDescription,
  infogeranceMetaTitle,
} from '@/lib/constants/infogerance-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function infogerancePageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: infogeranceMetaTitle,
      description: infogeranceMetaDescription,
      path: INFOGERANCE_PATH,
    }),
    keywords: [...INFOGERANCE_KEYWORDS],
  };
}
