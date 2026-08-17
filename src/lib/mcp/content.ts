export type Service = {
  slug: string;
  name: string;
  summary: string;
  details: string[];
};

export const OWNER = {
  name: "Nina Zupčić",
  brand: "Nail Lab by Nina",
  tagline: "Nail artist · Pula",
  phone: "091 604 3232",
  instagram: "https://www.instagram.com/naillab_bynina/",
  address: "Mirna 2, Kaštanjer, Pula",
};

export const SERVICES: Service[] = [
  {
    slug: "gel",
    name: "Gel",
    summary: "Izrada i nadogradnja noktiju gelom — čvrsto, prirodno i dugotrajno.",
    details: [
      "Izrada gel noktiju prilagođena obliku tvoje ruke.",
      "Popravak i nadogradnja postojećih noktiju.",
      "Elegantni french i decentni nail art detalji.",
    ],
  },
  {
    slug: "gel-lak",
    name: "Gel lak",
    summary: "Trajni lak s visokim sjajem koji izdrži tjednima bez oštećenja.",
    details: [
      "Široka paleta nijansi — od nude tonova do izražajnih boja.",
      "Uredna priprema nokta i skidanje prethodnog laka.",
      "Idealno za one koje žele prirodnu dužinu i čist izgled.",
    ],
  },
  {
    slug: "manikura",
    name: "Manikura",
    summary: "Njegovana i uredna ruka — temelj svakog lijepog nokta.",
    details: [
      "Oblikovanje nokta i obrada zanoktica.",
      "Njega kutikule i hidratacija.",
      "Može se kombinirati s gelom ili gel lakom.",
    ],
  },
];
