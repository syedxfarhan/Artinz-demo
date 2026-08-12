"use client";

import { useEffect, useRef } from "react";
import { t } from "@/data/copy";
import { formatPrice, getFragranceById } from "@/data/fragrances";
import { useHouse } from "./HouseProvider";

/**
 * DEMO CART.
 *
 * Deliberately fake: state lives in the client for the length of a session.
 * There is no order, inventory, account or payment, and `VIEW CART` /
 * `CHECKOUT` are inert placeholders so the demo cannot imply commerce.
 */
export function CartPanel() {
  const { locale, lines, removeLine, subtotal, cartOpen, setCartOpen } = useHouse();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCartOpen(false);
    };
    window.addEventListener("keydown", onKey);
    panel.current?.querySelector<HTMLElement>("button")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [cartOpen, setCartOpen]);

  return (
    <div
      id="demo-cart"
      className="cart"
      data-open={cartOpen}
      hidden={!cartOpen}
      ref={panel}
    >
      <div className="cart__head">
        <h2 className="cart__title">{t("cart", locale)}</h2>
        <button type="button" className="cart__close" onClick={() => setCartOpen(false)}>
          {t("close", locale)}
        </button>
      </div>

      {lines.length === 0 ? (
        <p className="cart__empty">{t("cartEmpty", locale)}</p>
      ) : (
        <ul className="cart__lines">
          {lines.map((line) => {
            const fragrance = getFragranceById(line.id);
            return (
              <li key={line.id} className="cart__line">
                <span className="cart__line-name">{fragrance.name}</span>
                <span className="cart__line-meta">
                  {line.quantity} × {formatPrice(fragrance.price)}
                </span>
                <button
                  type="button"
                  className="cart__remove"
                  onClick={() => removeLine(line.id)}
                >
                  {t("remove", locale)}
                  <span className="visually-hidden"> {fragrance.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <p className="cart__subtotal">
        <span>{t("subtotal", locale)}</span>
        <span>{formatPrice(subtotal)}</span>
      </p>

      <div className="cart__actions">
        {/* Placeholders: no route, no handler, no checkout. */}
        <span className="cart__action" data-demo="inert" aria-disabled="true" role="link">
          {t("viewCart", locale)} →
        </span>
        <span className="cart__action" data-demo="inert" aria-disabled="true" role="link">
          {t("checkout", locale)} →
        </span>
      </div>

      <p className="cart__notice">{t("demoNotice", locale)}</p>
    </div>
  );
}
