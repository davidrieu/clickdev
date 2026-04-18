import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

export const sitesInternetChildBySlug: Record<string, SiloChildPageContent> = {
  "site-vitrine": {
    metaDescription:
      "Site vitrine performant : positionnement, SEO technique, Next.js ou WordPress, design system et conversion. Cadrage, contenus, mise en ligne et maintenance.",
    eyebrow: "Sites internet",
    h1: "Site vitrine : crédibilité, SEO et conversion sans sur-dimensionner.",
    lead:
      "Une vitrine doit répondre vite à trois questions : qui vous êtes, pour qui vous travaillez, et comment passer à l’action (contact, démo, prise de rendez-vous). Je conçois des sites vitrines rapides (Core Web Vitals), structurés pour le SEO avec données structurées et renvois utiles entre vos pages offres et preuves, et faciles à faire vivre par vos équipes marketing — sans vous imposer une usine à gaz e-commerce si votre modèle ne le nécessite pas. Le périmètre reste maîtrisé : pas de fonctionnalités décoratives qui rallongent les délais et fragilisent la perf ; priorité aux messages qui soutiennent votre cycle de vente réel.",
    tldr: [
      "Choix de stack selon votre gouvernance contenu : Next.js pour une expérience sur-mesure et des intégrations API maîtrisées ; WordPress lorsque l’éditorial et les landing récurrentes priment et que vous avez une équipe rédactionnelle.",
      "SEO technique dès les templates : titres uniques, hiérarchie Hn cohérente, renvois contextualisés vers vos silos Sites / SEO / Réalisations pour renforcer la compréhension du site par les moteurs.",
      "Parcours de conversion court : preuves vérifiables, références crédibles, FAQ ciblée et CTA alignés sur une action unique — mesurables via analytics sans tableau de bord gadget.",
      "Après lancement : maintenance optionnelle et évolutions contrôlées (nouvelles pages métier, internationalisation, sections études de cas) avec une roadmap compatible votre vélocité.",
      "Design system léger pour éviter la dérive visuelle à chaque campagne : composants réutilisables, états d’erreur pensés, accessibilité WCAG AA comme contrainte de livraison.",
      "Approche problème → solution → process : cadrage des intentions de recherche, puis livraison itérative avec critères de « done » clairs pour le marketing et la direction.",
    ],
    sections: [
      {
        heading: "Problème → objectif",
        paragraphs: [
          "Beaucoup de vitrines échouent parce qu’elles veulent « tout dire » sans hiérarchie : le visiteur part avant d’avoir compris votre valeur différenciante et sans avoir identifié la prochaine étape utile. Je commence par l’intention de recherche et le parcours commercial : quelles pages doivent ranker sur des requêtes à forte intention, lesquelles doivent convertir immédiatement, et comment le blog ou les études de cas nourrissent l’autorité sans disperser le message.",
          "Si vous avez plusieurs offres, la vitrine devient un hub clair : chaque offre pointe vers une page fille ou un silo dédié (e-commerce, IA, SEO) plutôt que de tout empiler sur la home. Cette répartition évite la cannibalisation SEO et rend vos campagnes Ads plus lisibles : une landing par intention, une vitrine qui stabilise la marque.",
          "Les indicateurs qui comptent au départ ne sont pas vanity : temps jusqu’au clic contact, complétion des formulaires qualifiés, rebond mobile sur les pages clés et qualité du trafic référent — pas seulement le volume brut.",
        ],
      },
      {
        heading: "Contenu, design system et performance",
        paragraphs: [
          "Un design system léger (composants, typographie, couleurs, états d’erreur) évite que chaque nouvelle section dégrade la cohérence et la vitesse. Les contenus sont modélisés pour être réutilisables (témoignages, logos, chiffres clés) sans dupliquer du HTML fragile ou des blocs copiés-collés à la main.",
          "La performance n’est pas un « bonus » : elle impacte SEO, coûts publicitaires et taux de rebond mobile. J’intègre images responsives, stratégie de chargement JS raisonnable et métriques de suivi dès le staging pour éviter les mauvaises surprises le jour du lancement.",
          "Côté éditorial, je distingue texte « preuve » (cas, méthode, équipe) et texte « campagne » (landing temporaire) pour ne pas diluer votre discours institutionnel avec des messages contradictoires entre pages.",
        ],
        subsections: [
          {
            heading: "Lisibilité lecture et indexation",
            paragraphs: [
              "Balisage sémantique propre, extraits optimisés pour les résultats enrichis lorsque pertinent, et parcours par pages thématiques vers les contenus qui détaillent votre expertise : l’objectif est un site navigable sans impasse, tout en gardant une structure commerciale claire.",
            ],
          },
        ],
      },
      {
        heading: "Stack et intégrations",
        paragraphs: [
          "Next.js convient lorsque vous voulez une expérience front très contrôlée, une performance élevée par défaut et des intégrations API (CRM, calendrier, outil de devis) sans surcouche CMS. WordPress reste pertinent pour une équipe rédaction autonome et des landings fréquentes — avec une discipline stricte plugins/thème pour ne pas retomber dans la lenteur.",
          "Les intégrations courantes (Calendly/Cal, forms, newsletter) sont branchées avec consentement RGPD, messages d’erreur honnêtes lorsque les API tiers tombent, et journalisation minimale pour le support client. Je documente aussi la reprise par un tiers : secrets, contacts API, environnements staging/prod.",
        ],
      },
      {
        heading: "Mesure, itération et maintenance",
        paragraphs: [
          "On définit 3–5 événements analytics alignés sur le funnel réel (scroll vers contact, clic téléphone, envoi form qualifié). Les itérations post-lancement sont planifiées : nouvelles pages SEO, tests de hero, ajout de FAQ structurée pour renforcer aussi la visibilité dans les réponses IA — sans transformer le site en laboratoire instable.",
          "La maintenance sécurise mises à jour et petites évolutions ; elle est décrite dans le silo Maintenance pour éviter les zones grises sur la responsabilité entre marketing, dev et hébergeur.",
        ],
      },
      {
        heading: "Process concret de livraison",
        paragraphs: [
          "Atelier de cadrage : objectifs business, audiences, contraintes légales et calendrier de contenus. Puis maquettes ou design system selon votre maturité, intégration, recette navigateurs et accessibilité, mise en ligne avec redirections si besoin — en particulier si vous remplacez une vitrine existante.",
          "Je privilégie les cycles courts avec validation explicite : chaque livrable intermédiaire a un propriétaire et une échéance pour ne pas diluer votre disponibilité sur des allers-retours infinis.",
        ],
      },
    ],
    faq: [
      {
        question: "Une vitrine suffit-elle si j’ai plusieurs produits SaaS ?",
        answer:
          "Souvent non : il faut au minimum des pages produit distinctes avec intention claire et des preuves adaptées à chaque segment. La vitrine devient alors un hub orienté comptes ou verticaux métiers, relié à des pages plus profondes qui portent la conversion. Sinon, vous mélangez messages B2B et usages, vous perdez en clarté et vous compliquez le SEO par cannibalisation. Je cadrage la structure pour qu’une requête = une page pilier dominante.",
      },
      {
        question: "WordPress est-il « mauvais pour le SEO » ?",
        answer:
          "Non par défaut : ce sont souvent un thème lourd, une pile de plugins inutiles, un hébergement sous-dimensionné et une absence de gouvernance mises à jour qui posent problème. Un WordPress bien architecturé (thème maîtrisé, cache adapté, contenu structuré) peut très bien performer et rester pertinent pour une équipe marketing autonome. La bascule vers un headless se discute lorsque la performance front et les intégrations produit deviennent critiques et que le CMS sert avant tout de source de vérité éditoriale.",
      },
      {
        question: "Combien de temps pour livrer une vitrine sérieuse ?",
        answer:
          "Selon contenus disponibles, validations internes et intégrations : comptez souvent 4–8 semaines pour une V1 complète (design ou design system + intégration + recette). L’internationalisation, des connecteurs CRM complexes ou une refonte content-heavy rallongent la phase de production. Je fournis une fourchette après atelier et un planning jalonné pour que la direction puisse coordonner marketing et juridique sans surprise.",
      },
      {
        question: "Comment relier la vitrine au reste du site sans disperser le message ?",
        answer:
          "Je pose des renvois utiles entre contenus : depuis la home et les pages offres vers les silos détaillés (e-commerce, IA, SEO), vers le blog pour l’informationnel, et vers les réalisations pour la preuve. Chaque lien a un rôle (aider à décider, montrer un cas similaire, répondre à une objection) — ce n’est pas une collecte de liens isolés en bas de page.",
      },
      {
        question: "Que contient la recette avant mise en ligne ?",
        answer:
          "Contrôle responsive, parcours formulaire et emails transactionnels, balises analytics et consentement, métadonnées SEO par template, redirections depuis l’ancien site si migration, tests de performance sur URLs critiques et relecture accessibilité (focus, contrastes, textes alternatifs). La recette évite la chute de crédibilité du « site neuf mais cassé sur mobile » qui coûte cher en campagne.",
      },
      {
        question: "Faut-il prévoir une refonte totale ou des itérations ?",
        answer:
          "Une V1 robuste puis des itérations mesurées est souvent plus rentable qu’une grande refonte rare : vous apprenez du marché avec un site rapide à ajuster. J’architecture pour que nouvelles pages et tests d’accroche n’imposent pas une refonte du template entier à chaque fois.",
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
      "Un e-commerce qui « marche en démo » mais casse en Black Friday n’a aucune valeur business. Je conçois des boutiques orientées conversion (parcours, erreurs paiement, performance catalogue), SEO e-commerce (duplication, données produit, pagination), et intégrations réalistes (stocks, promotions, ERP, transporteurs). La stack (Shopify, WooCommerce, Next.js headless ou hybride) découle du volume de SKU, de vos équipes et de votre dette existante — pas d’une mode techno. Mon objectif : un tunnel mesurable, des exports comptables fiables et une équipe ops qui peut tenir le rythme des promos sans incident.",
    tldr: [
      "Tunnel d’achat : compte, panier, livraison, paiement, confirmations — testé comme des parcours critiques avec scénarios edge (rupture, 3DS, timeout PSP), pas comme une checklist cosmétique.",
      "SEO e-commerce : indexation maîtrisée, canonicals explicites, données produit complètes, facettes et pagination sans pollution d’index.",
      "Intégrations : idempotence, retries, files d’attente et observabilité quand les API ERP/PIM bougent ou lors des pics saisonniers.",
      "Après lancement : maintenance e-commerce dédiée (plugins, paiement, perf) et évolutions de conversion fondées sur données réelles.",
      "Contenus catégories stratégiques et guides d’achat reliés au catalogue pour capter la longue traîne sans dupliquer des listings entiers.",
      "Alignement SEO technique et métier : les deux avancent ensemble ; la technique seule ne compense pas un catalogue incohérent.",
    ],
    sections: [
      {
        heading: "Du catalogue au checkout",
        paragraphs: [
          "Le catalogue n’est pas qu’une grille produit : filtres, tri, recherche, variantes, disponibilité et promos doivent rester cohérents sous charge et lors des imports batch. Je modélise les états d’erreur (rupture, paiement refusé, adresse invalide) pour éviter les abandons silencieux et les tickets support inutiles.",
          "Le checkout est une chaîne de confiance : affichage clair des frais, options de livraison réalistes, 3DS lorsque nécessaire, messages honnêtes si un PSP est lent ou indisponible — avec stratégie de retry côté front pour ne pas perdre la vente pour une erreur réseau ponctuelle.",
          "Les parcours invités vs connectés sont explicités : création de compte au bon moment (souvent post-achat ou pour suivre une commande), sans friction prématurée qui fait fuir le panier.",
        ],
      },
      {
        heading: "SEO, données structurées et contenus catégories",
        paragraphs: [
          "Les e-commerces souffrent souvent de contenu catégorie pauvre, de duplication (filtres mal canonicalisés), ou de données Product / Offer incomplètes dans les résultats enrichis. Je relie ces sujets au silo SEO e-commerce et aux migrations si vous refondez une boutique existante : inventaire URL, mapping, tests sur échantillon représentatif.",
          "Les renvois utiles entre contenus relient catégories stratégiques, guides d’achat (blog) et pages silo pour capter longue traîne tout en renvoyant vers les URLs transactionnelles qui convertissent.",
          "Je définis avec vous quelles combinaisons de filtres méritent une indexation maîtrisée ou un noindex assumé : ce n’est pas une règle universelle, ça dépend du marché et du risque crawl.",
        ],
      },
      {
        heading: "Marketplace et montée en complexité",
        paragraphs: [
          "Quand plusieurs vendeurs entrent en jeu, la logique change (commissions, litiges, onboarding vendeur). La page marketplace du silo détaille ces patterns ; l’e-commerce « simple » reste souvent la première étape avant industrialisation.",
          "Si votre roadmap prévoit du multi-stock ou du B2B tarifaire, mieux vaut anticiper la modèle de données dès la V1 pour éviter une refonte douloureuse lorsque les règles métier explosent.",
        ],
      },
      {
        heading: "IA générative utile (sans mytho)",
        paragraphs: [
          "Recherche sémantique, Q/R produit, génération assistée de descriptions : possible si vos données sources sont propres et validées juridiquement (allégations, santé, réglementation). Voir la page IA générative e-commerce pour un cadrage réaliste : l’IA ne remplace pas la gouvernance produit.",
        ],
      },
      {
        heading: "Exploitation, monitoring et run",
        paragraphs: [
          "Alerting sur erreurs paiement, taux d’échec 3DS, latence checkout et files d’intégration : en production, on traite ces signaux comme des incidents P1 lorsqu’ils touchent le chiffre. Les dashboards doivent parler aux équipes finance et support, pas seulement au marketing.",
          "Je documente procédures de rollback et fenêtres de maintenance avec communication client lorsque les ERP imposent des interruptions synchrones.",
        ],
      },
    ],
    faq: [
      {
        question: "Shopify ou WooCommerce pour mon premier shop ?",
        answer:
          "Shopify accélère lorsque vous acceptez une plateforme SaaS qui porte conformité PSP, évolutivité et une partie des opérations ; WooCommerce peut être pertinent si vous êtes déjà WordPress-first, avec un catalogue maîtrisable et une équipe qui assume plugins et perf. Le choix se joue sur coût total (extensions, dev, temps interne), intégrations ERP/PIM et capacité à absorber les pics. Je vous donne une grille de décision après audit court plutôt qu’un verdict dogmatique.",
      },
      {
        question: "Pouvez-vous reprendre un shop existant ?",
        answer:
          "Oui : audit performance + SEO + dette plugins/extensions, puis plan de stabilisation avant toute feature neuve. Les refontes complètes passent souvent par une migration SEO structurée pour ne pas perdre positions et données enrichies dans Google. Je commence par sécuriser les flux critiques (paiement, stock, commandes) puis j’optimise catalogue et contenus.",
      },
      {
        question: "Comment éviter les problèmes de stock affiché ?",
        answer:
          "Contrats d’API clairs avec votre ERP ou PIM, caches invalidés proprement après chaque mise à jour critique, files d’attente pour absorber les pics et tests sur scénarios edge (promo + rupture + panier ouvert). Le front doit afficher des états honnêtes : « rupture », « réapprovisionnement », alternatives — pas un silence qui crée des litiges.",
      },
      {
        question: "Que mesure-t-on le premier mois après lancement ?",
        answer:
          "Taux d’erreur paiement, temps de réponse checkout, taux d’abandon par étape, incidents intégration et SEO (indexation, impressions sur URLs catégories pivots). Le CA brut dépend aussi du marketing : je sépare signal produit et signal acquisition pour éviter les conclusions hâtives.",
      },
      {
        question: "Headless ou monolithique : comment trancher ?",
        answer:
          "Headless lorsque le front doit être très custom, multicanal ou ultrarapide et que le backend commerce reste source de vérité ; monolithique ou Shopify headless-lite lorsque vous devez livrer vite avec une équipe réduite. La dette opérationnelle et le coût de possession sur 24 mois priment sur le badge techno.",
      },
      {
        question: "Comment sécuriser les promotions et codes sans failles ?",
        answer:
          "Règles serveur-side, quotas, anti-doublons, journaux sur usages anormaux et tests sur cumuls interdits. Les erreurs marketing coûtent cher en marge ; je traite les règles promo comme du code critique avec jeux de tests.",
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
  marketplace: {
    metaDescription:
      "Développement marketplace : multi-vendeurs, commissions, onboarding vendeur, modération, paiement et conformité. Architecture web scalable et SEO.",
    eyebrow: "Sites internet",
    h1: "Marketplace : multi-vendeurs, confiance et opérations au centre.",
    lead:
      "Une marketplace n’est pas « un e-commerce avec plus de boutons » : c’est un produit à trois faces (acheteur, vendeur, plateforme) avec risques opérationnels (litiges, fraude, qualité de service), flux financiers (commissions, versements, TVA) et gouvernance contenu/modération. Je conçois des architectures web capables d’absorber la complexité sans figer votre roadmap : onboarding vendeur, catalogue, recherche, messagerie, notifications, reporting et intégrations PSP adaptées — avec traçabilité et journaux auditables pour le jour où un litige ou un audit fiscal arrive.",
    tldr: [
      "Modèle de données explicite : vendeurs, offres, commandes, commissions, états de litige et historique des événements — indispensable pour support et conformité.",
      "Parcours dissymétriques : vendeur vs acheteur, permissions fines et audits sur actions sensibles (paiement, remboursement, blocage compte).",
      "Paiement : split payments ou escrow selon besoins — jamais sans validation juridique et PSP ; les flux sont versionnés et rejouables.",
      "SEO : pages vendeur/catégorie utiles, duplication maîtrisée, contenus éditoriaux pour capter l’informationnel sans indexer du bruit.",
      "Liquidité produit : sans offre et demande suffisantes, la techno ne sauvera pas le modèle — je vous aide à cadrer une V1 réaliste.",
      "Observabilité : métriques commande, commissions, SLA vendeur — pour piloter comme un produit, pas comme un site vitrine.",
    ],
    sections: [
      {
        heading: "Quand une marketplace est le bon modèle",
        paragraphs: [
          "Le modèle a du sens quand l’effet réseau apporte une valeur supérieure à la complexité : liquidité (assez d’offre et de demande), confiance (notation, KYC, modération), et opérations scalables (support, remboursements). Si vous n’avez pas encore validé un côté du marché, un e-commerce ou une mise en relation plus simple peut tester l’hypothèse plus vite et à moindre coût.",
          "Je formalise avec vous les indicateurs avant-produit : temps jusqu’à la première transaction utile, taux de réponse vendeur, taux de litige acceptable — pour éviter les roadmaps centrées techno alors que le problème est acquisition.",
        ],
      },
      {
        heading: "Architecture produit et technique",
        paragraphs: [
          "Je sépare ce qui est critique financièrement (commande, commission, versement) de ce qui peut être asynchrone (recherche, recommandations, enrichissement catalogue). Les files d’attente et l’idempotence absorbent les API instables et les pics ; les états de commande restent la source de vérité pour le client et le vendeur.",
          "Le front marketplace est souvent Next.js ou équivalent pour SEO et performance ; le back peut être Node, Laravel ou services managés selon votre équipe et vos contraintes compliance (hébergement données, logs).",
          "Les parcours onboarding vendeur incluent validation documents, conformité secteur et parfois connecteurs tierces listes — ce qui impacte UX et délais go-live.",
        ],
      },
      {
        heading: "Confiance, modération et conformité",
        paragraphs: [
          "La marketplace vit ou meurt sur la confiance : signalement, modération, règles de publication, SLA vendeur et politique de remboursement — cadrés avant le code car ils impactent juridique, UX et schéma de données.",
          "RGPD, conservation des messages, accès données et traçabilité des décisions : alignés avec votre juriste ; les journaux modération peuvent être audités.",
        ],
      },
      {
        heading: "Acquisition et contenus",
        paragraphs: [
          "Le SEO capte souvent l’informationnel (« comment choisir », comparatifs) et des pages catégories profondes ; le blog et les études de cas renforcent l’autorité lorsque publiés avec preuves réelles.",
          "Je relie acquisition payante et organique : une marketplace sans trafic qualifié sur les catégories pivots reste invisible malgré une stack impeccable.",
        ],
      },
      {
        heading: "Exploitation et évolution",
        paragraphs: [
          "Back-office vendeur et équipe interne doivent absorber les pics de litiges sans exploser les coûts : priorisation, macros, escalade humaine sur cas à risque.",
          "Roadmap produit : nouvelles catégories, pays, moyens de paiement — chaque extension repasse par risque juridique et compatibilité PSP.",
        ],
      },
    ],
    faq: [
      {
        question: "Marketplace et e-commerce : même stack ?",
        answer:
          "Souvent des briques communes (catalogue, paiement), mais la marketplace ajoute workflows, rôles et commissions qui changent profondément la modélisation. Anticiper évite une refonte douloureuse lorsque vous passez du modèle « vendeur unique interne » au multi-vendeurs : les états de commande et les flux financiers ne sont pas les mêmes.",
      },
      {
        question: "Faut-il un escrow ?",
        answer:
          "Pas systématiquement : ça dépend du secteur, du niveau de confiance entre parties et des obligations légales. Je recommande validation avec juriste et PSP avant d’implémenter — les flux escrow impactent TVA, délais de paiement vendeur et charge support.",
      },
      {
        question: "Comment onboarder des vendeurs sans exploser le support ?",
        answer:
          "Parcours self-service solide, validations automatiques lorsque possible, centre d’aide segmenté par profil vendeur et back-office clair — souvent couplé à un CRM ou outil interne pour suivre statuts et relances. La documentation fait partie du produit : si le vendeur bloque à l’étape KYC, vous perdez la liquidité.",
      },
      {
        question: "Comment limiter la fraude et la contrefaçon ?",
        answer:
          "Combinaison de signaux (historique, paiement, patterns comportementaux), modération humaine sur cas à risque, règles métier qui rendent la fraude peu rentable et politiques de suspension transparentes. La tech amplifie une stratégie ; elle ne remplace pas la définition des règles.",
      },
      {
        question: "Internationalisation : par où commencer ?",
        answer:
          "Langue et devise cibles, obligations TVA et PSP locaux, transporteurs et politiques de retour par pays. Je découpe en vagues pour ne pas figer une architecture incompatible avec une expansion ultérieure tout en livrant vite sur un marché pilote.",
      },
      {
        question: "Comment mesurer la santé de la marketplace après lancement ?",
        answer:
          "GMV, taux de commission réel après remises et litiges, délai moyen de résolution litige, taux de réponse vendeur, churn vendeur qualifié et satisfaction acheteur sur parcours clés. Ces métriques guident priorités produit mieux que le volume brut d’inscriptions.",
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
          "Pour structurer catégories, contenus et renvois sans duplication toxique.",
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
      "Les plateformes de mise en relation échouent souvent parce qu’elles optimisent l’UX « happy path » et sous-estiment la fraude, la désintermédiation et la charge support. Je conçois des parcours où la confiance est explicite : vérifications progressives, messagerie tracée, règles d’annulation, gestion des litiges et mises en relation asynchrones lorsque nécessaire. La monétisation (commission, abonnement, lead fee) doit être alignée avec la valeur créée — sinon la plateforme meurt de déséquilibre entre acquisition et qualité de service.",
    tldr: [
      "Matching : règles métier + recherche + notifications — sans promettre une « IA magique » sans données historiques ni labels qualité.",
      "Anti-désintermédiation : valeur ajoutée plateforme (paiement, assurance, médiation, garantie qualité) plutôt que simple annuaire copiable.",
      "Conformité : données personnelles, conservation, accès — cadrées avec votre juriste ; journaux pour litiges et preuves.",
      "SEO : pages locales/offres utiles, guides sectoriels, renvois vers études de cas pour crédibiliser.",
      "Mobile-first : souvent le canal principal ; latence messagerie et notifications maîtrisées.",
      "Traçabilité ops : pour que support et direction voient le même état qu’un utilisateur isolé.",
    ],
    sections: [
      {
        heading: "Produit : offre, demande, confiance",
        paragraphs: [
          "Je clarifie les acteurs (B2B/B2C/C2C), les objets échangés (service, location, mission) et les points de friction (calendrier, géolocalisation, documents). Chaque étape a un propriétaire métier et une métrique (temps jusqu’au premier match réussi, taux de complétion profil, taux d’annulation).",
          "La confiance peut passer par vérifications d’identité, notes, historique ou garanties — le bon niveau dépend du risque sectoriel et du coût d’un litige.",
          "Je distingue plateformes à forte saisonnalité et flux continus : la conception des files et notifications diffère.",
        ],
      },
      {
        heading: "Messagerie, notifications et modération",
        paragraphs: [
          "La messagerie doit être utilisable mobile-first, avec signalement et modération intégrée — pas une boîte mail déguisée sans audit trail.",
          "Les notifications (email/push/SMS) doivent être utiles et paramétrables ; harceler l’utilisateur dégrade rétention et réputation.",
          "Modération : workflows pour escaliers de sanctions, appels pièces jointes sensibles et conformité RGPD sur conservation des échanges.",
        ],
      },
      {
        heading: "Paiement et modèle économique",
        paragraphs: [
          "Commission, abonnement, paiement par lead : chaque modèle impose des contraintes PSP et comptables différentes. J’implémente des flux traçables et des états de commande lisibles côté support.",
          "Facturation, TVA et remboursements : synchronisés avec vos règles métier pour éviter les corrections manuelles à grande échelle.",
        ],
      },
      {
        heading: "Passerelle vers marketplace",
        paragraphs: [
          "Quand la liquidité explose, vous pouvez évoluer vers une marketplace plus complète — mieux vaut une architecture qui anticipe sans sur-construire le jour 1.",
          "Je définis seuils produit pour décider quand ajouter catalogue, panier ou split paiement sans casser l’expérience acquéreur existante.",
        ],
      },
      {
        heading: "SEO et acquisition territoriale",
        paragraphs: [
          "Pour les offres géographiques, pages locales utiles avec contenu distinct et preuves réelles ; éviter les duplications purement géo sans valeur ajoutée.",
          "Alignement avec fiche Google Business Profile lorsque vous avez des points physiques ou zones desservies — cohérence NAP et messages.",
        ],
      },
    ],
    faq: [
      {
        question: "Mise en relation vs marketplace ?",
        answer:
          "La frontière est floue : souvent la mise en relation commence avec moins de transactions en ligne complètes, puis intègre catalogue et paiement split au fil du temps. La différence majeure est la complexité financière et la modération lorsque plusieurs vendeurs et stocks entrent en jeu.",
      },
      {
        question: "Comment limiter la fraude ?",
        answer:
          "Combinaison de signaux (profil, historique, paiement, patterns), modération humaine sur cas à risque et règles métier qui rendent la fraude peu rentable — par exemple délais de versement ou frais annulation asymétriques lorsque justifiés légalement.",
      },
      {
        question: "La géolocalisation est-elle obligatoire ?",
        answer:
          "Non : ça dépend du métier. Quand elle est utilisée, je sécurise consentement, précision et fallback si GPS indisponible ; la UX doit rester utilisable sans partage permanent.",
      },
      {
        question: "Comment éviter que les utilisateurs passent en direct ?",
        answer:
          "Offrir sur la plateforme ce qu’ils ne peuvent pas reproduire facilement : paiement sécurisé, médiation, labels qualité, historique et assurance selon secteur. Punir la désintermédiation trop tôt sans valeur ajoutée claire détruit la confiance.",
      },
      {
        question: "RGPD : quelles données conserver ?",
        answer:
          "Durées proportionnées au litige potentiel et au support ; droits d’accès et effacement documentés ; minimisation des données dans les exports internes. Votre juriste valide la politique finale.",
      },
      {
        question: "Combien de temps pour une V1 crédible ?",
        answer:
          "Selon périmètre KYC, paiement et nombre d’acteurs : souvent plusieurs semaines à quelques mois après cadrage réaliste. Livrer moins mais stable bat une V1 ambitieuse qui tombe en prod.",
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
      "Le sur-mesure n’est pas une fin en soi : il se justifie quand vos workflows, règles tarifaires, droits ou intégrations internes rendent un SaaS générique contre-productif ou plus coûteux en OPEX qu’à l’investissement initial. Je construis des applications web orientées usage réel : modèle de données métier, permissions, audit, exports, performances et maintenabilité pour que votre équipe puisse faire évoluer le produit sans dépendance opaque. La stack (Next.js, Node, Laravel, PostgreSQL) est choisie pour la dette sur 3 ans et la compétence interne disponible — pas pour suivre une tendance.",
    tldr: [
      "Cadrage produit + risque : périmètre V1 réaliste, dette assumée explicitement dans les choix.",
      "Architecture : API, auth, rôles, logs structurés, sauvegardes — dès le début, pas « plus tard ».",
      "UX : parcours opérationnels prioritaires lorsque l’outil est interne ou hybride — pas seulement marketing.",
      "SEO lorsque surfaces publiques indexables ; sinon sécurité, conformité et perf restent prioritaires.",
      "Observabilité et tests sur parcours critiques pour éviter les incidents métier silencieux.",
      "Documentation et transfert : vous restez propriétaire du savoir nécessaire pour faire évoluer le produit.",
    ],
    sections: [
      {
        heading: "Quand le sur-mesure est rationnel",
        paragraphs: [
          "Règles métier complexes, intégrations multiples, besoin d’audit fort, ou différenciation produit impossible dans un template : autant de signaux sérieux. Si un SaaS couvre 80 % avec des intégrations propres et un TCO favorable, c’est souvent moins risqué qu’un développement from scratch.",
          "Je documente les alternatives (SaaS + custom, no-code borné, achat licence) pour que la décision soit transparente et défendable auprès de la direction ou du board.",
          "Je challenge le scope pour éviter le syndrome « reproduire Excel en ligne » sans gains réels sur automatisation ou qualité des données.",
        ],
      },
      {
        heading: "Conception technique et qualité",
        paragraphs: [
          "APIs versionnées, environnements isolés, migrations base de données traçables et stratégie de secrets — les bases pour dormir lors des mises à jour.",
          "Tests automatisés sur chemins critiques (calcul tarifaire, validation droits, exports comptables) complétés par recette manuelle sur cas métier réels.",
        ],
      },
      {
        heading: "Livraison et transfert",
        paragraphs: [
          "Je livre avec documentation technique et fonctionnelle, accès repos, observabilité minimale et procédures incident. L’objectif est que vous ne soyez pas captif : revue de code possible, réversibilité claire.",
          "Formation courte aux équipes internes qui maintiennent : sans ça, la V1 décroît vite.",
        ],
      },
      {
        heading: "Liens avec CRM et portails",
        paragraphs: [
          "Souvent le sur-mesure se prolonge en extranet ou console admin : voir CRM & outils métiers et intranet/extranet pour une vision bout-en-bout.",
          "Synchronisation avec SI : définition des sources de vérité pour éviter doubles saisies et conflits de données.",
        ],
      },
      {
        heading: "Performance, sécurité et conformité",
        paragraphs: [
          "Durcissement auth (MFA si pertinent), limitation de débit, journaux d’audit et sauvegardes testées — proportionnels au risque métier.",
          "RGPD et secteurs réglementés : pseudonymisation, durées de conservation et droits utilisateurs pris en compte dès la conception.",
        ],
      },
    ],
    faq: [
      {
        question: "Sur-mesure = plus cher ?",
        answer:
          "Souvent oui en CAPEX initial, pas forcément en TCO si le SaaS impose des contournements coûteux en licences, intégrations fragiles et friction humaine au quotidien. Je compare sur 24–36 mois avec hypothèses explicites sur évolutions prévisibles.",
      },
      {
        question: "Peut-on commencer petit puis étendre ?",
        answer:
          "Oui et c’est souvent préférable : une V1 focalisée sur un workflow critique bien stabilisé vaut mieux qu’un ERP web incomplet. L’architecture doit cependant anticiper les extensions sans tout réécrire.",
      },
      {
        question: "Comment gérer les intégrations ERP fragiles ?",
        answer:
          "Files d’attente, retries, compensation transactions et alerting sur échecs répétés ; parfois synchronisation différée acceptable métier plutôt que synchrone fragile.",
      },
      {
        question: "Qui maintient après livraison ?",
        answer:
          "Je propose TMA ou infogérance selon criticité ; sinon transfert à votre équipe avec documentation et backlog priorisé. Les zones grises maintenance sont une source fréquente de dette.",
      },
      {
        question: "Cloud ou on-prem : comment choisir ?",
        answer:
          "Selon contraintes données, certifications et compétences IT internes ; je ne prétends pas trancher seul sur du réglementé — j’aligne l’archi sur la décision validée par votre DSI ou prestataire hébergeur.",
      },
      {
        question: "Comment sécuriser les exports et données sensibles ?",
        answer:
          "Contrôle d’accès par rôle, journalisation des téléchargements, filigranes ou fenêtres temporelles lorsque pertinent, et chiffrement au repos/transit selon niveau de risque.",
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
      "WordPress reste un excellent levier quand l’équipe marketing doit publier vite et souvent sans passer par la case dev à chaque article. Les échecs viennent généralement d’une accumulation de plugins, d’un thème opaque ou d’un hébergement sous-dimensionné — pas du CMS en lui-même. Je conçois des WP maintenables : thème maîtrisé (blocks/FSE ou classic selon besoin), performance mesurée (caching, images, requêtes SQL), sécurité (mises à jour, droits utilisateurs, durcissement), et SEO technique cohérent. WooCommerce peut tenir un e-commerce sérieux si le catalogue et les intégrations restent sous contrôle responsable.",
    tldr: [
      "Moins de plugins « au cas où » : chaque dépendance est une surface d’attaque et de lenteur à documenter.",
      "Perf : caching adapté, images modernes, fonts locales ou optimisées, mesures field — pas suppositions.",
      "SEO : structure claire, données structurées pertinentes, renvois contextualisés vers vos silos thématiques.",
      "Maintenance WordPress dédiée pour garder le rythme sans panique ni failles accumulées.",
      "Headless ou hybride lorsque le front doit être très rapide tout en gardant l’éditorial dans WP.",
      "Gouvernance : rôles éditoriaux, environnements staging et procédures avant mise en prod.",
    ],
    sections: [
      {
        heading: "WP classique, headless ou hybride",
        paragraphs: [
          "Le headless (Next + WP API) prend sens quand le front doit être très custom et rapide, et que l’éditorial reste dans WP pour l’autonomie marketing — avec stratégie de preview et synchronisation contenus.",
          "Le classique reste pertinent pour beaucoup de sites vitrine et contenus où la vélocité éditoriale prime et où l’équipe n’a pas besoin d’une complexité front additionnelle.",
          "Je documente qui édite quoi, où sont les zones dynamiques vs statiques et comment éviter les conflits éditeur/marketing.",
        ],
      },
      {
        heading: "Performance et sécurité opérationnelles",
        paragraphs: [
          "Object caching quand pertinent, CDN pour assets, limitation tentatives login, versions PHP supportées et mises à jour planifiées — pas seulement le jour où le site est down.",
          "Revues périodiques des plugins : ce qui n’est plus utilisé sort, ce qui est critique est testé avant chaque maj majeure.",
        ],
      },
      {
        heading: "WooCommerce",
        paragraphs: [
          "Pour les shops WP-first : je relie aux bonnes pratiques e-commerce SEO, à la maintenance e-commerce lorsque le risque paiement/stock augmente, et à des intégrations ERP/PIM réalistes.",
          "Checkout et comptes : friction maîtrisée, conformité RGPD checkout, emails transactionnels testés.",
        ],
      },
      {
        heading: "SEO technique et éditorial",
        paragraphs: [
          "Templates propres pour titres et métas, éviter duplication involontaire de contenus via taxonomies mal conçues, balisage cohérent pour rich results lorsque utile.",
          "Le blog nourrit acquisition informationnelle : je cadrage types d’articles et renvois vers pages commerciales pour éviter la course au volume sans conversion.",
        ],
      },
      {
        heading: "Migration, refonte et dette",
        paragraphs: [
          "Changement de thème ou refonte partielle : plan de redirections et tests SEO ; staging obligatoire pour les sites à trafic existant.",
          "Je priorise ce qui touche crawl, indexation et CWV avant cosmétique : le coût d’opportunité trafic est souvent sous-estimé.",
        ],
      },
    ],
    faq: [
      {
        question: "WordPress est-il obsolète en 2026 ?",
        answer:
          "Non : il reste massif sur le web SMB et éditorial. La question est la qualité d’exécution, la gouvernance plugins et l’hébergement — pas le logo WordPress sur la home. Pour des besoins extrêmes performance + personnalisation, on discute headless ou stack alternative avec TCO réaliste.",
      },
      {
        question: "Combien de plugins est raisonnable ?",
        answer:
          "Pas de nombre magique : ce qui compte est la criticité, la maintenance active de chaque extension et l’overlap fonctionnel. Deux plugins qui font la même chose coûtent cher en conflits et sécurité.",
      },
      {
        question: "Comment sécuriser un WP exposé ?",
        answer:
          "Mises à jour disciplinées, comptes forts, limitation admin par IP si possible, WAF ou règles serveur, sauvegardes testées et monitoring disponibilité. La sécurité est un processus, pas un plugin unique miracle.",
      },
      {
        question: "Page builder ou thème custom ?",
        answer:
          "Dépend de la vélocité souhaitée vs contrôle fin. Les builders accélèrent mais peuvent alourdir le front ; un thème sur mesuré coûte plus cher initialement mais peut être plus léger et stable sur le long terme.",
      },
      {
        question: "Faut-il migrer vers une autre stack ?",
        answer:
          "Seulement si contraintes produit (perf extrême, intégrations) dépassent ce que WP raisonnablement maîtrisé peut porter — ou si vos coûts OPEX explosent. Je vous le dis si c’est le cas ; je ne vends pas de migration pour exercice.",
      },
      {
        question: "Comment préparer une équipe marketing à tenir le site ?",
        answer:
          "Formation ciblée (contenus, médias, SEO de base), guidelines et environnement staging pour tester avant prod — avec liste de plugins touchant au SEO ou au commerce qui nécessitent validation dev.",
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
          "Le contenu informationnel nourrit le SEO et les usages GEO depuis WordPress.",
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
      "Un extranet réussit quand il réduit les emails « où est le fichier ? » et sécurise les échanges sensibles avec clients ou fournisseurs — mesurables en temps gagné support et en incidents évités. Je conçois des portails avec auth forte, rôles explicites, versioning documentaire, workflows de validation et traçabilité — branchés sur vos systèmes (CRM, ERP, stockage). L’UX doit être sobre et rapide : vos équipes utilisent ces outils sous pression ; chaque clic superflu est un coût caché.",
    tldr: [
      "Auth : SSO possible, MFA selon criticité, sessions et révocations maîtrisées.",
      "Documents : droits fins, historique des versions, exports traçables — pensés pour audit.",
      "Intégrations : APIs, webhooks, files d’attente — idempotence pour survivre aux pannes partielles.",
      "Séparation intranet / zones publiques pour limiter risques surface d’attaque et erreurs de configuration.",
      "Onboarding utilisateurs : un portail ignoré est un échec, même techniquement parfait.",
      "Observabilité : journaux accès et opérations sensibles pour conformité et post-mortem incidents.",
    ],
    sections: [
      {
        heading: "Cas d’usage portails",
        paragraphs: [
          "Espace client commandes/factures, portail fournisseur onboarding, base documentaire RH, outils qualité ou suivi chantier — chaque cas impose des permissions, cycles de validation et métriques différents.",
          "Je cadrage avec métier qui valide quoi et en combien de temps ; sinon le workflow reste une coquille vide.",
        ],
      },
      {
        heading: "Sécurité et gouvernance minimales",
        paragraphs: [
          "Moindre privilège, logs structurés, sauvegardes testées et politique mots de passe/session adaptée au risque — avec revue périodique des comptes administrateurs.",
          "Durcissement : limitation upload, antivirus côté serveur si fichiers tiers, contrôle types MIME.",
        ],
      },
      {
        heading: "Documents et conformité",
        paragraphs: [
          "Versioning, étiquetage et recherche : un coffre sans métadonnées devient rapidement ingérable.",
          "Rétention et archivage alignés obligations légales ; droit d’accès employé/client pris en compte.",
        ],
      },
      {
        heading: "Intégrations SI et fiabilité",
        paragraphs: [
          "ERP/CRM : mapping clair des entités ; gestion des conflits de synchronisation et réconciliation.",
          "Mode dégradé : si l’ERP tombe, l’utilisateur voit un état honnête et les opérations critiques peuvent être mises en file.",
        ],
      },
      {
        heading: "Adoption et formation",
        paragraphs: [
          "Interfaces simples, parcours tâche-orientés, aide contextuelle et formation ciblée par rôle.",
          "Indicateurs d’usage réel (pas seulement connexions) pour prioriser évolutions.",
        ],
      },
    ],
    faq: [
      {
        question: "Intranet cloud ou on-prem ?",
        answer:
          "Dépend contraintes sectorielles, latence et compétences IT internes ; je cadre les options avec prérequis sécurité (chiffrement, juridictions données) sans dogme marketing cloud vs on-prem.",
      },
      {
        question: "SharePoint ou outil sur mesure ?",
        answer:
          "SharePoint et suites matures excellent quand vous restez dans l’écosystème Microsoft et acceptez leur modèle. Le sur-mesure a du sens lorsque workflows, droits ou intégrations sortent du cadre raisonnable de la suite — à chiffrer honnêtement.",
      },
      {
        question: "Comment éviter le portail fantôme ?",
        answer:
          "Commencer par 1–2 workflows à forte valeur, communication interne, formation et métriques d’usage ; itérer plutôt que tout couvrir d’un coup.",
      },
      {
        question: "RGPD et accès tiers : que gérer ?",
        answer:
          "Durées conservation, bases légales, registre traitements ; accès externes limités dans le temps et journalisés — conformité n’est pas un toggle à cocher mais des règles appliquées dans l’UX et le stockage.",
      },
      {
        question: "MFA pour tous les utilisateurs ?",
        answer:
          "Souvent recommandé sur espaces sensibles ; la friction doit rester proportionnée au risque. SSO entreprise peut simplifier l’expérience.",
      },
      {
        question: "Comment planifier la maintenance ?",
        answer:
          "Mises à jour sécurité, surveillance disque/logs, sauvegardes restaurées régulièrement et runbook incidents — soit en infogérance avec moi, soit avec votre équipe SI si compétences présentes.",
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
      "Une landing n’est pas une mini-home : c’est une page orientée une intention forte (campagne Ads, lancement produit, inscription webinar, telechargeable lead magnet). Je conçois des landings rapides mobile-first, avec preuves ciblées, FAQ courte oui utile pour la clarté et les usages assistés par IA, et instrumentation propre (consentement, événements, agrégation sans bruit). La cohérence avec le reste du site (design system, mentions légales, ton, tracking) évite l’effet « page satellite » qui décrédibilise la marque lorsque le prospect clique depuis une annonce puis explore le domaine principal.",
    tldr: [
      "Message unique + CTA clair + preuves pertinentes au contexte campagne — pas témoignages génériques interchangeables.",
      "Perf : LCP et CLS sous contrôle pour ne pas brûler le CPC ni dégrader la qualité des annonces.",
      "SEO de campagne : indexer ou non — décision explicite selon stratégie (durée, cannibalisation, duplicate).",
      "Itérations : A/B tests ou versions trackées avec hypothèses mesurables, pas changements instinctifs.",
      "Alignement message annonce ↔ landing pour limiter rebond et améliorer Quality Score.",
      "Conformité cookies et tags : collecte utile sans déclarer un funel imaginaire avec des données incomplètes.",
    ],
    sections: [
      {
        heading: "Structure efficace et preuve",
        paragraphs: [
          "Hero avec promesse mesurable, bénéfices tangibles, preuves (logos pertinents, métriques si autorisées, extraits études de cas), objections traitées avec concision, CTA répété sans agresser. Chaque section doit avoir une raison d’être testable : si vous ne pouvez pas expliquer son rôle dans la conversion, elle sort ou devient variante test.",
          "Friction formulaire proportionnée à la valeur promise : trop de champs tue la collecte ; trop peu et sales perd en qualification — cadrage avec vous.",
        ],
      },
      {
        heading: "Tracking et conformité",
        paragraphs: [
          "CMP/consentement, tags conditionnels, et événements alignés sur le funnel réel — pour que le marketing optimise sur des données fiables, pas sur des doubles comptages.",
          "Server-side tagging ou stratégies anti-adblock lorsque votre acquisition dépend fortement du paid — à pondérer avec coût et complexité.",
        ],
      },
      {
        heading: "SEO et indexation des landings",
        paragraphs: [
          "Certaines landings doivent rester noindex pour éviter cannibalisation ou duplicate ; d’autres portent une intention durable et méritent d’être indexées avec contenu unique — décision stratégique documentée.",
          "Canonicals et paramètres UTM ne doivent pas créer des familles d’URLs indexées sans valeur ajoutée.",
        ],
      },
      {
        heading: "Tests et optimisation continue",
        paragraphs: [
          "Cadre expérimental : hypothèse, métrique primaire, durée minimale, critère de succès — évite les conclusions sur deux jours de trafic volatile.",
          "Je peux livrer plusieurs variantes ou composants modulaires pour accélérer itérations sans refonte à chaque campagne.",
        ],
      },
      {
        heading: "Intégration au parcours global",
        paragraphs: [
          "Après conversion, emails de confirmation et page merci utiles pour mesurer uplifts et nurturing ; cohérence CRM obligatoire.",
          "Pour campagnes longues, lien naturel vers site principal pour utilisateurs en recherche d’approfondissement.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il indexer une landing ?",
        answer:
          "Parfois oui lorsque vous visez une intention durable avec contenu unique non cannibal avec le reste du site ; parfois non pour pages purement Ads ou promotions très courtes qui dupliquent un message existant. C’est une décision stratégique SEO + acquisition, pas un réglage technique isolé.",
      },
      {
        question: "Combien de sections pour convertir ?",
        answer:
          "Le bon nombre est celui qui répond aux objections réelles observées en vente ou support — pas un template fixe. Je commence souvent sobre puis j’ajoute blocs mesurés si données ou tests le justifient.",
      },
      {
        question: "Comment éviter que la landing dégrade la marque ?",
        answer:
          "Alignement ton, design et mentions légales avec le domaine principal ; témoignages vérifiables ; pas de promesses floues impossibles à tenir — la confiance prime sur le champ marketing creux.",
      },
      {
        question: "Que mesurer en premier sur une landing paid ?",
        answer:
          "Coût par lead qualifié ou par démo bookée selon objectif, taux de conversion segmenté device, rebond depuis annonce vs organique, temps jusqu’à conversion. Sans définition « qualifié », vous optimisez sur du volume vide.",
      },
      {
        question: "Landing sur sous-domaine ou même domaine ?",
        answer:
          "Trade-off branding, cookies first-party et cohérence SEO ; même domaine simplifie souvent confiance et attribution, mais exceptions existent pour ops isolées.",
      },
      {
        question: "Comment intégrer vidéo sans tuer la perf ?",
        answer:
          "Lazy-load, posters images, formats adaptés, pas d’autoplay audio ; parfois lien vers plateforme externe si qualité nécessaire — toujours mesurer impact LCP.",
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
