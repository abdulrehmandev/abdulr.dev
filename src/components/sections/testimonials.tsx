"use client";

import React from "react";
import { Container } from "../layout";
import { TestimonialsList } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Interval = 4000;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const activeTestimonial = TestimonialsList[activeIndex];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % TestimonialsList.length);
    }, Interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <Container className="md:py-12 relative">
        <div className="min-h-[440px] text-center flex flex-col items-center justify-center">
          <p className="max-w-2xl font-serif text-3xl tracking-tight italic">
            “{activeTestimonial.quote}”
          </p>
          <div className="flex flex-col md:flex-row items-center md:gap-4 mt-4">
            <span className="font-medium">{activeTestimonial.name}</span>
            <span className="text-neutral-600">{activeTestimonial.title}</span>
          </div>
        </div>

        <motion.div
          animate={{
            rotate: activeIndex * 120,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          className="bottom-[15%] md:bottom-[35%] -z-10 left-[10%] absolute w-fit"
        >
          <div className="w-24 md:w-40 relative aspect-square h-fit">
            <Image
              className="object-contain"
              src="/static/images/star.webp"
              alt="Sparkle"
              fill
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
