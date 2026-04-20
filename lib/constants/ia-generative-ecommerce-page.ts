/** Contenus page premium `/ia/ia-generative-ecommerce` — ton accessible. */

export const IA_GENERATIVE_ECOMMERCE_PATH = '/ia/ia-generative-ecommerce';

export const IA_GENERATIVE_ECOMMERCE_KEYWORDS = [
  'IA boutique en ligne',
  'aide rédaction fiches produit',
  'assistant e-commerce',
  'freelance IA Shopify WooCommerce',
  'contenu boutique IA',
] as const;

export const iaGenerativeEcommerceMetaDescription =
  'IA pour votre boutique en ligne : brouillons de fiches produit, aide au support, recherche plus parlante — toujours sous votre contrôle, sans promesses inventées. Clickdev.';

export const iaGenerativeEcommerceMetaTitle = 'IA pour e-commerce — Fiches & support | Clickdev';

export const IA_GENERATIVE_ECOMMERCE_HERO = {
  chapter: 'Chapitre 03.6 · Boutique en ligne',
  subline: 'Développeur freelance — Vente en ligne',
  h1: 'L’IA pour avancer sur votre catalogue — sans dire n’importe quoi',
  lead:
    'Rédiger des fiches plus vite, aider le support avec des brouillons basés sur votre politique de retour, proposer une recherche plus “en langage courant” : oui, si on encadre les sorties. Pas de promesses légales ou techniques inventées, pas de prix ou de stock “devinés” : votre boutique reste la référence pour l’essentiel.',
  primaryCta: { href: '/devis?projectType=ecommerce', label: 'Demander un devis' },
  secondaryCta: { href: `${IA_GENERATIVE_ECOMMERCE_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const IA_GENERATIVE_ECOMMERCE_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Du contenu plus vite — sans casser la confiance',
  subtitle: 'Modèles de texte, relecture sur le sensible, et référencement sous contrôle.',
  items: [
    {
      title: 'Fiches structurées',
      body: 'Champs obligatoires, ton de marque, longueurs : l’outil remplit le cadre que vous imposez.',
    },
    {
      title: 'Relecture humaine ciblée',
      body: 'Santé, légal, fiches techniques : ce qui doit passer par une personne passe.',
    },
    {
      title: 'SEO : pas de doublons sauvages',
      body: 'Pages canoniques, indexation réfléchie : on évite la multiplication de pages vides.',
    },
    {
      title: 'Tests et retour arrière',
      body: 'On peut tester une fonction visible par les clients et revenir en arrière si les chiffres baissent.',
    },
  ],
} as const;

export const IA_GENERATIVE_ECOMMERCE_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Fiches produit et IA : le vrai risque est juridique autant que le référencement',
} as const;

export const IA_GENERATIVE_ECOMMERCE_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Commerçants et équipes marketing sous pression “contenu”.',
  cards: [
    { title: 'Gros catalogues', body: 'Brouillons de fiches, enrichissement, aide à la traduction avec glossaire.' },
    { title: 'Marketplaces & plusieurs canaux', body: 'Cohérence des messages entre site, marketplaces et réseaux.' },
    { title: 'Support e-commerce', body: 'Brouillons alignés sur vos conditions de retour et garanties publiées.' },
    { title: 'Recherche “comme on parle”', body: 'Proposer des produits sans inventer la disponibilité en stock.' },
  ],
} as const;

export const IA_GENERATIVE_ECOMMERCE_COMPARE = {
  kicker: 'Décision',
  title: 'Texte 100 % IA, assisté, ou 100 % humain ?',
  subtitle: 'L’assistance gagne souvent : vitesse + humain sur le sensible.',
  columns: ['100 % IA', 'Assisté', '100 % humain'] as const,
  rows: [
    { label: 'Débit maximal', c: [true, true, false] as const },
    { label: 'Risque légal maîtrisé', c: [false, true, true] as const },
    { label: 'Référencement & doublons sous contrôle', c: [false, true, true] as const },
    { label: 'Coût rédaction bas', c: [true, true, false] as const },
    { label: 'Qualité premium garantie', c: [false, true, true] as const },
    { label: 'Mise en ligne rapide', c: [true, true, false] as const },
  ],
} as const;

export const IA_GENERATIVE_ECOMMERCE_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour gagner du temps sans déraper',
  steps: [
    { n: '01', title: 'Grille éditoriale', body: 'Champs, interdits, preuves obligatoires, catégories sensibles.' },
    { n: '02', title: 'Modèles & consignes', body: 'Structures stables pour limiter les dérives de ton ou de promesse.' },
    { n: '03', title: 'Circuit de validation', body: 'Qui relit quoi selon la catégorie ou un score de confiance.' },
    { n: '04', title: 'Publication & SEO', body: 'Adresses web, pages canoniques, indexation maîtrisée.' },
    { n: '05', title: 'Mesure', body: 'Temps gagné, incidents qualité, tests A/B si pertinent : on itère.' },
  ],
} as const;

export const IA_GENERATIVE_ECOMMERCE_STACK = {
  kicker: 'Technologies',
  title: 'Boutique, contenu, catalogue',
  body:
    'Shopify, WooCommerce, ou site sur mesure avec catalogue en ligne ; l’IA passe par des API. Prix et stock viennent toujours de votre système — jamais “inventés” par le modèle.',
  labels: ['Shopify', 'WooCommerce', 'Next.js', 'OpenAI', 'Sanity', 'Analytics'],
} as const;

export const IA_GENERATIVE_ECOMMERCE_CASES = {
  kicker: 'Portfolio',
  title: 'E-commerce, marketplaces et sites orientés conversion',
  intro: 'Réalisations récentes — contexte e-commerce et web.',
} as const;

export const IA_GENERATIVE_ECOMMERCE_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — IA & boutique en ligne',
  subtitle: 'Référencement, données clients, conformité.',
} as const;

export const IA_GENERATIVE_ECOMMERCE_FAQ_ITEMS = [
  {
    question: 'Les données clients partent vers l’IA ?',
    answer:
      'À éviter par défaut : anonymisation, traitement côté serveur, et contrats adaptés au RGPD avec le fournisseur.',
  },
  {
    question: 'Risque de contenu dupliqué pour Google ?',
    answer:
      'On contrôle l’indexation, les pages canoniques et ce qui est publié ; pas de multiplication de pages pauvres sans intention.',
  },
  {
    question: 'Combien coûte un dispositif ?',
    answer:
      'Souvent à partir de 4 200 € pour un premier module (ex. brouillons de fiches + circuit de validation). Ensuite le budget suit les modèles de page, les langues et les connexions catalogue. Devis gratuit.',
  },
  {
    question: 'Shopify ou sur mesure ?',
    answer:
      'Les deux : l’important est où vivent prix et stock, et comment on publie sans casser votre thème ou votre site.',
  },
  {
    question: 'Traductions ?',
    answer:
      'Assistées avec glossaire et relecture sur les pages clés ; pas de traduction aveugle sur les mentions légales.',
  },
  {
    question: 'Recherche sur le catalogue ?',
    answer:
      'On peut combiner recherche classique et compréhension du langage naturel ; coût et rapidité cadrés selon le trafic.',
  },
  {
    question: 'Lien avec le SEO classique ?',
    answer:
      'Oui : le silo SEO et vos gabarits produit restent le cadre ; l’IA accélère sans remplacer la stratégie.',
  },
] as const;

export const IA_GENERATIVE_ECOMMERCE_BUDGET = {
  title: 'Budget',
  line: 'Les dispositifs IA e-commerce (premier module + validation) démarrent souvent à partir de 4 200 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const IA_GENERATIVE_ECOMMERCE_FINAL_CTA = {
  title: 'Un catalogue à enrichir sans sacrifier la qualité ni le référencement ?',
  primaryHref: '/devis?projectType=ecommerce',
  primaryLabel: 'Demander un devis e-commerce + IA',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
