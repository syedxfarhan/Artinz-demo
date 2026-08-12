"use client";

import { discoverLabel, t } from "@/data/copy";
import { formatPrice, type Fragrance, type Localized } from "@/data/fragrances";
import { useHouse } from "./HouseProvider";

/**
 * Editorial type atoms shared by every chapter.
 * Chapters place them; they never restyle them.
 */

export function ChapterHour({
  time,
  hour,
  locale,
}: {
  time: string;
  hour: Localized;
  locale: "en" | "de";
}) {
  return (
    <p className="chapter__hour">
      <span className="chapter__time">{time}</span>
      <span className="chapter__hour-name">{hour[locale]}</span>
    </p>
  );
}

export function ChapterName({ id, name }: { id: string; name: string }) {
  return (
    <h2 id={`chapter-${id}-name`} className="chapter__name">
      {name}
    </h2>
  );
}

export function ChapterNotes({
  notes,
  locale,
}: {
  notes: Localized[];
  locale: "en" | "de";
}) {
  return (
    <p className="chapter__notes">
      {notes.map((note) => (
        <span key={note.en} className="chapter__note">
          {note[locale]}
        </span>
      ))}
    </p>
  );
}

export function ChapterStory({ story }: { story: string }) {
  return <p className="chapter__story">{story}</p>;
}

/**
 * Price plus the demo add-to-cart control.
 * DEMO ONLY: adds to client-side state. No order, inventory or payment.
 */
export function ChapterProduct({ fragrance }: { fragrance: Fragrance }) {
  const { locale, addLine, lastAdded } = useHouse();
  const justAdded = lastAdded === fragrance.id;

  return (
    <p className="chapter__product">
      <span className="chapter__price">{formatPrice(fragrance.price)}</span>
      <button
        type="button"
        className="chapter__add"
        data-demo="cart"
        onClick={() => addLine(fragrance.id)}
      >
        {justAdded ? t("added", locale) : t("addToCart", locale)}
        <span className="visually-hidden">, {fragrance.name}</span>
      </button>
    </p>
  );
}

/** `DISCOVER DIAR →` — moves into the chapter's own depth. */
export function ChapterCTA({ fragrance }: { fragrance: Fragrance }) {
  const { locale } = useHouse();

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollBy({
      top: Math.round(window.innerHeight * 0.6),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <a
      className="chapter__cta"
      href={`#chapter-${fragrance.id}-story`}
      onClick={onClick}
    >
      {discoverLabel(fragrance.name, locale)}
    </a>
  );
}
