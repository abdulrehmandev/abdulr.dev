import { allWork } from "@src/app/work/all-work";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@src/components/page-header";
import { PrimaryCard } from "@src/components/primary-card";
import { Badge } from "@src/ui/badge";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@src/ui/card";
import { ExpandIcon, SquareArrowOutUpRight } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-static";

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
        {Object.values(allWork)
          .sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1))
          .map((work) => {
            let cardProps: React.ComponentProps<typeof PrimaryCard> = {
              cover: work.cover,
            };

            switch (work.type) {
              case "card":
                cardProps = {
                  asLink: work.externalLink
                    ? {
                        href: work.externalLink,
                        target: "_blank",
                      }
                    : undefined,
                  actions: work.externalLink
                    ? [{ icon: <SquareArrowOutUpRight />, label: "View" }]
                    : undefined,
                  ...cardProps,
                };
                break;
              case "case-study":
                cardProps = {
                  asLink: {
                    href: `/study/${work.slug}`,
                  },
                  actions: [
                    { icon: <ExpandIcon />, label: "Explore Case Study" },
                  ],
                  ...cardProps,
                };
                break;
              case "detailed":
                cardProps = {
                  // href: `/work/${work.slug}`,
                  // actions: [{ icon: <ExpandIcon />, label: "Expand" }],
                  ...cardProps,
                };
                break;
            }

            const content = (
              <PrimaryCard key={work.title} {...cardProps}>
                <CardHeader>
                  <CardTitle>{work.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2">
                    {work.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 justify-between mt-4">
                    <div className="flex items-center gap-0.5">
                      {work.industry?.slice(0, 2).map((industry) => (
                        <Badge key={industry} variant="primary">
                          {industry}
                        </Badge>
                      ))}
                      {work.tags?.slice(0, 2).map((tag) => (
                        <Badge key={tag} size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-0.5"></div>
                  </div>
                </CardContent>
              </PrimaryCard>
            );
            return content;
          })}
      </div>
    </div>
  );
}
