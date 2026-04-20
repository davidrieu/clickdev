/** Contenus page premium `/ia/chatbot-ia`. */

export const CHATBOT_IA_PATH = '/ia/chatbot-ia';

export const CHATBOT_IA_KEYWORDS = [
  'chatbot IA',
  'assistant conversationnel entreprise',
  'chatbot site web freelance',
  'RAG chatbot',
  'freelance chatbot IA',
] as const;

export const chatbotIaMetaDescription =
  'Chatbot IA sur mesure : scénarios, sources de vérité, handoff humain, intégration CRM/helpdesk. Freelance Clickdev — devis gratuit.';

export const chatbotIaMetaTitle = 'Chatbot IA — Scénarios, fiabilité & intégrations | Clickdev';

export const CHATBOT_IA_HERO = {
  chapter: 'Chapitre 03.2 · Chatbot IA',
  subline: 'Développeur freelance — Support & conversion',
  h1: 'Conception de chatbot IA utile et fiable',
  lead:
    'Un chatbot qui réduit le temps de première réponse sans inventer des réponses : scénarios explicites, corpus versionné, handoff propre vers un humain quand le sujet dépasse le périmètre. Widget web, helpdesk ou messagerie : l’architecture suit vos canaux.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${CHATBOT_IA_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const CHATBOT_IA_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Un assistant qui sait dire “je ne sais pas”',
  subtitle: 'Mieux vaut une abstention qu’une hallucination sur votre marque.',
  items: [
    {
      title: 'Sources de vérité branchées',
      body: 'FAQ, Notion, base interne : retrieval + citations quand le format s’y prête.',
    },
    {
      title: 'Garde-fous & sujets hors scope',
      body: 'Limites claires, refus polis, escalade humaine sur les cas sensibles.',
    },
    {
      title: 'Intégration CRM / helpdesk',
      body: 'Création de ticket, tags, métadonnées : le chatbot alimente vos outils existants.',
    },
    {
      title: 'Mesure & amélioration',
      body: 'Intentions, abandons, temps gagné : des métriques pour prioriser les contenus manquants.',
    },
  ],
} as const;

export const CHATBOT_IA_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Chatbot marketing vs chatbot support : même tech, pas même risque',
} as const;

export const CHATBOT_IA_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Support, sales, ou self-service sur votre site.',
  cards: [
    { title: 'Équipes support saturées', body: 'Réponses brouillon, tri des tickets, FAQ dynamique : soulagement mesurable.' },
    { title: 'Sites à fort trafic', body: 'Qualification avant formulaire ou appel : moins de bruit pour les humains.' },
    { title: 'SaaS B2B', body: 'Onboarding conversationnel, liens vers la doc : moins de “je n’ai pas trouvé”.' },
    { title: 'Marques réglementées', body: 'Ton maîtrisé, disclaimers, traçabilité : le chatbot ne remplace pas la conformité.' },
  ],
} as const;

export const CHATBOT_IA_COMPARE = {
  kicker: 'Décision',
  title: 'Widget no-code, sur mesure, ou humain seul ?',
  subtitle: 'Le bon choix dépend du volume, de la sensibilité des réponses, et de vos systèmes.',
  columns: ['No-code rapide', 'Sur mesure', 'Humain seul'] as const,
  rows: [
    { label: 'Mise en ligne en jours', c: [true, false, true] as const },
    { label: 'Contrôle fin du retrieval & prompts', c: [false, true, false] as const },
    { label: 'Intégration profonde CRM / API', c: [false, true, false] as const },
    { label: 'Coût récurrent modéré au départ', c: [true, false, false] as const },
    { label: 'Tolérance zéro aux erreurs factuelles', c: [false, true, true] as const },
    { label: 'Scalabilité forte', c: [true, true, false] as const },
  ],
} as const;

export const CHATBOT_IA_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour un chatbot adopté',
  steps: [
    { n: '01', title: 'Parcours & intents', body: 'Questions réelles clients, priorités, sujets interdits.' },
    { n: '02', title: 'Corpus & structure', body: 'Sources, fraîcheur, ownership : qui met à jour quoi.' },
    { n: '03', title: 'Prototype conversationnel', body: 'Ton, longueur, handoff : test interne avant public.' },
    { n: '04', title: 'Intégrations', body: 'Widget, auth utilisateur, webhooks vers votre stack.' },
    { n: '05', title: 'Pilote & itération', body: 'Logs, corrections, enrichissement du corpus selon les trous.' },
  ],
} as const;

export const CHATBOT_IA_STACK = {
  kicker: 'Stack',
  title: 'RAG, streaming, canaux',
  body:
    'Next.js ou API dédiée, streaming SSE, embeddings + vector store, connecteurs helpdesk (Zendesk, Intercom…) selon besoin.',
  labels: ['Next.js', 'OpenAI', 'Anthropic', 'pgvector', 'SSE', 'Zendesk', 'Intercom'],
} as const;

export const CHATBOT_IA_CASES = {
  kicker: 'Portfolio',
  title: 'Outils et expériences digitales récentes',
  intro: 'Réalisations — dont automatisations et produits avec composants conversationnels.',
} as const;

export const CHATBOT_IA_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — chatbot IA',
  subtitle: 'Canaux, coûts, fiabilité.',
} as const;

export const CHATBOT_IA_FAQ_ITEMS = [
  {
    question: 'Chatbot sur le site ou sur WhatsApp ?',
    answer:
      'Les deux sont possibles selon vos canaux : widget web, messagerie, ou intégration helpdesk. Le périmètre détermine l’architecture (webhooks, OAuth, stockage).',
  },
  {
    question: 'Combien coûte un chatbot IA ?',
    answer:
      'Souvent à partir de 3 900 € pour un périmètre FAQ + handoff cadré. Au-delà, le prix suit le nombre de sources, des langues, et des intégrations API. Devis gratuit.',
  },
  {
    question: 'Comment limiter les hallucinations ?',
    answer:
      'RAG sur sources validées, refus hors corpus, seuils de confiance, et humain sur les catégories sensibles.',
  },
  {
    question: 'Données clients dans le LLM ?',
    answer:
      'Évité par défaut : anonymisation, agrégation, et traitement côté serveur avec politiques claires.',
  },
  {
    question: 'Multilingue ?',
    answer:
      'Possible avec stratégie de contenu par langue ; coût et maintenance augmentent avec le nombre de corpus.',
  },
  {
    question: 'Hébergement des conversations ?',
    answer:
      'Durée de rétention définie avec vous, chiffrement en transit, accès restreints — cadré au devis.',
  },
  {
    question: 'Maintenance ?',
    answer:
      'Forfait mensuel ou tickets : évolution des prompts, mises à jour SDK, suivi des coûts tokens.',
  },
] as const;

export const CHATBOT_IA_BUDGET = {
  title: 'Budget',
  line: 'Les chatbots IA (FAQ + handoff) démarrent souvent à partir de 3 900 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const CHATBOT_IA_FINAL_CTA = {
  title: 'Un canal support à soulager sans prendre de risques réputationnels ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis chatbot',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
