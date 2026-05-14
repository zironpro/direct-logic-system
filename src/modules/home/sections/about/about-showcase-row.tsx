import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { SliderFeature } from "../../components/slider-feature";

export const AboutShowcaseRow = () => {
  return (
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
              Tailored technology, trading, and digital marketing solutions that empower your business to scale faster,
              smarter, and more securely.
            </p>
          </div>

          <Button asChild className="w-full sm:w-auto" size="lg" variant="primary">
            <Link aria-label="Contact us" href="/contact">
              Get Started
            </Link>
          </Button>
        </div>
        <div className="flex items-end justify-center px-4 sm:justify-end lg:pr-3 lg:pb-0">
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
  );
};
