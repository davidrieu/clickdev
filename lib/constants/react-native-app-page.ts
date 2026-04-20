/** Contenus page premium `/applications-mobiles/react-native`. */

export const REACT_NATIVE_APP_PATH = '/applications-mobiles/react-native';

export const REACT_NATIVE_APP_KEYWORDS = [
  'développement React Native',
  'app iOS Android React Native',
  'Expo freelance',
  'modules natifs React Native',
  'développeur React Native freelance',
] as const;

export const reactNativeAppMetaDescription =
  'Développement d’applications React Native (Expo ou bare) : une base iOS+Android, modules natifs si besoin, qualité stores. Freelance — devis gratuit.';

export const reactNativeAppMetaTitle = 'Développement app React Native — iOS & Android | Clickdev';

export const REACT_NATIVE_APP_HERO = {
  chapter: 'Chapitre 02.3 · React Native',
  subline: 'Développeur freelance — Cross-platform',
  h1: 'Développement d’application React Native',
  lead:
    'Une équipe produit, deux stores : React Native pour itérer vite sur iOS et Android, avec la porte ouverte vers le natif (SDK, perfs, UI spécifique) quand le métier l’exige. TypeScript, navigation stable, CI sur les builds : on évite la dette invisible.',
  primaryCta: { href: '/devis?projectType=app', label: 'Demander un devis' },
  secondaryCta: { href: `${REACT_NATIVE_APP_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const REACT_NATIVE_APP_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Parité iOS / Android sans doubler chaque feature',
  subtitle: 'Le bon équilibre entre vitesse de delivery et échappatoire native.',
  items: [
    {
      title: 'TypeScript & architecture claire',
      body: 'Features isolées, état prévisible, moins de re-renders surprises sur les listes longues.',
    },
    {
      title: 'Navigation & deep links',
      body: 'Parcours multi-écrans, liens entrants, auth : le socle souvent négligé jusqu’au premier bug prod.',
    },
    {
      title: 'Modules natifs quand il faut',
      body: 'Pont vers Swift ou Kotlin pour un SDK, une perf, ou un composant UI impossible en JS pur.',
    },
    {
      title: 'Stores sans panique',
      body: 'Checklist permissions, builds signés, accompagnement sur refus Apple/Google et itérations.',
    },
  ],
} as const;

export const REACT_NATIVE_APP_EDITORIAL = {
  kicker: 'Lecture',
  title: 'React Native ou deux natifs : comment trancher sans dogme',
} as const;

export const REACT_NATIVE_APP_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Quand le time-to-market et la parité mobile priment.',
  cards: [
    {
      title: 'Startups produit',
      body: 'MVP sur deux plateformes, mesure usage, puis renfort natif ciblé si un KPI bloque.',
    },
    {
      title: 'Équipes web React',
      body: 'Réutilisation des patterns, onboarding devs plus rapide, composants partagés avec discernement.',
    },
    {
      title: 'Apps B2B',
      body: 'Formulaires, workflows, offline raisonnable : RN peut couvrir beaucoup de cas métier.',
    },
    {
      title: 'Roadmap store longue',
      body: 'Versions régulières, feature flags, canaux bêta : on industrialise les releases.',
    },
  ],
} as const;

export const REACT_NATIVE_APP_COMPARE = {
  kicker: 'Décision',
  title: 'React Native, Flutter, ou deux natifs ?',
  subtitle:
    'Souvent dicté par l’écosystème interne et les intégrations déjà présentes.',
  columns: ['React Native', 'Flutter', 'iOS + Android natifs'] as const,
  rows: [
    { label: 'Équipe déjà orientée React / TS', c: [true, false, false] as const },
    { label: 'UI pixel-perfect multi-plateforme', c: [true, true, true] as const },
    { label: 'Perf ultra-spécifique GPU / audio', c: [false, true, true] as const },
    { label: 'Time-to-market MVP double store', c: [true, true, false] as const },
    { label: 'Coût long terme sur produit mature', c: [true, true, false] as const },
    { label: 'Contrôle maximal par plateforme', c: [false, false, true] as const },
  ],
} as const;

export const REACT_NATIVE_APP_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour une app RN solide',
  steps: [
    {
      n: '01',
      title: 'Cadrage & risques',
      body: 'Parcours MVP, APIs, offline, modules natifs potentiels : on liste les zones grises tôt.',
    },
    {
      n: '02',
      title: 'Fondations app',
      body: 'Navigation, auth, erreurs réseau, logging : avant les écrans “visibles”.',
    },
    {
      n: '03',
      title: 'Features & perfs',
      body: 'Listes, images, mémoire : on profile sur devices milieu de gamme, pas seulement flagship.',
    },
    {
      n: '04',
      title: 'CI & builds',
      body: 'EAS ou pipelines internes, artifacts traçables, signatures pour les stores.',
    },
    {
      n: '05',
      title: 'Soumission & run',
      body: 'Review, correctifs, monitoring crash, roadmap v1.1.',
    },
  ],
} as const;

export const REACT_NATIVE_APP_STACK = {
  kicker: 'Stack',
  title: 'React Native pragmatique',
  body:
    'Expo quand ça accélère sans bloquer ; bare workflow ou modules natifs quand les contraintes l’exigent. TypeScript, React Navigation, TanStack Query ou équivalent, Metro, CI GitHub.',
  labels: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'EAS', 'Jest', 'Firebase'],
} as const;

export const REACT_NATIVE_APP_CASES = {
  kicker: 'Portfolio',
  title: 'Des apps et produits digitaux livrés en conditions réelles',
  intro: 'Études de cas « app mobile » récentes — le détail sur chaque fiche projet.',
} as const;

export const REACT_NATIVE_APP_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — React Native',
  subtitle: 'Expo, Flutter, perfs, stores.',
} as const;

export const REACT_NATIVE_APP_FAQ_ITEMS = [
  {
    question: 'React Native ou Flutter ?',
    answer:
      'Souvent dicté par l’écosystème interne (déjà React côté web ?). Les deux sont viables ; je suis le plus productif sur React Native / Expo selon contraintes.',
  },
  {
    question: 'Expo ou bare ?',
    answer:
      'Expo accélère le démarrage et les updates OTA dans certains cas ; bare ou config plugins quand un SDK natif impose le chemin custom.',
  },
  {
    question: 'Combien coûte une app React Native ?',
    answer:
      'Souvent à partir de 7 200 € pour un MVP double store bien défini. Le prix suit la complexité offline, les intégrations, et le besoin de modules natifs. Devis gratuit.',
  },
  {
    question: 'Les perfs sont-elles suffisantes ?',
    answer:
      'Pour beaucoup d’apps métier et grand public oui. Si vous visez du jeu 3D ou de la signal temps réel extrême, on valide par POC tôt.',
  },
  {
    question: 'Code partagé avec le web ?',
    answer:
      'Parfois (logique, types), avec prudence sur les couches UI. Je évite le “monorepo magique” sans frontières claires.',
  },
  {
    question: 'Tests ?',
    answer:
      'Tests unitaires sur logique métier, tests d’intégration sur parcours critiques ; snapshot avec discernement.',
  },
  {
    question: 'Maintenance après v1 ?',
    answer:
      'Mises à jour RN, dépendances, compatibilité OS : forfait ou sprint régulier selon votre charge.',
  },
] as const;

export const REACT_NATIVE_APP_BUDGET = {
  title: 'Budget',
  line: 'Les applications React Native (iOS + Android) démarrent à partir de 7 200 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const REACT_NATIVE_APP_FINAL_CTA = {
  title: 'Besoin d’une app sur deux stores sans doubler l’équipe ?',
  primaryHref: '/devis?projectType=app',
  primaryLabel: 'Demander un devis React Native',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
