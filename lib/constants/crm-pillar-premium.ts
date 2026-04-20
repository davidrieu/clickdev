/** Pilier premium `/crm-outils-metiers` — ton grand public, exemples de situation. */

export const CRM_PILLAR_PATH = '/crm-outils-metiers';

export const CRM_PILLAR_HERO = {
  chapter: 'Chapitre 05 · Outils métiers',
  subline: 'Développeur freelance — Je conçois & je développe',
  h1: 'CRM & outils : moins de tableurs, plus de temps pour vendre',
  lead:
    'Quand les devis, les relances et les factures vivent dans cinq fichiers différents — ou pire, dans la boîte mail du commercial parti en congés — les oublis et les doubles saisies arrivent vite. Je conçois des petits CRM web adaptés à votre vocabulaire métier, je relie votre site à HubSpot ou Pipedrive quand vous avez déjà choisi un outil du marché, et je code des automatisations avec des filets de sécurité (logs, alertes) pour que le “zéro paperasse” ne devienne pas “zéro traçabilité”. Que vous soyez trois ou trente, l’objectif reste le même : moins de friction entre ce qui se passe sur le terrain et ce qui est noté quelque part.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${CRM_PILLAR_PATH}#offres`, label: 'Voir les offres' },
} as const;

export const CRM_PILLAR_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Des outils alignés sur votre vraie journée de travail',
  subtitle: 'Pas de usine à gaz : ce dont vous avez besoin maintenant, évolutif ensuite.',
  items: [
    {
      title: 'Je développe, je ne “vends” pas juste une licence',
      body:
        'Vous savez où est le code, qui peut le faire évoluer, où sont hébergées les données, et comment réagir si un connecteur tombe en panne. Pas de surprise à la 18e facture de licence pour une fonction que personne n’utilise.',
    },
    {
      title: 'Des situations de terrain, pas des slides génériques',
      body:
        'Agence : devis signé → création de tâche côté production. BTP : fin de chantier → photos archivées → facture prête. Formation : inscription en ligne → fiche CRM complète → e-mail de bienvenue personnalisé. On part de ce que vous faites déjà, en moins bien.',
    },
    {
      title: 'Moins de double saisie, moins de “je pensais que c’était noté”',
      body:
        'Le formulaire du site, le CRM, la facturation ou le support : un seul événement peut mettre à jour plusieurs systèmes, avec des règles claires pour les cas limites (doublon, client déjà connu, paiement partiel).',
    },
    {
      title: 'Une passation lisible',
      body:
        'Schémas simples, README court, accès Git : vous n’êtes pas prisonnier d’une boîte noire. Si un jour vous changez de prestataire ou recrutez en interne, le dossier doit tenir la route.',
    },
  ],
} as const;

export const CRM_PILLAR_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Le meilleur CRM, c’est celui qu’on ouvre sans râler le lundi matin',
} as const;

export const CRM_PILLAR_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Profils fréquents',
  subtitle:
    'Dirigeants, commerciaux, opérationnels : dès que l’information circule mal, tout le monde perd du temps — y compris le client.',
  cards: [
    {
      title: 'Commercial ou dirigeant',
      body:
        'Vous voulez un pipeline lisible sans passer votre journée à relancer les collègues pour savoir si le devis a été envoyé, signé ou facturé.',
    },
    {
      title: 'Responsable des opérations',
      body:
        'Vous en avez assez des copier-coller entre e-mails, tableurs et outils qui ne parlent pas la même langue. Vous cherchez des flux prévisibles, pas des bricolages qui cassent dès qu’on change un champ.',
    },
    {
      title: 'Site web + équipe commerciale',
      body:
        'Le formulaire “contact” génère des leads, mais la moitié finit dans une boîte mail que personne ne surveille le week-end. Il faut que la donnée arrive au bon endroit, avec une trace.',
    },
    {
      title: 'Activité qui passe un cap',
      body:
        'Vous étiez deux autour d’un tableur ; vous êtes dix et les oublis coûtent cher. C’est souvent le moment de formaliser un petit outil ou une intégration propre plutôt que d’empiler les rustines.',
    },
  ],
} as const;

export const CRM_PILLAR_COMPARE = {
  kicker: 'Décision',
  title: 'Gros CRM du marché, outil sur mesure, ou rien ?',
  subtitle: 'Le “rien” tient tant que vous êtes deux ; ça casse vite à dix.',
  columns: ['SaaS populaire', 'Sur mesure / intégration', 'Tableurs'] as const,
  rows: [
    { label: 'Démarrage rapide', c: [true, false, true] as const },
    { label: 'Adaptation au métier', c: [false, true, false] as const },
    { label: 'Coût licence mensuel', c: [true, false, true] as const },
    { label: 'Contrôle total du flux', c: [false, true, false] as const },
    { label: 'Zéro formation', c: [false, false, true] as const },
    { label: 'Idéal équipe qui grandit', c: [true, true, false] as const },
  ],
} as const;

export const CRM_PILLAR_PROCESS = {
  kicker: 'Process',
  title: 'Quatre étapes',
  steps: [
    {
      n: '01',
      title: 'Atelier',
      body:
        'On cartographie ce qui se passe vraiment : qui saisit quoi, où ça bloque, ce qui est non négociable (RGPD, habilitation, délais légaux). Pas de solution avant d’avoir nommé le problème.',
    },
    {
      n: '02',
      title: 'Proposition',
      body:
        'Périmètre fonctionnel, budget, jalons et risques. Je préfère un premier livrable utile et modeste qu’un monstre prévu sur six mois que personne ne testera avant la fin.',
    },
    {
      n: '03',
      title: 'Construction',
      body:
        'Itérations courtes, environnement de test, retours des utilisateurs pilotes. On ajuste avant d’imposer l’outil à toute l’équipe.',
    },
    {
      n: '04',
      title: 'Passation',
      body:
        'Session de prise en main, petites vidéos si ça aide, et une documentation minimale mais honnête pour les cas d’erreur — pas seulement le “chemin heureux”.',
    },
  ],
} as const;

export const CRM_PILLAR_STACK = {
  kicker: 'Technologies',
  title: 'Ce que j’emploie souvent',
  body:
    'Applications web modernes, bases PostgreSQL quand la donnée est relationnelle, API REST et webhooks des outils que vous payez déjà (CRM, facturation, e-mail transactionnel). Le choix technique suit le besoin, pas l’inverse.',
  labels: ['Next.js', 'Laravel', 'PostgreSQL', 'API', 'Webhooks'],
} as const;

export const CRM_PILLAR_CASES = {
  kicker: 'Portfolio',
  title: 'Outils & intégrations',
  intro:
    'Voici des projets où l’on a évité le piège du “logiciel trop riche pour nous” : soit un outil sur mesure qui colle au métier, soit des passerelles sobres entre systèmes existants.',
} as const;

export const CRM_PILLAR_FAQ = {
  kicker: 'FAQ',
  title: 'Questions — CRM & outils',
  subtitle: 'Hébergement, RGPD, maintenance.',
} as const;

export const CRM_PILLAR_FAQ_ITEMS = [
  {
    question: 'Faut-il un gros budget pour commencer ?',
    answer:
      'Pas forcément : une intégration simple (formulaire → CRM, webhook bien géré) peut démarrer autour de quelques milliers d’euros. Un CRM sur mesure complet, avec rôles, historique et reporting, est un chantier plus large — on le découpe souvent en phases.',
  },
  {
    question: 'Où sont hébergées les données ?',
    answer:
      'En pratique, souvent sur un cloud européen (OVH, Scaleway, AWS eu-west-1, etc.) selon vos contraintes, votre DSI ou votre comptable. On tranche ensemble avant d’écrire la première ligne de code.',
  },
  {
    question: 'Et le RGPD dans tout ça ?',
    answer:
      'Je mappe les données personnelles traitées, les durées de conservation et les accès ; je m’aligne sur vos politiques. Le cadre juridique final et les mentions légales restent toutefois sous votre responsabilité ou celle de votre avocat.',
  },
  {
    question: 'Puis-je faire évoluer l’outil sans vous ?',
    answer:
      'Je livre pour que ce soit possible : dépôt Git, documentation, variables d’environnement. Les petits réglages peuvent rester chez vous ; pour des refontes de flux ou des mises à jour d’API critiques, un regard technique externe évite les mauvaises surprises.',
  },
] as const;

export function crmPillarFaqJsonLdItems(): { question: string; answer: string }[] {
  return [...CRM_PILLAR_FAQ_ITEMS];
}

export const CRM_PILLAR_BUDGET = {
  title: 'Budget',
  line: 'Intégration simple dès ~2 500 €, automatisations dès ~1 800 €, CRM sur mesure souvent 12 k€ et +.',
  note: 'Devis gratuit après échange court.',
} as const;

export const CRM_PILLAR_FINAL_CTA = {
  title: 'Un flux métier à sécuriser ou un CRM à imaginer ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis',
  secondaryHref: '/contact',
  secondaryLabel: 'Échanger',
} as const;
