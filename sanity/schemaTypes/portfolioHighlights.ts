import { defineField, defineType, defineArrayMember } from 'sanity';

/**
 * Priorité en tête de la liste /realisations (merge + ordre d’affichage).
 * Les grilles 5 fiches (accueil, silos, expertises) viennent de « Mise en avant » + champ order sur chaque fiche, pas de ce document.
 */
export default defineType({
  name: 'portfolioHighlights',
  title: 'Projets phares (ordre liste /realisations)',
  type: 'document',
  description:
    "Mettez en tête de la page « Toutes les réalisations » des projets, dans l’ordre voulu (au plus 5). Les aperçus 5 fiches ailleurs sur le site n’utilisent pas ce document : ils s’appuient sur la case Mise en avant + le numéro d’ordre sur chaque fiche.",
  fields: [
    defineField({
      name: 'highlightedProjects',
      title: 'Projets (glisser pour mettre l’ordre d’affichage)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'caseStudy' }],
        }),
      ],
      validation: (Rule) => Rule.max(5),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Projets phares',
      subtitle: 'Jusqu’à 5 — tête de liste /realisations',
    }),
  },
});
