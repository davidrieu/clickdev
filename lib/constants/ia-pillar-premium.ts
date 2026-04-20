/** Contenu page pilier premium `/ia` — ton accessible (sites, apps, chatbots). */

export const IA_PILLAR_PATH = '/ia';

export const IA_PILLAR_HERO = {
  chapter: 'Chapitre 03 · Intelligence artificielle',
  subline: 'Développeur freelance — IA pratique',
  h1: 'J’intègre l’IA dans vos produits et vos outils',
  lead:
    'L’IA, ce n’est plus seulement ChatGPT ouvert dans un onglet : c’est une techno qu’on peut brancher dans votre site, votre appli ou vos outils internes pour gagner du temps, mieux répondre aux clients, ou enlever les tâches répétitives que tout le monde repousse. Je vous montre où ça vaut le coup — et où ça ne vaut pas le coup — sans slide “transformation digitale” et sans vous noyer dans le jargon.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${IA_PILLAR_PATH}#offres`, label: 'Voir les offres' },
} as const;

export const IA_PILLAR_BENEFITS = {
  kicker: 'Ce que je fais concrètement',
  title: 'De l’IA qui sert à quelque chose dans votre journée',
  subtitle:
    'Pas de démo tape-à-l’œil pour LinkedIn : je préfère un truc modeste qui tourne tous les jours chez vous.',
  items: [
    {
      title: 'Des chatbots qui connaissent vraiment votre boîte',
      body:
        'Pas un widget qui répond “je n’ai pas compris” en boucle : un assistant branché sur vos contenus, votre ton, vos règles — avec une vraie porte de sortie vers un humain quand la situation est sensible.',
    },
    {
      title: 'Des petits agents qui agissent, pas seulement qui discutent',
      body:
        'Qualifier un lead, préparer un brouillon d’e-mail, remplir un champ CRM, déclencher une tâche : je code des flux où l’IA fait un pas de plus que “juste répondre dans une bulle”.',
    },
    {
      title: 'De l’automatisation qui vous rend des heures',
      body:
        'Trier, classer, résumer, extraire : tout ce qui vous fait perdre un mercredi après-midi chaque semaine mérite qu’on regarde si une règle claire + un modèle peut le prendre en charge proprement.',
    },
    {
      title: 'Une IA branchée sur VOS docs (RAG)',
      body:
        'Je branche vos PDF, Notion, fiches produit ou wiki interne pour que les réponses restent ancrées dans ce que vous avez déjà écrit — avec des limites pour éviter les inventions.',
    },
  ],
} as const;

export const IA_PILLAR_EDITORIAL = {
  kicker: 'Lecture',
  title: 'L’IA en entreprise en 2026 : sortir de la hype, rentrer dans le concret',
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
    question: 'Concrètement, l’IA peut faire quoi pour mon entreprise ?',
    answer:
      'Répondre plus vite sur le site, qualifier des demandes, résumer des mails longs, aider à remplir un CRM, proposer des brouillons de texte sous contrôle humain… On commence par un irritant précis, pas par “on met de l’IA partout”.',
  },
  {
    question: 'Combien coûte un chatbot IA personnalisé ?',
    answer:
      'Ça dépend du volume de questions, des langues, des intégrations (prise de rendez-vous, ticketing…) et du niveau de sécurité. En ordre de grandeur, on parle souvent de quelques milliers d’euros pour un premier périmètre sérieux — je vous donne une fourchette après un court échange.',
  },
  {
    question: 'Mes données restent-elles privées ?',
    answer:
      'On limite ce qui part chez les fournisseurs, on évite d’envoyer des infos inutiles, et on choisit des options adaptées à votre secteur. Le cadre légal final reste avec vous ou votre conseil ; je mets en œuvre ce que vous validez.',
  },
  {
    question: 'Quelle différence entre ChatGPT dans un onglet et une IA intégrée sur mesure ?',
    answer:
      'ChatGPT générique ne connaît pas vos règles internes ni votre catalogue à jour. Une intégration sur mesure, c’est votre vocabulaire, vos liens, vos garde-fous — et souvent moins de copier-coller pour l’équipe.',
  },
  {
    question: 'Combien de temps pour intégrer l’IA dans mon outil ?',
    answer:
      'Un pilote ciblé peut aller vite (quelques semaines) ; un dispositif large multi-outils prend plus de temps. Je préfère annoncer large et livrer serré plutôt que l’inverse.',
  },
  {
    question: 'Les hallucinations de l’IA, on peut les gérer ?',
    answer:
      'On réduit le risque : sources obligatoires, température basse, prompts serrés, garde-fous côté serveur, et humain sur les sujets sensibles. Zéro promesse de zéro erreur — ce serait mentir.',
  },
  {
    question: 'C’est réservé aux grandes entreprises ?',
    answer:
      'Non : une petite structure avec beaucoup de questions répétitives sur le site ou par mail peut déjà gagner du temps. L’enjeu, c’est surtout la clarté du besoin, pas le chiffre d’affaires.',
  },
  {
    question: 'Comment mesurer le retour sur investissement ?',
    answer:
      'Avant/après sur le temps de traitement, le taux de réponses sans escalade, le panier moyen, le nombre de tickets évités… On choisit une ou deux métriques simples avec vous, pas quinze tableaux de bord.',
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
