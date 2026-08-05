import { defineMcp } from "@lovable.dev/mcp-js";
import listBrandsTool from "./tools/list-brands";
import getBrandTool from "./tools/get-brand";
import getContactInfoTool from "./tools/get-contact-info";

export default defineMcp({
  name: "river-hill-la-rent",
  title: "River Hill & La Rent",
  version: "0.1.0",
  instructions:
    "Public tools for Romana Bunoza's website. Use `list_brands` to see the three brands (By River Hill Croatia vacation house, Greenway healthy home, La Rent Event designer clothing rental), `get_brand` for details on one of them, and `get_contact_info` for public contact details.",
  tools: [listBrandsTool, getBrandTool, getContactInfoTool],
});
