import {
  ANDROID_APP_KEYWORDS,
  ANDROID_APP_PATH,
  androidAppMetaDescription,
  androidAppMetaTitle,
} from '@/lib/constants/android-app-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function androidAppPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: androidAppMetaTitle,
      description: androidAppMetaDescription,
      path: ANDROID_APP_PATH,
    }),
    keywords: [...ANDROID_APP_KEYWORDS],
  };
}
