import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { SectionHeader } from "@/components/layout/section-header";
import MDXContent from "@/components/markdown/mdx-component";
import { TableOfContents } from "@/components/markdown/table-of-contents";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";

import { BASE_URL } from "@/data/site-config";
import { createHeadingComponents, extractHeadings } from "@/lib/mdx-utils";
import { getCategoriesWithMetadata, getServiceBySlug, getServicesByCategory } from "@/modules/services/actions";
import { getCategoryMetadata } from "@/modules/services/categories";

interface Params {
	category: string;
	service: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
	const { category, service } = await params;
	const serviceData = await getServiceBySlug(service, category);

	if (!serviceData) {
		return {
			title: "Service Not Found | Direct Logic Systems",
			description: "The requested service could not be found.",
		};
	}

	const { metadata } = serviceData;
	const categoryMetadata = getCategoryMetadata(category);

	return {
		title: `${metadata.meta.title}`,
		description: metadata.meta.description,
		keywords: [
			`${metadata.title.toLowerCase()} Dubai`,
			`${metadata.title.toLowerCase()} UAE`,
			`${categoryMetadata.title.toLowerCase()} services`,
			`${categoryMetadata.title.toLowerCase()} solutions`,
			"IT services Dubai",
			"digital solutions UAE",
			"business technology solutions",
			"Dubai IT company",
			"UAE technology services",
		],
		authors: [{ name: "Direct Logic Systems" }],
		creator: "Direct Logic Systems",
		publisher: "Direct Logic Systems",
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		metadataBase: new URL(BASE_URL),
		alternates: {
			canonical: `/what-we-offer/${category}/${service}`,
		},
		openGraph: {
			type: "article",
			locale: "en_US",
			url: `${BASE_URL}/what-we-offer/${category}/${service}`,
			title: `${metadata.title} - ${categoryMetadata.title} Services | Direct Logic Systems`,
			description: metadata.meta.description,
			siteName: "Direct Logic Systems",
			images: metadata.image
				? [
						{
							url: metadata.image,
							width: 1200,
							height: 630,
							alt: metadata.title,
						},
					]
				: [
						{
							url: "/og-image.jpg",
							width: 1200,
							height: 630,
							alt: `Direct Logic Systems - ${metadata.title}`,
						},
					],
		},
		twitter: {
			card: "summary_large_image",
			title: `${metadata.title} - ${categoryMetadata.title} Services | Direct Logic Systems`,
			description: metadata.meta.description,
			images: metadata.image ? [metadata.image] : ["/og-image.jpg"],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		other: {
			"geo.region": "AE",
			"geo.placename": "Dubai",
			"geo.position": "25.2048;55.2708",
			ICBM: "25.2048, 55.2708",
		},
	};
}

export async function generateStaticParams() {
	const categories = getCategoriesWithMetadata();
	const params: { category: string; service: string }[] = [];

	for (const category of categories) {
		const services = getServicesByCategory(category.id);

		for (const service of services) {
			params.push({
				category: category.id,
				service: service.slug,
			});
		}
	}

	return params;
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
	const { category, service } = await params;
	// Fetch service data using the await service function
	const serviceData = getServiceBySlug(service, category);

	if (!serviceData) {
		notFound();
	}

	const { metadata, content } = serviceData;
	const categoryMetadata = getCategoryMetadata(category);

	// Extract headings from the content
	const headings = extractHeadings(content);
	const headingComponents = createHeadingComponents();

	return (
		<main className="relative min-h-svh overflow-hidden pt-20 lg:overflow-visible">
			<BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
			<BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />

			{/* Service Content Section */}
			<section className="container relative z-10 max-w-7xl space-y-6 pt-6 pb-20 lg:space-y-9">
				{metadata.image && (
					<div className="relative aspect-16/6 w-full overflow-hidden rounded-2xl">
						<Image alt={metadata.title} className="object-cover" fill src={metadata.image} />
					</div>
				)}

				<SectionHeader badge={category.replace(/-/g, " ")} description={metadata.meta.description} title={metadata.title} />
				{/* Breadcrumb Navigation */}
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/">Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/what-we-offer">What we offer</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href={`/what-we-offer/${category}`}>{categoryMetadata.title}</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{metadata.title}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<Separator />
				<div className="relative grid grid-cols-1 gap-8 lg:grid-cols-3">
					{/* Main Content */}

					<article className="prose prose-lg lg:col-span-2">
						<MDXContent
							components={{
								Image: (props) => <Image {...props} className="rounded-md" height={480} width={720} />,
								...headingComponents,
							}}
							source={content}
						/>
					</article>

					<TableOfContents headings={headings} />
				</div>
			</section>

			<Faq />
			<Cta />
		</main>
	);
}
