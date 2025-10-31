import * as RadixDialog from "@radix-ui/react-dialog";
import { IndividualWorkPage } from "@src/app/work/_components/individual-work-page";
import { generateWorkPageMetadata } from "@src/app/work/_utils";
import { ClientFullDialog } from "@src/components/client-full-dialog";
import { FullDialogContent } from "@src/ui/full-dialog";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return generateWorkPageMetadata(slug);
}

export default async function WorkModalPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  return (
    <ClientFullDialog>
      <FullDialogContent>
        <RadixDialog.Title className="sr-only">{slug}</RadixDialog.Title>
        <IndividualWorkPage slug={slug} />
      </FullDialogContent>
    </ClientFullDialog>
  );
}
