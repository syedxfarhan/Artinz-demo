/**
 * Fragrance chapter composition container.
 * DIAR uses DiarChapter; later fragrances will supply their own compositions.
 */
type FragranceChapterProps = {
  fragranceId: string;
  children?: React.ReactNode;
};

export function FragranceChapter({
  fragranceId,
  children,
}: FragranceChapterProps) {
  return (
    <section data-chapter={fragranceId} aria-labelledby={`chapter-${fragranceId}`}>
      {children}
    </section>
  );
}
