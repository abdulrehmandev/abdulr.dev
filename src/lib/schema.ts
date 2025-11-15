import { CaseStudyMeta } from "@src/types/case-study.type";
import { socials } from "./config";
import { DetailedWork } from "@src/types/work.type";

export const schema = {
  home: () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Rehman",
    jobTitle: "Full Stack Developer",
    url: "https://abdulr.dev",
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
    url: `https://abdulr.dev/study/${study.slug}`,
    name: study.title,
    description: study.description,
    // "image": "IMAGE_URL",
    author: {
      "@type": "Person",
      name: "Abdul R",
      url: "https://abdulr.dev",
    },
    datePublished: study.date,
    dateModified: study.date,
    keywords: study.tags,
  }),

  work: (work: DetailedWork) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    url: `https://abdulr.dev/work/${work.slug}`,
    name: work.title,
    description: work.description,
    // "image": "IMAGE_URL",
    author: {
      "@type": "Person",
      name: "Abdul R",
      url: "https://abdulr.dev",
    },
    datePublished: work.date,
    dateModified: work.date,
    keywords: work.tags,
  }),
};
