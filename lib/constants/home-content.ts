import { EXPERTISE_SLUGS, type ExpertiseSlug } from '@/lib/constants/sitemap';

export type HomeServiceCard = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const HOME_SERVICE_CARDS: HomeServiceCard[] = [
  {
    number: '01',
    title: 'Sites internet',
    description:
      'Sites vitrines, e-commerce, marketplaces et sites de mise en relation — performants et orientés conversion.',
    tags: ['Next.js', 'WordPress', 'Shopify', 'WooCommerce', 'Astro'],
    href: '/sites-internet',
  },
  {
    number: '02',
    title: 'Applications mobiles',
    description: 'Apps iOS et Android natives ou cross-platform, de l’idée au store.',
    tags: ['React Native', 'Swift', 'Kotlin', 'PWA'],
    href: '/applications-mobiles',
  },
  {
    number: '03',
    title: 'IA',
    description:
      'Intégration d’IA dans vos produits : chatbots, agents, automatisation, recherche sémantique.',
    tags: ['OpenAI', 'Claude', 'LangChain', 'RAG', 'n8n'],
    href: '/ia',
  },
  {
    number: '04',
    title: 'SEO & GEO',
    description:
      'Référencement Google et optimisation pour les IA (ChatGPT, Claude, Perplexity, Google AI Overviews).',
    tags: ['SEO technique', 'GEO', 'Audit', 'Netlinking', 'Rédaction'],
    href: '/seo',
  },
  {
    number: '05',
    title: 'CRM & outils métiers',
    description: 'CRM sur mesure, intranets, extranets et automatisations internes.',
    tags: ['Node.js', 'Laravel', 'PostgreSQL', 'Make'],
    href: '/crm-outils-metiers',
  },
  {
    number: '06',
    title: 'Maintenance & TMA',
    description: 'Infogérance, corrections, mises à jour de sécurité et évolutions.',
    tags: ['Audit', 'Sécurité', 'Support', 'Évolutions'],
    href: '/maintenance',
  },
];

export type HomeCasePreview = {
  title: string;
  category: string;
  description: string;
  metrics: { value: string; label: string }[];
  href: string;
};

export const HOME_CASE_PREVIEWS: HomeCasePreview[] = [
  {
    title: 'Greenweez',
    category: 'E-commerce',
    description:
      'Refonte du tunnel de conversion pour le leader e-commerce bio en Europe — performance, UX et industrialisation.',
    metrics: [
      { value: '+34%', label: 'conversion' },
      { value: '0,9s', label: 'chargement' },
      { value: '100', label: 'Lighthouse' },
      { value: '−52%', label: 'rebond' },
    ],
    href: '/realisations',
  },
  {
    title: 'Accor All',
    category: 'Application mobile',
    description:
      'Contribution à une expérience mobile fluide pour un parc utilisateur international, avec exigence forte sur la perf.',
    metrics: [
      { value: '4,8★', label: 'App Store' },
      { value: '−38%', label: 'temps de chargement' },
      { value: '2M+', label: 'sessions / mois' },
      { value: '99,9%', label: 'disponibilité' },
    ],
    href: '/realisations',
  },
  {
    title: 'Spreadshirt',
    category: 'Marketplace',
    description:
      'Marketplace et configurateur à fort trafic : stabilité, SEO technique et évolutivité sur la durée.',
    metrics: [
      { value: '+18%', label: 'conversion config.' },
      { value: '1,1s', label: 'LCP' },
      { value: '50+', label: 'pays' },
      { value: '24/7', label: 'pics saisonniers' },
    ],
    href: '/realisations',
  },
];

const STACK_LABELS: Record<ExpertiseSlug, string> = {
  nextjs: 'Next.js',
  wordpress: 'WordPress',
  shopify: 'Shopify',
  woocommerce: 'WooCommerce',
  'react-native': 'React Native',
  laravel: 'Laravel',
  nodejs: 'Node.js',
  openai: 'OpenAI',
  'claude-api': 'Claude API',
  langchain: 'LangChain',
};

export type HomeStackItem = { name: string; slug: ExpertiseSlug };

export const HOME_STACK_ITEMS: HomeStackItem[] = EXPERTISE_SLUGS.map((slug) => ({
  slug,
  name: STACK_LABELS[slug],
}));

export type HomeProcessStep = { title: string; description: string };

export const HOME_PROCESS_STEPS: HomeProcessStep[] = [
  {
    title: 'Audit & cadrage',
    description:
      'Objectifs business, contraintes techniques, risques et priorités — pour un plan réaliste et mesurable.',
  },
  {
    title: 'Design UX-UI',
    description:
      'Parcours utilisateurs, wireframes et UI cohérente avec votre marque — sans surcouche inutile.',
  },
  {
    title: 'Développement',
    description:
      'Itérations courtes, code review, qualité et performances — livrables exploitables en continu.',
  },
  {
    title: 'Tests & optimisation',
    description:
      'Tests fonctionnels, accessibilité, SEO technique et Core Web Vitals avant mise en ligne.',
  },
  {
    title: 'Mise en ligne & suivi',
    description:
      'Déploiement sécurisé, monitoring, correctifs et évolutions — en mode partenaire sur la durée.',
  },
];

export type HomeFaqItem = { question: string; answer: string };

export const HOME_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: 'Quels types de projets acceptez-vous ?',
    answer:
      'Du site vitrine au projet complexe (e-commerce, marketplace, app, outil métier). Je travaille avec des TPE, PME, scale-ups et grands comptes — l’important est un cadrage clair et des objectifs réalistes.',
  },
  {
    question: 'Quel budget prévoir ?',
    answer:
      'Ça dépend du scope. Les demandes démarrent souvent entre 2k€ et 5k€ pour un périmètre réduit, et montent pour les plateformes ambitieuses. Le formulaire de devis aide à qualifier sans engagement.',
  },
  {
    question: 'Quels délais pour démarrer ?',
    answer:
      'Selon la charge et la complexité : de quelques semaines à plusieurs mois. Je propose un planning transparent dès le cadrage, avec jalons et livrables.',
  },
  {
    question: 'Travaillez-vous à distance ?',
    answer:
      'Oui, en France et à l’international. Les ateliers se font en visio ; je peux me déplacer ponctuellement si nécessaire.',
  },
  {
    question: 'Proposez-vous de la maintenance ?',
    answer:
      'Oui : infogérance, sécurité, mises à jour, évolutions et TMA. C’est souvent le meilleur moyen de garder un produit rapide et fiable dans le temps.',
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      'Principalement Next.js / React, WordPress, Shopify, Node.js, Laravel, React Native, et des intégrations IA (OpenAI, Claude, RAG, automatisations). Le choix dépend de vos contraintes, pas de la mode.',
  },
];

export type HomeTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    quote:
      'David a livré une refonte exigeante en respectant des délais serrés. La qualité du code et la communication ont fait la différence.',
    name: 'Sophie L.',
    role: 'CTO — scale-up SaaS',
  },
  {
    quote:
      'Enfin un freelance qui parle clair : périmètre, risques, options. Notre site e-commerce est plus rapide et mieux référencé.',
    name: 'Marc D.',
    role: 'Dirigeant — PME retail',
  },
  {
    quote:
      'Un accompagnement humain sur un projet “pas standard”. On sent l’expérience terrain, pas du blabla marketing.',
    name: 'Julie M.',
    role: 'Fondatrice — artisanat premium',
  },
  {
    quote:
      'Mission technique pointue, autonomie, et une doc utile pour l’équipe interne. Je recommande sans hésiter.',
    name: 'Thomas R.',
    role: 'Product manager — association',
  },
];
