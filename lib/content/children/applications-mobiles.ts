import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

export const applicationsMobilesChildBySlug: Record<string, SiloChildPageContent> = {
  ios: {
    metaDescription:
      "Développement app iOS (Swift) : UI native, performances, widgets, intégrations et soumission App Store. Qualité release et accessibilité.",
    eyebrow: "Applications mobiles",
    h1: "Développement iOS natif : Swift, Human Interface Guidelines, production.",
    lead:
      "iOS récompense la cohérence avec les patterns utilisateurs attendus : navigation, gestures, accessibilité Dynamic Type, et gestion du cycle de vie strict. Je développe des apps Swift quand le natif apporte un gain net (APIs bas niveau, widgets, performances extrêmes, expériences très spécifiques) ou quand votre équipe est déjà iOS-first. La release n’est pas une anecdote : signatures, provisioning, privacy nutrition labels, et gestion des rejets font partie du périmètre.",
    tldr: [
      "Swift + patterns Apple : lisibilité long terme pour une équipe iOS.",
      "Qualité : instruments perf, crash reporting, tests parcours critiques.",
      "Store : soumission, metadata, conformité privacy, itérations post-review.",
      "Coordination API avec votre backend web ou Node/Laravel existant.",
    ],
    sections: [
      {
        heading: "Quand le natif iOS est pertinent",
        paragraphs: [
          "Widgets, App Clips, extensions, interactions hardware, ou exigences de fluidité sur listes massives : autant de cas où React Native peut être limite. Je tranche avec un tableau risque/bénéfice et un coût de maintenance réaliste.",
        ],
      },
      {
        heading: "Intégration produit",
        paragraphs: [
          "Auth (OAuth, passkeys), paiement in-app si concerné, offline partiel, deep links marketing : chaque brique est cadrée avec analytics minimal utile.",
        ],
      },
      {
        heading: "Passerelle Android / React Native",
        paragraphs: [
          "Si vous devez couvrir les deux stores sans doubler toute l’UI, React Native peut être plus rationnel : voir la page React Native pour comparer.",
        ],
      },
    ],
    faq: [
      {
        question: "SwiftUI ou UIKit ?",
        answer:
          "Dépend maturité équipe et besoins : SwiftUI accélère certains écrans ; UIKit reste parfois nécessaire pour des composants avancés.",
      },
    ],
    internalLinks: [
      {
        href: "/applications-mobiles/android/",
        label: "Android",
        description:
          "Pour couvrir le duo stores avec une stratégie cohérente de features.",
      },
      {
        href: "/applications-mobiles/react-native/",
        label: "React Native",
        description:
          "Alternative fréquente quand le partage de code prime sur 100 % natif.",
      },
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Les pages marketing et landings d’install bénéficient des mêmes exigences web.",
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
      "Développement app Android (Kotlin) : Material Design, perf, Play Console, modularisation et conformité. Releases et qualité.",
    eyebrow: "Applications mobiles",
    h1: "Android Kotlin : Material, perf et releases sans surprise.",
    lead:
      "L’écosystème Android impose la gestion de la fragmentation raisonnable (versions SDK, tailles d’écran), des permissions explicites, et d’une Play Console de plus en plus stricte. Je construis des apps Kotlin maintenables : architecture claire, tests sur parcours critiques, builds reproductibles, et instrumentation crash/ANR. La cohérence avec votre back-end et votre iOS (si présent) évite les divergences de logique métier.",
    tldr: [
      "Kotlin + guidelines Material quand c’est pertinent au produit.",
      "Play : tracks, staged rollout, data safety, review policies.",
      "Perf : démarrage, listes, images — mesuré sur devices réels.",
      "Alignement features avec iOS/React Native selon stratégie.",
    ],
    sections: [
      {
        heading: "Qualité et devices",
        paragraphs: [
          "Je teste sur une matrice raisonnable (pas 200 téléphones) mais représentative : petit écran, réseau faible, stockage faible. Les ANR et janks sont traités comme des bugs bloquants sur parcours critiques.",
        ],
      },
      {
        heading: "Monétisation et permissions",
        paragraphs: [
          "Abonnements, achats in-app, ads : chaque modèle impose des contraintes Play et UX. Les permissions sont demandées au moment du besoin, avec justification claire.",
        ],
      },
    ],
    faq: [
      {
        question: "Compose ou XML ?",
        answer:
          "Compose pour beaucoup d’UIs neuves ; XML peut rester pour legacy ciblé — choix pragmatique selon équipe et dette.",
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
      "React Native est pertinent quand votre équipe maîtrise déjà TypeScript/React et que vous deux plateformes sans doubler toute la logique métier. Ce n’est pas magique : certains modules restent natifs, la perf demande de la discipline (listes, images, re-renders), et la release reste double (Apple/Google). Je mets en place une base solide : navigation, state, design tokens, builds CI, et stratégie de tests réaliste.",
    tldr: [
      "Shared business logic + UI : gains réels si le périmètre est compatible.",
      "Perf : profiling, memoization, list virtualization quand nécessaire.",
      "Modules natifs ponctuels pour APIs OS spécifiques.",
      "Stores : pipelines et conformité identiques au natif.",
    ],
    sections: [
      {
        heading: "Quand RN gagne vs natif",
        paragraphs: [
          "RN gagne sur vélocité et coût quand l’UI est majoritairement standard et que les APIs OS profondes sont rares. Le natif gagne quand l’OS est le produit (caméra pro, hardware, widgets complexes).",
        ],
      },
      {
        heading: "Dette et upgrades",
        paragraphs: [
          "Les upgrades RN peuvent coûter cher si la base est négligée : je documente versions, breaking changes et stratégie de montée.",
        ],
      },
    ],
    faq: [
      {
        question: "Expo ou bare ?",
        answer:
          "Expo accélère beaucoup de projets ; bare reste utile pour contrôle build natif poussé. Décision selon modules et équipe.",
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
          "Pour assistants in-app branchés sur votre knowledge base.",
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
      "Une Progressive Web App est une extension naturelle de votre site quand vous voulez une icon sur l’écran d’accueil, un offline raisonnable, et des mises à jour instantanées sans passer par les stores. Les limites sont réelles (APIs iOS, push, accès capteurs) : je les cadrage tôt pour éviter les promesses impossibles. La perf et le SEO technique restent centraux car votre acquisition passe souvent par le web.",
    tldr: [
      "Service worker + cache strategies adaptées au risque de données.",
      "UX mobile-first : install prompt, offline honnête, mises à jour.",
      "SEO : le contenu indexable reste sur des URLs propres.",
      "Passerelle vers app native si le store devient nécessaire.",
    ],
    sections: [
      {
        heading: "Cas d’usage PWA",
        paragraphs: [
          "Outils internes exposés mobile, programmes field, événements, ou produits où le funnel commence par le web. Moins adapté si vous avez besoin de notifications push iOS agressives ou d’APIs profondes.",
        ],
      },
      {
        heading: "Sécurité",
        paragraphs: [
          "HTTPS strict, gestion des caches sensibles, et isolation des données utilisateur — surtout si offline.",
        ],
      },
    ],
    faq: [
      {
        question: "PWA remplace-t-il une app ?",
        answer:
          "Parfois oui sur la phase 1 ; souvent non sur le long terme si le store est un levier acquisition/confiance.",
      },
    ],
    internalLinks: [
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "La PWA e-commerce demande une perf checkout irréprochable.",
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
