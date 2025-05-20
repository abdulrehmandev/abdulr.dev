import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProjectType } from "./projects";

type ProjectCardProps = {
  project: ProjectType;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden h-fit group border">
      <Image
        src={project.image}
        alt={project.title}
        height={680}
        width={680}
        className="object-cover w-full h-fit"
      />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute bottom-4 inset-x-4 rounded-md text-background dark:text-foreground bg-foreground/30 dark:bg-background/40 py-3 px-4 backdrop-blur-sm font-light">
        <div className="flex items-ceter justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-normal">{project.title}</h3>
            {project.type && (
              <>
                <span className="h-4 border-r border-muted-foreground" />
                <h4 className="text-background/70 dark:text-foreground/70 text-sm">
                  {project.type}
                </h4>
              </>
            )}
          </div>
          {project.url && (
            <Link
              className="text-sm flex items-center gap-1 leading-0 hover:opacity-80 transition-opacity duration-300"
              href={project.url}
              target="_blank"
            >
              See Live <ChevronRight className="size-4" />
            </Link>
          )}
        </div>
        {project.description && (
          <p className="text-sm">{project.description}</p>
        )}
      </div>
    </div>
  );
}
