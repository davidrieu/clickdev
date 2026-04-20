import { defineField, defineType, defineArrayMember } from 'sanity';

/**
 * Un seul document (id fixe) : ordre = ordre d’affichage sur l’accueil et
 * sert de priorité globale sur les listes (extraits par catégorie, etc.).
 */
export default defineType({
  name: 'portfolioHighlights',
  title: 'Projets phares (6 max., accueil + extraits)',
  type: 'document',
  description:
    "Choisissez jusqu’à 6 réalisations, dans l'ordre souhaité : elles s’affichent en page d’accueil et ressortent en tête des extraits (sites web, app mobile) lorsque c’est pertinent. Si ce document est vide, le site utilise l’ancien tri (case à cocher « Mise en avant » + date de publication).",
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
      validation: (Rule) => Rule.max(6),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Projets phares',
      subtitle: "Jusqu'à 6 réalisations (accueil & extraits)",
    }),
  },
});
