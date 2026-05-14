import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { SectionHeader } from "@/components/layout/section-header";
import { Badge, BadgeDot } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconArrowUpRight } from "@/assets/icons/arrows";
import { IconDirectWatermark } from "@/assets/logo";

import { BASE_URL } from "@/data/site-config";
import { getCategoriesWithMetadata, getServicesByCategory } from "@/modules/services/actions";
import { getCategoryMetadata } from "@/modules/services/categories";

interface Params {
  category: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  const categoryMetadata = getCategoryMetadata(category);

  return {
    title: `${categoryMetadata.title} Solutions - Direct Logic Systems`,
    description: categoryMetadata.description,
    keywords: [
      `${categoryMetadata.title.toLowerCase()} services Dubai`,
      `${categoryMetadata.title.toLowerCase()} solutions UAE`,
      `${categoryMetadata.title.toLowerCase()} Dubai`,
      `${categoryMetadata.title.toLowerCase()} UAE`,
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
      canonical: `/what-we-offer/${category}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${BASE_URL}/what-we-offer/${category}`,
      title: ` ${categoryMetadata.title} Solutions - Direct Logic Systems`,
      description: categoryMetadata.description,
      siteName: "Direct Logic Systems",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Direct Logic Systems - ${categoryMetadata.title} Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ` ${categoryMetadata.title} Solutions - Direct Logic Systems`,
      description: categoryMetadata.description,
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
}

export async function generateStaticParams() {
  const categories = await getCategoriesWithMetadata();

  return categories.map((category) => ({
    category: category.id,
  }));
}

export default async function ServicesCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;

  const categoryMetadata = getCategoryMetadata(category);
  const categoryServices = await getServicesByCategory(category);

  return (
    <main className="relative min-h-svh overflow-hidden pt-24">
      <BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
      <BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />
      <div className="container relative z-10 max-w-7xl space-y-2 overflow-hidden rounded-4xl bg-radial-[105%_100%_at_50%_0%] from-[#6DA3FF] via-55% via-secondary to-primary px-4 py-12 text-center text-background shadow-[0_12px_42px_0_oklch(0.2788_0.0909_306.27/40%),inset_0_1px_42px_12px_oklch(1_0_0_/20%)] md:space-y-6 md:px-6 md:py-16 lg:px-8">
        <Badge className="relative z-10" variant="outline">
          <BadgeDot />
          What we offer
        </Badge>
        <h2
          className="relative z-10 text-balance font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          id="cta-heading"
        >
          Empowering your business with <br />
          technology, expertise, and innovation.
        </h2>
        <p className="relative z-10 mx-auto max-w-6xl text-balance text-base leading-relaxed">
          At Direct Logic Systems, we deliver end-to-end solutions that help you operate smarter, scale faster, and stay
          secure. Whether you need robust IT infrastructure, proven industry insights, or digital tools for the future,
          we&apos;ve got you covered.
        </p>

        <IconDirectWatermark aria-hidden="true" className="absolute -top-3/4 -left-12 hidden text-white/5 lg:block" />
        <IconDirectWatermark
          aria-hidden="true"
          className="absolute -right-20 -bottom-3/4 hidden -scale-x-90 text-white/5 lg:block"
        />
      </div>

      <section className="container max-w-7xl pt-14">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-6">
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
              <BreadcrumbPage>{categoryMetadata.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <SectionHeader
          badge={categoryMetadata.title}
          description={categoryMetadata.description}
          title={`${categoryMetadata.title} Solutions`}
        />
        <div className="grid grid-cols-1 gap-3 py-14 md:grid-cols-2 lg:grid-cols-3">
          {categoryServices.map((service) => (
            <Card className="group relative transition-all duration-300 hover:shadow-lg" key={service.id}>
              <Link className="absolute inset-0 z-10" href={`/what-we-offer/${category}/${service.slug}`} />
              <CardContent className="flex h-full flex-col p-1">
                {service.image && (
                  <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-md bg-muted">
                    <Image alt={service.title} className="object-cover" fill src={service.image} />
                  </div>
                )}
                <CardHeader className="p-3">
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.meta.description}</CardDescription>
                </CardHeader>
              </CardContent>
              <CardFooter className="flex items-center justify-between px-2 pb-1">
                <CardTitle className="text-muted-foreground text-sm">Explore</CardTitle>

                <Button size="icon" variant="secondary">
                  <IconArrowUpRight />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Faq />
      <Cta />
    </main>
  );
}
