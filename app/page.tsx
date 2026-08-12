import { DiarChapter, Footer } from "@/components/artinz";
import { diar } from "@/data/fragrances";

/**
 * ARTINZ homepage — Phase 1: DIAR opening + first chapter only.
 */
export default function Home() {
  return (
    <main>
      <DiarChapter fragrance={diar} />
      <Footer />
    </main>
  );
}
