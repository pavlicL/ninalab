import { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import french from "@/assets/gallery/french.webp";
import gelNadogradnja from "@/assets/gallery/gel-nadogradnja.webp";
import manikura from "@/assets/gallery/manikura.webp";
import bademOblik from "@/assets/gallery/badem-oblik.webp";
import cvjetniDetalji from "@/assets/gallery/cvjetni-detalji.webp";
import jagodaAkcent from "@/assets/gallery/jagoda-akcent.webp";
import ljetniDetalji from "@/assets/gallery/ljetni-detalji.webp";
import leopardPrint from "@/assets/gallery/leopard-print.webp";
import tresnjinCvijet from "@/assets/gallery/tresnjin-cvijet.webp";

export type GalleryItem = {
  /** Kad dodaš fotografiju, upiši njezin URL ovdje. */
  src?: string;
  alt: string;
  caption?: string;
};

export const galleryItems: GalleryItem[] = [
  { src: french, alt: "Elegantni french na gel noktima", caption: "French" },
  { src: cvjetniDetalji, alt: "French s biserima i 3D cvjetom", caption: "Cvjetni detalji" },
  { src: gelNadogradnja, alt: "Nadogradnja gel noktiju", caption: "Gel nadogradnja" },
  { src: jagodaAkcent, alt: "Crveni gel lak s jagoda akcentom", caption: "Jagoda akcent" },
  { src: manikura, alt: "Manikura i njega zanoktica", caption: "Manikura" },
  { src: ljetniDetalji, alt: "French sa zvjezdicama i cvjetnim detaljima", caption: "Ljetni detalji" },
  { src: bademOblik, alt: "Prirodna duljina i oblik badem", caption: "Badem oblik" },
  { src: leopardPrint, alt: "Nail art s leopard uzorkom", caption: "Leopard print" },
  { src: tresnjinCvijet, alt: "Nokti s motivom trešnjinog cvijeta", caption: "Trešnjin cvijet" },
];

export function GalleryGrid({ items = galleryItems }: { items?: GalleryItem[] }) {
  const photos = items.filter((item): item is GalleryItem & { src: string } => Boolean(item.src));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (api && activeIndex !== null) {
      api.scrollTo(activeIndex, true);
    }
  }, [api, activeIndex]);

  useEffect(() => {
    if (activeIndex === null || !api) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") api.scrollPrev();
      else if (e.key === "ArrowRight") api.scrollNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, api]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {items.map((item, i) => {
          const photoIndex = item.src ? photos.findIndex((p) => p.src === item.src) : -1;
          return (
            <figure key={i} className="group">
              <div className="relative aspect-square overflow-hidden bg-secondary/60 border border-border/70 group-hover:border-gold transition-colors">
                {item.src ? (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(photoIndex)}
                    aria-label={`Otvori fotografiju: ${item.alt}`}
                    className="absolute inset-0 block w-full cursor-pointer border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-muted-foreground/60">
                    <ImageIcon size={26} strokeWidth={1.25} />
                  </div>
                )}
              </div>
              {item.caption && (
                <figcaption className="mt-3 text-xs tracking-widest uppercase text-muted-foreground">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="flex h-screen w-screen max-w-none items-center justify-center gap-0 border-none bg-background/98 p-0 sm:rounded-none">
          <DialogTitle className="sr-only">Galerija radova</DialogTitle>
          {activeIndex !== null && (
            <Carousel setApi={setApi} opts={{ startIndex: activeIndex, loop: true }} className="w-full">
              <CarouselContent>
                {photos.map((item, i) => (
                  <CarouselItem key={i} className="flex items-center justify-center">
                    <figure className="flex flex-col items-center gap-4 px-10 sm:px-20">
                      <img
                        src={item.src}
                        alt={item.alt}
                        draggable={false}
                        className="max-h-[70vh] w-auto object-contain sm:max-h-[78vh]"
                      />
                      {item.caption && <figcaption className="eyebrow">{item.caption}</figcaption>}
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-6" />
              <CarouselNext className="right-2 sm:right-6" />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
