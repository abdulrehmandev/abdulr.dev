import React from "react";
import {
  About,
  CallToAction,
  Hero,
  Projects,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
