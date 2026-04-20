import {
  MARKETPLACE_KEYWORDS,
  MARKETPLACE_PATH,
  marketplaceMetaDescription,
  marketplaceMetaTitle,
} from '@/lib/constants/marketplace-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function marketplacePageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: marketplaceMetaTitle,
      description: marketplaceMetaDescription,
      path: MARKETPLACE_PATH,
    }),
    keywords: [...MARKETPLACE_KEYWORDS],
  };
}
