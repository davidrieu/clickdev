'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, Maximize2Icon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type GalleryItem = { image: string | null; caption?: string | null };

type Props = { items: GalleryItem[] };

export function CaseStudyGallery({ items }: Props) {
  const withImages = items.filter((g): g is GalleryItem & { image: string } => Boolean(g.image));
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex !== null;
  const active = openIndex !== null ? withImages[openIndex] : null;

  return (
    <>
      <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {withImages.map((g, i) => (
          <li key={`${g.image}-${i}`} className="min-h-0">
            <div
              className={cn(
                'flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.1]',
                'bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900',
                'transition duration-500 hover:border-white/[0.16]',
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label={g.caption ? `Agrandir : ${g.caption}` : "Agrandir l'image"}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                  <Image
                    src={g.image}
                    alt={g.caption?.trim() || 'Capture du projet'}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top si-gallery-thumb-pan"
                    style={{ animationDelay: `${(i % 6) * 1.25}s` }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-95 transition duration-300 group-hover:opacity-100"
                    aria-hidden
                  >
                    <div className="flex items-center justify-center gap-2 px-3 pb-2.5 pt-6 text-[11px] font-medium tracking-wide text-white/90 sm:text-xs">
                      <Maximize2Icon className="size-3.5 shrink-0 opacity-90 sm:size-4" strokeWidth={2} />
                      <span>Cliquer pour agrandir</span>
                    </div>
                  </div>
                </div>
              </button>
              {g.caption?.trim() ? (
                <p className="border-t border-white/10 px-4 py-3 text-center text-sm text-white/60">{g.caption}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={(isOpen) => !isOpen && setOpenIndex(null)}>
        <DialogContent
          /* Lenis écoute la molette sur window : sans ça, le scroll lisse la page au lieu du conteneur ci-dessous */
          data-lenis-prevent
          overlayClassName="bg-black/80 backdrop-blur-sm supports-backdrop-filter:backdrop-blur-sm"
          className={cn(
            'fixed top-1/2 left-1/2 z-50 h-[min(92vh,1000px)] max-h-[min(92vh,1000px)] w-[min(96vw,1200px)] -translate-x-1/2 -translate-y-1/2',
            'border border-white/15 bg-zinc-950/95 p-0 text-white !shadow-none !ring-0 !ring-offset-0',
            '!max-w-[min(96vw,1200px)] sm:!max-w-[min(96vw,1200px)]',
            '[&_button]:text-white [&_button]:hover:bg-white/15',
            'data-open:animate-in data-closed:animate-out',
            'flex flex-col overflow-hidden',
          )}
          showCloseButton
        >
          <DialogTitle className="sr-only">Aperçu plein écran{active?.caption ? ` — ${active.caption}` : ''}</DialogTitle>
          {active ? (
            <>
              <p
                id="case-study-gallery-lightbox-hint"
                className="flex shrink-0 items-center justify-center gap-2 border-b border-white/10 bg-zinc-950/98 px-3 py-2.5 text-center text-[11px] leading-snug text-white/65 sm:px-4 sm:text-xs"
              >
                <ChevronDownIcon className="size-3.5 shrink-0 text-white/50" aria-hidden />
                <span>Faites défiler dans cette fenêtre pour voir toute la capture.</span>
              </p>
              <div
                className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-y-contain p-3 sm:p-4 [scrollbar-color:rgba(255,255,255,0.22)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25"
                aria-describedby="case-study-gallery-lightbox-hint"
              >
                <Image
                  src={active.image}
                  alt={active.caption?.trim() || 'Capture du projet'}
                  width={1920}
                  height={5000}
                  className="mx-auto h-auto w-full max-w-full object-contain object-top"
                  sizes="100vw"
                  priority
                />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
