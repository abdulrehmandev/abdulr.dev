import { JsonLd } from "@src/components/jsonld";
import { MoreComingSoon } from "@src/components/more-coming-soon";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@src/components/page-header";
import { getAllCaseStudies } from "@src/content/studies";
import { schema } from "@src/lib/schema";
import type { Metadata } from "next";
import { CaseStudyCard } from "./_components/case-study-card";
import { toAbsoluteUrl } from "@src/lib/utils";

export const dynamic = "force-static";

const title = "Case Studies";
const description = "In-depth look at notable projects and their impact.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title,
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title,
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  alternates: { canonical: toAbsoluteUrl("/study") },
};

export default function StudyPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <JsonLd
        data={schema.collection({
          name: "Case Studies - Abdul R",
          url: toAbsoluteUrl("/study"),
          description:
            "Case studies showcasing Abdul R's full stack development work, SaaS projects, and client solutions.",
        })}
      />
      <div className="space-y-8">
        <PageHeader>
          <PageHeaderHeading>{title}</PageHeaderHeading>
          <PageHeaderDescription>{description}</PageHeaderDescription>
        </PageHeader>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
          {caseStudies.length < 2 && <MoreComingSoon />}
        </div>
      </div>
    </>
  );
}
