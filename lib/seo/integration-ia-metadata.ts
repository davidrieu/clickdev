import {
  INTEGRATION_IA_KEYWORDS,
  INTEGRATION_IA_PATH,
  integrationIaMetaDescription,
  integrationIaMetaTitle,
} from '@/lib/constants/integration-ia-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function integrationIaPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: integrationIaMetaTitle,
      description: integrationIaMetaDescription,
      path: INTEGRATION_IA_PATH,
    }),
    keywords: [...INTEGRATION_IA_KEYWORDS],
  };
}
