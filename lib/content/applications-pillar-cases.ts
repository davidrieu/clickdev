import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Pour le pilier apps : apps « mobile » d’abord, puis projets web récents pour illustrer PWA / companion. */
export function prioritizeApplicationsPillarCaseStudies(
  studies: SanityCaseStudyTeaser[]
): SanityCaseStudyTeaser[] {
  const mobile = studies.filter((s) => s.category === 'mobile');
  const web = studies.filter(
    (s) => s.category === 'website' || s.category === 'ecommerce' || s.category === 'marketplace'
  );
  const seen = new Set<string>();
  const out: SanityCaseStudyTeaser[] = [];
  for (const s of [...mobile, ...web]) {
    if (s.slug && !seen.has(s.slug)) {
      seen.add(s.slug);
      out.push(s);
    }
    if (out.length >= 5) break;
  }
  return out;
}
