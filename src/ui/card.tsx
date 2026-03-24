import * as React from "react";

import { cn } from "@src/lib/utils";
import { Slot } from "@radix-ui/react-slot";

function Card({
  className,
  asChild,
  hoverable = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean; hoverable?: boolean }) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="card"
      data-hoverable={hoverable}
      className={cn(
        "bg-card text-card-foreground flex flex-col rounded-sm border [box-shadow:hsl(218,_13%,_50%,_0.1)_0_-3px_0_0_inset] dark:[box-shadow:hsl(218,_13%,_70%,_0.05)_0_-3px_0_0_inset] data-[hoverable=true]:hover:border-border-primary dark:data-[hoverable=true]:hover:border-primary/50 data-[hoverable=true]:hover:[box-shadow:var(--sh-alt)] transition cursor-default data-[hoverable=true]:cursor-pointer",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "leading-tight text-sharp-foreground font-medium",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-3", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-3 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
