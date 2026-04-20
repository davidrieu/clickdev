/** Contenus page premium `/ia/rag-base-connaissances` — ton accessible (assistant sur vos documents). */

export const RAG_BASE_CONNAISSANCES_PATH = '/ia/rag-base-connaissances';

export const RAG_BASE_CONNAISSANCES_KEYWORDS = [
  'assistant sur documents internes',
  'base de connaissances intelligente',
  'FAQ interne intelligente',
  'freelance assistant documents',
  'questions réponses entreprise',
] as const;

export const ragBaseConnaissancesMetaDescription =
  'Posez des questions à vos PDF, notices et procédures : réponses sourcées, mises à jour suivies, droits d’accès par équipe. Clickdev — devis gratuit.';

export const ragBaseConnaissancesMetaTitle = 'Assistant sur vos documents — FAQ & procédures | Clickdev';

export const RAG_BASE_CONNAISSANCES_HERO = {
  chapter: 'Chapitre 03.5 · Vos documents',
  subline: 'Développeur freelance — Réponses basées sur vos textes',
  h1: 'Un assistant qui lit vos documents — et cite ses sources',
  lead:
    'Plutôt que de laisser l’IA improviser, on indexe vos contenus officiels (PDF, wiki interne, site) et on répond en s’y référant. Quand l’info n’est pas dans la base, l’assistant le dit clairement plutôt que d’inventer. On organise la mise à jour des fichiers et, si besoin, qui a le droit de voir quoi.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${RAG_BASE_CONNAISSANCES_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const RAG_BASE_CONNAISSANCES_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Des réponses ancrées dans vos sources',
  subtitle: 'Mieux vaut « je n’ai pas cette information » qu’une réponse plausible mais fausse.',
  items: [
    {
      title: 'Préparation des documents',
      body: 'Titres, tableaux, scans : on adapte la façon de découper le contenu pour que la recherche reste pertinente.',
    },
    {
      title: 'Mises à jour',
      body: 'Quand un document change, la base utilisée par l’assistant est rafraîchie selon des règles qu’on définit ensemble.',
    },
    {
      title: 'Contrôle qualité',
      body: 'Jeux de questions/réponses métier et analyse des échecs pour enrichir la documentation.',
    },
    {
      title: 'Droits d’accès',
      body: 'Un collaborateur ne voit que les documents auxquels il a droit — comme dans vos outils actuels.',
    },
  ],
} as const;

export const RAG_BASE_CONNAISSANCES_EDITORIAL = {
  kicker: 'Lecture',
  title: 'La qualité dépend surtout de vos contenus et de leur fraîcheur',
} as const;

export const RAG_BASE_CONNAISSANCES_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Support, conformité, équipes techniques ou RH.',
  cards: [
    { title: 'Support & relation client', body: 'FAQ interne, procédures, notes de version : une seule porte d’entrée pour les questions.' },
    { title: 'Juridique & conformité', body: 'Sources officielles, dates, références : traçabilité des réponses.' },
    { title: 'Ingénierie & produit', body: 'Spécifications éparpillées : interrogation sur un corpus technique unique.' },
    { title: 'Beaucoup de documentation', body: 'Quand la recherche par mots-clés seules ne suffit plus à retrouver l’info.' },
  ],
} as const;

export const RAG_BASE_CONNAISSANCES_COMPARE = {
  kicker: 'Décision',
  title: 'Recherche classique, assistant sur documents, ou formation longue ?',
  subtitle: 'L’assistant sur documents gagne quand les textes changent souvent et font foi.',
  columns: ['Recherche par mots', 'Assistant sur documents', 'Formation sur mesure'] as const,
  rows: [
    { label: 'Corpus qui change souvent', c: [false, true, false] as const },
    { label: 'Besoin de citer la source', c: [false, true, false] as const },
    { label: 'Ton de marque très spécifique', c: [false, true, true] as const },
    { label: 'Mise en place relativement rapide', c: [true, true, false] as const },
    { label: 'Budget infrastructure raisonnable au départ', c: [true, true, false] as const },
    { label: 'Données déjà bien structurées', c: [true, false, false] as const },
  ],
} as const;

export const RAG_BASE_CONNAISSANCES_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour un assistant fiable',
  steps: [
    { n: '01', title: 'Inventaire', body: 'Formats, doublons, droits de lecture, ancienneté des fichiers.' },
    { n: '02', title: 'Structuration', body: 'Titres, liens entre sections, règles de mise à jour.' },
    { n: '03', title: 'Index & classement', body: 'Mise en forme pour que les bonnes pages remontent en premier.' },
    { n: '04', title: 'Règles de réponse', body: 'Obligation de citer, refus si l’info manque, ton adapté.' },
    { n: '05', title: 'Exploitation & amélioration', body: 'Journal des questions, trous dans la doc, boucle avec les rédacteurs.' },
  ],
} as const;

export const RAG_BASE_CONNAISSANCES_STACK = {
  kicker: 'Technologies',
  title: 'Stockage & interrogation',
  body:
    'Services d’OpenAI ou équivalents pour comprendre les questions, base de données adaptée pour retrouver les passages utiles, site ou outil interne pour l’interface — selon vos contraintes d’hébergement.',
  labels: ['OpenAI', 'Base de données', 'Site web', 'Python', 'Sanity'],
} as const;

export const RAG_BASE_CONNAISSANCES_CASES = {
  kicker: 'Portfolio',
  title: 'Outils et plateformes avec fort volet intégration',
  intro: 'Réalisations récentes — détail sur chaque étude de cas.',
} as const;

export const RAG_BASE_CONNAISSANCES_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — assistant sur documents',
  subtitle: 'Stockage, coûts, mises à jour.',
} as const;

export const RAG_BASE_CONNAISSANCES_FAQ_ITEMS = [
  {
    question: 'Où sont stockées les informations ?',
    answer:
      'Selon la volumétrie, la rapidité souhaitée et vos contraintes (cloud managé ou chez vous). Le devis précise coût et reprise après incident.',
  },
  {
    question: 'Combien ça coûte ?',
    answer:
      'Souvent à partir de 5 900 € pour un premier corpus cadré, l’import des documents et une interface de questions. Ensuite le budget suit le volume, les droits par profil et les connecteurs. Devis gratuit.',
  },
  {
    question: 'PDF scannés ?',
    answer:
      'Reconnaissance de texte et nettoyage ; la qualité varie selon les scans : on teste tôt sur un échantillon pour être honnêtes sur le résultat.',
  },
  {
    question: 'Plusieurs langues ?',
    answer:
      'Possible avec une version des contenus par langue ; le coût et l’entretien augmentent.',
  },
  {
    question: 'À quelle fréquence actualiser ?',
    answer:
      'Import la nuit ou à chaque publication : selon votre site ou votre drive.',
  },
  {
    question: 'Risque de mauvaise réponse ?',
    answer:
      'Consignes pour refuser si le score est bas, citations quand c’est possible : on réduit fortement le « vrai en apparence mais faux ».',
  },
  {
    question: 'RGPD ?',
    answer:
      'Limitation des données indexées, droits des personnes, durées de conservation : alignement avec votre référent ou votre DPO.',
  },
] as const;

export const RAG_BASE_CONNAISSANCES_BUDGET = {
  title: 'Budget',
  line: 'Les projets « assistant sur documents » (premier corpus + interface) démarrent souvent à partir de 5 900 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const RAG_BASE_CONNAISSANCES_FINAL_CTA = {
  title: 'Une documentation interne à rendre interrogable sans inventer ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
