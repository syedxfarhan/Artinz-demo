import Image from "next/image";

/**
 * Animal identity layer — the second thing seen in a chapter.
 *
 * Large, partially cropped, discovered alongside the bottle. Depth (parallax,
 * blend, dissolve) is chapter CSS; this only places the photograph.
 */
type AnimalLayerProps = {
  fragranceId: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
};

export function AnimalLayer({
  fragranceId,
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 80vw, 40vw",
}: AnimalLayerProps) {
  return (
    <div className="animal-layer" data-animal-layer data-fragrance={fragranceId}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={sizes}
        className="animal-layer__image"
      />
    </div>
  );
}
