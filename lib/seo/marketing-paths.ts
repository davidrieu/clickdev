import { EXPERTISE_SLUGS, NAV_SILOS } from '@/lib/constants/sitemap';

const CORE_PATHS = [
  '/',
  '/a-propos',
  '/contact',
  '/devis',
  '/blog',
  '/realisations',
  '/expertises',
  '/mentions-legales',
  '/confidentialite',
] as const;

/** URLs marketing stables (hors contenus dynamiques Sanity blog / réalisations). */
export function getAllStaticMarketingPaths(): string[] {
  const set = new Set<string>([...CORE_PATHS]);
  for (const silo of NAV_SILOS) {
    set.add(silo.href);
    for (const child of silo.children) {
      set.add(child.href);
    }
  }
  for (const slug of EXPERTISE_SLUGS) {
    set.add(`/expertises/${slug}`);
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}
