import Container from "@/components/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import PrimaryLink from "@/components/ui/PrimaryLink";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="bg-signature-gradient pt-32 xl:pt-44 pb-20 xl:text-center">
      <Container className="px-6">
        <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl max-w-md xl:max-w-2xl xl:mx-auto mb-4 tracking-tight">
          Bringing Your Brand to Life Online
        </h1>
        <p className="opacity-60 text-lg font-medium xl:max-w-xl xl:mx-auto">
          Hi, I am Abdul Rehman. I am a Web and Mobile App Developer from
          Pakistan. Check out my work and let's connect.
        </p>
        <div className="w-fit flex flex-wrap items-center gap-3 sm:gap-5 xl:mx-auto mt-12">
          <PrimaryButton href="/">
            <span>Download Resume</span>
            <FiArrowRight size={18} />
          </PrimaryButton>
          <PrimaryLink href="/">
            <span>Github</span>
            <FiExternalLink />
          </PrimaryLink>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
