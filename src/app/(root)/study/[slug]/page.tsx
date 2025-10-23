import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@src/ui/button";
import { Separator } from "@src/ui/separator";
import { getStudyBySlug, MDXContent } from "@src/lib/mdx";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeader,
  PageHeaderHeading,
} from "@src/components/page-header";

interface StudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: StudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: study.meta.title,
    description: study.meta.description,
  };
}

export default async function StudyDetailPage({ params }: StudyPageProps) {
  const study = getStudyBySlug((await params).slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="pb-20">
      <PageHeader>
        <PageHeaderHeader>
          <p>
            {new Date(study.meta.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <p className="text-muted-foreground">Product</p>
        </PageHeaderHeader>
        <PageHeaderHeading>{study.meta.title}</PageHeaderHeading>
        <PageHeaderDescription className="max-w-3xl mx-auto">
          {study.meta.description}
        </PageHeaderDescription>
      </PageHeader>

      <Separator className="mt-10 mb-4 max-w-3xl mx-auto" />

      <div className="flex items-center justify-between gap-4 mb-20  max-w-3xl mx-auto">
        <div className="flex items-center gap-2">
          <Clock className="size-3.5" />
          <span className="text-sm">{study.meta.readTime}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {study.meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <MDXContent content={study.content} />
    </div>
  );
}
