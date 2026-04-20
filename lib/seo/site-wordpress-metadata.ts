import {
  SITE_WORDPRESS_KEYWORDS,
  SITE_WORDPRESS_PATH,
  siteWordpressMetaDescription,
  siteWordpressMetaTitle,
} from '@/lib/constants/site-wordpress-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function siteWordpressPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: siteWordpressMetaTitle,
      description: siteWordpressMetaDescription,
      path: SITE_WORDPRESS_PATH,
    }),
    keywords: [...SITE_WORDPRESS_KEYWORDS],
  };
}
