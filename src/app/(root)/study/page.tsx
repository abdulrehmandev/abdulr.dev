import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@src/components/page-header";
import { getAllCaseStudies } from "@src/content/studies";
import { RabbitIcon } from "lucide-react";
import type { Metadata } from "next";
import { CaseStudyCard } from "./_components/case-study-card";

export const dynamic = "force-static";

const title = "Case Studies";
const description = "In-depth look at notable projects and their impact.";

export const metadata: Metadata = {
  title,
  description,
};

export default function StudyPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="space-y-8">
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.title} study={study} />
        ))}
        {caseStudies.length < 3 && (
          <div className="p-4 min-h-48 w-full h-full flex flex-col gap-1 items-center justify-center text-muted-foreground group/more">
            <RabbitIcon
              className="size-8 group-hover/more:-scale-x-100"
              strokeWidth={1}
            />
            <p className="text-xs">More coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
