"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { IconPhone } from "@/assets/icons/contact";

import { useTrackUiAnalytics } from "@/lib/analytics-ui";

export const HeroCtas = () => {
  const { trackCtaClick } = useTrackUiAnalytics();

  return (
    <div className="flex items-start gap-3 sm:items-center sm:gap-4">
      <Button
        aria-label="Contact us to discuss your technology needs"
        asChild
        className="group w-full max-md:flex-1 sm:w-auto"
        size="lg"
      >
        <Link
          href="/contact"
          onClick={() => trackCtaClick({ cta_id: "hero_talk_to_us", placement: "hero", href: "/contact" })}
        >
          <div className="size-6 overflow-hidden rounded-full bg-primary-foreground text-foreground duration-500 group-hover:bg-muted">
            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
              <span className="flex size-6">
                <IconPhone className="m-auto size-3" />
              </span>
              <span className="flex size-6">
                <IconPhone className="m-auto size-3" />
              </span>
            </div>
          </div>
          Talk to us
        </Link>
      </Button>
      <Button
        aria-label="View our portfolio of successful projects"
        className="w-full max-md:flex-1 sm:w-auto"
        size="lg"
        variant="outline"
      >
        <Link
          href="/portfolio"
          onClick={() => trackCtaClick({ cta_id: "hero_view_portfolio", placement: "hero", href: "/portfolio" })}
        >
          View Portfolio
        </Link>
      </Button>
    </div>
  );
};
