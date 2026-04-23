/** Contenu pilier /maintenance — 1ʳᵉ personne, SEO, aligné visuellement sur le silo Sites internet. */

export const MAINTENANCE_PILLAR_PATH = '/maintenance' as const;

export const MAINTENANCE_TRUST_MARQUEE_NAMES = [
  'Accor',
  'Greenweez',
  'Spreadshirt',
  'Made in France',
  'SIF Group',
  'The French Maisons',
  'Urbawise',
] as const;

export type MaintenanceAudienceCard = { title: string; body: string };

export const MAINTENANCE_AUDIENCE_CARDS: MaintenanceAudienceCard[] = [
  {
    title: 'Boutiques & e-commerce',
    body: 'Je garde Woocommerce, Shopify ou votre stack en ligne quand le trafic pique : soldes, TVA, 3DS, intégrations. Je préfère le calendrier aux surprises.',
  },
  {
    title: 'WordPress exigeant',
    body: 'Cœur, thème enfant, plugins : je réduis la dette, je documente, je teste. Plus de mises à jour “au feeling” le vendredi 17h.',
  },
  {
    title: 'SaaS & outils internes',
    body: 'Correctifs, releases, rétroplannage : TMA claire, backlog partagé, compte-rendu de ce qui part en prod. Votre métier, pas le mien, mais le code, si.',
  },
  {
    title: 'Infra’ à surveiller',
    body: "Infogérance, sauvegardes, monitoring, mises à jour d'OS ou de conteneurs : on définit l'alerte qui vaut le réveil et celle qu'on traite le lundi.",
  },
];

export const MAINTENANCE_STACK = [
  'WordPress',
  'WooCommerce',
  'Shopify',
  'Next.js',
  'Node.js',
  'nginx',
  'Linux',
  'Docker',
  'Vercel',
  'MySQL',
  'PostgreSQL',
  'Sentry',
  'GitHub Actions',
] as const;

export type MaintenanceFaqTabId = 'offres' | 'securite' | 'process';

export const MAINTENANCE_FAQ_TAB_LABELS: Record<MaintenanceFaqTabId, string> = {
  offres: 'Forfaits & budget',
  securite: 'Sécurité & dispo',
  process: 'Méthode & contrat',
};

export const MAINTENANCE_FAQ_BY_TAB: Record<
  MaintenanceFaqTabId,
  readonly { question: string; answer: string }[]
> = {
  offres: [
    {
      question: 'Vous facturez au forfait ou au temps passé ?',
      answer:
        "Les deux : j'aime le forfait quand on sait le volume (mises à jour mensuelles, petit créneau d’évolutions), et le rétroactif quand c’est l’imprévu. Après un court cadrage, on fixe le mix. Rien d’imposé sans l’avoir expliqué.",
    },
    {
      question: 'Un ordre de grandeur de budget ?',
      answer:
        "Ça dépend de la complexité, du trafic et de la fréquence : un WordPress vitrine n’a pas le même rythme qu’une boutique ou un SaaS. Demandez un devis via le formulaire : je réponds en général sous 24–48 h ouvrées avec une fourchette honnête, pas un copier-coller d’agence.",
    },
    {
      question: "Inclut-il l'hébergement ?",
      answer:
        "On peut l’inclure ou seulement superviser. Souvent, je recommande un hébergeur pro adapté, je garde les accès, et on écrit clairement qui tient le domaine, les sauvegardes, et l’astreinte.",
    },
    {
      question: 'Qui est facturé en TMA (tierce maintenance applicative) ?',
      answer:
        "C’est l’accompagnement d’un produit applicatif : backlog, releases, un peu de cadrage technique. C’est proche d’un forfait évolution, avec des règles d’arbitrage. La page TMA du silo detaille le cadre — je ne vends jamais du flou en « illimité ».",
    },
  ],
  securite: [
    {
      question: 'Vous gérez les mises à jour de sécurité en urgence ?',
      answer:
        "Oui : je traque les avis d’exploit, j’isole l’urgence, je teste sur un environnement de preprod dès qu’il existe, et je compte. Pas de 'patch magique' sur la prod le vendredi soir si un rollback est impossible — sauf vrai feu, et là on a validé l’antidote avant.",
    },
    {
      question: 'Sauvegardes : on les teste vraiment ?',
      answer:
        "J’y tiens. Une sauvegarde jamais restaurée est une déco. Où on l’inclut dans l’offre, où c’est côté hébergeur, je mets une procédure. Après un incident, le pire, c'est de l’eau, pas d’eau potable : je préfère un scénario écrit en trois lignes plutôt qu’une théorie 'ça devrait marcher'.",
    },
    {
      question: "Et si le site a déjà été hacké ?",
      answer:
        "On isole, on nettoie, on change les mots de passe, on retrace la porte d’entrée, puis on renforce. Je n’hésite pas à proposer un audit ciblé voire un prestataire spé quand c’est de la rétroviruserie — l’honnêteté prime sur le héroïsme.",
    },
  ],
  process: [
    {
      question: 'Quel outil de suivi utilisez-vous ?',
      answer:
        "Ticket, e-mail, ou l’outil que vous avez (Linear, Jira, Notion) : l’essentiel, c’est l’ID du ticket, la version déployée, le lien vers le compte-rendu. Moins de 'tu te souviens du fix du mardi' — plus d’exploitable en astreinte.",
    },
    {
      question: 'Puis-je appeler le week-end ?',
      answer:
        "Si c'est prévu et facturé — oui. À défaut, l’e-mail d’astreinte avec une vraie procédure d’escalade. J’explicite dès le devis : sinon personne n’est content quand l’infrastructure tombe samedi soir et que personne n’a signé d’heures.",
    },
    {
      question: "Travaillez-vous seul ?",
      answer:
        "Le plus souvent, oui : vous savez à qui parler. Si le besoin excède ma capacité (grosse montée, audit sécu externe, DBA), je le dis et je cadrerai un renfort avec vous — jamais un sous-traitant fantôme sans validation.",
    },
  ],
};

export function maintenanceFaqJsonLdItems(): { question: string; answer: string }[] {
  return [
    ...MAINTENANCE_FAQ_BY_TAB.offres,
    ...MAINTENANCE_FAQ_BY_TAB.securite,
    ...MAINTENANCE_FAQ_BY_TAB.process,
  ];
}

export const MAINTENANCE_COMPARE_ROWS = [
  { label: 'Cadrage & runbook' },
  { label: 'Sauvegardes + test de restauration' },
  { label: 'Mises à jour cœur & dépendances' },
  { label: 'Disponibilité en incident critique' },
  { label: 'Rétroplannage & compte-rendu' },
  { label: 'Proactivité (veille, alertes, perf.)' },
] as const;

/** Colonnes : forfait récurrent vs mission ponctuelle (les deux ont leur place). */
export const MAINTENANCE_COMPARE_MATRIX: { forfait: boolean; ponctuel: boolean }[] = [
  { forfait: true, ponctuel: true },
  { forfait: true, ponctuel: false },
  { forfait: true, ponctuel: false },
  { forfait: true, ponctuel: false },
  { forfait: true, ponctuel: false },
  { forfait: true, ponctuel: false },
];

export const MAINTENANCE_BENTO_ITEMS: readonly {
  href: string;
  title: string;
  description: string;
}[] = [
  {
    href: '/maintenance/maintenance-wordpress',
    title: 'Maintenance WordPress',
    description: 'Cœur, thème, plugins, formulaires, perf : mises à jour sereines et audit rapide de ce qui coince vraiment.',
  },
  {
    href: '/maintenance/maintenance-ecommerce',
    title: 'Maintenance e-commerce',
    description: "Catalogue, paiement, TVA, pics de trafic : on cadre l'explo, les astreintes, et l'antivirus du tunnel d'achat.",
  },
  {
    href: '/maintenance/tma',
    title: 'TMA',
    description: "Tierce maintenance applicative : backlog, priorisation, releases, et la voix d'un dev qui a déjà lu votre repo.",
  },
  {
    href: '/maintenance/infogerance',
    title: 'Infogérance',
    description: "Serveur, conteneur, tâches planifiées : moins d'écran noir, plus d'incident raconté, corrigé, noté.",
  },
] as const;

export const MAINTENANCE_CASES_SECTION = {
  kicker: 'Portfolio',
  title: 'Des sites — et la maintenance derrière',
  intro:
    "Côté case studies, ce sont surtout des mises en ligne de projets web ; la maintenance, elle, se joue en tickets, mises à jour, et sérénité revendue. Voilà ce que j'ai livré récemment côté web :",
} as const;

export const MAINTENANCE_PROCESS_STEPS = [
  {
    n: '01',
    title: 'Audit de départ',
    body: "J'écris ce que je vois : vers stack, hébergeur, comptes, sauvegardes, points fragiles, et le premier mois d'action réaliste.",
  },
  {
    n: '02',
    title: 'Périmètre & rythme',
    body: "On fixe le forfait ou le forfait + rétroactif, le canal ticket, l'heure d'ouverture de l'astreinte, et ce qu'on appelle P1, P2, P3 chez vous.",
  },
  {
    n: '03',
    title: 'Mises en prod propres',
    body: "Brancher, test, déployer, noter. Je préfère le petit lot fréquent au gros 'big bang' de minuit, sauf exception cadrée.",
  },
  {
    n: '04',
    title: 'Supervision & veille',
    body: "Alerte uptime, mises à jour, correctifs, petits rapports. La maintenance, c'est le calme — pas l'oubli jusqu'à l'incident.",
  },
  {
    n: '05',
    title: "Amélioration continue",
    body: "Dette, perf, dette de plugins : on la nomme, on l'arbitre. Avec le temps, moins d'imprévus, plus de marge de manœuvre.",
  },
] as const;
