/** Contenus page premium `/ia/rag-base-connaissances`. */

export const RAG_BASE_CONNAISSANCES_PATH = '/ia/rag-base-connaissances';

export const RAG_BASE_CONNAISSANCES_KEYWORDS = [
  'RAG entreprise',
  'base de connaissances IA',
  'embeddings retrieval',
  'chunking documents',
  'freelance RAG',
] as const;

export const ragBaseConnaissancesMetaDescription =
  'RAG sur vos documents : chunking, embeddings, retrieval, reranking et évaluation. Pipelines d’ingestion et garde-fous — freelance Clickdev.';

export const ragBaseConnaissancesMetaTitle = 'RAG & base de connaissances — Retrieval fiable | Clickdev';

export const RAG_BASE_CONNAISSANCES_HERO = {
  chapter: 'Chapitre 03.5 · RAG',
  subline: 'Développeur freelance — Retrieval augmenté',
  h1: 'RAG et base de connaissances sur mesure',
  lead:
    'Un RAG efficace dépend du découpage des documents, de la qualité des embeddings et du reranking. Je mets en place des jeux de questions/réponses attendues, des métriques simples (citations correctes) et des garde-fous quand la base ne contient pas la réponse — pour éviter la confabulation avec votre logo dessus.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${RAG_BASE_CONNAISSANCES_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const RAG_BASE_CONNAISSANCES_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Des réponses ancrées dans vos sources',
  subtitle: 'Mieux vaut “je ne sais pas” qu’une réponse plausible mais fausse.',
  items: [
    {
      title: 'Stratégie de chunking',
      body: 'Titres, tables, PDF scannés : le découpage n’est pas anodin pour le retrieval.',
    },
    {
      title: 'Ingestion & invalidation',
      body: 'Webhooks, batch, versioning des documents ingérés et purge du vectoriel.',
    },
    {
      title: 'Évaluation continue',
      body: 'Jeux de Q/R métier, taux de hit, analyse des échecs pour enrichir la base.',
    },
    {
      title: 'Sécurité d’accès',
      body: 'Filtrage par rôle : un utilisateur ne retrieve que ce qu’il a le droit de lire.',
    },
  ],
} as const;

export const RAG_BASE_CONNAISSANCES_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Vector DB : le choix dépend de la volumétrie — pas de la mode',
} as const;

export const RAG_BASE_CONNAISSANCES_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Support, conformité, R&D interne.',
  cards: [
    { title: 'Support & success', body: 'FAQ interne, procédures, release notes : une seule porte d’entrée.' },
    { title: 'Juridique & compliance', body: 'Sources officielles, dates de version, citations traçables.' },
    { title: 'Ingénierie', body: 'Specs dispersées : retrieval sur corpus technique.' },
    { title: 'Grandes bases documentaires', body: 'Quand la recherche plein texte seule ne suffit plus.' },
  ],
} as const;

export const RAG_BASE_CONNAISSANCES_COMPARE = {
  kicker: 'Décision',
  title: 'Recherche classique, RAG, ou fine-tuning ?',
  subtitle: 'Le RAG gagne quand les documents changent souvent et sont la source de vérité.',
  columns: ['Recherche keyword', 'RAG', 'Fine-tuning'] as const,
  rows: [
    { label: 'Corpus qui change souvent', c: [false, true, false] as const },
    { label: 'Besoin de citations sources', c: [false, true, false] as const },
    { label: 'Ton & style figés sur marque', c: [false, true, true] as const },
    { label: 'Mise en place rapide', c: [true, true, false] as const },
    { label: 'Coût infra maîtrisable au départ', c: [true, true, false] as const },
    { label: 'Données structurées simples', c: [true, false, false] as const },
  ],
} as const;

export const RAG_BASE_CONNAISSANCES_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour un RAG fiable',
  steps: [
    { n: '01', title: 'Audit corpus', body: 'Formats, doublons, droits d’accès, fraîcheur.' },
    { n: '02', title: 'Chunking & métadonnées', body: 'Titres, liens parent, ACL pour filtrer au query time.' },
    { n: '03', title: 'Index & rerank', body: 'Embeddings, top-k, reranker si besoin.' },
    { n: '04', title: 'Garde-fous génération', body: 'Refus si score bas, prompts pour citer ou s’abstenir.' },
    { n: '05', title: 'Run & amélioration', body: 'Logs de requêtes, trous du corpus, boucle éditoriale.' },
  ],
} as const;

export const RAG_BASE_CONNAISSANCES_STACK = {
  kicker: 'Stack',
  title: 'Retrieval & stockage vectoriel',
  body:
    'OpenAI / Cohere embeddings, pgvector, Pinecone, Weaviate selon contraintes ; orchestration Next.js ou Python.',
  labels: ['OpenAI', 'pgvector', 'Pinecone', 'LangChain', 'Python', 'Next.js', 'Sanity'],
} as const;

export const RAG_BASE_CONNAISSANCES_CASES = {
  kicker: 'Portfolio',
  title: 'Outils et plateformes avec fort volet intégration',
  intro: 'Réalisations récentes — détail sur chaque étude de cas.',
} as const;

export const RAG_BASE_CONNAISSANCES_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — RAG',
  subtitle: 'Vector DB, coûts, mises à jour.',
} as const;

export const RAG_BASE_CONNAISSANCES_FAQ_ITEMS = [
  {
    question: 'Vector DB ?',
    answer:
      'Choix selon volumétrie, latence et contraintes d’hébergement (cloud managé vs self-hosted). Le cadrage inclut coût et reprise après incident.',
  },
  {
    question: 'Combien coûte un RAG ?',
    answer:
      'Souvent à partir de 5 900 € pour un premier corpus cadré, ingestion et interface de questionnement. Au-delà, le budget suit la volumétrie, les ACL, et le nombre de connecteurs. Devis gratuit.',
  },
  {
    question: 'PDF scannés ?',
    answer:
      'OCR + nettoyage ; qualité variable : on teste tôt sur un échantillon pour calibrer les attentes.',
  },
  {
    question: 'Multilingue ?',
    answer:
      'Possible avec index ou champs de langue ; coût d’embedding et de maintenance augmente.',
  },
  {
    question: 'Fréquence d’actualisation ?',
    answer:
      'Batch nocturne ou webhook à la publication : selon votre CMS / drive.',
  },
  {
    question: 'Hallucinations ?',
    answer:
      'Prompts d’abstention, scores, citations obligatoires : on réduit drastiquement le risque “plausible mais faux”.',
  },
  {
    question: 'RGPD ?',
    answer:
      'Minimisation, droits sur données indexées, durées de rétention : alignement avec votre DPO.',
  },
] as const;

export const RAG_BASE_CONNAISSANCES_BUDGET = {
  title: 'Budget',
  line: 'Les projets RAG (premier corpus + interface) démarrent souvent à partir de 5 900 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const RAG_BASE_CONNAISSANCES_FINAL_CTA = {
  title: 'Une base documentaire à rendre interrogable sans inventer ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis RAG',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
