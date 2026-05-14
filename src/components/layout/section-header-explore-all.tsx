"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useTrackUiAnalytics } from "@/lib/analytics-ui";

interface Props {
  href: string;
}

export const SectionHeaderExploreAll = ({ href }: Props) => {
  const { trackCtaClick } = useTrackUiAnalytics();
  const path = href.startsWith("/") ? (href.split("?")[0] ?? href) : href;

  return (
    <Button asChild className="mt-2">
      <Link
        href={href}
        onClick={() =>
          trackCtaClick({
            cta_id: "section_explore_all",
            placement: "section_header",
            href: path,
          })
        }
      >
        Explore All
      </Link>
    </Button>
  );
};
