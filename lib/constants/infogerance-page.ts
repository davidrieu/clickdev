/** Page premium `/maintenance/infogerance` */

export const INFOGERANCE_PATH = '/maintenance/infogerance' as const;

export const INFOGERANCE_JSONLD = {
  serviceName: "Infogérance d'hébergement web / serveur",
  serviceDescription:
    "Gestion, supervision, mises à jour, sauvegardes et procédure d'astreinte sur infrastructure web, avec cadrage clair.",
  breadcrumbPageName: 'Infogérance',
} as const;

export const INFOGERANCE_KEYWORDS = [
  'infogérance serveur',
  'administration serveur freelance',
  'maintenance serveur web',
  'hébergement géré',
  'supervision site internet',
] as const;

export const infogeranceMetaDescription =
  "Infogérance web : serveur, conteneur, tâches planifiées, sauvegardes, mises à jour, supervision. 1ʳᵉ personne, procédure écrite, devis cadré.";

export const infogeranceMetaTitle = 'Infogérance serveur & hébergement géré | Clickdev';

export const INFOGERANCE_HERO = {
  chapter: 'Chapitre 06.4 · Infogérance',
  subline: 'Freelance — Infra’ & prod',
  h1: "Infogérance : moins d'écrans noirs, plus d'explications claires",
  lead: "Je m'occupe (ou j'oriente) l'hébergement, les sauvegardes, le monitoring, les mises à jour d'OS et parfois de conteneur. Quand c'est le datacenter, je dis la vérité, je ne m'invente pas ponte réseau.",
  primaryCta: { href: '/devis?projectType=autre', label: "Devis infog' / prod" },
  secondaryCta: { href: `${INFOGERANCE_PATH}#process`, label: "Voir l'onboarding" },
} as const;

export const INFOGERANCE_BENEFITS = {
  kicker: 'Livrables',
  title: "L'infra' que vous connaissez, nommée",
  subtitle: "Accès, mots de passe, nom de domaine, hébergeur, BDD, secrets : c'est cadré, pas caché dans le téléphone d'un ex-stagiaire du fondateur.",
  items: [
    { title: "Runbook d'astreinte", body: "Qui appeler, quelle alerte, quel rollback, où est la dernière sauvegarde testée — c'est lire, pas deviner 3 h du matin." },
    { title: 'Mises à jour cadrées', body: "OS, Nginx, PHP, Node, kernel : l'antique, le récent, le bancal, je mets l'heure, pas l'égo." },
    { title: "Sauvegarde, restore, c'est prouvable", body: "Je préfère une restauration ratée de test qu'une promesse. La sauvegarde, c'est un exercice, pas un sticker." },
    { title: "Hébergeur / cloud", body: "OVH, Scaleway, AWS, GCP, Vercel, Fly, ce qui va : je ne vous impose pas mon t-shirt préféré, seulement ce que vous pouvez lire, tenir, payer, auditer." },
  ],
} as const;

export const INFOGERANCE_EDITORIAL = {
  kicker: 'Lecture',
  title: "Ce que l'infogérance recouvre — et ce qu'on délègue ailleurs",
} as const;

export const INFOGERANCE_AUDIENCE = {
  kicker: 'Pour vous',
  title: "Avec qui l'info' tient le coup",
  subtitle: "Dès que l'appli, le site, ou la base vit quelque part — c'est le bon endroit pour parler.",
  cards: [
    { title: "PME sans 'sysadmin'", body: "Le cloud est gentil, jusqu'à l'heure de la màj kernel ou d'un compte de service qui a quitté l'entreprise sans doc." },
    { title: 'Croissance / pic', body: "Black Friday, TV, campagne, embauches : l'antique, la RAM, l'IOPS : j'aide à cadrer la montre plutôt que crier 15 min avant la pub." },
    { title: 'Hébergeur foireux', body: "Si le fournisseur tousse souvent, je mets l'évidence, les logs, l'heure, et l'heure d'un basculement — pas 40 pages, la ligne qui manque vraiment." },
    { title: 'Duo IT interne + freelance', body: "Je m'adapte à l'équipe, je ne pousse à la place de personne : parfois je doc, parfois je cède, parfois je tâche, toujours sans fantôme." },
  ],
} as const;

export const INFOGERANCE_COMPARE = {
  kicker: 'Décision',
  title: "Hébergeur de base, ou tête qui lit l'alerte",
  subtitle: "Les hébergeurs savent, mais c'est le vôtre ou le mien, ou parfois les deux : la question est qui tient l'histoire au téléphone 2 h 14.",
  columns: ['Gestion “self”', 'ESN / 24/7 lourd', "Infog' cadré"] as const,
  rows: [
    { label: 'Droit de savoir où pointe le domaine', c: [true, true, true] as const },
    { label: "Procédure d'astreinte écrite", c: [false, true, true] as const },
    { label: 'Escalade lisible (qui, quand, comment)', c: [false, true, true] as const },
  ],
} as const;

export const INFOGERANCE_PROCESS = {
  kicker: 'Onboarding',
  title: "Comment l'onboarding s'assied sur vos accès, sans crier 'full root'",
  steps: [
    {
      n: '01',
      title: "Inventaire d'accès",
      body: "Hébergeur, FQDN, comptes, 2FA, BDD, secrets, sauvegarde, monitoring : s'il en manque un, on le cherche maintenant, pas samedi soir.",
    },
    {
      n: '02',
      title: 'Sauvegarde testée',
      body: "Je préfère voir un restore moyen en préprod qu'un seul gros lundi. La sauvegarde est un acte, pas un sticker.",
    },
    {
      n: '03',
      title: "Alerte & tâches",
      body: "Même minimal : uptime, disque, tâches cron, versions. Avec le canal qui va à la bonne personne — moins d'écran Slack qui hurle, plus de fiche action.",
    },
    {
      n: '04',
      title: 'Cadrage mensuel',
      body: "Ce qu'on a monté, ce qu'on a constaté, dette, risque, coût cloud, ce qu'on reporte : c'est bref, c'est vrai, ça tient en réunion de 20 minutes.",
    },
    {
      n: '05',
      title: 'Avenant ou sortie',
      body: "Périmètre qui s'élargit, astreinte qui s'ajoute, ou l'inverse : on recale par écrit, pas en silence, pas en drama.",
    },
  ],
} as const;

export const INFOGERANCE_STACK = {
  kicker: 'Stack',
  title: "Linux, Nginx, Docker, cloud — sans CV à rallonge",
  body: "J'ouvre, je lis, je cale, je note. Si c'est ailleurs, c'est ailleurs : je mets l'écart, pas 40 h d'histoires.",
  labels: ['Linux', 'nginx', 'Docker', 'Ansible', 'k8s', 'PostgreSQL', 'MySQL', 'S3', 'GitHub', 'Grafana', 'Sentry', 'Uptime', 'Kuma', 'Hetzner', 'OVH'],
} as const;

export const INFOGERANCE_CASES = {
  kicker: 'Contexte',
  title: "Près des projets où l'hébergage compte",
  intro: "Côté réalisations, ce sont des sites ou outils : l'infra' est le socle, je la cadrerai tôt, pas vingt jours avant un pic inattendu — sauf vrai cas, et on le dit en face.",
} as const;

export const INFOGERANCE_FAQ = {
  kicker: 'FAQ',
  title: 'Infogérance : questions',
  subtitle: 'Astreinte, 24/7, hébergeur, secrets.',
} as const;

export const INFOGERANCE_FAQ_ITEMS = [
  {
    question: "C'est 24/7 côté serveur ?",
    answer: "Uniquement si c'est signé, avec l'heure, le forfait, l'heure, et la personne qui tient le tél. Sinon on parle d'heures ouvrées et d'escalade raisonnable — c'est moins beau, plus honnête.",
  },
  {
    question: 'On garde le contrat hébergeur à notre nom ?',
    answer: "En général oui : c'est à vous. Je mets les accès techniques et la clarté, pas la propriété du domaine ni la carte bleue, sauf cadrage explicite de mandat de paiement encadré.",
  },
  {
    question: "Vous remplacez notre hébergeur ?",
    answer: "Non, je n'ouvre pas un hébergeur fantôme. Je cadrerai, je recommande, j'oriente, j'écris la procédure, et je pousse à ce qu'on choisisse le bon niveau — clair, pas l'économie bête en premier.",
  },
] as const;

export const INFOGERANCE_FINAL_CTA = {
  title: "L'heure, c'est de cadrer l'infra' avant la prochaine màj dangereuse ?",
  primaryHref: '/devis?projectType=autre',
  primaryLabel: "Cadrer l'infog' / hébergeur",
  secondaryHref: '/devis',
  secondaryLabel: "Autre (devis général)",
} as const;
