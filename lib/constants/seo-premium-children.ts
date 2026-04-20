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
  finalCta: FinalCta;
};

const CTA_DEVIS_SITE = { href: '/devis?projectType=site', label: 'Demander un devis' } as const;
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
        'Un bon audit, ce n’est pas un PDF de 80 pages que personne n’ouvrira : c’est une liste de problèmes réels, classés par impact probable et effort — avec des exemples tirés de votre secteur quand c’est possible. Je croise ce que Google montre déjà dans la Search Console avec ce que je vois en crawl et en navigation manuelle sur vos pages clés : boutique, cabinet, association ou e-commerce, la méthode reste la même, seuls les détails changent.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/audit-seo`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une vision honnête de votre visibilité',
      subtitle:
        'Priorités, effort estimé, et une lecture accessible : vous devez pouvoir en discuter avec un associé qui n’est pas du métier.',
      items: [
        {
          title: 'Les vrais freins, pas la liste des “100 erreurs”',
          body:
            'Pages trop lentes sur mobile, titres génériques partout, contenu dupliqué entre fiches, zone de site invisible aux robots, balises de base incohérentes… On sépare le bruit des signaux qui peuvent vraiment expliquer une stagnation ou une chute.',
        },
        {
          title: 'Un ordre de passage défendable',
          body:
            'Souvent un mélange de quick wins techniques et de deux ou trois pages stratégiques à retravailler avant d’attaquer un blog entier. L’idée est de ne pas payer six mois de rédaction si trois réglages de gabarit changent déjà la donne.',
        },
        {
          title: 'Un langage clair',
          body:
            'Je traduis en français simple : qu’est-ce qu’une redirection, pourquoi telle page est en “noindex”, ce que signifie une alerte dans Search Console. Vous repartez avec un document que vous pouvez relire calmement, pas un jargon pour impressionner.',
        },
        {
          title: 'Prêt pour la suite',
          body:
            'Si vous me confiez ensuite la refonte ou les corrections techniques, l’audit devient le contrat implicite de ce qui doit être préservé (URLs qui performent, maillage utile). Si vous gardez l’implémentation en interne, vous avez une checklist actionnable.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Pourquoi je recommande presque toujours de commencer par là' },
    audience: {
      kicker: 'Pour vous',
      title: 'Situations fréquentes',
      subtitle:
        'Quand un audit évite de brûler du budget au mauvais endroit — ou de lancer une refonte graphique sans boussole.',
      cards: [
        {
          title: 'Refonte en vue',
          body:
            'Vous allez changer de design ou de CMS : mieux vaut savoir ce qui marche aujourd’hui (pages qui ramènent des devis, fil d’ariane utile) avant de casser des URLs ou de supprimer des contenus qui tirent encore le site.',
        },
        {
          title: 'Trafic qui baisse',
          body:
            'Avant de crier au complot ou d’acheter des liens : on vérifie d’abord technique, erreurs d’indexation, mise à jour Google dans votre thématique, et parfois simplement la saisonnalité de votre métier.',
        },
        {
          title: 'Nouveau site ou nouvelle activité',
          body:
            'Vous lancez : autant poser titres, structure, vitesse et pages “preuve” correctement dès le départ, plutôt que de découvrir six mois plus tard que le template produit génère du vide pour Google.',
        },
        {
          title: 'Plusieurs sites ou marques',
          body:
            'Franchise, filiales, blog séparé : on évite que des pages se cannibalisent ou se dupliquent sans le savoir — et on clarifie qui doit ranker sur quoi.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Outil automatique, audit humain, ou les deux ?',
      subtitle:
        'Les outils vont vite et listent mille alertes ; le recul pour dire “commence par ça, pas par le reste” demande un œil qui a déjà vu des refontes mal calibrées.',
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
        {
          n: '01',
          title: 'Objectifs',
          body:
            'Vendre en ligne, remplir un agenda, recruter des adhérents, distribuer de l’info : on fixe ce qui compte pour vous — pas pour un score abstrait.',
        },
        {
          n: '02',
          title: 'Exploration',
          body:
            'Crawl, couverture d’index, signaux de vitesse sur mobile, échantillon de pages stratégiques lues “comme un client”.',
        },
        {
          n: '03',
          title: 'Synthèse',
          body:
            'Liste priorisée impact × difficulté, avec des liens vers des captures ou des URLs précises pour que ce soit vérifiable.',
        },
        {
          n: '04',
          title: 'Échange',
          body:
            'On parcourt le document ensemble en visio ou au téléphone ; vous posez les questions “bêtes” qui ne le sont pas du tout.',
        },
        {
          n: '05',
          title: 'Suite',
          body:
            'Devis séparé si vous souhaitez que j’implémente les corrections techniques ou que je vous accompagne sur le contenu — ou vous gardez la liste pour votre équipe.',
        },
      ],
    },
    stack: {
      kicker: 'Outils',
      title: 'Ce que j’utilise pour analyser',
      body:
        'Google Search Console, crawl (Screaming Frog ou équivalent), Lighthouse et tests réels sur téléphone, lecture manuelle des pages clés et des données structurées quand elles existent. Je croise plusieurs sources : une seule “boîte noire” ne décide jamais à ma place.',
      labels: ['Search Console', 'Lighthouse', 'Screaming Frog', 'Schema', 'Analytics'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Sites et boutiques déjà accompagnés',
      intro:
        'Quelques réalisations où le référencement a été pris au sérieux dès la conception — ou repris en urgence après une refonte qui avait cassé des URLs.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — audit SEO', subtitle: 'Délai, prix, livrable.' },
    faqItems: [
      {
        question: 'Que recevez-vous concrètement ?',
        answer:
          'Un document structuré (problèmes, preuves, priorités) et un échange oral pour le décortiquer ensemble. Quand c’est pertinent, je propose des angles de reformulation pour vos pages clés — sans réécrire tout le site dans le forfait audit.',
      },
      {
        question: 'Combien de temps entre la commande et la livraison ?',
        answer:
          'Souvent une à deux semaines pour un site vitrine ou une boutique moyenne, selon la taille réelle du site et le temps pour obtenir les accès Search Console / CMS.',
      },
      {
        question: 'Tarif indicatif ?',
        answer:
          'À partir d’environ 990 € pour un site vitrine classique. Les gros catalogues e-commerce, les environnements multi-langues ou les groupes de plusieurs domaines demandent plus de temps d’analyse et se chiffrent en conséquence.',
      },
      {
        question: 'C’est adapté aux particuliers ?',
        answer:
          'Oui si vous avez un site professionnel (location saisonnière, activité perso, portfolio monétisé) : les fondamentaux restent les mêmes, seule l’échelle change.',
      },
      {
        question: 'Vous faites les corrections après l’audit ?',
        answer:
          'Sur devis séparé : partie technique si je code chez vous, partie contenu avec vous ou votre rédacteur. L’audit peut aussi servir de base d’appel d’offres si vous travaillez avec une autre équipe — tant que le document est lu.',
      },
    ],
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
        'Parfois vos textes sont honnêtes et vos photos soignées, mais le site met six secondes à afficher une fiche, envoie des centaines de pages vides à l’index, ou mélange http et https sans le savoir. Je développe les correctifs (cache, gabarits, balises, données structurées quand elles ont un sens) et je vérifie l’effet dans Search Console — pas seulement dans un score Lighthouse isolé. Exemple typique : une boutique WooCommerce où chaque variante de produit alourdit le front.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/seo-technique`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Un site que Google peut parcourir sereinement',
      subtitle:
        'Moins d’erreurs “bêtes mais coûteuses”, plus de budget de crawl pour les pages qui rapportent vraiment.',
      items: [
        {
          title: 'Pages qui s’ouvrent vite sur mobile',
          body:
            'Un visiteur pressé — et Google en crawl mobile — part souvent avant d’avoir lu quoi que ce soit. On traite images, scripts tiers, polices, et parfois la logique du template qui recalcule trop de choses côté client.',
        },
        {
          title: 'Indexation maîtrisée',
          body:
            'Éviter les doublons massifs, les pages de filtres indexées pour rien, les paramètres d’URL qui créent un labyrinthe. L’objectif n’est pas “plus d’URLs”, c’est les bonnes URLs.',
        },
        {
          title: 'Signaux propres sur tout le site',
          body:
            'Titres uniques, métas qui décrivent vraiment la page, maillage interne qui aide la navigation humaine, canonicals quand il le faut — pas recopiés au hasard.',
        },
        {
          title: 'Des mesures avant / après',
          body:
            'Quelques URLs représentatives, captures Core Web Vitals, erreurs d’exploration : assez pour décider si on continue dans la même direction.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Le technique et le contenu tirent dans la même voiture' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples de situations',
      subtitle:
        'Quand une passe technique change vraiment la donne — parfois plus vite qu’une campagne de blog.',
      cards: [
        {
          title: 'Refonte récente',
          body:
            'Le trafic a chuté après la mise en ligne : on vérifie en priorité redirections, gabarits, balises, et ce qui a changé dans la structure des URLs — avant d’accuser “l’algo Google”.',
        },
        {
          title: 'Gros catalogue',
          body:
            'Des milliers de pages : risque de duplication, de pagination mal gérée, ou de gaspillage du budget de crawl sur du vide. On resserre pour que les fiches utiles reçoivent l’attention.',
        },
        {
          title: 'Site qui vieillit mal',
          body:
            'Thème WordPress empilé de plugins, images non compressées, scripts de tracking partout : la dette technique s’accumule silencieusement jusqu’au jour où tout rame.',
        },
        {
          title: 'Lancement imminent',
          body:
            'Ouverture dans trente jours : robots.txt, sitemap, HTTPS, pages d’erreur propres — les classiques oubliés quand on court après le design.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Plugin “SEO magique”, développeur, ou les deux ?',
      subtitle:
        'Les plugins aident pour les bases ; ils ne remplacent pas une template lourde, une API lente ou une mauvaise stratégie d’URLs.',
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
        {
          n: '01',
          title: 'Accès',
          body:
            'Search Console, CMS, parfois hébergement ou CDN. Sans accès, on peut déjà voir beaucoup en surface — mais moins intervenir vite.',
        },
        {
          n: '02',
          title: 'Diagnostic',
          body:
            'Crawl, Core Web Vitals sur les templates critiques, erreurs serveur évidentes, et lecture des règles d’indexation.',
        },
        {
          n: '03',
          title: 'Plan',
          body:
            'Correctifs classés : sécurité et stabilité d’abord, performance ensuite, raffinements SEO ensuite — avec estimation grossière d’effort.',
        },
        {
          n: '04',
          title: 'Implémentation',
          body:
            'Je code directement ou je prépare des tickets précis pour votre équipe si vous préférez garder le déploiement en interne.',
        },
        {
          n: '05',
          title: 'Contrôle',
          body:
            'Revérification après mise en prod : plus de chaînes de redirections absurdes, plus de régressions sur les pages clés.',
        },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Environnements courants',
      body:
        'Next.js, WordPress, Shopify, stacks headless : les principes (perf, clarté des URLs, données structurées utiles) restent ; l’implémentation change. J’adapte les correctifs à votre codebase réelle, pas à un tuto générique.',
      labels: ['Next.js', 'WordPress', 'Shopify', 'Cloudflare', 'Search Console'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Projets web avec exigence perf & SEO',
      intro:
        'Réalisations où la performance et l’indexation n’étaient pas des options : boutiques, vitrines et outils métiers livrés avec un œil sur la longue durée.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — SEO technique', subtitle: 'Délai, périmètre.' },
    faqItems: [
      {
        question: 'Sans accès Search Console, est-ce possible ?',
        answer:
          'On peut commencer avec un crawl public et des tests Lighthouse, mais l’accès à la console accélère le diagnostic et montre ce que Google voit vraiment (couverture, erreurs, requêtes).',
      },
      {
        question: 'Vous touchez au serveur ?',
        answer:
          'Si vous me donnez les accès nécessaires et que c’est dans le périmètre convenu. Sinon je livre un cahier clair pour votre hébergeur ou votre administrateur système.',
      },
      {
        question: 'WordPress uniquement ?',
        answer:
          'Non : tout projet où je peux obtenir le code source, un accès déploiement ou au moins un environnement de préproduction réaliste.',
      },
      {
        question: 'Combien de temps après les correctifs pour voir un effet ?',
        answer:
          'Google met souvent quelques semaines à recrawler et à réévaluer ; on suit les courbes plutôt que de promettre un jour J magique.',
      },
      {
        question: 'Lien avec l’audit ?',
        answer:
          'Oui : l’audit liste les problèmes ; une mission SEO technique en implémente une partie — souvent celle qui demande du code ou des réglages serveur.',
      },
    ],
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
        'Quelqu’un tape “coiffeur Lyon 3” ou “plombier urgence Nice” sur son téléphone : la fiche Google Business Profile et votre site doivent raconter la même histoire — horaires à jour, zone desservie, services, numéro cliquable. Je conçois les pages “ville + prestation”, les titres utiles et le maillage interne pour qu’un commerce de proximité ou plusieurs adresses ne se marchent pas dessus.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/seo-local`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une présence cohérente partout',
      subtitle:
        'Même nom, même adresse, même téléphone sur le site, les annuaires et les réseaux : moins de confusion pour Google et pour le client qui veut juste vous appeler.',
      items: [
        {
          title: 'Fiche Google entretenue',
          body:
            'Catégories pertinentes, horaires (y compris jours fériés), photos qui montrent le lieu ou l’équipe, lien vers la bonne page du site — pas la page d’accueil générique si une page service existe.',
        },
        {
          title: 'Pages “ville + service” utiles',
          body:
            'Contenu réel par zone : délais d’intervention, types de chantiers, témoignages locaux — pas trois phrases copiées-collées avec le nom de la ville remplacé au find/replace.',
        },
        {
          title: 'Avis et réputation',
          body:
            'Rappels aux clients satisfaits, réponses aux avis négatifs avec calme : tout ce qui est conforme aux règles de Google — pas d’achat d’avis ni de spam.',
        },
        {
          title: 'Suivi simple',
          body:
            'Appels, demandes d’itinéraire, clics vers le site depuis la fiche : quelques indicateurs suffisent souvent à voir si le travail porte ses fruits.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Le local, ce n’est pas seulement remplir une fiche une fois' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle:
        'Qui gagne le plus quand on travaille sérieusement la proximité — au-delà du pin sur la carte.',
      cards: [
        {
          title: 'Artisan avec camion',
          body:
            'Interventions dans plusieurs communes : des pages claires par zone desservie, sans inventer de fausses adresses — Google sanctionne assez vite le flou.',
        },
        {
          title: 'Cabinet avec deux bureaux',
          body:
            'Deux adresses réelles : deux pages distinctes si pertinent, fiches séparées quand les règles le permettent, et une logique de prise de rendez-vous qui ne mélange pas les agendas.',
        },
        {
          title: 'Restaurant ou commerce avec passage',
          body:
            'Menu, réservation, itinéraire : tout doit être utilisable au pouce sur mobile, sinon le client appelle le suivant dans la liste Maps.',
        },
        {
          title: 'Réseau ou franchise',
          body:
            'Modèle de page pour chaque point de vente avec champs obligatoires (horaires, manager, services) pour éviter le duplicate sauvage entre succursales.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Agence “pack local”, freelance, ou vous seul ?',
      subtitle:
        'Faire soi-même marche si vous avez du temps et de la rigueur sur les horaires ; un accompagnement sert quand vous voulez un cadre technique et des pages site propres en plus de la fiche.',
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
        {
          n: '01',
          title: 'Zones & services',
          body:
            'Où vous intervenez réellement, quels mots utilisent vos clients au téléphone, quels services rapportent le plus — pas seulement ce qui sonne bien sur papier.',
        },
        {
          n: '02',
          title: 'Audit express',
          body:
            'Fiche Google, site, concurrence locale sur quelques requêtes représentatives — assez pour voir où ça coince.',
        },
        {
          n: '03',
          title: 'Plan de contenu',
          body:
            'Pages à créer, fusionner ou retirer ; hiérarchie entre “hub” régional et pages quartier si besoin.',
        },
        {
          n: '04',
          title: 'Mise en œuvre',
          body:
            'Textes, maillage interne, balisage local et données structurées quand elles apportent une vraie info au visiteur.',
        },
        {
          n: '05',
          title: 'Mesure',
          body:
            'Appels, formulaires, trafic organique sur les pages locales — on ajuste après quelques semaines de terrain.',
        },
      ],
    },
    stack: {
      kicker: 'Outils',
      title: 'Écosystème local',
      body:
        'Google Business Profile, pages services sur le site, données structurées LocalBusiness ou équivalent quand c’est factuel — pas de markup décoratif.',
      labels: ['Google Business', 'Schema.org', 'WordPress', 'Analytics'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Sites avec dimension locale',
      intro:
        'Exemples de projets où être visible “près de chez soi” faisait partie du cahier des charges — artisans, cabinets, commerces.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — SEO local', subtitle: 'Multi-sites, avis.' },
    faqItems: [
      {
        question: 'Sans boutique physique, est-ce possible ?',
        answer:
          'Parfois oui avec une zone desservie claire et des preuves d’intervention ; parfois non si les règles Google excluent une fiche locale pour votre type d’activité. On tranche au cas par cas plutôt que d’inventer une adresse.',
      },
      {
        question: 'Plusieurs villes sans adresse dans chaque ville ?',
        answer:
          'On travaille plutôt des pages de zone avec du contenu réel (types d’intervention, délais) — sans créer de faux bureaux.',
      },
      {
        question: 'Vous rédigez tout le texte ?',
        answer:
          'Je peux proposer des trames et des angles ; les détails techniques et juridiques restent validés par vous ou vos experts métier.',
      },
      {
        question: 'Combien de temps pour voir un effet ?',
        answer:
          'Souvent quelques semaines à quelques mois selon la concurrence locale, l’historique de la fiche et la qualité des corrections.',
      },
      {
        question: 'Budget indicatif ?',
        answer:
          'À partir d’environ 1 200 € pour une structure locale simple sur site existant (fiche + quelques pages). Plus si beaucoup de zones ou de langues.',
      },
    ],
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
        'Un catalogue mal pensé crée des milliers d’adresses inutiles, des fiches pauvres recopiées du fournisseur, ou des filtres qui génèrent plus de pages vides que de vraies ventes. Je conçois la structure (catégories, filtres, pagination, pages éditoriales) et j’aide à rédiger des fiches qui réduisent les doutes — tailles, délais, retours. Exemple : marque textile avec des centaines de variantes où chaque couleur ne mérite pas sa propre URL indexée.',
      primaryCta: { href: '/devis?projectType=ecommerce', label: 'Devis boutique' },
      secondaryCta: CTA_PORTFOLIO(`${SILO}/seo-ecommerce`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Un catalogue lisible pour humains et robots',
      subtitle:
        'Moins de bruit inutile dans l’index, plus de budget pour les pages qui vendent vraiment — catégories fortes, fiches phares, contenus guides.',
      items: [
        {
          title: 'Arborescence claire',
          body:
            'Le client trouve en quelques clics sans se perdre dans des sous-sous-catégories creuses ; Google comprend ce qui est important chez vous, pas seulement ce qui existe techniquement.',
        },
        {
          title: 'Fiches utiles',
          body:
            'Tailles, matières, entretien, délais de livraison, politique de retour : ce qui diminue les abandons de panier et les allers-retours au support.',
        },
        {
          title: 'Filtres sous contrôle',
          body:
            'Couleurs, pointures, compatibilités : on évite l’explosion d’URLs en double ou les combinaisons indexées sans recherche réelle derrière.',
        },
        {
          title: 'Données produit propres',
          body:
            'Balisage produit quand il est pertinent, sans promettre des rich results que vous ne pourrez pas tenir dans le temps.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Un bon catalogue SEO, c’est comme une boulangerie : de la régularité' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle:
        'Quand investir dans le référencement du catalogue — et quand remettre d’abord la technique à plat.',
      cards: [
        {
          title: 'Lancement de boutique',
          body:
            'Avant d’importer 2 000 fiches depuis un flux fournisseur : modèle de page, champs obligatoires, règles d’indexation — pour ne pas démarrer avec 80 % de vide.',
        },
        {
          title: 'Marketplace + site marque',
          body:
            'Éviter que votre site et la marketplace se fassent concurrence sur les mêmes requêtes, ou dupliquent les mêmes descriptions mot pour mot.',
        },
        {
          title: 'Activité saisonnière',
          body:
            'Soldes, collections capsule : URLs stables, messages clairs, redirections propres quand une ligne disparaît.',
        },
        {
          title: 'B to B',
          body:
            'Fiches techniques, PDF, demandes de devis : le SEO sert la conversion et la prise de contact, pas seulement le trafic.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'SEO e-commerce : one-shot ou accompagnement ?',
      subtitle:
        'Un catalogue vit : nouveaux produits, promos, retours fournisseur — un seul audit ponctuel suffit rarement toute la vie du site.',
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
        {
          n: '01',
          title: 'Inventaire',
          body:
            'Templates produit, filtres, pagination, pages orphelines, flux Google Merchant si vous l’utilisez — on cartographie ce qui existe vraiment.',
        },
        {
          n: '02',
          title: 'Modèle de fiche',
          body:
            'Champs SEO, longueur de texte réaliste, blocs “questions fréquentes” quand ils servent au client — pas pour remplir.',
        },
        {
          n: '03',
          title: 'Maillage',
          body:
            'Catégories mères, liens vers produits complémentaires ou guides d’achat : ce qui aide la navigation autant que Google.',
        },
        {
          n: '04',
          title: 'Mesures',
          body:
            'Search Console sur les segments produit/catégorie, pages stratégiques, et chez vous le taux de conversion — pas seulement les clics.',
        },
        {
          n: '05',
          title: 'Itérations',
          body:
            'Ajustements après retours des ventes et du support : souvent eux savent quelles pages posent problème avant même le SEO.',
        },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Plateformes',
      body:
        'Shopify, WooCommerce, PrestaShop, stacks headless : les principes (structure, duplication, performance) restent ; les boutons et les hooks changent.',
      labels: ['Shopify', 'WooCommerce', 'Next.js', 'Search Console', 'Merchant Center'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'E-commerce & SEO',
      intro:
        'Boutiques où le référencement du catalogue a été cadré tôt — ou repris après une phase d’empilement de fiches sans stratégie.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — SEO e-commerce', subtitle: 'Filtres, avis.' },
    faqItems: [
      {
        question: 'Shopify est-il “SEO friendly” ?',
        answer:
          'La plateforme évite certaines erreurs de base, mais la structure du catalogue, les filtres, le contenu dupliqué fournisseur et la vitesse réelle sur mobile restent décisifs.',
      },
      {
        question: 'Avis produits et SEO ?',
        answer:
          'Les avis enrichissent la page quand ils sont authentiques et modérés ; ils ne remplacent pas une description utile ni ne doivent dupliquer du blabla marketing.',
      },
      {
        question: 'Traductions et plusieurs pays ?',
        answer:
          'Une langue mal traduite ou du contenu dupliqué entre pays peut indexer n’importe quoi : on parle hreflang, contenu local et logistique réelle.',
      },
      {
        question: 'Vous rédigez toutes les fiches ?',
        answer:
          'Je peux fournir trames, exemples et checklists ; la validation technique et légale des produits reste chez vous ou chez vos fournisseurs.',
      },
      {
        question: 'Budget indicatif ?',
        answer:
          'À partir d’environ 1 800 € pour un cadrage + templates sur une boutique déjà en ligne. Les très gros catalogues multi-langues demandent un devis sur mesure.',
      },
    ],
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
        'Changer de CMS, passer en HTTPS proprement ou renommer le domaine peut faire disparaître des positions presque du jour au lendemain si personne n’a préparé la carte des URLs, les redirections 301 et les tests avant la bascule. Je travaille avec votre équipe technique sur un plan lisible — exceptions documentées, pages à ne plus indexer, backlinks importants à préserver. Exemple : une association qui quitte un vieux sous-domaine pour un .org unique sans perdre ses articles de référence.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/migration-seo`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une bascule traçable',
      subtitle:
        'Moins de mauvaises surprises le lundi matin dans Search Console — et une équipe qui sait quoi surveiller les deux premières semaines.',
      items: [
        {
          title: 'Cartographie URL',
          body:
            'Ancienne adresse → nouvelle adresse, avec les cas particuliers (fusion de pages, contenus supprimés volontairement, paramètres à trancher).',
        },
        {
          title: 'Redirections propres',
          body:
            '301 stables, éviter les chaînes inutiles et les boucles ; documenter ce qui doit répondre en 410 quand c’est voulu.',
        },
        {
          title: 'Tests avant production',
          body:
            'Préproduction, crawl d’échantillon, pages stratégiques vérifiées à la main — pas seulement “ça compile”.',
        },
        {
          title: 'Suivi post-bascule',
          body:
            'Courbes, erreurs 404, corrections rapides : la migration ne s’arrête pas au bouton “mettre en ligne”.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Une migration réussie ressemble à un déménagement : des étiquettes sur les cartons' },
    audience: {
      kicker: 'Pour vous',
      title: 'Cas typiques',
      subtitle:
        'Les situations où un œil SEO côté logistique évite des mois à reconquérir des positions.',
      cards: [
        {
          title: 'Refonte graphique',
          body:
            'Les URLs ou les profondeurs de clic changent : sans plan, c’est la roulette. Souvent le design est prêt avant les redirections — il faut inverser l’ordre des priorités.',
        },
        {
          title: 'Fusion de deux sites',
          body:
            'Blog + boutique, acquisition d’une marque : hiérarchie, canonicals et signaux externes à arbitrer clairement.',
        },
        {
          title: 'HTTPS ou correction de mixité',
          body:
            'Encore trop de sites en mixte http/https : navigateurs et moteurs n’aiment pas l’ambiguïté ; on nettoie avec une stratégie unique d’URL canonique.',
        },
        {
          title: 'Changement de nom ou de domaine',
          body:
            'Signal marque + signal technique : double travail de communication et de redirections pour ne pas couper la route aux clients habitués à l’ancienne adresse.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Seul le dev, seul le SEO, ou binôme ?',
      subtitle:
        'Les deux regards évitent les oublis classiques : redirections mal testées d’un côté, stratégie d’indexation floue de l’autre.',
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
        {
          n: '01',
          title: 'Inventaire',
          body:
            'Export d’URLs, trafic actuel sur les segments importants, backlinks notables — pour ne pas couper des pages encore citées ailleurs.',
        },
        {
          n: '02',
          title: 'Règles',
          body:
            '301, 410, exceptions, gestion des paramètres : une spec que le dev peut implémenter sans deviner.',
        },
        {
          n: '03',
          title: 'Implémentation',
          body:
            'Serveur, CMS, CDN : je peux pousser les règles ou relire celles de votre équipe avant la mise en prod.',
        },
        {
          n: '04',
          title: 'Go live',
          body:
            'Fenêtre de bascule, monitoring immédiat, plan de rollback si quelque chose d’inattendu apparaît sur les pages cash.',
        },
        {
          n: '05',
          title: 'Stabilisation',
          body:
            'Sitemap à jour, Search Console, correction des 404 qui comptent vraiment — pas toutes les URLs historiques fantômes.',
        },
      ],
    },
    stack: {
      kicker: 'Outils',
      title: 'Contrôle & suivi',
      body:
        'Crawl type Screaming Frog, logs serveur quand ils sont disponibles, Search Console, tableur de suivi partagé avec l’équipe — tout le monde voit la même vérité.',
      labels: ['301', 'Search Console', 'Regex', 'Cloudflare'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Refontes & migrations',
      intro:
        'Projets où les URLs, le référencement et le déploiement technique ont été traités comme un seul sujet — pas comme deux équipes qui ne se parlent qu’après la mise en ligne.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — migration SEO', subtitle: 'Délais, risques.' },
    faqItems: [
      {
        question: 'Une petite perte de trafic est-elle normale ?',
        answer:
          'Un léger creux peut arriver après une grosse bascule ; l’objectif est qu’il soit court, expliqué et surveillé — pas une chute libre sur trois mois.',
      },
      {
        question: 'Vous gérez le DNS ?',
        answer:
          'Si vous me donnez l’accès et que c’est prévu au devis ; sinon je coordonne avec votre hébergeur ou votre prestataire infra.',
      },
      {
        question: 'Combien de temps dure la mission ?',
        answer:
          'Souvent deux à six semaines selon le volume d’URLs, le nombre d’environnements et la vitesse des validations internes.',
      },
      {
        question: 'Marketplace incluse ?',
        answer:
          'Possible en périmètre séparé : les règles d’URL et d’indexation sont souvent différentes du site vitrine ou de la marque principale.',
      },
      {
        question: 'Budget indicatif ?',
        answer:
          'À partir d’environ 1 500 € pour un site vitrine moyen avec recette et suivi court post-lancement. Les très gros sites e-commerce se chiffrent au cas par cas.',
      },
    ],
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
        'Google met en avant les pages qui répondent vraiment à la question posée — prix, délai, zone, “est-ce que c’est fait pour moi ?”. Je propose des plans de page clairs, des titres honnêtes, des blocs FAQ utiles et des appels à l’action qui ont du sens pour une agence immobilière, une auto-école, un cabinet ou un blog pro. Pas de remplissage avec le même mot-clé vingt fois : si le texte ennuie un humain, il ennuiera aussi tôt ou tard le moteur.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/redaction-seo`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Du contenu aligné avec la recherche',
      subtitle:
        'Une intention principale par page, un message net — et des transitions qui ressemblent à une conversation, pas à un listing de mots-clés.',
      items: [
        {
          title: 'Recherche d’intentions',
          body:
            'Ce que les gens tapent vraiment avant d’appeler ou de prendre rendez-vous — parfois ce n’est pas le mot “officiel” de votre métier.',
        },
        {
          title: 'Plans de page',
          body:
            'H2/H3 qui suivent le fil d’une question, FAQ qui répond aux objections réelles, appels à l’action naturels (téléphone, formulaire court, prise de créneau).',
        },
        {
          title: 'Ton cohérent avec votre marque',
          body:
            'Je ne remplace pas votre expertise : j’interviewe, je reformule, je propose — vous validez les faits et le niveau de promesse.',
        },
        {
          title: 'Intégration web',
          body:
            'Je peux poser le texte dans votre CMS ou dans le site que je développe pour éviter les allers-retours Word → copier-coller → mise en forme cassée.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Le bon mot-clé est souvent celui que votre client utilise au téléphone' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle:
        'Quand la rédaction orientée recherche change concrètement le nombre de demandes.',
      cards: [
        {
          title: 'Dix pages “services” interchangeables',
          body:
            'On différencie vraiment plombier / chauffagiste / dépannage d’urgence — avec des preuves et des cas par service, pas trois paragraphes identiques.',
        },
        {
          title: 'Blog alimenté mais ignoré',
          body:
            'Trois articles solides qui répondent à des questions précises valent souvent mieux que trente brouillons optimisés pour personne.',
        },
        {
          title: 'Lancement produit ou offre',
          body:
            'Page argumentaire, preuves, comparatif honnête avec la concurrence : ce qui rassure avant la prise de contact.',
        },
        {
          title: 'Indépendant ou expert solo',
          body:
            'Coach, photographe, thérapeute : des pages qui vendent votre méthode et votre cadre — sans jargon ni promesses interdites.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'IA brute, rédacteur humain, ou mix ?',
      subtitle:
        'L’IA peut accélérer le brouillon ; la validation des faits, le ton réglementé et le squelette SEO restent humains.',
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
        {
          n: '01',
          title: 'Interview courte',
          body:
            'Vos différences réelles, vos clients types, ce qui vous pose problème aujourd’hui sur le site — souvent une conversation de trente minutes suffit pour partir du bon pied.',
        },
        {
          n: '02',
          title: 'Liste de pages',
          body:
            'Priorité business × opportunité de recherche : on évite de polir une page que personne ne cherche.',
        },
        {
          n: '03',
          title: 'Rédaction',
          body:
            'Brouillon structuré, sources quand il y a des chiffres ou des références légales — rien n’est inventé pour faire joli.',
        },
        {
          n: '04',
          title: 'Relecture',
          body:
            'Vous validez les faits et le niveau de promesse ; j’ajuste le style, les transitions et les titres pour le web.',
        },
        {
          n: '05',
          title: 'Publication',
          body:
            'Titres, liens internes vers des pages utiles, textes alternatifs d’images qui décrivent vraiment — pas “image1”.',
        },
      ],
    },
    stack: {
      kicker: 'Outils',
      title: 'Recherche & mesure',
      body:
        'Search Console pour voir les requêtes déjà visibles, analyse manuelle raisonnable de la concurrence, documents partagés pour itérer sans perdre les versions.',
      labels: ['Search Console', 'Docs', 'Notion', 'WordPress'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Sites avec contenu travaillé',
      intro:
        'Projets où les textes et le référencement naturel allaient de pair — pas un design posé sur des lorem ipsum.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — rédaction SEO', subtitle: 'Longueur, langues.' },
    faqItems: [
      {
        question: 'Quelle longueur idéale pour une page ?',
        answer:
          'Celle qui couvre la question sans blabla : parfois quatre cents mots avec une FAQ courte, parfois quinze cents si le sujet l’exige (comparatif, guide). Le rembourrage nuit à la conversion.',
      },
      {
        question: 'Plusieurs langues ?',
        answer:
          'Oui avec budget adapté : vraie traduction ou adaptation locale, hreflang si plusieurs pays — pas le copier-coller Google Translate sur tout le site.',
      },
      {
        question: 'Vous garantissez la première place ?',
        answer:
          'Non, et ce serait malhonnête de le promettre. Je vise trafic qualifié, clarté pour le lecteur et pages défendables sur le long terme.',
      },
      {
        question: 'Dois-je fournir des sources ?',
        answer:
          'Oui dès que possible : PDF, témoignages chiffrés, photos de réalisations — ça renforce la crédibilité et évite les textes “creux”.',
      },
      {
        question: 'Budget indicatif ?',
        answer:
          'À partir d’environ 120 € par page simple une fois le plan validé ; forfaits possibles sur des lots de pages sœurs.',
      },
    ],
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
        'Un lien entrant, c’est une recommandation : si elle est artificielle ou achetée au kilo sur des sites sans rapport, vous prenez un risque — pénalité, désaveu, réputation abîmée. Je vous aide plutôt à cartographier qui parle déjà de vous, à construire des contenus ou des outils que des médias ou partenaires ont envie de citer, et à prospecter avec mesure. Exemple : fabricant industriel cité par des blogs pros qui testent vraiment le matériel.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/netlinking`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une stratégie défendable',
      subtitle:
        'Moins d’exposition aux pratiques douteuses, plus de liens qui racontent quelque chose de vrai sur votre activité.',
      items: [
        {
          title: 'Cartographie des mentions',
          body:
            'Qui cite déjà votre marque, où sont les opportunités évidentes, quels sites toxiques traînent peut-être dans l’historique — pour ne pas naviguer à l’aveugle.',
        },
        {
          title: 'Angles éditoriaux “linkables”',
          body:
            'Études chiffrées, petits outils gratuits utiles, interviews de terrain : ce qui donne une raison honnête à un site tiers de vous linker.',
        },
        {
          title: 'Prospection raisonnée',
          body:
            'Quelques messages personnalisés vers des sites pertinents valent mieux que cinq cents e-mails génériques qui finissent en spam.',
        },
        {
          title: 'Suivi simple',
          body:
            'Tableau clair : nouveaux liens, ancres, pages cibles — assez pour décider la suite sans devenir esclave des métriques de notoriété.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Les liens achetés au kilo : court terme séduisant, long terme dangereux' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle:
        'Des profils qui gagnent à jouer la carte “preuve + relations” plutôt que la quantité brute.',
      cards: [
        {
          title: 'Marque B2B',
          body:
            'Articles invités sur des médias métier sérieux, fiches partenaires avec des cas clients vérifiables — pas des annuaires payants sans trafic.',
        },
        {
          title: 'Commerce local ou territorial',
          body:
            'Chambre de métiers, blogs locaux, sponsoring d’événements avec retour presse : des liens qui collent à votre zone.',
        },
        {
          title: 'E-commerce de niche',
          body:
            'Tests produit par des créateurs ou des médias spécialisés, avec un lien parce que le contenu est utile — pas parce qu’un chèque a été signé sous la table.',
        },
        {
          title: 'Association ou ESS',
          body:
            'Réseau de membres, presse locale, partenariats avec autres structures : la notoriété suit souvent les vraies collaborations.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Achat de liens, relations presse digitale, ou rien ?',
      subtitle:
        'Ne rien faire peut suffire si vous êtes déjà très cité naturellement ; sinon il faut un plan réaliste — pas une courbe de liens artificielle.',
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
        {
          n: '01',
          title: 'Audit des liens',
          body:
            'Profil actuel, volumes, ancres, sites manifestement toxiques — pour savoir si on construit ou si on répare d’abord.',
        },
        {
          n: '02',
          title: 'Objectifs',
          body:
            'Pages à renforcer, secteur, niveau de concurrence : on évite de viser des requêtes irréalistes sans budget ni temps.',
        },
        {
          n: '03',
          title: 'Plan éditorial ou “assets”',
          body:
            'Contenus ou outils que des tiers auront une raison honnête de citer — sans promettre dix interviews par semaine si vous n’avez personne pour les assumer.',
        },
        {
          n: '04',
          title: 'Prospection mesurée',
          body:
            'Messages courts, personnalisés, avec une proposition claire pour le site cible — pas une déferlante de mails copiés-collés.',
        },
        {
          n: '05',
          title: 'Reporting',
          body:
            'Liens gagnés, refus, mentions à surveiller ; désaveu seulement en dernier recours si l’historique impose un vrai nettoyage.',
        },
      ],
    },
    stack: {
      kicker: 'Outils',
      title: 'Analyse',
      body:
        'Search Console, et si vous avez déjà un abonnement Majestic / Ahrefs / autre on s’en sert — sinon on reste sur des sources publiques et du bon sens, sans dépendre d’un outil payant.',
      labels: ['Search Console', 'Excel', 'Docs'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Visibilité & autorité',
      intro:
        'Projets où la notoriété a été travaillée avec de la patience — partenariats, contenus, technique — plutôt qu’avec des raccourcis.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — netlinking', subtitle: 'Budget, délais.' },
    faqItems: [
      {
        question: 'Combien de liens par mois viser ?',
        answer:
          'Je préfère quelques liens solides et contextuels plutôt qu’une courbe artificielle qui finit en alerte Search Console. La cadence dépend surtout de votre capacité à produire des contenus ou des preuves.',
      },
      {
        question: 'Vous rédigez des articles invités à ma place ?',
        answer:
          'Je peux rédiger des angles techniques ou coordonner avec un rédacteur métier ; vous validez toujours le fond et le niveau de promesse.',
      },
      {
        question: 'Faut-il désavouer des liens toxiques ?',
        answer:
          'Seulement si l’audit montre un historique vraiment douteux : le fichier disavow est un dernier recours, pas un réflexe systématique.',
      },
      {
        question: 'Budget indicatif ?',
        answer:
          'Un accompagnement stratégique sérieux démarre souvent vers 900 € par mois sur au moins trois mois — le temps de produire des contenus dignes d’être cités et de prospecter correctement.',
      },
      {
        question: 'Peut-on garantir un nombre de liens ?',
        answer:
          'Non : les liens dépendent de tiers ; on maximise la probabilité avec du contenu et des partenariats sérieux, pas avec des engagements chiffrés artificiels.',
      },
    ],
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
        'De plus en plus de gens demandent “un bon plombier près de chez moi ?” ou “un logiciel pour gérer mes devis ?” à un assistant plutôt qu’à Google directement. Le GEO (generative engine optimization), c’est rendre votre site et votre marque faciles à résumer honnêtement : qui vous êtes, où vous intervenez, pourquoi vous êtes crédible, quelles preuves on peut vérifier. Exemple : cabinet avec page équipe, diplômes, langues parlées, zone d’intervention — du contenu utile pour un humain et pour un modèle.',
      primaryCta: CTA_DEVIS_SITE,
      secondaryCta: CTA_PORTFOLIO(`${SILO}/geo-generative-engine-optimization`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une marche à suivre réaliste',
      subtitle:
        'Pas de “hack ChatGPT” ni de promesse d’apparaître à tout prix : du sens, de la clarté, des faits — ce qui aide aussi le SEO classique.',
      items: [
        {
          title: 'Page “À propos” qui dit vraiment quelque chose',
          body:
            'Qui fait quoi, depuis quand, dans quelle zone : ce que les modèles repèrent souvent quand ils synthétisent une marque — et ce que vos clients humains cherchent aussi.',
        },
        {
          title: 'FAQ structurée avec de vraies questions',
          body:
            'Réponses courtes, factuelles, sans langue de bois : idéal pour les assistants et pour les gens qui scannent vite une page.',
        },
        {
          title: 'Faits vérifiables',
          body:
            'Chiffres, dates, sources : moins de risque d’“hallucination” quand un outil vous cite — et plus de confiance côté humain.',
        },
        {
          title: 'Cohérence sur tout le web visible',
          body:
            'Même nom, même adresse, même description courte sur le site, les annuaires et les réseaux : moins de contradictions pour les modèles et pour Google.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Le GEO prolonge le bon référencement, il ne le remplace pas' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle:
        'Des situations où clarifier son message aide à la fois les IA et les clients pressés.',
      cards: [
        {
          title: 'Marque grand public',
          body:
            'Comparaisons honnêtes “vous / concurrent” sur le site, garanties lisibles, politique de retour claire — ce qui rassure quand on cherche vite.',
        },
        {
          title: 'Éditeur SaaS',
          body:
            'Pages intégrations, sécurité, RGPD, tarification : des blocs lisibles par un CTO pressé et par un assistant qui résume votre offre.',
        },
        {
          title: 'Profession réglementée',
          body:
            'Mentions légales, titres d’exercice, limites de ce que vous promettez : du cadre qui protège et qui évite les réponses IA hors sujet.',
        },
        {
          title: 'Association ou ONG',
          body:
            'Mission, zone d’action, impact chiffré, actualités : de la matière à citer pour la presse, les donateurs et les modèles.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'SEO Google, GEO, ou les deux ?',
      subtitle:
        'Les deux s’appuient souvent sur les mêmes fondations : pages claires, faits, structure honnête — le canal change, le fond reste.',
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
        {
          n: '01',
          title: 'Audit express',
          body:
            'Pages clés, “entité” marque (nom, adresse, offre), FAQ existante ou manquante — assez pour voir où un assistant pourrait dire n’importe quoi sur vous par manque d’infos.',
        },
        {
          n: '02',
          title: 'Plan de contenu',
          body:
            'Trous évidents : preuves, chiffres, zone, équipe, cas clients anonymisés si besoin.',
        },
        {
          n: '03',
          title: 'Rédaction ou développement',
          body:
            'Blocs structurés sur le site, données structurées quand elles servent le visiteur — pas de markup décoratif.',
        },
        {
          n: '04',
          title: 'Contrôle',
          body:
            'Relecture humaine, cohérence avec vos obligations légales et déontologiques, test sur quelques questions types qu’on pose à un assistant.',
        },
        {
          n: '05',
          title: 'Suivi',
          body:
            'Ajustements après retours du terrain (commercial, support) : souvent eux entendent les objections en premier.',
        },
      ],
    },
    stack: {
      kicker: 'Technique',
      title: 'Côté site',
      body:
        'Balisage FAQPage quand la FAQ est réelle, titres clairs, performance : le socle reste du bon web — le GEO n’est pas une couche magique au-dessus d’un site cassé.',
      labels: ['JSON-LD', 'FAQ', 'Search Console', 'Performance'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Sites orientés confiance',
      intro:
        'Projets où les pages “preuve” (équipe, méthode, résultats) et la structure tiennent la route — pour Google comme pour un lecteur pressé.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — GEO', subtitle: 'Promesses, mesure.' },
    faqItems: [
      {
        question: 'Peut-on mesurer le GEO comme le SEO ?',
        answer:
          'Partiellement : trafic de marque, mentions, enquêtes internes auprès des clients ; il n’existe pas de métrique unique officielle “score GEO” fiable à isoler.',
      },
      {
        question: 'Est-ce que le GEO remplace le SEO sur Google ?',
        answer:
          'Non : Google reste une porte d’entrée massive pour la plupart des sites. Le GEO ajoute une lentille sur les assistants — utile, mais pas exclusive.',
      },
      {
        question: 'Peut-on garantir d’apparaître dans ChatGPT ?',
        answer:
          'Non, et ce serait peu honnête : les modèles et leurs sources changent souvent. On travaille la clarté et la crédibilité, pas la magie.',
      },
      {
        question: 'Je suis un particulier avec un petit site pro : ça vaut le coup ?',
        answer:
          'Oui si vous avez une activité réelle : les mêmes besoins de clarté (qui, où, combien, délais) aident tout le monde — y compris vous quand vous relisez votre propre page.',
      },
      {
        question: 'Budget indicatif ?',
        answer:
          'Atelier + mise en œuvre sur les pages clés : souvent à partir de 1 000 € selon le nombre de modèles de page et de langues.',
      },
    ],
    finalCta: { title: 'On vous cherche mais les IA ne savent pas qui vous êtes ?', primaryHref: '/devis?projectType=site', primaryLabel: 'Devis GEO', secondaryHref: '/contact', secondaryLabel: 'Poser une question' },
  },
};
