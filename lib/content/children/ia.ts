import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

export const iaChildBySlug: Record<string, SiloChildPageContent> = {
  "integration-ia": {
    metaDescription:
      "Intégration IA en entreprise : APIs OpenAI/Claude, orchestration, sécurité des données, coûts et monitoring. Mise en production pragmatique.",
    eyebrow: "IA",
    h1: "Intégration IA : brancher des modèles sur vos produits sans chaos.",
    lead:
      "L’intégration IA commence par un problème métier mesurable, pas par une démo ChatGPT. Je conçois des intégrations robustes : choix de modèles adaptés aux contraintes latence/coût, gestion des clés et quotas, logs exploitables, garde-fous anti-fuite et anti-hallucination, reprise humaine quand la confiance est insuffisante, et budgets tokens calibrés sur vos volumes réels. L’architecture relie vos bases documentaires, vos APIs internes et vos interfaces (web, app, CRM) avec des contrats d’interface versionnés — pour que l’IA soit une feature exploitable par le support produit, pas une source d’incidents opaques le vendredi soir.",
    tldr: [
      "APIs (OpenAI, Anthropic, autres) avec politiques de retry, timeouts, budgets et dégradation gracieuse lorsque le fournisseur rate ou ralentit.",
      "Sécurité : classification des données, masquage des champs sensibles, cloisonnement réseau et revue des flux avant envoi vers un LLM tiers.",
      "Observabilité : coût par requête, latence p95/p99, taux d’échec, qualité proxy via échantillons — pas seulement « ça répond ».",
      "Prompts et jeux de tests versionnés comme du code critique : régression quand le modèle ou le prompt change.",
      "Alignement RGPD : bases légales, minimisation, durées — surtout si transcripts ou données clients sont impliqués.",
      "Passerelles naturelles vers RAG ou agents lorsque votre cas dépasse un simple complétion — sans tout fusionner dans un seul monstre.",
    ],
    sections: [
      {
        heading: "Cadrage produit & risques",
        paragraphs: [
          "Je refuse les intégrations « parce que l’IA » sans sponsor métier : on définit critères d’acceptation mesurables, jeux d’évaluation sur cas réels et scénarios de fallback quand le modèle refuse, hors-scope ou hallucine. Les données personnelles et secrets d’entreprise sont traités comme des actifs : flux minimisés, rétention explicitée, et parfois modèles ou hébergements dédiés lorsque votre politique sécurité l’exige.",
          "La valeur business doit être identifiable : temps gagné, tickets évités, conversion améliorée, erreurs réduites — avec une baseline avant intégration.",
        ],
      },
      {
        heading: "Orchestration et stack technique",
        paragraphs: [
          "LangChain, Vercel AI SDK ou orchestration maison selon complexité et compétences internes : l’objectif est la lisibilité du code pour votre équipe, pas un graphe magique incompréhensible. Les workers asynchrones absorbent pics et indisponibilités ; le chemin synchrone reste court pour l’utilisateur final.",
          "Feature flags et pourcentages de rollout permettent de tester sur segments utilisateurs sans big bang risqué.",
        ],
      },
      {
        heading: "Passerelles RAG et agents",
        paragraphs: [
          "Souvent l’intégration évolue vers RAG lorsqu’une base documentaire doit alimenter des réponses sourcées, ou vers des agents lorsqu’il faut enchaîner actions outillées avec permissions — les pages dédiées du silo détaillent ces patterns sans les confondre.",
          "Je déconseille de tout appeler « agent » : la majorité des besoins se résout par RAG + outils étroitement limités avec confirmations sur actions sensibles.",
        ],
      },
      {
        heading: "Exploitation, coûts et amélioration continue",
        paragraphs: [
          "Tables de bord tokens et alertes seuil, comparaison modèles quand plusieurs restent candidates, calibration périodique après changement de pricing fournisseur.",
          "Process de revue humaine sur échantillons pour détecter dérives : le modèle ou le monde réel change, vos garde-fous doivent suivre.",
        ],
      },
      {
        heading: "Collaboration avec vos équipes",
        paragraphs: [
          "Ateliers avec produit, juridique et support pour aligner périmètre IA, ton des réponses et escalade. La qualité perçue par l’utilisateur dépend autant du process métier que du prompt.",
          "Documentation courte mais maintenue : prompts, endpoints, dépendances et contacts incident — pour ne pas créer une dépendance opaque.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte une intégration IA en prod ?",
        answer:
          "Ça dépend du volume de requêtes, du modèle, du ratio cache, de la longueur moyenne des prompts et du coût humain de reprise lorsque l’IA délègue. Je fournis des ordres de grandeur après analyse de scénarios réalistes, puis du monitoring pour ajuster modèles et caches. Une intégration sans tableur coûts + budget cap est une prise de risque inutile.",
      },
      {
        question: "Peut-on commencer par un POC ?",
        answer:
          "Oui, avec périmètre borné et critères de passage en prod : qualité minimale sur jeu de test, latence acceptable, risques données validés. Un POC sans décision GO/NO-GO devient une démo éternelle.",
      },
      {
        question: "Comment limiter les hallucinations ?",
        answer:
          "Instructions claires, RAG lorsque faits vérifiables dans vos docs, citations obligatoires quand pertinent, températures basses pour tâches factuelles, et refus explicite hors périmètre. Aucune couche marketing ne remplace ces garde-fous techniques.",
      },
      {
        question: "Dois-je envoyer mes données à OpenAI aux États-Unis ?",
        answer:
          "Ça dépend contrats fournisseur, clauses DPA, options régionales éventuelles et votre politique interne. Je structure les flux pour éviter fuites accidentelles ; la décision juridique finale revient à votre organisation avec son conseil.",
      },
      {
        question: "OpenAI, Claude ou Mistral : comment choisir ?",
        answer:
          "Selon qualité/latence/coût sur vos cas, contraintes compliance et maturité API. Souvent un mix : modèle rapide pour tri, modèle lourd pour rédaction finale. Je teste sur vos données réelles anonymisées plutôt que sur benchmarks génériques.",
      },
      {
        question: "Comment intégrer l’IA sans dégrader la perf du site ?",
        answer:
          "Streaming progressif, chargement lazy des widgets IA, caches réponses répétitives côté serveur quand acceptable, et isolation des appels pour qu’un pic LLM ne bloque pas le rendu critique du tunnel conversion.",
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
          "Pour aligner contenus publics et citations avec vos usages IA.",
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
      "Un bon chatbot réduit le temps de résolution et les tickets répétitifs ; un mauvais chatbot détruit la confiance en quelques réponses hors-sujet ou inventées. Je conçois des assistants avec périmètre clair, sources lorsque la vérité métier est documentée, style de réponse contrôlé, transfert humain sans friction et tableaux de bord orientés qualité de service (déflection utile, escalades justifiées, erreurs catégorisées). Le ton et les politiques (remboursement, juridique, garanties) sont validés avec vos équipes — l’IA ne remplace pas la gouvernance ; elle l’exécute avec des limites explicites.",
    tldr: [
      "RAG lorsqu’il existe une base de vérité ; sinon on ne sur-vend pas des capacités que le système ne peut pas tenir.",
      "Garde-fous : refus propre, citations sources, logs pour audit, filtres contenus sensibles selon votre secteur.",
      "UX : états de chargement honnêtes, erreurs API compréhensibles, reprise de conversation multi-session.",
      "Analytics orientés résolution et satisfaction proxy — pas vanity metrics du nombre de messages.",
      "Multilingue lorsque pertinent : avec stratégie coûts et évaluation qualité par langue.",
      "Alignement CRM/ticketing : une escalade mal routée coûte plus cher qu’aucun chatbot.",
    ],
    sections: [
      {
        heading: "Parcours support et e-commerce",
        paragraphs: [
          "Sur un site marchand, le chatbot peut aider recherche produit et questions pré-vente ; sur un SaaS B2B, il peut guider onboarding et configuration. Les parcours diffèrent : je les modélise séparément avec intents, seuils d’escalade et scripts cohérents avec vos procédures réelles.",
          "Pour chaque intent fréquent, je vérifie le coût de mauvaise réponse : une erreur sur livraison ou conformité peut être critique — le design doit refléter ce risque.",
        ],
      },
      {
        heading: "Qualité, évaluation et amélioration",
        paragraphs: [
          "Jeux de questions/réponses de référence mis à jour avec vos équipes support ; revues régulières sur conversations problématiques.",
          "Boucle feedback agents humains : sans elle, vous répétez les mêmes erreurs modèle ou contenu.",
        ],
      },
      {
        heading: "Conformité et données conversationnelles",
        paragraphs: [
          "RGPD : base légale, conservation des transcripts, accès et effacement ; alignement avec votre DPO lorsque des données santé ou mineurs sont hors scope strict.",
          "Journalisation proportionnée : suffisante pour audit et litiges, sans coffre ingérable.",
        ],
      },
      {
        heading: "Exploitation et performances",
        paragraphs: [
          "Budget tokens par session, gestion pics marketing (campagnes qui explosent le volume questions), caches FAQ lorsque pertinent.",
          "Tests de charge sur endpoints conversationnels pour éviter crash jour J.",
        ],
      },
      {
        heading: "Passerelles vers autres briques IA",
        paragraphs: [
          "Vers RAG pour documentation interne épaisse ; vers automatisation pour créer tickets structurés plutôt que messages libres incomplets.",
          "Vers GEO côté site public si votre FAQ doit être alignée avec ce que le chatbot affirme.",
        ],
      },
    ],
    faq: [
      {
        question: "Chatbot IA vs chatbot à règles ?",
        answer:
          "Les règles excellent sur des cas fermés et déterministes ; l’IA apporte flexibilité linguistique mais exige garde-fous et données. Souvent un hybride optimal : intention par classifieur ou règles légères + génération contrôlée pour le wording. Je ne vends pas d’IA partout lorsque des arbres décisionnels suffisent.",
      },
      {
        question: "Le chatbot va-t-il remplacer mon support ?",
        answer:
          "Il doit absorber répétitif et qualifier avant humain ; les cas à forte valeur ou sensibles restent humains. La métrique utile est charge support réelle après déploiement, pas le nombre de conversations ouvertes.",
      },
      {
        question: "Comment gérer les prompts juridiquement sensibles ?",
        answer:
          "Réponses pré-approuvées ou templates avec variables contrôlées pour sujets réglementés ; escalade systématique lorsque hors guide. L’IA ne doit pas improviser sur garanties légales ou engagements contractuels non validés.",
      },
      {
        question: "Peut-on connecter Slack, Zendesk ou autre ?",
        answer:
          "Oui via APIs et webhooks ; le design du ticket escaladé (champs obligatoires, pièces jointes) détermine la qualité de la reprise humaine. Sans structure, vous recréez le chaos par un autre canal.",
      },
      {
        question: "Coûts : comment éviter explosion en production ?",
        answer:
          "Caps par utilisateur/session, modèles adaptés au sous-tâche, summarization longues conversations, cache réponses FAQ identiques et monitoring quotidien post-lancement.",
      },
      {
        question: "Comment tester avant mise en ligne publique ?",
        answer:
          "Phase pilote utilisateurs internes puis cohorte clients avec feedback direct ; métriques qualité avant rollout complet. Je recommande aussi shadow mode où l’IA propose mais n’envoie pas encore au client.",
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
      "Un agent qui appelle des APIs (CRM, email, base SQL) sans garde-fous est un incident en attente — parfois financier ou juridique. Je conçois des agents à permissions explicites, budgets de latence et de coût, confirmations sur actions sensibles ou destructrices, et journaux auditables exploitables par votre équipe sécurité ou conformité. Chaque outil exposé au modèle est limité en scope, idempotent lorsque possible et testé comme une intégration critique classique — parce que le LLM devient un utilisateur imprévisible qu’il faut contraindre comme tel.",
    tldr: [
      "Tooling minimal : moins d’outils exposés, plus de maîtrise ; élargissement progressif après mesure.",
      "Confirmations humaines ou second facteur sur actions financières, suppressions ou envois massifs.",
      "Observabilité : traces par enchaînement, coûts agrégés, erreurs typées, retries contrôlés.",
      "Alignement avec automatisation no-code lorsque flux simples — ne pas agentifier un script déterministe pour le buzzword.",
      "Politique de moindre privilège sur tokens et credentials d’API ; rotation et scopes limités.",
      "Scénarios d’échec : que fait l’agent si l’outil retourne ambigu ou partiel ?",
    ],
    sections: [
      {
        heading: "Patterns d’agents et réalisme produit",
        paragraphs: [
          "Planification, réflexion, exécution : je simplifie au maximum pour limiter chemins non déterministes difficiles à debugger. Les agents « généralistes » font rarement bon ménage avec production exigeante : je découpe en workflows cadrés.",
          "Je distingue tâches ouvertes (réponse client) et tâches fermées (mise à jour statut) ; l’agent n’est pas forcément la bonne abstraction pour la seconde.",
        ],
      },
      {
        heading: "Sécurité et gouvernance des actions",
        paragraphs: [
          "Liste blanche d’actions, paramètres validés par schéma, environnements séparés prod/sandbox pour tests.",
          "Pour données personnelles ou secrets : même barrière que pour intégration IA classique — parfois agent interne uniquement sans LLM tiers.",
        ],
      },
      {
        heading: "Orchestration et fiabilité",
        paragraphs: [
          "Retries avec backoff, circuit breakers si un outil tiers flanche, compensation transactions lorsque plusieurs appels doivent rester cohérents.",
          "Timeouts agressifs sur étapes non critiques pour ne pas bloquer l’utilisateur.",
        ],
      },
      {
        heading: "Tests et validation",
        paragraphs: [
          "Jeux de scénarios incluant adversarial (prompt injection côté contenu utilisateur quand pertinent), reprise après erreur partielle, journalisation pour post-mortem.",
          "Critères go-live : taux d’erreur acceptable sur jeu de référence et traçabilité suffisante pour support.",
        ],
      },
      {
        heading: "Économie du run",
        paragraphs: [
          "Modèles appropriés par étape : raisonnement lourd seulement quand nécessaire ; sinon modèles plus petits ou règles.",
          "Coût par action accomplie vs coût humain remplacé — le business case doit survivre à l’audit interne.",
        ],
      },
    ],
    faq: [
      {
        question: "Les agents IA, c’est de la RPA ?",
        answer:
          "Pas exactement : l’agent raisonne en langage naturel et enchaîne des appels ; la RPA est plutôt déterministe et scriptée. On combine parfois les deux : RPA pour parties stables, LLM pour tri ou résumés. L’erreur fréquente est d’étiqueter « agent » une simple chaîne API fixe.",
      },
      {
        question: "Comment réduire le risque d’injection de prompt via contenu utilisateur ?",
        answer:
          "Séparation stricte instructions système / entrée utilisateur, sanitation, tests adversariaux, et parfois modèles spécialisés modération en amont. Aucune solution parfaite : c’est une gestion continue du risque.",
      },
      {
        question: "Doit-on tout logger ?",
        answer:
          "On logge suffisamment pour audit et debug sans stocker secrets en clair ni violer RGPD. La politique de rétention doit être explicite, surtout si conversations contiennent données clients.",
      },
      {
        question: "Quelle latence acceptable ?",
        answer:
          "Ça dépend canal : interne batch vs interface temps réel. Je cible des budgets chiffrés avec vous et j’ajuste nombre d’étapes vs parallélisation.",
      },
      {
        question: "Peut-on partir d’agents open source ?",
        answer:
          "Possible si votre équipe peut maintenir et sécuriser ; coûts GPU/hébergement à comparer aux APIs managées. Le TCO inclut incidents et mises à jour.",
      },
      {
        question: "Comment intégrer validation manager ?",
        answer:
          "Étapes d’approbation explicites dans workflow, notifications, SLA et idempotence si le manager refuse ou tarde — pour ne pas laisser l’action en suspens.",
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
      "L’automatisation échoue quand personne ne sait pourquoi un workflow a agi, ou quand une erreur se propage silencieusement entre systèmes jusqu’à impacter clients ou finances. Je combine LLM et orchestrateurs (n8n, Make) ou workers maison selon criticité : idempotence sur étapes critiques, retries bornés, dead-letter queues, logs structurés et alertes sur échecs répétés. L’IA traite le langage ou classe ; les états financiers et réglementaires restent déterministes lorsque possible — pour garder auditabilité compatible avec votre contrôle interne.",
    tldr: [
      "Choix no-code vs code selon risque, volumétrie et besoin de revue formelle ; bascule progressive vers code pour flux critiques mal observés.",
      "Traçabilité : identifiant de run, entrées/sorties hashées si besoin, version du prompt ou modèle utilisé.",
      "Budgets : limites de coût et de latence par workflow, budgets exceptionnels documentés.",
      "Séparation environnements prod/staging ; jeux de tests avant changement connecteur.",
      "Alignement données : qualité entrante = qualité sortante, l’IA ne « répare » pas une base pourrie.",
      "Escalade humaine sur exceptions : file d’incidents plutôt que boucle automatique aveugle.",
    ],
    sections: [
      {
        heading: "Cas d’usage réalistes",
        paragraphs: [
          "Tri de leads, résumés de tickets, qualification support, extraction de champs depuis emails ou PDF : autant de patterns où l’IA apporte de la valeur si la donnée source est propre et les schémas de sortie validés.",
          "Je disqualifie poliment les cas où l’erreur coûte cher et la donnée est bruyante sans garde humain : ce n’est pas automatisable utilement en l’état.",
        ],
      },
      {
        heading: "Architecture et fiabilité",
        paragraphs: [
          "Découpage en étapes atomiques rejouables, identification idempotente des événements entrants, surveillance files d’attente et age des messages.",
          "Schémas de données stricts à la sortie LLM lorsque possible (JSON validé) pour éviter parsing fragile.",
        ],
      },
      {
        heading: "Exploitation et conformité",
        paragraphs: [
          "Alerting sur workflows en échec prolongé, dashboards volumétrie et coûts tokens indirects.",
          "RGPD : données traitées dans chaque étape, transferts hors UE si applicable — documentés.",
        ],
      },
      {
        heading: "Collaboration métier / IT",
        paragraphs: [
          "Les workflows no-code ont besoin de propriétaires métier ; sinon ils deviennent dette invisible. Je formalise responsabilités et revues trimestrielles minimales.",
          "Je documente dépendances OAuth et leur expiration pour éviter arrêts mystérieux.",
        ],
      },
      {
        heading: "Passerelles vers agents",
        paragraphs: [
          "Quand au-delà du pipeline linéaire il faut décisions conditionnelles complexes avec outils multiples : voir agents IA — mais seulement si justifié.",
        ],
      },
    ],
    faq: [
      {
        question: "Make ou n8n en production, c’est acceptable ?",
        answer:
          "Oui lorsque le workflow est observé, versionné et documenté ; sinon vous accumulez du bricolage critique. Pour flux à risque financier ou fortement réglementé, je tends vers code avec tests ou hybridation maîtrisée — parfois Make pour prototyper puis migration sélective.",
      },
      {
        question: "Comment éviter les doubles traitements ?",
        answer:
          "Clés idempotentes par événement, contraintes base de données, ou verrous courts selon patterns — combinés à reconciliation batch pour attraper résidus.",
      },
      {
        question: "Les LLM dans la chaîne : où placer pour limiter coûts ?",
        answer:
          "En aval d’un filtrage déterministe qui élimine le bruit ; avec summarization intermédiaire ; avec modèles petits pour classification avant gros modèle pour rédaction si nécessaire.",
      },
      {
        question: "Qui maintient les prompts intégrés aux workflows ?",
        answer:
          "Propriétaire nommé côté produit ou ops, avec changelog — comme pour toute logique métier critique. Sinon chaque « petit tweak » casse la prod silencieusement.",
      },
      {
        question: "Peut-on auditer ce qui s’est passé il y a 3 mois ?",
        answer:
          "Si on a défini logs, identifiants et politiques de rétention oui ; sinon non. Je cale le niveau d’audit attendu avec conformité avant de builder.",
      },
      {
        question: "Comment intégrer un ERP instable ?",
        answer:
          "Retries, backoff, circuit breaker et mode dégradé métier explicité ; parfois synchronisation différée acceptable plutôt que synchrone cassant.",
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
      "Le RAG (retrieval-augmented generation) est le pattern le plus rentable pour exploiter PDF, Notion, Confluence, tickets ou fiches produit lorsque les réponses doivent être vérifiables. Je mets en place ingestion contrôlée, découpage intelligent des segments, métadonnées riches, re-scoring, citations obligatoires lorsque pertinent, et boucles d’évaluation avec jeux de questions/réponses de référence. Sans ça, vous obtenez un assistant qui « sonne bien » mais invente ou mélange sources. La sécurité des accès documents par rôle est partie intégrante : un utilisateur ne retrieve que ce qu’il a le droit de lire — sinon vous créez une fuite via le chatbot.",
    tldr: [
      "Qualité et fraîcheur des sources > taille du modèle pour la fiabilité terrain.",
      "Évaluation continue : régression lorsque corpus ou prompts changent.",
      "Permissions strictes au niveau retrieval ; tests sur comptes à privilèges différents.",
      "Passerelles e-commerce pour Q/R produit lorsque données catalogue propres.",
      "Pipeline observable : où une réponse échoue souvent indique chunking ou métadonnées à corriger.",
      "Coûts : caches embeddings, résumés intermédiaires, choix modèle selon étape.",
    ],
    sections: [
      {
        heading: "Pipeline RAG de bout en bout",
        paragraphs: [
          "Ingestion, nettoyage, découpage, embeddings, index, retrieval, rerank éventuel, génération, post-filtres anti-contenu hors-scope : chaque étape a paramètres mesurables et logs pour diagnostiquer.",
          "Multilingue : stratégie embeddings et évaluation qualité par langue — pas de présupposer alignement.",
        ],
      },
      {
        heading: "Échecs typiques et comment les éviter",
        paragraphs: [
          "Chunks trop gros ou trop petits, métadonnées absentes, documents obsolètes non retirés de l’index, absence de citations quand faits attendus : causes classiques de désastre — corrigées par process ingestion et revues.",
          "Ambiguïtés documentaires : parfois la bonne réponse est « selon votre politique interne section X » avec lien — pas synthèse forcée.",
        ],
      },
      {
        heading: "Sécurité et conformité",
        paragraphs: [
          "Filtrage retrieval par utilisateur/groupe ; audit trail minimal ; anonymisation datasets tests.",
          "Données santé ou ultra-sensibles : périmètre technique et juridique avant ingestion massive.",
        ],
      },
      {
        heading: "Évaluation et amélioration",
        paragraphs: [
          "Métriques retrieval (hit rate), métriques génération (exactitude humaine sur échantillon), tests non-régression CI sur corpus figé.",
          "Boucle feedback utilisateurs « cette réponse était-elle utile ? » avec catégories d’erreur.",
        ],
      },
      {
        heading: "Produits et surfaces utilisateur",
        paragraphs: [
          "Chat interne, widget support, assistant recherche docs, ou FAQ dynamique — design UX différent selon latence acceptable et densité sources.",
          "Pour site public : alignement avec ce que vous affichez en HTML pour éviter contradictions SEO vs assistant.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il fine-tuner un modèle ?",
        answer:
          "Souvent non au début : RAG + prompts versionnés + rerank résout une large part du terrain avec moins de risque et plus de traçabilité des changements. Le fine-tuning peut servir plus tard pour ton/style ou domaine très spécifique — après avoir stabilisé données.",
      },
      {
        question: "Comment gérer documents contradictoires ?",
        answer:
          "Politique métier : priorité date, source autorisée, ou escalade humaine lorsque contradiction détectée. Le RAG ne doit pas trancher seul une politique interne non résolue.",
      },
      {
        question: "Quelle base vectorielle choisir ?",
        answer:
          "Selon volumétrie, latence, ops existants (Postgres pgvector vs service managé vs cloud vendor lock-in). Je choisis avec votre équipe infra contraintes SLA et budget.",
      },
      {
        question: "Combien coûte un RAG à l’échelle ?",
        answer:
          "Embeddings ingestion + refresh périodique + requêtes utilisateurs ; caching et fenêtres de mise à jour réduisent fortement coûts. Je modélise avec volumétrie réelle, pas démo.",
      },
      {
        question: "Comment tester sans exposer données sensibles ?",
        answer:
          "Jeux anonymisés, environnement staging, sous-échantillons ; parfois synthétiques pour patterns — en restant conscient que le réel peut surprendre.",
      },
      {
        question: "Le RAG remplace-t-il une base documentaire bien gérée ?",
        answer:
          "Non : il la rend consultable plus vite. Si vos process internes laissent la doc pourrir, le RAG accélère la diffusion du chaos. L’effort gouvernance doc reste indispensable.",
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
      "L’IA e-commerce utile améliore recherche (sémantique), répond aux questions pré-vente avec ancrage catalogue lorsque les données sont fiables, et assiste la rédaction de fiches — avec validation humaine quand l’erreur coûte cher (prix, allégations santé, conformité réglementaire, ton de marque). Je relie ces fonctionnalités au SEO (duplication, unicité, canonical) et à la perf (pas de surcharge client sur chaque interaction). L’objectif mesurable reste un panier plus fluide et moins de tickets pré-vente inutiles — pas un gadget conversationnel sur la home qui rallonge le LCP.",
    tldr: [
      "Recherche sémantique + règles métier de ranking pour ne pas perdre bestsellers sous bruit.",
      "Génération assistée : briefs, variantes contrôlées, validation éditoriale pour risques juridiques.",
      "Garde-fous sur promesses produit ; conformité secteur (santé, finance) traitée sérieusement.",
      "Mesures : conversion panier, tickets évités, temps parcours — pas vanity « conversations ».",
      "SEO : éviter explosions de variantes dupliquées ; canonical et stratégie contenu catégories inchangées dans leur logique.",
      "Données produit sources : sans PIM discipliné, l’IA amplifie les erreurs.",
    ],
    sections: [
      {
        heading: "Cas d’usage prioritaires et réalisme",
        paragraphs: [
          "Q/R produit, comparaisons guidées, recherche par intention (« cadeau pour … », contraintes techniques), assistants configurateur — chaque cas impose données structurées minimum et limites métier.",
          "Je disqualifie usage où votre base produit est inconsistante : mieux vaut corriger données avant d’« IA-up » la vitrine.",
        ],
      },
      {
        heading: "SEO et contenu",
        paragraphs: [
          "Éviter duplication massive par génération non contrôlée : stratégie canonical, contraintes templates, contenus humains sur catégories stratégiques et pages orientation.",
          "Liens contextuels entre guides, blog et fiches sans saturer ancres ; cohérence avec intention requête.",
        ],
      },
      {
        heading: "Performance et UX",
        paragraphs: [
          "Lazy load des widgets IA, server-side lorsque possible pour première réponse, streaming pour perception vitesse.",
          "Fallback si service LLM down : recherche classique ou message honnête, pas spinner infini.",
        ],
      },
      {
        heading: "Risques compliance",
        paragraphs: [
          "Secteurs réglementés : workflow validation humaine et limitations explicites sur claims ; parfois interdiction pure génération libre.",
          "Alignement prix/stock temps réel : éviter réponses contradictoires avec ERP.",
        ],
      },
      {
        heading: "Mesure et itération",
        paragraphs: [
          "AB tests fonctionnalités IA vs baseline sur cohortes ; revue erreurs utilisateurs signalées.",
          "Coûts tokens inclus dans modèle économique du shop si volumes élevés.",
        ],
      },
    ],
    faq: [
      {
        question: "L’IA remplace-t-elle les rédacteurs ?",
        answer:
          "Non : elle assiste et accélère la production ; la validation humaine reste clé sur allégations, conformité et voix de marque. Sur catalogues géants, elle aide à uniformiser données manquantes — pas à inventer attributs critiques.",
      },
      {
        question: "Comment éviter descriptions génériques toutes pareilles ?",
        answer:
          "Briefs riches par produit, contraintes longueur/ton, ajout données spécifiques obligatoires, validation spot et parfois composantes 100 % humaines sur lignes premium.",
      },
      {
        question: "Impact SEO si je génère des milliers de textes ?",
        answer:
          "Risque duplication et dilution qualité ; stratégie d’indexation sélective, canonicals et priorisation pages à forte valeur. Je coordonne avec stratégie SEO globale pour ne pas cannibaliser catégories existantes.",
      },
      {
        question: "Recherche IA vs Algolia ou équivalent ?",
        answer:
          "Souvent complémentaires : moteur classique pour ranking business rules éprouvé + couche sémantique pour intentions floues. Hybrides fréquents avec fallback.",
      },
      {
        question: "RGPD et données clients dans prompts ?",
        answer:
          "Minimisation, anonymisation si possible, contrats fournisseurs IA et parfois hébergement UE — selon votre politique ; pas de prompts sauvages avec PII.",
      },
      {
        question: "Par où commencer à faible risque ?",
        answer:
          "Assistant recherche et FAQ produit sur sous-catalogue pilote avec métriques avant généralisation ; éviter big bang site entier.",
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
