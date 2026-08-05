import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-foreground">Romana Bunoza</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Poduzetnica i mama. Vjerujem u zdrav dom, eleganciju i život pun smisla.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://instagram.com/bunoza_family"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              <Instagram size={16} /> @bunoza_family
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Brendovi</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/by-river-hill" className="text-foreground/75 hover:text-foreground">By River Hill Croatia</Link></li>
            <li><Link to="/greenway" className="text-foreground/75 hover:text-foreground">Greenway</Link></li>
            <li><Link to="/la-rent-event" className="text-foreground/75 hover:text-foreground">La Rent Event</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Kontakt</p>
          <a
            href="mailto:hello@romanabunoza.com"
            className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground"
          >
            <Mail size={14} /> hello@romanabunoza.com
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Zadobarje, Hrvatska</p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Romana Bunoza. Sva prava pridržana.</p>
          <p className="font-display italic">Od zdravog doma do života punog smisla.</p>
        </div>
      </div>
    </footer>
  );
}
