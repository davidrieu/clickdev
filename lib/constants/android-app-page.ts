/** Contenus page premium `/applications-mobiles/android`. */

export const ANDROID_APP_PATH = '/applications-mobiles/android';

export const ANDROID_APP_KEYWORDS = [
  'développement app Android',
  'application Android Kotlin',
  'Jetpack Compose freelance',
  'Play Console publication',
  'développeur Android freelance',
] as const;

export const androidAppMetaDescription =
  'Développement d’applications Android (Kotlin, Compose) : Material, flavors, Play Console et déploiement progressif. Freelance — devis gratuit.';

export const androidAppMetaTitle = 'Développement app Android — Kotlin & Compose | Clickdev';

export const ANDROID_APP_HERO = {
  chapter: 'Chapitre 02.2 · Android',
  subline: 'Développeur freelance — Apps Google Play',
  h1: 'Développement d’application Android',
  lead:
    'Kotlin et Jetpack Compose pour une UI moderne, avec la réalité Android : fragmentation raisonnable, flavors, signatures Play App Signing, et stratégie de release (staged rollout). Data safety, fiches store et conformité : on prépare le terrain avant le premier upload.',
  primaryCta: { href: '/devis?projectType=app', label: 'Demander un devis' },
  secondaryCta: { href: `${ANDROID_APP_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const ANDROID_APP_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Une app Android prête pour le terrain réel',
  subtitle: 'Play Store, devices variés, et perf : on ne livre pas seulement sur un seul téléphone.',
  items: [
    {
      title: 'Kotlin & Compose',
      body: 'Code lisible, navigation déclarative, thème Material cohérent — XML quand la transition impose le mix.',
    },
    {
      title: 'Builds & flavors maîtrisés',
      body: 'Staging / prod, clés de signature, pipelines : moins de stress le jour du déploiement.',
    },
    {
      title: 'Play Console de bout en bout',
      body: 'Fiches, privacy, data safety form : les pièges classiques sont traités en amont.',
    },
    {
      title: 'Qualité multi-device',
      body: 'Tailles d’écran, densités, OEM : on teste sur un panel réaliste pour les parcours critiques.',
    },
  ],
} as const;

export const ANDROID_APP_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Android en 2026 : fragmentation maîtrisée, pas subie',
} as const;

export const ANDROID_APP_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Du grand public aux apps internes MDM.',
  cards: [
    {
      title: 'Produits grand public',
      body: 'Découverte Play, notes, perf : une expérience stable sur la longue traîne d’appareils.',
    },
    {
      title: 'B2B & terrain',
      body: 'Formulaires, scan, mode offline : Android souvent majoritaire sur le terrain.',
    },
    {
      title: 'Équipes déjà Android',
      body: 'Vous avez des devs Kotlin : je m’intègre sur conventions, revue et livraison.',
    },
    {
      title: 'Parité avec iOS',
      body: 'Même produit, deux stores : on aligne les features et les releases sans double dette.',
    },
  ],
} as const;

export const ANDROID_APP_COMPARE = {
  kicker: 'Décision',
  title: 'Android natif, cross-platform, ou PWA ?',
  subtitle:
    'Android natif gagne quand les intégrations Google / device sont au cœur du produit.',
  columns: ['Android natif', 'Cross-platform', 'PWA'] as const,
  rows: [
    { label: 'Intégrations Google Play / device poussées', c: [true, true, false] as const },
    { label: 'Material & comportements système', c: [true, true, false] as const },
    { label: 'Un codebase iOS + Android', c: [false, true, true] as const },
    { label: 'Distribution sans Play Store (MDM / APK)', c: [true, true, true] as const },
    { label: 'Découverte organique Play', c: [true, true, false] as const },
    { label: 'Widgets & background strictement natifs', c: [true, true, false] as const },
  ],
} as const;

export const ANDROID_APP_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour une app Android fiable',
  steps: [
    {
      n: '01',
      title: 'Périmètre & devices',
      body: 'Version min SDK, parcours MVP, liste de devices cibles : on évite le “ça marche chez moi”.',
    },
    {
      n: '02',
      title: 'Architecture & data',
      body: 'Room ou remote, sync, erreurs : les bases pour ne pas corrompre les données terrain.',
    },
    {
      n: '03',
      title: 'UI Compose & tests',
      body: 'Préviews, tests unitaires sur logique, UI tests sur flux critiques.',
    },
    {
      n: '04',
      title: 'Play Console',
      body: 'Tracks interne / bêta / prod, staged rollout, monitoring des ANRs.',
    },
    {
      n: '05',
      title: 'Post-lancement',
      body: 'Crashlytics, correctifs rapides, roadmap versions mineures.',
    },
  ],
} as const;

export const ANDROID_APP_STACK = {
  kicker: 'Stack',
  title: 'Écosystème Android moderne',
  body:
    'Kotlin, Jetpack Compose, Coroutines / Flow, Retrofit ou Ktor, Room, Hilt si DI — CI Gradle et signing Play App Signing.',
  labels: ['Kotlin', 'Compose', 'Gradle', 'Play Console', 'Room', 'Coroutines', 'Firebase'],
} as const;

export const ANDROID_APP_CASES = {
  kicker: 'Portfolio',
  title: 'Des apps et produits digitaux livrés en conditions réelles',
  intro: 'Études de cas « app mobile » récentes — le détail sur chaque fiche projet.',
} as const;

export const ANDROID_APP_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — app Android',
  subtitle: 'Compose, Play Store, délais, budget.',
} as const;

export const ANDROID_APP_FAQ_ITEMS = [
  {
    question: 'Compose ou XML ?',
    answer:
      'Jetpack Compose pour le neuf ; vues XML quand la base existante impose une transition progressive ou un SDK legacy.',
  },
  {
    question: 'Combien coûte une app Android ?',
    answer:
      'Souvent à partir de 6 900 € pour un MVP cadré. Le prix monte avec l’offline avancé, les intégrations, le nombre d’écrans, et les exigences multi-flavor. Devis gratuit.',
  },
  {
    question: 'Gestion des mises à jour Play ?',
    answer:
      'Staged rollout, pistes bêta, et plan de rollback : on documente la procédure pour votre équipe.',
  },
  {
    question: 'Et iOS dans la foulée ?',
    answer:
      'React Native ou deux équipes natives : on tranche selon votre deadline et vos compétences internes.',
  },
  {
    question: 'Apps internes sans Play public ?',
    answer:
      'Possible via programmes entreprise / MDM selon votre contexte ; on cadrage les contraintes de distribution tôt.',
  },
  {
    question: 'Data safety & confidentialité ?',
    answer:
      'Je vous guide sur les déclarations cohérentes avec le code réel — éviter le sur-déclaratif comme le sous-déclaratif.',
  },
  {
    question: 'Délai moyen pour un MVP ?',
    answer:
      'Quelques semaines à quelques mois selon design prêt et API stable. Les allers-retours métier comptent autant que le code.',
  },
] as const;

export const ANDROID_APP_BUDGET = {
  title: 'Budget',
  line: 'Les applications Android natives démarrent à partir de 6 900 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const ANDROID_APP_FINAL_CTA = {
  title: 'Une app Android à passer en prod sans angle mort Play ?',
  primaryHref: '/devis?projectType=app',
  primaryLabel: 'Demander un devis Android',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
