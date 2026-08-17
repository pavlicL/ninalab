import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Početna" },
  { to: "/o-meni", label: "O meni" },
  { to: "/usluge", label: "Usluge" },
  { to: "/radovi", label: "Radovi" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-tight text-foreground">Nail Lab by Nina</span>
          <span className="eyebrow mt-0.5 text-[0.6rem]">Nail artist · Pula</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm tracking-wide text-foreground/75 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
