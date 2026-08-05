import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getServiceTool from "./tools/get-service";
import getContactInfoTool from "./tools/get-contact-info";

export default defineMcp({
  name: "nail-lab-by-nina",
  title: "Nail Lab by Nina",
  version: "0.1.0",
  instructions:
    "Public tools for Nail Lab by Nina, a nail salon in Pula run by nail artist Nina Zupčić. Use `list_services` for the services (gel, gel lak, manikura), `get_service` for details on one, and `get_contact_info` for phone and Instagram.",
  tools: [listServicesTool, getServiceTool, getContactInfoTool],
});
