import { allWork } from "@src/app/work/all-work";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@src/components/page-header";
import { PrimaryCard } from "@src/components/primary-card";
import { CardDescription } from "@src/ui/card";
import { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const title = "Work";
const description =
  "Notable client projects and experiments that define my recent work";

export const metadata: Metadata = {
  title,
  description,
};

export default function StudyPage() {
  return (
    <div className="space-y-8">
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {Object.values(allWork).map((work) => {
          const content = (
            <PrimaryCard
              key={work.title}
              title={work.title}
              image={work.coverImage}
              // href={work.content ? `/work/${work.content?.slug}` : undefined}
              // actions={
              //   work.content
              //     ? [{ icon: <ExpandIcon />, label: "Expand" }]
              //     : undefined
              // }
              // // disabled until content completions
            >
              <CardDescription>{work.description}</CardDescription>
            </PrimaryCard>
          );
          return content;
          // return work.content ? (
          //   <ViewTransition  name={`work`} key={work.title}>
          //     {content}
          //   </ViewTransition>
          // ) : (
          //   content
          // );
        })}
      </div>
    </div>
  );
}
