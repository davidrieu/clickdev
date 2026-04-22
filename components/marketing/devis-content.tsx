import DevisForm from '@/components/devis/devis-form';
import type { DevisProjectType } from '@/lib/constants/devis';
import Link from 'next/link';

type Props = { initialProjectType?: DevisProjectType };

export default function DevisContent({ initialProjectType }: Props) {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] md:p-8 lg:p-10">
        <p className="text-sm leading-relaxed text-white/80 md:text-base">
          Tous les champs utiles aident : type, budget, délai, message. Le tout part par e-mail dès
          l&apos;envoi — <strong className="font-medium text-white/90">sous 24–48 h ouvrées</strong> pour un
          retour (ou des questions) de mon côté.
        </p>
        <DevisForm initialProjectType={initialProjectType} />
      </div>
      <p className="text-sm leading-relaxed text-white/60">
        Un simple message sans formaliser un devis ? Écrire sur la page{' '}
        <Link href="/contact" className="font-medium text-[#F26A06] underline-offset-4 transition hover:underline">
          Contact
        </Link>
        .
      </p>
    </div>
  );
}
