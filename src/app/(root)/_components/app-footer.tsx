import Link from "next/link";
import { Button } from "@src/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@src/ui/tooltip";
import { Icons } from "@src/components/icons";
import { socials as socialVars } from "@src/lib/config";

const socials = [
  {
    name: "Email",
    href: `mailto:${socialVars.mail}`,
    icon: <Icons.mail className="size-5" />,
  },
  {
    name: "X / Twitter",
    href: socialVars.x,
    icon: <Icons.x className="size-3.5" />,
  },
  {
    name: "GitHub",
    href: socialVars.github,
    icon: <Icons.github />,
  },
  {
    name: "LinkedIn",
    href: socialVars.linkedin,
    icon: <Icons.linkedin className="size-5" />,
  },
  {
    name: "Instagram",
    href: socialVars.instagram,
    icon: <Icons.instagram />,
  },
];

export function AppFooter() {
  return (
    <header className="px-6 py-5 sm:py-3 w-full relative z-50">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
        <div className="text-muted-foreground flex items-center gap-8">
          <p className="text-sm">abdulrdev © {new Date().getFullYear()}</p>
          <p className="text-[10px]">
            Theme inspired from{" "}
            <a href="https://zed.dev/" target="_blank" className="underline">
              Zed
            </a>
          </p>
        </div>

        <nav className="flex items-center gap-2">
          {Object.values(socials).map((social) => (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={social.href}>{social.icon}</Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </div>
    </header>
  );
}
