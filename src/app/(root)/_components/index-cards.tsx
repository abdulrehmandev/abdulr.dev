import React from "react";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@src/lib/utils";
import { Card, CardDescription, CardTitle } from "@src/ui/card";
import { Icons } from "@src/components/icons";
import { H2, Link, P } from "@src/ui/typography";
import { socials } from "@src/lib/config";
import { getAllStudies } from "@src/lib/mdx";

export function ProfileDescriptionCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Card className={cn("px-6 py-4 gap-4", className)} {...props}>
      <P>
        Hello, I&apos;m a{" "}
        {new Date().getFullYear() - new Date("Feb 5, 2003").getFullYear()} years
        old Developer based in Gujrat, Pakistan. I work freelance on AI apps.
        I've been coding for for {new Date().getFullYear() - 2020} years and
        freelancing for the second half.
      </P>

      <P>
        As a full stack developer, I specialize in crafting end-to-end solutions
        through freelance contracts, focusing on AI-powered applications and
        automations. My approach is outcome-driven, ensuring every project
        delivers measurable value and exceeds client expectations.
      </P>

      <P>
        You can <Link href="/">read my writing</Link> or{" "}
        <Link href={socials.github}>code</Link>, or{" "}
        <Link href="/links">follow me online</Link>.{" "}
        <Link href={`mailto:${socials.mail}`}>Reach out</Link> if interested.
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
      <H2>Freelance Full Stack Developer</H2>
      <div className="flex items-end justify-between">
        <p className="text-sm">Current Role</p>
        <div className="flex items-center gap-1 text-foreground">
          <Icons.upwork className="size-3.5" />
          <Icons.mail className="size-4" />
          <Icons.linkedin className="size-4.25" />
        </div>
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
        Collaborating with individuals in building the future of EdTech SaaS in
        India
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
  const cStudies = getAllStudies();
  return (
    <div className={cn("grid grid-rows-2 gap-3", className)} {...props}>
      {cStudies
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 2)
        .map((c) => (
          <Card
            key={c.title}
            className="px-6 py-3 justify-center gap-1.5 group/c-card"
            asChild
          >
            <NextLink href={`/study/${c.slug}`}>
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm">{c.title}</CardTitle>
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
  // TODO remove temp project names
  const projects = [
    { title: "Lorem ipsum dolor sit amet, consectetur" },
    { title: "Lorem ipsum dolor sit amet, consectetur" },
    { title: "Lorem ipsum dolor sit amet, consectetur" },
    { title: "Lorem ipsum dolor sit amet, consectetur" },
  ];

  return (
    <div className={cn("space-y-3 flex flex-col", className)} {...props}>
      <Card className="p-6 pb-4 gap-1 h-full">
        <H2 className="">Recent Work</H2>
        <p className="text-sm">
          Recently completed and note-worthy contracts to mention
        </p>
      </Card>
      {projects
        // .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4)
        .map((p, i) => (
          <Card
            key={`${p.title}-${i}`}
            className="px-6 py-2.5 justify-center gap-1.5 group/c-card"
            asChild
          >
            <NextLink href={`#`}>
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm line-clamp-1">
                  {p.title}
                </CardTitle>
                <ArrowUpRight className="size-3.5 group-hover/c-card:opacity-100 opacity-0 transition" />
              </div>
            </NextLink>
          </Card>
        ))}
    </div>
  );
}
