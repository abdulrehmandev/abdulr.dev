import React from "react";
import { Section } from "../layout";
import { Projects as ProjectsList } from "@/data";
import Image from "next/image";
import { buttonVariants, Icon, P, Tooltip } from "../ui";
import Link from "next/link";
import { cn } from "@/lib";

type ProjectType = (typeof ProjectsList)[0];

const Projects = () => {
  return (
    <Section
      title="Featured Projects"
      description="A look at some of the amazing webapps that I've built recently."
      containerClassName="relative"
    >
      <div className="top-0 md:top-8 -z-10 right-[10%] md:right-[15%] absolute animate-bounce duration-5000">
        <div className="w-24 md:w-40 relative aspect-square h-fit">
          <Image
            className="object-contain"
            src="/static/images/sparkle.webp"
            alt="Sparkle"
            fill
          />
        </div>
      </div>
      <div className="grid max-w-xl mx-auto gap-8">
        {ProjectsList.map((project) =>
          project.href ? (
            <Tooltip key={project.title} content={`View ${project.title}`}>
              <Link href={project.href} target="_blank">
                <ProjectCard {...project} />
              </Link>
            </Tooltip>
          ) : (
            <ProjectCard key={project.title} {...project} />
          )
        )}
      </div>
    </Section>
  );
};

interface ProjectCardProps extends ProjectType {}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  href,
  image,
  description,
  skills,
  imageClassName,
}) => {
  return (
    <div className="h-fit grid grid-cols-2 md:grid-cols-4 p-5 rounded-md group hover:bg-neutral-100/80 hover:ring-1 ring-neutral-200 w-full transition-all gap-6">
      <div className="row-start-2 md:row-start-1 relative w-full aspect-[4/3] rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={cn("object-cover", imageClassName)}
        />
      </div>
      <div className="col-span-2 md:col-span-3">
        <h4 className="tracking-tight group-hover:text-primary text-lg md:text-xl font-semibold mb-1 inline-flex gap-4">
          {title}
        </h4>
        <p className="text-neutral-600 mb-3">{description}</p>
        {!!skills && (
          <div className="flex items-center gap-2 flex-wrap">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-primary/5 group-hover:text-primary text-neutral-500 font-medium tracking-tight text-sm px-3 py-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
