import DevisForm from '@/components/devis/devis-form';
import { ServiceCardGlow } from '@/components/premium/service-card-glow';
import type { DevisProjectType } from '@/lib/constants/devis';

type Props = { initialProjectType?: DevisProjectType };

/** Bloc formulaire (colonne droite) — même peau de carte que les blocs Sites internet. */
export default function DevisContent({ initialProjectType }: Props) {
  return (
    <div className="space-y-5">
      <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 p-6 transition duration-500 hover:border-white/[0.16] md:p-8">
        <ServiceCardGlow />
        <div className="relative z-[2]">
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/50 uppercase">Formulaire</p>
          <h2 className="si-serif-display mt-2 text-lg font-medium tracking-[-0.02em] text-white md:text-xl">Votre message</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
            Tous les champs utiles aident : type, budget, délai, description. Le tout part par e-mail dès
            l&apos;envoi — <strong className="font-medium text-white/90">sous 24–48 h ouvrées</strong> pour un retour
            ciblé.
          </p>
          <DevisForm initialProjectType={initialProjectType} />
        </div>
      </div>
    </div>
  );
}
