/** Contenus page premium `/ia/ia-generative-ecommerce`. */

export const IA_GENERATIVE_ECOMMERCE_PATH = '/ia/ia-generative-ecommerce';

export const IA_GENERATIVE_ECOMMERCE_KEYWORDS = [
  'IA générative e-commerce',
  'rédaction fiches produit IA',
  'search conversationnel e-commerce',
  'IA Shopify WooCommerce',
  'freelance IA e-commerce',
] as const;

export const iaGenerativeEcommerceMetaDescription =
  'IA générative e-commerce : fiches produit, search, support — templates, validation humaine, SEO duplicate & canonical. Freelance Clickdev.';

export const iaGenerativeEcommerceMetaTitle = 'IA générative e-commerce — Contenus & conversion | Clickdev';

export const IA_GENERATIVE_ECOMMERCE_HERO = {
  chapter: 'Chapitre 03.6 · IA générative e-commerce',
  subline: 'Développeur freelance — Shop & conformité',
  h1: 'IA générative pour votre e-commerce',
  lead:
    'L’IA peut accélérer rédaction, recherche conversationnelle ou support — à condition de ne pas inventer des promesses légales ou des specs produit. Je cadre les sorties (templates, validation humaine sur catégories sensibles) et le SEO (duplicate, canonical) pour que le gain interne ne dégrade pas votre visibilité.',
  primaryCta: { href: '/devis?projectType=ecommerce', label: 'Demander un devis' },
  secondaryCta: { href: `${IA_GENERATIVE_ECOMMERCE_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const IA_GENERATIVE_ECOMMERCE_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Du contenu plus vite — sans casser la confiance',
  subtitle: 'Templates, garde-fous et SEO : le trio pour scaler sans dette.',
  items: [
    {
      title: 'Fiches & variantes structurées',
      body: 'Champs obligatoires, ton de marque, longueurs : le modèle remplit le cadre.',
    },
    {
      title: 'Validation humaine ciblée',
      body: 'Médical, légal, specs techniques : ce qui doit passer par un humain passe.',
    },
    {
      title: 'SEO duplicate sous contrôle',
      body: 'Canonical, noindex sur variantes fines, contrôle des pages générées.',
    },
    {
      title: 'A/B et rollback',
      body: 'Tester un module IA visible client, revenir en arrière si la conversion baisse.',
    },
  ],
} as const;

export const IA_GENERATIVE_ECOMMERCE_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Fiches produit IA : le vrai risque est juridique autant que SEO',
} as const;

export const IA_GENERATIVE_ECOMMERCE_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'E-commerçants et équipes marketing sous pression contenu.',
  cards: [
    { title: 'Catalogues larges', body: 'Esquisses de fiches, enrichissement, traduction assistée.' },
    { title: 'Marketplaces & multi-canal', body: 'Cohérence des claims entre canaux.' },
    { title: 'Support e-commerce', body: 'Brouillons de réponses ancrés sur politique retour / garantie.' },
    { title: 'Search conversationnelle', body: 'Intent + produits : sans inventer la dispo stock.' },
  ],
} as const;

export const IA_GENERATIVE_ECOMMERCE_COMPARE = {
  kicker: 'Décision',
  title: 'Rédaction pure IA, assistée, ou 100 % humaine ?',
  subtitle: 'L’assistance gagne souvent : vitesse + humain sur le sensible.',
  columns: ['100 % IA', 'Assistée', '100 % humaine'] as const,
  rows: [
    { label: 'Débit maximal', c: [true, true, false] as const },
    { label: 'Risque légal maîtrisé', c: [false, true, true] as const },
    { label: 'Cohérence SEO & duplicate', c: [false, true, true] as const },
    { label: 'Coût rédaction bas', c: [true, true, false] as const },
    { label: 'Qualité premium garantie', c: [false, true, true] as const },
    { label: 'Time-to-market rapide', c: [true, true, false] as const },
  ],
} as const;

export const IA_GENERATIVE_ECOMMERCE_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour scaler le contenu sans dérapage',
  steps: [
    { n: '01', title: 'Grille éditoriale', body: 'Champs, interdits, preuves obligatoires, catégories sensibles.' },
    { n: '02', title: 'Templates & prompts', body: 'Structures stables pour limiter la dérive.' },
    { n: '03', title: 'Flux validation', body: 'Workflow humain par catégorie ou score.' },
    { n: '04', title: 'Publication & SEO', body: 'URLs, canonicals, indexation contrôlée.' },
    { n: '05', title: 'Mesure', body: 'A/B, temps gagné, incidents qualité : itération guidée.' },
  ],
} as const;

export const IA_GENERATIVE_ECOMMERCE_STACK = {
  kicker: 'Stack',
  title: 'Shop, CMS, APIs catalogue',
  body:
    'Shopify, WooCommerce, headless Next.js + API produit ; LLM via API ; stock et prix toujours source système — jamais “inventés” par le modèle.',
  labels: ['Shopify', 'WooCommerce', 'Next.js', 'OpenAI', 'Sanity', 'Algolia', 'GA4'],
} as const;

export const IA_GENERATIVE_ECOMMERCE_CASES = {
  kicker: 'Portfolio',
  title: 'E-commerce, marketplaces et sites orientés conversion',
  intro: 'Réalisations récentes — contexte e-commerce et web.',
} as const;

export const IA_GENERATIVE_ECOMMERCE_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — IA générative e-commerce',
  subtitle: 'SEO, données clients, conformité.',
} as const;

export const IA_GENERATIVE_ECOMMERCE_FAQ_ITEMS = [
  {
    question: 'Données clients dans le LLM ?',
    answer:
      'À éviter par défaut : anonymisation, prompts côté serveur, et fournisseurs avec DPA adaptés au RGPD.',
  },
  {
    question: 'Risque duplicate SEO ?',
    answer:
      'On contrôle indexation, canonicals, et pages générées ; pas de multiplication de pages pauvres sans intention.',
  },
  {
    question: 'Combien coûte un dispositif ?',
    answer:
      'Souvent à partir de 4 200 € pour un premier module (ex. brouillons fiches + workflow validation). Au-delà, le budget suit le nombre de templates, langues, et connecteurs PIM. Devis gratuit.',
  },
  {
    question: 'Shopify ou sur mesure ?',
    answer:
      'Les deux : l’important est où vit la vérité prix/stock et comment on publie sans casser le thème.',
  },
  {
    question: 'Traductions ?',
    answer:
      'Assistées avec glossaire et relecture sur pages clés ; pas de “traduction aveugle” sur claims légaux.',
  },
  {
    question: 'Search sur catalogue ?',
    answer:
      'Hybride classique + sémantique possible ; coût et latence cadrés selon trafic.',
  },
  {
    question: 'Lien avec le SEO classique ?',
    answer:
      'Oui : le silo SEO et les gabarits produit restent le cadre ; l’IA accélère sans remplacer la stratégie.',
  },
] as const;

export const IA_GENERATIVE_ECOMMERCE_BUDGET = {
  title: 'Budget',
  line: 'Les dispositifs IA e-commerce (premier module + validation) démarrent souvent à partir de 4 200 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const IA_GENERATIVE_ECOMMERCE_FINAL_CTA = {
  title: 'Un catalogue à enrichir sans exploser la qualité ni le SEO ?',
  primaryHref: '/devis?projectType=ecommerce',
  primaryLabel: 'Demander un devis e-commerce + IA',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
