import {
  AUTOMATISATION_IA_KEYWORDS,
  AUTOMATISATION_IA_PATH,
  automatisationIaMetaDescription,
  automatisationIaMetaTitle,
} from '@/lib/constants/automatisation-ia-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function automatisationIaPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: automatisationIaMetaTitle,
      description: automatisationIaMetaDescription,
      path: AUTOMATISATION_IA_PATH,
    }),
    keywords: [...AUTOMATISATION_IA_KEYWORDS],
  };
}
