import {
  AGENTS_IA_KEYWORDS,
  AGENTS_IA_PATH,
  agentsIaMetaDescription,
  agentsIaMetaTitle,
} from '@/lib/constants/agents-ia-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function agentsIaPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: agentsIaMetaTitle,
      description: agentsIaMetaDescription,
      path: AGENTS_IA_PATH,
    }),
    keywords: [...AGENTS_IA_KEYWORDS],
  };
}
