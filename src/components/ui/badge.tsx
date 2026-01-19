import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-medium transition-colors whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-primary/80 text-primary-foreground hover:bg-primary/60",
        secondary:
          "bg-muted text-muted-foreground hover:bg-muted/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline:
          "border border-input text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
