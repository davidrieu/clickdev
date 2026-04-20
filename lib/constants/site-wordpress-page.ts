/** Contenus page premium `/sites-internet/site-wordpress` (brief pages filles). */

export const SITE_WORDPRESS_PATH = '/sites-internet/site-wordpress';

export const SITE_WORDPRESS_KEYWORDS = [
  'développeur WordPress freelance',
  'création site WordPress',
  'WordPress sur mesure',
  'refonte site WordPress',
  'WordPress headless',
] as const;

export const siteWordpressMetaDescription =
  'Création, refonte et optimisation de sites WordPress par un développeur freelance. WordPress bien fait : rapide, sécurisé, évolutif. Dès 1 900 €.';

export const siteWordpressMetaTitle = 'Développeur WordPress freelance — Sur mesure | Clickdev';

export const SITE_WORDPRESS_HERO = {
  chapter: 'Chapitre 01.6 · WordPress',
  subline: 'Développeur freelance — WordPress sans compromis',
  h1: 'Développeur WordPress freelance',
  lead:
    'WordPress bien fait, c’est rapide, sécurisé et évolutif. J’interviens sur création, refonte, optimisation et maintenance, sans les pièges habituels : thèmes lourds, plugins bancals, sites ingérables deux ans après la livraison.',
  primaryCta: { href: '/devis?projectType=site', label: 'Demander un devis' },
  secondaryCta: { href: `${SITE_WORDPRESS_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const SITE_WORDPRESS_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Un WordPress dont vous n’avez pas honte en production',
  subtitle: 'Moins de gadgets, plus de perf, une admin que vos équipes osent ouvrir.',
  items: [
    {
      title: 'Un WordPress rapide, vraiment',
      body: 'Pas de thème gonflé ni de dépendances inutiles. Objectif : scores Lighthouse sérieux et ressenti mobile nickel.',
    },
    {
      title: 'Un site sécurisé dès le départ',
      body: 'Durcissement, mises à jour, sauvegardes, pare-feu applicatif : les bases pour dormir un peu mieux.',
    },
    {
      title: 'Une interface simple pour vous',
      body: 'Blocs et champs clairs : vous publiez sans craindre de casser la mise en page à chaque paragraphe.',
    },
    {
      title: 'Un code qui tient dans le temps',
      body: 'Thème maison ou sur mesure léger, plugins minimalistes, doc courte : maintenable par un humain, pas par trois plugins mystiques.',
    },
  ],
} as const;

export const SITE_WORDPRESS_EDITORIAL = {
  kicker: 'Lecture',
  title: 'WordPress en 2026 : mythes et réalités',
} as const;

export const SITE_WORDPRESS_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Du site éditorial à la refonte d’urgence.',
  cards: [
    {
      title: 'PME qui veulent gérer leur contenu',
      body: 'WordPress reste pertinent quand vous publiez souvent et voulez l’autonomie sans passer par un dev à chaque article.',
    },
    {
      title: 'Sites éditoriaux et blogs',
      body: 'L’écosystème éditorial et SEO reste difficile à battre pour du contenu long et structuré.',
    },
    {
      title: 'Projets à budget maîtrisé',
      body: 'Un vrai site pro sans exploser l’enveloppe — à condition de ne pas empiler quinze plugins “miracle”.',
    },
    {
      title: 'Sites existants à sauver',
      body: 'Refonte perf, sécurité, ou migration propre : on repart sur des bases saines plutôt que sur des rustines.',
    },
  ],
} as const;

export const SITE_WORDPRESS_COMPARE = {
  kicker: 'Décision',
  title: 'Thème tout-en-un, WordPress cadré, ou Next.js ?',
  subtitle:
    'Le bon choix dépend de votre rythme éditorial, de votre équipe, et du niveau de contrôle produit que vous voulez.',
  columns: ['Thème “tout-en-un”', 'WordPress cadré', 'Next.js / headless'] as const,
  rows: [
    { label: 'Mise en ligne très rapide sur un standard', c: [true, true, false] as const },
    { label: 'Autonomie rédactionnelle forte', c: [true, true, false] as const },
    { label: 'Perf & UX très poussées', c: [false, true, true] as const },
    { label: 'Sécurité & dette technique maîtrisées', c: [false, true, true] as const },
    { label: 'Produit logiciel & intégrations lourdes', c: [false, false, true] as const },
    { label: 'Budget initial souvent plus accessible', c: [true, true, false] as const },
  ],
} as const;

export const SITE_WORDPRESS_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour un WordPress propre',
  steps: [
    {
      n: '01',
      title: 'Audit ou cadrage',
      body: 'Existant ou vert : objectifs, contenus, perf, risques sécurité. On tranche ce qui reste et ce qui part.',
    },
    {
      n: '02',
      title: 'Architecture & contenus',
      body: 'Types de pages, champs (ACF), rôles éditoriaux, SEO de base : une ossature claire avant le thème.',
    },
    {
      n: '03',
      title: 'Thème sur mesure & intégration',
      body: 'Thème léger, composants réutilisables, images modernes : le front ne ressemble pas à “encore un template”.',
    },
    {
      n: '04',
      title: 'Durcissement & perf',
      body: 'Cache, minification raisonnable, pare-feu, sauvegardes, mises à jour : on évite la surprise du dimanche soir.',
    },
    {
      n: '05',
      title: 'Mise en ligne & transmission',
      body: 'Checklist go-live, petit guide éditeur, et plan maintenance — voir aussi /maintenance/maintenance-wordpress.',
    },
  ],
} as const;

export const SITE_WORDPRESS_STACK = {
  kicker: 'Stack',
  title: 'L’écosystème WordPress — utilisé avec parcimonie',
  body:
    'Le cœur WordPress, des champs structurés, un thème maison, et seulement les plugins utiles. Le reste : perf, sécurité, hébergement.',
  labels: [
    'WordPress',
    'ACF',
    'Thème custom',
    'FlyingPress',
    'Wordfence',
    'Cloudflare',
    'O2switch',
    'Infomaniak',
  ],
} as const;

export const SITE_WORDPRESS_CASES = {
  kicker: 'Portfolio',
  title: 'Des sites web livrés — dont des bases WordPress saines',
  intro: 'Projets récents issus de Sanity ; détail et contexte sur chaque réalisation.',
} as const;

export const SITE_WORDPRESS_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — WordPress',
  subtitle: 'Budget, sécurité, builders, SEO : sans langue de bois.',
} as const;

export const SITE_WORDPRESS_FAQ_ITEMS = [
  {
    question: 'Combien coûte un site WordPress sur mesure ?',
    answer:
      'Souvent à partir de 1 900 € pour une base propre (structure, thème léger, champs clés, perf de base). Au-delà, le budget suit le nombre de gabarits, des intégrations, du multilingue, ou d’une refonte lourde. Devis gratuit après échange.',
  },
  {
    question: 'WordPress vs Next.js : lequel choisir ?',
    answer:
      'WordPress quand l’équipe veut publier vite et souvent, avec un écosystème mature. Next.js (ou headless) quand la perf extrême, le produit logiciel, ou des intégrations poussées imposent un front découplé. Je vous dis franchement ce qui colle à votre contexte.',
  },
  {
    question: 'Est-ce que WordPress est vraiment sécurisé ?',
    answer:
      'Oui, si on évite la jungle de plugins non maintenus, si on durcit l’admin, si on met à jour et si l’hébergement tient la route. Le risque vient rarement du cœur WP seul : il vient de la pile autour.',
  },
  {
    question: 'Vous utilisez Elementor ou un thème gratuit ?',
    answer:
      'Je privilégie un thème maison ou très léger + blocs/champs structurés. Les builders lourds peuvent aller vite au début mais coûtent cher en perf et dette ; si vous avez déjà Elementor, on peut aussi optimiser ou migrer par étapes.',
  },
  {
    question: 'Je peux gérer tous mes contenus moi-même ?',
    answer:
      'Oui, c’est le but : éditeur clair, champs documentés, preview fiable. On évite les zones “toucher = tout casser”.',
  },
  {
    question: 'Et pour la maintenance après ?',
    answer:
      'Je propose un socle mises à jour + veille + petites évolutions. Détails sur /maintenance/maintenance-wordpress.',
  },
  {
    question: 'Vous pouvez refondre mon WordPress actuel ?',
    answer:
      'Oui : audit plugins/thème, plan de migration contenus, redirections si besoin, et remise à plat perf + sécurité. Parfois la refonte partielle suffit ; parfois il vaut mieux repartir sur une base neuve — je vous dis laquelle.',
  },
  {
    question: 'WordPress est-il bon pour le SEO ?',
    answer:
      'Très bon pour l’éditorial et le maillage quand les templates sont propres. Le SEO technique reste à faire sérieusement (vitesse, données structurées, indexation) — comme sur n’importe quelle stack.',
  },
] as const;

export const SITE_WORDPRESS_BUDGET = {
  title: 'Budget',
  line: 'Les projets WordPress bien cadrés démarrent à partir de 1 900 €',
  note: 'Chaque site est différent : devis gratuit, personnalisé, sans engagement.',
} as const;

export const SITE_WORDPRESS_FINAL_CTA = {
  title: 'Un WordPress à refondre, à accélérer, ou à créer ?',
  primaryHref: '/devis?projectType=site',
  primaryLabel: 'Demander un devis WordPress',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
