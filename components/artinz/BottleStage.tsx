/**
 * Product image and depth interaction stage — structure only.
 * Future: pointer position → subtle rotation → depth → specular light.
 */
type BottleStageProps = {
  fragranceId: string;
  bottleSrc?: string;
  alt?: string;
};

export function BottleStage({ fragranceId, bottleSrc, alt }: BottleStageProps) {
  return (
    <div data-bottle-stage data-fragrance={fragranceId}>
      {bottleSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={bottleSrc} alt={alt ?? `${fragranceId} bottle`} />
      ) : null}
    </div>
  );
}
