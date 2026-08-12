/**
 * UI copy dictionary.
 *
 * English and German share one visual system — only the words change.
 * German strings are here so the display and UI faces are exercised with
 * umlauts (Ä Ö Ü ä ö ü) and ß in real composition, not in a specimen.
 */

import type { Locale } from "./fragrances";

type Dict = Record<Locale, string>;

export const ui = {
  shop: { en: "SHOP", de: "SHOP" } as Dict,
  about: { en: "ABOUT", de: "ÜBER UNS" } as Dict,
  journal: { en: "JOURNAL", de: "JOURNAL" } as Dict,
  menu: { en: "MENU", de: "MENÜ" } as Dict,
  close: { en: "CLOSE", de: "SCHLIESSEN" } as Dict,
  cart: { en: "CART", de: "WARENKORB" } as Dict,
  cartEmpty: {
    en: "Your cart is empty.",
    de: "Ihr Warenkorb ist leer.",
  } as Dict,
  subtotal: { en: "SUBTOTAL", de: "ZWISCHENSUMME" } as Dict,
  viewCart: { en: "VIEW CART", de: "WARENKORB ANSEHEN" } as Dict,
  checkout: { en: "CHECKOUT", de: "ZUR KASSE" } as Dict,
  demoNotice: {
    en: "Demo cart. Checkout and payment are not connected.",
    de: "Demo-Warenkorb. Kasse und Zahlung sind nicht angebunden.",
  } as Dict,
  demoControl: { en: "DEMO", de: "DEMO" } as Dict,
  addToCart: { en: "ADD TO CART", de: "IN DEN WARENKORB" } as Dict,
  added: { en: "ADDED", de: "HINZUGEFÜGT" } as Dict,
  remove: { en: "REMOVE", de: "ENTFERNEN" } as Dict,
  discover: { en: "DISCOVER", de: "ENTDECKEN" } as Dict,
  collection: { en: "THE COLLECTION", de: "DIE KOLLEKTION" } as Dict,
  houseLine: { en: "One house. Four hours.", de: "Ein Haus. Vier Stunden." } as Dict,
  oils: {
    en: "Premium French-sourced oils.",
    de: "Premium-Parfumöle aus Frankreich.",
  } as Dict,
  hourLineLabel: {
    en: "Fragrance hours",
    de: "Duftstunden",
  } as Dict,
  languageLabel: {
    en: "Language",
    de: "Sprache",
  } as Dict,
  notesLabel: { en: "NOTES", de: "NOTEN" } as Dict,
  skipToContent: {
    en: "Skip to the fragrances",
    de: "Zu den Düften springen",
  } as Dict,
  developedBy: {
    en: "Developed & Designed by",
    de: "Entwickelt & gestaltet von",
  } as Dict,
  designerName: {
    en: "Syed Farhan Ahmed",
    de: "Syed Farhan Ahmed",
  } as Dict,
  studioName: {
    en: "FoundEarly Labs Pvt Ltd.",
    de: "FoundEarly Labs Pvt Ltd.",
  } as Dict,
  demoContext: {
    en: "This website demo was created purely using the existing data and brand information available on the current ARTINZ website. It was designed specifically as a desktop-focused demonstration of a possible new digital experience.",
    de: "Diese Website-Demo entstand ausschließlich aus den vorhandenen Daten und Markenangaben der aktuellen ARTINZ-Website. Sie wurde eigens als desktop-orientierte Demonstration einer möglichen neuen digitalen Erfahrung gestaltet.",
  } as Dict,
} satisfies Record<string, Dict>;

export type UiKey = keyof typeof ui;

export function t(key: UiKey, locale: Locale): string {
  return ui[key][locale];
}

/** `DISCOVER DIAR →` in English, `DIAR ENTDECKEN →` in German. */
export function discoverLabel(name: string, locale: Locale): string {
  return locale === "de"
    ? `${name} ${ui.discover.de} →`
    : `${ui.discover.en} ${name} →`;
}
