import type { ExpertiseSlug } from '@/lib/constants/sitemap';

import { EXPERTISE_PREMIUM_APPS } from '@/lib/constants/expertise-premium/data-apps';
import { EXPERTISE_PREMIUM_IA } from '@/lib/constants/expertise-premium/data-ia';
import { EXPERTISE_PREMIUM_WEB } from '@/lib/constants/expertise-premium/data-web';
import type { ExpertisePremiumDoc } from '@/lib/constants/expertise-premium/types';

export const EXPERTISE_PREMIUM_BY_SLUG: Record<ExpertiseSlug, ExpertisePremiumDoc> = {
  ...EXPERTISE_PREMIUM_WEB,
  ...EXPERTISE_PREMIUM_APPS,
  ...EXPERTISE_PREMIUM_IA,
};

export function getExpertisePremiumPage(slug: ExpertiseSlug): ExpertisePremiumDoc {
  return EXPERTISE_PREMIUM_BY_SLUG[slug];
}
