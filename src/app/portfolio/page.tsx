import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/global/cta";
import { SectionHeader } from "@/components/layout/section-header";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconArrowUpRight } from "@/assets/icons/arrows";
import { IconStar } from "@/assets/icons/star";

import { FEATURED_PROJECTS, PORTFOLIO_TESTIMONIALS } from "@/data/portfolio";
import { BASE_URL } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Portfolio - Our Projects & Case Studies | Direct Logic Systems",
  description:
    "Explore our portfolio of successful IT projects and digital solutions. From web development to enterprise software, see how we deliver innovative technology solutions for businesses in Dubai, UAE.",
  keywords: [
    "portfolio Dubai",
    "IT projects UAE",
    "web development portfolio",
    "software development projects",
    "digital solutions case studies",
    "enterprise software Dubai",
    "custom software projects",
    "IT solutions portfolio",
    "Dubai technology projects",
    "UAE digital projects",
    "business technology portfolio",
    "successful IT implementations",
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
    canonical: "/portfolio",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/portfolio`,
    title: "Portfolio - Our Projects & Case Studies | Direct Logic Systems",
    description:
      "Explore our portfolio of successful IT projects and digital solutions. From web development to enterprise software, see how we deliver innovative technology solutions for businesses in Dubai, UAE.",
    siteName: "Direct Logic Systems",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Direct Logic Systems - Portfolio & Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Our Projects & Case Studies | Direct Logic Systems",
    description: "Explore our portfolio of successful IT projects and digital solutions in Dubai, UAE.",
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

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden" id="main-content" role="main">
      {/* Hero Section */}
      <BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
      <BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />
      <header className="bg-linear-to-b from-[#E5CAFF]/30 to-transparent" role="banner">
        <div className="container relative z-10 max-w-7xl px-4 pt-16 md:px-6 md:pt-24 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge>
              <BadgeDot />
              Our Work Speaks
            </Badge>
            <h1 className="mt-3 font-bold text-3xl leading-[1.15] md:text-4xl lg:text-5xl">
              Explore the <span className="text-primary">Experience</span>
            </h1>
            <p className="mt-3 text-balance text-base text-muted-foreground leading-relaxed md:text-lg">
              Dive into our diverse range of projects. From web development to IT solutions, see how we bring ideas to
              life and deliver results for our clients.
            </p>
          </div>
        </div>
      </header>
      {/* Our Case Studies / Projects Section */}
      <section aria-labelledby="featured-projects-heading" className="container relative z-10 max-w-7xl pt-20">
        <SectionHeader
          badge="Featured Work"
          description="A selection of our standout projects, showcasing the creativity, precision, and problem-solving we bring to every client partnership."
          title="Projects That Define Our Craft"
        />

        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <Card className="group transition-all duration-300 hover:shadow-lg" key={project.id}>
              <CardHeader className="flex items-center justify-between px-2 pb-1">
                <CardTitle className="text-muted-foreground text-sm">{project.category}</CardTitle>

                <Button asChild size="icon" variant="secondary">
                  <Link href={project.href || "#"} rel="noopener noreferrer" target="_blank">
                    <IconArrowUpRight />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="flex h-full flex-col justify-between p-1">
                {project.image && (
                  <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-md bg-muted">
                    <Image alt={project.name} className="object-cover" fill src={project.image} />
                  </div>
                )}
                <CardHeader className="p-3">
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <ul className="flex flex-wrap gap-2 p-3">
                  {project.tags.map((tag) => (
                    <li className="rounded-md bg-primary-foreground/40 px-2.5 py-1 text-primary text-xs" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Case Studies Section */}
      {/* <section aria-labelledby="case-studies-heading" className="bg-muted/50">
        <div className="container max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <Badge variant="secondary">
              <BadgeDot />
              In-Depth Insights
            </Badge>
            <h2 className="mt-3 font-bold text-2xl leading-tight sm:text-3xl lg:text-4xl" id="case-studies-heading">
              How We Deliver Results
            </h2>
            <p className="mt-3 text-balance text-base text-muted-foreground leading-relaxed sm:text-lg">
              Take a closer look at the challenges, solutions, and results from select projects. Each case study
              highlights our problem-solving approach, technical expertise, and measurable outcomes.
            </p>
          </div>

          <div className="space-y-12">
            {CASE_STUDIES.map((caseStudy, index) => (
              <Card key={caseStudy.id}>
                <CardHeader>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-semibold text-xl">{caseStudy.clientName}</h3>
                      <p className="text-muted-foreground text-sm">{caseStudy.industry}</p>
                    </div>
                    <Badge variant="outline">Case Study {index + 1}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Challenge</h4>
                      <p className="text-muted-foreground text-sm">{caseStudy.challenge}</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Solution</h4>
                      <p className="text-muted-foreground text-sm">{caseStudy.solution}</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, resultIndex) => (
                          <li className="flex items-start gap-2 text-sm" key={resultIndex}>
                            <IconCheck className="mt-0.5 size-4 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      ;{/* Testimonials Section */}
      <section aria-labelledby="testimonials-heading" className="container max-w-7xl py-16 md:py-24 lg:py-32">
        <SectionHeader
          badge="What Clients Say"
          description="Hear from our satisfied clients who trust Direct LS for IT solutions and web development."
          title="Think Outside the Box"
        />

        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_TESTIMONIALS.map((feedback) => (
            <Card key={feedback.id} role="listitem">
              <CardContent className="h-full">
                <CardHeader aria-label="5 out of 5 stars rating" className="flex items-center gap-2" role="img">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <IconStar aria-hidden="true" className="size-4 shrink-0 text-yellow-500 md:size-5" key={index} />
                  ))}
                </CardHeader>
                <blockquote className="mt-3">
                  <p className="text-sm md:text-base">{feedback.content}</p>
                </blockquote>
              </CardContent>
              <CardFooter>
                <cite className="not-italic">
                  <h3 className="font-medium text-sm md:text-base">{feedback.author}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{feedback.company}</p>
                </cite>
                <Button size="icon" variant="secondary">
                  <IconArrowUpRight aria-hidden="true" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <Cta disableBg />
    </main>
  );
}
