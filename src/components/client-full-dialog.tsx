"use client";

import { FullDialog } from "@src/ui/full-dialog";
import { useRouter } from "next/navigation";

/**
 * Wrapper component to avoid turning the page into Client component (specifically in my case while using it with
 * parallel routes as modal)
 */
export function ClientFullDialog({ children }: React.PropsWithChildren) {
  const router = useRouter();
  return (
    <FullDialog open onOpenChange={() => router.back()}>
      {children}
    </FullDialog>
  );
}
