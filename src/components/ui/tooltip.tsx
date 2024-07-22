import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "bottom" | "top" | "right" | "left";
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, side }) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger className="cursor-pointer" asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side ?? "top"}
            className="rounded-lg text-sm bg-black text-white px-3 py-1 text-center shadow-lg max-w-xs w-fit"
          >
            <RadixTooltip.Arrow className="fill-black" />
            {content}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
