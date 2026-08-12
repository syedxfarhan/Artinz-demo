/**
 * Animal identity / visual layer — structure only.
 * Purpose: FRAGRANCE IDENTITY
 */
type AnimalLayerProps = {
  fragranceId: string;
  animalAsset?: string;
  animalName?: string;
};

export function AnimalLayer({ fragranceId, animalAsset, animalName }: AnimalLayerProps) {
  if (!animalAsset) {
    return null;
  }

  return (
    <div data-animal-layer data-fragrance={fragranceId} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={animalAsset} alt={animalName ?? `${fragranceId} animal`} />
    </div>
  );
}
