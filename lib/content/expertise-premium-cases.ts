import { prioritizeApplicationsPillarCaseStudies } from '@/lib/content/applications-pillar-cases';
import { prioritizeIaPillarCaseStudies } from '@/lib/content/ia-case-studies';
import { prioritizeMobileCaseStudies } from '@/lib/content/mobile-app-cases';
import { prioritizeSiteEcommerceCaseStudies } from '@/lib/content/site-ecommerce-cases';
import { prioritizeSiteSurMesureCaseStudies } from '@/lib/content/site-sur-mesure-cases';
import { prioritizeVitrineCaseStudies } from '@/lib/content/site-vitrine-cases';
import { prioritizeWordpressCaseStudies } from '@/lib/content/site-wordpress-cases';
import type { ExpertiseSlug } from '@/lib/constants/sitemap';
import { getAllCaseStudyTeasers, getRecentMobileCaseStudies, getRecentWebCaseStudies } from '@/lib/sanity/fetch';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

function mergeDedupeBySlug(a: SanityCaseStudyTeaser[], b: SanityCaseStudyTeaser[]): SanityCaseStudyTeaser[] {
  const seen = new Set<string>();
  const out: SanityCaseStudyTeaser[] = [];
  for (const s of [...a, ...b]) {
    if (s.slug && !seen.has(s.slug)) {
      seen.add(s.slug);
      out.push(s);
    }
  }
  return out;
}

/** Cas clients affichés sur les fiches expertise premium (cohérent avec chaque techno). */
export async function loadCaseStudiesForExpertise(slug: ExpertiseSlug): Promise<SanityCaseStudyTeaser[]> {
  if (slug === 'react-native') {
    const raw = await getRecentMobileCaseStudies();
    return prioritizeMobileCaseStudies(raw);
  }

  if (slug === 'laravel' || slug === 'nodejs' || slug === 'python') {
    const [web, mobile] = await Promise.all([getRecentWebCaseStudies(), getRecentMobileCaseStudies()]);
    return prioritizeApplicationsPillarCaseStudies(mergeDedupeBySlug(web, mobile));
  }

  if (slug === 'openai' || slug === 'claude-api' || slug === 'langchain' || slug === 'n8n') {
    const all = await getAllCaseStudyTeasers();
    return prioritizeIaPillarCaseStudies(all);
  }

  const raw = await getRecentWebCaseStudies();
  switch (slug) {
    case 'wordpress':
      return prioritizeWordpressCaseStudies(raw);
    case 'shopify':
    case 'woocommerce':
      return prioritizeSiteEcommerceCaseStudies(raw);
    case 'nextjs':
      return prioritizeSiteSurMesureCaseStudies(raw);
    default:
      return prioritizeVitrineCaseStudies(raw);
  }
}
