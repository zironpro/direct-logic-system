import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { SectionHeader } from "@/components/layout/section-header";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconUser } from "@/assets/icons/visions";

import { CLIENTS, COMPANY_VALUES, MISSION_ITEMS, VISION_ITEMS } from "@/data/constant";

export const metadata: Metadata = {
	title: "About Direct Logic Systems - Empowering Businesses Since 1978",
	description:
		"Direct Logic Systems LLC (DLS) has been a trusted IT partner for over 45 years. We provide end-to-end IT services, trading solutions, and digital innovations in Dubai, UAE.",
	keywords: [
		"Direct Logic Systems",
		"IT services Dubai",
		"trading solutions UAE",
		"digital services",
		"IT infrastructure",
		"network security",
		"software development",
		"digital marketing",
		"business technology solutions",
	],
	openGraph: {
		title: "About Direct Logic Systems - Empowering Businesses Since 1978",
		description:
			"Direct Logic Systems LLC (DLS) has been a trusted IT partner for over 45 years. We provide end-to-end IT services, trading solutions, and digital innovations in Dubai, UAE.",
		type: "website",
		locale: "en_US",
		siteName: "Direct Logic Systems",
	},
	twitter: {
		card: "summary_large_image",
		title: "About Direct Logic Systems - Empowering Businesses Since 1978",
		description:
			"Direct Logic Systems LLC (DLS) has been a trusted IT partner for over 45 years. We provide end-to-end IT services, trading solutions, and digital innovations in Dubai, UAE.",
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
		canonical: "/about",
	},
};

export default function AboutPage() {
	return (
		<main className="relative min-h-screen overflow-hidden">
			<BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
			<BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />

			{/* Hero Section */}
			<section className="bg-linear-to-b from-[#E5CAFF]/30 to-transparent pt-16 sm:pt-20">
				<div className="container relative z-10 max-w-4xl px-4 py-8 sm:py-12">
					<Badge>
						<BadgeDot />
						About DirectLS
					</Badge>
					<h1 className="mt-4 text-pretty font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
						Empowering Businesses Through Technology Since 1978
					</h1>
					<p className="mt-4 max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
						Delivering end-to-end IT services, trading solutions, and digital innovations that empower businesses to operate
						smarter, faster, and more securely.
					</p>
				</div>
			</section>

			{/* Journey Section */}
			<section className="container max-w-4xl px-4 py-6">
				<div className="rounded-[calc(var(--radius-3xl)+var(--spacing)*2)] bg-linear-to-b from-primary to-85% to-transparent p-2">
					<div className="rounded-3xl bg-card p-6 sm:p-8 md:p-12">
						<Badge className="mx-auto" variant="secondary">
							<BadgeDot />
							Our Journey
						</Badge>
						<h2 className="mt-3 font-medium text-xl sm:text-2xl">
							Empowering Growth, Building Trust – shaping solutions that help businesses thrive.
						</h2>
						<div className="mt-4 space-y-4 text-base text-muted-foreground sm:text-lg">
							<p>
								Direct Logic Systems LLC (DLS), headquartered in Dubai, UAE, has been a trusted partner for businesses for
								over 45 years. We provide end-to-end IT services, trading solutions, and digital services, helping
								organizations operate smarter, scale faster, and stay secure.
							</p>
							<p>
								Our mission is simple: to make technology work for you. From robust IT infrastructure and network security
								to cutting-edge software and digital marketing, we deliver solutions that integrate seamlessly with your
								business environment.
							</p>
							<p>
								Founded in 1978, Direct LS started as a dedicated IT service provider in Dubai. Over the decades, we
								expanded our capabilities to include trading solutions and digital services, evolving into a full-service
								technology partner for companies across the UAE and beyond.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="container max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
				<SectionHeader
					badge="Values"
					description="Ethics you can count on—anytime, at Direct Logic Systems."
					title="Ethics first, and second"
				/>
				<div className="grid grid-cols-1 gap-8 py-8 text-center sm:gap-12 sm:py-12 md:grid-cols-2 lg:grid-cols-3">
					{COMPANY_VALUES.map((value) => (
						<article className="flex flex-col items-center gap-4 sm:gap-6" key={value.id}>
							<value.icon className="h-16 w-16 sm:h-20 sm:w-20" />
							<h3 className="font-medium text-xl sm:text-2xl">{value.title}</h3>
							<p className="text-muted-foreground text-sm sm:text-base">{value.description}</p>
						</article>
					))}
				</div>
			</section>

			{/* Mission & Vision Section */}
			<section className="container max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
				<SectionHeader
					badge="Guiding Principles"
					description="We aim to deliver innovative, reliable tech solutions that help businesses thrive. Guided by integrity and a passion for excellence, we work toward a future where technology empowers growth and lasting success."
					title="Mission & Vision That Drive Us Forward"
				/>
				<div className="relative mt-8 sm:mt-12">
					<Card>
						<CardHeader className="px-2">
							<CardTitle className="text-base">
								Our Mission{" "}
								<span className="font-normal text-muted-foreground"> — Empowering Businesses Through Technology </span>
							</CardTitle>
						</CardHeader>
						<CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
							<p className="mb-4 text-pretty text-muted-foreground text-sm sm:mb-6 sm:text-base">
								To empower businesses with smart, dependable technology that simplifies complexity, boosts efficiency, and
								unlocks new opportunities for success.
							</p>
							<ul className="space-y-3 sm:space-y-4">
								{MISSION_ITEMS.map((item, index) => (
									<li className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3" key={index}>
										<div className="flex items-center gap-2 sm:gap-3">
											<item.icon className="size-5 shrink-0 text-primary" />
											<h3 className="font-medium text-sm sm:text-base">{item.title}</h3>
										</div>
										<span className="hidden size-1 rounded-full bg-muted-foreground/50 sm:block" />
										<p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<div className="ml-6 h-6 w-px border border-dashed sm:h-9 md:h-12" />

					<Card>
						<CardHeader className="px-2">
							<CardTitle className="text-base">
								Our Vision{" "}
								<span className="font-normal text-muted-foreground"> — Shaping the Future of Digital Solutions</span>
							</CardTitle>
						</CardHeader>
						<CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
							<p className="mb-4 text-pretty text-muted-foreground text-sm sm:mb-6 sm:text-base">
								To be the go-to partner for innovative business solutions, recognized for delivering measurable results,
								building trust, and fostering long-term relationships with our clients.
							</p>
							<ul className="space-y-3 sm:space-y-4">
								{VISION_ITEMS.map((item, index) => (
									<li className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3" key={index}>
										<div className="flex items-center gap-2 sm:gap-3">
											<item.icon className="size-5 shrink-0 text-primary" />
											<h3 className="font-medium text-sm sm:text-base">{item.title}</h3>
										</div>
										<span className="hidden size-1 rounded-full bg-muted-foreground/50 sm:block" />
										<p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Values Section */}
			<section className="container max-w-7xl px-4 pt-12 sm:pt-16 lg:pt-20" id="clients">
				<SectionHeader
					badge="Clients"
					description="Ethics you can count on—anytime, at Direct Logic Systems."
					title="Our satisfied customers"
				/>
				<div className="grid grid-cols-2 gap-4 py-8 text-center sm:grid-cols-3 sm:gap-8 sm:py-12 md:grid-cols-4 md:gap-12">
					{CLIENTS.map((value) => (
						<div className="relative aspect-video rounded-lg bg-card" key={value.logo}>
							<Image alt="Client" className="object-contain p-6" fill src={value.logo} />
						</div>
					))}
				</div>
			</section>

			{/* Join Our Team Section */}
			<section className="container max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
				<SectionHeader
					badge="Join Our Team"
					description="Join a team of passionate innovators who are shaping the future of technology. We're looking for talented individuals who share our vision of empowering businesses through cutting-edge solutions."
					title="Be Part of Something Extraordinary"
				/>

				<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<Card>
						<CardHeader className="px-1">
							<div className="flex items-center gap-3">
								<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
									<IconUser className="h-6 w-6 text-primary" />
								</div>
								<CardTitle className="text-lg">Innovation Culture</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-balance text-muted-foreground">
								Work in an environment that encourages creativity, experimentation, and continuous learning. Your ideas
								matter here.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="px-1">
							<div className="flex items-center gap-3">
								<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
									<IconUser className="h-6 w-6 text-primary" />
								</div>
								<CardTitle className="text-lg">Growth Opportunities</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-balance text-muted-foreground">
								Advance your career with mentorship programs, skill development, and opportunities to work on cutting-edge
								technologies.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="px-1">
							<div className="flex items-center gap-3">
								<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
									<IconUser className="h-6 w-6 text-primary" />
								</div>
								<CardTitle className="text-lg">Global Impact</CardTitle>
							</div>
						</CardHeader>
						<CardContent className="h-full">
							<p className="text-muted-foreground">
								Contribute to solutions that help businesses across the UAE and beyond thrive in the digital age.
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="mt-8 text-center">
					<Button asChild size="lg">
						<Link href="/careers">Apply Now</Link>
					</Button>
					<p className="mt-3 text-muted-foreground text-sm">
						Don't see a perfect fit? Send us your resume at{" "}
						<a className="text-primary hover:underline" href="mailto:careers@directls.com">
							careers@directls.com
						</a>
					</p>
				</div>
			</section>

			<Faq />
			<Cta />
		</main>
	);
}
