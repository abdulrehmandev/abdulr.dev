"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui";

export function ThemeToggle() {
  const [mount, setMount] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="ghost"
      size="icon"
      className="rounded-full size-8"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
