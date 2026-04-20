/** Contenu page pilier premium `/applications-mobiles`. */

export const APPLICATIONS_MOBILES_PILLAR_PATH = '/applications-mobiles';

export const APPLICATIONS_MOBILES_PILLAR_HERO = {
  chapter: 'Chapitre 02 · Applications mobiles',
  subline: 'Développeur freelance — iOS, Android, React Native & PWA',
  h1: 'Applications mobiles qui tiennent la route en production',
  lead:
    'Fluidité, hors-ligne partiel, notifications et stores : je conçois des apps natives ou cross-platform et des PWA quand le web suffit. Auth sécurisée, API métiers, crash reporting et releases sans panique — du MVP à la v1 store-ready.',
  primaryCta: { href: '/devis?projectType=app', label: 'Demander un devis' },
  secondaryCta: { href: `${APPLICATIONS_MOBILES_PILLAR_PATH}#offres`, label: 'Voir les offres' },
} as const;

export const APPLICATIONS_MOBILES_PILLAR_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Du code que vous pouvez faire évoluer',
  subtitle: 'Stores, qualité, mesure : les trois piliers quand l’app est un canal critique.',
  items: [
    {
      title: 'Parcours utilisateur courts',
      body: 'Moins d’étapes inutiles, erreurs réseau explicites, états de chargement honnêtes : la base du bon NPS.',
    },
    {
      title: 'Publication App Store & Play',
      body: 'Permissions justifiées, fiches cohérentes, réponses review : on réduit les refus évitables.',
    },
    {
      title: 'Observabilité dès le départ',
      body: 'Crash reporting, logs utiles, versions traçables : quand ça casse en prod, vous voyez pourquoi.',
    },
    {
      title: 'Stratégie native / cross / web',
      body: 'Pas de dogme : iOS seul, Android terrain, React Native pour la parité, ou PWA si le store n’est pas indispensable.',
    },
  ],
} as const;

export const APPLICATIONS_MOBILES_PILLAR_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Pourquoi le mobile est un produit, pas une “miniature du site”',
} as const;

export const APPLICATIONS_MOBILES_PILLAR_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Qui est concerné',
  subtitle: 'Grand public, B2B, ou outils internes : les contraintes changent, l’exigence non.',
  cards: [
    {
      title: 'Produits grand public',
      body: 'Onboarding, rétention, perf sur milieu de gamme : le réel utilisateur, pas seulement le labo.',
    },
    {
      title: 'Apps métier & terrain',
      body: 'Offline ciblé, formulaires, scan : souvent Android-first, parfois PWA suffisante.',
    },
    {
      title: 'Équipes avec deadline store',
      body: 'MVP crédible, roadmap claire, dette maîtrisée : livrer sans promettre la lune.',
    },
    {
      title: 'Organisations déjà web',
      body: 'React Native quand vous avez du React côté serveur ; PWA pour itérer vite sur le même socle.',
    },
  ],
} as const;

export const APPLICATIONS_MOBILES_PILLAR_COMPARE = {
  kicker: 'Décision',
  title: 'Natif, React Native, ou PWA en premier ?',
  subtitle: 'Le bon ordre dépend du canal d’acquisition, des APIs, et de votre capacité à maintenir deux stores.',
  columns: ['Natif (iOS/Android)', 'React Native', 'PWA'] as const,
  rows: [
    { label: 'APIs OS & SDK partenaires poussés', c: [true, true, false] as const },
    { label: 'Parité iOS/Android rapide', c: [false, true, true] as const },
    { label: 'Mise à jour sans review store', c: [false, false, true] as const },
    { label: 'Découverte via stores', c: [true, true, false] as const },
    { label: 'Budget initial souvent plus élevé (double natif)', c: [false, true, true] as const },
    { label: 'Offline & notifications avancées', c: [true, true, false] as const },
  ],
} as const;

export const APPLICATIONS_MOBILES_PILLAR_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour une app livrable',
  steps: [
    {
      n: '01',
      title: 'Usage & risques',
      body: 'Qui fait quoi, quelles données, quels devices : on cadrage avant d’ouvrir le repo.',
    },
    {
      n: '02',
      title: 'Architecture & API',
      body: 'Auth, erreurs, versioning : le socle qui évite les refontes express en semaine 10.',
    },
    {
      n: '03',
      title: 'UI & accessibilité',
      body: 'Parcours critiques, tailles dynamiques, contrastes : ce qui évite les avis une étoile.',
    },
    {
      n: '04',
      title: 'Tests & bêta',
      body: 'TestFlight / pistes Play, retours réels, correctifs avant la ligne droite store.',
    },
    {
      n: '05',
      title: 'Release & run',
      body: 'Soumission, monitoring crash, plan de patches : vous n’êtes pas seul le jour J.',
    },
  ],
} as const;

export const APPLICATIONS_MOBILES_PILLAR_STACK = {
  kicker: 'Stack',
  title: 'Technos selon le projet, pas l’inverse',
  body:
    'Swift / SwiftUI, Kotlin / Compose, React Native / Expo, Next.js pour PWA — CI, signatures et stores inclus dans la réflexion.',
  labels: ['Swift', 'Kotlin', 'React Native', 'Expo', 'TypeScript', 'Next.js', 'Firebase', 'Fastlane'],
} as const;

export const APPLICATIONS_MOBILES_PILLAR_CASES = {
  kicker: 'Portfolio',
  title: 'Apps mobiles et produits web récents',
  intro: 'Un aperçu des réalisations — détail et contexte sur chaque étude de cas.',
} as const;

export const APPLICATIONS_MOBILES_PILLAR_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — applications mobiles',
  subtitle: 'Natif, cross-platform, stores, budget.',
} as const;

export const APPLICATIONS_MOBILES_PILLAR_FAQ_ITEMS = [
  {
    question: 'React Native ou natif pur ?',
    answer:
      'React Native accélère le time-to-market pour une UI partagée. Le natif pur reste pertinent pour des contraintes extrêmes (jeux 3D, bas niveau hardware). Le choix se fait après analyse du backlog et des intégrations.',
  },
  {
    question: 'Gérez-vous la soumission aux stores ?',
    answer:
      'Oui : préparation des fiches, captures, conformité des permissions et accompagnement sur les refus éventuels. Vous restez propriétaire des comptes développeur.',
  },
  {
    question: 'PWA ou app store ?',
    answer:
      'La PWA convient pour un périmètre web-first et des mises à jour instantanées. L’app store apporte découvrabilité et APIs plus poussées. On peut combiner les deux selon les cas d’usage.',
  },
  {
    question: 'Combien coûte une application mobile ?',
    answer:
      'Les ordres de grandeur varient fortement : une PWA ciblée peut démarrer autour de quelques milliers d’euros ; un MVP double store React Native ou natif est souvent un budget plus conséquent. Devis gratuit après cadrage.',
  },
  {
    question: 'Qui possède le code et les comptes stores ?',
    answer:
      'Vous, par défaut : dépôt sur votre organisation, comptes développeur à votre nom. Je documente les accès nécessaires sans accrocher le projet à mon compte personnel.',
  },
  {
    question: 'Gestion du hors-ligne ?',
    answer:
      'On définit ce qui doit vivre sans réseau (lecture, saisie, files d’attente de sync) et ce qui reste en ligne. Le tout sans promettre un offline “total” gratuit en complexité.',
  },
  {
    question: 'Maintenance après lancement ?',
    answer:
      'Correctifs, compatibilité OS, petites évolutions : forfait ou tickets selon votre charge. Les stores imposent de toute façon des mises à jour régulières des dépendances.',
  },
  {
    question: 'Pouvez-vous reprendre une app existante ?',
    answer:
      'Oui : audit technique, plan de dette, puis migration progressive ou refonte ciblée selon le risque business.',
  },
] as const;

export function applicationsMobilesPillarFaqJsonLdItems(): { question: string; answer: string }[] {
  return [...APPLICATIONS_MOBILES_PILLAR_FAQ_ITEMS];
}

export const APPLICATIONS_MOBILES_PILLAR_FINAL_CTA = {
  title: 'Une app à sortir ou une PWA à industrialiser ?',
  primaryHref: '/devis?projectType=app',
  primaryLabel: 'Demander un devis application',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
