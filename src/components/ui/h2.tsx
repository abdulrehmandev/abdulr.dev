import { cn } from "@/lib";
import React from "react";

interface H2Props {
  className?: string;
  children?: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ className, children }) => {
  return (
    <h2
      className={cn(
        "font-semibold tracking-tighter text-3xl lg:text-4xl text-neutral-800",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
