# 📋 Brief — Pages filles du silo Sites internet

> Document de référence pour la création des 8 pages filles du silo `/sites-internet/` de ClickDev.
> À fournir à Cursor en complément du brief principal `brief-clickdev.md`.

---

## ⚠️ Règles absolues

### Design

**Zéro création visuelle nouvelle.** Toutes les pages filles reprennent **intégralement** le design de la page pilier `/sites-internet/` :

- Mêmes composants (hero, bento-style cards, bloc éditorial, comparatif, process, stack, cas clients, FAQ à onglets, CTA final)
- Mêmes typographies, couleurs, espacements, animations
- Mêmes conventions de mise en page
- Mêmes boutons (blancs avec halo sur le CTA final)

Si un composant manque pour une page spécifique, créer une variation **dans le même langage visuel**, jamais un nouveau style.

### Ton éditorial

Règles strictes appliquées à TOUS les contenus :

- **Avenant, chaleureux, conversationnel** — comme une vraie discussion
- **Cool et légèrement fun** — sans jamais devenir familier à l'excès
- **Ultra clair** — zéro jargon technique gratuit
- **Accessible** à un commerçant de 55 ans qui ne connaît rien à la tech
- **Techniquement précis** quand nécessaire, sans dévaloriser l'expertise

**Test à appliquer à chaque phrase** : un artisan ou un commerçant la comprend-il immédiatement ? Sinon, reformuler.

### Prix

**Tous les tarifs "à partir de" restent sous les 4 900 €** pour garder un positionnement accessible. Cela ne signifie pas qu'on ne fait pas de projets plus importants — cela signifie qu'on rassure dès l'entrée les petites et moyennes structures.

### SEO

Chaque page fille est un **silo SEO** dédié à un mot-clé longue traîne. Le SEO technique doit être impeccable sur chacune (checklist en fin de document).

---

## 🏗️ Structure commune de chaque page fille

Chaque page fille suit **exactement** cette architecture, identique à la page pilier pour la cohérence :

### 1. Fil d'Ariane
`Accueil > Sites internet > [Nom du type]`
Avec schema BreadcrumbList à 3 niveaux.

### 2. Hero spécifique
- **Eyebrow** : "CHAPITRE 01.[X] · [NOM DU TYPE]"
- **Sous-eyebrow** : "DÉVELOPPEUR FREELANCE — [SPÉCIALITÉ]"
- **H1** unique et ciblé SEO
- **Lead** de 2-3 phrases adressées à la cible précise
- **2 CTAs** : "Demander un devis" + "Voir des exemples"

### 3. Bloc "Ce que vous obtenez"
4 bénéfices concrets, orientés client (pas techno) avec visuels discrets dans le style de la page pilier.

### 4. Bloc éditorial SEO (800-1000 mots)
4 sous-sections H3 ciblant des mots-clés longue traîne.
Avec lettrines et pull quotes (style éditorial magazine).

### 5. Bloc "Pour qui c'est fait"
3-4 profils de clients types avec descriptions rassurantes.

### 6. Bloc Process adapté
5 étapes adaptées au type de projet, style identique à la page pilier.

### 7. Bloc Stack technique
Les technos utilisées pour CE type spécifique.

### 8. Bloc Cas clients
2-3 études de cas filtrées (récupérées via Sanity selon le type).

### 9. Bloc FAQ spécifique
6-8 questions ciblées sur ce type de site.
Schema FAQPage obligatoire.

### 10. Bloc Budget
Encart discret mentionnant "à partir de [prix]" avec la mention "devis gratuit et personnalisé".

### 11. Bloc CTA final
Adapté au contexte, boutons blancs avec halo.

---

## 📄 Détail par page

---

### PAGE 1 — `/sites-internet/site-vitrine/`

**Mot-clé principal** : "création site vitrine professionnel"
**Volume** : fort · **Concurrence** : moyenne
**Budget à mentionner** : à partir de 2 500 €

#### Metadata

```typescript
export const metadata: Metadata = {
  title: "Création site vitrine professionnel — Freelance | Clickdev",
  description: "Création de site vitrine professionnel sur mesure par un développeur freelance. Design moderne, SEO optimisé, performant. Devis gratuit dès 2 500 €.",
  keywords: ["création site vitrine", "site vitrine professionnel", "site vitrine sur mesure", "développeur site vitrine freelance"],
  alternates: { canonical: "https://clickdev.fr/sites-internet/site-vitrine" },
};
```

#### Hero

- **Eyebrow** : "CHAPITRE 01.1 · SITE VITRINE"
- **Sous-eyebrow** : "DÉVELOPPEUR FREELANCE — SITES PROFESSIONNELS"
- **H1** : "Création de site vitrine professionnel"
- **Lead** : "Présentez votre activité avec un site web élégant, rapide, et pensé pour transformer vos visiteurs en clients. De l'artisan au grand groupe, un site vitrine sur mesure reste votre meilleur commercial."

#### Bloc "Ce que vous obtenez"

1. **Un site qui vous ressemble** — Pas un template. Un vrai site, à votre image, avec vos mots, vos visuels, votre identité.
2. **Des pages qui se chargent en moins d'une seconde** — Parce qu'un site lent, c'est un site qui perd des clients.
3. **Un référencement Google prêt dès le jour 1** — Structure optimisée, contenu sémantique, données structurées. Tout est en place.
4. **Un outil simple à gérer** — Vous pouvez modifier vos textes et images vous-même, sans toucher au code.

#### Angle éditorial (800-1000 mots)

**Titre** : "Pourquoi un site vitrine reste indispensable en 2026"

Sous-sections H3 :

1. **"Votre site vitrine, votre meilleur commercial 24h/24"**
   Parler de : premier point de contact client, disponibilité permanente, outil de confiance. Mots-clés : "site vitrine professionnel", "présence en ligne".

2. **"Les 5 éléments d'un site vitrine qui convertit"**
   Lister : clarté du message, rapidité, preuve sociale, CTA visible, mobile-first. Mots-clés : "site vitrine qui convertit", "design UX".

3. **"Site sur mesure vs template : le vrai calcul"**
   Expliquer le coût caché des templates, la différence en perf et SEO, la durée de vie. Mots-clés : "site vitrine sur mesure", "template WordPress".

4. **"Ma méthode pour un site vitrine qui vous rapporte"**
   Présenter l'approche personnalisée, le suivi, l'accompagnement. Lien vers `/a-propos/` et `/realisations/`.

#### Pour qui c'est fait

- **Artisans et commerçants** : "Un site pro, à votre image, à un prix accessible. Parfait pour présenter vos services et attirer des clients locaux."
- **Professions libérales** : "Médecin, avocat, coach, consultant : gagnez en crédibilité avec un site qui inspire confiance."
- **TPE et PME** : "Modernisez votre présence en ligne avec un site performant qui représente votre entreprise comme vous le méritez."
- **Associations** : "Faites connaître votre cause, recrutez des membres, collectez des dons avec un site pensé pour l'engagement."

#### FAQ

1. Combien coûte un site vitrine professionnel ?
2. Combien de temps pour créer un site vitrine ?
3. Je pourrai modifier mon site moi-même après ?
4. Mon site sera-t-il optimisé pour Google ?
5. Est-ce que ça inclut l'hébergement et le nom de domaine ?
6. Vous travaillez avec des petites structures ?
7. Que se passe-t-il après la mise en ligne ?

#### Stack technique suggérée à mentionner

Next.js, Astro, WordPress (selon le besoin), Tailwind CSS, Sanity ou Strapi, Vercel.

#### Cas clients

Filtrer depuis Sanity : projets de type "site-vitrine", afficher les 2-3 plus récents.

---

### PAGE 2 — `/sites-internet/site-ecommerce/`

**Mot-clé principal** : "création site e-commerce sur mesure"
**Volume** : très fort · **Concurrence** : forte
**Budget à mentionner** : à partir de 4 500 €

#### Metadata

```typescript
export const metadata: Metadata = {
  title: "Création site e-commerce sur mesure — Freelance | Clickdev",
  description: "Développement de sites e-commerce sur mesure par un freelance expérimenté. Shopify, WooCommerce, headless. Boutique rapide et convertissante dès 4 500 €.",
  keywords: ["création site e-commerce", "site e-commerce sur mesure", "développeur Shopify freelance", "boutique en ligne professionnelle"],
  alternates: { canonical: "https://clickdev.fr/sites-internet/site-ecommerce" },
};
```

#### Hero

- **Eyebrow** : "CHAPITRE 01.2 · E-COMMERCE"
- **Sous-eyebrow** : "DÉVELOPPEUR FREELANCE — BOUTIQUES EN LIGNE"
- **H1** : "Création de site e-commerce sur mesure"
- **Lead** : "Vendez en ligne 24h/24 avec une boutique rapide, belle, et pensée pour convertir. De la petite marque au retailer établi, je construis des e-commerces qui transforment vraiment."

#### Bloc "Ce que vous obtenez"

1. **Une boutique rapide comme l'éclair** — Parce que chaque seconde de lenteur = clients perdus. Objectif : moins d'une seconde de chargement.
2. **Un tunnel d'achat pensé pour convertir** — De la fiche produit au paiement, chaque étape est optimisée pour votre taux de conversion.
3. **Une gestion simple au quotidien** — Ajoutez produits, modifiez prix, suivez commandes : tout se gère sans code.
4. **Une boutique qui s'adapte à vos ambitions** — Prête à absorber des pics de trafic et à s'étendre à l'international.

#### Angle éditorial (800-1000 mots)

**Titre** : "L'e-commerce en 2026 : au-delà du simple catalogue"

Sous-sections H3 :

1. **"Pourquoi la plupart des e-commerces ne convertissent pas vraiment"**
   Performance, UX médiocre, tunnels trop longs. Mots-clés : "taux de conversion e-commerce", "UX e-commerce".

2. **"Shopify, WooCommerce ou sur mesure : comment choisir"**
   Guide clair selon le volume, le budget, les besoins spécifiques. Mots-clés : "Shopify vs WooCommerce", "e-commerce headless".

3. **"Les 7 leviers d'un e-commerce qui convertit"**
   Vitesse, fiches produits, avis, recherche, filtres, checkout, mobile. Mots-clés : "optimisation e-commerce", "conversion boutique en ligne".

4. **"De la première vente à la scalabilité internationale"**
   Comment mon approche évolue avec votre activité. Lien vers `/realisations/greenweez` (ou autre cas e-commerce).

#### Pour qui c'est fait

- **Petites marques qui se lancent** : "Votre première boutique en ligne, propre, fonctionnelle et évolutive, sans sacrifier la qualité."
- **Artisans et créateurs** : "Vendez vos créations avec un site qui raconte votre histoire autant que vos produits."
- **Retailers établis** : "Refonte ou migration : passez à une stack moderne sans perdre votre référencement."
- **Marques internationales** : "Multi-devises, multi-langues, logistique complexe : je gère les e-commerces exigeants."

#### FAQ

1. Combien coûte un site e-commerce sur mesure ?
2. Shopify ou WooCommerce : lequel choisir ?
3. Est-ce que vous gérez la migration depuis un autre site ?
4. Comment se gère le SEO sur un e-commerce ?
5. Quels moyens de paiement sont intégrés ?
6. Est-ce que je peux gérer mon catalogue moi-même ?
7. Et pour la logistique et l'expédition ?
8. Je peux étaler le paiement du développement ?

#### Stack technique

Next.js + Shopify Hydrogen, Shopify, WooCommerce, Medusa, Stripe, Algolia, Sanity, Vercel.

#### Cas clients

Filtrer : Greenweez, The French Maisons, autres e-commerces récents.

---

### PAGE 3 — `/sites-internet/marketplace/`

**Mot-clé principal** : "création marketplace freelance"
**Volume** : moyen · **Concurrence** : faible (opportunité forte)
**Budget à mentionner** : à partir de 4 900 €

#### Metadata

```typescript
export const metadata: Metadata = {
  title: "Création de marketplace sur mesure — Freelance | Clickdev",
  description: "Développement de marketplace multi-vendeurs par un freelance expérimenté. Commissions automatiques, paiements fractionnés, profils multiples. Dès 4 900 €.",
  keywords: ["création marketplace", "développement marketplace", "marketplace Stripe Connect", "plateforme multi-vendeurs"],
  alternates: { canonical: "https://clickdev.fr/sites-internet/marketplace" },
};
```

#### Hero

- **Eyebrow** : "CHAPITRE 01.3 · MARKETPLACE"
- **Sous-eyebrow** : "DÉVELOPPEUR FREELANCE — PLATEFORMES MULTI-VENDEURS"
- **H1** : "Création de marketplace sur mesure"
- **Lead** : "Multi-vendeurs, commissions automatiques, paiements fractionnés : je développe des marketplaces complètes qui fonctionnent. Que vous lanciez un Airbnb de niche ou un Etsy sectoriel, tout est possible."

#### Bloc "Ce que vous obtenez"

1. **Une plateforme multi-vendeurs clé en main** — Inscriptions vendeurs, gestion des catalogues, modération, tableau de bord admin.
2. **Des paiements fractionnés automatiques** — Grâce à Stripe Connect, votre commission est prélevée à chaque transaction, sans effort.
3. **Une expérience pensée pour tous les rôles** — Acheteurs, vendeurs, admins : chacun a son interface adaptée.
4. **Une architecture qui scale** — Prête à gérer 10 ou 10 000 vendeurs sans changement majeur.

#### Angle éditorial (800-1000 mots)

**Titre** : "Anatomie d'une marketplace qui fonctionne"

Sous-sections H3 :

1. **"Les marketplaces qui marchent ont toutes 3 points communs"**
   Masse critique, friction minimale, modération. Mots-clés : "marketplace réussie", "modèle économique marketplace".

2. **"Les défis techniques à anticiper dès le départ"**
   Paiements, SEO multi-vendeurs, modération, scalabilité. Mots-clés : "défis technique marketplace", "architecture marketplace".

3. **"Stripe Connect et la gestion des paiements fractionnés"**
   Expliquer simplement comment les commissions se prélèvent automatiquement. Mots-clés : "Stripe Connect marketplace", "paiements fractionnés".

4. **"De l'idée au MVP : méthode de développement progressif"**
   Comment lancer une marketplace en 3-4 mois avec un MVP solide. Lien vers `/realisations/` (cas marketplace).

#### Pour qui c'est fait

- **Entrepreneurs avec une idée validée** : "Vous avez identifié un besoin sur un marché de niche. Je construis la plateforme qui va y répondre."
- **Entreprises qui veulent se diversifier** : "Ajouter une marketplace à votre activité existante pour créer une nouvelle source de revenus."
- **Associations et collectifs** : "Une plateforme pour mettre en relation membres et prestataires, avec vos règles propres."
- **Acteurs établis** : "Transformer votre base de partenaires en véritable plateforme avec commissions et automatisation."

#### FAQ

1. Combien coûte le développement d'une marketplace ?
2. Quel est le délai pour lancer une marketplace ?
3. Comment se gère la fiscalité des vendeurs tiers ?
4. Que se passe-t-il en cas de litige entre acheteur et vendeur ?
5. Comment attirer les premiers vendeurs sur la plateforme ?
6. Est-ce que je peux commencer petit et évoluer ?
7. Et pour la modération des contenus ?

#### Stack technique

Next.js, Medusa ou solution sur mesure, Stripe Connect, PostgreSQL, Algolia, Supabase, Vercel.

---

### PAGE 4 — `/sites-internet/site-mise-en-relation/`

**Mot-clé principal** : "site de mise en relation sur mesure"
**Volume** : moyen · **Concurrence** : faible
**Budget à mentionner** : à partir de 4 500 €

#### Metadata

```typescript
export const metadata: Metadata = {
  title: "Création site de mise en relation — Freelance | Clickdev",
  description: "Développement de plateformes de mise en relation sur mesure. Profils, messagerie, avis, réservations. Développeur freelance expérimenté. Dès 4 500 €.",
  keywords: ["site de mise en relation", "plateforme de mise en relation", "développement plateforme freelance", "site de réservation sur mesure"],
  alternates: { canonical: "https://clickdev.fr/sites-internet/site-mise-en-relation" },
};
```

#### Hero

- **Eyebrow** : "CHAPITRE 01.4 · MISE EN RELATION"
- **Sous-eyebrow** : "DÉVELOPPEUR FREELANCE — PLATEFORMES DE MISE EN RELATION"
- **H1** : "Création de site de mise en relation"
- **Lead** : "Connecter des prestataires à des clients, des artisans à des particuliers, des coachs à leurs élèves : les plateformes de mise en relation sont un business model puissant. Je les conçois sur mesure."

#### Bloc "Ce que vous obtenez"

1. **Des profils riches pour les deux côtés** — Prestataires et clients ont chacun leur espace, leurs outils, leur parcours.
2. **Une messagerie intégrée fluide** — Pour que les échanges se fassent directement sur votre plateforme, sans fuite.
3. **Un système d'avis et de notation** — Essentiel pour créer la confiance et valoriser les bons prestataires.
4. **Gestion de rendez-vous et paiements** — Tout ce qu'il faut pour transformer une rencontre en transaction.

#### Angle éditorial (800-1000 mots)

**Titre** : "Qu'est-ce qu'un site de mise en relation réussi"

Sous-sections H3 :

1. **"La règle d'or : résoudre un vrai problème de friction"**
   Les plateformes qui marchent simplifient un truc vraiment pénible. Mots-clés : "plateforme de mise en relation", "réduire la friction".

2. **"Profils, messagerie, avis, paiement : les briques essentielles"**
   Détailler chaque brique, leurs pièges et leurs bonnes pratiques. Mots-clés : "fonctionnalités plateforme mise en relation".

3. **"Exemples de plateformes qui fonctionnent et pourquoi"**
   Malt, Doctolib, Superprof, Wecasa. Analyser les clés de leur succès. Mots-clés : "exemples plateforme de mise en relation".

4. **"De l'idée au MVP en quelques mois"**
   Ma méthode progressive pour éviter les projets qui n'aboutissent pas. Lien vers `/a-propos/` et étude de cas.

#### Pour qui c'est fait

- **Entrepreneurs avec une idée de plateforme** : "Vous avez identifié deux publics qui ont du mal à se trouver. Je crée le pont."
- **Professionnels qui veulent se regrouper** : "Une plateforme collective pour votre secteur, avec vos règles et votre marque."
- **Associations et réseaux** : "Fluidifier la mise en relation entre vos membres ou avec vos partenaires."
- **Franchiseurs et réseaux locaux** : "Une plateforme qui connecte vos franchisés aux clients finaux."

#### FAQ

1. Combien coûte un site de mise en relation ?
2. Quelle différence entre un site de mise en relation et une marketplace ?
3. Comment gérer la première étape du "œuf ou la poule" ?
4. Et si je veux prendre une commission sur les mises en relation ?
5. Est-ce que je peux intégrer un système de vérification d'identité ?
6. Combien de temps pour lancer un MVP ?
7. Vous accompagnez sur le plan business aussi ?

#### Stack technique

Next.js, Supabase, Stripe, Pusher/Ably pour la messagerie, Resend, Vercel.

---

### PAGE 5 — `/sites-internet/site-sur-mesure/`

**Mot-clé principal** : "développement site web sur mesure"
**Volume** : fort · **Concurrence** : moyenne
**Budget à mentionner** : à partir de 3 500 €

#### Metadata

```typescript
export const metadata: Metadata = {
  title: "Développement site web sur mesure — Freelance | Clickdev",
  description: "Développement de sites web sur mesure adaptés à votre activité. Règles métier spécifiques, intégrations complexes, UX unique. Freelance expérimenté dès 3 500 €.",
  keywords: ["développement site web sur mesure", "site web sur mesure", "développeur full-stack freelance", "application web sur mesure"],
  alternates: { canonical: "https://clickdev.fr/sites-internet/site-sur-mesure" },
};
```

#### Hero

- **Eyebrow** : "CHAPITRE 01.5 · SUR MESURE"
- **Sous-eyebrow** : "DÉVELOPPEUR FREELANCE — PROJETS ATYPIQUES"
- **H1** : "Développement de site web sur mesure"
- **Lead** : "Quand aucune solution existante ne colle parfaitement à votre activité, le sur mesure reste la meilleure option. Règles métier spécifiques, intégrations complexes, UX unique : je code votre projet de zéro."

#### Bloc "Ce que vous obtenez"

1. **Un outil 100% adapté à votre métier** — Pas d'adaptation forcée à des templates génériques. C'est le code qui s'adapte à vous.
2. **Des intégrations sur mesure avec vos outils** — CRM, ERP, API externes : tout peut se connecter proprement.
3. **Une liberté totale d'évolution** — Pas de limites imposées par un thème ou un plugin. Votre produit évolue comme vous le voulez.
4. **Un code propre et documenté** — Pour qu'un autre dev puisse reprendre le projet si besoin.

#### Angle éditorial (800-1000 mots)

**Titre** : "Quand le sur mesure devient indispensable"

Sous-sections H3 :

1. **"Les signes qu'un template ne suffira plus"**
   Complexité métier, volume, intégrations. Mots-clés : "site web sur mesure vs template", "limites WordPress".

2. **"L'investissement sur mesure : quel ROI espérer"**
   Coût initial plus élevé mais pérennité et scalabilité. Mots-clés : "ROI site sur mesure", "coût développement sur mesure".

3. **"Architecture et choix techniques : mes principes"**
   Modularité, documentation, choix de stack. Mots-clés : "architecture site web", "choix techniques développement".

4. **"Le rôle du sur mesure dans votre croissance"**
   Pourquoi les entreprises qui grandissent migrent toutes vers du sur mesure. Lien vers `/realisations/urbawise` ou équivalent.

#### Pour qui c'est fait

- **Entreprises avec des règles métier complexes** : "Votre activité a des spécificités qu'aucun template ne peut gérer proprement."
- **Startups avec un produit unique** : "Votre différenciation est dans le produit. Il mérite d'être construit sur mesure."
- **Éditeurs de SaaS** : "Dashboard, onboarding, facturation, multi-tenant : je code votre plateforme de zéro."
- **Organisations avec des contraintes fortes** : "Sécurité, conformité, souveraineté : un développement sur mesure répond à toutes vos exigences."

#### FAQ

1. Combien coûte un site web sur mesure ?
2. Quelle différence avec WordPress ou Shopify ?
3. Combien de temps pour un projet sur mesure ?
4. Est-ce que je ne risque pas de dépendre de vous ?
5. Comment se passe la maintenance après livraison ?
6. Vous utilisez quelles technos ?
7. Est-ce que je peux faire évoluer mon site après ?

#### Stack technique

Next.js, Nuxt, Node.js, Laravel, PostgreSQL, Redis, Supabase, Vercel, AWS.

---

### PAGE 6 — `/sites-internet/site-wordpress/`

**Mot-clé principal** : "développeur WordPress freelance"
**Volume** : très fort · **Concurrence** : très forte
**Budget à mentionner** : à partir de 1 900 €

#### Metadata

```typescript
export const metadata: Metadata = {
  title: "Développeur WordPress freelance — Sur mesure | Clickdev",
  description: "Création, refonte et optimisation de sites WordPress par un développeur freelance. WordPress bien fait : rapide, sécurisé, évolutif. Dès 1 900 €.",
  keywords: ["développeur WordPress freelance", "création site WordPress", "WordPress sur mesure", "refonte site WordPress", "WordPress headless"],
  alternates: { canonical: "https://clickdev.fr/sites-internet/site-wordpress" },
};
```

#### Hero

- **Eyebrow** : "CHAPITRE 01.6 · WORDPRESS"
- **Sous-eyebrow** : "DÉVELOPPEUR FREELANCE — WORDPRESS SANS COMPROMIS"
- **H1** : "Développeur WordPress freelance"
- **Lead** : "WordPress bien fait, c'est rapide, sécurisé et évolutif. J'interviens sur création, refonte, optimisation et maintenance, sans les pièges habituels (thèmes lourds, plugins bancals, sites ingérables)."

#### Bloc "Ce que vous obtenez"

1. **Un WordPress rapide, vraiment** — Pas de thème gonflé, pas de plugins superflus. Objectif Lighthouse 90+.
2. **Un site sécurisé dès le départ** — Configuration durcie, mises à jour automatisées, sauvegardes régulières.
3. **Une interface simple pour vous** — Vous gérez vos contenus sans craindre de casser quoi que ce soit.
4. **Un code qui tient dans le temps** — Fini les sites WordPress impossibles à maintenir 2 ans après.

#### Angle éditorial (800-1000 mots)

**Titre** : "WordPress en 2026 : mythes et réalités"

Sous-sections H3 :

1. **"WordPress, ce n'est pas mort — bien au contraire"**
   Parts de marché, évolution, écosystème. Mots-clés : "WordPress 2026", "WordPress toujours pertinent".

2. **"Pourquoi la plupart des sites WordPress sont lents et mal foutus"**
   Thèmes universels, surabondance de plugins, hébergement bas de gamme. Mots-clés : "WordPress lent", "optimisation WordPress".

3. **"Quand WordPress est vraiment la bonne solution (et quand non)"**
   Cas d'usage optimaux, limites, alternatives. Mots-clés : "WordPress vs Next.js", "choix CMS".

4. **"Ma méthode pour un WordPress qui tient dans le temps"**
   Thème custom léger, plugins minimalistes, documentation. Lien vers `/maintenance/maintenance-wordpress/`.

#### Pour qui c'est fait

- **PME qui veulent gérer leur contenu** : "WordPress reste le meilleur choix quand vous voulez publier régulièrement sans passer par un dev."
- **Sites éditoriaux et blogs** : "L'écosystème WordPress est imbattable pour les contenus longs et le référencement."
- **Projets à budget maîtrisé** : "WordPress permet d'avoir un vrai site pro sans exploser votre budget."
- **Sites existants à sauver** : "Vous avez un WordPress qui rame ou qui se fait pirater ? Je le remets d'aplomb."

#### FAQ

1. Combien coûte un site WordPress sur mesure ?
2. WordPress vs Next.js : lequel choisir ?
3. Est-ce que WordPress est vraiment sécurisé ?
4. Vous utilisez Elementor ou un thème gratuit ?
5. Je peux gérer tous mes contenus moi-même ?
6. Et pour la maintenance après ?
7. Vous pouvez refondre mon WordPress actuel ?
8. WordPress est-il bon pour le SEO ?

#### Stack technique

WordPress core, ACF, thème custom, FlyingPress, Wordfence, Cloudflare, O2switch ou infomaniak pour l'hébergement.

---

### PAGE 7 — `/sites-internet/intranet-extranet/`

**Mot-clé principal** : "création intranet extranet entreprise"
**Volume** : moyen · **Concurrence** : moyenne
**Budget à mentionner** : à partir de 4 900 €

#### Metadata

```typescript
export const metadata: Metadata = {
  title: "Création intranet et extranet sur mesure | Clickdev",
  description: "Développement d'intranet et extranet sur mesure pour entreprises. Espace collaborateur, portail partenaire, base documentaire. Freelance expérimenté dès 4 900 €.",
  keywords: ["création intranet", "création extranet", "intranet sur mesure", "portail collaboratif entreprise", "développeur intranet freelance"],
  alternates: { canonical: "https://clickdev.fr/sites-internet/intranet-extranet" },
};
```

#### Hero

- **Eyebrow** : "CHAPITRE 01.7 · INTRANET · EXTRANET"
- **Sous-eyebrow** : "DÉVELOPPEUR FREELANCE — OUTILS INTERNES ET PARTENAIRES"
- **H1** : "Création d'intranet et extranet sur mesure"
- **Lead** : "Espace collaborateur, portail partenaire, base documentaire interne : je développe des intranets et extranets qui fluidifient vraiment vos processus. Sécurité, ergonomie, adoption : tout est pensé."

#### Bloc "Ce que vous obtenez"

1. **Un espace sécurisé pour vos équipes** — Authentification forte, gestion des droits, audit des accès.
2. **Une interface que vos équipes vont adopter** — UX pensée pour un usage quotidien, pas un outil subi.
3. **Des intégrations avec vos outils existants** — Google Workspace, Microsoft 365, CRM, ERP : tout se connecte.
4. **Un outil qui grandit avec vous** — Ajoutez modules, équipes, partenaires sans tout refaire.

#### Angle éditorial (800-1000 mots)

**Titre** : "Intranet vs extranet : les bons usages en 2026"

Sous-sections H3 :

1. **"Intranet ou extranet : quelle différence concrètement"**
   Usages types, publics, fonctionnalités. Mots-clés : "intranet vs extranet", "choisir portail entreprise".

2. **"Les fonctionnalités essentielles d'un intranet moderne"**
   Annuaire, doc center, actualités, outils métiers. Mots-clés : "fonctionnalités intranet", "plateforme collaborative".

3. **"Sécurité, SSO, droits d'accès : les points non négociables"**
   Single Sign-On, MFA, audit logs. Mots-clés : "sécurité intranet", "SSO entreprise".

4. **"Adoption par les équipes : la clé du succès"**
   Co-construction, formation, accompagnement. Lien vers `/a-propos/`.

#### Pour qui c'est fait

- **Entreprises en croissance** : "Vos outils éclatés ralentissent vos équipes. Un intranet centralise tout."
- **Organisations multi-sites** : "Connectez vos équipes distantes avec un espace commun accessible partout."
- **Réseaux de franchisés** : "Un extranet pour partager outils, documents et communication avec vos partenaires."
- **PME avec équipes terrain** : "Des fiches, formulaires et remontées d'infos accessibles depuis mobile."

#### FAQ

1. Combien coûte un intranet sur mesure ?
2. Intranet ou extranet : comment choisir ?
3. Combien de temps pour développer un intranet ?
4. Est-ce que ça s'intègre avec nos outils actuels ?
5. Comment assurer la sécurité des données ?
6. Et pour l'adoption par les équipes ?
7. Est-ce que ça peut évoluer dans le temps ?

#### Stack technique

Next.js, Auth.js ou Clerk, PostgreSQL, Supabase, Azure AD, Google SSO, Vercel.

---

### PAGE 8 — `/sites-internet/landing-page/`

**Mot-clé principal** : "création landing page conversion"
**Volume** : fort · **Concurrence** : forte
**Budget à mentionner** : à partir de 900 €

#### Metadata

```typescript
export const metadata: Metadata = {
  title: "Création landing page à haute conversion | Clickdev",
  description: "Création de landing pages performantes par un développeur freelance. Ultra rapides, optimisées pour la conversion, prêtes pour vos campagnes. Dès 900 €.",
  keywords: ["création landing page", "landing page conversion", "page de conversion sur mesure", "développeur landing page freelance", "landing page Google Ads"],
  alternates: { canonical: "https://clickdev.fr/sites-internet/landing-page" },
};
```

#### Hero

- **Eyebrow** : "CHAPITRE 01.8 · LANDING PAGE"
- **Sous-eyebrow** : "DÉVELOPPEUR FREELANCE — PAGES DE CONVERSION"
- **H1** : "Création de landing page à haute conversion"
- **Lead** : "Une page. Un objectif. Un résultat mesurable. Je conçois des landing pages qui performent en campagne pub, en lancement produit ou en événement. Optimisées pour convertir, prêtes à déployer."

#### Bloc "Ce que vous obtenez"

1. **Une page qui se charge instantanément** — Essentiel pour votre taux de conversion et votre Quality Score Google Ads.
2. **Un parcours pensé pour l'action** — Chaque élément sert l'objectif : lead, inscription, achat, appel.
3. **Un tracking précis intégré** — Google Ads, Meta Ads, analytics : tout est prêt pour mesurer vos campagnes.
4. **Un modèle prêt pour l'A/B testing** — Pour optimiser en continu et maximiser votre retour sur pub.

#### Angle éditorial (800-1000 mots)

**Titre** : "Qu'est-ce qu'une landing page qui performe vraiment"

Sous-sections H3 :

1. **"Landing page vs page de site : les vraies différences"**
   Objectif unique, pas de navigation, message centré. Mots-clés : "landing page", "différence page site landing page".

2. **"Les 8 éléments obligatoires d'une LP efficace"**
   Promesse, preuve, bénéfices, CTA, urgence, social proof, FAQ, garantie. Mots-clés : "éléments landing page", "structure landing page".

3. **"A/B testing et optimisation continue"**
   Comment itérer pour gagner quelques points de conversion à chaque test. Mots-clés : "A/B test landing page", "optimisation conversion".

4. **"Quand commander une landing page plutôt qu'un site"**
   Campagnes pub, lancements, événements, webinaires. Lien vers `/seo/` ou études de cas.

#### Pour qui c'est fait

- **Marketeurs et growth hackers** : "Une page prête pour vos campagnes Google Ads ou Meta Ads. Prête à performer."
- **Entrepreneurs qui lancent un produit** : "Validez votre marché avec une landing page de pré-commande ou d'inscription."
- **Consultants et coachs** : "Une page qui convertit vos visiteurs en rendez-vous découverte."
- **Équipes marketing B2B** : "Landing pages par campagne, par persona, par verticale — tout est possible."

#### FAQ

1. Combien coûte une landing page pro ?
2. Combien de temps pour créer une landing page ?
3. Vous gérez aussi l'A/B testing ?
4. Est-ce que c'est adapté à Google Ads ?
5. Et pour le tracking des conversions ?
6. Je peux modifier mes textes moi-même ?
7. Vous faites aussi la rédaction des textes ?
8. C'est compatible avec mon site actuel ?

#### Stack technique

Next.js, Astro, Tailwind, Framer Motion, Plausible/GA4, Meta Pixel, Vercel.

---

## 🔍 SEO technique — Checklist standard par page

À vérifier systématiquement sur CHAQUE page fille :

### Metadata
- Title unique (50-60 caractères, mot-clé principal en premier)
- Description unique (150-160 caractères, avec CTA)
- Canonical URL
- Keywords array (5-8 mots-clés pertinents)

### Open Graph
- og:title unique
- og:description unique
- og:url
- og:image (1200x630, unique par page)
- og:locale fr_FR
- og:type website

### Twitter Card
- summary_large_image
- Title, description, image

### Robots
- index: true, follow: true
- googleBot avec max-image-preview: large

### Schema.org (via @graph)
- Service (type de site spécifique)
- BreadcrumbList (3 niveaux)
- FAQPage (questions/réponses de la page)

### Structure HTML
- UN SEUL H1 par page
- Hiérarchie H2 → H3 propre
- Aucun saut de niveau

### Images
- next/image systématique
- Alt text descriptif et naturel
- Format AVIF/WebP
- Lazy loading sauf hero

### Maillage interne (15+ liens par page)
- 1-2 liens vers la page pilier `/sites-internet/`
- 3-5 liens vers les autres pages filles du silo
- 2-3 liens vers les silos connexes (`/seo/`, `/ia/`, `/maintenance/`)
- 2-3 liens vers études de cas
- 1-2 liens vers articles de blog

### Performance (Lighthouse)
- Performance : ≥ 95
- SEO : 100
- Accessibility : ≥ 95
- Best Practices : ≥ 95
- LCP < 2s, CLS < 0.1, INP < 200ms

---

## 📋 Récapitulatif des prix

| Page | "À partir de" |
|---|---|
| Landing page | 900 € |
| Site WordPress | 1 900 € |
| Site vitrine | 2 500 € |
| Site sur mesure | 3 500 € |
| Site e-commerce | 4 500 € |
| Site de mise en relation | 4 500 € |
| Intranet / Extranet | 4 900 € |
| Marketplace | 4 900 € |

**Règle** : tous les tarifs restent **sous 4 900 €** pour conserver un positionnement accessible.
Les projets plus importants sont toujours possibles, mais sont discutés en devis personnalisé après échange.

---

## 🎯 Ordre d'exécution recommandé

Priorisation selon le potentiel SEO et commercial :

1. **`/site-ecommerce/`** — Volume très fort, tickets élevés
2. **`/marketplace/`** — Faible concurrence, forte opportunité SEO
3. **`/site-mise-en-relation/`** — Même logique
4. **`/site-vitrine/`** — Fort volume, accessible à beaucoup
5. **`/site-wordpress/`** — Très fort volume (malgré concurrence)
6. **`/site-sur-mesure/`** — Complément technique
7. **`/landing-page/`** — Tickets plus petits mais volume récurrent
8. **`/intranet-extranet/`** — Projets B2B plus niche

---

## ⚠️ Workflow obligatoire pour Cursor

Pour CHAQUE page, suivre cet ordre :

### Étape A — Plan de contenu
Présenter avant rédaction :
- H1 proposé
- Metadata complète (title + description)
- 4 titres H3 du bloc éditorial
- 6-8 questions de la FAQ
- Études de cas à afficher
- Liens internes prévus

**Validation explicite requise avant passage à l'étape B.**

### Étape B — Rédaction complète
Présenter tous les textes dans un document récap avant intégration.
**Validation explicite requise avant passage à l'étape C.**

### Étape C — Intégration code
Créer la page avec les composants réutilisés de la pilier.
Aucun nouveau composant visuel, aucun nouveau style.

### Étape D — SEO technique
Implémenter metadata, schemas, liens internes, alt text, OG image.
Confirmer chaque point de la checklist.

### Étape E — Audit Lighthouse
Montrer les scores. Corriger si nécessaire sans toucher au design.

**Une fois la page validée, passer à la suivante.**

---

*Document de référence — à lire en complément de `brief-clickdev.md`*
