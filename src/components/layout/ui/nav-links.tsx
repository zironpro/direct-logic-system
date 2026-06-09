"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "motion/react";

import { NAV_LINKS } from "@/data/constant";
import { useTrackUiAnalytics } from "@/lib/analytics-ui";
import { cn } from "@/lib/utils";

interface NavLinksProps {
	mobile?: boolean;
	onNavItemClick?: () => void;
}

export const NavLinks = ({ mobile = false, onNavItemClick }: NavLinksProps) => {
	const pathname = usePathname();
	const { trackButtonClick } = useTrackUiAnalytics();
	const placement = mobile ? "navbar_mobile" : "navbar_desktop";

	if (mobile) {
		return (
			<ul className="flex flex-col space-y-1" role="list">
				{NAV_LINKS.map((link) => {
					const isActive = pathname.startsWith(link.href);

					return (
						<li key={link.id} role="none">
							<Link
								aria-current={isActive ? "page" : undefined}
								className={cn(
									"block w-full rounded-md px-3 py-2 font-medium text-base transition-colors",
									"text-foreground/70 hover:bg-background/50 hover:text-foreground",

									isActive && "bg-primary/10 text-foreground"
								)}
								href={link.href}
								onClick={() => {
									trackButtonClick({
										cta_id: "nav_link",
										href: link.href,
										placement,
									});
									onNavItemClick?.();
								}}
								role="menuitem"
							>
								{link.label}
							</Link>
						</li>
					);
				})}
			</ul>
		);
	}

	return (
		<ul className="hidden shrink-0 items-center gap-2 md:flex" role="list">
			{NAV_LINKS.map((link) => {
				const isActive = pathname.startsWith(link.href);

				return (
					<li className="relative" key={link.id} role="none">
						<Link
							aria-current={isActive ? "page" : undefined}
							className={cn(
								"relative z-10 block shrink-0 px-3 py-2 font-medium text-foreground/70 text-sm transition-colors hover:text-foreground",

								isActive && "text-foreground"
							)}
							href={link.href}
							onClick={() =>
								trackButtonClick({
									cta_id: "nav_link",
									href: link.href,
									placement,
								})
							}
							role="menuitem"
						>
							<span className="relative z-10">{link.label}</span>
							{isActive && (
								<motion.span
									className="absolute inset-0 z-0 rounded-md bg-card/80 shadow-md shadow-primary-background/5"
									layoutId="pill-tab"
									transition={{ type: "spring", duration: 0.5 }}
								/>
							)}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};
