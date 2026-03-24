import { getAllCaseStudies } from "@src/content/studies";
import { socials } from "@src/lib/config";
import { cn } from "@src/lib/utils";
import { Card, CardDescription, CardTitle } from "@src/ui/card";
import { H2, Link, P } from "@src/ui/typography";
import { ArrowUpRight } from "lucide-react";
import NextLink from "next/link";
import React from "react";
import { allWork } from "../work/all-work";

export function ProfileDescriptionCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Card className={cn("px-6 py-4 gap-4", className)} {...props}>
      <P>Hi there, I’m Abdul.</P>

      <P>
        I help startups and growing teams design, build, and maintain their
        software. From SaaS platforms to AI automation and internal tools, I
        take ownership of the technical work so you can focus on product and
        growth.
      </P>

      <P>
        I currently work hands-on as a solo engineer, but operate with the
        processes, quality, and reliability of a lean agency. My goal is to form
        long-term retainer partnerships where I support ongoing development,
        improvements, and technical strategy month after month.
      </P>

      <P>
        You can <Link href="/blog">read my writing</Link>, browse my{" "}
        <Link href={socials.github} target="_blank">
          code
        </Link>
        ,{" "}
        <Link href={socials.goodreads} target="_blank">
          books
        </Link>{" "}
        I have read, or{" "}
        <Link href={`mailto:${socials.mail}`} target="_blank">
          reach out
        </Link>{" "}
        if you'd like to discuss your product or platform.
      </P>
    </Card>
  );
}

export function CurrentRoleCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Card
      className={cn("flex flex-col gap-6 justify-between px-6 py-4", className)}
      {...props}
    >
      <H2 className="text-pretty break-keep">
        Independent <span className="inline-block">Software Engineer</span>
      </H2>
      <div className="flex items-end justify-between">
        <p className="text-sm">
          Helping teams build, improve & maintain software systems.
        </p>
      </div>
    </Card>
  );
}

export function MytpenCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Card
      className={cn(
        "flex flex-col gap-1 justify-between px-6 py-4 bg-gradient-to-b from-[#ff553e] to-[#fa1100] text-white group/mytpen-card",
        className,
      )}
      {...props}
    >
      <h2 className="font-medium text-xl text-balance truncate">
        Leading Development at myTpen
      </h2>
      <p className="text-sm">
        Collaborating with global product teams to ship EdTech SaaS at scale.
      </p>
      <NextLink
        href="https://mytpen.app"
        target="_blank"
        className="text-sm gap-0.5 mt-6 flex items-center underline hover:opacity-80 transition"
      >
        Long-term collaborator{" "}
        <ArrowUpRight className="size-3.5 group-hover/mytpen-card:opacity-100 opacity-0 transition" />
      </NextLink>
    </Card>
  );
}

export function RecentCaseStudiesCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const cStudies = getAllCaseStudies();
  return (
    <div className={cn("grid grid-rows-2 gap-2", className)} {...props}>
      {cStudies
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 2)
        .map((c) => (
          <Card
            key={c.title}
            className="relative px-6 py-3 justify-center gap-1.5 group/c-card"
            asChild
            hoverable
          >
            <NextLink href={`/study/${c.slug}`}>
              <span className="bg-primary/10 text-primary text-[10px] font-medium absolute top-1 right-1 px-0.5 py-px">
                case study
              </span>
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm line-clamp-1">
                  {c.title}
                </CardTitle>
                <ArrowUpRight className="size-3.5 group-hover/c-card:opacity-100 opacity-0 transition" />
              </div>
              <CardDescription className="line-clamp-2 text-xs">
                {c.description}
              </CardDescription>
            </NextLink>
          </Card>
        ))}
    </div>
  );
}

export function RecentProjectsCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("space-y-2 flex flex-col", className)} {...props}>
      <Card className="p-6 pb-4 gap-1 h-full justify-between group/projects-header">
        <H2 className="">Recent Work</H2>
        <p className="text-sm">
          Notable client projects and experiments that showcase my recent work
        </p>
      </Card>
      {Object.values(allWork)
        .filter((work) => work.type !== "case-study")
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .slice(0, 4)
        // TODO: Filter to only show those with case-studies or the expandable work (might even need to exclude case studies too)
        .map((w, i) => (
          <Card
            key={`${w.title}-${i}`}
            className="px-6 py-2.5 justify-center gap-1.5 group/c-card"
            asChild
            hoverable
          >
            <NextLink
              href={w.type === "detailed" ? `/work/${w.slug}` : "/work"}
            >
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm truncate">{w.title}</CardTitle>
                <ArrowUpRight className="size-3.5 group-hover/c-card:opacity-100 opacity-0 transition" />
              </div>
            </NextLink>
          </Card>
        ))}
      <NextLink
        className="text-xs text-center w-fit mx-auto mt-0.5 underline"
        href="/work"
      >
        View All Work
      </NextLink>
    </div>
  );
}
