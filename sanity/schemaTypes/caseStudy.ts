import { defineField, defineType, defineArrayMember } from 'sanity';

const categoryList = [
  { title: 'Site web', value: 'website' },
  { title: 'E-commerce', value: 'ecommerce' },
  { title: 'Marketplace', value: 'marketplace' },
  { title: 'App mobile', value: 'mobile' },
  { title: 'CRM', value: 'crm' },
  { title: 'Outil métier', value: 'tool' },
] as const;

const galleryItem = defineArrayMember({
  type: 'object',
  title: 'Capture / image',
  fields: [
    {
      name: 'image',
      title: 'Image (grande, pleine page sur le site)',
      type: 'image',
      options: { hotspot: true },
      description: "Aperçu : vignette sur fond gris clair dans le Studio (c’est voulu).",
    },
    { name: 'caption', title: 'Légende (sous l’image sur le site)', type: 'string' },
  ],
  preview: {
    select: { cap: 'caption', media: 'image' },
    prepare({ cap, media }) {
      return {
        title: cap && cap.trim() ? cap : 'Image',
        subtitle: 'Capture d’écran / maquette',
        media,
      };
    },
  },
});

/**
 * Tout le formulaire est sur une seule page : gros blocs repliquables, pas d’onglets
 * cachant « Contenu ». Même noms de champs API (context, gallery, solution, results).
 */
export default defineType({
  name: 'caseStudy',
  title: 'Réalisation (portfolio)',
  type: 'document',
  description:
    "↓ Scrollez : après le titre, vous avez 4 champs d’affilée : Le projet, Galerie, Ce que j'ai réalisé, Résultats. Les champs vides n’apparaissent pas sur le site. Les boutons (Contact, Site live) sont gérés sur le thème, pas ici.",
  fieldsets: [
    {
      name: 'identity',
      title: '— Titre & adresse de la page',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'block1',
      title: '1. Le projet (texte sur le site, sous le hero)',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'block2',
      title: '2. Galerie (ajoutez une ligne par image — aperçu en vignette ci-dessous)',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'block3',
      title: "3. Ce que j'ai réalisé",
      options: { collapsible: true, collapsed: false },
    },
    { name: 'block4', title: '4. Résultats', options: { collapsible: true, collapsed: false } },
    {
      name: 'head',
      title: 'En-tête visuel (accroche, image hero, liens, badges)',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'extra',
      title: 'Détails optionnels (client, année, listing, anciens champs)',
      options: { collapsible: true, collapsed: true },
    },
    { name: 'seo', title: 'SEO', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du projet',
      type: 'string',
      fieldset: 'identity',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Adresse (slug) /realisations/...',
      type: 'slug',
      fieldset: 'identity',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'context',
      title: 'Rédigez ici (titres, listes, liens) — c’est le bloc « Le projet » sur le site',
      type: 'blockContent',
      fieldset: 'block1',
      description: 'Cliquez dans la zone, puis le + pour un paragraphe ou un titre. Contenu = ce qui s’affiche en premier sur la fiche.',
    }),

    defineField({
      name: 'gallery',
      title: 'Galerie',
      type: 'array',
      fieldset: 'block2',
      of: [galleryItem],
      options: { layout: 'grid' },
      description: 'Bouton « + Ajouter un élément » : une ligne = une image. Aperçu = vignette sur fond gris (normal dans le Studio).',
    }),

    defineField({
      name: 'solution',
      title: "Texte riche (bloc « Ce que j'ai réalisé » sur le site)",
      type: 'blockContent',
      fieldset: 'block3',
    }),
    defineField({
      name: 'results',
      title: 'Texte riche (bloc « Résultats » sur le site)',
      type: 'blockContent',
      fieldset: 'block4',
    }),

    /* En-tête visuel (après les 4 blocs en formulaire, mais replié par défaut) */
    defineField({
      name: 'tagline',
      title: 'Texte court sous le titre (dans le hero, au-dessus des boutons)',
      type: 'string',
      fieldset: 'head',
    }),
    defineField({
      name: 'typeTag',
      title: "Badge sur l’image (ex. E-commerce, Refonte)",
      type: 'string',
      fieldset: 'head',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie (remplace le badge si le texte libre est vide)',
      type: 'string',
      fieldset: 'head',
      options: { list: [...categoryList], layout: 'radio' },
    }),
    defineField({
      name: 'heroImage',
      title: 'Image à droite du hero (grande sur desktop)',
      type: 'image',
      fieldset: 'head',
      options: { hotspot: true },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Vignette pour la page liste / realisations (et secours du hero si pas d’image large)',
      type: 'image',
      fieldset: 'head',
      options: { hotspot: true },
    }),
    defineField({
      name: 'liveUrl',
      title: 'Bouton « Accéder au site » (URL — nouvel onglet sur le site)',
      type: 'url',
      fieldset: 'head',
    }),
    defineField({
      name: 'heroVideo',
      title: 'Vidéo hero (non affichée sur le site actuellement)',
      type: 'file',
      fieldset: 'head',
      options: { accept: 'video/*' },
    }),

    defineField({
      name: 'testimonial',
      title: 'Témoignage (fin de fiche, si lié)',
      type: 'reference',
      to: [{ type: 'testimonial' }],
      fieldset: 'extra',
    }),
    defineField({ name: 'client', title: 'Client (carte portfolio)', type: 'string', fieldset: 'extra' }),
    defineField({ name: 'clientLogo', title: 'Logo client', type: 'image', options: { hotspot: true }, fieldset: 'extra' }),
    defineField({ name: 'year', title: 'Année (badge sur la carte)', type: 'number', fieldset: 'extra' }),
    defineField({ name: 'duration', title: 'Durée (ex. 3 mois)', type: 'string', fieldset: 'extra' }),
    defineField({ name: 'role', title: 'Rôle (non affiché, conservé en base)', type: 'string', fieldset: 'extra' }),
    defineField({ name: 'sectors', title: 'Secteurs', type: 'array', of: [{ type: 'string' }], fieldset: 'extra' }),
    defineField({ name: 'technologies', title: 'Technologies (non sur le modèle allégé)', type: 'array', of: [{ type: 'string' }], fieldset: 'extra' }),
    defineField({ name: 'featuredMetric', title: 'Chiffre phare (non sur le modèle allégé)', type: 'string', fieldset: 'extra' }),
    defineField({
      name: 'metrics',
      title: '4 métriques (usage futur)',
      type: 'array',
      fieldset: 'extra',
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
      title: 'Ancien bloc « Défis » (en base, non sur le thème actuel)',
      type: 'array',
      fieldset: 'extra',
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
      title: 'Stack détaillée (non sur le thème allégé)',
      type: 'array',
      fieldset: 'extra',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Catégorie', type: 'string' },
            { name: 'items', title: 'Outils', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Mise en avant (secours, si le doc. « Projets phares » est vide)',
      type: 'boolean',
      initialValue: false,
      fieldset: 'extra',
      description:
        'Préférez le document **Projets phares** (menu) pour l’ordre d’affichage. Repli : les 5 dernières avec cette case cochée (tri par date) si le document n’est pas renseigné.',
    }),
    defineField({
      name: 'order',
      title: "Ordre manuel d'affichage (accueil)",
      type: 'number',
      fieldset: 'extra',
      description: 'Utilisé pour la grille d’accueil : projets cochés « Mise en avant » — chiffre plus petit = affiché en premier. Si vide, tri par date de publication en secours.',
    }),
    defineField({ name: 'publishedAt', title: 'Date de publication', type: 'datetime', fieldset: 'extra' }),

    defineField({ name: 'metaTitle', title: 'Titre SEO', type: 'string', fieldset: 'seo' }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3, fieldset: 'seo' }),
    defineField({ name: 'ogImage', title: 'Image Open Graph', type: 'image', options: { hotspot: true }, fieldset: 'seo' }),
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
