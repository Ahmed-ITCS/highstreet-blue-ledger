
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-accountax-50 via-blue-50 to-accountax-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-accountax-50 opacity-20 transform rotate-12 translate-x-1/3 translate-y-1/4"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 bg-accountax-100 opacity-40 transform -rotate-12 translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-accountax-300 opacity-5 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accountax-400 opacity-5 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accountax-100 border border-accountax-200 animate-fade-in">
            <p className="text-sm font-medium text-accountax-700">Trusted by 500+ UK businesses</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accountax-900 mb-6 leading-tight">
            Financial Clarity for Your <span className="text-accountax-500 relative">
              Business Success
              <span className="absolute bottom-2 left-0 w-full h-2 bg-accountax-200 opacity-30 -z-10"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-accountax-700 mb-8 max-w-2xl">
            Highstreet Accountax provides expert accounting services tailored to help your business thrive in today's competitive landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-accountax-500 hover:bg-accountax-600 text-lg py-6 px-8 group transition-all duration-300 shadow-lg shadow-accountax-500/20 hover:shadow-xl hover:shadow-accountax-500/30">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-accountax-400 text-accountax-700 hover:bg-accountax-50 text-lg py-6 px-8 transition-all duration-300 hover:border-accountax-500">
              Explore Our Services
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center transition-transform hover:translate-y-[-2px]">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accountax-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="font-medium text-accountax-800">ICAEW Chartered Accountants</p>
              </div>
            </div>
            
            <div className="flex items-center transition-transform hover:translate-y-[-2px]">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accountax-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="font-medium text-accountax-800">25+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
