import {
  SITE_MISE_EN_RELATION_KEYWORDS,
  SITE_MISE_EN_RELATION_PATH,
  siteMiseEnRelationMetaDescription,
  siteMiseEnRelationMetaTitle,
} from '@/lib/constants/site-mise-en-relation-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function siteMiseEnRelationPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: siteMiseEnRelationMetaTitle,
      description: siteMiseEnRelationMetaDescription,
      path: SITE_MISE_EN_RELATION_PATH,
    }),
    keywords: [...SITE_MISE_EN_RELATION_KEYWORDS],
  };
}
