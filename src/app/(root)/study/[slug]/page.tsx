import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeader,
  PageHeaderHeading,
} from "@src/components/page-header";
import { getCaseStudyBySlug } from "@src/content/studies";
import { Badge } from "@src/ui/badge";
import { Clock } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyMdxContent } from "../_components/mdx-study-content";

interface StudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: StudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: study.meta.title,
    description: study.meta.description,
    keywords: study.meta.tags,
  };
}

export default async function StudyDetailPage({ params }: StudyPageProps) {
  const study = getCaseStudyBySlug((await params).slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="pb-20">
      <PageHeader>
        <PageHeaderHeader>
          <p className="font-medium">
            {new Date(study.meta.date).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
          {/*<p className="text-muted-foreground">Product</p>*/}
        </PageHeaderHeader>
        <PageHeaderHeading className="max-w-3xl">
          {study.meta.title}
        </PageHeaderHeading>
        <PageHeaderDescription>{study.meta.description}</PageHeaderDescription>
      </PageHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
        <div className="space-y-1 w-full">
          <p className="uppercase font-mono text-xs">Client</p>
          <h4 className="text-base sm:text-lg text-primary font-serif font-semibold">
            {study.meta.client}
          </h4>
        </div>

        <div className="space-y-1 w-full">
          <p className="uppercase font-mono text-xs">Industry</p>
          <h4 className="text-base sm:text-lg text-primary font-serif font-semibold">
            {study.meta.industry}
          </h4>
        </div>

        <div className="space-y-1 w-full">
          <p className="uppercase font-mono text-xs">Scale</p>
          <h4 className="text-base sm:text-lg text-primary font-serif font-semibold">
            {study.meta.scale}
          </h4>
        </div>
      </div>

      <div className="inline-flex items-center justify-start flex-wrap mb-20 gap-2">
        <div className="flex items-center gap-2 mr-8">
          <Clock className="size-3" />
          <span className="text-sm font-medium">{study.meta.readTime}</span>
        </div>

        {study.meta.tags.map((tag) => (
          <Badge key={tag} size="sm">
            {tag}
          </Badge>
        ))}
      </div>

      <CaseStudyMdxContent content={study.content} />
    </div>
  );
}
