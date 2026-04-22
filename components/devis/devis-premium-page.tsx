import { DevisBreadcrumb } from '@/components/devis/devis-breadcrumb';
import { DevisCoordonnees } from '@/components/devis/devis-coordonnees';
import { DevisSimpleHero } from '@/components/devis/devis-simple-hero';
import DevisContent from '@/components/marketing/devis-content';
import type { DevisProjectType } from '@/lib/constants/devis';

type Props = { initialProjectType?: DevisProjectType };

export function DevisPremiumPage({ initialProjectType }: Props) {
  return (
    <main className="bg-black text-white">
      <DevisBreadcrumb />
      <DevisSimpleHero />
      <section className="border-t border-white/[0.08] bg-[oklch(0.11_0_0)]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <DevisCoordonnees />
            </div>
            <div className="lg:col-span-7">
              <DevisContent initialProjectType={initialProjectType} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
