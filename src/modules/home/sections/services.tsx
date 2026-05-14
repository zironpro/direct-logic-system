import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { IconArrowUpRight } from "@/assets/icons/arrows";

import { getCategoriesWithMetadata, getServicesByCategory } from "@/modules/services/actions";

export const Services = () => {
  const allCategories = getCategoriesWithMetadata();

  return (
    <section
      aria-labelledby="services-heading"
      className="container max-w-7xl space-y-8 px-4 pb-16 md:space-y-10 md:px-6 md:pb-24 lg:px-8 lg:pb-32"
    >
      <SectionHeader
        badge="What we offer"
        description="Expanding Possibilities. Being the leading IT service provider in Dubai, UAE portfolio of our services are meant to offer you a comprehensive IT support services in Dubai, UAE."
        title="Our Services"
      />
      <div
        aria-label="Our services"
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        role="list"
      >
        {allCategories.map((category) => {
          const categoryServices = getServicesByCategory(category.id);
          const totalServices = categoryServices.length;
          const displayedServices = categoryServices.slice(0, 4);
          const remainingCount = totalServices - 4;

          return (
            <Card key={category.id} role="listitem">
              <CardContent className="flex h-full flex-col justify-between gap-4">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <ul className="flex flex-wrap gap-2">
                  {displayedServices.map(({ title, slug }) => (
                    <li key={slug}>
                      <Link
                        className="block rounded-md bg-primary-foreground/40 px-2.5 py-1 font-medium text-primary text-xs transition-colors hover:bg-primary-foreground/60"
                        href={`/what-we-offer/${category.id}/${slug}`}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                  {remainingCount > 0 && (
                    <span className="rounded-md bg-primary-foreground/40 px-2.5 py-1 font-medium text-primary text-xs transition-colors hover:bg-primary-foreground/60">
                      {remainingCount} +
                    </span>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button aria-label={`View all ${category.title} services`} asChild size="sm" variant="ghost">
                  <Link href={`/what-we-offer/${category.id}`}>Explore</Link>
                </Button>
                <Button asChild size="icon" variant="secondary">
                  <Link href={`/what-we-offer/${category.id}`}>
                    <IconArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button
          aria-label="View all our services"
          asChild
          className="group w-full has-[>div]:pr-3 has-[>div]:pl-5 sm:w-auto"
          size="lg"
        >
          <Link href="/what-we-offer">
            Explore More
            <div className="size-6 overflow-hidden rounded-full border border-card bg-background/50 text-foreground duration-500 group-hover:bg-muted">
              <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                <span className="flex size-6">
                  <ArrowRight className="m-auto size-3" />
                </span>
                <span className="flex size-6">
                  <ArrowRight className="m-auto size-3" />
                </span>
              </div>
            </div>
          </Link>
        </Button>
      </div>
    </section>
  );
};
