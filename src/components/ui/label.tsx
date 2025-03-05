import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "font-poppins text-sm",
        body: "font-poppins text-sm sm:text-lg lg:text-xl",
        title: "font-staatliches text-5xl",
        banner: "font-staatliches text-5xl lg:text-8xl md:text-6xl",
        subtitle: "font-poppins text-sm lg:text-xl",
        heading1: "font-staatliches text-4xl font-bold md:text-5xl ",
        heading2: "font-poppins text-2xl font-semibold sm:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, variant, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant }), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label, labelVariants };
