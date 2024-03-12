"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Drawer } from "vaul";
import BookDrawer from "./BookDrawer";

export const FloatingNav = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-6 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-sm z-[1000] pr-2 pl-8 py-1.5 items-center justify-center space-x-4"
        )}
      >
        <Link
          href={""}
          className={cn(
            "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 text-sm"
          )}
        >
          Home
        </Link>
        <Link
          href={"#work"}
          className={cn(
            "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 text-sm"
          )}
        >
          Work
        </Link>
        <Link
          href={"#contact"}
          className={cn(
            "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 text-sm"
          )}
        >
          Contact
        </Link>

        <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            <button className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full group">
              <span>Book a call</span>
              <div className=" absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-orange-500 to-transparent  h-px" />
            </button>
          </Drawer.Trigger>
          <BookDrawer />
        </Drawer.Root>
      </motion.div>
    </AnimatePresence>
  );
};
