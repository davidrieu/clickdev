import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

export const crmChildBySlug: Record<string, SiloChildPageContent> = {
  "crm-sur-mesure": {
    metaDescription:
      "CRM sur mesure : modèle de données métier, droits, audit trail, intégrations API et UX opérationnelle. Node.js, Laravel, PostgreSQL — adoption commerciale et traçabilité.",
    eyebrow: "CRM & outils métiers",
    h1: "CRM sur mesure : quand le SaaS générique ne colle pas à votre vente.",
    lead:
      "Un CRM sur mesure se justifie quand vos étapes de vente, vos rôles, vos validations et vos intégrations ne rentrent pas dans un pipeline standard sans contorsion. Je conçois des outils dont le modèle de données colle au terrain : comptes, contacts, opportunités personnalisées, contrats, SLA, pièces jointes, exports contrôlés, et journalisation des actions sensibles. L’objectif premier est l’adoption par les commerciaux et le support : un écran trop complexe ou trop lent tue l’outil avant même la première démo réussie. La technique sert ce résultat : performances sur listes filtrées, droits fins, workflows de validation, et intégrations robustes vers ERP, facturation et calendriers — avec des modes dégradés honnêtes quand un service tiers est indisponible.",
    tldr: [
      "UX opérationnelle : parcours guidés, champs utiles, états vides explicites — moins de saisie pour plus de signal.",
      "Intégrations : files, idempotence, reprise sur erreur, logs structurés — la donnée doit survivre aux pics et aux API instables.",
      "Sécurité : rôles, MFA si pertinent, audit trail sur actions financières ou suppressions.",
      "Roadmap : V1 livrable en production, extensions mesurées — éviter le « big bang » six mois sans mise en mains terrain.",
      "Données : qualité (doublons, normalisation), imports contrôlés, et règles de fusion sans casser l’historique.",
      "Exploitation : runbooks, sauvegardes, monitoring minimal — lien naturel avec TMA et infogérance selon votre hébergement.",
    ],
    sections: [
      {
        heading: "Cadrage : périmètre, gouvernance et propriété des données",
        paragraphs: [
          "On commence par qui crée la donnée, qui la valide, qui peut la modifier ou l’archiver. Les suppressions « définitives » sont rares en B2B sérieux : on préfère archivage, soft delete, et traçabilité — surtout lorsque la donnée alimente la facturation ou des engagements contractuels.",
          "Les rôles (commercial, manager, finance, support) ont des vues différentes : un manager ne doit pas être noyé sous les mêmes filtres qu’un SDR. Les workflows de validation (remises exceptionnelles, dérogations) sont modélisés avec SLA et notifications ciblées.",
          "Les intégrations ERP/PIM/facturation sont listées avec volumétrie, latence acceptable, et source de vérité en cas de conflit. Sans cette règle, vous recréez Excel par-dessus le CRM en quelques semaines.",
        ],
      },
      {
        heading: "Modèle de données et évolutivité",
        paragraphs: [
          "Le schéma doit supporter vos segments, vos produits complexes, et vos canaux (direct, partenaire, inbound). Je évite la sur-abstraction qui rend chaque évolution coûteuse, tout en gardant des points d’extension (custom fields contrôlés, entités métier versionnées).",
          "Les exports et rapports sont anticipés : agrégations lourdes passent souvent par des jobs asynchrones plutôt que par des requêtes interactives qui tuent l’UX.",
          "La migration depuis Excel/Sheets ou un ancien outil est planifiée : nettoyage, mapping, phases de double saisie si nécessaire — pour ne pas importer la dette dans le nouveau système.",
        ],
      },
      {
        heading: "Intégrations : files, webhooks, idempotence",
        paragraphs: [
          "Chaque connecteur a des quotas, des timeouts, et des modes dégradés. Les webhooks sont signés, rejouables, et journalisés ; les imports massifs passent par des tables de staging avant merge pour éviter les états intermédiaires incohérents visibles par les utilisateurs.",
          "La page Intégration CRM détaille les patterns SaaS (HubSpot, Salesforce) ; ici l’accent est sur l’outil sur mesure qui devient la colonne vertébrale quand le SaaS ne suffit plus.",
          "L’observabilité applicative (latence API, taux d’erreur, lag de synchro) est exposée à l’équipe ops — pas seulement aux devs.",
        ],
      },
      {
        heading: "Sécurité, conformité et exploitation",
        paragraphs: [
          "MFA pour les comptes sensibles, journalisation des accès, et principe du moindre privilège sur les tokens d’API. Les pièces jointes passent par un stockage contrôlé (virus scan, taille, types MIME).",
          "RGPD : durées de conservation, droit d’accès, et minimisation des exports. Je coordonne avec votre référent lorsque des données santé/finances imposent des contraintes supplémentaires.",
          "Les sauvegardes et plans de reprise font partie du périmètre lorsque j’héberge ou co-héberge : tests de restauration documentés.",
        ],
      },
      {
        heading: "Livraison, formation courte et TMA",
        paragraphs: [
          "La V1 est déployée sur un périmètre pilote avec critères de succès (temps de création d’opportunité, complétude des champs, taux d’erreur). La formation reste courte et orientée tâches — la doc interne porte le reste.",
          "Une TMA post go-live absorbe correctifs et petites évolutions ; les chantiers structurants deviennent des mini-projets chiffrés pour protéger budget et planning.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de temps pour un CRM sur mesure sérieux ?",
        answer:
          "Souvent plusieurs mois pour une V1 exploitable selon périmètre et qualité des données sources. Un POC court peut valider l’UX et un flux critique, mais ne doit pas être trompeur sur la complexité des intégrations.",
      },
      {
        question: "Pourquoi ne pas rester sur un SaaS du marché ?",
        answer:
          "Quand le pipeline standard casse votre réalité (segments, commissions, validations juridiques), le SaaS devient un contorsionneur coûteux. Le sur-mesure aligne l’outil sur le process — à condition d’assumer la roadmap produit comme pour un logiciel interne.",
      },
      {
        question: "Comment éviter que le projet dérape fonctionnellement ?",
        answer:
          "Backlog priorisé, critères d’acceptation par incrément, et décisions écrites sur les sujets structurants (modèle de données, règles de conflit). Les demandes « hors périmètre » sont explicitement reclassées en évolution ou en autre projet.",
      },
      {
        question: "Qui maintient après la livraison ?",
        answer:
          "Je propose une TMA avec volumétrie et canaux d’escalade. Les incidents P1 ont un runbook ; le reste suit le backlog.",
      },
      {
        question: "Peut-on intégrer de l’IA (résumés, routage) plus tard ?",
        answer:
          "Oui, si le modèle de données et les logs sont sains. Voir Automatisation IA et Chatbot IA pour les garde-fous.",
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
      "Les intégrations CRM échouent par doubles écritures, champs mal mappés, webhooks perdus, et absence d’idempotence. Je conçois des pipelines robustes : files d’attente, retries exponentiels, DLQ, logs structurés, et règles de résolution de conflits avec une source de vérité explicite. L’objectif est simple à formuler et difficile à tenir : le CRM reflète la réalité commerciale sans forcing manuel quotidien. Cela impose une discipline sur les schémas (versions d’API), les transformations (normalisation téléphone/SIRET), et la surveillance (lag, taux d’erreur, volumétrie) — avec des tableaux de bord compris par le métier, pas seulement par les développeurs.",
    tldr: [
      "Mapping versionné : chaque champ a un propriétaire, une transformation testée, et un comportement si la donnée est absente ou invalide.",
      "Idempotence : rejouer un webhook ou un batch ne doit pas créer de doublons ni d’états impossibles.",
      "Monitoring : lag de synchro, erreurs par connecteur, volumétrie — alertes actionnables.",
      "Sécurité : secrets rotatifs, scopes OAuth minimaux, journalisation des accès admin.",
      "Gouvernance : qui valide un changement de mapping en production ?",
      "Tests : jeux de données représentatifs + scénarios de conflit (même lead créé côté web et côté import).",
    ],
    sections: [
      {
        heading: "Patterns d’intégration : événements, batch, hybride",
        paragraphs: [
          "L’event-driven convient quand la latence doit rester faible et que les volumes sont maîtrisables. Le batch reste pertinent pour recomputations, rapprochements massifs, ou systèmes legacy sans webhooks fiables.",
          "Les imports massifs passent souvent par une table de staging : validation, déduplication, puis merge contrôlé — plutôt que d’écrire directement dans les entités métier.",
          "Les intégrations hybrides combinent temps réel pour le critique (création lead) et batch pour le reste (scores, agrégats). Le point clé est que l’utilisateur comprenne l’état : « à jour il y a 2 min » vs silence opaque.",
        ],
      },
      {
        heading: "Conflits, qualité de données et réconciliation",
        paragraphs: [
          "Sans règle de priorité, deux systèmes « disent vrai » en même temps. Je formalise la source de vérité par entité et par attribut quand nécessaire (ex. finance > commercial sur le SIREN).",
          "La qualité (formats, doublons, champs obligatoires) est traitée en amont : mieux vaut rejeter une ligne avec message clair que polluer le CRM.",
          "Les outils de détection de doublons et les rapports de qualité hebdomadaires stabilisent la donnée sur la durée.",
        ],
      },
      {
        heading: "Sécurité, conformité et exploitation",
        paragraphs: [
          "Secrets hors repo, rotation, et principe du moindre privilège. Les tokens CRM sont scopes au strict nécessaire ; les accès admin sont journalisés.",
          "RGPD : minimisation, durées, droit d’accès — surtout si vous synchronisez des données prospects issues de formulaires.",
          "Runbooks incident : quand couper la synchro, comment rejouer la DLQ, comment communiquer au métier sans jargon.",
        ],
      },
      {
        heading: "Passage en production et TMA",
        paragraphs: [
          "Plan de bascule avec fenêtre, rollback, et critères de succès mesurables. Après go-live, une TMA permet d’ajuster mappings et règles sans multiplier les contrats d’urgence.",
        ],
      },
    ],
    faq: [
      {
        question: "Peut-on intégrer un CRM existant sans le remplacer ?",
        answer:
          "Oui : c’est le cas le plus fréquent. La valeur est dans la couture, la qualité des données, et la réduction du travail manuel entre systèmes.",
      },
      {
        question: "HubSpot vs Salesforce : même approche ?",
        answer:
          "Mêmes principes (mapping, idempotence, monitoring), APIs et limites différentes. L’effort se déplace sur les objets natifs, quotas, et patterns d’authentification.",
      },
      {
        question: "Comment éviter les boucles infinies de synchro ?",
        answer:
          "Garde-fous (flags de provenance), debouncing, et règles explicites sur les champs « écoutés ». Les webhooks bidirectionnels sont les plus sensibles : il faut des états et des versions.",
      },
      {
        question: "Qui maintient les connecteurs sur 12–24 mois ?",
        answer:
          "Je recommande une TMA avec volumétrie : APIs tierces évoluent, les champs CRM changent, et les règles métier aussi.",
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
      "Automatisation métier : Make, n8n, workers Node.js, files d’attente et idempotence. Réduction des tâches manuelles avec traçabilité et budgets d’erreur.",
    eyebrow: "CRM & outils métiers",
    h1: "Automatisation : gagner du temps sans perdre le contrôle.",
    lead:
      "L’automatisation utile remplace des gestes répétitifs par des règles claires, des logs exploitables et des alertes quand le système dévie. Je conçois des workflows Make/n8n ou du code Node.js selon criticité : idempotence, retries, budgets d’erreur, et file d’attente humaine lorsque l’exception est métier et non technique. Quand l’IA entre en jeu (classification, résumés), je relie au silo IA pour les limites (hallucinations, données sensibles) et au CRM pour l’impact données (qualité, traçabilité). Le piège classique est l’empilement de zaps sans ownership : je documente propriétaire métier, dépendances, et seuils au-delà desquels une demande devient un projet logiciel.",
    tldr: [
      "No-code pour prototyper vite ; code pour durcir ce qui est critique ou volumineux.",
      "Traçabilité : qui a déclenché quoi, avec quel payload, et quel résultat — indispensable pour auditer une erreur commerciale.",
      "Budget d’erreur : file humaine, reprises manuelles, et règles d’escalade.",
      "Sécurité : secrets, scopes, moindre privilège — surtout quand les workflows touchent la finance.",
      "Performance : éviter les chaînes synchrones fragiles ; isoler les étapes lourdes.",
      "Tests : scénarios réels + jeux de données sales (anonymisés) avant production.",
    ],
    sections: [
      {
        heading: "Cas d’usage : du lead au rapport, sans casser la qualité",
        paragraphs: [
          "Création de leads depuis formulaires web, enrichissement contrôlé, routage vers le bon commercial selon règles métier, synchro stocks/prix, notifications Slack/Teams, rapports planifiés vers la direction — autant de patterns qui échouent si la donnée source est sale ou si les règles de conflit sont floues.",
          "Les workflows « marketing → CRM → finance » nécessitent des points de validation humaine sur les montants et les remises exceptionnelles.",
          "Les automatisations support (création ticket, tagging) réduisent le bruit si elles sont supervisées : sinon elles masquent les vrais incidents.",
        ],
      },
      {
        heading: "Fiabilité : idempotence, retries, DLQ",
        paragraphs: [
          "Un webhook rejoué ne doit pas créer de doublons. Les retries exponentiels protègent les systèmes tiers ; la DLQ conserve les messages en échec pour analyse et rejeu contrôlé.",
          "Les jobs planifiés ont des fenêtres, des timeouts, et des garde-fous volumétriques pour ne pas saturer la base.",
        ],
      },
      {
        heading: "Observabilité et exploitation",
        paragraphs: [
          "Tableaux de bord simples : taux de succès, latence, erreurs par étape. Les alertes doivent pointer vers une action (rejeu, correctif mapping), pas vers un dump illisible.",
          "Les changements de règles passent par une validation (PR ou checklist) pour éviter qu’un clic no-code ne transforme un pipeline de production.",
        ],
      },
      {
        heading: "IA dans les workflows : où ça aide, où ça risque",
        paragraphs: [
          "Résumés, extraction d’entités, tri de tickets : utile si les documents sources sont fiables et si une validation existe sur les cas sensibles. Je relie aux pages IA du site pour cadrer coûts et conformité.",
        ],
      },
    ],
    faq: [
      {
        question: "Make ou n8n : comment choisir ?",
        answer:
          "Dépend hébergement, gouvernance, intégrations natives, et besoin d’auto-hébergement. Les deux peuvent prototyper ; le durcissement se fait souvent en code pour la partie critique.",
      },
      {
        question: "Peut-on tout automatiser ?",
        answer:
          "Non : certaines décisions restent humaines (litiges, remises majeures, cas juridiques). L’automatisation doit réduire la charge, pas supprimer la responsabilité.",
      },
      {
        question: "Comment éviter les silos d’automatisations opaques ?",
        answer:
          "Documentation, ownership métier, et revues périodiques. Si personne ne comprend le workflow, il devient une dette dès le premier incident.",
      },
      {
        question: "Que se passe-t-il si une API tierce change ?",
        answer:
          "Versioning, tests de non-régression, et TMA pour adapter les mappings — prévu dès le cadrage.",
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
      "Maintenance WordPress : mises à jour, sécurité, perf, sauvegardes et évolutions. Thème, plugins, WooCommerce — contrat clair et réduction de dette.",
    eyebrow: "Maintenance & TMA",
    h1: "Maintenance WordPress : sécurité et perf sans dette silencieuse.",
    lead:
      "WordPress en production exige un rythme de mises à jour (core, plugins, thème), des sauvegardes testées, et une veille sécurité réaliste. Je structure une maintenance prévisible : correctifs, montées de version planifiées, monitoring basique, et petites évolutions priorisées dans un backlog partagé. L’objectif est d’éviter le scénario classique « dizaines de plugins dont la moitié inutiles » qui rend chaque update risquée et coûteuse. La performance (caching, images, requêtes lentes, cron) et le SEO technique (changements d’URL, canonicals) sont intégrés au cadre : une mise à jour ne doit pas être une loterie pour votre trafic ou votre tunnel de conversion.",
    tldr: [
      "Inventaire plugins + stratégie de réduction : moins de surface d’attaque, moins de conflits.",
      "Perf : caching adapté, images responsives, audit DB, cron maîtrisés.",
      "Sauvegardes chiffrées + test de restauration documenté.",
      "Coordination SEO lors des changements d’URL, de thème ou de structure.",
      "Runbooks incident : site blanc, erreur critique plugin, rollback.",
      "Communication : fenêtres de maintenance, impacts marketing connus.",
    ],
    sections: [
      {
        heading: "Ce qui est inclus, ce qui est chiffré à part",
        paragraphs: [
          "Inclus typiquement : mises à jour mineures, correctifs de sécurité, surveillance de disponibilité basique, conseils d’architecture plugin, et petites corrections d’affichage. Exclu ou projet séparé : refonte design complète, migration majeure de contenu, refonte e-commerce lourde, ou audit SEO complet — pour garder un contrat lisible.",
          "Les demandes « urgentes » passent par un canal défini avec critères de priorité ; sinon tout devient P0 et la dette repart.",
          "Les environnements staging/prod sont séparés : aucune expérimentation directe en production.",
        ],
      },
      {
        heading: "Sécurité : surface d’attaque et bonnes pratiques",
        paragraphs: [
          "Comptes admin limités, MFA, désactivation des comptes inutiles, et revue des rôles éditeurs. Les formulaires publics sont protégés (spam, rate limiting) selon votre trafic.",
          "Veille CVE sur plugins critiques (paiement, membership, sécurité). Les correctifs sont testés sur staging avec scénarios WooCommerce/checkout si concerné.",
        ],
      },
      {
        heading: "Performance et fiabilité",
        paragraphs: [
          "Objectifs Core Web Vitals sur pages clés, pas seulement sur la home. Les thèmes « page builders » lourds sont arbitrés : parfois un chantier de simplification vaut mieux qu’un cache agressif qui masque le problème.",
          "Les jobs cron et imports (stocks, flux) sont surveillés : une tâche bloquée peut saturer la base et faire tomber tout le site.",
        ],
      },
      {
        heading: "Sauvegardes, mises à jour et coordination SEO",
        paragraphs: [
          "Sauvegardes avant toute montée sensible ; test de restauration trimestriel minimum. Les changements d’URL passent par redirections et validation Search Console.",
          "Coordination avec vos équipes marketing lors des campagnes : fenêtre de gel si nécessaire.",
        ],
      },
    ],
    faq: [
      {
        question: "À quelle fréquence mettre à jour ?",
        answer:
          "Souvent mensuel pour un rythme sain ; plus fréquent si plugins sensibles (paiement, membership) ou si une CVE critique sort. L’important est un calendrier, pas l’improvisation.",
      },
      {
        question: "WordPress est-il « mauvais pour le SEO » ?",
        answer:
          "Non par défaut : ce sont thème lourd, plugins inutiles, hébergement sous-dimensionné, et absence de discipline technique qui posent problème. Un WP bien architecturé peut très bien performer.",
      },
      {
        question: "Que faire si le site a déjà beaucoup de plugins ?",
        answer:
          "Audit, désactivation progressive, remplacement par des briques plus stables, et parfois refonte ciblée d’une partie du site. C’est un chantier planifié, pas un big bang un vendredi soir.",
      },
      {
        question: "Inclut-on WooCommerce ?",
        answer:
          "Oui si c’est votre stack : checkout, paiement, promos, stocks — avec checklists release dédiées.",
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
      "Maintenance e-commerce : paiement, stocks, promos, perf checkout et mises à jour critiques. Shopify, WooCommerce, sur-mesure — pics saisonniers.",
    eyebrow: "Maintenance & TMA",
    h1: "Maintenance e-commerce : disponibilité = chiffre d’affaires.",
    lead:
      "Un e-commerce tombe pour des raisons banales : certificat PSP, plugin de shipping, promo qui casse le panier, job de stock bloqué, webhook ERP en échec silencieux. Je mets en place une maintenance orientée risque : monitoring des parcours critiques, sauvegardes avant updates sensibles, checklists release, et coordination SEO quand les URL ou le catalogue bougent. Les évolutions marketing (landings, campagnes) sont intégrées sans sacrifier la stabilité : gel des changements risqués en haute saison, capacity planning, et communication claire entre tech et marketing. L’objectif est un tunnel d’achat mesurable (erreurs paiement, latence checkout, taux d’abandon par étape) — pas seulement un uptime homepage vert.",
    tldr: [
      "Checklists checkout + paiement + compte client sur chaque release.",
      "Surveillance erreurs 5xx, webhooks, jobs de synchro stock/prix.",
      "Jeux de tests promo/stock (codes, dates, règles cumulables ou non).",
      "Runbooks incident : PSP down, panier cassé, pics de charge.",
      "Coordination SEO e-commerce lors des changements catalogue/URL.",
      "Shopify/Woo/sur-mesure : patterns différents, discipline identique.",
    ],
    sections: [
      {
        heading: "Haute saison et gestion du risque release",
        paragraphs: [
          "Black Friday et pics : gel des changements non essentiels, renfort monitoring, et communication interne sur ce qui peut encore bouger. Les promos sont testées avec scénarios réalistes (panier ouvert + changement de promo + stock).",
          "Les déploiements sont planifiés hors fenêtres critiques lorsque possible ; les hotfix ont une voie rapide documentée.",
        ],
      },
      {
        heading: "Paiement, fraude et conformité",
        paragraphs: [
          "3DS, refus PSP, gestion des remboursements partiels : chaque cas a un message utilisateur et un log exploitable côté support. Les règles anti-fraude (velocity, pays) sont coordonnées avec votre risque.",
          "PCI : minimiser la surface (hosted fields, redirect) et ne jamais stocker ce qui n’est pas indispensable.",
        ],
      },
      {
        heading: "Stocks, ERP/PIM et cohérence catalogue",
        paragraphs: [
          "Les synchros ont des états visibles (retard acceptable, erreur, reprise). Les imports massifs passent par des phases de validation pour éviter d’afficher des prix ou stocks faux.",
        ],
      },
      {
        heading: "Performance et SEO e-commerce",
        paragraphs: [
          "Le checkout doit rester léger : images, scripts tiers, A/B tests — tout est arbitré avec mesure. Les changements de structure d’URL ou de filtres passent par une validation SEO pour éviter les trous d’indexation.",
        ],
      },
    ],
    faq: [
      {
        question: "Shopify nécessite-t-il de la maintenance ?",
        answer:
          "Moins sur l’infra managée, mais beaucoup sur apps, thème, données, intégrations et process interne — surtout si vous custom fort ou si vous avez des workflows ERP.",
      },
      {
        question: "Comment prioriser correctifs vs features marketing ?",
        answer:
          "Backlog partagé avec critères business + risque. Les régressions checkout passent avant une nouvelle bannière hero.",
      },
      {
        question: "Que mesurer le premier mois après une release ?",
        answer:
          "Taux d’erreur paiement, latence checkout, abandons par étape, erreurs 5xx sur parcours critiques, et signaux SEO (impressions/couverture) — pas uniquement le CA.",
      },
      {
        question: "WooCommerce : pièges fréquents ?",
        answer:
          "Plugins de shipping/paiement en conflit, cron bloqués, sessions panier, et mises à jour non testées sur staging. La maintenance structurée réduit ces incidents.",
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
      "TMA applicative : backlog, SLA, évolutions et correctifs après go-live. Roadmap partagée avec la partie business et seuils de projet.",
    eyebrow: "Maintenance & TMA",
    h1: "TMA : faire vivre le produit sans noyer l’équipe en urgence.",
    lead:
      "La TMA (tierce maintenance applicative) combine correctifs, petites évolutions et coordination avec vos priorités business. Un bon cadre définit volumétrie mensuelle, canaux de demande, SLA par sévérité, et le seuil au-delà duquel une demande devient un projet chiffré séparément — pour éviter que « une petite évolution » ne morde 40 % du temps sans visibilité budget. Je documente l’existant (repos, déploiements, accès, dépendances) pour que la vélocité ne repose pas sur une seule tête. Les releases restent traçables : changelog, recette minimale, rollback quand c’est pertinent.",
    tldr: [
      "Backlog priorisé avec critères d’acceptation et propriétaire métier par item.",
      "SLA et astreinte si nécessaire — avec définition claire de P1/P2/P3.",
      "Séparation correctif vs évolution : deux files ou deux budgets mentaux.",
      "Rituels : revue hebdo courte, démo régulière, décisions écrites sur les arbitrages.",
      "Qualité : dette technique traitée par petites doses planifiées.",
      "Transparence : temps passé vs prévision, pour ajuster le cadre contractuel.",
    ],
    sections: [
      {
        heading: "Pour qui : webapp métier, e-commerce, mobile, outils internes",
        paragraphs: [
          "Après une première livraison, beaucoup d’équipes veulent continuer à livrer sans recruter immédiatement. La TMA absorbe correctifs et petites features si le cadre est clair ; sinon chaque demande devient une négociation.",
          "Les produits critiques (tunnel d’achat, outil de vente) bénéficient d’un runbook incident et d’une fenêtre d’astreinte définie.",
          "Les outils internes moins critiques peuvent fonctionner avec SLA plus souples, mais avec la même discipline de backlog.",
        ],
      },
      {
        heading: "Gouvernance : priorisation et « scope creep »",
        paragraphs: [
          "Je formalise ce qui est in-scope de la TMA (ex. correctifs < X h, petites évolutions < Y jours) et ce qui sort (refonte module, nouveau parcours majeur). Les demandes hors scope reçoivent un chiffrage ou un découpage en phases.",
          "Les arbitrages marketing/produit/tech sont consignés pour éviter les oublis six semaines plus tard.",
        ],
      },
      {
        heading: "Qualité, dette et montées de version",
        paragraphs: [
          "Une fraction du temps est réservée à la dette (dépendances, perf, tests manquants) pour éviter l’effondrement de vélocité à 12 mois.",
          "Les montées de version majeures (framework, runtime) sont planifiées comme des mini-projets avec risque et rollback.",
        ],
      },
      {
        heading: "Coordination avec SEO, infra et IA",
        paragraphs: [
          "Les évolutions sensibles SEO passent par une validation rapide. L’infogérance peut compléter la TMA lorsque supervision et patching OS sont nécessaires.",
          "Les features IA ajoutées en TMA restent sous garde-fous : coûts, conformité, et tests de non-régression.",
        ],
      },
    ],
    faq: [
      {
        question: "TMA vs prestation ponctuelle ?",
        answer:
          "La TMA réduit le coût de contexte et accélère les petites itérations ; les gros chantiers restent des projets avec périmètre et budget dédiés.",
      },
      {
        question: "Comment éviter que tout devienne urgent ?",
        answer:
          "Canal unique, grille de priorité, et SLA. Sans SLA, tout est urgent et la qualité chute.",
      },
      {
        question: "Peut-on combiner TMA et infogérance ?",
        answer:
          "Oui quand vous voulez une seule fenêtre pour incidents applicatifs et supervision infrastructure — périmètre écrit noir sur blanc.",
      },
      {
        question: "Comment mesurer le succès de la TMA ?",
        answer:
          "Lead time des tickets, taux de régression, disponibilité des parcours critiques, et satisfaction métier — pas seulement le volume de tickets fermés.",
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
      "Infogérance : supervision, sauvegardes, mises à jour serveur, sécurité et coordination incidents. Pour sites et apps critiques — périmètre clair avec l’IT client.",
    eyebrow: "Maintenance & TMA",
    h1: "Infogérance : supervision et sérénité quand le service doit tourner.",
    lead:
      "L’infogérance couvre souvent supervision, sauvegardes, patching OS/runtime, certificats, coordination avec l’hébergeur cloud, et gestion d’incidents applicatifs liés à l’exploitation. Je clarifie le périmètre avec votre équipe IT : ce que le provider managé fait déjà, ce que vous gardez en interne, et ce que je prends en charge — pour éviter les zones grises (« ce n’est pas mon rôle ») quand le site est down. L’objectif est une boucle d’incident lisible : détection, diagnostic, mitigation, communication, post-mortem actionnable. Les sauvegardes sont testées ; les accès sont minimisés ; les changements passent par des fenêtres et des rollbacks quand c’est possible.",
    tldr: [
      "Monitoring uptime + alertes bruitées raisonnablement (éviter l’alert fatigue).",
      "Sauvegardes chiffrées + tests de restauration documentés.",
      "Patching et durcissement raisonnable selon votre niveau de risque.",
      "Coordination incidents avec marketing quand le site est le principal canal.",
      "Séparation claire infra managée vs couche applicative.",
      "Reporting mensuel simple : incidents, changements, recommandations.",
    ],
    sections: [
      {
        heading: "Périmètre : ce que l’infogérance couvre — et ce qu’elle ne remplace pas",
        paragraphs: [
          "Je distingue supervision infrastructure, maintenance applicative (TMA), et sécurité avancée (SOC). L’infogérance ne remplace pas un SOC 24/7 ni une équipe interne sur des systèmes ultra réglementés — mais elle comble souvent un trou opérationnel après mise en ligne quand personne n’assume explicitement les certificats, les backups et les mises à jour.",
          "Les runbooks couvrent les incidents fréquents : saturation disque, certificat expiré, job bloqué, base qui gonfle, déploiement raté.",
        ],
      },
      {
        heading: "Sauvegardes, restauration et continuité",
        paragraphs: [
          "Fréquence, rétention, chiffrement, et test de restauration planifié. Un backup jamais testé vaut zéro.",
          "Les plans de continuité minimaux (basculer DNS, activer une page de statut honnête) sont discutés en amont.",
        ],
      },
      {
        heading: "Sécurité : patching, accès, journaux",
        paragraphs: [
          "Patching OS/runtime et dépendances critiques ; rotation des secrets ; revue des comptes SSH/panel. Les journaux sont conservés assez longtemps pour diagnostiquer sans exploser les coûts.",
        ],
      },
      {
        heading: "Coordination avec e-commerce, CRM et TMA",
        paragraphs: [
          "Quand l’infogérance couvre un tunnel d’achat critique, les incidents PSP ou jobs stock sont prioritaires. La TMA prend le relais sur évolutions applicatives structurantes.",
        ],
      },
    ],
    faq: [
      {
        question: "Cloud managé : a-t-on encore besoin d’infogérance ?",
        answer:
          "Souvent oui au niveau applicatif : l’infra peut être managée, mais vos déploiements, jobs, queues et certificats applicatifs nécessitent toujours quelqu’un qui assume.",
      },
      {
        question: "Avez-vous une astreinte 24/7 ?",
        answer:
          "Seulement si cadrée contractuellement. Sinon fenêtre d’astreinte et escalade vers votre équipe pour les cas hors périmètre.",
      },
      {
        question: "Comment gérer les accès sensibles ?",
        answer:
          "Comptes nominatifs, MFA, moindre privilège, et journalisation. Pas de partage de mots de passe « admin@ ».",
      },
      {
        question: "Infogérance + e-commerce : points de vigilance ?",
        answer:
          "Webhooks, jobs de stock, pics saisonniers, et PSP — souvent la cause des incidents perçus comme « serveur » alors qu’ils sont applicatifs.",
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
