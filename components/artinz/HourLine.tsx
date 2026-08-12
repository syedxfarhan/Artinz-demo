"use client";

import { t } from "@/data/copy";
import { fragrances } from "@/data/fragrances";
import { useHouse } from "./HouseProvider";

/**
 * Hour Line — the persistent position of the reader inside one day.
 * Desktop: a thin vertical track with four hours. Mobile: four dots.
 */
export function HourLine() {
  const { activeId, goToChapter, locale } = useHouse();
  const active = fragrances.find((fragrance) => fragrance.id === activeId);

  return (
    <nav className="hour-line" aria-label={t("hourLineLabel", locale)}>
      <span className="hour-line__now" aria-hidden="true">
        {active?.time}
      </span>
      <ol className="hour-line__hours">
        {fragrances.map((fragrance) => (
          <li key={fragrance.id} className="hour-line__hour">
            <button
              type="button"
              aria-current={activeId === fragrance.id ? "true" : undefined}
              onClick={() => goToChapter(fragrance.id)}
            >
              <span className="hour-line__dot" aria-hidden="true" />
              <span className="visually-hidden">
                {fragrance.name} — {fragrance.time}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
