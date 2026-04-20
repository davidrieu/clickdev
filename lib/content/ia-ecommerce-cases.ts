import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Pour la page IA e-commerce : projets e-commerce & marketplace en tête. */
export function prioritizeIaEcommerceCaseStudies(studies: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  const rank = (c: string | null) => {
    if (c === 'ecommerce') return 0;
    if (c === 'marketplace') return 1;
    if (c === 'website') return 2;
    return 3;
  };
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
