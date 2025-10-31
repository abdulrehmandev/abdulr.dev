import { notFound } from "next/navigation";
import { getWorkBySlug } from "../_utils";

interface IndividualWorkPageProps {
  slug: string;
}

export function IndividualWorkPage({ slug }: IndividualWorkPageProps) {
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return <div>{work.title}</div>;
}
