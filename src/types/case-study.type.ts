import { IconName } from "@src/components/icon-mapper";

export interface CaseStudyMeta {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  image?: string;
  icon?: IconName;
  industry: string[];
  scale: string;
  client: string;
}

export interface CaseStudy {
  meta: CaseStudyMeta;
  content: string;
}
