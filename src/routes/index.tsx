import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroRomana from "@/assets/hero-romana.png";
import byRiverHill from "@/assets/by-river-hill.png";
import greenway from "@/assets/greenway.jpg";
import laRentEvent from "@/assets/la-rent-event.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Romana Bunoza — Poduzetnica, Family · Business · Style" },
      {
        name: "description",
        content:
          "Službena stranica Romane Bunoze. By River Hill Croatia, Greenway i La Rent Event — od zdravog doma bez kemije do života punog smisla.",
      },
      { property: "og:title", content: "Romana Bunoza — Family · Business · Style" },
      {
        property: "og:description",
        content: "Tri brenda, jedna priča. Poduzetnica, mama i ljubiteljica elegancije.",
      },
      { property: "og:image", content: heroRomana },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const brands = [
  {
    to: "/by-river-hill" as const,
    eyebrow: "Vacation House",
    title: "By River Hill Croatia",
    description:
      "Luksuzna kuća za odmor u Zadobarju. Mir rijeke, kameni zidovi i pogled koji ostaje s vama.",
    image: byRiverHill,
  },
  {
    to: "/greenway" as const,
    eyebrow: "Healthy Home",
    title: "Greenway",
    description:
      "Zdrav dom bez kemije. Prirodni proizvodi koji su promijenili moj život i život moje obitelji.",
    image: greenway,
  },
  {
    to: "/la-rent-event" as const,
    eyebrow: "Designer Rental",
    title: "La Rent Event",
    description:
      "Najam dizajnerske odjeće za posebne trenutke. Eleganciju zaslužuje svaka prilika.",
    image: laRentEvent,
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 lg:pt-20 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="eyebrow"><span className="gold-line mr-3" />Romana Bunoza</p>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.98] text-foreground">
              Family heart.
              <br />
              <span className="italic text-gold">Business</span> mind.
              <br />
              Timeless style.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Poduzetnica, mama i vječita zaljubljenica u eleganciju. Vodim tri brenda
              koji odražavaju moje vrijednosti — zdravlje, lijepo i smisleno.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                Kontaktiraj me <ArrowUpRight size={16} />
              </Link>
              <a
                href="#brendovi"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-sm tracking-wide text-foreground border-b border-gold hover:text-gold transition-colors"
              >
                Otkrij brendove
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden">
              <div className="absolute -inset-4 border border-gold/30" />
              <img
                src={heroRomana}
                alt="Romana Bunoza"
                className="relative h-full w-full object-cover"
                width={1280}
                height={1600}
              />
            </div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 bg-background border border-border px-6 py-4 shadow-soft">
              <p className="font-display italic text-2xl text-foreground">26.2k</p>
              <p className="eyebrow mt-1 text-[0.6rem]">Instagram zajednica</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="border-y border-border/60 bg-secondary/50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="font-display italic text-3xl md:text-4xl text-foreground leading-snug">
            „Od zdravog doma bez kemije do života punog smisla."
          </p>
          <p className="eyebrow mt-6">— Romana</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <p className="eyebrow"><span className="gold-line mr-3" />O meni</p>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-foreground leading-tight">
            Žena iza tri priče.
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6 text-base lg:text-lg leading-relaxed text-muted-foreground">
          <p>
            Već godinama gradim svijet u kojem se obitelj, posao i estetika ne isključuju
            — već nadopunjuju. Vjerujem da svaka žena zaslužuje dom u kojem diše čisto,
            posao u kojem rasla i trenutke u kojima se osjeća prelijepo.
          </p>
          <p>
            Kroz <em className="text-foreground not-italic font-medium">By River Hill Croatia</em>,
            <em className="text-foreground not-italic font-medium"> Greenway</em> i
            <em className="text-foreground not-italic font-medium"> La Rent Event</em> dijelim
            ono što sama živim — mir, zdravlje i eleganciju, bez kompromisa.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/60">
            <div>
              <p className="font-display text-3xl text-foreground">3</p>
              <p className="eyebrow mt-1 text-[0.6rem]">Brenda</p>
            </div>
            <div>
              <p className="font-display text-3xl text-foreground">26k+</p>
              <p className="eyebrow mt-1 text-[0.6rem]">Followers</p>
            </div>
            <div>
              <p className="font-display text-3xl text-foreground">∞</p>
              <p className="eyebrow mt-1 text-[0.6rem]">Inspiracije</p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brendovi" className="bg-secondary/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow"><span className="gold-line mr-3" />Brendovi</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-foreground leading-tight">
              Tri svijeta, jedna filozofija.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {brands.map((b) => (
              <Link
                key={b.to}
                to={b.to}
                className="group block bg-card border border-border/70 hover:border-gold transition-all duration-500 hover:shadow-elegant"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="eyebrow text-[0.6rem]">{b.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl text-foreground">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-foreground group-hover:text-gold transition-colors">
                    Saznaj više <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <p className="eyebrow">Suradnja</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight max-w-3xl mx-auto">
          Možeš i ti — <span className="italic text-gold">piši mi.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
          Bilo da te zanima boravak u Zadobarju, prirodni proizvodi za dom ili savršena
          haljina za posebnu prigodu — tu sam.
        </p>
        <Link
          to="/kontakt"
          className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary/90 transition-colors"
        >
          Kontaktiraj me <ArrowUpRight size={16} />
        </Link>
      </section>
    </SiteLayout>
  );
}
