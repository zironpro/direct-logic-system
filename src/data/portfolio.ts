export interface PortfolioProject {
	id: number;
	name: string;
	category: string;
	description: string;
	image: string;
	tags: string[];
	href?: string;
}

export interface CaseStudy {
	id: number;
	clientName: string;
	industry: string;
	challenge: string;
	solution: string;
	results: string[];
	image?: string;
}

export interface PortfolioTestimonial {
	id: number;
	content: string;
	author: string;
	position: string;
	company: string;
}

export const FEATURED_PROJECTS: PortfolioProject[] = [
	{
		id: 1,
		name: "Manar Events",
		image: "/images/portfolio/manar-events.webp",
		category: "Web Design & Development",
		description: "A comprehensive web platform for event management and coordination services.",
		tags: ["Web Design", "Development", "Event Management", "Responsive"],
		href: "https://www.manarevents.com/",
	},
	{
		id: 2,
		name: "Almanar Furnishings",
		image: "/images/portfolio/almanar.webp",
		category: "Web Design & Development",
		description: "Modern e-commerce website for premium furniture and home furnishings.",
		tags: ["E-commerce", "Web Design", "Furniture", "Online Store"],
		href: "http://www.almanarfurnishings.com/",
	},
	{
		id: 3,
		name: "DMD Care",
		image: "/images/portfolio/dmd-care.webp",
		category: "Web Design & Development",
		description: "Healthcare-focused website providing information and services for patient care.",
		tags: ["Healthcare", "Web Design", "Patient Care", "Information Portal"],
		href: "https://www.dmdcare.com/",
	},
	{
		id: 4,
		name: "Kursii",
		image: "/images/portfolio/kursii.webp",
		category: "Web Design & Development",
		description: "Innovative platform for educational services and learning management.",
		tags: ["Education", "Web Design", "Learning Platform", "E-learning"],
		href: "https://www.kursii.com/",
	},
	{
		id: 5,
		name: "Abhath UAE",
		image: "/images/portfolio/abhath.webp",
		category: "Web Design & Development",
		description: "Research and development company website showcasing innovation and expertise.",
		tags: ["Research", "Web Design", "Innovation", "Corporate"],
		href: "https://www.abhathuae.com/",
	},
];

export const CASE_STUDIES: CaseStudy[] = [
	{
		id: 1,
		clientName: "TechCorp Solutions",
		industry: "Technology Services",
		challenge:
			"Facing frequent system downtime and security vulnerabilities, TechCorp needed a complete IT infrastructure overhaul to support their growing operations across multiple locations.",
		solution:
			"We implemented a comprehensive cloud-based infrastructure with redundant systems, advanced security protocols, and 24/7 monitoring. Our solution included automated backups, disaster recovery, and real-time threat detection.",
		results: [
			"99.9% uptime achieved",
			"60% reduction in security incidents",
			"40% improvement in system performance",
			"50% cost savings on IT operations",
		],
	},
	{
		id: 2,
		clientName: "Global Retail Chain",
		industry: "Retail & E-commerce",
		challenge:
			"A major retail chain needed to modernize their online presence and integrate their physical stores with digital platforms to compete in the evolving market.",
		solution:
			"We developed a unified e-commerce platform with inventory management, customer relationship tools, and seamless integration between online and offline operations.",
		results: [
			"300% increase in online sales",
			"45% improvement in customer retention",
			"Streamlined inventory management",
			"Enhanced customer experience across all touchpoints",
		],
	},
	{
		id: 3,
		clientName: "Manufacturing Plus",
		industry: "Manufacturing",
		challenge:
			"A manufacturing company struggled with inefficient supply chain management and communication gaps between suppliers and clients, leading to delays and increased costs.",
		solution:
			"We created a comprehensive B2B trading portal that automated procurement processes, improved supplier-client communication, and provided real-time tracking and analytics.",
		results: [
			"35% reduction in procurement time",
			"25% decrease in supply chain costs",
			"Improved supplier relationships",
			"Enhanced transparency and accountability",
		],
	},
];

export const PORTFOLIO_TESTIMONIALS: PortfolioTestimonial[] = [
	{
		id: 1,
		content:
			"We've been extremely impressed with Direct LS IT services. They have done everything from removing a bad virus from one of our laptops. When it comes to IT support, Direct LS really offers a pro-active and complete solution.",
		author: "Christopher Bush",
		position: "",
		company: "South Ceasarview",
	},
	{
		id: 2,
		content:
			"I have used Direct LS LLC for many years. They offer an excellent all-round dedicated service every time. Their advice is always excellent. The rates fantastic and work faultless. A wonderful company to deal with.",
		author: "Mark Peter",
		position: "",
		company: "West Sussex",
	},
	{
		id: 3,
		content:
			"Direct LS is one of the best service providers our organization has had the pleasure of using. We needed an entire overhaul of our outdated computers. We extend our highest recommendation for Direct LS.",
		author: "Stephen Shaw",
		position: "",
		company: "Surrey",
	},
];
