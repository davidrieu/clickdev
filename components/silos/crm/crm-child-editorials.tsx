import Link from 'next/link';
import type { ReactNode } from 'react';

import type { CrmPremiumSlug } from '@/lib/constants/crm-premium-children';

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

export const CRM_CHILD_EDITORIALS: Record<CrmPremiumSlug, ReactNode> = {
  'crm-sur-mesure': (
    <>
      <P>
        Un <strong className="font-medium text-white/90">CRM sur mesure</strong>, ce n’est pas “copier Salesforce à
        moitié prix” : c’est prendre votre vocabulaire métier — chantier, dossier, location, session de formation — et
        le rendre cliquable, avec des droits qui collent à la réalité (commercial, admin, atelier).
      </P>
      <S>
        Petite agence événementielle : devis signé, acompte encaissé, planning équipe, clôture avec bilan envoyé au
        client, le tout dans un seul fil plutôt que cinq exports Excel. Si vous gardez un logiciel du marché pour la
        compta ou le mail, on peut compléter avec des{' '}
        <Link href="/crm-outils-metiers/integration-crm" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          intégrations
        </Link>{' '}
        plutôt que de tout réinventer.
      </S>
      <S>
        Le sur-mesure vaut le coup quand le coût des contournements (double saisie, erreurs, temps perdu) dépasse
        clairement le coût d’un développement maîtrisé — et quand votre process ne rentrera jamais dans un template
        générique sans vous déformer.
      </S>
    </>
  ),
  'integration-crm': (
    <>
      <P>
        L’<strong className="font-medium text-white/90">intégration</strong>, c’est surtout éviter que le lead du
        formulaire du dimanche soir dorme jusqu’au mardi parce que l’e-mail est tombé entre deux chaises, ou que
        quelqu’un recopie à la main des champs déjà saisis sur le site.
      </P>
      <S>
        Inscription newsletter → étiquette “à qualifier” dans le CRM + notification sur le téléphone du commercial :
        ce genre de flux simple change le quotidien. On pense dès le départ aux cas limites : doublon, client déjà
        connu, pièce jointe trop lourde, API en panne.
      </S>
      <S>
        Quand les flux sont stables, on peut enchaîner avec de l’{' '}
        <Link href="/crm-outils-metiers/automatisation" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          automatisation
        </Link>{' '}
        (relances, tâches internes, synchros) — toujours avec des logs lisibles, pas une boîte noire.
      </S>
    </>
  ),
  automatisation: (
    <>
      <P>
        L’<strong className="font-medium text-white/90">automatisation</strong> utile enlève une tâche que tout le monde
        déteste refaire — elle ne remplace pas le jugement sur un gros contrat ou une situation litigieuse. Le bon
        scénario est celui qu’on peut expliquer à voix haute en deux minutes autour d’un café.
      </P>
      <S>
        Location de matériel : retour en retard → e-mail client avec lien utile + tâche interne pour le magasinier ;
        stock bas → mail fournisseur avec les quantités. Je code avec des filets (retry, alerte si échec, pas de boucle
        infinie quand une API change).
      </S>
      <S>
        Pour la vue d’ensemble des offres (CRM, intégrations, automatisations), repartez de la page{' '}
        <Link href="/crm-outils-metiers" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          CRM & outils métiers
        </Link>
        .
      </S>
    </>
  ),
};
