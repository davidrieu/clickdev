import { SITE_SUR_MESURE_CASE_PRIORITY_SLUGS } from '@/lib/constants/site-sur-mesure-page';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Priorité slug (ex. Urbawise), puis date. */
export function prioritizeSiteSurMesureCaseStudies(
  studies: SanityCaseStudyTeaser[],
): SanityCaseStudyTeaser[] {
  const priority = SITE_SUR_MESURE_CASE_PRIORITY_SLUGS as readonly string[];
  const rankSlug = (slug: string) => {
    const i = priority.indexOf(slug);
    return i === -1 ? 50 : i;
  };

  return [...studies]
    .sort((a, b) => {
      const ra = rankSlug(a.slug);
      const rb = rankSlug(b.slug);
      if (ra !== rb) return ra - rb;
      const ta = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const tb = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return tb - ta;
    })
    .slice(0, 5);
}
