import { Button } from "@/components/ui";
import { data, socials } from "@/data";
import Link from "next/link";
import { Container } from "../../components/container";

export function Intro() {
  return (
    <section className="pt-40 pb-10">
      <Container className="space-y-12">
        <div className="flex flex-col gap-4 [&_p]:font-light [&_a]:font-semibold">
          <div className="space-y-3 mb-6">
            <h1 className="text-3xl font-medium tracking-tight font-serif">
              Abdul Rehman
            </h1>
            <p>
              Full-Stack with AI Expertise · Helping Founders to Launch and
              Scale
            </p>
          </div>

          <p>
            I&apos;m a Full-Stack AI Engineer with a focus on building scalable
            SaaS products, AI-powered platforms, and custom tools for
            fast-moving startups and visionary founders. Over the past 3+ years,
            I&apos;ve shipped 6+ production-ready applications involving AI and
            custom LLM-based workflows, across industries like edtech,
            healthcare, and e-commerce.
          </p>

          <p>
            Outside of work, I&apos;m a curious mind—following science,
            experimenting with motion design, playing video games, and working
            toward building a meaningful online presence.
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
      </Container>
    </section>
  );
}
