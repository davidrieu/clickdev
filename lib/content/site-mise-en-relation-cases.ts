import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

const CATEGORY_ORDER: Record<string, number> = {
  website: 0,
  marketplace: 1,
  ecommerce: 2,
};

/** Met en avant les projets « site web » puis marketplace / e-commerce. */
export function prioritizeMiseEnRelationCaseStudies(
  studies: SanityCaseStudyTeaser[],
): SanityCaseStudyTeaser[] {
  const rank = (c: string | null) => (c ? (CATEGORY_ORDER[c] ?? 99) : 99);

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
