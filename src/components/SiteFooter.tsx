import { Link } from "@tanstack/react-router";
import { Instagram, Phone } from "lucide-react";
import { OWNER } from "@/lib/mcp/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-foreground">Nail Lab by Nina</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Nail artist Nina Zupčić — gel, gel lak i manikura u Puli. Pedantno, ljubazno
            i s puno pažnje za detalj.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.instagram.com/naillab_bynina/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              <Instagram size={16} /> @naillab_bynina
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Stranice</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/o-meni" className="text-foreground/75 hover:text-foreground">O meni</Link></li>
            <li><Link to="/usluge" className="text-foreground/75 hover:text-foreground">Usluge</Link></li>
            <li><Link to="/kontakt" className="text-foreground/75 hover:text-foreground">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Kontakt</p>
          <a
            href="tel:+385916043232"
            className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground"
          >
            <Phone size={14} /> 091 604 3232
          </a>
          <p className="mt-3 text-sm text-muted-foreground">{OWNER.address}</p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nail Lab by Nina. Sva prava pridržana.</p>
          <p className="font-display italic">Ljepota je u detaljima.</p>
        </div>
      </div>
    </footer>
  );
}
