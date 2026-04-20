import {
  PWA_APP_KEYWORDS,
  PWA_APP_PATH,
  pwaAppMetaDescription,
  pwaAppMetaTitle,
} from '@/lib/constants/pwa-app-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function pwaAppPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: pwaAppMetaTitle,
      description: pwaAppMetaDescription,
      path: PWA_APP_PATH,
    }),
    keywords: [...PWA_APP_KEYWORDS],
  };
}
