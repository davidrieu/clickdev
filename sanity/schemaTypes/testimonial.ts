import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Citation',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'role', title: 'Poste / entreprise', type: 'string' }),
    defineField({ name: 'avatar', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'featured', title: 'Mis en avant', type: 'boolean', initialValue: false }),
  ],
});
