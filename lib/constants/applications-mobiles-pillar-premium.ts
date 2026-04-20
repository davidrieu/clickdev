/** Contenu page pilier premium `/applications-mobiles`. */

export const APPLICATIONS_MOBILES_PILLAR_PATH = '/applications-mobiles';

export const APPLICATIONS_MOBILES_PILLAR_HERO = {
  chapter: 'Chapitre 02 · Applications mobiles',
  subline: 'Développeur freelance — iOS & Android',
  h1: 'Développeur d’applications mobiles sur mesure',
  lead:
    'Vous avez une idée d’appli ? Parfait, j’adore ça. Je conçois et je développe des applications iOS et Android qui tiennent vraiment la route — de la première maquette jusqu’à la publication sur les stores. Sans prise de tête : on parle usage, budget et calendrier comme des adultes, pas comme dans une série sur les start-up.',
  primaryCta: { href: '/devis?projectType=app', label: 'Demander un devis' },
  secondaryCta: { href: `${APPLICATIONS_MOBILES_PILLAR_PATH}#offres`, label: 'Voir les offres' },
} as const;

export const APPLICATIONS_MOBILES_PILLAR_BENEFITS = {
  kicker: 'Ce que je fais concrètement',
  title: 'De l’idée à l’appli dans la poche de vos clients',
  subtitle:
    'Je code, je teste, je publie — et je vous explique ce qui se passe quand Apple ou Google change les règles.',
  items: [
    {
      title: 'Je code votre appli de A à Z',
      body:
        'Écrans, logique métier, appels à vos serveurs : je m’occupe de la partie technique pour que vous vous concentriez sur le produit et les retours terrain.',
    },
    {
      title: 'Je la mets sur l’App Store et Google Play',
      body:
        'Captures, textes, permissions, conformité : les stores sont une admin à part entière — je la connais et je vous évite les refus bêtes.',
    },
    {
      title: 'Je la rends rapide et stable',
      body:
        'Une appli qui plante au premier réseau pourri, ça part en avis négatif vite fait. Perf, crash reporting, versions : on ne rigole pas avec ça.',
    },
    {
      title: 'Je reste là après le lancement',
      body:
        'iOS et Android bougent tout le temps : mises à jour, correctifs, petites features. Je peux rester votre filet de sécurité en forfait ou au ticket.',
    },
  ],
} as const;

export const APPLICATIONS_MOBILES_PILLAR_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Avoir une appli mobile en 2026 : pourquoi et comment faire les bons choix',
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
