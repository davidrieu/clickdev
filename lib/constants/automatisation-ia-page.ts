/** Contenus page premium `/ia/automatisation-ia` — ton accessible. */

export const AUTOMATISATION_IA_PATH = '/ia/automatisation-ia';

export const AUTOMATISATION_IA_KEYWORDS = [
  'automatisation IA PME',
  'tri automatique demandes clients',
  'extraction informations PDF',
  'freelance automatisation IA',
  'gain de temps bureau',
] as const;

export const automatisationIaMetaDescription =
  'Automatisation avec IA : classer des demandes, extraire des infos de documents, orienter vers la bonne personne — avec relecture humaine quand c’est sensible. Clickdev.';

export const automatisationIaMetaTitle = 'Automatisation intelligente — Moins de saisie répétitive | Clickdev';

export const AUTOMATISATION_IA_HERO = {
  chapter: 'Chapitre 03.4 · Automatisation IA',
  subline: 'Développeur freelance — Tâches répétitives',
  h1: 'Automatiser le tri et la saisie — sans perdre le contrôle',
  lead:
    'Classer une demande par e-mail, relever des champs dans un formulaire ou un PDF, envoyer vers le bon service : ce type de tâche peut être aidé par l’IA, à condition de garder une file d’attente pour les cas douteux et un historique clair. Je relie tout ça à vos outils habituels (support, CRM) sans multiplier les copies inutiles de données sensibles.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${AUTOMATISATION_IA_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const AUTOMATISATION_IA_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Moins de clics répétitifs, plus de lisibilité',
  subtitle: 'L’outil propose ; une personne valide quand le risque l’exige.',
  items: [
    {
      title: 'Niveau de confiance',
      body: 'En dessous d’un certain seuil : passage à un humain. Au-dessus : proposition enregistrée avec trace.',
    },
    {
      title: 'Branchement CRM / support / gestion',
      body: 'Notifications, mises à jour de dossier : pas de “tableau Excel parallèle” sans contrôle.',
    },
    {
      title: 'Évolutions suivies',
      body: 'Les consignes et jeux de test évoluent comme un projet informatique classique, avec relecture.',
    },
    {
      title: 'Peu de données inutiles',
      body: 'On n’envoie à l’IA que le minimum nécessaire pour la tâche, pas des fichiers entiers “au cas où”.',
    },
  ],
} as const;

export const AUTOMATISATION_IA_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Tout automatiser d’un coup : rarement une bonne idée au départ',
} as const;

export const AUTOMATISATION_IA_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Back-offices qui étouffent sous les tâches répétitives.',
  cards: [
    { title: 'Support & helpdesk', body: 'Tri, étiquettes, brouillon de réponse : du temps gagné sur chaque ticket.' },
    { title: 'Administration & opérations', body: 'Extraire des infos depuis des e-mails ou des PDF vers vos systèmes.' },
    { title: 'Équipes commerciales', body: 'Petite qualification avant qu’un commercial prenne le relais.' },
    { title: 'Contextes où l’erreur coûte cher', body: 'L’humain garde le dernier mot sur ce qui est critique.' },
  ],
} as const;

export const AUTOMATISATION_IA_COMPARE = {
  kicker: 'Décision',
  title: 'Règles fixes, IA avec contrôle, ou tout à la main ?',
  subtitle: 'L’IA texte aide surtout quand les formulations varient trop pour des règles toutes simples.',
  columns: ['Règles / tableurs', 'IA avec contrôle', 'Équipe seule'] as const,
  rows: [
    { label: 'Données très régulières et prévisibles', c: [true, false, false] as const },
    { label: 'Formulations très variables', c: [false, true, false] as const },
    { label: 'Coût marginal maîtrisé', c: [true, false, true] as const },
    { label: 'S’adapter vite aux nouveaux cas', c: [false, true, false] as const },
    { label: 'Zéro tolérance aux erreurs', c: [true, false, true] as const },
    { label: 'Mise en place en quelques semaines', c: [true, true, false] as const },
  ],
} as const;

export const AUTOMATISATION_IA_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour automatiser sans surprise',
  steps: [
    { n: '01', title: 'Exemples réels', body: 'Un échantillon représentatif et la définition de « bon » vs « à revoir ».' },
    { n: '02', title: 'Chaîne de traitement', body: 'Réception, analyse, proposition ou action, vérifications.' },
    { n: '03', title: 'Seuils & file humaine', body: 'Règles métier pour savoir quand une personne doit intervenir.' },
    { n: '04', title: 'Pilote', body: 'Volume limité, suivi de la qualité et du coût.' },
    { n: '05', title: 'Élargissement', body: 'Montée en charge progressive et surveillance.' },
  ],
} as const;

export const AUTOMATISATION_IA_STACK = {
  kicker: 'Technologies',
  title: 'Files d’attente & traitement',
  body:
    'Workers sur serveur (Python ou Node selon le contexte), files d’attente si le volume est là, stockage des résultats et des journaux, services d’IA pour les parties langage.',
  labels: ['Python', 'Node.js', 'OpenAI', 'Base de données', 'Automatisations'],
} as const;

export const AUTOMATISATION_IA_CASES = {
  kicker: 'Portfolio',
  title: 'Outils métiers et intégrations récentes',
  intro: 'Réalisations — automatisation, CRM, plateformes.',
} as const;

export const AUTOMATISATION_IA_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — automatisation',
  subtitle: 'Précision, humain dans la boucle, coûts.',
} as const;

export const AUTOMATISATION_IA_FAQ_ITEMS = [
  {
    question: 'Tout peut être 100 % automatique ?',
    answer:
      'Rarement au début : un pilote avec relecture humaine réduit les risques avant d’assouplir les règles.',
  },
  {
    question: 'Combien coûte une automatisation ?',
    answer:
      'Souvent à partir de 4 500 € pour un flux clair (entrée, tri ou extraction, action). Ensuite le budget suit le volume, les outils reliés et le nombre de cas. Devis gratuit.',
  },
  {
    question: 'Données personnelles ?',
    answer:
      'Pseudonymisation, limitation des champs, durées de conservation : alignement avec votre cadre légal.',
  },
  {
    question: 'Et si l’outil se trompe ?',
    answer:
      'Seuils, double vérification sur les champs critiques, possibilité d’annuler ou corriger une action.',
  },
  {
    question: 'Zapier / Make ou développement sur mesure ?',
    answer:
      'Les outils sans code vont vite pour un prototype ; le code prend le relais quand le volume, la sécurité ou la logique métier deviennent sérieux.',
  },
  {
    question: 'Délais et pannes ?',
    answer:
      'Délais maximum, nouvelles tentatives raisonnables, file pour les cas bloqués : on définit le comportement sous charge ou en cas de panne partielle.',
  },
  {
    question: 'Évolution dans le temps ?',
    answer:
      'Nouveaux types de demandes : extension des exemples de test et mise à jour des consignes ou règles.',
  },
] as const;

export const AUTOMATISATION_IA_BUDGET = {
  title: 'Budget',
  line: 'Les automatisations (flux cadré) démarrent souvent à partir de 4 500 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const AUTOMATISATION_IA_FINAL_CTA = {
  title: 'Un flux de demandes ou de documents à alléger intelligemment ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis automatisation',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
