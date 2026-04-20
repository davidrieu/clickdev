/** Contenu page pilier premium `/ia` — ton accessible (sites, apps, chatbots). */

export const IA_PILLAR_PATH = '/ia';

export const IA_PILLAR_HERO = {
  chapter: 'Chapitre 03 · Intelligence artificielle',
  subline: 'Développeur freelance — Pour votre site, votre appli, votre équipe',
  h1: 'L’intelligence artificielle au service de vos clients — sans prise de tête',
  lead:
    'Beaucoup de monde veut “mettre de l’IA” : moi je m’en sers pour des choses concrètes — aider vos visiteurs sur le site, soulager le support, accélérer un peu le quotidien dans l’entreprise. Chatbots, assistants dans une application mobile, petites automatisations : on choisit ce qui a du sens pour vous, avec un œil sur le budget et la confidentialité.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${IA_PILLAR_PATH}#offres`, label: 'Voir les offres' },
} as const;

export const IA_PILLAR_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Des projets IA qu’on peut expliquer à table',
  subtitle: 'Pas de promesse miracle : des objectifs clairs et un suivi honnête.',
  items: [
    {
      title: 'On commence par l’usage',
      body: 'Moins de temps perdu au téléphone ? Plus de demandes traitées sur le site ? On définit ce qu’on veut améliorer avant de parler technique.',
    },
    {
      title: 'Vos données, traitées avec sérieux',
      body: 'On ne diffuse pas tout “parce que l’IA en a besoin” : on limite ce qui circule, et on reste dans le cadre légal adapté à votre activité.',
    },
    {
      title: 'Une solution qui peut évoluer',
      body: 'Quand ça marche, on peut élargir ; si ça coince, on ajuste sans repartir de zéro à chaque fois.',
    },
    {
      title: 'Vous n’êtes pas prisonnier d’un outil opaque',
      body: 'Je documente ce qui a été fait pour que vous ou une autre personne puissiez reprendre le fil plus tard.',
    },
  ],
} as const;

export const IA_PILLAR_EDITORIAL = {
  kicker: 'Lecture',
  title: 'L’IA utile, ce n’est pas toujours la plus “impressionnante”',
} as const;

export const IA_PILLAR_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'À qui ça s’adresse',
  subtitle: 'Indépendants, PME, associations, ou équipes plus grandes : le principe reste le même.',
  cards: [
    {
      title: 'Vous avez un site ou une boutique en ligne',
      body: 'Formulaire intelligent, petit assistant pour guider l’achat ou répondre aux questions fréquentes.',
    },
    {
      title: 'Vous avez une application mobile',
      body: 'Aide à la saisie, suggestions, parcours plus fluide : toujours dans le respect de votre charte et de vos règles.',
    },
    {
      title: 'Vous noyez sous les e-mails ou les demandes',
      body: 'Un chatbot ou un tri automatique peut faire gagner du temps — avec une vraie personne quand la situation le demande.',
    },
    {
      title: 'Vous vendez en ligne et la rédaction vous prend trop de temps',
      body: 'Aide à rédiger ou reformuler, sous votre contrôle, sans inventer des promesses sur vos produits.',
    },
  ],
} as const;

export const IA_PILLAR_COMPARE = {
  kicker: 'Décision',
  title: 'Une fonction toute faite, un accompagnement sur mesure, ou on attend ?',
  subtitle: 'Ça dépend de votre activité, de votre budget et de ce que vos clients attendent vraiment.',
  columns: ['Solution clé en main', 'Sur mesure avec moi', 'Pas pour tout de suite'] as const,
  rows: [
    { label: 'Mise en place très rapide', c: [true, false, true] as const },
    { label: 'Adapté à votre façon de travailler', c: [false, true, false] as const },
    { label: 'Maîtrise fine des contenus et des messages', c: [false, true, true] as const },
    { label: 'Coût prévisible au départ', c: [true, false, true] as const },
    { label: 'Évolutif sur le long terme', c: [false, true, true] as const },
    { label: 'Zéro réflexion de votre côté', c: [true, false, true] as const },
  ],
} as const;

export const IA_PILLAR_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes simples',
  steps: [
    {
      n: '01',
      title: 'On en parle',
      body: 'Ce qui vous prend du temps aujourd’hui, ce que vos clients reprochent souvent, ce que vous refuseriez qu’une machine fiche toute seule.',
    },
    {
      n: '02',
      title: 'Une proposition claire',
      body: 'Je vous explique ce que je peux faire, dans quel délai, et à quoi ça ressemble côté utilisateur.',
    },
    {
      n: '03',
      title: 'Un petit test si besoin',
      body: 'Souvent on commence petit pour voir si ça colle avant d’engager gros.',
    },
    {
      n: '04',
      title: 'Mise en ligne ou intégration',
      body: 'Sur votre site, dans votre appli, ou dans les outils que vous utilisez déjà.',
    },
    {
      n: '05',
      title: 'Suivi',
      body: 'On regarde ensemble si ça aide vraiment ; on corrige ou on simplifie selon les retours.',
    },
  ],
} as const;

export const IA_PILLAR_STACK = {
  kicker: 'Technologies',
  title: 'Des outils modernes — expliqués simplement',
  body:
    'Selon le projet : site avec Next.js, application mobile, outils comme ChatGPT en arrière-plan pour la partie “intelligente”, ou solutions adaptées aux petites structures. Vous n’avez pas besoin de tout connaître : je choisis ce qui est solide et maintenable.',
  labels: ['Sites web', 'Apps mobiles', 'ChatGPT / OpenAI', 'Automatisations', 'Formulaires', 'E-commerce'],
} as const;

export const IA_PILLAR_CASES = {
  kicker: 'Portfolio',
  title: 'Des projets web, mobiles et outils récents',
  intro: 'Quelques exemples de réalisations — chaque fiche raconte le contexte et le résultat.',
} as const;

export const IA_PILLAR_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes',
  subtitle: 'Prix, données, chatbot, site, appli.',
} as const;

export const IA_PILLAR_FAQ_ITEMS = [
  {
    question: 'Est-ce que l’IA remplace les humains ?',
    answer:
      'Non, l’idée est plutôt d’enlever les tâches répétitives ou d’aider à répondre plus vite. Dès que c’est sensible (litige, santé, argent), une personne garde la main.',
  },
  {
    question: 'Combien ça coûte ?',
    answer:
      'Ça dépend beaucoup du projet : un petit assistant sur le site n’a pas le même prix qu’un gros dispositif sur plusieurs outils. Je vous fais une fourchette honnête après un court échange, sans engagement.',
  },
  {
    question: 'Quelle différence avec un chatbot tout prêt sur internet ?',
    answer:
      'Les outils génériques vont vite mais ne connaissent pas votre activité. Sur mesure, on branche votre contenu, vos règles, et vos canaux (site, mail, etc.).',
  },
  {
    question: 'Mes données sont-elles envoyées aux États-Unis ?',
    answer:
      'On regarde ensemble ce qui est strictement nécessaire et les options proposées par les fournisseurs (souvent des réglages “entreprise” ou européens). Je ne remplace pas un avocat, mais je peux mettre en œuvre ce que vous validez.',
  },
  {
    question: 'C’est pour les grandes entreprises seulement ?',
    answer:
      'Non : un artisan ou une petite équipe peut déjà gagner du temps avec un bon formulaire ou un assistant sur la page contact.',
  },
  {
    question: 'Et si je veux arrêter plus tard ?',
    answer:
      'On prévoit dès le départ que vous restiez propriétaire de vos comptes et de vos contenus, et qu’on puisse désactiver ou remplacer la fonction sans tout casser.',
  },
  {
    question: 'Ça marche avec mon site actuel ?',
    answer:
      'Souvent oui : on peut ajouter une brique sans refaire tout le site. Si une refonte est plus pertinente, je vous le dis franchement.',
  },
  {
    question: 'L’IA et le référencement Google ?',
    answer:
      'Pour le référencement classique, voir aussi le silo SEO. L’important est de ne pas publier des pages vides ou trompeuses “pour le volume”.',
  },
] as const;

export function iaPillarFaqJsonLdItems(): { question: string; answer: string }[] {
  return [...IA_PILLAR_FAQ_ITEMS];
}

export const IA_PILLAR_FINAL_CTA = {
  title: 'Une idée en tête pour votre site, votre appli ou votre équipe ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis',
  secondaryHref: '/contact',
  secondaryLabel: 'Échanger par téléphone',
} as const;
