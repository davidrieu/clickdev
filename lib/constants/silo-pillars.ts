import type { SiloPillarLayoutProps } from "@/components/templates/silo-pillar-layout";

export type SiloPillarDefinition = Pick<
  SiloPillarLayoutProps,
  "eyebrow" | "h1" | "lead" | "tldr" | "sections"
> & {
  metaTitle: string;
  metaDescription: string;
};

/** Props layout (sans métadonnées Next). */
export function siloLayoutBody(
  def: SiloPillarDefinition,
): Pick<SiloPillarLayoutProps, "eyebrow" | "h1" | "lead" | "tldr" | "sections"> {
  return {
    eyebrow: def.eyebrow,
    h1: def.h1,
    lead: def.lead,
    tldr: def.tldr,
    sections: def.sections,
  };
}

export const sitesInternetPillar: SiloPillarDefinition = {
  metaTitle: "Sites internet — développeur freelance e-commerce & plateformes",
  metaDescription:
    "Sites vitrines, e-commerce, marketplaces, intranets et landings : Next.js, WordPress, Shopify, WooCommerce. SEO technique, perf Web et maintenance.",
  eyebrow: "Sites internet",
  h1: "Des sites qui vendent, performent et restent maintenables.",
  lead:
    "Un site n’est pas une brochure : c’est un actif commercial, un point de contact client et souvent un outil interne. Je conçois des expériences web orientées conversion, performance réelle (Core Web Vitals, TTFB, caches) et SEO technique dès l’architecture — du site vitrine à la marketplace multi-vendeurs, avec une stack choisie selon vos contraintes business, votre équipe éditoriale et vos intégrations (ERP, PIM, paiement, CRM), et non l’inverse.",
  tldr: [
    "Stack argumentée : Next.js (App Router), WordPress headless ou classique, Shopify, WooCommerce ou Node/Laravel sur mesure selon risque, coût total et vélocité.",
    "SEO technique, données structurées, maillage interne et migrations 301 pensées comme une composante produit — pas comme un audit post-lancement.",
    "Livrables explicites : cadrage court, design system ou thème maîtrisé, intégration, recette, observabilité minimale et transfert pour que vous ne dépendiez pas d’une boîte noire.",
    "Après le go-live : maintenance/TMA, évolutions priorisées et coordination avec vos équipes marketing pour ne pas sacrifier la perf à chaque campagne.",
  ],
  sections: [
    {
      heading: "Problèmes concrets que je résous",
      paragraphs: [
        "Refonte lente qui pénalise le SEO et la confiance, tunnel d’achat fragile (abandon panier, erreurs paiement, temps de chargement catalogue), dette technique qui empêche d’itérer sur le pricing ou les promos, stack inadaptée au volume de SKU, ou intégrations ERP/PIM instables qui cassent les stocks affichés.",
        "Je priorise ce qui bouge l’aiguille : vitesse perçue sur mobile, parcours d’achat, indexation et duplication, stabilité en production, et instrumentation (logs, alertes) pour diagnostiquer vite quand quelque chose dérape.",
        "Côté organisation, je préfère un backlog priorisé et des décisions traçables à un cahier des charges figé six mois : le web change, vos concurrents aussi — la méthode doit absorber l’incertitude sans transformer chaque ajustement en crise.",
      ],
      subsections: [
        {
          heading: "E-commerce, marketplace et mise en relation",
          paragraphs: [
            "Les modèles multi-vendeurs ajoutent commissions, modération, litiges et parcours vendeur/acheteur asymétriques. Les plateformes de mise en relation exigent souvent vérification d’identité, messagerie, paiement escrow ou facturation intermédiaire — autant de points où l’UX et la conformité se croisent.",
            "Je relie ces sujets aux pages filles du silo (e-commerce, marketplace, mise en relation) et au SEO e-commerce / migrations lorsque vous refondez une boutique qui tourne déjà.",
          ],
        },
        {
          heading: "WordPress, Shopify, headless",
          paragraphs: [
            "WordPress reste pertinent pour des équipes éditoriales fortes et des sites contenu-first ; Shopify excelle quand le SaaS doit porter la conformité paiement et une partie de la perf ; Next.js headless prend le relais quand le front doit être une expérience sur mesure tout en consommant des APIs catalogue.",
            "Le bon choix dépend du coût total (plugins, licences, dette), de la gouvernance contenu et de la roadmap produit sur 18–36 mois — pas d’un benchmark Twitter du vendredi.",
          ],
        },
      ],
    },
    {
      heading: "Méthode — du cadrage à la mise en ligne",
      paragraphs: [
        "Atelier de cadrage court : objectifs mesurables (conversion, leads, temps de traitement interne), contraintes (juridique, marque, accessibilité), dépendances (contenu, traductions, connecteurs) et jalons livrables. Vous savez ce qui est in-scope, ce qui est risqué, et ce qui est explicitement hors périmètre.",
        "Itérations visibles sur staging, revues de recette structurées (parcours critiques, SEO smoke tests, paiement en sandbox), puis bascule production avec plan de rollback et monitoring minimal (uptime, erreurs 5xx, temps de réponse API).",
      ],
      subsections: [
        {
          heading: "SEO technique intégré au build",
          paragraphs: [
            "Balisage sémantique, canoniques, hreflang si besoin, données structurées pertinentes (Product, Offer, FAQPage quand utile), performance (images responsives, fonts, JS client raisonnable), et stratégie de maillage interne alignée sur l’intention de recherche.",
            "Si vous migrez depuis un ancien CMS ou une autre URL structure, je coordonne avec la page migration SEO du silo dédié pour éviter les trous d’indexation et les pertes de trafic évitables.",
          ],
        },
      ],
    },
    {
      heading: "Pour qui / pas pour qui",
      paragraphs: [
        "Pour les équipes qui veulent un partenaire technique capable de traduire un objectif business en backlog, et de documenter pour que d’autres développeurs puissent reprendre le flambeau sans tout jeter.",
        "Moins adapté si vous cherchez une équipe offshore à volume pour « refaire le site vite » sans propriétaire produit, sans accès aux décisions, ou sans possibilité de tester en conditions réelles (paiement, comptes, données).",
      ],
    },
    {
      heading: "Preuves, maintenance et suite logique",
      paragraphs: [
        "Les études de cas publiées sous /realisations/ servent de matière première quand elles existent dans Sanity : secteur, problème, solution, métriques. Elles complètent ce silo en montrant la livraison terrain, pas seulement la promesse.",
        "Après la mise en ligne, un contrat de maintenance/TMA clarifie SLA, volumétrie et feuille d’évolutions : c’est souvent ce qui sépare un site qui vieillit bien d’un site qui redevient « fragile » en six mois.",
        "Pour aller plus loin : explorez les pages filles du menu Sites internet, le silo SEO pour l’acquisition, le silo IA si vous voulez brancher recherche sémantique ou assistants sur votre catalogue, puis demandez un devis lorsque vous avez assez de contexte pour un chiffrage utile.",
      ],
    },
  ],
};

export const applicationsMobilesPillar: SiloPillarDefinition = {
  metaTitle: "Applications mobiles — iOS, Android, React Native, PWA",
  metaDescription:
    "Apps mobiles natives ou cross-platform : React Native, Swift, Kotlin, PWA. Stores, CI/CD, analytics, crash reporting et performance.",
  eyebrow: "Applications mobiles",
  h1: "Apps mobiles natives ou cross-platform, prêtes pour le terrain.",
  lead:
    "Du MVP testable en conditions réelles au produit store-ready : navigation fluide, états d’erreur honnêtes, mode offline raisonnable, analytics orientés produit et releases maîtrisées (CI/CD, signatures, conformité App Store / Play Console). J’applique la même exigence de performance que sur le web : temps de démarrage, listes longues, médias, et consommation batterie/réseau prises au sérieux.",
  tldr: [
    "React Native, Swift, Kotlin ou PWA selon vos contraintes d’équipe, vos APIs existantes et votre roadmap — avec un avis tranché sur ce qui est risqué.",
    "CI/CD, signatures, conformité store, privacy nutrition labels / data safety, et suivi des crashs intégrés au flux de release.",
    "Parcours critiques testés : auth, paiement in-app si concerné, permissions, deep links, et scénarios « réseau pourri ».",
    "Je peux soumettre aux stores ou former vos développeurs pour garder l’autonomie après la V1.",
  ],
  sections: [
    {
      heading: "Quand choisir React Native, natif ou PWA",
      paragraphs: [
        "React Native brille quand vous devez itérer vite sur iOS et Android avec une équipe TypeScript déjà présente côté web, et que vous n’êtes pas limités par des APIs OS ultra spécifiques. Natif (Swift/Kotlin) lorsque le hardware, les performances extrêmes, les widgets système ou des guidelines très strictes imposent la voie plateforme.",
        "La PWA est pertinente quand la distribution immédiate via URL prime, que les besoins push/offline restent modestes, et que le store n’apporte pas encore de levier acquisition. Ce n’est pas « moins bien », c’est un autre compromis de distribution et de capacités.",
      ],
      subsections: [
        {
          heading: "Apps et back-office web",
          paragraphs: [
            "Les apps vivent rarement seules : compte client, facturation, support, catalogue — tout cela dialogue avec des APIs souvent partagées avec votre site. Je veille à la cohérence des modèles de données et des contrats d’interface pour éviter les duplications silencieuses.",
            "Voir aussi le silo Sites internet pour le front marketing et le silo CRM pour les outils internes qui alimentent souvent les mêmes données.",
          ],
        },
      ],
    },
    {
      heading: "Qualité, release et conformité",
      paragraphs: [
        "Tests ciblés sur parcours critiques, builds reproductibles, versioning sémantique, canaux de beta (TestFlight, tracks Play) et gestion des rejets store avec plan de correction. Les crashs sont groupés et priorisés comme des bugs produit, pas comme du bruit.",
        "Côté vie privée : collecte minimale, transparence des trackers, et alignement avec votre DPO lorsque nécessaire — surtout si l’app touche santé, finance ou mineurs (même indirectement).",
      ],
    },
    {
      heading: "Analytics, growth et SEO des pages marketing",
      paragraphs: [
        "Les événements analytics doivent raconter un funnel compréhensible par la partie business : inscription, activation, rétention — pas 200 événements décoratifs. Je connecte souvent ces métriques aux landings web et aux campagnes acquisition.",
        "Les pages vitrine d’installation et les landings mobile-first bénéficient du même socle SEO technique que le web (CWV, structure, données structurées) : le silo SEO reste pertinent même pour une app.",
      ],
    },
    {
      heading: "IA dans l’app : chatbots et assistants",
      paragraphs: [
        "Assistants in-app, FAQ dynamiques, recherche sémantique sur contenus : ce sont des extensions naturelles lorsque vous avez une base de connaissances propre et des garde-fous. Je renvoie vers le silo IA pour le RAG, les agents et l’automatisation — l’objectif est une expérience utile, pas un gadget.",
      ],
    },
  ],
};

export const iaPillar: SiloPillarDefinition = {
  metaTitle: "Intégration IA — chatbots, agents, RAG, automatisation",
  metaDescription:
    "Intégration IA en production : chatbots, agents, RAG, automatisation. OpenAI, Claude, LangChain, n8n. Coûts, sécurité, observabilité et GEO.",
  eyebrow: "IA",
  h1: "IA en production, pas en slide deck.",
  lead:
    "Je ne vends pas de « licences IA » : je branche des modèles sur vos données et vos workflows — assistants clients ou internes, agents outillés, RAG sur documentation, automatisation de tâches répétitives — avec une boucle de mesure explicite (coût token, latence p95, qualité des réponses, taux d’escalade humaine). Chaque use case a un propriétaire métier, des critères d’acceptation et une stratégie de repli quand le modèle ou l’API dérape.",
  tldr: [
    "Priorisation impitoyable des use cases : pas de catalogue de démos sans sponsor métier et sans métrique de succès.",
    "OpenAI, Anthropic (Claude), orchestrateurs type LangChain, et automation Make/n8n ou workers maison — choix guidés par risque données, budget et dette opérationnelle.",
    "Observabilité : logs, quotas, alertes, garde-fous anti-fuite, versioning des prompts et jeux de tests pour éviter les régressions silencieuses.",
    "Alignement GEO : contenus factuels, sources et FAQ structurées quand l’IA côté site doit renforcer l’autorité — lien direct avec le silo SEO/GEO.",
  ],
  sections: [
    {
      heading: "Architecture — RAG, agents, automatisation",
      paragraphs: [
        "Le RAG (retrieval-augmented generation) reste le pattern le plus rentable pour répondre avec vos PDF, helpdesk et wikis internes : chunking, métadonnées, re-scoring, citations et évaluation continue (questions/réponses de référence).",
        "Les agents avec outils doivent avoir des permissions explicites (qui peut appeler quoi), des budgets de latence, et des limites sur les actions destructrices (CRM, facturation). Je documente les prompts, les versions de modèles et les jeux de tests comme du code : parce que c’en est.",
      ],
      subsections: [
        {
          heading: "Chatbots et e-commerce",
          paragraphs: [
            "Sur un site marchand, l’IA peut aider à la recherche produit, aux questions pré-vente et à la génération assistée de fiches — toujours avec validation humaine lorsque l’erreur a un coût (prix, conformité, médical interdit).",
            "La page IA générative e-commerce du silo détaille ces patterns ; le silo Sites internet reste le socle perf/SEO.",
          ],
        },
      ],
    },
    {
      heading: "ROI, coûts et risques",
      paragraphs: [
        "Estimation de coûts tokens + monitoring en prod, stratégies de cache, réduction de contexte, et choix de modèles « suffisants » plutôt que « max » quand la marge le permet.",
        "Garde-fous anti-fuite de données : classification des documents, cloisonnement réseau, masquage, et politiques de rétention alignées avec votre DPO. Fallback clair lorsque l’API est indisponible : file d’attente humaine, message honnête, dégradation contrôlée.",
      ],
    },
    {
      heading: "Ce que je ne fais pas",
      paragraphs: [
        "Je ne promets pas la magie « 10× productivité sans changement d’organisation », ni l’automatisation de décisions critiques sans traçabilité. Je refuse les projets où personne n’assume la qualité des données sources : le meilleur modèle ne corrige pas une base pourrie.",
      ],
    },
    {
      heading: "Passer à l’action",
      paragraphs: [
        "Les pages filles (intégration IA, chatbot, agents, RAG, automatisation, IA e-commerce) déclinent des intentions de recherche précises. Le blog et les études de cas complètent par de la preuve et de la pédagogie.",
        "Lorsque vous avez un volume de tickets, une base documentaire ou un workflow répétitif chiffrable, le formulaire de devis permet d’attacher chiffres et exemples — j’y réponds avec un phasage réaliste.",
      ],
    },
  ],
};

export const seoPillar: SiloPillarDefinition = {
  metaTitle: "SEO & GEO — audits, technique, contenu, migrations",
  metaDescription:
    "SEO technique, contenu, netlinking et GEO (optimisation pour moteurs génératifs). Audits, migrations, e-commerce, local. Clickdev.fr comme démonstration.",
  eyebrow: "SEO & GEO",
  h1: "Visibilité Google et présence dans les réponses des IA.",
  lead:
    "Je traite le SEO comme une composante produit : indexation, crawl budget, duplication, données structurées, performance réelle et maillage interne utile — pas comme une couche de varnish posée après coup. Le GEO (generative engine optimization) prolonge cette rigueur : réponses directes en tête de page, formats Q/R, sources crédibles et contenus factuels que les LLMs peuvent citer sans déformer votre positionnement. Ce site est lui-même un laboratoire : quand vous lisez ces pages, vous voyez la méthode appliquée à mon propre domaine.",
  tldr: [
    "Audits actionnables : priorisation impact/effort, reproduction des problèmes, et plan de mise en œuvre compatible avec votre vélocité de release.",
    "Migrations et refontes sans perdre le jus : inventaires URL, 301, canoniques, Search Console, benchmarks positions et tests de non-régression SEO.",
    "Contenu : intention de recherche, cannibalisation, briefs, modèles de pages et maillage interne — le silo ne remplace pas une stratégie éditoriale, il l’outille.",
    "GEO : structure claire, TL;DR, FAQ, citations et cohérence factuelle — aligné avec ce que les systèmes génératifs valorisent en 2026.",
  ],
  sections: [
    {
      heading: "SEO technique, contenu et popularité",
      paragraphs: [
        "Core Web Vitals, TTFB, caches, images, JS client, fonts : tout ce qui impacte l’expérience réelle (surtout mobile) et donc le classement. Je relie ces chantiers à votre stack (Next.js, WordPress, Shopify, headless) plutôt qu’à une liste de buzzwords.",
        "Crawl budget, duplication, facettes e-commerce, hreflang, migrations : autant de zones où une erreur coûte cher — et où une exécution propre crée un avantage durable.",
        "Le contenu doit matcher l’intention : sinon, même une technique parfaite plafonne. Je travaille la coordination avec la rédaction (briefs, maillage, désengagement des pages cannibales) et je renvoie vers la rédaction SEO / audit quand c’est le bon levier.",
      ],
      subsections: [
        {
          heading: "E-commerce et SEO local",
          paragraphs: [
            "Les catalogues exposent duplication, pagination, filtres et données produit incomplètes — sujets détaillés dans les pages filles SEO e-commerce et SEO local lorsque vous avez des points de vente ou des zones géographiques stratégiques.",
          ],
        },
      ],
    },
    {
      heading: "GEO — être cité, pas seulement « rank »",
      paragraphs: [
        "Les utilisateurs interrogent aussi ChatGPT, Perplexity, Gemini ou les overviews Google : le GEO vise des réponses correctes, sourcées et stables dans le temps. Cela impose une discipline éditoriale : moins de langue de bois marketing, plus de faits vérifiables, de définitions claires et de liens vers sources primaires.",
        "Les pages de ce site appliquent ces principes (TL;DR, FAQ structurées, maillage interne explicite) : c’est volontaire — le positionnement du silo SEO est méta-stratégique.",
      ],
    },
    {
      heading: "Netlinking et autorité",
      paragraphs: [
        "Je ne fais pas de netlinking « volume » : je préfère des angles éditoriaux, des partenariats pertinents et des contenus citables. La popularité doit reposer sur des signaux défendables devant un audit humain ou algorithmique.",
      ],
    },
    {
      heading: "Comment avancer",
      paragraphs: [
        "Les pages filles couvrent audit, technique, local, e-commerce, migration, rédaction, netlinking et GEO. Les études de cas et le blog renforcent l’E-E-A-T lorsque le contenu est publié.",
        "Si vous ne savez pas par où commencer : un audit SEO clarifie la priorisation ; si vous refondez, la migration est souvent le chantier critique.",
      ],
    },
  ],
};

export const crmOutilsMetiersPillar: SiloPillarDefinition = {
  metaTitle: "CRM & outils métiers sur mesure — intégrations & automatisation",
  metaDescription:
    "CRM sur mesure, intranets, extranets, portails et automatisations. Node.js, Laravel, PostgreSQL. Intégrations API, files d’attente, droits et audit.",
  eyebrow: "CRM & outils métiers",
  h1: "Des outils internes qui collent à votre façon de vendre et de livrer.",
  lead:
    "Les outils métiers ratent rarement parce qu’il « manque un bouton » : ils ratent parce que le modèle de données ne reflète pas la réalité terrain, que les intégrations sont fragiles, ou que personne n’assume la gouvernance. Je construis des interfaces métier, des connecteurs et des workflows qui réduisent les allers-retours Excel : droits explicites, audit trail, exports traçables, files d’attente idempotentes et reprise sur erreur — avec une stack maintenable (Node.js, Laravel, PostgreSQL) plutôt qu’un empilement de scripts opaques.",
  tldr: [
    "Modèle de données aligné sur vos équipes commerciales, ops, support ou production — pas sur un schéma SaaS générique recâblé au forceps.",
    "Intégrations CRM / ERP / outils SaaS : webhooks, quotas, retries, idempotence, et observabilité quand ça casse à 19h un vendredi.",
    "Automatisation Make, n8n ou workers maison selon criticité, volume et besoin de traçabilité ; combinaison possible avec le silo IA pour l’assistance linguistique.",
    "Hébergement, sauvegardes testées et stratégie de reprise : cadrées tôt, pas après le premier incident.",
  ],
  sections: [
    {
      heading: "Périmètre typique",
      paragraphs: [
        "Portails clients, extranets fournisseurs, configurateurs, outils de pricing, consoles d’administration, workflows de validation et synchronisations bidirectionnelles catalogue/stock/prix.",
        "Je documente les rôles, les états métier et les scénarios d’échec (API down, payload invalide, doublon) pour que l’outil survive au turnover et à l’urgence.",
      ],
      subsections: [
        {
          heading: "CRM sur mesure vs CRM SaaS",
          paragraphs: [
            "Un SaaS mature peut être le bon choix : la question est souvent l’intégration et la qualité des données plutôt que le remplacement complet. Le sur-mesure prend le sens quand votre process commercial ou opérationnel est un avantage compétitif que les templates ne capturent pas.",
          ],
        },
      ],
    },
    {
      heading: "Automatisation et IA",
      paragraphs: [
        "Automatiser sans traçabilité crée de la dette invisible : je préfère des workflows avec propriétaire métier, logs exploitables et budgets d’erreur. Quand l’IA entre en jeu (tri, résumé, réponse assistée), je relie au silo IA pour les garde-fous et au SEO/GEO si le contenu généré est public.",
      ],
    },
    {
      heading: "Sécurité, droits et conformité minimale",
      paragraphs: [
        "Authentification, rôles, journalisation des actions sensibles, exports contrôlés : ce n’est pas du luxe pour un outil interne manipulant des données clients ou financières. Je cadrage ces sujets dès le backlog initial.",
      ],
    },
    {
      heading: "Intranets / extranets et sites publics",
      paragraphs: [
        "Les portails se connectent souvent aux mêmes APIs que votre site marchand : cohérence des contrats et versioning d’API pour éviter les régressions croisées. Voir aussi le silo Sites internet pour les surfaces publiques et la maintenance pour la durée.",
      ],
    },
  ],
};

export const maintenancePillar: SiloPillarDefinition = {
  metaTitle: "Maintenance web & TMA — WordPress, e-commerce, infogérance",
  metaDescription:
    "Maintenance, TMA et infogérance après mise en ligne : sécurité, mises à jour, perf, SEO post-release et évolutions priorisées.",
  eyebrow: "Maintenance & TMA",
  h1: "Gardez la vélocité après le go-live.",
  lead:
    "La maintenance n’est pas une ligne vide dans un devis : c’est la façon de réduire le risque (sécurité, disponibilité), d’absorber les mises à jour des dépendances sans panique, et de continuer à livrer des évolutions utiles sans transformer chaque demande en projet hors sol. Un bon contrat clarifie SLA, canaux, volumétrie, priorités et ce qui relève d’un correctif vs d’une évolution — pour que la partie business et la tech parlent le même langage.",
  tldr: [
    "SLA lisible, canaux de contact, volumétrie incluse, procédure d’urgence et plages d’astreinte si nécessaire — pas de « support illimité » flou qui finit en frustration.",
    "Veille sécurité, patchs dépendances, sauvegardes testées, monitoring minimal et revues de performance planifiées (surtout e-commerce et WordPress).",
    "Roadmap d’évolutions partagée : petites features, A/B tests techniques, optimisations SEO ponctuelles ou chantiers d’industrialisation — chiffrés au-delà d’un seuil.",
    "Documentation et transfert : accélérer l’onboarding de toute personne qui reprend le flambeau, interne ou externe.",
  ],
  sections: [
    {
      heading: "Ce que couvre une TMA sérieuse",
      paragraphs: [
        "Correctifs reproductibles, patchs de dépendances (runtime, CMS, plugins), sauvegardes testées (restauration réelle, pas théorique), monitoring basique (uptime, erreurs, latence), coordination avec l’hébergeur et communication claire lors des incidents.",
        "Je documente l’existant : stack, scripts, cron, intégrations tierces, secrets et points fragiles. L’objectif est que la maintenance ne dépende pas d’une seule tête.",
      ],
      subsections: [
        {
          heading: "WordPress et e-commerce",
          paragraphs: [
            "WordPress et les stacks e-commerce (paiement, stocks, plugins) ont des surfaces d’attaque et des dépendances spécifiques : pages filles dédiées décrivent ces risques et le rythme de mise à jour recommandé.",
          ],
        },
      ],
    },
    {
      heading: "Évolutions sans « scope creep » permanent",
      paragraphs: [
        "Au-delà d’un seuil, une évolution devient un mini-projet : critères d’acceptation, estimation et jalons. La maintenance garde le système sain ; elle ne remplace pas une roadmap produit — mais elle doit pouvoir l’accueillir sans chaos.",
      ],
    },
    {
      heading: "SEO, perf et migrations",
      paragraphs: [
        "Les mises à jour peuvent casser des URL, des redirections ou des données structurées : je coordonne avec le silo SEO lorsque la maintenance touche à des zones sensibles au référencement.",
      ],
    },
    {
      heading: "Quand me contacter",
      paragraphs: [
        "Incident récurrent, dette de plugins, perf qui se dégrade après chaque campagne marketing, ou équipe interne qui hésite à mettre en prod : un cadrage court permet souvent de proposer un plan sur 30/60/90 jours.",
        "Les pages filles Maintenance WordPress, Maintenance e-commerce, TMA et Infogérance détaillent des intentions de recherche plus précises ; le formulaire de devis reste le canal le plus structuré pour chiffrer.",
      ],
    },
  ],
};
