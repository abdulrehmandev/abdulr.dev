import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import CTA from "@/sections/CTA";

export const metadata = {
  title: "Abdul Rehman | WEB DEV",
  description: "Full Stack Web and Mobile Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />

      <Services />

      <Work />

      <CTA />
    </main>
  );
}
