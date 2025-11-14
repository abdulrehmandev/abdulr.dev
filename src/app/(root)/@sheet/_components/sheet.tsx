"use client";

import { cn } from "@src/lib/utils";
import { Sheet, SheetContent } from "@src/ui/sheet";
import { useRouter } from "next/navigation";
import React from "react";

/**
 * Wrapper component to avoid turning the page into Client component (specifically in my case while using it with
 * parallel routes as sheet)
 */
export function PageSheet(props: React.ComponentProps<typeof Sheet>) {
  const router = useRouter();
  return <Sheet open onOpenChange={() => router.back()} {...props} />;
}

export function PageSheetContent({
  className,
  side,
  ...props
}: React.ComponentProps<typeof SheetContent>) {
  return (
    <SheetContent
      className={cn(
        "sm:inset-y-4 sm:right-4 h-auto shadow border rounded-md sm:max-w-xl w-full",
        className,
      )}
      {...props}
    />
  );
}
