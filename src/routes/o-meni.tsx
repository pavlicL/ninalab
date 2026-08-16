import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import nina from "@/assets/nina.webp";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/o-meni")({
  head: () => ({
    meta: [
      { title: "O meni — Nina Zupčić, nail artist | Nail Lab by Nina" },
      {
        name: "description",
        content:
          "Upoznaj Ninu Zupčić, nail artisticu iz Pule. Godinu i pol iskustva u izradi noktiju, ljubav prema francheu i decentnim detaljima.",
      },
      { property: "og:title", content: "O meni — Nina Zupčić, nail artist" },
      {
        property: "og:description",
        content: "Priča o Nini Zupčić i nastanku Nail Lab by Nina u Puli.",
      },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: OMeniPage,
});

function OMeniPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <p className="eyebrow"><span className="gold-line mr-3" />O meni</p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
            Nina <span className="italic text-gold">Zupčić</span>
          </h1>
          <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-muted-foreground">
            Nail artistica iz Pule. Iza svakog nokta stoji pažnja, strpljenje i
            ljubav prema detalju.
          </p>
        </div>
        <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
          <div className="absolute inset-0 -translate-x-3 translate-y-3 border border-gold/40" />
          <img
            src={nina}
            alt="Nina Zupčić, nail artistica iz Pule"
            className="relative h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-16 lg:py-24 space-y-6 text-base lg:text-lg leading-relaxed text-muted-foreground">
        <p>
          Izradom noktiju aktivno se bavim već godinu i pol te iza sebe imam salonsko
          iskustvo i svakodnevni rad s klijenticama.
        </p>
        <p>
          U mojim rukama možeš uživati u <span className="text-foreground">gelu</span>,{" "}
          <span className="text-foreground">gel laku</span> i{" "}
          <span className="text-foreground">manikuri</span>, a posebno volim izrađivati
          elegantni french i decentne detalje koji naglašavaju prirodnu ljepotu noktiju.
        </p>
        <p>
          Ljubav prema ovom poslu oduvijek je bila moja želja. Sanjala sam o tome da
          jednog dana radim za sebe, imam slobodu stvaranja i kroz svoj rad izrazim svoju
          kreativnu i umjetničku stranu. Prve poduzetničke korake napravila sam upravo
          kroz Nail Lab by Nina i tako krenula graditi svoju priču.
        </p>
        <p>
          Iako uz redovni posao svakodnevno ulažem vrijeme, trud i ljubav u svoj beauty
          biznis, nijedan izazov nije mi prepreka kada su u pitanju moje klijentice.
          Upravo su predanost, odgovornost i vedar duh razlog zbog kojeg mi se
          klijentice uvijek rado vraćaju.
        </p>
        <blockquote className="border-l-2 border-gold pl-6 font-display italic text-2xl md:text-3xl text-foreground not-italic">
          <span className="italic">
            Vjerujem da se svaki trud, svaka uložena minuta i svako odricanje na kraju
            isplate.
          </span>
        </blockquote>
        <p>
          Ako tražiš stručnu, pedantnu i ljubaznu nail artisticu koja će s puno pažnje
          brinuti o tvojim noktima — s veseljem te očekujem.
        </p>

        <div className="pt-6">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Naruči se <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
