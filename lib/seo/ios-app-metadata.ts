import {
  IOS_APP_KEYWORDS,
  IOS_APP_PATH,
  iosAppMetaDescription,
  iosAppMetaTitle,
} from '@/lib/constants/ios-app-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function iosAppPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: iosAppMetaTitle,
      description: iosAppMetaDescription,
      path: IOS_APP_PATH,
    }),
    keywords: [...IOS_APP_KEYWORDS],
  };
}
