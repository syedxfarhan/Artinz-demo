"use client";

import { rayan } from "@/data/fragrances";
import { AnimalLayer } from "./AnimalLayer";
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

const ingredientNames = ["apple", "lavender", "bergamot"];

/**
 * RAYAN — 12:00, noon. The house at full daylight: mirrored composition,
 * cool ground, white falcon at the right edge.
 */
export function RayanChapter() {
  const { locale } = useHouse();

  return (
    <ChapterShell id="rayan">
      <BottleStage
        fragranceId="rayan"
        src={rayan.assets.bottle}
        alt="RAYAN eau de parfum by ARTINZ on stone with green apple, lavender and bergamot"
        width={rayan.assets.bottleSize.width}
        height={rayan.assets.bottleSize.height}
        sizes="(max-width: 768px) 100vw, 42vw"
      />

      {rayan.assets.animal ? (
        <AnimalLayer
          fragranceId="rayan"
          src={rayan.assets.animal}
          alt="The RAYAN white falcon in midday light"
          width={rayan.assets.animalSize?.width ?? 1024}
          height={rayan.assets.animalSize?.height ?? 1536}
          sizes="(max-width: 768px) 54vw, 35vw"
        />
      ) : null}

      {rayan.assets.ingredients.map((ingredient, index) => (
        <IngredientLayer
          key={ingredient.src}
          fragranceId="rayan"
          name={ingredientNames[index]}
          src={ingredient.src}
          width={ingredient.width}
          height={ingredient.height}
          sizes="(max-width: 768px) 44vw, 22vw"
        />
      ))}

      <div className="chapter__copy">
        <div className="chapter__lead">
          <ChapterHour time={rayan.time} hour={rayan.hour} locale={locale} />
          <ChapterName id="rayan" name={rayan.name} />
        </div>
        <div className="chapter__tail">
          <ChapterNotes notes={rayan.notes} locale={locale} />
          <ChapterCTA fragrance={rayan} />
        </div>
      </div>

      <div className="chapter__depth" id="chapter-rayan-story">
        <ChapterStory story={rayan.story[locale]} />
        <ChapterProduct fragrance={rayan} />
      </div>
    </ChapterShell>
  );
}
