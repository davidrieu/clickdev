import { MARKETPLACE_CASE_PRIORITY_SLUGS } from '@/lib/constants/marketplace-page';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Marketplaces d’abord, slugs prioritaires, puis date. */
export function prioritizeMarketplaceCaseStudies(
  studies: SanityCaseStudyTeaser[],
): SanityCaseStudyTeaser[] {
  const priority = MARKETPLACE_CASE_PRIORITY_SLUGS as readonly string[];
  const rankSlug = (slug: string) => {
    const i = priority.indexOf(slug);
    return i === -1 ? 50 : i;
  };
  const catRank = (category: string | null) => (category === 'marketplace' ? 0 : 1);

  return [...studies]
    .sort((a, b) => {
      const ca = catRank(a.category);
      const cb = catRank(b.category);
      if (ca !== cb) return ca - cb;
      const ra = rankSlug(a.slug);
      const rb = rankSlug(b.slug);
      if (ra !== rb) return ra - rb;
      const ta = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const tb = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return tb - ta;
    })
    .slice(0, 5);
}
