/** Pilier premium `/seo` — ton grand public, exemples de situation. */

export const SEO_PILLAR_PATH = '/seo';

export const SEO_PILLAR_HERO = {
  chapter: 'Chapitre 04 · Référencement',
  subline: 'Développeur freelance — Je conçois & j’implémente',
  h1: 'SEO : être trouvé sur Google sans se noyer dans le jargon',
  lead:
    'Que vous vendiez des gâteaux, des conseils juridiques ou des abonnements logiciels, le principe reste le même : des pages qui répondent à une vraie question, un site qui s’ouvre vite, et les formulations que vos clients tapent déjà dans la barre de recherche. Je ne vends pas de “pack miracle” : je priorise ce qui a du sens pour votre activité, je code les correctifs quand il le faut, et je vous explique pourquoi — sans promettre la première place comme si c’était un diplôme.',
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
      body:
        'On commence par votre terrain : qui appelle, qui commande, quelle saison est critique. Ensuite seulement on aligne titres, maillage interne et performance. Exemple réel : un salon qui veut remplir le mardi après-midi — ce n’est pas la même stratégie qu’une boutique nationale qui vit des soldes.',
    },
    {
      title: 'Technique + contenu, sans faux débat',
      body:
        'Un texte soigné sur un site qui met six secondes à afficher la page d’accueil, ou des pages en double par milliers, ne tiendra jamais la route. Quand c’est pertinent, je corrige le gabarit, le cache, les redirections ; quand c’est le contenu qui manque de clarté, on travaille les intentions de recherche et la structure des pages.',
    },
    {
      title: 'Des exemples qui ressemblent à votre quotidien',
      body:
        'Boutique qui a perdu ses positions après une refonte “jolie mais bancale”, artisan introuvable hors Google Maps, blog alimenté trois ans durant sans un seul clic utile, e-commerce où chaque filtre crée une URL fantôme… Ce sont des situations que l’on peut débloquer étape par étape.',
    },
    {
      title: 'Une mesure qui sert à décider',
      body:
        'Search Console pour voir ce que Google montre déjà, quelques pages vitales, et chez vous : appels, devis, prises de rendez-vous. Pas besoin d’un tableau de bord de vingt courbes si trois indicateurs suffisent à piloter.',
    },
  ],
} as const;

export const SEO_PILLAR_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Le référencement, c’est de la patience… mais pas de l’attente passive',
} as const;

export const SEO_PILLAR_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'À qui s’adresse cette partie du site',
  subtitle:
    'Indépendants, associations, PME, structures en croissance : si Google est une porte d’entrée pour vous, on peut en parler simplement.',
  cards: [
    {
      title: 'Vous ouvrez ou relancez une activité',
      body:
        'Nouveau site ou ancien domaine poussiéreux : autant poser des bases propres (titres, vitesse, structure) avant de payer des campagnes ou des articles de blog qui ne seront jamais lus.',
    },
    {
      title: 'Vous refondez dans les six prochains mois',
      body:
        'Changement de CMS, nouveau design, fusion avec un autre site : c’est souvent là que le trafic chute si personne n’a préparé les redirections et la hiérarchie. Mieux vaut anticiper que rattraper trois mois de courbe rouge.',
    },
    {
      title: 'Vous vendez en ligne',
      body:
        'Catalogue, variantes, filtres, pages marque : le SEO e-commerce est à la fois rangement et rédaction. L’objectif est que chaque URL utile travaille pour vous, pas qu’on noie Google de pages vides.',
    },
    {
      title: 'Votre chiffre d’affaires dépend du “près de chez moi”',
      body:
        'Artisan, cabinet avec plusieurs bureaux, commerce de proximité : la fiche Google Business Profile et le site doivent raconter la même histoire (horaires, zone, services). Sinon les appels partent chez le voisin.',
    },
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
    {
      n: '01',
      title: 'Échange',
      body:
        'Quinze à trente minutes pour comprendre ce que vous vendez, où, à qui, et ce qui vous préoccupe sur Google (baisse de trafic, refonte imminente, concurrence agressive). Pas de questionnaire interminable : on reste concret.',
    },
    {
      n: '02',
      title: 'Diagnostic',
      body:
        'Audit complet ou crawl ciblé selon l’urgence et le budget. Je croise ce que dit votre Search Console avec ce que je vois sur le site : parfois la moitié des “problèmes SEO” vient de trois réglages techniques.',
    },
    {
      n: '03',
      title: 'Plan d’actions',
      body:
        'Une liste priorisée : impact probable × effort. Vous savez quoi faire en premier, quoi reporter, et ce que vous pouvez traiter en interne si vous avez la main sur le CMS.',
    },
    {
      n: '04',
      title: 'Réalisation',
      body:
        'Je corrige le technique quand c’est mon périmètre, ou je rédige / structure le contenu avec vous. On évite les grands discours : chaque point doit être vérifiable (avant/après, URL, capture).',
    },
  ],
} as const;

export const SEO_PILLAR_STACK = {
  kicker: 'Outils & sujets',
  title: 'Ce que je manipule souvent',
  body:
    'Google Search Console, données structurées quand elles apportent quelque chose au visiteur, Core Web Vitals et optimisations front, WordPress / Shopify / Next.js selon votre stack. Le fil conducteur : ce qui est utile à l’internaute et défendable face à Google — pas la mode du mois.',
  labels: ['Search Console', 'Performance', 'WordPress', 'Shopify', 'Contenu', 'Local'],
} as const;

export const SEO_PILLAR_CASES = {
  kicker: 'Portfolio',
  title: 'Sites & boutiques déjà accompagnés',
  intro:
    'Voici des projets où le référencement n’était pas une case à cocher en fin de ligne : perf, structure, contenu ou migration ont été pensés avec le même objectif — que le site serve votre activité, pas l’inverse.',
} as const;

export const SEO_PILLAR_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — SEO',
  subtitle: 'Délais, garanties, prix.',
} as const;

export const SEO_PILLAR_FAQ_ITEMS = [
  {
    question: 'Garantissez-vous la première position ?',
    answer:
      'Non, et méfiez-vous de celui qui le fait. Je travaille sur la probabilité d’être visible pour des requêtes qui rapportent : pages claires, site sain, signaux de confiance. La première ligne sur un mot générique et concurrentiel ne se “commande” pas comme une pizza.',
  },
  {
    question: 'C’est long avant de voir un effet ?',
    answer:
      'Les correctifs techniques (vitesse, indexation propre, erreurs évidentes) peuvent se refléter en quelques semaines. Le renforcement par le contenu et la notoriété prend souvent plusieurs mois — surtout si le secteur est dense. L’important est de savoir quoi mesurer entre-temps.',
  },
  {
    question: 'Je n’y connais rien au SEO : est-ce gênant ?',
    answer:
      'Au contraire : je préfère qu’on parte de vos vrais mots (“on veut plus d’appels le samedi”, “on vend sur toute la Bretagne”) plutôt que de jargon. Mon rôle est de traduire en actions web, pas de vous faire passer un examen.',
  },
  {
    question: 'Quel budget prévoir pour démarrer ?',
    answer:
      'Un audit complet et actionnable commence souvent vers 990 € pour un site vitrine classique. Les missions d’implémentation technique ou de rédaction se chiffrent à part, selon le volume de pages et le CMS.',
  },
  {
    question: 'Et l’IA, ChatGPT, le GEO ?',
    answer:
      'C’est un sujet à part : la page GEO détaille comment rendre votre activité facile à résumer pour un assistant, sans mentir sur ce que vous faites. Ça complète le SEO Google classique plutôt que de le remplacer.',
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
