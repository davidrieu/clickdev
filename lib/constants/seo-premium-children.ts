/**
 * Pages premium `/seo/*` — ton accessible, exemples de situation (hors portfolio).
 * Métas calibrées longueur SERP (~155 car. description).
 */

const SILO = '/seo';

export const SEO_PREMIUM_SLUGS = [
  'audit-seo',
  'seo-technique',
  'seo-local',
  'seo-ecommerce',
  'migration-seo',
  'redaction-seo',
  'netlinking',
  'geo-generative-engine-optimization',
] as const;

export type SeoPremiumSlug = (typeof SEO_PREMIUM_SLUGS)[number];

export function isSeoPremiumSlug(s: string): s is SeoPremiumSlug {
  return (SEO_PREMIUM_SLUGS as readonly string[]).includes(s);
}

type Cta = { href: string; label: string };
type Hero = { chapter: string; subline: string; h1: string; lead: string; primaryCta: Cta; secondaryCta: Cta };
type Block4 = { kicker: string; title: string; subtitle: string; items: readonly { title: string; body: string }[] };
type Editorial = { kicker: string; title: string };
type Audience = { kicker: string; title: string; subtitle: string; cards: readonly { title: string; body: string }[] };
type Compare = {
  kicker: string;
  title: string;
  subtitle: string;
  columns: readonly [string, string, string];
  rows: readonly { label: string; c: readonly [boolean, boolean, boolean] }[];
};
type Process = { kicker: string; title: string; steps: readonly { n: string; title: string; body: string }[] };
type Stack = { kicker: string; title: string; body: string; labels: readonly string[] };
type Cases = { kicker: string; title: string; intro: string };
type FaqBlock = { kicker: string; title: string; subtitle: string };
type FaqItem = { question: string; answer: string };
type Budget = { title: string; line: string; note: string };
type FinalCta = { title: string; primaryHref: string; primaryLabel: string; secondaryHref: string; secondaryLabel: string };
type JsonLd = { serviceName: string; serviceDescription: string; breadcrumbPageName: string };

export type SeoPremiumChildConfig = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  jsonLd: JsonLd;
  breadcrumbLabel: string;
  hero: Hero;
  benefits: Block4;
  editorial: Editorial;
  audience: Audience;
  compare: Compare;
  process: Process;
  stack: Stack;
  cases: Cases;
  faq: FaqBlock;
  faqItems: readonly FaqItem[];
  budget: Budget;
  finalCta: FinalCta;
};

const CTA_DEVIS_SITE = { href: '/devis?projectType=site', label: 'Demander un devis' } as const;
const CTA_CONTACT = { href: '/contact', label: 'Poser une question' } as const;
const CTA_PORTFOLIO = (path: string) => ({ href: `${path}#portfolio`, label: 'Voir le portfolio' } as const);

export const SEO_PREMIUM_CHILDREN: Record<SeoPremiumSlug, SeoPremiumChildConfig> = {
  'audit-seo': {
    path: `${SILO}/audit-seo`,
    metaTitle: 'Audit SEO — État des lieux & priorités | Clickdev',
    metaDescription:
      'Je réalise un audit SEO lisible : ce qui bloque sur Google, ce qui est urgent, ce qui peut attendre. Ex. site vitrine, boutique. Devis gratuit — Clickdev.',
    keywords: ['audit SEO freelance', 'audit site Google', 'référencement naturel PME', 'SEO compréhensible', 'priorités SEO'],
    jsonLd: {
      serviceName: 'Audit SEO',
      serviceDescription: 'Audit de visibilité Google : technique, contenu et priorités actionnables, sans jargon inutile.',
      breadcrumbPageName: 'Audit SEO',
    },
    breadcrumbLabel: 'Audit SEO',
    hero: {
      chapter: 'Chapitre 04.1 · Audit',
      subline: 'Développeur freelance — Je conçois votre feuille de route',
      h1: 'Audit SEO : savoir quoi faire en premier',
      lead:
        'Un bon audit, ce n’est pas un PDF de 80 pages illisible : c’est une liste claire de problèmes et de gains possibles. Je regarde votre site comme un moteur de recherche, puis je traduis en actions concrètes — pour une boutique, un cabinet ou une association.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/audit-seo`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une vision honnête de votre visibilité',
      subtitle: 'Priorités, effort estimé, sans promesse de “#1 Google garanti”.',
      items: [
        { title: 'Les vrais freins', body: 'Ex. : pages trop lentes, titres vides, contenu dupliqué, site invisible sur mobile.' },
        { title: 'Un ordre de passage', body: 'Ce qui rapporte vite (souvent technique ou pages clés) avant le travail de fond.' },
        { title: 'Un langage clair', body: 'Vous repartez avec des formulations que vous pouvez relire avec votre équipe.' },
        { title: 'Aligné avec votre site', body: 'Si je développe ou refonds le site, l’audit sert de base à la refonte.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Pourquoi commencer par l’audit' },
    audience: {
      kicker: 'Pour vous',
      title: 'Situations fréquentes',
      subtitle: 'Quand un audit évite de brûler du budget au mauvais endroit.',
      cards: [
        { title: 'Refonte en vue', body: 'Vous allez changer de design : mieux vaut savoir ce qui marche avant de casser les URLs.' },
        { title: 'Trafic qui baisse', body: 'Sans panique : on vérifie d’abord technique, mises à jour Google, concurrence.' },
        { title: 'Nouveau site', body: 'Vous lancez une activité : on pose les bonnes bases (titres, structure, vitesse).' },
        { title: 'Plusieurs sites', body: 'Franchise ou marques : on évite que les pages se fassent concurrence.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Outil automatique, audit humain, ou les deux ?',
      subtitle: 'Les outils vont vite ; le recul et les priorités demandent un œil expérimenté.',
      columns: ['Rapport auto', 'Avec moi', 'Rien pour l’instant'] as const,
      rows: [
        { label: 'Gratuit ou peu cher au départ', c: [true, false, true] as const },
        { label: 'Explications en français simple', c: [false, true, false] as const },
        { label: 'Priorisation selon votre métier', c: [false, true, false] as const },
        { label: 'Lien avec une future refonte', c: [false, true, false] as const },
        { label: 'Résultat immédiat sans travail', c: [false, false, true] as const },
        { label: 'Idéal si vous avez déjà un expert interne', c: [true, false, true] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Objectifs', body: 'Vendre en ligne, remplir un agenda, informer : on fixe ce qui compte.' },
        { n: '02', title: 'Exploration', body: 'Crawl, index, vitesse, pages importantes.' },
        { n: '03', title: 'Synthèse', body: 'Liste priorisée : impact × difficulté.' },
        { n: '04', title: 'Échange', body: 'On parcourt le document ensemble ; vous posez vos questions.' },
        { n: '05', title: 'Suite', body: 'Devis séparé si vous voulez que j’implémente les corrections.' },
      ],
    },
    stack: {
      kicker: 'Outils',
      title: 'Ce que j’utilise pour analyser',
      body: 'Search Console, outils de crawl, tests de vitesse, lecture manuelle des pages clés — pas une seule “boîte noire”.',
      labels: ['Search Console', 'Lighthouse', 'Screaming Frog', 'Schema', 'Analytics'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Sites et boutiques déjà accompagnés',
      intro: 'Quelques réalisations où le SEO a été pris en compte dès la conception ou en correction.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — audit SEO', subtitle: 'Délai, prix, livrable.' },
    faqItems: [
      { question: 'Que recevez-vous concrètement ?', answer: 'Un document structuré + un échange oral : problèmes, priorités, et idées de formulation pour vos pages clés.' },
      { question: 'Combien de temps ?', answer: 'Souvent 1 à 2 semaines selon la taille du site et la disponibilité des accès.' },
      { question: 'Tarif indicatif ?', answer: 'À partir d’environ 990 € pour un site vitrine classique ; plus pour de gros catalogues ou plusieurs langues.' },
      { question: 'C’est adapté aux particuliers ?', answer: 'Oui si vous avez un site pro (location, activité perso) : les mêmes règles de base s’appliquent.' },
      { question: 'Vous faites les corrections après ?', answer: 'Sur devis : technique côté dev, contenu avec vous ou votre rédacteur.' },
    ],
    budget: { title: 'Budget', line: 'Un audit SEO complet démarre souvent vers 990 € pour un site vitrine', note: 'Devis gratuit selon votre URL.' },
    finalCta: {
      title: 'Envie de savoir où vous en êtes vraiment ?',
      primaryHref: '/devis?projectType=site',
      primaryLabel: 'Demander un devis audit',
      secondaryHref: '/contact',
      secondaryLabel: 'Parler du projet',
    },
  },

  'seo-technique': {
    path: `${SILO}/seo-technique`,
    metaTitle: 'SEO technique — Site rapide & bien indexé | Clickdev',
    metaDescription:
      'Je corrige les blocages techniques SEO : vitesse, indexation, erreurs, données structurées. Pour artisans, PME et e-commerce. Clickdev — devis gratuit.',
    keywords: ['SEO technique freelance', 'indexation Google', 'Core Web Vitals', 'erreurs crawl', 'données structurées'],
    jsonLd: {
      serviceName: 'SEO technique',
      serviceDescription: 'Optimisation technique pour Google : performance, indexation, balisage et corrections d’erreurs.',
      breadcrumbPageName: 'SEO technique',
    },
    breadcrumbLabel: 'SEO technique',
    hero: {
      chapter: 'Chapitre 04.2 · Technique',
      subline: 'Développeur freelance — Je code les correctifs',
      h1: 'SEO technique : quand le site lui-même freine Google',
      lead:
        'Parfois le contenu est bon, mais le site est lent, mal indexé ou envoie des signaux contradictoires. Je développe les correctifs (cache, balises, données structurées) et je vérifie dans Search Console. Ex. : une boutique WooCommerce qui met 6 s à afficher la fiche produit.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/seo-technique`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Un site que Google peut parcourir sereinement',
      subtitle: 'Moins d’erreurs techniques, plus de pages utiles indexées.',
      items: [
        { title: 'Pages qui s’ouvrent vite', body: 'Un visiteur — et Google — quitte souvent avant 3 secondes.' },
        { title: 'Indexation maîtrisée', body: 'Éviter les doublons, les pages vides indexées, les pièges de filtres.' },
        { title: 'Signaux propres', body: 'Titres, liens internes, balises de base cohérentes sur tout le site.' },
        { title: 'Pistes mesurables', body: 'Avant / après sur quelques URLs représentatives.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Technique et contenu vont ensemble' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples de situations',
      subtitle: 'Quand le SEO technique change la donne.',
      cards: [
        { title: 'Refonte récente', body: 'Le trafic a chuté : on vérifie redirections, balises, gabarits.' },
        { title: 'Gros catalogue', body: 'Des milliers de pages : risque de duplication ou de gaspillage de crawl.' },
        { title: 'Site “vieillissant”', body: 'Thème WordPress lourd, images non compressées, scripts partout.' },
        { title: 'Lancement imminent', body: 'Vous ouvrez dans 30 jours : on sécurise robots, sitemap, HTTPS.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Plugin “SEO magique”, développeur, ou les deux ?',
      subtitle: 'Les plugins aident ; ils ne remplacent pas le code ni l’architecture.',
      columns: ['Plugin seul', 'Passage dev', 'Statu quo'] as const,
      rows: [
        { label: 'Gain rapide sans toucher au code', c: [true, false, true] as const },
        { label: 'Corrections profondes (perf, structure)', c: [false, true, false] as const },
        { label: 'Adapté aux cas complexes', c: [false, true, false] as const },
        { label: 'Coût très bas au départ', c: [true, false, true] as const },
        { label: 'Moins de dette technique ensuite', c: [false, true, false] as const },
        { label: 'Zéro effort de votre côté', c: [true, false, true] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Accès', body: 'Search Console, CMS, hébergement si besoin.' },
        { n: '02', title: 'Diagnostic', body: 'Crawl, vitals, erreurs serveur évidentes.' },
        { n: '03', title: 'Plan', body: 'Correctifs classés : sécurité d’abord, puis perf, puis finesse.' },
        { n: '04', title: 'Implémentation', body: 'Je code ou je coordonne avec votre équipe.' },
        { n: '05', title: 'Contrôle', body: 'Revérification après déploiement.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Environnements courants',
      body: 'Next.js, WordPress, Shopify, headless : j’adapte les correctifs à votre stack.',
      labels: ['Next.js', 'WordPress', 'Shopify', 'Cloudflare', 'Search Console'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Projets web avec exigence perf & SEO',
      intro: 'Réalisations où la technique a été traitée sérieusement.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — SEO technique', subtitle: 'Délai, périmètre.' },
    faqItems: [
      { question: 'Sans accès Search Console ?', answer: 'On peut commencer avec un crawl public, mais l’accès console accélère et fiabilise le diagnostic.' },
      { question: 'Vous touchez au serveur ?', answer: 'Si vous me donnez les accès nécessaires ; sinon je livre un cahier pour votre hébergeur.' },
      { question: 'WordPress uniquement ?', answer: 'Non : tout site dont je peux obtenir le code ou un accès déploiement.' },
      { question: 'Combien de temps après correctifs ?', answer: 'Google met souvent quelques semaines à recrawler ; on suit les courbes.' },
      { question: 'Lien avec l’audit ?', answer: 'Oui : l’audit liste ; le SEO technique implémente une partie des corrections.' },
    ],
    budget: { title: 'Budget', line: 'Une mission SEO technique ciblée démarre souvent vers 1 500 €', note: 'Devis selon CMS et nombre de templates.' },
    finalCta: { title: 'Un site lent ou mal indexé ?', primaryHref: '/devis?projectType=site', primaryLabel: 'Demander un devis', secondaryHref: '/contact', secondaryLabel: 'Échanger' },
  },

  'seo-local': {
    path: `${SILO}/seo-local`,
    metaTitle: 'SEO local — Google Maps & recherche “près de moi” | Clickdev',
    metaDescription:
      'Je vous aide à être visible quand on cherche votre métier dans votre ville : fiche Google, pages locales, cohérence NAP. Artisans, cabinets — Clickdev.',
    keywords: ['SEO local freelance', 'Google Business Profile', 'référencement artisan', 'SEO géographique', 'fiche Maps'],
    jsonLd: {
      serviceName: 'SEO local',
      serviceDescription: 'Visibilité locale : fiche Google, pages par zone, avis et cohérence des coordonnées.',
      breadcrumbPageName: 'SEO local',
    },
    breadcrumbLabel: 'SEO local',
    hero: {
      chapter: 'Chapitre 04.3 · Local',
      subline: 'Développeur freelance — Je structure votre présence locale',
      h1: 'SEO local : être trouvé dans votre zone',
      lead:
        'Quelqu’un tape “coiffeur Lyon 3” ou “plombier urgence Nice” : la fiche Google et votre site doivent dire la même chose. Je conçois les pages locales, les titres utiles et les liens internes — pour un commerce de proximité ou plusieurs adresses.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/seo-local`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une présence cohérente partout',
      subtitle: 'Même nom, même adresse, même téléphone : Google aime la clarté.',
      items: [
        { title: 'Fiche Google entretenue', body: 'Catégories, horaires, photos utiles, lien vers le bon site.' },
        { title: 'Pages “ville + service”', body: 'Contenu réel par zone, pas trois phrases copiées-collées.' },
        { title: 'Avis & réputation', body: 'Rappels conformes : pas d’achat d’avis, pas de spam.' },
        { title: 'Suivi simple', body: 'Quelques indicateurs : appels, itinéraires, clics vers le site.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Le local, ce n’est pas que la fiche Maps' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle: 'Qui gagne le plus avec le SEO local.',
      cards: [
        { title: 'Artisan avec camion', body: 'Interventions sur plusieurs communes : une page par zone utile.' },
        { title: 'Cabinet avec deux bureaux', body: 'Deux adresses réelles : deux pages claires + fiches distinctes si permis.' },
        { title: 'Restaurant', body: 'Menu, réservation, itinéraire : tout doit être cliquable sur mobile.' },
        { title: 'Franchise', body: 'Modèle de page pour chaque point de vente sans duplicate sauvage.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Agence “pack local”, freelance, ou DIY ?',
      subtitle: 'Le DIY marche si vous avez du temps ; le freelance si vous voulez un cadre technique solide.',
      columns: ['Vous seul', 'Accompagnement', 'Pack agence'] as const,
      rows: [
        { label: 'Coût direct minimal', c: [true, false, false] as const },
        { label: 'Stratégie adaptée à votre rue', c: [false, true, true] as const },
        { label: 'Lien avec votre site existant', c: [false, true, true] as const },
        { label: 'Temps requis de votre côté', c: [false, true, false] as const },
        { label: 'Moins de jargon', c: [true, true, false] as const },
        { label: 'Idéal si vous détestez l’admin Google', c: [false, true, true] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Zones & services', body: 'Où vous intervenez, quels mots utilisent vos clients.' },
        { n: '02', title: 'Audit express', body: 'Fiche, site, concurrence locale.' },
        { n: '03', title: 'Plan de contenu', body: 'Pages à créer ou fusionner.' },
        { n: '04', title: 'Mise en œuvre', body: 'Textes, maillage, balisage local.' },
        { n: '05', title: 'Mesure', body: 'Appels, formulaires, trafic organique local.' },
      ],
    },
    stack: {
      kicker: 'Outils',
      title: 'Écosystème local',
      body: 'Google Business Profile, pages services, données structurées LocalBusiness quand c’est pertinent.',
      labels: ['Google Business', 'Schema.org', 'WordPress', 'Analytics'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Sites avec dimension locale',
      intro: 'Exemples de projets où la géolocalisation comptait.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — SEO local', subtitle: 'Multi-sites, avis.' },
    faqItems: [
      { question: 'Sans boutique physique ?', answer: 'On clarifie la zone desservie et les consignes Google ; parfois la fiche n’est pas adaptée.' },
      { question: 'Plusieurs villes sans adresse ?', answer: 'On travaille plutôt des pages de zone + preuve d’intervention, sans inventer une adresse.' },
      { question: 'Vous rédigez tout le texte ?', answer: 'Je peux proposer des trames ; le métier reste le vôtre pour les détails factuels.' },
      { question: 'Combien de temps pour voir un effet ?', answer: 'Souvent quelques semaines à quelques mois selon concurrence et historique.' },
      { question: 'Budget indicatif ?', answer: 'À partir d’environ 1 200 € pour une structure locale simple sur site existant.' },
    ],
    budget: { title: 'Budget', line: 'Un pack SEO local (fiche + pages) démarre souvent vers 1 200 €', note: 'Devis selon nombre de zones.' },
    finalCta: { title: 'Clients locaux à faire entrer ?', primaryHref: '/devis?projectType=site', primaryLabel: 'Devis SEO local', secondaryHref: '/contact', secondaryLabel: 'Appel découverte' },
  },

  'seo-ecommerce': {
    path: `${SILO}/seo-ecommerce`,
    metaTitle: 'SEO e-commerce — Catalogue & fiches produit | Clickdev',
    metaDescription:
      'Je structure votre boutique pour Google : catégories, filtres, fiches utiles, duplication maîtrisée. WooCommerce, Shopify, sur mesure — Clickdev.',
    keywords: ['SEO e-commerce freelance', 'référencement boutique', 'filtres SEO', 'fiches produit Google', 'Shopify SEO'],
    jsonLd: {
      serviceName: 'SEO e-commerce',
      serviceDescription: 'Référencement de boutiques en ligne : catalogue, filtres, contenus produit et maillage.',
      breadcrumbPageName: 'SEO e-commerce',
    },
    breadcrumbLabel: 'SEO e-commerce',
    hero: {
      chapter: 'Chapitre 04.4 · E-commerce',
      subline: 'Développeur freelance — Je relie technique & catalogue',
      h1: 'SEO e-commerce : vendre sans noyer Google dans du vide',
      lead:
        'Un catalogue mal paramétré crée des milliers d’URLs inutiles ou des fiches pauvres. Je conçois la structure (catégories, filtres, pagination) et j’aide à rédiger des fiches utiles. Ex. : marque de vêtements avec 400 variantes de couleur.',
      primaryCta: { href: '/devis?projectType=ecommerce', label: 'Devis boutique' },
      secondaryCta: CTA_PORTFOLIO(`${SILO}/seo-ecommerce`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Un catalogue lisible pour humains et robots',
      subtitle: 'Moins de bruit, plus de pages qui valent le coup d’être indexées.',
      items: [
        { title: 'Arborescence claire', body: 'Le client trouve en 3 clics ; Google comprend les priorités.' },
        { title: 'Fiches utiles', body: 'Tailles, matières, livraison : ce qui réduit les retours et les doutes.' },
        { title: 'Filtres sous contrôle', body: 'Éviter l’explosion d’URLs en double.' },
        { title: 'Données produit propres', body: 'Balisage adapté sans sur-promesse dans les rich results.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Le SEO e-commerce est un métier de boulanger' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle: 'Quand investir dans le SEO catalogue.',
      cards: [
        { title: 'Lancement boutique', body: 'Avant d’ajouter 2 000 fiches : modèle SEO-ready.' },
        { title: 'Marketplace + site marque', body: 'Éviter que le site cannibalise ou duplique la marketplace.' },
        { title: 'Saisonnier', body: 'Soldes, collections : URLs stables, messages clairs.' },
        { title: 'B to B', body: 'Références techniques, PDF, demandes de devis : SEO orienté conversion.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'SEO e-commerce : one-shot ou accompagnement ?',
      subtitle: 'Le catalogue bouge : un coup ponctuel suffit rarement à vie.',
      columns: ['Audit ponctuel', 'Accompagnement', 'Rien'] as const,
      rows: [
        { label: 'Structure figée vite', c: [true, false, true] as const },
        { label: 'Suivi des nouveautés', c: [false, true, false] as const },
        { label: 'Ajustements saisonniers', c: [false, true, false] as const },
        { label: 'Coût mensuel maîtrisé', c: [false, true, true] as const },
        { label: 'Idéal catalogue figé', c: [true, false, true] as const },
        { label: 'Idéal catalogue vivant', c: [false, true, false] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Inventaire', body: 'Templates, filtres, pages orphelines.' },
        { n: '02', title: 'Modèle de fiche', body: 'Champs SEO, texte minimal utile.' },
        { n: '03', title: 'Maillage', body: 'Catégories, liens entre produits complémentaires.' },
        { n: '04', title: 'Mesures', body: 'Search Console, pages stratégiques.' },
        { n: '05', title: 'Itérations', body: 'Ajustements après retours vente / support.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Plateformes',
      body: 'Shopify, WooCommerce, Presta, headless : les principes restent, l’implémentation change.',
      labels: ['Shopify', 'WooCommerce', 'Next.js', 'Search Console', 'Merchant Center'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'E-commerce & SEO',
      intro: 'Projets boutique où le référencement a été cadré.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — SEO e-commerce', subtitle: 'Filtres, avis.' },
    faqItems: [
      { question: 'Shopify “SEO friendly” ?', answer: 'La plateforme aide, mais la structure du catalogue et le contenu restent décisifs.' },
      { question: 'Avis produits et SEO ?', answer: 'Les avis enrichissent la page ; on évite le contenu vide ou dupliqué fournisseur.' },
      { question: 'Traductions ?', answer: 'Une langue mal traduite peut indexer du mauvais contenu : stratégie hreflang si multi-pays.' },
      { question: 'Vous rédigez toutes les fiches ?', answer: 'Je peux fournir trames et modèles ; la validation métier reste chez vous.' },
      { question: 'Budget indicatif ?', answer: 'À partir d’environ 1 800 € pour un cadrage + templates sur boutique déjà en ligne.' },
    ],
    budget: { title: 'Budget', line: 'Un cadrage SEO e-commerce démarre souvent vers 1 800 €', note: 'Devis selon nombre de gabarits et langues.' },
    finalCta: { title: 'Catalogue à structurer avant la saison ?', primaryHref: '/devis?projectType=ecommerce', primaryLabel: 'Devis SEO boutique', secondaryHref: '/contact', secondaryLabel: 'Question rapide' },
  },

  'migration-seo': {
    path: `${SILO}/migration-seo`,
    metaTitle: 'Migration SEO — Changer d’URL sans tout perdre | Clickdev',
    metaDescription:
      'Je planifie votre migration SEO : redirections, tests, suivi Search Console. Refonte, HTTPS, nouveau nom de domaine. PME & e-commerce — Clickdev.',
    keywords: ['migration SEO freelance', 'redirections 301', 'refonte SEO', 'changement domaine', 'HTTPS SEO'],
    jsonLd: {
      serviceName: 'Migration SEO',
      serviceDescription: 'Accompagnement migration web : plan de redirections, tests et suivi pour limiter la perte de trafic.',
      breadcrumbPageName: 'Migration SEO',
    },
    breadcrumbLabel: 'Migration SEO',
    hero: {
      chapter: 'Chapitre 04.5 · Migration',
      subline: 'Développeur freelance — Je sécurise le passage',
      h1: 'Migration SEO : garder Google après un changement majeur',
      lead:
        'Changer de CMS, passer en HTTPS ou renommer le site peut faire disparaître des positions du jour au lendemain. Je prépare la carte des URLs, les redirections et les tests avant bascule. Ex. : association qui quitte un vieux sous-domaine pour un .org unique.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/migration-seo`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une bascule traçable',
      subtitle: 'Moins de surprises le lundi matin dans Search Console.',
      items: [
        { title: 'Cartographie URL', body: 'Ancienne → nouvelle, avec exceptions documentées.' },
        { title: 'Redirections propres', body: '301 stables, pas de chaînes inutiles.' },
        { title: 'Tests avant prod', body: 'Préproduction, échantillon de pages stratégiques.' },
        { title: 'Suivi post-bascule', body: 'Courbes, erreurs 404, correctifs rapides.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'La migration, c’est d’abord de la logistique' },
    audience: {
      kicker: 'Pour vous',
      title: 'Cas typiques',
      subtitle: '',
      cards: [
        { title: 'Refonte graphique', body: 'Les URLs changent : sans plan, c’est une roulette.' },
        { title: 'Fusion de deux sites', body: 'Blog + boutique : hiérarchie et canonicals à trancher.' },
        { title: 'HTTPS', body: 'Encore des sites mixtes http/https en 2026 : à corriger proprement.' },
        { title: 'Changement de nom', body: 'Nouveau domaine : double signal marque + technique.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Seul le dev, seul le SEO, ou binôme ?',
      subtitle: 'Les deux regards évitent les oublis.',
      columns: ['Dev seul', 'Dev + SEO', 'SEO seul'] as const,
      rows: [
        { label: 'Redirections implémentées vite', c: [true, true, false] as const },
        { label: 'Priorisation SEO des URLs', c: [false, true, true] as const },
        { label: 'Tests crawl sur préprod', c: [false, true, true] as const },
        { label: 'Moins de allers-retours', c: [false, true, false] as const },
        { label: 'Possible si équipe déjà rodée', c: [true, false, false] as const },
        { label: 'Recommandé migration sensible', c: [false, true, false] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Inventaire', body: 'Export URLs, trafic, backlinks notables.' },
        { n: '02', title: 'Règles', body: '301, 410, exceptions.' },
        { n: '03', title: 'Implémentation', body: 'Serveur, CMS, CDN.' },
        { n: '04', title: 'Go live', body: 'Fenêtre, monitoring, rollback prévu.' },
        { n: '05', title: 'Stabilisation', body: 'Sitemap, Search Console, correctifs.' },
      ],
    },
    stack: {
      kicker: 'Outils',
      title: 'Contrôle & suivi',
      body: 'Screaming Frog, logs si disponibles, Search Console, tableur de suivi partagé.',
      labels: ['301', 'Search Console', 'Regex', 'Cloudflare'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Refontes & migrations',
      intro: 'Projets où les URLs et le SEO ont été gérés ensemble.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — migration SEO', subtitle: 'Délais, risques.' },
    faqItems: [
      { question: 'Perte de trafic normale ?', answer: 'Un léger creux peut arriver ; l’objectif est qu’il soit court et surveillé.' },
      { question: 'Vous gérez le DNS ?', answer: 'Si vous me donnez l’accès ; sinon je coordonne avec l’hébergeur.' },
      { question: 'Combien de temps de mission ?', answer: 'Souvent 2 à 6 semaines selon taille du site et nombre d’environnements.' },
      { question: 'Marketplace incluse ?', answer: 'Possible en périmètre séparé : règles souvent différentes du site principal.' },
      { question: 'Budget indicatif ?', answer: 'À partir d’environ 1 500 € pour un site vitrine moyen avec recette.' },
    ],
    budget: { title: 'Budget', line: 'Une migration SEO accompagnée démarre souvent vers 1 500 €', note: 'Devis selon volume d’URLs.' },
    finalCta: { title: 'Bascule prévue bientôt ?', primaryHref: '/devis?projectType=site', primaryLabel: 'Devis migration', secondaryHref: '/contact', secondaryLabel: 'Parler calendrier' },
  },

  'redaction-seo': {
    path: `${SILO}/redaction-seo`,
    metaTitle: 'Rédaction SEO — Pages utiles & intentions | Clickdev',
    metaDescription:
      'Je conçois des pages web utiles pour vos lecteurs et pour Google : structure, intentions, FAQ. Pas de texte bourré de mots-clés — Clickdev freelance.',
    keywords: ['rédaction SEO freelance', 'contenu SEO PME', 'pages services SEO', 'FAQ SEO', 'intention recherche'],
    jsonLd: {
      serviceName: 'Rédaction SEO',
      serviceDescription: 'Contenus web optimisés pour la recherche : pages services, FAQ et textes utiles aux visiteurs.',
      breadcrumbPageName: 'Rédaction SEO',
    },
    breadcrumbLabel: 'Rédaction SEO',
    hero: {
      chapter: 'Chapitre 04.6 · Contenu',
      subline: 'Développeur freelance — Je structure & je rédige avec vous',
      h1: 'Rédaction SEO : des pages que les gens lisent jusqu’au bout',
      lead:
        'Google récompense les pages qui répondent vraiment à la question posée. Je propose des plans clairs, des titres honnêtes et des blocs FAQ — pour une agence immobilière, une auto-école ou un blog pro. Pas de remplissage artificiel.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/redaction-seo`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Du contenu aligné avec la recherche',
      subtitle: 'Une intention par page, un message clair.',
      items: [
        { title: 'Recherche d’intentions', body: 'Ce que les gens tapent vraiment avant d’appeler.' },
        { title: 'Plans de page', body: 'H2/H3, FAQ, appels à l’action naturels.' },
        { title: 'Ton cohérent', body: 'Votre voix : je ne remplace pas votre expertise métier.' },
        { title: 'Intégration web', body: 'Je peux poser le texte dans votre CMS ou votre site sur mesure.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Le bon mot-clé est celui du client' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle: '',
      cards: [
        { title: '10 pages “services” identiques', body: 'On différencie vraiment plombier / chauffagiste / dépannage.' },
        { title: 'Blog ignoré', body: 'Trois articles solides valent mieux que trente brouillons.' },
        { title: 'Lancement produit', body: 'Page argumentaire + preuves + comparatif honnête.' },
        { title: 'Particulier expert', body: 'Coach, photographe : pages qui vendent votre méthode.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'IA brute, rédacteur humain, ou mix ?',
      subtitle: 'L’IA peut brouillonner ; la validation et le cadre restent humains.',
      columns: ['Texte 100 % IA', 'Cadre + relecture', 'Rédacteur seul'] as const,
      rows: [
        { label: 'Rapide à produire', c: [true, true, false] as const },
        { label: 'Fiabilité des faits', c: [false, true, true] as const },
        { label: 'Ton de marque', c: [false, true, true] as const },
        { label: 'Coût contenu bas', c: [true, true, false] as const },
        { label: 'SEO durable', c: [false, true, true] as const },
        { label: 'Zéro relecture nécessaire', c: [true, false, true] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Interview courte', body: 'Vos différences, vos clients types.' },
        { n: '02', title: 'Liste de pages', body: 'Priorité business × opportunité SEO.' },
        { n: '03', title: 'Rédaction', body: 'Brouillon + sources si besoin.' },
        { n: '04', title: 'Relecture', body: 'Vous validez les faits ; j’ajuste le style.' },
        { n: '05', title: 'Publication', body: 'Titres, liens internes, images alt.' },
      ],
    },
    stack: {
      kicker: 'Outils',
      title: 'Recherche & mesure',
      body: 'Search Console, suggestions de requêtes, concurrence manuelle raisonnable.',
      labels: ['Search Console', 'Docs', 'Notion', 'WordPress'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Sites avec contenu travaillé',
      intro: 'Projets où les textes et le SEO allaient de pair.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — rédaction SEO', subtitle: 'Longueur, langues.' },
    faqItems: [
      { question: 'Longueur idéale ?', answer: 'Celle qui couvre la question sans blabla : parfois 400 mots, parfois 1 500.' },
      { question: 'Plusieurs langues ?', answer: 'Oui avec budget adapté : une vraie traduction ou locale, pas le copier-coller.' },
      { question: 'Vous garantissez la 1re place ?', answer: 'Non : personne ne peut l’éthiquement ; je vise trafic qualifié et clarté.' },
      { question: 'Je fournis des sources ?', answer: 'Oui : PDF, témoignages chiffrés, photos : ça renforce la crédibilité.' },
      { question: 'Budget indicatif ?', answer: 'À partir d’environ 120 € / page simple une fois le plan validé ; forfait sur lots.' },
    ],
    budget: { title: 'Budget', line: 'La rédaction SEO se cote au forfait ou à la page à partir de ~120 €', note: 'Devis selon volume et interviews.' },
    finalCta: { title: 'Pages à refaire avant la saison ?', primaryHref: '/devis?projectType=site', primaryLabel: 'Devis contenu', secondaryHref: '/contact', secondaryLabel: 'Échanger' },
  },

  'netlinking': {
    path: `${SILO}/netlinking`,
    metaTitle: 'Netlinking — Liens utiles, pas de spam | Clickdev',
    metaDescription:
      'Stratégie de liens naturels : partenariats, contenus, annuaires pertinents. Je refuse les achats de liens douteux. PME & marques — Clickdev.',
    keywords: ['netlinking freelance', 'liens SEO naturels', 'stratégie backlinks', 'SEO sans spam', 'notoriété domaine'],
    jsonLd: {
      serviceName: 'Netlinking',
      serviceDescription: 'Stratégie de liens entrants qualitatifs : partenariats et contenus, sans techniques risquées.',
      breadcrumbPageName: 'Netlinking',
    },
    breadcrumbLabel: 'Netlinking',
    hero: {
      chapter: 'Chapitre 04.7 · Liens',
      subline: 'Développeur freelance — Je privilégie la prudence',
      h1: 'Netlinking : la notoriété vient des bons signaux',
      lead:
        'Un lien, c’est une recommandation. Je vous aide à identifier des sites crédibles, des partenariats logiques et des contenus dignes d’être cités — pas des fermes de liens. Ex. : fabricant cité par des blogs pros de son secteur.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/netlinking`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une stratégie défendable',
      subtitle: 'Moins de risque de pénalité Google, plus de liens qui ont du sens.',
      items: [
        { title: 'Cartographie des mentions', body: 'Qui parle déjà de vous, où améliorer.' },
        { title: 'Angles éditoriaux', body: 'Études, outils gratuits, interviews : ce qui attire un lien.' },
        { title: 'Prospection raisonnée', body: 'Quelques sites bien choisis valent mieux que 500 e-mails spam.' },
        { title: 'Suivi', body: 'Tableau simple : nouveaux liens, ancres, pages cibles.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Les liens achetés au kilo, c’est fini (heureusement)' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle: '',
      cards: [
        { title: 'Marque B2B', body: 'Guest posts sur médias métier + fiches partenaires.' },
        { title: 'Local', body: 'Chambre de métiers, blogs locaux, sponsors d’événements.' },
        { title: 'E-commerce niche', body: 'Tests produit par des influenceurs avec lien honnête.' },
        { title: 'Association', body: 'Réseau de membres, presse locale, partenariats.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Achat de liens, PR digitale, ou rien ?',
      subtitle: 'Le “rien” peut suffire si votre produit est déjà très cité.',
      columns: ['Achat massif', 'Stratégie prudente', 'Pas de liens'] as const,
      rows: [
        { label: 'Risque pénalité faible', c: [false, true, true] as const },
        { label: 'Effet long terme', c: [false, true, false] as const },
        { label: 'Coût immédiat très bas', c: [true, false, true] as const },
        { label: 'Aligné guidelines Google', c: [false, true, true] as const },
        { label: 'Convient site tout neuf', c: [true, true, false] as const },
        { label: 'Convient marque établie', c: [false, true, true] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Audit liens', body: 'Profil actuel, toxicité évidente.' },
        { n: '02', title: 'Objectifs', body: 'Pages à pousser, secteur.' },
        { n: '03', title: 'Plan éditorial', body: 'Contenus “linkables”.' },
        { n: '04', title: 'Outreach', body: 'Messages courts, personnalisés.' },
        { n: '05', title: 'Reporting', body: 'Liens gagnés, à désavouer si rare cas toxique.' },
      ],
    },
    stack: {
      kicker: 'Outils',
      title: 'Analyse',
      body: 'Search Console, Majestic/Ahrefs si vous avez déjà un abonnement, tableur.',
      labels: ['Search Console', 'Excel', 'Docs'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Visibilité & autorité',
      intro: 'Projets où la notoriété a été travaillée proprement.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — netlinking', subtitle: 'Budget, délais.' },
    faqItems: [
      { question: 'Combien de liens par mois ?', answer: 'Je préfère la qualité : quelques liens solides qu’une courbe artificielle.' },
      { question: 'Vous postez des articles pour moi ?', answer: 'Je peux coordonner avec un rédacteur ou rédiger des angles techniques.' },
      { question: 'Désaveu de liens toxiques ?', answer: 'Si l’historique est douteux : audit puis fichier disavow en dernier recours.' },
      { question: 'Budget indicatif ?', answer: 'Accompagnement stratégique à partir d’environ 900 € / mois sur 3 mois minimum.' },
      { question: 'Résultat garanti ?', answer: 'Non : les liens dépendent aussi des tiers ; on maximise la probabilité.' },
    ],
    budget: { title: 'Budget', line: 'Un plan netlinking prudent démarre souvent vers 900 € / mois', note: 'Engagement minimum 3 mois en général.' },
    finalCta: { title: 'Besoin de crédibilité aux yeux de Google ?', primaryHref: '/devis?projectType=site', primaryLabel: 'Devis netlinking', secondaryHref: '/contact', secondaryLabel: 'Discuter du profil' },
  },

  'geo-generative-engine-optimization': {
    path: `${SILO}/geo-generative-engine-optimization`,
    metaTitle: 'GEO — Visibilité dans les réponses IA (ChatGPT…) | Clickdev',
    metaDescription:
      'J’optimise votre présence pour être cité quand les gens demandent à une IA : entité claire, faits, FAQ. Sans promesse magique — Clickdev freelance.',
    keywords: ['GEO SEO', 'ChatGPT visibilité marque', 'optimisation IA recherche', 'FAQ structurée', 'E-E-A-T PME'],
    jsonLd: {
      serviceName: 'GEO — visibilité dans les moteurs génératifs',
      serviceDescription: 'Optimisation pour être mieux cité dans les réponses des assistants : contenu clair, FAQ et signaux de confiance.',
      breadcrumbPageName: 'GEO',
    },
    breadcrumbLabel: 'GEO',
    hero: {
      chapter: 'Chapitre 04.8 · GEO',
      subline: 'Développeur freelance — Je structure vos signaux de confiance',
      h1: 'GEO : être visible quand on pose la question à une IA',
      lead:
        'Les gens demandent désormais “quel plombier à Toulouse ?” à un chatbot. Le GEO, c’est rendre votre site et votre marque faciles à résumer : qui vous êtes, pourquoi vous êtes crédibles, quelles preuves. Ex. : cabinet avec page “équipe + diplômes + zone”.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/geo-generative-engine-optimization`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une marche à suivre réaliste',
      subtitle: 'Pas de “hack ChatGPT” : du contenu et du sens.',
      items: [
        { title: 'Fiche “à propos” solide', body: 'Humain, rôle, zone : ce que les modèles repèrent souvent.' },
        { title: 'FAQ structurée', body: 'Questions réelles clients + réponses courtes factuelles.' },
        { title: 'Faits vérifiables', body: 'Chiffres, dates, sources : moins d’hallucinations quand on vous cite.' },
        { title: 'Cohérence partout', body: 'Même nom, même adresse sur site, annuaires, réseaux.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Le GEO complète le SEO classique' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle: '',
      cards: [
        { title: 'Marque B2C', body: 'Comparaisons “vous vs concurrent” honnêtes sur le site.' },
        { title: 'SaaS', body: 'Pages “intégrations / sécurité / RGPD” lisibles par humains et IA.' },
        { title: 'Professions réglementées', body: 'Mentions légales + expertise sans promesse interdite.' },
        { title: 'Association', body: 'Mission, impact chiffré, actualités : matière à citation.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'SEO Google, GEO, ou les deux ?',
      subtitle: 'Les deux se nourrissent souvent des mêmes fondations.',
      columns: ['SEO seul', 'SEO + GEO', 'GEO seul'] as const,
      rows: [
        { label: 'Trafic Google classique', c: [true, true, false] as const },
        { label: 'Préparation citations IA', c: [false, true, true] as const },
        { label: 'Effet mesurable court terme', c: [true, true, false] as const },
        { label: 'Investissement raisonnable PME', c: [true, true, false] as const },
        { label: 'Sans toucher au site', c: [false, false, true] as const },
        { label: 'Recommandé 2026', c: [false, true, false] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Audit express', body: 'Pages clés, entité, FAQ.' },
        { n: '02', title: 'Plan contenu', body: 'Trous, preuves manquantes.' },
        { n: '03', title: 'Rédaction / dev', body: 'Blocs structurés, données si utile.' },
        { n: '04', title: 'Contrôle', body: 'Lecture humaine, cohérence légale.' },
        { n: '05', title: 'Suivi', body: 'Ajustements après retours terrain.' },
      ],
    },
    stack: {
      kicker: 'Technique',
      title: 'Côté site',
      body: 'Balisage FAQPage, titres clairs, performance : le socle reste web classique.',
      labels: ['JSON-LD', 'FAQ', 'Search Console', 'Performance'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Sites orientés confiance',
      intro: 'Projets avec pages “preuve” et structure soignée.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — GEO', subtitle: 'Promesses, mesure.' },
    faqItems: [
      { question: 'Peut-on mesurer le GEO ?', answer: 'Partiellement : trafic brand, mentions, surveys internes ; pas de métrique unique officielle.' },
      { question: 'Remplace le SEO ?', answer: 'Non : Google reste une porte d’entrée majeure pour la plupart des sites.' },
      { question: 'Garantir d’apparaître dans ChatGPT ?', answer: 'Impossible et peu honnête : les modèles changent souvent.' },
      { question: 'Particulier avec site perso ?', answer: 'Oui si vous avez une activité : même besoin de clarté et de preuves.' },
      { question: 'Budget indicatif ?', answer: 'Atelier + mise en œuvre pages clés souvent à partir de 1 000 €.' },
    ],
    budget: { title: 'Budget', line: 'Un socle GEO (pages + FAQ) démarre souvent vers 1 000 €', note: 'Devis selon nombre de modèles de page.' },
    finalCta: { title: 'On vous cherche mais les IA ne savent pas qui vous êtes ?', primaryHref: '/devis?projectType=site', primaryLabel: 'Devis GEO', secondaryHref: '/contact', secondaryLabel: 'Poser une question' },
  },
};
