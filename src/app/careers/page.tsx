import { Metadata } from "next";
import Script from "next/script";

import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconAtSign2 } from "@/assets/icons/contact";
import { IconGlobe2, IconHeart, IconInnovation, IconSettings2 } from "@/assets/icons/values";

import { BASE_URL } from "@/data/site-config";
import { CareersForm } from "@/modules/careers/components/careers-form";

export const metadata: Metadata = {
	title: "Careers - Join Our Team | Direct Logic Systems",
	description:
		"Join Direct Logic Systems and be part of a dynamic team driving digital innovation in Dubai, UAE. Explore career opportunities in IT, software development, and digital solutions.",
	keywords: [
		"careers Dubai",
		"IT jobs UAE",
		"software development careers",
		"digital technology jobs",
		"Dubai IT careers",
		"UAE technology jobs",
		"IT consulting careers",
		"web development jobs",
		"cybersecurity careers",
		"cloud computing jobs",
		"business technology careers",
		"digital innovation jobs",
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
		canonical: "/careers",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `${BASE_URL}/careers`,
		title: "Careers - Join Our Team | Direct Logic Systems",
		description:
			"Join Direct Logic Systems and be part of a dynamic team driving digital innovation in Dubai, UAE. Explore career opportunities in IT, software development, and digital solutions.",
		siteName: "Direct Logic Systems",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Direct Logic Systems - Careers & Job Opportunities",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Careers - Join Our Team | Direct Logic Systems",
		description: "Join Direct Logic Systems and be part of a dynamic team driving digital innovation in Dubai, UAE.",
		images: ["/og-image.jpg"],
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

const COMPANY_VALUES = [
	{
		icon: IconSettings2,
		title: "Integrity",
		description: "We uphold the highest standards of honesty and ethical behavior in all our interactions.",
	},
	{
		icon: IconGlobe2,
		title: "Respect",
		description: "We value diversity and treat everyone with dignity, fairness, and mutual respect.",
	},
	{
		icon: IconHeart,
		title: "Teamwork",
		description: "We collaborate effectively, supporting each other to achieve common goals and success.",
	},
	{
		icon: IconInnovation,
		title: "Innovation",
		description: "We embrace creativity and continuous improvement to drive technological advancement.",
	},
	{
		icon: IconSettings2,
		title: "Courage",
		description: "We take calculated risks and face challenges with determination and resilience.",
	},
];

export default function CareersPage() {
	return (
		<>
			{/* Structured Data for SEO */}
			<Script
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "Direct Logic Systems",
						url: "https://directls.com",
						logo: "https://directls.com/logo.png",
						description:
							"Direct Logic Systems LLC (DLS) provides end-to-end IT services, trading solutions, and digital innovations in Dubai, UAE.",
						address: {
							"@type": "PostalAddress",
							streetAddress: "Oud Metha Road",
							addressLocality: "Dubai",
							addressCountry: "UAE",
						},
						hasOfferCatalog: {
							"@type": "OfferCatalog",
							name: "Career Opportunities",
							itemListElement: [
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "JobPosting",
										title: "Software Developer",
										description: "Join our development team to build innovative software solutions.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "JobPosting",
										title: "IT Infrastructure Specialist",
										description: "Design and implement robust IT infrastructure solutions.",
									},
								},
							],
						},
					}),
				}}
				id="careers-structured-data"
				type="application/ld+json"
			/>

			<main className="relative overflow-hidden py-12 md:py-16 lg:py-20" role="main">
				<BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
				<BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />

				{/* Company Values Section */}

				<section aria-labelledby="contact-heading" className="container relative z-10 max-w-7xl pt-8 md:pt-12">
					<SectionHeader
						badge="Contact us"
						description="Ready to elevate your business with trusted IT, trading, or digital marketing solutions? Contact us today."
						title="Let's Build Something Amazing Together"
					/>

					<div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3 md:gap-6 md:py-12 lg:gap-8">
						{/* Contact Information Section */}
						<div className="space-y-8 md:space-y-6">
							{COMPANY_VALUES.map((value) => (
								<div key={value.title}>
									<div className="mb-3 flex items-center gap-2">
										<value.icon className="size-9" />
										<CardTitle className="text-lg">{value.title}</CardTitle>
									</div>
									<CardDescription>{value.description}</CardDescription>
								</div>
							))}
						</div>

						{/* Contact Form Section */}
						<Card className="h-fit md:col-span-2">
							<CardHeader className="gap-0 px-2 pb-1.5">
								<div className="flex items-center gap-3">
									<div className="flex size-8 items-center justify-center rounded-lg bg-primary-foreground md:size-9">
										<IconAtSign2 className="size-4 text-primary md:size-5" />
									</div>
									<div>
										<CardTitle className="text-base md:text-lg">Career Application</CardTitle>
										<CardDescription className="text-muted-foreground text-xs">
											Tell us about yourself and why you'd like to join our team. We're excited to learn more about
											you!
										</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent className="px-4 pb-6 md:px-6 md:pb-8">
								<CareersForm />
							</CardContent>
						</Card>
					</div>
				</section>

				<Faq />
				<Cta />
			</main>
		</>
	);
}
