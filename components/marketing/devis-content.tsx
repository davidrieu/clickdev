import DevisForm from '@/components/devis/devis-form';
import type { DevisProjectType } from '@/lib/constants/devis';
import Link from 'next/link';

type Props = { initialProjectType?: DevisProjectType };

/** Bloc formulaire (colonne droite de la page devis, ou usage isolé). */
export default function DevisContent({ initialProjectType }: Props) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] md:p-8">
        <h2 className="font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">Votre message</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
          Tous les champs utiles aident : type, budget, délai, description. Le tout part par e-mail dès
          l&apos;envoi — <strong className="font-medium text-white/90">sous 24–48 h ouvrées</strong> pour un retour.
        </p>
        <DevisForm initialProjectType={initialProjectType} />
      </div>
      <p className="text-sm leading-relaxed text-white/55">
        Un simple message sans ce formulaire ?{' '}
        <Link href="/contact" className="font-medium text-[#F26A06] underline-offset-4 transition hover:underline">
          Page contact
        </Link>
        .
      </p>
    </div>
  );
}
