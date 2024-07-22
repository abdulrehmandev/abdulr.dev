"use client";

import React from "react";
import { Container } from "../layout";
import { buttonVariants, H2, Icon, P } from "../ui";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib";
import { MailLink } from "@/data";
import { motion } from "framer-motion";

const CallToAction = () => {
  const [buttonHovered, setButtonHover] = React.useState<boolean>(false);

  return (
    <section className="relative overflow-hidden">
      <div className="block absolute aspect-square -bottom-[65%] md:-bottom-[180%] -z-10 -left-[20%] -right-[20%] md:inset-x-0 mx-auto md:w-full bg-gradient-radial from-primary/40 to-70% to-transparent" />
      <Container className="text-center py-44 md:py-40 relative overflow-hidden">
        <H2 className="max-w-2xl mx-auto mb-4">
          What&apos;s Next? Get In Touch
        </H2>
        <P className="mx-auto max-w-xl mb-8">
          I am looking for any new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my
          best to get back to you ASAP!
        </P>

        <Link
          href={MailLink}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          target="_blank"
          className={cn(buttonVariants({ variant: "bnw" }), "group")}
        >
          Say Hello{" "}
          <Icon
            className="group-hover:w-4 group-hover:ml-2 w-0 transition-all ml-0"
            name="arrow-up-right"
            size={16}
          />
        </Link>

        <motion.div
          animate={{
            rotate: buttonHovered ? 0 : 12,
            x: buttonHovered ? -20 : 0,
          }}
          className="bottom-8 md:bottom-16 -z-10 right-[12%] md:right-[20%] absolute"
        >
          <div className="w-24 md:w-40 relative aspect-square h-fit">
            <Image
              className="object-contain"
              src="/static/images/x.webp"
              alt="Sparkle"
              fill
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;
