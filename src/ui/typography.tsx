import { cn } from "@src/lib/utils";
import NextLink, { LinkProps } from "next/link";

export function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-semibold text-2xl font-serif text-primary-title",
        className,
      )}
      {...props}
    />
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
        "text-link underline decoration-link/50 hover:decoration-link",
        className,
      )}
      {...props}
    />
  );
}
