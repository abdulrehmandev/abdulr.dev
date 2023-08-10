import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import GithubProfile from "@/components/profiles/GithubProfile";
import PrimaryButton from "@/components/ui/PrimaryButton";
import PrimaryLink from "@/components/ui/PrimaryLink";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="bg-signature-gradient pt-44 pb-20">
      <Container className="px-8 sm:px-10">
        <p className="font-medium tracking-wide text-2xl md:text-3xl lg:text-4xl max-w-4xl">
          <span className="bg-amber-400 text-stone-900 pt-1 font-serif italic tracking-tighter ">
            Abdul Rehman
          </span>
          <span className="h-[2px] md:h-[3px] w-8 mb-[6px] md:mb-2 mx-[2px] dark:bg-white bg-black inline-block"></span>
          Full-stack Web and Mobile developer. I love to building beautiful and
          functional web & mobile apps.
        </p>
        <div className="w-fit flex flex-wrap items-center gap-3 sm:gap-5 mt-12">
          <PrimaryButton
            className="group overflow-hidden h-9"
            href="mailto:beingabdulr@gmail.com"
          >
            <span className="animated-green-light mr-2">
              <span className="animated-green-light__inner"></span>
            </span>
            <span className="flex flex-col gap-4 translate-y-[32%] group-hover:-translate-y-[32%] transition duration-200">
              <span>Available for Work</span>
              <span>Contact Now</span>
            </span>
          </PrimaryButton>
          {/* <PrimaryLink href="/">
            <span>Github</span>
            <FiExternalLink />
          </PrimaryLink> */}
          <GithubProfile />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
