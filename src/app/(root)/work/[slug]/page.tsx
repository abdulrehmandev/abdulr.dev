import { Metadata } from "next";
import { IndividualWorkPage } from "../_components/individual-work-page";
import { generateWorkPageMetadata } from "../_utils";

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
    </div>
  );
}
