"use client";

import React from "react";
import { Drawer } from "vaul";
import BookDrawer from "../ui/BookDrawer";

const Hero = () => {
  return (
    <div className="px-4 flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="font-primary text-center text-3xl md:text-5xl lg:text-6xl text-neutral-700 max-w-5xl leading-snug">
        <span className="text-orange-600">Abdul R.</span> Crafting Performance
        Driven Websites with Beautiful Design
      </h1>

      <p className="text-center text-neutral-500 text-lg md:text-xl mt-4 max-w-[300px] sm:max-w-full">
        I build websites that drive results and help your business grow.
        I&apos;ve worked with startups and small businesses{" "}
        <br className="hidden md:block" />
        to build and scale their web applications. I call my self{" "}
        <span className="font-medium">problemo solver 🐧</span>
      </p>

      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <button className="mt-8 text-lg md:text-2xl font-semibold text-white bg-black relative border border-neutral-200 py-2 md:py-4 px-6 md:px-8 rounded-full transition-all shadow-2xl shadow-neutral-500 hover:shadow-orange-200 duration-500 hover:scale-[102%]">
            <span>Book a call</span>
            <span className="absolute inset-x-0 w-2/3 mx-auto bottom-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px]" />
          </button>
        </Drawer.Trigger>
        <BookDrawer />
      </Drawer.Root>
    </div>
  );
};

export default Hero;
