import { defineTool } from "@lovable.dev/mcp-js";
import { SERVICES } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List all nail services offered by Nail Lab by Nina (gel, gel lak, manikura).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});
