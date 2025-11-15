import { Metadata } from "next";
import { IndividualWorkPage } from "../_components/individual-work-page";
import { generateWorkPageMetadata } from "../_utils";
import { Button } from "@src/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCurrentQuarter } from "@src/lib/utils";

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return generateWorkPageMetadata(slug);
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  return (
    <div className="py-8">
      <IndividualWorkPage slug={slug} />

      <div className="flex items-center flex-col gap-3 justify-center mt-20 text-center">
        <p className="text-sm">
          Need help building, improving, or maintaining your product?
        </p>

        <Button size="lg" asChild>
          <Link href="/contact">
            Book an intro call <ArrowUpRight />
          </Link>
        </Button>

        <p className="text-xs text-muted-foreground">
          I’m currently taking work for Q{getCurrentQuarter()}.
        </p>
      </div>
    </div>
  );
}
