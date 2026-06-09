"use client";

import { useOpenPanel } from "@openpanel/nextjs";

export const OP_EVENT_CTA_CLICK = "cta_click";
export const OP_EVENT_BUTTON_CLICK = "button_click";

export type UiAnalyticsPlacement = "hero" | "navbar_desktop" | "navbar_mobile" | "navbar" | "section_header" | "footer";

export function useTrackUiAnalytics() {
	const op = useOpenPanel();

	return {
		trackCtaClick: (payload: { cta_id: string; placement: UiAnalyticsPlacement; href: string }) => {
			op.track(OP_EVENT_CTA_CLICK, payload);
		},
		trackButtonClick: (payload: { cta_id: string; placement: UiAnalyticsPlacement; href: string }) => {
			op.track(OP_EVENT_BUTTON_CLICK, payload);
		},
	};
}
