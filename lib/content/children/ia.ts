import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

export const iaChildBySlug: Record<string, SiloChildPageContent> = {
  "integration-ia": {
    metaDescription:
      "Intégration IA en entreprise : APIs OpenAI/Claude, orchestration, sécurité des données, coûts et monitoring. Mise en production pragmatique.",
    eyebrow: "IA",
    h1: "Intégration IA : brancher des modèles sur vos produits sans chaos.",
    lead:
      "L’intégration IA commence par un problème métier mesurable, pas par une démo ChatGPT. Je conçois des intégrations robustes : choix de modèles, gestion des clés, quotas, logs, garde-fous anti-fuite, reprise humaine, et budgets tokens réalistes. L’architecture relie vos bases documentaires, vos APIs internes et vos interfaces (web, app, CRM) avec des contrats d’interface versionnés — pour que l’IA soit une feature, pas une source d’incidents opaques.",
    tldr: [
      "APIs (OpenAI, Anthropic, autres) avec politiques de retry, timeouts et dégradation.",
      "Sécurité : classification données, masquage, cloisonnement réseau.",
      "Observabilité : coût, latence, qualité, escalades.",
      "Documentation prompts/tests comme du code critique.",
    ],
    sections: [
      {
        heading: "Cadrage produit & risques",
        paragraphs: [
          "Je refuse les intégrations « parce que l’IA » sans sponsor métier : on définit critères d’acceptation, jeux d’évaluation, et scénarios de fallback quand le modèle refuse ou hallucine.",
          "Les données personnelles et secrets d’entreprise sont traités comme des actifs : flux minimisés, rétention, et parfois modèles/hébergements spécifiques.",
        ],
      },
      {
        heading: "Orchestration et stack",
        paragraphs: [
          "LangChain ou orchestration maison selon complexité : l’objectif est la lisibilité pour votre équipe. Les workers asynchrones absorbent pics et indisponibilités.",
        ],
      },
      {
        heading: "Passerelles RAG et agents",
        paragraphs: [
          "Souvent l’intégration évolue vers RAG (documents) ou agents (outils) : pages dédiées du silo détaillent ces patterns.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte une intégration IA en prod ?",
        answer:
          "Ça dépend du volume, du modèle et du caching : je fournis des ordres de grandeur après analyse de scénarios, puis du monitoring pour ajuster.",
      },
    ],
    internalLinks: [
      {
        href: "/ia/rag-base-connaissances/",
        label: "RAG & base de connaissances",
        description:
          "Quand vos documents doivent alimenter des réponses sourcées.",
      },
      {
        href: "/ia/agents-ia/",
        label: "Agents IA",
        description:
          "Quand l’IA doit agir sur des outils (CRM, ticketing) avec permissions.",
      },
      {
        href: "/seo/geo-generative-engine-optimization/",
        label: "GEO",
        description:
          "Pour aligner contenus publics et citations avec vos intégrations IA.",
      },
      {
        href: "/crm-outils-metiers/automatisation/",
        label: "Automatisation",
        description:
          "Pour enchaîner LLM avec workflows Make/n8n ou workers maison.",
      },
      {
        href: "/blog/",
        label: "Blog",
        description:
          "Guides et retours d’expérience pour cadrer hallucinations et coûts.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez données, volumes et objectifs mesurables.",
      },
    ],
  },
  "chatbot-ia": {
    metaDescription:
      "Chatbot IA sur mesure : RAG, garde-fous, transfert humain, multilingue et analytics. Support client et interne — coûts maîtrisés.",
    eyebrow: "IA",
    h1: "Chatbot IA : utile pour le support, pas décoratif pour la home.",
    lead:
      "Un bon chatbot réduit le temps de résolution et les tickets répétitifs ; un mauvais chatbot détruit la confiance en 10 secondes. Je conçois des assistants avec périmètre clair, sources (RAG), style de réponse contrôlé, transfert humain sans friction, et tableaux de bord (déflection, escalades, erreurs). Le ton et les politiques (remboursement, juridique) sont validés avec vos équipes — l’IA ne remplace pas la gouvernance.",
    tldr: [
      "RAG quand il y a une base de vérité ; sinon on ne ment pas sur les capacités.",
      "Garde-fous : refus, citations, logs, filtres contenus sensibles.",
      "UX : états de chargement, erreurs API, reprise conversation.",
      "Analytics orientés qualité de service, pas vanity metrics.",
    ],
    sections: [
      {
        heading: "Parcours support et e-commerce",
        paragraphs: [
          "Sur un site marchand, le chatbot peut aider à la recherche produit et aux questions pré-vente ; sur un SaaS B2B, il peut guider l’onboarding. Les parcours diffèrent : je les modélise séparément.",
        ],
      },
      {
        heading: "Conformité",
        paragraphs: [
          "RGPD, conservation, accès DSR : alignés avec votre DPO. Les transcripts peuvent être sensibles : durées de rétention explicites.",
        ],
      },
    ],
    faq: [
      {
        question: "Chatbot IA vs chatbot règles ?",
        answer:
          "Les règles excellent sur des cas fermés ; l’IA apporte la flexibilité linguistique mais exige garde-fous. Souvent un hybride est optimal.",
      },
    ],
    internalLinks: [
      {
        href: "/ia/rag-base-connaissances/",
        label: "RAG",
        description:
          "Pour ancrer les réponses dans vos documents et tickets historiques.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Quand le chatbot vit sur le parcours d’achat et le catalogue.",
      },
      {
        href: "/applications-mobiles/react-native/",
        label: "React Native",
        description:
          "Pour un assistant in-app cohérent avec votre mobile.",
      },
      {
        href: "/seo/redaction-seo/",
        label: "Rédaction SEO",
        description:
          "Pour harmoniser ton de marque et snippets FAQ publics.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Joignez exemples de tickets et volumes.",
      },
    ],
  },
  "agents-ia": {
    metaDescription:
      "Agents IA : outils, permissions, orchestration et sécurité. Automatisation de tâches métier avec reprise humaine et observabilité.",
    eyebrow: "IA",
    h1: "Agents IA : actionner des outils sans perdre le contrôle.",
    lead:
      "Un agent qui appelle des APIs (CRM, email, base SQL) sans garde-fous est un incident en attente. Je conçois des agents à permissions explicites, budgets de latence, confirmations sur actions sensibles, et journaux auditables. Chaque outil est limité (scopes, idempotence) et testé comme une intégration critique — parce que c’en est une.",
    tldr: [
      "Tooling minimal : moins d’outils, plus de maîtrise.",
      "Confirmations humaines sur actions destructrices ou financières.",
      "Observabilité : traces, coûts, erreurs, retries.",
      "Alignement avec automatisation n8n/Make quand pertinent.",
    ],
    sections: [
      {
        heading: "Patterns agents",
        paragraphs: [
          "Planification, réflexion, exécution : je simplifie au maximum pour limiter les chemins non déterministes. Les agents « généralistes » sont rarement une bonne idée en prod.",
        ],
      },
    ],
    faq: [
      {
        question: "Agents = RPA ?",
        answer:
          "Pas exactement : l’agent raisonne en langage ; la RPA est plus déterministe. On combine parfois les deux selon criticité.",
      },
    ],
    internalLinks: [
      {
        href: "/ia/automatisation-ia/",
        label: "Automatisation IA",
        description:
          "Pour enchaîner tâches déterministes + assistance linguistique.",
      },
      {
        href: "/crm-outils-metiers/crm-sur-mesure/",
        label: "CRM sur mesure",
        description:
          "Quand l’agent vit au centre des données commerciales.",
      },
      {
        href: "/ia/integration-ia/",
        label: "Intégration IA",
        description:
          "Socle technique commun : APIs, sécurité, monitoring.",
      },
      {
        href: "/realisations/",
        label: "Réalisations",
        description:
          "Pour voir des mises en situation publiées lorsque disponibles.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Listez outils cibles et actions à risque.",
      },
    ],
  },
  "automatisation-ia": {
    metaDescription:
      "Automatisation IA : n8n, Make, workers et LLM. Workflows métier, files d’attente, idempotence et traçabilité — sans boîte noire.",
    eyebrow: "IA",
    h1: "Automatisation IA : accélérer sans sacrifier la traçabilité.",
    lead:
      "L’automatisation échoue quand personne ne sait pourquoi un workflow a agi, ou quand une erreur se propage silencieusement entre systèmes. Je combine LLM et orchestrateurs (n8n, Make) ou workers maison selon criticité : idempotence, retries, DLQ, logs structurés, et alertes. L’IA traite le langage ou classe ; les états financiers restent déterministes lorsque possible.",
    tldr: [
      "Choix no-code vs code selon risque et volumétrie.",
      "Traçabilité : qui a validé, quelle version de prompt, quelles entrées.",
      "Budgets : limites de coût et de latence par workflow.",
    ],
    sections: [
      {
        heading: "Cas d’usage",
        paragraphs: [
          "Tri de leads, résumés de tickets, qualification support, extraction de champs depuis emails/PDF : autant de patterns où l’IA apporte de la valeur si la donnée source est propre.",
        ],
      },
    ],
    faq: [
      {
        question: "Make/n8n en prod ?",
        answer:
          "Oui si le workflow est observé et versionné ; sinon on bascule progressivement vers du code pour les flux critiques.",
      },
    ],
    internalLinks: [
      {
        href: "/crm-outils-metiers/automatisation/",
        label: "Automatisation (CRM)",
        description:
          "Vue d’ensemble côté outils métiers et intégrations.",
      },
      {
        href: "/ia/agents-ia/",
        label: "Agents IA",
        description:
          "Quand il faut chaîner outils et raisonnement sur des cas ouverts.",
      },
      {
        href: "/ia/integration-ia/",
        label: "Intégration IA",
        description:
          "Socle API, sécurité et gouvernance des clés.",
      },
      {
        href: "/ia/chatbot-ia/",
        label: "Chatbot IA",
        description:
          "Quand l’automatisation alimente aussi des conversations utilisateurs.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez systèmes sources et criticité métier.",
      },
    ],
  },
  "rag-base-connaissances": {
    metaDescription:
      "RAG sur base de connaissances : chunking, embeddings, citations, évaluation et sécurité. Documentation interne, helpdesk et e-commerce.",
    eyebrow: "IA",
    h1: "RAG : réponses ancrées dans vos documents — pas dans l’imaginaire du modèle.",
    lead:
      "Le RAG (retrieval-augmented generation) est le pattern le plus rentable pour exploiter PDF, Notion, Confluence, tickets ou fiches produit. Je mets en place chunking intelligent, métadonnées, re-scoring, citations obligatoires, et boucles d’évaluation (questions/réponses de référence). Sans ça, vous obtenez un chatbot qui « sonne bien » mais invente. La sécurité (accès documents par rôle) est partie intégrante du design.",
    tldr: [
      "Qualité des sources > taille du modèle.",
      "Évaluation continue : régression quand les documents changent.",
      "Permissions : un utilisateur ne retrieve que ce qu’il peut lire.",
      "Passerelle e-commerce pour Q/R produit quand pertinent.",
    ],
    sections: [
      {
        heading: "Pipeline RAG",
        paragraphs: [
          "Ingestion, nettoyage, découpage, embeddings, index, retrieval, rerank, génération, post-filtres. Chaque étape a des paramètres mesurables et des logs.",
        ],
      },
      {
        heading: "Échecs typiques",
        paragraphs: [
          "Chunks trop gros, métadonnées absentes, documents obsolètes non retirés, ou absence de citations : autant de causes de désastre — corrigées par process et tests.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il fine-tuner ?",
        answer:
          "Souvent non au début : le RAG + prompts versionnés règle 80 % des cas avec moins de risque.",
      },
    ],
    internalLinks: [
      {
        href: "/ia/chatbot-ia/",
        label: "Chatbot IA",
        description:
          "Surface utilisateur la plus courante pour exposer un RAG.",
      },
      {
        href: "/seo/geo-generative-engine-optimization/",
        label: "GEO",
        description:
          "Pour citer correctement vos contenus publics dans les réponses IA.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Quand le RAG s’appuie sur catalogue, guides et FAQ produit.",
      },
      {
        href: "/ia/ia-generative-ecommerce/",
        label: "IA générative e-commerce",
        description:
          "Patterns spécifiques fiches produit et recherche.",
      },
      {
        href: "/a-propos/",
        label: "À propos",
        description:
          "Pour valider expérience, méthode et gouvernance de projet.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez volumes documentaires et exigences d’accès.",
      },
    ],
  },
  "ia-generative-ecommerce": {
    metaDescription:
      "IA générative e-commerce : recherche produit, descriptions assistées, Q/R pré-vente. Qualité, conformité et SEO sans cannibalisation.",
    eyebrow: "IA",
    h1: "IA générative e-commerce : vendre plus sans casser la confiance.",
    lead:
      "L’IA e-commerce utile améliore recherche (sémantique), répond aux questions pré-vente avec sources catalogue, et assiste la rédaction de fiches — avec validation humaine quand l’erreur coûte cher (prix, allégations santé, conformité). Je connecte ces features au SEO (duplication, contenu unique) et à la perf (pas de sur-fetch client). L’objectif est un panier plus fluide, pas un gadget sur la home.",
    tldr: [
      "Recherche sémantique + ranking business rules.",
      "Génération assistée : briefs, variantes, contrôle qualité.",
      "Garde-fous juridiques et validation éditoriale.",
      "Mesure : conversion, tickets évités, temps de parcours.",
    ],
    sections: [
      {
        heading: "Cas d’usage prioritaires",
        paragraphs: [
          "Q/R produit, comparaison, guide d’achat dynamique, recherche par intention (« cadeau pour … »). Chaque cas a des données requises et des limites.",
        ],
      },
      {
        heading: "SEO et contenu",
        paragraphs: [
          "Éviter la duplication massée par génération : stratégie de canonical, variantes contrôlées, et contenus humains sur catégories stratégiques.",
        ],
      },
    ],
    faq: [
      {
        question: "L’IA remplace-t-elle les rédacteurs ?",
        answer:
          "Non : elle assiste et accélère ; la validation humaine reste clé sur les allégations et le ton de marque.",
      },
    ],
    internalLinks: [
      {
        href: "/seo/seo-ecommerce/",
        label: "SEO e-commerce",
        description:
          "Pour ne pas sacrifier l’acquisition organique aux expérimentations IA.",
      },
      {
        href: "/ia/rag-base-connaissances/",
        label: "RAG",
        description:
          "Socle technique des réponses ancrées catalogue/docs.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Alignement tunnel, perf checkout et features IA.",
      },
      {
        href: "/maintenance/maintenance-ecommerce/",
        label: "Maintenance e-commerce",
        description:
          "Pour sécuriser mises à jour quand l’IA touche au front catalogue.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Joignez exemples SKU et politiques éditoriales.",
      },
    ],
  },
};
