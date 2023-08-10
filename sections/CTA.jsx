import Container from "@/components/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { FiArrowRight } from "react-icons/fi";

const CTA = () => {
  return (
    <div className="pt-32 pb-44 sm:text-center">
      <Container className="px-10">
        <h1 className="font-bold text-4xl xl:text-6xl mx-auto mb-2 lg:mb-4 tracking-tight">
          Contact
        </h1>
        <p className="opacity-60 text-lg font-medium xl:max-w-xl xl:mx-auto">
          Let's Get in Touch and Build Something Amazing
        </p>
        <PrimaryButton
          className="group overflow-hidden h-9 sm:mx-auto mt-6 text-left"
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
      </Container>
    </div>
  );
};

export default CTA;
