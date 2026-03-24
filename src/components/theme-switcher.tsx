"use client";

import { Button } from "@src/ui/button";
import { Icons } from "./icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@src/ui/tooltip";

export function ThemeSwitcher({
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log(theme);
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          {...props}
        >
          <Icons.contrast />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Switch theme</p>
      </TooltipContent>
    </Tooltip>
  );
}
