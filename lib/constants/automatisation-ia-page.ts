/** Contenus page premium `/ia/automatisation-ia`. */

export const AUTOMATISATION_IA_PATH = '/ia/automatisation-ia';

export const AUTOMATISATION_IA_KEYWORDS = [
  'automatisation IA',
  'classification documents IA',
  'extraction données LLM',
  'workflow IA freelance',
  'freelance automatisation IA',
] as const;

export const automatisationIaMetaDescription =
  'Automatisation IA : extraction, classification, routage avec scores de confiance et file humaine. Intégration CRM, helpdesk, ERP — freelance Clickdev.';

export const automatisationIaMetaTitle = 'Automatisation IA — Extraction & routage fiables | Clickdev';

export const AUTOMATISATION_IA_HERO = {
  chapter: 'Chapitre 03.4 · Automatisation IA',
  subline: 'Développeur freelance — Pipelines observables',
  h1: 'Automatisation par IA avec garde-fous',
  lead:
    'Classer un ticket, extraire des champs d’un PDF, router une demande : l’automatisation par modèles doit rester observable — scores de confiance, seuils de rejet, file d’attente humaine et journaux pour expliquer chaque décision. Je branche les flux sur vos outils sans multiplier les copies de données sensibles.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${AUTOMATISATION_IA_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const AUTOMATISATION_IA_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Moins de clics répétitifs, plus de traçabilité',
  subtitle: 'Le modèle propose ; le métier valide quand le risque l’exige.',
  items: [
    {
      title: 'Scores & seuils',
      body: 'Au-dessous du seuil : humain. Au-dessus : proposition avec log.',
    },
    {
      title: 'Intégrations CRM / helpdesk / ERP',
      body: 'Webhooks, APIs, files : pas de “copie Excel” parallèle sans contrôle.',
    },
    {
      title: 'Prompts & jeux de test versionnés',
      body: 'Comme du code : PR, relecture, jeux de cas réels.',
    },
    {
      title: 'Minimisation des données',
      body: 'Envoyer au modèle le strict nécessaire, pas dump complet “au cas où”.',
    },
  ],
} as const;

export const AUTOMATISATION_IA_EDITORIAL = {
  kicker: 'Lecture',
  title: '100 % automatique : rarement souhaitable au départ',
} as const;

export const AUTOMATISATION_IA_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Back-office qui noie sous les tâches répétitives.',
  cards: [
    { title: 'Support & helpdesk', body: 'Tri, tags, brouillons de réponse : gain de temps mesurable.' },
    { title: 'Ops & administratif', body: 'Extraction depuis emails ou PDF vers vos systèmes.' },
    { title: 'Sales ops', body: 'Qualification légère avant passage humain.' },
    { title: 'Compliance-aware', body: 'Périmètres où l’humain garde le dernier mot.' },
  ],
} as const;

export const AUTOMATISATION_IA_COMPARE = {
  kicker: 'Décision',
  title: 'Règles déterministes, ML classique, ou LLM ?',
  subtitle: 'Le LLM gagne quand le texte est trop variable pour des regex.',
  columns: ['Règles / scripts', 'LLM avec seuils', 'Humain seul'] as const,
  rows: [
    { label: 'Texte très structuré', c: [true, false, false] as const },
    { label: 'Variabilité langagière forte', c: [false, true, false] as const },
    { label: 'Coût marginal maîtrisé', c: [true, false, true] as const },
    { label: 'Adaptation rapide aux nouveaux cas', c: [false, true, false] as const },
    { label: 'Zéro risque d’erreur', c: [true, false, true] as const },
    { label: 'Déploiement en semaines', c: [true, true, false] as const },
  ],
} as const;

export const AUTOMATISATION_IA_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour automatiser sans surprise',
  steps: [
    { n: '01', title: 'Échantillon & labels', body: 'Jeux représentatifs, définition “bon / à revoir”.' },
    { n: '02', title: 'Pipeline', body: 'Pré-traitement, appel modèle, post-validation.' },
    { n: '03', title: 'Seuils & file humaine', body: 'Règles métier pour escalade.' },
    { n: '04', title: 'Pilote', body: 'Volume limité, métriques précision / coût.' },
    { n: '05', title: 'Élargissement', body: 'Montée en charge progressive + monitoring.' },
  ],
} as const;

export const AUTOMATISATION_IA_STACK = {
  kicker: 'Stack',
  title: 'Pipelines & files',
  body:
    'Python ou Node pour workers, queues (SQS, BullMQ), stockage des résultats et logs, OpenAI/Anthropic pour les étapes NLP.',
  labels: ['Python', 'Node.js', 'OpenAI', 'PostgreSQL', 'Redis', 'n8n', 'AWS SQS'],
} as const;

export const AUTOMATISATION_IA_CASES = {
  kicker: 'Portfolio',
  title: 'Outils métiers et intégrations récentes',
  intro: 'Réalisations — automatisation, CRM, plateformes.',
} as const;

export const AUTOMATISATION_IA_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — automatisation IA',
  subtitle: 'Précision, humain dans la boucle, coûts.',
} as const;

export const AUTOMATISATION_IA_FAQ_ITEMS = [
  {
    question: '100 % automatique ?',
    answer:
      'Rarement souhaitable au départ : un pilote avec revue humaine réduit les risques avant d’élargir les seuils.',
  },
  {
    question: 'Combien coûte une automatisation ?',
    answer:
      'Souvent à partir de 4 500 € pour un flux cadré (entrée, classification, action). Au-delà, le budget suit le volume, les intégrations et le nombre de chemins. Devis gratuit.',
  },
  {
    question: 'Données personnelles ?',
    answer:
      'Pseudonymisation, minimisation, durées de rétention : alignement avec votre base légale.',
  },
  {
    question: 'Et si le modèle se trompe ?',
    answer:
      'Seuils, double validation sur champs critiques, et possibilité de rollback des actions.',
  },
  {
    question: 'Zapier / Make vs code ?',
    answer:
      'No-code pour prototyper vite ; code quand le volume, la sécurité ou la logique métier dépasse le graphe.',
  },
  {
    question: 'SLA sur le pipeline ?',
    answer:
      'Timeouts, retries, dead-letter : on définit le comportement sous charge ou panne partielle.',
  },
  {
    question: 'Évolution ?',
    answer:
      'Nouveaux intents : extension des jeux de tests et versioning des prompts / règles.',
  },
] as const;

export const AUTOMATISATION_IA_BUDGET = {
  title: 'Budget',
  line: 'Les automatisations IA (flux cadré) démarrent souvent à partir de 4 500 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const AUTOMATISATION_IA_FINAL_CTA = {
  title: 'Un flux documentaire ou ticket à décharger intelligemment ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis automatisation',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
