"use client";

import React from "react";
import { useTime } from "@src/hooks/use-time";

export function CurrentTime(props: React.ComponentProps<"span">) {
  const { currentTime } = useTime();
  return <span {...props}>{currentTime}</span>;
}
