import type { ExpertisePremiumDoc } from '@/lib/constants/expertise-premium/types';

const compare3 = (
  title: string,
  subtitle: string,
  rows: { label: string; c: readonly [boolean, boolean, boolean] }[],
): ExpertisePremiumDoc['compare'] => ({
  kicker: 'Décision',
  title,
  subtitle,
  columns: ['Expérimentation', 'MVP prudent', 'Mise en prod encadrée'] as const,
  rows,
});

export const EXPERTISE_PREMIUM_IA: Record<'openai' | 'claude-api' | 'langchain' | 'n8n', ExpertisePremiumDoc> = {
  openai: {
    slug: 'openai',
    metaTitle: 'Intégration OpenAI freelance — GPT, assistants, embeddings | Clickdev',
    metaDescription:
      'Intégration OpenAI freelance : API GPT, assistants, function calling, embeddings, garde-fous coûts et conformité. Missions remote France.',
    keywords: ['OpenAI freelance', 'API GPT', 'embeddings', 'function calling', 'RAG OpenAI'] as const,
    hero: {
      chapter: 'Expertises · OpenAI',
      subline: 'David Rieu — développeur freelance',
      h1: 'Intégration OpenAI — développeur freelance',
      lead:
        'Les API OpenAI permettent de prototyper vite ; l’enjeu en production est la fiabilité : validation des sorties, budgets tokens, journaux d’audit et stratégie de repli si le modèle est indisponible. Je conçois des pipelines testables, versionnés, avec le minimum de données personnelles envoyées au modèle — et des garde-fous métier avant affichage à l’utilisateur final.',
      primaryCta: { href: '/devis', label: 'Parler de votre cas d’usage IA' },
      secondaryCta: { href: '/ia', label: 'Offres IA' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Intégrations OpenAI sérieuses',
      subtitle: 'Du POC au service : contrats, tests, monitoring.',
      items: [
        { title: 'Prompts & schémas versionnés', body: 'Pas de magie dans l’UI : ce qui part au modèle est traçable et revue-able.' },
        { title: 'Function calling maîtrisé', body: 'Outils métiers appelés avec validation stricte des entrées/sorties.' },
        { title: 'Budget & quotas', body: 'Plafonds, alertes, dégradation gracieuse.' },
        { title: 'Conformité', body: 'Minimisation données, logs d’accès, clauses cadrées avec votre DPO si besoin.' },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'OpenAI dans votre produit sans prendre de retard sur la dette',
      paragraphs: [
        'Un chatbot ou un assistant n’est pas qu’un appel HTTP : il faut gérer les timeouts, les hallucinations, les contenus sensibles et la latence perçue.',
        'Les embeddings servent au retrieval : la qualité du chunking et des métadonnées prime sur le choix du modèle le plus cher.',
        'Je relie souvent OpenAI à vos systèmes existants (CRM, base documentaire) via des couches Node ou Python testées.',
        'Le silo /ia détaille chatbots, agents, e-commerce IA et automatisation.',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Profils OpenAI',
      subtitle: 'Produit, support, opérations.',
      cards: [
        { title: 'Produit', body: 'Assistant interne, résumés, extraction structurée.' },
        { title: 'Support', body: 'Macro-réponses assistées avec validation humaine.' },
        { title: 'Marketing', body: 'Génération assistée, jamais sans relecture humaine sur claims sensibles.' },
        { title: 'DSI', body: 'Gateways, clés rotatives, traçabilité.' },
      ],
    },
    compare: compare3(
      'Maturité d’une intégration OpenAI',
      'Expérimenter vs industrialiser.',
      [
        { label: 'Jeu de tests sur cas limites', c: [true, true, true] },
        { label: 'Réduction données personnelles', c: [false, true, true] },
        { label: 'Monitoring latence & erreurs', c: [false, false, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Intégration OpenAI',
      steps: [
        { n: '01', title: 'Cas d’usage', body: 'Valeur, risques, données, utilisateurs.' },
        { n: '02', title: 'Design', body: 'Prompts, outils, schémas JSON.' },
        { n: '03', title: 'Implémentation', body: 'Backend, auth, rate limits.' },
        { n: '04', title: 'Recette', body: 'Tests rouge/vert, charge modérée.' },
        { n: '05', title: 'Prod', body: 'Alerting, revue prompts, itérations.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Stack typique',
      body: 'Node ou Python, Zod/Pydantic, stockage vecteur si RAG, Redis pour cache, logs structurés.',
      labels: ['OpenAI', 'TypeScript', 'Python', 'PostgreSQL', 'Redis', 'Langfuse'],
    },
    cases: { kicker: 'Portfolio', title: 'Réalisations', intro: 'Projets web & produit sur /realisations.' },
    faq: {
      kicker: 'FAQ',
      title: 'FAQ — OpenAI',
      subtitle: 'Modèles, coûts, données.',
      items: [
        {
          question: 'GPT-4o mini suffit-il ?',
          answer:
            'Souvent pour des tâches structurées ; on benchmark sur vos données réelles avant de monter en gamme.',
        },
        {
          question: 'Où passent les données ?',
          answer:
            'Paramètres d’API et politiques OpenAI + vos obligations ; je minimise et journalise côté applicatif.',
        },
        {
          question: 'Comment limiter les coûts tokens ?',
          answer:
            'Résumés intermédiaires, cache des réponses stables, modèles adaptés à la tâche et plafonds d’appel par utilisateur.',
        },
        {
          question: 'Réponses « inventées » sur des faits métier ?',
          answer:
            'Grounding sur sources indexées, sorties structurées validées, et relecture humaine sur tout ce qui engage la responsabilité.',
        },
      ],
    },
    finalCta: {
      title: 'Cas d’usage OpenAI à cadrer ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Me contacter',
    },
  },

  'claude-api': {
    slug: 'claude-api',
    metaTitle: 'Intégration Claude (Anthropic) freelance — API, long contexte | Clickdev',
    metaDescription:
      'Intégration API Anthropic / Claude : analyse de documents, RAG, agents, sécurité des prompts. Freelance remote France.',
    keywords: ['Claude API freelance', 'Anthropic', 'long contexte', 'RAG Claude'] as const,
    hero: {
      chapter: 'Expertises · Claude API',
      subline: 'David Rieu — développeur freelance',
      h1: 'Intégration Claude API — développeur freelance',
      lead:
        'Claude est particulièrement adapté au long contexte et à l’analyse de documents volumineux. J’intègre l’API Anthropic en respectant vos politiques de données : prompts et documents sensibles traités côté serveur, sorties validées avant affichage, budgets de tokens suivis. Je combine cela avec vos bases documentaires ou CRM existants lorsque c’est pertinent.',
      primaryCta: { href: '/devis', label: 'Parler de votre projet Claude' },
      secondaryCta: { href: '/ia', label: 'Offres IA' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Usages Claude utiles en entreprise',
      subtitle: 'Synthèse, extraction, assistance — sans fuite de données.',
      items: [
        { title: 'Pipelines documentaires', body: 'PDF ou texte : chunking, métadonnées, citations contrôlées.' },
        { title: 'Assistants internes', body: 'Rôles, périmètres, relecture humaine sur décisions sensibles.' },
        { title: 'Interop', body: 'Avec stack Node/Python et stockage adapté.' },
        { title: 'Garde-fous', body: 'Filtres sortie, logs, budgets.' },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'Claude vs autres modèles : un choix pragmatique',
      paragraphs: [
        'Le bon modèle dépend du type de documents, des politiques d’entreprise et des coûts. Un POC comparatif sur vos fichiers réels tranche vite.',
        'Le long contexte n’élimine pas le besoin de retrieval : on évite d’envoyer des dizaines de pages inutiles à chaque requête.',
        'Je positionne Claude dans une architecture où l’humain reste dans la boucle pour les décisions à risque.',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Profils Claude API',
      subtitle: 'Juridique, ops knowledge, produit.',
      cards: [
        { title: 'Juridique / conformité', body: 'Synthèse de dossiers sous contrainte de périmètre.' },
        { title: 'Knowledge management', body: 'Base interne + Q/R contrôlées.' },
        { title: 'Produit', body: 'Assistants spécialisés par vertical.' },
        { title: 'DSI', body: 'Clés, VPC si dispo, traçabilité.' },
      ],
    },
    compare: compare3(
      'Industrialisation Claude',
      'Du test à la prod.',
      [
        { label: 'Politique données documentée', c: [false, true, true] },
        { label: 'Tests sur jeux de docs réels', c: [false, false, true] },
        { label: 'Plan de repli si API down', c: [false, true, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Mission Claude API',
      steps: [
        { n: '01', title: 'Sources', body: 'Formats, volume, sensibilité.' },
        { n: '02', title: 'Design', body: 'Prompts, retrieval, schémas sortie.' },
        { n: '03', title: 'Build', body: 'Services, auth, logs.' },
        { n: '04', title: 'Recette', body: 'Cas limites, charge.' },
        { n: '05', title: 'Prod', body: 'Monitoring, revues.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Stack',
      body: 'Anthropic SDK, TypeScript/Python, stockage S3 + index vectoriel si besoin.',
      labels: ['Claude', 'Anthropic', 'TypeScript', 'Python', 'Pgvector', 'S3'],
    },
    cases: { kicker: 'Portfolio', title: 'Réalisations', intro: '/realisations' },
    faq: {
      kicker: 'FAQ',
      title: 'FAQ — Claude',
      subtitle: 'OpenAI vs Claude.',
      items: [
        {
          question: 'Claude ou OpenAI ?',
          answer:
            'Benchmark sur vos documents et contraintes compliance ; parfois un mix (modèle A pour tâche X).',
        },
        {
          question: 'Stockage des conversations ?',
          answer:
            'Durée minimale, chiffrement au repos si requis, accès rôles — défini avec vous.',
        },
        {
          question: 'Documents très sensibles (juridique) ?',
          answer:
            'Périmètre d’indexation restreint, masquage si besoin, et parcours de validation humaine avant diffusion externe.',
        },
        {
          question: 'Latence utilisateur ?',
          answer:
            'Streaming, files d’attente pour tâches longues, et découpage des appels pour garder une UI réactive.',
        },
      ],
    },
    finalCta: {
      title: 'Projet Claude API ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Me contacter',
    },
  },

  langchain: {
    slug: 'langchain',
    metaTitle: 'Développeur LangChain freelance — RAG, agents, outils | Clickdev',
    metaDescription:
      'LangChain / orchestration IA : chaînes RAG, outils, mémoire, évaluation. Freelance France, missions cadrées.',
    keywords: ['LangChain freelance', 'RAG', 'agents IA', 'orchestration LLM'] as const,
    hero: {
      chapter: 'Expertises · LangChain',
      subline: 'David Rieu — développeur freelance',
      h1: 'Développeur LangChain & RAG freelance',
      lead:
        'LangChain (ou des alternatives plus légères) sert à composer chaînes RAG, outils et mémoire autour des LLM. Je veille à ne pas sur-architecturer : parfois quelques fonctions bien testées et une base vectorielle suffisent pour un MVP robuste. Quand LangChain apporte de la clarté — orchestration d’outils, parsers, evaluateurs — je l’emploie avec des critères de sortie et des métriques de qualité sur vos jeux de questions réelles.',
      primaryCta: { href: '/devis', label: 'Parler de votre RAG' },
      secondaryCta: { href: '/ia/rag-base-connaissances', label: 'RAG & base de connaissances' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'RAG et agents maintenables',
      subtitle: 'Retrieval fiable, moins d’hallucinations, coûts maîtrisés.',
      items: [
        { title: 'Chunking & métadonnées', body: 'Titres, sections, filtres — ce qui évite le bruit dans le retrieval.' },
        { title: 'Évaluation', body: 'Jeux de Q/R, scores simples avant ouverture aux utilisateurs.' },
        { title: 'Outils', body: 'SQL, API internes, avec autorisations explicites.' },
        { title: 'Simplicité', body: 'On retire LangChain si une couche maison est plus lisible.' },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'LangChain : utile quand le flux mérite une orchestration explicite',
      paragraphs: [
        'Les abstractions LangChain accélèrent quand plusieurs outils et parsers s’enchaînent. Pour une seule fonction d’embedding + prompt, une lib légère suffit souvent.',
        'La qualité du RAG se joue sur les données sources et sur la politique de citation — pas sur le nombre de chaînages.',
        'Je documente les prompts, versions de modèles et jeux de test pour que l’équipe puisse itérer sans tout casser.',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Profils LangChain / RAG',
      subtitle: 'Produit, data, support.',
      cards: [
        { title: 'Produit', body: 'Assistant sur documentation interne.' },
        { title: 'Data', body: 'Enrichissement Q/R sur catalogues.' },
        { title: 'Support', body: 'Suggestions avec validation.' },
        { title: 'Innovation', body: 'POC à industrialiser ou simplifier.' },
      ],
    },
    compare: compare3(
      'RAG durable',
      'Qualité vs complexité.',
      [
        { label: 'Jeux d’évaluation', c: [false, true, true] },
        { label: 'Reranking si nécessaire', c: [false, false, true] },
        { label: 'Traçabilité sources', c: [false, true, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Mission RAG',
      steps: [
        { n: '01', title: 'Sources', body: 'Formats, accès, mise à jour.' },
        { n: '02', title: 'Index', body: 'Chunking, métadonnées, vector DB.' },
        { n: '03', title: 'Chaîne', body: 'Prompts, outils, parsers.' },
        { n: '04', title: 'Eval', body: 'Métriques, garde-fous.' },
        { n: '05', title: 'Prod', body: 'Monitoring, itérations données.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Stack',
      body: 'LangChain ou LCEL, OpenAI/Claude, Pgvector/Pinecone, Python ou TS.',
      labels: ['LangChain', 'Python', 'OpenAI', 'Claude', 'Pgvector', 'Pinecone'],
    },
    cases: { kicker: 'Portfolio', title: 'Réalisations', intro: '/realisations' },
    faq: {
      kicker: 'FAQ',
      title: 'FAQ — LangChain / RAG',
      subtitle: 'Vector DB, coûts.',
      items: [
        {
          question: 'Quelle vector DB ?',
          answer:
            'Pgvector si déjà Postgres ; Pinecone/Qdrant si besoin de scale ou features managées — coût vs ops.',
        },
        {
          question: 'LangChain obligatoire ?',
          answer:
            'Non : parfois orchestration maison plus lisible ; je choisis selon complexité et équipe.',
        },
        {
          question: 'Reranking : quand l’ajouter ?',
          answer:
            'Quand le retrieval renvoie trop de bruit ; un petit modèle de rerank améliore souvent la précision pour un coût maîtrisé.',
        },
        {
          question: 'Mise à jour des documents source ?',
          answer:
            'Stratégie d’ingestion (full vs delta), horodatage des chunks, et invalidation pour éviter des réponses sur d’anciennes versions.',
        },
      ],
    },
    finalCta: {
      title: 'RAG ou agents à concevoir ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Me contacter',
    },
  },

  n8n: {
    slug: 'n8n',
    metaTitle: 'n8n freelance — workflows, intégrations, automatisation | Clickdev',
    metaDescription:
      'Freelance n8n : workflows, webhooks, intégrations SaaS, self-hosted, idempotence, monitoring. France remote.',
    keywords: ['n8n freelance', 'automatisation n8n', 'workflow', 'intégration SaaS'] as const,
    hero: {
      chapter: 'Expertises · n8n',
      subline: 'David Rieu — développeur freelance',
      h1: 'Développeur & intégrateur n8n freelance',
      lead:
        'n8n enchaîne applications, APIs et bases sans tout recoder : synchronisations CRM, alertes, enrichissement de leads, pipelines vers la facturation. Je conçois des workflows lisibles (nommage, gestion d’erreurs, retries), des secrets hors dépôt et des scénarios testables avant passage en production — en self-hosted ou cloud selon vos contraintes RGPD et d’exploitation.',
      primaryCta: { href: '/devis', label: 'Parler de vos workflows' },
      secondaryCta: { href: '/ia/automatisation-ia', label: 'Automatisation IA' },
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Automatisations n8n fiables',
      subtitle: 'Moins de silences radio la nuit, plus de traçabilité.',
      items: [
        { title: 'Webhooks idempotents', body: 'Signatures, replays, journaux exploitables.' },
        { title: 'Quotas API respectés', body: 'Backoff, files, découpage des lots.' },
        { title: 'Secrets propres', body: 'Variables d’environnement, rotation, pas de clés en dur dans les nœuds.' },
        { title: 'Documentation', body: 'Carte des flux critiques et ownership par équipe.' },
      ],
    },
    editorial: {
      kicker: 'Lecture',
      title: 'n8n : orchestrateur, pas remplaçant de toute la logique métier',
      paragraphs: [
        'n8n va vite pour relier HubSpot, Notion, Gmail, bases SQL ou webhooks internes. Quand la logique métier devient dense, un service Node ou Python prend le relais — souvent en hybride avec n8n comme chef d’orchestre.',
        'Je cartographie les dépendances et les points single-of-failure avant d’industrialiser.',
        'Self-hosted impose mises à jour et sauvegardes : on les planifie comme pour tout composant critique.',
      ],
    },
    audience: {
      kicker: 'Pour vous',
      title: 'Profils n8n',
      subtitle: 'Ops, sales, finance, IT.',
      cards: [
        { title: 'Sales / marketing ops', body: 'Sync leads, scoring léger, alertes Slack.' },
        { title: 'Finance', body: 'Exports, rapprochements, relances.' },
        { title: 'IT', body: 'Ponts entre SaaS sans multiplier les scripts orphelins.' },
        { title: 'PM', body: 'MVP d’intégration avant produit dédié.' },
      ],
    },
    compare: compare3(
      'Workflows n8n',
      'Bricolage vs prod.',
      [
        { label: 'Gestion erreurs & alertes', c: [false, true, true] },
        { label: 'Logs consultables', c: [false, false, true] },
        { label: 'Reprise sur incident', c: [false, true, true] },
      ],
    ),
    process: {
      kicker: 'Process',
      title: 'Mission n8n',
      steps: [
        { n: '01', title: 'Cartographie', body: 'Systèmes, événements, données.' },
        { n: '02', title: 'Prototype', body: 'Flux minimal viable, tests.' },
        { n: '03', title: 'Durcissement', body: 'Retries, idempotence, secrets.' },
        { n: '04', title: 'Mise en prod', body: 'Monitoring, ownership.' },
        { n: '05', title: 'Évolution', body: 'Versions, changelogs internes.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Écosystème',
      body: 'n8n cloud ou self-hosted, credentials vault, webhooks signés, bases SQL, APIs REST.',
      labels: ['n8n', 'HTTP', 'PostgreSQL', 'Slack', 'HubSpot', 'Notion', 'Docker'],
    },
    cases: { kicker: 'Portfolio', title: 'Réalisations', intro: '/realisations' },
    faq: {
      kicker: 'FAQ',
      title: 'FAQ — n8n',
      subtitle: 'Self-hosted, limites.',
      items: [
        {
          question: 'n8n plutôt que du code ?',
          answer:
            'Pour relier des services stables ; dès que la logique est critique et complexe, code + tests dédiés.',
        },
        {
          question: 'Self-hosted : quelles ops ?',
          answer:
            'Mises à jour, sauvegardes workflow + credentials, supervision disque et jobs.',
        },
        {
          question: 'Webhooks entrants : sécurité ?',
          answer:
            'Signature HMAC, secrets rotatifs, rejeu contrôlé et journal des payloads (hors données sensibles en clair).',
        },
        {
          question: 'Limites des nœuds « no-code » ?',
          answer:
            'Boucles et conditions simples OK ; dès que la logique métier diverge, on extrait un micro-service testé.',
        },
      ],
    },
    finalCta: {
      title: 'Workflows n8n à fiabiliser ?',
      primaryHref: '/devis',
      primaryLabel: 'Demander un devis',
      secondaryHref: '/contact',
      secondaryLabel: 'Me contacter',
    },
  },
};
