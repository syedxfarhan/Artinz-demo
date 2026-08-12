"use client";

/**
 * Final conversion moment — text CTA only.
 * Scrolls into the DIAR chapter depth (story / ingredients).
 */
type CollectionCTAProps = {
  href?: string;
  label?: string;
};

export function CollectionCTA({
  href = "#diar-story",
  label = "DISCOVER DIAR →",
}: CollectionCTAProps) {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    const depth = Math.round(window.innerHeight * 0.55);
    window.scrollBy({ top: depth, behavior: "smooth" });
  };

  return (
    <a className="collection-cta" href={href} onClick={onClick}>
      {label}
    </a>
  );
}
