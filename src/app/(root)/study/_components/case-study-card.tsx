import { IconName } from "@src/components/icon-mapper";
import { PrimaryCard } from "@src/components/primary-card";
import { CaseStudyMeta } from "@src/types/case-study.type";
import { Badge } from "@src/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@src/ui/card";
import { Expand } from "lucide-react";

export function CaseStudyCard({
  study,
  ...props
}: React.ComponentProps<"div"> & { study: CaseStudyMeta }) {
  return (
    <PrimaryCard
      key={study.title}
      cover={
        study.image
          ? {
              type: "image",
              src: study.image,
              alt: study.title,
            }
          : {
              type: "icon",
              icon: study.icon as IconName,
            }
      }
      title={study.title}
      actions={[{ icon: <Expand />, label: "View" }]}
      asLink={{
        href: `/study/${study.slug}`,
      }}
      {...props}
    >
      <CardHeader>
        <CardTitle className="truncate line-clamp-2">{study.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex item-center gap-2 w-full justify-between mt-1">
        <div className="flex gap-3 items-center text-sm">
          <div className="flex items-center gap-0.5">
            {study.industry.slice(0, 2).map((industry) => (
              <Badge key={industry} variant="primary">
                {industry}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground text-xs">
            {new Date(study.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
        </div>
        <p className="text-xs text-right text-muted-foreground mr-2">
          {study.readTime}
        </p>
      </CardContent>
    </PrimaryCard>
  );
}
