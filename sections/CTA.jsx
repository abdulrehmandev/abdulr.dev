import Container from "@/components/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { FiArrowRight } from "react-icons/fi";

const CTA = () => {
  return (
    <div className="pt-32 pb-44 xl:text-center">
      <Container className="px-6">
        <h1 className="font-bold text-4xl xl:text-6xl max-w-md xl:max-w-2xl xl:mx-auto mb-4 tracking-tight">
          Contact
        </h1>
        <p className="opacity-60 text-lg font-medium xl:max-w-xl xl:mx-auto">
          Let's Get in Touch and Build Something Amazing
        </p>
        <PrimaryButton
          href="mailto:beingabdulr@gmail.com"
          className="mt-8 xl:mx-auto"
        >
          <span>Ask AbdulrDev</span>
          <FiArrowRight size={18} />
        </PrimaryButton>
      </Container>
    </div>
  );
};

export default CTA;
