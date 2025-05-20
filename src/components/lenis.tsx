"use client";

import * as React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import type { PropsWithChildren } from "react";

export function Lenis({ children }: PropsWithChildren) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ReactLenis root>{children as any}</ReactLenis>;
}
