/** Contenus page premium `/ia/agents-ia` — ton accessible (scénarios multi-étapes). */

export const AGENTS_IA_PATH = '/ia/agents-ia';

export const AGENTS_IA_KEYWORDS = [
  'automatisation intelligente plusieurs étapes',
  'IA qui enchaîne des actions',
  'assistant connecté CRM',
  'freelance automatisation IA',
  'scénario IA entreprise',
] as const;

export const agentsIaMetaDescription =
  'Scénarios d’IA sur plusieurs étapes : lire une demande, proposer une action, relier vos outils — avec validation humaine sur les cas sensibles. Clickdev — devis gratuit.';

export const agentsIaMetaTitle = 'Scénarios d’IA multi-étapes — Connecté à vos outils | Clickdev';

export const AGENTS_IA_HERO = {
  chapter: 'Chapitre 03.3 · Scénarios avancés',
  subline: 'Développeur freelance — Automatisations intelligentes',
  h1: 'Quand l’IA enchaîne plusieurs actions pour vous',
  lead:
    'Au-delà d’un simple chat, parfois il faut : lire une demande, chercher une info, remplir un champ, envoyer un message — avec des règles strictes. Je conçois des enchaînements fiables : limites de temps et d’étapes, validation humaine sur ce qui touche à l’argent ou aux données sensibles, et un journal lisible pour comprendre ce qui s’est passé. Les mots de passe et accès restent côté serveur.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${AGENTS_IA_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const AGENTS_IA_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Des scénarios qu’on peut suivre — et arrêter',
  subtitle: 'Mieux vaut des limites claires qu’une chaîne qui part dans tous les sens.',
  items: [
    {
      title: 'Actions bien définies',
      body: 'Chaque étape sait ce qu’elle doit recevoir et ce qu’elle doit renvoyer : moins d’improvisation dangereuse.',
    },
    {
      title: 'Validation humaine au bon endroit',
      body: 'Remboursement, mail vers l’extérieur, suppression : ce qui doit être validé par une personne l’est.',
    },
    {
      title: 'Plafonds',
      body: 'Nombre d’étapes, durée, coût d’utilisation : l’assistant ne tourne pas indéfiniment.',
    },
    {
      title: 'Historique utile',
      body: 'Pour comprendre pourquoi une action a été proposée et corriger le tir si besoin.',
    },
  ],
} as const;

export const AGENTS_IA_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Scénario multi-étapes ou simple chatbot : quand la complexité se justifie',
} as const;

export const AGENTS_IA_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Quand plusieurs systèmes doivent travailler ensemble avec des règles.',
  cards: [
    { title: 'Support ou opérations', body: 'Lire une demande, proposer une action, ouvrir un dossier dans votre outil : chaîne courte et répétable.' },
    { title: 'Ventes & qualification', body: 'Enrichissement, routage, brouillon de message — avec validation avant envoi.' },
    { title: 'Back-office documentaire', body: 'Extraire, classer, déclencher une suite d’étapes sans resaisir trois fois la même chose.' },
    { title: 'Équipes à l’aise avec le suivi', body: 'Vous gardez la main sur la supervision ; je livre une base solide et documentée.' },
  ],
} as const;

export const AGENTS_IA_COMPARE = {
  kicker: 'Décision',
  title: 'Outil no-code, scénario sur mesure, ou règles fixes ?',
  subtitle: 'La version « plusieurs étapes » n’a d’intérêt que si le gain le justifie.',
  columns: ['Outils type Zapier / Make', 'Scénario sur mesure', 'Règles fixes / script'] as const,
  rows: [
    { label: 'Plusieurs outils reliés entre eux', c: [true, true, false] as const },
    { label: 'Comportement adapté au langage naturel', c: [false, true, false] as const },
    { label: 'Traçabilité maximale', c: [false, true, true] as const },
    { label: 'Mise en place très rapide au départ', c: [true, false, true] as const },
    { label: 'Maîtrise fine du coût d’utilisation', c: [false, true, true] as const },
    { label: 'Zéro surprise sur un chemin figé', c: [true, false, true] as const },
  ],
} as const;

export const AGENTS_IA_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour un scénario livrable',
  steps: [
    { n: '01', title: 'Liste des actions', body: 'Ce que l’outil peut faire, ce qui est risqué, ce qui doit rester humain.' },
    { n: '02', title: 'Spécifications', body: 'Erreurs possibles, délais, ce qui se passe en cas de doublon ou d’échec.' },
    { n: '03', title: 'Enchaînement & consignes', body: 'Ordre des étapes, critères d’arrêt, messages en cas de blocage.' },
    { n: '04', title: 'Tests poussés', body: 'Cas limites, données manquantes, tentatives de détournement.' },
    { n: '05', title: 'Mise en service', body: 'Alertes simples, file d’attente pour les exceptions, ajustements selon les retours.' },
  ],
} as const;

export const AGENTS_IA_STACK = {
  kicker: 'Technologies',
  title: 'Orchestration & exécution',
  body:
    'En pratique : orchestration avec des briques éprouvées ou une logique maison légère, exécution sur serveur, files d’attente si le volume le demande, stockage des traces pour le suivi.',
  labels: ['Serveur', 'OpenAI', 'API métiers', 'Files d’attente', 'Base de données'],
} as const;

export const AGENTS_IA_CASES = {
  kicker: 'Portfolio',
  title: 'Outils et automatisations livrés en conditions réelles',
  intro: 'Projets récents — intégrations, plateformes, produits internes.',
} as const;

export const AGENTS_IA_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — scénarios multi-étapes',
  subtitle: 'Risques, coûts, différence avec un chatbot.',
} as const;

export const AGENTS_IA_FAQ_ITEMS = [
  {
    question: 'Différence avec un chatbot classique ?',
    answer:
      'Le chatbot répond surtout à partir de textes. Ici on enchaîne des actions concrètes (plusieurs outils ou étapes). Le surcoût en complexité doit être payé par un gain clair.',
  },
  {
    question: 'Combien ça coûte ?',
    answer:
      'Souvent à partir de 5 500 € pour un premier périmètre limité et supervisé. Ensuite le budget suit le nombre d’actions, de chemins possibles et le niveau d’autonomie. Devis gratuit.',
  },
  {
    question: 'On peut commencer très prudent ?',
    answer:
      'Oui : une seule action, une seule connexion, validation systématique — puis on élargit quand les résultats sont bons.',
  },
  {
    question: 'Sécurité des accès ?',
    answer:
      'Jamais exposés côté navigateur ; droits minimaux, rotation des mots de passe, journal des actions sensibles.',
  },
  {
    question: 'Ça peut être lent ?',
    answer:
      'Plusieurs étapes prennent du temps : on dimensionne les délais et l’interface (messages d’attente, progression) pour rester acceptable.',
  },
  {
    question: 'Comment suivre ce qui se passe ?',
    answer:
      'Un journal structuré par exécution : entrée, actions déclenchées, sortie, erreurs — pour corriger sans deviner.',
  },
  {
    question: 'En cas de panne ?',
    answer:
      'Nouvelles tentatives raisonnables, file d’attente pour les cas bloqués, et repli vers un humain quand les limites sont atteintes.',
  },
] as const;

export const AGENTS_IA_BUDGET = {
  title: 'Budget',
  line: 'Les scénarios multi-étapes (premier périmètre supervisé) démarrent souvent à partir de 5 500 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const AGENTS_IA_FINAL_CTA = {
  title: 'Une chaîne d’actions à automatiser sans perdre le contrôle ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
