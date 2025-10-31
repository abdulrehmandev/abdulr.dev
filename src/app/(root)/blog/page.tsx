import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@src/components/page-header";
import { FrownIcon } from "lucide-react";
import { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const title = "Writings";
const description = "The writings I have done so far";

export const metadata: Metadata = {
  title,
  description,
};

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <div>
        <FrownIcon className="text-muted-foreground size-16" />
        <p className="mt-6">
          There is no content yet, coming soon, just hang on a little bit.
        </p>
      </div>
    </div>
  );
}
