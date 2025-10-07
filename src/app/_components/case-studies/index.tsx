import { Container } from "@/components/container";
import { Button } from "@/components/ui";
import Link from "next/link";

type CaseStudy = {
  title: string;
  description: string;
  featured: string[];
  href: string;
};

/**
 * NY Pedicab
 * 
 */
const caseStudies: CaseStudy[] = [
  {
    title: "How IENA is saving 1000+ hours of manual matching",
    description:
      "At TheCampStack, we freed IENA from the hassel of manual matching of Camps & Applicants, streamlining the process by creating a highly flexible matching system. The system directly recommends Camps & Applicants, freeing the managers time from manually finding the right candidate.",
    featured: ["Recommendation Engine"],
    href: "#",
  },
];

export function CaseStudies() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-xl font-semibold mb-10">Case Studies</h2>
        {caseStudies.map((study) => (
          <CaseStudyCard key={1} {...study} />
        ))}
      </Container>
    </section>
  );
}

function CaseStudyCard({ title, description, featured, href }: CaseStudy) {
  return (
    <Link
      href={href}
      className="rounded-2xl border-4 border-border/50 px-5 py-5 grid gap-1 bg-background/20 backdrop-blur-2xl hover:border-foreground/30 transition duration-500"
    >
      <div className="flex items-center gap-3 mb-2">
        {featured.map((ft) => (
          <Button
            asChild
            key={ft}
            className="rounded-full px-4"
            variant="secondary"
            size="sm"
          >
            <div>{ft}</div>
          </Button>
        ))}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="line-clamp-2 text-muted-foreground leading-tight">
        {description}
      </p>
    </Link>
  );
}
