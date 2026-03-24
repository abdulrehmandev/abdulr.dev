import { default as NextLink } from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@src/ui/tooltip";
import { Icons } from "@src/components/icons";
import { socials as socialVars } from "@src/lib/config";
import { MailIcon } from "lucide-react";
import { Link } from "@src/ui/typography";

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

export function AppFooter() {
  return (
    <header className="px-6 py-5 sm:py-3 w-full relative z-50">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
        <div className="text-muted-foreground flex items-center gap-8">
          <p className="text-sm">© {new Date().getFullYear()} | Abdul Rehman</p>
          <p className="text-[10px]">
            Theme inspired from{" "}
            <a href="https://zed.dev/" target="_blank" className="underline">
              Zed
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={socialVars.goodreads}
                className="text-sm text-muted-foreground decoration-muted-foreground"
                target="_blank"
              >
                Goodreads
              </Link>
            </TooltipTrigger>
            <TooltipContent className="max-w-64 text-wrap">
              <p>
                Follow me on Goodreads to see the full list of books I have read
                and my thoughts about them.
              </p>
            </TooltipContent>
          </Tooltip>
          <nav className="flex items-center gap-0.75">
            {Object.values(socials).map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <NextLink
                    className="text-muted-foreground hover:text-foreground"
                    href={social.href}
                    aria-label={`View ${social.name}`}
                    target="_blank"
                  >
                    {social.icon}
                  </NextLink>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
