/** Contenu dédié page pilier premium /sites-internet (copy + FAQ SEO). */

export const SITES_INTERNET_MARQUEE_CLIENTS = [
  'Accor',
  'Greenweez',
  'Spreadshirt',
  'The French Maisons',
  'Urbawise',
  'Made in France',
  'SIF Group',
  'Crack It',
  'Musée Up',
  'Mayami Production',
] as const;

export const SITES_INTERNET_STACK = [
  'Next.js',
  'React',
  'TypeScript',
  'WordPress',
  'Shopify',
  'WooCommerce',
  'Astro',
  'Sanity',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Vercel',
] as const;

export const SITES_INTERNET_BUDGET_FAQ = [
  {
    question: 'Combien coûte un site vitrine pro ?',
    answer:
      'Fourchette indicative selon cadrage : un vitrine sur mesure sérieux (design intégré, perf, SEO technique, CMS) démarre souvent dans une fourchette mid–haut de milliers d’euros. Un POC plus léger peut être moins ; un vitrine + automations + intégrations monte. Un devis cadré après un court échange évite les mauvaises surprises.',
  },
  {
    question: 'Combien coûte un e-commerce ?',
    answer:
      'Un e-commerce dépend du catalogue, des moyens de paiement, des règles promo, du SEO catalogue et des pics de charge. Shopify ou WooCommerce accélère certaines parties ; du sur-mesure ajoute du temps mais gagne en contrôle. On dimensionne par jalons (MVP puis extensions).',
  },
  {
    question: 'Quel est le délai moyen ?',
    answer:
      'Vitrine cadré : souvent quelques semaines à quelques mois selon contenus et validations. E-commerce ou refonte critique : plutôt plusieurs mois avec phases testables. Je préfère annoncer large et livrer serré que l’inverse.',
  },
  {
    question: 'Puis-je payer en plusieurs fois ?',
    answer:
      'Oui selon le montant et l’échéancier : jalons facturés (cadrage, design validé, mise en ligne, etc.). On formalise dans le devis.',
  },
  {
    question: 'Est-ce que vous accompagnez les petites structures ?',
    answer:
      'Oui, tant que le projet est réaliste et que quelqu’un peut trancher vite. La TPE a souvent besoin d’un site simple mais irréprochable sur mobile et SEO local — c’est un excellent investissement.',
  },
] as const;

export const SITES_INTERNET_TECH_FAQ = [
  {
    question: 'WordPress ou Next.js pour mon projet ?',
    answer:
      'WordPress si l’équipe veut une autonomie maximale sur les contenus et un écosystème connu. Next.js si vous visez perf extrême, e-commerce headless, expériences très interactives, ou intégration dans un produit plus large. La réponse dépend de vos compétences internes et de votre horizon 18–36 mois.',
  },
  {
    question: 'Peut-on refondre sans tout couper d’un coup ?',
    answer:
      'Oui : routes migrées par lots, feature flags, préproduction réaliste, redirections 301 propres. La stratégie dépend du trafic, de la stack et de la tolérance au risque SEO.',
  },
  {
    question: 'Vous reprenez un site déjà en ligne ?',
    answer:
      'Oui : audit UX + technique, quick wins, puis roadmap. On peut commencer par sécurité et performance si c’est urgent, puis refonte ciblée.',
  },
  {
    question: 'Comment sont gérées les performances (Core Web Vitals) ?',
    answer:
      'Mesures tôt sur mobile réel, images modernes, JS raisonnable, polices maîtrisées, cache cohérent. Les objectifs sont fixés en amont et suivis sur préprod puis prod.',
  },
  {
    question: 'Quid du SEO technique lors d’une refonte ?',
    answer:
      'Plan de redirections, canonical, données structurées utiles, maillage interne, duplication évitée, internationalisation si besoin. Pas de “refonte silencieuse” sans contrôle Search Console.',
  },
  {
    question: 'Marketplace et simple vitrine : même ampleur ?',
    answer:
      'Non : la marketplace ajoute identités multiples, paiements, modération, SEO multi-offre et charge. C’est un autre périmètre ; on le traite dans une feuille de route dédiée.',
  },
  {
    question: 'Comment sécuriser les formulaires et données perso ?',
    answer:
      'Validation serveur, anti-spam adapté, messages d’erreur clairs, HTTPS partout, bonnes pratiques cookies/consentement selon votre contexte. Pour du sensible, on cadrera avec vos référents.',
  },
  {
    question: 'Proposez-vous de la maintenance après livraison ?',
    answer:
      'Oui en TMA ou au ticket : mises à jour, correctifs, petites évolutions. L’objectif est que vous ne repartiez pas de zéro avec un inconnu qui découvre le code au hasard.',
  },
  {
    question: 'Travaillez-vous avec des designers ou agences ?',
    answer:
      'Oui : intégration à partir de Figma, collaboration sur le design system, ou recommandation de partenaires si vous n’avez pas encore de maquettes.',
  },
  {
    question: 'Comment démarrer concrètement ?',
    answer:
      'Un message avec contexte, contraintes, et idée de budget ou délai — même approximatif. Je réponds avec des options ou une proposition d’atelier court.',
  },
] as const;

export const SITES_INTERNET_TESTIMONIALS = [
  {
    quote:
      'On est passés d’un tunnel lourd à une expérience fluide : le chiffre d’affaires a suivi, mais surtout les équipes respirent enfin côté support.',
    author: 'Direction e-commerce',
    company: 'Retail — grande surface web',
  },
  {
    quote:
      'Ce qui m’a marqué : zéro jargon inutile, des arbitrages clairs, et une prod qui tient quand les campagnes médias envoient du monde.',
    author: 'CMO',
    company: 'Marque consumer',
  },
  {
    quote:
      'Le site n’est plus la “honte” du comité : il devient un argument commercial. La perf mobile était le vrai sujet — il est réglé.',
    author: 'Directeur général',
    company: 'PME industrielle',
  },
] as const;

export const SITES_INTERNET_COMPARE_ROWS = [
  { label: 'Performance (CWV)' },
  { label: 'SEO technique' },
  { label: 'Sécurité & mises à jour' },
  { label: 'Évolutivité forte' },
  { label: 'Coût long terme' },
  { label: 'Personnalisation poussée' },
  { label: 'Maintenance autonome' },
] as const;

/** true = avantage marqué pour la colonne. */
export const SITES_INTERNET_COMPARE_MATRIX: { wp: boolean; custom: boolean }[] = [
  { wp: false, custom: true },
  { wp: true, custom: true },
  { wp: true, custom: true },
  { wp: false, custom: true },
  { wp: true, custom: false },
  { wp: false, custom: true },
  { wp: true, custom: false },
];

export const SITES_INTERNET_CASES = [
  {
    title: 'Greenweez',
    category: 'E-commerce',
    description:
      'Refonte du tunnel de conversion — performance, UX et industrialisation pour un pic de trafic soutenu.',
    href: '/realisations',
    metrics: [
      { value: '+34%', label: 'conversion' },
      { value: '0,9s', label: 'chargement' },
      { value: '100', label: 'Lighthouse' },
    ],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=800&q=75',
  },
  {
    title: 'The French Maisons',
    category: 'E-commerce luxe',
    description:
      'Expérience digitale haut de gamme : rythme éditorial, pages produit exigeantes et exigence forte sur la qualité perçue.',
    href: '/realisations',
    metrics: [
      { value: '−42%', label: 'rebond' },
      { value: 'AA', label: 'accessibilité visée' },
      { value: '12', label: 'pays' },
    ],
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=800&q=75',
  },
  {
    title: 'Urbawise',
    category: 'Plateforme web',
    description:
      'Produit web avec enjeux de clarté et de montée en charge : parcours utilisateurs, SEO et stabilité sur la durée.',
    href: '/realisations',
    metrics: [
      { value: '99,9%', label: 'disponibilité' },
      { value: '−35%', label: 'temps tâche' },
      { value: '24/7', label: 'usage' },
    ],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=800&q=75',
  },
] as const;

export function sitesInternetFaqJsonLdItems() {
  return [...SITES_INTERNET_BUDGET_FAQ, ...SITES_INTERNET_TECH_FAQ];
}
