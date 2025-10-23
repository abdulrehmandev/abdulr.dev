import { cn } from "@src/lib/utils";
import NextLink, { LinkProps } from "next/link";

export function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2 className="font-semibold text-2xl font-serif text-primary" {...props} />
  );
}

export function P({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-base leading-relaxed", className)} {...props} />
  );
}

export function Link({
  className,
  ...props
}: React.ComponentProps<"a"> & LinkProps) {
  return (
    <NextLink
      className={cn(
        "text-primary underline decoration-primary/20 hover:decoration-primary/50",
        className,
      )}
      {...props}
    />
  );
}
