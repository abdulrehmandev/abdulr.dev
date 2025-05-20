import { Container } from "@/components/layout";
import { Projects as ProjectsData } from "./projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
        {makeProjects()}
      </Container>
    </section>
  );
}

function makeProjects() {
  const projects = Object.values(ProjectsData);
  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-4">
        {projects
          .filter((_, i) => i % 2 === 0)
          .map((project, i) => (
            <ProjectCard key={project.title + i} project={project} />
          ))}
      </div>
      <div className="flex flex-col gap-2 lg:gap-4">
        {projects
          .filter((_, i) => i % 2 === 1)
          .map((project, i) => (
            <ProjectCard key={project.title + i} project={project} />
          ))}
      </div>
    </>
  );
}
