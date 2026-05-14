import { VariantProps } from "class-variance-authority";

import { Badge, BadgeDot, badgeVariants } from "../ui/badge";
import { SectionHeaderExploreAll } from "./section-header-explore-all";

interface Props {
  title: string;
  description: string;
  badge: string;
  variant?: VariantProps<typeof badgeVariants>["variant"];
  link?: string;
}

export const SectionHeader = ({ title, description, badge, variant, link }: Props) => {
  return (
    <header className="relative z-10 grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:items-center md:gap-6 lg:gap-12">
      <div className="space-y-2">
        <Badge variant={variant}>
          <BadgeDot />
          {badge}
        </Badge>
        <h2
          className="max-w-md text-pretty font-medium text-2xl leading-tight sm:text-3xl lg:text-4xl"
          id="section-title"
        >
          {title}
        </h2>
      </div>
      <div>
        <p className="text-balance text-base text-muted-foreground" id="section-description">
          {description}
        </p>
        {link ? <SectionHeaderExploreAll href={link} /> : null}
      </div>
    </header>
  );
};
