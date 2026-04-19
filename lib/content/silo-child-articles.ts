import type { ServiceSilo } from '@/lib/constants/sitemap';

import type { MarketingLongArticle } from './marketing-article-types';
import { SITES_INTERNET_LONG_ARTICLES } from './silo-children/sites-internet-long-articles';

const OVERRIDES: Partial<Record<string, MarketingLongArticle>> = {
  ...SITES_INTERNET_LONG_ARTICLES,
  'seo:audit-seo': {
    metaDescription:
      'Audit SEO technique et éditorial : crawl, indexation, performances, maillage — livrable actionnable par Clickdev.',
    lead:
      'Un audit SEO utile se lit comme un plan de bataille priorisé : ce qui bloque l’indexation, ce qui gaspille le budget de crawl, ce qui nuit aux conversions, et ce qui manque côté contenu ou autorité. Je livre des recommandations techniques implémentables et des exemples concrets sur vos templates.',
    sections: [
      {
        heading: 'Périmètre d’audit',
        paragraphs: [
          'Analyse crawl (robots, redirections, canonicals, pagination, hreflang), rendu mobile, données structurées, logs si disponibles, et échantillon de pages stratégiques pour le maillage interne.',
          'Côté contenu : intention de recherche par modèle de page, cannibalisation évidente, titres & métas, et alignement avec la stratégie business.',
        ],
      },
      {
        heading: 'Livrable',
        paragraphs: [
          'Tableau de priorités (impact × effort), tickets techniques prêts pour le backlog dev, et synthèse exécutive pour les parties prenantes non techniques.',
        ],
      },
    ],
    faq: [
      {
        question: 'Audit sans accès aux outils ?',
        answer:
          'Possible mais limité : Search Console et accès staging accélèrent la précision sur l’indexation et les erreurs réelles.',
      },
      {
        question: 'Délai moyen ?',
        answer:
          'De quelques jours à deux semaines selon la taille du site et la profondeur demandée.',
      },
    ],
  },
  'seo:geo-generative-engine-optimization': {
    metaDescription:
      'GEO : optimiser votre visibilité dans ChatGPT, Perplexity et les AI Overviews — méthode freelance Clickdev.',
    lead:
      'Le GEO (Generative Engine Optimization) vise à être correctement cité ou recommandé lorsque les moteurs génératifs synthétisent le web. Ce n’est pas du « prompt hacking » : il s’agit de clarifier qui vous êtes, quelles preuves vous apportez, et comment vos pages sont structurées pour être exploitables.',
    sections: [
      {
        heading: 'Piliers GEO',
        paragraphs: [
          'Entité forte (marque, fondateur, pages « about » utiles), faits vérifiables, FAQ claires, données structurées pertinentes, et cohérence des signaux externes (profils, mentions, presse).',
          'Le contenu « machine-readable » : titres explicites, listes, définitions courtes, et pages thématiques qui répondent à une intention sans ambiguïté.',
        ],
      },
      {
        heading: 'Mesure & attentes',
        paragraphs: [
          'Les outils analytics classiques ne montrent pas tout le trafic « IA ». On combine positions classiques, marque, et tests manuels sur requêtes cibles pour ajuster la roadmap éditoriale et technique.',
        ],
      },
    ],
    faq: [
      {
        question: 'GEO remplace le SEO ?',
        answer:
          'Non : le SEO technique et l’autorité restent la base. Le GEO ajoute une couche sur la clarté sémantique et la confiance lorsque les réponses sont générées.',
      },
      {
        question: 'Résultats garantis ?',
        answer:
          'Personne ne peut garantir une citation dans une réponse IA. On optimise les probabilités avec des signaux solides et durables.',
      },
    ],
  },
  'applications-mobiles:react-native': {
    metaDescription:
      'React Native : app iOS/Android, modules natifs, performance et publication stores — freelance Clickdev.',
    lead:
      'React Native permet une équipe produit unique pour iOS et Android tout en gardant la possibilité d’échapper vers le natif (SDK, perfs, UI spécifique). Je structure le code pour limiter les re-renders, isoler la navigation et fiabiliser les builds.',
    sections: [
      {
        heading: 'Qualité & DX',
        paragraphs: [
          'TypeScript, conventions de dossiers, tests sur parcours critiques et CI pour les builds. Les erreurs réseau et l’état offline sont gérés explicitement plutôt qu’implicitement.',
        ],
      },
      {
        heading: 'Stores',
        paragraphs: [
          'Préparation des fiches, conformité des permissions, gestion des versions et accompagnement sur les refus Apple/Google. Vous gardez la propriété des comptes développeur.',
        ],
      },
    ],
    faq: [
      {
        question: 'React Native ou Flutter ?',
        answer:
          'Souvent dicté par l’écosystème interne (déjà React côté web ?). Les deux sont viables ; je suis le plus productif sur React Native / Expo selon contraintes.',
      },
    ],
  },
  'ia:integration-ia': {
    metaDescription:
      'Intégration IA en produit : APIs, garde-fous, coûts et sécurité — accompagnement freelance Clickdev.',
    lead:
      'Intégrer l’IA dans un produit existant, c’est brancher des modèles sur vos données et vos règles — avec des limites claires sur ce que l’IA peut décider seule. Je conçois des flux avec validation humaine, journaux et budgets tokens.',
    sections: [
      {
        heading: 'Chaîne de valeur',
        paragraphs: [
          'Identification des tâches à fort ROI (support, qualification, synthèse), choix du modèle, prompts versionnés et tests sur cas limites. Les données sensibles sont filtrées avant envoi au fournisseur.',
        ],
      },
      {
        heading: 'Exploitation',
        paragraphs: [
          'Monitoring des latences, quotas, erreurs et repli si le fournisseur est indisponible. Documentation pour que votre équipe puisse itérer sans dépendre d’une boîte noire.',
        ],
      },
    ],
    faq: [
      {
        question: 'On commence par un POC ?',
        answer:
          'Souvent oui : un périmètre restreint mais mesurable en 2–4 semaines permet de valider coût et qualité avant industrialisation.',
      },
    ],
  },
  'seo:seo-technique': {
    metaDescription:
      'SEO technique : indexation, Core Web Vitals, données structurées, logs et migrations — freelance Clickdev.',
    lead:
      'Le SEO technique aligne ce que les crawlers voient avec ce que les utilisateurs vivent : vitesse, stabilité des URLs, rendu, données structurées et absence de blocages d’indexation. J’interviens en audit puis en implémentation avec votre équipe dev.',
    sections: [
      {
        heading: 'Leviers',
        paragraphs: [
          'Robots, canonicals, pagination, hreflang, duplication, maillage interne, schémas JSON-LD pertinents, et analyse des logs quand c’est possible. Les Core Web Vitals sont traités comme des critères de livraison, pas comme une option.',
          'Les migrations (refonte, changement de domaine, HTTPS) sont cadrées avec plan de redirections, tests et suivi post-bascule.',
        ],
      },
    ],
    faq: [
      {
        question: 'SEO technique sans refonte complète ?',
        answer:
          'Oui : quick wins sur templates critiques, correctifs serveur/cache, et roadmap sur les dettes structurelles.',
      },
    ],
  },
  'ia:chatbot-ia': {
    metaDescription:
      'Chatbot IA : scénarios, garde-fous, intégration CRM et mesure — conception freelance Clickdev.',
    lead:
      'Un chatbot utile réduit le temps de première réponse et qualifie les demandes — sans remplacer l’humain sur les cas sensibles. Je conçois des scénarios explicites, des sources de vérité (FAQ, base interne) et des garde-fous pour limiter les hallucinations.',
    sections: [
      {
        heading: 'Expérience & fiabilité',
        paragraphs: [
          'Handoff vers un agent humain, journaux de conversation, catégorisation des intents et limitation des sujets hors périmètre. Les contenus sont versionnés et testés sur jeux de questions clients réels.',
        ],
      },
    ],
    faq: [
      {
        question: 'Chatbot sur le site ou sur WhatsApp ?',
        answer:
          'Les deux sont possibles selon vos canaux : widget web, messagerie, ou intégration helpdesk. Le périmètre détermine l’architecture (webhooks, OAuth, stockage).',
      },
    ],
  },
  'crm-outils-metiers:crm-sur-mesure': {
    metaDescription:
      'CRM sur mesure : pipeline, droits, intégrations et adoption équipes — développement freelance Clickdev.',
    lead:
      'Un CRM sur mesure vaut le coup quand les outils génériques imposent trop de contournements. Je modélise le pipeline commercial ou support, les rôles, les automatisations et les intégrations (email, facturation, téléphonie) pour que l’outil colle au process réel.',
    sections: [
      {
        heading: 'Adoption',
        paragraphs: [
          'Interfaces simples, parcours courts, imports contrôlés et formation ciblée. Les rapports utiles au management sont livrés tôt pour créer de la valeur visible.',
        ],
      },
    ],
    faq: [
      {
        question: 'CRM sur mesure vs Salesforce / HubSpot ?',
        answer:
          'Les plateformes matures gagnent sur l’écosystème. Le sur mesure gagne quand vos règles métier sont spécifiques et que le coût de contournement dépasse le coût de construction.',
      },
    ],
  },
  'seo:migration-seo': {
    metaDescription:
      'Migration SEO : refonte, changement d’URL, HTTPS, internationalisation — plan et exécution freelance Clickdev.',
    lead:
      'Une migration SEO mal cadrée peut effacer des mois de trafic. Je structure la cartographie URL, les redirections 301, les canonicals, les tests sur préprod et un suivi Search Console post-bascule pour détecter les régressions vite.',
    sections: [
      {
        heading: 'Plan de migration',
        paragraphs: [
          'Inventaire des pages stratégiques, priorisation par trafic et valeur business, règles de redirection (1:1 quand possible), et gestion des facettes / pagination. Les environnements de recette reproduisent la prod pour valider les en-têtes et les codes HTTP.',
        ],
      },
    ],
    faq: [
      {
        question: 'Combien de temps avant stabilisation ?',
        answer:
          'Souvent quelques semaines selon la taille du site et la vitesse de recrawl. Un monitoring actif accélère les corrections.',
      },
    ],
  },
  'ia:agents-ia': {
    metaDescription:
      'Agents IA : planification d’actions, outils, garde-fous et supervision — conception freelance Clickdev.',
    lead:
      'Un agent IA en production enchaîne des étapes (lire un ticket, proposer une réponse, appeler une API) avec des règles de repli. Je conçois des boucles testables : prompts versionnés, outils typés, budgets et journaux pour auditer chaque décision.',
    sections: [
      {
        heading: 'Fiabilité',
        paragraphs: [
          'Human-in-the-loop sur les actions sensibles, limitation des boucles, timeouts et idempotence sur les effets de bord. Les secrets et tokens restent côté serveur.',
        ],
      },
    ],
    faq: [
      {
        question: 'Agents vs simple chatbot ?',
        answer:
          'L’agent enchaîne plusieurs outils et étapes ; le chatbot répond sur un corpus. Le surcoût en complexité doit être justifié par le gain mesurable.',
      },
    ],
  },
  'maintenance:tma': {
    metaDescription:
      'TMA applicative : backlog, SLA, évolutions et maintenance corrective — freelance Clickdev.',
    lead:
      'La TMA (tierce maintenance applicative) consiste à tenir un backlog priorisé avec des engagements de réponse et de traitement adaptés à votre criticité. Je documente les changements, je sécurise les déploiements et je garde une vision claire de la dette technique.',
    sections: [
      {
        heading: 'Organisation',
        paragraphs: [
          'Rituels légers (point hebdo ou bi-hebdo), tickets traçables, releases planifiées et communication transparente sur les risques. Les hotfix sont cadrés pour limiter les régressions.',
        ],
      },
    ],
    faq: [
      {
        question: 'SLA sur mesure ?',
        answer:
          'Oui : P1/P2/P3 avec temps de première réponse et objectifs de résolution selon votre activité (e-commerce vs outil interne).',
      },
    ],
  },
  'seo:seo-local': {
    metaDescription:
      'SEO local : fiche Google Business Profile, citations NAP, pages géo et avis — accompagnement freelance Clickdev.',
    lead:
      'Le SEO local sert quand vos clients cherchent « près de moi » ou une ville précise. Je structure les pages lieux, la cohérence NAP (nom, adresse, téléphone), les données structurées LocalBusiness quand c’est pertinent, et les signaux d’avis / liens locaux sans spam.',
    sections: [
      {
        heading: 'Fondations',
        paragraphs: [
          'Google Business Profile à jour, catégories pertinentes, médias utiles et questions/réponses. Site : pages services × zones avec contenu réellement différencié, pas du duplicate léger.',
        ],
      },
    ],
    faq: [
      {
        question: 'Plusieurs agences physiques ?',
        answer:
          'Une stratégie par implantation : pages dédiées, liens internes clairs et fiches distinctes quand les règles Google le permettent.',
      },
    ],
  },
  'seo:seo-ecommerce': {
    metaDescription:
      'SEO e-commerce : indexation catalogue, filtres, pagination, contenus produit et maillage — freelance Clickdev.',
    lead:
      'Un e-commerce SEO-friendly gère la duplication (filtres, variantes), la profondeur de crawl, les pages orphelines et les intentions mixtes (transactionnelle vs informationnelle). Je priorise les templates à fort volume et les catégories stratégiques.',
    sections: [
      {
        heading: 'Catalogue',
        paragraphs: [
          'Titres et descriptions produit utiles, facettes contrôlées (noindex ciblé, canonicals), et HTML crawlable pour le contenu critique. Les données structurées Product sont validées sans sur-promesse.',
        ],
      },
    ],
    faq: [
      {
        question: 'Marketplaces et SEO ?',
        answer:
          'Souvent contraintes de templates ; le levier est contenu éditorial, marque, et pages catégorie enrichies hors marketplace quand vous avez un site vitrine.',
      },
    ],
  },
  'applications-mobiles:pwa': {
    metaDescription:
      'PWA : installation, mode hors-ligne, push et perf — développement freelance Clickdev.',
    lead:
      'Une PWA repose sur un service worker fiable, un manifest clair et des stratégies de cache adaptées au risque (stale data vs fraîcheur). Je cible d’abord les parcours critiques : auth, consultation catalogue, formulaires terrain.',
    sections: [
      {
        heading: 'App-like',
        paragraphs: [
          'Écran d’accueil, icônes, safe areas et comportements iOS/Android documentés. Les mises à jour du worker sont versionnées pour éviter les clients bloqués sur une vieille coquille vide.',
        ],
      },
    ],
    faq: [
      {
        question: 'PWA vs app store ?',
        answer:
          'La PWA évite le store pour des usages internes ou B2B ; le store reste pertinent pour la découverte grand public ou les APIs natives strictes.',
      },
    ],
  },
  'crm-outils-metiers:automatisation': {
    metaDescription:
      'Automatisation métier : workflows, intégrations et fiabilité — développement freelance Clickdev.',
    lead:
      'L’automatisation relie CRM, email, facturation ou support avec des règles explicites : déclencheurs, idempotence, journaux et reprises sur erreur. Je évite les « scripts magiques » non observables en production.',
    sections: [
      {
        heading: 'Robustesse',
        paragraphs: [
          'Files d’attente, dead-letter, alertes sur échecs répétés et limites de taux sur les APIs externes. Les scénarios edge (doublons, annulations) sont listés avant le go-live.',
        ],
      },
    ],
    faq: [
      {
        question: 'Zapier / Make ou code ?',
        answer:
          'Les outils no-code accélèrent les prototypes ; le code gagne quand le volume, la sécurité ou la logique métier deviennent trop sensibles pour un graphe opaque.',
      },
    ],
  },
  'maintenance:maintenance-wordpress': {
    metaDescription:
      'Maintenance WordPress : mises à jour, sécurité, perf et sauvegardes — freelance Clickdev.',
    lead:
      'WordPress reste une cible : thèmes, plugins et cœur doivent être tenus à jour avec une fenêtre de test. Je mets en place des sauvegardes vérifiables, un staging pour les grosses montées de version et un suivi des vulnérabilités connues.',
    sections: [
      {
        heading: 'Exploitation',
        paragraphs: [
          'Monitoring uptime léger, rapport post-mise à jour et procédure de rollback. Les comptes admin sont durcis (2FA, moindre privilège) et les accès FTP/SFTP restreints.',
        ],
      },
    ],
    faq: [
      {
        question: 'Hébergement mutualisé ?',
        answer:
          'Possible avec limites de perf et d’isolation ; je documente les contraintes pour éviter les surprises en pic de trafic.',
      },
    ],
  },
  'applications-mobiles:ios': {
    metaDescription:
      'Développement app iOS native Swift/SwiftUI : qualité store, perf et accessibilité — freelance Clickdev.',
    lead:
      'Les apps iOS natives profitent des APIs Apple, du comportement système cohérent et des guidelines Human Interface. Je prépare le passage App Store (privacy manifest, descriptions, captures) et les builds de test (TestFlight).',
    sections: [
      {
        heading: 'Qualité',
        paragraphs: [
          'Tests sur plusieurs OS/iPhone, gestion hors-ligne partielle et respect des tailles dynamiques / VoiceOver quand le public l’exige.',
        ],
      },
    ],
    faq: [
      {
        question: 'SwiftUI uniquement ?',
        answer:
          'SwiftUI accélère la plupart des écrans ; UIKit reste pertinent pour certains composants legacy ou besoins très spécifiques.',
      },
    ],
  },
  'applications-mobiles:android': {
    metaDescription:
      'Développement app Android Kotlin : Material, fragmentation et Play Console — freelance Clickdev.',
    lead:
      'Android impose la gestion des versions OS, des tailles d’écran et parfois des fabricants. Je structure les builds (flavors), les signatures Play App Signing et les stratégies de déploiement progressif.',
    sections: [
      {
        heading: 'Play Store',
        paragraphs: [
          'Fiches store, politique de confidentialité, data safety form et conformité aux restrictions média / paiement selon votre domaine.',
        ],
      },
    ],
    faq: [
      {
        question: 'Compose ou XML ?',
        answer:
          'Jetpack Compose pour le neuf ; vues XML quand la base existante impose une transition progressive.',
      },
    ],
  },
  'ia:automatisation-ia': {
    metaDescription:
      'Automatisation IA : extraction, classification, routage et garde-fous — freelance Clickdev.',
    lead:
      'L’automatisation par modèles doit rester observable : scores de confiance, seuils de rejet, file d’attente humaine et journaux pour expliquer chaque décision automatique. Je branche les flux sur vos outils (CRM, helpdesk, ERP) sans multiplier les copies de données sensibles.',
    sections: [
      {
        heading: 'Données',
        paragraphs: [
          'Minimisation, rétention, et cloisonnement des clés API. Les prompts et jeux de test sont versionnés comme du code.',
        ],
      },
    ],
    faq: [
      {
        question: '100 % automatique ?',
        answer:
          'Rarement souhaitable au départ : un pilote avec revue humaine réduit les risques avant d’élargir les seuils.',
      },
    ],
  },
  'ia:rag-base-connaissances': {
    metaDescription:
      'RAG et base de connaissances : chunking, embeddings, retrieval et évaluation — freelance Clickdev.',
    lead:
      'Un RAG efficace dépend du découpage des documents, de la qualité des embeddings et du reranking. Je mets en place des jeux de questions/réponses attendues, des métriques simples (taux de citation correcte) et des garde-fous quand la base ne contient pas la réponse.',
    sections: [
      {
        heading: 'Mise à jour',
        paragraphs: [
          'Pipeline d’ingestion (webhooks, batch), invalidation du cache vectoriel et traçabilité des versions de documents ingérés.',
        ],
      },
    ],
    faq: [
      {
        question: 'Vector DB ?',
        answer:
          'Choix selon volumétrie, latence et contraintes d’hébergement (cloud managé vs self-hosted). Le cadrage inclut coût et reprise après incident.',
      },
    ],
  },
  'ia:ia-generative-ecommerce': {
    metaDescription:
      'IA générative e-commerce : fiches produit, search, support et conformité — freelance Clickdev.',
    lead:
      'L’IA peut accélérer rédaction, recherche conversationnelle ou support — à condition de ne pas inventer des promesses légales ou des specs produit. Je cadre les sorties (templates, validation humaine sur catégories sensibles) et le SEO (duplicate, canonical).',
    sections: [
      {
        heading: 'Conversion',
        paragraphs: [
          'Tests A/B sur les modules IA visibles client, mesure du temps gagné en interne, et rollback rapide si la qualité baisse.',
        ],
      },
    ],
    faq: [
      {
        question: 'Données clients dans le LLM ?',
        answer:
          'À éviter par défaut : anonymisation, prompts côté serveur, et fournisseurs avec DPA adaptés au RGPD.',
      },
    ],
  },
  'seo:redaction-seo': {
    metaDescription:
      'Rédaction SEO : intention, structure, E-E-A-T et briefs éditoriaux — accompagnement freelance Clickdev.',
    lead:
      'La rédaction SEO utile part d’une intention de recherche claire et d’une structure lisible (titres, listes, FAQ). Je fournis des briefs actionnables (mots-clés secondaires, entités, angle différenciant) et des critères de qualité mesurables plutôt que du remplissage.',
    sections: [
      {
        heading: 'Alignement business',
        paragraphs: [
          'Chaque page doit servir un objectif (lead, vente, support). Les contenus « puits » sans CTA sont identifiés et corrigés.',
        ],
      },
    ],
    faq: [
      {
        question: 'Vous rédigez ou nous ?',
        answer:
          'Les deux : brief + relecture technique, ou rédaction clé en main sur périmètres ciblés selon votre ton de marque.',
      },
    ],
  },
  'seo:netlinking': {
    metaDescription:
      'Netlinking : stratégie de liens, risques, digital PR et suivi — conseil freelance Clickdev.',
    lead:
      'Le netlinking durable repose sur des contenus citables et des relations presse / partenaires — pas sur des achats de liens opaques. Je priorise les opportunités à faible risque pénalité et les mentions cohérentes avec votre secteur.',
    sections: [
      {
        heading: 'Mesure',
        paragraphs: [
          'Suivi des backlinks nouveaux, ancres naturelles, et corrélation prudente avec le trafic organique (causalité difficile).',
        ],
      },
    ],
    faq: [
      {
        question: 'PBN / achats massifs ?',
        answer:
          'Non recommandé : risque algorithmique et réputationnel. Mieux vaut moins de liens mais plus qualitatifs.',
      },
    ],
  },
  'crm-outils-metiers:integration-crm': {
    metaDescription:
      'Intégration CRM : synchronisation contacts, deals, emails et outils tiers — freelance Clickdev.',
    lead:
      'Une intégration CRM réussie définit la source de vérité, la résolution des doublons et la fréquence de sync (temps réel vs batch). Je mappe les champs, les règles de conflit et les scénarios d’échec (API down, quotas).',
    sections: [
      {
        heading: 'Adoption',
        paragraphs: [
          'Données propres avant branchement : sinon le CRM reflète la pagaille existante. Ateliers courts avec ventes/support pour valider le modèle.',
        ],
      },
    ],
    faq: [
      {
        question: 'HubSpot / Salesforce / Pipedrive ?',
        answer:
          'Les trois sont courants : le travail porte sur le modèle de données, les webhooks et les droits d’API plutôt que sur la marque seule.',
      },
    ],
  },
  'maintenance:maintenance-ecommerce': {
    metaDescription:
      'Maintenance e-commerce : pics de charge, paiement, stocks et sécurité — freelance Clickdev.',
    lead:
      'Un e-commerce en production exige des fenêtres de déploiement, des tests panier/checkout et une surveillance des paiements et webhooks. Je documente les procédures d’incident (rollback, mode dégradé) pour les soldes et campagnes.',
    sections: [
      {
        heading: 'Perf & fiabilité',
        paragraphs: [
          'Caches, files d’attente, limites sur les jobs batch et alertes sur erreurs 5xx ou taux d’échec paiement anormal.',
        ],
      },
    ],
    faq: [
      {
        question: 'Astreinte ?',
        answer:
          'Possible en option avec SLA cadré (heures, canaux, escalade) selon votre chiffre d’affaires en ligne.',
      },
    ],
  },
  'maintenance:infogerance': {
    metaDescription:
      'Infogérance : serveurs, monitoring, sauvegardes et mises à jour — freelance Clickdev.',
    lead:
      'L’infogérance couvre l’exploitation : comptes, pare-feu, certificats TLS, sauvegardes testées et mises à jour OS/runtime. Je clarifie le périmètre (IaaS vs PaaS) et les responsabilités partagées avec votre hébergeur.',
    sections: [
      {
        heading: 'Transparence',
        paragraphs: [
          'Inventaire des actifs, runbooks pour incidents fréquents, et rapports réguliers (disponibilité, patchs, capacité).',
        ],
      },
    ],
    faq: [
      {
        question: 'Cloud AWS / GCP / Scaleway ?',
        answer:
          'Oui : les bonnes pratiques (least privilege, buckets privés, budgets) sont transposables ; le détail dépend de votre stack.',
      },
    ],
  },
};

function templateArticle(
  childLabel: string,
  parentLabel: string,
  silo: ServiceSilo
): MarketingLongArticle {
  const siloHint =
    silo === 'sites-internet'
      ? 'votre présence web et vos parcours de conversion'
      : silo === 'applications-mobiles'
        ? 'vos applications et utilisateurs mobiles'
        : silo === 'ia'
          ? 'vos cas d’usage IA et l’industrialisation'
          : silo === 'seo'
            ? 'votre visibilité organique et la qualité technique du site'
            : silo === 'crm-outils-metiers'
              ? 'vos processus internes et la qualité des données'
              : 'la stabilité et la sécurité de vos plateformes';

  return {
    metaDescription: `${childLabel} — ${parentLabel}. Accompagnement freelance Clickdev : cadrage, mise en œuvre et suivi.`,
    lead: `Cette page détaille l’offre « ${childLabel} » au sein du pôle ${parentLabel}. L’objectif est d’aligner technique, produit et marketing sur ${siloHint}, avec des livrables mesurables et une roadmap claire.`,
    sections: [
      {
        heading: 'Approche',
        paragraphs: [
          `Après un cadrage court, je propose un plan par jalons : preuve de concept si nécessaire, développement itératif, puis durcissement (tests, performances, sécurité). Vous gardez la visibilité sur les priorités et les risques.`,
          'Les intégrations avec vos outils existants (CRM, analytics, paiement, auth) sont documentées pour faciliter la reprise par vos équipes ou un autre prestataire.',
        ],
      },
      {
        heading: 'Livrables types',
        paragraphs: [
          'Spécifications fonctionnelles légères, maquettes validées ou intégration à partir de votre design system, code versionné, déploiement automatisé quand c’est pertinent, et transfert de compétences en fin de mission.',
        ],
      },
      {
        heading: 'Pourquoi un freelance ?',
        paragraphs: [
          'Un interlocuteur unique réduit la latence entre besoin métier et implémentation. Je peux aussi renforcer une équipe interne sur une phase critique (lancement, migration, incident).',
        ],
      },
    ],
    faq: [
      {
        question: `Quels livrables pour « ${childLabel} » ?`,
        answer:
          'Ils dépendent du périmètre validé au devis : démo intermédiaire, documentation, formation et parfois runbook d’exploitation pour les équipes ops.',
      },
      {
        question: 'Intervention avec mon agence actuelle ?',
        answer:
          'Oui : rôles partagés (design / contenu / dev), revues de code communes et cérémonies adaptées à votre organisation.',
      },
      {
        question: 'Comment lancer un projet ?',
        answer:
          'Contact ou formulaire devis avec contexte et contraintes ; retour sous 1–2 jours ouvrés avec proposition de call ou devis.',
      },
    ],
  };
}

export function getSiloChildArticle(
  silo: ServiceSilo,
  slug: string,
  childLabel: string,
  parentLabel: string
): MarketingLongArticle {
  const key = `${silo}:${slug}`;
  const override = OVERRIDES[key];
  if (override) {
    return override;
  }
  return templateArticle(childLabel, parentLabel, silo);
}
