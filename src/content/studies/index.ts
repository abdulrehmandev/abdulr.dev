import fs from "fs";
import path from "path";
import matter from "gray-matter";

const studiesDirectory = path.join(process.cwd(), "src/content/studies");

export interface CaseStudyMeta {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  image: string;
  industry: string;
  scale: string;
  client: string;
}

export interface CaseStudy {
  meta: CaseStudyMeta;
  content: string;
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  try {
    if (!fs.existsSync(studiesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(studiesDirectory);
    const allStudiesData = fileNames
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => {
        const slug = name.replace(/\.mdx$/, "");
        const fullPath = path.join(studiesDirectory, name);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || "",
          description: data.description || "",
          date: data.date || "",
          readTime: data.readTime || "",
          tags: data.tags || [],
          client: data.client || "",
          image: data.image || "",
          industry: data.industry || "",
          scale: data.scale || "",
        } as CaseStudyMeta;
      });

    return allStudiesData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error("Error reading studies:", error);
    return [];
  }
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    if (!fs.existsSync(studiesDirectory)) {
      return null;
    }

    const fullPath = path.join(studiesDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      meta: {
        slug,
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        readTime: data.readTime || "",
        tags: data.tags || [],
        client: data.client || "",
        image: data.image || "",
        industry: data.industry || "",
        scale: data.scale || "",
      },
      content,
    };
  } catch (error) {
    console.error("Error reading study:", error);
    return null;
  }
}
