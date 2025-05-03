
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accountax-900/95 to-accountax-800 z-0">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-accountax-500/20 border border-accountax-400/30">
              <span className="inline-block w-2 h-2 rounded-full bg-accountax-400 mr-2"></span>
              <p className="text-sm font-medium text-accountax-100">Trusted by 500+ UK businesses</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Accountancy <span className="text-accountax-300">reimagined</span> for the modern business
            </h1>
            
            <p className="text-lg md:text-xl text-accountax-100 mb-8 max-w-xl">
              Highstreet Accountax provides bespoke accounting solutions with unmatched expertise and exceptional client service.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-accountax-500 hover:bg-accountax-600 text-white py-6 px-8 group transition-all duration-300">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-accountax-100/30 text-white hover:bg-white/10 py-6 px-8 transition-all duration-300">
                Our Services
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-accountax-500/30 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-accountax-400/20 rounded-full filter blur-3xl"></div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-semibold text-white">Expertise & Reliability</h3>
                  <span className="text-accountax-300">25+ years</span>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: "Client Satisfaction", value: "98%" },
                    { label: "Tax Returns Filed", value: "10,000+" },
                    { label: "Tax Saved for Clients", value: "£100M+" }
                  ].map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-accountax-100">{stat.label}</span>
                      <span className="text-white font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-center text-sm text-accountax-100 mt-2">"The most responsive accountants we've worked with"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
