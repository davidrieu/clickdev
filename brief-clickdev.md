# 📋 Brief Projet — Refonte ClickDev.fr

> Document de référence complet pour le développement du nouveau site vitrine ClickDev. À fournir à Cursor en tant que contexte projet au début de chaque session de développement.

> ⚠️ **RÈGLE IMPORTANTE** : le design du site suit à 100% le template **`genesis-nextjs`** situé à la racine du projet. Aucune référence externe de design, aucune palette custom, aucune typographie ajoutée. Ce brief définit la **structure, le contenu, l'architecture et le SEO** — pas l'esthétique.

---

## 🎯 1. Contexte & Vision

### Qui je suis

**David Rieu**, développeur freelance français avec 10 ans d'expérience, basé en France, travaillant avec des clients partout dans le monde. Marque commerciale : **Clickdev**.

### Mon activité

Je développe pour mes clients :
- **Sites internet** : vitrines, e-commerce, marketplaces, sites de mise en relation, intranets/extranets, landing pages
- **Applications mobiles** : iOS, Android, React Native, PWA
- **CRM & outils métiers** : CRM sur mesure, automatisations, intégrations
- **Maintenance & TMA** : infogérance, corrections, évolutions, sécurité

### Mes clients emblématiques

Accor, Greenweez, Spreadshirt, Made in France, SIF Group, Urbawise, Crack It, The French Maisons, Musée Up', Mayami Production.

### Objectif de la refonte

Le site actuel (clickdev.fr) est un WordPress daté qui me dessert. Je vise un site qui :

1. **Incarne visuellement** ce que je vends (si je livre du Next.js ultra moderne à mes clients, mon site doit en être la démonstration)
2. **Me positionne premium** pour justifier des tarifs 2 à 3x supérieurs
3. **Convertit** les prospects sur des projets à 10-30k€
4. **Ranke** sur les requêtes stratégiques (freelance Next.js, développeur e-commerce, création marketplace, etc.)
5. **Remplace l'affichage des tarifs** par un système de demande de devis qualifié

---

## 🎨 2. Positionnement & Message

### Proposition de valeur

> "Développeur freelance pour sites, applications et outils digitaux qui performent."

Alternatives à tester :
- "De la startup au grand groupe, je conçois des plateformes digitales qui convertissent."
- "Sites, apps, IA, SEO — je construis les outils digitaux dont votre activité a besoin."

**Principe directeur** : ne **pas exclure** les particuliers et les petites structures. Les grandes marques servent de caution, mais l'offre doit rester accessible. Un artisan, une PME, un freelance qui lance son activité doivent se sentir légitimes de demander un devis.

### Ton éditorial

- **Accessible sans être simpliste** : technique quand c'est nécessaire, clair sinon. On évite le jargon gratuit qui exclut les non-techniques.
- **Concret et orienté bénéfices** : "votre site se chargera en moins d'une seconde" plutôt que "optimisation des Core Web Vitals via SSG et edge caching"
- **Humain** : le "je" prime sur le "nous" — freelance, pas agence
- **Pédagogique** : je prends le temps d'expliquer sans être condescendant. Le client doit comprendre ce qu'il achète.
- **Confiant sans arrogance** : je sais ce que je vaux, je le montre par des preuves

### Cibles clients (volontairement larges)

Le site doit parler à :

1. **Grandes marques et groupes** — projets à fort enjeu, exigence de résultats (cas Accor, Greenweez, Spreadshirt)
2. **Startups et scale-ups** — besoin de vitesse d'exécution et d'expertise pointue
3. **PME et TPE établies** — souvent bloquées sur un WordPress vieillissant, besoin d'accompagnement humain
4. **Artisans, commerçants, indépendants** — projets plus petits mais essentiels à leur activité
5. **Particuliers avec un projet structuré** — création d'une app, d'un outil personnel, d'un site pro

### Équilibre "grands comptes / petites structures"

Dans le contenu du site :

- **Trust bar** : logos des grandes marques pour la crédibilité immédiate
- **Études de cas** : mix de projets ambitieux (Accor, Greenweez) ET de projets plus modestes réussis (artisan, PME locale) pour que chaque prospect s'identifie
- **Témoignages** : varier les profils — CTO de scale-up, dirigeant de PME, artisan, particulier
- **FAQ** : inclure des questions type "Est-ce que vous travaillez avec des petites structures ?" ou "Quel budget minimum ?"
- **Formulaire devis** : les tranches budgétaires commencent à moins de 5k€ pour ne pas exclure

### À éviter absolument

- Formulations génériques ("passionné", "à votre écoute", "équipe dynamique")
- Stock photos de devs souriants devant un écran
- Vocabulaire marketing vide ("solutions innovantes", "expertise reconnue")
- Promesses non chiffrées
- **Jargon technique inutile** qui fait fuir les non-techniques
- **Tout signal** qui donnerait l'impression "je ne travaille qu'avec des grands comptes" ou "tarifs élitistes"

---

## ⚙️ 3. Stack Technique

### Stack principale

```
Base créative  → Template genesis-nextjs (à la racine) — référence visuelle unique
Frontend       → Next.js 15 (App Router, React Server Components)
Styling        → Tailwind CSS (version dictée par le template)
UI Kit         → Composants du template Genesis en priorité
                 + shadcn/ui uniquement si nécessaire et compatible
Animation      → Celles fournies par le template en priorité
                 (ajout de libs externes uniquement si besoin validé)
Typography     → Dictée par le template
CMS            → Sanity.io (blog, études de cas, témoignages)
Forms          → React Hook Form + Zod (validation)
Emails         → Resend + React Email
Analytics      → Plausible (RGPD-friendly, pas de cookie banner)
Déploiement    → Vercel Pro
Monitoring     → Vercel Analytics + Sentry

# Stack IA (pour démos et intégrations clients)
LLMs           → OpenAI API, Anthropic Claude API, Mistral
Framework      → Vercel AI SDK, LangChain (si besoin de chaînes complexes)
Vector DB      → Pinecone, Supabase pgvector, ou Upstash Vector
Workflows      → n8n, Make (automatisations)
```

### Principes techniques non négociables

- **TypeScript strict partout**
- **Composants Server par défaut**, Client Components uniquement si nécessaire (interaction, hooks)
- **Images** : `next/image` systématique, format AVIF/WebP, dimensions explicites
- **Fonts** : `next/font` pour éviter le CLS
- **Metadata** : API `generateMetadata()` sur chaque page
- **Accessibilité** : WCAG AA minimum, navigation clavier complète, focus visibles
- **Performance** : 95+ sur tous les Core Web Vitals Lighthouse

---

## 🏗️ 4. Architecture Complète du Site

### Arborescence (silos thématiques)

**Principe de navigation** : les 4 silos principaux sont affichés **directement dans le menu** (pas de hub `/services/` qui regroupe tout). Chaque silo a sa propre page pilier et ses pages filles. Cette structure offre un meilleur SEO (pages piliers directement accessibles) et une UX plus claire (le prospect voit immédiatement les 4 familles d'expertise).

```
/
├── / (Accueil)
│
├── /sites-internet/ (page pilier — dans le menu principal)
│   ├── /sites-internet/site-vitrine/
│   ├── /sites-internet/site-ecommerce/
│   ├── /sites-internet/marketplace/
│   ├── /sites-internet/site-mise-en-relation/
│   ├── /sites-internet/site-sur-mesure/
│   ├── /sites-internet/site-wordpress/
│   ├── /sites-internet/intranet-extranet/
│   └── /sites-internet/landing-page/
│
├── /applications-mobiles/ (page pilier — dans le menu principal)
│   ├── /applications-mobiles/ios/
│   ├── /applications-mobiles/android/
│   ├── /applications-mobiles/react-native/
│   └── /applications-mobiles/pwa/
│
├── /ia/ (page pilier — dans le menu principal)
│   ├── /ia/integration-ia/
│   ├── /ia/chatbot-ia/
│   ├── /ia/agents-ia/
│   ├── /ia/automatisation-ia/
│   ├── /ia/rag-base-connaissances/
│   └── /ia/ia-generative-ecommerce/
│
├── /crm-outils-metiers/ (page pilier — dans le menu principal)
│   ├── /crm-outils-metiers/crm-sur-mesure/
│   ├── /crm-outils-metiers/integration-crm/
│   └── /crm-outils-metiers/automatisation/
│
├── /seo/ (page pilier — dans le menu principal)
│   ├── /seo/audit-seo/
│   ├── /seo/seo-technique/
│   ├── /seo/seo-local/
│   ├── /seo/seo-ecommerce/
│   ├── /seo/migration-seo/
│   ├── /seo/redaction-seo/
│   ├── /seo/netlinking/
│   └── /seo/geo-generative-engine-optimization/
│
├── /maintenance/ (page pilier — accessible via footer + pages services)
│   ├── /maintenance/maintenance-wordpress/
│   ├── /maintenance/maintenance-ecommerce/
│   ├── /maintenance/tma/
│   └── /maintenance/infogerance/
│
├── /realisations/
│   └── /realisations/[slug]/ (CMS Sanity)
│
├── /expertises/
│   ├── /expertises/nextjs/
│   ├── /expertises/wordpress/
│   ├── /expertises/shopify/
│   ├── /expertises/woocommerce/
│   ├── /expertises/react-native/
│   ├── /expertises/laravel/
│   ├── /expertises/nodejs/
│   ├── /expertises/openai/
│   ├── /expertises/claude-api/
│   └── /expertises/langchain/
│
├── /blog/
│   └── /blog/[slug]/ (CMS Sanity)
│
├── /a-propos/
├── /contact/
├── /devis/ (formulaire multi-étapes)
│
└── /freelance/ (SEO local — optionnel phase 2)
    ├── /freelance/paris/
    ├── /freelance/lyon/
    ├── /freelance/marseille/
    └── /freelance/bordeaux/
```

### Navigation principale (menu)

Le menu affiche les **5 silos phares directement** (pas de dropdown "Services") :

```
Logo  |  Sites internet  |  Applications mobiles  |  IA  |  SEO  |  CRM & outils métiers  |  Réalisations  |  Blog  |  [Demander un devis]
```

Maintenance est volontairement **hors menu principal** (visible via footer + sections dédiées sur chaque page service) car c'est un service complémentaire, pas une porte d'entrée prioritaire pour un nouveau prospect.

**Important** : avec 5 silos + Réalisations + Blog, le menu devient dense. Sur desktop < 1280px, certains items peuvent être regroupés ou le menu peut basculer directement sur hamburger pour garder une navigation aérée.

Sur mobile, le menu hamburger ouvre un drawer full-screen qui reprend la même structure, avec les sous-pages de chaque silo en accordéon.

### Logique SEO de l'architecture

- **Pages piliers directement à la racine** (pas de préfixe `/services/`) pour maximiser le poids SEO des URLs et raccourcir le chemin
- **6 silos thématiques** : Sites internet, Applications mobiles, IA, SEO, CRM & outils métiers, Maintenance
- **Pages piliers** ciblent les mots-clés larges (ex: "développeur site internet", "intégration IA entreprise", "freelance SEO")
- **Pages filles** ciblent la longue traîne précise (ex: "développeur site de mise en relation", "intégration chatbot IA entreprise", "audit SEO technique Next.js")
- **Silo expertises** capte les recherches par techno ("freelance Next.js", "développeur Claude API", "expert OpenAI freelance")
- **Études de cas** rankent sur secteur + techno ("refonte e-commerce bio", "marketplace mise en relation")
- **Blog** capte le trafic informationnel amont (comparatifs, guides, combien ça coûte)
- **SEO local** (optionnel) capte les requêtes géolocalisées à forte intention

### Cohérence du silo SEO

Le silo SEO est **méta-stratégique** : il prouve que je maîtrise ce que j'applique sur mon propre site. Un prospect qui voit que je rank bien sur "freelance SEO" ou "freelance GEO" a la démonstration vivante que ma méthode fonctionne. Le site **est** l'argument commercial.

### Focus sur le silo IA — opportunité stratégique 2026

L'IA est un silo **à très fort potentiel** en 2026 : forte demande, peu de freelances vraiment positionnés et formés. Le positionner dès maintenant permet d'occuper le terrain avant la saturation.

**Mots-clés cibles principaux** :
- "intégration IA entreprise"
- "développeur IA freelance"
- "agent IA sur mesure"
- "chatbot IA personnalisé"
- "intégration ChatGPT site"
- "intégration Claude API"
- "automatisation IA PME"
- "RAG base de connaissances"

**Positionnement** : je ne vends **pas** de modèles d'IA (ce n'est pas mon métier), je vends l'**intégration concrète** de l'IA dans les produits digitaux de mes clients. Concrètement : chatbots intelligents, agents qui automatisent des tâches, recherche sémantique, génération de contenu, personnalisation, etc.

---

## 🔍 5. Stratégie SEO

### SEO technique — checklist non négociable

- [ ] `generateMetadata()` dynamique sur chaque page (title 50-60 car, description 150-160 car)
- [ ] `sitemap.xml` généré automatiquement (avec `next-sitemap` ou route API)
- [ ] `robots.txt` propre (allow all + lien sitemap)
- [ ] **Schema.org** :
  - `LocalBusiness` (adresse, horaires, téléphone) sur la home
  - `Person` (David Rieu) sur /a-propos/
  - `Service` sur chaque page service
  - `FAQPage` sur toutes les pages avec FAQ
  - `BreadcrumbList` sur toutes les pages internes
  - `Article` sur les posts de blog
  - `CreativeWork` sur les études de cas
- [ ] **Open Graph** + Twitter Cards sur toutes les pages (images 1200×630 uniques)
- [ ] Balises **canoniques** sur toutes les pages
- [ ] URLs **propres** en français, sans accents, sans mots vides (pas de "le", "la", "de")
- [ ] **Fil d'Ariane** visible + schema BreadcrumbList
- [ ] **Alt text** sur 100% des images (à ne pas oublier)
- [ ] **Maillage interne** : 3-5 liens internes contextualisés par page minimum
- [ ] **Page 404** custom avec redirection intelligente
- [ ] **Redirections 301** depuis les URLs de l'ancien site WordPress
- [ ] **hreflang** si internationalisation future

### GEO technique — implémentations spécifiques

Compte tenu du positionnement du silo SEO/GEO, le site doit être **exemplaire** sur le GEO :

- [ ] **`llms.txt` à la racine** — nouveau standard pour indiquer aux LLMs comment parcourir le site
- [ ] **`llms-full.txt`** — version étendue avec le contenu du site en markdown pour faciliter l'ingestion
- [ ] **TL;DR en début de chaque article de blog** et chaque page pilier — les IA préfèrent les résumés clairs en tête
- [ ] **Format Q&A systématique** dans les FAQ avec schema FAQPage étendu
- [ ] **Citations de sources** dans les articles (liens externes vers études, docs officielles, research papers) — signal d'autorité fort pour les LLMs
- [ ] **Données structurées étendues** :
  - `HowTo` pour les guides
  - `ItemList` pour les articles type "X choses à savoir sur..."
  - `ComparisonTable` pour les comparatifs
  - `DefinedTerm` pour les définitions
- [ ] **Contenu factuel et sourcé** plutôt que marketing (les IA filtrent le contenu promotionnel)
- [ ] **Présence externe** : contributions régulières sur Reddit, Stack Overflow, Dev.to, Medium, GitHub (sources d'entraînement des LLMs)
- [ ] **Monitoring GEO mensuel** : tester les 20 requêtes cibles sur ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews et suivre les mentions du site

### Contenu — densité minimale par type de page

| Type de page | Mots minimum | Structure |
|---|---|---|
| Page pilier (hub) | 1500-2500 | H1 + intro + 4-6 sections H2/H3 + FAQ + CTA |
| Page service | 1000-1800 | Problème → Solution → Process → Techno → Cas → FAQ → CTA |
| Étude de cas | 800-1200 | Contexte / Défi / Solution / Résultats chiffrés / Techno |
| Article blog | 1200-2000 | H1 + TOC + sections H2/H3 + conclusion + CTA |
| Page expertise | 800-1200 | Présentation techno + projets + avantages + maillage services |

### Stratégie éditoriale blog

**Rythme cible** : 2 à 4 articles par mois minimum la première année.

**Types d'articles prioritaires** :
1. **Comparatifs** — "WordPress vs Next.js en 2026", "Shopify vs WooCommerce", "React Native vs Flutter"
2. **Combien ça coûte** — "Budget site e-commerce", "Prix marketplace", "Coût app mobile"
3. **Guides** — "Comment choisir sa stack e-commerce", "Checklist refonte site"
4. **Études de cas** détaillées (reprises des projets portfolio)
5. **Retours d'expérience** — erreurs fréquentes, conseils métier

### E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

- Nom d'auteur (David Rieu) + photo + bio sur chaque article
- Page `/a-propos/` détaillée : parcours, certifications, clients, philosophie
- Année d'expérience et nombre de projets visibles partout
- Témoignages clients avec photo et poste vérifiable
- Liens vers profils externes : LinkedIn, GitHub, Malt, Welcome to the Jungle

---

## 🎨 6. Direction de Design

### Règle absolue : suivre le template Genesis Next.js

**Le design du site repose à 100% sur le template `genesis-nextjs` situé à la racine du projet.**

Cursor doit :

- **Analyser le template Genesis** (composants, styles, animations, typographies, palette, layouts, patterns d'interaction) avant toute création de composant
- **Réutiliser les composants existants** du template dès que possible, plutôt que de créer from scratch
- **Respecter la palette, les typographies et les tokens de design** définis dans le template — ne PAS les modifier
- **Adapter le contenu** (textes, images, structures) aux besoins du brief, mais pas l'identité visuelle
- **Étendre le template** quand de nouveaux composants sont nécessaires (ex: cartes études de cas, tableaux de comparaison SEO/GEO), en respectant les conventions visuelles déjà en place

**Pas d'improvisation créative.** Pas de références externes (Linear, Aceternity, Basement, etc.), pas de palette custom, pas de typographie ajoutée. Le template fait foi.

### Workflow à suivre

1. **Avant tout développement de page** : Cursor parcourt `/genesis-nextjs/` pour identifier les composants réutilisables
2. **Pour chaque section du brief** : Cursor propose quel composant du template utiliser (ou adapter) avant d'écrire du code
3. **En cas de doute visuel** : Cursor se réfère au template, pas à ses propres standards AI
4. **Les animations** : celles fournies par le template sont privilégiées. Pas d'ajout de libs d'animation supplémentaires sauf nécessité stricte validée par l'utilisateur

### Ce qui reste du brief au niveau design

Seuls les éléments **structurels** du brief s'appliquent (hiérarchie de contenu, ordre des sections, nombre de cartes, etc.). Tout ce qui est **esthétique** (couleurs, polices, espacements, animations, hover states) est dicté par le template.

---

## 📐 7. Spécifications détaillées — Page d'accueil

### Structure complète (13 sections)

#### 1. Navigation sticky

- Fond : `rgba(13, 13, 13, 0.85)` + `backdrop-filter: blur(20px)`
- Hauteur : 72px
- Logo à gauche (wordmark "Clickdev" en Instrument Serif italique)
- **Menu central** : Sites internet / Applications mobiles / IA / SEO / CRM & outils métiers / Réalisations / Blog
- CTA "Demander un devis" à droite (bouton terracotta pill)
- Les 5 liens silos principaux affichent un **dropdown au hover** avec les sous-pages (sites-vitrine, e-commerce, marketplace, mise-en-relation, audit-seo, geo, etc.)
- Le dropdown a une animation fade-in courte (150ms) et reste visible tant que la souris est dans la zone
- **Mobile** : menu hamburger avec drawer full-screen + accordéons pour les sous-pages de chaque silo
- "À propos", "Contact" et "Maintenance" sont accessibles via le footer uniquement
- **Astuce** : si le menu devient trop long sur desktop 1024-1280px, basculer certains silos sous un dropdown "Plus" ou passer directement au hamburger
- Balisage `<nav>` + Schema SiteNavigationElement

#### 2. Hero

- **Eyebrow** : Badge "Disponible pour de nouveaux projets — [mois en cours]" avec dot vert pulsant
- **H1** à affiner avec le template Genesis, dans l'esprit : "Développeur freelance pour sites, applications et outils digitaux."
- **Lead** : "Depuis 10 ans, je conçois des plateformes digitales sur mesure, des projets de particuliers aux grands groupes. Accor, Greenweez, Spreadshirt mais aussi des artisans, PME et startups me font confiance."
- **CTAs** : "Démarrer un projet →" (primary) + "Voir les réalisations" (ghost)
- **Stats** (4 blocs) : 80+ projets / 10 ans / 98% clients satisfaits / Des TPE aux groupes CAC40
- **Séparateur** : `border-top` fin avant les stats
- Style visuel : dicté par le template Genesis

#### 3. Trust bar

- Fond légèrement plus clair (`--bg-2`)
- Label "Ils me font confiance" en mono uppercase
- Logos clients en Instrument Serif italique (le temps de les récupérer en SVG)
- Opacity 0.6 par défaut, 1 au hover

#### 4. Services (6 cartes)

- Grid responsive : 3 colonnes desktop / 2 colonnes tablette / 1 colonne mobile
- 6 cartes sur 2 lignes de 3 en desktop
- Chaque carte : numéro + H3 + description + tags techno + lien "Découvrir"
- Les 6 services : **Sites internet / Applications mobiles / IA / SEO & GEO / CRM & outils métiers / Maintenance & TMA**
- Chaque carte link vers `/[slug-silo]/` (directement à la racine, pas de préfixe `/services/`)
- Hover : changement de fond discret

**Détail des 6 cartes** :

1. **Sites internet** — Sites vitrines, e-commerce, marketplaces et sites de mise en relation. Tags : Next.js · WordPress · Shopify · WooCommerce · Astro
2. **Applications mobiles** — Apps iOS et Android natives ou cross-platform, de l'idée au store. Tags : React Native · Swift · Kotlin · PWA
3. **IA** — Intégration d'IA dans vos produits : chatbots, agents, automatisation, recherche sémantique. Tags : OpenAI · Claude · LangChain · RAG · n8n
4. **SEO & GEO** — Référencement Google et optimisation pour les IA (ChatGPT, Claude, Perplexity). Tags : SEO technique · GEO · Audit · Netlinking · Rédaction
5. **CRM & outils métiers** — CRM sur mesure, intranets, extranets et automatisations internes. Tags : Node.js · Laravel · PostgreSQL · Make
6. **Maintenance & TMA** — Infogérance, corrections, mises à jour de sécurité et évolutions. Tags : Audit · Sécurité · Support · Évolutions

#### 5. Études de cas (3 projets)

- 3 cases en liste verticale, pas de grille
- Chaque case : layout 2 colonnes (description à gauche, 4 metrics à droite)
- Cases suggérés : **Greenweez** (e-commerce) / **Accor All** (app mobile) / **Spreadshirt** (marketplace)
- Metrics : conversion, temps de chargement, Lighthouse, téléchargements, etc.
- Lien "Voir toutes les réalisations →" en bas

#### 6. Stack / Expertises

- Grid 6 colonnes desktop / 3 mobile / 2 très petits écrans
- 12 technos avec logo + nom
- Chaque tech link vers `/expertises/[techno]/`
- Hover : fond plus clair

#### 7. Process

- 5 étapes en liste verticale
- Chaque étape : numéro géant (Instrument Serif italique terracotta) + titre + description
- Étapes : **Audit & cadrage / Design UX-UI / Développement / Tests & optimisation / Mise en ligne & suivi**

#### 8. À propos David

- Layout 2 colonnes : visuel à gauche (photo ou vidéo en boucle), texte à droite
- Visuel : aspect-ratio 4/5, placeholder temporaire avant shooting
- Texte : eyebrow + H2 "Derrière Clickdev, *David Rieu*" + 2 paragraphes + CTA ghost

#### 9. Témoignages

- Grid 2×2 (1 colonne mobile)
- 4 témoignages minimum avec quote + avatar + nom + poste
- Style visuel : dicté par le template Genesis
- **Important** : varier volontairement les profils de témoins pour montrer la diversité de clientèle
  - 1 témoignage d'un grand compte ou scale-up (CTO, Product Manager)
  - 1 témoignage d'une PME (dirigeant, responsable marketing)
  - 1 témoignage d'un artisan ou commerçant (fondateur)
  - 1 témoignage d'un projet plus atypique (association, particulier, freelance)

#### 10. FAQ

- 6 questions minimum
- Accordéons (click pour ouvrir) avec animation smooth
- Icône "+" qui rotate en "×" à l'ouverture
- Schema FAQPage obligatoire
- Questions types : prix, délais, techno utilisées, maintenance, international, etc.

#### 11. Blog teaser

- Grid 3 colonnes (1 mobile)
- 3 derniers articles tirés du CMS Sanity
- Chaque post : image + meta (catégorie · temps de lecture) + titre + excerpt
- Lien "Voir tous les articles →" en bas

#### 12. CTA final

- Section pleine largeur avec radial gradient très subtil centré
- H2 énorme : "Parlons de *votre projet*."
- Sub : "Une idée à concrétiser ? Un projet à faire évoluer ? Échangeons 30 minutes, sans engagement."
- 2 CTAs : "Demander un devis" (primary) + "Réserver un appel" (ghost — Cal.com)

#### 13. Footer

- Grid 6 colonnes desktop / 2 colonnes mobile
- Col 1 (2x wide) : Brand + baseline
- Col 2 : **Sites internet** (liens vers toutes les pages filles du silo)
- Col 3 : **Applications mobiles** + **IA** (regroupés)
- Col 4 : **SEO & GEO** (8 pages du silo)
- Col 5 : **CRM & outils** + **Maintenance** (regroupés)
- Col 6 : **Entreprise** (À propos, Réalisations, Blog, Contact, Devis) + **Contact** (email + tel + LinkedIn + GitHub + Malt)
- Footer bottom : copyright + SIRET + mentions légales + confidentialité

**Important** : le footer est le **sitemap HTML** du site. Il doit contenir des liens vers **toutes les pages piliers et toutes les pages filles** pour un maillage interne massif. C'est un énorme signal SEO et GEO.

---

## 🏆 8. Portfolio & études de cas — Spécifications détaillées

### Pourquoi c'est critique

Le portfolio est l'arme commerciale N°1. Un prospect qui hésite entre plusieurs freelances se décide sur les études de cas : elles prouvent que je sais faire, sur des projets similaires au sien, avec des résultats concrets. Mal fait, le portfolio est un catalogue de vignettes oubliable. Bien fait, c'est 50% des conversions.

### Stratégie à 2 niveaux

1. **Page listing `/realisations/`** — vue d'ensemble filtrée
2. **Études de cas détaillées `/realisations/[slug]/`** — pages SEO-optimisées avec storytelling

Chaque étude de cas est une page autonome qui peut ranker sur sa propre requête ("développement marketplace impression à la demande", "refonte e-commerce bio"). Énorme levier SEO longue traîne.

---

### 8.1 Page listing /realisations/

#### Structure de la page

1. **Header de page** — H1 + introduction éditoriale (200-300 mots, SEO-friendly)
2. **Barre de filtres** — sticky sous la nav principale
3. **Grille de projets** — responsive avec pagination
4. **CTA intermédiaire** — après les 6 premiers projets
5. **CTA final** — "Discutons de votre projet"

#### Métadonnées SEO

```typescript
title: "Portfolio — 80+ projets livrés pour des marques ambitieuses | Clickdev"
description: "Découvrez mes réalisations en développement web, mobile et outils métiers pour Accor, Greenweez, Spreadshirt et d'autres marques exigeantes."
```

#### Barre de filtres

Trois familles de filtres **combinables (logique AND)** :

**Par type de projet** (pill buttons horizontaux)
- Tous · Sites web · E-commerce · Marketplace · App mobile · CRM · Outil métier

**Par technologie** (dropdown multi-select)
- Next.js · React · WordPress · Shopify · React Native · Laravel · Node.js · etc.

**Par secteur** (dropdown multi-select)
- E-commerce · Mode · Bio-alimentaire · Hôtellerie · Art & culture · SaaS · BTP · etc.

**Règle UX** : les filtres actifs se reflètent dans l'URL (`?type=ecommerce&tech=nextjs`) pour pouvoir être partagés.

#### Grille de projets

| Breakpoint | Colonnes | Gap |
|---|---|---|
| Desktop (>1024px) | 3 | 24px |
| Tablette (768-1024px) | 2 | 20px |
| Mobile (<768px) | 1 | 16px |

- **9 projets par batch**, bouton "Charger plus" avec URL SEO-friendly (`/realisations/page/2/`)
- Ordre par défaut : `featured` puis `date desc`
- Animation staggered à l'apparition (Framer Motion avec `whileInView`)

#### Carte projet

Chaque carte affiche (de haut en bas) :
- **Image/thumbnail** (aspect-ratio 4/3, `object-fit: cover`, lazy load)
- **Eyebrow** : Catégorie · Secteur · Année (mono uppercase, 11px)
- **Titre projet** (H3 Instrument Serif, 24px)
- **Stack** (3 tags max, les autres tronqués avec `+N`)
- **Résultat phare** (1 metric accentuée, ex: "+34% conversion" en terracotta)
- **Hover** : subtle scale 1.02 + changement fond vers `--bg-2` + bordure terracotta

---

### 8.2 Template étude de cas /realisations/[slug]/

#### Structure complète (11 sections)

##### 1. Breadcrumb
`Accueil / Réalisations / [Nom du projet]` — avec schema `BreadcrumbList`

##### 2. Hero du cas
- **Eyebrow** : Catégorie · Secteur · Année
- **H1** : Nom du projet (Instrument Serif, 72-104px)
- **Tagline** : une phrase forte (ex: "Refonte complète du tunnel de conversion pour le leader e-commerce du bio en Europe")
- **Meta grid** (5 colonnes desktop / 2 mobile) :
  - Client
  - Durée du projet
  - Mon rôle
  - Stack principale
  - Voir le site →
- **Hero visual** : image pleine largeur OU vidéo loop (muted + autoplay + playsinline)

##### 3. Résultats clés — MISE EN AVANT

4 metrics géants en grid, **immédiatement après le hero**. Le visiteur voit l'impact avant de lire le détail. Règle absolue : pas d'enfouissement des chiffres.

```
┌─────────┬─────────┬─────────┬─────────┐
│  +34%   │  0.9s   │   100   │  -52%   │
│conversion│chargement│Lighthouse│ rebond  │
└─────────┴─────────┴─────────┴─────────┘
```

##### 4. Contexte & enjeux
- **H2** "Le contexte"
- 200-300 mots
- Qui est le client, sa problématique, pourquoi il m'a contacté
- Image/screenshot de l'ancien site ou du problème identifié (avant/après visuel possible)

##### 5. Les défis techniques
- **H2** "Les défis"
- Liste de 3-5 défis spécifiques (performance, scalabilité, intégrations, UX, etc.)
- Chaque défi = sous-titre H3 + paragraphe court (80-120 mots) + éventuellement illustration

##### 6. La solution
- **H2** "Ma solution"
- 400-600 mots
- Description de l'approche : architecture, choix technos, process
- **Galerie de 3-5 screenshots/visuels** intercalés dans le texte (pas un bloc séparé)
- Encart technique expandable optionnel (`<details>`) pour les CTO qui veulent creuser

##### 7. Stack technique détaillée

Grid visuel avec tous les outils utilisés, **groupés par catégorie** :

```
Frontend    → Next.js · React · Tailwind · Framer Motion
Backend     → Node.js · PostgreSQL · Prisma
Services    → Stripe · Algolia · Cloudinary · Resend
Infra       → Vercel · Supabase · Sentry
```

##### 8. Résultats détaillés
- **H2** "Les résultats"
- Narratif : ce qui a changé pour le client (trafic, CA, productivité, satisfaction)
- Metrics répétés avec contexte explicatif
- Graphique before/after si pertinent (via Recharts ou image)

##### 9. Témoignage client
- Citation en **grand format** (Instrument Serif italique, 28-32px)
- Nom + photo + poste + entreprise
- Lien LinkedIn du témoin si possible
- Séparateur visuel fort avant et après

##### 10. Navigation entre cas

En bas de page : bloc "Projet suivant →" avec thumbnail du cas suivant.

**Algorithme de sélection** :
1. Priorité : cas de même catégorie (ex: autre e-commerce)
2. Fallback : cas le plus récent non encore vu

##### 11. CTA final contextuel

> "Un projet similaire en tête ? Discutons-en."

Bouton "Demander un devis" **pré-rempli** avec le type de projet correspondant (le formulaire de devis ouvre avec la case "E-commerce" déjà cochée si l'utilisateur vient d'une étude de cas e-commerce).

#### Métadonnées SEO par case study

```typescript
// Exemple pour Greenweez
title: "Greenweez — Refonte e-commerce bio | Étude de cas Clickdev"
description: "Refonte du tunnel de conversion pour Greenweez, leader e-commerce bio européen. +34% de conversion, 0.9s de chargement, 100 Lighthouse. Next.js + Shopify Plus."
openGraph: {
  images: [`/api/og/case/${slug}`] // image OG générée dynamiquement
}
```

#### Schema.org — CreativeWork

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Greenweez — Refonte e-commerce",
  "creator": { "@type": "Person", "name": "David Rieu" },
  "datePublished": "2025-03-15",
  "about": { "@type": "Thing", "name": "E-commerce development" },
  "client": { "@type": "Organization", "name": "Greenweez" }
}
```

---

### 8.3 Schéma Sanity CMS pour les études de cas

```typescript
// schemas/caseStudy.ts
export default {
  name: 'caseStudy',
  type: 'document',
  title: 'Étude de cas',
  fields: [
    // Identification
    { name: 'title', type: 'string', title: 'Nom du projet' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'client', type: 'string', title: 'Nom du client' },
    { name: 'clientLogo', type: 'image', title: 'Logo client' },
    { name: 'year', type: 'number' },
    { name: 'duration', type: 'string', title: 'Durée (ex: 3 mois)' },
    { name: 'role', type: 'string', title: 'Mon rôle' },
    { name: 'liveUrl', type: 'url', title: 'URL du site live' },

    // Catégorisation (pour filtres)
    { name: 'category', type: 'string', options: {
      list: ['website', 'ecommerce', 'marketplace', 'mobile', 'crm', 'tool']
    }},
    { name: 'sectors', type: 'array', of: [{ type: 'string' }] },
    { name: 'technologies', type: 'array', of: [{ type: 'string' }] },

    // Hero du cas
    { name: 'tagline', type: 'string', title: 'Tagline (1 phrase forte)' },
    { name: 'heroImage', type: 'image' },
    { name: 'heroVideo', type: 'file', title: 'Vidéo hero (optionnel)' },
    { name: 'thumbnail', type: 'image', title: 'Vignette listing' },
    { name: 'featuredMetric', type: 'string', title: 'Metric phare (ex: +34% conversion)' },

    // Metrics (4 obligatoires)
    { name: 'metrics', type: 'array', validation: Rule => Rule.length(4), of: [{
      type: 'object',
      fields: [
        { name: 'value', type: 'string', title: 'Valeur (ex: +34%)' },
        { name: 'label', type: 'string', title: 'Label (ex: taux de conversion)' }
      ]
    }]},

    // Contenu narratif
    { name: 'context', type: 'portableText', title: 'Contexte & enjeux' },
    { name: 'challenges', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'image', type: 'image' }
      ]
    }]},
    { name: 'solution', type: 'portableText', title: 'La solution' },
    { name: 'gallery', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'image', type: 'image' },
        { name: 'caption', type: 'string' }
      ]
    }]},
    { name: 'results', type: 'portableText', title: 'Résultats détaillés' },

    // Stack détaillée groupée
    { name: 'stackDetails', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'category', type: 'string' }, // Frontend, Backend, etc.
        { name: 'items', type: 'array', of: [{ type: 'string' }] }
      ]
    }]},

    // Relations
    { name: 'testimonial', type: 'reference', to: [{ type: 'testimonial' }] },

    // SEO
    { name: 'metaTitle', type: 'string' },
    { name: 'metaDescription', type: 'text' },
    { name: 'ogImage', type: 'image' },

    // Affichage
    { name: 'featured', type: 'boolean', title: 'Mis en avant (home + top listing)' },
    { name: 'order', type: 'number', title: 'Ordre d\'affichage' },
    { name: 'publishedAt', type: 'datetime' }
  ],
  orderings: [
    { name: 'featuredFirst', title: 'Featured puis récents', by: [
      { field: 'featured', direction: 'desc' },
      { field: 'publishedAt', direction: 'desc' }
    ]}
  ]
}
```

---

### 8.4 Composants supplémentaires pour le portfolio

- [ ] `ProjectCard` — carte projet (listing)
- [ ] `PortfolioFilters` — barre de filtres multi-critères avec URL sync
- [ ] `PortfolioGrid` — grille responsive + pagination "Charger plus"
- [ ] `CaseBreadcrumb` — fil d'Ariane
- [ ] `CaseHero` — hero d'étude de cas (avec support image OU vidéo)
- [ ] `CaseMetrics` — grid de 4 metrics géants
- [ ] `CaseChallenge` — bloc défi individuel
- [ ] `CaseGallery` — galerie d'images avec lightbox (ex: `yet-another-react-lightbox`)
- [ ] `CaseStackDetails` — stack détaillée groupée par catégorie
- [ ] `CaseTestimonial` — témoignage format large
- [ ] `CaseNavigation` — projet suivant avec thumbnail
- [ ] `CaseCTAFinal` — CTA pré-rempli selon catégorie

---

### 8.5 Règles UX/UI spécifiques au portfolio

- **Performance critique** : ces pages sont pleines d'images → lazy loading agressif, `srcset`, format AVIF en priorité, placeholders blurhash via Sanity
- **Interactivité simple** sur les cartes : le clic emmène vers la page détaillée, **pas de modal** (mauvais pour le SEO)
- **URLs partagables** : les filtres actifs se reflètent dans l'URL via query params
- **Print-friendly** : CSS `@media print` propre (un prospect peut imprimer pour un comité)
- **Vitesse de parcours** : un prospect doit comprendre un cas en 30 secondes (scan) ou 5 minutes (lecture complète) — hiérarchie H2/H3 claire et scannable
- **Open Graph dynamique** : générer des images OG uniques par case avec `@vercel/og` (titre projet + metric phare + logo client)

---

### 8.6 Contenu à préparer par étude de cas

Checklist de production pour chaque case :

- [ ] **Hero image** : screenshot, mockup device réaliste, ou vidéo loop 10-15s muted
- [ ] **5-8 visuels** pour la galerie (screens UI, schémas d'architecture, avant/après)
- [ ] **4 metrics chiffrées vérifiables** (ne jamais inventer, demander validation client)
- [ ] **Témoignage client** (obtenir autorisation écrite pour publication)
- [ ] **Texte des 4 sections narratives** : contexte (300 mots), défis (3-5 blocs), solution (500 mots), résultats (300 mots)
- [ ] **Accord client écrit** pour publier les chiffres et le logo
- [ ] **Logo client** en SVG (ou PNG haute résolution avec fond transparent)

### Priorisation des études de cas à produire

**Priorité 1 — au lancement (5 cas minimum)** :
1. Greenweez — e-commerce bio
2. Accor All — app mobile
3. Spreadshirt — marketplace/configurateur
4. Urbawise — plateforme urbaine
5. The French Maisons — e-commerce luxe

**Priorité 2 — semaines 1-4 post-lancement** :
6. SIF Group — CRM
7. Crack It — site conversion
8. Musée Up' — site culturel
9. Mayami Production — site avec animations
10. Cristosud Minerals — e-commerce Prestashop

---

## 🤖 9. Focus silo IA — Spécifications page pilier

### Pourquoi une section dédiée

L'IA est le silo **le plus stratégique** à travailler en 2026 : forte demande, faible concurrence sur les freelances réellement positionnés, tickets moyens élevés. Une page pilier `/ia/` bien construite peut devenir le principal canal d'acquisition du site.

### Structure de la page /ia/

**Objectif** : 2500 mots minimum, structure scannable, transformation de curiosité en demande de devis.

#### 1. Hero spécifique IA
- **H1** : "Intégrez l'IA dans vos produits digitaux."
- **Tagline** : "Chatbots, agents, automatisation, recherche sémantique : je conçois des intégrations IA concrètes qui apportent une valeur business mesurable à vos utilisateurs et à vos équipes."
- Visuel : animation subtile ou démo live d'un chatbot intégré
- CTAs : "Demander un audit IA" + "Voir des cas concrets"

#### 2. "À qui s'adresse ce service"
Liste claire de 3-4 profils clients cibles :
- E-commerçants qui veulent un assistant shopping intelligent
- Entreprises avec une base documentaire à rendre consultable
- SaaS qui veulent automatiser des tâches utilisateurs
- Équipes internes qui veulent des outils d'IA métier

#### 3. Les 6 cas d'usage — grid visuelle

Chaque cas = une carte avec icône + titre + description courte + lien vers la page fille.

1. **Chatbot & assistant conversationnel** → `/ia/chatbot-ia/`
2. **Agents IA autonomes** → `/ia/agents-ia/`
3. **Recherche sémantique & RAG** → `/ia/rag-base-connaissances/`
4. **Automatisation de workflows** → `/ia/automatisation-ia/`
5. **Génération de contenu** → (intégrée à /ia/ia-generative-ecommerce/)
6. **Personnalisation temps réel** → (intégrée à /ia/integration-ia/)

#### 4. Mon approche
3-4 principes qui me différencient :
- **Pragmatique, pas hype** : je n'intègre pas de l'IA pour en intégrer, je résous un problème business
- **Choix raisonné du modèle** : OpenAI, Claude, Mistral, open-source — le bon outil pour le bon usage
- **Maîtrise des coûts** : architectures optimisées pour réduire les tokens et les latences
- **Sécurité & RGPD** : gestion propre des données, pas d'envoi de PII sans consentement

#### 5. Stack IA détaillée
Grid avec catégorisation claire :
- **LLMs** : OpenAI GPT-4/5, Anthropic Claude, Mistral, Llama (self-hosted)
- **Orchestration** : Vercel AI SDK, LangChain, LlamaIndex
- **Bases vectorielles** : Pinecone, Supabase pgvector, Upstash Vector
- **Speech** : Whisper, ElevenLabs, Cartesia
- **Vision** : GPT-4 Vision, Claude Vision
- **Embeddings** : OpenAI ada-002, Cohere, Voyage

#### 6. Process spécifique projets IA

5 étapes adaptées au contexte IA :
1. **Atelier d'identification des cas d'usage** (2h) — on liste les opportunités IA dans ton activité
2. **POC rapide** (1-2 semaines) — on valide sur le cas d'usage le plus prometteur
3. **Conception & architecture** — choix des modèles, coûts estimés, évaluation qualité
4. **Développement & intégration** — API, interface utilisateur, guardrails
5. **Tests, optimisation & mise en prod** — benchmarks qualité, réduction des coûts, monitoring

#### 7. Études de cas IA
Mettre en avant 2-3 projets IA concrets (à créer si tu n'en as pas encore : side-projects ou POCs internes peuvent compter comme démonstrations).

#### 8. FAQ IA — très importante pour le SEO
Questions types à traiter (chacune avec schema FAQPage) :
- "Quelle différence entre ChatGPT et une IA intégrée sur mesure ?"
- "Combien coûte l'intégration d'un chatbot IA ?"
- "Quels sont les risques RGPD d'une intégration IA ?"
- "Comment choisir entre OpenAI, Claude et Mistral ?"
- "Est-ce qu'une petite entreprise peut se permettre une IA sur mesure ?"
- "Combien de temps pour intégrer une IA sur mon site ?"
- "Peut-on faire tourner une IA en local pour éviter les coûts d'API ?"

#### 9. CTA final contextuel IA
Proposition spécifique : "Audit IA gratuit de 30 minutes — identifions ensemble 3 opportunités concrètes pour votre activité."

### Mots-clés à travailler sur /ia/ et pages filles

Table de correspondance à suivre pour chaque page :

| Page | Mot-clé principal | Volume estimé |
|---|---|---|
| /ia/ | intégration IA entreprise | moyen |
| /ia/integration-ia/ | développeur IA freelance | moyen-fort |
| /ia/chatbot-ia/ | créer chatbot IA personnalisé | fort |
| /ia/agents-ia/ | agent IA sur mesure | moyen |
| /ia/automatisation-ia/ | automatisation IA PME | moyen |
| /ia/rag-base-connaissances/ | RAG base de connaissances | niche mais très qualifié |
| /ia/ia-generative-ecommerce/ | IA générative e-commerce | moyen |

### Composants spécifiques au silo IA

- [ ] `UseCaseCard` — carte cas d'usage IA
- [ ] `AIStackGrid` — stack IA catégorisée
- [ ] `AIProcessStep` — étape du process IA (avec durée)
- [ ] `ChatbotDemo` — mini-démo d'un chatbot en live (optionnel mais impressionnant)
- [ ] `LLMComparisonTable` — tableau comparatif OpenAI/Claude/Mistral

---

## 🔍 10. Focus silo SEO & GEO — Spécifications page pilier

### Pourquoi une section dédiée

Le silo SEO est **doublement stratégique** :

1. **Commercial** : le SEO reste un des besoins les plus recherchés par les entreprises (recherches Google stables à fort volume sur "freelance SEO", "audit SEO", etc.)
2. **Méta-crédibilité** : un freelance qui rank bien sur les requêtes SEO prouve qu'il sait faire. Le site devient sa propre preuve.

Le **GEO (Generative Engine Optimization)** est le levier différenciant de 2026 : optimiser pour ChatGPT, Claude, Perplexity, Google AI Overviews, Gemini. Très peu de freelances le maîtrisent. En te positionnant maintenant, tu occupes le terrain avant l'explosion du marché.

### Structure de la page /seo/

**Objectif** : 2500 mots minimum, structure scannable, démonstration d'expertise qui convertit.

#### 1. Hero spécifique SEO
- **H1** : "Référencement Google & IA. Soyez trouvé partout où vos clients cherchent."
- **Tagline** : "SEO technique, rédaction optimisée, netlinking, et désormais GEO pour être recommandé par ChatGPT, Claude et Perplexity. Une approche complète du référencement moderne."
- Visuel : graphique/dashboard montrant une progression de trafic
- CTAs : "Demander un audit SEO" + "Comprendre le GEO"

#### 2. La double stratégie SEO + GEO
Section éducative qui explique la nouvelle réalité du référencement en 2026 :

- **SEO classique** (Google, Bing) : continue de représenter 70-80% du trafic search
- **GEO** (ChatGPT, Claude, Perplexity, Google AI Overviews) : 20-30% et en forte croissance
- **Les deux se combinent** : une même optimisation peut servir les deux, mais certaines techniques sont spécifiques à chaque

#### 3. Mes 8 expertises — grid visuelle

Chaque expertise = une carte avec icône + titre + description + lien vers page fille.

1. **Audit SEO complet** → `/seo/audit-seo/`
2. **SEO technique** → `/seo/seo-technique/` (Core Web Vitals, schema.org, crawl, indexation)
3. **SEO local** → `/seo/seo-local/` (Google Business Profile, citations, avis)
4. **SEO e-commerce** → `/seo/seo-ecommerce/` (fiches produits, catégories, facettes)
5. **Migration SEO** → `/seo/migration-seo/` (refonte sans perte de trafic)
6. **Rédaction SEO** → `/seo/redaction-seo/` (briefs, optimisation, clusters sémantiques)
7. **Netlinking** → `/seo/netlinking/` (stratégie de backlinks qualitatifs)
8. **GEO** → `/seo/geo-generative-engine-optimization/` (page phare, voir ci-dessous)

#### 4. Mon approche
4 principes différenciants :
- **SEO + dev réunis** : je suis à la fois développeur et SEO → je peux implémenter moi-même ce que d'autres doivent déléguer
- **Résultats mesurables** : chaque mission donne lieu à un suivi KPI (positions, trafic, conversions)
- **Pas de bullshit growth hacking** : uniquement des techniques white hat et pérennes
- **Spécialiste GEO** : l'un des rares freelances français à proposer cette expertise

#### 5. Outils utilisés
Grid des outils avec logos :
- **Analyse & tracking** : Google Search Console, Google Analytics, Plausible, Matomo
- **Recherche mots-clés** : Ahrefs, SEMrush, Ubersuggest, AnswerThePublic
- **SEO technique** : Screaming Frog, OnCrawl, PageSpeed Insights, Lighthouse
- **Schema & structured data** : Schema.org, Rich Results Test, Merkle Schema Generator
- **GEO spécifique** : tests manuels sur ChatGPT, Claude, Perplexity, Gemini, outils de suivi AI rankings

#### 6. Process d'une mission SEO
5 étapes :
1. **Audit initial** (1-2 semaines) — état des lieux technique, contenu, backlinks, concurrence
2. **Stratégie** — roadmap priorisée avec ROI estimé par action
3. **Implémentation** — corrections techniques, optimisations on-page, rédaction
4. **Acquisition de liens** — netlinking ciblé, relations presse digitales
5. **Suivi & reporting mensuel** — KPIs, ajustements, A/B tests

#### 7. Études de cas SEO
Mettre en avant 2-3 projets avec résultats chiffrés (évolution trafic organique, positions gagnées, CA généré).

#### 8. FAQ SEO — prioritaire pour le GEO
Questions types avec schema FAQPage (c'est surtout cette section qui va te faire ranker sur les IA génératives, voir explications plus bas) :

- "Qu'est-ce que le GEO et en quoi est-ce différent du SEO ?"
- "Combien coûte une prestation SEO en 2026 ?"
- "Combien de temps pour voir les premiers résultats SEO ?"
- "Est-ce que le SEO est mort avec l'arrivée de ChatGPT ?"
- "Comment apparaître dans les réponses de ChatGPT et Perplexity ?"
- "Qu'est-ce qu'un audit SEO technique ?"
- "Comment refaire son site sans perdre son SEO ?"
- "Qu'est-ce qu'un bon backlink en 2026 ?"

#### 9. CTA final contextuel
Proposition spécifique : "Audit SEO gratuit — je passe 30 minutes sur votre site et vous livre les 3 quick wins les plus impactants."

---

### 10.1 Focus sur la page `/seo/geo-generative-engine-optimization/`

**C'est la page la plus stratégique du silo**. Elle doit être un contenu de référence sur le GEO en français. Objectif : 3000 mots, excellente structure, citations possibles par d'autres articles (pour obtenir des backlinks naturels).

#### Structure

1. **H1** : "GEO : Generative Engine Optimization expliqué"
2. **TL;DR** en début de page (crucial pour le GEO lui-même — les IA aiment les résumés en tête)
3. **Définition du GEO** : qu'est-ce que c'est, différence avec le SEO
4. **Pourquoi c'est critique en 2026** : évolution du search behavior, statistiques
5. **Les 7 leviers du GEO** :
   - Structure sémantique claire (H1-H6, listes, tableaux)
   - Citations et sources autoritaires
   - Réponses directes aux questions (format FAQ)
   - Données structurées (Schema.org étendu)
   - Présence sur les sources d'entraînement (Wikipedia, Reddit, GitHub, etc.)
   - Llms.txt : le nouveau fichier standard
   - Autorité thématique et E-E-A-T renforcé
6. **Comment mesurer sa visibilité GEO** : outils, tests manuels, métriques
7. **Exemples concrets** : avant/après, études de cas
8. **FAQ GEO** : 10+ questions avec réponses courtes et claires
9. **CTA** : "Faites auditer votre visibilité GEO"

### 10.2 Mots-clés à travailler

Table de correspondance pour chaque page du silo :

| Page | Mot-clé principal | Volume estimé | Difficulté |
|---|---|---|---|
| /seo/ | freelance SEO | fort | fort |
| /seo/audit-seo/ | audit SEO gratuit | fort | moyen |
| /seo/seo-technique/ | SEO technique Next.js | moyen | faible |
| /seo/seo-local/ | SEO local référencement | moyen | moyen |
| /seo/seo-ecommerce/ | SEO e-commerce | fort | fort |
| /seo/migration-seo/ | migration SEO refonte | moyen | faible |
| /seo/redaction-seo/ | rédaction SEO freelance | moyen | moyen |
| /seo/netlinking/ | stratégie netlinking | faible | moyen |
| /seo/geo-generative-engine-optimization/ | GEO generative engine optimization | niche mais explosif | faible |

### 10.3 Application du GEO sur le site ClickDev lui-même

**Le site est sa propre démonstration**. Toutes les optimisations GEO sont appliquées sur clickdev.fr :

**Implémentations techniques spécifiques au GEO** :

- [ ] **`llms.txt` à la racine** du site (nouveau standard pour donner un "plan du site" aux LLMs)
- [ ] **`llms-full.txt`** : version complète avec le contenu en markdown
- [ ] **Réponses directes** en début de chaque page (TL;DR, résumé clé)
- [ ] **Format Q&A** systématique dans les FAQ avec schema FAQPage
- [ ] **Citations et sources** dans les articles de blog (les IA valorisent les contenus sourcés)
- [ ] **Données structurées étendues** : Article + HowTo + Comparison + FAQ selon le type de contenu
- [ ] **Présence sur des sources d'entraînement** : contributions actives sur Reddit (r/webdev, r/nextjs), réponses sur Stack Overflow, articles Medium/Dev.to reprenant les posts du blog
- [ ] **Article de référence par silo** publié sur des plateformes à forte autorité
- [ ] **Monitoring de la visibilité GEO** : tests manuels mensuels sur ChatGPT, Claude, Perplexity, Gemini avec les 20 requêtes cibles

### 10.4 Composants spécifiques au silo SEO

- [ ] `ExpertiseCard` — carte expertise SEO (réutilisable avec UseCaseCard du silo IA)
- [ ] `SEOProcessStep` — étape du process avec durée
- [ ] `SEOToolsGrid` — grid des outils SEO utilisés, groupés par catégorie
- [ ] `ResultsChart` — graphique Recharts montrant évolution de trafic (pour études de cas)
- [ ] `GEOComparisonTable` — tableau comparatif SEO vs GEO
- [ ] `LLMVisibilityCheck` — widget interactif qui check si un site apparaît sur différents LLMs (ambitieux mais différenciant)

---

## 🧩 11. Composants UI à créer

### Composants de base (shadcn/ui)

- [ ] `Button` (variants: primary, ghost, large)
- [ ] `Badge` (pour eyebrows, status)
- [ ] `Card` (pour services, témoignages, articles)
- [ ] `Accordion` (pour FAQ)
- [ ] `Dialog` (pour modals éventuels)
- [ ] `Input`, `Textarea`, `Select` (pour formulaire devis)
- [ ] `Toast` (pour feedback formulaire)

### Composants custom

- [ ] `Navigation` (sticky + mobile drawer)
- [ ] `HeroSection` (avec animation staggered reveal)
- [ ] `TrustBar` (logos clients)
- [ ] `ServiceCard` (réutilisable sur home + page services)
- [ ] `CaseStudyRow` (full-width avec metrics)
- [ ] `MetricBlock` (chiffre + label)
- [ ] `StackGrid` (logos technos)
- [ ] `ProcessStep` (étape numérotée)
- [ ] `TestimonialCard`
- [ ] `FAQItem` (accordion animé)
- [ ] `BlogCard`
- [ ] `SectionHead` (eyebrow + H2 + subtitle)
- [ ] `Footer` (complet avec sitemap)
- [ ] `QuoteForm` (formulaire multi-étapes `/devis/`)

### Formulaire de devis — spéc détaillée

Formulaire multi-étapes à la Typeform, stocké en session, 5 étapes :

1. **Type de projet** : Site vitrine / E-commerce / Marketplace / Mise en relation / App mobile / Intégration IA / SEO & GEO / CRM / Autre
2. **Contexte** : Création from scratch / Refonte / Évolution d'un existant
3. **Budget estimé** : <2k€ / 2-5k€ / 5-15k€ / 15-30k€ / 30-50k€ / 50k€+ / Je ne sais pas
4. **Délai souhaité** : Urgent (<1 mois) / Court (1-3 mois) / Moyen (3-6 mois) / Long (6+) / Flexible
5. **Contact** : Nom, email, entreprise, téléphone (optionnel), message libre

Validation Zod, envoi par Resend à bonjour@clickdev.fr, confirmation email à l'utilisateur.

---

## 📝 12. Contenu à produire (checklist rédaction)

### Pages structurantes

- [ ] Home (toutes les sections ci-dessus)
- [ ] /a-propos/ (1500 mots, parcours, philosophie, photo)
- [ ] /contact/
- [ ] /devis/ (texte d'intro + formulaire)

### Pages piliers (silos principaux)

- [ ] /sites-internet/ (2000 mots) — **page pilier silo 1**
- [ ] /applications-mobiles/ (2000 mots) — **page pilier silo 2**
- [ ] /ia/ (2500 mots) — **page pilier silo 3 — prioritaire stratégiquement**
- [ ] /seo/ (2500 mots) — **page pilier silo 4 — prioritaire stratégiquement**
- [ ] /crm-outils-metiers/ (2000 mots) — **page pilier silo 5**
- [ ] /maintenance/ (1500 mots) — **page pilier silo 6**

### Pages filles (36 pages au total)

**Silo Sites internet (8 pages)** :
- [ ] /sites-internet/site-vitrine/
- [ ] /sites-internet/site-ecommerce/ (priorité 1)
- [ ] /sites-internet/marketplace/ (priorité 1)
- [ ] /sites-internet/site-mise-en-relation/ (priorité 1)
- [ ] /sites-internet/site-sur-mesure/
- [ ] /sites-internet/site-wordpress/
- [ ] /sites-internet/intranet-extranet/
- [ ] /sites-internet/landing-page/

**Silo Applications mobiles (4 pages)** :
- [ ] /applications-mobiles/ios/
- [ ] /applications-mobiles/android/
- [ ] /applications-mobiles/react-native/
- [ ] /applications-mobiles/pwa/

**Silo IA (6 pages)** :
- [ ] /ia/integration-ia/ (priorité 1)
- [ ] /ia/chatbot-ia/ (priorité 1)
- [ ] /ia/agents-ia/
- [ ] /ia/automatisation-ia/
- [ ] /ia/rag-base-connaissances/
- [ ] /ia/ia-generative-ecommerce/

**Silo SEO & GEO (8 pages)** :
- [ ] /seo/audit-seo/ (priorité 1)
- [ ] /seo/seo-technique/
- [ ] /seo/seo-local/
- [ ] /seo/seo-ecommerce/ (priorité 1)
- [ ] /seo/migration-seo/
- [ ] /seo/redaction-seo/
- [ ] /seo/netlinking/
- [ ] /seo/geo-generative-engine-optimization/ (priorité 1 — page phare)

**Silo CRM & outils métiers (3 pages)** :
- [ ] /crm-outils-metiers/crm-sur-mesure/ (priorité 1)
- [ ] /crm-outils-metiers/integration-crm/
- [ ] /crm-outils-metiers/automatisation/

**Silo Maintenance (4 pages)** :
- [ ] /maintenance/maintenance-wordpress/
- [ ] /maintenance/maintenance-ecommerce/
- [ ] /maintenance/tma/
- [ ] /maintenance/infogerance/

À rédiger progressivement. **Priorité 1 pour le lancement** (forte valeur commerciale et SEO) : site-ecommerce, marketplace, site-mise-en-relation, integration-ia, chatbot-ia, audit-seo, seo-ecommerce, geo, crm-sur-mesure.

### Pages expertises (10 pages)

À rédiger après le lancement initial. Pages courtes (800 mots) mais très ciblées SEO. Les pages IA sont prioritaires (concurrence faible, demande forte) :

- [ ] /expertises/nextjs/
- [ ] /expertises/wordpress/
- [ ] /expertises/shopify/
- [ ] /expertises/woocommerce/
- [ ] /expertises/react-native/
- [ ] /expertises/laravel/
- [ ] /expertises/nodejs/
- [ ] /expertises/openai/ (priorité)
- [ ] /expertises/claude-api/ (priorité)
- [ ] /expertises/langchain/ (priorité)

### Études de cas (5 minimum au lancement)

- [ ] Greenweez — e-commerce bio
- [ ] Accor All — app mobile
- [ ] Spreadshirt — configurateur
- [ ] Urbawise — plateforme urbaine
- [ ] Crack It — site conversion
- [ ] The French Maisons — e-commerce luxe
- [ ] SIF Group — CRM

### Articles de blog (3 au lancement, puis rythme 2-4/mois)

Idées prioritaires :
1. WordPress vs Next.js : lequel choisir en 2026 ?
2. Combien coûte réellement une marketplace ?
3. Core Web Vitals : pourquoi votre site rame
4. E-commerce headless : avantages et limites
5. Refaire son site : 7 erreurs à éviter
6. **Intégrer l'IA dans son site e-commerce en 2026 : guide complet** (prioritaire)
7. **Chatbot IA vs chatbot classique : ce qui change vraiment**
8. **ChatGPT, Claude ou Mistral : quel LLM choisir pour son projet ?**
9. **RAG expliqué simplement : offrir une IA qui connaît votre entreprise**
10. **Automatiser sa relation client avec des agents IA**
11. **GEO : comment apparaître dans les réponses de ChatGPT** (prioritaire — premier article de référence francophone)
12. **Le SEO est-il mort avec l'IA générative ?**
13. **Llms.txt : le nouveau robots.txt expliqué**
14. **Migration SEO : comment refaire son site sans perdre son trafic**
15. **15 KPIs SEO à suivre en 2026 (au-delà des positions Google)**

### Témoignages à récolter

Objectif : 6 témoignages avec photo, nom, poste vérifiable. Action : tour LinkedIn cette semaine (80% des clients diront oui).

---

## ✅ 13. Checklist de lancement

### Avant mise en ligne

**Technique**
- [ ] Scores Lighthouse > 95 sur Performance, Accessibilité, Best Practices, SEO
- [ ] Tests responsive sur 5 breakpoints minimum (320, 768, 1024, 1440, 1920)
- [ ] Tests cross-browser (Chrome, Safari, Firefox, Edge)
- [ ] Tests accessibilité clavier et lecteur d'écran
- [ ] Aucune erreur console, aucun warning React
- [ ] Images optimisées (AVIF/WebP, dimensions correctes)
- [ ] Metadata + OG images unique par page
- [ ] Sitemap.xml + robots.txt OK
- [ ] Schema.org validé via Rich Results Test Google
- [ ] Redirections 301 en place depuis les anciennes URLs

**Contenu**
- [ ] Toutes les pages structurantes rédigées et relues
- [ ] 3 études de cas minimum publiées
- [ ] 3 articles de blog publiés
- [ ] 4 témoignages clients avec photo
- [ ] Logos clients en SVG (ou accord licence d'usage)
- [ ] Photo/vidéo de David de qualité professionnelle
- [ ] Mentions légales + politique de confidentialité rédigées

**SEO & Analytics**
- [ ] Google Search Console configurée + sitemap soumis
- [ ] Plausible Analytics configuré
- [ ] Google Business Profile créé/mis à jour
- [ ] Fiche Malt à jour avec lien vers nouveau site
- [ ] Profil LinkedIn mis à jour avec nouveau positionnement

**Commercial**
- [ ] Formulaire de devis testé end-to-end
- [ ] Réception email bonjour@clickdev.fr fonctionnelle
- [ ] Cal.com configuré pour le CTA "Réserver un appel"
- [ ] Réponses types préparées pour les demandes entrantes

### Après lancement (semaine 1-4)

- [ ] Partage LinkedIn avec post dédié + before/after
- [ ] Envoi newsletter à tous les anciens clients
- [ ] Soumission à quelques annuaires tech français qualitatifs
- [ ] Premier guest post sur un blog tech pour obtenir un backlink
- [ ] Monitoring des positions sur 20 mots-clés cibles (semrush/ahrefs)

---

## 🧠 14. Instructions pour Cursor

### Comment utiliser ce brief

- **Toujours** garder ce fichier en contexte (`@brief.md` en début de session)
- **Le template `genesis-nextjs` à la racine est la référence visuelle absolue** : analyser ses composants avant tout développement, réutiliser au maximum, respecter sa palette et sa typo
- Avant de créer un composant, vérifier qu'il n'existe pas déjà dans le template ou dans `/components/ui/`
- Chaque composant doit être **typé en TypeScript strict**
- Chaque composant doit être **responsive** dès le départ, pas en afterthought
- Chaque page doit avoir sa **metadata** via `generateMetadata()`
- Ne **jamais** utiliser `<img>` : toujours `next/image`
- Ne **jamais** utiliser `<a href="/...">` pour les liens internes : toujours `<Link>` de Next
- Privilégier les **Server Components** sauf si interaction nécessaire
- **Ne pas ajouter de librairie d'animation externe** sans validation explicite (utiliser celles du template)
- Respecter `prefers-reduced-motion` sur **toutes** les animations

### Conventions de nommage

```
Fichiers composants     → PascalCase (HeroSection.tsx)
Fichiers utilitaires    → kebab-case (format-date.ts)
Dossiers                → kebab-case (services/sites-internet/)
Variables CSS           → --kebab-case
Classes custom          → kebab-case
Fonctions/variables TS  → camelCase
Types/Interfaces        → PascalCase
Constantes              → UPPER_SNAKE_CASE
```

### Structure des dossiers Next.js

```
/app
  /(marketing)          # groupe de routes publiques
    /services
    /realisations
    /expertises
    /blog
    /a-propos
  /devis
  /api
    /quote/route.ts     # endpoint formulaire
  /layout.tsx
  /page.tsx
/components
  /ui                   # shadcn/ui
  /sections             # sections de pages (Hero, Services, etc.)
  /blocks               # blocs réutilisables (Card, Badge, etc.)
/lib
  /sanity               # client Sanity + queries
  /utils
  /constants
/public
  /images
  /logos
/styles
  /globals.css
/types
/content                # si fallback MDX
```

### Qualité du code attendue

- Zéro `any` en TypeScript
- Zéro warning ESLint
- Commentaires uniquement quand le "pourquoi" n'est pas évident, jamais pour paraphraser le code
- Composants de moins de 200 lignes, extraire si plus long
- Props explicitement typées, pas de `Props = {}`

---

## 📦 15. Roadmap de développement suggérée

### Phase 1 — Fondations (semaine 1)

- Setup Next.js 15 + Tailwind v4 + shadcn/ui
- Configuration TypeScript, ESLint, Prettier
- Setup Sanity (schémas : post, caseStudy, testimonial, author)
- Intégration fonts + palette CSS
- Layout global : Navigation + Footer
- Composants UI de base

### Phase 2 — Page d'accueil (semaine 2)

- Toutes les sections de la home
- Animations Framer Motion
- Responsive complet
- Formulaire de devis fonctionnel

### Phase 3 — Pages piliers & Portfolio (semaine 3)

- 4 pages services principales
- Page /a-propos/
- Page /contact/
- **Page listing /realisations/** avec filtres fonctionnels
- **Template page étude de cas** + 5 cas intégrés en CMS Sanity
- Schéma Sanity complet (caseStudy + testimonial)
- Images OG dynamiques pour les case studies

### Phase 4 — Contenu & SEO (semaine 4)

- Pages filles services (prioritaires)
- 3 articles de blog
- Pages expertises
- Schema.org partout
- Sitemap + redirections
- Tests Lighthouse + optimisations

### Phase 5 — Lancement

- Mise en ligne sur Vercel
- Migration DNS
- Google Search Console
- Communication sur les réseaux

---

## 🔗 16. Ressources & documentation

### ⚠️ Design : référence unique = le template Genesis

Pour toute question de design, d'animation, de palette, de typographie ou d'interaction : **la seule référence est le template `genesis-nextjs` situé à la racine du projet**. Pas de références externes.

Cette section ne contient que la **documentation technique** des libs/outils utilisés.

### Documentation technique

- Next.js 15 — https://nextjs.org/docs
- Tailwind v4 — https://tailwindcss.com/docs
- shadcn/ui — https://ui.shadcn.com (uniquement si le template en a besoin)
- Sanity — https://www.sanity.io/docs
- Vercel — https://vercel.com/docs
- Resend — https://resend.com/docs
- React Hook Form — https://react-hook-form.com
- Zod — https://zod.dev

---

*Ce brief est un document vivant. À mettre à jour au fur et à mesure des décisions et itérations du projet.*

**Dernière mise à jour** : avril 2026
**Auteur** : David Rieu — Clickdev
