/** Page premium `/maintenance/maintenance-wordpress` */

export const MAINTENANCE_WORDPRESS_PATH = '/maintenance/maintenance-wordpress' as const;

export const MAINTENANCE_WORDPRESS_JSONLD = {
  serviceName: 'Maintenance WordPress professionnelle',
  serviceDescription:
    "Mises à jour cœur et extensions, durcissement, performance, correctifs, sauvegardes, documentation — par un développeur freelance en France. ",
  breadcrumbPageName: 'Maintenance WordPress',
} as const;

export const MAINTENANCE_WORDPRESS_KEYWORDS = [
  'maintenance WordPress',
  'mise à jour WordPress',
  'support WordPress freelance',
  'développeur WordPress maintenance',
  'sécurité site WordPress',
] as const;

export const maintenanceWordpressMetaDescription =
  "Je m'occupe des mises à jour WordPress, de la sécurité et des correctifs. Freelance, forfait ou rétroactif, 1ʳᵉ personne. Devis sous 24–48 h.";

export const maintenanceWordpressMetaTitle =
  'Maintenance WordPress professionnelle — Mises à jour, sécurité | Clickdev';

export const MAINTENANCE_WORDPRESS_HERO = {
  chapter: 'Chapitre 06.1 · WordPress',
  subline: 'Développeur freelance — Explo & sécurité',
  h1: 'Maintenance WordPress : cœur, thème, plugins, sans le chaos',
  lead: "J'applique les mises à jour cœur et plugin dans un ordre sûr, je teste sur preprod dès qu'on en a une, et je ne touche jamais à la prod le vendredi sans filet. Vous gardez un site gérable — pas un musée de plugins.",
  primaryCta: { href: '/devis?projectType=autre', label: 'Devis maintenance' },
  secondaryCta: { href: `${MAINTENANCE_WORDPRESS_PATH}#portfolio`, label: 'Exemples web' },
} as const;

export const MAINTENANCE_WORDPRESS_BENEFITS = {
  kicker: 'Ce que je fais',
  title: "Un WordPress tenu, c'est moins d'incidents le dimanche soir",
  subtitle: "Priorité : sécurité, perf qui ne s'effrite pas, et explications en français — pas en « erreur 500 ».",
  items: [
    {
      title: 'Mises à jour ordonnées',
      body: "Cœur, extensions, thème enfant : je connais l'ordre qui évite l'écran blanc, et le rollback n'est jamais tabou.",
    },
    {
      title: "Durcissement & mots d'accès",
      body: "Comptes de service, rôles, 2FA quand c'est possible, retrait des plugins inutiles qui ouvrent des portes.",
    },
    {
      title: "Perf qui ne s'érode pas",
      body: "Cache, requêtes, images, scripts : on surveille le front et l'admin pour que le SEO technique ne s'affaisse pas.",
    },
    {
      title: 'Lien avec votre métier',
      body: "Formulaires, CRM, paiement : je documente le wiring pour que le prochain intervenant s'y retrouve — y compris moi dans six mois.",
    },
  ],
} as const;

export const MAINTENANCE_WORDPRESS_EDITORIAL = {
  kicker: 'Lecture',
  title: "Pourquoi j'insiste sur la preprod et le journal des changements",
} as const;

export const MAINTENANCE_WORDPRESS_AUDIENCE = {
  kicker: 'Pour vous',
  title: "Qui me confie l'explo d'un WordPress",
  subtitle: "Du site vitrine à la grosse content factory — pas la même fréquence, le même sérieux sur les mises en ligne.",
  cards: [
    { title: 'Rédaction & contenu riche', body: "Rôles, workflow, reprises : le WP reste fiable quand dix auteurs s'en servent en parallèle." },
    { title: 'Boutique WooCommerce', body: "Mises à jour côté thème, compatibilité 3DS, reprise après incident — je parle chiffre, pas seulement PHP." },
    { title: 'Réseau / franchise', body: "Multi-sites, réseau de blogs : l'écart entre deux versions devient gérable au lieu d'exploser les vacances d'été." },
    { title: "Éditeur d'outils", body: "CPT, pages builder, ACF : je n'impose pas l'utopie, je réduis le nombre de choses qui bougent toutes seules la nuit." },
  ],
} as const;

export const MAINTENANCE_WORDPRESS_COMPARE = {
  kicker: 'Décision',
  title: 'Clic « mettre à jour » chez l’hébergeur, ou forfait encadré ?',
  subtitle: "L'un économise cinq minutes ; l'autre évite la restauration à 22 h. Je ne suis pas là pour juge, mais je trace la différence.",
  columns: ['Côté seul', "Hébergeur rappel d'IP", 'Forfait avec tests'] as const,
  rows: [
    { label: 'Fiche de chaque changement (qui, quoi, quand)', c: [false, false, true] as const },
    { label: "Environnement de preprod / staging", c: [false, true, true] as const },
    { label: "Priorisation des avis d'exploit (CVE)", c: [false, true, true] as const },
    { label: 'Délai de retour cadré', c: [false, false, true] as const },
    { label: 'Dette technique nommée et réduite', c: [false, false, true] as const },
  ],
} as const;

export const MAINTENANCE_WORDPRESS_PROCESS = {
  kicker: 'Process',
  title: "Comment je prends l'explo d'un WordPress",
  steps: [
    { n: '01', title: "Audit d'arrivée", body: "Plugins, comptes, sauvegarde, version PHP, thème. Je vous envoie les zones rouges en clair, pas en audit PDF de 40 pages inutile." },
    { n: '02', title: "Plan de mises à jour", body: "Cœur d'abord, plugins ensuite, thème, puis vérifs front. Si la preprod n'existe pas, on en parle : parfois elle vaut dix heures d'astreinte." },
    { n: '03', title: "Supervision légère", body: "Uptime, erreurs PHP, taille BDD, logs quand c'est abordable. Pas de tableau de bord inutile que personne ne lit." },
    { n: '04', title: 'Bilan & tickets', body: "Chaque cycle de MAJ a un bref statut : ce qui est monté, ce qui a été constaté, ce qu'on reporte. Transparence > silence." },
    { n: '05', title: 'Hors périmètre', body: "Grosse refonte, nouveau tunnel, migration serveur lourde : c'est devisé à part. Je préfère le nommer tôt plutôt que d'en faire un cadeau toxique." },
  ],
} as const;

export const MAINTENANCE_WORDPRESS_STACK = {
  kicker: 'Stack',
  title: "Dans l'écosystème WordPress — sans dogme d'agence",
  body: "Woo, LearnDash, ACF, Bedrock, Sage, thèmes FSE, page builders cadrés : j'adapte le niveau de test au risque. Même exigence que quand j'en crée un sur",
  labels: ['WordPress', 'WooCommerce', 'ACF', 'bedrock', 'php', 'MySQL', 'Cloudflare', 'Sentry', 'git'],
} as const;

export const MAINTENANCE_WORDPRESS_CASES = {
  kicker: 'Références',
  title: 'Quelques projets web sur lesquels je m’appuie',
  intro: "Côté case studies, ce sont des livraisons de sites ; la maintenance, c'est l'histoire moins photogénique mais celle qui tient l'usine allumée.",
} as const;

export const MAINTENANCE_WORDPRESS_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — maintenance WordPress',
  subtitle: "Plugins, mises à jour, devis, astreinte : l'essentiel.",
} as const;

export const MAINTENANCE_WORDPRESS_FAQ_ITEMS = [
  {
    question: "Inclut le petit 'tu peux changer deux lignes ici' ?",
    answer:
      "J'inclus des micro-ajustements cadrés au forfait ; le reste part en ticket chiffré. Je préfère l'écrire au contrat plutôt que d'improviser la mauvaise foi de chaque côté.",
  },
  {
    question: "Et les plugins nulled / crackés ?",
    answer: "J'arrête, je documente, je propose une licence. Je ne sers pas d'illégal — et vous ne voulez pas d'un 'patch' de trois ans dans un thème pété.",
  },
  {
    question: "Mon agence a tout cassé, vous prenez le relais ?",
    answer:
      "Oui : d'abord lecture de ce qui a été modifié, accès, backups. Puis on découpe reprise, stabilisation, roadmap. Rien d'automatique sans l'écrire.",
  },
  {
    question: "Quelle fréquence de mises à jour ?",
    answer: "Celle du risque : e-commerce, plus souvent. Site vitrine stable, moins, mais cœur et sécurité, toujours suivis. On fixe le calendrier en démarrant.",
  },
  {
    question: "C'est lié à l'hébergeur ?",
    answer:
      "Oui, souvent : mêmes règles, mêmes sauvegardes, mêmes limites. Je documente l'hébergeur, le compte, et le nom de domaine. La propriété reste la vôtre.",
  },
] as const;

export const MAINTENANCE_WORDPRESS_FINAL_CTA = {
  title: "Prêt à arrêter les mises à jour 'au pif' ?",
  primaryHref: '/devis?projectType=autre',
  primaryLabel: "Demander l'onboarding WordPress",
  secondaryHref: '/devis',
  secondaryLabel: "Formulaire de devis",
} as const;
