import { EXPERTISE_SLUGS, NAV_SILOS } from '@/lib/constants/sitemap';

import { discoverStaticMarketingPathsFromApp } from './discover-marketing-routes';

/**
 * Piliers + pages filles (routes dynamiques [silo] / [silo]/[slug]) + fiches expertises.
 * Source de vérité : `NAV_SILOS` et `EXPERTISE_SLUGS`.
 */
function getPillarChildAndExpertisePaths(): string[] {
  const set = new Set<string>();
  for (const silo of NAV_SILOS) {
    set.add(silo.href);
    for (const child of silo.children) {
      set.add(child.href);
    }
  }
  for (const slug of EXPERTISE_SLUGS) {
    set.add(`/expertises/${slug}`);
  }
  return [...set];
}

/**
 * Toutes les URLs marketing « stables » pour le sitemap :
 * - Parcours l’arbre app/(marketing) (fichiers page.tsx, routes statiques) ;
 *   nouvelle page = nouveau fichier, sans lister d’URL à la main
 * - + silos, pages filles et fiches expertises (routes dynamiques, depuis la config)
 */
export async function getAllStaticMarketingPathsForSitemap(): Promise<string[]> {
  const fromApp = await discoverStaticMarketingPathsFromApp();
  const fromConfig = getPillarChildAndExpertisePaths();
  return [...new Set([...fromApp, ...fromConfig])].sort((a, b) => a.localeCompare(b));
}
