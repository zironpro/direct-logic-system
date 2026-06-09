import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconBrandX } from "@/assets/icons/brands";
import { IconAtSign, IconAtSign2, IconMap, IconPhone } from "@/assets/icons/contact";

import { ContactForm } from "@/modules/contact/components/contact-form";

export const metadata: Metadata = {
	title: "Contact Direct Logic Systems - Get in Touch for IT & Digital Solutions",
	description:
		"Contact Direct Logic Systems in Dubai, UAE for expert IT services, trading solutions, and digital marketing. Call +971 4334 8774 or email sales@directls.com today.",
	keywords: [
		"contact Direct Logic Systems",
		"IT services Dubai contact",
		"trading solutions UAE",
		"digital marketing Dubai",
		"business technology contact",
		"Dubai IT company",
		"UAE technology services",
		"IT consulting Dubai",
		"software development contact",
		"network security Dubai",
	],
	openGraph: {
		title: "Contact Direct Logic Systems - Get in Touch for IT & Digital Solutions",
		description:
			"Contact Direct Logic Systems in Dubai, UAE for expert IT services, trading solutions, and digital marketing. Call +971 4334 8774 or email sales@directls.com today.",
		type: "website",
		locale: "en_US",
		siteName: "Direct Logic Systems",
		url: "/contact",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Direct Logic Systems - Get in Touch for IT & Digital Solutions",
		description:
			"Contact Direct Logic Systems in Dubai, UAE for expert IT services, trading solutions, and digital marketing. Call +971 4334 8774 or email sales@directls.com today.",
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
	alternates: {
		canonical: "/contact",
	},
	other: {
		"contact-info": "sales@directls.com",
		phone: "+971 4334 8774",
		address: "Oud Metha Road, Dubai, UAE",
		"business-hours": "Mon-Sat 8:00am-5:00pm",
	},
};

export default function ContactPage() {
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
						contactPoint: [
							{
								"@type": "ContactPoint",
								telephone: "+971-4334-8774",
								contactType: "customer service",
								availableLanguage: "English",
								hoursAvailable: {
									"@type": "OpeningHoursSpecification",
									dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
									opens: "08:00",
									closes: "17:00",
								},
							},
							{
								"@type": "ContactPoint",
								telephone: "+971-5067-56708",
								contactType: "customer service",
								availableLanguage: "English",
							},
							{
								"@type": "ContactPoint",
								telephone: "+971-501-35-6861",
								contactType: "customer service",
								availableLanguage: "English",
							},
						],
						email: "sales@directls.com",
						sameAs: ["https://x.com/direct_ls"],
						serviceArea: {
							"@type": "Country",
							name: "United Arab Emirates",
						},
						hasOfferCatalog: {
							"@type": "OfferCatalog",
							name: "IT Services",
							itemListElement: [
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "IT Services",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Trading Solutions",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Digital Marketing",
									},
								},
							],
						},
					}),
				}}
				id="contact-structured-data"
				type="application/ld+json"
			/>

			<main className="relative min-h-svh overflow-hidden py-12 md:py-16 lg:py-20" role="main">
				<BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
				<BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />

				<section aria-labelledby="contact-heading" className="container relative z-10 max-w-7xl pt-8 md:pt-12">
					<SectionHeader
						badge="Contact us"
						description="Ready to elevate your business with trusted IT, trading, or digital marketing solutions? Contact us today."
						title="Let's Build Something Amazing Together"
					/>

					<div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3 md:gap-6 md:py-12 lg:gap-8">
						{/* Contact Information Section */}
						<div className="space-y-8 md:space-y-6">
							{/* Chat Section */}
							<div className="space-y-1">
								<h2 className="font-bold text-xl md:text-2xl" id="chat-heading">
									Chat with us
								</h2>
								<p className="text-muted-foreground text-sm leading-relaxed">
									Speak to our friendly team. We're here to help you with any questions or concerns you may have.
								</p>
								<ul className="space-y-1" role="list">
									<li>
										<Link
											aria-label="Send us an email at sales@directls.com"
											className="flex items-center gap-3 rounded-md p-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
											href="mailto:sales@directls.com"
										>
											<IconAtSign2 className="size-4 shrink-0" />
											<span>Shoot us an email</span>
										</Link>
									</li>
									<li>
										<Link
											aria-label="Message us on X (formerly Twitter)"
											className="flex items-center gap-3 rounded-md p-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
											href="https://x.com/direct_ls"
											rel="noopener noreferrer"
											target="_blank"
										>
											<IconBrandX className="size-4 shrink-0" />
											<span>Message us on X</span>
										</Link>
									</li>
								</ul>
							</div>

							{/* Call Section */}
							<div className="space-y-1">
								<h2 className="font-bold text-xl md:text-2xl" id="call-heading">
									Call us
								</h2>
								<p className="text-muted-foreground text-sm leading-relaxed">Call our team Mon-Sat 8:00am-5:00pm.</p>
								<div className="flex gap-3">
									<IconPhone className="mt-1.5 size-4 shrink-0" />
									<ul className="space-y-1" role="list">
										<li>
											<Link
												aria-label="Call us at +971 4334 8774"
												className="flex items-center gap-2 rounded-md p-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
												href="tel:+97143348774"
											>
												+971 4334 8774
											</Link>
										</li>
										<li>
											<Link
												aria-label="Call us at +971 5067 56708"
												className="flex items-center gap-2 rounded-md p-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
												href="tel:+971506756708"
											>
												+971 5067 56708
											</Link>
										</li>
										<li>
											<Link
												aria-label="Call us at +971 501 35 6861"
												className="flex items-center gap-2 rounded-md p-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
												href="tel:+971501356861"
											>
												+971 501 35 6861
											</Link>
										</li>
									</ul>
								</div>
							</div>

							{/* Visit Section */}
							<div className="space-y-1">
								<h2 className="font-bold text-xl md:text-2xl" id="visit-heading">
									Visit us
								</h2>
								<p className="text-muted-foreground text-sm leading-relaxed">
									We're located in Dubai, UAE. Feel free to visit us during our business hours.
								</p>
								<ul className="space-y-1" role="list">
									<li>
										<Link
											aria-label="View our location on Google Maps"
											className="flex items-start gap-3 rounded-md p-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
											href="https://maps.app.goo.gl/1234567890"
											rel="noopener noreferrer"
											target="_blank"
										>
											<IconMap className="mt-0.5 size-4 shrink-0" />
											<span>Oud Metha Road, Dubai, UAE.</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						{/* Contact Form Section */}
						<Card className="h-fit md:col-span-2">
							<CardHeader className="gap-0 px-2 pb-1.5">
								<div className="flex items-center gap-3">
									<div className="flex size-8 items-center justify-center rounded-lg bg-primary-foreground md:size-9">
										<IconAtSign className="size-4 text-primary md:size-5" />
									</div>
									<div>
										<CardTitle className="text-base md:text-lg">Contact Information</CardTitle>
										<CardDescription className="text-muted-foreground text-xs">
											We're here to help you with any questions or concerns you may have. Please use the form below to
											get in touch with us.
										</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent className="px-4 pb-6 md:px-6 md:pb-8">
								<ContactForm />
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
