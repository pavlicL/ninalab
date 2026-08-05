import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BrandHero } from "@/components/BrandHero";
import byRiverHill from "@/assets/by-river-hill.png";

export const Route = createFileRoute("/by-river-hill")({
  head: () => ({
    meta: [
      { title: "By River Hill Croatia — Luksuzna kuća za odmor u Zadobarju" },
      {
        name: "description",
        content:
          "Luksuzna kuća za odmor uz rijeku u Zadobarju. Kameni dom, infinity bazen i mir prirode. Rezervirajte svoj bijeg.",
      },
      { property: "og:title", content: "By River Hill Croatia — Zadobarje" },
      {
        property: "og:description",
        content: "Mir rijeke, kameni zidovi i pogled koji ostaje s vama.",
      },
      { property: "og:image", content: byRiverHill },
    ],
  }),
  component: ByRiverHillPage,
});

const features = [
  { title: "Lokacija uz rijeku", text: "Skriveni kutak Zadobarja, samo 50 minuta od Zagreba." },
  { title: "Infinity bazen", text: "Pogled na zelene bregove i tihu vodu rijeke Korane." },
  { title: "Kameni interijer", text: "Topao, autentičan dom sa svim modernim luksuzom." },
  { title: "Do 8 gostiju", text: "Idealno za obitelji i intimna okupljanja prijatelja." },
];

function ByRiverHillPage() {
  return (
    <SiteLayout>
      <BrandHero
        eyebrow="By River Hill Croatia"
        title="Bijeg uz rijeku, u srcu Hrvatske."
        subtitle="Kameni dom u Zadobarju, gdje se zrak diše drugačije. Stvoren za one koji znaju da pravi luksuz miriše na vodu, drvo i tišinu."
        image={byRiverHill}
        imageAlt="By River Hill Croatia kuća za odmor"
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {features.map((f) => (
            <div key={f.title} className="border-l border-gold pl-6">
              <h3 className="font-display text-2xl text-foreground">{f.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="eyebrow">Rezervacije</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground">
            Pronađite svoj <span className="italic text-gold">mir.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">Pišite za dostupnost i posebne ponude.</p>
          <a
            href="https://instagram.com/byriverhill__croatia"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            @byriverhill__croatia
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
