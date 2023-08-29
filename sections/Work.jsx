import Container from "@/components/Container";
import SkillButton from "@/components/SkillButton";
import GithubProfile from "@/components/profiles/GithubProfile";
import LargeHeading from "@/components/ui/LargeHeading";
import PrimaryLink from "@/components/ui/PrimaryLink";
import SectionDescription from "@/components/ui/SectionDescription";
import { work } from "@/data/work";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const Work = () => {
  return (
    <div id="work" className="pt-20 pb-10 text-center">
      <Container>
        <LargeHeading text="My Work" />
        <SectionDescription text="Projects That Showcase My Skills" />
        <div className="md:columns-2 w-fit mx-auto gap-6 mt-14 sm:mt-20">
          {work.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="mx-auto mt-20 w-fit">
          <GithubProfile text="More Projects on Github" />
        </div>
      </Container>
    </div>
  );
};

const ProjectCard = ({ title, skills, image, github, preview }) => {
  return (
    <div className="text-left mx-auto max-w-lg md:max-w-lg w-full rounded-xl transition-all duration-300 bg-morph h-fit mb-4 md:mb-6 overflow-hidden">
      <Image
        className="w-full aspect-[4/3] mb-4 object-cover"
        src={image}
        width={800}
        height={800}
        alt={title}
      />
      <div className="px-4 pb-4 md:px-8">
        <h4 className="text-xl sm:text-2xl mt-8 tracking-tight font-semibold">
          {title}
        </h4>
        <div className="flex items-center flex-wrap gap-2 mt-5 mb-5">
          {skills.map((skill) => (
            <SkillButton text={skill} />
          ))}
        </div>
        {preview || github ? (
          <div className="flex w-fit gap-3 ml-auto justify-self-end">
            {preview && (
              <PrimaryLink href={preview}>
                <span>Preview</span> <FiExternalLink />
              </PrimaryLink>
            )}
            {github && (
              <PrimaryLink href={github}>
                <span>Github</span> <FiExternalLink />
              </PrimaryLink>
            )}
          </div>
        ) : (
          <p className="mx-auto w-fit mt-8 mb-2 text-xs tracking-wide opacity-60">
            Client Confidential
          </p>
        )}
      </div>
    </div>
  );
};

export default Work;
