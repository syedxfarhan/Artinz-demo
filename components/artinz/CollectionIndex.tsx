"use client";

import { t } from "@/data/copy";
import { formatPrice, fragrances } from "@/data/fragrances";
import { useHouse } from "./HouseProvider";

/**
 * The four hours as one readable index — the last thing in the house.
 * A typographic list, not a product grid: same hierarchy as the chapters.
 */
export function CollectionIndex() {
  const { locale, goToChapter, addLine, lastAdded } = useHouse();

  return (
    <section className="collection" id="collection" aria-labelledby="collection-title">
      <h2 className="collection__title" id="collection-title">
        {t("collection", locale)}
      </h2>

      <ul className="collection__list">
        {fragrances.map((fragrance) => (
          <li key={fragrance.id} className="collection__row">
            <button
              type="button"
              className="collection__open"
              onClick={() => goToChapter(fragrance.id)}
            >
              <span className="collection__time">{fragrance.time}</span>
              <span className="collection__name">{fragrance.name}</span>
              <span className="collection__hour">{fragrance.hour[locale]}</span>
            </button>

            <p className="collection__notes">
              {fragrance.notes.map((note) => note[locale]).join(" · ")}
            </p>

            <p className="collection__buy">
              <span className="collection__price">{formatPrice(fragrance.price)}</span>
              <button
                type="button"
                className="collection__add"
                data-demo="cart"
                onClick={() => addLine(fragrance.id)}
              >
                {lastAdded === fragrance.id ? t("added", locale) : t("addToCart", locale)}
                <span className="visually-hidden"> — {fragrance.name}</span>
              </button>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
