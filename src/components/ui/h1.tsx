import { cn } from "@/lib";
import React from "react";

interface H1Props {
  children?: React.ReactNode;
  className?: string;
}

const H1: React.FC<H1Props> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl md:text-5xl font-semibold tracking-tighter lg:text-7xl text-neutral-900",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
