/** Contenus page premium `/applications-mobiles/ios`. */

export const IOS_APP_PATH = '/applications-mobiles/ios';

export const IOS_APP_KEYWORDS = [
  'développement app iOS',
  'application iOS Swift',
  'SwiftUI freelance',
  'publication App Store',
  'développeur iOS freelance',
] as const;

export const iosAppMetaDescription =
  'Développement d’applications iOS natives (Swift, SwiftUI) : qualité App Store, TestFlight, accessibilité et performance. Freelance expérimenté — devis gratuit.';

export const iosAppMetaTitle = 'Développement app iOS native — Swift & SwiftUI | Clickdev';

export const IOS_APP_HERO = {
  chapter: 'Chapitre 02.1 · iOS',
  subline: 'Développeur freelance — Apps iPhone & iPad',
  h1: 'Développement d’application iOS native',
  lead:
    'Swift et SwiftUI pour une expérience alignée sur les guidelines Apple : navigation fluide, APIs système, et préparation sérieuse du passage App Store (privacy manifest, captures, conformité). TestFlight pour vos bêta-testeurs, itérations sans surprise.',
  primaryCta: { href: '/devis?projectType=app', label: 'Demander un devis' },
  secondaryCta: { href: `${IOS_APP_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const IOS_APP_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Une app qui se comporte comme une app Apple',
  subtitle: 'Perf, accessibilité et review : on anticipe plutôt qu’on bricole après refus.',
  items: [
    {
      title: 'SwiftUI & Swift modernes',
      body: 'Code structuré, navigation claire, composants réutilisables — et UIKit quand un module legacy ou un SDK l’exige.',
    },
    {
      title: 'Qualité App Store intégrée',
      body: 'Privacy manifest, descriptions, permissions justifiées : on réduit les allers-retours avec la review.',
    },
    {
      title: 'TestFlight & builds reproductibles',
      body: 'Vos testeurs reçoivent des builds traçables ; vous gardez la propriété du compte développeur Apple.',
    },
    {
      title: 'Accessibilité quand ça compte',
      body: 'Dynamic Type, VoiceOver sur parcours critiques, contrastes : utile pour le public large ou les obligations sectorielles.',
    },
  ],
} as const;

export const IOS_APP_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Pourquoi le natif iOS reste un choix fort en 2026',
} as const;

export const IOS_APP_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Du lancement produit à l’outil métier terrain.',
  cards: [
    {
      title: 'Startups & scale-ups',
      body: 'MVP iOS d’abord, qualité review-ready, roadmap pour iPad ou fonctionnalités natives plus tard.',
    },
    {
      title: 'Marques premium',
      body: 'Fluidité, animations sobres, image soignée : l’alignement avec l’écosystème Apple rassure.',
    },
    {
      title: 'Éditeurs & SaaS',
      body: 'Companion app, auth SSO, offline partiel : on relie votre backend existant proprement.',
    },
    {
      title: 'Organisations réglementées',
      body: 'Données sensibles, journaux, contrôle des mises à jour : le natif aide à cadrer le périmètre technique.',
    },
  ],
} as const;

export const IOS_APP_COMPARE = {
  kicker: 'Décision',
  title: 'Natif iOS, cross-platform, ou PWA ?',
  subtitle:
    'Le bon choix dépend des APIs natives, du délai, et de savoir si Android est dans le même sprint.',
  columns: ['iOS natif', 'Cross-platform', 'PWA'] as const,
  rows: [
    { label: 'Accès plein aux APIs Apple récentes', c: [true, true, false] as const },
    { label: 'UX “système” maximale sur iPhone', c: [true, true, false] as const },
    { label: 'Un seul codebase iOS + Android', c: [false, true, true] as const },
    { label: 'Pas de passage App Store', c: [false, false, true] as const },
    { label: 'Découverte via App Store', c: [true, true, false] as const },
    { label: 'Offline & push natifs poussés', c: [true, true, false] as const },
  ],
} as const;

export const IOS_APP_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour une app iOS livrée proprement',
  steps: [
    {
      n: '01',
      title: 'Produit & parcours',
      body: 'Écrans critiques, auth, offline : on fige le périmètre MVP avant d’ouvrir Xcode.',
    },
    {
      n: '02',
      title: 'Architecture & API',
      body: 'Modèles, erreurs réseau, refresh token : une base qui tient la charge des vraies connexions 4G.',
    },
    {
      n: '03',
      title: 'UI & accessibilité',
      body: 'SwiftUI, navigation, états de chargement : le détail qui évite les avis une étoile “bugué”.',
    },
    {
      n: '04',
      title: 'Tests & TestFlight',
      body: 'Devices réels, versions OS, retours testeurs : on boucle avant la soumission.',
    },
    {
      n: '05',
      title: 'App Store & suivi',
      body: 'Soumission, réponses review, puis plan de versions mineures et correctifs.',
    },
  ],
} as const;

export const IOS_APP_STACK = {
  kicker: 'Stack',
  title: 'Outils sérieux côté Apple',
  body:
    'Swift 5+, SwiftUI, Combine/async-await, Xcode Cloud ou CI GitHub, Fastlane si besoin — dépendances maîtrisées et mises à jour raisonnées.',
  labels: ['Swift', 'SwiftUI', 'Xcode', 'TestFlight', 'Fastlane', 'REST', 'GraphQL'],
} as const;

export const IOS_APP_CASES = {
  kicker: 'Portfolio',
  title: 'Des apps et produits digitaux livrés en conditions réelles',
  intro: 'Études de cas « app mobile » récentes — le détail sur chaque fiche projet.',
} as const;

export const IOS_APP_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — app iOS',
  subtitle: 'SwiftUI, App Store, budget, délais.',
} as const;

export const IOS_APP_FAQ_ITEMS = [
  {
    question: 'SwiftUI uniquement ?',
    answer:
      'SwiftUI accélère la plupart des écrans ; UIKit reste pertinent pour certains composants legacy ou SDKs fournis en UIKit. On choisit au cas par cas.',
  },
  {
    question: 'Combien coûte une app iOS ?',
    answer:
      'Souvent à partir de 6 900 € pour un MVP bien cadré (auth, quelques écrans clés, API). Au-delà, le budget suit le nombre d’écrans, l’offline, les intégrations tierces, et les exigences review. Devis gratuit après cadrage.',
  },
  {
    question: 'Qui possède le compte App Store ?',
    answer:
      'Vous, idéalement : je vous accompagne sur les certificats et profils sans accrocher le projet à mon compte perso.',
  },
  {
    question: 'Faites-vous aussi Android ?',
    answer:
      'Oui : natif Kotlin ou React Native selon votre contexte — voir les pages dédiées du silo applications mobiles.',
  },
  {
    question: 'Combien de temps pour la première version ?',
    answer:
      'Quelques semaines à quelques mois selon le MVP et la maturité du design. Les allers-retours review App Store peuvent ajouter quelques jours.',
  },
  {
    question: 'Gestion hors-ligne ?',
    answer:
      'Oui quand le métier l’exige : stratégie de cache, file d’attente de sync, résolution de conflits — cadrée tôt pour ne pas exploser en v2.',
  },
  {
    question: 'Maintenance après lancement ?',
    answer:
      'Correctifs, compatibilité nouvelles iOS, petites évolutions : forfait ou tickets selon votre rythme.',
  },
] as const;

export const IOS_APP_BUDGET = {
  title: 'Budget',
  line: 'Les applications iOS natives démarrent à partir de 6 900 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const IOS_APP_FINAL_CTA = {
  title: 'Une app iOS à sortir sans friction review ?',
  primaryHref: '/devis?projectType=app',
  primaryLabel: 'Demander un devis iOS',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
