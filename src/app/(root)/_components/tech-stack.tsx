import { cn } from "@src/lib/utils";
import { Badge } from "@src/ui/badge";
import { Card } from "@src/ui/card";
import { H2 } from "@src/ui/typography";
import React from "react";

const techStack = [
  // {
  //   name: "Frontend",
  //   techs: [
  //     "React",
  //     "Next.js",
  //     "Shadcn",
  //     "SCSS",
  //     "Tailwindcss",
  //     "Framer Motion",
  //     "Tanstack Query",
  //   ],
  // }, Full-Stack, Cloud, AI & Automation, APIs, Data, UI/UX, Systems, Open Source
  {
    name: "Technicals",
    techs: [
      "Node.js",
      "TypeScript",
      "Python",
      "AI",
      "LLMs",
      "Cloud",
      "APIs",
      "Agents",
      "Automations",
      "Cloud Workflows",
      "Open Source",
    ],
  },
  // {
  //   name: "Database & Services",
  //   techs: [
  //     "AWS Lambda",
  //     "Cloudflare Workers",
  //     "Docker",
  //     "Supabase",
  //     "Postman",
  //     "Prisma ORM",
  //     "Drizzle ORM",
  //     "Postgres",
  //     "MongoDB",
  //   ],
  // },
];

const currentlyLearning = [
  "Prompt Engineering",
  "Agentic Workflows",
  "Human-in-loop Systems",
];

export function TechStack({ className }: { className?: string }) {
  return (
    <Card asChild>
      <aside
        className={cn(
          "group/tech-stack *:cursor-default px-6 pt-4 pb-4 h-full",
          className,
        )}
      >
        <div className="space-y-1 font-serif text-primary">
          <div className="flex items-center gap-0 group-hover/tech-stack:gap-3 transition-all text-4xl">
            <span>{"{"}</span>
            <span>{"}"}</span>
          </div>
          <H2>Crafts</H2>
        </div>

        <div className="flex flex-col gap-5 mt-2">
          {techStack.map((stack) => (
            <div key={stack.name}>
              <h3 className="font-medium text-sm">{stack.name}</h3>
              <div className="flex items-center flex-wrap gap-2 mt-2">
                {stack.techs.map((tech) => (
                  <div
                    className="font-mono transition-all text-xs py-0.5 px-0.5 bg-accent hover:text-accent-foreground font-medium"
                    key={tech}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h3 className="font-medium text-sm mb-1">Currently Mastering</h3>
          {currentlyLearning.map((l, i) => (
            <p
              key={l}
              className="hover:not-italic italic font-mono text-sm w-fit"
            >
              {l}
              {i !== currentlyLearning.length - 1 && ","}
            </p>
          ))}
        </div>
      </aside>
    </Card>
  );
}
