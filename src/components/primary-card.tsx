import React from "react";
import { cn } from "@src/lib/utils";

export function PrimaryCard({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "outline-1 outline-border/50 rounded-[18px] p-1.5 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] dark:[box-shadow:3px_3px_40px_5px_#c6c6c615_inset] bg-radiial from-background to-muted/30 from-60%",
        className
      )}
      {...props}
    >
      <div className="border rounded-[12px] p-4">{children}</div>
    </div>
  );
}
