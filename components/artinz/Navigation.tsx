"use client";

import { useEffect, useState } from "react";
import { t, ui } from "@/data/copy";
import { fragrances, type Locale } from "@/data/fragrances";
import { useHouse } from "./HouseProvider";

/**
 * Global navigation — quiet by design.
 *
 * It keeps one contrast level over four hours: the accent shifts with the
 * active chapter, nothing else moves.
 */
export function Navigation() {
  const {
    locale,
    setLocale,
    lines,
    cartOpen,
    setCartOpen,
    goToChapter,
    activeId,
  } = useHouse();
  const [menuOpen, setMenuOpen] = useState(false);

  const count = lines.reduce((total, line) => total + line.quantity, 0);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const links = [
    { key: "shop" as const, href: "#collection" },
    { key: "about" as const, href: "#about" },
    { key: "journal" as const, href: "#journal" },
  ];

  return (
    <header className="nav" data-hour={activeId}>
      <a className="nav__brand" href="#top">
        ARTINZ
      </a>

      <nav className="nav__links" aria-label={t("collection", locale)}>
        {links.map((link) => (
          <a key={link.key} href={link.href}>
            {ui[link.key][locale]}
          </a>
        ))}
      </nav>

      <div className="nav__controls">
        <LocaleSwitch locale={locale} setLocale={setLocale} />

        <button
          type="button"
          className="nav__cart"
          aria-expanded={cartOpen}
          aria-controls="demo-cart"
          onClick={() => setCartOpen(!cartOpen)}
        >
          <span>{t("cart", locale)}</span>
          <span className="nav__cart-count" aria-hidden="true">
            {String(count).padStart(2, "0")}
          </span>
          <span className="visually-hidden">
            {count} — {t("demoControl", locale)}
          </span>
        </button>

        <button
          type="button"
          className="nav__menu"
          aria-expanded={menuOpen}
          aria-controls="house-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="visually-hidden">{t("menu", locale)}</span>
          <svg
            className="nav__menu-icon"
            viewBox="0 0 18 12"
            width="18"
            height="12"
            aria-hidden="true"
            focusable="false"
          >
            <line x1="0" y1="1.5" x2="18" y2="1.5" />
            <line x1="0" y1="10.5" x2="18" y2="10.5" />
          </svg>
        </button>
      </div>

      <div
        id="house-menu"
        className="house-menu"
        data-open={menuOpen}
        hidden={!menuOpen}
      >
        <ul className="house-menu__hours">
          {fragrances.map((fragrance) => (
            <li key={fragrance.id}>
              <button
                type="button"
                data-active={activeId === fragrance.id}
                onClick={() => {
                  setMenuOpen(false);
                  goToChapter(fragrance.id);
                }}
              >
                <span className="house-menu__name">{fragrance.name}</span>
                <span className="house-menu__time">{fragrance.time}</span>
              </button>
            </li>
          ))}
        </ul>
        <ul className="house-menu__links">
          {links.map((link) => (
            <li key={link.key}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {ui[link.key][locale]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function LocaleSwitch({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (next: Locale) => void;
}) {
  return (
    <div className="nav__locale" role="group" aria-label={t("languageLabel", locale)}>
      {(["en", "de"] as Locale[]).map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          aria-pressed={locale === option}
          onClick={() => setLocale(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
