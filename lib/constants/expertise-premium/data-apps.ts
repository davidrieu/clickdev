import type { ExpertisePremiumDoc } from '@/lib/constants/expertise-premium/types';

const compare3 = (
  title: string,
  subtitle: string,
  rows: { label: string; c: readonly [boolean, boolean, boolean] }[],
): ExpertisePremiumDoc['compare'] => ({
  kicker: 'Décision',
  title,
  subtitle,
  columns: ['POC rapide', 'Base moyenne', 'Prod structurée avec Clickdev'] as const,
  rows,
});

export const EXPERTISE_PREMIUM_APPS: Record<
  'react-native' | 'laravel' | 'nodejs' | 'python',
  ExpertisePremiumDoc
> = {
  'react-native': {
    slug: 'react-native',
    metaTitle: 'Développeur React Native freelance — iOS, Android, stores | Clickdev',
    metaDescription:
      'Développeur React Native freelance : apps iOS et Android, TypeScript, navigation, modules natifs, CI, soumission App Store / Play Console.',
    keywords: ['React Native freelance', 'app iOS Android', 'Expo', 'développeur mobile freelance'] as const,
    hero: {
      chapter: 'Expertises · React Native',
      subline: 'David Rieu — développeur freelance',
      h1: 'Développeur React Native freelance',
      lead:
        'React Native permet une équipe produit unique pour iOS et Android tout en gardant la porte ouverte vers le natif (SDK, perfs, UI spécifique). Je structure le code pour limiter les re-renders, isoler la navigation et fiabiliser les builds : TypeScript, tests sur parcours critiques, pipelines qui buildent les deux plateformes à chaque merge.',
      primaryCta: { href: '/devis', label: 'Parler de votre app' },
      secondaryCta: { href: '/applications-mobiles', label: 'Offres applications mobiles' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Une app mobile prête pour les stores',
      subtitle: 'Stabilité, releases, conformité : le trio qui évite les refus Apple/Google.',
      items: [
        { title: 'Navigation & état maîtrisés', body: 'Stacks claires, erreurs réseau gérées, écrans offline quand le métier l’exige.' },
        { title: 'CI iOS + Android', body: 'Builds reproductibles, signatures, versioning, notes de release.' },
        { title: 'Pont natif quand nécessaire', body: 'Modules natifs ciblés plutôt que sur-ingénierie.' },
        { title: 'Préparation stores', body: 'Privacy manifest, captures, textes conformes, TestFlight / tracks internes.' },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'React Native : partager le code sans sacrifier l’expérience',
      paragraphs: [
        'Beaucoup de produits n’ont pas besoin de deux équipes Swift + Kotlin au démarrage. React Native accélère les itérations tant que l’on discipline l’architecture : navigation, cache, images, listes longues.',
        'Expo accélère le bootstrap ; le workflow « bare » reste pertinent pour certains SDK ou exigences de build. Le choix se fait sur la liste d’intégrations à J+90, pas sur la mode.',
        'Les refus de review viennent souvent des détails (tracking, descriptions, crash au cold start). Je prépare des checklists et des builds de recette avant soumission.',
        'Pour aller plus loin sur le silo mobile, voir /applications-mobiles (iOS natif, Android, PWA).',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Qui me sollicite sur React Native',
      subtitle: 'Produit, startup, DSI.',
      cards: [
        { title: 'Produit / CEO', body: 'MVP store, itérations rapides, métriques d’usage.' },
        { title: 'Équipes existantes RN', body: 'Audit perf, dette navigation, migration lib.' },
        { title: 'Agences', body: 'Renfort senior sur un client à deadline store.' },
        { title: 'Scale-up', body: 'Stabilisation avant série A, monitoring crash.' },
      ],
    },
    compare: compare3(
      'Qualité d’une app React Native',
      'Ce qui sépare une démo d’une app en production.',
      [
        { label: 'CI sur iOS et Android', c: [true, true, true] },
        { label: 'Stratégie erreurs réseau', c: [false, true, true] },
        { label: 'Tests parcours critiques', c: [false, false, true] },
        { label: 'Playbook soumission stores', c: [false, true, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Mission React Native',
      steps: [
        { n: '01', title: 'Brief & risques', body: 'Parcours, auth, offline, analytics, volumétrie.' },
        { n: '02', title: 'Architecture', body: 'Navigation, state, modules natifs identifiés.' },
        { n: '03', title: 'Build', body: 'Features, tests device, perf listes.' },
        { n: '04', title: 'Stores', body: 'Soumissions, corrections review.' },
        { n: '05', title: 'Run', body: 'Crash reporting, releases mineures.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Écosystème React Native',
      body: 'TypeScript, React Navigation ou Expo Router, Reanimated si animations, Fastlane, EAS si Expo, Metro, Jest / RNTL ciblés.',
      labels: ['React Native', 'TypeScript', 'Expo', 'Fastlane', 'Jest', 'Firebase', 'Sentry'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Apps & web',
      intro: 'Réalisations publiques sur la page Réalisations.',
    },
    faq: {
      kicker: 'FAQ',
      title: 'FAQ — React Native',
      subtitle: 'Expo, perf, natif.',
      items: [
        {
          question: 'Expo ou bare ?',
          answer:
            'Expo si le périmètre colle aux APIs Expo Go / dev client ; bare si SDK spécifiques ou contraintes build lourdes.',
        },
        {
          question: 'Peut-on mixer avec du Swift / Kotlin ?',
          answer:
            'Oui pour des modules ciblés ; on documente la surface pour limiter la dette.',
        },
        {
          question: 'OTA (Expo Updates) : jusqu’où aller ?',
          answer:
            'Idéal pour correctifs JS et assets ; les changements natifs ou de permissions restent des soumissions stores planifiées.',
        },
        {
          question: 'Refus App Store / Play Console : comment réagir ?',
          answer:
            'On lit la guideline citée, on corrige avec traçabilité (privacy manifest, data safety, captures) puis resoumission ciblée.',
        },
      ],
    },
    finalCta: {
      title: 'Une app React Native à sortir ou à stabiliser ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Me contacter',
    },
  },

  laravel: {
    slug: 'laravel',
    metaTitle: 'Développeur Laravel freelance — API, admin, outils métiers | Clickdev',
    metaDescription:
      'Développeur Laravel freelance : API REST, admin Filament ou custom, queues, intégrations, multi-tenant léger, tests et documentation.',
    keywords: ['Laravel freelance', 'API Laravel', 'Filament', 'queues Laravel', 'PHP freelance'] as const,
    hero: {
      chapter: 'Expertises · Laravel',
      subline: 'David Rieu — développeur freelance',
      h1: 'Développeur Laravel freelance',
      lead:
        'Laravel excelle pour les backends structurés : API REST/JSON, portails admin, jobs asynchrones, intégrations tierces. Je mets l’accent sur la validation des données, les migrations versionnées, les politiques d’autorisation et les tests sur les règles métier — pour que vos équipes puissent faire évoluer le produit sans peur des régressions.',
      primaryCta: { href: '/devis', label: 'Parler de votre backend Laravel' },
      secondaryCta: { href: '/crm-outils-metiers', label: 'CRM & outils métiers' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Un backend Laravel maintenable',
      subtitle: 'API claire, admin utile, jobs fiables.',
      items: [
        { title: 'APIs documentées', body: 'Contrats OpenAPI ou endpoints cohérents, erreurs typées, pagination.' },
        { title: 'Queues & webhooks', body: 'Retries, idempotence, DLQ ou logs pour reprendre les jobs ratés.' },
        { title: 'Admin maîtrisé', body: 'Filament ou panels sur mesure : droits par rôle, journaux d’audit.' },
        { title: 'Qualité', body: 'Form requests, policies, tests Feature sur flux sensibles.' },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'Laravel dans vos projets B2B et outils internes',
      paragraphs: [
        'Quand votre produit repose sur des règles métier (devis, workflow, droits), Laravel donne un cadre ORM + validation + auth sans réinventer la roue à chaque sprint.',
        'Je sépare les couches (actions / services) pour que les tests restent possibles et que l’onboarding des devs suivants soit rapide.',
        'Pour du multi-tenant, on choisit explicitement base unique vs schémas vs bases séparées — pas de magie cachée.',
        'Le silo CRM & outils métiers détaille comment j’intègre ces backends dans vos process.',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Profils Laravel',
      subtitle: 'Éditeurs SaaS, industrie, services.',
      cards: [
        { title: 'SaaS B2B', body: 'Onboarding clients, facturation, rôles.' },
        { title: 'DSI / lead dev', body: 'Renfort sur dette, perf SQL, upgrade majeur.' },
        { title: 'Ops / finance', body: 'Outils internes : exports, validations, intégrations ERP.' },
        { title: 'Agences', body: 'API pour front Next, mobile ou partenaires.' },
      ],
    },
    compare: compare3(
      'Backend Laravel',
      'Industrialisation vs bricolage.',
      [
        { label: 'Migrations versionnées', c: [true, true, true] },
        { label: 'Policies & logs d’audit', c: [false, true, true] },
        { label: 'Tests sur règles métier', c: [false, false, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Mission Laravel',
      steps: [
        { n: '01', title: 'Domaine', body: 'Règles, acteurs, données, intégrations.' },
        { n: '02', title: 'Modèle', body: 'Schéma DB, migrations, seeds utiles.' },
        { n: '03', title: 'API / admin', body: 'Endpoints, auth, UI admin.' },
        { n: '04', title: 'Hardening', body: 'Queues, rate limits, erreurs, monitoring.' },
        { n: '05', title: 'Livraison', body: 'Doc, transfert, TMA.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Stack Laravel',
      body: 'PHP 8.2+, Laravel 11+, Horizon, Redis, PostgreSQL ou MySQL, Telescope en dev, Docker.',
      labels: ['Laravel', 'PHP', 'PostgreSQL', 'Redis', 'Horizon', 'Filament', 'Docker'],
    },
    cases: { kicker: 'Portfolio', title: 'Réalisations', intro: 'Voir /realisations pour du contexte.' },
    faq: {
      kicker: 'FAQ',
      title: 'FAQ — Laravel',
      subtitle: 'Laravel vs Node, perf.',
      items: [
        {
          question: 'Laravel ou Node pour une API ?',
          answer:
            'Laravel si modèle relationnel riche et back-office inclus ; Node si équipe full JS et temps réel massif. Décision documentée.',
        },
        {
          question: 'Comment scaler les queues ?',
          answer:
            'Workers Horizon, supervision des failed jobs, idempotence des consumers — pas de « fire and forget » aveugle.',
        },
        {
          question: 'Tests : PHPUnit, Pest, Dusk ?',
          answer:
            'Couche métier testée en priorité (facturation, droits) ; Dusk pour quelques parcours critiques si le ROI est clair.',
        },
        {
          question: 'Multi-tenant : une base ou plusieurs ?',
          answer:
            'Schéma unique avec tenant_id souvent suffisant ; bases séparées si isolation forte ou contraintes légales — on documente le choix.',
        },
      ],
    },
    finalCta: {
      title: 'Backend Laravel à construire ou consolider ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Me contacter',
    },
  },

  nodejs: {
    slug: 'nodejs',
    metaTitle: 'Développeur Node.js freelance — API, workers, temps réel | Clickdev',
    metaDescription:
      'Développeur Node.js freelance : API TypeScript, microservices, workers, webhooks, serverless ou Docker. Fiabilité et observabilité.',
    keywords: ['Node.js freelance', 'API TypeScript', 'microservices', 'webhooks', 'serverless'] as const,
    hero: {
      chapter: 'Expertises · Node.js',
      subline: 'David Rieu — développeur freelance',
      h1: 'Développeur Node.js freelance',
      lead:
        'Node convient aux APIs à fort I/O, aux workers et au temps réel léger. Je structure les projets en TypeScript : validation des payloads (Zod), gestion d’erreurs homogène, timeouts et limitation de débit sur les webhooks, déploiement Docker ou serverless selon vos contraintes d’exploitation et de coût.',
      primaryCta: { href: '/devis', label: 'Parler de votre API Node' },
      secondaryCta: { href: '/crm-outils-metiers', label: 'Outils métiers' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Services Node.js fiables',
      subtitle: 'Moins d’incidents nocturnes, plus de visibilité.',
      items: [
        { title: 'Contrats d’API clairs', body: 'Schémas, erreurs typées, versioning raisonnable.' },
        { title: 'Webhooks idempotents', body: 'Signatures, replays, journalisation.' },
        { title: 'Observabilité', body: 'Logs structurés, traces sur chemins critiques.' },
        { title: 'Sécurité de base', body: 'Secrets hors repo, durcissement headers, dépendances suivies.' },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'Node.js au bon endroit dans votre système',
      paragraphs: [
        'Node brille quand les connexions concurrentes et les I/O non bloquants comptent. Pour du CPU pur lourd, on délègue à un worker ou un autre runtime — pas de dogme.',
        'Le piège classique est l’« async spaghetti » : je impose des frontières (modules, use-cases) et des tests sur les chemins d’erreur.',
        'Serverless ou conteneurs : le coût total (cold start, egress, runbooks) est chiffré avant engagement.',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Profils Node.js',
      subtitle: 'Produit, plateforme, intégrateurs.',
      cards: [
        { title: 'APIs publiques', body: 'Partenaires, mobile, front découplé.' },
        { title: 'Workers', body: 'Files, retries, charge variable.' },
        { title: 'Webhook hubs', body: 'Normalisation d’événements SaaS.' },
        { title: 'Startups', body: 'MVP API + auth + billing Stripe.' },
      ],
    },
    compare: compare3(
      'Node en production',
      'Robustesse attendue.',
      [
        { label: 'Validation runtime des entrées', c: [true, true, true] },
        { label: 'Timeouts & cancellation', c: [false, true, true] },
        { label: 'Dashboard erreurs', c: [false, false, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Mission Node.js',
      steps: [
        { n: '01', title: 'Besoin', body: 'Charge, latence, dépendances externes.' },
        { n: '02', title: 'Design API', body: 'Ressources, erreurs, auth.' },
        { n: '03', title: 'Implémentation', body: 'Code, tests, charge basique.' },
        { n: '04', title: 'Déploiement', body: 'CI, secrets, rollback.' },
        { n: '05', title: 'Exploitation', body: 'Alerting, runbooks.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Stack Node',
      body: 'TypeScript, Fastify ou Express selon contexte, Zod, OpenTelemetry si dispo, Postgres, Redis, Docker.',
      labels: ['Node.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Redis', 'Docker', 'OpenTelemetry'],
    },
    cases: { kicker: 'Portfolio', title: 'Réalisations', intro: 'Projets détaillés sur /realisations.' },
    faq: {
      kicker: 'FAQ',
      title: 'FAQ — Node.js',
      subtitle: 'Serverless, perf.',
      items: [
        {
          question: 'Serverless ou conteneur ?',
          answer:
            'Serverless pour auto-scaling simple ; conteneurs pour contrôle fin et workloads longs. Coût egress inclus dans la réflexion.',
        },
        {
          question: 'Comment éviter les fuites mémoire ?',
          answer:
            'Profilage ciblé, limites connexions, revue des listeners — surtout sur services long-running.',
        },
        {
          question: 'TypeScript strict sur l’API ?',
          answer:
            'Oui pour les contrats d’entrée/sortie et les DTO ; on évite le sur-typage des libs dynamiques sans gain.',
        },
        {
          question: 'Monorepo (Turborepo / Nx) : utile ?',
          answer:
            'Si plusieurs services partagent des schémas et clients générés ; sinon garder deux dépôts limite la complexité CI.',
        },
      ],
    },
    finalCta: {
      title: 'API ou workers Node à fiabiliser ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Me contacter',
    },
  },

  python: {
    slug: 'python',
    metaTitle: 'Développeur Python freelance — API, scripts métier, data | Clickdev',
    metaDescription:
      'Développeur Python freelance : FastAPI ou Django, scripts métier, ETL, intégrations, appels LLM, déploiement Docker. Remote France.',
    keywords: ['Python freelance', 'FastAPI', 'Django', 'ETL Python', 'automatisation Python'] as const,
    hero: {
      chapter: 'Expertises · Python',
      subline: 'David Rieu — développeur freelance',
      h1: 'Développeur Python freelance',
      lead:
        'Python sert aussi bien les APIs légères que les scripts métier, l’automatisation et les pipelines data. Je code en respectant la lisibilité (typage, tests sur les règles sensibles, packaging), les intégrations (queues, webhooks, fichiers) et un déploiement raisonnable : Docker, PaaS ou VPS selon vos contraintes RGPD et d’exploitation.',
      primaryCta: { href: '/devis', label: 'Parler de votre projet Python' },
      secondaryCta: { href: '/ia', label: 'Offres IA & automatisation' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Services Python utiles et durables',
      subtitle: 'Du script fiable au service HTTP versionné.',
      items: [
        { title: 'APIs propres', body: 'FastAPI ou Django REST : schémas, erreurs, auth.' },
        { title: 'Scripts métier', body: 'Imports CSV, contrôles, rapports, alertes.' },
        { title: 'Pipelines data', body: 'ETL idempotents, logs, reprises sur erreur.' },
        { title: 'Briques IA', body: 'Appels LLM encapsulés côté serveur, garde-fous budget.' },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'Python quand c’est le bon outil',
      paragraphs: [
        'Python brille pour prototyper vite puis durcir : data, glue entre systèmes, petits services HTTP, workers batch.',
        'Django accélère quand il faut admin + ORM + auth ; FastAPI pour des APIs async minimalistes. Le choix dépend du périmètre et de l’équipe.',
        'Pour l’IA, Python orchestre souvent les appels modèles et le pré/post-traitement ; la page /ia décrit l’offre complète.',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Profils Python',
      subtitle: 'Ops, data, produit.',
      cards: [
        { title: 'Ops / finance', body: 'Automatisation, rapports, contrôles.' },
        { title: 'Data / analytics', body: 'ETL, qualité données, exports.' },
        { title: 'Produit', body: 'POC API + auth avant scale.' },
        { title: 'Agences', body: 'Renfort backend Python sur client.' },
      ],
    },
    compare: compare3(
      'Python en entreprise',
      'Du notebook au service.',
      [
        { label: 'Environnements reproductibles', c: [false, true, true] },
        { label: 'Tests sur règles métier', c: [false, false, true] },
        { label: 'Packaging / déploiement documenté', c: [false, true, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Mission Python',
      steps: [
        { n: '01', title: 'Besoin', body: 'Données, volumétrie, contraintes légales.' },
        { n: '02', title: 'Design', body: 'Modules, API, batch.' },
        { n: '03', title: 'Implémentation', body: 'Code, tests, logs.' },
        { n: '04', title: 'Déploiement', body: 'Docker, secrets, monitoring.' },
        { n: '05', title: 'Run', body: 'Astreinte légère ou TMA.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Stack Python',
      body: 'FastAPI, Django, SQLAlchemy / ORM Django, Celery ou RQ, Pydantic, pytest, Poetry ou uv.',
      labels: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    },
    cases: { kicker: 'Portfolio', title: 'Réalisations', intro: 'Voir /realisations.' },
    faq: {
      kicker: 'FAQ',
      title: 'FAQ — Python',
      subtitle: 'Django vs FastAPI.',
      items: [
        {
          question: 'Django ou FastAPI ?',
          answer:
            'Django si admin + modèle relationnel riche tout de suite ; FastAPI si API async minimale et OpenAPI first.',
        },
        {
          question: 'Python pour du temps réel massif ?',
          answer:
            'Souvent Node ou autre pour le cœur temps réel ; Python en orchestration ou batch à côté.',
        },
        {
          question: 'Déploiement : Docker, systemd, PaaS ?',
          answer:
            'Docker + orchestrateur léger si plusieurs workers ; PaaS managé si l’équipe veut limiter l’ops — coût vs contrôle.',
        },
        {
          question: 'Celery / RQ pour les tâches async ?',
          answer:
            'Celery si volumétrie et workflows complexes ; RQ ou dramatiq pour des files plus simples — idempotence dans tous les cas.',
        },
      ],
    },
    finalCta: {
      title: 'Projet Python à cadrer ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Me contacter',
    },
  },
};
