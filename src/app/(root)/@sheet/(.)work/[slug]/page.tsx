import { SheetTitle } from "@src/ui/sheet";
import type { Metadata } from "next";
import { PageSheet, PageSheetContent } from "../../_components/sheet";
import { ScrollArea } from "@src/ui/scroll-area";
import { generateWorkPageMetadata } from "@src/app/(root)/work/_utils";
import { IndividualWorkPage } from "@src/app/(root)/work/_components/individual-work-page";
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

export default async function WorkSheetPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;

  return (
    <PageSheet>
      <PageSheetContent>
        <SheetTitle className="sr-only">{slug.split("-").join(" ")}</SheetTitle>
        <ScrollArea className="h-[calc(100vh-32px)]">
          <IndividualWorkPage slug={slug} />

          <div className="flex items-center flex-col gap-3 justify-center mt-8 mb-6 text-center">
            <p className="text-sm">
              Need help building, improving, or maintaining your product?
            </p>

            <Button size="sm" asChild>
              <Link href="/contact">
                Book an intro call <ArrowUpRight />
              </Link>
            </Button>

            <p className="text-xs text-muted-foreground">
              I’m currently taking work for Q{getCurrentQuarter()}.
            </p>
          </div>
        </ScrollArea>
      </PageSheetContent>
    </PageSheet>
  );
}
