/** Contenus page premium `/sites-internet/landing-page` (brief pages filles). */

export const LANDING_PAGE_PATH = '/sites-internet/landing-page';

export const LANDING_PAGE_KEYWORDS = [
  'création landing page',
  'landing page conversion',
  'page de conversion sur mesure',
  'développeur landing page freelance',
  'landing page Google Ads',
] as const;

export const landingPageMetaDescription =
  'Création de landing pages performantes par un développeur freelance. Ultra rapides, optimisées pour la conversion, prêtes pour vos campagnes. Dès 900 €.';

export const landingPageMetaTitle = 'Création landing page à haute conversion | Clickdev';

export const LANDING_PAGE_HERO = {
  chapter: 'Chapitre 01.8 · Landing page',
  subline: 'Développeur freelance — Pages de conversion',
  h1: 'Création de landing page à haute conversion',
  lead:
    'Une page. Un objectif. Un résultat mesurable. Je conçois des landing pages qui performent en campagne pub, en lancement produit ou en événement : rapides, claires, prêtes pour le tracking — sans fuites de navigation inutiles.',
  primaryCta: { href: '/devis?projectType=site', label: 'Demander un devis' },
  secondaryCta: { href: `${LANDING_PAGE_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const LANDING_PAGE_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Une LP qui respecte votre CPA et votre utilisateur',
  subtitle: 'Vitesse, message unique, mesure : le trio des campagnes qui scale.',
  items: [
    {
      title: 'Une page qui se charge vite',
      body: 'Essentiel pour la conversion et pour le Quality Score côté Google Ads — sans sacrifier le contenu utile.',
    },
    {
      title: 'Un parcours centré sur l’action',
      body: 'Chaque bloc sert l’objectif : lead, inscription, achat, appel. Pas de menu encyclopédique qui vole votre clic.',
    },
    {
      title: 'Un tracking propre dès le départ',
      body: 'GA4, Meta Pixel, événements consentement-friendly : vous savez ce qui convertit, pas seulement ce qui charge.',
    },
    {
      title: 'Une base prête pour l’itération',
      body: 'Variantes, A/B, sections modulables : on gagne des points de conversion sans refonte à chaque test.',
    },
  ],
} as const;

export const LANDING_PAGE_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Qu’est-ce qu’une landing page qui performe vraiment',
} as const;

export const LANDING_PAGE_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'De la campagne ponctuelle au lancement produit.',
  cards: [
    {
      title: 'Marketeurs et growth',
      body: 'Une page prête pour Google Ads ou Meta : message unique, tracking, itérations rapides.',
    },
    {
      title: 'Entrepreneurs qui lancent',
      body: 'Pré-commande, liste d’attente, validation marché : une LP pour apprendre vite sans bâtir tout le site.',
    },
    {
      title: 'Consultants et coachs',
      body: 'Rendez-vous découverte, appel, formulaire court : on enlève tout ce qui n’aide pas la prise de contact.',
    },
    {
      title: 'Marketing B2B',
      body: 'Une LP par campagne, persona ou verticale : cohérence message ↔ acquisition.',
    },
  ],
} as const;

export const LANDING_PAGE_COMPARE = {
  kicker: 'Décision',
  title: 'Page du site, LP no-code, ou LP sur mesure ?',
  subtitle:
    'Le bon format dépend de votre objectif unique, de votre trafic payant, et de la vitesse à laquelle vous devez itérer.',
  columns: ['Page du site classique', 'LP no-code', 'LP sur mesure'] as const,
  rows: [
    { label: 'Objectif unique & sans fuite de navigation', c: [false, true, true] as const },
    { label: 'Perf & contrôle du JS', c: [false, false, true] as const },
    { label: 'Itération campagne en autonomie marketing', c: [true, true, false] as const },
    { label: 'Quality Score / expérience mobile poussée', c: [false, true, true] as const },
    { label: 'Tracking & événements sur mesure', c: [false, true, true] as const },
    { label: 'Mise en ligne très rapide sur budget serré', c: [true, true, false] as const },
  ],
} as const;

export const LANDING_PAGE_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour une LP prête à scaler',
  steps: [
    {
      n: '01',
      title: 'Objectif & preuve',
      body: 'Une action principale, une promesse vérifiable, un public précis. Si ça flotte ici, la campagne flotte aussi.',
    },
    {
      n: '02',
      title: 'Structure & copy',
      body: 'Hero, bénéfices, preuves, FAQ courte, CTA répété intelligemment — sans roman au-dessus de la ligne de flottaison.',
    },
    {
      n: '03',
      title: 'Design & mobile',
      body: 'Lisibilité, champs de formulaire sobres, clavier qui ne masque pas le CTA : les détails qui coûtent des leads.',
    },
    {
      n: '04',
      title: 'Développement & tracking',
      body: 'Next.js ou Astro, tags propres, consentement : ce qui sert la mesure sans casser la confiance.',
    },
    {
      n: '05',
      title: 'QA & lancement',
      body: 'Tests devices réels, pixels, événements, puis mise en ligne et plan d’A/B si vous en avez un.',
    },
  ],
} as const;

export const LANDING_PAGE_STACK = {
  kicker: 'Stack',
  title: 'Léger, mesurable, déployable vite',
  body:
    'Next.js ou Astro, Tailwind, animations sobres, analytics (Plausible ou GA4) et pixels quand il le faut — hébergement Vercel ou équivalent pour la perf.',
  labels: ['Next.js', 'Astro', 'Tailwind CSS', 'Framer Motion', 'Plausible', 'GA4', 'Meta Pixel', 'Vercel'],
} as const;

export const LANDING_PAGE_CASES = {
  kicker: 'Portfolio',
  title: 'Des sites et pages web orientés résultat',
  intro: 'Réalisations récentes — pour vous projeter sur la qualité d’exécution.',
} as const;

export const LANDING_PAGE_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — landing page',
  subtitle: 'Budget, délais, A/B, Ads, tracking, contenus.',
} as const;

export const LANDING_PAGE_FAQ_ITEMS = [
  {
    question: 'Combien coûte une landing page pro ?',
    answer:
      'Souvent à partir de 900 € pour une page ciblée, rapide, avec formulaire ou CTA clair et tracking de base. Au-delà, le prix suit le nombre de sections, du multilingue, des intégrations CRM, ou du design sur-mesure poussé. Devis gratuit.',
  },
  {
    question: 'Combien de temps pour créer une landing page ?',
    answer:
      'De quelques jours à quelques semaines selon la disponibilité des contenus et des assets. Sans textes ni maquette, on perd du temps — d’où l’intérêt de verrouiller le message tôt.',
  },
  {
    question: 'Vous gérez aussi l’A/B testing ?',
    answer:
      'Je peux préparer la technique (variantes, événements, routage) et les hooks pour outils type Google Optimize / équivalents. La stratégie de test reste côté marketing — je m’assure que la mesure est propre.',
  },
  {
    question: 'Est-ce que c’est adapté à Google Ads ?',
    answer:
      'Oui : vitesse, clarté de l’offre, CTA au bon endroit, page mobile propre : tout ce qui aide le Quality Score et la conversion après le clic.',
  },
  {
    question: 'Et pour le tracking des conversions ?',
    answer:
      'Événements côté formulaire, thank-you page ou dataLayer selon votre stack. On évite le double comptage et on respecte le consentement.',
  },
  {
    question: 'Je peux modifier mes textes moi-même ?',
    answer:
      'Si on part sur un headless/CMS léger ou des composants documentés, oui. Si la LP est figée pour une campagne très courte, parfois un passage par dev reste plus simple — on choisit selon votre rythme.',
  },
  {
    question: 'Vous faites aussi la rédaction des textes ?',
    answer:
      'Je peux challenger et resserrer vos textes, proposer des micro-copy et une structure. Pour une rédaction marketing complète, je collabore avec des spécialistes si besoin.',
  },
  {
    question: 'C’est compatible avec mon site actuel ?',
    answer:
      'Souvent oui : sous-domaine, sous-chemin, ou domaine dédié campagne. On définit le bon schéma pour le SEO et les analytics sans cannibaliser votre site principal.',
  },
] as const;

export const LANDING_PAGE_BUDGET = {
  title: 'Budget',
  line: 'Les landing pages pro démarrent à partir de 900 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const LANDING_PAGE_FINAL_CTA = {
  title: 'Une campagne à lancer sans une LP qui traîne ?',
  primaryHref: '/devis?projectType=site',
  primaryLabel: 'Demander un devis landing',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
