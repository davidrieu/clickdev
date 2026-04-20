/** Contenus page premium `/sites-internet/site-ecommerce` (brief pages filles). */

export const SITE_ECOMMERCE_PATH = '/sites-internet/site-ecommerce';

export const SITE_ECOMMERCE_KEYWORDS = [
  'création site e-commerce',
  'site e-commerce sur mesure',
  'développeur Shopify freelance',
  'boutique en ligne professionnelle',
] as const;

export const siteEcommerceMetaDescription =
  'Développement de sites e-commerce sur mesure par un freelance expérimenté. Shopify, WooCommerce, headless. Boutique rapide et convertissante dès 4 500 €.';

export const siteEcommerceMetaTitle = 'Création site e-commerce sur mesure — Freelance | Clickdev';

export const SITE_ECOMMERCE_HERO = {
  chapter: 'Chapitre 01.2 · E-commerce',
  subline: 'Développeur freelance — Boutiques en ligne',
  h1: 'Création de site e-commerce sur mesure',
  lead:
    'Vendez en ligne 24h/24 avec une boutique rapide, belle, et pensée pour convertir. De la petite marque au retailer établi, je construis des e-commerces qui transforment vraiment.',
  primaryCta: { href: '/devis?projectType=ecommerce', label: 'Demander un devis' },
  secondaryCta: { href: `${SITE_ECOMMERCE_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const SITE_ECOMMERCE_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Une boutique qui travaille pour vous, pas contre vous',
  subtitle: 'Quatre piliers concrets — sans promesses magiques, avec des résultats mesurables.',
  items: [
    {
      title: 'Une boutique rapide comme l’éclair',
      body: 'Chaque seconde de lenteur, c’est des paniers qui s’évaporent. Je vise un chargement perçu net, des images optimisées, et un checkout qui tient la route sur mobile — parce que c’est là que la moitié des achats se décide.',
    },
    {
      title: 'Un tunnel d’achat pensé pour convertir',
      body: 'De la fiche produit au paiement, chaque étape est claire : prix visibles, frais annoncés tôt, réassurance livraison et retours. Moins de friction, plus de commandes finalisées.',
    },
    {
      title: 'Une gestion simple au quotidien',
      body: 'Ajoutez des produits, ajustez les prix, suivez les commandes : l’interface admin est pensée pour vos équipes, pas pour des développeurs. Et si vous bloquez, je suis joignable.',
    },
    {
      title: 'Une base prête pour grandir',
      body: 'Soldes, pics de trafic, internationalisation : on anticipe dès le cadrage pour que votre outil tienne quand ça accélère — sans tout reconstruire à chaque étape.',
    },
  ],
} as const;

export const SITE_ECOMMERCE_EDITORIAL = {
  kicker: 'Lecture',
  title: 'L’e-commerce en 2026 : au-delà du simple catalogue',
} as const;

export const SITE_ECOMMERCE_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Du lancement à la refonte, je m’adapte à votre stade — avec la même exigence.',
  cards: [
    {
      title: 'Petites marques qui se lancent',
      body: 'Votre première boutique en ligne : propre, fonctionnelle, évolutive — sans sacrifier la qualité pour aller vite.',
    },
    {
      title: 'Artisans et créateurs',
      body: 'Vendez vos créations avec un site qui raconte votre histoire autant que vos produits. Le détail compte.',
    },
    {
      title: 'Retailers établis',
      body: 'Refonte ou migration : on passe à une stack moderne en protégeant votre SEO et vos habitudes métier.',
    },
    {
      title: 'Marques internationales',
      body: 'Multi-devises, multi-langues, logistique exigeante : je prends en charge les e-commerces où la complexité est la norme.',
    },
  ],
} as const;

export const SITE_ECOMMERCE_COMPARE = {
  kicker: 'Décision',
  title: 'Shopify, WooCommerce ou sur mesure ?',
  subtitle:
    'Pas de religion techno : la bonne réponse dépend de votre volume, de vos équipes et de vos règles métier. Voici un repère lisible.',
  columns: ['Shopify', 'WooCommerce', 'Sur mesure'] as const,
  rows: [
    { label: 'Mise en ligne rapide sur un standard e-commerce', c: [true, true, false] as const },
    { label: 'Budget initial maîtrisé pour lancer', c: [true, true, false] as const },
    { label: 'Autonomie contenu / marketing sans dev à chaque fois', c: [true, true, false] as const },
    { label: 'Logique métier très spécifique (B2B, tarifs, bundles)', c: [false, true, true] as const },
    { label: 'UX et parcours d’achat 100 % à votre image', c: [false, true, true] as const },
    { label: 'Performance et SEO poussés (headless, catalogue dense)', c: [true, false, true] as const },
  ],
} as const;

export const SITE_ECOMMERCE_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes, de votre idée au premier panier validé',
  steps: [
    {
      n: '01',
      title: 'Cadrage & offre',
      body: 'On clarifie votre catalogue, vos canaux de vente, paiements, livraisons, pays cibles et outils existants (ERP, transport). Objectifs chiffrés : conversion, perf, délais.',
    },
    {
      n: '02',
      title: 'Choix de la stack',
      body: 'Shopify si le standard suffit et qu’il faut scaler vite. WooCommerce si WordPress est déjà votre centre de gravité. Sur mesure (souvent Next.js + API) quand les règles dépassent le cadre — je vous explique les compromis en français.',
    },
    {
      n: '03',
      title: 'Design & tunnel d’achat',
      body: 'Maquettes des parcours critiques : listing, fiche produit, panier, checkout. On valide ensemble les textes de réassurance et les étapes avant d’écrire une ligne de code.',
    },
    {
      n: '04',
      title: 'Développement & intégrations',
      body: 'Paiement (Stripe, PayPal…), stocks, transporteurs, emails transactionnels, outils d’analytics : tout est branché proprement, avec gestion d’erreurs compréhensible pour vos clients.',
    },
    {
      n: '05',
      title: 'Tests, SEO produit & lancement',
      body: 'Je vérifie mobile, accessibilité, données structurées produit, canonicals et pagination. Puis mise en ligne, formation courte à l’admin, et filet de sécurité post-bascule.',
    },
  ],
} as const;

export const SITE_ECOMMERCE_STACK = {
  kicker: 'Stack',
  title: 'Les technos au service de votre catalogue',
  body:
    'Je compose avec ce qui tient la route en production : storefront rapide, catalogue fiable, paiements sereins. Pas de pile gadget.',
  labels: [
    'Next.js',
    'Shopify Hydrogen',
    'Shopify',
    'WooCommerce',
    'Medusa',
    'Stripe',
    'Algolia',
    'Sanity',
    'Vercel',
  ],
} as const;

export const SITE_ECOMMERCE_CASES = {
  kicker: 'Portfolio',
  title: 'Des boutiques qui ont déjà tourné en conditions réelles',
  intro:
    'Greenweez, The French Maisons et d’autres projets e-commerce ou web — extraits des réalisations récentes. Le détail sur chaque fiche projet.',
} as const;

export const SITE_ECOMMERCE_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — e-commerce',
  subtitle: 'Les réponses que je donne en appel découverte, sans jargon inutile.',
} as const;

export const SITE_ECOMMERCE_FAQ_ITEMS = [
  {
    question: 'Combien coûte un site e-commerce sur mesure ?',
    answer:
      'Comptez souvent à partir de 4 500 € pour une boutique professionnelle bien cadrée (parcours d’achat, paiement, catalogue raisonnable, SEO de base). Au-delà, le prix suit la complexité : intégrations ERP, B2B, multi-sites, international… Je vous propose un devis gratuit et détaillé après un court échange.',
  },
  {
    question: 'Shopify ou WooCommerce : lequel choisir ?',
    answer:
      'Shopify excelle quand vous voulez un standard international solide, avec peu de maintenance serveur. WooCommerce est pertinent si vous êtes déjà sur WordPress, avec un catalogue maîtrisé et une équipe à l’aise avec l’écosystème. Si vos règles de prix, de stock ou de vente dépassent le cadre, on regarde du sur mesure ou du headless — je vous dis franchement ce qui colle.',
  },
  {
    question: 'Est-ce que vous gérez la migration depuis un autre site ?',
    answer:
      'Oui : inventaire des URLs, plan de redirections 301, reprise des contenus produit quand c’est possible, tests sur environnement de préproduction, puis bascule surveillée. L’objectif est de ne pas casser votre trafic ni vos habitudes métier.',
  },
  {
    question: 'Comment se gère le SEO sur un e-commerce ?',
    answer:
      'On travaille la structure (catégories utiles, pagination propre, canonicals), les données produit, et les pages qui tirent le catalogue (guides, FAQ). Pour aller plus loin, la page SEO e-commerce du site détaille l’approche ; on peut aussi combiner avec un audit SEO si vous refondez.',
  },
  {
    question: 'Quels moyens de paiement sont intégrés ?',
    answer:
      'En général Stripe, PayPal ou les solutions natives de votre plateforme (Shopify Payments, etc.), selon votre pays et vos contraintes. L’important : messages d’erreur clairs, 3-D Secure géré proprement, et parcours mobile sans surprise.',
  },
  {
    question: 'Est-ce que je peux gérer mon catalogue moi-même ?',
    answer:
      'Oui, c’est le but : fiches produit, variantes, stocks, promotions — depuis l’admin. Je forme vos équipes sur le quotidien et je documente les cas limites pour éviter les « j’ai cliqué et tout a disparu ».',
  },
  {
    question: 'Et pour la logistique et l’expédition ?',
    answer:
      'On branche les transporteurs ou votre outil logistique (API, exports CSV, webhooks) selon ce que vous utilisez déjà. Ce n’est pas magique : il faut des règles claires sur les frais de port, les pays servis et les délais — je vous aide à les traduire dans le site.',
  },
  {
    question: 'Je peux étaler le paiement du développement ?',
    answer:
      'On peut découper par jalons facturés (cadrage, design, développement, mise en ligne). On en parle franchement au devis pour que ce soit tenable des deux côtés.',
  },
] as const;

export const SITE_ECOMMERCE_BUDGET = {
  title: 'Budget',
  line: 'Les projets e-commerce démarrent à partir de 4 500 €',
  note: 'Chaque boutique est différente : le devis est gratuit, personnalisé, et sans engagement.',
} as const;

export const SITE_ECOMMERCE_FINAL_CTA = {
  title: 'Prêt à vendre en ligne sans friction inutile ?',
  primaryHref: '/devis?projectType=ecommerce',
  primaryLabel: 'Demander un devis e-commerce',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;

/** Slugs réalisations à afficher en priorité quand présents dans Sanity. */
export const SITE_ECOMMERCE_CASE_PRIORITY_SLUGS = ['greenweez', 'the-french-maisons'] as const;
