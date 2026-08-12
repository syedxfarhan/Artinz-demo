"use client";

import { t } from "@/data/copy";
import { useHouse } from "./HouseProvider";

export function SkipLink() {
  const { locale } = useHouse();
  return (
    <a className="skip-link" href="#chapter-diar">
      {t("skipToContent", locale)}
    </a>
  );
}
