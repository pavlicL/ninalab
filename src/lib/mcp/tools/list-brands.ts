import { defineTool } from "@lovable.dev/mcp-js";
import { BRANDS } from "../content";

export default defineTool({
  name: "list_brands",
  title: "List brands",
  description:
    "List Romana Bunoza's three brands (By River Hill Croatia, Greenway, La Rent Event) with their category, page path and a short summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const brands = BRANDS.map(({ slug, name, category, path, summary }) => ({
      slug,
      name,
      category,
      path,
      summary,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(brands, null, 2) }],
      structuredContent: { brands },
    };
  },
});
