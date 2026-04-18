import type { SiloContextualLink, SiloFaqItem } from "@/lib/content/silo-child-types";

export type PillarSupplement = {
  faq: SiloFaqItem[];
  links: SiloContextualLink[];
};

/** FAQ + maillage contextualisé pour chaque page pilier (brief §5). */
export const pillarSupplements: Record<string, PillarSupplement> = {
  "/sites-internet/": {
    faq: [
      {
        question: "Comment choisissez-vous entre Next.js, WordPress, Shopify ou du sur-mesure ?",
        answer:
          "Je pars du modèle économique (catalogue, intégrations, équipe éditoriale, SLA), des contraintes SEO/perf, du budget et de la vélocité souhaitée. L’objectif n’est pas une religion techno, mais une trajectoire maintenable avec des risques explicités.",
      },
      {
        question: "Le SEO est-il inclus dans vos développements web ?",
        answer:
          "Oui, comme composante produit : indexation, données structurées, performance, maillage interne et migrations propres. Le silo SEO détaille audits, contenu et GEO ; côté dev, j’aligne templates, canonicals et CWV dès l’intégration.",
      },
      {
        question: "Travaillez-vous avec des agences ou uniquement en direct client ?",
        answer:
          "Les deux. En direct, le cadrage est souvent plus court ; avec une agence, je m’intègre à une équipe produit/design et je documente pour transfert. Les livrables et la responsabilité restent clairement nommés.",
      },
      {
        question: "Que se passe-t-il après la mise en ligne ?",
        answer:
          "Runbook, monitoring minimal, sauvegardes et feuille de route d’évolutions. Un contrat de maintenance/TMA est possible pour sécuriser mises à jour, correctifs et petites features sans perte de contexte.",
      },
      {
        question: "Quels types de sites refusez-vous ?",
        answer:
          "Les projets sans propriétaire métier, sans critère de succès, ou où l’objectif réel est « refaire pour refaire » sans mesure. Je préfère dire non tôt plutôt qu’encaisser une dette impossible à tenir.",
      },
      {
        question: "Comment estimer un délai réaliste ?",
        answer:
          "Atelier court, découpage en jalons livrables, dépendances (contenu, API, juridique) identifiées en amont. Le formulaire de devis aide à qualifier ; un créneau calendrier permet de lever les ambiguïtés vite.",
      },
    ],
    links: [
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Tunnel d’achat, catalogue, moyens de paiement et perf : le chaînon le plus demandé quand un site internet doit directement générer du chiffre.",
      },
      {
        href: "/sites-internet/marketplace/",
        label: "Marketplace",
        description:
          "Quand plusieurs vendeurs, commissions et workflows de modération entrent en jeu — souvent le prochain cran de complexité après un e-commerce classique.",
      },
      {
        href: "/seo/seo-ecommerce/",
        label: "SEO e-commerce",
        description:
          "Pour relier construction technique et acquisition : duplication, facettes, données produit et maillage catalogue.",
      },
      {
        href: "/seo/migration-seo/",
        label: "Migration SEO",
        description:
          "Indispensable si vous refondez ou changez d’URL : plans 301, canoniques et suivi positions pour ne pas brûler l’historique.",
      },
      {
        href: "/maintenance/maintenance-ecommerce/",
        label: "Maintenance e-commerce",
        description:
          "Après le go-live, sécuriser correctifs, mises à jour de plugins/paiement et évolutions de conversion sans improvisation.",
      },
      {
        href: "/realisations/",
        label: "Réalisations",
        description:
          "Preuves terrain : études de cas publiées lorsque le contenu Sanity est disponible — utiles pour valider stack et méthode.",
      },
      {
        href: "/ia/ia-generative-ecommerce/",
        label: "IA générative e-commerce",
        description:
          "Quand le site doit intégrer recherche sémantique, assistants produit ou génération assistée sans sacrifier la qualité.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Canal le plus structuré pour décrire périmètre, contraintes et calendrier — réponse argumentée, pas un chiffrage au doigt mouillé.",
      },
    ],
  },
  "/applications-mobiles/": {
    faq: [
      {
        question: "React Native ou natif : comment tranchez-vous ?",
        answer:
          "React Native lorsque partager du code avec le web et itérer vite l’emporte, et que les APIs OS ne sont pas le goulot. Natif (Swift/Kotlin) quand le hardware, les performances extrêmes ou des guidelines très strictes imposent la voie plateforme.",
      },
      {
        question: "Gérez-vous les soumissions App Store et Play Console ?",
        answer:
          "Oui, ou je forme votre équipe : signatures, builds, conformité des métadonnées, privacy nutrition labels, tests TestFlight/Internal testing, et gestion des rejets avec plan de correction.",
      },
      {
        question: "Proposez-vous des PWA plutôt que des apps store ?",
        answer:
          "Quand la distribution immédiate via URL prime et que les APIs push/offline sont suffisantes. Sinon, l’app store reste souvent nécessaire pour la confiance utilisateur et certaines capacités OS.",
      },
      {
        question: "Comment intégrez-vous analytics et crash reporting ?",
        answer:
          "Dès le MVP : événements critiques nommés, segments, funnel, crash grouping. L’objectif est une lecture produit, pas 200 métriques décoratives.",
      },
      {
        question: "Travaillez-vous avec une équipe design existante ?",
        answer:
          "Oui : je synchronise composants, tokens et états edge (offline, erreurs réseau, permissions) pour que le design survive au terrain.",
      },
    ],
    links: [
      {
        href: "/applications-mobiles/react-native/",
        label: "React Native",
        description:
          "Le compromis le plus courant pour unifier iOS/Android avec une équipe web TypeScript mature.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Souvent couplé à une app (compte, fidélité, parcours mobile-first) : garder une cohérence produit bout-en-bout.",
      },
      {
        href: "/ia/chatbot-ia/",
        label: "Chatbot IA",
        description:
          "Pour un support in-app ou un assistant contextuel branché sur votre base de connaissances.",
      },
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Les pages marketing mobile-first et les landings d’install bénéficient des mêmes exigences CWV que le web.",
      },
      {
        href: "/realisations/",
        label: "Réalisations",
        description:
          "Cas clients et références publiées lorsque disponibles — utiles pour valider la qualité de release.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez plateformes cibles, intégrations et jalons : j’y réponds avec un découpage réaliste.",
      },
    ],
  },
  "/ia/": {
    faq: [
      {
        question: "Vendez-vous des modèles d’IA ou de l’intégration ?",
        answer:
          "De l’intégration et de l’industrialisation : prompts versionnés, garde-fous, observabilité des coûts, reprise humaine, conformité données. Je ne revends pas de « licences IA » sans périmètre technique clair.",
      },
      {
        question: "Comment éviter les fuites de données vers des LLM publics ?",
        answer:
          "Classement des données, politiques de rétention, masquage, cloisonnement réseau, et choix d’APIs/hébergements adaptés. Chaque connecteur est documenté avec son niveau de risque.",
      },
      {
        question: "Qu’est-ce qu’un bon premier use case IA en entreprise ?",
        answer:
          "Une tâche répétitive à critères d’acceptation mesurables (temps gagné, taux d’erreur, satisfaction), avec un propriétaire métier et un fallback clair si le modèle dérape.",
      },
      {
        question: "RAG ou fine-tuning ?",
        answer:
          "Souvent RAG en premier : moins coûteux à itérer, plus traçable sur les sources. Le fine-tuning n’est envisagé que lorsque le coût et la gouvernance le justifient.",
      },
      {
        question: "Comment estimez-vous le coût token/API ?",
        answer:
          "Scénarios de charge, taille moyenne des prompts, cache, modèles, et monitoring en production. Je fournis des ordres de grandeur avant engagement, puis des tableaux de bord simples.",
      },
    ],
    links: [
      {
        href: "/ia/rag-base-connaissances/",
        label: "RAG & base de connaissances",
        description:
          "Le pattern dominant pour répondre avec vos PDF, helpdesk et documentations internes sans halluciner à vide.",
      },
      {
        href: "/ia/chatbot-ia/",
        label: "Chatbot IA",
        description:
          "Pour un assistant client ou interne avec parcours guidé, transfert humain et scripts de qualité.",
      },
      {
        href: "/seo/geo-generative-engine-optimization/",
        label: "GEO (Generative Engine Optimization)",
        description:
          "Structurer preuves, FAQ et contenus factuels pour être cité dans les réponses des moteurs génératifs.",
      },
      {
        href: "/crm-outils-metiers/automatisation/",
        label: "Automatisation",
        description:
          "Brancher LLMs sur vos workflows (CRM, ticketing) via outils no-code ou workers maison selon la criticité.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "L’IA utile côté conversion : recherche produit, Q/R pré-vente, génération assistée de fiches — toujours avec validation humaine.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez données, volumes et objectifs : je propose une architecture réaliste et un phasage.",
      },
    ],
  },
  "/seo/": {
    faq: [
      {
        question: "Quelle différence entre SEO classique et GEO ?",
        answer:
          "Le SEO vise la visibilité dans les résultats classiques ; le GEO vise d’être correctement résumé/cité par les systèmes génératifs. Les deux exigent clarté, faits vérifiables et structure de page irréprochable.",
      },
      {
        question: "Faites-vous du netlinking « à volume » ?",
        answer:
          "Non. Je préfère des angles éditoriaux, partenariats pertinents et contenus citables. La quantité sans qualité finit en risque algorithmique.",
      },
      {
        question: "Intervenez-vous sur du contenu existant ?",
        answer:
          "Oui : cannibalisation, intention de recherche, maillage interne, briefs rédactionnels et modèles de pages. La technique seule ne suffit pas si le contenu ne matche pas la requête.",
      },
      {
        question: "Comment sécuriser une refonte SEO ?",
        answer:
          "Inventaire URL, plan 301, tests de régression, suivi Search Console, benchmarks positions et validation des canoniques. Voir la page migration dédiée.",
      },
      {
        question: "Travaillez-vous avec des outils type Semrush/Ahrefs ?",
        answer:
          "Oui, en complément de données serveur et logs quand disponibles. L’outil sert le diagnostic, pas l’inverse.",
      },
    ],
    links: [
      {
        href: "/seo/audit-seo/",
        label: "Audit SEO",
        description:
          "Point d’entrée naturel : priorisation impact/effort sur technique, contenu et popularité.",
      },
      {
        href: "/seo/geo-generative-engine-optimization/",
        label: "GEO",
        description:
          "Aligné avec le positionnement 2026 : être visible là où les utilisateurs posent des questions en langage naturel.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Le SEO e-commerce sans base technique (CWV, templates, données produit) plafonne vite.",
      },
      {
        href: "/ia/rag-base-connaissances/",
        label: "RAG",
        description:
          "Quand vos contenus doivent alimenter assistants et bases de connaissances sans dériver.",
      },
      {
        href: "/blog/",
        label: "Blog",
        description:
          "Canal informationnel pour guides, comparatifs et preuves d’expertise — complémentaire aux pages silo.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Pour un audit ou une mise en œuvre : décrivez URL, stack et objectifs mesurables.",
      },
    ],
  },
  "/crm-outils-metiers/": {
    faq: [
      {
        question: "CRM sur mesure vs Salesforce/HubSpot : que recommandez-vous ?",
        answer:
          "Je ne « remplace » pas un CRM mature sans analyse : souvent l’enjeu est l’intégration, la qualité des données et des workflows. Le sur-mesure a du sens quand le process métier est votre avantage compétitif.",
      },
      {
        question: "Comment gérez-vous les droits et l’audit ?",
        answer:
          "Rôles explicites, journalisation des actions sensibles, exports traçables. Ces sujets sont cadrés dès le modèle de données, pas en patch post-lancement.",
      },
      {
        question: "Quelles intégrations sont les plus fragiles ?",
        answer:
          "Bidirectionnelles sans idempotence, webhooks perdus, quotas API ignorés, et synchronisations catalogue/prix. Je documente scénarios d’échec et files d’attente.",
      },
      {
        question: "Proposez-vous de l’hébergement ?",
        answer:
          "Je recommande des environnements adaptés (VPC, backups testés) et je peux accompagner la mise en place. La responsabilité est clarifiée contratuellement.",
      },
    ],
    links: [
      {
        href: "/crm-outils-metiers/crm-sur-mesure/",
        label: "CRM sur mesure",
        description:
          "La page la plus directe quand votre process commercial ne rentre dans aucun SaaS standard.",
      },
      {
        href: "/sites-internet/intranet-extranet/",
        label: "Intranet / extranet",
        description:
          "Souvent le même socle technique : portails, droits et documents partagés avec partenaires ou clients.",
      },
      {
        href: "/ia/automatisation-ia/",
        label: "Automatisation IA",
        description:
          "Quand vos workflows métiers doivent combiner règles déterministes et assistance linguistique.",
      },
      {
        href: "/maintenance/tma/",
        label: "TMA",
        description:
          "Pour faire vivre l’outil après le go-live : évolutions, correctifs et priorisation partagée.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez volumes, intégrations et équipes : première estimation après cadrage court.",
      },
    ],
  },
  "/maintenance/": {
    faq: [
      {
        question: "Qu’est-ce qu’un bon contrat de maintenance ?",
        answer:
          "SLA lisible, canaux de contact, volumétrie incluse, procédure d’urgence, et feuille de route d’évolutions séparée des correctifs. Sans ça, chaque demande devient une négociation.",
      },
      {
        question: "Incluez-vous les mises à jour de sécurité ?",
        answer:
          "Oui dans les offres sérieuses : dépendances, CMS, runtime, et revue des changelogs. La fréquence dépend du risque et du stack.",
      },
      {
        question: "Comment éviter la « TMA fourre-tout » ?",
        answer:
          "Backlog priorisé, critères d’acceptation, et chiffrage séparé pour les chantiers > seuil. La maintenance garde le système sain ; les projets restent des projets.",
      },
      {
        question: "Prenez-vous en charge WordPress et e-commerce ?",
        answer:
          "Oui, avec des pages dédiées : plugins, paiement, perf et sauvegardes sont des sujets distincts avec leurs risques.",
      },
    ],
    links: [
      {
        href: "/maintenance/maintenance-ecommerce/",
        label: "Maintenance e-commerce",
        description:
          "Pour les stacks sensibles au chiffre d’affaires : paiement, stocks, promos et mises à jour critiques.",
      },
      {
        href: "/seo/migration-seo/",
        label: "Migration SEO",
        description:
          "Souvent couplée à des évolutions techniques : éviter les régressions lors des mises à jour majeures.",
      },
      {
        href: "/sites-internet/site-wordpress/",
        label: "Site WordPress",
        description:
          "Quand le site vitrine ou content hub est sur WP : comprendre l’empreinte plugins et thèmes.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez stack, hébergeur et douleurs actuelles : proposition d’accompagnement adaptée.",
      },
    ],
  },
};

export function getPillarSupplement(siloHref: string): PillarSupplement | undefined {
  return pillarSupplements[siloHref];
}
