/** Contenus page premium `/sites-internet/site-vitrine` (brief pages filles). */

export const SITE_VITRINE_PATH = '/sites-internet/site-vitrine';

export const SITE_VITRINE_KEYWORDS = [
  'création site vitrine',
  'site vitrine professionnel',
  'site vitrine sur mesure',
  'développeur site vitrine freelance',
] as const;

export const siteVitrineMetaDescription =
  'Création de site vitrine professionnel sur mesure par un développeur freelance. Design moderne, SEO optimisé, performant. Devis gratuit dès 2 500 €.';

export const siteVitrineMetaTitle = 'Création site vitrine professionnel — Freelance | Clickdev';

export const SITE_VITRINE_HERO = {
  chapter: 'Chapitre 01.1 · Site vitrine',
  subline: 'Développeur freelance — Sites professionnels',
  h1: 'Création de site vitrine professionnel',
  lead:
    'Présentez votre activité avec un site web élégant, rapide, et pensé pour transformer vos visiteurs en clients. De l’artisan au grand groupe, un site vitrine sur mesure reste votre meilleur commercial — disponible 24 h sur 24.',
  primaryCta: { href: '/devis?projectType=site', label: 'Demander un devis' },
  secondaryCta: { href: `${SITE_VITRINE_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const SITE_VITRINE_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Un site vitrine qui travaille pour vous',
  subtitle: 'Clarté, vitesse, SEO de base, autonomie : le combo qui paie en local comme en national.',
  items: [
    {
      title: 'Un site qui vous ressemble',
      body: 'Pas un template figé : vos mots, vos visuels, votre identité — avec une mise en page qui met l’essentiel au bon endroit.',
    },
    {
      title: 'Des pages qui se chargent vite',
      body: 'Parce qu’un site lent, c’est des clients qui partent avant d’avoir lu votre meilleur argument.',
    },
    {
      title: 'Un référencement prêt dès le jour 1',
      body: 'Structure propre, titres utiles, données structurées de base : les fondations pour Google — sans promesse magique.',
    },
    {
      title: 'Un outil simple à faire vivre',
      body: 'Vous modifiez textes et images sans toucher au code quand c’est possible — avec une petite doc “anti-panique”.',
    },
  ],
} as const;

export const SITE_VITRINE_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Pourquoi un site vitrine reste indispensable en 2026',
} as const;

export const SITE_VITRINE_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Du local au national, même exigence de clarté.',
  cards: [
    {
      title: 'Artisans et commerçants',
      body: 'Un site pro à votre image, à un prix accessible : services, zone, prise de contact simple.',
    },
    {
      title: 'Professions libérales',
      body: 'Médecin, avocat, coach, consultant : crédibilité, cabinet, prise de rendez-vous — sans jargon inutile.',
    },
    {
      title: 'TPE et PME',
      body: 'Moderniser votre présence en ligne avec un site performant qui représente votre entreprise comme vous le méritez.',
    },
    {
      title: 'Associations',
      body: 'Cause, adhésions, dons, bénévolat : des parcours clairs pour mobiliser sans fatiguer vos équipes.',
    },
  ],
} as const;

export const SITE_VITRINE_COMPARE = {
  kicker: 'Décision',
  title: 'Template, WordPress encadré, ou vitrine sur mesure ?',
  subtitle:
    'Le bon compromis dépend de votre rythme de publication, de votre image, et de ce que vous mesurez (leads, appels, devis).',
  columns: ['Template générique', 'WordPress cadré', 'Sur mesure'] as const,
  rows: [
    { label: 'Lancer vite une présence minimale', c: [true, true, false] as const },
    { label: 'Image & différenciation fortes', c: [false, true, true] as const },
    { label: 'Perf & Core Web Vitals sérieux', c: [false, true, true] as const },
    { label: 'SEO technique fin (schéma, maillage)', c: [false, true, true] as const },
    { label: 'Évolution sans plafond de gabarit', c: [false, false, true] as const },
    { label: 'Autonomie contenu sans effet “cassé”', c: [false, true, true] as const },
  ],
} as const;

export const SITE_VITRINE_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour une vitrine qui convertit',
  steps: [
    {
      n: '01',
      title: 'Message & structure',
      body: 'Une page d’accueil qui dit en cinq secondes ce que vous faites, pour qui, et quoi faire ensuite. On valide l’arborescence avant le design.',
    },
    {
      n: '02',
      title: 'Maquettes & contenus',
      body: 'Mobile d’abord, preuves visibles, CTA clairs : on évite le roman invisible au-dessus de la ligne de flottaison.',
    },
    {
      n: '03',
      title: 'Développement',
      body: 'Next.js, Astro ou WordPress selon votre besoin : je choisis la stack qui sert votre vitrine, pas l’inverse.',
    },
    {
      n: '04',
      title: 'SEO & mesure',
      body: 'Titres, métas, données structurées de base, événements analytics propres : vous savez ce qui se passe après la mise en ligne.',
    },
    {
      n: '05',
      title: 'Lancement & autonomie',
      body: 'Mise en ligne, petit guide éditeur, et filet de sécurité post-bascule. Puis évolutions quand vous grandissez.',
    },
  ],
} as const;

export const SITE_VITRINE_STACK = {
  kicker: 'Stack',
  title: 'Des technos adaptées à une vitrine moderne',
  body:
    'Next.js ou Astro pour la perf, WordPress quand l’équipe veut publier souvent, Tailwind pour un UI cohérent, CMS headless quand il le faut — hébergement Vercel ou équivalent selon le projet.',
  labels: ['Next.js', 'Astro', 'WordPress', 'Tailwind CSS', 'Sanity', 'Strapi', 'Vercel'],
} as const;

export const SITE_VITRINE_CASES = {
  kicker: 'Portfolio',
  title: 'Des sites vitrines et web récents',
  intro: 'Sélection des réalisations web récentes — détail sur chaque fiche projet.',
} as const;

export const SITE_VITRINE_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — site vitrine',
  subtitle: 'Tarifs, délais, autonomie, Google : les bases.',
} as const;

export const SITE_VITRINE_FAQ_ITEMS = [
  {
    question: 'Combien coûte un site vitrine professionnel ?',
    answer:
      'Souvent à partir de 2 500 € pour une vitrine bien cadrée (quelques pages clés, formulaire, SEO de base, perf). Au-delà, le prix suit le nombre de gabarits, du multilingue, ou des intégrations. Devis gratuit après un court échange.',
  },
  {
    question: 'Combien de temps pour créer un site vitrine ?',
    answer:
      'En général quelques semaines à quelques mois selon la disponibilité des contenus et la complexité. Si les textes et photos traînent, le planning aussi : d’où l’intérêt de verrouiller le périmètre tôt.',
  },
  {
    question: 'Je pourrai modifier mon site moi-même après ?',
    answer:
      'Oui dans la mesure du possible : blocs clairs, CMS confortable, ou guide simple. Si vous préférez ne rien toucher, on peut aussi prévoir des mises à jour ponctuelles.',
  },
  {
    question: 'Mon site sera-t-il optimisé pour Google ?',
    answer:
      'Oui sur les fondations : structure, titres, vitesse, données structurées de base, maillage interne raisonnable. Le référencement reste un marathon ; pour aller plus loin, voir le silo SEO.',
  },
  {
    question: 'Est-ce que ça inclut l’hébergement et le nom de domaine ?',
    answer:
      'Ça se cadrage au devis : souvent je recommande un hébergement adapté et vous gardez la propriété du domaine. Pas de surprise sur qui possède quoi.',
  },
  {
    question: 'Vous travaillez avec des petites structures ?',
    answer:
      'Oui, volontiers : TPE, artisans, associations. Le brief reste le même : clarté, respect du budget, zéro jargon gratuit.',
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer:
      'Je peux assurer une période de garantie corrective, puis une maintenance légère ou des évolutions. Tout est écrit noir sur blanc au devis.',
  },
] as const;

export const SITE_VITRINE_BUDGET = {
  title: 'Budget',
  line: 'Les sites vitrine professionnels démarrent à partir de 2 500 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const SITE_VITRINE_FINAL_CTA = {
  title: 'Prêt pour une vitrine qui vous ressemble vraiment ?',
  primaryHref: '/devis?projectType=site',
  primaryLabel: 'Demander un devis vitrine',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
