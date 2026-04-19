import type { MarketingLongArticle } from '@/lib/content/marketing-article-types';

/** Contenus longs (objectif ~1500 mots chacun) — silo Sites internet. */
export const SITES_INTERNET_LONG_ARTICLES: Record<string, MarketingLongArticle> = {
  'sites-internet:site-vitrine': {
    metaDescription:
      'Site vitrine pro : structure, rédaction, perf, SEO local et CMS — développement freelance Clickdev, ton humain et sans bullshit.',
    lead:
      'Bon, soyons honnêtes deux secondes : un site vitrine, ce n’est pas « juste cinq pages avec un joli slider ». C’est la vitre de votre boutique numérique. Si en trois secondes on ne comprend pas ce que vous vendez, pour qui, et pourquoi vous plutôt que le concurrent à côté, le visiteur repart. Moi, mon job, c’est vous aider à raconter une histoire claire, vite, sur mobile, sans sacrifier le SEO ni la bonne humeur de celui qui devra mettre à jour le texte dans six mois (souvent vous).',
    sections: [
      {
        heading: 'Pourquoi le vitrine reste le grand classique (et toujours pas mort)',
        paragraphs: [
          'Le vitrine, c’est la forme la plus honnête du web : pas de tunnel panier à optimiser pendant six mois, pas de stock à synchroniser avec l’ERP du chaos. Mais justement, comme la barrière technique est basse, le marché est blindé de modèles fades. La différence se joue sur la hiérarchie de l’information, la qualité des preuves (études de cas, logos, témoignages), et surtout sur la vitesse. Un vitrine lent, c’est comme ouvrir un restaurant avec une porte enfoncée : les gens repartent avant d’avoir vu le menu.',
          'Je bosse souvent avec des profils variés : artisans qui veulent enfin arrêter Facebook-only, B2B services qui doivent rassurer un acheteur pressé, ou scale-ups qui sortent d’une phase « landing unique » et ont besoin d’arborescence. Le point commun : tout le monde veut un site « propre », mais peu de monde veut réfléchir aux pages piliers avant de choisir une police. Spoiler : on commence par la structure, pas par le hero vidéo full-screen qui pèse 40 Mo.',
          'Côté SEO, un vitrine bien fait peut cartonner sur du local et du sectoriel si on évite les textes génériques copiés-collés. Google n’aime pas la médiocrité ; les humains non plus. On vise donc des pages qui répondent à une intention précise (« installateur pompe à chaleur Lyon », « freelance Next.js e-commerce », etc.) avec du fond, pas du remplissage.',
        ],
      },
      {
        heading: 'Ce qu’on met dans le panier (sans jargon inutile)',
        paragraphs: [
          'On définit ensemble les pages indispensables : offre, preuves, équipe, FAQ, contact, parfois une zone « ressources » ou blog léger. Chaque page a un objectif : informer, rassurer, ou pousser vers un formulaire. Si une page ne fait ni l’un ni l’autre, on la tue sans pitié — oui, je suis ce développeur sympa qui supprime quand même les pages inutiles, c’est de l’amour.',
          'Les contenus peuvent vivre dans WordPress si votre équipe est à l’aise, ou dans un CMS headless type Sanity si vous voulez un front Next.js ultra rapide. L’important, c’est que la personne non-technique puisse corriger une typo un vendredi à 17h sans appeler le prestataire en urgence. Je livre des gabarits sobres : assez de contraintes pour ne pas casser la mise en page, assez de liberté pour que le marketing respire.',
          'Techniquement : HTML sémantique, titres cohérents, images responsives, lazy-load intelligent, polices auto-hébergées quand c’est possible, et une stratégie de cache réaliste. Les formulaires passent par des validations propres (merci Zod côté serveur) pour éviter le spam et les faux leads « asdf@asdf.com ».',
        ],
      },
      {
        heading: 'Performance : parce que personne n’aime attendre (même poliment)',
        paragraphs: [
          'Les Core Web Vitals ne sont pas un hobby de dev : c’est le ressenti utilisateur traduit en métriques. Je mesure surtout LCP et CLS sur les pages money (accueil, offre, contact). Si votre hero est une image PNG de 3 Mo « parce que le marketing l’a validée », on discute compression, formats modernes, et parfois recadrage créatif. Le but n’est pas de gagner une médaille Lighthouse pour flex sur Twitter, mais d’éviter que votre prospect parte avant le CTA.',
          'On prévoit aussi le « pire jour » : campagne LinkedIn, newsletter, ou article presse qui envoie un pic. Un vitrine doit tenir debout sans devenir une patate. Cache navigateur + CDN, pages statiques ou ISR selon le cas, et monitoring basique pour voir si quelqu’un a uploadé une image non optimisée par erreur.',
        ],
      },
      {
        heading: 'SEO local & données structurées (sans magie noire)',
        paragraphs: [
          'Si vous avez une zone d’intervention géographique, on structure des pages propres plutôt que dix fois la même phrase avec le nom de ville remplacé par Ctrl+H. Google déteste le duplicate fin ; vos clients aussi. Quand c’est pertinent, on ajoute des données structurées (Organization, LocalBusiness selon cas, FAQ) pour clarifier votre entité — utile aussi dans un monde où les IA résument le web.',
          'Le maillage interne, c’est la petite cousine sympa du SEO : liens contextuels entre services, vers vos réalisations, vers une FAQ qui répond aux objections. Pas besoin d’en mettre 40 par page ; 3 à 5 liens utiles suffisent souvent à aider utilisateurs et crawlers.',
        ],
      },
      {
        heading: 'Comment on travaille ensemble (spoiler : avec du café et des jalons)',
        paragraphs: [
          'Atelier court de cadrage, puis maquettes textuelles ou wireframes légers si besoin. Je préfère des itérations visibles toutes les 1–2 semaines plutôt qu’un tunnel de silence de deux mois. Vous voyez avancer, vous testez sur mobile, vous me dites ce qui coince. À la fin : formation express à l’admin, checklist post-lancement, et la possibilité de me rappeler quand vous voudrez ajouter une vraie page « Jobs » au lieu du lien Notion bricolé (on ne juge pas, on a tous été jeunes).',
        ],
      },
      {
        heading: 'Après la mise en ligne : mesurer, ajuster, célébrer (un peu)',
        paragraphs: [
          'On pose des objectifs simples : trafic organique sur 5 pages clés, taux de conversion formulaire, temps de chargement mobile. Pas besoin d’un tableau de bord NASA ; un Search Console + un analytics respectueux de la vie privée suffisent souvent pour prendre des décisions.',
          'Ensuite on itère : enrichir une FAQ qui reçoit des questions réelles, ajouter une étude de cas quand vous avez les chiffres, optimiser une page qui rank presque. Le web vit ; votre site aussi. Et si un jour vous voulez passer du vitrine à une boutique en ligne, on discute stack pour ne pas tout jeter — promis, pas de drama.',
        ],
      },
    ],
    faq: [
      {
        question: 'Combien de pages pour un vitrine « sérieux » sans tomber dans l’encyclopédie ?',
        answer:
          'Souvent entre 8 et 20 pages utiles selon vos services, zones, et preuves. Je préfère 10 pages excellentes à 40 pages vides. On priorise ce qui convertit : offre, preuves, process, FAQ objections, contact. Le reste peut attendre V2 — oui, même la page « Notre histoire depuis 1987 » si personne ne la lit.',
      },
      {
        question: 'Je veux mettre à jour les textes moi-même sans casser le site. C’est possible ?',
        answer:
          'Oui, c’est même souhaitable. On configure des blocs ou des champs clairs, une preview fiable, et une petite doc « si ça clignote en rouge, ne validez pas ». Si vous préférez ne jamais toucher au HTML, on reste sur un CMS confortable. Si vous aimez le Markdown, on peut aussi viser du headless.',
      },
      {
        question: 'WordPress ou Next.js pour mon vitrine ?',
        answer:
          'WordPress si l’équipe veut une autonomie maximale sur les contenus et un écosystème de plugins maîtrisé. Next.js si vous visez perf extrême, internationalisation fine, ou intégration dans un produit plus large. On choisit avec vos compétences internes, pas avec ma techno préférée du mois.',
      },
    ],
  },

  'sites-internet:site-ecommerce': {
    metaDescription:
      'E-commerce sur mesure, Shopify, WooCommerce : tunnel, perf, SEO catalogue et intégrations — Clickdev, freelance qui parle humain.',
    lead:
      'Un e-commerce, c’est un marathon où chaque seconde de latence coûte de l’argent — et où chaque champ de formulaire en trop fait fuir quelqu’un qui allait pourtant vous donner des euros. J’aide les marques à livrer un parcours d’achat fluide : catalogue clair, checkout qui ne panique pas sur mobile, intégrations sérieuses (paiement, stock, transport), et SEO produit qui ne se sabote pas tout seul avec 400 facettes identiques.',
    sections: [
      {
        heading: 'Le tunnel : moins de friction, plus de café pour vous',
        paragraphs: [
          'Le panier abandonné n’est pas une fatalité ; c’est souvent un signal UX. On retravaille les étapes, les libellés, la réassurance (livraison, retours, paiement sécurisé), et on évite les mauvaises surprises de frais port affichés trop tard. J’intègre les bons outils de paiement (Stripe, Adyen, PayPal selon contexte) avec gestion des erreurs réseau et messages compréhensibles — parce que « Error 502 » n’a jamais convaincu personne.',
          'Côté perf, on anticipe les pics : soldes, Black Friday, spot TV surprise. Cache, files d’attente, rate limiting sur les APIs fragiles, et parfois une file d’attente virtuelle côté checkout si votre logistique a des limites physiques. Bref : on code comme si le pire jour allait arriver demain matin.',
        ],
      },
      {
        heading: 'Shopify, WooCommerce, ou sur mesure : arrêtons le match de catch',
        paragraphs: [
          'Shopify brille quand vous voulez aller vite sur un standard e-commerce international. WooCommerce est pertinent si WordPress est déjà votre cœur éditorial et que le catalogue reste raisonnable. Le sur mesure (souvent Next + API) gagne quand vos règles catalogue, promotions, ou B2B sont trop spécifiques pour un template — ou quand vous voulez coller votre UX à 100 % à votre marque.',
          'Je ne vends pas une religion : je vous explique les compromis (coût, vélocité, dette technique, autonomie marketing). Parfois la bonne réponse, c’est « Shopify maintenant, migration progressive plus tard ». L’important, c’est que vous compreniez ce que vous achetez, avec un vocabulaire normal.',
        ],
      },
      {
        heading: 'SEO e-commerce sans se prendre les pieds dans le tapis',
        paragraphs: [
          'Facettes, filtres, tri, pagination : autant de joyeusetés qui créent du duplicate et mangent le budget de crawl. On définit des règles claires : canonicals, noindex ciblé, pages catégorie utiles, contenus éditoriaux qui tirent les produits vers le haut. Les données structurées Product sont posées proprement, sans promesses irréalistes qui feraient sourciller un quality rater.',
          'Le maillage interne relie blog, guides, et fiches produit stratégiques. On évite les silos où le blog parle de tout sauf de ce que vous vendez — sauf si votre stratégie éditoriale assume ce positionnement.',
        ],
      },
      {
        heading: 'Intégrations : ERP, transport, CRM, et autres acronymes qui font peur',
        paragraphs: [
          'Les connecteurs cassent souvent en silence. Je documente les flux, j’isole les intégrations fragiles, j’ajoute des retries idempotents et des alertes quand un webhook part en cacahuète. L’objectif : que votre ops ne découvre pas le bug le dimanche soir via un tweet client en colère.',
          'Emailing post-achat, fidélisation, avis, facturation : on branche ce qui apporte de la valeur, pas cinq outils « growth » qui envoient chacun leur pixel pour fliquer le même utilisateur.',
        ],
      },
      {
        heading: 'Refonte SEO-friendly (sans « on verra bien »)',
        paragraphs: [
          'Si vous refondez, on mappe les URLs, on planifie les 301, on teste sur préprod, et on surveille Search Console après bascule. Je déteste autant que vous la courbe de trafic qui plonge parce qu’on a oublié une catégorie entière. On prépare un rollback réaliste, même si espérer ne jamais l’utiliser reste légitime.',
        ],
      },
      {
        heading: 'Données produit & qualité catalogue (la guerre silencieuse)',
        paragraphs: [
          'Un e-commerce vit avec la qualité de ses données : SKU cohérents, attributs normalisés, images nommées correctement, stocks à jour. On prévoit des imports CSV robustes, des validations côté serveur, et des rapports d’erreurs compréhensibles pour vos ops — sinon ils finissent par détester l’outil, et c’est pire qu’un bug technique.',
          'Les médias : formats modernes, tailles multiples, lazy-load, parfois vidéo courte produit. Le but est que la fiche soit rapide même quand votre DA a insisté pour « juste une petite vidéo 4K ».',
        ],
      },
    ],
    faq: [
      {
        question: 'Je suis en WooCommerce et ça rame : on peut sauver le soldat Ryan ?',
        answer:
          'Souvent oui : audit plugins, thème, requêtes SQL lourdes, images, cache. Parfois la réponse honnête est « refonte ciblée » si la dette dépasse le coût des rustines. Je vous dis laquelle des deux, sans mytho.',
      },
      {
        question: 'Marketplace multi-vendeurs : c’est le même métier ?',
        answer:
          'Pas exactement : la confiance, les paiements split, la modération et le SEO multi-offre ajoutent de la complexité. J’ai une page dédiée marketplace dans ce silo ; si votre besoin ressemble à ça, on bascule la discussion sur ce modèle.',
      },
    ],
  },

  'sites-internet:marketplace': {
    metaDescription:
      'Marketplace : vendeurs, escrow, litiges, SEO multi-catalogue et scale — développement freelance Clickdev.',
    lead:
      'Une marketplace, c’est un petit gouvernement numérique : des règles, des taxes implicites (commissions), des citoyens grognons (vendeurs et acheteurs), et des crises imprévisibles (chargeback, litige, bot qui scrape tout le catalogue). C’est passionnant — et exigeant. Je conçois des plateformes où la confiance n’est pas un slogan marketing mais une suite de mécanismes : onboarding vendeur, KYC si besoin, messagerie traçable, modération, et paiements qui respectent la réalité bancaire.',
    sections: [
      {
        heading: 'Pourquoi le MVP marketplace doit être petit mais complet',
        paragraphs: [
          'La tentation classique : vouloir « toutes les features d’Amazon V1 ». Résultat : rien n’est fini, personne ne paie. Je pousse plutôt un périmètre réduit mais bout-en-bout : inscription vendeur, publication d’offre, commande, paiement, commission, support minimal. Une fois que l’argent tourne vraiment, on ajoute la finesse (recommandations, promos complexes, programmes partenaires).',
          'Techniquement, on sépare ce qui est critique (argent, identité) du reste. Les modules financiers sont testés comme du code aéronautique — parce qu’un bug sur une commission, ça réveille des avocats plus vite que vous ne dites « escrow ».',
        ],
      },
      {
        heading: 'Confiance, conformité, et nuits un peu plus tranquilles',
        paragraphs: [
          'RGPD, conservation des messages, droit à l’oubli, export : on cadrera avec votre juriste si vous en avez un (sinon je vous oriente vers des bases saines sans jouer les avocats sur internet, promis). Les journaux d’audit sur actions admin et litiges, c’est la bouée de sauvetage quand deux vendeurs s’accusent mutuellement d’avoir envoyé un colis vide.',
          'Les notifications email/SMS doivent être utiles, pas harcelantes — sinon vos utilisateurs vous détestent et votre délivrabilité part en fumée. On paramètre des fréquences, des préférences, et des templates qui sonnent humains.',
        ],
      },
      {
        heading: 'SEO marketplace : le cauchemar des facettes, mais en mieux',
        paragraphs: [
          'Les marketplaces souffrent souvent de duplication massive : mêmes produits, filtres infinis, URLs instables. On pose des règles d’indexation tôt : quelles pages doivent ranker, lesquelles sont noindex, comment canonicaliser sans casser les filtres utiles. Le but : que Google comprenne votre architecture, pas qu’il se perde dans 400 000 URLs vides.',
        ],
      },
      {
        heading: 'Scale : soldes, TV, influenceurs, et autres pics sympathiques',
        paragraphs: [
          'Files d’attente, cache, rate limits, autoscaling si infra le permet : on prépare le trafic comme on prépare une salle de concert — avec des sorties de secours. Les intégrations transport, facturation, ou KYC sont encapsulées pour qu’une panne partielle ne fasse pas tomber tout le site.',
        ],
      },
      {
        heading: 'Admin & ops : la face cachée qui sauve votre équipe support',
        paragraphs: [
          'Un back-office lisible pour valider vendeurs, modérer annonces, geler comptes, suivre litiges et remboursements partiels : ce n’est pas « bonus », c’est ce qui évite que votre COO finisse avec phpMyAdmin ouvert à 2 h du matin. On conçoit des écrans rapides, des filtres utiles, et des exports CSV quand Excel reste le roi du reporting.',
          'Les rôles admin sont segmentés (support niveau 1 vs finance vs super-admin) pour limiter les dégâts en cas d’erreur humaine — ou de compte compromis. Les actions sensibles laissent une trace : qui a validé ce vendeur, qui a forcé un payout, qui a supprimé cette annonce.',
          'En production, on prévoit aussi des feature flags : activer une nouvelle messagerie ou un nouveau flux de paiement sur un pourcentage d’utilisateurs avant le grand public. Prudent, mais sans bloquer l’innovation jusqu’à la retraite.',
        ],
      },
    ],
    faq: [
      {
        question: 'Stripe Connect suffit-il pour payer les vendeurs ?',
        answer:
          'Souvent oui en phase early, selon pays et modèle. Il faut cadrer les comptes Express/Custom, les délais de versement, et la gestion des refunds. Au-delà, des acteurs spécialisés peuvent entrer en jeu ; on dimensionne selon votre roadmap.',
      },
      {
        question: 'On commence par quoi si on a peur du scope ?',
        answer:
          'Un atelier de cadrage + prototype technique court sur le flux d’argent et l’onboarding vendeur. Si ces deux briques tiennent, le reste est du feature engineering — toujours plus simple que de rêver un empire sur PowerPoint.',
      },
    ],
  },

  'sites-internet:landing-page': {
    metaDescription:
      'Landing page à fort taux de conversion : message unique, preuves, CTA, perf — freelance Clickdev.',
    lead:
      'Une landing page, c’est un stand de foire : une seule promesse, un seul produit, une seule file d’attente pour la caisse. Si vous essayez d’y coller tout votre site vitrine, vous obtenez une page floue qui ne convertit personne — et qui coûte cher en pub. J’aime les landings parce qu’on peut mesurer sans bullshit : trafic, scroll, clic CTA, envoi formulaire. Les chiffres ne mentent pas ; les opinions du comité, un peu plus souvent.',
    sections: [
      {
        heading: 'Une promesse, une preuve, un clic (sinon on recommence)',
        paragraphs: [
          'On clarifie l’intention : lead, démo, achat, inscription webinar… Une seule action principale. Les liens de fuite (menu complet, footer encyclopédique) sont retirés ou réduits volontairement. Ce n’est pas du sadisme UX : c’est pour éviter que votre prospect parte lire votre page « carrières » au lieu de laisser son email.',
          'Les preuves : logos clients, chiffres vérifiables, témoignage court, capture produit. Pas besoin d’un roman ; besoin de crédibilité scannable en 10 secondes. Le hero mobile doit tenir dans un écran sans scroll forcé pour comprendre l’offre.',
        ],
      },
      {
        heading: 'Itération et A/B : la science du « on teste avant d’insulter le designer »',
        paragraphs: [
          'On pose un tracking propre (consentement RGPD, événements clairs). Ensuite on teste : variantes de titre, ordre des preuves, CTA primaire vs secondaire. Je ne promets pas des +400 % miracles ; parfois +8 % sur le formulaire, c’est déjà une victoire qui paie les pubs.',
        ],
      },
      {
        heading: 'Perf & qualité perçue',
        paragraphs: [
          'Une landing lente tue vos CPA comme une guillotine. Images compressées, JS minimal, fonts raisonnables. Si vous voulez une animation « wow », qu’elle soit optionnelle et respecte prefers-reduced-motion — accessibilité, ce n’est pas qu’un mot pour briller sur LinkedIn.',
        ],
      },
      {
        heading: 'Intégrations CRM & nurturing',
        paragraphs: [
          'Leads qui partent dans le vide, c’est la tristesse absolue. On branche votre CRM ou au minimum un email de notification fiable, avec anti-spam côté serveur. Si vous utilisez HubSpot, Salesforce, ou un simple Google Sheet au début, je m’adapte — tant que le process est clair.',
        ],
      },
      {
        heading: 'Copy, preuve sociale, et micro-UX : trois détails qui font la différence',
        paragraphs: [
          'Les micro-textes (« que se passe-t-il après l’envoi ? », « pas de carte bancaire ») rassurent plus qu’un paragraphe de jargon. On les teste comme des features : parfois trois mots changés doublent la complétion du formulaire — sans toucher au design.',
          'Les preuves sociales doivent être honnêtes : logos avec accord, témoignages datés, chiffres sourcés. Internet a la mémoire longue ; un screenshot fake se transforme vite en mauvaise pub sur Twitter/X.',
          'Enfin, on prépare la landing pour le multi-device : clavier mobile qui ne masque pas le CTA, champs regroupés logiquement, messages d’erreur au bon endroit. Ce sont les petites victoires qui font qu’un prospect clique « envoyer » plutôt que « retour ».',
        ],
      },
    ],
    faq: [
      {
        question: 'Landing vs page du site classique ?',
        answer:
          'La landing coupe la navigation pour maximiser la conversion sur une campagne précise. La page site sert le SEO long terme et le maillage. Les deux cohabitent souvent : ne confondez pas les rôles.',
      },
      {
        question: 'Je lance une pub lundi, vous pouvez livrer vendredi ?',
        answer:
          'Parfois oui si le périmètre est minimal et validé vite. Sinon je préfère dire non avec honnêteté plutôt que livrer une page bancale qui brûle votre budget média.',
      },
    ],
  },

  'sites-internet:site-mise-en-relation': {
    metaDescription:
      'Plateforme de mise en relation : confiance, modération, paiement, RGPD — développement freelance Clickdev.',
    lead:
      'Mettre en relation deux humains sur internet, c’est jouer les apprentis cupidons… avec la RGPD sur le dos et la modération en garde du corps. Que vous fassiez du babysitting B2C, du matching freelance B2B, ou de l’intermédiation services, la recette reste similaire : identité vérifiée raisonnablement, règles de mise en relation explicites, signalement simple, et logs quand ça part en vrille. Je code pour que votre équipe support dorme un minimum.',
    sections: [
      {
        heading: 'Confiance sans parano totale',
        paragraphs: [
          'Trop de friction à l’inscription, personne ne rentre ; trop peu, vous attirez les bots et les arnaques. On trouve l’équilibre selon votre vertical : vérification email, téléphone, pièce d’identité, score interne, ou rien au début si votre MVP doit valider le marché. Chaque niveau a un coût UX et un coût dev : on le dit à voix haute.',
          'La modération humaine + automatisation : filtres de mots, rate limits sur messages, signalement en 2 clics, et file admin pour traiter les cas litigieux. Les notifications doivent être utiles (« nouveau message ») sans devenir du spam.',
        ],
      },
      {
        heading: 'Paiement sur plateforme ou hors plateforme ?',
        paragraphs: [
          'Si vous prenez une commission, le paiement intégré (Stripe Connect, etc.) simplifie la vie… mais impose conformité et pays supportés. Si vous restez hors paiement, il faut quand même éviter le contournement total qui tue votre business model. On modélise les cas : premier job gratuit, puis commission, abonnement vendeur, etc.',
        ],
      },
      {
        heading: 'Données perso & juridique (version dev pragmatique)',
        paragraphs: [
          'Bases légales, durées de conservation, export, suppression compte : on prépare les flux techniques pour coller à votre politique. Je ne remplace pas un avocat, mais je sais implémenter ce qu’il valide — et éviter les stockages « au cas où » qui vous exposent.',
        ],
      },
      {
        heading: 'Mobile-first parce que la vie est sur le téléphone',
        paragraphs: [
          'Messagerie, pièces jointes, statut de mission : tout doit être utilisable d’une main dans le métro. Les safe areas iOS, les claviers qui recouvrent pas les CTA, les uploads photo qui ne crashent pas : ce sont les détails qui font « pro ».',
        ],
      },
      {
        heading: 'Croissance & rétention : au-delà du « match parfait »',
        paragraphs: [
          'Une fois le cœur stable, on pense rétention : notifications utiles, rappels de profils incomplets, programmes de parrainage, badges de confiance. Chaque levier est mesuré pour ne pas basculer dans le harcèlement — personne n’aime recevoir douze pushs par jour parce qu’un growth hacker a eu une idée.',
          'Les tableaux de bord vendeur/acheteur donnent de la visibilité : missions en cours, taux de réponse, satisfaction. La transparence réduit les litiges — et le temps passé sur le support, ce qui est souvent le vrai coût caché d’une marketplace.',
        ],
      },
    ],
    faq: [
      {
        question: 'On peut commencer sans paiement intégré ?',
        answer:
          'Oui en phase discovery, si le risque est assumé. Il faut alors un plan clair pour ajouter le paiement avant d’ouvrir trop grand.',
      },
      {
        question: 'Comment éviter les arnaques sans bloquer tout le monde ?',
        answer:
          'Combinaison progressive : email/téléphone, limites de messages pour nouveaux comptes, signalement simple, modération semi-auto, et parfois vérification d’identité sur les flux sensibles. On calibre selon votre vertical et votre tolérance au risque — pas de solution universelle, sinon ce serait trop facile.',
      },
      {
        question: 'Les avis et notes : obligatoires ?',
        answer:
          'Souvent utiles pour la confiance, mais ils demandent anti-abus (achats de faux avis, chantage). On peut démarrer sans puis ajouter quand le volume le justifie.',
      },
    ],
  },

  'sites-internet:site-sur-mesure': {
    metaDescription:
      'Site ou portail sur mesure : cadrage, architecture, Next.js, intégrations — freelance Clickdev.',
    lead:
      'Le sur mesure, ce n’est pas « on code parce qu’on aime souffrir ». C’est quand votre parcours utilisateur, vos règles métier, ou vos intégrations dépassent ce qu’un template raisonnable peut porter sans devenir un Frankenstein de plugins. Mon rôle : traduire votre chaos bienveillant en backlog priorisé, avec des releases testables plutôt qu’un big bang où tout le monde pleure sur Slack la veille de la mise en prod.',
    sections: [
      {
        heading: 'Quand le sur mesure est la bonne idée (et quand ce ne l’est pas)',
        paragraphs: [
          'Bonne idée : configurateur complexe, logique tarifaire atypique, besoin de perf extrême, internationalisation poussée, intégrations multiples temps réel. Mauvaise idée : site vitrine 5 pages alors que WordPress fait très bien le job — sauf si votre vraie motivation est pédagogique ou stack interne, auquel cas on en discute sans jugement.',
          'Je documente les arbitrages coût / délai / risque. Parfois la meilleure décision est un MVP hybride : sur mesure sur le cœur métier, CMS sur le marketing.',
        ],
      },
      {
        heading: 'Architecture & dette technique : les mots que personne n’aime mais tout le monde subit',
        paragraphs: [
          'On pense early à la modularité : front, API, auth, paiement, jobs async. Les parties qui changent souvent sont isolées. Les tests ciblent les règles métier critiques — pas une couverture à 100 % pour flex, sauf si votre secteur l’exige.',
          'CI/CD, environnements staging, feature flags : tout ce qui permet de déployer le jeudi sans sacrifier un stagiaire au dieu des régressions.',
        ],
      },
      {
        heading: 'Design intégré sans casser la maquette Figma',
        paragraphs: [
          'Je bosse avec vos designers ou avec des UI kits. L’objectif : respecter l’intention visuelle tout en restant performant (pas d’ombre portée sur 400 divs). Si la maquette est impossible à animer à 60 fps sur Android milieu de gamme, je le dis tôt avec des captures Lighthouse, pas en passive-aggressif.',
        ],
      },
      {
        heading: 'Industrialisation : survivre après le freelance',
        paragraphs: [
          'Documentation, README, transfert : votre équipe doit pouvoir reprendre. Je déteste les bus factor de 1 — surtout quand c’est moi le bus. On planifie la passation comme une feature, pas comme une note en bas de PDF.',
        ],
      },
      {
        heading: 'Observabilité & support : quand le téléphone sonne à 21 h',
        paragraphs: [
          'Logs structurés, alertes sur erreurs 5xx, dashboards basiques : pas pour flex, mais pour comprendre « pourquoi ça a planté » quand un client important est en ligne. On définit ce qui est critique (paiement, auth) vs ce qui peut attendre demain matin.',
          'Runbooks courts pour les incidents fréquents (« comment purger la file », « comment désactiver le module X ») : votre équipe sait réagir sans déchiffrer 12 000 lignes de code obscur. Et si vous préférez que je reste en astreinte, on cadrer un SLA réaliste plutôt que des promesses héroïques.',
        ],
      },
    ],
    faq: [
      {
        question: 'Délai pour un sur mesure ?',
        answer:
          'De quelques semaines pour un noyau MVP à plusieurs mois pour un produit riche. Le cadrage fixe un V1 réaliste ; le reste est roadmap.',
      },
      {
        question: 'Peut-on intégrer une équipe design / agence déjà en place ?',
        answer:
          'Oui, c’est même fréquent : je prends l’intégration technique, les revues de faisabilité perf, et la mise en prod. Les rituels (design QA, recette) s’adaptent à votre organisation.',
      },
    ],
  },

  'sites-internet:site-wordpress': {
    metaDescription:
      'WordPress pro : thème sur mesure, Gutenberg, perf, sécurité — freelance Clickdev qui aime aussi le bon vieux WP.',
    lead:
      'WordPress n’est pas « vieux jeu » : c’est encore ce qui fait tourner une partie massive du web, et c’est souvent le meilleur choix quand votre équipe marketing veut autonomie sans passer par un dev à chaque virgule. Le piège, c’est la dérive plugin et le thème ThemeForest qui charge 90 scripts pour afficher trois paragraphes. Mon approche : discipline — thème clair, blocks/patterns, perf mesurée, mises à jour planifiées, et admin qui ne ressemble pas à un cockpit d’avion de ligne.',
    sections: [
      {
        heading: 'Thème sur mesure vs builder : la paix des ménages',
        paragraphs: [
          'Les builders populaires font gagner du temps au début… puis coûtent cher en dette quand il faut optimiser ou migrer. Je pousse Gutenberg / blocks sur mesure quand c’est possible : composants réutilisables, contrôle fin du HTML, et moins de magie noire. Si vous avez déjà Elementor ou autre, on peut aussi encadrer l’usage plutôt que tout jeter — je ne suis pas en croisade religieuse.',
        ],
      },
      {
        heading: 'Sécurité & mises à jour (le côté adulte du WP)',
        paragraphs: [
          'Core, thème, plugins : calendrier de update, staging, sauvegardes testées. Comptes admin durcis, 2FA, moindre privilège. Les formulaires passent par des protections anti-bot sérieuses. Oui, c’est moins sexy qu’un hero vidéo ; c’est ce qui évite le site piraté qui vend des sacs à main contrefaits.',
        ],
      },
      {
        heading: 'Performance : WP peut être rapide, promis',
        paragraphs: [
          'Cache objet/page, images modernes, fonts locales, requêtes SQL surveillées. On mesure LCP sur mobile réel, pas seulement sur le Mac du CEO. Parfois la solution est « moins de plugins » — révolutionnaire, je sais.',
        ],
      },
      {
        heading: 'Headless WordPress + Next.js quand le marketing veut WP et le produit veut React',
        paragraphs: [
          'API REST ou GraphQL, preview, webhooks : on expose le contenu proprement au front. C’est un peu plus complexe à héberger, mais le combo peut être très puissant pour du e-commerce éditorial ou du multi-langue.',
        ],
      },
      {
        heading: 'Éditorial au quotidien : formations et garde-fous',
        paragraphs: [
          'Je forme vos contributeurs à publier sans casser le layout : patterns, blocs verrouillés, preview fiable. On évite les « copier depuis Word avec 400 styles cachés » qui rendent le HTML illisible.',
          'Les rôles éditoriaux (auteur, relecteur, admin) reflètent votre gouvernance : pas besoin que tout le monde soit administrateur — c’est la porte ouverte aux plugins « installés un vendredi soir » et aux surprises le lundi.',
        ],
      },
    ],
    faq: [
      {
        question: 'Vous reprenez un WP legacy en catastrophe ?',
        answer:
          'Souvent oui : audit, liste des plugins à virer ou remplacer, plan de migration progressive. Parfois la refonte complète est plus rentable ; je vous le dis si c’est le cas.',
      },
      {
        question: 'Multilingue sur WordPress : galère ou gérable ?',
        answer:
          'Gérable avec les bons plugins ou une approche multisite, mais il faut cadrer URLs, hreflang, et workflow éditorial. On choisit la solution la moins magique possible — moins de surprises en prod.',
      },
    ],
  },

  'sites-internet:intranet-extranet': {
    metaDescription:
      'Intranet / extranet : SSO, rôles, documents, workflows — développement freelance Clickdev.',
    lead:
      'Les portails internes, c’est le genre de projet où tout le monde sous-estime la complexité… jusqu’au jour où 400 personnes uploadent des PDF du même nom et que le « simple espace documentaire » devient un enfer de permissions. Je conçois des intranets / extranets où l’auth (SSO, MFA), les rôles, et les parcours métier sont posés sérieusement — parce que votre RH n’a pas envie de lire un manuel de 40 pages pour déposer un bulletin de salaire.',
    sections: [
      {
        heading: 'Auth & rôles : la base de tout le reste',
        paragraphs: [
          'SSO SAML/OIDC avec Google Workspace ou Microsoft 365, MFA pour les comptes sensibles, sessions adaptées au risque. Les rôles doivent coller à la réalité : « admin » partout, c’est la porte ouverte aux fuites. On segmente par équipe, par site, par partenaire externe pour l’extranet.',
        ],
      },
      {
        heading: 'Documents, recherche, et joie de vivre',
        paragraphs: [
          'Une recherche qui marche vaut dix fois un design brillant. Indexation, filtres, prévisualisation, versioning simple : on priorise ce qui évite les « tu as la dernière version ? » sur 15 mails. Les gros volumes passent par des patterns async et des barres de progression honnêtes.',
        ],
      },
      {
        heading: 'Sécurité réseau & conformité interne',
        paragraphs: [
          'VPN, IP allowlist, ou au minimum JWT courts et audit logs sur actions sensibles. On discute avec votre DSI tôt — mieux vaut un « non » technique au cadrage qu’un « impossible » la veille du go-live.',
        ],
      },
      {
        heading: 'Workflows métier sans usine à gaz',
        paragraphs: [
          'Formulaires multi-étapes, validations, notifications ciblées. On évite les workflows « configurables » illisibles devenus ingérables. Souvent, un peu de code explicite bat une usine à règles opaque.',
        ],
      },
      {
        heading: 'Adoption interne : le vrai ROI du portail',
        paragraphs: [
          'Un intranet magnifique que personne n’ouvre, c’est un musée numérique. On pense onboarding : emails de bienvenue, vidéos courtes, recherche qui marche, et intégration dans les outils déjà ouverts (Slack/Teams).',
          'Les quick wins : remplacer trois formulaires Excel par un seul parcours guidé, ou centraliser les PDF juridiques avec versionning. Quand les équipes gagnent 20 minutes par jour, votre DSI devient votre fan numéro un — presque.',
        ],
      },
    ],
    faq: [
      {
        question: 'Extranet partenaires : périmètre typique ?',
        answer:
          'Accès documents, commandes B2B, suivi logistique, ticketing : selon votre chaîne. On définit la surface minimale utile puis on étend.',
      },
      {
        question: 'Hébergement on-prem vs cloud : vous imposez ?',
        answer:
          'Non : on respecte vos contraintes DSI. Le code et l’archi doivent coller à votre politique (où résident les données, chiffrement, VPN). Je documente les points d’attention pour l’infogérance.',
      },
    ],
  },
};
