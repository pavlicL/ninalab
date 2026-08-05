import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SERVICES } from "../content";

export default defineTool({
  name: "get_service",
  title: "Get service details",
  description: "Get full details for one service by slug: gel, gel-lak or manikura.",
  inputSchema: {
    slug: z.string().describe("Service slug: gel, gel-lak or manikura."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const service = SERVICES.find((s) => s.slug === slug.trim().toLowerCase());
    if (!service) {
      throw new ToolError(
        `Unknown service "${slug}". Available slugs: ${SERVICES.map((s) => s.slug).join(", ")}.`,
      );
    }
    return {
      content: [{ type: "text", text: JSON.stringify(service, null, 2) }],
      structuredContent: { service },
    };
  },
});
