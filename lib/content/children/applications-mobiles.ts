import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

export const applicationsMobilesChildBySlug: Record<string, SiloChildPageContent> = {
  ios: {
    metaDescription:
      "Développement app iOS (Swift) : UI native, performances, widgets, intégrations et soumission App Store. Qualité release, accessibilité et cycle de vie produit.",
    eyebrow: "Applications mobiles",
    h1: "Développement iOS natif : Swift, Human Interface Guidelines, production.",
    lead:
      "iOS récompense la cohérence avec les patterns attendus : navigation, gestures, Dynamic Type, cycle de vie strict et respect des Human Interface Guidelines. Je développe en Swift quand le natif apporte un gain net — APIs bas niveau, widgets, App Clips, performances sur listes denses, ou équipe déjà iOS-first. La release n’est pas une formalité : certificats, provisioning, privacy nutrition labels, App Tracking Transparency si besoin, et gestion des rejets font partie du périmètre. Chaque feature est tracée jusqu’au tableau de bord qualité : crash rate, ANR équivalents iOS, adoption de version, et retours App Store exploitables pour la roadmap.",
    tldr: [
      "Swift + patterns Apple : base lisible pour une équipe iOS, dette UI maîtrisée sur la durée.",
      "Qualité : Instruments, crash reporting, tests sur parcours critiques (auth, paiement, offline partiel).",
      "App Store : métadonnées, captures, conformité privacy, itérations post-review avec messages clairs pour Apple.",
      "Back-end : coordination API (REST, GraphQL) avec votre stack Node, Laravel ou .NET — contrats versionnés et erreurs honnêtes côté app.",
      "Roadmap : arbitrage explicite natif vs module partagé quand Android ou le web entrent en jeu.",
      "Accessibilité : Dynamic Type, VoiceOver, contrastes — traitées comme des critères d’acceptation, pas en bonus.",
    ],
    sections: [
      {
        heading: "Quand choisir iOS natif plutôt que React Native",
        paragraphs: [
          "Le natif gagne lorsque l’OS devient le produit : widgets sur l’écran d’accueil, interactions avec le hardware (Bluetooth, NFC, capteurs), App Clips pour un parcours ultra court, ou fluidité extrême sur des listes volumineuses avec cellules complexes. React Native reste excellent quand l’UI est majoritairement standard et que la logique métier doit être partagée avec Android ; il plafonne souvent lorsque vous empilez modules natifs sans stratégie de dette.",
          "Je formalise la décision avec un tableau simple : criticité des APIs OS, maturité de l’équipe, calendrier de release, coût total sur 24–36 mois (pas seulement le coût de la V1). Si une partie du produit doit rester native et une autre peut être partagée, on peut aussi composer : noyau Swift pour les écrans sensibles, et pont vers du code partagé pour le reste — à condition que la frontière soit documentée.",
          "En phase de cadrage, je liste les risques store (paiement in-app, contenu utilisateur, modération) et les dépendances back-end (auth, feature flags, télémétrie). Cela évite le scénario où une démo interne « marche » mais où la soumission bloque sur un point de politique Apple non anticipé.",
        ],
      },
      {
        heading: "Intégration produit : auth, paiement, offline, deep links",
        paragraphs: [
          "L’authentification (OAuth, passkeys, SSO entreprise) doit être pensée avec rotation de tokens, sessions expirées et messages d’erreur actionnables. Le paiement in-app impose des règles strictes : périmètre digital vs biens physiques, restitution, et parcours de facturation cohérents avec votre finance.",
          "L’offline partiel est utile pour des apps terrain ou des contenus critiques : je définis ce qui est mis en cache, durée de validité, stratégie de réconciliation et indicateurs de conflit. Les deep links marketing (email, SMS, QR) sont testés bout à bout jusqu’à l’écran cible, y compris depuis cold start.",
          "Côté analytics, je limite la collecte au strict utile : événements alignés sur le funnel réel (inscription, activation, conversion), respect du consentement, et pipeline vers votre outil (Plausible, Segment, etc.) sans fuites de données personnelles dans des logs debug.",
        ],
      },
      {
        heading: "Qualité, performance et observabilité",
        paragraphs: [
          "Les parcours critiques (connexion, paiement, synchronisation) sont couverts par des tests automatisés raisonnables et des tests manuels sur devices représentatifs — petit écran, réseau faible, batterie basse. Les régressions de performance sont traitées comme des bugs : jank sur scroll, pics mémoire sur galerie d’images, temps de lancement après mise à jour.",
          "Crash reporting et breadcrumbs permettent de prioriser : je configure des regroupements utiles pour votre équipe produit, pas seulement pour les devs. Les releases progressives (TestFlight, phased release) sont planifiées avec critères de rollback.",
          "La documentation technique (README, schémas d’architecture, runbooks incident) est livrée pour que la maintenance ne repose pas sur une seule personne — aligné avec le silo Maintenance & TMA lorsque vous souscrivez un suivi post go-live.",
        ],
      },
      {
        heading: "Coordination avec Android, le web et le back-office",
        paragraphs: [
          "Quand Android coexiste, je synchronise les règles métier et les états d’erreur pour éviter deux vérités divergentes côté API. Les feature flags et les versions d’API sont versionnés pour permettre des déploiements mobiles sans couper les anciennes builds encore en circulation.",
          "Si une PWA ou un site e-commerce alimente le même compte utilisateur, les sessions et les règles de déconnexion doivent rester cohérentes. Je m’appuie sur les pages Sites internet et SEO technique lorsque les landings d’acquisition et l’indexation jouent un rôle dans l’installation.",
          "Les réalisations publiées sur ce site illustrent la méthode lorsque le client accepte la communication : preuves, stack, contraintes release — utiles pour rassurer sur des projets sensibles store.",
        ],
      },
      {
        heading: "Livrables et façon de travailler",
        paragraphs: [
          "Un backlog priorisé avec critères d’acceptation clairs, des démos régulières sur build signé, et une politique de branches qui permet des hotfix sans mélanger la dette. Les décisions structurantes (choix persistance locale, stratégie push, modularisation) sont écrites pour survivre aux changements d’équipe.",
          "Les estimations distinguent correctifs, évolutions et refactors : la TMA post-lancement peut absorber les itérations courantes si vous le souhaitez. Le formulaire de devis permet d’indiquer APIs existantes, deadlines store et niveau d’exigence privacy.",
        ],
      },
    ],
    faq: [
      {
        question: "SwiftUI ou UIKit : comment trancher ?",
        answer:
          "SwiftUI accélère beaucoup d’écrans standards et simplifie la cohérence visuelle ; UIKit reste pertinent pour composants très custom, intégrations legacy ou besoins de contrôle fin. Le choix dépend de la maturité de l’équipe, de la dette existante et des modules Apple requis.",
      },
      {
        question: "Combien de temps pour une première version App Store ?",
        answer:
          "Hors validation Apple, comptez souvent 8–14 semaines pour une app métier sérieuse (auth, parcours critiques, instrumentation). Les intégrations lourdes (paiement, hardware, offline complexe) ou les allers-retours juridiques peuvent étendre ce délai — d’où l’intérêt d’un cadrage court en amont.",
      },
      {
        question: "Gérez-vous les soumissions et les rejets ?",
        answer:
          "Oui : préparation des métadonnées, captures, notes de review pour Apple, et plan de correction si rejet. Je documente les changements entre versions pour éviter les régressions à la soumission suivante.",
      },
      {
        question: "Pouvez-vous reprendre une app existante ?",
        answer:
          "Oui : audit code + perf + dette, plan de stabilisation, puis roadmap de montée de version. Les reprises incluent souvent une phase de tests de non-régression sur parcours critiques avant toute feature majeure.",
      },
      {
        question: "Comment sécuriser les clés API et secrets ?",
        answer:
          "Stockage hors repo, variables d’environnement par build, obfuscation raisonnable côté client, et surtout limitation des capacités côté serveur (quotas, signatures). Les secrets ne doivent jamais être la seule ligne de défense.",
      },
      {
        question: "Et si nous devons aussi couvrir Android ?",
        answer:
          "Deux options : parité native (deux équipes ou un développeur mobile full-stack) ou React Native pour mutualiser une grande partie du code. La page React Native détaille les compromis perf et modules natifs.",
      },
    ],
    internalLinks: [
      {
        href: "/applications-mobiles/android/",
        label: "Android",
        description:
          "Pour couvrir le duo stores avec une feuille de route fonctionnelle alignée.",
      },
      {
        href: "/applications-mobiles/react-native/",
        label: "React Native",
        description:
          "Quand le partage de code prime sur du 100 % natif sur chaque plateforme.",
      },
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Landings web, pages légales et contenus indexables liés à l’installation.",
      },
      {
        href: "/realisations/",
        label: "Réalisations",
        description:
          "Preuves publiées lorsque disponibles — important pour rassurer sur la release.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez APIs, deadlines store et contraintes privacy.",
      },
    ],
  },
  android: {
    metaDescription:
      "Développement app Android (Kotlin) : Material Design, perf, Play Console, modularisation et conformité. Releases, qualité et alignement iOS.",
    eyebrow: "Applications mobiles",
    h1: "Android Kotlin : Material, perf et releases sans surprise.",
    lead:
      "L’écosystème Android impose fragmentation raisonnable (SDK, tailles d’écran), permissions explicites, et une Play Console de plus en plus exigeante sur la confidentialité et les contenus. Je construis des apps Kotlin maintenables : modularisation claire, tests sur parcours critiques, builds reproductibles, et instrumentation crash/ANR exploitable par le produit. La cohérence avec votre back-end et votre iOS (si présent) évite deux logiques métier divergentes. Chaque release est préparée avec staged rollout, notes utilisateur et critères de rollback — le mobile est du logiciel critique : une régression checkout ou auth se paie immédiatement en support et en churn.",
    tldr: [
      "Kotlin + Material lorsque les guidelines servent la vélocité sans brider la marque.",
      "Play Console : tracks, tests internes/fermés, data safety form, politiques monétisation respectées.",
      "Perf mesurée sur devices réels : cold start, scroll, images, mémoire — pas seulement sur émulateur haute gamme.",
      "Matrice de tests représentative : petit écran, stockage faible, réseau instable.",
      "Alignement fonctionnel avec iOS ou React Native selon votre stratégie multi-plateformes.",
      "Observabilité : crash-free sessions, ANR rate, traces sur parcours critiques.",
    ],
    sections: [
      {
        heading: "Qualité, devices et dette technique",
        paragraphs: [
          "Je ne teste pas sur deux cents téléphones, mais sur une matrice représentative : entrée de gamme récent, milieu de gamme, grand écran, et un appareil avec stockage faible. Les ANR et les saccades sur listes sont traités comme des bloquants sur les parcours qui rapportent (panier, réservation, scan, etc.).",
          "La modularisation (features, core domain) permet d’isoler les changements risqués et de paralléliser le travail quand l’équipe grandit. Les dépendances tierces sont inventoriées : mises à jour planifiées, licences, et plan B si une librairie stagne.",
          "Les migrations Gradle et les montées de version SDK sont anticipées : calendar annuel plutôt que panique quand Google impose une targetSdk. Cela réduit le coût caché du « on verra plus tard ».",
        ],
      },
      {
        heading: "Monétisation, permissions et conformité",
        paragraphs: [
          "Abonnements, achats in-app, publicités : chaque modèle impose des contraintes Play et une UX honnête (prix visibles, désabonnement clair, pas de dark patterns). Les permissions sont demandées au moment du besoin, avec justification — la confiance est un actif mesurable.",
          "Le data safety form doit refléter la réalité du traitement des données : collecte minimale, durées, tiers, transferts hors UE si applicable. Je coordonne avec votre DPO ou référent juridique lorsque l’app traite des données sensibles.",
          "Les contenus générés par utilisateurs ou la modération impliquent des politiques Play strictes : je mappe les risques avant développement pour éviter un rejet tardif.",
        ],
      },
      {
        heading: "CI/CD, signatures et livraisons",
        paragraphs: [
          "Pipeline CI qui build, teste et signe avec des secrets isolés. Les artefacts sont versionnés ; les hotfix ont une voie rapide sans casser la branche principale.",
          "Les release notes utilisateur sont rédigées dans un langage clair : correctifs de stabilité, améliorations perf, nouveautés — ce qui réduit les mauvaises notes liées à l’opacité.",
          "Coordination avec le marketing pour les deep links et campagnes : paramètres traçables, pas de chaînes d’URL fragiles.",
        ],
      },
      {
        heading: "Intégration avec votre écosystème digital",
        paragraphs: [
          "Les apps Android prolongent souvent un site e-commerce, un CRM ou un portail client : les sessions, rôles et règles métier doivent rester alignés avec les APIs. Je documente les contrats d’interface et les codes d’erreur pour que le support sache répondre.",
          "Lorsqu’une PWA existe déjà, on évite les doublons de logique : soit la PWA reste le socle acquisition, soit l’app devient le canal principal — la décision doit être explicite pour ne pas maintenir deux produits concurrents sans le vouloir.",
        ],
      },
      {
        heading: "Après le go-live",
        paragraphs: [
          "Je propose une TMA lorsque vous avez besoin de vélocité continue : petites évolutions, correctifs store, veille Play. Les demandes au-delà d’un certain seuil deviennent des mini-projets chiffrés pour protéger votre budget et ma capacité de delivery.",
        ],
      },
    ],
    faq: [
      {
        question: "Compose ou XML : que recommandez-vous ?",
        answer:
          "Compose pour la majorité des UIs neuves ; XML pour legacy ciblé ou composants très spécifiques. Le choix dépend de la dette existante et de la vélocité équipe.",
      },
      {
        question: "Comment réduire les ANR sur le parcours principal ?",
        answer:
          "Profiler le thread UI, déplacer le travail lourd, éviter les I/O synchrones, optimiser images/listes, et traiter les locks sur le main thread. Les ANR sont souvent des bugs de conception, pas seulement de charge.",
      },
      {
        question: "Pouvez-vous aligner une roadmap avec iOS ?",
        answer:
          "Oui : même backlog fonctionnel, mêmes critères d’acceptation, releases décalées mais planifiées. Les divergences OS (permissions, paiement) sont documentées pour le support.",
      },
      {
        question: "Quel niveau de tests pour une app métier ?",
        answer:
          "Pyramide raisonnable : unitaires sur règles métier, intégration sur API, UI tests ciblés sur parcours critiques. Tout automatiser est rarement rentable ; tout manuel est risqué.",
      },
      {
        question: "Shopify / WooCommerce + app Android : classique ?",
        answer:
          "Oui pour parcours compte, commandes, fidélité : je m’aligne sur les pages Sites internet et maintenance e-commerce pour la stabilité des connecteurs.",
      },
    ],
    internalLinks: [
      {
        href: "/applications-mobiles/ios/",
        label: "iOS",
        description:
          "Pour synchroniser une feuille de route cross-platform cohérente.",
      },
      {
        href: "/applications-mobiles/react-native/",
        label: "React Native",
        description:
          "Quand vous voulez mutualiser une large partie du code avec le web.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Quand l’app prolonge un tunnel d’achat web (compte, fidélité, commandes).",
      },
      {
        href: "/blog/",
        label: "Blog",
        description:
          "Guides et veille utiles pour arbitrer natif vs cross-platform.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez intégrations, modèle économique et calendrier release.",
      },
    ],
  },
  "react-native": {
    metaDescription:
      "React Native : app iOS/Android partagée, perf, modules natifs, CI/CD et stores. Idéal avec équipe TypeScript et APIs existantes.",
    eyebrow: "Applications mobiles",
    h1: "React Native : vitesse d’itération iOS/Android avec une seule base.",
    lead:
      "React Native est pertinent quand votre équipe maîtrise TypeScript/React et que vous devez couvrir iOS et Android sans dupliquer toute la logique métier. Ce n’est pas une baguette magique : certains écrans ou SDK exigent des modules natifs, la performance demande de la discipline (listes, images, re-renders), et la release reste double côté Apple et Google. Je mets en place une base industrielle : navigation stable, state management adapté, design tokens partagés avec le web si utile, builds CI, et stratégie de tests réaliste. L’objectif est une vélocité durable, pas une démo rapide suivie d’un mur d’upgrades impossibles.",
    tldr: [
      "Shared UI + logique : gains réels si le périmètre UI reste compatible avec RN.",
      "Profiling : list virtualization, memoization, images responsives, éviter les renders inutiles.",
      "Modules natifs ponctuels pour SDK propriétaires ou APIs OS profondes.",
      "Upgrade policy : versions RN, dépendances, et breaking changes planifiés.",
      "Stores : mêmes exigences légales et privacy que le natif pur.",
      "Observabilité : crash, performance, et analytics alignés produit.",
    ],
    sections: [
      {
        heading: "Quand React Native gagne — et quand le natif reste préférable",
        paragraphs: [
          "RN gagne sur coût et délai quand l’UI est majoritairement standard et que les intégrations OS profondes sont rares. Le natif gagne quand l’OS est central au produit (widgets iOS complexes, pipelines média lourds, Bluetooth bas niveau) ou quand la performance est un critère de vente.",
          "Les projets hybrides existent : noyau RN + écrans natifs ciblés. La frontière doit être documentée pour éviter que chaque feature « urgente » ne devienne un patch natif non maîtrisé.",
          "Je challenge tôt les hypothèses marketing du type « une seule codebase = moitié prix » : le gain est réel sur la majorité du code UI, pas sur la totalité du coût store, QA et design.",
        ],
      },
      {
        heading: "Architecture, navigation et state",
        paragraphs: [
          "Navigation prévisible (deep links, guards d’auth, reset stacks) réduit les bugs de parcours. Le state global vs local est arbitré pour limiter les cascades de renders.",
          "Les appels réseau sont typés, avec retry raisonnable, annulation sur unmount, et messages d’erreur utiles. Les feature flags côté serveur permettent de déployer progressivement.",
          "Les design tokens (couleurs, espacements, typographie) alignent iOS/Android et facilitent la cohérence avec une webapp React existante.",
        ],
      },
      {
        heading: "CI/CD, signatures et qualité",
        paragraphs: [
          "Pipelines pour builds iOS/Android, tests unitaires et lint, et distribution TestFlight / Play internal. Les secrets de signature sont isolés ; les builds reproductibles évitent le « ça marche sur ma machine ».",
          "Tests UI ciblés sur parcours critiques (login, paiement, réservation) complètent la pyramide. Les tests exhaustifs de chaque pixel sont rarement rentables ; l’absence totale de tests UI sur le checkout est risquée.",
        ],
      },
      {
        heading: "Dette d’upgrade et stratégie de versions",
        paragraphs: [
          "Les upgrades React Native peuvent coûter cher si la base est négligée. Je documente versions, peer dependencies, et fenêtres de montée. Expo peut accélérer certains projets ; bare reste pertinent pour contrôle natif poussé — décision au cas par cas.",
          "La roadmap distingue correctifs, refactors nécessaires à la montée de version, et nouvelles features — pour éviter que l’upgrade ne soit repoussé jusqu’à l’impasse.",
        ],
      },
      {
        heading: "Après la V1 : TMA et évolutions",
        paragraphs: [
          "Une TMA permet d’absorber releases, correctifs et petites évolutions sans multiplier les contrats. Les chantiers structurants (refonte navigation, gros module natif) restent des projets chiffrés.",
        ],
      },
    ],
    faq: [
      {
        question: "Expo ou bare workflow ?",
        answer:
          "Expo accélère beaucoup de lancements et simplifie les builds ; bare reste utile pour contrôle natif fin ou modules non supportés. Choix selon modules, équipe et contraintes d’entreprise.",
      },
      {
        question: "React Native est-il assez performant pour notre cas ?",
        answer:
          "Souvent oui pour apps métier et e-commerce moyen ; il faut profiler tôt sur listes lourdes et animations complexes. Si le profiling montre des plafonds, on isole en natif ciblé.",
      },
      {
        question: "Comment gérer deux stores avec une équipe réduite ?",
        answer:
          "Release train, notes utilisateur unifiées côté contenu, et QA checklist partagée. Les divergences OS sont documentées pour le support.",
      },
      {
        question: "Peut-on partager du code avec le web ?",
        answer:
          "Oui sur logique métier et utilitaires ; l’UI reste spécifique mobile. Les limites viennent souvent des APIs navigateur vs OS.",
      },
      {
        question: "Qui maintient après le go-live ?",
        answer:
          "Je propose TMA avec volumétrie définie ; au-delà, mini-projets. La page TMA détaille le cadre backlog/SLA.",
      },
    ],
    internalLinks: [
      {
        href: "/applications-mobiles/ios/",
        label: "iOS natif",
        description:
          "Comparer quand une partie du produit doit basculer natif.",
      },
      {
        href: "/applications-mobiles/pwa/",
        label: "PWA",
        description:
          "Si la distribution store n’est pas encore le levier principal.",
      },
      {
        href: "/ia/chatbot-ia/",
        label: "Chatbot IA",
        description:
          "Pour assistants in-app branchés sur votre base de connaissances.",
      },
      {
        href: "/sites-internet/site-sur-mesure/",
        label: "Site sur mesure",
        description:
          "Quand le même back-office alimente web et mobile.",
      },
      {
        href: "/maintenance/tma/",
        label: "TMA",
        description:
          "Pour absorber releases, correctifs et évolutions après la V1.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez parcours critiques et contraintes stores.",
      },
    ],
  },
  pwa: {
    metaDescription:
      "PWA : installation mobile, offline, push web, perf et SEO. Alternative pragmatique à l’app store quand la distribution URL prime.",
    eyebrow: "Applications mobiles",
    h1: "PWA : distribution immédiate, UX mobile, contraintes assumées.",
    lead:
      "Une Progressive Web App prolonge votre site lorsque vous voulez une icône sur l’écran d’accueil, un mode offline raisonnable, et des mises à jour instantanées sans friction store. Les limites sont réelles : APIs iOS pour push et capteurs, attentes utilisateur sur « app-like » UX, et risques de cache si mal configuré. Je cadrage tôt ce que la PWA peut honnêtement promettre, puis j’aligne perf et SEO technique puisque l’acquisition passe souvent par le web indexable. Quand le store devient nécessaire (confiance, features OS), la roadmap prévoit une transition vers React Native ou natif sans jeter la logique métier existante.",
    tldr: [
      "Service worker + stratégies de cache adaptées au risque (données sensibles, staleness).",
      "UX mobile-first : install prompt, transitions, feedback offline clair.",
      "SEO : URLs propres, contenu indexable, perf CWV — la PWA reste du web.",
      "Sécurité : HTTPS strict, headers, isolation des données utilisateur en cache.",
      "Passerelle vers app native si le store devient un levier acquisition ou conformité.",
      "Mesure : funnel web→install→activation, pas seulement le trafic.",
    ],
    sections: [
      {
        heading: "Cas d’usage où la PWA excelle",
        paragraphs: [
          "Outils internes exposés mobile, programmes terrain, événements, ou produits où le funnel commence par une recherche web. La PWA évite la barrière du store pour tester un marché ou un segment.",
          "Les e-commerces peuvent bénéficier d’une PWA si le checkout est ultra optimisé — sinon le taux d’abandon mobile restera le gouverneur, store ou pas.",
          "Les programmes de fidélité et comptes clients peuvent démarrer en PWA puis migrer vers une app lorsque les notifications push deviennent indispensables sur iOS.",
        ],
      },
      {
        heading: "Offline, cache et cohérence des données",
        paragraphs: [
          "Je définis quelles ressources sont mises en cache, combien de temps, et comment l’utilisateur voit l’état « hors ligne ». Les conflits de synchronisation ont des règles : last-write-wins n’est pas toujours acceptable financièrement ou légalement.",
          "Les mises à jour du service worker sont orchestrées pour éviter les utilisateurs « coincés » sur une vieille version sans comprendre pourquoi le bug persiste.",
        ],
      },
      {
        heading: "Sécurité et conformité",
        paragraphs: [
          "HTTPS strict, politiques de contenu, et prudence sur ce qui est stocké localement (tokens, PII). Les audits basiques de dépendances et headers complètent la picture.",
          "RGPD : consentement analytics, durées de rétention, et documentation des traitements — surtout si la PWA accède à la géolocalisation ou au stockage persistant.",
        ],
      },
      {
        heading: "Performance et SEO",
        paragraphs: [
          "Les Core Web Vitals impactent SEO et conversion : LCP sur hero, INP sur interactions, CLS sur layouts. La PWA n’excuse pas une page lourde.",
          "Les landings d’installation doivent être rapides sur 3G/4G réels — je teste sur devices modestes, pas seulement sur laptop.",
        ],
      },
      {
        heading: "Quand passer au natif ou React Native",
        paragraphs: [
          "Si vous avez besoin de push iOS agressif, d’APIs capteurs profondes, ou d’une présence store pour la confiance B2C, la roadmap doit prévoir une évolution. Je documente la dette à migrer pour éviter une réécriture totale « parce que PWA interdit ».",
        ],
      },
    ],
    faq: [
      {
        question: "Une PWA remplace-t-elle une app native ?",
        answer:
          "Parfois sur une phase 1 ou pour des usages internes ; souvent non sur du B2C exigeant si le store et les notifications sont des leviers majeurs. Le choix dépend du funnel et des APIs requises.",
      },
      {
        question: "Le référencement fonctionne-t-il comme un site classique ?",
        answer:
          "Oui : contenu servi sur des URLs indexables, maillage depuis le reste du site, et bonnes pratiques techniques. Ce qui pose problème, ce sont les apps qui masquent le contenu derrière du JS client fragile.",
      },
      {
        question: "Comment gérer les mises à jour ?",
        answer:
          "Service worker avec stratégie de versionning et message utilisateur lorsqu’une mise à jour critique est disponible. Les équipes support doivent savoir quelle version est en circulation.",
      },
      {
        question: "PWA + e-commerce : pièges fréquents ?",
        answer:
          "Checkout lent, plugins tiers lourds, et caches qui servent des prix obsolètes. Il faut des règles explicites d’invalidation et des tests de promo/stock.",
      },
      {
        question: "Peut-on ajouter des notifications push ?",
        answer:
          "Sur Android souvent oui ; sur iOS les contraintes évoluent — je vérifie la faisabilité avant de promettre un parcours marketing push-first.",
      },
    ],
    internalLinks: [
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "La PWA e-commerce exige un checkout performant et des règles de stock/prix fiables.",
      },
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Indispensable car la PWA reste du web indexable.",
      },
      {
        href: "/applications-mobiles/react-native/",
        label: "React Native",
        description:
          "Si la PWA plafonne et que le store devient nécessaire.",
      },
      {
        href: "/realisations/",
        label: "Réalisations",
        description:
          "Pour voir des mises en situation web/mobile publiées lorsque disponibles.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez besoins offline, push et parcours critiques.",
      },
    ],
  },
};
