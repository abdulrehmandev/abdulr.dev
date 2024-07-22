import React from "react";
import { Container } from "../layout";
import { H2, P } from "../ui";
import { cn } from "@/lib";

interface SectionProps {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  title,
  description,
  containerClassName,
}) => {
  return (
    <section className={className}>
      <Container className={cn("py-24", containerClassName)}>
        <H2 className="text-center mb-4 max-w-2xl mx-auto">{title}</H2>
        <P className="text-center mb-8 md:mb-12 max-w-xl mx-auto">
          {description}
        </P>
        {children}
      </Container>
    </section>
  );
};

export default Section;
