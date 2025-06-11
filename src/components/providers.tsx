"use client";

import { PropsWithChildren } from "react";
import { Lenis } from "./lenis";

/**
 * Custom provider component to wrap the application with necessary providers.
 */
export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <Lenis>{children}</Lenis>
    </>
  );
}
