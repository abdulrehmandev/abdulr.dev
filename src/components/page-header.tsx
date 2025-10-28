import { cn } from "@src/lib/utils";

function PageHeader({ children, ...props }: React.ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="flex flex-col items-start gap-2 py-8 text-left md:py-12 lg:py-12 xl:gap-4">
        {children}
      </div>
    </section>
  );
}

function PageHeaderHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-start flex-wrap pb-2 gap-6 text-sm",
        className,
      )}
      {...props}
    />
  );
}

function PageHeaderHeading({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "leading-tighter max-w-2xl text-4xl font-medium font-serif text-primary tracking-tight text-balance lg:leading-[1.1] xl:text-6xl",
        className,
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-foreground max-w-3xl text-base text-balance sm:text-lg",
        className,
      )}
      {...props}
    />
  );
}

function PageActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none",
        className,
      )}
      {...props}
    />
  );
}

export {
  PageActions,
  PageHeader,
  PageHeaderHeader,
  PageHeaderDescription,
  PageHeaderHeading,
};
