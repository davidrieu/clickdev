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
      'De la vitrine simple à la marketplace complexe, je conçois des sites rapides, beaux, et qui transforment vos visiteurs en clients.',
    tags: ['Next.js', 'WordPress', 'Shopify', 'WooCommerce', 'Astro'],
    href: '/sites-internet',
  },
  {
    number: '02',
    title: 'Applications mobiles',
    description:
      "Une idée d'app iOS ou Android ? Je m'occupe de tout, du premier croquis jusqu'à la mise en ligne sur les stores.",
    tags: ['React Native', 'Swift', 'Kotlin', 'PWA'],
    href: '/applications-mobiles',
  },
  {
    number: '03',
    title: 'SEO & GEO',
    description:
      'Être trouvé sur Google, c’est bien. Être recommandé par ChatGPT et Claude, c’est encore mieux. Je m’occupe des deux.',
    tags: ['SEO technique', 'GEO', 'Audit', 'Netlinking', 'Rédaction'],
    href: '/seo',
  },
  {
    number: '04',
    title: 'IA & automatisation',
    description:
      'Chatbots intelligents, agents qui bossent pour vous, tâches automatisées… L’IA au service de votre quotidien, pas l’inverse.',
    tags: ['OpenAI', 'Claude', 'LangChain', 'RAG', 'n8n'],
    href: '/ia',
  },
  {
    number: '05',
    title: 'CRM & outils métiers',
    description:
      'Votre activité a des besoins uniques ? Je développe l’outil sur mesure qui va vraiment vous simplifier la vie.',
    tags: ['Node.js', 'Laravel', 'PostgreSQL', 'Make'],
    href: '/crm-outils-metiers',
  },
  {
    number: '06',
    title: 'Maintenance & TMA',
    description:
      'Votre site existe déjà ? Je le fais évoluer, je corrige les bugs et je garde tout à jour pendant que vous vous concentrez sur votre business.',
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
    title: 'Premier échange',
    description:
      'On discute 30 minutes au téléphone ou en visio. Je comprends votre besoin, vous comprenez comment je bosse. Sans engagement.',
  },
  {
    title: 'Design UX/UI',
    description:
      'Je conçois les maquettes sur Figma. Vous validez, on ajuste. Rien ne se code avant que vous soyez à 100 % à l’aise avec le visuel.',
  },
  {
    title: 'Développement',
    description:
      'Je code votre projet avec des démos chaque semaine. Vous suivez l’avancement en live, sans surprise.',
  },
  {
    title: 'Tests & optimisation',
    description:
      'Je teste tout : vitesse, SEO, accessibilité, sécurité. On ajuste jusqu’à ce que tout soit impeccable.',
  },
  {
    title: 'Mise en ligne',
    description:
      'Votre projet part en production. Je vous forme, je reste disponible, et on peut continuer à le faire évoluer ensemble.',
  },
];

export type HomeFaqItem = { question: string; answer: string };

export const HOME_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: 'Vous travaillez aussi avec les petites structures ?',
    answer:
      'Oui, et avec les grandes aussi. TPE, PME, associations, startups, grands comptes : ce qui compte pour moi, c’est qu’on soit alignés sur l’objectif et le budget. Je n’ai pas de projet « trop petit » si on peut avancer sereinement.',
  },
  {
    question: 'Combien ça coûte, un site web ?',
    answer:
      'Ça dépend de ce que vous voulez faire : une vitrine simple, un site avec réservations, une boutique… En général, mes projets démarrent souvent entre 2 000 € et 5 000 € pour un périmètre bien cadré, et la facture monte quand le besoin grossit. Écrivez-moi : je vous donne une fourchette honnête, sans engagement.',
  },
  {
    question: 'Combien de temps ça prend ?',
    answer:
      'De quelques semaines pour un site bien cadré, à plusieurs mois pour une plateforme plus costaud. Je vous propose un planning avec des jalons clairs dès le départ, pour qu’il n’y ait pas de mauvaise surprise.',
  },
  {
    question: 'Je n’y connais rien en tech, c’est gênant ?',
    answer:
      'Pas du tout — et c’est même courant. Mon job, c’est aussi de traduire la technique en mots simples. Vous validez les maquettes, vous suivez les démos, et vous me posez toutes les questions que vous voulez.',
  },
  {
    question: 'Vous faites aussi la maintenance et le SEO après ?',
    answer:
      'Oui. Une fois en ligne, un site a besoin d’être mis à jour, sécurisé, parfois optimisé pour Google ou pour la vitesse. Je propose de la maintenance et du suivi, et on peut continuer le travail SEO dans la durée si vous le souhaitez.',
  },
  {
    question: 'Je pourrai gérer mon site tout seul après ?',
    answer:
      'Quand c’est pertinent, oui : je vous forme sur l’essentiel (texte, images, actus…). Pour les parties plus techniques, je reste dispo ou on prévoit de la maintenance. L’important, c’est que vous ne vous sentiez pas prisonnier du site.',
  },
  {
    question: 'Est-ce que je peux payer en plusieurs fois ?',
    answer:
      'Pour les projets un peu plus conséquents, on peut en parler au cas par cas et étaler les factures selon les jalons. Dites-moi ce qui vous aiderait : on trouve souvent un terrain d’entente.',
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
      'David a su parler notre langue à l’équipe marketing, pas seulement la tech. Le site livré est clair, et on peut le faire évoluer sans galère.',
    name: 'Claire V.',
    role: 'Responsable marketing — grand groupe retail',
  },
  {
    quote:
      'Enfin un interlocuteur qui dit les choses cash : budget, délais, ce qui est possible ou pas. Aujourd’hui notre boutique en ligne est plus rapide, et nos clients le sentent.',
    name: 'Marc D.',
    role: 'Dirigeant — PME commerce',
  },
  {
    quote:
      'Je ne connaissais rien au web. Il a tout expliqué patiemment, et aujourd’hui je mets à jour mes fiches produits toute seule.',
    name: 'Julie M.',
    role: 'Artisan d’art — boutique en ligne',
  },
  {
    quote:
      'Budget serré, projet un peu atypique pour une asso. Il a trouvé des solutions simples, et la doc pour la suite était claire pour nos bénévoles.',
    name: 'Thomas R.',
    role: 'Bénévole — association culturelle',
  },
];

/** Logos / noms affichés dans le bandeau confiance sous le hero. */
export const HOME_TRUST_MARQUEE_NAMES = [
  'Accor',
  'Greenweez',
  'Spreadshirt',
  'Made in France',
  'SIF Group',
  'The French Maisons',
  'Urbawise',
] as const;

export type HomeAudienceCard = {
  title: string;
  body: string;
  href: string;
  cta: string;
};

export const HOME_AUDIENCE_CARDS: HomeAudienceCard[] = [
  {
    title: 'Grandes marques & groupes',
    body: 'Projets à fort enjeu, exigence de performance. J’ai notamment bossé avec Accor, Greenweez et Spreadshirt.',
    href: '/realisations',
    cta: 'Voir des exemples',
  },
  {
    title: 'Startups & scale-ups',
    body: 'Vitesse d’exécution et expertise pointue. Du MVP au produit mature, j’accompagne la croissance.',
    href: '/sites-internet',
    cta: 'Découvrir mon approche',
  },
  {
    title: 'PME & TPE',
    body: 'Sortir d’un WordPress vieillissant, moderniser vos outils, gagner en visibilité. Sans vous perdre dans le jargon.',
    href: '/seo',
    cta: 'Parler de votre contexte',
  },
  {
    title: 'Artisans & indépendants',
    body: 'Votre projet compte autant que les autres. Un site pro, à votre image, à un prix qui reste raisonnable.',
    href: '/devis',
    cta: 'Demander une fourchette',
  },
];
