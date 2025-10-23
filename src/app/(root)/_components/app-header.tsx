import { ThemeSwitcher } from "@src/components/theme-switcher";
import { Button } from "@src/ui/button";
import { SidebarTrigger } from "@src/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@src/ui/tooltip";
import { Link2 } from "lucide-react";
import Link from "next/link";

export function AppHeader() {
  return (
    <header className="px-6 py-3 w-full fixed z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 w-fit">
          <Link
            href="/"
            className="font-medium font-serif text-primary text-2xl"
          >
            Abdul R.
          </Link>
          <SidebarTrigger className="hidden sm:flex" />
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button disabled className="hidden sm:flex" variant="ghost">
            <Link2 />
            Share
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                disabled
                className="flex sm:hidden"
                variant="ghost"
                size="icon-sm"
              >
                <Link2 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share</p>
            </TooltipContent>
          </Tooltip>
          <SidebarTrigger className="flex sm:hidden" />
        </div>
      </div>
    </header>
  );
}
