interface BrandHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export function BrandHero({ eyebrow, title, subtitle, image, imageAlt }: BrandHeroProps) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <p className="eyebrow"><span className="gold-line mr-3" />{eyebrow}</p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
            {title}
          </h1>
          <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>
        <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
          <div className="absolute inset-0 -translate-x-3 translate-y-3 border border-gold/40" />
          <img
            src={image}
            alt={imageAlt}
            className="relative h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
