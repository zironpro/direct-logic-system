export interface CategoryMetadata {
	id: string;
	title: string;
	description: string;
}

export const CATEGORIES: Record<string, CategoryMetadata> = {
	"it-solutions": {
		id: "it-solutions",
		title: "IT Services & Support",
		description:
			"From strategic IT consulting to reliable infrastructure and fast 2-hour on-site support, we keep your systems secure and efficient.",
	},

	"trading-solutions": {
		id: "trading-solutions",
		title: "Trading Solutions",
		description:
			"Source electronics, IT equipment, and industrial products from trusted global suppliers with quality assurance and competitive pricing.",
	},
	"software-marketing": {
		id: "software-marketing",
		title: "Software & Digital Marketing",
		description:
			"Custom software development, modern web solutions, and data-driven marketing campaigns to boost your digital presence and business growth.",
	},
	// To add a new category, simply add it here:
	// "new-category": {
	//   id: "new-category",
	//   title: "New Category Title",
	//   description: "Custom description for the new category that will appear on the website."
	// }
};

export function getCategoryMetadata(categoryId: string): CategoryMetadata {
	const metadata = CATEGORIES[categoryId];

	if (metadata) {
		return metadata;
	}

	// Fallback for unknown categories
	const fallbackTitle = categoryId.charAt(0).toUpperCase() + categoryId.slice(1).replace(/[-&]/g, " ");

	return {
		id: categoryId,
		title: fallbackTitle,
		description: `Explore our ${fallbackTitle.toLowerCase()} services and solutions designed to meet your business needs.`,
	};
}
