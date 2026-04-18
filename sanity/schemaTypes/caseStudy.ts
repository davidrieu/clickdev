import { defineField, defineType } from "sanity";

const categoryList = [
  { title: "Site web", value: "website" },
  { title: "E-commerce", value: "ecommerce" },
  { title: "Marketplace", value: "marketplace" },
  { title: "App mobile", value: "mobile" },
  { title: "CRM", value: "crm" },
  { title: "Outil métier", value: "tool" },
] as const;

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Étude de cas",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nom du projet", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({ name: "client", title: "Nom du client", type: "string" }),
    defineField({ name: "clientLogo", title: "Logo client", type: "image" }),
    defineField({ name: "year", title: "Année", type: "number" }),
    defineField({
      name: "duration",
      title: "Durée",
      type: "string",
      description: "Ex. 3 mois",
    }),
    defineField({ name: "role", title: "Mon rôle", type: "string" }),
    defineField({ name: "liveUrl", title: "URL du site live", type: "url" }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: { list: [...categoryList], layout: "radio" },
    }),
    defineField({
      name: "sectors",
      title: "Secteurs",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "tagline",
      title: "Tagline (1 phrase forte)",
      type: "string",
    }),
    defineField({ name: "heroImage", title: "Image hero", type: "image" }),
    defineField({
      name: "heroVideo",
      title: "Vidéo hero (optionnel)",
      type: "file",
      options: { accept: "video/*" },
    }),
    defineField({
      name: "thumbnail",
      title: "Vignette listing",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featuredMetric",
      title: "Metric phare",
      type: "string",
      description: "Ex. +34% conversion",
    }),
    defineField({
      name: "metrics",
      title: "4 métriques",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Valeur", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
      validation: (Rule) => Rule.required().length(4),
    }),
    defineField({
      name: "context",
      title: "Contexte & enjeux",
      type: "blockContent",
    }),
    defineField({
      name: "challenges",
      title: "Défis",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Titre", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "image", title: "Image", type: "image" },
          ],
        },
      ],
    }),
    defineField({ name: "solution", title: "La solution", type: "blockContent" }),
    defineField({
      name: "gallery",
      title: "Galerie",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", title: "Image", type: "image" },
            { name: "caption", title: "Légende", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "results",
      title: "Résultats détaillés",
      type: "blockContent",
    }),
    defineField({
      name: "stackDetails",
      title: "Stack détaillée",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "category", title: "Catégorie", type: "string" },
            {
              name: "items",
              title: "Outils",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "testimonial",
      title: "Témoignage lié",
      type: "reference",
      to: [{ type: "testimonial" }],
    }),
    defineField({ name: "metaTitle", title: "Meta title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta description", type: "text" }),
    defineField({ name: "ogImage", title: "Image Open Graph", type: "image" }),
    defineField({
      name: "featured",
      title: "Mis en avant (home + listing)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ordre d’affichage",
      type: "number",
    }),
    defineField({
      name: "publishedAt",
      title: "Publié le",
      type: "datetime",
    }),
  ],
  orderings: [
    {
      title: "Mis en avant puis récents",
      name: "featuredFirst",
      by: [
        { field: "featured", direction: "desc" },
        { field: "publishedAt", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", client: "client", media: "thumbnail" },
    prepare({ title, client, media }) {
      return { title, subtitle: client || undefined, media };
    },
  },
});
