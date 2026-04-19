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
