"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { IconArrowUp } from "@/assets/icons/arrows";

import { Heading } from "@/lib/mdx-utils";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
	headings: Heading[];
	className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
	const [activeId, setActiveId] = useState<string>("");
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: "-20% 0px -35% 0px" }
		);

		const elements = headings.map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
		elements.forEach((el) => observer.observe(el));

		// Show back to top button when scrolled down
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 400);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", handleScroll);
		};
	}, [headings]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (headings.length === 0) {
		return null;
	}

	return (
		<div className={cn("sticky top-20 h-fit", className)}>
			<Card>
				<CardHeader className="gap-0 px-2">
					<CardTitle className="pb-1 font-normal text-muted-foreground text-sm">Table of Contents</CardTitle>
				</CardHeader>
				<CardContent className="p-3 lg:max-h-[calc(100vh-5rem)] lg:overflow-auto">
					<nav className="space-y-2">
						{headings.map((heading, i) => (
							<Link
								className={cn(
									"block text-sm transition-colors hover:text-primary",
									activeId === heading.id ? "font-medium text-primary" : "text-foreground/90"
								)}
								href={`#${heading.id}`}
								key={`${heading.id}-${i}`}
								style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
							>
								{heading.text}
							</Link>
						))}
					</nav>
				</CardContent>
			</Card>

			{/* Back to Top Button */}
			{showBackToTop && (
				<Button className="hidden w-full lg:inline-flex" onClick={scrollToTop} size="sm" variant="ghost">
					<IconArrowUp className="mr-2 h-4 w-4" />
					Back to Top
				</Button>
			)}
		</div>
	);
}
