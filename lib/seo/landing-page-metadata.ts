import {
  LANDING_PAGE_KEYWORDS,
  LANDING_PAGE_PATH,
  landingPageMetaDescription,
  landingPageMetaTitle,
} from '@/lib/constants/landing-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function landingPageSiloMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: landingPageMetaTitle,
      description: landingPageMetaDescription,
      path: LANDING_PAGE_PATH,
    }),
    keywords: [...LANDING_PAGE_KEYWORDS],
  };
}
