import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BrandHero } from "@/components/BrandHero";
import laRentEvent from "@/assets/la-rent-event.jpg";

export const Route = createFileRoute("/la-rent-event")({
  head: () => ({
    meta: [
      { title: "La Rent Event — Najam dizajnerske odjeće" },
      {
        name: "description",
        content:
          "Najam dizajnerske odjeće za vjenčanja, gala večeri i posebne prigode. Eleganciju zaslužuje svaki trenutak.",
      },
      { property: "og:title", content: "La Rent Event — Designer Rental" },
      {
        property: "og:description",
        content: "Birane dizajnerske haljine za nezaboravne trenutke.",
      },
      { property: "og:image", content: laRentEvent },
    ],
  }),
  component: LaRentEventPage,
});

const occasions = ["Vjenčanja", "Gala večeri", "Krštenja", "Poslovni eventi", "Fotografiranja", "Svečane večere"];

function LaRentEventPage() {
  return (
    <SiteLayout>
      <BrandHero
        eyebrow="La Rent Event"
        title="Eleganciju zaslužuje svaki trenutak."
        subtitle="Pažljivo birane dizajnerske haljine i odjevne kombinacije za najvažnije dane. Zablistaj bez kompromisa — i bez kupovine."
        image={laRentEvent}
        imageAlt="La Rent Event dizajnerske haljine"
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow"><span className="gold-line mr-3" />Filozofija</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-foreground leading-tight">
              Manje vlasništva, više ljepote.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Vjerujemo da svaka žena zaslužuje osjećaj savršene haljine — bez gomilanja u ormaru,
              bez kompromisa s kvalitetom. Najam je nova elegancija.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-6">Za sve prigode</p>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
              {occasions.map((o) => (
                <li key={o} className="font-display text-2xl text-foreground border-b border-border/60 pb-3">
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="eyebrow">Rezervacija</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground">
            Pronađi svoju <span className="italic text-gold">haljinu.</span>
          </h2>
          <a
            href="https://instagram.com/larent_event"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            @larent_event
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
