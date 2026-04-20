/** IDs uniques des sections (ancres, URL #fiche-*) */
export const CASE_FICHE = {
  projet: 'fiche-projet',
  galerie: 'fiche-galerie',
  realise: 'fiche-realise',
  resultats: 'fiche-resultats',
} as const;

export type CaseSectionKey = keyof typeof CASE_FICHE;
