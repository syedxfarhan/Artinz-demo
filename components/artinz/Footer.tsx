"use client";

import { t } from "@/data/copy";
import { useHouse } from "./HouseProvider";

/**
 * Global footer — the close of the day, and the home of ABOUT / JOURNAL.
 */
export function Footer() {
  const { locale } = useHouse();

  return (
    <footer className="footer">
      <p className="footer__mark">ARTINZ</p>
      <p className="footer__line">{t("houseLine", locale)}</p>

      <div className="footer__columns">
        <section className="footer__column" id="about" aria-labelledby="about-title">
          <h2 className="footer__column-title" id="about-title">
            {t("about", locale)}
          </h2>
          <p>{t("oils", locale)}</p>
        </section>

        <section className="footer__column" id="journal" aria-labelledby="journal-title">
          <h2 className="footer__column-title" id="journal-title">
            {t("journal", locale)}
          </h2>
          <p>
            {locale === "de"
              ? "Redaktionelle Notizen folgen."
              : "Editorial notes to follow."}
          </p>
        </section>
      </div>

      <p className="footer__demo">{t("demoNotice", locale)}</p>
      <p className="footer__legal">© {new Date().getFullYear()} ARTINZ</p>
    </footer>
  );
}
