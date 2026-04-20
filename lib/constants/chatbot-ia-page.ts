/** Contenus page premium `/ia/chatbot-ia` — ton accessible. */

export const CHATBOT_IA_PATH = '/ia/chatbot-ia';

export const CHATBOT_IA_KEYWORDS = [
  'chatbot site web',
  'assistant conversationnel entreprise',
  'chatbot pour boutique en ligne',
  'freelance chatbot IA',
  'réponses automatiques site',
] as const;

export const chatbotIaMetaDescription =
  'Chatbot sur votre site ou votre boutique : réponses basées sur vos textes, transfert vers une vraie personne, lien avec vos outils. Clickdev — devis gratuit.';

export const chatbotIaMetaTitle = 'Chatbot & assistant sur le site — Réponses utiles | Clickdev';

export const CHATBOT_IA_HERO = {
  chapter: 'Chapitre 03.2 · Chatbot IA',
  subline: 'Développeur freelance — Support & ventes',
  h1: 'Un chatbot qui aide vos visiteurs — sans inventer',
  lead:
    'L’idée est simple : répondre plus vite aux questions récurrentes, orienter vers la bonne page ou le bon formulaire, et passer la main à un humain quand le sujet est délicat. Le chatbot s’appuie sur vos textes (FAQ, conditions, catalogue) pour limiter les réponses “dans le vide”. Sur le site, dans une appli ou relié à votre outil de support : on adapte le canal.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${CHATBOT_IA_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const CHATBOT_IA_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Un assistant qui sait dire « je ne sais pas »',
  subtitle: 'Mieux vaut proposer de contacter une personne qu’affirmer une fausseté avec votre logo.',
  items: [
    {
      title: 'Branché sur vos contenus',
      body: 'FAQ, pages du site, notices : les réponses restent proches de ce que vous avez déjà publié.',
    },
    {
      title: 'Limites et sujets sensibles',
      body: 'Sujets hors périmètre, ton adapté à votre marque, escalade vers un humain quand c’est nécessaire.',
    },
    {
      title: 'Lien avec vos outils',
      body: 'Création de ticket, étiquettes, suivi : le chatbot nourrit ce que vous utilisez déjà (support, CRM).',
    },
    {
      title: 'Amélioration dans le temps',
      body: 'On regarde ce que les gens demandent vraiment pour compléter les contenus ou ajuster le parcours.',
    },
  ],
} as const;

export const CHATBOT_IA_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Chatbot marketing et chatbot support : pas le même enjeu',
} as const;

export const CHATBOT_IA_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Support, ventes ou self-service sur votre site.',
  cards: [
    { title: 'Équipes support débordées', body: 'Brouillons de réponse, tri des demandes, FAQ dynamique : du temps gagné au quotidien.' },
    { title: 'Sites avec beaucoup de visites', body: 'Qualifier avant un appel ou un formulaire : moins de demandes inutiles pour vos équipes.' },
    { title: 'Logiciels en ligne (SaaS)', body: 'Aider les nouveaux utilisateurs à trouver la bonne aide sans relire toute la doc.' },
    { title: 'Secteurs avec exigence de prudence', body: 'Ton encadré, mentions légales : l’outil assiste, il ne remplace pas vos obligations.' },
  ],
} as const;

export const CHATBOT_IA_COMPARE = {
  kicker: 'Décision',
  title: 'Outil tout prêt, sur mesure, ou uniquement humain ?',
  subtitle: 'Ça dépend du volume, de la sensibilité des sujets et de vos systèmes.',
  columns: ['Solution clé en main', 'Sur mesure', 'Équipe seule'] as const,
  rows: [
    { label: 'Mise en ligne en peu de temps', c: [true, false, true] as const },
    { label: 'Contrôle fin des sources et des réponses', c: [false, true, false] as const },
    { label: 'Connexion poussée à vos outils métiers', c: [false, true, false] as const },
    { label: 'Coût récurrent modeste au départ', c: [true, false, false] as const },
    { label: 'Très peu de risque d’erreur factuelle', c: [false, true, true] as const },
    { label: 'Tient la charge si le trafic augmente', c: [true, true, false] as const },
  ],
} as const;

export const CHATBOT_IA_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour un chatbot adopté',
  steps: [
    { n: '01', title: 'Questions & priorités', body: 'Ce que vos clients demandent vraiment, ce qui est prioritaire, ce qui est tabou.' },
    { n: '02', title: 'Sources & mise à jour', body: 'Quels textes utiliser, qui les met à jour, à quelle fréquence.' },
    { n: '03', title: 'Essai interne', body: 'Ton, longueur des messages, passage à un humain : on ajuste avant l’ouverture au public.' },
    { n: '04', title: 'Intégration', body: 'Fenêtre sur le site, compte utilisateur si besoin, liens vers vos outils.' },
    { n: '05', title: 'Lancement progressif', body: 'Retours, corrections, enrichissement des contenus selon les trous repérés.' },
  ],
} as const;

export const CHATBOT_IA_STACK = {
  kicker: 'Technologies',
  title: 'Ce qui tourne derrière',
  body:
    'Souvent une page ou une API dédiée, avec réponses qui arrivent au fil de l’eau pour une conversation fluide, et vos contenus indexés pour que l’assistant reste proche de la réalité.',
  labels: ['Site web', 'OpenAI', 'Support client', 'Formulaires', 'Messagerie'],
} as const;

export const CHATBOT_IA_CASES = {
  kicker: 'Portfolio',
  title: 'Outils et expériences digitales récentes',
  intro: 'Réalisations — dont automatisations et produits avec partie conversationnelle.',
} as const;

export const CHATBOT_IA_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — chatbot',
  subtitle: 'Canaux, coûts, fiabilité.',
} as const;

export const CHATBOT_IA_FAQ_ITEMS = [
  {
    question: 'Sur le site, sur WhatsApp, ou les deux ?',
    answer:
      'Les deux sont possibles selon vos canaux : fenêtre sur le site, messagerie, ou lien avec votre outil de tickets. Le périmètre fixe la façon de brancher les choses.',
  },
  {
    question: 'Combien coûte un chatbot ?',
    answer:
      'Souvent à partir de 3 900 € pour une FAQ claire + transfert vers un humain. Ensuite le prix suit le nombre de sources, les langues et les connexions avec d’autres logiciels. Devis gratuit.',
  },
  {
    question: 'Comment limiter les mauvaises réponses ?',
    answer:
      'On s’appuie sur vos textes validés, on refuse de répondre hors sujet, et une personne reprend la main sur les cas sensibles.',
  },
  {
    question: 'Les données clients partent vers l’IA ?',
    answer:
      'On évite autant que possible : anonymisation, traitement côté serveur, et règles claires sur ce qui peut être envoyé.',
  },
  {
    question: 'Plusieurs langues ?',
    answer:
      'Possible, avec un contenu par langue ; le coût et l’entretien augmentent avec le nombre de versions.',
  },
  {
    question: 'On garde l’historique des conversations ?',
    answer:
      'Durée de conservation définie avec vous, accès restreint, chiffrement en transit — cadré dans le devis.',
  },
  {
    question: 'Et la maintenance ?',
    answer:
      'Forfait mensuel ou au ticket : évolution des scénarios, mises à jour techniques, suivi du coût d’utilisation.',
  },
] as const;

export const CHATBOT_IA_BUDGET = {
  title: 'Budget',
  line: 'Les chatbots (FAQ + transfert humain) démarrent souvent à partir de 3 900 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const CHATBOT_IA_FINAL_CTA = {
  title: 'Vous voulez soulager le support sans prendre de risque sur votre image ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis chatbot',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
