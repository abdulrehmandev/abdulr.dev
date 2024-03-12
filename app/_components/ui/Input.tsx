import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        className,
        "bg-neutral-50 border border-neutral-200 placeholder:text-neutral-400 rounded-lg py-2 px-4 text-neutral-700 focus:outline-orange-500 font-medium"
      )}
      {...props}
    />
  );
};

export default Input;
