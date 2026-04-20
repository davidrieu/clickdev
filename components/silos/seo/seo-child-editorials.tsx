import Link from 'next/link';
import type { ReactNode } from 'react';

import type { SeoPremiumSlug } from '@/lib/constants/seo-premium-children';

function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
      {children}
    </p>
  );
}

function S({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-base leading-[1.75] text-white/70">{children}</p>;
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
      {children}
    </h3>
  );
}

function Q({ children }: { children: ReactNode }) {
  return (
    <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
      {children}
    </blockquote>
  );
}

export const SEO_CHILD_EDITORIALS: Record<SeoPremiumSlug, ReactNode> = {
  'audit-seo': (
    <>
      <P>
        Un <strong className="font-medium text-white/90">audit SEO</strong>, ce n’est pas un classeur de 120 pages que
        personne ne lira : c’est surtout éviter de payer une refonte graphique complète alors que trois corrections
        techniques — ou une dizaine de titres mal rédigés — expliquent déjà une partie de vos galères sur Google.
      </P>
      <S>
        J’ai vu des photographes refaire un portfolio magnifique en oubliant les titres de page : le site était beau, les
        visites organiques plates. L’audit sert à remettre ce genre de point au bon endroit de la liste de priorités,
        avec un ordre qui tient compte de votre calendrier et de votre budget.
      </S>
      <S>
        Quand vous avez fini la lecture, vous devez savoir quoi faire en premier, ce qui peut attendre, et ce qui relève
        plutôt du contenu, du technique ou des deux.{' '}
        <Link href="/seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Retour à SEO
        </Link>
        .
      </S>
      <H3>Ce que je regarde en priorité (sans jargon inutile)</H3>
      <S>
        Crawl et indexation : est-ce que Google voit les bonnes URLs, sans doublons absurdes ni chaînes de redirections
        interminables ? Contenu : est-ce que vos pages répondent à une intention claire avec un titre honnête ? Perf
        mobile : est-ce qu’un client pressé peut lire et cliquer sans rage-quit ? Je croise ça avec ce que vous vendez
        vraiment — parce qu’un bon positionnement sur un mot-clé qui ne ramène aucun lead ne sert à rien.
      </S>
      <Q>« Un audit utile, c’est une liste courte qu’on peut défendre devant un humain — pas un PDF décoratif. »</Q>
      <S>
        Si vous avez déjà un site neuf ou une refonte en cours, je regarde aussi la cohérence avec le{' '}
        <Link href="/seo/migration-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          plan de migration
        </Link>{' '}
        : une belle maquette ne vaut rien si les anciennes adresses perdent le fil du jus. Côté boutique, le{' '}
        <Link href="/seo/seo-ecommerce" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO e-commerce
        </Link>{' '}
        a ses pièges (filtres, variantes) que je signale tôt.
      </S>
      <S>
        Pour la suite opérationnelle, on peut enchaîner sur du{' '}
        <Link href="/seo/seo-technique" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO technique
        </Link>{' '}
        ou de la{' '}
        <Link href="/seo/redaction-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          rédaction
        </Link>{' '}
        selon ce qui bloque le plus. J’écris aussi sur le sujet sur le{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>
        ; les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>{' '}
        montrent le type de sites que j’accompagne. Un{' '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          devis
        </Link>{' '}
        ou un simple{' '}
        <Link href="/contact" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          message
        </Link>{' '}
        suffit pour partir de votre URL.
      </S>
    </>
  ),
  'seo-technique': (
    <>
      <P>
        Le <strong className="font-medium text-white/90">SEO technique</strong>, c’est ce que vos visiteurs ressentent
        avant même de lire une ligne : la page s’ouvre, ou ils partent. C’est aussi ce que Google voit quand il essaie
        d’indexer des milliers d’URLs : s’il tombe sur des doublons, des erreurs ou des chaînes de redirections
        absurdes, il finit par se lasser.
      </P>
      <S>
        Exemple fréquent : une boutique avec des filtres qui génèrent des adresses en double par dizaines de
        milliers. Le catalogue paraît riche ; en réalité le moteur dilue le signal. Parfois une poignée de règles bien
        placées change complètement la donne.
      </S>
      <S>
        Si vous hésitez par où commencer, un{' '}
        <Link href="/seo/audit-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          audit
        </Link>{' '}
        aide à prioriser avant de toucher au code partout.
      </S>
      <H3>Core Web Vitals : le ressenti mobile compte autant que le score</H3>
      <S>
        Je ne “chasse le vert Lighthouse” pour faire joli sur un slide : je regarde surtout si vos pages critiques
        (fiche produit, prise de rendez-vous, formulaire de contact) restent utilisables sur un réseau moyen. Souvent le
        gain vient d’images mieux servies, de polices chargées sans surprise, ou d’un JavaScript qui ne bloque pas le
        rendu pour trois widgets dont personne ne se sert.
      </S>
      <Q>« Le meilleur contenu du monde ne sauve pas une page qui met six secondes à devenir cliquable. »</Q>
      <S>
        Les gabarits que je livre côté{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          sites internet
        </Link>{' '}
        (Next.js, WordPress selon le projet) intègrent ces contraintes dès la maquette. Quand le site est déjà en ligne,
        je documente les changements pour votre hébergeur ou votre équipe — pas de boîte noire. Pour le maillage et les
        titres, le{' '}
        <Link href="/seo/redaction-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          texte
        </Link>{' '}
        et le technique tirent dans la même direction.
      </S>
      <S>
        Si vous préparez une refonte, je synchronise avec le{' '}
        <Link href="/seo/migration-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          volet migration
        </Link>
        . Des exemples de contextes variés sont sur les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          études de cas
        </Link>
        ; pour creuser la méthode, le{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>{' '}
        complète.{' '}
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          À propos
        </Link>{' '}
        si vous voulez savoir comment je travaille au quotidien.
      </S>
    </>
  ),
  'seo-local': (
    <>
      <P>
        Le <strong className="font-medium text-white/90">référencement local</strong>, c’est le plombier qui veut être
        appelé à 22 h dans un quartier précis — pas être numéro un sur une requête nationale vague qui ne ramène aucun
        client. C’est aussi le restaurant dont le menu sur mobile est illisible alors que la fiche Google affiche
        encore l’ancien horaire d’été.
      </P>
      <S>
        J’ai déjà vu deux salons avec des noms proches et le même téléphone mal renseigné à droite à gauche : Google
        hésite, les avis se dispersent, les clients finissent chez le concurrent. Le site vitrine et la fiche Maps
        doivent raconter la même histoire — adresse, zone desservie, services — sans copier-coller paresseux.
      </S>
      <S>
        Si vous refondez le site en parallèle, gardez un œil sur la cohérence avec votre{' '}
        <Link href="/sites-internet/site-vitrine" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          vitrine en ligne
        </Link>
        .
      </S>
      <H3>Google Business Profile : la vitrine gratuite qu’il faut entretenir comme un vrai canal</H3>
      <S>
        Catégories, horaires, photos récentes, questions-réponses : tout ça envoie des signaux de fraîcheur. Je vous
        aide à aligner le site (pages ville + service) avec la fiche, pour que le client qui compare trois artisans
        comprenne en dix secondes pourquoi vous — sans sur-promesse.
      </S>
      <S>
        Le local se marie souvent avec du{' '}
        <Link href="/seo/seo-technique" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          technique léger
        </Link>{' '}
        (mobile rapide, balises propres) et une{' '}
        <Link href="/seo/redaction-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          rédaction
        </Link>{' '}
        qui répond aux vraies questions (“intervention d’urgence”, “zone desservie”, “tarif indicatif”). Si vos
        clients posent déjà des questions aux IA, regardez aussi le{' '}
        <Link href="/seo/geo-generative-engine-optimization" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          GEO
        </Link>
        .
      </S>
      <Q>« Le local, c’est de la cohérence partout — pas trois numéros différents selon l’annuaire du jour. »</Q>
      <S>
        Besoin d’un coup d’œil global avant d’investir ? Un{' '}
        <Link href="/seo/audit-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          audit
        </Link>{' '}
        remet les priorités au clair. Sinon passez par le{' '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          devis
        </Link>{' '}
        ou le{' '}
        <Link href="/contact" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          contact
        </Link>
        . J’illustre des cas sur les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>{' '}
        et j’écris sur le{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>
        .
      </S>
    </>
  ),
  'seo-ecommerce': (
    <>
      <P>
        En <strong className="font-medium text-white/90">e-commerce</strong>, le SEO, c’est autant de la logistique
        d’URLs que de la rédaction : éviter que le client se perde entre deux variantes de la même couleur, ou que
        chaque campagne promo crée une page fantôme sans stratégie de lien interne.
      </P>
      <S>
        Période de soldes typique : si chaque bandeau “-30 %” génère une nouvelle adresse sans règle claire, vous perdez
        du “jus” de popularité sur des pages qui disparaîtront dans quinze jours. Mieux vaut des URLs stables, des
        textes utiles (tailles, délais de retour, conseils d’entretien) et des filtres tenus sous contrôle.
      </S>
      <S>
        La{' '}
        <Link href="/sites-internet/site-ecommerce" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          création de boutique en ligne
        </Link>{' '}
        et le référencement naturel vont souvent de pair : autant le prévoir dès la maquette des gabarits produit.
      </S>
      <H3>Données structurées, facettes, duplicate : le trio qui fait gagner ou perdre un catalogue</H3>
      <S>
        Je vérifie comment Google lit vos fiches produit (titres, descriptions uniques, données enrichies raisonnables)
        et comment vos filtres génèrent des URLs. Souvent, une partie du travail est pédagogique : expliquer à
        l’équipe marketing pourquoi telle campagne ne doit pas créer mille pages orphelines — et proposer une
        alternative propre.
      </S>
      <Q>« Un bon e-commerce SEO, c’est un catalogue que un humain peut parcourir sans se perdre — et Google suit. »</Q>
      <S>
        Quand vous refondez la boutique, je synchronise avec le{' '}
        <Link href="/seo/migration-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          plan de migration
        </Link>
        . Pour le texte, voir la{' '}
        <Link href="/seo/redaction-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          rédaction SEO
        </Link>
        . Le{' '}
        <Link href="/seo/audit-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          audit
        </Link>{' '}
        reste le point de départ si vous ne savez pas où ça coince. Exemples sur les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>
        , articles sur le{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>
        , ou{' '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          devis
        </Link>
        .
      </S>
    </>
  ),
  'migration-seo': (
    <>
      <P>
        Une <strong className="font-medium text-white/90">migration</strong> réussie, c’est quand vos clients ne voient
        presque rien changer — mais Google comprend où sont passées les pages, et vous ne perdez pas six mois de
        positions à cause d’URLs orphelines.
      </P>
      <S>
        Passage d’un blog hébergé chez un tiers vers votre propre domaine, refonte avec changement de structure,
        fusion de deux sites : ce sont des moments où un simple oubli de redirection 301 coûte cher. Je préfère une
        table de correspondance relue à voix haute qu’un “on verra bien le jour J”.
      </S>
      <S>
        Le travail se fait en binôme avec le déploiement technique : les règles serveur et le plan SEO doivent partir
        des mêmes hypothèses. Si vous n’êtes pas sûr de votre périmètre, repartez d’un{' '}
        <Link href="/seo/audit-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          audit
        </Link>{' '}
        avant d’ouvrir les vannes.
      </S>
      <H3>Check-list “jour J” : ce qui ne doit jamais être au hasard</H3>
      <S>
        Cartographie ancien → nouveau, tests sur un échantillon d’URLs critiques, contrôle des codes HTTP, suivi Search
        Console après bascule : ce sont des gestes simples à expliquer, mais il faut les faire sans improvisation. Sur
        un gros e-commerce, j’anticipe aussi les pages produit et catégories qui ramènent le plus de trafic.
      </S>
      <S>
        Après la migration, on consolide souvent avec du{' '}
        <Link href="/seo/seo-technique" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO technique
        </Link>{' '}
        et une passe{' '}
        <Link href="/seo/redaction-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          rédactionnelle
        </Link>{' '}
        sur les pages qui ont changé de structure. Si vous lancez une nouvelle vitrine en parallèle, le modèle{' '}
        <Link href="/sites-internet/site-vitrine" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          site vitrine
        </Link>{' '}
        aide à garder des URLs propres dès le départ.
      </S>
      <Q>« La migration, c’est 20 % de technique et 80 % de discipline de projet. »</Q>
      <S>
        Pour en discuter :{' '}
        <Link href="/contact" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          contact
        </Link>
        ,{' '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          devis
        </Link>
        . Retours d’expérience sur les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>{' '}
        et billets{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>
        .
      </S>
    </>
  ),
  'redaction-seo': (
    <>
      <P>
        La <strong className="font-medium text-white/90">rédaction</strong> orientée recherche, ce n’est pas répéter un
        mot-clé vingt fois : c’est répondre à une vraie question (“prix moyen”, “délai”, “que faire si…”) avec des
        phrases qu’un humain aurait envie de lire jusqu’au bout — et un appel à l’action qui a du sens.
      </P>
      <S>
        Cabinet dentaire, garage, coach sportif : une page par type de prestation, avec une FAQ honnête et des preuves
        (diplômes, photos de réalisations, témoignages courts), bat souvent un pavé générique généré à la chaîne. Je
        peux aussi intégrer le texte dans le site que je développe pour éviter les allers-retours Word → CMS.
      </S>
      <S>
        Si vous utilisez déjà une IA pour brouillonner, tant mieux — à condition de repasser derrière pour les faits,
        le ton et les formulations réglementées. Le cadre et la validation restent humains.
      </S>
      <H3>EEAT sans bullshit : des preuves qu’on peut vérifier</H3>
      <S>
        Qui écrit, avec quelle expérience terrain, quelles photos réelles, quels avis clients : Google et les lecteurs
        cherchent la même chose — la confiance. Je structure les pages pour que les infos importantes soient en haut,
        avec des titres qui ressemblent aux questions qu’on pose à l’oral.
      </S>
      <Q>« Un bon texte SEO, c’est celui qu’un client vous lirait à voix haute sans rougir. »</Q>
      <S>
        Le texte s’appuie sur une base technique saine : sinon vous publiez dans le vide. Je travaille main dans la main
        avec du{' '}
        <Link href="/seo/seo-technique" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO technique
        </Link>{' '}
        quand il le faut. Pour les boutiques, je coordonne avec le{' '}
        <Link href="/seo/seo-ecommerce" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO e-commerce
        </Link>
        . Des exemples sur les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>
        , le fil{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>
        , et la page{' '}
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          à propos
        </Link>{' '}
        pour le ton.
      </S>
    </>
  ),
  netlinking: (
    <>
      <P>
        Les <strong className="font-medium text-white/90">liens entrants</strong>, ce sont des recommandations : quinze
        sites pertinents qui vous citent pour une raison honnête valent mieux que mille annuaires douteux ou des achats
        au kilo qui finissent en désaveu ou pénalité.
      </P>
      <S>
        Fabricant de matériel sportif : un partenariat avec des clubs locaux, une étude chiffrée partagée par une
        presse métier, une interview où vous expliquez un vrai problème technique — voilà des angles qui attirent des
        liens naturels. Ce n’est pas du jour au lendemain, mais c’est défendable devant Google et devant vos clients.
      </S>
      <S>
        On évite les promesses “100 backlinks par mois” : la qualité et la cohérence avec votre secteur priment. Le
        netlinking se décide souvent après avoir des pages qui méritent d’être partagées.
      </S>
      <H3>Contenus “linkables” avant la chasse aux domaines</H3>
      <S>
        Si vos pages sont minces ou trompeuses, aucun site sérieux ne prendra le risque de vous citer. Je commence
        souvent par une passe{' '}
        <Link href="/seo/redaction-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          rédactionnelle
        </Link>{' '}
        ou un{' '}
        <Link href="/seo/audit-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          audit
        </Link>{' '}
        pour identifier ce qui mérite d’être promu — guide, étude, outil gratuit, comparatif honnête.
      </S>
      <Q>« Un bon lien, c’est quelqu’un qui vous recommande parce qu’il a envie — pas parce qu’il a reçu un mail robot. »</Q>
      <S>
        Le netlinking croise le{' '}
        <Link href="/seo/seo-ecommerce" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          e-commerce
        </Link>{' '}
        quand des guides produit deviennent des références. Pour le local, le{' '}
        <Link href="/seo/seo-local" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO local
        </Link>{' '}
        et des partenariats de proximité aident. Suivez le{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>
        , les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>
        , ou écrivez via{' '}
        <Link href="/contact" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          contact
        </Link>
        .
      </S>
    </>
  ),
  'geo-generative-engine-optimization': (
    <>
      <P>
        Le <strong className="font-medium text-white/90">GEO</strong> (visibilité dans les réponses des assistants),
        c’est rendre votre activité facile à résumer pour une IA sans tricher sur ce que vous faites : qui vous êtes,
        où vous intervenez, quelles preuves on peut vérifier.
      </P>
      <S>
        Association : mission, zone d’action, impact chiffré sur une page claire — ça aide autant Google que les
        modèles qui synthétisent le web. Ce n’est pas un remplacement du SEO classique : c’est une couche de plus dans
        un monde où une partie des gens pose déjà la question à un chatbot avant d’ouvrir dix onglets.
      </S>
      <S>
        Pour les projets d’assistants branchés sur vos données ou votre site, voyez aussi le volet{' '}
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          intelligence artificielle
        </Link>
        .
      </S>
      <H3>TL;DR, FAQ, sources : aider la machine à citer juste</H3>
      <S>
        Les synthèses automatiques adorent les pages qui répondent vite à la question, avec des sous-titres explicites et
        des listes claires. Je ne “game” pas le système avec du texte caché : je clarifie ce que vous faites déjà, pour
        que l’assistant puisse vous mentionner sans inventer. Ça rejoint le{' '}
        <Link href="/seo/redaction-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          travail éditorial
        </Link>{' '}
        et le{' '}
        <Link href="/seo/seo-technique" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          socle technique
        </Link>
        .
      </S>
      <Q>« Le GEO, c’est la même honnêteté que le SEO — avec un format un peu plus “réponse courte”. »</Q>
      <S>
        Côté produit, un{' '}
        <Link href="/ia/rag-base-connaissances" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          assistant sur vos documents
        </Link>{' '}
        ou un{' '}
        <Link href="/ia/chatbot-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          chatbot
        </Link>{' '}
        branché proprement complète la stratégie. Pour le web public, gardez une{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          vitrine
        </Link>{' '}
        à jour. Lisez aussi le{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>
        , les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>
        , et passez par{' '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          devis
        </Link>{' '}
        ou{' '}
        <Link href="/contact" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          contact
        </Link>
        .
      </S>
    </>
  ),
};
