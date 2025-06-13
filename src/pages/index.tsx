import About from "@/components/About/About";
import { Hero } from "@/components/Hero/Hero";
import WhatWeDoSection from "@/components/Whatwedo/WhatWeDo";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div
    >
      <Hero />
      <About />
      <WhatWeDoSection />
      <Contact/>
      <Footer />
    </div>
  );
}
