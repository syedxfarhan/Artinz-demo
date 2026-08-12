/**
 * ARTINZ fragrance data model.
 *
 * Product truth (names, hours, notes, prices) mirrors artinz.co.
 * Prices are AED and must not be invented or discounted.
 */

export type Locale = "en" | "de";

export type Localized = Record<Locale, string>;

export type FragranceId = "diar" | "rayan" | "sanam" | "lameis";

export type Fragrance = {
  id: FragranceId;
  name: string;
  /** Editorial timestamp — the hour this fragrance belongs to. */
  time: string;
  /** Named moment of the day. */
  hour: Localized;
  /** Animal identity of the chapter. */
  animal: Localized;
  /** Price in AED. */
  price: number;
  notes: Localized[];
  story: Localized;
  assets: {
    /** Primary product still life. */
    bottle: string;
    /** Aspect of the primary still life. */
    bottleSize: { width: number; height: number };
    /** Animal identity layer. */
    animal?: string;
    animalSize?: { width: number; height: number };
    /** Ingredient photography used as scroll-depth scent layers. */
    ingredients: { src: string; width: number; height: number }[];
  };
};

export const fragrances: Fragrance[] = [
  {
    id: "diar",
    name: "DIAR",
    time: "06:40",
    hour: { en: "DAWN", de: "MORGENDÄMMERUNG" },
    animal: { en: "FALCON", de: "FALKE" },
    price: 85,
    notes: [
      { en: "RASPBERRY", de: "HIMBEERE" },
      { en: "LEMON", de: "ZITRONE" },
      { en: "CINNAMON", de: "ZIMT" },
    ],
    story: {
      en: "Raspberry first, then cinnamon settles as the sun clears the dunes.",
      de: "Zuerst Himbeere, dann legt sich Zimt, während die Sonne über die Dünen steigt.",
    },
    assets: {
      bottle: "/artinz/diar/bottle.webp",
      bottleSize: { width: 1086, height: 1448 },
      animal: "/artinz/diar/animal.png",
      animalSize: { width: 1024, height: 1536 },
      ingredients: [
        {
          src: "/artinz/diar/ingredient-raspberry.webp",
          width: 1536,
          height: 1024,
        },
        {
          src: "/artinz/diar/ingredient-citrus-cinnamon.webp",
          width: 1536,
          height: 1024,
        },
      ],
    },
  },
  {
    id: "rayan",
    name: "RAYAN",
    time: "12:00",
    hour: { en: "NOON", de: "MITTAG" },
    animal: { en: "WHITE FALCON", de: "WEISSER FALKE" },
    price: 75,
    notes: [
      { en: "APPLE", de: "APFEL" },
      { en: "LAVENDER", de: "LAVENDEL" },
      { en: "BERGAMOT", de: "BERGAMOTTE" },
    ],
    story: {
      en: "Apple and bergamot, cut clean like glass at midday.",
      de: "Apfel und Bergamotte, klar geschnitten wie Glas am Mittag.",
    },
    assets: {
      bottle: "/artinz/rayan/bottle.webp",
      bottleSize: { width: 1086, height: 1448 },
      animal: "/artinz/rayan/animal.webp",
      animalSize: { width: 1024, height: 1536 },
      ingredients: [
        {
          src: "/artinz/rayan/ingredient-apple.webp",
          width: 1536,
          height: 1024,
        },
        {
          src: "/artinz/rayan/ingredient-lavender.webp",
          width: 1536,
          height: 1024,
        },
        {
          src: "/artinz/rayan/ingredient-bergamot.webp",
          width: 1536,
          height: 1024,
        },
      ],
    },
  },
  {
    id: "sanam",
    name: "SANAM",
    time: "18:30",
    hour: { en: "DUSK", de: "ABENDDÄMMERUNG" },
    animal: { en: "PEACOCK", de: "PFAU" },
    price: 75,
    notes: [
      { en: "BLACK CURRANT", de: "JOHANNISBEERE" },
      { en: "PEAR", de: "BIRNE" },
      { en: "IRIS", de: "IRIS" },
    ],
    story: {
      en: "Black currant over pear, and iris as the light turns violet.",
      de: "Schwarze Johannisbeere über Birne, Iris, während draußen das Licht violett wird.",
    },
    assets: {
      bottle: "/artinz/sanam/bottle.webp",
      bottleSize: { width: 1086, height: 1448 },
      animal: "/artinz/sanam/animal.webp",
      animalSize: { width: 1402, height: 1122 },
      ingredients: [
        {
          src: "/artinz/sanam/ingredient-pear-blossom.webp",
          width: 1402,
          height: 1122,
        },
      ],
    },
  },
  {
    id: "lameis",
    name: "LAMEIS",
    time: "21:15",
    hour: { en: "NIGHT", de: "NACHT" },
    animal: { en: "LEOPARD", de: "LEOPARD" },
    price: 85,
    notes: [
      { en: "MAY ROSE", de: "MAIROSE" },
      { en: "SAFFRON", de: "SAFRAN" },
      { en: "BLACK PEPPER", de: "SCHWARZER PFEFFER" },
    ],
    story: {
      en: "May rose and saffron, black pepper holding the last hour.",
      de: "Mairose und Safran, schwarzer Pfeffer hält die letzte Stunde.",
    },
    assets: {
      /* Product and leopard share one pool of light in this photograph. */
      bottle: "/artinz/lameis/stage.webp",
      bottleSize: { width: 1086, height: 1448 },
      ingredients: [
        { src: "/artinz/lameis/ingredients.webp", width: 1402, height: 1122 },
      ],
    },
  },
];

export function getFragranceById(id: FragranceId): Fragrance {
  const found = fragrances.find((fragrance) => fragrance.id === id);
  if (!found) throw new Error(`Unknown fragrance: ${id}`);
  return found;
}

export const diar = getFragranceById("diar");
export const rayan = getFragranceById("rayan");
export const sanam = getFragranceById("sanam");
export const lameis = getFragranceById("lameis");

export function formatPrice(price: number): string {
  return `AED ${price}`;
}
