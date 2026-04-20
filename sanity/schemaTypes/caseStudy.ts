import { defineField, defineType } from 'sanity';

const categoryList = [
  { title: 'Site web', value: 'website' },
  { title: 'E-commerce', value: 'ecommerce' },
  { title: 'Marketplace', value: 'marketplace' },
  { title: 'App mobile', value: 'mobile' },
  { title: 'CRM', value: 'crm' },
  { title: 'Outil métier', value: 'tool' },
] as const;

/**
 * Même contenu qu’avant côté API (noms de champs inchangés) :
 * l’ordre & les onglets Studio reflètent la fiche /realisations/[slug].
 */
export default defineType({
  name: 'caseStudy',
  title: 'Réalisation (portfolio)',
  type: 'document',
  description:
    'Remplissez d’abord l’en-tête puis les 4 blocs de contenu. Les boutons « Discuter d’un projet similaire » (vers Contact) et « Accéder au site » (URL live) viennent du thème, pas d’un texte ici.',
  groups: [
    { name: 'header', title: 'En-tête (titre, image, tags)', default: true },
    { name: 'blocks', title: 'Contenu (les 4 blocs sur le site)' },
    { name: 'extra', title: 'Détails & listing' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    /* ——— En-tête = hero du site (hors boutons) ——— */
    defineField({
      name: 'title',
      title: 'Titre du projet (H1)',
      type: 'string',
      group: 'header',
      description: "Grand titre en haut de la page, à gauche.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Adresse de la page (slug)',
      type: 'slug',
      group: 'header',
      options: { source: 'title', maxLength: 96 },
      description: "Ex. mon-projet → /realisations/mon-projet",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Texte sous le titre',
      type: 'string',
      group: 'header',
      description: 'Phrases courtes, sous le H1 (biscuit / accroche).',
    }),
    defineField({
      name: 'typeTag',
      title: "Tag sur l'image (texte libre)",
      type: 'string',
      group: 'header',
      description:
        'Affiché en badge sur l’image (ex. « E-commerce B2B », « Refonte »). Si vide : libellé de la catégorie ci-dessous.',
    }),
    defineField({
      name: 'category',
      title: 'Type de projet (catégorie)',
      type: 'string',
      group: 'header',
      options: { list: [...categoryList], layout: 'radio' },
      description: 'Sert de secours si le tag libre est vide ; utile pour filtrer / classer côté site.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image principale (grande, à droite sur desktop)',
      type: 'image',
      group: 'header',
      options: { hotspot: true },
      description: 'Image du bloc hero. Si vide, la vignette (listing) est utilisée à la place.',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Vignette (grille du portfolio + secours image hero)',
      type: 'image',
      group: 'header',
      options: { hotspot: true },
      description: "Carte sur /realisations ; utilisée en hero si l'image principale est absente.",
    }),
    defineField({
      name: 'liveUrl',
      title: 'Bouton « Accéder au site » (URL du projet)',
      type: 'url',
      group: 'header',
      description: 'Ouvre un nouvel onglet. Laissez vide si pas de site public : le bouton ne s’affichera pas.',
    }),
    defineField({
      name: 'heroVideo',
      title: 'Vidéo hero (optionnel, actuellement non affiché sur le site)',
      type: 'file',
      group: 'header',
      options: { accept: 'video/*' },
    }),

    /* ——— 4 blocs tels qu’en page ——— */
    defineField({
      name: 'context',
      title: '1. Le projet',
      type: 'blockContent',
      group: 'blocks',
      description: '1er bloc sous le hero : contexte, besoin, cadrage.',
    }),
    defineField({
      name: 'gallery',
      title: '2. Galerie (captures)',
      type: 'array',
      group: 'blocks',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image / capture (pleine largeur)', type: 'image', options: { hotspot: true } },
            { name: 'caption', title: 'Légende (optionnelle)', type: 'string' },
          ],
        },
      ],
      description: 'Autant d’images que nécessaire : affichées en pleine largeur, une par une.',
    }),
    defineField({
      name: 'solution',
      title: "3. Ce que j'ai réalisé",
      type: 'blockContent',
      group: 'blocks',
      description: "Travail livré, fonctionnalités, rôle, méthode.",
    }),
    defineField({
      name: 'results',
      title: '4. Résultats',
      type: 'blockContent',
      group: 'blocks',
      description: 'KPI, impact, suite du projet, apprentissages.',
    }),

    /* ——— Témoignage & métadonnées de listing (onglet séparé) ——— */
    defineField({
      name: 'testimonial',
      title: 'Témoignage (encadré en fin de fiche, si lié)',
      type: 'reference',
      to: [{ type: 'testimonial' }],
      group: 'extra',
    }),
    defineField({ name: 'client', title: 'Client (sous le titre, listing)', type: 'string', group: 'extra' }),
    defineField({ name: 'clientLogo', title: 'Logo client (optionnel)', type: 'image', options: { hotspot: true }, group: 'extra' }),
    defineField({ name: 'year', title: 'Année (badge sur la carte du portfolio)', type: 'number', group: 'extra' }),
    defineField({ name: 'duration', title: 'Durée (ex. 3 mois)', type: 'string', group: 'extra' }),
    defineField({ name: 'role', title: 'Mon rôle (non affiché sur le nouveau modèle, conservé en base)', type: 'string', group: 'extra' }),
    defineField({
      name: 'sectors',
      title: 'Secteurs',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'extra',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies (non affichées sur le modèle allégé, utiles en base)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'extra',
    }),
    defineField({
      name: 'featuredMetric',
      title: 'Chiffre phare (ex. +34% conversion) — non affiché sur le modèle allégé',
      type: 'string',
      group: 'extra',
    }),
    defineField({
      name: 'metrics',
      title: '4 métriques (optionnel, réservé usage futur)',
      type: 'array',
      group: 'extra',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Valeur (ex: +34%)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: 'challenges',
      title: 'Ancien bloc « Défis » (conservé en base, non sur le modèle actuel)',
      type: 'array',
      group: 'extra',
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
      name: 'stackDetails',
      title: 'Stack détaillée (non sur le modèle allégé)',
      type: 'array',
      group: 'extra',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Catégorie (ex: Frontend)', type: 'string' },
            { name: 'items', title: 'Outils', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    }),
    defineField({ name: 'featured', title: "Mettre en avant (priorité d'ordre / home)", type: 'boolean', initialValue: false, group: 'extra' }),
    defineField({ name: 'order', title: "Position manuelle (si besoin, avec « Mis en avant »)", type: 'number', group: 'extra' }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      group: 'extra',
    }),

    defineField({ name: 'metaTitle', title: 'Titre SEO (balise <title>)', type: 'string', group: 'seo' }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3, group: 'seo' }),
    defineField({ name: 'ogImage', title: 'Image Open Graph / partage', type: 'image', options: { hotspot: true }, group: 'seo' }),
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
