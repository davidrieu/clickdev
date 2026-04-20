/** Pilier premium `/seo` — ton grand public, exemples de situation. */

export const SEO_PILLAR_PATH = '/seo';

export const SEO_PILLAR_HERO = {
  chapter: 'Chapitre 04 · Référencement',
  subline: 'Développeur freelance — Je conçois & j’implémente',
  h1: 'SEO : être trouvé sur Google sans se noyer dans le jargon',
  lead:
    'Que vous vendiez des gâteaux, des conseils juridiques ou des abonnements logiciels, le principe reste le même : des pages claires, un site rapide, et des mots que vos clients utilisent vraiment. Je développe les corrections techniques et j’aide à structurer le contenu — sans promettre la “1re page” magique.',
  primaryCta: { href: '/devis?projectType=site', label: 'Demander un devis' },
  secondaryCta: { href: `${SEO_PILLAR_PATH}#offres`, label: 'Voir les offres' },
} as const;

export const SEO_PILLAR_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Une approche lisible par toute l’équipe',
  subtitle: 'Priorités, chiffres simples, pas de PowerPoint opaque.',
  items: [
    {
      title: 'Je parle humain puis je code',
      body: 'D’abord ce que vous vendez et qui cherche ; ensuite titres, liens, vitesse. Ex. : salon de coiffure qui veut remplir l’agenda le mardi.',
    },
    {
      title: 'Technique + contenu',
      body: 'Un beau texte sur un site lent ou invisible ne suffit pas — je traite les deux quand c’est nécessaire.',
    },
    {
      title: 'Exemples concrets',
      body: 'Boutique qui perd ses fiches après une refonte, artisan invisible hors Maps, blog qui ne reçoit jamais de clics.',
    },
    {
      title: 'Mesure raisonnable',
      body: 'Search Console, pages importantes, appels ou formulaires : ce qui compte pour vous.',
    },
  ],
} as const;

export const SEO_PILLAR_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Le SEO est un marathon avec des sprints au début',
} as const;

export const SEO_PILLAR_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'À qui s’adresse ce silo',
  subtitle: 'Indépendants, associations, PME : même exigence de clarté.',
  cards: [
    { title: 'Vous ouvrez ou relancez', body: 'Nouveau site : bases propres avant d’investir dans le contenu long.' },
    { title: 'Vous refondez', body: 'Changement d’URLs : on sécurise la migration avant le jour J.' },
    { title: 'Vous vendez en ligne', body: 'Catalogue, filtres, fiches : structure SEO e-commerce.' },
    { title: 'Vous dépendez du local', body: 'Maps, pages ville, avis : visibilité “près de chez moi”.' },
  ],
} as const;

export const SEO_PILLAR_COMPARE = {
  kicker: 'Décision',
  title: 'Agence “full SEO”, freelance, ou vous seul avec un outil ?',
  subtitle: 'Tout dépend du temps interne et de la criticité du site.',
  columns: ['Outil + vous', 'Accompagnement', 'Grosse agence'] as const,
  rows: [
    { label: 'Budget modeste au départ', c: [true, true, false] as const },
    { label: 'Réactivité & contact direct', c: [true, true, false] as const },
    { label: 'Lien dev + SEO technique', c: [false, true, true] as const },
    { label: 'Équipe déjà très marketing', c: [true, false, true] as const },
    { label: 'Idéal PME / particulier pro', c: [true, true, false] as const },
    { label: 'Notoriété nationale forte', c: [false, true, true] as const },
  ],
} as const;

export const SEO_PILLAR_PROCESS = {
  kicker: 'Process',
  title: 'Quatre étapes',
  steps: [
    { n: '01', title: 'Échange', body: 'Objectifs, zone, concurrence, ce qui vous fait peur sur Google.' },
    { n: '02', title: 'Diagnostic', body: 'Audit ou crawl ciblé selon le besoin.' },
    { n: '03', title: 'Plan d’actions', body: 'Liste priorisée : impact × effort.' },
    { n: '04', title: 'Réalisation', body: 'Je corrige le technique et/ou j’aide à réécrire avec vous.' },
  ],
} as const;

export const SEO_PILLAR_STACK = {
  kicker: 'Outils & sujets',
  title: 'Ce que je manipule souvent',
  body: 'Search Console, balisage, performance web, WordPress/Shopify/Next.js, contenu orienté intentions — toujours adapté à votre site.',
  labels: ['Search Console', 'Performance', 'WordPress', 'Shopify', 'Contenu', 'Local'],
} as const;

export const SEO_PILLAR_CASES = {
  kicker: 'Portfolio',
  title: 'Sites & boutiques déjà accompagnés',
  intro: 'Quelques réalisations où le référencement a été pris en compte.',
} as const;

export const SEO_PILLAR_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — SEO',
  subtitle: 'Délais, garanties, prix.',
} as const;

export const SEO_PILLAR_FAQ_ITEMS = [
  {
    question: 'Garantissez-vous la première position ?',
    answer: 'Non : ce serait malhonnête. Je vise trafic qualifié, clarté et technique saine.',
  },
  {
    question: 'C’est long ?',
    answer: 'Les correctifs techniques peuvent agir en semaines ; l’autorité et le contenu prennent souvent des mois.',
  },
  {
    question: 'Je n’y connais rien : ça pose problème ?',
    answer: 'Non : j’explique avec des exemples concrets et un vocabulaire simple.',
  },
  {
    question: 'Budget minimum ?',
    answer: 'Un audit complet commence souvent vers 990 € ; les missions techniques ou contenu sont chiffrées à part.',
  },
  {
    question: 'Lien avec l’IA / ChatGPT ?',
    answer: 'Voir la page GEO : c’est complémentaire du SEO Google classique.',
  },
] as const;

export function seoPillarFaqJsonLdItems(): { question: string; answer: string }[] {
  return [...SEO_PILLAR_FAQ_ITEMS];
}

export const SEO_PILLAR_BUDGET = {
  title: 'Budget',
  line: 'Les tarifs varient : un audit complet vers 990 €, missions techniques ou contenu sur devis selon pages.',
  note: 'Devis gratuit, sans engagement.',
} as const;

export const SEO_PILLAR_FINAL_CTA = {
  title: 'Un site à faire connaître ou à remettre d’aplomb ?',
  primaryHref: '/devis?projectType=site',
  primaryLabel: 'Demander un devis',
  secondaryHref: '/contact',
  secondaryLabel: 'Poser une question',
} as const;
