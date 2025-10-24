export const siteConfig = {
  name: "abdulr.dev",
  url: "https://abdulr.dev",
  ogImage: "https://abdulr.dev/og.jpg", // @todo
  description: "Portfolio", // @todo
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
    { label: "Blogs", href: "/blogs" },
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
} as const;
