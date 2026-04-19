import { CASE_STUDY_CATEGORY_LABELS } from '@/lib/constants/case-study';
import { HOME_CASE_PREVIEWS, type HomeCasePreview } from '@/lib/constants/home-content';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

function categoryLabel(category: string | null): string {
  if (!category) return 'Réalisation';
  return CASE_STUDY_CATEGORY_LABELS[category] ?? category;
}

function metricsFromTeaser(t: SanityCaseStudyTeaser): { value: string; label: string }[] {
  const fromCms =
    t.metrics
      ?.filter((m): m is { value: string; label: string } => Boolean(m?.value && m?.label))
      .map((m) => ({ value: m.value, label: m.label })) ?? [];

  if (fromCms.length > 0) {
    return fromCms.slice(0, 4);
  }

  if (t.featuredMetric) {
    return [{ value: t.featuredMetric, label: 'Indicateur' }];
  }

  return [
    { value: '→', label: 'Détails' },
    { value: 'Cas', label: 'client' },
  ];
}

function teaserToPreview(t: SanityCaseStudyTeaser): HomeCasePreview {
  const description =
    t.tagline?.trim() ||
    (t.client ? `Projet pour ${t.client}${t.year ? ` (${t.year})` : ''}.` : 'Étude de cas — détail sur la page projet.');

  return {
    title: t.title,
    category: categoryLabel(t.category),
    description,
    metrics: metricsFromTeaser(t),
    href: `/realisations/${t.slug}`,
  };
}

/** Utilise les études Sanity mises en avant ; sinon les aperçus statiques du site. */
export function resolveHomeCasePreviews(teasers: SanityCaseStudyTeaser[]): HomeCasePreview[] {
  if (teasers.length === 0) {
    return HOME_CASE_PREVIEWS;
  }
  return teasers.slice(0, 3).map(teaserToPreview);
}
