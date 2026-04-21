/** Paragraphes éditoriaux SEO (fiches expertise premium). */
export function ExpertiseEditorialProse({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="mt-8 space-y-5 text-base leading-relaxed text-white/70 md:text-lg">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-pretty">
          {p}
        </p>
      ))}
    </div>
  );
}
