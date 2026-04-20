/** Contenus page premium `/sites-internet/site-sur-mesure` (brief pages filles). */

export const SITE_SUR_MESURE_PATH = '/sites-internet/site-sur-mesure';

export const SITE_SUR_MESURE_KEYWORDS = [
  'développement site web sur mesure',
  'site web sur mesure',
  'développeur full-stack freelance',
  'application web sur mesure',
] as const;

export const siteSurMesureMetaDescription =
  'Développement de sites web sur mesure adaptés à votre activité. Règles métier spécifiques, intégrations complexes, UX unique. Freelance expérimenté dès 3 500 €.';

export const siteSurMesureMetaTitle = 'Développement site web sur mesure — Freelance | Clickdev';

export const SITE_SUR_MESURE_HERO = {
  chapter: 'Chapitre 01.5 · Sur mesure',
  subline: 'Développeur freelance — Projets atypiques',
  h1: 'Développement de site web sur mesure',
  lead:
    'Quand aucune solution existante ne colle parfaitement à votre activité, le sur mesure reste la meilleure option. Règles métier spécifiques, intégrations complexes, UX unique : je code votre projet de zéro — avec des choix techniques assumés et une dette maîtrisée.',
  primaryCta: { href: '/devis?projectType=site', label: 'Demander un devis' },
  secondaryCta: { href: `${SITE_SUR_MESURE_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const SITE_SUR_MESURE_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Un produit web qui colle à votre métier — pas l’inverse',
  subtitle: 'Le sur mesure, ce n’est pas “plus compliqué pour faire joli” : c’est quand le standard vous coûte plus cher que la spécificité.',
  items: [
    {
      title: 'Un outil 100 % adapté à votre métier',
      body: 'Pas d’adaptation forcée à un template pensé pour “tout le monde”. Vos règles, vos champs, vos parcours : le code suit votre activité.',
    },
    {
      title: 'Des intégrations propres avec vos outils',
      body: 'CRM, ERP, API partenaires, webhooks : on branche ce qui existe déjà, avec des flux documentés et des erreurs lisibles quand ça coince.',
    },
    {
      title: 'Une liberté d’évolution réelle',
      body: 'Pas de plafond imposé par un thème ou un plugin opaque. On modulaise pour ajouter une brique sans tout casser.',
    },
    {
      title: 'Un code lisible et documenté',
      body: 'Pour que vous puissiez continuer avec moi — ou qu’un autre dev reprenne sans archeologie de trois semaines.',
    },
  ],
} as const;

export const SITE_SUR_MESURE_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Quand le sur mesure devient indispensable',
} as const;

export const SITE_SUR_MESURE_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Quand le packagé devient plus risqué que le sur mesure.',
  cards: [
    {
      title: 'Entreprises à règles métier complexes',
      body: 'Des spécificités qu’aucun template ne gère proprement sans rustines : on modélise le métier avant la techno.',
    },
    {
      title: 'Startups avec un produit unique',
      body: 'Votre différenciation est dans le produit : il mérite une UX et une stack à votre hauteur, pas un clone SaaS.',
    },
    {
      title: 'Éditeurs de SaaS',
      body: 'Dashboard, onboarding, facturation, multi-tenant : je construis la base technique qui porte votre roadmap.',
    },
    {
      title: 'Organisations à contraintes fortes',
      body: 'Sécurité, conformité, souveraineté d’hébergement : des choix d’architecture explicites et traçables.',
    },
  ],
} as const;

export const SITE_SUR_MESURE_COMPARE = {
  kicker: 'Décision',
  title: 'Thème tout fait, WordPress custom, ou sur mesure ?',
  subtitle:
    'Le bon compromis dépend de votre vitesse, de votre dette acceptable, et de ce que vous deux mesurer dans six mois.',
  columns: ['Site builder / thème', 'WordPress maîtrisé', 'Sur mesure'] as const,
  rows: [
    { label: 'Lancer vite une vitrine ou un POC', c: [true, true, false] as const },
    { label: 'Autonomie éditoriale forte', c: [true, true, false] as const },
    { label: 'Règles métier & workflows spécifiques', c: [false, true, true] as const },
    { label: 'Perf & SEO poussés (produit dense)', c: [false, false, true] as const },
    { label: 'Intégrations API nombreuses & critiques', c: [false, true, true] as const },
    { label: 'Contrôle total du code & des releases', c: [false, false, true] as const },
  ],
} as const;

export const SITE_SUR_MESURE_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour un sur mesure qui tient dans le temps',
  steps: [
    {
      n: '01',
      title: 'Cadrage & risques',
      body: 'On clarifie le périmètre MVP, les intégrations critiques, et ce qui ferait échouer le projet — avant de parler framework.',
    },
    {
      n: '02',
      title: 'Architecture & stack',
      body: 'Choix de stack cohérents avec vos compétences internes et votre roadmap. Modularité, logs, environnements : on pose les rails.',
    },
    {
      n: '03',
      title: 'Design & parcours',
      body: 'Maquettes des flux sensibles, accessibilité, états d’erreur : le détail qui évite le “ça marche sur mon laptop”.',
    },
    {
      n: '04',
      title: 'Développement itératif',
      body: 'Démos régulières, critères de perf, tests sur les modules financiers ou sensibles. Pas de boîte noire de trois mois.',
    },
    {
      n: '05',
      title: 'Mise en ligne & transmission',
      body: 'Documentation courte mais utile, transfert de repo, et plan de maintenance. Vous savez ce qui a été livré et pourquoi.',
    },
  ],
} as const;

export const SITE_SUR_MESURE_STACK = {
  kicker: 'Stack',
  title: 'Des briques solides, choisies au cas par cas',
  body:
    'Next.js ou Nuxt côté web, Node ou Laravel côté API, PostgreSQL et Redis quand l’état et le cache comptent — sans empiler la mode du mois.',
  labels: ['Next.js', 'Nuxt', 'Node.js', 'Laravel', 'PostgreSQL', 'Redis', 'Supabase', 'Vercel', 'AWS'],
} as const;

export const SITE_SUR_MESURE_CASES = {
  kicker: 'Portfolio',
  title: 'Des projets web où le métier pilote la technique',
  intro:
    'Réalisations récentes — sites, plateformes et outils. Chaque fiche détaille le contexte et les choix.',
} as const;

export const SITE_SUR_MESURE_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — sur mesure',
  subtitle: 'Budget, WordPress, dépendance, techno : les questions qu’on pose en premier rendez-vous.',
} as const;

export const SITE_SUR_MESURE_FAQ_ITEMS = [
  {
    question: 'Combien coûte un site web sur mesure ?',
    answer:
      'Souvent à partir de 3 500 € pour un périmètre MVP bien défini (quelques écrans clés, déploiement, SEO de base). Au-delà, le budget suit la complexité : intégrations, comptes, rôles, temps réel, conformité… Le devis est gratuit et détaillé après cadrage.',
  },
  {
    question: 'Quelle différence avec WordPress ou Shopify ?',
    answer:
      'WordPress et Shopify excellent quand le standard suffit et que l’autonomie contenu prime. Le sur mesure gagne quand vos règles, vos calculs, ou vos performances dépassent le cadre raisonnable d’un thème — ou quand vous voulez un produit logiciel, pas seulement un site marketing.',
  },
  {
    question: 'Combien de temps pour un projet sur mesure ?',
    answer:
      'Quelques semaines à quelques mois selon le MVP. Si le périmètre flotte, le planning flotte aussi : d’où l’importance du cadrage initial et des jalons visibles.',
  },
  {
    question: 'Est-ce que je ne risque pas de dépendre de vous ?',
    answer:
      'Je documente les parties non triviales, je garde le code lisible, et je peux organiser une passation avec un autre dev. Objectif : zéro sorcellerie — si c’est critique pour vous, c’est expliqué et versionné.',
  },
  {
    question: 'Comment se passe la maintenance après livraison ?',
    answer:
      'On définit un socle : mises à jour, surveillance, petites évolutions. Les offres sont détaillées sur la page /maintenance ; on adapte la fréquence au risque et au trafic.',
  },
  {
    question: 'Vous utilisez quelles technos ?',
    answer:
      'Principalement l’écosystème moderne web (Next.js / Nuxt, Node ou Laravel, PostgreSQL, hébergement Vercel ou cloud AWS selon contraintes). Le choix dépend de vos besoins, pas de ma techno préférée du mois.',
  },
  {
    question: 'Est-ce que je peux faire évoluer mon site après ?',
    answer:
      'Oui, c’est même le but du sur mesure : des modules, des APIs, une dette maîtrisée. On planifie les évolutions comme un produit — backlog, priorités, releases.',
  },
] as const;

export const SITE_SUR_MESURE_BUDGET = {
  title: 'Budget',
  line: 'Les projets sur mesure démarrent à partir de 3 500 €',
  note: 'Chaque besoin est différent : devis gratuit, personnalisé, sans engagement.',
} as const;

export const SITE_SUR_MESURE_FINAL_CTA = {
  title: 'Un projet qui ne rentre dans aucune case ? Parlons-en.',
  primaryHref: '/devis?projectType=site',
  primaryLabel: 'Demander un devis sur mesure',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;

export const SITE_SUR_MESURE_CASE_PRIORITY_SLUGS = ['urbawise'] as const;
