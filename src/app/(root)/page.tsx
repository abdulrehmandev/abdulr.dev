import { Metadata } from "next";
import Image from "next/image";
import { TechStack } from "./_components/tech-stack";
import { CurrentTime } from "./_components/current-time";
import { socials } from "@src/lib/config";
import { XTimeline } from "./_components/x-timeline";
import { H2, P } from "@src/ui/typography";
import NextLink from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@src/ui/button";
import { getCurrentQuarter } from "@src/lib/utils";
import { Card } from "@src/ui/card";
import { Icons } from "@src/components/icons";
import {
  CurrentRoleCard,
  MytpenCard,
  ProfileDescriptionCard,
  RecentCaseStudiesCard,
  RecentProjectsCard,
} from "./_components/index-cards";

const title = "Full Stack Developer";
const description = "Full Stack Developer";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title,
  description,
  // openGraph: {
  //   images: [
  //     {
  //       url: `/og?title=${encodeURIComponent(
  //         title
  //       )}&description=${encodeURIComponent(description)}`,
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   images: [
  //     {
  //       url: `/og?title=${encodeURIComponent(
  //         title
  //       )}&description=${encodeURIComponent(description)}`,
  //     },
  //   ],
  // }, @todo
};

export default function IndexPage() {
  return (
    <div className="pt-12">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div className="flex flex-row gap-6">
          <Image
            src="/images/profile.jpg"
            alt="Abdul Rehman"
            className="rounded-[30px] object-cover w-20 h-20"
            width={80}
            height={80}
          />

          <div className="space-y-1.5">
            <h1 className="text-2xl font-serif text-primary font-semibold">
              Abdul Rehman
            </h1>
            <p className="font-medium">Full Stack Developer</p>
            <p className="max-w-72">
              Working on AI apps and Automations, currently full time freelance
              and exploring what's next
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground text-base gap-1 md:gap-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5" /> <p>Gujrat, Pakistan</p>
              </span>
              <p className="text-xs font-mono font-medium">
                PKT <CurrentTime />
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-6 lg:gap-0 md:flex-col w-fit items-center md:items-end group/reach-out">
          <p className="hidden md:block group-hover/reach-out:opacity-100 opacity-0 text-xs text-muted-foreground mb-0.5 transition-opacity font-mono">
            Taking 1 contract for Q{getCurrentQuarter()}
          </p>

          <div className="flex items-center gap-2">
            <span className="bg-green-500/30 h-4 w-4 flex items-center justify-center rounded-full animate-pulse">
              <span className="bg-green-500 dark:bg-green-600 h-2 w-2 rounded-full" />
            </span>
            <p className="font-medium">Available for work</p>
          </div>

          <Button className="md:mt-3" size="sm" asChild>
            <NextLink href={`mailto:${socials.mail}`}>
              Reach out <ArrowUpRight />
            </NextLink>
          </Button>
        </div>
      </div>

      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16">
        <ProfileDescriptionCard className="col-span-1 md:col-span-2 lg:row-start-1 lg:row-end-2" />

        <CurrentRoleCard />

        <MytpenCard className="md:row-start-3 md:col-start-1 lg:row-start-auto lg:col-start-auto" />

        <TechStack className="md:col-start-2 md:row-start-2 md:row-end-4 lg:col-start-3 lg:row-start-1 lg:row-end-3" />

        <RecentProjectsCard className="lg:row-start-2 lg:row-end-4" />

        <RecentCaseStudiesCard className="row-start-5 md:row-start-auto h-fit lg:h-full" />
      </div>
    </div>
  );
}
