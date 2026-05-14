import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border px-2 py-0.5 font-normal text-sm transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "border-white bg-white/60 text-foreground [a&]:hover:bg-primary/90",
        secondary: "border-secondary/10 bg-accent/40 text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline: "bg-card/10 text-background [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? SlotPrimitive.Slot : "span";

  return <Comp className={cn(badgeVariants({ variant }), className)} data-slot="badge" {...props} />;
}

function BadgeDot({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "mr-1 size-2 shrink-0 rounded-full border border-white bg-emerald-500 shadow-[0_0_4px_2px_var(--color-emerald-500)]/40",
        className
      )}
      {...props}
    />
  );
}

export { Badge, BadgeDot, badgeVariants };
