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
      <H3>Quand je dis “sur mesure”, je parle d’adoption — pas de gadgets</H3>
      <S>
        On commence par des ateliers courts avec les futurs utilisateurs : qu’est-ce qu’ils tapent aujourd’hui dans
        Excel, qu’est-ce qui les énerve, quelles exceptions arrivent chaque semaine ? Ensuite seulement je propose des
        écrans. Le but, c’est que le lundi suivant le déploiement, l’outil soit ouvert sans honte — pas rangé dans un
        dossier “on verra plus tard”.
      </S>
      <Q>« Le plus beau CRM du monde ne vaut rien si l’équipe préfère encore le tableur. »</Q>
      <S>
        Souvent le projet vit à côté d’un{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          site vitrine ou e-commerce
        </Link>{' '}
        qui alimente les leads : je peux enchaîner sur du{' '}
        <Link href="/crm-outils-metiers/integration-crm" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          branchement CRM
        </Link>
        . Pour l’IA sur vos procédures, voyez{' '}
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          l’offre IA
        </Link>
        . Des exemples sur les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>
        , le{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>
        , et le{' '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          devis
        </Link>
        .
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
      <H3>Cartographie des systèmes : le schéma moche qui vous évite six mois de galère</H3>
      <S>
        Avant d’écrire une ligne d’intégration, je liste les sources de vérité : quel CRM, quel site, quelle facturation,
        quel outil de support. On définit qui est maître sur quel champ, et ce qui se passe en cas de conflit (deux
        leads pour le même mail, client existant vs nouveau). Ça paraît administratif ; en réalité c’est ce qui évite
        les “bugs mystérieux” trois semaines après la mise en prod.
      </S>
      <S>
        Si vous avez aussi une app métier ou une{' '}
        <Link href="/applications-mobiles" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          application mobile
        </Link>
        , on peut pousser les mêmes événements (notification, tâche) vers plusieurs canaux — toujours avec des quotas
        et des alertes si une API tierce ralentit.
      </S>
      <Q>« Une intégration propre, c’est une histoire de contrats entre systèmes — pas un script magique. »</Q>
      <S>
        Pour la partie publique (formulaires, tracking), j’aligne souvent avec du{' '}
        <Link href="/seo/seo-technique" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO technique
        </Link>{' '}
        raisonnable (consentement, perf). Lisez{' '}
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          à propos
        </Link>
        , les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>
        , ou écrivez sur{' '}
        <Link href="/contact" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          contact
        </Link>
        .
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
      <H3>Automatiser sans fragiliser : retries, alertes, mode dégradé</H3>
      <S>
        Je code les scénarios comme des recettes de cuisine avec des variantes : si l’e-mail part, marquer la tâche comme
        faite ; si l’API CRM répond 500, réessayer deux fois puis prévenir un humain avec le payload en pièce jointe —
        pas une boucle silencieuse qui spamme vos clients toute la nuit.
      </S>
      <S>
        Quand une étape pourrait bénéficier d’une couche “intelligente” (résumer un mail, classer une demande), je
        regarde si un modèle externe est pertinent ou si une règle simple suffit — parfois{' '}
        <Link href="/ia/automatisation-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          l’IA
        </Link>{' '}
        accélère, parfois elle ajoute du bruit. Pour des scénarios multi-outils, voir aussi{' '}
        <Link href="/ia/agents-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          agents & étapes
        </Link>
        .
      </S>
      <Q>« L’automatisation parfaite, c’est celle qu’on peut désactiver en urgence sans appeler un dev à 3 h du matin. »</Q>
      <S>
        Des retours de terrain sur les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>
        , des billets sur le{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>
        , et pour lancer un projet :{' '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          devis
        </Link>
        .
      </S>
    </>
  ),
};
