import Link from 'next/link';

export function CrmPillarEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Un <strong className="font-medium text-white/90">outil métier</strong> réussi, c’est celui qu’on ouvre sans
        râler le lundi matin. Je <strong className="font-medium text-white/90">conçois</strong> les écrans avec vous —
        vocabulaire, étapes, droits — puis je <strong className="font-medium text-white/90">développe</strong> une
        version stable, avec des tests sur de vrais cas : pas une démo qui casse au premier dossier client avec une
        pièce jointe de 12 Mo.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Exemple : une petite équipe commerciale qui passait deux heures par jour à recopier des devis signés depuis le
        mail vers un tableur, puis à prévenir l’atelier au téléphone. Une{' '}
        <Link href="/crm-outils-metiers/integration-crm" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          intégration CRM
        </Link>{' '}
        sobre (webhook, champs mappés, notification) rend ce temps à la vente ou à la production. Quand les flux sont
        stables, on peut ajouter des{' '}
        <Link href="/crm-outils-metiers/automatisation" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          automatisations
        </Link>{' '}
        : relances, rappels, synchros — toujours avec une trace et une alerte si quelque chose dérape.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Parfois le bon choix n’est pas “tout refaire” : vous avez déjà HubSpot, Pipedrive ou un ERP imposé par la maison
        mère. Dans ce cas, je ne vous vends pas un second CRM : je relie ce qui existe (site, formulaires, facturation)
        pour que l’information circule une fois, au bon format.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Si au contraire aucun logiciel du marché ne colle à votre métier — location saisonnière très spécifique, suivi
        de chantier avec photos et signatures, gestion de dossiers juridiques — un{' '}
        <Link href="/crm-outils-metiers/crm-sur-mesure" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          outil sur mesure
        </Link>{' '}
        peut coûter moins cher à long terme qu’une pile de contournements payants.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Sites internet
        </Link>
        {' · '}
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Intelligence artificielle
        </Link>
        .
      </p>
    </>
  );
}
