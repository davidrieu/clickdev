import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
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
    defineField({ name: 'excerpt', title: 'Chapô', type: 'text', rows: 3 }),
    defineField({ name: 'publishedAt', title: 'Date de publication', type: 'datetime' }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Contenu',
      type: 'blockContent',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Titre SEO (balise title)',
      type: 'string',
      description:
        'Optionnel. Titre affiché dans Google (onglet + résultats). Si vide, le titre de l’article est utilisé.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'Optionnel. ~150–160 caractères. Si vide, le chapô est utilisé.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Image Open Graph / partage',
      type: 'image',
      options: { hotspot: true },
      description: 'Optionnel. Image pour les aperçus (réseaux, messageries). Si vide, l’image de couverture est utilisée.',
    }),
  ],
  preview: {
    select: { title: 'title', authorName: 'author.name', media: 'coverImage' },
    prepare(selection) {
      const { title, authorName, media } = selection;
      return {
        title: typeof title === 'string' ? title : 'Sans titre',
        subtitle: typeof authorName === 'string' ? `Par ${authorName}` : undefined,
        media,
      };
    },
  },
});
