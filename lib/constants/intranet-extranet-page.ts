/** Contenus page premium `/sites-internet/intranet-extranet` (brief pages filles). */

export const INTRANET_EXTRANET_PATH = '/sites-internet/intranet-extranet';

export const INTRANET_EXTRANET_KEYWORDS = [
  'création intranet',
  'création extranet',
  'intranet sur mesure',
  'portail collaboratif entreprise',
  'développeur intranet freelance',
] as const;

export const intranetExtranetMetaDescription =
  "Développement d'intranet et extranet sur mesure pour entreprises. Espace collaborateur, portail partenaire, base documentaire. Freelance expérimenté dès 4 900 €.";

export const intranetExtranetMetaTitle = 'Création intranet et extranet sur mesure | Clickdev';

export const INTRANET_EXTRANET_HERO = {
  chapter: 'Chapitre 01.7 · Intranet · Extranet',
  subline: 'Développeur freelance — Outils internes et partenaires',
  h1: "Création d'intranet et extranet sur mesure",
  lead:
    'Espace collaborateur, portail partenaire, base documentaire interne : je développe des intranets et extranets qui fluidifient vraiment vos processus. Sécurité, ergonomie, adoption : tout est pensé — avec un MVP réaliste et des droits d’accès qui tiennent la route.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${INTRANET_EXTRANET_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const INTRANET_EXTRANET_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Un portail que les équipes ouvrent sans râler',
  subtitle: 'Sécurité et UX ne sont pas en opposition : les deux servent l’adoption.',
  items: [
    {
      title: 'Un espace sécurisé pour vos équipes',
      body: 'Authentification forte, rôles, journalisation des accès sensibles : les bases pour dormir un peu mieux sur les données internes.',
    },
    {
      title: 'Une interface pensée pour le quotidien',
      body: 'Recherche doc, annuaire, tâches courantes en deux clics : on évite l’outil “subi” que personne ne met à jour.',
    },
    {
      title: 'Des intégrations avec vos outils',
      body: 'Google Workspace, Microsoft 365, CRM, ERP : on relie ce qui existe sans tout recâbler en douce.',
    },
    {
      title: 'Un produit qui grandit avec vous',
      body: 'Modules, nouveaux sites, partenaires : on modulaise pour éviter la refonte totale à chaque étape.',
    },
  ],
} as const;

export const INTRANET_EXTRANET_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Intranet vs extranet : les bons usages en 2026',
} as const;

export const INTRANET_EXTRANET_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Du siège au terrain, du salarié au partenaire externe.',
  cards: [
    {
      title: 'Entreprises en croissance',
      body: 'Outils éclatés, infos qui se perdent : un intranet centralise l’essentiel sans remplacer tous vos SaaS du jour au lendemain.',
    },
    {
      title: 'Organisations multi-sites',
      body: 'Un espace commun pour actualités, procédures et ressources — accessible partout avec les bons garde-fous.',
    },
    {
      title: 'Réseaux de franchisés',
      body: 'Un extranet pour documents, campagnes, supports et échanges avec vos partenaires — sans chaos de pièces jointes.',
    },
    {
      title: 'PME avec équipes terrain',
      body: 'Formulaires, fiches, remontées d’info mobile-first : ce qui se fait sur le terrain remonte proprement.',
    },
  ],
} as const;

export const INTRANET_EXTRANET_COMPARE = {
  kicker: 'Décision',
  title: 'Suite collaborative, portail packagé, ou sur mesure ?',
  subtitle:
    'Le bon choix dépend de votre SSO, de vos contraintes métier, et de ce que vous acceptez de ne pas contrôler.',
  columns: ['Suite SaaS', 'Portail modulable', 'Sur mesure'] as const,
  rows: [
    { label: 'Mise en route rapide sur du standard', c: [true, true, false] as const },
    { label: 'SSO / MFA / audit poussés', c: [true, true, true] as const },
    { label: 'Workflows métier très spécifiques', c: [false, true, true] as const },
    { label: 'Données sensibles & hébergement maîtrisé', c: [false, true, true] as const },
    { label: 'Expérience utilisateur 100 % à votre marque', c: [false, true, true] as const },
    { label: 'Évolution sans plafond du modèle produit', c: [false, false, true] as const },
  ],
} as const;

export const INTRANET_EXTRANET_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour un portail adopté',
  steps: [
    {
      n: '01',
      title: 'Usages & rôles',
      body: 'Qui fait quoi, quelles données, quels risques ? On cartographie les parcours critiques avant de choisir l’auth.',
    },
    {
      n: '02',
      title: 'Auth & droits',
      body: 'SSO existant (Google, Microsoft, Azure AD…), MFA si besoin, rôles segmentés : on évite le super-admin unique.',
    },
    {
      n: '03',
      title: 'Information architecture',
      body: 'Annuaire, doc center, actualités, outils métiers : une structure claire pour que la recherche serve vraiment.',
    },
    {
      n: '04',
      title: 'Développement & intégrations',
      body: 'APIs, webhooks, exports : on isole ce qui est fragile et on journalise ce qui est sensible.',
    },
    {
      n: '05',
      title: 'Pilote & adoption',
      body: 'Formation courte, alliés métier, ajustements après usage réel. Sans adoption, le meilleur SSO ne sert à rien.',
    },
  ],
} as const;

export const INTRANET_EXTRANET_STACK = {
  kicker: 'Stack',
  title: 'Identité, données, déploiement — sans magie',
  body:
    'Next.js pour l’interface, Auth.js ou Clerk selon le contexte, PostgreSQL / Supabase pour les données, SSO fournisseur quand il existe — hébergement Vercel ou cloud selon contraintes.',
  labels: ['Next.js', 'Auth.js', 'Clerk', 'PostgreSQL', 'Supabase', 'Azure AD', 'Google SSO', 'Vercel'],
} as const;

export const INTRANET_EXTRANET_CASES = {
  kicker: 'Portfolio',
  title: 'Des plateformes web et outils livrés en conditions réelles',
  intro: 'Réalisations récentes — détail et contexte sur chaque étude de cas.',
} as const;

export const INTRANET_EXTRANET_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — intranet & extranet',
  subtitle: 'Budget, délais, intégrations, sécurité, adoption.',
} as const;

export const INTRANET_EXTRANET_FAQ_ITEMS = [
  {
    question: 'Combien coûte un intranet sur mesure ?',
    answer:
      'Souvent à partir de 4 900 € pour un MVP sérieux (auth, rôles, espaces de base, quelques intégrations). Au-delà, le budget suit le nombre de sites, la complexité documentaire, le SSO, et les workflows. Devis gratuit après cadrage.',
  },
  {
    question: 'Intranet ou extranet : comment choisir ?',
    answer:
      'Intranet : salariés et ressources internes. Extranet : partenaires, franchisés, clients B2B avec accès contrôlé. Parfois les deux cohabitent avec des périmètres et des droits différents — on clarifie ça avant de coder.',
  },
  {
    question: 'Combien de temps pour développer un intranet ?',
    answer:
      'Quelques mois pour un périmètre MVP utile, selon intégrations et qualité des données existantes. Si on vise “tout l’ERP dans le navigateur” d’un coup, le planning explose — on découpe par jalons.',
  },
  {
    question: 'Est-ce que ça s’intègre avec nos outils actuels ?',
    answer:
      'Oui dans la mesure du possible : APIs, SSO, exports. On évite les promesses “100 % natif” sans lecture des contrats et des limites des outils tiers.',
  },
  {
    question: 'Comment assurer la sécurité des données ?',
    answer:
      'MFA, moindre privilège, chiffrement en transit, journaux d’audit, sauvegardes — et une hébergement adapté. Le détail dépend de votre secteur ; on cadrera avec votre RSSI ou équivalent si vous en avez un.',
  },
  {
    question: 'Et pour l’adoption par les équipes ?',
    answer:
      'Co-construction avec des référents métier, parcours courts, formation, et itérations après retour terrain. Un portail magnifique que personne n’ouvre reste un échec produit.',
  },
  {
    question: 'Est-ce que ça peut évoluer dans le temps ?',
    answer:
      'Oui : modularité, feature flags, backlog priorisé. Le sur mesure sert justement à ne pas se coincer quand l’organisation grandit.',
  },
] as const;

export const INTRANET_EXTRANET_BUDGET = {
  title: 'Budget',
  line: 'Les intranets / extranets sur mesure démarrent à partir de 4 900 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const INTRANET_EXTRANET_FINAL_CTA = {
  title: 'Un portail interne ou partenaires à bâtir sérieusement ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis portail',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
