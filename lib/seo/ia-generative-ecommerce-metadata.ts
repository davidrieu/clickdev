import {
  IA_GENERATIVE_ECOMMERCE_KEYWORDS,
  IA_GENERATIVE_ECOMMERCE_PATH,
  iaGenerativeEcommerceMetaDescription,
  iaGenerativeEcommerceMetaTitle,
} from '@/lib/constants/ia-generative-ecommerce-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function iaGenerativeEcommercePageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: iaGenerativeEcommerceMetaTitle,
      description: iaGenerativeEcommerceMetaDescription,
      path: IA_GENERATIVE_ECOMMERCE_PATH,
    }),
    keywords: [...IA_GENERATIVE_ECOMMERCE_KEYWORDS],
  };
}
