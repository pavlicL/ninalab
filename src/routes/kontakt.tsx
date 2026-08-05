import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Instagram, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Nail Lab by Nina, Pula" },
      {
        name: "description",
        content:
          "Naruči se kod Nine: telefon 091 604 3232 ili Instagram @naillab_bynina. Nail Lab by Nina, Pula.",
      },
      { property: "og:title", content: "Kontakt — Nail Lab by Nina" },
      {
        property: "og:description",
        content: "Rezerviraj termin za gel, gel lak ili manikuru u Puli.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <p className="eyebrow"><span className="gold-line mr-3" />Kontakt</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
          Rezerviraj svoj <span className="italic text-gold">termin.</span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-lg text-muted-foreground">
          Javi se pozivom, porukom ili preko Instagrama — odgovaram osobno na svaki upit.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <a
            href="tel:+385916043232"
            className="group bg-card border border-border hover:border-gold p-8 transition-colors"
          >
            <Phone className="mx-auto text-gold" size={28} />
            <p className="mt-4 eyebrow text-[0.6rem]">Telefon</p>
            <p className="mt-2 font-display text-xl text-foreground group-hover:text-gold transition-colors">
              091 604 3232
            </p>
          </a>

          <a
            href="https://www.instagram.com/naillab_bynina/"
            target="_blank"
            rel="noreferrer"
            className="group bg-card border border-border hover:border-gold p-8 transition-colors"
          >
            <Instagram className="mx-auto text-gold" size={28} />
            <p className="mt-4 eyebrow text-[0.6rem]">Instagram</p>
            <p className="mt-2 font-display text-xl text-foreground group-hover:text-gold transition-colors break-all">
              @naillab_bynina
            </p>
          </a>

          <div className="bg-card border border-border p-8">
            <MapPin className="mx-auto text-gold" size={28} />
            <p className="mt-4 eyebrow text-[0.6rem]">Lokacija</p>
            <p className="mt-2 font-display text-xl text-foreground">Pula, HR</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
