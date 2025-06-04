
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, BarChart3, LineChart, Activity } from "lucide-react";
import AnimatedElement from './AnimatedElement';

const Hero = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accountax-900/80 via-accountax-800/70 to-accountax-700/60 z-0">
        <div className="absolute inset-0 opacity-100 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 pattern-bg opacity-10"></div>
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accountax-500/10 rounded-full filter blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accountax-400/10 rounded-full filter blur-3xl animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <AnimatedElement type="slide-in-left" delay={0.2} className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-accountax-500/20 border border-accountax-400/30 backdrop-blur-sm shadow-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-accountax-400 mr-2 animate-pulse"></span>
              <p className="text-sm font-medium text-accountax-100">Trusted by 500+ UK businesses</p>
            </AnimatedElement>
            
            <AnimatedElement as="h1" type="reveal" delay={0.4} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-shadow">
              Accountancy <span className="gradient-text bg-gradient-to-r from-accountax-300 to-accountax-100">reimagined</span> for the modern business
            </AnimatedElement>
            
            <AnimatedElement type="slide-in-left" delay={0.6} className="w-24 h-1 bg-accountax-500 mb-6 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-white animate-shine"></div>
            </AnimatedElement>
            
            <AnimatedElement type="slide-in-right" delay={0.8} className="text-lg md:text-xl text-accountax-100 mb-8 max-w-xl">
              Highstreet Accountax provides bespoke accounting solutions with unmatched expertise and exceptional client service.
            </AnimatedElement>
            
            <AnimatedElement type="slide-in-bottom" delay={1.0} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="button-fancy group transition-all duration-300">
                <span className="relative z-10">Book a Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              <Button variant="outline" className="border-accountax-100/30 text-black hover:text-white hover:bg-white/10 py-6 px-8 transition-all duration-300 backdrop-blur">
                Our Services
              </Button>
            </AnimatedElement>
          </div>
          
          <div className="hidden lg:block">
            <AnimatedElement type="zoom-in" delay={0.6} className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-accountax-500/30 rounded-full filter blur-3xl animate-pulse-gentle"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-accountax-400/20 rounded-full filter blur-3xl animate-pulse-gentle" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-16 -left-16 w-32 h-32 border border-accountax-300/20 rounded-full animate-rotate opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-24 h-24 border border-accountax-300/20 rounded-full animate-rotate opacity-30" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              
              <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Expertise & Reliability</h3>
                    <div className="h-0.5 w-12 bg-accountax-500 mt-2 mb-1"></div>
                    <div className="h-0.5 w-16 bg-accountax-400"></div>
                  </div>
                  <div className="text-accountax-300 bg-accountax-900/50 py-1 px-3 rounded-full text-sm font-medium backdrop-blur-sm border border-accountax-700/50">8+ years</div>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: "Client Satisfaction", value: "98%", icon: <Activity size={16} className="text-accountax-400" />, delay: 0 },
                    { label: "Tax Returns Filed", value: "10,000+", icon: <BarChart3 size={16} className="text-accountax-400" />, delay: 0.3 },
                    { label: "Tax Saved for Clients", value: "£100M+", icon: <LineChart size={16} className="text-accountax-400" />, delay: 0.6 }
                  ].map((stat, index) => (
                    <AnimatedElement
                      key={index} 
                      type="slide-in-right"
                      delay={1 + stat.delay}
                      className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-accountax-100 flex items-center">
                        <span className="mr-2">{stat.icon}</span>
                        {stat.label}
                      </span>
                      <span className="text-white font-semibold animate-number-count">{stat.value}</span>
                    </AnimatedElement>
                  ))}
                </div>
                
                <AnimatedElement type="slide-in-bottom" delay={1.6} className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400 animate-pulse-gentle" style={{ animationDelay: `${i * 0.1}s` }}>
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <img src="/lovable-uploads/c61e23a0-1d76-4412-8400-554190f2dd5f.jpg" alt="Highstreet Accountax Logo" className="h-10 w-auto animate-fade-in" />
                  </div>
                  <p className="text-center text-sm text-accountax-100 mt-2">"The most responsive accountants we've worked with"</p>
                </AnimatedElement>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
