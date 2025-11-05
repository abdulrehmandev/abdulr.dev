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
  };
}
