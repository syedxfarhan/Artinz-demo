/**
 * Final conversion moment — text CTA only.
 */
type CollectionCTAProps = {
  href?: string;
  label?: string;
};

export function CollectionCTA({
  href = "#diar-story",
  label = "DISCOVER DIAR →",
}: CollectionCTAProps) {
  return (
    <a className="collection-cta" href={href}>
      {label}
    </a>
  );
}
