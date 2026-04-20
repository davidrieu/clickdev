import Link from 'next/link';
import type { ReactNode } from 'react';

import type { CrmPremiumSlug } from '@/lib/constants/crm-premium-children';

function P({ children }: { children: ReactNode }) {
  return <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">{children}</p>;
}

function S({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-base leading-[1.75] text-white/70">{children}</p>;
}

export const CRM_CHILD_EDITORIALS: Record<CrmPremiumSlug, ReactNode> = {
  'crm-sur-mesure': (
    <>
      <P>
        Un <strong className="font-medium text-white/90">CRM sur mesure</strong>, ce n’est pas “copier Salesforce” :
        c’est capter votre vocabulaire métier (chantier, dossier, dossier client…) et le rendre cliquable.
      </P>
      <S>
        Exemple : petite agence événementielle : devis → acompte → planning équipe → clôture, sans quitter l’outil.{' '}
        <Link href="/crm-outils-metiers/integration-crm" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Intégrations
        </Link>{' '}
        si vous gardez un logiciel existant en parallèle.
      </S>
    </>
  ),
  'integration-crm': (
    <>
      <P>
        L’<strong className="font-medium text-white/90">intégration</strong>, c’est surtout éviter que le lead du
        formulaire du dimanche soir dorme jusqu’au mardi parce que personne n’a vu l’e-mail.
      </P>
      <S>
        Exemple : inscription newsletter → étiquette “à qualifier” dans le CRM + notification sur le téléphone du
        commercial. <Link href="/crm-outils-metiers/automatisation" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">Automatisation</Link> pour enchaîner d’autres étapes.
      </S>
    </>
  ),
  automatisation: (
    <>
      <P>
        L’<strong className="font-medium text-white/90">automatisation</strong> utile enlève une tâche que tout le monde
        déteste — elle ne remplace pas le jugement sur un gros contrat.
      </P>
      <S>
        Exemple : location de matériel : retour en retard → e-mail client + tâche interne. Je développe avec des filets
        de sécurité (logs, alertes).{' '}
        <Link href="/crm-outils-metiers" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Silo CRM
        </Link>
        .
      </S>
    </>
  ),
};
