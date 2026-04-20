/** Contenus page premium `/ia/integration-ia` — ton accessible. */

export const INTEGRATION_IA_PATH = '/ia/integration-ia';

export const INTEGRATION_IA_KEYWORDS = [
  'intégration IA site web',
  'IA dans application mobile',
  'assistant sur mesure site',
  'freelance intégration IA',
  'ChatGPT sur mon site',
] as const;

export const integrationIaMetaDescription =
  'Intégrer l’IA dans votre site ou votre application : assistant, formulaires intelligents, réponses cadrées. Sécurité, budget et suivi — Clickdev, devis gratuit.';

export const integrationIaMetaTitle = 'IA dans votre site ou appli — Intégration sur mesure | Clickdev';

export const INTEGRATION_IA_HERO = {
  chapter: 'Chapitre 03.1 · Intégration IA',
  subline: 'Développeur freelance — Sites & applications',
  h1: 'Mettre de l’intelligence artificielle dans ce que vous avez déjà',
  lead:
    'Vous avez un site ou une application : on peut y ajouter des fonctions “intelligentes” — aide à la rédaction, réponses aux questions fréquentes, tri de demandes — sans tout refaire. Les accès sensibles restent côté serveur, le coût d’utilisation est surveillé, et on peut commencer par un petit périmètre pour voir si ça vous convient.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${INTEGRATION_IA_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const INTEGRATION_IA_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Une intégration qu’on peut expliquer et faire évoluer',
  subtitle: 'Pas de boîte noire : vous savez ce que fait l’IA et ce qu’elle ne doit pas faire.',
  items: [
    {
      title: 'On clarifie l’objectif avant le code',
      body: 'Gagner du temps au support ? Mieux orienter les visiteurs ? On définit ce qui compte pour vous.',
    },
    {
      title: 'Vos informations restent maîtrisées',
      body: 'On n’envoie au service d’IA que ce qui est utile ; le reste reste chez vous, avec les bons mots de passe et accès.',
    },
    {
      title: 'Suivi du budget “IA”',
      body: 'Les appels aux services type ChatGPT ont un coût : on met en place des garde-fous pour ne pas avoir de mauvaise surprise.',
    },
    {
      title: 'Une note pour la suite',
      body: 'Résumé de ce qui a été branché et comment le désactiver ou l’améliorer plus tard.',
    },
  ],
} as const;

export const INTEGRATION_IA_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Commencer petit, mesurer, puis élargir',
} as const;

export const INTEGRATION_IA_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Toute structure qui veut de l’IA utile dans son outil du quotidien.',
  cards: [
    {
      title: 'Vous avez déjà un site ou une appli',
      body: 'On ajoute une brique (assistant, aide contextuelle) sans forcément tout reconstruire.',
    },
    {
      title: 'Vous testez l’IA “à la main” aujourd’hui',
      body: 'On transforme ces essais en quelque chose de stable, intégré à votre parcours clients.',
    },
    {
      title: 'Vous voulez éviter le “chaque outil sa clé API”',
      body: 'Un point central pour les accès et les règles, plus simple à gérer pour votre équipe.',
    },
    {
      title: 'Vous grandissez et le temps manque',
      body: 'L’objectif est que le gain de temps dépasse clairement le coût de la solution.',
    },
  ],
} as const;

export const INTEGRATION_IA_COMPARE = {
  kicker: 'Décision',
  title: 'Fonction toute faite, accompagnement sur mesure, ou on attend ?',
  subtitle: 'Le bon choix dépend de votre outil actuel, de votre budget et de l’urgence.',
  columns: ['Option intégrée au logiciel', 'Sur mesure avec moi', 'On garde l’existant'] as const,
  rows: [
    { label: 'Mise en ligne très rapide', c: [true, false, true] as const },
    { label: 'Adapté à votre façon de travailler', c: [false, true, false] as const },
    { label: 'Contrôle fin des messages et des règles', c: [false, true, true] as const },
    { label: 'Coût initial modeste', c: [true, false, true] as const },
    { label: 'Évolutif sur mesure besoins', c: [false, true, true] as const },
    { label: 'Peu d’implication de votre côté', c: [true, false, true] as const },
  ],
} as const;

export const INTEGRATION_IA_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour intégrer l’IA sereinement',
  steps: [
    { n: '01', title: 'Échange & cadrage', body: 'Ce que vous voulez améliorer, ce qui est interdit, quelques exemples concrets.' },
    { n: '02', title: 'Parcours utilisateur', body: 'Où l’IA intervient, quand une personne reprend la main, que se passe-t-il en cas d’erreur.' },
    { n: '03', title: 'Mise en œuvre technique', body: 'Connexion à votre site ou appli, comptes et mots de passe au bon endroit, temps de réponse raisonnables.' },
    { n: '04', title: 'Essai contrôlé', body: 'On mesure qualité et coût sur un échantillon réel avant d’ouvrir à tout le monde.' },
    { n: '05', title: 'Mise en service & suivi', body: 'Alertes simples si ça coince, puis améliorations quand vous avez du retour terrain.' },
  ],
} as const;

export const INTEGRATION_IA_STACK = {
  kicker: 'Technologies',
  title: 'Des briques solides, sans jargon inutile',
  body:
    'Souvent un site Next.js ou une API derrière votre application, avec les services d’OpenAI ou équivalents pour la partie “intelligente”. L’important est que ça reste maintenable pour vous.',
  labels: ['Sites web', 'Apps mobiles', 'OpenAI', 'Next.js', 'API sécurisée', 'Suivi'],
} as const;

export const INTEGRATION_IA_CASES = {
  kicker: 'Portfolio',
  title: 'Outils et plateformes livrés en conditions réelles',
  intro: 'Études de cas récentes — dont intégrations et produits avec fonctions intelligentes.',
} as const;

export const INTEGRATION_IA_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — intégration IA',
  subtitle: 'Essai, coûts, données, maintenance.',
} as const;

export const INTEGRATION_IA_FAQ_ITEMS = [
  {
    question: 'On peut commencer par un petit test ?',
    answer:
      'Oui, c’est même recommandé : un périmètre clair sur quelques semaines permet de voir si la qualité et le budget vous conviennent avant d’aller plus loin.',
  },
  {
    question: 'Où passent les demandes vers l’IA ?',
    answer:
      'En général par votre serveur ou votre hébergement : ainsi les clés d’accès ne sont pas exposées sur le navigateur de vos visiteurs.',
  },
  {
    question: 'Combien coûte une intégration ?',
    answer:
      'Souvent à partir de 4 900 € pour un premier module ou un essai bien cadré. Ensuite le budget dépend du nombre de parcours, des contenus à brancher et des outils métiers. Devis gratuit.',
  },
  {
    question: 'Faut-il choisir un fournisseur précis ?',
    answer:
      'Non : on choisit selon la qualité des réponses, la rapidité et le coût sur vos cas. L’objectif est un critère mesurable, pas une marque imposée.',
  },
  {
    question: 'Et quand les services d’IA changent ?',
    answer:
      'On versionne les consignes et les scénarios comme du code classique, avec des tests sur vos exemples pour limiter les mauvaises surprises.',
  },
  {
    question: 'RGPD et données personnelles ?',
    answer:
      'On limite ce qui est envoyé et on documente le flux ; le cadre légal final reste avec vous ou votre conseil, je mets en œuvre ce que vous validez.',
  },
  {
    question: 'Vous pouvez former mon équipe ?',
    answer:
      'Oui : passation orale, petit guide écrit, et bonnes pratiques pour que vos développeurs puissent faire évoluer le tout sans casser les garde-fous.',
  },
] as const;

export const INTEGRATION_IA_BUDGET = {
  title: 'Budget',
  line: 'Les intégrations IA (essai ou premier module) démarrent souvent à partir de 4 900 €',
  note: 'Devis gratuit, personnalisé, sans engagement.',
} as const;

export const INTEGRATION_IA_FINAL_CTA = {
  title: 'Vous voulez de l’IA dans votre site ou votre appli, sans prise de tête ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis intégration IA',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
