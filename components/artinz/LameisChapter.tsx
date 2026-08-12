"use client";

import { lameis } from "@/data/fragrances";
import { BottleStage } from "./BottleStage";
import { ChapterShell } from "./ChapterShell";
import {
  ChapterCTA,
  ChapterHour,
  ChapterName,
  ChapterNotes,
  ChapterProduct,
  ChapterStory,
} from "./ChapterType";
import { IngredientLayer } from "./IngredientLayer";
import { useHouse } from "./HouseProvider";

/**
 * LAMEIS — 21:15, night.
 *
 * The identity is not a separate layer here: the house's own photograph holds
 * the leopard and the bottle in one pool of light, so the chapter is built as a
 * single image with the hour set formally beneath it.
 */
export function LameisChapter() {
  const { locale } = useHouse();
  const [ingredients] = lameis.assets.ingredients;

  return (
    <ChapterShell id="lameis">
      <BottleStage
        fragranceId="lameis"
        src={lameis.assets.bottle}
        alt="LAMEIS eau de parfum by ARTINZ, the leopard resting behind it in lamplight"
        width={lameis.assets.bottleSize.width}
        height={lameis.assets.bottleSize.height}
        sizes="(max-width: 768px) 100vw, 43vw"
      />

      <IngredientLayer
        fragranceId="lameis"
        name="rose-saffron-pepper"
        src={ingredients.src}
        width={ingredients.width}
        height={ingredients.height}
        sizes="(max-width: 768px) 52vw, 30vw"
      />

      <div className="chapter__copy">
        <div className="chapter__lead">
          <ChapterHour time={lameis.time} hour={lameis.hour} locale={locale} />
          <ChapterName id="lameis" name={lameis.name} />
        </div>
        <div className="chapter__tail">
          <ChapterNotes notes={lameis.notes} locale={locale} />
          <ChapterCTA fragrance={lameis} />
        </div>
      </div>

      <div className="chapter__depth" id="chapter-lameis-story">
        <ChapterStory story={lameis.story[locale]} />
        <ChapterProduct fragrance={lameis} />
      </div>
    </ChapterShell>
  );
}
