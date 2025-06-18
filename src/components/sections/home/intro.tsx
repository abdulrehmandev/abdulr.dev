// import { IconButton } from "@/components/ui";
import { data, socials } from "@/data";
import Link from "next/link";

export function Intro() {
  return (
    <section className="pt-40 pb-10 px-4">
      <div className="container max-w-2xl mx-auto space-y-12">
        <div className="flex flex-col gap-4 [&_p]:font-light [&_p]:text-foreground/90 [&_a]:font-semibold">
          <div className="space-y-3 mb-6">
            <h1 className="text-3xl font-medium tracking-tight font-serif">
              Abdul Rehman
            </h1>
            <p>
              Software Engineer · Building digital accessible experiences across
              web
            </p>
          </div>

          <p>I&apos;m Abdul, a software engineer from Pakistan.</p>

          <p>
            I currently work as a freelance software engineer, helping startups
            and teams bring their ideas to life through modern UIs,
            integrations, and scalable backend systems. I&apos;m a long-term
            contributor at{" "}
            <Link href="https://thecampstack.com" target="_blank">
              TheCampStack
            </Link>
            , where I focus on building recommendation engines, custom workflows
            and developer tooling. Previously I was at{" "}
            <Link href="https://mytpen.app" target="_blank">
              myTpen
            </Link>{" "}
            and{" "}
            <Link href="https://abilitybeyond.org" target="_blank">
              Ability Beyond
            </Link>{" "}
            on data-driven platforms and automation tools.
          </p>

          <p>
            My work spans across building workflows that handle +10,000 of
            monthly invocations to designing user-facing features in
            high-traffic environments. I&apos;m especially drawn to systems that
            blend product thinking with deep technical execution.
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
        </div>
      </div>
    </section>
  );
}
