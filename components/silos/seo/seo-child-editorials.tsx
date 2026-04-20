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
          Retour à l’ensemble du référencement
        </Link>
        .
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
    </>
  ),
};
