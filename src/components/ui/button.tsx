import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-all hover:scale-102 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-98 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "overflow-hidden border border-primary bg-gradient-to-tr from-foreground via-foreground to-muted-foreground text-shadow-primary-background text-shadow-xs text-white shadow-md shadow-primary/20 before:absolute before:left-0 before:size-5 before:-translate-x-1/2 before:rounded-full before:bg-primary before:blur-md after:absolute after:left-0 after:h-3.5 after:w-0.5 after:rounded-r-full after:bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10",
        primary:
          "border border-primary-foreground bg-gradient-to-b from-[oklch(0.6966_0.1806_296.02)] to-[oklch(0.5367_0.2669_282.67)] font-bold text-shadow-primary-background text-shadow-xs text-white shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-secondary bg-background text-secondary shadow-xs hover:bg-secondary/10 dark:border-input dark:bg-input/30 dark:hover:bg-secondary/50",
        secondary: "bg-card/60 text-secondary-foreground shadow-xs hover:bg-card hover:text-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-3 has-[>div]:pl-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded-md px-6 text-base has-[>svg]:px-4 has-[>div]:pl-4",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} data-slot="button" {...props} />;
}

export { Button, buttonVariants };
