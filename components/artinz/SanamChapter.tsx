"use client";

import { sanam } from "@/data/fragrances";
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
 * SANAM — 18:30, dusk. The peacock spread low, the product on the horizon,
 * the type held in the last of the sky.
 */
export function SanamChapter() {
  const { locale } = useHouse();
  const [pear] = sanam.assets.ingredients;

  return (
    <ChapterShell id="sanam">
      <BottleStage
        fragranceId="sanam"
        src={sanam.assets.bottle}
        alt="SANAM eau de parfum by ARTINZ with pear, orange blossom, black currant and chocolate"
        width={sanam.assets.bottleSize.width}
        height={sanam.assets.bottleSize.height}
        sizes="(max-width: 768px) 100vw, 34vw"
      />

      {sanam.assets.animal ? (
        <AnimalLayer
          fragranceId="sanam"
          src={sanam.assets.animal}
          alt="The SANAM white peacock with black currant and chocolate"
          width={sanam.assets.animalSize?.width ?? 1402}
          height={sanam.assets.animalSize?.height ?? 1122}
          sizes="(max-width: 768px) 116vw, 70vw"
        />
      ) : null}

      <IngredientLayer
        fragranceId="sanam"
        name="pear-blossom"
        src={pear.src}
        width={pear.width}
        height={pear.height}
        sizes="(max-width: 768px) 46vw, 30vw"
      />

      <div className="chapter__copy">
        <div className="chapter__lead">
          <ChapterHour time={sanam.time} hour={sanam.hour} locale={locale} />
          <ChapterName id="sanam" name={sanam.name} />
        </div>
        <div className="chapter__tail">
          <ChapterNotes notes={sanam.notes} locale={locale} />
          <ChapterCTA fragrance={sanam} />
        </div>
      </div>

      <div className="chapter__depth" id="chapter-sanam-story">
        <ChapterStory story={sanam.story[locale]} />
        <ChapterProduct fragrance={sanam} />
      </div>
    </ChapterShell>
  );
}
