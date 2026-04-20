import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

function byDateDesc(a: SanityCaseStudyTeaser, b: SanityCaseStudyTeaser) {
  const ta = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
  const tb = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
  return tb - ta;
}

function takeUnique(sorted: SanityCaseStudyTeaser[], limit: number): SanityCaseStudyTeaser[] {
  const seen = new Set<string>();
  const out: SanityCaseStudyTeaser[] = [];
  for (const s of sorted) {
    if (!s.slug || seen.has(s.slug)) continue;
    seen.add(s.slug);
    out.push(s);
    if (out.length >= limit) break;
  }
  return out;
}

/** Pages SEO : sites & e-commerce d’abord, puis le reste. */
export function prioritizeSeoCaseStudies(studies: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  const rank = (c: string | null) => {
    if (c === 'website') return 0;
    if (c === 'ecommerce' || c === 'marketplace') return 1;
    return 2;
  };
  const sorted = [...studies].sort((a, b) => {
    const ra = rank(a.category);
    const rb = rank(b.category);
    if (ra !== rb) return ra - rb;
    return byDateDesc(a, b);
  });
  return takeUnique(sorted, 3);
}

export function prioritizeSeoPillarCaseStudies(studies: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  return prioritizeSeoCaseStudies(studies);
}

/** Pages CRM & outils : CRM et outils en priorité. */
export function prioritizeCrmCaseStudies(studies: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  const rank = (c: string | null) => {
    if (c === 'crm') return 0;
    if (c === 'tool') return 1;
    return 2;
  };
  const sorted = [...studies].sort((a, b) => {
    const ra = rank(a.category);
    const rb = rank(b.category);
    if (ra !== rb) return ra - rb;
    return byDateDesc(a, b);
  });
  return takeUnique(sorted, 3);
}

export function prioritizeCrmPillarCaseStudies(studies: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  return prioritizeCrmCaseStudies(studies);
}
