import { Container } from "@/components/container";
import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";
import {
  ArrowDownUp,
  Atom,
  BrainCircuit,
  Cloud,
  Factory,
  Package,
} from "lucide-react";

type Experience = {
  type: string;
  from: string;
  to: string;
  description: React.ReactNode;
  badges: string[];
  clients?: {
    name: string;
    href?: string;
  }[];
};

const experiences: Experience[] = [
  {
    type: "Freelance",
    from: "2022",
    to: "Present",
    description: (
      <>
        <p>
          I worked with major EdTech startups and ecommerce brands to design,
          build, and optimize applications that drive growth. Here are some of
          the things worth mentioning:
        </p>

        <ul className="space-y-0.5">
          <li>
            <Atom className="inline-flex text-blue-300 size-4 mr-2" />
            Deliver highly scalable and performant UI codebases using{" "}
            <strong>React</strong> and <strong>TypeScript</strong>
          </li>
          <li>
            <ArrowDownUp className="inline-flex text-green-400 size-4 mr-2" />
            Architect complex backends and <strong>public APIs</strong> with
            NestJS, Python, FastAPI, & PostgreSQL.
          </li>
          <li>
            <Package className="inline-flex text-yellow-400 size-4 mr-2" />{" "}
            Develop custom <strong>SDKs</strong>, <strong>dev tooling</strong>,
            and serverless automation workflows handling 10,000+ of monthly
            invocations.
          </li>
          <li>
            <BrainCircuit className="inline-flex text-red-400 size-4 mr-2" />{" "}
            Integrate AI & LLM capabilities into practical recommendation
            engines and Retrieval-Augmented Generation (RAG) pipelines.
          </li>
          <li>
            <Cloud className="inline-flex text-blue-500 size-4 mr-2" /> Deploy
            with Docker, serverless AWS Lambda, edge deployments (Vercel,
            Cloudflare Workers), and object storage (Cloudflare R2, AWS S3)
          </li>
          <li>
            <Factory className="inline-flex text-gray-400 size-4 mr-2" />{" "}
            Closely collaborate in industries like EdTech, Real Estate and
            Sports
          </li>
        </ul>
      </>
    ),
    badges: ["SaaS Development", "AI Integration", "ETL Automation Pipelines"],
    clients: [
      { name: "TheCampStack", href: "https://thecampstack.com" },
      { name: "myTpen", href: "https://mytpen.app" },
      { name: "Ability Beyond", href: "https://abilitybeyond.org/" },
      { name: "Setubo" },
      { name: "Instantly Creative" },
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-xl font-semibold mb-10">Work</h2>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.to} {...exp} />
        ))}
      </Container>
    </section>
  );
}

function ExperienceCard({
  description,
  from,
  to,
  type,
  badges,
  clients,
}: Experience) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-16 w-full justify-between">
        <p className="font-semibold text-lg">{type}</p>
        <p className="flex items-center gap-3 text-muted-foreground">
          <span>{from}</span>
          <span>—</span>
          <span>{to}</span>
        </p>
      </div>
      <div className="prose space-y-3">
        <>{description}</>
        {clients && (
          <p>
            <span>Noteable Clients:</span>{" "}
            {clients.map((client, i) => (
              <React.Fragment key={client.name}>
                {client?.href ? (
                  <a className="underline" href={client.href}>
                    {client.name}
                  </a>
                ) : (
                  <span>{client.name}</span>
                )}
                {i !== clients.length - 1 && <span>, </span>}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
      <div className="flex items-center gap-3">
        {badges.map((bg) => (
          <Button
            asChild
            key={bg}
            className="rounded-full px-4"
            variant="secondary"
            size="sm"
          >
            <div>{bg}</div>
          </Button>
        ))}
      </div>
    </div>
  );
}
