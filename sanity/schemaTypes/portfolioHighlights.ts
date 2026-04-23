import { defineField, defineType, defineArrayMember } from 'sanity';

/**
 * Un seul document (id fixe) : ordre = ordre d’affichage sur l’accueil et
 * mêmes fiches sur les grilles marketing (5 max.).
 */
export default defineType({
  name: 'portfolioHighlights',
  title: 'Projets phares (5 max., accueil + silos premium)',
  type: 'document',
  description:
    "Choisissez jusqu’à 5 réalisations, dans l'ordre souhaité : elles s’affichent en page d’accueil et en bloc portfolio sur les pages filles. Si ce document est vide, le site affiche les 5 dernières fiches cochées « Mise en avant » à la case dédiée.",
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
      subtitle: "Jusqu'à 5 réalisations (accueil & grilles silo)",
    }),
  },
});
