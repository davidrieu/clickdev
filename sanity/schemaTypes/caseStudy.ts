import { defineField, defineType } from 'sanity';

const categoryList = [
  { title: 'Site web', value: 'website' },
  { title: 'E-commerce', value: 'ecommerce' },
  { title: 'Marketplace', value: 'marketplace' },
  { title: 'App mobile', value: 'mobile' },
  { title: 'CRM', value: 'crm' },
  { title: 'Outil métier', value: 'tool' },
] as const;

export default defineType({
  name: 'caseStudy',
  title: 'Étude de cas',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du projet',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'client', title: 'Client', type: 'string' }),
    defineField({
      name: 'clientLogo',
      title: 'Logo client',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'year', title: 'Année', type: 'number' }),
    defineField({ name: 'duration', title: 'Durée (ex: 3 mois)', type: 'string' }),
    defineField({ name: 'role', title: 'Mon rôle', type: 'string' }),
    defineField({
      name: 'liveUrl',
      title: 'URL du site live',
      type: 'url',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: { list: [...categoryList], layout: 'radio' },
    }),
    defineField({
      name: 'sectors',
      title: 'Secteurs',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'tagline', title: 'Accroche (courte description sous le titre)', type: 'string' }),
    defineField({
      name: 'typeTag',
      title: "Tag d'affichage (type de projet)",
      type: 'string',
      description:
        'Texte libre (ex. « Refonte e-commerce », « App mobile »). Affiché près de l’image. La catégorie structurée reste utile pour le filtrage interne.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image hero',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroVideo',
      title: 'Vidéo hero (optionnel)',
      type: 'file',
      options: { accept: 'video/*' },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Vignette listing',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featuredMetric',
      title: 'Metric phare (ex: +34% conversion)',
      type: 'string',
    }),
    defineField({
      name: 'metrics',
      title: '4 metrics clés',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Valeur (ex: +34%)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
      validation: (Rule) => Rule.length(4).error('Ajoutez exactement 4 metrics.'),
    }),
    defineField({
      name: 'context',
      title: 'Contexte & enjeux',
      type: 'blockContent',
    }),
    defineField({
      name: 'challenges',
      title: 'Défis',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 4 },
            { name: 'image', title: 'Illustration', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: 'solution',
      title: 'La solution',
      type: 'blockContent',
    }),
    defineField({
      name: 'gallery',
      title: 'Galerie',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'caption', title: 'Légende', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'results',
      title: 'Résultats détaillés',
      type: 'blockContent',
    }),
    defineField({
      name: 'stackDetails',
      title: 'Stack détaillée',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Catégorie (ex: Frontend)', type: 'string' },
            {
              name: 'items',
              title: 'Outils',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Témoignage lié',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
    defineField({ name: 'metaTitle', title: 'Meta title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3 }),
    defineField({
      name: 'ogImage',
      title: 'Image Open Graph',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'featured', title: 'Mis en avant', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: "Ordre d'affichage", type: 'number' }),
    defineField({ name: 'publishedAt', title: 'Publication', type: 'datetime' }),
  ],
  orderings: [
    {
      title: 'Mis en avant puis récents',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: { title: 'title', client: 'client', media: 'thumbnail' },
    prepare({ title, client, media }) {
      return {
        title: typeof title === 'string' ? title : 'Sans titre',
        subtitle: typeof client === 'string' ? client : undefined,
        media,
      };
    },
  },
});
