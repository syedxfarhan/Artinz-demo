import Image from "next/image";

/**
 * Animal identity / visual layer.
 * Purpose: FRAGRANCE IDENTITY — large, cropped, quiet.
 */
type AnimalLayerProps = {
  fragranceId: string;
  animalAsset: string;
  animalName: string;
  parallaxX?: number;
  parallaxY?: number;
  opacity?: number;
};

export function AnimalLayer({
  fragranceId,
  animalAsset,
  animalName,
  parallaxX = 0,
  parallaxY = 0,
  opacity = 0.35,
}: AnimalLayerProps) {
  return (
    <div
      className="animal-layer"
      data-animal-layer
      data-fragrance={fragranceId}
      aria-hidden="true"
      style={{
        ["--animal-x" as string]: `${parallaxX}px`,
        ["--animal-y" as string]: `${parallaxY}px`,
        ["--animal-opacity" as string]: String(opacity),
      }}
    >
      <Image
        src={animalAsset}
        alt=""
        width={1024}
        height={1536}
        className="animal-layer__image"
        sizes="(max-width: 768px) 70vw, 42vw"
        priority={false}
      />
      <span className="visually-hidden">{animalName}</span>
    </div>
  );
}
