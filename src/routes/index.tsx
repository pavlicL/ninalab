import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { GalleryGrid } from "@/components/GalleryGrid";
import ninaAsset from "@/assets/nina.jpg.asset.json";

const nina = ninaAsset.url;
import { ArrowUpRight, Phone, Instagram, Sparkles, Heart, Gem } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nail Lab by Nina — Nokti u Puli | Gel, gel lak, manikura" },
      {
        name: "description",
        content:
          "Nail Lab by Nina — salon za nokte u Puli. Gel, gel lak i manikura uz pedantan rad, elegantni french i decentne detalje. Naruči se na 091 604 3232.",
      },
      { property: "og:title", content: "Nail Lab by Nina — Nokti u Puli" },
      {
        property: "og:description",
        content: "Gel, gel lak i manikura kod nail artistice Nine Zupčić u Puli.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Gem,
    title: "Gel",
    text: "Izrada i nadogradnja gel noktiju — čvrsto, prirodno i dugotrajno.",
  },
  {
    icon: Sparkles,
    title: "Gel lak",
    text: "Trajni lak s visokim sjajem koji izdrži tjednima bez oštećenja.",
  },
  {
    icon: Heart,
    title: "Manikura",
    text: "Njegovana i uredna ruka — temelj svakog lijepog nokta.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 lg:pt-20 pb-20 lg:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="eyebrow"><span className="gold-line mr-3" />Nail Lab by Nina</p>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.98] text-foreground">
              Nokti koji
              <br />
              naglašavaju
              <br />
              <span className="italic text-gold">prirodnu ljepotu.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Nail artist Nina Zupčić — gel, gel lak i manikura u Puli. Pedantan rad,
              elegantni french i decentni detalji za svaku priliku.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="tel:+385916043232"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                <Phone size={16} /> 091 604 3232
              </a>
              <Link
                to="/usluge"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-sm tracking-wide text-foreground border-b border-gold hover:text-gold transition-colors"
              >
                Pogledaj usluge <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="flex items-center justify-center gap-3 xl:gap-4">
              <div
                className="hidden xl:block w-20 xl:w-24 aspect-[3/4] shrink-0 overflow-hidden opacity-70 blur-[1.5px]"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 75%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 75%)",
                }}
              >
                <img
                  src={heroLeft}
                  alt="Rad Nail Lab by Nina — nude gel lak"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="relative aspect-[4/5] w-full max-w-md xl:max-w-sm shrink-0 overflow-hidden">
                <div className="absolute -inset-4 border border-gold/30" />
                <img
                  src={nina}
                  alt="Nina Zupčić, nail artist iz Pule"
                  className="relative h-full w-full object-cover"
                />
              </div>

              <div
                className="hidden xl:block w-20 xl:w-24 aspect-[3/4] shrink-0 overflow-hidden opacity-70 blur-[1.5px]"
                style={{
                  maskImage: "linear-gradient(to left, transparent, black 75%)",
                  WebkitMaskImage: "linear-gradient(to left, transparent, black 75%)",
                }}
              >
                <img
                  src={heroRight}
                  alt="Rad Nail Lab by Nina — badem oblik noktiju"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-y border-border/60 bg-secondary/50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="font-display italic text-3xl md:text-4xl text-foreground leading-snug">
            „Svaki nokat je mali detalj koji mijenja cijeli dojam."
          </p>
          <p className="eyebrow mt-6">— Nina</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow"><span className="gold-line mr-3" />Usluge</p>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-foreground leading-tight">
            Tri usluge, jedan standard.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border/70 p-8 hover:border-gold transition-colors"
            >
              <s.icon className="text-gold" size={26} />
              <h3 className="mt-5 font-display text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <Link
          to="/usluge"
          className="mt-12 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-foreground hover:text-gold transition-colors border-b border-gold pb-1"
        >
          Detalji usluga <ArrowUpRight size={14} />
        </Link>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-secondary/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="eyebrow"><span className="gold-line mr-3" />O meni</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-foreground leading-tight">
              Nina Zupčić.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-base lg:text-lg leading-relaxed text-muted-foreground">
            <p>
              Izradom noktiju bavim se već godinu i pol, uz salonsko iskustvo i
              svakodnevni rad s klijenticama. Posebno volim elegantni french i decentne
              detalje koji naglašavaju prirodnu ljepotu noktiju.
            </p>
            <Link
              to="/o-meni"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-foreground hover:text-gold transition-colors border-b border-gold pb-1"
            >
              Pročitaj cijelu priču <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 mb-12 sm:flex sm:justify-between">
          <div className="min-w-0 max-w-2xl">
            <p className="eyebrow"><span className="gold-line mr-3" />Galerija</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-foreground leading-tight">
              Radovi.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Izbor radova iz salona. Sve najnovije možeš vidjeti na Instagramu.
            </p>
          </div>
          <a
            href="https://www.instagram.com/naillab_bynina/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-sm text-foreground hover:text-gold transition-colors border-b border-gold pb-1"
          >
            <Instagram size={16} /> @naillab_bynina
          </a>
        </div>
        <GalleryGrid />
      </section>


      {/* CTA */}
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
