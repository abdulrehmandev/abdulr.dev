"use client";

import React from "react";
import { P, Highlight, Tooltip, Icon, buttonVariants } from "../ui";
import { ExperienceList } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib";
import { Container } from "../layout";

const About = () => {
  return (
    <section className="py-20">
      <Container className="relative">
        <div className="md:text-center mx-auto max-w-3xl space-y-6 mb-24">
          <motion.div
            style={{
              rotate: "45deg",
            }}
            animate={{
              x: [0, -10, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="-top-36 md:top-0 -z-10 right-[7%] absolute w-fit"
          >
            <div className="w-32 md:w-48 relative aspect-square h-fit">
              <Image
                className="object-contain"
                src="/static/images/bolt.webp"
                alt="Sparkle"
                fill
              />
            </div>
          </motion.div>

          <motion.div
            animate={{
              x: [0, 50, 75, 25, 0],
              y: [0, 0, -35, -35, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="-bottom-20 md:top-2/3 -z-10 left-[9%] absolute w-fit"
          >
            <div className="w-20 md:w-32 relative aspect-square h-fit">
              <Image
                className="object-contain"
                src="/static/images/cursor.webp"
                alt="Sparkle"
                fill
              />
            </div>
          </motion.div>

          <P>
            In 2020, I aimed to become a mechanical engineer due to my love for
            physics. Some insightful counseling led me to computer science, and
            I discovered my true passion. By 2022, I was all in on web, working
            on local projects. In 2023, I began freelancing on Upwork and landed
            my first part-time job. Now, I&apos;m working as a UI developer at{" "}
            <Highlight>Instantly Creative</Highlight>.
          </P>

          <P>
            Outside of work, you&apos;ll often find me attempting (and usually
            failing) at snooker, I&apos;m also a food fanatic and I love to
            travel new places. My journey took me through various languages,
            dabbling in fields like data science, AI, and ML. Eventually, I
            settled on JavaScript.
          </P>

          <P>
            I&apos;ve just graduated from university, which means I can now dive
            into full-time work and maybe even explore the world a bit more.
            Traveling is high on my list, and I can&apos;t wait to see where my
            adventures in tech and life will take me next.
          </P>
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto gap-6 mb-10">
          {ExperienceList.map((experience) =>
            experience.companyLink ? (
              <Tooltip
                key={experience.timeline}
                content={`View ${experience.company}`}
              >
                <Link className="w-full" href={experience.companyLink}>
                  <ExperienceCard {...experience} />
                </Link>
              </Tooltip>
            ) : (
              <ExperienceCard key={experience.timeline} {...experience} />
            )
          )}
        </div>

        <Link
          href="/Full Stack Developer - Abdul Rehman.pdf"
          target="_blank"
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "flex w-fit mx-auto group"
          )}
        >
          View Full Resume{" "}
          <Icon
            className="group-hover:w-4 group-hover:ml-2 w-0 transition-all ml-0"
            name="arrow-up-right"
            size={16}
          />
        </Link>
      </Container>
    </section>
  );
};

type ExperienceType = (typeof ExperienceList)[0];
interface ExperienceCardProps extends ExperienceType {}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  coreSkills,
  description,
  role,
  timeline,
}) => {
  return (
    <div className="grid grid-cols-3  md:grid-cols-4 gap-2 md:gap-6 p-5 rounded-md group hover:bg-neutral-100/80 hover:ring-1 ring-neutral-200 w-full transition-all">
      <p className="uppercase text-neutral-400 mt-2 font-medium text-xs break-keep whitespace-nowrap">
        {timeline}
      </p>
      <div className="col-span-3">
        <h4 className="tracking-tight group-hover:text-primary text-lg md:text-xl font-semibold mb-1">
          <span>{role}</span>
          <span className="mx-2 md:mx-4">•</span>
          <span>{company}</span>
        </h4>
        <p className="text-neutral-600 mb-3">{description}</p>
        <div className="flex items-center gap-2 flex-wrap">
          {coreSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-primary/5 group-hover:text-primary text-neutral-500 font-medium tracking-tight text-sm px-3 py-0.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
