import {
  INTRANET_EXTRANET_KEYWORDS,
  INTRANET_EXTRANET_PATH,
  intranetExtranetMetaDescription,
  intranetExtranetMetaTitle,
} from '@/lib/constants/intranet-extranet-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function intranetExtranetPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: intranetExtranetMetaTitle,
      description: intranetExtranetMetaDescription,
      path: INTRANET_EXTRANET_PATH,
    }),
    keywords: [...INTRANET_EXTRANET_KEYWORDS],
  };
}
