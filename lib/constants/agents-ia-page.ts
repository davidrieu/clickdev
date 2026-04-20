/** Contenus page premium `/ia/agents-ia`. */

export const AGENTS_IA_PATH = '/ia/agents-ia';

export const AGENTS_IA_KEYWORDS = [
  'agents IA',
  'agentic AI',
  'LLM outils API',
  'automatisation agent freelance',
  'freelance agents IA',
] as const;

export const agentsIaMetaDescription =
  'Agents IA : planification d’actions, appels d’outils typés, garde-fous, budgets et supervision humaine. Freelance Clickdev — devis gratuit.';

export const agentsIaMetaTitle = 'Agents IA — Planification, outils & supervision | Clickdev';

export const AGENTS_IA_HERO = {
  chapter: 'Chapitre 03.3 · Agents IA',
  subline: 'Développeur freelance — Boucles fiables',
  h1: 'Conception d’agents IA en production',
  lead:
    'Un agent enchaîne lire, décider, appeler une API — avec des effets de bord. Je conçois des boucles testables : outils typés, timeouts, idempotence, human-in-the-loop sur les actions sensibles, et journaux pour auditer chaque étape. Les secrets restent côté serveur.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${AGENTS_IA_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const AGENTS_IA_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Des agents qu’on peut auditer — et arrêter',
  subtitle: 'Limiter les boucles infinies et les actions stupides coûte moins cher qu’un incident.',
  items: [
    {
      title: 'Outils typés & contrats clairs',
      body: 'Entrées/sorties des functions : moins de “le modèle a inventé un paramètre”.',
    },
    {
      title: 'Human-in-the-loop ciblé',
      body: 'Validation humaine sur remboursement, email externe, suppression : ce qui doit bloquer bloque.',
    },
    {
      title: 'Budgets & plafonds',
      body: 'Nombre d’étapes, tokens, durée : l’agent ne part pas en spirale silencieuse.',
    },
    {
      title: 'Journaux exploitables',
      body: 'Pour comprendre pourquoi une action a été proposée — et corriger prompt ou outil.',
    },
  ],
} as const;

export const AGENTS_IA_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Agents vs chatbot : quand la complexité se paie (ou pas)',
} as const;

export const AGENTS_IA_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Quand plusieurs systèmes doivent être orchestrés avec règles.',
  cards: [
    { title: 'Ops & support avancé', body: 'Lire un ticket, proposer une action, ouvrir un cas CRM : chaîne courte.' },
    { title: 'Sales & qualification', body: 'Enrichissement, routage, brouillon — avec validation avant envoi.' },
    { title: 'Back-office documentaire', body: 'Extraire, classer, déclencher workflows — sans double saisie.' },
    { title: 'Équipes tech matures', body: 'Vous assumez la supervision ; je livre la ossature fiable.' },
  ],
} as const;

export const AGENTS_IA_COMPARE = {
  kicker: 'Décision',
  title: 'Workflow no-code, agent sur mesure, ou script classique ?',
  subtitle: 'L’agent n’est pertinent que si la chaîne d’actions le justifie.',
  columns: ['No-code / Make', 'Agent sur mesure', 'Script déterministe'] as const,
  rows: [
    { label: 'Logique complexe multi-API', c: [true, true, false] as const },
    { label: 'Comportement adaptatif (langage)', c: [false, true, false] as const },
    { label: 'Auditabilité maximale', c: [false, true, true] as const },
    { label: 'Time-to-market très rapide', c: [true, false, true] as const },
    { label: 'Coût tokens maîtrisé finement', c: [false, true, true] as const },
    { label: 'Zéro imprévu sur chemins figés', c: [true, false, true] as const },
  ],
} as const;

export const AGENTS_IA_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour un agent livrable',
  steps: [
    { n: '01', title: 'Cartographie actions', body: 'Liste des outils, effets de bord, niveaux de risque.' },
    { n: '02', title: 'Spécifications outils', body: 'Schémas, erreurs, idempotence, timeouts.' },
    { n: '03', title: 'Boucle & prompts', body: 'Planification, re-planification, critères d’arrêt.' },
    { n: '04', title: 'Tests adversariaux', body: 'Cas limites, injections, données manquantes.' },
    { n: '05', title: 'Prod & supervision', body: 'Dashboards, alertes, file humaine pour exceptions.' },
  ],
} as const;

export const AGENTS_IA_STACK = {
  kicker: 'Stack',
  title: 'Orchestration & exécution',
  body:
    'LangChain / orchestration légère maison, exécution Node ou Python, files d’attente si besoin, stockage des traces.',
  labels: ['LangChain', 'TypeScript', 'Python', 'OpenAI', 'Zod', 'PostgreSQL', 'Redis'],
} as const;

export const AGENTS_IA_CASES = {
  kicker: 'Portfolio',
  title: 'Outils et automatisations livrés en conditions réelles',
  intro: 'Projets récents — intégrations, plateformes, produits internes.',
} as const;

export const AGENTS_IA_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — agents IA',
  subtitle: 'Risques, coûts, différences avec un chatbot.',
} as const;

export const AGENTS_IA_FAQ_ITEMS = [
  {
    question: 'Agents vs simple chatbot ?',
    answer:
      'L’agent enchaîne plusieurs outils et étapes ; le chatbot répond sur un corpus. Le surcoût en complexité doit être justifié par le gain mesurable.',
  },
  {
    question: 'Combien coûte un agent ?',
    answer:
      'Souvent à partir de 5 500 € pour un premier périmètre d’actions limité et supervisé. Au-delà, le budget suit le nombre d’outils, de chemins, et du niveau d’autonomie. Devis gratuit.',
  },
  {
    question: 'Peut-on commencer très restrictif ?',
    answer:
      'Oui : une action, un outil, validation systématique — puis élargissement quand les métriques sont bonnes.',
  },
  {
    question: 'Sécurité des tokens & secrets ?',
    answer:
      'Jamais exposés au client ; rotation, scopes minimaux, audit des appels d’outils sensibles.',
  },
  {
    question: 'Latence ?',
    answer:
      'Plusieurs tours modèle + API : on dimensionne timeouts et UX (streaming, états intermédiaires).',
  },
  {
    question: 'Observabilité ?',
    answer:
      'Traces structurées par run : entrées, outils appelés, sorties, erreurs — pour débugger sans deviner.',
  },
  {
    question: 'Reprise sur incident ?',
    answer:
      'Stratégies de retry, dead-letter, et repli humain quand l’agent bloque ou dépasse le budget.',
  },
] as const;

export const AGENTS_IA_BUDGET = {
  title: 'Budget',
  line: 'Les agents IA (premier périmètre supervisé) démarrent souvent à partir de 5 500 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const AGENTS_IA_FINAL_CTA = {
  title: 'Une chaîne d’actions à automatiser sans perdre le contrôle ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis agent IA',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
