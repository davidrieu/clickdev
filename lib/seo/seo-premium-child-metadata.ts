import type { Metadata } from 'next';

import type { SeoPremiumSlug } from '@/lib/constants/seo-premium-children';
import { SEO_PREMIUM_CHILDREN } from '@/lib/constants/seo-premium-children';
import { listingPageMetadata } from '@/lib/seo/page-metadata';

export function seoPremiumChildMetadata(slug: SeoPremiumSlug): Metadata {
  const c = SEO_PREMIUM_CHILDREN[slug];
  return {
    ...listingPageMetadata({ title: c.metaTitle, description: c.metaDescription, path: c.path }),
    keywords: [...c.keywords],
  };
}
