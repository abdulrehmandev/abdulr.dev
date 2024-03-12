"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Icons } from "@/app/icons";

const Navbar = () => {
  const [opened, setOpened] = React.useState(false);
  return (
    <nav className="h-16 sm:h-16 md:h-24 px-4 sm:px-10 md:px-20 flex justify-end md:justify-between items-center">
      <div className="hidden md:flex items-center gap-3 sm:gap-6">
        <Link href="https://www.github.com/abdulrehmandev" target="_blank">
          <Icons.github className="w-6 h-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/abdulrdev" target="_blank">
          <Icons.linkedin className="w-6 h-6" />
        </Link>
        <Link href="https://join.skype.com/invite/r2KpCXhsWync" target="_blank">
          <Icons.skype className="w-6 h-6" />
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center gap-10 md:gap-16 font-medium text-sm text-zinc-600">
        <Link className="hover:text-zinc-800 transition-colors" href="#work">
          Work
        </Link>
        <Link className="hover:text-zinc-800 transition-colors" href="#contact">
          Contact
        </Link>
      </div>
      <a
        className="hidden md:block hover:scale-105 transition-all rounded-full bg-black text-white text-xs font-semibold py-1.5 px-3"
        href="/Full Stack Developer - Abdul Rehman.pdf"
        download
      >
        Download Resume
      </a>

      <NavToggler opened={opened} setOpened={setOpened} />

      <motion.div
        animate={{ translateY: opened ? "0%" : "-100%" }}
        transition={{ ease: "circInOut", duration: 0.5 }}
        className="fixed top-0 inset-x-0 bg-white z-20 pt-20 pb-10 flex md:hidden flex-col items-center gap-8 shadow-xl"
      >
        <div className="flex flex-col items-center justify-center gap-8 font-medium text-sm text-zinc-600">
          <Link className="hover:text-zinc-800 transition-colors" href="#work">
            Work
          </Link>
          <Link
            className="hover:text-zinc-800 transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </div>

        <a
          className="hover:scale-105 transition-all rounded-full bg-black text-white text-xs font-semibold py-1.5 px-3"
          href="/Full Stack Developer - Abdul Rehman.pdf"
          download
        >
          Download Resume
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="https://www.github.com/abdulrehmandev" target="_blank">
            <Icons.github className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/abdulrdev" target="_blank">
            <Icons.linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="https://join.skype.com/invite/r2KpCXhsWync"
            target="_blank"
          >
            <Icons.skype className="w-6 h-6" />
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

const NavToggler = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.5, duration: 0.5 }}>
      <motion.button
        onClick={() => {
          setOpened((prevState) => !prevState);
        }}
        className="md:hidden w-7 h-6 flex flex-col items-center justify-center gap-1 z-30"
      >
        <motion.div
          animate={{
            rotate: opened ? 45 : 0,
            translateY: opened ? 3 : 0,
            width: opened ? 24 : "100%",
          }}
          className="w-full h-px bg-black"
        />
        <motion.div
          animate={{
            rotate: opened ? -45 : 0,
            translateY: opened ? -2 : 0,
            height: opened ? 1 : 2,
            width: opened ? 24 : "100%",
          }}
          className="w-full h-0.5 bg-black"
        />
      </motion.button>
    </MotionConfig>
  );
};
