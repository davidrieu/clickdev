import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Garde l’ordre Sanity (déjà filtré sur `mobile`) et borne à 5 entrées. */
export function prioritizeMobileCaseStudies(studies: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  return [...studies].slice(0, 5);
}
