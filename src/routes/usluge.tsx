import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/mcp/content";

export const Route = createFileRoute("/usluge")({
  head: () => ({
    meta: [
      { title: "Usluge — Gel, gel lak i manikura | Nail Lab by Nina" },
      {
        name: "description",
        content:
          "Usluge Nail Lab by Nina u Puli: izrada gel noktiju, trajni gel lak i klasična manikura uz pedantnu obradu i decentni nail art.",
      },
      { property: "og:title", content: "Usluge — Nail Lab by Nina" },
      {
        property: "og:description",
        content: "Gel, gel lak i manikura kod nail artistice Nine Zupčić u Puli.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: UslugePage,
});

function UslugePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 lg:px-10 pt-20 lg:pt-28 text-center">
        <p className="eyebrow"><span className="gold-line mr-3" />Usluge</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
          Gel, gel lak i <span className="italic text-gold">manikura.</span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-lg text-muted-foreground">
          Svaki termin počinje razgovorom o tome što želiš, a završava noktima koji
          izgledaju uredno, prirodno i njegovano.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-28 space-y-8">
        {SERVICES.map((s, i) => (
          <article
            key={s.slug}
            className="bg-card border border-border/70 p-8 md:p-12 grid md:grid-cols-12 gap-8 hover:border-gold transition-colors"
          >
            <div className="md:col-span-4">
              <p className="eyebrow text-[0.6rem]">0{i + 1}</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">
                {s.name}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {s.summary}
              </p>
              <ul className="mt-6 space-y-3">
                {s.details.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="text-gold shrink-0 mt-0.5" size={16} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        <p className="text-center text-sm text-muted-foreground pt-4">
          Cijene i trajanje termina dogovaramo osobno — javi se za informacije.
        </p>

        <div className="text-center">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Naruči se <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
