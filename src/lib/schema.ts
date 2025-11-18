import { CaseStudyMeta } from "@src/types/case-study.type";
import { socials } from "./config";
import { DetailedWork } from "@src/types/work.type";
import { env } from "@src/env";
import { toAbsoluteUrl } from "./utils";

export const schema = {
  home: () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Rehman",
    jobTitle: "Full Stack Developer",
    url: env.NEXT_PUBLIC_APP_URL,
    description:
      "Portfolio of Abdul R, a freelance full stack developer building web apps, SaaS, and MVPs.",
    image: "/images/profile.jpg",
    email: socials.mail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mehar Colony Street 2, Kutchery Chowk",
      addressLocality: "Gujrat",
      addressRegion: "Punjab",
      postalCode: "50700",
      addressCountry: "Pakistan",
    },
    telephone: socials.phone,
    sameAs: [socials.x, socials.github, socials.linkedin],
  }),

  collection: ({
    description,
    name,
    url,
  }: {
    name: string;
    url: string;
    description: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url,
    description,
  }),

  caseStudy: (study: CaseStudyMeta) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    additionalType: "https://schema.org/CaseStudy",
    url: toAbsoluteUrl("/study", study.slug),
    name: study.title,
    description: study.description,
    image: `/og?title=${encodeURIComponent(
      study.title,
    )}&description=${encodeURIComponent(study.description)}`,
    author: {
      "@type": "Person",
      name: "Abdul R",
      url: env.NEXT_PUBLIC_APP_URL,
    },
    datePublished: study.date,
    dateModified: study.date,
    keywords: study.tags,
  }),

  work: (work: DetailedWork) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    url: toAbsoluteUrl("/work", work.slug),
    name: work.title,
    description: work.description,
    image: `/og?title=${encodeURIComponent(
      work.title,
    )}&description=${encodeURIComponent(work.description)}`,
    author: {
      "@type": "Person",
      name: "Abdul R",
      url: env.NEXT_PUBLIC_APP_URL,
    },
    datePublished: work.date,
    dateModified: work.date,
    keywords: work.tags,
  }),
};
