import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';
import type { ExpertiseSlug } from '@/lib/constants/sitemap';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

/** Même source que les grilles marketing : 5 fiches mises en avant, tri `order` puis date. */
export async function loadCaseStudiesForExpertise(
  _slug: ExpertiseSlug
): Promise<SanityCaseStudyTeaser[]> {
  return getFeaturedCaseStudies();
}
