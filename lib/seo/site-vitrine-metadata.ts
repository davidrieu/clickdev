import {
  SITE_VITRINE_KEYWORDS,
  SITE_VITRINE_PATH,
  siteVitrineMetaDescription,
  siteVitrineMetaTitle,
} from '@/lib/constants/site-vitrine-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function siteVitrinePageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: siteVitrineMetaTitle,
      description: siteVitrineMetaDescription,
      path: SITE_VITRINE_PATH,
    }),
    keywords: [...SITE_VITRINE_KEYWORDS],
  };
}
