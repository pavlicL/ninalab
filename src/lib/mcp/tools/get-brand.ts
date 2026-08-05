import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { BRANDS } from "../content";

export default defineTool({
  name: "get_brand",
  title: "Get brand details",
  description:
    "Get full public details for one brand by slug: by-river-hill, greenway or la-rent-event.",
  inputSchema: {
    slug: z
      .string()
      .describe("Brand slug: by-river-hill, greenway or la-rent-event."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const brand = BRANDS.find((b) => b.slug === slug.trim().toLowerCase());
    if (!brand) {
      throw new ToolError(
        `Unknown brand "${slug}". Available slugs: ${BRANDS.map((b) => b.slug).join(", ")}.`,
      );
    }
    return {
      content: [{ type: "text", text: JSON.stringify(brand, null, 2) }],
      structuredContent: { brand },
    };
  },
});
