import { Cover } from "./cover.type";

type BaseWork = {
  slug: string;
  title: string;
  description: string;
  cover: Cover;
  tags: string[];
  sortOrder: number;
  date?: string;
  client?: string;
  industry?: string[];
  featured?: {
    as?: "case-study";
    featureColor?: string;
  };
  externalLink?: string;
};
type BasicWork = BaseWork & {
  type: "card";
  content?: never;
  gallery?: never;
  techStack?: never;
  awards?: never;
};
type DetailedWork = BaseWork & {
  type: "detailed";
  content: string;
  gallery?: { label?: string; src: string }[];
  techStack: string[];
  awards?: string[];
};
type CaseStudyWork = BaseWork & {
  type: "case-study";
  content?: never;
  gallery?: never;
  techStack?: never;
  awards?: never;
};
export type Work = BasicWork | DetailedWork | CaseStudyWork;
