/** Pilier premium `/crm-outils-metiers` — ton grand public, exemples de situation. */

export const CRM_PILLAR_PATH = '/crm-outils-metiers';

export const CRM_PILLAR_HERO = {
  chapter: 'Chapitre 05 · Outils métiers',
  subline: 'Développeur freelance — Je conçois & je développe',
  h1: 'CRM & outils : moins de tableurs, plus de temps pour vendre',
  lead:
    'Quand les devis, les relances et les factures vivent dans cinq fichiers différents, les oublis arrivent vite. Je conçois des petits CRM web, des intégrations entre votre site et votre outil commercial, ou des automatisations pour enlever les tâches répétitives — pour une équipe de 3 ou 30 personnes.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${CRM_PILLAR_PATH}#offres`, label: 'Voir les offres' },
} as const;

export const CRM_PILLAR_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Des outils alignés sur votre vraie journée de travail',
  subtitle: 'Pas de usine à gaz : ce dont vous avez besoin maintenant, évolutif ensuite.',
  items: [
    {
      title: 'Je développe, je ne “vends” pas juste une licence',
      body: 'Vous savez qui a accès au code, où sont hébergées les données, comment faire évoluer le flux.',
    },
    {
      title: 'Exemples de situations',
      body: 'Agence : devis signé → tâche équipe technique. BTP : chantier → photos → facture. Formation : inscription → CRM → rappel automatique.',
    },
    {
      title: 'Moins de double saisie',
      body: 'Site, CRM, mail ou facturation : un seul déclencheur peut mettre à jour plusieurs endroits proprement.',
    },
    {
      title: 'Pédagogie',
      body: 'Je documente pour que vous ne soyez pas prisonnier d’une boîte noire.',
    },
  ],
} as const;

export const CRM_PILLAR_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Le bon outil est celui que l’équipe utilise vraiment',
} as const;

export const CRM_PILLAR_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Profils fréquents',
  subtitle: 'Quand un outil ou une intégration change la journée.',
  cards: [
    { title: 'Commercial / dirigeant', body: 'Vous voulez voir où en sont les affaires sans relancer tout le monde.' },
    { title: 'Opérations', body: 'Vous en avez marre des copier-coller entre mail et tableur.' },
    { title: 'Bureau avec plusieurs outils', body: 'Le site génère des leads : ils doivent arriver au bon endroit.' },
    { title: 'Activité qui se structure', body: 'Vous passez de l’intuition à un petit process clair.' },
  ],
} as const;

export const CRM_PILLAR_COMPARE = {
  kicker: 'Décision',
  title: 'Gros CRM du marché, outil sur mesure, ou rien ?',
  subtitle: 'Le “rien” tient tant que vous êtes deux ; ça casse vite à dix.',
  columns: ['SaaS populaire', 'Sur mesure / intégration', 'Tableurs'] as const,
  rows: [
    { label: 'Démarrage rapide', c: [true, false, true] as const },
    { label: 'Adaptation au métier', c: [false, true, false] as const },
    { label: 'Coût licence mensuel', c: [true, false, true] as const },
    { label: 'Contrôle total du flux', c: [false, true, false] as const },
    { label: 'Zéro formation', c: [false, false, true] as const },
    { label: 'Idéal équipe qui grandit', c: [true, true, false] as const },
  ],
} as const;

export const CRM_PILLAR_PROCESS = {
  kicker: 'Process',
  title: 'Quatre étapes',
  steps: [
    { n: '01', title: 'Atelier', body: 'Où ça coince aujourd’hui, ce qui est interdit, ce qui est urgent.' },
    { n: '02', title: 'Proposition', body: 'Périmètre, budget, planning réaliste.' },
    { n: '03', title: 'Construction', body: 'Itérations visibles, tests avec utilisateurs pilotes.' },
    { n: '04', title: 'Passation', body: 'Formation courte + doc pour la suite.' },
  ],
} as const;

export const CRM_PILLAR_STACK = {
  kicker: 'Technologies',
  title: 'Ce que j’emploie souvent',
  body: 'Applications web modernes, bases de données fiables, API des outils que vous utilisez déjà (CRM, mail, facturation).',
  labels: ['Next.js', 'Laravel', 'PostgreSQL', 'API', 'Webhooks'],
} as const;

export const CRM_PILLAR_CASES = {
  kicker: 'Portfolio',
  title: 'Outils & intégrations',
  intro: 'Projets où le métier et le code ont été pensés ensemble.',
} as const;

export const CRM_PILLAR_FAQ = {
  kicker: 'FAQ',
  title: 'Questions — CRM & outils',
  subtitle: 'Hébergement, RGPD, maintenance.',
} as const;

export const CRM_PILLAR_FAQ_ITEMS = [
  {
    question: 'Faut-il un gros budget ?',
    answer: 'Une intégration simple peut démarrer autour de quelques milliers d’euros ; un CRM sur mesure est un projet plus large.',
  },
  {
    question: 'Où sont hébergées les données ?',
    answer: 'Souvent chez un hébergeur européen ; on choisit ensemble selon sensibilité et coût.',
  },
  {
    question: 'RGPD ?',
    answer: 'Je respecte vos consignes ; le cadre légal final reste avec vous ou votre conseil.',
  },
  {
    question: 'Puis-je faire évoluer sans vous ?',
    answer: 'Je livre pour que ce soit possible ; gros changements restent plus sûrs avec un regard technique.',
  },
] as const;

export function crmPillarFaqJsonLdItems(): { question: string; answer: string }[] {
  return [...CRM_PILLAR_FAQ_ITEMS];
}

export const CRM_PILLAR_BUDGET = {
  title: 'Budget',
  line: 'Intégration simple dès ~2 500 €, automatisations dès ~1 800 €, CRM sur mesure souvent 12 k€ et +.',
  note: 'Devis gratuit après échange court.',
} as const;

export const CRM_PILLAR_FINAL_CTA = {
  title: 'Un flux métier à sécuriser ou un CRM à imaginer ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis',
  secondaryHref: '/contact',
  secondaryLabel: 'Échanger',
} as const;
