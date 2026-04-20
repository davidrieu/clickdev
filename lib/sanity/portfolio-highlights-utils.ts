import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

const WEB_CATEGORIES = new Set(['website', 'ecommerce', 'marketplace']);

/** Met les projets phares en tête de la liste complète (extrait silo : les premiers matchs ressortent en priorité). */
export function mergeHighlightOrder(
  all: SanityCaseStudyTeaser[],
  highlights: SanityCaseStudyTeaser[] | null | undefined,
): SanityCaseStudyTeaser[] {
  if (!highlights?.length) return all;
  const byId = new Map(all.map((t) => [t._id, t]));
  const front: SanityCaseStudyTeaser[] = [];
  for (const h of highlights) {
    const t = byId.get(h._id);
    if (t) front.push(t);
  }
  const frontIds = new Set(front.map((t) => t._id));
  const rest = all.filter((t) => !frontIds.has(t._id));
  return [...front, ...rest];
}

/**
 * Remplit `n` places : d’abord les phares du filtre (dans l’ordre global), puis le reste depuis `recents`.
 */
export function takeWithHighlightsFirst(
  highlights: SanityCaseStudyTeaser[] | null | undefined,
  recents: SanityCaseStudyTeaser[],
  n: number,
  filter: (t: SanityCaseStudyTeaser) => boolean,
): SanityCaseStudyTeaser[] {
  const out: SanityCaseStudyTeaser[] = [];
  const seen = new Set<string>();

  if (highlights?.length) {
    for (const t of highlights) {
      if (out.length >= n) break;
      if (!filter(t)) continue;
      if (seen.has(t._id)) continue;
      seen.add(t._id);
      out.push(t);
    }
  }
  for (const t of recents) {
    if (out.length >= n) break;
    if (!filter(t)) continue;
    if (seen.has(t._id)) continue;
    seen.add(t._id);
    out.push(t);
  }
  return out;
}

export function isWebCaseCategory(t: SanityCaseStudyTeaser): boolean {
  return Boolean(t.category && WEB_CATEGORIES.has(t.category));
}

export function isMobileCaseCategory(t: SanityCaseStudyTeaser): boolean {
  return t.category === 'mobile';
}
