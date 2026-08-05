import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Instagram, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Romana Bunoza" },
      {
        name: "description",
        content: "Kontaktiraj Romanu Bunozu za suradnju, rezervacije ili poslovne prilike.",
      },
      { property: "og:title", content: "Kontakt — Romana Bunoza" },
      { property: "og:description", content: "Pišite za suradnju, rezervacije ili Greenway priliku." },
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
          Možeš i ti, <span className="italic text-gold">piši mi.</span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-lg text-muted-foreground">
          Suradnja, rezervacije, poslovna prilika — odgovaram osobno na svaku poruku.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <a
            href="https://instagram.com/bunoza_family"
            target="_blank"
            rel="noreferrer"
            className="group bg-card border border-border hover:border-gold p-8 transition-colors"
          >
            <Instagram className="mx-auto text-gold" size={28} />
            <p className="mt-4 eyebrow text-[0.6rem]">Instagram</p>
            <p className="mt-2 font-display text-xl text-foreground group-hover:text-gold transition-colors">
              @bunoza_family
            </p>
          </a>

          <a
            href="mailto:hello@romanabunoza.com"
            className="group bg-card border border-border hover:border-gold p-8 transition-colors"
          >
            <Mail className="mx-auto text-gold" size={28} />
            <p className="mt-4 eyebrow text-[0.6rem]">E-mail</p>
            <p className="mt-2 font-display text-xl text-foreground group-hover:text-gold transition-colors break-all">
              hello@romanabunoza.com
            </p>
          </a>

          <div className="bg-card border border-border p-8">
            <MapPin className="mx-auto text-gold" size={28} />
            <p className="mt-4 eyebrow text-[0.6rem]">Lokacija</p>
            <p className="mt-2 font-display text-xl text-foreground">Zadobarje, HR</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
