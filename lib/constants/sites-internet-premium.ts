/** Contenu dédié page pilier premium /sites-internet (copy + FAQ SEO). */

export const SITES_INTERNET_MARQUEE_CLIENTS = [
  'Accor',
  'Greenweez',
  'Spreadshirt',
  'The French Maisons',
  'Urbawise',
  'Made in France',
  'SIF Group',
  'Crack It',
  'Musée Up',
  'Mayami Production',
  'Fizz',
  'Findes',
  'Libertie',
] as const;

/** Bandeau confiance sous le hero (page pilier). */
export const SITES_INTERNET_TRUST_MARQUEE_NAMES = [
  'Accor',
  'Greenweez',
  'Spreadshirt',
  'Made in France',
  'SIF Group',
  'The French Maisons',
  'Urbawise',
] as const;

export type SitesInternetAudienceCard = { title: string; body: string };

export const SITES_INTERNET_AUDIENCE_CARDS: SitesInternetAudienceCard[] = [
  {
    title: 'Grandes marques & groupes',
    body: 'Projets à fort enjeu, trafic important, exigence maximale. J’ai notamment développé pour Accor, Greenweez et Spreadshirt.',
  },
  {
    title: 'Startups & scale-ups',
    body: 'Vitesse d’exécution et expertise pointue. Du MVP au produit mature, j’accompagne votre croissance.',
  },
  {
    title: 'PME & TPE',
    body: 'Vous voulez sortir d’un WordPress vieillissant ou moderniser votre site ? Je vous accompagne, sans jargon, sans surprise.',
  },
  {
    title: 'Artisans & indépendants',
    body: 'Votre projet compte autant que les autres. Un site pro, à votre image, à un prix qui reste raisonnable.',
  },
];

export const SITES_INTERNET_STACK = [
  'Next.js',
  'React',
  'TypeScript',
  'WordPress',
  'Shopify',
  'WooCommerce',
  'Astro',
  'Sanity',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Vercel',
] as const;

export type SitesInternetFaqTabId = 'budget' | 'tech' | 'process';

export const SITES_INTERNET_FAQ_TAB_LABELS: Record<SitesInternetFaqTabId, string> = {
  budget: 'Budget & délais',
  tech: 'Technique',
  process: 'Process & accompagnement',
};

export const SITES_INTERNET_FAQ_BY_TAB: Record<
  SitesInternetFaqTabId,
  readonly { question: string; answer: string }[]
> = {
  budget: [
    {
      question: 'Combien coûte un site vitrine pro ?',
      answer:
        'Un site vitrine sérieux — rapide, lisible sur mobile, bien structuré pour Google — se compte en milliers d’euros, pas en centaines. Le prix exact dépend du nombre de pages, des contenus et des petites fonctionnalités (formulaire, réservation, etc.). On en parle 30 minutes : je vous donne une fourchette honnête.',
    },
    {
      question: 'Combien coûte un e-commerce sur mesure ?',
      answer:
        'Un e-commerce, c’est le tunnel d’achat, les paiements, la gestion des produits, souvent des pics de trafic. Selon que l’on part sur une base éprouvée (Shopify, WooCommerce) ou sur du sur mesure, la facture et le calendrier changent. Je découpe en jalons clairs pour que vous payiez au fil de l’eau.',
    },
    {
      question: 'Combien coûte une marketplace ?',
      answer:
        'Une marketplace, c’est plusieurs types d’utilisateurs, des paiements à séparer, de la modération, parfois des litiges. C’est un projet plus lourd qu’une boutique classique. Après un atelier sur qui fait quoi (acheteur, vendeur, admin), je vous propose un ordre de grandeur réaliste.',
    },
    {
      question: 'Quel est le délai moyen ?',
      answer:
        'Pour un site vitrine bien cadré : souvent plusieurs semaines à quelques mois, selon vos contenus et le temps de validation. Pour un e-commerce ou une plateforme : plutôt plusieurs mois, avec des versions intermédiaires que vous pouvez tester. Je préfère annoncer large et tenir mes dates.',
    },
    {
      question: 'Je peux payer en plusieurs fois ?',
      answer:
        'Oui, quand le montant le justifie : on aligne les factures sur les grandes étapes (cadrage, design validé, mise en ligne…). Tout est écrit noir sur blanc dans le devis.',
    },
  ],
  tech: [
    {
      question: 'Vous utilisez WordPress ou du sur mesure ?',
      answer:
        'Les deux, selon votre besoin. WordPress quand vous devez beaucoup publier vous-même. Du sur mesure (souvent avec Next.js) quand la vitesse, le sur-mesure métier ou un fort trafic est au centre. Je vous explique pourquoi je recommande l’un ou l’autre, sans dogme.',
    },
    {
      question: 'Le site sera optimisé pour Google et les IA ?',
      answer:
        'Oui côté technique : structure claire, temps de chargement, bases du référencement, données propres pour Google. Pour les assistants (ChatGPT, etc.), ça s’appuie sur des pages factuelles et utiles — pas de promesse magique, mais une base saine.',
    },
    {
      question: 'Mon site sera bien sur mobile ?',
      answer:
        'Oui. Aujourd’hui la majorité des visites passent par le téléphone : on conçoit d’abord pour le petit écran, puis on adapte au bureau. Le texte reste lisible, les boutons cliquables, le site ne “saute” pas quand on charge la page.',
    },
    {
      question: 'Je pourrai gérer mon site moi-même après ?',
      answer:
        'Souvent oui pour les textes et images, via un outil simple (WordPress, Sanity…). Je vous montre comment faire sans tout casser. Pour le technique, je reste disponible ou on met en place une petite maintenance.',
    },
  ],
  process: [
    {
      question: 'Vous travaillez aussi avec les petites structures ?',
      answer:
        'Oui. Artisan, TPE, association : ce qui compte, c’est un projet réaliste et quelqu’un pour décider vite. Je prends le temps d’expliquer, et on avance à votre rythme.',
    },
    {
      question: 'Comment se déroule un projet type ?',
      answer:
        'On commence par un cadrage court. Ensuite maquettes, développement par étapes visibles sur une préproduction, tests, puis mise en ligne. Vous savez toujours où on en est — le détail est dans la section « process » un peu plus bas sur cette page.',
    },
    {
      question: 'Vous faites la maintenance après livraison ?',
      answer:
        'Oui : mises à jour, petits correctifs, sécurité. Soit au forfait raisonnable, soit au ticket. L’idée, c’est que vous ne vous retrouviez pas seul le jour où il faut intervenir vite.',
    },
    {
      question: 'Vous pouvez reprendre un site existant ?',
      answer:
        'Oui : parfois on améliore ce qui existe (vitesse, SEO, sécurité), parfois on refait proprement en gardant le référencement. Je commence par un audit clair pour éviter les mauvaises surprises.',
    },
  ],
};

export function sitesInternetFaqJsonLdItems(): { question: string; answer: string }[] {
  return [
    ...SITES_INTERNET_FAQ_BY_TAB.budget,
    ...SITES_INTERNET_FAQ_BY_TAB.tech,
    ...SITES_INTERNET_FAQ_BY_TAB.process,
  ];
}

export const SITES_INTERNET_TESTIMONIALS = [
  {
    quote:
      'On est passés d’un tunnel lourd à une expérience fluide : le chiffre d’affaires a suivi, mais surtout les équipes respirent enfin côté support.',
    author: 'Direction e-commerce',
    company: 'Retail — grande surface web',
  },
  {
    quote:
      'Ce qui m’a marqué : zéro jargon inutile, des arbitrages clairs, et une prod qui tient quand les campagnes médias envoient du monde.',
    author: 'CMO',
    company: 'Marque consumer',
  },
  {
    quote:
      'Le site n’est plus la “honte” du comité : il devient un argument commercial. La perf mobile était le vrai sujet — il est réglé.',
    author: 'Directeur général',
    company: 'PME industrielle',
  },
] as const;

export const SITES_INTERNET_COMPARE_ROWS = [
  { label: 'Performance (CWV)' },
  { label: 'SEO technique' },
  { label: 'Sécurité & mises à jour' },
  { label: 'Évolutivité forte' },
  { label: 'Coût long terme' },
  { label: 'Personnalisation poussée' },
  { label: 'Maintenance autonome' },
] as const;

/** true = avantage marqué pour la colonne. */
export const SITES_INTERNET_COMPARE_MATRIX: { wp: boolean; custom: boolean }[] = [
  { wp: false, custom: true },
  { wp: true, custom: true },
  { wp: true, custom: true },
  { wp: false, custom: true },
  { wp: true, custom: false },
  { wp: false, custom: true },
  { wp: true, custom: false },
];
