import type { ExpertisePremiumDoc } from '@/lib/constants/expertise-premium/types';

const compare3 = (
  title: string,
  subtitle: string,
  rows: { label: string; c: readonly [boolean, boolean, boolean] }[],
): ExpertisePremiumDoc['compare'] => ({
  kicker: 'Décision',
  title,
  subtitle,
  columns: ['Pile plugins / thème', 'Cadrage moyen', 'Projet structuré avec Clickdev'] as const,
  rows,
});

export const EXPERTISE_PREMIUM_WEB: Record<'nextjs' | 'wordpress' | 'shopify' | 'woocommerce', ExpertisePremiumDoc> = {
  wordpress: {
    slug: 'wordpress',
    metaTitle: 'Développeur WordPress freelance — thèmes, performance, sécurité | Clickdev',
    metaDescription:
      'Développeur WordPress freelance : thèmes sur mesure ou thème enfant propre, peu de plugins, perf, sécurité, migrations et maintenance. France, remote.',
    keywords: [
      'développeur WordPress freelance',
      'WordPress sur mesure',
      'thème WordPress',
      'performance WordPress',
      'maintenance WordPress',
    ] as const,
    hero: {
      chapter: 'Expertises · WordPress',
      subline: 'David Rieu — développeur freelance',
      h1: 'Développeur WordPress freelance',
      lead:
        'WordPress reste un excellent moteur éditorial lorsqu’on évite la dérive « dix plugins et un thème marketplace ». Je conçois ou refonds des sites WordPress rapides, sécurisés et faciles à faire vivre : thème sur mesure ou enfant, intégrations maîtrisées, environnements de préproduction, et règles claires pour les mises à jour.',
      primaryCta: { href: '/devis', label: 'Parler de votre site WordPress' },
      secondaryCta: { href: '/sites-internet/site-wordpress', label: 'Offre site WordPress' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Un WordPress discipliné, pas une usine à plugins',
      subtitle:
        'Moins de dépendances inutiles, plus de contrôle sur le front, les formulaires et le SEO technique de base.',
      items: [
        {
          title: 'Thème propre et évolutif',
          body: 'Thème enfant ou sur mesure, templates lisibles, champs ACF ou blocs utilisables par vos équipes sans casser la mise en page.',
        },
        {
          title: 'Performance mesurable',
          body: 'Cache adapté, images et polices optimisées, requêtes limitées : objectif LCP et TTFB dans une fourchette annoncée dès le cahier des charges.',
        },
        {
          title: 'Sécurité et mises à jour',
          body: 'Staging, sauvegardes, comptes techniques distincts, journalisation des mises à jour sensibles — pour limiter les mauvaises surprises.',
        },
        {
          title: 'SEO technique de base solide',
          body: 'Titres uniques, balises meta pertinentes, données structurées quand c’est utile, maillage interne lisible pour Google et pour vos visiteurs.',
        },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'Quand WordPress est le bon choix — et quand il faut autre chose',
      paragraphs: [
        'WordPress brille quand vous publiez souvent (actualités, fiches produit, guides) et que vous voulez garder la main sur le contenu sans repasser par un développeur à chaque paragraphe. Il reste pertinent pour beaucoup de vitrines, cabinets, associations et PME qui ont besoin d’un back-office familier.',
        'Là où ça coince, c’est l’empilement de builders lourds, de plugins redondants et de thèmes « tout-en-un » qui chargent la moitié d’Internet sur chaque page. Mon rôle est de trancher : ce qui reste dans le core WordPress, ce qui part en petite extension maison, ce qui doit plutôt vivre dans un service à côté (paiement, recherche avancée, configurateur).',
        'Pour l’e-commerce, WooCommerce peut suffire jusqu’à un certain volume de catalogue et de règles métier. Au-delà, Shopify ou une application sur mesure mérite une étude rapide : je vous dis franchement si WordPress reste pertinent pour vos trois prochaines années.',
        'Si vous êtes déjà sur WordPress et que le site rame ou tombe souvent en panne, on commence par un diagnostic (plugins, thème, hébergement, requêtes SQL) puis un plan de remédiation priorisé par impact. Pas de refonte cosmétique pour masquer une dette technique.',
        'Enfin, WordPress s’intègre bien dans un écosystème plus large : headless avec Next.js en front, webhooks vers votre CRM, formulaires reliés à votre outil métier. La page /sites-internet décrit comment je positionne ces briques dans vos projets web.',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Pour qui j’interviens sur WordPress',
      subtitle: 'Du site vitrine à la plateforme éditoriale, avec la même exigence de clarté.',
      cards: [
        {
          title: 'Dirigeants et marketing',
          body: 'Vous voulez un site pro sans sacrifier la vitesse ni la sécurité : brief orienté conversion, rôles éditoriaux, formation courte à la publication.',
        },
        {
          title: 'Associations et fédérations',
          body: 'Actualités, adhésions, dons : parcours simples, accessibilité raisonnable, hébergement adapté aux pics de campagne.',
        },
        {
          title: 'Artisans et commerces',
          body: 'Prestations, zone d’intervention, devis : WordPress bien cadré pour être trouvé localement sans empiler les extensions SEO miracles.',
        },
        {
          title: 'Équipes techniques',
          body: 'Vous reprenez un legacy WP : documentation des hooks critiques, réduction des plugins, CI de base sur les déploiements.',
        },
      ],
    },
    compare: compare3(
      'WordPress : trois niveaux de maturité',
      'La différence se voit surtout après six mois : dette, perf, incidents.',
      [
        { label: 'Temps de chargement maîtrisé (objectifs chiffrés)', c: [false, true, true] },
        { label: 'Plugins limités et justifiés', c: [false, false, true] },
        { label: 'Environnement de préproduction', c: [false, true, true] },
        { label: 'Plan de mises à jour et sauvegardes', c: [false, true, true] },
        { label: 'Documentation pour la suite', c: [false, false, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Comment se déroule une mission WordPress avec moi',
      steps: [
        {
          n: '01',
          title: 'Audit rapide ou cadrage neuf',
          body: 'Contexte, objectifs, trafic, hébergement, liste des plugins et du thème. On fixe les indicateurs (perf, formulaires, SEO de base).',
        },
        {
          n: '02',
          title: 'Architecture & gabarits',
          body: 'Arborescence, types de contenu, maquettes ou wireframes. Décision thème enfant vs sur mesure, champs et droits éditeurs.',
        },
        {
          n: '03',
          title: 'Développement & contenus pilotes',
          body: 'Intégration, formulaires, intégrations tierces, jeux de recette sur mobile et navigateurs courants.',
        },
        {
          n: '04',
          title: 'Mise en ligne & garde-fous',
          body: 'Bascule DNS, certificats, redirections, monitoring d’erreurs PHP et logs. Période de garantie corrective selon devis.',
        },
        {
          n: '05',
          title: 'Transmission & évolutions',
          body: 'Guide éditeur, session de prise en main, puis contrat de maintenance ou interventions ponctuelles.',
        },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Écosystème WordPress que j’emploie au quotidien',
      body:
        'PHP 8.x, Composer quand le projet le permet, thème enfant ou Sage/roots selon contexte, ACF ou blocs natifs, WP-CLI pour l’exploitation, parfois Bedrock pour séparer les environnements. Hébergement adapté (pas du mutualisé sous-dimensionné pour un e-commerce chargé).',
      labels: ['PHP', 'WordPress', 'ACF', 'WP-CLI', 'MariaDB', 'Redis', 'Nginx', 'Cloudflare'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Réalisations web récentes',
      intro:
        'Plusieurs projets publics combinent WordPress, Next.js ou outils métiers selon le besoin — voyez le détail sur chaque étude de cas.',
    },
    faq: {
      kicker: 'FAQ',
      title: 'Questions fréquentes — WordPress',
      subtitle: 'Prix, périmètre, WooCommerce, refonte.',
      items: [
        {
          question: 'Combien coûte une refonte WordPress sérieuse ?',
          answer:
            'Ça dépend du nombre de gabarits, des langues, des intégrations et de l’état actuel du site. Après un court échange et un accès staging, je propose une fourchette et un phasage : quick wins puis refonte ciblée ou rebuild complet si nécessaire.',
        },
        {
          question: 'Vous reprenez un site fait par une autre agence ?',
          answer:
            'Oui, avec un audit honnête : parfois il suffit de stabiliser et optimiser, parfois il vaut mieux repartir sur une base neuve. Dans les deux cas, vous savez pourquoi avant d’engager les travaux.',
        },
        {
          question: 'WooCommerce est-il toujours adapté ?',
          answer:
            'Jusqu’à un certain catalogue et niveau de règles métier. Au-delà, Shopify ou du sur mesure peut coûter moins cher à maintenir : je vous le dis clairement si c’est votre cas.',
        },
        {
          question: 'Puis-je garder mon hébergeur actuel ?',
          answer:
            'Oui si l’infra tient la charge et les sauvegardes. Sinon je recommande un hébergement adapté ; la propriété du domaine et des accès reste la vôtre.',
        },
      ],
    },
    finalCta: {
      title: 'Un site WordPress à stabiliser ou à moderniser ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Échanger 30 minutes',
    },
  },

  nextjs: {
    slug: 'nextjs',
    metaTitle: 'Développeur Next.js freelance — App Router, perf, SEO technique | Clickdev',
    metaDescription:
      'Développeur Next.js freelance : App Router, Server Components, API routes, performances Web Vitals, déploiement Vercel ou Node. Missions France / remote.',
    keywords: [
      'développeur Next.js freelance',
      'Next.js App Router',
      'React freelance',
      'SEO technique Next.js',
      'Vercel',
    ] as const,
    hero: {
      chapter: 'Expertises · Next.js',
      subline: 'David Rieu — développeur freelance',
      h1: 'Développeur Next.js freelance',
      lead:
        'Next.js est le socle que je recommande le plus souvent pour des sites marketing, des portails connectés et des dashboards exigeants sur le SEO et la performance. App Router, images et polices optimisées, routes API ou BFF, stratégie de données claire : je livre du code maintenable, testé sur les parcours critiques, prêt pour la prod.',
      primaryCta: { href: '/devis', label: 'Parler de votre projet Next.js' },
      secondaryCta: { href: '/sites-internet', label: 'Offres sites internet' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une application web Next.js prête pour la prod',
      subtitle: 'Perf, SEO technique, DX : les trois leviers que vos utilisateurs et Google remarquent.',
      items: [
        {
          title: 'Rendu et données cohérents',
          body: 'Server Components et streaming quand ça sert le TTFB ; client components là où l’interactivité l’exige. Pas de double emploi inutile.',
        },
        {
          title: 'Web Vitals sous contrôle',
          body: 'LCP, CLS, INP : budgets annoncés, images next/image, polices self-host, third-parties limitées.',
        },
        {
          title: 'SEO technique sérieux',
          body: 'Métadonnées dynamiques, sitemaps, robots, canonicals quand il le faut, données structurées alignées sur vos gabarits.',
        },
        {
          title: 'Base pour évoluer',
          body: 'Conventions de dossiers, erreurs typées, tests sur les flux sensibles, CI qui build à chaque merge.',
        },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'Pourquoi Next.js pour votre prochain site ou portail',
      paragraphs: [
        'Next.js permet de mélanger pages statiques, rendu serveur et interactions client dans une seule codebase TypeScript. C’est particulièrement adapté quand vous voulez un site très rapide tout en gardant des zones connectées (compte, extranet léger, configurateur).',
        'Côté SEO, le rendu serveur aide Google à indexer du contenu qui dépend de données — à condition de structurer correctement les fetch et d’éviter les waterfalls inutiles. Je mappe les pages critiques avec vous et je vérifie les signaux (titres, maillage, hreflang si multilingue).',
        'Pour l’e-commerce headless ou les catalogues riches, Next se couple souvent à Shopify, Sanity, Strapi ou une API maison. Je ne choisis pas la stack au hasard : elle dépend de qui édite le contenu, du rythme des mises en ligne et des contraintes d’hébergement.',
        'Si vous avez déjà une app Next.js « qui marche » mais une dette qui ralentit les releases, je peux intervenir en renfort : audit perf, découpage des modules, migration progressive App Router, ou préparation à une montée en charge (cache, CDN, monitoring).',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Profils qui me sollicitent sur Next.js',
      subtitle: 'Marketing, produit, équipes tech : objectifs différents, même exigence de livrables clairs.',
      cards: [
        {
          title: 'Équipes produit / marketing',
          body: 'Site vitrine ou campagne : pages rapides, formulaires fiables, intégration analytics et consentement cookies raisonnable.',
        },
        {
          title: 'Startups en traction',
          body: 'Itérer vite sans sacrifier la qualité : conventions, preview sur les contenus, déploiements fréquents.',
        },
        {
          title: 'Directions IT / lead devs',
          body: 'Renfort sur refonte App Router, perf ou architecture ; documentation et transfert vers vos équipes.',
        },
        {
          title: 'E-commerce & contenus',
          body: 'Headless ou hybride : catalogues, SEO programme, prévisualisation pour les équipes éditoriales.',
        },
      ],
    },
    compare: compare3(
      'Next.js : trois niveaux d’industrialisation',
      'Le coût total se joue surtout sur la dette et le time-to-market après la V1.',
      [
        { label: 'Perf Web Vitals suivies en continu', c: [false, true, true] },
        { label: 'Stratégie RSC / client components documentée', c: [false, false, true] },
        { label: 'CI & preview deployments', c: [false, true, true] },
        { label: 'Observabilité (erreurs, logs) utile', c: [false, true, true] },
        { label: 'Roadmap technique post-lancement', c: [false, false, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Déroulé type d’une mission Next.js',
      steps: [
        {
          n: '01',
          title: 'Cadrage & risques',
          body: 'Objectifs, pages critiques, auth, données personnelles, volumétrie. Choix hébergement (Vercel, Node, edge).',
        },
        { n: '02', title: 'Architecture & design system', body: 'Routing, layouts, composants partagés, stratégie de fetch et de cache.' },
        { n: '03', title: 'Implémentation itérative', body: 'Livrables démontrables, tests sur parcours clés, revues de perf régulières.' },
        { n: '04', title: 'SEO & conformité', body: 'Métas, sitemap, redirections, RGPD côté tracking, accessibilité sur les flows importants.' },
        { n: '05', title: 'Mise en prod & run', body: 'Monitoring, playbooks incident, transfert ou TMA selon votre besoin.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Stack autour de Next.js',
      body: 'TypeScript, React Server Components, Tailwind ou CSS Modules, Zod pour la validation, TanStack Query côté client si besoin, tests Playwright ciblés, Turborepo quand le monorepo apporte de la valeur.',
      labels: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Zod', 'Playwright', 'Turborepo', 'Vercel'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Projets web et produits',
      intro: 'Études de cas détaillées (contexte, stack, résultats) sur la page Réalisations.',
    },
    faq: {
      kicker: 'FAQ',
      title: 'Questions fréquentes — Next.js',
      subtitle: 'App Router, hébergement, refonte depuis Create React App.',
      items: [
        {
          question: 'Faut-il absolument passer sur App Router ?',
          answer:
            'Souvent oui pour les nouveaux projets. Pour un existant Pages Router stable, on planifie une migration par étapes si le gain (perf, DX) dépasse le coût.',
        },
        {
          question: 'Vercel est-il obligatoire ?',
          answer:
            'Non : Node derrière Nginx, Docker, ou autre PaaS fonctionne. Le choix dépend de vos contraintes d’entreprise, du budget egress et de l’équipe exploit.',
        },
        {
          question: 'Peut-on coupler Next et WordPress ?',
          answer:
            'Oui : WordPress en source de vérité éditoriale, Next en front headless, avec webhooks ou fetch ISR/SSR selon le rythme de publication.',
        },
      ],
    },
    finalCta: {
      title: 'Un projet Next.js à lancer ou à fiabiliser ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Réserver un appel',
    },
  },

  shopify: {
    slug: 'shopify',
    metaTitle: 'Développeur Shopify freelance — thèmes Liquid, apps, intégrations | Clickdev',
    metaDescription:
      'Développeur Shopify freelance : thèmes Liquid, sections, apps privées, checkout, intégrations ERP/logistique. Perf et conformité. Remote France.',
    keywords: ['développeur Shopify freelance', 'Liquid Shopify', 'app Shopify privée', 'Shopify Plus'] as const,
    hero: {
      chapter: 'Expertises · Shopify',
      subline: 'David Rieu — développeur freelance',
      h1: 'Développeur Shopify freelance',
      lead:
        'Shopify accélère le time-to-market pour une boutique standard à catalogue maîtrisé. J’interviens sur les thèmes Liquid (sections, snippets, performance mobile), les applications privées en Node, et les intégrations (ERP, transport, paiement) en respectant les limites de la plateforme et de votre plan.',
      primaryCta: { href: '/devis', label: 'Parler de votre boutique' },
      secondaryCta: { href: '/sites-internet/site-ecommerce', label: 'Offre e-commerce' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une boutique Shopify propre et évolutive',
      subtitle: 'Thème maintenable, apps utiles, données produit cohérentes.',
      items: [
        {
          title: 'Thème orienté conversion',
          body: 'Mobile first, accessibilité raisonnable, sections réutilisables pour vos campagnes sans dupliquer la logique.',
        },
        {
          title: 'Apps privées quand le natif ne suffit pas',
          body: 'Workflows métiers, connecteurs, back-office léger : développement cadré et documenté.',
        },
        {
          title: 'Intégrations réalistes',
          body: 'ERP, WMS, transporteurs : on évite les promesses hors périmètre Shopify ; alternatives documentées si besoin.',
        },
        {
          title: 'Perf & Core Web Vitals',
          body: 'Third-parties, images, fonts : ce qui coûte cher sur mobile est traité en priorité.',
        },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'Shopify : tirer parti de la plateforme sans se heurter à ses limites',
      paragraphs: [
        'Shopify impose des garde-fous utiles (checkout, taxes, sécurité) mais aussi des plafonds sur certains métiers (catalogues très complexes, règles tarifaires atypiques). Mon travail consiste à utiliser ce que Shopify fait déjà très bien — et à ne pas forcer ce qu’il fera toujours mal.',
        'Sur le thème, je privilégie Liquid clair, peu de JavaScript global, et des patterns de sections documentés pour vos équipes merchandising. Les apps du store sont auditées : chaque extension ajoute du risque (perf, sécurité, conflits de mise à jour).',
        'Shopify Plus ouvre des portes (scripts checkout, B2B) : le périmètre dépend de votre contrat et des apps validées. Je vous aide à chiffrer ce qui est réaliste avant de signer une roadmap.',
        'Quand le besoin dépasse Shopify, je l’indique : migration partielle, connecteur vers un moteur sur mesure, ou autre stack e-commerce. L’objectif est que vous investissiez au bon endroit.',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Qui me sollicite sur Shopify',
      subtitle: 'D2C, marques en croissance, équipes e-commerce.',
      cards: [
        { title: 'Marques D2C', body: 'Lancement boutique, refonte thème, apps pour fidélisation ou logistique.' },
        { title: 'Équipes e-commerce', body: 'Optimisation tunnel, pages LP, tracking campagnes, conformité cookies raisonnable.' },
        { title: 'Fonctions IT', body: 'Apps privées, CI, environnements, revue de dette apps installées.' },
        { title: 'Retail multi-canal', body: 'POS + online : données clients et stocks à synchroniser proprement.' },
      ],
    },
    compare: compare3(
      'Shopify : pragmatisme sur le périmètre',
      'Comparer ce que la plateforme assume vraiment.',
      [
        { label: 'Checkout natif respecté', c: [false, true, true] },
        { label: 'Apps limitées et justifiées', c: [false, false, true] },
        { label: 'Plan de montée Shopify Plus si pertinent', c: [false, true, true] },
        { label: 'Documentation des intégrations', c: [false, false, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Mission Shopify type',
      steps: [
        { n: '01', title: 'Audit boutique', body: 'Thème, apps, données, perf mobile, erreurs console, tunnel.' },
        { n: '02', title: 'Roadmap', body: 'Quick wins vs chantiers structurants ; estimation honnête.' },
        { n: '03', title: 'Développement', body: 'Thème, app privée, webhooks, jeux de recette.' },
        { n: '04', title: 'Recette & bascule', body: 'Staging, migration données si besoin, redirections.' },
        { n: '05', title: 'Suivi', body: 'Pic saisonnier, évolutions catalogue, monitoring.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Technos autour de Shopify',
      body: 'Liquid, JavaScript/TypeScript pour apps, Node pour les backends privés, Shopify CLI, tests sur checkout et webhooks idempotents.',
      labels: ['Liquid', 'Shopify', 'Node.js', 'TypeScript', 'GraphQL', 'Redis', 'Polaris'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Réalisations e-commerce & web',
      intro: 'Voir les études de cas pour du contexte réel (stack, résultats).',
    },
    faq: {
      kicker: 'FAQ',
      title: 'Questions fréquentes — Shopify',
      subtitle: 'Apps, checkout, migration.',
      items: [
        {
          question: 'Peut-on tout faire avec une app du store ?',
          answer:
            'Pas toujours : certaines apps masquent une dette (requêtes lourdes, données dupliquées). Je préfère une app maison quand le métier est spécifique.',
        },
        {
          question: 'Shopify Plus est-il nécessaire ?',
          answer:
            'Si vous avez besoin de scripts checkout avancés, B2B complexe ou automatisation poussée, souvent oui. Sinon, on optimise sur le plan actuel.',
        },
        {
          question: 'Comment gérer le multilingue ?',
          answer:
            'Apps marché ou structure Markets native selon votre plan ; je cadrage les URLs, hreflang et duplication de contenu pour éviter les pénalités SEO.',
        },
        {
          question: 'Qui tient la boutique après livraison ?',
          answer:
            'Formation merchandiser, runbook incidents, puis maintenance ponctuelle ou TMA : défini au devis pour éviter le flou.',
        },
      ],
    },
    finalCta: {
      title: 'Une boutique Shopify à optimiser ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Me contacter',
    },
  },

  woocommerce: {
    slug: 'woocommerce',
    metaTitle: 'Développeur WooCommerce freelance — catalogue, tunnel, perf | Clickdev',
    metaDescription:
      'Développeur WooCommerce freelance : tunnel d’achat, moyens de paiement, perf, sécurité, SEO e-commerce. WordPress technique maîtrisé.',
    keywords: ['WooCommerce freelance', 'tunnel WooCommerce', 'perf WooCommerce', 'WordPress e-commerce'] as const,
    hero: {
      chapter: 'Expertises · WooCommerce',
      subline: 'David Rieu — développeur freelance',
      h1: 'Développeur WooCommerce freelance',
      lead:
        'WooCommerce offre un contrôle fin sur le catalogue, les promotions et le tunnel — à condition de maîtriser l’hébergement, les plugins et les mises à jour. Je sécurise le checkout, les gabarits produit, les intégrations paiement / transport, et je réduis les sources de lenteur (requêtes, cache, images).',
      primaryCta: { href: '/devis', label: 'Parler de votre WooCommerce' },
      secondaryCta: { href: '/sites-internet/site-ecommerce', label: 'Offre e-commerce' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une boutique WooCommerce fiable',
      subtitle: 'Commandes, stocks, perf : le triangle sensible du e-commerce WordPress.',
      items: [
        { title: 'Tunnel d’achat clarifié', body: 'Étapes, frais, livraison, erreurs paiement : parcours testés sur mobile.' },
        { title: 'Plugins limités', body: 'Chaque extension est justifiée ; alternatives code quand c’est plus stable.' },
        { title: 'Hébergement dimensionné', body: 'PHP-FPM, cache objet, CDN : ce qui tient la charge aux pics.' },
        { title: 'SEO e-commerce de base', body: 'Fiches produit, données structurées produit, maillage catégories / guides.' },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'WooCommerce : liberté et responsabilité',
      paragraphs: [
        'WooCommerce reste pertinent pour des catalogues moyens, des règles promos riches et une équipe qui veut garder WordPress comme socle. Le piège classique est l’empilement de plugins e-commerce qui se marchent dessus.',
        'Je documente les hooks critiques (calcul panier, frais de port, taxes) pour éviter les régressions à chaque mise à jour. Les sauvegardes et un staging qui reflète la prod sont non négociables.',
        'Quand le volume de commandes, de variations ou de règles fiscales explose, il faut comparer honnêtement avec Shopify ou du sur mesure. Je vous aide à chiffrer ce point de bascule.',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Profils WooCommerce',
      subtitle: 'PME e-commerce, marques niche, agences en renfort.',
      cards: [
        { title: 'E-commerçants', body: 'Tunnel, promos, comptabilité : stabiliser avant la grosse saison.' },
        { title: 'Agences', body: 'Renfort senior sur un client Woo existant, revue perf ou refonte partielle.' },
        { title: 'Retail', body: 'Click & collect, points relais, règles de livraison complexes mais cadrées.' },
        { title: 'Marketplaces naissantes', body: 'Tant que le périmètre reste compatible avec WP ; sinon pivot stack.' },
      ],
    },
    compare: compare3(
      'WooCommerce : maîtrise vs empilement',
      'La boutique tient quand l’infra et le code suivent.',
      [
        { label: 'Staging + sauvegardes testées', c: [false, true, true] },
        { label: 'Plugins audités', c: [false, false, true] },
        { label: 'Monitoring erreurs commande', c: [false, true, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Accompagnement WooCommerce',
      steps: [
        { n: '01', title: 'Diagnostic', body: 'Plugins, thème, perf, erreurs logs, hébergement.' },
        { n: '02', title: 'Plan d’action', body: 'Sécurisation, perf, tunnel ; chiffrage par lot.' },
        { n: '03', title: 'Implémentation', body: 'Checkout, paiements, emails transactionnels, intégrations.' },
        { n: '04', title: 'Recette', body: 'Scénarios commande, remboursement, codes promo, mobile.' },
        { n: '05', title: 'Run', body: 'Mises à jour, veille sécurité, évolutions catalogue.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Stack WooCommerce',
      body: 'PHP 8.x, WooCommerce core hooks, Stripe ou autres PSP, Redis/Memcached si pertinent, monitoring.',
      labels: ['WordPress', 'WooCommerce', 'PHP', 'Stripe', 'MariaDB', 'Redis', 'Nginx'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Cas e-commerce & web',
      intro: 'Réalisations détaillées sur la page Réalisations.',
    },
    faq: {
      kicker: 'FAQ',
      title: 'Questions fréquentes — WooCommerce',
      subtitle: 'Perf, migration, plugins.',
      items: [
        {
          question: 'Mon WooCommerce est lent : par où commencer ?',
          answer:
            'Mesure (LCP, TTFB, requêtes SQL lourdes), liste des plugins, cache objet, images. On traite d’abord ce qui coûte le plus cher aux visiteurs.',
        },
        {
          question: 'Puis-je migrer depuis PrestaShop / Magento ?',
          answer:
            'Oui avec un plan de données (produits, clients, commandes) et des redirections ; la complexité dépend du historique.',
        },
        {
          question: 'Faut-il passer sur un thème builder ?',
          answer:
            'Rarement indispensable : souvent un thème léger + blocs maison coûte moins cher à maintenir qu’un builder lourd.',
        },
        {
          question: 'Comment sécuriser les paiements ?',
          answer:
            'PSP à jour, pas de clés en dur, webhooks signés, journaux des échecs : checklist appliquée avant mise en prod.',
        },
      ],
    },
    finalCta: {
      title: 'WooCommerce à fiabiliser ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Échanger',
    },
  },
};
