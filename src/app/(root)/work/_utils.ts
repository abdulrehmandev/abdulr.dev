import { slugToAbsoluteUrl } from "@src/lib/utils";
import { Metadata } from "next";
import { allWork } from "./all-work";

export function getWorkBySlug(slug: string) {
  return Object.values(allWork).find((w) => w.slug === slug) ?? null;
}

export function generateWorkPageMetadata(slug: string): Metadata {
  const work = getWorkBySlug(slug);

  if (!work) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: work.title,
    description: work.description,
    keywords: work.tags,
    openGraph: {
      title: work.title,
      description: work.description,
      type: "article",
      url: slugToAbsoluteUrl("/work", work.slug),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            work.title,
          )}&description=${encodeURIComponent(work.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: work.title,
      description: work.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            work.title,
          )}&description=${encodeURIComponent(work.description)}`,
        },
      ],
      creator: "@iiiabdulrehman",
    },
  };
}
