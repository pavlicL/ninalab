export type Brand = {
  slug: string;
  name: string;
  category: string;
  path: string;
  summary: string;
  details: string[];
};

export const OWNER = {
  name: "Romana Bunoza",
  tagline: "Family · Business · Style",
  location: "Zadobarje, Karlovac, Hrvatska",
  email: "hello@romanabunoza.com",
  instagram: "https://instagram.com/bunoza_family",
  site: "https://rbunoza.lovable.app",
};

export const BRANDS: Brand[] = [
  {
    slug: "by-river-hill",
    name: "By River Hill Croatia",
    category: "Vacation House",
    path: "/by-river-hill",
    summary:
      "Luksuzna kuća za odmor u Zadobarju — mir rijeke, kameni zidovi i pogled koji ostaje s vama.",
    details: [
      "Lokacija: Zadobarje kraj Karlovca, uz rijeku Koranu.",
      "Namijenjeno obiteljima, parovima i manjim grupama koje traže mir i privatnost.",
      "Upiti i rezervacije idu putem e-maila ili Instagrama.",
    ],
  },
  {
    slug: "greenway",
    name: "Greenway",
    category: "Healthy Home",
    path: "/greenway",
    summary:
      "Zdrav dom bez kemije — prirodni proizvodi i poslovna prilika za žene koje žele više slobode.",
    details: [
      "Proizvodi za čišćenje doma i njegu bez agresivne kemije.",
      "Mogućnost pridruživanja timu i rada od kuće uz mentorstvo.",
      "Zemljana, zelena filozofija: obitelj, zdravlje i održivost.",
    ],
  },
  {
    slug: "la-rent-event",
    name: "La Rent Event",
    category: "Designer Rental",
    path: "/la-rent-event",
    summary:
      "Najam dizajnerske odjeće za posebne prilike — eleganciju zaslužuje svaki trenutak.",
    details: [
      "Dizajnerske haljine i komadi za vjenčanja, proslave i poslovne evente.",
      "Osobno savjetovanje pri odabiru komada.",
      "Rezervacija termina putem Instagrama ili e-maila.",
    ],
  },
];
