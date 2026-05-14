import { OpenPanel } from "@openpanel/nextjs";

import { openPanelApiUrl, openPanelClientId } from "@/lib/openpanel-config";

let serverClient: OpenPanel | null = null;

/**
 * Server-side OpenPanel client. Requires OPENPANEL_CLIENT_SECRET and the public client id.
 */
export function getOpenPanelServer(): OpenPanel | null {
  const secret = process.env.OPENPANEL_CLIENT_SECRET?.trim();
  if (!openPanelClientId || !secret) {
    return null;
  }
  if (!serverClient) {
    serverClient = new OpenPanel({
      clientId: openPanelClientId,
      clientSecret: secret,
      ...(openPanelApiUrl ? { apiUrl: openPanelApiUrl } : {}),
    });
  }
  return serverClient;
}
