import { getAllCaseStudies } from "@src/content/studies";
import { MetadataRoute } from "next";
import { allWork } from "./(root)/work/all-work";
import { env } from "@src/env";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.NEXT_PUBLIC_APP_URL;

  const studies = getAllCaseStudies();

  return [
    // STATIC PAGES
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/study`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },

    // CASE STUDIES
    ...studies.map((study) => ({
      url: `${baseUrl}/study/${study.slug}`,
      lastModified: new Date(),
    })),

    // WORK ITEMS
    ...Object.values(allWork)
      .filter((w) => w.type !== "card")
      .map((item) => ({
        url: `${baseUrl}/work/${item.slug}`,
        lastModified: new Date(),
      })),

    // TODO: Blogs
  ];
}
