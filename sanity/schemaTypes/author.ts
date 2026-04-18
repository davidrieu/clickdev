import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Auteur",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "role",
      title: "Rôle / titre",
      type: "string",
      description: "Ex. Développeur freelance",
    }),
    defineField({
      name: "bio",
      title: "Bio courte",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
});
