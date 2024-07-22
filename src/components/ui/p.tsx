import { cn } from "@/lib";
import React from "react";

interface PProps {
  className?: string;
  children?: React.ReactNode;
}

const P: React.FC<PProps> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-neutral-500 text-lg md:text-xl tracking-tight",
        className
      )}
    >
      {children}
    </p>
  );
};

export default P;
