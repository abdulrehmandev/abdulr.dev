"use client";

import React, { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export function Lenis({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      // options={{ duration: 2 }}
      root
    >
      {children}
    </ReactLenis>
  );
}
