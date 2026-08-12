import {
  CartPanel,
  CollectionIndex,
  DiarChapter,
  Footer,
  HourLine,
  HouseProvider,
  LameisChapter,
  Navigation,
  RayanChapter,
  SanamChapter,
} from "@/components/artinz";
import { SkipLink } from "@/components/artinz/SkipLink";

/**
 * ARTINZ — one house, four hours, one continuous scroll.
 */
export default function Home() {
  return (
    <HouseProvider>
      <SkipLink />
      <Navigation />
      <HourLine />
      <CartPanel />
      <main id="top">
        <h1 className="visually-hidden">ARTINZ — one house, four hours</h1>
        <DiarChapter />
        <RayanChapter />
        <SanamChapter />
        <LameisChapter />
        <CollectionIndex />
      </main>
      <Footer />
    </HouseProvider>
  );
}
