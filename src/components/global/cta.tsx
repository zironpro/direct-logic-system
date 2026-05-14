import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconCloud, IconGear, IconGlobe, IconLoudspeaker } from "@/assets/icons/system";
import { IconDirectWatermark } from "@/assets/logo";

import { cn } from "@/lib/utils";

interface Props {
  disableBg?: boolean;
}

export const Cta = ({ disableBg = false }: Props) => {
  return (
    <section
      aria-labelledby="cta-heading"
      className={cn(
        "relative mx-2 rounded-b-3xl bg-gradient-to-b from-50% from-white to-50% to-transparent py-8 sm:mx-4 sm:rounded-b-4xl sm:py-12 md:mx-6 md:py-16 lg:py-20",
        disableBg && "bg-transparent"
      )}
    >
      <div className="container relative z-10 max-w-7xl space-y-3 overflow-hidden rounded-3xl bg-radial-[105%_100%_at_50%_0%] from-[#6DA3FF] via-55% via-secondary to-primary px-3 py-8 text-center text-background shadow-[0_8px_28px_0_oklch(0.2788_0.0909_306.27/40%),_inset_0_1px_28px_8px_oklch(1_0_0_/25%)] sm:space-y-4 sm:rounded-4xl sm:px-4 sm:py-12 sm:shadow-[0_12px_42px_0_oklch(0.2788_0.0909_306.27/40%),_inset_0_1px_42px_12px_oklch(1_0_0_/25%)] md:space-y-6 md:px-6 md:py-16 lg:px-8 lg:py-20">
        <Badge className="relative z-10 text-xs sm:text-sm" variant="outline">
          <BadgeDot />
          What we offer
        </Badge>
        <h2
          className="relative z-10 text-balance font-bold text-xl leading-tight sm:text-2xl sm:leading-snug md:text-3xl lg:text-4xl xl:text-5xl"
          id="cta-heading"
        >
          Power Your Business with <br className="hidden sm:block" />
          40+ Years of Proven Tech Expertise
        </h2>
        <p className="relative z-10 mx-auto max-w-xl text-balance text-sm leading-relaxed sm:max-w-2xl sm:text-base md:text-lg">
          Your business deserves more than just technology - it deserves the right strategy, execution, and innovation
          to thrive in a competitive market.
        </p>
        <Button
          aria-label="Learn more about our services and expertise"
          className="text-sm sm:w-auto sm:text-base"
          size="lg"
        >
          Get know more
        </Button>

        {/* Decorative watermarks - hidden on mobile, visible on larger screens */}
        <IconDirectWatermark
          aria-hidden="true"
          className="absolute -top-1/2 -left-8 hidden text-white/8 sm:-left-10 md:-left-12 lg:block"
        />
        <IconDirectWatermark
          aria-hidden="true"
          className="absolute -right-12 -bottom-1/2 hidden -scale-x-90 text-white/8 sm:-right-16 md:-right-20 lg:block"
        />

        {/* Decorative icons with responsive sizing and positioning */}
        <div className="absolute inset-8 flex flex-col justify-between md:inset-16 lg:inset-24">
          <div className="flex items-center justify-between">
            <div className="flex size-10 rotate-6 items-center justify-center rounded-xl bg-card shadow-[0_4px_16px_0] shadow-primary-background/30 sm:size-16 sm:rotate-9 sm:rounded-2xl sm:shadow-[0_6px_20px_0] md:size-20 md:shadow-[0_8px_24px_0]">
              <IconCloud className="size-5 sm:size-6 md:size-12" />
            </div>
            <div className="flex size-10 -rotate-8 items-center justify-center rounded-xl bg-card shadow-[0_4px_16px_0] shadow-primary-background/30 sm:size-16 sm:-rotate-12 sm:rounded-2xl sm:shadow-[0_6px_20px_0] md:size-20 md:shadow-[0_8px_24px_0]">
              <IconGlobe className="size-5 sm:size-6 md:size-12" />
            </div>
          </div>
          <div className="flex items-center justify-between px-4 sm:px-8 md:px-16">
            <div className="flex size-10 -rotate-6 items-center justify-center rounded-xl bg-card shadow-[0_4px_16px_0] shadow-primary-background/30 sm:size-16 sm:-rotate-9 sm:rounded-2xl sm:shadow-[0_6px_20px_0] md:size-20 md:shadow-[0_8px_24px_0]">
              <IconLoudspeaker className="size-5 sm:size-6 md:size-12" />
            </div>
            <div className="flex size-10 rotate-4 items-center justify-center rounded-xl bg-card shadow-[0_4px_16px_0] shadow-primary-background/30 sm:size-16 sm:rotate-6 sm:rounded-2xl sm:shadow-[0_6px_20px_0] md:size-20 md:shadow-[0_8px_24px_0]">
              <IconGear className="size-5 sm:size-6 md:size-12" />
            </div>
          </div>
        </div>
      </div>
      {!disableBg && <div aria-hidden="true" className="absolute top-1/2 h-6 w-full rounded-b-full bg-white sm:h-8" />}
    </section>
  );
};
