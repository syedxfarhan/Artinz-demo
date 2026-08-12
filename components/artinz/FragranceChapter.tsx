/**
 * Fragrance chapter composition container — structure only.
 * Each chapter inherits the design system with its own art direction.
 */
type FragranceChapterProps = {
  fragranceId: string;
  children?: React.ReactNode;
};

export function FragranceChapter({ fragranceId, children }: FragranceChapterProps) {
  return (
    <section data-chapter={fragranceId} aria-labelledby={`chapter-${fragranceId}`}>
      {children}
    </section>
  );
}
