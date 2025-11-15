import { JsonLd } from "@src/components/jsonld";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@src/components/page-header";
import { schema } from "@src/lib/schema";
import { FrownIcon } from "lucide-react";
import { Metadata } from "next";

export const dynamic = "force-static";

const title = "Writings";
const description =
  "Articles and thoughts I've written on design, code, and ideas.";

export const metadata: Metadata = {
  title,
  description,
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={schema.collection({
          name: "Blog - Abdul R",
          url: "https://abdulr.dev/blog",
          description:
            "Blog posts on software development, product building, freelancing, and web technologies.",
        })}
      />
      <div className="space-y-8">
        <PageHeader>
          <PageHeaderHeading>{title}</PageHeaderHeading>
          <PageHeaderDescription>{description}</PageHeaderDescription>
        </PageHeader>
        <div>
          <FrownIcon className="text-muted-foreground size-16" />
          <p className="mt-6">No posts yet — new writings coming soon.</p>
        </div>
      </div>
    </>
  );
}
