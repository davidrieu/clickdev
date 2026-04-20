export const CASE_STUDY_CATEGORY_LABELS: Record<string, string> = {
  website: 'Site web',
  ecommerce: 'E-commerce',
  marketplace: 'Marketplace',
  mobile: 'Application mobile',
  crm: 'CRM',
  tool: 'Outil métier',
};

/** Libellé portfolio : tag libre Sanity, sinon catégorie. */
export function caseStudyTypeOrCategoryLabel(c: { typeTag?: string | null; category?: string | null }): string {
  const t = c.typeTag?.trim();
  if (t) return t;
  const k = c.category ?? '';
  if (!k) return 'Projet';
  return CASE_STUDY_CATEGORY_LABELS[k] ?? k;
}
