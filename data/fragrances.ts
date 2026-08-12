/**
 * ARTINZ fragrance data model.
 * UI for RAYAN, SANAM and LAMEIS is not built yet — data only.
 */

export type Fragrance = {
  id: string;
  name: string;
  time: string;
  accent: string;
  background: string;
  story: string;
  notes: string[];
  animal?: string;
  bottle?: string;
  animalAsset?: string;
  atmosphereAsset?: string;
  ingredientAssets?: string[];
};

export const fragrances: Fragrance[] = [
  {
    id: "diar",
    name: "DIAR",
    time: "06:40",
    accent: "#C9762E",
    background: "var(--dawn)",
    story:
      "Raspberry first, then cinnamon settles as the sun clears the dunes.",
    notes: ["RASPBERRY", "LEMON", "CINNAMON"],
    animal: "FALCON",
    bottle: "/artinz/diar/bottle.webp",
    animalAsset: "/artinz/diar/animal.png",
    atmosphereAsset: "/artinz/diar/bottle.webp",
    ingredientAssets: [
      "/artinz/diar/ingredient-raspberry.webp",
      "/artinz/diar/ingredient-citrus-cinnamon.webp",
    ],
  },
  {
    id: "rayan",
    name: "RAYAN",
    time: "12:00",
    accent: "#3A4A5E",
    background: "var(--noon)",
    story: "Apple and bergamot, cut clean like glass at midday.",
    notes: ["APPLE", "LAVENDER", "BERGAMOT"],
    animal: "FALCON",
    bottle: "/Rayan.webp",
  },
  {
    id: "sanam",
    name: "SANAM",
    time: "18:30",
    accent: "#5B3358",
    background: "var(--dusk)",
    story: "",
    notes: [],
    bottle: "/Sanam.webp",
  },
  {
    id: "lameis",
    name: "LAMEIS",
    time: "21:15",
    accent: "#8C5A4A",
    background: "var(--night-accent)",
    story: "",
    notes: [],
    bottle: "/Lameis.webp",
  },
];

export function getFragranceById(id: string): Fragrance | undefined {
  return fragrances.find((fragrance) => fragrance.id === id);
}

export const diar = getFragranceById("diar")!;
