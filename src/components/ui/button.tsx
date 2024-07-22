import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-neutral-300 bg-white shadow-sm hover:bg-neutral-100",
        secondary: "bg-primary/10 text-primary shadow-sm hover:bg-primary/15",
        ghost: "hover:bg-neutral-100",
        icon: "text-neutral-500 hover:text-primary",
        link: "font-medium underline-offset-2 hover:underline",
        bnw: "bg-black hover:bg-black/80 text-white shadow ",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-5 text-base",
        icon: "h-9 w-9",
        "icon-sm": "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonVariants({
          size,
          variant,
        }),
        className
      )}
      {...props}
    ></button>
  );
};

export default Button;
