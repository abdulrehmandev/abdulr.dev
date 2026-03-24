"use client";

import { ThemeSwitcher } from "@src/components/theme-switcher";
// import { ShareDialog } from "@src/components/share-dialog";
// import { ThemeSwitcher } from "@src/components/theme-switcher";
import { siteConfig } from "@src/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@src/ui/tooltip";
import { Icons } from "@src/components/icons";
import { socials as socialVars } from "@src/lib/config";
import { MailIcon } from "lucide-react";

const socials = [
  {
    name: "Email",
    href: `mailto:${socialVars.mail}`,
    icon: <MailIcon className="size-3.75 mr-1" />,
  },
  {
    name: "X / Twitter",
    href: socialVars.x,
    icon: <Icons.x className="size-3.5" />,
  },
  {
    name: "GitHub",
    href: socialVars.github,
    icon: <Icons.github className="size-4 ml-0.5" />,
  },
  {
    name: "LinkedIn",
    href: socialVars.linkedin,
    icon: <Icons.linkedin className="size-5" />,
  },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="pl-4 pr-3 md:px-6 py-3 w-full">
      <div className="flex md:items-center justify-between flex-col md:flex-row gap-2">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-semibold font-serif text-primary dark:text-white text-xl"
          >
            Abdul R.
          </Link>
          <ThemeSwitcher className="flex md:hidden" />
        </div>

        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-2 md:gap-1 text-base md:text-[15px] font-medium">
            {siteConfig.navItems.map((link, i) => (
              <React.Fragment key={link.label}>
                <Link
                  className="hover:underline underline-offset-2 decoration-muted-foreground opacity-80 hover:opacity-100 data-[active=true]:opacity-100 underline"
                  href={link.href}
                  data-active={pathname === link.href}
                >
                  {link.label}
                </Link>
                {i !== siteConfig.navItems.length - 1 && (
                  <span className="text-xs text-muted-foreground">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          <span className="text-xs mx-2 text-muted-foreground">|</span>
          <div className="flex items-center gap-1.5 md:gap-0.75">
            {Object.values(socials).map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <Link
                    className="text-muted-foreground hover:text-foreground"
                    href={social.href}
                    aria-label={`View ${social.name}`}
                    target="_blank"
                  >
                    {social.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
          <span className="text-xs ml-2 text-muted-foreground hidden md:flex">
            |
          </span>
          <ThemeSwitcher className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
}
