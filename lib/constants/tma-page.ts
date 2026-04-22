/** Page premium `/maintenance/tma` — tierce maintenance applicative. */

export const TMA_PATH = '/maintenance/tma' as const;

export const TMA_JSONLD = {
  serviceName: 'Tierce maintenance applicative (TMA)',
  serviceDescription:
    'TMA : backlog, releases, SLA, correctifs et petites évolutions sur application web, avec compte-rendu et transparence.',
  breadcrumbPageName: 'TMA',
} as const;

export const TMA_KEYWORDS = [
  'TMA applicative',
  'tierce maintenance applicative',
  'maintenance application sur mesure',
  'freelance TMA',
  'backlog applicatif',
] as const;

export const tmaMetaDescription =
  "TMA applicative sur mesure : backlog, releases, SLA, documentation. Je prends la main sur votre appli web ou mobile — 1ʳᵉ personne, contrat clair, France / remote.";

export const tmaMetaTitle = 'TMA — Tierce maintenance applicative freelance | Clickdev';

export const TMA_HERO = {
  chapter: 'Chapitre 06.3 · TMA',
  subline: 'Freelance — Produit & delivery',
  h1: 'TMA : un backlog qui respire, des mises en prod qui se racontent',
  lead: "La tierce maintenance applicative, ce n'est pas 'un dev quand ça casse' : c'est prioriser, estimer, déployer, expliquer. Je m'aligne sur votre criticité — P1 le week-end ne se décrète pas sur un sticker.",
  primaryCta: { href: '/devis?projectType=outil', label: 'Devis TMA / outil' },
  secondaryCta: { href: `${TMA_PATH}#portfolio`, label: 'Réalisations' },
} as const;

export const TMA_BENEFITS = {
  kicker: 'Ce que couvre la TMA',
  title: "Produit, pas seulement 'hotfix'",
  subtitle: "Correctif, évolution mineure, veille de version, dette nommée : on sait ce qui rentre dans l'enveloppe — le reste, c'est un autre devis.",
  items: [
    { title: "Backlog partagé", body: "Linear, Jira, Notion, Trello : l'outil que vous avez, je m'y plie, je ne vous impose pas un énième board." },
    { title: "Releases documentées", body: "Numéro, contenu, risque, rollback. Même court, même honnête — c'est le minimum pour dormir côté exploit." },
    { title: "SLA lisible", body: "Premier retour, restauration, heures ouvrées, astreinte optionnelle : c'est chiffré, pas 'on verra'." },
    { title: "Déploiement maîtrisé", body: "CI, review, preprod, feature flags : je baisse le taux d'indésirable en production sans promettre 0 bug — ce serait mentir." },
  ],
} as const;

export const TMA_EDITORIAL = { kicker: 'Lecture', title: "L'écart entre 'tu peux jeter un œil' et un contrat TMA" } as const;

export const TMA_AUDIENCE = {
  kicker: 'Pour vous',
  title: "Quelles applis j'entretiens en TMA",
  subtitle: "Web app, intégration, B2B, outil interne, parfois mobile : on n'est plus le prototype de labo.",
  cards: [
    { title: "SaaS d'équipe moyenne", body: "Feature flags, rôles, compta, on est déjà loin d'un 'petit outil' — la priorisation devient le sujet, pas l'UI." },
    { title: 'B2B / workflow', body: "PDF, relances, signature, règles métier : moins d'écart entre ce que l'équipe croit et ce que le code exécute." },
    { title: 'Héritage héroïque', body: "Repo vieux, pas honteux, mais pénible : je n'ouvre pas 40 chantiers, je cadrerai d'abord l'explo, puis l'évolution." },
    { title: 'Avec intégrations lourdes', body: "CRM, EDI, banque, paie, je sais lire l'ESB ou le script qui reste, sans jouer au magicien." },
  ],
} as const;

export const TMA_COMPARE = {
  kicker: 'Décision',
  title: 'Panne réactive, ou capacité TMA intégrée',
  subtitle: "Les deux ont un coût — un est prévisible, l'autre, souvent, plus élevé et émotif le jour venu.",
  columns: ['Ticket à froid', 'Agence lourde', "TMA freelance cadré"] as const,
  rows: [
    { label: 'Lien produit / tech en direct', c: [true, true, true] as const },
    { label: 'Déploiement récurrent, pas honteux', c: [false, true, true] as const },
    { label: 'Dette technique dite, réduite', c: [false, false, true] as const },
  ],
} as const;

export const TMA_PROCESS = {
  kicker: 'Process',
  title: 'Démarrage d’un contrat TMA',
  steps: [
    { n: '01', title: "Lecture d'arrivée", body: "Repo, métrique, pannes connues, droits, secrets, moyens de revenir en arrière. Même court, même écrit, même signé côté risque." },
    { n: '02', title: 'Priorisation claire', body: "On classe : bug bloquant, dégradation, amélioration, dette, bruit. Je mets de la marge, pas de poudre aux yeux dès la ligne 1." },
    { n: '03', title: "Cycle d'itération", body: "Définir la fréquence, la fenêtre de déploiement, la personne côté vous pour trancher." },
    { n: '04', title: "Bilan, pas fête", body: "L'écart entre temps prévu et pris, ce qu'on repousse, ce qu'on a appris, ce qu'on ouvre côté dépendance. Honnête = durable." },
    { n: '05', title: 'Avenant, pas tension', body: "Si l'enveloppe serrait trop ou trop peu, on recale plutôt que d'en faire une guerre d'ego ou un silence. Le contrat sert, il n'enterre personne." },
  ],
} as const;

export const TMA_STACK = {
  kicker: 'Stack',
  title: "Techno : je ne m'enferme pas en framework",
  body: "TypeScript, React, Next, Node, parfois Laravel, parfois Python : je lis le repo, le CI, l'hébergeur, et je relie aux gens métier. Si c'est ailleurs, je le dis avant de signer le cadre — pas après.",
  labels: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'GitHub', 'Sentry', 'k8s', 'Docker', 'Nginx'],
} as const;

export const TMA_CASES = {
  kicker: 'Réalisations',
  title: "Des apps livrées — j'en prends l'explo",
  intro: "Côté portfolio, ce sont des mises en ligne, parfois dont je reprends l'explo — parlez-moi d'une URL, je vous dis si ça mord.",
} as const;

export const TMA_FAQ = { kicker: 'FAQ', title: 'Questions — TMA', subtitle: 'Hors périmètre, astreinte, forfait.' } as const;

export const TMA_FAQ_ITEMS = [
  {
    question: "TMA, c'est illimité ?",
    answer: "Non, et c'est sain. On met un forfait heures, une réserve, un dépassement cadré. 'Illimité' profite seulement au vendeur, pas à celui qui produit le code ou lit son weekend.",
  },
  {
    question: 'Puis-je ajouter 200 % de charge ?',
    answer: "Oui, avec un avenant ou en ticket court. L'explo' reste saine, la roadmap, réaliste.",
  },
  {
    question: 'Cela inclut la création d’écran ?',
    answer: "Si c'est dans l'enveloppe, oui, si on l'écrit. Sinon c'est de la vraie feature : devis, ou phase projet à part. Je mélange rarement les conversations pour éviter d'en faire une monnaie floue.",
  },
] as const;

export const TMA_FINAL_CTA = {
  title: "Envie d’une TMA qu'on peut expliquer au board ?",
  primaryHref: '/devis?projectType=outil',
  primaryLabel: "Parler d'un outil en TMA",
  secondaryHref: '/devis',
  secondaryLabel: 'Ouvrir le devis (autre sujet)',
} as const;
