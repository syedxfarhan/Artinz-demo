"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Fragrance } from "@/data/fragrances";
import { AnimalLayer } from "./AnimalLayer";
import { BottleStage } from "./BottleStage";
import { CollectionCTA } from "./CollectionCTA";
import { HourLine } from "./HourLine";
import { Navigation } from "./Navigation";

type DiarChapterProps = {
  fragrance: Fragrance;
};

/**
 * DIAR opening experience + first chapter.
 * Hero is the beginning of the chapter — one continuous editorial scroll.
 * Product photography leads; UI supports; interaction enhances.
 */
export function DiarChapter({ fragrance }: DiarChapterProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const update = () => {
      const rect = root.getBoundingClientRect();
      const total = root.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const next = total > 0 ? scrolled / total : 0;
      setProgress(next);
      root.style.setProperty("--diar-progress", String(next));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const onPointer = (event: PointerEvent) => {
      if (reduceMotion) return;
      if (!window.matchMedia("(pointer: fine)").matches) return;
      const nx = (event.clientX / window.innerWidth) * 2 - 1;
      const ny = (event.clientY / window.innerHeight) * 2 - 1;
      setPointer({
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
      });
    };

    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  const animalX = pointer.x * -18 - progress * 24;
  const animalY = pointer.y * -10 + progress * 40;
  const animalOpacity = 0.2 + progress * 0.32;
  const bottleShift = progress * -36;
  const storyOpacity = Math.min(1, Math.max(0, (progress - 0.18) / 0.35));
  const ingredientOpacity = Math.min(1, Math.max(0, (progress - 0.28) / 0.42));
  const warmOverlay = 0.08 + progress * 0.14;

  const [raspberry, citrus] = fragrance.ingredientAssets ?? [];

  return (
    <section
      ref={rootRef}
      className="diar"
      data-chapter="diar"
      aria-labelledby="chapter-diar"
    >
      <div className="diar__sticky">
        <div
          className="diar__atmosphere"
          aria-hidden="true"
          style={{ ["--warm-overlay" as string]: String(warmOverlay) }}
        />

        <div className="diar__enter diar__enter--nav">
          <Navigation />
        </div>

        <div className="diar__enter diar__enter--hour">
          <HourLine time={fragrance.time} progress={progress} />
        </div>

        {fragrance.animalAsset ? (
          <AnimalLayer
            fragranceId={fragrance.id}
            animalAsset={fragrance.animalAsset}
            animalName={fragrance.animal ?? "Falcon"}
            parallaxX={animalX}
            parallaxY={animalY}
            opacity={animalOpacity}
          />
        ) : null}

        <div className="diar__composition">
          <div className="diar__copy diar__copy--hero">
            <p className="diar__time diar__enter diar__enter--time" aria-hidden="true">
              {fragrance.time}
            </p>
            <h1 id="chapter-diar" className="diar__name diar__enter diar__enter--name">
              {fragrance.name}
            </h1>
            <p className="diar__notes diar__enter diar__enter--notes">
              {fragrance.notes.join(" · ")}
            </p>
            <div className="diar__enter diar__enter--cta">
              <CollectionCTA href="#diar-story" />
            </div>
          </div>

          {fragrance.bottle ? (
            <div className="diar__enter diar__enter--bottle">
              <BottleStage
                fragranceId={fragrance.id}
                bottleSrc={fragrance.bottle}
                alt="DIAR eau de parfum bottle by ARTINZ with raspberry, lemon, and cinnamon"
                width={1086}
                height={1448}
                scrollShift={bottleShift}
              />
            </div>
          ) : null}

          <div
            id="diar-story"
            className="diar__copy diar__copy--depth"
            style={{ opacity: Math.max(storyOpacity, 0.001) }}
          >
            <p className="diar__story">{fragrance.story}</p>
          </div>
        </div>

        <div
          className="diar__ingredients"
          aria-hidden={ingredientOpacity < 0.05}
          style={{
            opacity: ingredientOpacity,
            ["--ingredient-shift" as string]: `${(1 - ingredientOpacity) * 40}px`,
          }}
        >
          {raspberry ? (
            <div className="diar__ingredient diar__ingredient--raspberry">
              <Image
                src={raspberry}
                alt=""
                width={1536}
                height={1024}
                sizes="(max-width: 768px) 55vw, 28vw"
                className="diar__ingredient-image"
              />
            </div>
          ) : null}
          {citrus ? (
            <div className="diar__ingredient diar__ingredient--citrus">
              <Image
                src={citrus}
                alt=""
                width={1536}
                height={1024}
                sizes="(max-width: 768px) 60vw, 32vw"
                className="diar__ingredient-image"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
