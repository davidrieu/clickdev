import type { MarketingLongArticle } from '@/lib/content/marketing-article-types';

/** Page pilier Sites internet — objectif ~2000 mots, ton direct et pédagogique. */
export const SITES_INTERNET_PILLAR_ARTICLE: MarketingLongArticle = {
  metaDescription:
    'Sites vitrine, e-commerce, marketplaces, WordPress, Next.js, intranets — conception, perf, SEO et livraison sérieuse avec David (Clickdev), sans blabla.',
  lead:
    'Si vous êtes arrivé ici, c’est probablement parce que vous avez un projet web « sérieux » : celui qui doit rassurer un comité, tenir une campagne pub, ou simplement remplacer le vieux WordPress qui met 8 secondes à afficher trois paragraphes. Bonne nouvelle : j’adore ce genre de défis — pas parce que j’aime souffrir devant un écran, mais parce qu’un bon site, bien pensé, ça change concrètement le quotidien des équipes sales, support et marketing. Je conçois et développe des sites vitrines, des boutiques en ligne, des marketplaces, des landings ultra ciblées et des portails internes. Mon fil rouge : clarté pour l’utilisateur, performance mesurable, SEO technique qui ne se sabotage pas tout seul, et une stack que vous pourrez maintenir sans devenir otage du premier prestataire passant. Et oui, on peut faire tout ça avec du café, des jalons, et des blagues de dev — tant que la prod reste carrée.',
  sections: [
    {
      heading: 'Pourquoi « un site » reste au cœur de presque tout le digital',
      paragraphs: [
        'Même à l’ère des apps et des IA, le site reste souvent le point de vérité : c’est là que Google vous indexe, que vos campagnes atterrissent, que vos prospects comparent les offres, et que vos clients cherchent une doc après achat. Un site lent ou confus n’est pas « dommage » : c’est une fuite invisible sur votre budget acquisition. Je préfère le dire avec un sourire, mais c’est mathématique : chaque friction sur mobile coûte des conversions.',
        'La bonne nouvelle, c’est qu’on n’a pas besoin d’une usine à gaz pour gagner. Parfois un vitrine bien structuré + une stratégie de contenu honnête bat une « plateforme expérientielle » vide. Mon rôle est de vous aider à choisir le bon niveau de complexité : ni sous-dimensionné (et vous replafonnez dans un an), ni sur-ingénierisé parce que le CTO voulait briller à la machine à café.',
        'Ce silo regroupe tout ce qui touche au web « classique » mais pas naïf : vitrine, e-commerce, marketplace, mise en relation, sur mesure, WordPress discipliné, intranet/extranet, landing pages. Chaque page fille détaille un angle ; ici, on prend du recul sur l’ensemble — comme une carte avant d’aller randonner : on voit les sommets, les refuges, et où ne pas passer parce que c’est boueux.',
      ],
    },
    {
      heading: 'Vitrine, e-commerce, marketplace : trois sports différents (avec des règles différentes)',
      paragraphs: [
        'Le vitrine, c’est le 100 mètres : court, intense, tout le monde croit savoir le faire. La différence se joue sur la hiérarchie de l’info, les preuves sociales, le SEO local, et une perf mobile irréprochable. L’e-commerce, c’est plutôt un semi-marathon : tunnel, paiement, stock, logique promo, SEO catalogue, pics de trafic. La marketplace, c’est un triathlon : identités multiples, argent, litiges, modération, SEO multi-vendeurs — bref, un mini-gouvernement numérique.',
        'Mélanger ces problèmes sur une même page d’accueil « parce que le comité voulait tout voir », c’est la recette classique pour un site qui ne convertit rien. Je préfère des parcours distincts, des CTA clairs, et une architecture qui reflète votre business réel. Si vous hésitez entre deux modèles, on le met noir sur blanc avec des critères simples : qui paie, qui publie du contenu, qui supporte les incidents le dimanche soir ?',
        'Les pages filles de ce silo détaillent chaque famille. Si vous êtes entre deux chaises — par exemple « on commence vitrine puis e-commerce » — on peut planifier une stack qui grandit sans tout jeter : headless, design system, composants réutilisables, et dette technique maîtrisée.',
      ],
    },
    {
      heading: 'Stack : Next.js, WordPress, Shopify… oui, mais surtout « maintenable par humains »',
      paragraphs: [
        'Next.js / React brille quand vous voulez du très performant, du multi-langue fin, du e-commerce headless, ou une expérience produit riche. WordPress reste un monstre de popularité pour une bonne raison : l’autonomie éditoriale. Shopify accélère le e-commerce standard international. WooCommerce vit bien quand WordPress est déjà le cœur de votre contenu. Le sur mesure gagne quand vos règles métier dépassent ce qu’un template peut porter sans devenir Frankenstein.',
        'Je ne vends pas de religion techno : je vous explique les compromis (coût, délai, recrutement interne, dette, sécurité). Parfois la meilleure réponse est « Shopify maintenant, refonte Next plus tard ». L’important, c’est que vous sachiez ce que vous achetez — avec des mots normaux, pas trois acronymes par phrase pour impressionner votre beau-frère.',
        'Côté CMS headless (Sanity, etc.), c’est excellent quand le marketing veut des workflows propres et que le front veut voler vite. Côté WordPress, c’est top quand votre équipe vit déjà dedans — à condition de discipliner plugins et thèmes. Dans tous les cas, je pense « qui met à jour le contenu vendredi à 17h » avant de coder le moindre composant.',
      ],
    },
    {
      heading: 'Performance & SEO technique : le duo qui ne demande qu’à bien se faire',
      paragraphs: [
        'Les Core Web Vitals ne sont pas un concours de ego dev : c’est le ressenti utilisateur traduit en chiffres. Je mesure tôt sur mobile réel, pas seulement sur le Mac M3 du studio. Images modernes, JS raisonnable, polices maîtrisées, cache cohérent : les classiques, mais appliqués avec discipline — parce que sinon ça regraisse en trois releases.',
        'Le SEO technique, c’est l’alignement entre ce que Google crawl et ce que l’humain comprend : titres, maillage, duplication, internationalisation, données structurées utiles (pas du JSON-LD spam). Les migrations (refonte, HTTPS, changement d’URL) se préparent comme un déménagement : cartons étiquetés, plan de redirections, tests sur préprod, et monitoring post-bascule pour éviter la courbe de trafic qui pleure.',
        'Le GEO — être cité dans les réponses des IA — s’appuie souvent sur les mêmes fondations : pages claires, faits vérifiables, entité marque/personne solide, FAQ honnêtes. Pas de promesse magique ; si quelqu’un vous garantit ChatGPT, fuyez poliment vers la sortie.',
      ],
    },
    {
      heading: 'Accessibilité & confiance : la partie « adulte » du web (celle qui évite les procès mous)',
      paragraphs: [
        'WCAG ce n’est pas que pour les grandes structures : c’est aussi du bon UX pour tout le monde — contrastes, focus clavier, textes alternatifs utiles, animations respectueuses de prefers-reduced-motion. Ça aide le SEO, ça réduit les frictions, et ça évite les mauvaises surprises quand un client important utilise un lecteur d’écran.',
        'Les formulaires et données perso : validation serveur, anti-spam sérieux, messages d’erreur compréhensibles (adieu « Error 500 »). Pour les sites sensibles (santé, finance, RH), on cadrer la conformité avec vos experts — je fais la partie implémentation, pas le costume d’avocat.',
      ],
    },
    {
      heading: 'Process : des jalons visibles, zéro tunnel interminable',
      paragraphs: [
        'Atelier de cadrage court, priorisation par valeur, démos régulières, et une doc qui tient debout. Vous savez où on en est, ce qui est reporté, et pourquoi. Je déteste autant que vous les projets « boîte noire » où la prochaine nouvelle, c’est la mise en prod.',
        'Les contenus : soit votre équipe rédige avec mes briefs SEO, soit je recommande des partenaires rédaction quand le volume explose. L’important est que le site reste vivant après le go-live — un beau squelette sans muscles, ça ne court pas longtemps.',
        'Après livraison : garde-fous monitoring, petits correctifs, ou TMA si vous voulez quelqu’un qui connaît déjà les coins sombres du code. Pas d’obligation ; juste la possibilité de ne pas repartir de zéro avec un inconnu qui découvre vos hacks documentés… dans votre tête uniquement.',
      ],
    },
    {
      heading: 'Quand m’appeler (et quand m’épargner)',
      paragraphs: [
        'Appelez-moi si vous avez un vrai besoin produit : refonte critique, nouveau canal e-commerce, marketplace naissante, intranet qui peine, ou landing pour une campagne avec budget média derrière. Épargnez-moi si vous cherchez uniquement « quelqu’un qui clique sur installer WordPress » sans réflexion — sauf si vous payez au forfait café et blagues, auquel cas on négocie.',
        'Si vous ne savez pas encore : un échange de 30 minutes suffit souvent à trancher « MVP raisonnable » vs « usine à gaz ». Le formulaire devis ou la page contact marchent très bien ; j’essaie de répondre vite, parce que j’aime aussi qu’on me réponde vite quand je suis client ailleurs.',
      ],
    },
  ],
  faq: [
    {
      question: 'WordPress ou Next.js pour mon projet ?',
      answer:
        'WordPress si l’équipe veut une autonomie maximale sur les contenus et un écosystème connu. Next.js si vous visez perf extrême, e-commerce headless, expériences très interactives, ou intégration dans un produit plus large. Souvent la réponse se lit dans vos compétences internes et votre horizon 18–36 mois — pas dans la mode du moment sur Twitter.',
    },
    {
      question: 'Peut-on refondre sans tout couper d’un coup ?',
      answer:
        'Oui, c’est même souvent préférable : routes migrées par lots, feature flags, préproduction réaliste, et redirections 301 propres. La stratégie dépend de votre trafic, de votre stack, et de votre tolérance au risque SEO. On planifie un rollback réaliste, même si l’objectif est de ne jamais l’utiliser.',
    },
    {
      question: 'Vous reprenez un site déjà en ligne ?',
      answer:
        'Oui : audit UX + technique, quick wins, puis roadmap. On peut commencer par sécurité/perf si c’est urgent, puis refonte ciblée. Je vous dirai honnêtement si la dette dépasse le coût d’une réécriture partielle.',
    },
    {
      question: 'Marketplace et simple vitrine : même devis ?',
      answer:
        'Non — la marketplace ajoute identités multiples, paiements, modération, SEO multi-offre, et souvent des pics de charge. C’est un autre sport ; regardez la page fille marketplace pour le détail, ou parlons-en directement si vous êtes entre les deux.',
    },
    {
      question: 'Comment démarrer concrètement ?',
      answer:
        'Un message avec contexte, contraintes, et idée de budget/délais — même approximatif. Je réponds avec des options ou une proposition d’atelier court. Pas besoin de PDF de 40 pages pour commencer ; juste assez de clarté pour ne pas vous faire perdre votre temps.',
    },
  ],
};
