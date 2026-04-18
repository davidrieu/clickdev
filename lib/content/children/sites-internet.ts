import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

export const sitesInternetChildBySlug: Record<string, SiloChildPageContent> = {
  "site-vitrine": {
    metaDescription:
      "Site vitrine performant : positionnement, SEO technique, Next.js ou WordPress, design system et conversion. Cadrage, contenus, mise en ligne et maintenance.",
    eyebrow: "Sites internet",
    h1: "Site vitrine : crédibilité, SEO et conversion sans sur-dimensionner.",
    lead:
      "Une vitrine doit répondre vite à trois questions : qui vous êtes, pour qui vous travaillez, et comment passer à l’action (contact, démo, prise de rendez-vous). Je conçois des sites vitrines rapides (Core Web Vitals), structurés pour le SEO (données structurées, maillage interne vers vos offres détaillées), et faciles à faire vivre par vos équipes marketing — sans vous imposer une usine à gaz e-commerce si votre modèle ne le nécessite pas.",
    tldr: [
      "Choix de stack selon votre gouvernance contenu : Next.js pour une expérience sur-mesure, WordPress lorsque l’éditorial et les landing récurrentes priment.",
      "SEO technique dès les templates : titres, hiérarchie Hn, maillage vers silos Sites / SEO / Réalisations.",
      "Parcours de conversion court : preuves, références, FAQ ciblée, CTA clairs — mesurables via analytics.",
      "Après lancement : maintenance optionnelle et évolutions (nouvelles pages métier, internationalisation).",
    ],
    sections: [
      {
        heading: "Problème → objectif",
        paragraphs: [
          "Beaucoup de vitrines échouent parce qu’elles veulent « tout dire » sans hiérarchie : le visiteur part avant d’avoir compris votre valeur. Je commence par l’intention de recherche et le parcours commercial : quelles pages doivent ranker, lesquelles doivent convertir, et comment le blog ou les études de cas nourrissent l’autorité.",
          "Si vous avez plusieurs offres, la vitrine devient un hub : chaque offre pointe vers une page fille ou un silo (e-commerce, IA, SEO) plutôt que de tout empiler sur la home.",
        ],
      },
      {
        heading: "Contenu, design system et performance",
        paragraphs: [
          "Un design system léger (composants, typographie, couleurs, états d’erreur) évite que chaque nouvelle section dégrade la cohérence et la vitesse. Les contenus sont modélisés pour être réutilisables (témoignages, logos, chiffres clés) sans dupliquer du HTML fragile.",
          "La performance n’est pas un « bonus » : elle impacte SEO, coûts publicitaires et taux de rebond mobile. J’intègre images responsives, stratégie de chargement JS et métriques de suivi dès le staging.",
        ],
      },
      {
        heading: "Stack et intégrations",
        paragraphs: [
          "Next.js convient lorsque vous voulez une expérience front très contrôlée et des intégrations API (CRM, calendrier, outil de devis). WordPress reste pertinent pour une équipe rédaction autonome et des landings fréquentes — avec une discipline plugins/thème pour ne pas retomber dans la lenteur.",
          "Les intégrations courantes (Calendly/Cal, forms, newsletter) sont branchées avec consentement RGPD et messages d’erreur honnêtes lorsque les API tiers tombent.",
        ],
      },
      {
        heading: "Mesure, itération et maintenance",
        paragraphs: [
          "On définit 3–5 événements analytics alignés sur le funnel réel (scroll vers contact, clic téléphone, envoi form). Les itérations post-lancement sont planifiées : nouvelles pages SEO, A/B tests de hero, ajout de FAQ structurée pour le GEO.",
          "La maintenance sécurise mises à jour et petites évolutions ; elle est décrite dans le silo Maintenance pour éviter les zones grises.",
        ],
      },
    ],
    faq: [
      {
        question: "Une vitrine suffit-elle si j’ai plusieurs produits SaaS ?",
        answer:
          "Souvent non : il faut au minimum des pages produit distinctes avec intention claire. La vitrine devient alors un hub orienté comptes/segments, relié à des pages plus profondes.",
      },
      {
        question: "WordPress est-il « mauvais pour le SEO » ?",
        answer:
          "Non par défaut : c’est la combinaison thème lourd + plugins inutiles + hébergement sous-dimensionné qui pose problème. Un WP bien architecturé peut très bien performer.",
      },
      {
        question: "Combien de temps pour livrer une vitrine sérieuse ?",
        answer:
          "Selon contenus disponibles et validations : comptez souvent 4–8 semaines pour une V1 complète (design + intégration + recette), plus si l’internationalisation ou des connecteurs complexes entrent en jeu.",
      },
      {
        question: "Comment relier la vitrine au reste du site ?",
        answer:
          "Maillage interne vers vos silos (e-commerce, IA, SEO), vers le blog pour l’informationnel, et vers les réalisations pour la preuve — exactement comme cette page le fait volontairement.",
      },
    ],
    internalLinks: [
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Si une partie de votre acquisition doit se conclure en ligne par un paiement, la vitrine doit amener vers ce tunnel sans rupture.",
      },
      {
        href: "/sites-internet/landing-page/",
        label: "Landing page",
        description:
          "Quand une campagne précise doit convertir à part : la vitrine reste le socle, la landing porte le message unique.",
      },
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Pour aligner templates, données structurées et performance sur des intentions de recherche locales ou sectorielles.",
      },
      {
        href: "/realisations/",
        label: "Réalisations",
        description:
          "Études de cas publiées lorsque disponibles : utiles pour crédibiliser une vitrine orientée marques exigeantes.",
      },
      {
        href: "/a-propos/",
        label: "À propos",
        description:
          "Renforce l’E-E-A-T : parcours, méthode et transparence — complément naturel d’une vitrine.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Canal structuré pour cadrer périmètre, contenus et stack avant chiffrage.",
      },
    ],
  },
  "site-ecommerce": {
    metaDescription:
      "Développeur site e-commerce : tunnel d’achat, catalogue, paiement, perf, SEO e-commerce et maintenance. Next.js, Shopify, WooCommerce — intégrations ERP/PIM.",
    eyebrow: "Sites internet",
    h1: "Site e-commerce : catalogue, conversion et fiabilité en production.",
    lead:
      "Un e-commerce qui « marche en démo » mais casse en Black Friday n’a aucune valeur business. Je conçois des boutiques orientées conversion (parcours, erreurs paiement, performance catalogue), SEO e-commerce (duplication, données produit, pagination), et intégrations réalistes (stocks, promotions, ERP, transporteurs). La stack (Shopify, WooCommerce, Next.js headless ou hybride) découle du volume de SKU, de vos équipes et de votre dette existante — pas d’une mode techno.",
    tldr: [
      "Tunnel d’achat : compte, panier, livraison, paiement, confirmations — testé comme des parcours critiques, pas comme une checklist cosmétique.",
      "SEO e-commerce : indexation maîtrisée, canonicals, données produit, facettes et contenus catégories utiles.",
      "Intégrations : idempotence, retries, files d’attente et observabilité quand les API ERP/PIM bougent.",
      "Après lancement : maintenance e-commerce dédiée (plugins, paiement, perf) et évolutions de conversion.",
    ],
    sections: [
      {
        heading: "Du catalogue au checkout",
        paragraphs: [
          "Le catalogue n’est pas qu’une grille produit : filtres, tri, recherche, variantes, disponibilité et promos doivent rester cohérents sous charge. Je modélise les états d’erreur (rupture, paiement refusé, adresse invalide) pour éviter les abandons silencieux.",
          "Le checkout est une chaîne de confiance : affichage clair des frais, options de livraison, 3DS quand nécessaire, et messages honnêtes si un PSP est lent.",
        ],
      },
      {
        heading: "SEO, données structurées et contenus catégories",
        paragraphs: [
          "Les e-commerces souffrent souvent de contenu catégorie pauvre, de duplication (filtres), ou de données Product incomplètes. Je relie ces sujets au silo SEO e-commerce et aux migrations si vous refondez une boutique existante.",
          "Le maillage interne relie catégories stratégiques, guides d’achat (blog) et pages silo pour capter longue traîne + preuve d’expertise.",
        ],
      },
      {
        heading: "Marketplace et montée en complexité",
        paragraphs: [
          "Quand plusieurs vendeurs entrent en jeu, la logique change (commissions, litiges, onboarding vendeur). La page marketplace du silo détaille ces patterns ; l’e-commerce « simple » reste souvent la première étape avant industrialisation.",
        ],
      },
      {
        heading: "IA générative utile (sans mytho)",
        paragraphs: [
          "Recherche sémantique, Q/R produit, génération assistée de descriptions : possible si vos données sources sont propres et validées. Voir la page IA générative e-commerce pour un cadrage réaliste.",
        ],
      },
    ],
    faq: [
      {
        question: "Shopify ou WooCommerce pour mon premier shop ?",
        answer:
          "Shopify accélère quand le SaaS doit porter conformité et ops ; WooCommerce peut être pertinent si vous êtes déjà WordPress-first et que le catalogue reste maîtrisable. Le choix se joue sur coût total, intégrations et équipe.",
      },
      {
        question: "Pouvez-vous reprendre un shop existant ?",
        answer:
          "Oui : audit perf + SEO + dette plugins/extensions, puis plan de stabilisation. Les refontes complètes passent souvent par une migration SEO structurée.",
      },
      {
        question: "Comment éviter les problèmes de stock affiché ?",
        answer:
          "Contrats d’API clairs, caches invalidés proprement, et files d’attente pour absorber les pics. On teste scénarios edge (promo + rupture + panier ouvert).",
      },
      {
        question: "Que mesure-t-on le premier mois après lancement ?",
        answer:
          "Taux d’erreur paiement, temps de réponse checkout, taux d’abandon par étape, et SEO (indexation, impressions) — pas seulement le CA, qui dépend aussi du marketing.",
      },
    ],
    internalLinks: [
      {
        href: "/sites-internet/marketplace/",
        label: "Marketplace",
        description:
          "Si votre roadmap inclut multi-vendeurs, autant anticiper commissions et workflows dès l’architecture produit.",
      },
      {
        href: "/seo/seo-ecommerce/",
        label: "SEO e-commerce",
        description:
          "Le levier le plus direct quand le catalogue doit acquérir du trafic qualifié durablement.",
      },
      {
        href: "/seo/migration-seo/",
        label: "Migration SEO",
        description:
          "Indispensable lors d’une refonte d’URL ou d’un changement de stack e-commerce.",
      },
      {
        href: "/maintenance/maintenance-ecommerce/",
        label: "Maintenance e-commerce",
        description:
          "Après le go-live : sécurité, paiement, promos et perf — le sujet le plus sous-estimé.",
      },
      {
        href: "/ia/ia-generative-ecommerce/",
        label: "IA générative e-commerce",
        description:
          "Quand vous voulez améliorer recherche et assistance sans sacrifier la qualité éditoriale.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez volume de SKU, intégrations et objectifs de conversion pour une réponse utile.",
      },
    ],
  },
  "marketplace": {
    metaDescription:
      "Développement marketplace : multi-vendeurs, commissions, onboarding vendeur, modération, paiement et conformité. Architecture web scalable et SEO.",
    eyebrow: "Sites internet",
    h1: "Marketplace : multi-vendeurs, confiance et opérations au centre.",
    lead:
      "Une marketplace n’est pas « un e-commerce avec plus de boutons » : c’est un produit à trois faces (acheteur, vendeur, plateforme) avec des risques opérationnels (litiges, fraude, qualité de service), des flux financiers (commissions, versements, TVA) et une gouvernance contenu/modération. Je conçois des architectures web capables d’absorber la complexité sans figer votre roadmap : onboarding vendeur, catalogue, recherche, messagerie, notifications, reporting et intégrations PSP adaptées.",
    tldr: [
      "Modèle de données explicite : vendeurs, offres, commandes, commissions, états de litige et traçabilité.",
      "Parcours dissymétriques : vendeur vs acheteur, avec permissions et audits.",
      "Paiement : split payments / escrow selon besoins — jamais sans validation juridique et PSP.",
      "SEO : pages vendeur/catégorie, duplication maîtrisée, contenus éditoriaux pour capter l’informationnel.",
    ],
    sections: [
      {
        heading: "Quand une marketplace est le bon modèle",
        paragraphs: [
          "Le modèle a du sens quand l’effet réseau apporte une valeur supérieure à la complexité : liquidité (assez d’offre et de demande), confiance (notation, KYC, modération), et opérations scalables (support, remboursements).",
          "Si vous n’avez pas encore prouvé l’offre côté un des côtés du marché, un e-commerce ou une mise en relation plus simple peut valider l’hypothèse plus vite.",
        ],
      },
      {
        heading: "Architecture produit et technique",
        paragraphs: [
          "Je sépare ce qui est critique financièrement (commande, commission) de ce qui peut être asynchrone (recherche, recommandations). Les files d’attente et l’idempotence sont des alliés pour survivre aux API instables.",
          "Le front marketplace est souvent Next.js ou équivalent pour SEO/perf ; le back peut être Node/Laravel selon votre équipe et contraintes compliance.",
        ],
      },
      {
        heading: "Confiance, modération et conformité",
        paragraphs: [
          "La marketplace vit ou meurt sur la confiance : signalement, modération, règles de publication, SLA vendeur. Ces sujets doivent être cadrés avant le code, car ils impacte juridique, UX et modèle de données.",
        ],
      },
      {
        heading: "Acquisition et contenus",
        paragraphs: [
          "Le SEO capte souvent l’informationnel (« comment choisir », comparatifs) et des pages catégories profondes. Le blog et les études de cas renforcent l’autorité lorsque publiés.",
        ],
      },
    ],
    faq: [
      {
        question: "Marketplace et e-commerce : même stack ?",
        answer:
          "Souvent des briques communes (catalogue, paiement), mais la marketplace ajoute des workflows et des rôles qui changent la modélisation. Anticiper évite une refonte douloureuse.",
      },
      {
        question: "Faut-il un escrow ?",
        answer:
          "Pas systématiquement : ça dépend du secteur, du niveau de confiance et des obligations légales. Je recommande une validation avec juriste + PSP avant d’implémenter.",
      },
      {
        question: "Comment onboarder des vendeurs sans exploser le support ?",
        answer:
          "Parcours self-service, validations automatiques quand possible, contenus d’aide et back-office clair — souvent couplé à un outil CRM sur mesure ou intégré.",
      },
    ],
    internalLinks: [
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Pour comprendre le socle checkout/catalogue avant d’industrialiser le multi-vendeur.",
      },
      {
        href: "/sites-internet/site-mise-en-relation/",
        label: "Mise en relation",
        description:
          "Quand la liquidité passe par des matchings humains ou semi-automatisés plutôt que par un panier classique.",
      },
      {
        href: "/crm-outils-metiers/crm-sur-mesure/",
        label: "CRM sur mesure",
        description:
          "Souvent nécessaire pour suivre vendeurs, litiges et opérations internes à grande échelle.",
      },
      {
        href: "/seo/seo-ecommerce/",
        label: "SEO e-commerce",
        description:
          "Pour structurer catégories, contenus et maillage sans duplication toxique.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez liquidité cible, modèle de commission et contraintes légales : première estimation après cadrage.",
      },
    ],
  },
  "site-mise-en-relation": {
    metaDescription:
      "Plateforme de mise en relation sur mesure : matching, messagerie, vérifications, paiement/commission et conformité. Parcours acheteur/offreur et SEO local.",
    eyebrow: "Sites internet",
    h1: "Site de mise en relation : matching, confiance et workflows réels.",
    lead:
      "Les plateformes de mise en relation échouent souvent parce qu’elles optimisent l’UX « happy path » et sous-estiment la fraude, la désintermédiation et la charge support. Je conçois des parcours où la confiance est explicite : vérifications progressives, messagerie tracée, règles d’annulation, gestion des litiges et mises en relation asynchrones lorsque nécessaire. La monétisation (commission, abonnement, lead fee) doit être alignée avec la valeur créée — sinon la plateforme meurt.",
    tldr: [
      "Matching : règles métier + recherche + notifications — sans promettre une « IA magique » sans données.",
      "Anti-désintermédiation : valeur ajoutée (paiement, assurance, qualité) plutôt que simple annuaire.",
      "Conformité : données personnelles, conservation, accès — cadrées avec votre juriste.",
      "SEO : pages locales/offres, contenus guides, et maillage vers preuves (réalisations).",
    ],
    sections: [
      {
        heading: "Produit : offre, demande, confiance",
        paragraphs: [
          "Je clarifie les acteurs (B2B/B2C/C2C), les objets échangés (service, location, mission), et les points de friction (calendrier, géolocalisation, documents). Chaque étape a un propriétaire métier et une métrique (temps jusqu’au premier match, taux de complétion profil).",
          "La confiance peut passer par vérifications d’identité, notes, historique, ou garanties — le bon niveau dépend du risque et du secteur.",
        ],
      },
      {
        heading: "Messagerie, notifications et modération",
        paragraphs: [
          "La messagerie doit être utilisable mobile-first, avec signalement et modération intégrée. Les notifications (email/push) doivent être utiles, pas harcelantes — avec préférences utilisateur.",
        ],
      },
      {
        heading: "Paiement et modèle économique",
        paragraphs: [
          "Commission, abonnement, paiement par lead : chaque modèle impose des contraintes PSP et comptables. J’implémente des flux traçables et des états de commande lisibles côté support.",
        ],
      },
      {
        heading: "Passerelle vers marketplace",
        paragraphs: [
          "Quand la liquidité explose, vous pouvez évoluer vers une marketplace plus complète — mieux vaut une architecture qui anticipe sans sur-construire le jour 1.",
        ],
      },
    ],
    faq: [
      {
        question: "Mise en relation vs marketplace ?",
        answer:
          "La frontière est floue : souvent la mise en relation commence avec moins de transactions en ligne, puis intègre catalogue et paiement split au fil du temps.",
      },
      {
        question: "Comment limiter la fraude ?",
        answer:
          "Combinaison de signaux (profil, historique, paiement), modération humaine ciblée, et règles métier qui rendent la fraude peu rentable.",
      },
    ],
    internalLinks: [
      {
        href: "/sites-internet/marketplace/",
        label: "Marketplace",
        description:
          "Pour la suite logique quand transactions et vendeurs multiples deviennent centraux.",
      },
      {
        href: "/seo/seo-local/",
        label: "SEO local",
        description:
          "Souvent critique quand l’offre est géographique ou hyperlocale.",
      },
      {
        href: "/applications-mobiles/pwa/",
        label: "PWA",
        description:
          "Quand la distribution immédiate et mobile-first prime sur le store.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Expliquez votre modèle économique et vos risques : j’adapte la V1.",
      },
    ],
  },
  "site-sur-mesure": {
    metaDescription:
      "Site sur mesure (web app) : cadrage produit, architecture, design system, perf et SEO. Node.js, Laravel, Next.js — intégrations API et maintenance.",
    eyebrow: "Sites internet",
    h1: "Site sur mesure : quand le packagé ne matchera jamais votre métier.",
    lead:
      "Le sur-mesure n’est pas une fin en soi : il se justifie quand vos workflows, règles tarifaires, droits ou intégrations internes rendent un SaaS générique contre-productif. Je construis des applications web orientées usage réel : modèle de données métier, permissions, audit, exports, performances et DX pour que votre équipe puisse maintenir. La stack (Next.js, Node, Laravel, PostgreSQL) est choisie pour la dette sur 3 ans, pas pour l’ego.",
    tldr: [
      "Cadrage produit + risque : périmètre V1 réaliste, dette assumée explicitement.",
      "Architecture : API, auth, rôles, logs, sauvegardes — dès le début.",
      "UX : parcours opérationnels (pas seulement marketing) quand l’outil est interne ou hybride.",
      "SEO quand surfaces publiques : sinon, sécurité et perf restent prioritaires.",
    ],
    sections: [
      {
        heading: "Quand le sur-mesure est rationnel",
        paragraphs: [
          "Règles métier complexes, intégrations multiples, besoin d’audit fort, ou différenciation produit impossible dans un template : autant de signaux. Si un SaaS couvre 80 % avec des intégrations propres, c’est souvent moins risqué.",
          "Je documente les alternatives (SaaS + customization) pour que la décision soit transparente.",
        ],
      },
      {
        heading: "Livraison et transfert",
        paragraphs: [
          "Je livre avec tests sur parcours critiques, observabilité minimale et documentation pour onboarding. L’objectif est que vous ne soyez pas captif.",
        ],
      },
      {
        heading: "Liens avec CRM et portails",
        paragraphs: [
          "Souvent le sur-mesure se prolonge en extranet ou console admin : voir CRM & outils métiers et intranet/extranet.",
        ],
      },
    ],
    faq: [
      {
        question: "Sur-mesure = plus cher ?",
        answer:
          "Souvent oui en CAPEX, pas forcément en TCO si le SaaS impose des contournements coûteux en OPEX et en friction humaine.",
      },
    ],
    internalLinks: [
      {
        href: "/crm-outils-metiers/crm-sur-mesure/",
        label: "CRM sur mesure",
        description:
          "Quand le sur-mesure concerne surtout vente/ops plutôt que le marketing public.",
      },
      {
        href: "/sites-internet/intranet-extranet/",
        label: "Intranet / extranet",
        description:
          "Pour les portails et espaces connectés qui prolongent le web sur mesure.",
      },
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Quand le sur-mesure inclut de grandes surfaces publiques indexables.",
      },
      {
        href: "/maintenance/tma/",
        label: "TMA",
        description:
          "Pour absorber évolutions et correctifs après la V1 sans chaos de scope.",
      },
      {
        href: "/realisations/",
        label: "Réalisations",
        description:
          "Preuves terrain lorsque publiées — utiles pour des apps métiers visibles.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez règles métier et intégrations : j’estime la faisabilité V1.",
      },
    ],
  },
  "site-wordpress": {
    metaDescription:
      "Site WordPress professionnel : thème sur mesure ou headless, performance, sécurité, SEO et maintenance WordPress. Éditorial et e-commerce WooCommerce.",
    eyebrow: "Sites internet",
    h1: "WordPress : puissance éditoriale, discipline technique.",
    lead:
      "WordPress reste un excellent levier quand l’équipe marketing doit publier vite et souvent. Les échecs viennent généralement d’une accumulation de plugins, d’un thème opaque, ou d’un hébergement sous-dimensionné. Je conçois des WP maintenables : thème maîtrisé (blocks/FSE ou classic selon besoin), perf (caching, images, requêtes), sécurité (mises à jour, droits), et SEO technique cohérent. WooCommerce peut tenir un e-commerce sérieux si le catalogue et les intégrations restent sous contrôle.",
    tldr: [
      "Moins de plugins « au cas où » : chaque dépendance est une surface d’attaque et de lenteur.",
      "Perf : caching, DB, images, fonts — mesuré, pas supposé.",
      "SEO : structure, données structurées, et maillage vers vos silos.",
      "Maintenance WordPress dédiée pour garder le rythme sans panique.",
    ],
    sections: [
      {
        heading: "WP classique, headless ou hybride",
        paragraphs: [
          "Le headless (Next + WP API) prend sens quand le front doit être très custom et rapide, et que l’éditorial reste dans WP. Le classique reste pertinent pour beaucoup de sites vitrine et contenus.",
        ],
      },
      {
        heading: "WooCommerce",
        paragraphs: [
          "Pour les shops WP-first : je relie aux bonnes pratiques e-commerce SEO et à la maintenance e-commerce lorsque le risque paiement/stock augmente.",
        ],
      },
    ],
    faq: [
      {
        question: "WordPress est-il obsolète en 2026 ?",
        answer:
          "Non : il reste massif en contenu et SMB. La question est la qualité d’exécution et la gouvernance plugins.",
      },
    ],
    internalLinks: [
      {
        href: "/maintenance/maintenance-wordpress/",
        label: "Maintenance WordPress",
        description:
          "Indispensable si vous voulez éviter les failles et la dérive perf.",
      },
      {
        href: "/seo/migration-seo/",
        label: "Migration SEO",
        description:
          "Lors d’un changement de thème ou d’URL structure.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Si WooCommerce est votre canal : articuler contenu, perf et checkout.",
      },
      {
        href: "/blog/",
        label: "Blog",
        description:
          "Le contenu informationnel nourrit le SEO et le GEO depuis WordPress.",
      },
      {
        href: "/a-propos/",
        label: "À propos",
        description:
          "Renforce la confiance sur des sites éditoriaux et services B2B.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Listez plugins actuels et douleurs : audit + plan d’action.",
      },
    ],
  },
  "intranet-extranet": {
    metaDescription:
      "Intranet et extranet sur mesure : authentification, rôles, documents, workflows et intégrations. Portails clients/fournisseurs sécurisés.",
    eyebrow: "Sites internet",
    h1: "Intranet & extranet : portails utiles, pas des cimetières SharePoint.",
    lead:
      "Un extranet réussit quand il réduit les emails « où est le fichier ? » et sécurise les échanges sensibles avec clients ou fournisseurs. Je conçois des portails avec auth forte, rôles, versioning documentaire, workflows de validation et traçabilité — branchés sur vos systèmes (CRM, ERP, stockage). L’UX doit être sobre et rapide : vos équipes l’utiliseront sous pression.",
    tldr: [
      "Auth : SSO possible, MFA selon criticité, sessions et révocations.",
      "Documents : droits, historique, exports — pensés pour audit.",
      "Intégrations : APIs, webhooks, files d’attente — idempotence.",
      "Séparation intranet / zones publiques pour limiter les risques.",
    ],
    sections: [
      {
        heading: "Cas d’usage portails",
        paragraphs: [
          "Espace client commandes/factures, portail fournisseur onboarding, base documentaire RH, outils qualité — chaque cas impose des permissions différentes.",
        ],
      },
      {
        heading: "Sécurité minimale",
        paragraphs: [
          "Moindre privilège, logs, sauvegardes, et politique de mots de passe/session adaptée au risque.",
        ],
      },
    ],
    faq: [
      {
        question: "Intranet cloud ou on-prem ?",
        answer:
          "Dépend contraintes sectorielles et équipe IT : je cadrage les options sans dogme.",
      },
    ],
    internalLinks: [
      {
        href: "/crm-outils-metiers/integration-crm/",
        label: "Intégration CRM",
        description:
          "Quand le portail doit synchroniser comptes, deals et tickets.",
      },
      {
        href: "/sites-internet/site-sur-mesure/",
        label: "Site sur mesure",
        description:
          "Même logique d’architecture produit sur des surfaces métiers.",
      },
      {
        href: "/crm-outils-metiers/automatisation/",
        label: "Automatisation",
        description:
          "Pour brancher validations, webhooks et files entre portail et outils SaaS.",
      },
      {
        href: "/maintenance/infogerance/",
        label: "Infogérance",
        description:
          "Quand le portail devient critique et nécessite supervision et sauvegardes.",
      },
      {
        href: "/contact/",
        label: "Contact",
        description:
          "Pour un premier échange sensible (accès, NDA, contraintes IT).",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez acteurs, documents et intégrations.",
      },
    ],
  },
  "landing-page": {
    metaDescription:
      "Landing page haute conversion : message unique, preuves, perf mobile, SEO de campagne et tracking. Next.js ou stack légère — itérations A/B.",
    eyebrow: "Sites internet",
    h1: "Landing page : une promesse, une action, zéro bruit.",
    lead:
      "Une landing n’est pas une mini-home : c’est une page orientée une intention (campagne Ads, lancement produit, inscription webinar). Je conçois des landings rapides mobile-first, avec preuves ciblées, FAQ courte si utile au GEO, et instrumentation propre (consentement, événements). La cohérence avec le reste du site (design system, mentions, tracking) évite l’effet « page satellite » qui décrédibilise.",
    tldr: [
      "Message unique + CTA clair + preuves pertinentes (pas génériques).",
      "Perf : LCP et CLS sous contrôle pour ne pas brûler le CPC.",
      "SEO de campagne : parfois noindex selon stratégie — décision explicite.",
      "Itérations : A/B tests techniques et versions trackées.",
    ],
    sections: [
      {
        heading: "Structure efficace",
        paragraphs: [
          "Hero avec promesse mesurable, bénéfices, preuves, objections traitées, CTA répété sans agresser. Chaque section doit avoir une raison d’être testable.",
        ],
      },
      {
        heading: "Tracking et conformité",
        paragraphs: [
          "CMP/consentement, tags conditionnels, et événements alignés sur le funnel réel — pour que le marketing puisse optimiser sans données poubelle.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il indexer une landing ?",
        answer:
          "Parfois oui (SEO de campagne durable), parfois non (pages purement Ads). C’est une décision stratégique, pas technique seule.",
      },
    ],
    internalLinks: [
      {
        href: "/sites-internet/site-vitrine/",
        label: "Site vitrine",
        description:
          "Le socle brand quand la landing est une entrée parmi d’autres.",
      },
      {
        href: "/seo/redaction-seo/",
        label: "Rédaction SEO",
        description:
          "Quand le texte doit porter intention et conversion simultanément.",
      },
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Pour éviter qu’une landing Ads ne soit ruinée par un LCP médiocre.",
      },
      {
        href: "/ia/chatbot-ia/",
        label: "Chatbot IA",
        description:
          "Quand vous voulez qualifier des leads sur la page sans surcharger le formulaire.",
      },
      {
        href: "/realisations/",
        label: "Réalisations",
        description:
          "Preuves courtes à réutiliser comme blocs de confiance sur la landing.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez source trafic et objectif mesurable.",
      },
    ],
  },
};
