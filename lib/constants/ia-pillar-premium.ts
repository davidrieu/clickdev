/** Contenu page pilier premium `/ia`. */

export const IA_PILLAR_PATH = '/ia';

export const IA_PILLAR_HERO = {
  chapter: 'Chapitre 03 · Intelligence artificielle',
  subline: 'Développeur freelance — Produit, données, garde-fous',
  h1: 'Intégration IA utile, mesurable et maîtrisée',
  lead:
    'L’IA générative sert quand elle réduit un coût, accélère une décision ou améliore l’expérience — pas pour afficher un gadget. APIs OpenAI / Anthropic, RAG sur vos documents, agents avec outils, chatbots et automatisations : je conçois des flux avec budgets tokens, journaux et validation humaine quand il le faut.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${IA_PILLAR_PATH}#offres`, label: 'Voir les offres' },
} as const;

export const IA_PILLAR_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'De l’IA branchée sur vos règles — pas sur du vent',
  subtitle: 'Garde-fous, coûts et sécurité : le trio qui évite le POC éternel.',
  items: [
    {
      title: 'Périmètre & ROI cadrés',
      body: 'On commence par ce qui est mesurable (temps gagné, tickets évités, leads qualifiés) avant d’élargir.',
    },
    {
      title: 'Données minimisées & tracées',
      body: 'Filtrage avant envoi au modèle, rétention claire, journaux pour expliquer une réponse automatique.',
    },
    {
      title: 'Prompts et pipelines versionnés',
      body: 'Comme du code : revue, tests sur cas limites, rollback quand une release dégrade la qualité.',
    },
    {
      title: 'Exploitation sans boîte noire',
      body: 'Monitoring latences, quotas, erreurs ; documentation pour que votre équipe itère sans dépendre d’une seule tête.',
    },
  ],
} as const;

export const IA_PILLAR_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Pourquoi 80 % de la valeur vient souvent sans fine-tuning',
} as const;

export const IA_PILLAR_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Qui est concerné',
  subtitle: 'Produit, support, ops, e-commerce : les cas d’usage diffèrent, la discipline non.',
  cards: [
    {
      title: 'Produits SaaS & plateformes',
      body: 'Assistants, agents, features IA visibles : qualité, coût marginal et repli si le fournisseur flanche.',
    },
    {
      title: 'Support & success',
      body: 'RAG sur FAQ interne, brouillons d’articles, qualification : moins de copier-coller, plus de temps humain sur le dur.',
    },
    {
      title: 'Ops & back-office',
      body: 'Extraction, classification, routage : automatisation observable avec file d’attente humaine.',
    },
    {
      title: 'E-commerce & contenus',
      body: 'Fiches, search conversationnelle : templates et validation humaine sur le sensible (légal, specs).',
    },
  ],
} as const;

export const IA_PILLAR_COMPARE = {
  kicker: 'Décision',
  title: 'Widget IA, intégration sur mesure, ou rien ?',
  subtitle: 'Le bon choix dépend de votre donnée, de votre dette, et de ce que vous acceptez de ne pas contrôler.',
  columns: ['SaaS “IA” intégré', 'Intégration sur mesure', 'Pas d’IA'] as const,
  rows: [
    { label: 'Time-to-market très rapide', c: [true, false, true] as const },
    { label: 'Contrôle fin des prompts & logs', c: [false, true, false] as const },
    { label: 'Données sensibles maîtrisées', c: [false, true, true] as const },
    { label: 'Coût marginal tokens maîtrisable', c: [false, true, true] as const },
    { label: 'Évolution sans plafond du produit', c: [false, true, true] as const },
    { label: 'Zéro dette technique', c: [true, false, true] as const },
  ],
} as const;

export const IA_PILLAR_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour une intégration IA sérieuse',
  steps: [
    {
      n: '01',
      title: 'Cas d’usage & risques',
      body: 'ROI hypothèse, données impliquées, actions automatiques : on liste ce qui ne doit jamais partir sans humain.',
    },
    {
      n: '02',
      title: 'Architecture & fournisseurs',
      body: 'Modèles, DPA, hébergement, clés : le cadre légal et technique avant la première ligne de prompt.',
    },
    {
      n: '03',
      title: 'POC mesurable',
      body: 'Périmètre court, métriques simples, jeux de tests : on valide coût et qualité avant d’industrialiser.',
    },
    {
      n: '04',
      title: 'Prod & observabilité',
      body: 'Quotas, alertes, versions, rollback : l’IA devient un composant observable comme une API.',
    },
    {
      n: '05',
      title: 'Itération & formation',
      body: 'Roadmap, handoff équipe, garde-fous renforcés selon les retours terrain.',
    },
  ],
} as const;

export const IA_PILLAR_STACK = {
  kicker: 'Stack',
  title: 'APIs, orchestration, retrieval',
  body:
    'OpenAI / Anthropic, embeddings, vector DB (Pinecone, Supabase pgvector…), LangChain ou orchestration maison, n8n/Make pour prototypes — toujours avec secrets côté serveur.',
  labels: ['OpenAI', 'Anthropic', 'LangChain', 'pgvector', 'n8n', 'Next.js', 'Python', 'TypeScript'],
} as const;

export const IA_PILLAR_CASES = {
  kicker: 'Portfolio',
  title: 'Outils, plateformes et produits digitaux récents',
  intro: 'Sélection orientée outils & e-commerce — détail sur chaque étude de cas.',
} as const;

export const IA_PILLAR_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — IA en produit',
  subtitle: 'Coûts, sécurité, chatbot vs agent, RAG.',
} as const;

export const IA_PILLAR_FAQ_ITEMS = [
  {
    question: 'Faut-il fine-tuner un modèle ?',
    answer:
      'Rarement en première étape : prompt engineering, function calling et RAG donnent souvent 80 % de la valeur. Le fine-tuning se discute quand le volume et la stabilité des données le justifient.',
  },
  {
    question: 'Combien coûte une intégration IA ?',
    answer:
      'Les coûts dépendent du volume d’appels, du modèle, et de la complexité du pipeline (RAG, agents, intégrations). Un POC cadré permet de mesurer le coût marginal avant industrialisation.',
  },
  {
    question: 'Quelle différence avec un simple chatbot ?',
    answer:
      'Un chatbot peut être une fenêtre de chat. Une intégration produit relie l’IA à vos données, règles métier et actions (ticket, CRM, email validé).',
  },
  {
    question: 'Mes données partent chez OpenAI ?',
    answer:
      'Seulement ce que vous décidez explicitement, avec options entreprise / zéro rétention quand c’est disponible, et filtrage des champs sensibles en amont.',
  },
  {
    question: 'Agents IA ou simple prompt ?',
    answer:
      'Les agents enchaînent outils et étapes ; le surcoût doit être payé par un gain mesurable. Sinon on reste sur un flux plus simple et plus auditable.',
  },
  {
    question: 'RGPD et IA ?',
    answer:
      'Minimisation, base légale, DPA avec le fournisseur, documentation des traitements : on cadrage avec votre contexte, je ne remplace pas un juriste.',
  },
  {
    question: 'Pouvez-vous reprendre une intégration existante ?',
    answer:
      'Oui : audit des prompts, coûts, points de fuite données, puis plan de durcissement ou migration vers un stack plus maîtrisable.',
  },
  {
    question: 'Et le SEO avec l’IA générative ?',
    answer:
      'Voir le silo SEO et la page dédiée e-commerce : duplicate, canonical, validation humaine sur les contenus sensibles.',
  },
] as const;

export function iaPillarFaqJsonLdItems(): { question: string; answer: string }[] {
  return [...IA_PILLAR_FAQ_ITEMS];
}

export const IA_PILLAR_FINAL_CTA = {
  title: 'Un cas d’usage IA à cadrer avant de scaler ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis IA',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
