/**
 * OpenPanel browser SDK — set NEXT_PUBLIC_OPENPANEL_CLIENT_ID in .env.
 * Self-host: set NEXT_PUBLIC_OPENPANEL_API_URL to your API base (including /api).
 */
export const openPanelClientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID ?? "";

export const openPanelApiUrl = process.env.NEXT_PUBLIC_OPENPANEL_API_URL?.trim() || undefined;

export const isOpenPanelEnabled = Boolean(openPanelClientId);
