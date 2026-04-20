import { SITE_ECOMMERCE_CASE_PRIORITY_SLUGS } from '@/lib/constants/site-ecommerce-page';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Met en tête Greenweez / The French Maisons quand présents, puis le reste par date. */
export function prioritizeSiteEcommerceCaseStudies(
  studies: SanityCaseStudyTeaser[],
): SanityCaseStudyTeaser[] {
  const priority = SITE_ECOMMERCE_CASE_PRIORITY_SLUGS as readonly string[];
  const rank = (slug: string) => {
    const i = priority.indexOf(slug);
    return i === -1 ? 99 : i;
  };
  return [...studies]
    .sort((a, b) => {
      const ra = rank(a.slug);
      const rb = rank(b.slug);
      if (ra !== rb) return ra - rb;
      const ta = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const tb = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return tb - ta;
    })
    .slice(0, 5);
}
