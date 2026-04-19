export const DEVIS_PROJECT_TYPES = [
  { value: 'site', label: 'Site vitrine / corporate' },
  { value: 'ecommerce', label: 'E-commerce / boutique en ligne' },
  { value: 'app', label: 'Application web ou mobile' },
  { value: 'outil', label: 'Outil métier / CRM / intégration' },
  { value: 'autre', label: 'Autre / je ne sais pas encore' },
] as const;

export type DevisProjectType = (typeof DEVIS_PROJECT_TYPES)[number]['value'];

export function parseDevisProjectTypeQuery(
  raw: string | string[] | undefined,
): DevisProjectType | undefined {
  const v = Array.isArray(raw) ? raw[0] : raw;
  if (!v) return undefined;
  const match = DEVIS_PROJECT_TYPES.find((p) => p.value === v);
  return match ? match.value : undefined;
}

export const DEVIS_BUDGET_OPTIONS = [
  { value: '', label: 'Non défini' },
  { value: 'under5k', label: 'Moins de 5 k€' },
  { value: '5k15k', label: '5 k€ — 15 k€' },
  { value: '15k40k', label: '15 k€ — 40 k€' },
  { value: '40kplus', label: '40 k€ et +' },
] as const;

export const DEVIS_TIMELINE_OPTIONS = [
  { value: '', label: 'Flexible' },
  { value: 'asap', label: 'Dès que possible' },
  { value: '1m', label: 'Sous 1 mois' },
  { value: '3m', label: '1 à 3 mois' },
  { value: '3mplus', label: 'Plus de 3 mois' },
] as const;
