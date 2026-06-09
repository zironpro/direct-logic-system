import { HTMLAttributes } from "react";

export interface Heading {
	id: string;
	text: string;
	level: number;
}

// Generate a slug from text
export function generateSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

// Extract headings from MDX content using regex
export function extractHeadings(content: string): Heading[] {
	const headingRegex = /^(#{1,6})\s+(.+)$/gm;
	const matches = Array.from(content.matchAll(headingRegex));

	return matches.map((match) => {
		const level = match[1].length;
		const text = match[2].trim();
		const id = generateSlug(text);

		return { id, text, level };
	});
}

// Create heading components with IDs
export function createHeadingComponents() {
	return {
		h1: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
			const text = typeof children === "string" ? children : "";
			const id = generateSlug(text);
			return (
				<h1 id={id} {...props}>
					{children}
				</h1>
			);
		},
		h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
			const text = typeof children === "string" ? children : "";
			const id = generateSlug(text);
			return (
				<h2 id={id} {...props}>
					{children}
				</h2>
			);
		},
		h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
			const text = typeof children === "string" ? children : "";
			const id = generateSlug(text);
			return (
				<h3 id={id} {...props}>
					{children}
				</h3>
			);
		},
		h4: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
			const text = typeof children === "string" ? children : "";
			const id = generateSlug(text);
			return (
				<h4 id={id} {...props}>
					{children}
				</h4>
			);
		},
		h5: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
			const text = typeof children === "string" ? children : "";
			const id = generateSlug(text);
			return (
				<h5 id={id} {...props}>
					{children}
				</h5>
			);
		},
		h6: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
			const text = typeof children === "string" ? children : "";
			const id = generateSlug(text);
			return (
				<h6 id={id} {...props}>
					{children}
				</h6>
			);
		},
	};
}
