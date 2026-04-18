import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

export const seoChildBySlug: Record<string, SiloChildPageContent> = {
  "audit-seo": {
    metaDescription:
      "Audit SEO actionnable : technique, contenu, popularité et quick wins. Priorisation impact/effort, reproduction des bugs et plan de mise en œuvre réaliste.",
    eyebrow: "SEO & GEO",
    h1: "Audit SEO : diagnostic clair, priorités nettes, preuves reproductibles.",
    lead:
      "Un audit utile n’est pas un PDF de 120 pages illisible : c’est une liste priorisée de problèmes reproductibles, avec impact estimé, effort, propriétaire (développeur, contenu, ops marketing) et critères de « done » vérifiables. Je combine crawl automatisé, Search Console, journaux serveur lorsque accessibles, et revue manuelle des templates pour détecter duplication involontaire, erreurs canonical, données structurées incohérentes, rendu JavaScript problématique et Core Web Vitals dégradés en situation réelle. L’objectif est une roadmap SEO compatible avec votre cadence de release — pas une liste de recommandations génériques recyclées qui n’aboutissent jamais en ticket Jira clos.",
    tldr: [
      "Technique : indexation, crawl budget, logs, rendu JS, Core Web Vitals, hreflang, données structurées pertinentes.",
      "Contenu : intentions de recherche, risque cannibalisation, renvois utiles entre pages piliers, modèles éditoriaux scalables.",
      "Popularité : profil de liens à risque, opportunités réalistes d’acquisition vs budget et crédibilité.",
      "Livrable : backlog priorisé (impact × effort) + quick wins 30 jours avec preuves avant/après.",
      "Coordination dev : tickets actionnables, reproductions étapes par étapes — zéro « améliorer le SEO » flou.",
      "Relie explicitement chantiers post-audit (migration, technique, rédaction) sans doublons de mission.",
    ],
    sections: [
      {
        heading: "Ce que j’inspecte en priorité",
        paragraphs: [
          "Fuites d’indexation (paramètres, sous-domaines fantômes, contenu dupliqué massif), canonicals incorrects, erreurs schema impactant rich results, pages orphelines sans liens entrants, templates qui dégradent mobile et INP — souvent parmi les pertes de trafic les plus coûteuses.",
          "Ensuite : analyses « bonus » qui ne bougent pas l’aiguille tant que les fondations sont cassées ; je sépare explicitement ces deux niveaux pour éviter dilution du budget interne.",
          "Je croise données Search Console (impressions, pages couvertes/exclues, erreurs), analytics intentionnels et crawl pour prioriser URLs à forte valeur business.",
        ],
      },
      {
        heading: "Contenu, intention et structure éditoriale",
        paragraphs: [
          "Je vérifie alignement SERP réelles vs vos pages : titre meta, angle unique par intention quand plusieurs URLs ciblent des variantes proches.",
          "Les renvois entre pages thématiques (parcours utilisateur et orientation vers silos détaillés) sont audités comme partie du diagnostic — pas comme silo séparé décoratif.",
        ],
      },
      {
        heading: "Après l’audit : mise en œuvre réaliste",
        paragraphs: [
          "Je peux accompagner implémentation côté développement (Next.js, WordPress, Shopify) et coordonner avec la rédaction pour briefs et contenus. Les migrations SEO restent un chantier distinct si vous changez d’URL ou de stack : je l’identifie clairement pour éviter double facturation floue.",
          "Reporting de suivi : impressions, pages stratégiques, erreurs critiques corrigées — avec jalons date pour savoir si le plan avance.",
        ],
      },
      {
        heading: "Méthode et livrables",
        paragraphs: [
          "Échantillons d’URLs défendables, captures ou requêtes reproductibles, pas d’affirmations non vérifiables.",
          "Atelier de restitution focalisé décisions business : où investir la prochaine itération.",
        ],
      },
      {
        heading: "Limites honnêtes d’un audit",
        paragraphs: [
          "Sans accès Search Console ou sans échantillon représentatif vous reste du théorie. Sans capacity dev, les quick wins techniques restent au garage.",
          "Le SEO n’achète pas une position garantie : il réduit friction et aligne offre/contenu avec demande ; la concurrence et l’historique domaine comptent.",
        ],
      },
    ],
    faq: [
      {
        question: "Un audit peut-il être mené entièrement à distance ?",
        answer:
          "Oui dans la majorité des cas : accès Search Console, staging quand possible, exports crawl, échantillon d’URL et questionnaire métier suffisent souvent. Les accès logs serveur améliorent fortement le diagnostic crawl et la détection bots ; je les recommande lorsque faisables sans friction IT.",
      },
      {
        question: "Combien de temps pour recevoir les recommandations priorisées ?",
        answer:
          "Selon taille du site et accès : typiquement de quelques jours ouvrés à deux semaines pour une V1 actionable, plus si inventaire très large ou internationalisation complexe. Je vous donne une fourchette après lecture de votre contexte.",
      },
      {
        question: "L’audit inclut-il la rédaction de contenus ?",
        answer:
          "Il identifie lacunes éditoriales et peut inclure exemples de briefs ; la production texte complète est souvent une mission séparée pour garder budget et ownership clairs — sauf package explicitement convenu.",
      },
      {
        question: "Que faire si priorité technique et priorité éditoriale se disputent le budget ?",
        answer:
          "On quantifie risque perdu vs opportunité gagnée avec ordres de grandeur (URLs touchées, impressions connues). Sans arbitrage data, tout devient opinion ; l’audit doit fournir les éléments pour trancher avec la direction.",
      },
      {
        question: "Audit one-shot ou récurrent ?",
        answer:
          "One-shot pour baseline ; puis audits ciblés après grosses releases ou tous les 6–12 mois selon vélocité. Les sites dynamiques créent régressions SEO aussi vite que bugs fonctionnels.",
      },
      {
        question: "Comment mesurer succès post-audit ?",
        answer:
          "Indicateurs alignés objectifs : impressions/clics sur clusters choisis, erreurs Search Console résolues, CWV field sur templates critiques, conversions organiques segmentées — pas vanity positions isolées hors contexte volume.",
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
      "Le SEO technique n’est pas une checklist Lighthouse verte isolée : c’est la capacité des robots à découvrir et comprendre vos URLs importantes, et des utilisateurs à les consommer sans friction — tout en préservant signaux de pertinence (titres, données structurées cohérentes, renvois entre pages utiles pour orienter utilisateurs et bots). Je travaille sur Next.js (App Router, streaming, Server Components), WordPress (thème/plugins), Shopify et architectures headless : chaque stack a angles morts spécifiques (hydratation excessive, caches agressifs mal configurés, routes dynamiques mal canonicalisées). Les Core Web Vitals sont traités comme bugs produit mesurés en données terrain (field), pas comme scores lab isolés qui mentent sur mobile réel.",
    tldr: [
      "Mesures field + lab complémentaires — pas uniquement Lighthouse local.",
      "Indexation : duplication, pagination, canonicals assumés, noindex documentés lorsque stratégique.",
      "Données structurées utiles et validées — pas JSON-LD bruit copié-collé sans correspondance page.",
      "Coordination développement pour éviter régressions SEO à chaque release.",
      "Logs crawl quand disponibles pour trancher problèmes théoriques vs réels.",
      "INP et LCP traités avec profilage interactions réelles — pas patches cosmétiques.",
    ],
    sections: [
      {
        heading: "Next.js, React et architectures modernes",
        paragraphs: [
          "Hydratation, stratégie images/fonts, segmentation client/server et routes dynamiques influencent crawl et CWV. Je relie choix SSR/SSG/ISR aux intentions SEO par type de page : listing vs contenu quasi-statique.",
          "Streaming et Suspense peuvent impacter perception performance ; je vérifie priorités rendu critiques au-dessus de la ligne de flottaison commerce.",
        ],
      },
      {
        heading: "WordPress et Shopify",
        paragraphs: [
          "Plugins et apps peuvent dégrader INP via JS tiers ; je priorise correctifs à fort levier impression/trafic réel.",
          "Caches OPcache/page, versions PHP supportées et stratégie assets : indispensables avant micro-optimisations marginal gains.",
        ],
      },
      {
        heading: "Indexation et crawl budget",
        paragraphs: [
          "Paramètres URL, filtres e-commerce et facettes : stratégie noindex/canonical selon valeur SEO réelle vs bruit crawl.",
          "Hreflang sites multi-pays : erreurs fréquentes cassent déploiement international pour des mois.",
        ],
      },
      {
        heading: "Données structurées et résultats enrichis",
        paragraphs: [
          "Schémas alignés contenu visible ; tests Rich Results ; éviter penalties rich result si données fausses.",
          "FAQ et HowTo utilisés lorsque réellement utiles utilisateur — pas stuffing schema.",
        ],
      },
      {
        heading: "Process avec votre équipe dev",
        paragraphs: [
          "Tickets précis, reproductions, définition tests automatisés régression SEO sur templates.",
          "Veille releases : changelog impactant routes ou SSR signalé avant prod.",
        ],
      },
    ],
    faq: [
      {
        question: "INP : par où commencer concrètement ?",
        answer:
          "Identifier interactions lentes (menus lourds, handlers bloquants, third parties synchrones) et réduire travail main-thread — souvent corrélé JS client et tags marketing. Mesure field pour confirmer que le problème existe chez utilisateurs réels, pas seulement en lab.",
      },
      {
        question: "Google exécute-t-il tout mon JavaScript correctement ?",
        answer:
          "En pratique délais et ressources limitent ; je simplifie chemins critiques et je valide URLs importantes dans outils inspection. Si contenu essentiel dépend d’exécution tardive fragile, je change l’architecture plutôt que parier sur la patience du crawler.",
      },
      {
        question: "Schema.org ouvre-t-il toujours rich results ?",
        answer:
          "Non : Google décide éligibilité ; schema mal formé ou hors sujet peut être ignoré ou nettoyer erreurs Search Console. La valeur durable reste la clarté page pour utilisateur ; rich results sont bonus contrôlé.",
      },
      {
        question: "Comment éviter régressions SEO en CI/CD ?",
        answer:
          "Tests smoke sur meta templates, canonical, status codes clés ; parfois captures automatisées parcours ; revue manuelle grosses features. Pas de solution universelle sans investissement équipe.",
      },
      {
        question: "Migrer HTTP→HTTPS ou CDN : risques SEO ?",
        answer:
          "Si mal fait oui : mixed content, canonicals inchangés, redirections chaînées . Je fournis checklist migration technique avec validation post-switch.",
      },
      {
        question: "Perf mobile vs desktop : laquelle prioriser ?",
        answer:
          "Souvent mobile pour Google mobile-first indexing et parcours conversion ; mais B2B à fort trafic desktop ne doit pas négliger l’autre. Données analytics segmentées tranchent.",
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
      "Le référencement local combine signaux Google Business Profile (ancien GMB), pages locales sur votre propre site, cohérence NAP (nom/adresse/téléphone), politique d’avis et parfois données structurées LocalBusiness lorsque pertinent. Je structure des pages locales réellement utiles — contenu distinct par zone desservie ou point de vente avec preuves concrètes — et je refuse les schémas « copier-coller 50 villes » qui attirent filtres spam et déçoivent utilisateurs. Pour les entreprises sans adresse publique fixe desservant zones (SAB), la prudence sur représentation zones et conformité guidelines Google est critique : erreurs peuvent coûter visibilité carte.",
    tldr: [
      "Pages locales : intention locale claire + preuves + FAQ géographique lorsque naturelle.",
      "Alignement site ↔ fiche Google : catégories, zones, messages — pas contradictions.",
      "Suivi requêtes discovery/branded locales et performances fiche vs site.",
      "Citations externes cohérentes sans explosion spam annuaires bas de gamme.",
      "Parfois GEO complète pour réponses IA mentionnant votre zone — au-delà seule carte.",
      "Mobile et perf restent centraux : recherches locales souvent sur téléphone.",
    ],
    sections: [
      {
        heading: "Fondations locales",
        paragraphs: [
          "Revendication et optimisation fiche : attributs, photos qualité, produits/services clairement nommés selon guidelines.",
          "Zones desservies honnêtes vs surextension tentante mais risquée.",
        ],
      },
      {
        heading: "Pages locales sur le site",
        paragraphs: [
          "Contenus uniques par emplacement pertinent : équipe locale, études de cas terrain, FAQs spécifiques — pas spun text générique.",
          "Parcours utilisateur vers prise contact ou réservation mesurable.",
        ],
      },
      {
        heading: "Pièges fréquents",
        paragraphs: [
          "Doorway pages massives à faible valeur, incohérences adresse/heures vs réalité terrain, duplication interne zones proches.",
          "Je préfère moins de pages solides que foisonnement SEO toxique.",
        ],
      },
      {
        heading: "Avis et réputation",
        paragraphs: [
          "Sollicitation authentique clients satisfaits ; réponses management avis — signal engagement.",
          "Affichage site sélectif pour éviter duplication nocive tout en valorisant preuve sociale.",
        ],
      },
      {
        heading: "Mesure et itération",
        paragraphs: [
          "Search Console segments géo quand volumes suffisants ; analyses fiche vs site pour comprendre funnel.",
          "Campagnes locales paid et organique doivent partager messaging cohérent.",
        ],
      },
    ],
    faq: [
      {
        question: "Comment intégrer les avis sur le site sans duplicate ?",
        answer:
          "Extraits sélectionnés avec texte additionnel valeur, widgets dynamiques ou UGC synthétisé — pas copier-coller exhaustif identique à fiche. Stratégie dépend objectif SEO vs preuve conversion page.",
      },
      {
        question: "Je suis SAB sans magasin visible : comment ranker local ?",
        answer:
          "Respect guidelines zones desservies, cohérence site et fiche, contenus prouvant travail réel zones ; éviter spam adresses fictives — risque suspension.",
      },
      {
        question: "Combien de pages locales créer ?",
        answer:
          "Autant que vous pouvez nourrir avec contenu réel utile ; seuil au-delà duquel Qualité globale chute. Je dimensionne avec vous selon capacité rédaction.",
      },
      {
        question: "SEO local fonctionne-t-il sans Google Business Profile ?",
        answer:
          "Rarement pour « near me » carte ; vous pouvez encore ranker organique web mais vous perdez canal carte majeur. Exceptions niches très informationnelles.",
      },
      {
        question: "International multi-pays local : complexité ?",
        answer:
          "Hreflang, téléphones locaux, contenus langue/région, conformités légales affichées ; coordination SEO international plus exigeante — je traite comme projet dédié.",
      },
      {
        question: "Impact des backlinks locaux ?",
        answer:
          "Presse locale sérieuse et partenariats pertinents peuvent aider autorité ; fermes liens locales toxiques peuvent nuire. Évaluation au cas par cas.",
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
      "SEO e-commerce : duplication, facettes, pagination, données produit, contenus catégories et renvois catalogue. Shopify, WooCommerce, headless.",
    eyebrow: "SEO & GEO",
    h1: "SEO e-commerce : catalogue indexable sans exploser en duplication.",
    lead:
      "Les boutiques en ligne souffrent souvent de facettes générant infinité URL, pagination mal canonicalisée, contenus catégories pauvres ou génériques, données Product/Offer incomplètes dans résultats enrichis, et soft 404 lorsque stocks fluctuent. Je mets en place règles claires : quelles URLs doivent ranker stratégiquement, comment traiter filtres et tri, comment enrichir catégories à fort potentiel avec guides et preuves — tout en reliant blog et pages silo acquisition aux URLs transactionnelles sans disperser juice inutilement. Technique (CWV sur templates listing, erreurs serveur) et contenu avancent ensemble : l’un sans l’autre plafonne vite malgré optimisations ponctuelles.",
    tldr: [
      "Indexation disciplinée : paramètres, canonicals, noindex assumés quand stratégie l’exige.",
      "Données produit riches : titres uniques, schema, disponibilité honnête, avis lorsque présents.",
      "Renvois contextualisés : catégories piliers, guides, FAQ — pour parcours et compréhension sémantique.",
      "Gestion pagination / tri / filtres sans dilution infinie.",
      "Coordination merchandising : promos et arrivages peuvent créer chaos URL si non cadrés.",
      "Veille cannibalisation entre pages marque/catégorie/fiche produit et blog.",
    ],
    sections: [
      {
        heading: "Shopify, WooCommerce et headless",
        paragraphs: [
          "Chaque plateforme impose patterns collections/tags/métachamps différents : mes recommandations s’ancrent dans votre moteur templates réel, pas théorie abstraite.",
          "Next headless : attention synchronisation SSR données produit et caches edge invalidation stock/prix.",
        ],
      },
      {
        heading: "Contenus catégories stratégiques",
        paragraphs: [
          "Guidage achat unique par catégorie porteuse : répond questions utilisateur avant produit ; relie produits phares avec liens utiles.",
          "Évite texte remplissage ; focus preuves et critères décision.",
        ],
      },
      {
        heading: "Facettes, tri et duplication",
        paragraphs: [
          "Décision explicite quelles combinaisons méritent index vs consolidation ; monitoring Search Console pour dérives.",
        ],
      },
      {
        heading: "Données produit et conformité",
        paragraphs: [
          "Prix/TVA/stock affichés : erreurs cassent confiance utilisateur et rich results potentiellement.",
          "Variantes produit : URL propres selon stratégie ; éviter doubles contenu description identique.",
        ],
      },
      {
        heading: "International e-commerce SEO",
        paragraphs: [
          "Hreflang pour marques multi-pays, taxes et shipping clairs ; contenu local pas seulement traduction mot-à-mot.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il indexer tous les filtres et tris ?",
        answer:
          "Rarement : stratégie cas par cas selon volume recherche potentiel vs bruit crawl et risque duplication. Je modèle souvent sous-ensembles à forte intention SEO distincte.",
      },
      {
        question: "Google Shopping vs SEO organique : même stratégie ?",
        answer:
          "Complémentaires : feed Merchant pour surfaces paid/places ; SEO pour acquisition durable organique listings. Alignement titre/description évite messages contradictoires.",
      },
      {
        question: "Comment gérer ruptures massives saisonnières ?",
        answer:
          "Soft 404 propres vs consolidation catégories alternatives ; éviter pages produit vides indexées — stratégie merchandising + technique.",
      },
      {
        question: "Le blog aide-t-il le SEO e-commerce ?",
        answer:
          "Oui lorsqu’il capte intentions amont et renvoie vers URLs money ; non s’il produit contenus hors marche sans funnel. Volume sans stratégie dégrade crawl efficiency.",
      },
      {
        question: "Impact avis SEO ?",
        answer:
          "Signal indirect via CTR et confiance ; schema Review peut enrichir résultats si guidelines respectées — pas faux avis.",
      },
      {
        question: "Marketplace vs shop simple SEO ?",
        answer:
          "Marketplace ajoute duplication vendeur/contenu dynamique ; règles canonical et qualité listings contrôlées cruciales — voir aussi page marketplace développement.",
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
      "Une migration ratée apparaît souvent comme chute impressions/clics en quelques semaines après bascule. Je traite migrations comme projets d’infrastructure avec risque SEO explicite : inventaire exhaustif URLs, mapping redirections 301 logique, règles canonical temporaires si besoin, tests pré-production sur échantillon significatif, validation Search Console post-switch (couverture, données structurées), et plan suivi positions/impressions par clusters stratégiques. Communication dev/marketing évite « petits oublis » destructeurs : pages Orphelines après refonte Next, hreflang cassé lors internationalisation, doubles contenus sous nouveau dossier linguistique.",
    tldr: [
      "Inventaire URL + mapping + exceptions documentées (paramètres, fichiers médias).",
      "Tests automatisés crawl comparatif + contrôles manuels templates critiques.",
      "Suivi impressions/clics clusters et erreurs Search Console après switch.",
      "Plan rollback ou mitigation si signal catastrophique précoce.",
      "Staging rejouant parcours crawl bots lorsque possible.",
      "Synchronisation avec analytics/conversions pour ne pas perdre attribution pendant chaos.",
    ],
    sections: [
      {
        heading: "Cas fréquents et angles morts",
        paragraphs: [
          "Refonte Next.js ou headless : routes dynamiques vs anciennes URL statiques WP ; pagination nouvelle vs ancienne.",
          "Internationalisation : hreflang réciproques manquantes fréquentes.",
          "Fusion acquisitions domaines multiples : décisions consolidation contenu duplication.",
        ],
      },
      {
        heading: "Préparation et tests",
        paragraphs: [
          "Staging crawlable contrôlé ou exports statiques comparatifs ; liste checks meta/canonical/status codes.",
          "Timing bascule bas trafic saisonnier si possible pour réduire blast radius.",
        ],
      },
      {
        heading: "Après migration",
        paragraphs: [
          "Priorisation corrections erreurs Search Console ; surveillance logs serveur codes 404 hot URLs.",
          "Communication stakeholders si oscillations attendues temporaires vs incident réel.",
        ],
      },
      {
        heading: "Contenu et redirections sémantiques",
        paragraphs: [
          "Pas seulement 301 mécaniques : alignement intention ancienne URL vs cible sinon perte pertinence même avec code correct.",
        ],
      },
      {
        heading: "Documentation et transfert",
        paragraphs: [
          "Registre mapping maintenu pour évolutions futures ; formation équipe pour ne pas casser redirects dans releases suivantes.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de temps surveiller après migration ?",
        answer:
          "Souvent plusieurs semaines à quelques mois selon taille site et saisonnalité — avec jalons décision réévaluation si sous-performance prolongée. Petits sites peuvent stabiliser vite ; grosses boutiques internationales nécessitent surveillance étendue.",
      },
      {
        question: "302 vs 301 : encore confus ?",
        answer:
          "Pour changement permanent canonique : 301 (ou équivalent traité persistent). Chaînes multiples redirections à éviter ; consolidation directe préférée.",
      },
      {
        question: "Et si je change juste domaine sans refonte ?",
        answer:
          "Quand même inventaire + redirects + Search Console changement adresse/outils équivalents ; risque sous-estimé car « pas de nouveau design ».",
      },
      {
        question: "Comment gérer images et médias migrés ?",
        answer:
          "URLs médias cassées nuisent UX et indirectement SEO ; mapping ou CDN rewrite nécessaires ; validation 404 médias stratégiques.",
      },
      {
        question: "Fusion blog et shop sous même domaine : pièges ?",
        answer:
          "Architecture URLs catégories info vs transaction ; éviter overlap cannibalisation ; redirects articles anciennes structures.",
      },
      {
        question: "Peut-on migrer par vague ?",
        answer:
          "Parfois oui avec risques coordination ; plan clair évite états intermédiaires incohérents crawl longues durées.",
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
      "Rédaction SEO & briefs éditoriaux : intention de recherche, cannibalisation, renvois entre pages et templates. Coordination dev + contenu.",
    eyebrow: "SEO & GEO",
    h1: "Rédaction SEO : intention, preuve, parcours — pas du remplissage.",
    lead:
      "La rédaction SEO efficace commence par intention utilisateur réelle sur SERP : informational vs transactional vs navigational — et par désignation d’une page pivot par grand sujet pour éviter cannibalisation interne. Je produis briefs actionnables (plan Hn défendable, preuves à intégrer, entités et sous-thèmes, liste renvois sortants vers pages déjà existantes à renforcer, FAQ orientées objections et usages GEO lorsque pertinent) et je coordonne avec développeurs pour que templates supportent tableaux comparatifs, FAQ schema lorsque légitimes, composants dynamiques sans générer duplication technique massive.",
    tldr: [
      "Briefs construits depuis SERP réelles + angle différenciant vs concurrents réels.",
      "Renvois contextualisés entre articles/piliers — comme ce site structure ses silos.",
      "GEO : réponses directes parfois utiles pour clarté et usages assistants — sans sacrifer profondeur là où nécessaire.",
      "Calendrier éditorial aligné capacité équipe — pas plans irréalistes.",
      "Revision cycles qualité : checklist anti-plagiat sens, conformité ton marque.",
      "Mesure performance pages : pas vanity mots publiés.",
    ],
    sections: [
      {
        heading: "Collaboration rédaction et développement",
        paragraphs: [
          "Les meilleurs textes échouent si template impose H1 dupliqué logiquement sur variantes, structure heading illisible mobile ou composants FAQ inaccessibles. Je facilite dialogue pour que SEO on-page reste soutenable en production.",
          "Pour headless : preview éditeur et workflow publication synchronisés avec besoins marketing.",
        ],
      },
      {
        heading: "Clusters thématiques et cannibalisation",
        paragraphs: [
          "Cartographie intentions → URLs responsables ; consolidation ou différenciation lorsque trop de pages se marchent dessus.",
        ],
      },
      {
        heading: "Briefs techniques pour rédacteurs externes",
        paragraphs: [
          "Critères qualité vérifiables : sources obligatoires, interdictions allégations, exemples métier.",
        ],
      },
      {
        heading: "Contenus evergreen vs actualité",
        paragraphs: [
          "Stratégie mise à jour et dates révision pour pages stratégiques — signal fraîcheur lorsque pertinent.",
        ],
      },
      {
        heading: "Liens internes et parcours",
        paragraphs: [
          "Liste opportunités liens depuis nouveaux articles vers conversions ; éviter sur-optimisation ancres identiques mécaniques.",
        ],
      },
    ],
    faq: [
      {
        question: "Produisez-vous vous-même tout le contenu ?",
        answer:
          "Au besoin oui pour pages critiques ou lorsque vous manquez capacité ; souvent je brief équipes internes/agences pour scaler — avec cadre qualité et revues spot pour éviter dérive.",
      },
      {
        question: "Comment éviter texte IA publié sans valeur ?",
        answer:
          "Briefs stricts, revues humaines sur échantillon et pages YMYL ; parfois interdiction pure IA non supervisée selon risque.",
      },
      {
        question: "Longueur idéale articles SEO ?",
        answer:
          "Celle nécessaire pour couvrir intention mieux que concurrents pertinents — pas quota mots arbitraire. SERP montre formats dominants.",
      },
      {
        question: "Faut-il viser systématiquement People Also Ask ?",
        answer:
          "Utile lorsque questions reflètent vraies objections clients ; sinon remplissage FAQ inutile. GEO favorise Q/R claires quand légitimes.",
      },
      {
        question: "Réécriture massée pages existantes : risques ?",
        answer:
          "Peut déstabiliser rankings si URLs avaient traction ; stratégie incrémentale + tests mesurés souvent préférable.",
      },
      {
        question: "Comment mesurer succès rédaction SEO ?",
        answer:
          "Trafic qualifié clusters, conversions assistées organique, engagement scroll profondeur si instrumenté — pas positions seules sur mots génériques hors contexte business.",
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
      "Je ne vends pas de packs de backlinks anonymes : je préfère angles éditoriaux défendables, données originales ou études légères, études de cas vérifiables et partenariats sectoriels pertinents. Le netlinking utile soutient un site déjà technique et contenu solides ; sinon c’est polish sur fondations fragiles — risque manuel algorithmique inclus. Chaque opportunité est évaluée risque domaine vs bénéfice attendu avec vous, car c’est votre marque et URL hébergent la réputation long terme. Je vise des liens contextuels depuis contenus réellement liés au sujet, pas placements forcing sur pages sans rapport.",
    tldr: [
      "Éviter PBN, exchanges abusifs, footprints massifs achetables.",
      "Cibler domaines avec trafic réel et thématique crédible alignée votre offre.",
      "Ancres variées naturellement ; sur-optimisation ancres money keyword dangereuse.",
      "Créer actifs citables : recherche données, benchmarks sectoriels.",
      "Digital PR mesurée : pitches journalistes/bloggeurs avec valeur ajoutée réelle.",
      "Aligner acquisition liens avec stratégie GEO lorsque citations externes renforcent autorité perception.",
    ],
    sections: [
      {
        heading: "Stratégie éditoriale citabilité",
        paragraphs: [
          "Identifier données internes anonymisables exploitables ; études terrain si budget ; sinon analyses originales à partir sources publiques bien sourcées.",
          "Formats attractifs link magnets : calculateurs, définitions authoritative, frameworks gratuits.",
        ],
      },
      {
        heading: "Mesure et réalisme",
        paragraphs: [
          "Je relie gains à trafic référent qualité, évolution impressions clusters liés, pas simple comptage domaines.",
          "Liens toxiques ou suspects : désaveu/outreach suppression si nécessaire — audit backlink profile.",
        ],
      },
      {
        heading: "International et langues",
        paragraphs: [
          "Liens pays/langues alignés marchés visés ; éviter acquisition bulk hors contexte géographique business.",
        ],
      },
      {
        heading: "Coordination avec autres leviers SEO",
        paragraphs: [
          "Sans pages destination solides, backlinks pointent vers sable mouvant ; technique + contenu d’abord.",
        ],
      },
      {
        heading: "Ce que je refuse",
        paragraphs: [
          "Achats fermes liens, spam forums signatures massives, guest posts génériques sur réseaux manifestement vendeurs.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de liens par mois viser ?",
        answer:
          "Mauvaise question isolée : la bonne question est « quelles preuves rendent notre domaine naturellement citable » et quels canaux diffusion atteignent audiences pertinentes. Qualité prime ; volumes arrivent comme conséquence stratégie, pas objectif primaire vanity.",
      },
      {
        question: "Les annuaires servent encore ?",
        answer:
          "Peu généralistes massifs modernes ; niche très qualitatifs rares peuvent avoir valeur locale/contextuelle — évaluation individuelle.",
      },
      {
        question: "Liens nofollow : inutiles ?",
        answer:
          "Pas nécessairement : trafic référent et diversité naturelle profils ; signal indirect possible. Campagne uniquement « dofollow » paraît artificielle.",
      },
      {
        question: "Réparer pénalité liens passée ?",
        answer:
          "Audit désaveu/removals outreach, diversification acquisition propre ; pas garantie temps récupération — réalisme indispensable.",
      },
      {
        question: "Combien budget digital PR ?",
        answer:
          "Dépend création données, contacts journalistes, design assets ; fourchettes après cadrage — pas standard unique.",
      },
      {
        question: "Les mentions sans lien aident-elles ?",
        answer:
          "Signaux marque possiblement ; mais pour SEO classique liens contextuels restent précieux ; unification mention → lien parfois possible outreach poli.",
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
          "Pour aligner popularité avec des contenus faciles à citer dans les synthèses comme dans les résultats classiques.",
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
      "GEO (Generative Engine Optimization) : visibilité dans ChatGPT, Perplexity, Gemini et AI Overviews. Structure, faits, sources, FAQ et parcours par contenus.",
    eyebrow: "SEO & GEO",
    h1: "GEO : Generative Engine Optimization — être correctement cité par les moteurs génératifs.",
    lead:
      "Le GEO prolonge et distingue le SEO classique : il ne s’agit plus seulement d’apparaître en liste de liens bleu dans Google, mais d’être mentionné correctement — ou d’être la source citée — dans des réponses génératives (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews selon pays). Les modèles et systèmes de retrieval derrière ces interfaces favorisent contenus factuels structurés, définitions nettes, listes et tableaux utiles, formats Q/R clairs, signaux crédibilité (auteur identifiable, expertises vérifiables), et cohérence interne qui évite contradictions entre pages. Ce site applique volontairement TL;DR en tête, FAQ riches, renvois explicites entre pages thématiques et formulations précises : ce n’est pas cosmétique — c’est une discipline éditoriale et technique combinée. Le GEO ne remplace pas autorité domaine et preuves externes ; il rend votre positionnement plus facile à résumer fidèlement par des systèmes qui agrègent le web.",
    tldr: [
      "Réponses directes et résumés en tête : les assistants privilégient documents faciles à extraire sans déformer.",
      "Hiérarchie Hn claire, listes et tableaux lorsque comparatifs — formats naturels pour extraction.",
      "FAQ Q/R détaillées avec informations vérifiables — complément schema lorsque pertinent.",
      "Sources primaires, liens sortants vers références autoritaires quand claims le nécessitent.",
      "Moins de langue marketing creuse ; plus faits, périmètres, limites honnêtes — réduit risque hallucination reuse.",
      "Cohérence entre pages : contradictions internes nourrissent réponses IA incohérentes ou omissions.",
      "Présence externe crédible (contributions techniques, dépôts open-source, articles invités réels) renforce probabilité citation.",
      "Tests manuels réguliers sur requêtes cibles + suivi mentions marque dans réponses.",
      "Fichiers type llms.txt / documentation machine-readable émergents : faciliter parcours intentionnel aux systèmes autorisés.",
      "GEO et SEO classique convergent sur la clarté — divergence sur tactiques trop centrées uniquement sur le snippet Google.",
    ],
    sections: [
      {
        heading: "Qu’est-ce que le GEO exactement — et qu’est-ce que ce n’est pas",
        paragraphs: [
          "Le GEO (Generative Engine Optimization) désigne ensemble pratiques visant à augmenter probabilité que vos informations soient sélectionnées, correctement résumées ou citées par interfaces à base grands modèles : assistants conversationnels, moteurs réponses hybrides, plugins recherche.",
          "Ce n’est pas une liste hacks pour « tromper ChatGPT » ; manipulations spammy sont contre-productives et peu durables.",
          "Distinction avec SEO traditionnel : objectif outcome shift de clic SERP vers inclusion/citation dans synthèse ; métriques suivi différentes.",
        ],
      },
      {
        heading: "Pourquoi le GEO devient critique en 2026",
        paragraphs: [
          "Part croissante parcours recherche passant par interfaces résumant plusieurs sources ; même utilisateurs conservent Google mais complètent avec assistants pour tâches complexes.",
          "Pour marques B2B et SaaS techniques, être absent ou mal représenté dans synthèses peut équivaloir invisible aux buyers utilisant ces outils — indépendamment ranking bleu classique.",
          "Ce n’est pas une mode passagère : infrastructures inference et retrieval corporate s’installent durablement.",
        ],
      },
      {
        heading: "Sept leviers GEO que j’applique et recommande",
        paragraphs: [
          "Structure sémantique claire : titres reflètent contenu réel ; pas titres buzz sans substance.",
          "Faits vérifiables et citations externes pour claims forts ; éviter superlatifs non sourcés.",
          "Réponses directes aux questions fréquentes sous forme paragraphe dense + liste points — réduit ambiguïté extraction.",
          "Données structurées adaptées types contenu : Article, FAQPage lorsque légitimes, Product quand pertinent — richesse utile utilisateur avant snippet.",
          "Présence sur sources d’entraînement/curation possibles : dépôts techniques, forums qualité (anti-spam), publications tierces réelles — pas astroturfing.",
          "llms.txt ou équivalent documentation navigation pour agents autorisés — standard encore évolutif mais signal organisation intentionnelle.",
          "Autorité thématique et E-E-A-T : bio auteur, études cas mesurées, cohérence expertise claim vs preuves.",
        ],
        subsections: [
          {
            heading: "Profondeur vs promotion",
            paragraphs: [
              "Les systèmes tendent à dévaloriser texte purement promotionnel sans information ajoutée ; guides comparatifs honnêtes avec limites produit/services performent mieux long terme.",
            ],
          },
        ],
      },
      {
        heading: "Mesurer visibilité GEO (sans promesse vanity)",
        paragraphs: [
          "Tests manuels benchmarkés : même prompts sur plusieurs modèles, grille requêtes marque + non-marque sectorielles, capture mentions et citations sources listées.",
          "Suivi mentions marque dans réponses : variabilité modèles — cadence mensuelle ou trimestrielle selon criticité.",
          "Trafic référent depuis outils lorsqu’URL fournies cliquables — rare mais signal direct partiel.",
        ],
      },
      {
        heading: "Risques et erreurs fréquentes",
        paragraphs: [
          "Claims invérifiables : modèles peuvent ignorer ou contredire — ternit la confiance.",
          "Contenu généré machine non relu massif : homogénéité basse valeur ; pire que absence.",
          "Pages se contredisant : entraîne réponses IA partiellement fausses ou omission — audit cohérence nécessaire.",
          "Techniques black-hat adaptées GEO : même instabilité que SEO spam classique.",
        ],
      },
      {
        heading: "Intégration GEO et SEO classique dans une roadmap",
        paragraphs: [
          "Priorisation : corriger contradictions majeures + clarifier pages piliers avant créer volume — alignement stratégique marketing.",
          "Coordination avec efforts netlinking et PR : citations externes renforcent crédibilité retrieval.",
          "Pour sites e-commerce : fiches attributs précis, FAQ répondant vraies questions support — GEO et conversion convergent.",
        ],
      },
      {
        heading: "Ce site comme laboratoire",
        paragraphs: [
          "Je consomme moi-même ces principes sur clickdev.fr : TL;DR, FAQ étendues, renvois entre silos pour parcours utilisateur — pas uniquement robots.",
          "La promesse commerciale est transparente : vous voyez méthode appliquée avant engagement.",
        ],
      },
      {
        heading: "Cycle d’amélioration continue GEO",
        paragraphs: [
          "Revue trimestrielle prompts cibles et ajustements structure contenu ; intégration retours ventes sur questions prospects réelles manquantes site.",
          "Mise à jour guides datés (ex. années, stacks) pour éviter dépréciation factualité.",
        ],
      },
    ],
    faq: [
      {
        question: "Le GEO remplace-t-il le SEO classique ?",
        answer:
          "Non. Les résultats listes bleus restent massifs pour intents transactionnels directs et habits utilisateurs profondément ancrés. Le GEO ajoute une exigence clarté factuelle structurelle qui, en pratique, améliore aussi qualité SEO classique : contenu mieux compris partout.",
      },
      {
        question: "Comment apparaître dans réponses ChatGPT ou Perplexity pour mon secteur ?",
        answer:
          "Combinez autorité externe légitime, pages piliers claires couvrant questions réelles prospects, citations sources et signaux fraîcheur ; testez prompts non brandés pour voir si vos pages listées comme sources — ajustez lacunes éditoriales itérativement.",
      },
      {
        question: "Google AI Overviews et GEO : même combat ?",
        answer:
          "Proches : contenu facilement extractible, faits vérifiables et preuves aident surfaces Google génératives comme autres systèmes — mais règles exactes propriétaires Google diffèrent ; stratégie robuste reste qualité substance universelle.",
      },
      {
        question: "Dois-je publier massivement pour GEO ?",
        answer:
          "Volume sans valeur ajoutée peut diluer perception expertise ; mieux pages références profondes maintenues que blog cadence artificielle.",
      },
      {
        question: "Les données structurées FAQ aident-elles GEO ?",
        answer:
          "Indirectement oui pour la clarté des systèmes et parfois pour l’affichage ; mais le contenu FAQ doit être réellement utile à la décision — sinon risque d’être ignoré comme bruit.",
      },
      {
        question: "Comment gérer sujets où je ne veux pas être cité ?",
        answer:
          "Limitations directives robots/usage modèles en évolution ; stratégie contenu (ne pas publier hors sujet) ; parfois sections internes non indexées — selon risque juridique discuter avocat.",
      },
      {
        question: "Peut-on mesurer ROI GEO ?",
        answer:
          "Souvent indirect : leads qualifiés mentionnant assistants, réduction questions répétitives sales si self-serve info meilleure, renforcement notoriété mesurable études avant/après notoriété assistée — pas toujours attribution last-click facile.",
      },
      {
        question: "Quelle différence avec optimiser pour featured snippets ?",
        answer:
          "Snippets Google étaient un precursor extraction concise ; GEO élargit aux multiples interfaces et sources citation dynamiques — mais techniques lisibilité structure restent parentes.",
      },
      {
        question: "Faut-il un fichier llms.txt absolument ?",
        answer:
          "Recommandé suivre évolution standards ; utile signal organisation et orientation crawlers IA autorisés — pas réparation miracle si contenu faible derrière.",
      },
      {
        question: "Le GEO fonctionne-t-il pour e-commerce ?",
        answer:
          "Oui : attributs produit propres, comparaisons honnêtes, guides achat sourcés aident utilisateurs et modèles recommandant catégories ; évitez descriptions génériques interchangeables concurrents.",
      },
      {
        question: "ChatGPT cite-t-il toujours les URLs ?",
        answer:
          "Pas systématiquement : dépend interface, paramètres navigation web, et disponibilité sources jugées fiables moment requête — d’où importance cohérence globale présence digitale pas seulement page isolée.",
      },
      {
        question: "Puis-je sous-traiter GEO à outil tout-en-un automatisé ?",
        answer:
          "Les outils aident à suivre ; la stratégie de fond et la cohérence métier restent à arbitrer en interne. Méfiez-vous des offres qui promettent des citations garanties.",
      },
    ],
    internalLinks: [
      {
        href: "/seo/seo-technique/",
        label: "SEO technique",
        description:
          "Les bases crawl et performance distribuent vos pages utilement partout.",
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
          "Canal idéal pour guides longs, comparatifs sourcés et fraîcheur thématique.",
      },
      {
        href: "/ia/integration-ia/",
        label: "Intégration IA",
        description:
          "Quand vos contenus publics alimentent aussi produits IA internes.",
      },
      {
        href: "/devis/",
        label: "Demander un devis",
        description:
          "Décrivez pages cibles, requêtes stratégiques et outils mesure actuels.",
      },
    ],
  },
};
