import CTA from "./_components/sections/CTA";
import Footer from "./_components/sections/Footer";
import Hero from "./_components/sections/Hero";
import Stack from "./_components/sections/Stack";
import Testimonials from "./_components/sections/Testimonials";
import Work from "./_components/sections/Work";

export default function Home() {
  return (
    <main className="pt-20">
      <div className="container mx-auto">
        <Hero />
        <Stack />
      </div>
      <Work />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
