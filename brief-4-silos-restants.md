# 📋 Brief — Silos Applications mobiles, IA, SEO, CRM & outils métiers

> Document de référence pour la création des 4 silos restants de ClickDev.
> À fournir à Cursor en complément du brief principal `brief-clickdev.md`.
> Les pages sont à créer **toutes d'un coup**, en mode autonome.

---

## ⚠️ Règles absolues (à respecter impérativement)

### Design — INTOUCHÉ
**Tu utilises exactement le même design que les pages déjà créées** (`/sites-internet/` et ses pages filles). Mêmes composants, mêmes typographies, mêmes couleurs, mêmes animations, mêmes conventions visuelles. Tu ne réinventes rien.

### Ton éditorial — AVENANT ET ACCESSIBLE

**Tous les textes sont écrits à la première personne (je, mon, ma, mes).**

Règles strictes :
- **Parler comme à un ami qui n'y connaît rien** — comme si j'expliquais mon métier à mon oncle commerçant
- **Chaleureux et conversationnel** — on est humain, pas robot corporate
- **Cool et légèrement fun** — un peu d'humour discret, pas lourd
- **Ultra clair** — si un jargon technique s'invite, l'expliquer en 5 mots juste après
- **Zéro corporate speak** — pas de "solutions innovantes", pas de "transformation digitale", pas de "expertise reconnue"

**Test obligatoire à chaque phrase** : est-ce qu'un commerçant de 55 ans qui ne connaît rien à la tech comprend ? Si non, reformuler.

**Exemples de style** :

❌ "Nous proposons des solutions d'intégration IA adaptées à votre écosystème digital."
✅ "J'intègre de l'intelligence artificielle dans vos outils, pour qu'ils bossent pour vous."

❌ "Notre expertise en référencement naturel optimise votre visibilité SERP."
✅ "Je travaille votre référencement Google pour que vos clients vous trouvent, tout simplement."

❌ "Architecture API-first avec serverless functions edge-deployed."
✅ "Un site qui se charge en moins d'une seconde, même à l'autre bout du monde."

### Longueur — CONTENU LONG POUR LE SEO

**Chaque page doit faire 1500-2500 mots minimum** pour bien ranker :

- **Pages piliers** : 2500-3000 mots (elles portent le silo)
- **Pages filles** : 1500-2000 mots (ciblées longue traîne)

Le contenu doit être **dense mais jamais bavard**. Si une section est longue, elle doit réellement apporter de la valeur. Pas de remplissage.

### SEO — RIGOUREUX SUR CHAQUE PAGE

Pour chaque page (pilier ou fille), implémenter :

- Metadata unique (title 50-60 car, description 150-160 car)
- Canonical URL
- Open Graph complet + image OG unique
- Twitter Card
- 3 schemas en @graph : Service + BreadcrumbList + FAQPage
- UN SEUL H1, hiérarchie H2-H3 propre
- 15+ liens internes contextuels
- Alt text sur 100% des images
- Fil d'Ariane visible

### Prix — RESTER ACCESSIBLES

Tous les tarifs "à partir de" restent **sous 4 900 €** pour garder un positionnement accessible, comme pour les pages du silo Sites internet.

---

## 🏗️ Structure commune (pour TOUTES les pages)

Chaque page (pilier ou fille) suit exactement cette architecture :

### 1. Fil d'Ariane
`Accueil > [Silo] > [Page]`

### 2. Hero
- Eyebrow : "CHAPITRE [X] · [NOM DU SILO/PAGE]"
- Sous-eyebrow : "DÉVELOPPEUR FREELANCE — [SPÉCIALITÉ]"
- H1 unique ciblé SEO
- Lead de 2-3 phrases
- 2 CTAs

### 3. Bloc "Ce que vous obtenez" ou "Ce que je fais concrètement"
4 bénéfices ou services, ton orienté client.

### 4. Bloc éditorial SEO LONG (800-1200 mots pour les filles, 1200-1800 pour les piliers)
4-5 sous-sections H3 avec mots-clés longue traîne, lettrines, pull quotes.

### 5. Bloc "Pour qui c'est fait"
3-4 profils de clients types.

### 6. Bloc Process ou Méthode
5 étapes adaptées.

### 7. Bloc Stack technique / Outils
Les technos et outils utilisés.

### 8. Bloc Cas clients
2-3 études de cas filtrées via Sanity.

### 9. Bloc FAQ spécifique
6-8 questions avec schema FAQPage.

### 10. Bloc Budget discret
Mention "à partir de [prix]" + "devis gratuit et personnalisé".

### 11. Bloc CTA final
Boutons blancs avec halo, style pilier Sites internet.

---

# 📱 SILO 1 — APPLICATIONS MOBILES

## Page pilier `/applications-mobiles/`

**Mot-clé principal** : "développeur application mobile freelance"
**Volume** : fort · **Concurrence** : forte
**Budget à mentionner** : à partir de 4 900 €

### Metadata

```typescript
export const metadata: Metadata = {
  title: "Développeur application mobile freelance — iOS & Android | Clickdev",
  description: "Création d'applications mobiles iOS et Android sur mesure par un développeur freelance. React Native, natif, PWA. De l'idée au store, je m'occupe de tout dès 4 900 €.",
  keywords: ["développeur application mobile freelance", "création application mobile", "développeur iOS Android", "React Native freelance", "application mobile sur mesure"],
  alternates: { canonical: "https://clickdev.fr/applications-mobiles" },
};
```

### Hero

- Eyebrow : "CHAPITRE 02 · APPLICATIONS MOBILES"
- Sous-eyebrow : "DÉVELOPPEUR FREELANCE — iOS & ANDROID"
- H1 : "Développeur d'applications mobiles sur mesure"
- Lead : "Vous avez une idée d'appli ? Parfait, j'adore ça. Je conçois et développe des applications iOS et Android qui tiennent vraiment la route — de la première esquisse jusqu'à la publication sur les stores. Sans prise de tête, sans mauvaise surprise."

### Bloc "Ce que je fais concrètement"

1. **Je code votre appli de A à Z** — Du premier écran jusqu'au bouton "acheter". Interface, logique métier, connexions aux serveurs : tout est pensé pour votre usage.
2. **Je la publie sur l'App Store et Google Play** — Je connais les subtilités des deux stores. Je m'occupe de la soumission, des captures d'écran, de la fiche de l'appli.
3. **Je fais en sorte qu'elle soit rapide et stable** — Une appli qui plante, c'est une appli qu'on désinstalle. Objectif : zéro bug au lancement.
4. **Je reste là après la mise en ligne** — Évolutions, correctifs, mises à jour iOS/Android : je vous accompagne dans la durée.

### Angle éditorial (1500-1800 mots)

**Titre** : "Avoir une appli mobile en 2026 : pourquoi et comment faire les bons choix"

Sous-sections H3 :

1. **"Pourquoi vos clients passent 4h par jour sur leur téléphone (et ce que ça change pour vous)"**
   Stats d'usage mobile en France, comportements clients, nouveaux usages. Expliquer pourquoi ne pas avoir d'appli en 2026 devient un vrai handicap pour certaines activités. Mots-clés : "statistiques usage mobile", "application mobile entreprise".

2. **"Native, React Native ou PWA : j'explique les différences sans jargon"**
   Vulgariser les 3 approches avec des analogies concrètes (type "une voiture, une moto, un vélo électrique"). Donner des exemples de quand choisir quoi. Mots-clés : "application native vs React Native", "PWA c'est quoi".

3. **"Combien coûte vraiment une application mobile (la vraie réponse)"**
   Démystifier les prix. Expliquer ce qui fait varier les coûts (complexité, nombre d'écrans, fonctionnalités, back-end). Donner des fourchettes réalistes. Mots-clés : "prix application mobile", "budget développement app".

4. **"Les 5 erreurs qui tuent 90% des projets d'applis"**
   Erreurs fréquentes : trop de fonctionnalités au lancement, mauvaise UX, pas de tests utilisateurs, pas de maintenance prévue, sous-estimation des stores. Mots-clés : "échec projet application mobile", "erreurs création app".

5. **"Ma méthode : du premier échange jusqu'à l'appli que vos clients adorent"**
   Approche personnalisée, étapes clés, importance du prototype, tests utilisateurs. Lien vers `/a-propos/`.

### Pour qui c'est fait

- **Startups et entrepreneurs** : "Vous avez une idée d'appli qui cartonne dans votre tête ? Je la sors de vos rêves pour la mettre dans les mains de vos premiers utilisateurs."
- **PME et commerces** : "Une appli fidélité, une appli de commande, un outil pour vos clients : je rends le mobile accessible aux structures qui n'ont pas une équipe tech."
- **Agences et consultants** : "Je peux intervenir en direct ou en sous-traitance sur vos projets mobiles, avec la flexibilité d'un freelance et la rigueur d'un senior."
- **Grandes marques** : "J'ai développé Accor All, utilisée par des millions de personnes. L'exigence des grands groupes, je connais."

### FAQ

1. Combien coûte une application mobile ?
2. Combien de temps pour créer une appli ?
3. Faut-il développer sur iOS et Android en même temps ?
4. Une PWA peut-elle remplacer une vraie appli ?
5. Comment se passe la publication sur les stores ?
6. Que se passe-t-il après le lancement ?
7. Peut-on commencer petit et enrichir l'appli ensuite ?
8. Vous faites aussi le design de l'appli ?

### Stack

React Native, Swift (iOS), Kotlin (Android), Expo, Firebase, Supabase, TestFlight, App Store Connect, Google Play Console, RevenueCat pour les abonnements.

---

## Pages filles du silo Applications mobiles

### `/applications-mobiles/ios/`

**Mot-clé** : "développeur iOS freelance" · **Budget** : à partir de 4 500 €

**H1** : "Développeur iOS freelance — Applications natives Swift"

**Lead** : "Vous visez la qualité iOS, avec tout ce que ça implique : fluidité parfaite, respect des guidelines Apple, intégration des dernières fonctionnalités. Je développe vos applications iOS en Swift, avec l'exigence qu'attendent les utilisateurs Apple."

**Angle éditorial** (1200-1500 mots) — Titre : "iOS en 2026 : ce que les utilisateurs Apple attendent vraiment"

Sous-sections :
1. "Pourquoi les utilisateurs iPhone sont plus exigeants (et plus dépensiers)"
2. "Swift, SwiftUI, UIKit : j'explique les choix techniques sans jargon"
3. "Les guidelines Apple : pourquoi les respecter change tout"
4. "De la conception à l'App Store : mon processus étape par étape"

**FAQ** (6 questions) :
1. Combien coûte une appli iOS ?
2. Pourquoi faire une appli iOS native ?
3. Combien de temps pour la publication sur l'App Store ?
4. Vous gérez aussi la fiche App Store ?
5. Et si je veux aussi une version Android ensuite ?
6. Que se passe-t-il quand Apple sort une nouvelle version d'iOS ?

---

### `/applications-mobiles/android/`

**Mot-clé** : "développeur Android freelance" · **Budget** : à partir de 4 500 €

**H1** : "Développeur Android freelance — Applications Kotlin"

**Lead** : "Android représente 70% du marché mondial. Et les utilisateurs Android sont pointus sur la stabilité et la performance. Je développe vos applications Android en Kotlin natif, avec une attention particulière à la compatibilité sur la diversité des appareils."

**Angle éditorial** (1200-1500 mots) — Titre : "Android en 2026 : réussir sur le plus gros marché mobile mondial"

Sous-sections :
1. "Android vs iOS : ce qui change vraiment pour vous et vos utilisateurs"
2. "Kotlin, Jetpack Compose, Material Design : les bons choix techniques"
3. "Le défi de la fragmentation Android (et comment je le gère)"
4. "Publication sur Google Play : ce qu'il faut anticiper"

**FAQ** (6 questions) :
1. Combien coûte une appli Android ?
2. Pourquoi choisir du natif plutôt que React Native ?
3. Comment gérer la diversité des smartphones Android ?
4. Combien de temps pour la validation Google Play ?
5. Vous gérez les mises à jour après publication ?
6. Android et Chromebook sont-ils compatibles ?

---

### `/applications-mobiles/react-native/`

**Mot-clé** : "développeur React Native freelance" · **Budget** : à partir de 4 900 €

**H1** : "Développeur React Native freelance — iOS et Android avec un seul code"

**Lead** : "React Native, c'est LA solution quand vous voulez une appli sur iOS ET Android sans doubler votre budget. Avec 10 ans d'expérience sur React Native, je vous garantis une appli performante, belle, et livrée dans des délais raisonnables."

**Angle éditorial** (1200-1500 mots) — Titre : "React Native en 2026 : pourquoi c'est devenu le standard cross-platform"

Sous-sections :
1. "React Native expliqué simplement (avec l'analogie de la voiture hybride)"
2. "Les avantages concrets : budget, délais, maintenance"
3. "Les limites à connaître (et comment je les contourne)"
4. "Expo ou React Native CLI : mes choix selon votre projet"

**FAQ** (6 questions) :
1. Combien coûte une appli React Native ?
2. C'est vraiment moins cher que du natif ?
3. Est-ce que la performance est au niveau du natif ?
4. Quelles grandes marques utilisent React Native ?
5. Peut-on ajouter des fonctionnalités natives si besoin ?
6. Comment gérer les futures versions iOS/Android ?

---

### `/applications-mobiles/pwa/`

**Mot-clé** : "création PWA freelance" · **Budget** : à partir de 2 900 €

**H1** : "Création de PWA — L'alternative maligne aux applis mobiles"

**Lead** : "Une PWA (Progressive Web App), c'est un site web qui s'installe et se comporte comme une vraie appli mobile. Moins cher, plus rapide à lancer, souvent suffisant pour 80% des besoins. Je vous explique tout — sans jargon."

**Angle éditorial** (1200-1500 mots) — Titre : "La PWA expliquée simplement : l'appli qui n'en est pas une"

Sous-sections :
1. "Une PWA, qu'est-ce que c'est au juste (et ça mange quoi en hiver) ?"
2. "Les avantages qui font basculer beaucoup d'entreprises"
3. "Quand une PWA suffit (et quand il faut une vraie appli)"
4. "Comment je développe une PWA qui assure"

**FAQ** (6 questions) :
1. Combien coûte une PWA ?
2. Une PWA peut-elle vraiment remplacer une appli ?
3. Ça marche sur iOS et Android ?
4. Comment les utilisateurs l'installent ?
5. Et les notifications push, ça fonctionne ?
6. Les limites par rapport à une vraie appli native ?

---

# 🤖 SILO 2 — IA (Intelligence Artificielle)

## Page pilier `/ia/`

**Mot-clé principal** : "intégration IA entreprise freelance"
**Volume** : moyen-fort (en forte croissance) · **Concurrence** : faible (opportunité majeure)
**Budget à mentionner** : à partir de 3 500 €

### Metadata

```typescript
export const metadata: Metadata = {
  title: "Intégration IA entreprise — Freelance | Clickdev",
  description: "Intégration d'IA dans vos outils : chatbots, agents, automatisation, ChatGPT, Claude. Développeur freelance spécialisé en IA pratique. Devis dès 3 500 €.",
  keywords: ["intégration IA entreprise", "développeur IA freelance", "chatbot IA personnalisé", "agent IA sur mesure", "intégration ChatGPT", "intégration Claude API"],
  alternates: { canonical: "https://clickdev.fr/ia" },
};
```

### Hero

- Eyebrow : "CHAPITRE 03 · INTELLIGENCE ARTIFICIELLE"
- Sous-eyebrow : "DÉVELOPPEUR FREELANCE — IA PRATIQUE"
- H1 : "J'intègre l'IA dans vos produits et outils"
- Lead : "L'IA, ce n'est plus juste ChatGPT qu'on utilise en ligne. C'est une techno qu'on peut intégrer directement dans votre site, votre appli, vos outils internes. Pour gagner du temps, mieux servir vos clients, automatiser ce qui doit l'être. Je vous montre comment."

### Bloc "Ce que je fais concrètement"

1. **Des chatbots intelligents qui connaissent VOTRE entreprise** — Pas un chatbot bidon. Un assistant qui sait vraiment répondre à vos clients, 24h/24, avec votre ton et vos infos.
2. **Des agents qui bossent pour vous en autonomie** — Générer des devis, trier des mails, qualifier des leads, remplir votre CRM : je code des assistants IA qui agissent, pas juste qui discutent.
3. **De l'automatisation intelligente de vos tâches répétitives** — Tout ce qui vous fait perdre du temps chaque semaine, je cherche à l'automatiser proprement.
4. **Une IA pensée pour VOS données (RAG)** — Je construis des systèmes qui permettent à l'IA de parler avec votre documentation, vos produits, vos process.

### Angle éditorial (1800-2000 mots)

**Titre** : "L'IA en entreprise en 2026 : sortir de la hype pour passer à l'action concret"

Sous-sections H3 :

1. **"L'IA qu'on voit sur LinkedIn vs l'IA qui vous rapporte vraiment"**
   Décoder la hype. Expliquer qu'il y a plein de bullshit autour de l'IA, mais aussi de vraies opportunités. Donner des cas concrets qui rapportent du temps ou de l'argent. Mots-clés : "IA entreprise concrète", "ROI intelligence artificielle".

2. **"Les 6 cas d'usage IA qui fonctionnent vraiment (et les 3 qu'il faut éviter)"**
   Lister concrètement : chatbot client, qualification de leads, rédaction d'emails, analyse de documents, recherche interne, personnalisation produit. Avec pour chacun un ordre de grandeur de temps/argent économisé. Et les pièges à éviter (IA génératrice pour tâches critiques, remplacement complet d'humains, etc.). Mots-clés : "cas d'usage IA", "automatisation IA PME".

3. **"ChatGPT, Claude, Mistral, Gemini : lequel choisir et pour quoi"**
   Comparaison simple des grandes IA sur : qualité, prix, vitesse, sécurité des données. Expliquer quand utiliser l'un ou l'autre. Mots-clés : "ChatGPT vs Claude", "choisir LLM entreprise".

4. **"RAG expliqué à votre voisin (et pourquoi c'est la clé)"**
   Vulgariser le concept de Retrieval-Augmented Generation avec une analogie (type "comme un bibliothécaire qui connaît tous vos livres"). Pourquoi c'est crucial pour une IA qui connaît VOTRE entreprise. Mots-clés : "RAG IA", "base de connaissances IA".

5. **"Combien ça coûte vraiment, intégrer de l'IA ?"**
   Démystifier les coûts : développement initial, coûts récurrents d'API, hébergement. Donner des fourchettes réalistes. Expliquer pourquoi ça peut être très abordable. Mots-clés : "prix intégration IA", "coût chatbot IA".

6. **"Ma méthode : de l'idée à l'IA qui marche vraiment dans votre quotidien"**
   Approche : on identifie ensemble un vrai problème, on fait un POC rapide, on itère. Lien vers `/realisations/`.

### Pour qui c'est fait

- **PME qui veulent gagner du temps** : "Automatiser le support, la qualification des leads, la gestion des mails : l'IA accessible aux structures qui n'ont pas de service informatique."
- **E-commerces** : "Chatbot d'aide au choix, recherche produit intelligente, personnalisation des recommandations : l'IA qui augmente vraiment vos ventes."
- **SaaS et startups** : "Intégrer de l'IA dans votre produit pour vous différencier et apporter de la vraie valeur à vos utilisateurs."
- **Grandes entreprises** : "Projets IA pilotes ou déploiements à plus grande échelle, avec un interlocuteur unique qui connaît votre stack."

### FAQ

1. Concrètement, l'IA peut faire quoi pour mon entreprise ?
2. Combien coûte un chatbot IA personnalisé ?
3. Mes données restent-elles privées ?
4. Quelle différence entre ChatGPT et une IA intégrée sur mesure ?
5. Combien de temps pour intégrer l'IA dans mon outil ?
6. Et les hallucinations de l'IA, c'est gérable ?
7. Est-ce que c'est réservé aux grandes entreprises ?
8. Comment mesurer le retour sur investissement ?

### Stack

OpenAI API (GPT-4, GPT-5), Anthropic Claude API, Mistral, Vercel AI SDK, LangChain, Pinecone, Supabase pgvector, Upstash Vector, n8n, Make.

---

## Pages filles du silo IA

### `/ia/integration-ia/`

**Mot-clé** : "intégration IA sur mesure entreprise" · **Budget** : à partir de 3 500 €

**H1** : "Intégration d'IA sur mesure dans vos outils existants"

**Lead** : "Votre site, votre CRM, votre appli : l'IA peut s'y intégrer directement pour faire gagner du temps à vos équipes ou à vos clients. Je conçois ces intégrations sur mesure, en partant toujours d'un vrai besoin — pas de la techno."

**Angle éditorial** (1500 mots) — Titre : "Intégrer l'IA dans vos outils : la différence entre gadget et vraie valeur"

Sous-sections :
1. "L'IA ne remplace pas vos outils, elle les rend plus intelligents"
2. "Les 5 intégrations IA les plus rentables en 2026"
3. "Ma méthode pour choisir OÙ intégrer de l'IA chez vous"
4. "De l'intégration simple à l'agent autonome : par où commencer"

**FAQ** (6 questions) :
1. Qu'est-ce qu'une intégration IA concrètement ?
2. Combien coûte l'intégration d'une IA dans mon outil actuel ?
3. Mon CRM/ERP existant peut-il recevoir de l'IA ?
4. Est-ce que ça va perturber mon équipe ?
5. Et si je veux revenir en arrière ?
6. Comment commencer sans prendre de risques ?

---

### `/ia/chatbot-ia/`

**Mot-clé** : "création chatbot IA personnalisé" · **Budget** : à partir de 2 900 €

**H1** : "Création de chatbot IA personnalisé pour votre activité"

**Lead** : "Un chatbot bidon qui répond à côté de la plaque, ça énerve tout le monde. Moi, je développe des chatbots IA qui connaissent vraiment votre entreprise, parlent avec votre ton, et apportent des réponses utiles à vos clients. 24h/24, 7j/7."

**Angle éditorial** (1500 mots) — Titre : "Le chatbot IA expliqué (et pourquoi 90% des chatbots sont nuls)"

Sous-sections :
1. "Pourquoi vos clients détestent les chatbots classiques"
2. "Ce qui change avec un chatbot propulsé à l'IA"
3. "Comment je construis un chatbot qui connaît VOTRE entreprise"
4. "Chatbot IA : ce que ça coûte vraiment (hébergement, API, maintenance)"

**FAQ** (7 questions) :
1. Combien coûte un chatbot IA ?
2. Combien de temps pour le mettre en place ?
3. Le chatbot peut-il prendre des rendez-vous ?
4. Est-ce qu'il peut transférer à un humain si besoin ?
5. Dans quelles langues il peut parler ?
6. Peut-il répondre aux questions sur mes produits ?
7. Qu'est-ce qui se passe si une question le dépasse ?

---

### `/ia/agents-ia/`

**Mot-clé** : "agent IA sur mesure" · **Budget** : à partir de 4 500 €

**H1** : "Agents IA sur mesure — Des assistants qui agissent pour vous"

**Lead** : "Un chatbot vous répond. Un agent IA, lui, agit. Envoyer un mail, remplir un CRM, générer un devis, trier des candidatures : je développe des agents qui bossent pour vous en autonomie, et qui vous rendent la main uniquement quand c'est nécessaire."

**Angle éditorial** (1500 mots) — Titre : "Les agents IA expliqués : au-delà du chatbot, des assistants qui agissent"

Sous-sections :
1. "Chatbot vs agent IA : la différence qui change tout"
2. "Les 7 tâches qu'un agent IA peut gérer à votre place"
3. "Comment garantir qu'un agent IA ne fasse pas n'importe quoi"
4. "Le futur du travail avec des agents IA (déjà là, en fait)"

**FAQ** (6 questions) :
1. Concrètement, un agent IA peut faire quoi ?
2. Combien coûte un agent IA personnalisé ?
3. Comment éviter les erreurs de l'agent ?
4. L'agent peut-il apprendre de nos retours ?
5. Quelle différence avec une automatisation classique ?
6. Peut-on commencer petit et faire grossir l'agent ?

---

### `/ia/automatisation-ia/`

**Mot-clé** : "automatisation IA PME" · **Budget** : à partir de 2 500 €

**H1** : "Automatisation IA — Récupérez vos heures perdues"

**Lead** : "Combien d'heures par semaine votre équipe perd-elle sur des tâches répétitives ? Classement de mails, extraction d'infos, rédaction de réponses-types, saisie dans des tableaux. L'automatisation IA peut prendre en charge tout ça. Je l'installe chez vous, simplement."

**Angle éditorial** (1500 mots) — Titre : "L'automatisation IA : le levier de productivité des PME en 2026"

Sous-sections :
1. "Les 10 tâches qu'on peut automatiser avec l'IA aujourd'hui"
2. "n8n, Make, Zapier + IA : comment ça marche ensemble"
3. "Retour sur investissement : combien de temps vraiment récupéré"
4. "Comment identifier ce qui vaut le coup d'être automatisé"

**FAQ** (6 questions) :
1. Quelles tâches peut-on automatiser avec l'IA ?
2. Combien coûte une automatisation IA ?
3. Est-ce que je peux modifier l'automatisation après ?
4. Ça remplace mon équipe ?
5. Combien de temps pour voir les gains ?
6. Et si ça plante un jour ?

---

### `/ia/rag-base-connaissances/`

**Mot-clé** : "RAG base de connaissances IA" · **Budget** : à partir de 3 900 €

**H1** : "RAG & base de connaissances IA — Une IA qui connaît vraiment votre entreprise"

**Lead** : "Imaginez une IA qui a lu tous vos documents internes, toutes vos fiches produits, tous vos process. Qui peut répondre à n'importe quelle question de vos équipes ou de vos clients, avec les bonnes sources à l'appui. C'est le RAG. Et c'est faisable, maintenant."

**Angle éditorial** (1500 mots) — Titre : "Le RAG expliqué : votre entreprise, disponible 24h/24 via une IA"

Sous-sections :
1. "RAG, c'est quoi en vrai (avec une analogie simple)"
2. "Les cas d'usage concrets : support, onboarding, commercial"
3. "Ma méthode pour construire une base de connaissances qui marche"
4. "Sécurité et confidentialité : comment vos données restent à vous"

**FAQ** (6 questions) :
1. Qu'est-ce qu'un système RAG ?
2. Combien ça coûte à mettre en place ?
3. Quels formats de documents peuvent être ingérés ?
4. Comment mettre à jour la base de connaissances ?
5. L'IA peut-elle mentir ou inventer ?
6. Mes données sensibles sont-elles protégées ?

---

### `/ia/ia-generative-ecommerce/`

**Mot-clé** : "IA générative e-commerce" · **Budget** : à partir de 3 500 €

**H1** : "IA générative pour e-commerce — Boostez vos conversions"

**Lead** : "Dans l'e-commerce, l'IA générative, c'est concret : des descriptions produits qui convertissent, un assistant shopping qui aide à choisir, des recommandations vraiment personnalisées, un support client instantané. Je déploie tout ça sur votre boutique."

**Angle éditorial** (1500 mots) — Titre : "L'IA générative dans l'e-commerce : les leviers qui rapportent vraiment"

Sous-sections :
1. "Les 6 usages IA les plus rentables pour un e-commerce"
2. "Descriptions produits : x10 la vitesse, x2 le taux de conversion"
3. "Assistant shopping : le nouveau vendeur qui travaille 24h/24"
4. "Personnalisation : au-delà des bandeaux 'vous aimerez aussi'"

**FAQ** (7 questions) :
1. Quels sont les effets mesurables de l'IA sur l'e-commerce ?
2. Combien coûte une intégration IA sur ma boutique ?
3. Ça marche avec Shopify, WooCommerce, Prestashop ?
4. L'IA peut-elle écrire mes fiches produits ?
5. Comment éviter qu'elle raconte n'importe quoi ?
6. Est-ce que c'est bien pour le SEO ?
7. Par quel usage commencer en priorité ?

---

# 🔍 SILO 3 — SEO & GEO

## Page pilier `/seo/`

**Mot-clé principal** : "freelance SEO et GEO"
**Volume** : fort · **Concurrence** : forte (mais GEO = peu de concurrence)
**Budget à mentionner** : à partir de 1 900 €

### Metadata

```typescript
export const metadata: Metadata = {
  title: "Freelance SEO & GEO — Référencement Google et IA | Clickdev",
  description: "Je travaille votre référencement sur Google ET sur les IA (ChatGPT, Claude, Perplexity). Audit, optimisation, rédaction, netlinking. Freelance dès 1 900 €.",
  keywords: ["freelance SEO", "freelance GEO", "référencement naturel", "audit SEO", "optimisation Google", "visibilité ChatGPT", "référencement IA"],
  alternates: { canonical: "https://clickdev.fr/seo" },
};
```

### Hero

- Eyebrow : "CHAPITRE 04 · SEO & GEO"
- Sous-eyebrow : "DÉVELOPPEUR FREELANCE — RÉFÉRENCEMENT GOOGLE & IA"
- H1 : "Référencement Google et IA (GEO) sur mesure"
- Lead : "Aujourd'hui, vos clients vous cherchent sur Google, mais aussi sur ChatGPT, Claude, Perplexity. Le SEO traditionnel ne suffit plus : il faut aussi être visible dans les réponses des IA. Je travaille les deux, en même temps, avec cohérence."

### Bloc "Ce que je fais concrètement"

1. **J'audite votre site pour voir ce qui cloche** — Performance, structure, contenu, backlinks : je regarde tout et je vous sors un plan d'action priorisé.
2. **Je corrige les problèmes techniques** — Vitesse, balises, URL, sitemap, données structurées : je mets votre site aux standards Google actuels.
3. **J'écris des contenus qui cartonnent sur Google et les IA** — Articles optimisés, pages produits, descriptions : tout est pensé pour ranker et convertir.
4. **Je vous rends visible dans ChatGPT et Claude (GEO)** — La nouvelle frontière du SEO. Peu de freelances en parlent, moi si.

### Angle éditorial (1800-2000 mots)

**Titre** : "SEO et GEO en 2026 : comment être trouvé sur Google ET dans les IA"

Sous-sections H3 :

1. **"Le SEO n'est pas mort, mais il a changé de visage"**
   Expliquer que beaucoup disent "le SEO est mort", qu'en réalité il évolue. Les AI Overviews de Google, les réponses de ChatGPT changent le jeu. Mots-clés : "évolution SEO 2026", "AI Overviews Google".

2. **"GEO (Generative Engine Optimization) : la nouvelle compétence indispensable"**
   Qu'est-ce que le GEO ? Pourquoi c'est déjà critique ? Comment apparaître quand quelqu'un demande à ChatGPT "quel freelance choisir pour mon site" ? Mots-clés : "GEO definition", "generative engine optimization", "visibilité IA".

3. **"Les 7 piliers du SEO moderne (et ce qui a vraiment changé)"**
   Performance, contenu, structure, maillage, backlinks, EEAT, intention de recherche. Expliquer ce que Google valorise en 2026. Mots-clés : "piliers SEO 2026", "facteurs de classement Google".

4. **"Comment optimiser votre site pour ChatGPT, Claude et Perplexity"**
   Techniques concrètes du GEO : TL;DR en tête, format Q&A, citations de sources, schémas structurés, llms.txt. Mots-clés : "optimiser site ChatGPT", "apparaître Perplexity".

5. **"Combien de temps avant de voir des résultats SEO (la vérité)"**
   Casser le mythe du SEO qui marche en 1 mois. Expliquer les vrais délais (3-6 mois minimum pour voir quelque chose, 12-24 mois pour vraiment ranker). Mots-clés : "délais résultats SEO", "patience référencement".

6. **"Agence SEO, consultant, freelance : pourquoi choisir un freelance développeur"**
   Mon positionnement : je suis dev ET SEO, donc j'implémente moi-même ce que d'autres doivent déléguer. Gain de temps, de budget, de cohérence. Lien vers `/a-propos/`.

### Pour qui c'est fait

- **PME et TPE** : "Sortir du fond des résultats Google et commencer à générer du trafic qualifié sans budget AdWords."
- **E-commerces** : "Le SEO e-commerce a ses spécificités : catalogues, facettes, structured data. Je maîtrise."
- **SaaS et startups** : "Bâtir votre stratégie SEO dès le départ pour capter un trafic qui vous suivra pendant des années."
- **Sites qui ont chuté** : "Votre trafic Google s'est effondré après une mise à jour ? Je diagnostique et je remets votre site sur les rails."

### FAQ

1. Combien coûte une prestation SEO freelance ?
2. Combien de temps avant de voir les premiers résultats ?
3. Vous garantissez la première page Google ?
4. Qu'est-ce que le GEO exactement ?
5. Vous travaillez sur quels CMS ?
6. Faites-vous aussi de la rédaction SEO ?
7. Comment se passe un audit SEO ?
8. Qu'est-ce qu'un backlink de qualité ?

### Stack & outils

Ahrefs, SEMrush, Google Search Console, Google Analytics, Screaming Frog, Schema.org, Lighthouse, Next.js, WordPress, Plausible.

---

## Pages filles du silo SEO

### `/seo/audit-seo/`

**Mot-clé** : "audit SEO gratuit" · **Budget** : à partir de 900 €

**H1** : "Audit SEO — La radiographie complète de votre site"

**Lead** : "Avant de foncer tête baissée dans une stratégie SEO, il faut savoir où vous en êtes. Je passe votre site au peigne fin — technique, contenu, backlinks, concurrents — et je vous livre un plan d'action clair, priorisé, chiffré."

**Angle éditorial** (1500 mots) — Titre : "L'audit SEO expliqué : ce que je regarde vraiment dans votre site"

Sous-sections :
1. "Les 5 axes d'un audit SEO complet et sérieux"
2. "Les erreurs techniques qu'on retrouve dans 80% des sites"
3. "Ce qu'un audit sert vraiment à faire (et ce qu'il ne fait pas)"
4. "Mon livrable : un plan d'action que votre dev peut exécuter"

**FAQ** (6 questions) :
1. Combien coûte un audit SEO complet ?
2. Combien de temps prend un audit ?
3. Vous faites les corrections après ou juste le diagnostic ?
4. Est-ce que je reçois un document ?
5. Avec quels outils auditez-vous ?
6. Pour un site de plusieurs milliers de pages ?

---

### `/seo/seo-technique/`

**Mot-clé** : "SEO technique Next.js" · **Budget** : à partir de 1 500 €

**H1** : "SEO technique — Les fondations invisibles de votre référencement"

**Lead** : "Vous pouvez écrire le meilleur contenu du monde, si votre site technique est bancal, Google ne vous ranquera jamais. Core Web Vitals, indexation, données structurées, maillage : je m'occupe de toutes les fondations techniques de votre SEO."

**Angle éditorial** (1500 mots) — Titre : "Le SEO technique, la face cachée (et critique) du référencement"

Sous-sections :
1. "Core Web Vitals : les critères Google qui comptent vraiment"
2. "Indexation : pourquoi 30% des pages ne sont jamais vues par Google"
3. "Données structurées : le langage que Google et les IA adorent"
4. "Migration SEO : comment ne pas perdre votre trafic en refondant"

**FAQ** (6 questions) :
1. Qu'est-ce que le SEO technique exactement ?
2. Combien coûte une optimisation SEO technique ?
3. Core Web Vitals : c'est quoi concrètement ?
4. Mon site WordPress peut-il être optimisé ?
5. Les données structurées c'est vraiment utile ?
6. Combien de temps pour voir les effets ?

---

### `/seo/seo-local/`

**Mot-clé** : "SEO local référencement" · **Budget** : à partir de 1 500 €

**H1** : "SEO local — Dominez la recherche dans votre ville"

**Lead** : "Un restaurant, un artisan, un commerce, une profession libérale : vos clients vous cherchent à côté de chez eux. Le SEO local vous fait apparaître dans les premiers résultats quand on cherche un service près de vous. Je m'occupe de tout."

**Angle éditorial** (1500 mots) — Titre : "SEO local : la meilleure source de clients pour les activités de proximité"

Sous-sections :
1. "Comment Google décide qui apparaît dans les résultats locaux"
2. "Google Business Profile : la base incontournable"
3. "Les avis clients, le nerf de la guerre du SEO local"
4. "Citations locales et netlinking géographique"

**FAQ** (6 questions) :
1. C'est quoi le SEO local exactement ?
2. Combien ça coûte pour une activité locale ?
3. Comment être dans les 3 premiers de Google Maps ?
4. Les avis négatifs, comment les gérer ?
5. Faut-il un site ou Google Business suffit ?
6. Combien de temps pour voir des résultats ?

---

### `/seo/seo-ecommerce/`

**Mot-clé** : "SEO e-commerce" · **Budget** : à partir de 2 500 €

**H1** : "SEO e-commerce — Transformer Google en commercial 24/7"

**Lead** : "Un e-commerce mal référencé, c'est des ventes qui partent chez vos concurrents. Le SEO e-commerce a ses spécificités : fiches produits, pages catégories, facettes, duplications. Je maîtrise tout ça, sur Shopify, WooCommerce, Prestashop et sur mesure."

**Angle éditorial** (1500 mots) — Titre : "SEO e-commerce : les spécificités qui font toute la différence"

Sous-sections :
1. "Les erreurs SEO qu'on retrouve dans 90% des e-commerces"
2. "Fiches produits : la mine d'or sous-exploitée"
3. "Pages catégories et facettes : le défi du duplicate content"
4. "Rich snippets produits : comment se démarquer dans les résultats"

**FAQ** (7 questions) :
1. Combien coûte le SEO pour un e-commerce ?
2. Shopify, WooCommerce : les différences SEO ?
3. Comment optimiser des centaines de fiches produits ?
4. Les avis clients, ça aide vraiment le SEO ?
5. Les pages catégories, c'est important ?
6. Comment gérer les produits en rupture ?
7. Le SEO fonctionne-t-il sur les marketplaces ?

---

### `/seo/migration-seo/`

**Mot-clé** : "migration SEO refonte" · **Budget** : à partir de 1 500 €

**H1** : "Migration SEO — Refaire votre site sans perdre votre trafic"

**Lead** : "Refondre son site sans anticiper le SEO, c'est le moyen le plus rapide de tuer 5 ans de travail de référencement. Je gère les migrations SEO pour que vous gardiez votre trafic, vos positions, votre autorité — et que vous en gagniez encore."

**Angle éditorial** (1300 mots) — Titre : "Migration SEO : le guide pour ne pas perdre votre trafic (et en gagner)"

Sous-sections :
1. "Pourquoi 70% des refontes font chuter le trafic SEO"
2. "Les 8 étapes d'une migration SEO réussie"
3. "Redirections 301 : la mécanique qui sauve votre référencement"
4. "Monitoring post-migration : les premières semaines critiques"

**FAQ** (6 questions) :
1. Combien coûte une migration SEO ?
2. Quand intervenir dans un projet de refonte ?
3. Combien de temps pour récupérer les positions ?
4. Que se passe-t-il en cas de changement de domaine ?
5. Faut-il garder les anciennes URLs ?
6. Comment mesurer le succès d'une migration ?

---

### `/seo/redaction-seo/`

**Mot-clé** : "rédaction SEO freelance" · **Budget** : à partir de 900 €

**H1** : "Rédaction SEO — Des contenus qui rankent ET qui convertissent"

**Lead** : "Écrire pour Google, c'est un art. Écrire pour Google ET pour vos lecteurs, c'est plus rare. Je rédige des articles, pages produits, guides et contenus qui cartonnent à la fois sur Google et sur les IA — tout en donnant vraiment envie de lire."

**Angle éditorial** (1300 mots) — Titre : "La rédaction SEO moderne : pour Google, pour les IA, pour vos lecteurs"

Sous-sections :
1. "Pourquoi 'bourrage de mots-clés' est l'erreur la plus courante"
2. "Les clusters sémantiques : la nouvelle façon de dominer un sujet"
3. "Structure E-E-A-T : comment Google juge l'autorité d'un texte"
4. "Adapter sa rédaction pour les IA génératives"

**FAQ** (6 questions) :
1. Combien coûte un article SEO ?
2. Combien de mots pour bien ranker ?
3. Vous utilisez l'IA pour écrire ?
4. Quel est votre process de rédaction ?
5. Vous rédigez aussi pour les e-commerces ?
6. Faites-vous les images aussi ?

---

### `/seo/netlinking/`

**Mot-clé** : "stratégie netlinking" · **Budget** : à partir de 1 900 €

**H1** : "Netlinking — Les backlinks qui font vraiment grimper vos positions"

**Lead** : "Un bon site sans backlinks, c'est comme un commerce sans enseigne : invisible. Le netlinking reste l'un des 3 facteurs de classement Google les plus importants. Je bâtis votre profil de liens avec des backlinks de qualité, acquis proprement."

**Angle éditorial** (1300 mots) — Titre : "Le netlinking en 2026 : moins de liens, beaucoup plus qualitatifs"

Sous-sections :
1. "Backlink de qualité : les 6 critères qui comptent"
2. "Comment Google détecte les liens artificiels"
3. "Les stratégies de netlinking qui marchent encore en 2026"
4. "Budget netlinking : combien investir vraiment"

**FAQ** (6 questions) :
1. C'est quoi un bon backlink ?
2. Combien coûte une stratégie netlinking ?
3. Combien de liens par mois ?
4. L'achat de liens est-il risqué ?
5. Quels résultats attendre ?
6. Comment mesurer la qualité d'un lien ?

---

### `/seo/geo-generative-engine-optimization/`

**Mot-clé** : "GEO generative engine optimization" · **Budget** : à partir de 2 900 €

**H1** : "GEO — Soyez recommandé par ChatGPT, Claude et Perplexity"

**Lead** : "Vos clients ne font plus que des recherches Google. Ils demandent à ChatGPT, Claude ou Perplexity. Si vous n'êtes pas dans ces réponses, vous disparaissez. Le GEO (Generative Engine Optimization) est la nouvelle compétence clé. Et je suis l'un des rares freelances français à la maîtriser."

**Angle éditorial** (2000 mots) — Titre : "Le GEO expliqué : la nouvelle frontière du référencement"

Sous-sections :
1. "GEO ≠ SEO : les différences fondamentales"
2. "Comment les IA choisissent leurs sources (ce qu'on sait vraiment)"
3. "Les 10 leviers concrets pour apparaître dans ChatGPT et Claude"
4. "llms.txt : le nouveau fichier standard à connaître"
5. "Mesurer sa visibilité GEO : outils et méthodes actuelles"

**FAQ** (7 questions) :
1. C'est quoi le GEO exactement ?
2. Combien coûte une prestation GEO ?
3. Quelle différence avec le SEO classique ?
4. Combien de temps pour voir des résultats ?
5. Comment mesurer ma visibilité sur ChatGPT ?
6. Est-ce que le SEO traditionnel suffit vraiment plus ?
7. Mon petit site peut-il rivaliser avec les gros ?

---

# 🧰 SILO 4 — CRM & OUTILS MÉTIERS

## Page pilier `/crm-outils-metiers/`

**Mot-clé principal** : "CRM sur mesure freelance"
**Volume** : moyen · **Concurrence** : moyenne
**Budget à mentionner** : à partir de 4 900 €

### Metadata

```typescript
export const metadata: Metadata = {
  title: "CRM sur mesure & outils métiers — Freelance | Clickdev",
  description: "Développement de CRM sur mesure, outils internes, automatisations et intégrations par un freelance expérimenté. Dès 4 900 €. Devis gratuit.",
  keywords: ["CRM sur mesure", "outils métiers", "CRM freelance", "développement outil interne", "automatisation entreprise"],
  alternates: { canonical: "https://clickdev.fr/crm-outils-metiers" },
};
```

### Hero

- Eyebrow : "CHAPITRE 05 · CRM & OUTILS MÉTIERS"
- Sous-eyebrow : "DÉVELOPPEUR FREELANCE — OUTILS INTERNES SUR MESURE"
- H1 : "CRM sur mesure et outils métiers pour votre activité"
- Lead : "HubSpot, Salesforce ou Excel ne répondent pas vraiment à votre manière de travailler ? C'est normal. Je développe des CRM et outils internes sur mesure, pensés pour VOS process, VOS équipes, VOS clients. Et qui leur simplifient vraiment la vie."

### Bloc "Ce que je fais concrètement"

1. **Je code votre CRM exactement comme vous le voulez** — Champs personnalisés, pipelines adaptés à votre cycle de vente, automatisations spécifiques. Rien d'imposé.
2. **Je développe vos outils métiers internes** — Application de gestion, tableau de bord, outil de suivi de production : tout ce qui peut remplacer vos fichiers Excel qui débordent.
3. **J'automatise les tâches qui vous font perdre du temps** — Saisie, relances, extractions, rapports : je trouve les zones de friction et je les efface.
4. **Je connecte vos outils entre eux** — Votre CRM doit parler avec votre comptabilité, votre facturation, votre mail ? Je fais en sorte que tout communique.

### Angle éditorial (1800 mots)

**Titre** : "Outils sur mesure vs solutions du marché : quand ça vaut vraiment le coup"

Sous-sections H3 :

1. **"Pourquoi HubSpot, Salesforce et compagnie ne conviennent pas à tout le monde"**
   Coût mensuel qui grimpe, fonctionnalités qu'on paie sans utiliser, adaptation forcée à leurs logiques. Mots-clés : "alternative HubSpot", "CRM sur mesure vs Salesforce".

2. **"Les 5 signes qu'il est temps de passer sur du sur mesure"**
   Beaucoup de champs custom, équipe qui contourne l'outil, coûts d'abonnement explosifs, fichiers Excel parallèles, intégrations limitées. Mots-clés : "quand passer au CRM sur mesure", "limites CRM SaaS".

3. **"Outil métier, CRM interne, ERP maison : de quoi parle-t-on"**
   Clarifier le vocabulaire. Expliquer les différences entre ces catégories et donner des exemples concrets. Mots-clés : "outil métier entreprise", "différence CRM ERP".

4. **"L'adoption par les équipes : la vraie clé du succès"**
   Le plus beau des outils ne sert à rien si personne ne l'utilise. Impliquer les futurs utilisateurs dès la conception, soigner l'UX, faire des formations. Mots-clés : "adoption logiciel entreprise", "conduite du changement IT".

5. **"Combien ça coûte un CRM sur mesure vs un abonnement"**
   Comparer le vrai coût sur 3-5 ans. Expliquer pourquoi le sur mesure devient vite rentable pour les équipes de plus de 5 personnes. Mots-clés : "coût CRM sur mesure", "ROI outil interne".

6. **"Ma méthode : du poste de travail au tableau de bord global"**
   Approche en sprints, MVP, itérations. Lien vers `/ia/automatisation-ia/` pour compléter.

### Pour qui c'est fait

- **PME qui ont grandi** : "Vos process ne rentrent plus dans des outils génériques ? Le sur mesure vous fait gagner des heures chaque semaine."
- **Équipes commerciales** : "Un CRM pensé pour VOTRE cycle de vente, VOS critères, VOTRE façon de travailler. Adoption garantie."
- **Agences et cabinets** : "Gestion de projets, facturation, suivi de temps, portfolio clients : tout dans un seul outil sur mesure."
- **Activités avec des règles complexes** : "Immobilier, assurance, santé, BTP : métiers avec des règles spécifiques qu'aucun outil standard ne gère bien."

### FAQ

1. Quelle différence entre un CRM sur mesure et HubSpot/Salesforce ?
2. Combien coûte un CRM sur mesure ?
3. Combien de temps pour développer un CRM ?
4. Peut-on migrer depuis notre CRM actuel ?
5. Mes données seront-elles en sécurité ?
6. Et pour la maintenance sur le long terme ?
7. On peut commencer petit et enrichir ?
8. Comment gérer l'adoption par les équipes ?

### Stack

Next.js, Laravel, Node.js, PostgreSQL, Supabase, Prisma, Auth.js, n8n, Make, Zapier, API REST et GraphQL.

---

## Pages filles du silo CRM & outils métiers

### `/crm-outils-metiers/crm-sur-mesure/`

**Mot-clé** : "développement CRM sur mesure" · **Budget** : à partir de 4 900 €

**H1** : "Développement de CRM sur mesure pour votre activité"

**Lead** : "Un CRM qui colle parfaitement à votre façon de vendre, vos critères, vos pipelines. Pas un outil où vous vous adaptez, mais un outil qui s'adapte à vous. C'est ce que je développe pour les équipes qui veulent enfin avoir un outil qu'elles adorent."

**Angle éditorial** (1500 mots) — Titre : "Le CRM sur mesure : quand et pourquoi faire ce choix"

Sous-sections :
1. "Les 7 situations où un CRM sur mesure s'impose"
2. "Ce qu'un CRM sur mesure peut faire que les autres ne font pas"
3. "Le vrai coût à long terme : comparaison sur 5 ans"
4. "De la maquette au déploiement : ma méthode"

**FAQ** (7 questions) :
1. Combien coûte un CRM développé sur mesure ?
2. Combien de temps pour le mettre en place ?
3. Peut-on récupérer nos données actuelles ?
4. C'est hébergé où ? Nos données vous appartiennent ?
5. Que se passe-t-il si on a besoin d'évolutions ?
6. On peut connecter nos autres outils ?
7. Combien d'utilisateurs peuvent l'utiliser ?

---

### `/crm-outils-metiers/integration-crm/`

**Mot-clé** : "intégration CRM freelance" · **Budget** : à partir de 1 900 €

**H1** : "Intégration CRM — Connectez tous vos outils"

**Lead** : "Votre CRM doit parler avec votre comptabilité, votre facturation, votre marketing, votre site web. Sans connexions propres, vos équipes ressaisissent les mêmes données 10 fois par jour. J'intègre votre CRM avec tout votre écosystème."

**Angle éditorial** (1300 mots) — Titre : "Intégrer son CRM : les bonnes pratiques pour éviter le bazar"

Sous-sections :
1. "Les 5 intégrations CRM qui sauvent vraiment du temps"
2. "API, webhooks, synchronisation : j'explique les bases"
3. "Les pièges classiques des intégrations CRM"
4. "Outils middleware : Zapier, Make, n8n, les différences"

**FAQ** (6 questions) :
1. Combien coûte une intégration CRM ?
2. Quels CRM savez-vous intégrer ?
3. Combien de temps pour une intégration ?
4. Et si un outil change son API ?
5. Peut-on tout synchroniser en temps réel ?
6. Comment se passe la maintenance ?

---

### `/crm-outils-metiers/automatisation/`

**Mot-clé** : "automatisation entreprise" · **Budget** : à partir de 1 500 €

**H1** : "Automatisation — Récupérez des heures chaque semaine"

**Lead** : "Combien d'heures par semaine votre équipe passe-t-elle sur des tâches répétitives ? Copier des données d'un outil à l'autre, envoyer des mails récurrents, créer des rapports. Je construis des automatisations qui font tout ça toutes seules, pendant que vous faites autre chose."

**Angle éditorial** (1300 mots) — Titre : "Automatiser son entreprise en 2026 : par où commencer"

Sous-sections :
1. "Les 12 tâches les plus faciles à automatiser (et rentables)"
2. "Make, n8n, Zapier : lequel choisir pour quoi"
3. "Combien de temps peut-on vraiment récupérer"
4. "Ma méthode pour identifier les tâches à automatiser en priorité"

**FAQ** (6 questions) :
1. Combien coûte une automatisation ?
2. Quelles tâches puis-je automatiser ?
3. C'est compliqué à maintenir ?
4. Et si un outil change ses règles ?
5. Mes équipes peuvent-elles modifier les automatisations ?
6. Combien de temps pour voir le retour sur investissement ?

---

# 🔍 SEO technique standard — À appliquer sur CHAQUE page

### Metadata (obligatoire)
- Title unique (50-60 car, mot-clé principal)
- Description unique (150-160 car, avec CTA)
- Canonical URL
- Open Graph complet + image OG unique (1200x630)
- Twitter Card (summary_large_image)
- Robots : index, follow

### Schema.org (via @graph, obligatoire)
- Service (spécifique à la page)
- BreadcrumbList (3 niveaux)
- FAQPage (reprenant les Q/R de la page)

### Structure HTML
- UN SEUL H1 par page
- Hiérarchie H2 → H3 propre
- Fil d'Ariane visible + schema

### Images
- next/image systématique
- Alt text descriptif unique
- AVIF/WebP
- Lazy loading sauf hero

### Maillage interne (15+ liens par page)
- Retour vers la page pilier du silo
- Liens vers les autres pages filles du même silo
- Liens vers les silos connexes
- Liens vers études de cas pertinentes
- Liens vers articles de blog

### Performance (Lighthouse)
- Performance : ≥ 95
- SEO : 100
- Accessibility : ≥ 95
- Best Practices : ≥ 95

---

# 💰 Récapitulatif complet des prix

| Silo | Page | Prix |
|---|---|---|
| **Applications mobiles** | Pilier | 4 900 € |
| | iOS | 4 500 € |
| | Android | 4 500 € |
| | React Native | 4 900 € |
| | PWA | 2 900 € |
| **IA** | Pilier | 3 500 € |
| | Intégration IA | 3 500 € |
| | Chatbot IA | 2 900 € |
| | Agents IA | 4 500 € |
| | Automatisation IA | 2 500 € |
| | RAG & base connaissances | 3 900 € |
| | IA générative e-commerce | 3 500 € |
| **SEO & GEO** | Pilier | 1 900 € |
| | Audit SEO | 900 € |
| | SEO technique | 1 500 € |
| | SEO local | 1 500 € |
| | SEO e-commerce | 2 500 € |
| | Migration SEO | 1 500 € |
| | Rédaction SEO | 900 € |
| | Netlinking | 1 900 € |
| | GEO | 2 900 € |
| **CRM & outils métiers** | Pilier | 4 900 € |
| | CRM sur mesure | 4 900 € |
| | Intégration CRM | 1 900 € |
| | Automatisation | 1 500 € |

**Tous les prix restent sous 4 900 €.** Les gros projets se discutent en devis personnalisé.

---

# ⚡ Instructions d'exécution pour Cursor

## Mode autonome — FAIRE TOUT D'UN COUP

Tu as carte blanche pour créer **TOUTES les pages des 4 silos en une seule session**. Tu n'as PAS besoin de demander de validation entre chaque étape ni entre chaque page.

### Ordre d'exécution

1. **Silo IA d'abord** (prioritaire — peu de concurrence, forte demande)
   - Pilier `/ia/`
   - 6 pages filles
   
2. **Silo SEO & GEO ensuite** (différenciation forte avec le GEO)
   - Pilier `/seo/`
   - 8 pages filles
   
3. **Silo Applications mobiles** (volume élevé)
   - Pilier `/applications-mobiles/`
   - 4 pages filles
   
4. **Silo CRM & outils métiers** (B2B qualifié)
   - Pilier `/crm-outils-metiers/`
   - 3 pages filles

### Pour chaque page — enchaîner automatiquement

1. Rédaction complète du contenu (selon les briefs détaillés ci-dessus)
2. Création de la page avec les composants RÉUTILISÉS de `/sites-internet/`
3. Implémentation SEO complète (metadata, schemas, liens internes)
4. Vérification visuelle que rien n'a été modifié au design existant

### À la fin SEULEMENT

Présente-moi un récapitulatif complet :
- Liste des URLs créées
- Scores Lighthouse de chaque page (si possible)
- Points d'attention éventuels
- Questions de fond qui nécessitent vraiment mon avis

### Règles non négociables

- ✅ Design identique aux pages existantes (SI UN DOUTE, NE PAS TOUCHER)
- ✅ Ton à la première personne (je, mon, ma, mes)
- ✅ Accessibilité à un non-tech (test du commerçant de 55 ans)
- ✅ Longueur minimum respectée (2500-3000 mots pour piliers, 1500-2000 pour filles)
- ✅ SEO rigoureux sur chaque page
- ✅ Prix affichés sous 4 900 €
- ✅ Zéro corporate speak ("solutions", "expertise", "innovant" → interdits)

### Si tu hésites

En cas de doute sur un point précis, tu prends la décision la plus **raisonnable et prudente**, tu la notes dans ton récap final, et tu continues. Ne bloque pas sur des détails.

---

*Document de référence — à lire en complément de `brief-clickdev.md` et `brief-pages-filles-sites-internet.md`*

**Instruction finale : tu peux commencer maintenant. Travaille de manière autonome jusqu'à ce que tous les silos soient livrés.**
