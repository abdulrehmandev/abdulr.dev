import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@src/components/page-header";
import { PrimaryCard } from "@src/components/primary-card";
import { getAllStudies } from "@src/lib/mdx";
import { Expand, RabbitIcon } from "lucide-react";
import { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const title = "Case Studies";
const description = "Explore my case studies and projects";

export const metadata: Metadata = {
  title,
  description,
};

export default function StudyPage() {
  const caseStudies = getAllStudies();

  return (
    <div className="space-y-8">
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <div className="grid gap-4 md:grid-cols-3">
        {caseStudies.map((study) => (
          <PrimaryCard
            key={study.title}
            image="https://images.ctfassets.net/kftzwdyauwt9/6bU3sUQ4xHv1r7eyHJxaWO/868bcc4d42d2c06d406ada5b20a44237/Apps_in_ChatGPT.png?w=1920&q=90&fm=webp"
            title={study.title}
            actions={[{ icon: <Expand />, label: "Expand" }]}
            href={`/study/${study.slug}`}
          >
            <div className="flex item-center gap-2 w-full justify-between">
              <div className="flex gap-3 items-center text-sm">
                <p className="font-medium">Product</p>
                <p className="text-muted-foreground text-xs">
                  {new Date(study.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </p>
              </div>
              <p className="text-xs text-right text-muted-foreground">
                {study.readTime}
              </p>
            </div>
          </PrimaryCard>
        ))}
        <div className="p-4 w-full h-full flex flex-col gap-1 items-center justify-center text-muted-foreground group/more">
          <RabbitIcon
            className="size-8 group-hover/more:-scale-x-100"
            strokeWidth={1}
          />
          <p className="text-xs">More coming soon!</p>
        </div>
      </div>
    </div>
  );
}
