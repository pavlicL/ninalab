import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import greenway from "@/assets/greenway.jpg";
import { Leaf, Sprout, Users, ArrowUpRight, Quote } from "lucide-react";

export const Route = createFileRoute("/greenway")({
  head: () => ({
    meta: [
      { title: "Greenway — Zdrav dom bez kemije s Romanom Bunozom" },
      {
        name: "description",
        content:
          "Prirodni Greenway proizvodi za zdrav dom. Pridruži se timu i izgradi vlastiti posao iz udobnosti svog doma.",
      },
      { property: "og:title", content: "Greenway — Zdrav dom, slobodan život" },
      {
        property: "og:description",
        content: "Prirodno čišćenje, wellness i poslovna prilika koja mijenja život.",
      },
      { property: "og:image", content: greenway },
      { property: "twitter:image", content: greenway },
    ],
  }),
  component: GreenwayPage,
});

const pillars = [
  {
    icon: Leaf,
    title: "Zdrav dom",
    text: "Proizvodi bez agresivne kemije — sigurni za djecu, ljubimce i prirodu koju volimo.",
  },
  {
    icon: Sprout,
    title: "Poslovna prilika",
    text: "Gradi karijeru iz svog doma, vlastitim ritmom, uz mentorstvo i provjereni sustav.",
  },
  {
    icon: Users,
    title: "Zajednica",
    text: "Pridruži se timu žena koje se međusobno podižu, inspiriraju i rastu zajedno.",
  },
];

const benefits = [
  "Bez parabena, fosfata i agresivnih mirisa",
  "Koncentrirane formule — manje plastike, više učinka",
  "Sigurno za djecu, ljubimce i osjetljivu kožu",
  "Certificirano i testirano u Europi",
];

const testimonials = [
  {
    quote:
      "Greenway mi je vratio vrijeme. Radim iz doma, biram svoj ritam, a djeca su mi uvijek na prvom mjestu.",
    name: "Ana K.",
    role: "Mama dvoje djece, Zagreb",
    initials: "AK",
  },
  {
    quote:
      "Mislila sam da je samo posao sa strane — danas mi je glavni izvor prihoda i potpuna sloboda.",
    name: "Ivana M.",
    role: "Bivša bankarica, Split",
    initials: "IM",
  },
  {
    quote:
      "Romanino mentorstvo i ova zajednica žena promijenili su način na koji gledam na sebe i svoj potencijal.",
    name: "Marija P.",
    role: "Učiteljica, Osijek",
    initials: "MP",
  },
];

function GreenwayPage() {
  return (
    <SiteLayout>
      {/* Scoped earthy-green palette — only inside this wrapper */}
      <div
        className="greenway-theme"
        style={
          {
            // Warm cream with green undertone
            ["--gw-bg" as string]: "oklch(0.97 0.02 120)",
            ["--gw-surface" as string]: "oklch(0.94 0.03 130)",
            ["--gw-ink" as string]: "oklch(0.26 0.04 145)",
            ["--gw-ink-soft" as string]: "oklch(0.42 0.03 140)",
            ["--gw-forest" as string]: "oklch(0.32 0.06 150)",
            ["--gw-moss" as string]: "oklch(0.55 0.09 140)",
            ["--gw-sage" as string]: "oklch(0.78 0.05 135)",
            ["--gw-clay" as string]: "oklch(0.66 0.09 65)",
            ["--gw-line" as string]: "oklch(0.82 0.04 135)",
          } as React.CSSProperties
        }
      >
        <div style={{ backgroundColor: "var(--gw-bg)", color: "var(--gw-ink)" }}>
          {/* HERO */}
          <section className="relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 50% at 80% 10%, oklch(0.88 0.06 140) 0%, transparent 60%), radial-gradient(50% 40% at 10% 90%, oklch(0.9 0.05 130) 0%, transparent 65%)",
              }}
            />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <p
                  className="text-[0.7rem] tracking-[0.32em] uppercase flex items-center gap-3"
                  style={{ color: "var(--gw-moss)" }}
                >
                  <span
                    className="inline-block w-10 h-px"
                    style={{ backgroundColor: "var(--gw-moss)" }}
                  />
                  Greenway Global
                </p>
                <h1
                  className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]"
                  style={{ color: "var(--gw-forest)" }}
                >
                  Zdrav dom.
                  <br />
                  <span className="italic" style={{ color: "var(--gw-moss)" }}>
                    Slobodan
                  </span>{" "}
                  život.
                </h1>
                <p
                  className="mt-8 max-w-lg text-base md:text-lg leading-relaxed"
                  style={{ color: "var(--gw-ink-soft)" }}
                >
                  Već godinama živim s Greenwayem — bez agresivne kemije, s više vremena
                  i slobode. Otkrij proizvode koji su promijenili moj svakodnevni ritual.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide transition-colors"
                    style={{
                      backgroundColor: "var(--gw-forest)",
                      color: "var(--gw-bg)",
                    }}
                  >
                    Zatraži katalog <ArrowUpRight size={16} />
                  </Link>
                  <a
                    href="#stupovi"
                    className="inline-flex items-center gap-2 px-2 py-3.5 text-sm tracking-wide border-b transition-colors"
                    style={{
                      color: "var(--gw-forest)",
                      borderColor: "var(--gw-moss)",
                    }}
                  >
                    Saznaj više
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 relative">
                <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden">
                  <div
                    className="absolute -inset-4 border"
                    style={{ borderColor: "var(--gw-moss)", opacity: 0.4 }}
                  />
                  <img
                    src={greenway}
                    alt="Greenway prirodni proizvodi okruženi zelenim lišćem"
                    className="relative h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* PILLARS */}
          <section
            id="stupovi"
            className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28"
          >
            <div className="max-w-2xl mb-14">
              <p
                className="text-[0.7rem] tracking-[0.32em] uppercase"
                style={{ color: "var(--gw-moss)" }}
              >
                Filozofija
              </p>
              <h2
                className="mt-4 font-display text-4xl lg:text-5xl leading-tight"
                style={{ color: "var(--gw-forest)" }}
              >
                Tri korijena{" "}
                <span className="italic" style={{ color: "var(--gw-moss)" }}>
                  zdravog
                </span>{" "}
                života.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1"
                    style={{
                      backgroundColor: "var(--gw-surface)",
                      borderTop: "1px solid var(--gw-moss)",
                    }}
                  >
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                      style={{
                        backgroundColor: "var(--gw-bg)",
                        color: "var(--gw-moss)",
                      }}
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3
                      className="mt-6 font-display text-2xl"
                      style={{ color: "var(--gw-forest)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-3 leading-relaxed text-[0.95rem]"
                      style={{ color: "var(--gw-ink-soft)" }}
                    >
                      {p.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* BENEFITS STRIP */}
          <section style={{ backgroundColor: "var(--gw-surface)" }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <p
                  className="text-[0.7rem] tracking-[0.32em] uppercase"
                  style={{ color: "var(--gw-moss)" }}
                >
                  Što dobivaš
                </p>
                <h2
                  className="mt-4 font-display text-4xl lg:text-5xl leading-tight"
                  style={{ color: "var(--gw-forest)" }}
                >
                  Priroda u svakoj{" "}
                  <span className="italic" style={{ color: "var(--gw-moss)" }}>
                    bočici.
                  </span>
                </h2>
                <p
                  className="mt-6 leading-relaxed"
                  style={{ color: "var(--gw-ink-soft)" }}
                >
                  Greenway proizvodi su moja svakodnevica — od kuhinje, kupaonice do
                  njege kože. Isti učinak, bez kompromisa za zdravlje.
                </p>
              </div>
              <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex gap-4 pb-5 border-b"
                    style={{ borderColor: "var(--gw-line)" }}
                  >
                    <Leaf
                      size={18}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0"
                      style={{ color: "var(--gw-moss)" }}
                    />
                    <span style={{ color: "var(--gw-forest)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
            <div className="max-w-2xl mb-14">
              <p
                className="text-[0.7rem] tracking-[0.32em] uppercase"
                style={{ color: "var(--gw-moss)" }}
              >
                Priče iz tima
              </p>
              <h2
                className="mt-4 font-display text-4xl lg:text-5xl leading-tight"
                style={{ color: "var(--gw-forest)" }}
              >
                Žene koje su rekle{" "}
                <span className="italic" style={{ color: "var(--gw-moss)" }}>
                  da.
                </span>
              </h2>
              <p
                className="mt-5 leading-relaxed"
                style={{ color: "var(--gw-ink-soft)" }}
              >
                Iskustva žena koje su se pridružile mom timu i izgradile vlastiti put
                — svaka u svom ritmu, svaka sa svojom pričom.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="relative p-8 lg:p-10 flex flex-col"
                  style={{
                    backgroundColor: "var(--gw-surface)",
                    borderLeft: "1px solid var(--gw-moss)",
                  }}
                >
                  <Quote
                    size={28}
                    strokeWidth={1.25}
                    className="absolute top-6 right-6 opacity-30"
                    style={{ color: "var(--gw-moss)" }}
                  />
                  <blockquote
                    className="font-display italic text-xl lg:text-[1.4rem] leading-snug"
                    style={{ color: "var(--gw-forest)" }}
                  >
                    „{t.quote}"
                  </blockquote>
                  <figcaption
                    className="mt-8 pt-6 flex items-center gap-4 border-t"
                    style={{ borderColor: "var(--gw-line)" }}
                  >
                    <span
                      className="inline-flex items-center justify-center w-11 h-11 rounded-full text-sm tracking-wider"
                      style={{
                        backgroundColor: "var(--gw-bg)",
                        color: "var(--gw-moss)",
                        border: "1px solid var(--gw-moss)",
                      }}
                    >
                      {t.initials}
                    </span>
                    <span>
                      <span
                        className="block text-sm font-medium"
                        style={{ color: "var(--gw-forest)" }}
                      >
                        {t.name}
                      </span>
                      <span
                        className="block text-xs mt-0.5"
                        style={{ color: "var(--gw-ink-soft)" }}
                      >
                        {t.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>


          <section style={{ backgroundColor: "var(--gw-forest)" }}>
            <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28 text-center">
              <p
                className="text-[0.7rem] tracking-[0.32em] uppercase"
                style={{ color: "oklch(0.85 0.04 140)" }}
              >
                Prilika
              </p>
              <h2
                className="mt-6 font-display text-4xl md:text-5xl"
                style={{ color: "var(--gw-bg)" }}
              >
                Želiš{" "}
                <span className="italic" style={{ color: "var(--gw-sage)" }}>
                  home office?
                </span>
              </h2>
              <p
                className="mt-6 max-w-xl mx-auto"
                style={{ color: "oklch(0.88 0.03 135)" }}
              >
                Pridruži se mom timu i izgradi vlastitu priču. Bez ulaganja, uz
                mentorstvo i zajednicu žena koje znaju što znači sloboda.
              </p>
              <Link
                to="/kontakt"
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wide transition-colors"
                style={{
                  backgroundColor: "var(--gw-sage)",
                  color: "var(--gw-forest)",
                }}
              >
                Kontaktiraj me <ArrowUpRight size={16} />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
