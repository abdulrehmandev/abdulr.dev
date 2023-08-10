import Container from "@/components/Container";
import LargeHeading from "@/components/ui/LargeHeading";
import SectionDescription from "@/components/ui/SectionDescription";
import { services } from "@/data/services";
import SkillButton from "@/components/SkillButton";

const Services = () => {
  return (
    <div id="about" className="py-20 text-center">
      <Container>
        <LargeHeading text="What I Do" />
        <SectionDescription text="Your One-Stop for All Your Needs Online" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14 sm:mt-20">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </div>
  );
};

const ServiceCard = ({ title, text, skills, icon }) => {
  return (
    <div className="text-left py-6 px-6 sm:px-8 mx-auto max-w-xl rounded-lg bg-stone-200/50 dark:bg-stone-800/75 border dark:border-stone-800 border-stone-200">
      <span className="text-4xl">{icon}</span>
      <h4 className="text-xl tracking-tight font-medium mt-4">{title}</h4>
      <p className="opacity-60 mt-3">{text}</p>
      <div className="flex items-center flex-wrap gap-2 mt-8">
        {skills.map((skill) => (
          <SkillButton key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
};

export default Services;
