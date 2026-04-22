/** Page premium `/maintenance/maintenance-ecommerce` */

export const MAINTENANCE_ECOMMERCE_PATH = '/maintenance/maintenance-ecommerce' as const;

export const MAINTENANCE_ECOMMERCE_JSONLD = {
  serviceName: "Maintenance d'un site e-commerce",
  serviceDescription:
    "Exploitation de boutique en ligne : mises à jour, tunnel d'achat, paiement, intégrations, pics de trafic, astreinte cadrée.",
  breadcrumbPageName: 'Maintenance e-commerce',
} as const;

export const MAINTENANCE_ECOMMERCE_KEYWORDS = [
  'maintenance site e-commerce',
  'maintenance woocommerce',
  'maintenance boutique en ligne',
  'support e-commerce freelance',
] as const;

export const maintenanceEcommerceMetaDescription =
  "J'entretiens votre boutique (WooCommerce, Shopify, sur mesure) : paiement, stock, soldes, perf. Forfait ou TMA, 1ʳᵉ personne, devis rapide.";

export const maintenanceEcommerceMetaTitle = 'Maintenance e-commerce & boutique en ligne | Clickdev';

export const MAINTENANCE_ECOMMERCE_HERO = {
  chapter: 'Chapitre 06.2 · E-commerce',
  subline: 'Freelance — Explo boutique',
  h1: 'Maintenance e-commerce : le tunnel, le paiement, le pic de trafic',
  lead: "Le checkout n'est pas un plugin : c'est l'endroit où l'argent passe ou s'évapore. Je surveille les mises à jour qui touchent panier, TVA, transporteur, 3DS, et je cale le déploiement loin de vos gros jours de vente quand c'est possible.",
  primaryCta: { href: '/devis?projectType=autre', label: 'Devis maintenance e-commerce' },
  secondaryCta: { href: `${MAINTENANCE_ECOMMERCE_PATH}#portfolio`, label: 'Projets web' },
} as const;

export const MAINTENANCE_ECOMMERCE_BENEFITS = {
  kicker: 'Périmètre',
  title: 'Moins d’incident “invisible” sur le tiroir-caisse',
  subtitle: 'Priorité : disponibilité encaisser, clarté côté logs, explications côté équipe commerciale.',
  items: [
    { title: "Alignement checkout & moyen de paiement", body: "J'anticipe le plugin qui change un champ 3DS ou une URL de retour, pas seulement la couleur du bouton." },
    { title: 'Gestion de pics', body: "Soldes, lancement, pub TV : on décale le risque ou on gèle ce qui n'est pas indispensable ce jour-là — écrit, pas seulement oral." },
    { title: 'Cohérence fisc & transport', body: "Livraison, zones, taux, TVA OSS : le détail triste de la prod qui, lui, pète la confiance des clients B2B." },
    { title: "Liaison outils d'équipe", body: "ERP, CRM, mail, Analytics : le site n'est pas seul, je ne casse pas la chaîne quand on met en ligne." },
  ],
} as const;

export const MAINTENANCE_ECOMMERCE_EDITORIAL = { kicker: 'Lecture', title: "Pourquoi l'e-commerce, c'est du risque 24/7" } as const;

export const MAINTENANCE_ECOMMERCE_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Avec qui j’entretiens une boutique',
  subtitle: "Du marketplace maison au Shopify, même obsession : l'ordre d'exécution.",
  cards: [
    { title: 'B2C volume', body: "Catalogue, promos, AB tests : moins d'emballage, plus de relecture de ce qui part en hotfix." },
    { title: 'B2B / devis lourd', body: "Fiches, droits, tarifs, connecteurs : l'équipe se bat déjà ailleurs, l'explo en ligne n'a pas le droit d'ajouter le chaos." },
    { title: 'DTC / marque', body: "L'image, la rapidité, le retour RMA : je m'appuie sur Sentry et les logs, pas seulement sur l'opinion de la hotline." },
    { title: "Marketplace / apporteurs", body: "Multi-boutique, revenus, commissions : c'est proche d'une TMA, avec des joueurs de plus. Je cadrerai ce que je mène, ce que vous tenez côté legal." },
  ],
} as const;

export const MAINTENANCE_ECOMMERCE_COMPARE = {
  kicker: 'Décision',
  title: 'Achat du “module miracle” ou ajustement cadré ?',
  subtitle: "Beaucoup de pannes e-commerce, c'est un empilement de promesses. Je dis non aux plugins qui s'ignorarient.",
  columns: ['Plugin au fil de l’eau', "Agence à l'heure", "Forfait cadré"] as const,
  rows: [
    { label: 'Fiche d’incident reproductible', c: [false, true, true] as const },
    { label: "Plan de reprise d'un pic", c: [false, true, true] as const },
    { label: 'Déploiement hors période critique', c: [false, false, true] as const },
    { label: "Alignement l'équipe e-commerce", c: [false, true, true] as const },
  ],
} as const;

export const MAINTENANCE_ECOMMERCE_PROCESS = {
  kicker: 'Process',
  title: "Comment on verrouille l'encaissement",
  steps: [
    { n: '01', title: "Carto du danger", body: "Tunnel, moyen de paiement, transporteur, marge d'impôt, points de reprise, sauvegardes, charge attendue. Je lis aussi ce que l'équipe métier tient vraie." },
    { n: '02', title: 'Fenêtres de MAJ', body: "Hors soldes, hors mardi si c'est le jour du lancement, etc. Si on ne peut pas, on a un plan B." },
    { n: '03', title: "Tests d'ordre d'achat", body: "J’évite le ‘ça marche chez moi’ : on garde un panier test, parfois une CB de 1 €, les logs, et l’alerte si l’intention de paiement change." },
    { n: '04', title: "Post-mortem s'il a plu", body: "Pas pour vous punir, pour enlever l'événement unique. Si ça a cassé, un correctif, une tâche, un propriétaire, une date de vérif." },
    { n: '05', title: "Évolutions 'en plus'", body: "Nouveau moyen de paiement, transporteur, migration partielle : on sort du forfait courant, on devis, on planifie — zéro supplément flou sur la dernière ligne." },
  ],
} as const;

export const MAINTENANCE_ECOMMERCE_STACK = {
  kicker: 'Stack',
  title: 'Des briques e-commerce que je côtoie souvent',
  body: "WooCommerce, Shopify, Payplug, Adyen, Stripe, Sendcloud, Aircall — je ne promets pas de tout, mais d'apprendre vite côté vôtre, sans vous faire payer 40 h de mapping.",
  labels: ['WooCommerce', 'Shopify', 'Stripe', 'Node', 'Vercel', 'Sanity', 'Sentry', 'Grafana', 'Nginx'],
} as const;

export const MAINTENANCE_ECOMMERCE_CASES = {
  kicker: 'Références',
  title: "Création web — et l'explo qui suit",
  intro: "Côté fiches projets, ce sont des livraisons. La maintenance, c'est souvent moins 'instagrammable', plus rentable le dimanche d'une promo.",
} as const;

export const MAINTENANCE_ECOMMERCE_FAQ = {
  kicker: 'FAQ',
  title: "FAQ — maintenance e-commerce",
  subtitle: 'Astrointe, stack, 3DS, hébergeur.',
} as const;

export const MAINTENANCE_ECOMMERCE_FAQ_ITEMS = [
  {
    question: "C'est 24/7 partout ?",
    answer: "J'écris ce qui l'est, ce qui ne l'est pas, et l'heure. Sinon vous payez 24/7, vous avez 24/0 sur le cadrage — c'est pire qu'un mauvais hébergeur.",
  },
  {
    question: 'Shopify, vous y touchez vraiment ?',
    answer: "Thèmes, scripts, intégrations, apps, souvent. Je respecte l'éco Shopify : moins d'impro sur la prod qu'ailleurs, autant d'exigence sur l'essai.",
  },
  {
    question: 'Pénurie, rupture, dépendance appli ?',
    answer: "Je documente, je propose des fallbacks, je ne mélange surtout pas patch express et fête d'annonce.",
  },
  {
    question: 'Cela inclut-il le data / BI ?',
    answer: "Pas l'analyse, mais l'instrumenter : j'évite l'écart entre l'outillage et l'équipe qui a besoin d'un 'nombre vrai' à 9 h 02.",
  },
] as const;

export const MAINTENANCE_ECOMMERCE_FINAL_CTA = {
  title: "Prêt à cesser de croiser les doigts chaque lancement promo ?",
  primaryHref: '/devis?projectType=ecommerce',
  primaryLabel: 'Devis e-commerce (créa ou suivi)',
  secondaryHref: '/devis',
  secondaryLabel: 'Devis “maintenance seulement”',
} as const;
