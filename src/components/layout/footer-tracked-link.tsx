"use client";

import type { ComponentProps } from "react";
import Link from "next/link";

import { useTrackUiAnalytics } from "@/lib/analytics-ui";

function hrefForAnalytics(href: string): string {
  if (href.startsWith("tel:")) {
    return "tel";
  }
  if (href.startsWith("mailto:")) {
    return "mailto";
  }
  if (href.startsWith("http")) {
    return "external";
  }
  if (href.startsWith("/")) {
    return href.split("?")[0] ?? href;
  }
  return "unknown";
}

type LinkProps = ComponentProps<typeof Link>;

interface FooterTrackedLinkProps
  extends Pick<LinkProps, "href" | "className" | "children" | "aria-label" | "rel" | "target"> {
  cta_id: string;
}

export const FooterTrackedLink = ({ href, cta_id, className, children, ...rest }: FooterTrackedLinkProps) => {
  const { trackCtaClick } = useTrackUiAnalytics();
  const resolvedHref = typeof href === "string" ? href : String(href);

  return (
    <Link
      className={className}
      href={href}
      onClick={() =>
        trackCtaClick({
          cta_id,
          href: hrefForAnalytics(resolvedHref),
          placement: "footer",
        })
      }
      {...rest}
    >
      {children}
    </Link>
  );
};
