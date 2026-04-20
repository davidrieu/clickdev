/** Contenus page premium `/applications-mobiles/pwa`. */

export const PWA_APP_PATH = '/applications-mobiles/pwa';

export const PWA_APP_KEYWORDS = [
  'développement PWA',
  'Progressive Web App',
  'service worker freelance',
  'app web installable',
  'PWA hors-ligne',
] as const;

export const pwaAppMetaDescription =
  'Progressive Web Apps : service worker, manifest, mode hors-ligne, push et performances. Idéal B2B et outils terrain — freelance Clickdev, devis gratuit.';

export const pwaAppMetaTitle = 'Développement PWA — App web installable | Clickdev';

export const PWA_APP_HERO = {
  chapter: 'Chapitre 02.4 · PWA',
  subline: 'Développeur freelance — Web app installable',
  h1: 'Développement de Progressive Web App (PWA)',
  lead:
    'Service worker fiable, manifest clair, stratégies de cache adaptées au risque : une PWA utile commence par les parcours critiques (auth, consultation, formulaires terrain). Mises à jour versionnées pour éviter les clients bloqués sur une coquille vide — sans promesse magique “comme une app native”.',
  primaryCta: { href: '/devis?projectType=app', label: 'Demander un devis' },
  secondaryCta: { href: `${PWA_APP_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const PWA_APP_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Le web, avec les bons réflexes “app”',
  subtitle: 'Installation, offline partiel, perf : sans forcément passer par les stores.',
  items: [
    {
      title: 'Service worker maîtrisé',
      body: 'Cache nommé, invalidation, stratégie par route : moins de données périmées surprises.',
    },
    {
      title: 'Manifest & installation',
      body: 'Icônes, safe areas, display mode : une expérience propre quand l’utilisateur ajoute à l’écran d’accueil.',
    },
    {
      title: 'Perf web sérieuse',
      body: 'LCP, JS utile, images : ce qui compte aussi pour l’usage mobile en 4G.',
    },
    {
      title: 'Push & permissions raisonnables',
      body: 'Quand le métier le justifie — avec consentement clair pour ne pas griller la confiance.',
    },
  ],
} as const;

export const PWA_APP_EDITORIAL = {
  kicker: 'Lecture',
  title: 'PWA vs store : quand éviter Apple et Google',
} as const;

export const PWA_APP_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'B2B, interne, ou campagnes où le store est un frein.',
  cards: [
    {
      title: 'Outils internes & franchises',
      body: 'Distribution par URL ou MDM, mises à jour rapides sans review store à chaque typo.',
    },
    {
      title: 'Terrain & événements',
      body: 'Formulaires, files d’attente, mode dégradé : le offline partiel bien cadré.',
    },
    {
      title: 'Startups en validation',
      body: 'Itérer vite sur le web tout en gardant une UX quasi-app sur mobile.',
    },
    {
      title: 'Complément du site vitrine',
      body: 'Parcours “app-like” pour une brique métier sans refondre tout le site.',
    },
  ],
} as const;

export const PWA_APP_COMPARE = {
  kicker: 'Décision',
  title: 'PWA, app store, ou les deux ?',
  subtitle:
    'La découverte grand public penche souvent vers le store ; le B2B aime le lien direct.',
  columns: ['PWA', 'App store', 'Hybride'] as const,
  rows: [
    { label: 'Mise à jour immédiate sans review', c: [true, false, true] as const },
    { label: 'Découverte organique store', c: [false, true, true] as const },
    { label: 'APIs OS profondes (Bluetooth, etc.)', c: [false, true, true] as const },
    { label: 'Coût initial souvent plus contenu', c: [true, false, false] as const },
    { label: 'Offline & push avancés', c: [true, true, true] as const },
    { label: 'Un seul codebase web + mobile léger', c: [true, false, true] as const },
  ],
} as const;

export const PWA_APP_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour une PWA fiable',
  steps: [
    {
      n: '01',
      title: 'Parcours & risque data',
      body: 'Qu’est-ce qui peut être stale ? Qu’est-ce qui doit être frais ? On tranche avant le worker.',
    },
    {
      n: '02',
      title: 'Manifest & shell',
      body: 'Écran de chargement, branding, navigation : le minimum “app-like”.',
    },
    {
      n: '03',
      title: 'Service worker',
      body: 'Stratégies par route, versioning, plan de rollback si un déploiement casse le cache.',
    },
    {
      n: '04',
      title: 'Perf & compat',
      body: 'iOS Safari vs Chrome Android : on teste les différences réelles (install, storage).',
    },
    {
      n: '05',
      title: 'Mesure & itération',
      body: 'Analytics, erreurs SW, feedback terrain — puis évolutions.',
    },
  ],
} as const;

export const PWA_APP_STACK = {
  kicker: 'Stack',
  title: 'Web moderne, worker propre',
  body:
    'Next.js ou équivalent, Workbox si pertinent, web app manifest, HTTPS partout — hébergement avec headers de cache cohérents.',
  labels: ['Next.js', 'TypeScript', 'Workbox', 'Web Push', 'Vercel', 'HTTPS', 'Lighthouse'],
} as const;

export const PWA_APP_CASES = {
  kicker: 'Portfolio',
  title: 'Des produits web et apps livrés en conditions réelles',
  intro: 'Réalisations récentes — web, mobile et outils ; détail sur chaque étude de cas.',
} as const;

export const PWA_APP_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — PWA',
  subtitle: 'Offline, push, iOS, budget.',
} as const;

export const PWA_APP_FAQ_ITEMS = [
  {
    question: 'PWA vs app store ?',
    answer:
      'La PWA évite le store pour des usages internes ou B2B ; le store reste pertinent pour la découverte grand public ou les APIs natives strictes.',
  },
  {
    question: 'iOS supporte bien les PWA ?',
    answer:
      'Oui avec nuances (storage, push selon versions). On valide sur Safari iOS les parcours critiques avant de promettre.',
  },
  {
    question: 'Combien coûte une PWA ?',
    answer:
      'Souvent à partir de 2 400 € pour un périmètre cadré (shell, cache, quelques écrans offline). Au-delà, le budget suit la complexité métier et les intégrations. Devis gratuit.',
  },
  {
    question: 'Peut-on ajouter au site existant ?',
    answer:
      'Souvent oui : sous-domaine ou section dédiée, avec attention au SEO et aux analytics pour ne pas dupliquer inutilement.',
  },
  {
    question: 'Sécurité des données en cache ?',
    answer:
      'On ne met pas de secrets dans le cache public ; stratégies différenciées pour contenu statique vs données personnelles.',
  },
  {
    question: 'Délai de mise en ligne ?',
    answer:
      'Parfois rapide si le produit est déjà un web app ; plus long si l’offline est central et mal spécifié au départ.',
  },
  {
    question: 'Et si on veut le store plus tard ?',
    answer:
      'Capacitor / TWA ou refonte ciblée : on anticipe en séparant la logique métier de la couche “shell”.',
  },
] as const;

export const PWA_APP_BUDGET = {
  title: 'Budget',
  line: 'Les Progressive Web Apps démarrent à partir de 2 400 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const PWA_APP_FINAL_CTA = {
  title: 'Un parcours web à installer sur l’écran d’accueil ?',
  primaryHref: '/devis?projectType=app',
  primaryLabel: 'Demander un devis PWA',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
