/** Trait de séparation entre blocs : plus visible + faisceau lumineux animé (CSS dans globals.css). */
export function PremiumSectionDivider({ edge = 'top' }: { edge?: 'top' | 'bottom' }) {
  const pos = edge === 'bottom' ? 'bottom-0' : 'top-0';
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 ${pos} z-[25] h-[2px] overflow-hidden md:h-[3px]`}
      aria-hidden
    >
      <div className="si-premium-section-divider__base absolute inset-0" />
      <div
        className={`si-premium-section-divider__beam absolute inset-y-0 ${
          edge === 'bottom' ? 'si-premium-section-divider__beam--offset' : ''
        }`}
      />
    </div>
  );
}
