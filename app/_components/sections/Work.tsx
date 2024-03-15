"use client";
import React from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/legacy/image";
import useMeasure from "react-use-measure";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Work = () => {
  return (
    <div className="px-4 pt-20 pb-32 text-center bg-white" id="work">
      <h2 className="font-primary leading-6 mx-auto text-2xl md:text-4xl lg:text-5xl text-neutral-700 max-w-5xl">
        A glimpse into the <br />
        <span className="text-orange-500">web apps</span> that I have built.
      </h2>
      <p className="text-neutral-500 text-base md:text-lg mt-4 max-w-[500px] mx-auto">
        I take pride in building custom solutions that help startups turn their
        dreams into reality!
      </p>
      <div className="grid grid-cols-1 gap-y-6 md:gap-y-12 md:grid-cols-2 place-items-center mt-16 md:mt-32 max-w-[800px] mx-auto">
        <WorkCard
          title="Einwelt AI"
          description={
            <>
              Built an interactive German learning app using Next.js, Chakra UI,
              and OpenAI. Users learn German through engaging,{" "}
              <span className="font-medium">AI-powered conversations</span>{" "}
              based on prompts.
            </>
          }
          image="/images/einwelt.jpg"
          href="einwelt.com"
        />
        <WorkCard
          title="NY Pedicab Services"
          description={
            <>
              Built a next-gen booking platform for a NYC Pedicab service using
              Next.js 14, Prisma & PostgreSQL for data management, with
              real-time pricing powered by{" "}
              <span className="font-medium">Google Maps API</span> and{" "}
              <span className="font-medium">Stripe</span> integration for
              seamless payments (
              <span className="font-medium">Google Pay & Apple Pay</span>{" "}
              supported).
            </>
          }
          image="/images/ny-pedicab.jpg"
        />
        <WorkCard
          title="Ability Beyond Org"
          description={
            <>
              Streamlined staff scheduling and patient care for{" "}
              <span className="font-medium">3,000+</span> mental health clients.
              Built a behavior tracking app with{" "}
              <span className="font-medium">50+ Chart.js visualizations</span>,
              integrating Salesforce for seamless data exchange and scheduling.
            </>
          }
          image="/images/ab.jpg"
          href="apps.main.abilitybeyond.org"
        />
        <WorkCard
          title="DahelpQuest Affiliate Program"
          description={
            <>
              Developed a{" "}
              <span className="font-medium">
                commission-based affiliate portal
              </span>{" "}
              for DaHelpQuest, enabling seamless user acquisition through custom
              referral links. Designed a powerful Admin Panel for managing{" "}
              <span className="font-medium">
                100+ affiliates and 5,000+ users
              </span>
              .
            </>
          }
          image="/images/dahelpquest.jpg"
          href="affiliate.dahelpquest.com"
        />
        <WorkCard
          title="AI Engineer"
          description="Crafted a minimalist and user-friendly AI engineer portfolio website to showcase expertise and projects in a modern, impactful way."
          image="/images/ai-engineer.jpg"
          href="usamamjad.vercel.app"
        />
        <WorkCard
          title="Developers World"
          description="Transformed company website from outdated to cutting-edge, showcasing my expertise in modern web development solutions."
          image="/images/dw.jpg"
          href="developersworld.io"
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
  description: React.ReactNode;
  href?: string;
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
  const router = useRouter();

  return (
    <MotionConfig transition={transition}>
      <motion.div
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => {
          setIsHovered((prevState) => !prevState);
        }}
        initial={{ scale: 1, zIndex: 1 }}
        animate={{ scale: isHovered ? 1.05 : 1, zIndex: isHovered ? 1001 : 0 }}
        exit={{ scale: 1, zIndex: 1 }}
        transition={{ ...transition, duration: 0.6 }}
        className="cursor-pointer rounded-xl max-w-[360px] w-full bg-white border-neutral-200 border-2 text-left pt-6 px-6 pb-3 overflow-hidden"
      >
        <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden mb-6">
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
                  {href ? (
                    <Link
                      href={"https://" + href}
                      target={"_blank"}
                      className="w-fit mt-3 mx-auto block border border-neutral-300 text-neutral-500 hover:text-black font-medium text-xs px-2 py-1 rounded-full transition-colors"
                    >
                      {href}
                    </Link>
                  ) : (
                    <span className="h-3 block" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            {!isHovered && (
              <p className="text-center text-xs text-neutral-400 animate-pulse font-light">
                Hover me
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            onClick={() => setIsHovered(false)}
            key={"overlay"}
            initial={{ opacity: 0, zIndex: 0 }}
            animate={{ opacity: 1, zIndex: 100 }}
            exit={{ opacity: 0, zIndex: 0 }}
            className="bg-dot-neutral-100/50 fixed inset-0 bg-black/20 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};
