import Link from "next/link";

/**
 * Global navigation — quiet brand mark + links.
 * Product photography leads; nav stays subordinate.
 */
export function Navigation() {
  return (
    <header className="artinz-nav">
      <Link className="artinz-nav__brand" href="/">
        ARTINZ
      </Link>
      <nav className="artinz-nav__links" aria-label="Main navigation">
        <a href="#shop">SHOP</a>
        <a href="#about">ABOUT</a>
        <a href="#journal">JOURNAL</a>
      </nav>
    </header>
  );
}
