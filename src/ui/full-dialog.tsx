import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@src/lib/utils";
import { Button } from "./button";
import { XIcon } from "lucide-react";

function FullDialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="full-dialog" {...props} />;
}

function FullDialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="full-dialog-portal" {...props} />;
}

function FullDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="full-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-background/5 backdrop-blur-xs",
        className,
      )}
      {...props}
    />
  );
}

function FullDialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <FullDialogPortal data-slot="full-dialog-portal">
      <FullDialogOverlay />
      <DialogPrimitive.Content
        data-slot="full-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed inset-2 sm:inset-4 md:inset-8 z-50 grid sm:max-w-[calc(100%-2rem)] gap-4 rounded-sm border shadow-xl duration-200 [box-shadow:hsl(218,_13%,_50%,_0.1)_0_-4px_0_0_inset] dark:[box-shadow:hsl(218,_13%,_70%,_0.05)_0_-3px_0_0_inset]",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="full-dialog-close"
            className="absolute top-4 right-4"
            asChild
          >
            <Button variant="outline" size="sm">
              Close
              <span className="sr-only">Close</span>
              <XIcon />
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </FullDialogPortal>
  );
}

function FullDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="full-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function FullDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="full-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function FullDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="full-dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function FullDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="full-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  FullDialog,
  FullDialogContent,
  FullDialogDescription,
  FullDialogFooter,
  FullDialogHeader,
  FullDialogOverlay,
  FullDialogPortal,
  FullDialogTitle,
};
