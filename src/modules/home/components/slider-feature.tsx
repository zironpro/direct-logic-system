import { InfiniteSlider } from "@/components/ui/infinite-slider";

import {
  Bosch,
  CX3,
  Google,
  Instagram,
  JBL,
  Layout,
  Leviton,
  Lg,
  Linkedin,
  Meta,
  Seagate,
  TpLink,
} from "@/assets/brands";
import { Logo } from "@/assets/logo";

import { cn } from "@/lib/utils";

export const SliderFeature = () => {
  return (
    <div className="py-9 md:py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="group mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] relative mx-auto max-w-88 items-center justify-between space-y-6 bg-muted/25 sm:max-w-md">
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[32px_32px] opacity-25"
            role="presentation"
          />
          <div>
            <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
              <IntegrationCard>
                <Lg className="text-muted-foreground/50" />
              </IntegrationCard>
              <IntegrationCard>
                <Bosch className="text-muted-foreground/50" />
              </IntegrationCard>
              <IntegrationCard>
                <Leviton className="text-muted-foreground/50" />
              </IntegrationCard>
              <IntegrationCard>
                <CX3 className="text-muted-foreground/50" />
              </IntegrationCard>
              <IntegrationCard>
                <Meta className="text-muted-foreground/50" />
              </IntegrationCard>
              <IntegrationCard>
                <Instagram className="text-muted-foreground/50" />
              </IntegrationCard>
            </InfiniteSlider>
          </div>

          <div>
            <InfiniteSlider gap={24} reverse speed={20} speedOnHover={10}>
              <IntegrationCard>
                <Seagate className="text-muted-foreground/50" />
              </IntegrationCard>
              <IntegrationCard>
                <Google className="text-muted-foreground/50" />
              </IntegrationCard>
              <IntegrationCard>
                <JBL className="text-muted-foreground/50" />
              </IntegrationCard>
              <IntegrationCard>
                <TpLink className="text-muted-foreground/50" />
              </IntegrationCard>
              <IntegrationCard>
                <Linkedin className="text-muted-foreground/50" />
              </IntegrationCard>
              <IntegrationCard>
                <Layout className="text-muted-foreground/50" />
              </IntegrationCard>
            </InfiniteSlider>
          </div>
          <div className="absolute inset-0 z-10 m-auto flex size-fit justify-center gap-2 rounded-full backdrop-blur-lg">
            <IntegrationCard
              className="z-10 size-20 bg-card/25 shadow-black-950/10 shadow-xl backdrop-blur-lg backdrop-grayscale dark:border-white/10"
              isCenter={true}
            >
              <Logo />
            </IntegrationCard>
          </div>
        </div>
        <div className="mx-auto mt-9 space-y-3 text-center">
          <h2 className="text-balance font-medium text-3xl text-secondary md:text-4xl">Tailored IT Infrastructure</h2>
          <p className="text-muted-foreground">
            Every business is unique. We build custom IT infrastructure solutions that align with your goals and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?: "left-top" | "left-middle" | "left-bottom" | "right-top" | "right-middle" | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div className={cn("relative z-20 flex size-12 rounded-full border bg-background", className)}>
      <div className={cn("m-auto size-fit *:size-5", isCenter && "*:size-10")}>{children}</div>
    </div>
  );
};
