"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  fragrances,
  getFragranceById,
  type FragranceId,
  type Locale,
} from "@/data/fragrances";

/**
 * One scroll listener for the whole house.
 *
 * Chapter progress is written to CSS custom properties on each chapter
 * element, so scroll motion never re-renders React. Only the active
 * chapter and the demo cart live in state.
 */

export type CartLine = {
  id: FragranceId;
  quantity: number;
};

type HouseValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  activeId: FragranceId;
  /** True while one of the four hours holds the viewport. */
  inChapters: boolean;
  registerChapter: (id: FragranceId, element: HTMLElement) => () => void;
  goToChapter: (id: FragranceId) => void;
  /** DEMO ONLY — client-side state, no order, inventory or payment. */
  lines: CartLine[];
  addLine: (id: FragranceId) => void;
  removeLine: (id: FragranceId) => void;
  subtotal: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  lastAdded: FragranceId | null;
};

const HouseContext = createContext<HouseValue | null>(null);

export function useHouse(): HouseValue {
  const value = useContext(HouseContext);
  if (!value) throw new Error("useHouse must be used inside HouseProvider");
  return value;
}

const chapterIds = fragrances.map((fragrance) => fragrance.id);

export function HouseProvider({ children }: { children: React.ReactNode }) {
  const chapters = useRef(new Map<FragranceId, HTMLElement>());
  const frame = useRef<number | null>(null);
  const [activeId, setActiveId] = useState<FragranceId>("diar");
  const [inChapters, setInChapters] = useState(true);
  const [locale, setLocale] = useState<Locale>("en");
  const [cartOpen, setCartOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<FragranceId | null>(null);
  // Placeholder state so the demo opens with a believable cart.
  const [lines, setLines] = useState<CartLine[]>([{ id: "diar", quantity: 1 }]);

  const registerChapter = useCallback(
    (id: FragranceId, element: HTMLElement) => {
      chapters.current.set(id, element);
      return () => {
        chapters.current.delete(id);
      };
    },
    [],
  );

  useEffect(() => {
    let current = activeId;

    const measure = () => {
      frame.current = null;
      const viewport = window.innerHeight;
      let next = current;
      let held = false;

      chapterIds.forEach((id, index) => {
        const element = chapters.current.get(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const travel = Math.max(element.offsetHeight - viewport, 1);
        const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
        element.style.setProperty("--progress", progress.toFixed(4));

        const holdsCentre = rect.top <= viewport * 0.5 && rect.bottom > viewport * 0.5;
        if (holdsCentre) {
          next = id;
          held = true;
          const span = Math.max(chapterIds.length - 1, 1);
          document.documentElement.style.setProperty(
            "--house-position",
            ((index + progress) / span).toFixed(4),
          );
        }
      });

      if (next !== current) {
        current = next;
        setActiveId(next);
        document.documentElement.dataset.hour = next;
      }
      setInChapters(held);
    };

    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeId]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  /* Pointer depth: one smoothed signal for bottle tilt and animal parallax. */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    const root = document.documentElement;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf: number | null = null;

    const settle = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      root.style.setProperty("--pointer-x", current.x.toFixed(4));
      root.style.setProperty("--pointer-y", current.y.toFixed(4));
      raf = window.requestAnimationFrame(settle);
    };

    const onMove = (event: PointerEvent) => {
      target.x = Math.max(-1, Math.min(1, (event.clientX / window.innerWidth) * 2 - 1));
      target.y = Math.max(-1, Math.min(1, (event.clientY / window.innerHeight) * 2 - 1));
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    raf = window.requestAnimationFrame(settle);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      if (raf !== null) window.cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      root.style.setProperty("--pointer-x", "0");
      root.style.setProperty("--pointer-y", "0");
    };
  }, []);

  const goToChapter = useCallback((id: FragranceId) => {
    const element = chapters.current.get(id);
    if (!element) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: element.offsetTop + 1,
      behavior: reduce ? "auto" : "smooth",
    });
  }, []);

  const addLine = useCallback((id: FragranceId) => {
    setLines((current) => {
      const existing = current.find((line) => line.id === id);
      if (existing) {
        return current.map((line) =>
          line.id === id ? { ...line, quantity: line.quantity + 1 } : line,
        );
      }
      return [...current, { id, quantity: 1 }];
    });
    setLastAdded(id);
  }, []);

  const removeLine = useCallback((id: FragranceId) => {
    setLines((current) => current.filter((line) => line.id !== id));
  }, []);

  useEffect(() => {
    if (!lastAdded) return;
    const timer = window.setTimeout(() => setLastAdded(null), 2200);
    return () => window.clearTimeout(timer);
  }, [lastAdded]);

  const subtotal = useMemo(
    () =>
      lines.reduce(
        (total, line) => total + getFragranceById(line.id).price * line.quantity,
        0,
      ),
    [lines],
  );

  const value = useMemo<HouseValue>(
    () => ({
      locale,
      setLocale,
      activeId,
      inChapters,
      registerChapter,
      goToChapter,
      lines,
      addLine,
      removeLine,
      subtotal,
      cartOpen,
      setCartOpen,
      lastAdded,
    }),
    [
      locale,
      activeId,
      inChapters,
      registerChapter,
      goToChapter,
      lines,
      addLine,
      removeLine,
      subtotal,
      cartOpen,
      lastAdded,
    ],
  );

  return <HouseContext.Provider value={value}>{children}</HouseContext.Provider>;
}
