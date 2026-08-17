import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BackButton } from "@/components/BackButton";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import { ArrowUpRight } from "lucide-react";

const radoviModules = import.meta.glob("../assets/radovi/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const radoviItems: GalleryItem[] = Object.keys(radoviModules)
  .sort()
  .map((path, i) => ({
    src: radoviModules[path],
    alt: `Rad Nail Lab by Nina — fotografija ${i + 1}`,
  }));

export const Route = createFileRoute("/radovi")({
  head: () => ({
    meta: [
      { title: "Radovi — Galerija noktiju | Nail Lab by Nina" },
      {
        name: "description",
        content:
          "Pogledaj sve radove Nail Lab by Nina — galerija gel noktiju, gel laka i manikure iz salona u Puli.",
      },
      { property: "og:title", content: "Radovi — Nail Lab by Nina" },
      {
        property: "og:description",
        content: "Galerija radova nail artistice Nine Zupčić u Puli.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RadoviPage,
});

function RadoviPage() {
  return (
    <SiteLayout>
      <BackButton />
      <section className="mx-auto max-w-4xl px-6 lg:px-10 pt-20 lg:pt-28 text-center">
        <p className="eyebrow"><span className="gold-line mr-3" />Radovi</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
          Svi <span className="italic text-gold">radovi.</span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-lg text-muted-foreground">
          Izbor fotografija iz salona — gel, gel lak, manikura i nail art detalji.
          Klikni na fotografiju za veći prikaz.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <GalleryGrid items={radoviItems} />
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 text-center">
          <p className="eyebrow">Termini</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight max-w-3xl mx-auto">
            Rezerviraj svoj <span className="italic text-gold">termin.</span>
          </h2>
          <Link
            to="/kontakt"
            className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Kontakt <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
