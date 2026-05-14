import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { NumberCounter } from "@/components/ui/number-counter";

import { Squircle } from "@/assets/squircle";

import { SliderFeature } from "../components/slider-feature";

export const About = () => {
  return (
    <section aria-labelledby="about-heading" className="py-24 lg:py-32">
      <div className="container max-w-7xl">
        <SectionHeader
          badge="About Direct LS"
          description=" Direct Logic Systems LLC, based in Dubai, has empowered businesses for over 40 years with expert IT services,
          trading, and digital marketing - integrating the latest technology to help you stay ahead."
          title="Your Trusted Technology Partner Since 1978"
        />
      </div>
      <div className="container mt-12 max-w-7xl">
        <div className="grid gap-1 rounded-[calc(var(--radius-2xl)+var(--spacing)*1)] bg-accent p-1">
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="min-h-0 rounded-2xl bg-card p-5 sm:p-6 lg:aspect-4/3">
              <span className="font-medium text-secondary text-sm sm:text-base">Reliable Security Solutions</span>
              <h3 className="mt-2 font-semibold text-secondary text-xl sm:text-2xl">
                Protect Your Business with Advanced Cybersecurity
              </h3>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base">
                Stay secure with cutting-edge cybersecurity solutions. From firewalls to endpoint protection, we
                safeguard your business against threats, ensuring data integrity and peace of mind.
              </p>
            </div>
            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-card p-5 sm:min-h-[240px] sm:p-6 lg:aspect-4/3">
              <div className="relative flex h-20 w-48 items-center sm:h-24 sm:w-56">
                <Squircle className="absolute inset-0 size-full text-primary-foreground/30" />
                <span className="mx-auto block w-fit font-semibold text-4xl text-primary sm:text-5xl">24/7</span>
              </div>
              <h3 className="mt-4 text-center font-medium text-xl sm:text-2xl">Dedicated Support Team</h3>
              <p className="text-balance text-center text-muted-foreground text-sm">
                Our certified IT experts are available 24/7, providing quick resolutions and ongoing guidance whenever
                you need it.
              </p>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-card p-5 pb-28 sm:min-h-[280px] sm:p-6 sm:pb-32 md:col-span-2 md:min-h-[300px] lg:col-span-1 lg:aspect-4/3 lg:pb-6">
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="font-semibold text-secondary text-xl sm:text-2xl">Global Trading Solutions</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Access a reliable network of global suppliers for electronics, IT equipment, and industrial solutions
                  with quality assurance and competitive pricing.
                </p>
              </div>
              <div className="absolute inset-x-0 -bottom-3 px-2 sm:px-0">
                <Image
                  alt="Global Trading"
                  className="h-auto w-full object-contain object-bottom"
                  height={140}
                  src="/images/global-trading.svg"
                  width={370}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-12">
            <div className="min-h-0 rounded-2xl bg-card lg:col-span-5">
              <SliderFeature />
            </div>
            <div className="grid min-h-0 w-full grid-cols-1 gap-6 rounded-2xl bg-card sm:gap-8 md:grid-cols-2 lg:col-span-7 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:gap-4">
              <div className="flex flex-col items-start justify-between gap-6 p-6 sm:p-8 lg:gap-4 lg:p-9 lg:pr-0">
                <div>
                  <h3 className="mb-3 font-semibold text-secondary text-xl sm:text-2xl">
                    Smarter Solutions, Stronger Growth
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Tailored technology, trading, and digital marketing solutions that empower your business to scale
                    faster, smarter, and more securely.
                  </p>
                </div>

                <Button asChild className="w-full sm:w-auto" size="lg" variant="primary">
                  <Link aria-label="Contact us" href="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
              <div className="flex items-end justify-center px-6 pb-6 sm:justify-end sm:pb-8 lg:pr-6 lg:pb-0">
                <Image
                  alt="Clients served illustration"
                  className="h-auto max-h-[200px] w-full max-w-sm object-contain object-bottom sm:max-h-none sm:max-w-none"
                  height={140}
                  src="/images/clients-served.svg"
                  width={370}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-label="Company statistics"
        className="container mt-12 grid max-w-7xl grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6 lg:mt-24"
        role="list"
      >
        <div className="flex flex-col items-center justify-between text-center" role="listitem">
          <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">
            <NumberCounter suffix="+" value={45} />
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center justify-between text-center" role="listitem">
          <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">On-Site</h3>
          <p className="text-muted-foreground text-xs md:text-sm">Support in 2 Hours</p>
        </div>
        <div className="flex flex-col items-center justify-between text-center" role="listitem">
          <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">
            <NumberCounter suffix="+" value={200} />
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm">Satisfied Clients</p>
        </div>
        <div className="flex flex-col items-center justify-between text-center" role="listitem">
          <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">Global</h3>
          <p className="text-muted-foreground text-xs md:text-sm">Trading Partnerships</p>
        </div>
      </div>
    </section>
  );
};
