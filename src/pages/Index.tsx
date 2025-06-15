
import React, { useEffect } from 'react';
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

const Index = () => {
  // Reset scroll position when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <Contact />
      </main>
      <FloatingContactButton />
      <Footer />
    </div>
  );
};

export default Index;
