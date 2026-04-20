import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Garde l’ordre Sanity (déjà filtré sur `mobile`) — 2–3 études visibles (brief). */
export function prioritizeMobileCaseStudies(studies: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  return [...studies].slice(0, 3);
}
