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
  python: 'Python',
  openai: 'OpenAI',
  'claude-api': 'Claude API',
  langchain: 'LangChain',
  n8n: 'n8n',
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
  id: string;
  quote: string;
};

/** Témoignages issus d’évaluations Codeur (identités non affichées). */
export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    id: 'codeur-presta-switch',
    quote: `David m'a littéralement sauvé la vie !

Après avoir travaillé 6 mois avec une dev peu compétente, j'ai dû me résoudre à changer de prestataire car mon site n'avançait pas. Cela a mis en péril mon projet.
J'ai fait appel à David, traumatisée par ma première expérience, il m'a rassuré et m'a accompagné sur le projet. Il m'a fait mon site en 2 semaines en respectant bien les templates de ma DA et en me faisant des suggestions pour améliorer l'UX.
En plus d'être rapide, il est super disponible et très pro. Et contrairement à d'autres devs, il s'occupe d'un client à la fois pour lui consacrer 100% de son temps.
Je le recommande vivement et ferai appel à lui les yeux fermés sur mes prochains projets.
Pour info, il a travaillé pour un site ecommerce sur Prestashop qui est maintenant clean et utilisable.
Merci encore David !`,
  },
  {
    id: 'codeur-ecoute',
    quote:
      "David est à l'écoute, compréhensif et sait contourner les difficultés. Excellente communication, disponible. Je recommande",
  },
  {
    id: 'codeur-creativite',
    quote:
      "Je suis très satisfait du travail réalisé par David qui a été force de proposition et a fait preuve de créativité. J'envisage de faire à nouveau appel à lui pour le référencement du site et le développement d'un deuxième site Internet.",
  },
  {
    id: 'codeur-rapide-comm',
    quote: 'Merci David ! Travail rapide, soigné, et excellente communication.',
  },
  {
    id: 'codeur-besoin',
    quote: 'David a répondu au besoin souhaité sans soucis',
  },
  {
    id: 'codeur-restart',
    quote: `Après une mauvaise expérience avec une équipe de dev, j'ai échangé avec David pour reprendre le peu déjà fait et terminer.
Comprenant parfaitement mes enjeux et mon projet, David m'a conseillé de repartir de zéro en m'expliquant pourquoi, notamment pour les prochaines évolutions souhaitées. Tout au long du projet, il m'a fait des suggestions très pertinentes.
En 2 semaines, j'ai un site opérationnel, je suis formée et peux modifier une grande partie des éléments à ma guise.
Le tout en respectant mon budget et en étant toujours dispo ! Merci !`,
  },
  {
    id: 'codeur-precision',
    quote: `David a su donner vie au projet que j'avais en tête avec une grande précision. Il a été disponible tout au long de la création du site et n'a pas hésité à échanger fréquemment pour s'assurer que chaque étape avançait dans la bonne direction. Grâce à son expertise, la création du site a été rapide et efficace, et le tarif proposé est très compétitif. Je recommande vivement ses services pour tout projet de création de site internet.`,
  },
  {
    id: 'codeur-pro',
    quote: `David a pris en charge le développement de mon site internet avec un niveau de professionnalisme et d'attention aux détails exceptionnel. Il possède une expertise approfondie dans son domaine et a su répondre à mes besoins, en étant toujours à l'écoute et disponible pour ajuster et améliorer le projet. David m'a également guidé vers les meilleures technologies et solutions adaptées à ma situation, ce qui a considérablement optimisé la performance de mon site. Son approche proactive et son engagement à fournir un travail de qualité m'ont pleinement satisfait. Je retravaillerais avec plaisir.`,
  },
  {
    id: 'codeur-recomm',
    quote: `Je recommande David les yeux fermés à n'importe quel entrepreneur ou personne qui souhaite avoir un site web propre, efficace, simple à utiliser. Après de nombreuses difficultés à trouver quelqu'un de compétent et professionnel, nous avons (enfin !) rencontré David ! Tout de suite il nous a mis à l'aise, chose qui n'était pas facile après nos deux dernières expériences avec des dev freelances... Il a été très à l'écoute de nos demandes et nous faisait de super propositions pour optimiser notre site. En bref, c'est une personne très agréable que je recommande vivement !`,
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
