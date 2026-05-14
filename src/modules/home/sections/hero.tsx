import Image from "next/image";
import Link from "next/link";

import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconPhone } from "@/assets/icons/contact";

import { ClientsLogos } from "../components/clients-roll";

export const Hero = () => {
  return (
    <header className="bg-linear-to-b from-[#E5CAFF]/30 to-transparent" role="banner">
      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 pt-24 pl-4 md:pl-6 lg:grid-cols-2 lg:pt-24 lg:pl-8">
        <div className="order-last text-center sm:order-first sm:text-start">
          <Badge>
            <BadgeDot />
            Your Complete Technology & Trading Partner
          </Badge>
          <h1 className="mt-3 font-bold text-4xl leading-[1.15] md:text-5xl">
            Making Technology
            <br /> Work for You <br />
            <span className="text-primary">Faster, Smarter, Better.</span>
          </h1>
          <p className="mt-3 mb-6 text-balance text-base text-muted-foreground leading-relaxed md:text-lg">
            From IT infrastructure to trading solutions, software, and digital marketing, we deliver innovation,
            reliability, and growth for your business.
          </p>
          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <Button
              aria-label="Contact us to discuss your technology needs"
              asChild
              className="group w-full max-md:flex-1 sm:w-auto"
              size="lg"
            >
              <Link href="/contact">
                <div className="size-6 overflow-hidden rounded-full bg-primary-foreground text-foreground duration-500 group-hover:bg-muted">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <IconPhone className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <IconPhone className="m-auto size-3" />
                    </span>
                  </div>
                </div>
                Talk to us
              </Link>
            </Button>
            <Button
              aria-label="View our portfolio of successful projects"
              className="w-full max-md:flex-1 sm:w-auto"
              size="lg"
              variant="outline"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            alt=""
            className="size-68 sm:size-96 md:size-[80%]"
            height={500}
            src="/images/hero-directls.svg"
            width={500}
          />
        </div>
      </div>
      <section
        aria-labelledby="clients-heading"
        className="container mt-8 max-w-7xl px-4 pb-36 text-center md:mt-12 md:px-6 md:pb-20 lg:mt-14 lg:px-8"
      >
        <h2 className="mb-3 md:text-xl" id="clients-heading">
          Trusted by 200+ Businesses in the UAE
        </h2>
        <ClientsLogos />
      </section>
      <BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
      <BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />
    </header>
  );
};
