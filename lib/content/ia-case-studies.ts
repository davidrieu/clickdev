import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Priorise outils & CRM (souvent proches intégrations / automatisations), puis le reste par date. */
export function prioritizeIaCaseStudies(studies: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  const rank = (c: string | null) => {
    if (c === 'tool') return 0;
    if (c === 'crm') return 1;
    return 2;
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
    .slice(0, 3);
}

/** Pilier : outils & e-commerce d’abord pour couvrir RAG, agents et shops. */
export function prioritizeIaPillarCaseStudies(studies: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  const rank = (c: string | null) => {
    if (c === 'tool') return 0;
    if (c === 'ecommerce') return 1;
    if (c === 'marketplace') return 2;
    if (c === 'crm') return 3;
    return 4;
  };
  const seen = new Set<string>();
  const sorted = [...studies].sort((a, b) => {
    const ra = rank(a.category);
    const rb = rank(b.category);
    if (ra !== rb) return ra - rb;
    const ta = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const tb = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return tb - ta;
  });
  const out: SanityCaseStudyTeaser[] = [];
  for (const s of sorted) {
    if (s.slug && !seen.has(s.slug)) {
      seen.add(s.slug);
      out.push(s);
    }
    if (out.length >= 3) break;
  }
  return out;
}
