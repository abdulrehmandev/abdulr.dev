import { cn } from "@src/lib/utils";
import { Badge } from "@src/ui/badge";
import { Card } from "@src/ui/card";
import { H2 } from "@src/ui/typography";
import React from "react";

const techStack = [
  {
    name: "Focus",
    techs: [
      "Full-Stack Engineering",
      "SaaS",
      "LLM Integrations",
      "AI Automation",
      "Cloud Workflows",
      "Agentic Systems",
      "APIs",
      "Open Source",
    ],
  },
  {
    name: "Technicals",
    techs: [
      "Node.js",
      "TypeScript",
      "Python",
      "Cloudflare / AWS",
      "Serverless",
      "SQL",
      "Docker",
    ],
  },
];

const currentlyLearning = [
  "Agentic workflows",
  "Human-in-the-loop systems",
  "Scalable automation pipelines",
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
        <div className="space-y-1 font-serif text-primary-title">
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
                  <Badge key={tech}>{tech}</Badge>
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
