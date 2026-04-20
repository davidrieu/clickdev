import Link from 'next/link';
import type { ReactNode } from 'react';

import type { SeoPremiumSlug } from '@/lib/constants/seo-premium-children';

function P({ children }: { children: ReactNode }) {
  return <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">{children}</p>;
}

function S({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-base leading-[1.75] text-white/70">{children}</p>;
}

export const SEO_CHILD_EDITORIALS: Record<SeoPremiumSlug, ReactNode> = {
  'audit-seo': (
    <>
      <P>
        Un <strong className="font-medium text-white/90">audit</strong>, c’est surtout éviter de payer une refonte
        complète alors que trois corrections techniques changeraient déjà la donne — ou l’inverse.
      </P>
      <S>
        Exemple : un photographe qui refait son portfolio magnifique mais oublie les titres de page : l’audit remet ça
        au bon endroit de la liste.{' '}
        <Link href="/seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Retour silo SEO
        </Link>
        .
      </S>
    </>
  ),
  'seo-technique': (
    <>
      <P>
        Le <strong className="font-medium text-white/90">SEO technique</strong>, c’est ce que vos visiteurs ressentent
        avant même de lire : le site s’ouvre ou il part.
      </P>
      <S>
        Exemple : une boutique avec des filtres qui créent des milliers d’adresses en double : Google se fatigue avant
        vous. <Link href="/seo/audit-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">Commencer par un audit</Link> aide à prioriser.
      </S>
    </>
  ),
  'seo-local': (
    <>
      <P>
        Le <strong className="font-medium text-white/90">local</strong>, c’est le plombier qui veut être appelé à 22 h
        dans un quartier précis — pas être numéro 1 sur “plomberie France”.
      </P>
      <S>
        Exemple : deux salons avec noms proches : même téléphone partout, sinon Google hésite.{' '}
        <Link href="/sites-internet/site-vitrine" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Site vitrine
        </Link>{' '}
        et fiche Maps doivent raconter la même histoire.
      </S>
    </>
  ),
  'seo-ecommerce': (
    <>
      <P>
        En <strong className="font-medium text-white/90">e-commerce</strong>, le SEO, c’est aussi éviter que le client
        se perde entre deux variantes de la même couleur.
      </P>
      <S>
        Exemple : soldes d’hiver : si chaque promo crée une nouvelle URL sans règle claire, vous perdez du jus.{' '}
        <Link href="/sites-internet/site-ecommerce" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Création e-commerce
        </Link>{' '}
        et SEO vont souvent de pair.
      </S>
    </>
  ),
  'migration-seo': (
    <>
      <P>
        Une <strong className="font-medium text-white/90">migration</strong> réussie, c’est quand vos clients ne voient
        presque rien — mais Google comprend où sont passées les pages.
      </P>
      <S>
        Exemple : passage d’un blog `monsite.wordpress.com` vers un domaine propre : sans redirections, c’est repartir
        de zéro. Je coordonne avec le déploiement technique.
      </S>
    </>
  ),
  'redaction-seo': (
    <>
      <P>
        La <strong className="font-medium text-white/90">rédaction</strong> utile répond à une vraie question (“prix
        moyen réparation fuite”) au lieu de répéter le mot magique vingt fois.
      </P>
      <S>
        Exemple : cabinet dentaire : une page par type de soin avec FAQ honnête vaut mieux qu’un pavé illisible. Je peux
        intégrer le texte dans le site que je développe.
      </S>
    </>
  ),
  netlinking: (
    <>
      <P>
        Les <strong className="font-medium text-white/90">liens</strong>, ce sont des recommandations : mieux vaut
        quinze sites pertinents que mille annuaires douteux.
      </P>
      <S>
        Exemple : fabricant de matériel sportif : partenariat avec des clubs locaux et articles de fond — pas d’achat
        de liens au kilo.
      </S>
    </>
  ),
  'geo-generative-engine-optimization': (
    <>
      <P>
        Le <strong className="font-medium text-white/90">GEO</strong>, c’est rendre votre activité facile à résumer
        pour une IA sans mentir sur ce que vous faites.
      </P>
      <S>
        Exemple : association : mission, zone, impact chiffré sur une page claire — ça aide autant Google que les
        assistants. <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">Silo IA</Link> pour les assistants sur mesure.
      </S>
    </>
  ),
};
