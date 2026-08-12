import Image from "next/image";

/**
 * Product still life — the hero of every chapter.
 *
 * The photograph is the environment, not a card: chapter CSS dissolves its
 * edges into the page. Pointer tilt (fine pointers only, ±3.5°) comes from the
 * house pointer signal in CSS, so no scripting runs per stage.
 */
type BottleStageProps = {
  fragranceId: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
};

export function BottleStage({
  fragranceId,
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 60vw",
}: BottleStageProps) {
  return (
    <div className="bottle-stage" data-bottle-stage data-fragrance={fragranceId}>
      <div className="bottle-stage__frame">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes}
          className="bottle-stage__image"
        />
      </div>
    </div>
  );
}
