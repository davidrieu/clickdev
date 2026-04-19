import Image from 'next/image';

import type { MarketingArticleSectionImage } from '@/lib/content/marketing-article-types';

type Props = {
  image: MarketingArticleSectionImage;
};

export function MarketingSectionImage({ image }: Props) {
  const { src, alt, caption } = image;

  if (src) {
    return (
      <figure className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/20">
        <div className="relative aspect-[16/9] w-full">
          <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
        </div>
        {caption ? (
          <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-white/55 md:text-sm">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-dashed border-white/20 bg-gradient-to-br from-[#2E08CF]/12 via-white/[0.04] to-[#F26A06]/10">
      <div className="relative flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Visuel à venir</span>
        <p className="max-w-md text-sm font-medium text-white/85 md:text-base">{alt}</p>
        <p className="max-w-lg text-xs leading-relaxed text-white/50 md:text-sm">
          {caption ??
            "Ici, ce sera bientôt une belle image : capture d’écran, mockup ou schéma. En attendant, imaginez quelque chose d’époustouflant — je pose juste le cadre pour que vous puissiez la glisser sans casser la mise en page."}
        </p>
      </div>
    </figure>
  );
}
