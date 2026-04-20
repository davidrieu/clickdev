import {
  SITE_ECOMMERCE_PATH,
  siteEcommerceMetaDescription,
  siteEcommerceMetaTitle,
  SITE_ECOMMERCE_KEYWORDS,
} from '@/lib/constants/site-ecommerce-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function siteEcommercePageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: siteEcommerceMetaTitle,
      description: siteEcommerceMetaDescription,
      path: SITE_ECOMMERCE_PATH,
    }),
    keywords: [...SITE_ECOMMERCE_KEYWORDS],
  };
}
