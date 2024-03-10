"use client";
import React from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import useMeasure from "react-use-measure";

const Work = () => {
  return (
    <div className="px-4 pt-20 pb-32 text-center bg-white">
      <h2 className="font-primary leading-6 mx-auto text-2xl md:text-4xl lg:text-5xl text-neutral-700 max-w-5xl">
        A glimpse into the <br />
        <span className="text-orange-500">web apps</span> that I have built.
      </h2>
      <p className="text-neutral-500 text-base md:text-lg mt-4 max-w-[400px] mx-auto">
        We take pride in building custom solutions that help founders turn their
        dreams into reality!
      </p>
      <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 place-items-center mt-32 max-w-[800px] mx-auto">
        <WorkCard
          title="DahelpQuest Affiliate Program"
          description="Affiliate and Admin Portals for DahelpQuest. We take pride in building custom solutions that help founders turn their dreams into reality!"
          image="/images/dahelpquest.jpg"
          href=""
        />
        <WorkCard
          title="DahelpQuest Affiliate Program"
          description="Affiliate and Admin Portals for DahelpQuest. We take pride in building custom solutions that help founders turn their dreams into reality!"
          image="/images/dahelpquest.jpg"
          href=""
        />
        <WorkCard
          title="DahelpQuest Affiliate Program"
          description="Affiliate and Admin Portals for DahelpQuest. We take pride in building custom solutions that help founders turn their dreams into reality!"
          image="/images/dahelpquest.jpg"
          href=""
        />
        <WorkCard
          title="DahelpQuest Affiliate Program"
          description="Affiliate and Admin Portals for DahelpQuest. We take pride in building custom solutions that help founders turn their dreams into reality!"
          image="/images/dahelpquest.jpg"
          href=""
        />
      </div>
    </div>
  );
};

export default Work;

const transition = {
  type: "ease",
  ease: "easeInOut",
  duration: 0.5,
};

interface WorkCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  href,
  image,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [ref, bounds] = useMeasure();

  return (
    <MotionConfig transition={transition}>
      <motion.div
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ scale: 1, zIndex: 100 }}
        whileHover={{ scale: 1.05, zIndex: 1001 }}
        exit={{ scale: 1, zIndex: 100 }}
        className="cursor-pointer rounded-xl bg-white border-neutral-200 border text-left pt-6 px-6 pb-6 overflow-hidden"
      >
        <div className="w-full aspect-video relative rounded-lg overflow-hidden mb-6">
          <Image layout="fill" objectFit="cover" src={image} alt="title" />
        </div>
        <h4 className="font-bold text-xl mb-2 text-neutral-700">{title}</h4>
        <motion.div
          animate={{ height: bounds.height > 0 ? bounds.height : 0 }}
          transition={{ type: "spring", bound: 0.2, duration: 0.8 }}
        >
          <div ref={ref}>
            <AnimatePresence mode="popLayout">
              {isHovered && (
                <motion.div
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-base text-black">{description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            key={"overlay"}
            initial={{ opacity: 0, zIndex: 100 }}
            animate={{ opacity: 1, zIndex: 1000 }}
            exit={{ opacity: 0, zIndex: 100 }}
            className="bg-dot-neutral-100/50 fixed inset-0 bg-black/20 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};
