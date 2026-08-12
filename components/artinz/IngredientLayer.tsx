import Image from "next/image";

/**
 * Ingredient photography — the scent story, revealed by chapter depth.
 * Decorative: the notes are named in type, so these carry no alt text.
 */
type IngredientLayerProps = {
  fragranceId: string;
  name: string;
  src: string;
  width: number;
  height: number;
  sizes?: string;
};

export function IngredientLayer({
  fragranceId,
  name,
  src,
  width,
  height,
  sizes = "(max-width: 768px) 55vw, 26vw",
}: IngredientLayerProps) {
  return (
    <div
      className="ingredient-layer"
      data-ingredient={name}
      data-fragrance={fragranceId}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        loading="lazy"
        sizes={sizes}
        className="ingredient-layer__image"
      />
    </div>
  );
}
