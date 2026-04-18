import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

export const crmChildBySlug: Record<string, SiloChildPageContent> = {
  "crm-sur-mesure": {
    metaDescription:
      "CRM sur mesure : modèle de données métier, droits, audit trail, intégrations API et UX opérationnelle. Node.js, Laravel, PostgreSQL.",
    eyebrow: "CRM & outils métiers",
    h1: "CRM sur mesure : quand le SaaS générique ne colle pas à votre vente.",
    lead:
      "Un CRM sur mesure se justifie quand vos étapes de vente, vos rôles, vos validations et vos intégrations ne rentrent pas dans un pipeline standard sans contorsion. Je conçois des outils avec modèle de données aligné terrain : comptes, contacts, opportunités custom, contrats, SLA, pièces jointes, exports, et journalisation des actions sensibles. L’objectif est une adoption par les commerciaux et le support — sinon le meilleur schéma SQL ne sert à rien.",
    tldr: [
      "UX opérationnelle : moins de champs inutiles, plus de parcours guidés.",
      "Intégrations : files, idempotence, reprise sur erreur.",
      "Sécurité : rôles, MFA si besoin, audit.",
      "Roadmap : V1 utile, extensions mesurées.",
    ],
    sections: [
      {
        heading: "Périmètre et gouvernance",
        paragraphs: [
          "On cadrage qui crée la donnée, qui la valide, et qui peut la détruire. Les suppressions sont rarement « vraies » : souvent archivage + traçabilité.",
        ],
      },
      {
        heading: "Intégrations",
        paragraphs: [
          "ERP, facturation, emails, calendriers : chaque connecteur a des quotas et des modes dégradés. Voir aussi intégration CRM pour les cas SaaS-first.",
        ],
      },
    ],
    faq: [
      {
        question: "Durée d’un CRM sur mesure ?",
        answer:
          "Dépend du périmètre V1 : souvent plusieurs mois pour un outil sérieux ; un POC peut être plus court mais doit rester représentatif.",
      },
    ],
    internalLinks: [
      {
        href: "/crm-outils-metiers/integration-crm/",
        label: "Intégration CRM",
        description:
          "Quand HubSpot/Salesforce reste le socle mais nécessite couture.",
      },
      {
        href: "/sites-internet/intranet-extranet/",
        label: "Intranet / extranet",
        description:
          "Souvent couplé aux portails clients et espaces partenaires.",
      },
      {
        href: "/maintenance/tma/",
        label: "TMA",
        description:
          "Pour faire évoluer le CRM après le go-live sans chaos.",
      },
      {
        href: "/ia/automatisation-ia/",
        label: "Automatisation IA",
        description:
          "Quand vous voulez enrichir le CRM par résumés, routage ou extraction.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Joignez workflow vente actuel (même sous Excel).",
      },
    ],
  },
  "integration-crm": {
    metaDescription:
      "Intégration CRM : synchronisation bidirectionnelle, webhooks, files d’attente, idempotence et mapping de données. HubSpot, Salesforce, outils internes.",
    eyebrow: "CRM & outils métiers",
    h1: "Intégration CRM : synchroniser sans casser la donnée.",
    lead:
      "Les intégrations CRM échouent par doubles écritures, champs mal mappés, webhooks perdus, et absence d’idempotence. Je conçois des pipelines robustes : files d’attente, retries exponentiels, DLQ, logs structurés, et règles de résolution de conflits (source de vérité). Le but est que votre CRM reflète la réalité commerciale sans forcing manuel quotidien.",
    tldr: [
      "Mapping explicite + transformations testées.",
      "Monitoring : lag, erreurs, volumétrie.",
      "Sécurité : secrets, scopes OAuth, moindre privilège.",
    ],
    sections: [
      {
        heading: "Patterns",
        paragraphs: [
          "Event-driven vs batch : choix selon latence acceptable et volumétrie. Les imports massifs passent souvent par un staging table avant merge.",
        ],
      },
    ],
    faq: [
      {
        question: "Peut-on intégrer un CRM existant sans le remplacer ?",
        answer:
          "Souvent oui : c’est même le cas le plus fréquent — la valeur est dans la couture et la qualité des données.",
      },
    ],
    internalLinks: [
      {
        href: "/crm-outils-metiers/crm-sur-mesure/",
        label: "CRM sur mesure",
        description:
          "Quand l’intégration ne suffit plus et qu’un outil métier doit naître.",
      },
      {
        href: "/crm-outils-metiers/automatisation/",
        label: "Automatisation",
        description:
          "Pour orchestrer tâches et notifications autour du CRM.",
      },
      {
        href: "/ia/automatisation-ia/",
        label: "Automatisation IA",
        description:
          "Quand classification/résumés doivent enrichir le CRM automatiquement.",
      },
      {
        href: "/maintenance/tma/",
        label: "TMA",
        description:
          "Pour faire évoluer connecteurs et règles de synch sur la durée.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Listez systèmes sources et volumétrie.",
      },
    ],
  },
  automatisation: {
    metaDescription:
      "Automatisation métier : Make, n8n, workers Node.js, files d’attente et idempotence. Réduction des tâches manuelles avec traçabilité.",
    eyebrow: "CRM & outils métiers",
    h1: "Automatisation : gagner du temps sans perdre le contrôle.",
    lead:
      "L’automatisation utile remplace des gestes répétitifs avec des règles claires, des logs et des alertes. Je conçois des workflows Make/n8n ou du code Node.js selon criticité : idempotence, retries, garde-fous, et UI minimale pour surveiller. Quand l’IA entre en jeu (classification, résumés), je relie au silo IA pour les limites et au CRM pour l’impact données.",
    tldr: [
      "No-code pour prototyper ; code pour durcir.",
      "Traçabilité : qui a déclenché quoi, et pourquoi.",
      "Budget d’erreur et file d’attente humaine si besoin.",
    ],
    sections: [
      {
        heading: "Cas d’usage",
        paragraphs: [
          "Création de leads depuis formulaires, enrichissement, routage support, synchro stocks/prix, notifications Slack/Teams, et rapports planifiés.",
        ],
      },
    ],
    faq: [
      {
        question: "Make vs n8n ?",
        answer:
          "Dépend contraintes hébergement, gouvernance et intégrations natives — choix pragmatique au cas par cas.",
      },
    ],
    internalLinks: [
      {
        href: "/ia/automatisation-ia/",
        label: "Automatisation IA",
        description:
          "Quand des étapes linguistiques entrent dans le workflow.",
      },
      {
        href: "/crm-outils-metiers/integration-crm/",
        label: "Intégration CRM",
        description:
          "Souvent le cœur des automatisations commerciales.",
      },
      {
        href: "/sites-internet/site-sur-mesure/",
        label: "Site sur mesure",
        description:
          "Quand l’automatisation expose aussi des surfaces web métiers.",
      },
      {
        href: "/blog/",
        label: "Blog",
        description:
          "Pour documenter patterns et limites des automatisations métier.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez triggers et systèmes cibles.",
      },
    ],
  },
};

export const maintenanceChildBySlug: Record<string, SiloChildPageContent> = {
  "maintenance-wordpress": {
    metaDescription:
      "Maintenance WordPress : mises à jour, sécurité, perf, sauvegardes et évolutions. Thème, plugins, WooCommerce — contrat clair.",
    eyebrow: "Maintenance & TMA",
    h1: "Maintenance WordPress : sécurité et perf sans dette silencieuse.",
    lead:
      "WordPress en production exige un rythme de mises à jour (core, plugins, thème), des sauvegardes testées, et une veille sécurité. Je structure une maintenance prévisible : correctifs, montées de version planifiées, monitoring basique, et petites évolutions priorisées. L’objectif est d’éviter le scénario classique « 47 plugins dont la moitié inutiles » qui rend chaque update risquée.",
    tldr: [
      "Inventaire plugins + stratégie de réduction.",
      "Perf : caching, images, DB lente, cron.",
      "Sauvegardes + test de restauration.",
      "Coordination SEO lors des changements d’URL/thème.",
    ],
    sections: [
      {
        heading: "Ce qui est inclus / exclu",
        paragraphs: [
          "Inclus : mises à jour mineures, correctifs, surveillance, conseils. Exclu ou chiffré à part : refonte majeure, nouveau design complet, migrations complexes.",
        ],
      },
    ],
    faq: [
      {
        question: "Fréquence des mises à jour ?",
        answer:
          "Selon risque et trafic : mensuel est courant, parfois plus fréquent pour plugins sensibles (paiement, sécurité).",
      },
    ],
    internalLinks: [
      {
        href: "/sites-internet/site-wordpress/",
        label: "Site WordPress",
        description:
          "Pour comprendre l’empreinte technique maintenue.",
      },
      {
        href: "/seo/migration-seo/",
        label: "Migration SEO",
        description:
          "Si la maintenance inclut des changements d’URL ou de structure.",
      },
      {
        href: "/maintenance/tma/",
        label: "TMA",
        description:
          "Quand vous voulez aussi des évolutions fonctionnelles encadrées.",
      },
      {
        href: "/a-propos/",
        label: "À propos",
        description:
          "Pour valider expérience et méthode sur des stacks WP sensibles.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Listez plugins, hébergeur et incidents récents.",
      },
    ],
  },
  "maintenance-ecommerce": {
    metaDescription:
      "Maintenance e-commerce : paiement, stocks, promos, perf checkout et mises à jour critiques. Shopify, WooCommerce, sur-mesure.",
    eyebrow: "Maintenance & TMA",
    h1: "Maintenance e-commerce : disponibilité = chiffre d’affaires.",
    lead:
      "Un e-commerce tombe pour des raisons banales : certificat PSP, plugin de shipping, promo qui casse le panier, job de stock bloqué. Je mets en place une maintenance orientée risque : monitoring des parcours critiques, sauvegardes avant updates sensibles, checklists release, et coordination SEO quand les URL/catalogue bougent. Les évolutions marketing (landing, campagnes) sont intégrées sans sacrifier la stabilité.",
    tldr: [
      "Checklists checkout + paiement.",
      "Surveillance erreurs 5xx et webhooks.",
      "Jeux de tests promo/stock.",
      "Runbooks incident.",
    ],
    sections: [
      {
        heading: "Haute saison",
        paragraphs: [
          "Black Friday et pics : gel des changements risqués, capacity planning, et communication claire avec marketing.",
        ],
      },
    ],
    faq: [
      {
        question: "Shopify a-t-il besoin de maintenance ?",
        answer:
          "Moins sur l’infra, mais beaucoup sur apps, thème, données et process internes — surtout si vous custom fort.",
      },
    ],
    internalLinks: [
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Pour aligner évolutions produit et stabilité.",
      },
      {
        href: "/seo/seo-ecommerce/",
        label: "SEO e-commerce",
        description:
          "Pour éviter les régressions d’indexation lors des releases catalogue.",
      },
      {
        href: "/maintenance/tma/",
        label: "TMA",
        description:
          "Pour absorber features et correctifs au-delà du purement technique.",
      },
      {
        href: "/ia/ia-generative-ecommerce/",
        label: "IA générative e-commerce",
        description:
          "Quand des features IA côté boutique augmentent le risque de régression.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez stack, PSP et pics saisonniers.",
      },
    ],
  },
  tma: {
    metaDescription:
      "TMA applicative : backlog, SLA, évolutions et correctifs après go-live. Roadmap partagée avec la partie business.",
    eyebrow: "Maintenance & TMA",
    h1: "TMA : faire vivre le produit sans noyer l’équipe en urgence.",
    lead:
      "La TMA (tierce maintenance applicative) combine correctifs, petites évolutions et coordination avec vos priorités business. Un bon cadre définit volumétrie, canaux, SLA et seuil au-delà duquel une demande devient un projet chiffré séparément. Je documente l’existant pour que la vélocité ne dépende pas d’une seule personne.",
    tldr: [
      "Backlog priorisé + critères d’acceptation.",
      "SLA et astreinte si nécessaire.",
      "Séparation correctif vs évolution.",
    ],
    sections: [
      {
        heading: "Pour qui",
        paragraphs: [
          "Produits web métiers, e-commerce, apps et outils internes après une première livraison — quand vous voulez continuer à livrer sans recruter immédiatement.",
        ],
      },
    ],
    faq: [
      {
        question: "TMA vs prestation ponctuelle ?",
        answer:
          "La TMA réduit le coût de context-switch et accélère les petites itérations ; les gros chantiers restent des projets.",
      },
    ],
    internalLinks: [
      {
        href: "/maintenance/infogerance/",
        label: "Infogérance",
        description:
          "Quand infra et supervision rejoignent la maintenance applicative.",
      },
      {
        href: "/sites-internet/site-sur-mesure/",
        label: "Site sur mesure",
        description:
          "Souvent la V1 précédant une TMA sur mesure du même produit.",
      },
      {
        href: "/seo/migration-seo/",
        label: "Migration SEO",
        description:
          "Quand la TMA inclut des évolutions sensibles au référencement.",
      },
      {
        href: "/contact/",
        label: "Contact",
        description:
          "Pour cadrer astreinte et canaux d’escalade.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez charge actuelle et outils suivis.",
      },
    ],
  },
  infogerance: {
    metaDescription:
      "Infogérance : supervision, sauvegardes, mises à jour serveur, sécurité et coordination incidents. Pour sites et apps critiques.",
    eyebrow: "Maintenance & TMA",
    h1: "Infogérance : supervision et sérénité quand le service doit tourner.",
    lead:
      "L’infogérance couvre souvent supervision, sauvegardes, patching OS/runtime, certificats, coordination avec l’hébergeur, et gestion d’incidents. Je clarifie périmètre avec votre équipe IT : ce qui est chez le cloud provider, ce qui est chez vous, et ce qui est chez moi. L’objectif est une boucle d’incident lisible : détection, diagnostic, mitigation, post-mortem actionnable.",
    tldr: [
      "Monitoring uptime + alertes.",
      "Sauvegardes testées.",
      "Patching et durcissement raisonnable.",
    ],
    sections: [
      {
        heading: "Limites",
        paragraphs: [
          "L’infogérance ne remplace pas un SOC complet ni une équipe interne sur des systèmes ultra réglementés — mais elle comble souvent un trou opérationnel après mise en ligne.",
        ],
      },
    ],
    faq: [
      {
        question: "Cloud managé encore besoin d’infogérance ?",
        answer:
          "Souvent oui au niveau applicatif : ce n’est pas parce que l’infra est managée que vos jobs, queues et déploiements se surveillent seuls.",
      },
    ],
    internalLinks: [
      {
        href: "/maintenance/maintenance-ecommerce/",
        label: "Maintenance e-commerce",
        description:
          "Quand l’infogérance se couple à un tunnel d’achat critique.",
      },
      {
        href: "/crm-outils-metiers/crm-sur-mesure/",
        label: "CRM sur mesure",
        description:
          "Pour les outils métiers hébergés et supervisés en continu.",
      },
      {
        href: "/contact/",
        label: "Contact",
        description:
          "Pour cadrer astreinte, accès et conformité.",
      },
      {
        href: "/maintenance/tma/",
        label: "TMA",
        description:
          "Quand supervision et évolutions applicatives vont de pair.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez stack, hébergeur et incidents passés.",
      },
    ],
  },
};
