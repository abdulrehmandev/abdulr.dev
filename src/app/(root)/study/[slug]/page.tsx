import { JsonLd } from "@src/components/jsonld";
import { MoreComingSoon } from "@src/components/more-coming-soon";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeader,
  PageHeaderHeading,
} from "@src/components/page-header";
import {
  PageSection,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionHeading,
} from "@src/components/page-section";
import { getAllCaseStudies, getCaseStudyBySlug } from "@src/content/studies";
import { schema } from "@src/lib/schema";
import { getCurrentQuarter, toAbsoluteUrl } from "@src/lib/utils";
import { Badge } from "@src/ui/badge";
import { Button } from "@src/ui/button";
import { Separator } from "@src/ui/separator";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyCard } from "../_components/case-study-card";
import { CaseStudyMdxContent } from "../_components/mdx-study-content";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: PageProps<"/study/[slug]">): Promise<Metadata> {
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
    openGraph: {
      title: study.meta.title,
      description: study.meta.description,
      type: "article",
      url: toAbsoluteUrl("/study", study.meta.slug),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            study.meta.title,
          )}&description=${encodeURIComponent(study.meta.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.meta.title,
      description: study.meta.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            study.meta.title,
          )}&description=${encodeURIComponent(study.meta.description)}`,
        },
      ],
      creator: "@iiiabdulrehman",
    },
    alternates: { canonical: toAbsoluteUrl("/study", study.meta.slug) },
  };
}

export default async function StudyDetailPage({
  params,
}: PageProps<"/study/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const allCaseStudies = getAllCaseStudies();

  const recent3CaseStudies = allCaseStudies
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  if (!study) {
    notFound();
  }

  return (
    <>
      <JsonLd data={schema.caseStudy(study.meta)} />
      <div className="pb-20">
        <PageHeader>
          <PageHeaderHeader>
            <p className="font-medium">
              {new Date(study.meta.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </PageHeaderHeader>
          <PageHeaderHeading className="max-w-5xl">
            {study.meta.title}
          </PageHeaderHeading>
          <PageHeaderDescription>
            {study.meta.description}
          </PageHeaderDescription>
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
              {study.meta.industry.join(" / ")}
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

        <div className="flex items-center flex-col gap-3 justify-center mt-32 text-center">
          <p className="text-sm">
            Need help building, improving, or maintaining your product?
          </p>

          <Button size="lg" asChild>
            <Link href="/contact">
              Book an intro call <ArrowUpRight />
            </Link>
          </Button>

          <p className="text-xs text-muted-foreground">
            I’m currently taking work for Q{getCurrentQuarter()}.
          </p>
        </div>

        <Separator className="mt-20 rounded-full data-[orientation=horizontal]:h-0.75" />

        {recent3CaseStudies.length > 0 && (
          <PageSection>
            <PageSectionHeader className="flex-row w-full justify-between items-center">
              <div className="space-y-2">
                <PageSectionHeading>More case studies</PageSectionHeading>
                <PageSectionDescription>
                  Explore other case stydies I’ve worked on and see how I help
                  have helped clients in their ventures.
                </PageSectionDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/study">
                  View all <ArrowRight />
                </Link>
              </Button>
            </PageSectionHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recent3CaseStudies.map((study) => (
                <CaseStudyCard key={study.title} study={study} />
              ))}
              {recent3CaseStudies.length < 2 && <MoreComingSoon />}
            </div>
          </PageSection>
        )}
      </div>
    </>
  );
}
