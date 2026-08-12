"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Product image and depth interaction stage.
 * Desktop: subtle pointer tilt (±3–4°). Mobile: no tilt.
 */
type BottleStageProps = {
  fragranceId: string;
  bottleSrc: string;
  alt: string;
  width: number;
  height: number;
  scrollShift?: number;
};

export function BottleStage({
  fragranceId,
  bottleSrc,
  alt,
  width,
  height,
  scrollShift = 0,
}: BottleStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const canTilt = window.matchMedia("(pointer: fine)").matches && !reduceMotion;

    if (!canTilt) return;

    const maxDeg = 3.5;

    const animate = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;
      cur.x += (tgt.x - cur.x) * 0.08;
      cur.y += (tgt.y - cur.y) * 0.08;
      stage.style.setProperty("--tilt-x", `${cur.y * maxDeg}deg`);
      stage.style.setProperty("--tilt-y", `${cur.x * maxDeg}deg`);
      frameRef.current = requestAnimationFrame(animate);
    };

    const onMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      targetRef.current = {
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, -ny)),
      };
    };

    const onLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    frameRef.current = requestAnimationFrame(animate);
    window.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="bottle-stage"
      data-bottle-stage
      data-fragrance={fragranceId}
      style={{
        ["--scroll-shift" as string]: `${scrollShift}px`,
      }}
    >
      <Image
        src={bottleSrc}
        alt={alt}
        width={width}
        height={height}
        priority
        sizes="(max-width: 768px) 88vw, (max-width: 1200px) 52vw, 560px"
        className="bottle-stage__image"
      />
    </div>
  );
}
