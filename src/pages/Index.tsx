import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import OfficePictures from '@/components/OfficePictures';
import PricingCard from '@/components/PricingCard';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // If there's a hash (e.g., #contact), scroll to that element after a slight delay
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // Adjust delay if needed
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <PricingCard />
        <About />
        <OfficePictures />
        <Contact /> {/* This contains id="contact" */}
      </main>
      <FloatingContactButton />
      <FloatingSocialIcons />
      <Footer />
    </div>
  );
};

export default Index;
