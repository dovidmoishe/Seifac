import About from "@/components/About/About";
import { Hero } from "@/components/Hero/Hero";
import WhatWeDoSection from "@/components/Whatwedo/WhatWeDo";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Products from "@/components/Products/Products";
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Seifac - Premium Hair Extensions & Business Solutions"
        description="Discover Seifac's premium virgin hair extensions from India and South East Asia with perfectly aligned cuticles. We also offer Farm ERP, Wine Supply, and Medical Devices."
        canonical="https://seifac.com/"
        openGraph={{
          url: 'https://seifac.com/',
          title: 'Premium Hair Extensions & Business Solutions',
          description: 'High-quality virgin hair extensions and diverse business solutions including Agriculture, Wine Supply, and Medical Devices.',
          images: [
            {
              url: 'https://seifac.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Seifac Premium Hair Extensions',
            },
          ],
        }}
      />
      <Hero />
      <About />
      <WhatWeDoSection />
      <Products />
      <Contact/>
      <Footer />
    </div>
  );
}
