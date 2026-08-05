import { defineTool } from "@lovable.dev/mcp-js";
import { OWNER } from "../content";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get the public contact details for Romana Bunoza: e-mail, Instagram, location and website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(OWNER, null, 2) }],
    structuredContent: { contact: OWNER },
  }),
});
