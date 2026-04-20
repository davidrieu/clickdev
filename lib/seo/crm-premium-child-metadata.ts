import type { Metadata } from 'next';

import type { CrmPremiumSlug } from '@/lib/constants/crm-premium-children';
import { CRM_PREMIUM_CHILDREN } from '@/lib/constants/crm-premium-children';
import { listingPageMetadata } from '@/lib/seo/page-metadata';

export function crmPremiumChildMetadata(slug: CrmPremiumSlug): Metadata {
  const c = CRM_PREMIUM_CHILDREN[slug];
  return {
    ...listingPageMetadata({ title: c.metaTitle, description: c.metaDescription, path: c.path }),
    keywords: [...c.keywords],
  };
}
