import { IconCover } from "@src/components/icon-cover";
import { MDXContent } from "@src/components/mdx-content";
import { Badge } from "@src/ui/badge";
import { notFound } from "next/navigation";
import { getWorkBySlug } from "../_utils";
import { JsonLd } from "@src/components/jsonld";
import { schema } from "@src/lib/schema";

interface IndividualWorkPageProps {
  slug: string;
}

export function IndividualWorkPage({ slug }: IndividualWorkPageProps) {
  const work = getWorkBySlug(slug);

  if (!work || work.type !== "detailed") {
    notFound();
  }

  return (
    <>
      <JsonLd data={schema.work(work)} />
      <div className="max-w-2xl mx-auto">
        <div className="overflow-hidden max-w-2xl">
          {work.cover.type === "image" ? (
            <img
              className="aspect-4/3 w-full border rounded-xs object-contain"
              alt={work.title}
              src={work.cover.src}
            />
          ) : work.cover.type === "icon" ? (
            <IconCover icon={work.cover.icon} />
          ) : (
            work.cover.component
          )}
        </div>
        <div className="p-6 grid gap-3">
          <div className="flex item-center gap-3 justify-between text-sm font-medium">
            <span>{work.date}</span>
            <span>{work.client}</span>
          </div>
          <h1 className="font-serif text-2xl font-semibold text-primary-title text-pretty">
            {work.title}
          </h1>
          <div className="flex items-center flex-wrap gap-0.5">
            {work.industry?.map((industry) => (
              <Badge key={industry} variant="primary">
                {industry}
              </Badge>
            ))}
            {work.tags?.map((tag) => (
              <Badge key={tag} size="sm">
                {tag}
              </Badge>
            ))}
          </div>
          <MDXContent content={work.content} />
          <div className="flex items-center flex-wrap gap-0.5">
            {work.techStack?.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
