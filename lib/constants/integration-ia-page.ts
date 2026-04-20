/** Contenus page premium `/ia/integration-ia`. */

export const INTEGRATION_IA_PATH = '/ia/integration-ia';

export const INTEGRATION_IA_KEYWORDS = [
  'intégration IA produit',
  'API OpenAI freelance',
  'LLM en production',
  'garde-fous IA',
  'freelance intégration IA',
] as const;

export const integrationIaMetaDescription =
  'Intégration IA en produit : APIs, prompts versionnés, budgets tokens, sécurité et monitoring. Accompagnement freelance Clickdev — devis gratuit.';

export const integrationIaMetaTitle = 'Intégration IA en produit — APIs & garde-fous | Clickdev';

export const INTEGRATION_IA_HERO = {
  chapter: 'Chapitre 03.1 · Intégration IA',
  subline: 'Développeur freelance — LLM en prod',
  h1: 'Intégration d’IA dans votre produit existant',
  lead:
    'Brancher un modèle sur vos données et vos règles, ce n’est pas coller une clé API : c’est définir ce que l’IA peut décider seule, où l’humain valide, et comment vous surveillez latences, quotas et erreurs. Prompts versionnés, journaux, repli si le fournisseur est indisponible : une intégration prête pour la vraie vie.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${INTEGRATION_IA_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const INTEGRATION_IA_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Une chaîne IA observable, pas une boîte noire',
  subtitle: 'Du POC mesurable à la prod sans perdre le fil des versions.',
  items: [
    {
      title: 'Cartographie ROI & risques',
      body: 'Tâches à fort gain, données sensibles, actions irréversibles : on trace les frontières avant le code.',
    },
    {
      title: 'Filtrage & minimisation des données',
      body: 'Ce qui part au modèle est explicitement choisi ; le reste reste chez vous.',
    },
    {
      title: 'Monitoring coûts & qualité',
      body: 'Tokens, latences, taux d’échec : des tableaux de bord simples pour arbitrer modèle vs marge.',
    },
    {
      title: 'Documentation pour votre équipe',
      body: 'Runbooks, variables d’environnement, comment retester un prompt : vous n’êtes pas captifs.',
    },
  ],
} as const;

export const INTEGRATION_IA_EDITORIAL = {
  kicker: 'Lecture',
  title: 'POC en 2–4 semaines : ce qu’il faut mesurer pour ne pas mentir',
} as const;

export const INTEGRATION_IA_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Produit, plateforme, équipe technique qui doit industrialiser.',
  cards: [
    {
      title: 'Produits avec backlog IA',
      body: 'Vous savez déjà quoi automatiser : il manque l’architecture et les garde-fous.',
    },
    {
      title: 'Équipes qui ont testé ChatGPT “à la main”',
      body: 'On transforme les prompts artisanaux en pipeline versionné et testable.',
    },
    {
      title: 'CTO qui veut éviter la dette shadow IT',
      body: 'Clés centralisées, logs, conformité : l’IA au même niveau qu’une API tierce.',
    },
    {
      title: 'Scale-ups post-PMF',
      body: 'Le coût marginal doit tenir : choix de modèle et cache là où ça compte.',
    },
  ],
} as const;

export const INTEGRATION_IA_COMPARE = {
  kicker: 'Décision',
  title: 'Feature “OpenAI”, intégration sur mesure, ou rien ?',
  subtitle: 'Le bon niveau dépend de votre maturité data et de votre capacité à maintenir.',
  columns: ['Feature SaaS', 'Sur mesure', 'Reporter'] as const,
  rows: [
    { label: 'Contrôle fin des prompts & versions', c: [false, true, false] as const },
    { label: 'Mise en prod en quelques clics', c: [true, false, true] as const },
    { label: 'Logs & audit propres à votre domaine', c: [false, true, false] as const },
    { label: 'Coût initial faible', c: [true, false, true] as const },
    { label: 'Échappatoire hors catalogue fournisseur', c: [false, true, false] as const },
    { label: 'Équipe interne pour maintenir', c: [false, true, false] as const },
  ],
} as const;

export const INTEGRATION_IA_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour brancher l’IA proprement',
  steps: [
    { n: '01', title: 'Atelier valeur & données', body: 'Cas d’usage, risques, jeux de tests : le cadrage qui évite le scope flou.' },
    { n: '02', title: 'Design du flux', body: 'Entrées, sorties, validation humaine, idempotence des effets de bord.' },
    { n: '03', title: 'Implémentation & secrets', body: 'Serveur, clés, retries, timeouts : rien de sensible côté client.' },
    { n: '04', title: 'POC & métriques', body: 'Mesure qualité + coût sur un échantillon représentatif.' },
    { n: '05', title: 'Prod & run', body: 'Alertes, budgets, runbook ; puis itérations guidées par les chiffres.' },
  ],
} as const;

export const INTEGRATION_IA_STACK = {
  kicker: 'Stack',
  title: 'Ce qui tourne en prod chez vous',
  body:
    'Next.js / Node, Python si pipelines lourds, SDK OpenAI ou Anthropic, stockage des prompts en repo, observabilité (logs structurés, tracing léger).',
  labels: ['OpenAI', 'Anthropic', 'TypeScript', 'Next.js', 'Python', 'LangSmith', 'PostgreSQL'],
} as const;

export const INTEGRATION_IA_CASES = {
  kicker: 'Portfolio',
  title: 'Outils et plateformes livrés en conditions réelles',
  intro: 'Études de cas récentes — priorité aux projets outils & intégrations.',
} as const;

export const INTEGRATION_IA_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — intégration IA',
  subtitle: 'POC, coûts, données, maintenance.',
} as const;

export const INTEGRATION_IA_FAQ_ITEMS = [
  {
    question: 'On commence par un POC ?',
    answer:
      'Souvent oui : un périmètre restreint mais mesurable en 2–4 semaines permet de valider coût et qualité avant industrialisation.',
  },
  {
    question: 'Qui héberge les appels au modèle ?',
    answer:
      'En général votre backend pour garder les clés et filtrer les données ; le front ne parle pas au fournisseur en direct.',
  },
  {
    question: 'Combien coûte une intégration ?',
    answer:
      'Souvent à partir de 4 900 € pour un POC ou un premier module bien cadré. Au-delà, le budget suit le nombre de flux, du RAG, et des intégrations métiers. Devis gratuit.',
  },
  {
    question: 'OpenAI ou Anthropic ?',
    answer:
      'Choix selon qualité/latence/coût sur vos cas ; parfois les deux en A/B technique. Pas de religion, des critères mesurables.',
  },
  {
    question: 'Gestion des mises à jour des modèles ?',
    answer:
      'Versioning des prompts, tests de non-régression sur jeux de cas, et pin de modèle quand la stabilité prime.',
  },
  {
    question: 'RGPD ?',
    answer:
      'Minimisation, DPA, documentation des traitements : on aligne l’implémentation avec votre légal / DPO quand il existe.',
  },
  {
    question: 'Vous formez nos devs ?',
    answer:
      'Oui : session de passation, README, et patterns pour qu’ils puissent itérer sans casser les garde-fous.',
  },
] as const;

export const INTEGRATION_IA_BUDGET = {
  title: 'Budget',
  line: 'Les intégrations IA (POC ou premier module) démarrent souvent à partir de 4 900 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const INTEGRATION_IA_FINAL_CTA = {
  title: 'Prêt à passer du “prompt dans Slack” à du produit versionné ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis intégration IA',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
