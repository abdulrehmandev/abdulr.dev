import { Button } from "@/components/ui";
import { data, socials } from "@/data";
import Link from "next/link";

export function Intro() {
  return (
    <section className="pt-40 pb-40 px-4">
      <div className="container max-w-2xl mx-auto space-y-12">
        <div className="flex flex-col gap-4 [&_p]:font-light [&_a]:font-semibold">
          <div className="space-y-3 mb-6">
            <h1 className="text-3xl font-medium tracking-tight font-serif">
              Abdul Rehman
            </h1>
            <p>
              Full-Stack AI Engineer · Micro-SaaS for Startups · Helping
              Founders to Launch and Scale
              {/* Software Engineer · Building digital accessible experiences across
              web */}
            </p>
          </div>

          <p>
            I&apos;m a Full-Stack AI Engineer with a focus on building scalable
            Micro-SaaS products, AI-powered platforms, and custom tools for
            fast-moving startups and visionary founders. Over the past 3+ years,
            I&apos;ve shipped over 6 production-ready applications involving
            custom OpenAI, GPT and custom LLM-based workflows, across industries
            like edtech, healthcare, and e-commerce.
          </p>

          <p>
            My stack includes Next.js, TypeScript, NestJS, PostgreSQL, Prisma,
            Python, and OpenAI APIs. I&apos;ve worked with early-stage startups
            to design and deploy modular, extensible systems: from multi-app
            SaaS suites to real-time analytics platforms and AI-assisted
            decision-making tools.
          </p>

          <p>I&apos;m particularly skilled at:</p>

          <ul className="list-disc list-inside font-normal">
            <li> AI integration (LLMs, embeddings, AI agents)</li>
            <li> Scalable backend architecture (NestJS + TypeORM, FastAPI)</li>
            <li> Full-stack development (Next.js, tRPC)</li>
            <li> Building product MVPs that are ready to scale</li>
            <li> Freelance collaborations with lean teams or solo founders</li>
          </ul>

          <p>
            Outside of work, I&apos;m a curious mind—following science,
            experimenting with motion design, playing video games, and working
            toward building a meaningful online presence.
          </p>

          <p>
            If you&apos;re a founder or startup operator looking for a technical
            partner to prototype, scale, or optimize your product, I&apos;m
            currently open to fractional CTO-style roles, one-off builds, or
            long-term freelance engagements.
          </p>

          {/* Available */}
          <div className="flex items-center gap-3">
            <Link
              href={`mailto:${data.contact.email}`}
              className="!font-light underline hover:text-muted-foreground transition-colors leading-tight"
            >
              hello@abdulr.dev
            </Link>

            {/* Ping */}
            <div className="flex justify-center ml-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
            </div>

            <p className="italic text-xs !text-muted-foreground">
              Available for work
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {Object.entries(socials).map(([key, social]) => (
            <Link
              key={social.url}
              href={social.url}
              target="_blank"
              title={key}
              className="[&_svg]:size-6 hover:text-muted-foreground transition-colors"
            >
              {social.icon()}
            </Link>
          ))}
          <Button className="flex ml-4" size="sm" variant="outline" asChild>
            <Link href={data.contact.consultation}>Book 1:1 Call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
