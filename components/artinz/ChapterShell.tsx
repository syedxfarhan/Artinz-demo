"use client";

import { useEffect, useRef } from "react";
import type { FragranceId } from "@/data/fragrances";
import { useHouse } from "./HouseProvider";

/**
 * Chapter container: one hour of the house.
 *
 * The section is taller than the viewport; the stage inside is sticky, so the
 * chapter holds still while its own depth (story, ingredients) is scrolled
 * through. Scroll position arrives as the `--progress` custom property.
 */
type ChapterShellProps = {
  id: FragranceId;
  children: React.ReactNode;
};

export function ChapterShell({ id, children }: ChapterShellProps) {
  const ref = useRef<HTMLElement>(null);
  const { registerChapter } = useHouse();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    return registerChapter(id, element);
  }, [id, registerChapter]);

  return (
    <section
      ref={ref}
      id={`chapter-${id}`}
      className={`chapter chapter--${id}`}
      data-chapter={id}
      aria-labelledby={`chapter-${id}-name`}
    >
      <div className="chapter__stage">{children}</div>
    </section>
  );
}
