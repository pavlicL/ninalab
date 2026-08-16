import { ImageIcon } from "lucide-react";

export type GalleryItem = {
  /** Kad dodaš fotografiju, upiši njezin URL ovdje. */
  src?: string;
  alt: string;
  caption?: string;
};

export const galleryItems: GalleryItem[] = [
  { src: french, alt: "Elegantni french na gel noktima", caption: "French" },
  { src: nudeGelLak, alt: "Gel lak u nude tonu", caption: "Nude gel lak" },
  { src: gelNadogradnja, alt: "Nadogradnja gel noktiju", caption: "Gel nadogradnja" },
  { src: manikura, alt: "Manikura i njega zanoktica", caption: "Manikura" },
  { src: detalji, alt: "Decentni detalji na noktima", caption: "Detalji" },
  { src: bademOblik, alt: "Prirodna duljina i oblik badem", caption: "Badem oblik" },
];

export function GalleryGrid({ items = galleryItems }: { items?: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
      {items.map((item, i) => (
        <figure key={i} className="group">
          <div className="relative aspect-square overflow-hidden bg-secondary/60 border border-border/70 group-hover:border-gold transition-colors">
            {item.src ? (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
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
      ))}
    </div>
  );
}
