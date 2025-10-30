import { cn } from "@src/lib/utils";

export function PageSection({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return <section className={cn("my-20", className)} {...props} />;
}

export function PageSectionHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("pb-4 flex flex-col gap-2 mb-8", className)}
      {...props}
    />
  );
}

export function PageSectionHeading({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-semibold font-serif text-primary text-2xl",
        className,
      )}
      {...props}
    />
  );
}

export function PageSectionDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-foreground max-w-3xl text-base text-balance",
        className,
      )}
      {...props}
    />
  );
}
