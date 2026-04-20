import {
  SITE_SUR_MESURE_KEYWORDS,
  SITE_SUR_MESURE_PATH,
  siteSurMesureMetaDescription,
  siteSurMesureMetaTitle,
} from '@/lib/constants/site-sur-mesure-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function siteSurMesurePageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: siteSurMesureMetaTitle,
      description: siteSurMesureMetaDescription,
      path: SITE_SUR_MESURE_PATH,
    }),
    keywords: [...SITE_SUR_MESURE_KEYWORDS],
  };
}
