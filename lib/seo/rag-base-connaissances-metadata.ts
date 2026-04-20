import {
  RAG_BASE_CONNAISSANCES_KEYWORDS,
  RAG_BASE_CONNAISSANCES_PATH,
  ragBaseConnaissancesMetaDescription,
  ragBaseConnaissancesMetaTitle,
} from '@/lib/constants/rag-base-connaissances-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function ragBaseConnaissancesPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: ragBaseConnaissancesMetaTitle,
      description: ragBaseConnaissancesMetaDescription,
      path: RAG_BASE_CONNAISSANCES_PATH,
    }),
    keywords: [...RAG_BASE_CONNAISSANCES_KEYWORDS],
  };
}
