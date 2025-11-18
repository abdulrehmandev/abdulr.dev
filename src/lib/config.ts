import { env } from "@src/env";
import { toAbsoluteUrl } from "./utils";

export const siteConfig = {
  name: "Abdul R",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: toAbsoluteUrl("/opengraph-image.png"),
  description:
    "ndependent full-stack developer providing engineering support, feature development, and long-term technical partnership for startups and growing businesses.",
  links: {
    twitter: "https://twitter.com/iiiabdulrehman",
    github: "https://github.com/abdulrehmandev",
  },
  keywords: [
    "abdulrdev",
    "ai engineer",
    "full stack developer",
    "freelance",
    "automations",
  ],
  navItems: [
    { href: "/", label: "About" },
    { label: "Case studies", href: "/study" },
    { label: "Work", href: "/work" },
    { label: "Blogs", href: "/blog" },
  ],
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}; // @todo - to be updated

export const socials = {
  github: "https://github.com/abdulrehmandev",
  mail: "beingabdulr@gmail.com",
  x: "https://x.com/iiiabdulrehman",
  linkedin: "https://linkedin.com/in/abdulrdev",
  instagram: "https://instagram.com/iiiabdulrehman",
  phone: "+923127398185",
  call: "https://cal.com/abdulrdev/consultation",
} as const;
