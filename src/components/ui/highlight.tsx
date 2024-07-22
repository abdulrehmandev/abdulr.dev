import { cn } from "@/lib";
import React from "react";

interface HightlightProps {
  className?: string;
  children?: React.ReactNode;
}

const Hightlight: React.FC<HightlightProps> = ({ className, children }) => {
  return (
    <span
      className={cn(
        "text-primary font-semibold tracking-tight text-xl",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Hightlight;
