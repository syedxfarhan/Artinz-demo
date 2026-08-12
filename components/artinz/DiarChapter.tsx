"use client";

import { diar } from "@/data/fragrances";
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

/**
 * DIAR — 06:40, dawn. The opening of the house.
 * Hierarchy: bottle, DIAR, falcon, 06:40, ingredients, notes and CTA.
 */
export function DiarChapter() {
  const { locale } = useHouse();
  const [raspberry, citrus] = diar.assets.ingredients;

  return (
    <ChapterShell id="diar" depthGate={0.65}>
      <BottleStage
        fragranceId="diar"
        src={diar.assets.bottle}
        alt="DIAR eau de parfum by ARTINZ on warm wood with lemon, raspberry and cinnamon"
        width={diar.assets.bottleSize.width}
        height={diar.assets.bottleSize.height}
        priority
        sizes="(max-width: 768px) 100vw, 48vw"
      />

      {diar.assets.animal ? (
        <AnimalLayer
          fragranceId="diar"
          src={diar.assets.animal}
          alt="The DIAR falcon, hooded in warm dawn light"
          width={diar.assets.animalSize?.width ?? 1024}
          height={diar.assets.animalSize?.height ?? 1536}
          priority
          sizes="(max-width: 768px) 52vw, 31vw"
        />
      ) : null}

      <IngredientLayer
        fragranceId="diar"
        name="raspberry"
        src={raspberry.src}
        width={raspberry.width}
        height={raspberry.height}
      />
      <IngredientLayer
        fragranceId="diar"
        name="citrus-cinnamon"
        src={citrus.src}
        width={citrus.width}
        height={citrus.height}
      />

      <div className="chapter__copy">
        <div className="chapter__lead">
          <ChapterHour time={diar.time} hour={diar.hour} locale={locale} />
          <ChapterName id="diar" name={diar.name} />
        </div>
        <div className="chapter__tail">
          <ChapterNotes notes={diar.notes} locale={locale} />
          <ChapterCTA fragrance={diar} />
        </div>
      </div>

      <div className="chapter__depth" id="chapter-diar-story">
        <ChapterStory story={diar.story[locale]} />
        <ChapterProduct fragrance={diar} />
      </div>
    </ChapterShell>
  );
}
