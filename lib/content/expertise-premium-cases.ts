import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';
import type { ExpertiseSlug } from '@/lib/constants/sitemap';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Même source que l’accueil : 5 fiches (Projets phares, sinon 5 dernières « mises en avant »). */
export async function loadCaseStudiesForExpertise(
  _slug: ExpertiseSlug
): Promise<SanityCaseStudyTeaser[]> {
  return getFeaturedCaseStudies();
}
