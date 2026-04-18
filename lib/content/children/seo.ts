import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

export const seoChildBySlug: Record<string, SiloChildPageContent> = {
  "audit-seo": {
    metaDescription:
      "Audit SEO actionnable : technique, contenu, popularité et quick wins. Priorisation impact/effort, reproduction des bugs et plan de mise en œuvre réaliste.",
    eyebrow: "SEO & GEO",
    h1: "Audit SEO : diagnostic clair, priorités nettes, preuves reproductibles.",
    lead:
      "Un audit utile n’est pas un PDF de 120 pages illisible : c’est une liste priorisée de problèmes reproductibles, avec impact estimé, effort, propriétaire (dev, contenu, ops) et critères de « done ». Je combine crawl, Search Console, données serveur/logs quand disponibles, et revue manuelle des templates (duplication, canonicals, données structurées, CWV). L’objectif est une roadmap SEO compatible avec votre vélocité de release — pas une liste de souhaits.",
    tldr: [
      "Technique : indexation, crawl, CWV, JS rendering, hreflang, schema.",
      "Contenu : intention, cannibalisation, maillage interne, modèles de pages.",
      "Popularité : profil de liens risqué vs opportunités réalistes.",
      "Livrable : backlog priorisé + quick wins 30 jours.",
    ],
    sections: [
      {
        heading: "Ce que j’inspecte en priorité",
        paragraphs: [
          "Les fuites d’indexation, les canonicals incorrects, les duplications e-commerce (filtres, pagination), les erreurs schema, et les templates qui cassent le mobile — parce que ce sont souvent les plus chers en trafic perdu.",
          "Ensuite seulement : optimisations « bonus » qui ne bougent pas l’aiguille tant que les fondations sont cassées.",
        ],
      },
      {
        heading: "Après l’audit",
        paragraphs: [
          "Je peux accompagner la mise en œuvre côté dev (Next.js, WP, Shopify) et coordonner avec la rédaction pour le contenu. Les migrations SEO sont un chantier à part si vous changez d’URL.",
        ],
      },
    ],
    faq: [
      {
        question: "Un audit peut-il être « à distance » ?",
        answer:
          "Oui : accès Search Console, staging si possible, et échantillons d’URL suffisent souvent. Les accès logs améliorent fortement le diagnostic crawl.",
      },
    ],
    internalLinks: [
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Pour approfondir CWV, indexation et données structurées après l’audit.",
      },
      {
        href: "/seo/migration-seo/",
        label: "Migration SEO",
        description:
          "Si l’audit précède une refonte d’URL ou un changement de stack.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Quand l’audit touche catalogue, facettes et données produit.",
      },
      {
        href: "/seo/geo-generative-engine-optimization/",
        label: "GEO",
        description:
          "Pour intégrer clarté factuelle et citations dans la roadmap post-audit.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez URL, accès et objectifs mesurables.",
      },
    ],
  },
  "seo-technique": {
    metaDescription:
      "SEO technique Next.js & WordPress : Core Web Vitals, indexation, JavaScript, données structurées, hreflang et logs. Perf = SEO.",
    eyebrow: "SEO & GEO",
    h1: "SEO technique : vitesse réelle, crawl propre, templates sans piège.",
    lead:
      "Le SEO technique, ce n’est pas une checklist Lighthouse : c’est la capacité des robots et des utilisateurs à consommer vos pages sans friction, à comprendre la hiérarchie, et à accéder aux signaux de pertinence (titres, liens internes, données structurées cohérentes). Je travaille sur Next.js (App Router, streaming, images), WordPress (thème/plugins), Shopify et headless : chaque stack a ses angles morts (JS client, caches, routes dynamiques). Les CWV sont traités comme des bugs produit, pas comme une option marketing.",
    tldr: [
      "Mesures field + lab, pas seulement scores locaux.",
      "Indexation : duplication, pagination, canonicals, noindex assumés.",
      "Schema utile, pas bruit JSON-LD copié-collé.",
      "Coordination dev pour releases sans régression SEO.",
    ],
    sections: [
      {
        heading: "Next.js & headless",
        paragraphs: [
          "Hydratation, server components, stratégie d’images, fonts, et routes dynamiques impactent crawl et CWV. Je relie aux besoins SEO (SSR/SSG/ISR) selon pages.",
        ],
      },
      {
        heading: "WordPress & Shopify",
        paragraphs: [
          "Plugins/thèmes et apps store peuvent dégrader perf : je priorise ce qui coûte du LCP/INP réel et ce qui casse l’indexation.",
        ],
      },
    ],
    faq: [
      {
        question: "INP : par où commencer ?",
        answer:
          "Identifier interactions lentes (menus, third parties, handlers) et réduire le travail main thread — souvent lié au JS et aux tags.",
      },
    ],
    internalLinks: [
      {
        href: "/seo/audit-seo/",
        label: "Audit SEO",
        description:
          "Pour prioriser technique vs contenu vs popularité.",
      },
      {
        href: "/seo/migration-seo/",
        label: "Migration SEO",
        description:
          "Quand la technique change avec les URL.",
      },
      {
        href: "/sites-internet/site-wordpress/",
        label: "Site WordPress",
        description:
          "Contexte stack quand le SEO technique passe par WP.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Quand INP et JS tiers impactent tunnel et SEO catalogue.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Joignez URL critiques et accès staging.",
      },
    ],
  },
  "seo-local": {
    metaDescription:
      "SEO local : fiches Google Business Profile, NAP, pages locales, schema LocalBusiness et citations. Réseaux physiques & SAB.",
    eyebrow: "SEO & GEO",
    h1: "SEO local : être trouvé là où votre offre est géographique.",
    lead:
      "Le local combine signaux Google Business Profile, pages locales sur votre site, cohérence NAP (name/address/phone), avis, et parfois schema LocalBusiness. Je structure des pages locales utiles (contenu unique par zone), évite la duplication « copier-coller 50 villes », et aligne le site avec la réalité opérationnelle (horaires, zones desservies). Pour les SAB (service-area business), la prudence sur les pratiques spam est essentielle.",
    tldr: [
      "Pages locales : intention + preuves + FAQ géo.",
      "Lien site ↔ GBP cohérent.",
      "Suivi des requêtes discovery/branded locales.",
    ],
    sections: [
      {
        heading: "Pièges fréquents",
        paragraphs: [
          "Pages doorway, contenus minces, et incohérences d’adresse : autant de risques. Je préfère moins de pages, plus solides.",
        ],
      },
    ],
    faq: [
      {
        question: "Avis : comment les intégrer ?",
        answer:
          "Politique authentique, réponses, et affichage sélectif sur le site sans contenu dupliqué toxique.",
      },
    ],
    internalLinks: [
      {
        href: "/sites-internet/site-mise-en-relation/",
        label: "Mise en relation",
        description:
          "Souvent couplée au local quand l’offre est territoriale.",
      },
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Le mobile et la perf restent des signaux majeurs en local.",
      },
      {
        href: "/contact/",
        label: "Contact",
        description:
          "Pour cadrer rapidement zones desservies et contraintes NAP.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Listez zones, points de vente et outils actuels.",
      },
    ],
  },
  "seo-ecommerce": {
    metaDescription:
      "SEO e-commerce : duplication, facettes, pagination, données produit, contenus catégories et maillage catalogue. Shopify, WooCommerce, headless.",
    eyebrow: "SEO & GEO",
    h1: "SEO e-commerce : catalogue indexable sans exploser en duplication.",
    lead:
      "Les shops souffrent de facettes infinies, pagination mal canonicalisée, contenus catégories pauvres, et données Product incomplètes. Je mets en place des règles claires : quelles pages doivent ranker, comment gérer filtres, comment enrichir catégories stratégiques, et comment relier blog/guides au catalogue. La technique (CWV, erreurs soft 404) et le contenu avancent ensemble : l’un sans l’autre plafonne vite.",
    tldr: [
      "Indexation maîtrisée : paramètres, canonicals, noindex assumés.",
      "Données produit : schema, avis, disponibilité.",
      "Maillage interne : catégories piliers, guides, FAQ.",
    ],
    sections: [
      {
        heading: "Shopify / Woo / headless",
        paragraphs: [
          "Chaque stack impose des patterns différents pour collections, tags et contenu éditorial : j’adapte les reco au moteur de templates réel.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il indexer tous les filtres ?",
        answer:
          "Rarement : stratégie au cas par cas selon valeur SEO vs bruit crawl.",
      },
    ],
    internalLinks: [
      {
        href: "/seo/migration-seo/",
        label: "Migration SEO",
        description:
          "Indispensable lors des refontes catalogue/URL.",
      },
      {
        href: "/sites-internet/site-ecommerce/",
        label: "Site e-commerce",
        description:
          "Alignement dev + SEO sur tunnel et templates.",
      },
      {
        href: "/ia/ia-generative-ecommerce/",
        label: "IA e-commerce",
        description:
          "Quand génération assistée touche fiches et FAQ produit.",
      },
      {
        href: "/seo/redaction-seo/",
        label: "Rédaction SEO",
        description:
          "Pour enrichir catégories stratégiques et guides d’achat.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez stack, taille catalogue et problèmes d’indexation.",
      },
    ],
  },
  "migration-seo": {
    metaDescription:
      "Migration SEO : refonte, changement d’URL, HTTPS, fusion domaines. Inventaire, 301, tests, Search Console et suivi positions.",
    eyebrow: "SEO & GEO",
    h1: "Migration SEO : ne pas brûler le jus en changeant de stack.",
    lead:
      "Une migration ratée se voit en chute d’impressions en quelques semaines. Je conçois des migrations comme des projets d’infra : inventaire URL, mapping 301, règles canonical, tests avant/après, suivi Search Console, et validation des données structurées. Le staging est obligatoire pour rejouer les parcours critiques ; la communication avec dev/marketing évite les « petits oublis » qui coûtent cher.",
    tldr: [
      "Inventaire + mapping + exceptions explicites.",
      "Tests automatisés + spot checks manuels.",
      "Suivi positions et impressions post-switch.",
      "Plan de rollback si signal catastrophique.",
    ],
    sections: [
      {
        heading: "Cas fréquents",
        paragraphs: [
          "Refonte Next.js, changement de permaliens WP, internationalisation, fusion de sous-domaines, ou passage headless : chaque cas a ses angles morts (hreflang, doubles contenus).",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de temps surveiller après migration ?",
        answer:
          "Souvent plusieurs semaines à quelques mois selon taille du site et saisonnalité — avec jalons de décision.",
      },
    ],
    internalLinks: [
      {
        href: "/seo/audit-seo/",
        label: "Audit SEO",
        description:
          "Souvent la base avant de migrer pour éviter de reproduire des erreurs.",
      },
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Pour sécuriser CWV et indexation sur la nouvelle stack.",
      },
      {
        href: "/maintenance/maintenance-ecommerce/",
        label: "Maintenance e-commerce",
        description:
          "Post-migration : éviter les régressions à chaque release.",
      },
      {
        href: "/sites-internet/site-wordpress/",
        label: "Site WordPress",
        description:
          "Souvent concerné lors des migrations de permaliens et plugins.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Joignez ancien/nouveau plan d’URL si possible.",
      },
    ],
  },
  "redaction-seo": {
    metaDescription:
      "Rédaction SEO & briefs éditoriaux : intention de recherche, cannibalisation, maillage interne et templates. Coordination dev + contenu.",
    eyebrow: "SEO & GEO",
    h1: "Rédaction SEO : intention, preuve, maillage — pas du remplissage.",
    lead:
      "La rédaction SEO efficace commence par l’intention : informational vs transactional, et par la désignation d’une page « mère » par sujet pour éviter la cannibalisation. Je produis des briefs actionnables (plan Hn, preuves à intégrer, entités, liens internes sortants/entrants, FAQ GEO) et je coordonne avec les devs pour que les templates supportent compare tables, FAQ schema quand pertinent, et contenus dynamiques sans duplication.",
    tldr: [
      "Briefs basés sur SERP réelles + différenciation.",
      "Maillage interne contextualisé (comme ce site).",
      "GEO : réponses directes et sources.",
    ],
    sections: [
      {
        heading: "Collaboration rédaction/dev",
        paragraphs: [
          "Les meilleurs textes meurent si le template impose un H1 caché ou une structure illisible. Je facilite la discussion entre équipes.",
        ],
      },
    ],
    faq: [
      {
        question: "Produisez-vous le contenu vous-même ?",
        answer:
          "Au besoin oui, mais souvent je briefs une équipe interne/agence pour scaler — avec critères qualité et revues.",
      },
    ],
    internalLinks: [
      {
        href: "/seo/seo-ecommerce/",
        label: "SEO e-commerce",
        description:
          "Pour les contenus catégories et guides d’achat catalogue.",
      },
      {
        href: "/blog/",
        label: "Blog",
        description:
          "Canal naturel pour informational et preuve d’expertise.",
      },
      {
        href: "/seo/geo-generative-engine-optimization/",
        label: "GEO",
        description:
          "Pour briefs orientés réponses factuelles et citations.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Indiquez thématiques et objectifs de conversion.",
      },
    ],
  },
  netlinking: {
    metaDescription:
      "Stratégie netlinking white-hat : angles éditoriaux, contenus citables, digital PR raisonnable. Pas de ferme de liens.",
    eyebrow: "SEO & GEO",
    h1: "Netlinking : autorité durable, pas de roulette algorithmique.",
    lead:
      "Je ne vends pas de packs de liens : je préfère des angles éditoriaux défendables, des données originales, des études utiles et des partenariats pertinents. Le netlinking utile soutient un site déjà technique solide ; sinon, c’est du polish sur des fondations pourries. Chaque opportunité est évaluée risque/bénéfice avec vous — parce que c’est votre domaine qui est en jeu.",
    tldr: [
      "Éviter PBN et schémas toxiques.",
      "Cibler sites crédibles et trafic réel.",
      "Aligner ancres et pages cibles avec intention.",
    ],
    sections: [
      {
        heading: "Mesure",
        paragraphs: [
          "Je relie les gains à trafic référent et positions sur requêtes cibles, pas seulement au nombre de domaines.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de liens par mois ?",
        answer:
          "Ce n’est pas la bonne question : la bonne question est « quelles preuves rendent notre site citable » ?",
      },
    ],
    internalLinks: [
      {
        href: "/seo/audit-seo/",
        label: "Audit SEO",
        description:
          "Pour vérifier que la technique et le contenu méritent l’investissement popularité.",
      },
      {
        href: "/realisations/",
        label: "Réalisations",
        description:
          "Les études de cas aident les contenus citables et la PR technique.",
      },
      {
        href: "/seo/geo-generative-engine-optimization/",
        label: "GEO",
        description:
          "Pour aligner popularité avec contenus facilement citables.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Expliquez secteur et actifs éditoriaux existants.",
      },
    ],
  },
  "geo-generative-engine-optimization": {
    metaDescription:
      "GEO (Generative Engine Optimization) : visibilité dans ChatGPT, Perplexity, Gemini et AI Overviews. Structure, faits, sources, FAQ et maillage.",
    eyebrow: "SEO & GEO",
    h1: "GEO : être correctement cité par les moteurs génératifs.",
    lead:
      "Le GEO prolonge le SEO : il s’agit de rendre vos contenus faciles à résumer, factuels, stables et sourcés — pour réduire les hallucinations et augmenter vos chances d’être mentionné correctement dans les réponses d’IA et overviews. Ce site applique volontairement TL;DR, FAQ, maillage interne explicite et formulations précises : c’est une démonstration vivante. Le GEO n’efface pas le besoin d’autorité et de preuves externes, il les rend encore plus lisibles.",
    tldr: [
      "Réponses directes en tête + sections hiérarchisées.",
      "FAQ Q/R claires + schema quand pertinent.",
      "Sources primaires et liens sortants crédibles.",
      "Cohérence interne : moins de langue marketing creuse.",
    ],
    sections: [
      {
        heading: "Techniques GEO concrètes",
        paragraphs: [
          "Définitions claires, comparaisons honnêtes, tableaux et listes utiles, pages « hub » qui orientent vers ressources profondes, et contenus mis à jour avec date de révision lorsque c’est pertinent.",
        ],
      },
      {
        heading: "Risques",
        paragraphs: [
          "Sur-optimisation factuelle (claims invérifiables) et contenu machine non relu : deux voies vers la perte de confiance — côté humains et côté modèles.",
        ],
      },
    ],
    faq: [
      {
        question: "GEO remplace-t-il le SEO classique ?",
        answer:
          "Non : les SERP classiques restent massives ; le GEO ajoute une exigence de clarté et de factualité qui aide aussi le SEO.",
      },
    ],
    internalLinks: [
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Les bases crawl/perf restent nécessaires pour distribuer vos pages.",
      },
      {
        href: "/ia/rag-base-connaissances/",
        label: "RAG",
        description:
          "Pour vos assistants internes qui doivent citer vos documents.",
      },
      {
        href: "/blog/",
        label: "Blog",
        description:
          "Canal idéal pour guides longs et comparatifs sourcés.",
      },
      {
        href: "/ia/integration-ia/",
        label: "Intégration IA",
        description:
          "Quand vos contenus publics alimentent aussi des assistants internes.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez pages cibles et outils de mesure actuels.",
      },
    ],
  },
};
