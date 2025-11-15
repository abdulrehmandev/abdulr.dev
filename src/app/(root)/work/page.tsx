import { JsonLd } from "@src/components/jsonld";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@src/components/page-header";
import { PrimaryCard } from "@src/components/primary-card";
import { schema } from "@src/lib/schema";
import { Badge } from "@src/ui/badge";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@src/ui/card";
import { ExpandIcon, SquareArrowOutUpRight } from "lucide-react";
import type { Metadata } from "next";
import { allWork } from "./all-work";

export const dynamic = "force-static";

const title = "Work";
const description =
  "Notable client projects and experiments that showcase my recent work";

export const metadata: Metadata = {
  title,
  description,
};

export default function StudyPage() {
  return (
    <>
      <JsonLd
        data={schema.collection({
          name: "Work - Abdul R",
          url: "https://abdulr.dev/work",
          description:
            "A showcase of development projects built by Abdul R including apps, websites, and full stack solutions.",
        })}
      />
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
                    asLink: { href: `/work/${work.slug}` },
                    actions: [{ icon: <ExpandIcon />, label: "Expand" }],
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
                    <div className="flex items-center gap-0.5 mt-4">
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
                  </CardContent>
                </PrimaryCard>
              );
              return content;
            })}
        </div>

        <p className="text-muted-foreground text-sm text-center mb-8 mt-24">
          More are coming! :)
        </p>
      </div>
    </>
  );
}
