import { JsonLd } from "@src/components/jsonld";
import { socials } from "@src/lib/config";
import { schema } from "@src/lib/schema";
import { getCurrentQuarter } from "@src/lib/utils";
import { Button } from "@src/ui/button";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { CurrentTime } from "./_components/current-time";
import { DigitalCloneChat } from "./_components/digital-clone-chat";
import {
  CurrentRoleCard,
  MytpenCard,
  ProfileDescriptionCard,
  RecentCaseStudiesCard,
  RecentProjectsCard,
} from "./_components/index-cards";
import { TechStack } from "./_components/tech-stack";

export const dynamic = "force-static";

const title = "Freelance Full Stack Developer & Technical Partner";
const description =
  "Abdul Rehman is an independent full-stack engineer helping startups build, improve, and maintain web apps, SaaS platforms, and AI automation systems. Available for long-term retainer partnerships.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title,
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title,
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
};

export default function IndexPage() {
  return (
    <>
      <JsonLd data={schema.home()} />

      <div className="pt-12">
        <div className="px-3 md:px-0 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="flex flex-row gap-6">
            <div className="space-y-1.5">
              <Image
                src="https://res.cloudinary.com/deixw73xo/image/upload/v1763193786/profile_q4svc8.jpg"
                alt="Abdul Rehman"
                className="rounded-full object-cover w-20 h-20 grayscale hover:grayscale-0"
                width={80}
                height={80}
              />
              <h1 className="text-2xl font-serif text-primary-title font-semibold">
                Hey, I'm Abdul
              </h1>
              <p className="font-medium md:max-w-4/5">
                Software engineer, advocate of AI adaptability, sports
                enthusiast. Ask my digital clone anything, including what I'd
                build if I had your idea and a weekend.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground text-base gap-1 md:gap-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5" /> <p>Pakistan</p>
                </span>
                <p className="text-xs font-mono font-medium">
                  PKT <CurrentTime />
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-row-reverse gap-6 lg:gap-0 md:flex-col w-fit items-center md:items-end group/reach-out">
            <p className="hidden md:block group-hover/reach-out:opacity-100 opacity-0 text-xs text-muted-foreground mb-0.5 transition-opacity font-mono">
              Taking 1 contract for Q{getCurrentQuarter()}
            </p>

            <Button className="md:mt-3" size="sm" asChild>
              <NextLink href={`mailto:${socials.mail}`}>
                Reach out <ArrowUpRight />
              </NextLink>
            </Button>
          </div> */}
        </div>

        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16">
          <DigitalCloneChat className="col-span-1 md:col-span-2 lg:col-span-3 mb-12" />

          <ProfileDescriptionCard className="col-span-1 md:col-span-2 lg:row-start-2 lg:row-end-3" />

          <CurrentRoleCard />

          <MytpenCard className="md:row-start-4 md:col-start-1 lg:row-start-auto lg:col-start-auto" />

          <TechStack className="md:col-start-2 md:row-start-3 md:row-end-5 lg:col-start-3 lg:row-start-2 lg:row-end-4" />

          <RecentProjectsCard className="lg:row-start-3 lg:row-end-5" />

          <RecentCaseStudiesCard className="row-start-6 md:row-start-auto h-fit lg:h-full" />
        </div>
      </div>
    </>
  );
}
