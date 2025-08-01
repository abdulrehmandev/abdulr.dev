import LightRays from "@/components/light-rays-bg";
import { Intro } from "@/components/sections";

export default function Home() {
  return (
    <main className="relative">
      <Intro />
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={0.05}
        lightSpread={0.8}
        rayLength={1}
        followMouse={true}
        mouseInfluence={0.05}
        noiseAmount={0.1}
        distortion={0.05}
        className="fixed z-[-1] inset-0"
      />
      <div className="mask-to-b backdrop-blur-2xl h-32 w-full fixed -bottom-1 z-10 inset-x-0" />
    </main>
  );
}
