import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Priorise les études « site web », puis le reste par date. */
export function prioritizeWordpressCaseStudies(studies: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  const rank = (c: string | null) => (c === 'website' ? 0 : 1);
  return [...studies]
    .sort((a, b) => {
      const ra = rank(a.category);
      const rb = rank(b.category);
      if (ra !== rb) return ra - rb;
      const ta = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const tb = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return tb - ta;
    })
    .slice(0, 5);
}
